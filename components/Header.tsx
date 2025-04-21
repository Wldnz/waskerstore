
"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

// const user = {
//     name : "Starfours_",
//     email : "starfours@gmail.com",
//     password : "0293847", // jangan diambil passwordnya ya (ketika fecthing data)!,
//     image : "/image_user.png",  
//     balance : {
//         credits : 2.000,
//         points : 0
//     }
// }
const Header = ({setShowNavigation} : {setShowNavigation : React.Dispatch<any>}) => {
    const [text,setText] = useState(""); 
    return( 
        <header className="w-full flex justify-between items-center p-3 py-6">
            <div className="w-full flex justify-between items-center gap-[130px]">
                <Link href={process.env.NEXT_PUBLIC_ROOT_URL as string} className="font-bold text-2xl"><span className="text-blue-500">Wasker</span>Store</Link>
                <SearchBar text={text} setText={setText} placeholder="Search Games..." showMobile={false} />
               
               <ChocolateMenu setShowNavigation={setShowNavigation} />
            </div>
        </header>
    )
}

function ChocolateMenu({setShowNavigation} : {setShowNavigation : any}){
    return(
        <button 
        onClick={() => setShowNavigation(true)}
        className="grid grid-rows-3 grid-cols-3 gap-1"
    >
        {Array.from({length : 9},(value,index) => (<div className="w-1.5 h-1.5 bg-white" key={index}></div>))}
    </button>
    )
}

export default Header;