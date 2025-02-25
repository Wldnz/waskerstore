import Image from "next/image";
import Link from "next/link";

type Game = {
    id: number
    name: string
    publisher: string
    tips: string
    path: string
    url: string
    image_url: string
    isNew: boolean
};


const ContainerGame = ({game} : {game : Game}) => {
    return(
        <Link 
            className="group mt-5 relative"
            href={`/game/${game.path}`}
        >
            <Image
                className="rounded-lg blur-[.5px]"
                src={game.image_url}
                alt=""
                width={180}
                height={180}
            />
            <div className="hidden w-full h-full items-center absolute top-0 left-0 bg-black/80 rounded-lg group-hover:flex cursor-pointer">
                <p className="w-full text-center font-semibold text-xl">{game.name}</p>
            </div>
            {game.isNew? <p className="w-max px-3 absolute top-[-10px] right-0 text-end font-semibold text-xl bg-blue-500/80 rounded-xl">New</p> : <></>}
        </Link>
    )
}
export default ContainerGame;