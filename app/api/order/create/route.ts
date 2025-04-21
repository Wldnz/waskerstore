//@ts-ignore
import { CheckOrder } from "@/model/Model";
import { PrismaClient } from "@prisma/client";
import midtransClient from "midtrans-client";
import { json } from "stream/consumers";

type BodyProps = {
    order_id : string,
    orderedItem : CheckOrder
}


export async function POST(req : Request){
    const prisma = new PrismaClient();
    let snap = createSnap();
    try{
        const {order_id,orderedItem : order} : BodyProps = await req.json(); //{order_id,total_price,email}
        if(order == undefined || order.item == undefined || !order.email) return Response.json({ error: "please provide data!",isSuccess : false }, { status: 500 });
        let parameter = {
            transaction_details : {
                order_id : order_id,
                gross_amount : order.item.price
            },
            customer_details : {
                first_name : order.email.split("@")[0],
                last_name : "",
                email : order.email,
                phone : "",
            }
        }
        const transaction = await snap.createTransaction(parameter);
        // create data order
        await Promise.all([
            prisma.orders.create({data : {id : order_id, token : transaction.token, redirect_url : transaction.redirect_url, item_id : order.item.id,total_price : order.item.price}}),
            prisma.transactions.create({data : {id : `transaction-${new Date().getTime.toString()}`,id_user : 1,order_id,status : "pending",time : new Date().toISOString()}})
        ])
        const response = createSuccessResponse("Success Make Order",200,{order_id,token : transaction.token, total_price : order.item.price,redirect_url : transaction.redirect_url},true);
        return Response.json(response);
    }catch(error : any){
        console.log(error);
        return Response.json({ error: "Something Happened!",isSuccess : false }, { status: 500 });;
    }
}



type SuccessResponse = {
    message : string,
    status_code : number,
    transaction : {
        order_id : string,
        token : string,
        total_price : number,
        redirect_url : string
    },
    isSuccess : boolean
}


const createSuccessResponse = (
    message : string,
    status : number,
    {order_id,token,total_price,redirect_url} : {order_id : string,token : string,total_price : number,redirect_url : string}
    ,isSuccess : boolean) : SuccessResponse =>{
    return {
        message,
        status_code : status,
        transaction : {
            order_id,
            token,
            total_price,
            redirect_url,
        },
        isSuccess
    }
}

const createSnap = () => {
    return new midtransClient.Snap({
        isProduction : false,
        serverKey : process.env.SERVER_KEY
    });
}