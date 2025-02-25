import { BaseTransactionResponse } from "@/model/Model";
import sendPost from "./sendPost";


type SuccessTransactionResponse = BaseTransactionResponse & {
    transaction_status: "capture" | "settlement";
    fraud_status?: "accept" | "challenge" | "deny"; // Hanya untuk credit card
};

type PendingTransactionResponse = BaseTransactionResponse & {
    transaction_status: "pending";
    
};

type ErrorTransactionResponse = BaseTransactionResponse & {
    transaction_status: "failure" | "deny" | "expire" | "cancel";
};
  

  

export default function payUsingToken(token :string){
    window.snap.pay(token,{
        onSuccess : async(result : SuccessTransactionResponse) => {
            await handleResponse(result);
            location.href = `${process.env.NEXT_PUBLIC_ROOT_URL}/order/${result.order_id}`;
        },
        onPending : async(result : PendingTransactionResponse) => {
            await handleResponse(result);
            location.href = `${process.env.NEXT_PUBLIC_ROOT_URL}/order/${result.order_id}`;
        },
        onError : async(result : ErrorTransactionResponse) => {
            await handleResponse(result);
            location.href = `${process.env.NEXT_PUBLIC_ROOT_URL}/order/${result.order_id}`;
        },
        onClose : () => {
            location.href = `${process.env.ROOT_URL}/order`;
        }
    });
}

const handleResponse = async(result : BaseTransactionResponse) => {;
    console.log(result);
    console.log("status : " + result.transaction_status)
    try{
        const data = await sendPost("/transaction",result);
    }catch(error){
        console.log("snap token error : \n" + error);
    }
}


