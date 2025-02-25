

const numberToCurrency = (currency : string,number : number) => {
    return new Intl.NumberFormat(currency,{
        style : 'currency',
        currency : "IDR",
    }).format(number)
}

export default numberToCurrency;