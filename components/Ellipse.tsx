import Colors from "@/Colors";

const Ellipse  = () : React.ReactElement => {
    
    return(
        <div className="w-full h-[80vh] md:h-[120vh] flex justify-center items-center absolute top-0 left-0 -z-10">
            <div 
            style={{backgroundColor : Colors.primaryShadow}}
            className={`w-[160px] h-[160px] rounded-full opacity-6 blur-[90px]`}></div>
        </div>
    )
}

export default Ellipse;