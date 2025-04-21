import { PrismaClient } from "@prisma/client";

import { BaseTransactionResponse } from "@/model/Model";

export async function POST(req : Request){
    const prisma = new PrismaClient();
    const result : BaseTransactionResponse  = await req.json();
    const status  = result.transaction_status === "capture" || result.transaction_status === "settlement"? "success" : result.transaction_status
    try{
        const order = await checkOrder(prisma,result.order_id);
        if(order){
           await prisma.transactions.update({
                where : {order_id : result.order_id},
                data : {id : result.transaction_id,status,time : result.transaction_time}
           });
        }else{
            await prisma.transactions.create({
                data : {id : result.transaction_id,id_user : 1,order_id : result.order_id,status,time : result.transaction_time}
            });
        }
        return Response.json({messagce : "Success Creating Or Updating Transaction"},{status : 200})
    }catch(err){
        console.log("ada error\n" + err)
    } 
}

const checkOrder = async(prisma : PrismaClient,order_id : string) => {
    try{
        const order = await prisma.transactions.findFirst({
            where : {order_id : order_id}
        });
        if(order) return order;
        else return false
    }catch(err){
        console.log("ada error!");
        return false
    }
}