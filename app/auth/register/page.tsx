"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register(){
    const [isShow,setIsShow] = useState(false);
    const [isShow2,setIsShow2] = useState(false);
    return(
        <div className="mt-10 w-full min-h-full h-[80vh] flex justify-center items-center">
            <form className="min-w-80 w-96 p-3 flex flex-col  gap-2 bg-blue-900/40 rounded-xl">
                <h2 className="w-full text-center font-bold text-3xl">SIGN UP</h2>
                <div className="w-full flex gap-1 flex-col">
                    <label htmlFor="fullname">Full name : </label>
                    <input
                        className="w-[99%] p-2 text-black border-none rounded-sm outline-blue-500" 
                        id="fullname"
                        type="text" 
                        placeholder="John Dae"
                        required 
                        min="6"
                    />
                    <p className="hidden text-red-600">*</p>
                </div>
                <div className="w-full flex gap-1 flex-col">
                    <label htmlFor="email">Email : </label>
                    <input
                        className="w-[99%] p-2 text-black border-none rounded-sm outline-blue-500" 
                        id="email"
                        type="email" 
                        placeholder="example@gmail.com"
                        required 
                        min="6"
                    />
                    <p className="hidden text-red-600">*</p>
                </div>
                <div className="w-full flex gap-1 flex-col">
                    <label htmlFor="password">Password : </label>
                   <div className="w-full flex relative">
                        <input
                            className="w-[99%] p-2 text-black border-none rounded-l-sm outline-blue-500" 
                            id="password"
                            type={isShow? "text" : "password"}
                            placeholder="Password"
                            required 
                            minLength={8}
                        />
                        <Image
                            className="px-1 rounded-r-sm cursor-pointer absolute top-1 right-2 opacity-50"
                            src={`/ic_${isShow? "show" : "hide"}_pass.png`}
                            alt={isShow? "show" : "hide"}
                            width={40}
                            height={15}
                            onClick={() => setIsShow(prev => !prev)}
                        />
                   </div>
                    <p className="hidden text-red-600">*please provide the correct password*</p>
                </div>
                <div className="w-full flex gap-1 flex-col">
                    <label htmlFor="valid-password">Valid Password : </label>
                   <div className="w-full flex relative">
                        <input
                            className="w-[99%] p-2 text-black border-none rounded-l-sm outline-blue-500" 
                            id="valid-password"
                            type={isShow2? "text" : "password"}
                            placeholder="Password"
                            required 
                            minLength={8}
                        />
                        <Image
                            className="px-1 rounded-r-sm cursor-pointer absolute top-1 right-2 opacity-50"
                            src={`/ic_${isShow2? "show" : "hide"}_pass.png`}
                            alt={isShow2? "show" : "hide"}
                            width={40}
                            height={15}
                            onClick={() => setIsShow2(prev => !prev)}
                        />
                   </div>
                    <p className="hidden text-red-600">*please provide the correct password*</p>
                </div>
                <button className="mt-2 bg-white text-black/80 font-bold text-xl p-1.5 rounded-md shadow-inner hover:shadow-black" type="submit">SIGN UP</button>
                <Link 
                    className = "w-full text-center text-blue-600 underline"
                    href="/auth/login"
                >Have an account?</Link>
            </form>
        </div>
    )


}