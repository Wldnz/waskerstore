import Link from "next/link";

export default function NotFound(){
    return(
        <div className="w-full min-h-full h-[80vh] flex flex-col justify-center items-center gap-2 text-center">
            <h2 className="font-bold text-6xl text-white">(404) -  NOT FOUND</h2>
            <Link className="text-blue-600 text-2xl" href="/">Back?</Link>
        </div>
    );
}