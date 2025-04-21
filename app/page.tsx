"use client";

import Banner from "@/components/Banner"
import ContainerGame from "@/components/ContainerGame";
import Image from "next/image"
import Link from "next/link";
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

export default function Home(){
    const [games,setGames] = useState<Game[]>()

    useEffect(() => {
        const fetching = async() => {
            const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games`)).json();
            setGames(data);
        }
        fetching();
    },[])

    return(
        <div className="flex flex-col gap-10 p-10">
            <Banner/>
            <div>
                <h2 className="font-bold text-3xl">Populer</h2>
                <div className="flex items-center gap-8">
                    {games? games.map((value,index) => <ContainerGame game={value} key={index}/>): <h2 className="font-bold ">Waittt......</h2> }
                </div>
            </div>
        </div>
    )
}
