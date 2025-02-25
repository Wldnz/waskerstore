"use client";
import ContainerGame from "@/components/ContainerGame";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";



// const listGames = [
//     {
//         name : "Mobile Legends: Bang Bang",
//         publisher : "Moonton",
//         action : "mobile-legends",
//         image : "https://cdn6.aptoide.com/imgs/9/d/2/9d250e67a2e1a55e8507511e24af05a7_icon.png",
//         isNew : false
//     },
//     {
//         name : "Free Fire",
//         publisher : "Garena",
//         action : "free-fire",
//         image : "https://i.pinimg.com/736x/c0/09/63/c00963ec1cb2e218118301cfd112ad29.jpg",
//         isNew : false
//     },
//     {
//         name : "Valorant",
//         publisher : "Riot Games",
//         action : "valorant",
//         image : "https://i.pinimg.com/474x/a4/00/33/a400333f7c9137ad1ebb9ded69755c48.jpg",
//         isNew : true
//     },
// ]

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