"use client"
import Navigation from "@/components/Navigation";
import payUsingToken from "@/utils/payUsingToken";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type props = {
   id : string,
   user_id : string,
   order_id : string,
   status : string,
   time : string,
   orders : {
    id : string,
    item_id : number,
    token : string,
    redirect_url : string,
    total_price : number,
    items : {
        id : number,
        category_id : number,
        name : string,
        description : string,
        price : number,
        discount : number,
        image_url : string,
    }
   }
  
  };
  

export default function ORDER_ID(){
    const {order_id} = useParams();
    const [isFound,setIsFound] = useState(false);
    const [transaction,setTransaction] = useState<props>();
    useEffect(() => {
        const check_orderID = async () => {
          try {
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/check?order_id=${order_id}`);
            
            const data : props = await result.json();
            console.log(data)
            setIsFound(data.status? true : true);
            setTransaction(data);
          } catch (err) {
            console.log(err);
          }
        };
        check_orderID();
    } ,[order_id])

    return(
        <div className="my-5 w-full flex flex-col items-center">{isFound && transaction?
           <div className="w-96 bg-white/30 flex flex-col p-2 rounded-lg">
               <div className="text-center border-b-2 flex flex-col items-center justify-center gap-2">
                    <div className="mt-3 relative after:content-['*'] after:absolute after:w-10 after:h-10 after:top-2 after:left-2 after:bg-white after:rounded-full after:-z-10">
                        <Image src={transaction.status === "settlement" || transaction.status === "capture" || transaction.status === "success"? "/ic_success.png" : `/ic_${transaction.status}.png`} width={60} height={60} alt=""/>
                    </div>
                    <div>
                        <h2 className="font-reguler text-lg leading-3">Transaction</h2>
                        <h2 className="mt-1 font-reguler text-lg capitalize">{transaction.status}</h2>
                    </div>
               </div>
               <div className="mt-5 px-5 flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <Image 
                            className="w-full h-40 object-cover rounded-sm"
                            src="/banner/background.png" width={300} height={20} alt=""
                        />
                    </div>
                    <div className="flex justify-between border-b-white border-b-2">
                        <p className="font-sm text-sm">ID Transaction: </p>
                        <p className="font-sm text-sm">{order_id}</p>
                    </div>
                    <div className="flex justify-between border-b-white border-b-2">
                        <p className="font-sm text-sm">Total Price  : </p>
                        <p className="font-sm text-sm">IDR {transaction.orders.total_price}</p>
                    </div>
                    <div className="flex justify-between border-b-white border-b-2">
                        <p className="font-sm text-sm">Item : </p>
                        <p className="font-sm text-sm">{transaction.orders.items.name}</p>
                    </div>
                    {transaction.status === "pending"? 
                        <button className="bg-indigo-800 rounded-lg p-2 hover:bg-indigo-500" onClick={() => payUsingToken(transaction.orders.token)}>Bayar</button> 
                       :<button className="bg-indigo-800 rounded-lg p-2 hover:bg-indigo-500" onClick={() => history.back()}>Back</button>
                    }
                    
               </div>
            </div> : (
                <>  
                <h2 className="font-bold text-2xl text-center">CANNOT FOUND ORDERED ID WITH <br/>"{order_id}"</h2>
                <button onClick={() => history.back()}>Kembali</button></>)}
        </div>
    )
}


function setTransactionStatusText(status_code : string){
   switch(status_code){
        case("200") : {
            return "success";
            break;
        }
        case("201") : {
            return "pending";
            break;
        }
        case("407") : {
            return "Failed";
            break;
        }
   }
}