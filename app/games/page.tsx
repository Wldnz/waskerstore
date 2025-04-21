"use client";
import ContainerGame from "@/components/ContainerGame";
import { useEffect, useState } from "react";

type Game = {
    id: number
    name: string
    publisher: string
    tips: string
    path: string
    url: string
    image_url: string
    isNew: boolean
};

export default function Games(){
    // const router = useRouter();
    // console.log(router.);
    const [games,setGames] = useState<Game[]>();
    useEffect(() => {
        const fetching = async() => {
            const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games`)).json();
            setGames(data);
        }
        fetching();
    },[])


    return(
        <div className="p-16">
            <h2 className="font-bold text-3xl">All Games</h2>
            <div className="flex items-center flex-wrap gap-7">
                {games? games.map((value,index) => <ContainerGame game={value} key={index}/>): <h2 className="font-bold ">Waittt......</h2> }
            </div>
        </div>
    )
}