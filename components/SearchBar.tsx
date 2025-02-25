
import Image from "next/image"


type props = {
    text : string
    placeholder : string
    showMobile?: boolean
    setText : React.SetStateAction<any>
}


const SearchBar = ({text,setText,placeholder,showMobile = true} : props) => {
    return(
        <div className={`h-10 ${showMobile? "flex" : "hidden"} md:flex gap-1 bg-[#303348] p-3 rounded-2xl ${text? "shadow-[0_0_15px_#586AEA]" : ""}`}>
            <Image 
                src="/ic_search.svg"
                alt=""
                width={30}
                height={30}
            />
            <input
                className={`outline-none border-none bg-transparent ${text? "w-[300px]" : "w-full "}`}  
                placeholder={placeholder} 
                id="search_games"
                value={text}
                onChange={e => setText(e.target.value as string)}
            />
            <Image 
                className={text? "block" : "hidden"}
                src="/ic_close.svg"
                alt=""
                width={30}
                height={30}
                onClick={() => setText("")}
            />
        </div>
    )
}

export default SearchBar;