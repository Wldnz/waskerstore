
const Midtrans = require ("midtrans-client");

export let snap = new Midtrans.Snap({
    isProduction : false,
    client_key : process.env.CLIENT_KEY,
    server_key : process.env.SERVER_KEY
});
