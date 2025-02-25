"use client";
import { usePathname } from "next/navigation";
export default function History(){
    const pathname = usePathname();
    return(
        <h2>current path : {pathname}</h2>
    )
}