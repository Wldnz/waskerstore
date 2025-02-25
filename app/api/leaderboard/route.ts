import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";


export async function GET(req : NextRequest){
    // const params = req.nextUrl.searchParams.get("")
    const prisma = new PrismaClient();

   try{
        const data = await prisma.user.findMany({
            orderBy : [
            {
                points : "desc"
            }
            ]
        });
        if(data) return Response.json({message : "succes finding user points from descending",data,isSuccess : true},{status : 200});
        return Response.json({message : "fail finding user points from descending",data,isSuccess : false},{status : 200});
   }catch(error){
        console.log("ada error di leaderboard" + error)
        return Response.json({message : "erorr!!!!",isSuccess : false},{status : 500});
   }
    

}