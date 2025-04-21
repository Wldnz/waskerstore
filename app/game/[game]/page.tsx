"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { currentGame, Item,userID, CheckOrder } from "@/model/Model";
import checkUsername,{ api_url } from "@/utils/checkUsername";
import payUsingToken from "@/utils/payUsingToken";
import numberToCurrency from "@/utils/formatNumber";
import sendPost from "@/utils/sendPost";
  

interface interfaceUserId{userID : number,zoneID : number,name : string,found : boolean}


export default function Game(){
    const params = useParams();
    const [currentGame,setCurrentGame] = useState<currentGame>();
    const [category,setCategory] = useState<string>();
    const [items,setItems] =  useState<Item[]>([]);
    const [selectedItems,setSelectedItems] = useState<Item>();
    const [email,setEmail] = useState<string>("");
    const [userId,setUserId] = useState<userID>({userID : 0,zoneID : 0,name : "",found : false});



    useEffect(() =>{
        setCategory(currentGame?.category[0].name as string);
    },[currentGame])

    useEffect(() => {
        const categorys = currentGame?.category.filter(value => value.name === category);
        if(categorys == undefined || categorys?.length == 0) return;
        setItems(categorys[0].items);
    } ,[category])

    useEffect(() => {
        const fetching = async() => {
            const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game?game=${params.game}`)).json();
            console.log(`${process.env.NEXT_PUBLIC_API_URL}api/game?game=${params.game}`);
            if(data.isSuccess)setCurrentGame(data);
        }
        fetching();
    },[])
    return(
        <>
            {currentGame?<div className="flex flex-col-reverse lg:flex-row gap-8 p-5">
            <aside className="flex flex-col gap-10">
                <div className="flex flex-col gap-2.5 bg-white/20 rounded-xl p-3">
                    <h2 className="font-bold text-xl my-3">Masukkan <span className="text-blue-500">Data Pengguna</span></h2>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div>
                            <input 
                                className="w-full lg:w-52 bg-transparent border-[#586AEA] border-2 rounded-lg p-2 outline-blue-600"
                                placeholder="Masukkan user id"
                                type="number"
                                onChange={({target}) => setUserId((prev : any) => ({...prev,...{userID : target.value}}) )}
                            />
                        </div>
                        {api_url.filter(value => value.path == currentGame.path)[0].params.length > 1 && <div className={`relative`}>
                            <input 
                                className="w-full lg:w-40 bg-transparent border-[#586AEA] border-2 rounded-lg p-2 px-5 outline-blue-600 text-center"
                                placeholder="Zona ID"
                                type="number"
                                onChange={({target}) => setUserId((prev : any) => ({...prev,...{zoneID : target.value}}) )}
                            />
                           <div className="absolute top-[-1.5px] left-0 w-full h-full text-xl -z-10">
                                <div className="w-full lg:w-40 h-full flex justify-between items-center px-2">
                                    <p>(</p>
                                    <p>)</p>
                                </div>
                           </div>
                        </div>}
                        
                        <button className="h-10 bg-blue-800/70 px-6 rounded-lg font-semibold italic"
                        onClick={() => {checkUsername(currentGame,userId,setUserId);}}
                        >Cari</button>
                    </div>
                    <div className="w-max h-max">
                        {userId.userID? <p>Username : <span className={`${userId.found? "bg-green-500" : 'bg-red-500'} p-1 rounded-lg text-sm`}>{userId.name? userId.name : "Not Found"}</span></p> : <></>}
                    </div>
                    <p className="font-thin text-sm">{currentGame?.tips}</p>
                </div>

                <div className="bg-white/20 rounded-xl p-3">
                    <h2 className="font-bold text-xl my-3">Sesuaikan <span className="text-blue-500">Nomintal Anda</span></h2>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">Pilih Kategori</h3>
                        <div className="my-7 flex flex-wrap gap-6">
                           {currentGame?.category.map((value,index) => {
                            return (
                            <div 
                                className={`w-32 h-32 flex flex-col justify-evenly items-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/60 ${category === value.name? "border-2" : ""}`}
                                key={index + "s"}
                                onClick={() => setCategory(value.name)}
                            >
                                <Image
                                    src={value.image_url}
                                    alt={`category-${value.name}`}
                                    width={80}
                                    height={80}
                                />
                                <p className="font-medium text-sm italic">{value.name}</p>
                            </div>
                            );
                           })}
                        </div>
                    </div>
                    <div className="flex flex-col  gap-4">
                        <h3 className="text-xl font-bold">Pilih Item</h3>
                        <div className="flex flex-wrap gap-4">
                            {items.map((value,index) => {
                                return (
                                    <div 
                                        className={`relative w-[150px] bg-white/20 rounded-xl p-1.5 flex flex-col items-center
                                        cursor-pointer hover:bg-white/60 ${selectedItems?.id === value.id? "border-2" : ""}
                                        `}
                                        key={index+ "sas"}
                                        onClick={() => setSelectedItems(value)}
                                    >
                                        <div className="mt-4 font-bold">
                                            <p>{value.name}</p>
                                            {value.description? <p className="text-[10px] text-center font-reguler">({value.description})</p> : <></>}
                                        </div>
                                        <Image
                                            src={value.image_url}
                                            alt=""
                                            width={60}
                                            height={60}
                                        />
                                        <div className="w-full text-end flex flex-col gap-2">
                                            <p className="font-bold">{ numberToCurrency("id-ID",Math.floor(value.price - (value.price * (value.discount / 100))))}</p>
                                            {value.discount? 
                                                <div className="mt-1 flex justify-end gap-1.5 text-xs">
                                                    <p className="bg-green-500 p-.5 px-2 rounded-lg">{value.discount}%</p> 
                                                    <p className="line-through">{numberToCurrency("id-ID",value.price)}</p> 
                                                </div>
                                            : <></>}
                                            {/* gunakan ini jika ingin ada rewards! */}
                                            {/* {value.rewards.points?  <p className="text-sm">{value.rewards.points} Credits</p> : ""} */}
                                        </div>
                                    </div>);
                            })}
                        </div>
                    </div>
                </div>
                <form className="flex flex-col items-center gap-5 bg-white/20 p-5 rounded-xl" onSubmit={(e) => {
                    e.preventDefault();
                    if(checkOrder({item : selectedItems,email,isFound : userId.found})) handleOrderTransaction({item : selectedItems,email,isFound : userId.found});
                }}>
                    <h2 className="w-full font-bold text-xl italic">Email (Wajib) <span className="text-red-500">*</span> </h2>
                    <p>Masukkan alamat email untuk mendapatkan Coda Rewards sebesar 0.5% pada pembelian kamu. Kamu juga akan mendapatkan bukti pembayaran dan berhak untuk mendapatkan promosi.</p>
                  
                    <input 
                        className="w-full p-3.5 rounded-lg bg-transparen bg-transparent outline-blue-600 border-2"
                        placeholder="Masukkan Email Anda..."
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className={`w-full p-3.5 bg-blue-600 rounded-xl ${checkOrder({item : selectedItems,email : email,isFound : userId.found})? "" : "hidden"}`}>Bayar Sekarang</button>
                </form>
            </aside>
            <aside className="min-w-72 p-2 flex flex-col gap-10">
               <div className="flex flex-col gap-4 bg-white/20 rounded-xl p-3">
                <div className="flex items-center gap-4">
                        <Image
                            className="rounded-xl"
                            src={currentGame?.image_url as string}
                            alt=""
                            width={60}
                            height={60}
                        />
                        <div className="min-h-20 flex flex-col  text-xs gap-3">
                        <div className="flex gap-3 items-center">
                            <span className="w-max h-max bg-blue-900 rounded-md px-2">{category}</span>
                            <span className="text-gray-300">{currentGame?.publisher}</span>   
                        </div>
                            <h2 className="text-xl leading-6 font-bold">{currentGame?.name}</h2>
                        </div>
                </div>
                <p className="text-xs">{currentGame.tips}</p>
                <a
                    className="text-blue-400" 
                    href={currentGame?.url}
                    target="_blank"
                >
                    Halaman Website
                </a>
               </div>
               <div className="flex flex-col gap-2 bg-white/20 p-3 rounded-xl">
                    <h2 className="text-xl font-bold">Checkout</h2>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex justify-between">
                            <p className="font-semibold text-sm text-slate-300">Item</p>
                            <p className="font-bold text-sm">{selectedItems? selectedItems.name : "-"}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-sm text-slate-300">Total</p>
                            <p className="font-bold text-sm">{selectedItems? numberToCurrency("id-ID",selectedItems.price) : "-"}</p>
                        </div>
                    </div>
               </div>
            </aside>
        </div> : <h2 className="font-bold text-2xl">Sabar.... sedang fetching data...</h2>}
        </>
    )
   
}



function handleOrderTransaction(orderedItem : CheckOrder){
    const startTransaction = async(orderedItem : CheckOrder) => {
        try{
            const data = await sendPost("/order/create",{order_id : `order-${(new Date().getTime() * 1000).toString()}`,orderedItem});
            const responese = await data.json();
            if(responese.isSuccess)payUsingToken(responese.transaction.token);
            else console.log("Failed When Create Transaction\n" + responese.error );
        }catch(err){console.log(`There Something an Error \n${err}`)}
    }
    startTransaction(orderedItem);
}
 
function checkOrder(order : CheckOrder){
    if(!order.item|| !order.email || !order.isFound) return false;
    return true;
}

