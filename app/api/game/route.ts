import { PrismaClient } from "@prisma/client";
import next from "next";
import { NextRequest } from "next/server";

export async function GET(req : NextRequest){
    const params_game = req.nextUrl.searchParams.get("game");

    if(!params_game) return Response.json({isSuccess : "false"},{status : 404})

    const prisma =  new PrismaClient(); 


    const game = await prisma.games.findFirst({
        where : {
            path : params_game as string,
        },
        include : {
            category : {
                include : {
                    items : true,
                }
            }
        },
    });

    if(game){
        return Response.json({...game,isSuccess : true},{status : 200});
    }else{
        return Response.json({isSuccess : "false"},{status : 404})
    }
}