"use client"

import '@/app/globals.css';
import Ellipse from '@/components/Ellipse';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import {Poppins} from 'next/font/google';
import { useState } from 'react';

const poppins = Poppins({
    weight : '400',
    subsets : ["latin"]
})

const META = {
    title : "w",
}

export default function RootLayout({children} : Readonly<{children : React.ReactNode}>){
    const [showNavigation,setShowNavigation] = useState<boolean>(false);
    return (
        <html lang="en" className={poppins.className}>
            <head></head>
            <body className='w-ful'>
                <Header setShowNavigation={setShowNavigation}/>
                <Ellipse/>
                <div className='min-h-screen h-full flex relative'>
                    {children}
                    <Navigation setShowNavigation={setShowNavigation} showNavigation={showNavigation}/>   
                </div>
                <footer className='w-full min-h-36 flex flex-col justify-end p-3 px-10 shadow-[0_-1px_5px_#586AEA]'>
                    <div className='flex flex-wrap justify-between'>
                        <h2 className='text-4xl font-extrabold'><span className='text-blue-500'>Wasker</span>Store</h2>
                        <div className="flex flex-col">
                            <p className='text-gray-500'>Contact us</p>
                            <p className='font-reguler italic'>wildanofficial32@gmail.com</p>
                        </div>
                    </div>
                </footer>
                <script src='https://app.sandbox.midtrans.com/snap/snap.js' async={true} data-client-key={process.env.NEXT_PUBLIC_CLIENT_KEY}></script>
            </body>
        </html>
    )
}