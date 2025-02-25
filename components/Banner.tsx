
import Image from "next/image"
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({
    subsets : ["latin"]
});

const Banner = () => {
    return(
        <div className="flex w-full justify-center">
           <div className="relative w-max h-max">
                <img
                    className="min-w-96 w-[80vw] h-96 rounded-3xl object-cover"
                    src="/banner/background.png"
                    alt="banner"
                />
                <div
                    className="w-60 h-full bg-black/50 absolute top-0 left-0 rounded-l-3xl p-5 flex flex-col gap-4"
                >
                    <Image
                        className="mt-5"
                        src="/banner/ic_mlbb.png"
                        alt="mlbb"
                        width={100}
                        height={100}
                    />
                    <button 
                        className="w-max flex items-center gap-2 bg-blue-500 p-0.5 px-2 rounded-lg"
                        type="submit"
                    >
                        <Image
                            src="./ic_solar_circle.svg"
                            alt="mlbb"
                            width={18}
                            height={18}
                        />
                        Top up
                    </button>
                    <p className="text-sm font-semibold">Isi Diamond Mobile Legends</p>
                    <button 
                        className={`w-max flex items-center gap-2 bg-blue-500 text-3xl font-bold p-0.5 px-2 rounded-lg  ${space_grotesk.className}`}
                    >
                        Bonus S.D
                    </button>
                    <div className={`flex ${space_grotesk.className}`}>
                        <h2 className="text-8xl font-semibold">10</h2>
                        <div className="flex flex-col">
                            <h2 className="text-6xl">RB</h2>
                            <p className="text-sm font-semibold text-center">Diamonds</p>
                        </div>
                    </div>
                </div>
                <img
                    className="hidden md:block h-60 lg:h-80 absolute bottom-0 right-[-100px] md:saturate-100 hover:saturate-200"
                    src="/banner/character.png"
                    alt=""
                />
           </div>
        </div>
    );
}

export default Banner;
