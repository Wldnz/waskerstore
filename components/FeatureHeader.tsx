import Image from "next/image";

type props = {
    image : string,
    hasNotif : boolean
}

const FeatureHeader = ({image,hasNotif = false} : props) => {
    return(
         <div className="rounded-full p-1 bg-[#303348] relative cursor-pointer">
            <Image 
                className="rounded-md"
                src={image} 
                alt="user-profile" 
                width={22}
                height={22}
            />
            {hasNotif? <div className="w-1.5 h-1.5 bg-red-600 rounded-full absolute top-1 right-2"></div> : <></>}
        </div>
    )
};
export default FeatureHeader;