"use client"

import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { useState } from "react"


export default function Order(){
    const [orderID,setOrderID] = useState("");
    return(
       <div className="mt-10 ml-10 ">
        <h2>Halaman untuk mengecheck order id</h2>
         <div className="flex gap-4">
            <SearchBar text={orderID} setText={setOrderID} placeholder="masukkan order id"/>
            <Link href={`order/${orderID}`} className="font-bold text-lg bg-indigo-600 p-1.5     rounded-lg shadow-lg hover:shadow-indigo-600/20">Check Status</Link>
        </div>
       </div>
    )
}