import { PrismaClient } from "@prisma/client";

export async function GET(){
    const prisma = new PrismaClient();
    const games = await prisma.games.findMany();
    return Response.json(games);
}