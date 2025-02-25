import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req : Request){
    const prisma = new PrismaClient();
    const formData = await req.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(formData);
    if(!email || !password) return createResponse("FAILED WHEN VERIFIED DATA",201);
    const user = await prisma.user.findFirst({
        where : {
            email : email as string,
            password : password as string
        }
    });

    if(!user) return createResponse("FAILED WHEN VERIFIED DATA",404);
    redirect(process.env.NEXT_PUBLIC_ROOT_URL as string);
    return createResponse("VERIFIED DATA SUCCESSS!!!!",200);
}


const createResponse = (
    message : any,
    status : number,
    data? : any
) => {
    return NextResponse.json({message, data : data? data : ""}, {status})
}