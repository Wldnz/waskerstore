"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const typeMedal = ["gold","silver","bronze"];

interface User{
    id : number
    nama : string
    email : string
    credits : number
    points : number
    role : string
}


export default function Leaderboard(){
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetching = async() => {
            const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard`)).json();
            console.log(data);
            if(data.isSuccess) setUsers(data.data);
        }
        fetching();
    },[]);

    return(
        <div className="mt-10 w-full h-screen flex flex-col items-center gap-4">
            <h2 className="font-bold text-2xl text-white">Leaderboard</h2>
            {/* {users.map(value => (<h2>{value.nama}</h2>))} */}
            <div className="w-full flex flex-col items-center gap-2">
                {users.map((value : User,index : number) => {
                    return <UserCard name={value.nama} points={value.points} type={index < 3? typeMedal[index] : "" } key={index}/>
                })}
            </div>
        </div>
    )
}

const UserCard = ({name,points,type} : {name : string,points : number,type : string}) => {
 return (
   <div className="w-9/12 flex justify-between p-3 bg-white/20 rounded-lg">
     <h4 className="font-bold text-xl">{name}</h4>
     <div className="flex gap-3">
       <h4 className="font-bold text-xl">{points}</h4>
       <Image src={`/ic_${type}_medal.png`} width={30} height={30} alt="" />
     </div>
   </div>
 );
}