import { useEffect } from "react";


const SnapScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "src","https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key",process.env.NEXT_PUBLIC_CLIENT_KEY!)
        script.async = true;
        document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
    },[]);
    return null;
}

export default SnapScript;