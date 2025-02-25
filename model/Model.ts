export type currentGame  = {
    id: number;
    name: string;
    publisher: string;
    tips: string;
    path: string;
    url: string;
    image_url: string;
    isNew: boolean;
    category : category[]
    isSucces: boolean;
};

export type category = {
    id: number
    name: string
    image_url: string
    games_id: number
    items: Item[]
}

export type Item = {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    image_url: string;
}
export type BaseTransactionResponse = {
    transaction_status: string;
    status_code: string;
    status_message: string;
    transaction_id: string;
    order_id: string;
    gross_amount: string;
    payment_type: string;
    transaction_time: string;
    va_numbers?: { bank: string; va_number: string }[]; // Untuk bank transfer
    permata_va_number?: string; // Untuk Permata VA
    actions?: { name: string; method: string; url: string }[]; // Untuk Gopay atau ShopeePay
};

export type CheckOrder = {
    item : Item | undefined
    email : string
    isFound : boolean
}


export type userID = {userID : number,zoneID : number,name : string,found :boolean};