"use client";
import { usePathname } from "next/navigation";
export default function Vip(){
    const pathname = usePathname();
    return(
        // <h2>current path : {pathname}</h2>
        <div className="w-full flex justify-center items-center">
            <h2 className="font-bold w-full text-white text-center text-3xl">COMING SOON..........</h2>
        </div>
    )
}