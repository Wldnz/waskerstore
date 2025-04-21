import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";
// import { BaseTransactionResponse } from "@/model/Model";


export async function GET(req : NextRequest){
    const prisma = new PrismaClient();
    const order_id = req.nextUrl.searchParams.get("order_id");
    if(!order_id) return Response.json({message : "please provide order id!",isSuccess : false}, {status : 404});
    // const url = `https://api.sandbox.midtrans.com/v2/${order_id}/status`;
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     authorization: process.env.AUTHORIZE_HEADER as string,
    //   }
    // };
    // const response  : BaseTransactionResponse = await (await fetch(url, options)).json();
    const transaction = await checkTransaction(prisma,order_id);
    console.log(transaction);
    return Response.json(transaction);
}

const checkTransaction = async(prisma : PrismaClient,id : string) => {
  try{
      const transaction = await prisma.transactions.findFirst({
          where : {order_id : id},
          include : {
            orders : {
              include : {
                items : true
              }
            }
          }
      });
      return transaction;
  }catch(err){
      console.log("ada error!");
      console.log(err);
      return false
  }
}