"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";



type props = {
    title : string
    path : string,
    currentPath : string
    icon : string,
}

const tabList = [
    {
        title : "All Games",
        path : "/games",
        icon : "/ic_games.svg"
    },
    {
        title : "Leaderboard",
        path : "/leaderboard",
        icon : "/ic_leaderboard.svg"
    },
    {
        title : "Check Transaction",
        path : "/order",
        icon : "/ic_check_transaction.svg"
    },
    {
        title : "Vip Member",
        path : "/vip",
        icon : "/ic_vip.svg"
    },
]

const Navigation = ({setShowNavigation,showNavigation} : {setShowNavigation : React.Dispatch<any>, showNavigation : boolean}) => {
    const pathname = usePathname();
    return (
      <aside
        className={`w-full min-h-screen h-full ${
          showNavigation ? "flex" : "hidden"
        } justify-end
            fixed top-0 right-0 `}
      >
        <div className="w-full" onClick={() => setShowNavigation(false)}></div>
        <div className="min-h-screen h-full flex flex-col gap-4 px-5 bg-white/20">
          <div className="mt-28 w-full h-32 flex flex-col justify-center items-center gap-2 bg-red-">
            <div
              className="flex flex-col items-center gap-2"
              id="profile"
              onClick={() => setShowNavigation(true)}
            >
              <Image
                className="rounded-md"
                src="/default_user.png"
                alt="user-profile"
                width={30}
                height={30}
              />
              <p className="font-semibold italic">Anonymus</p>
            </div>
            <div className="hidden md:flex mr-2">
                <Link href="/auth/login" className="">
                  SIGN IN
                </Link>
                <span className="px-2">|</span>
                <Link href="/auth/register" className="">
                  SIGN UP
                </Link>
              </div>
            {/* <form className="flex gap-1" action="/logout.ts" method="POST">
              <Image
                className=""
                src="/ic_white_logout.png"
                width={20}
                height={20}
                alt="logout"
              />
              <button type="submit">Logout</button>
            </form> */}
          </div>
          <TabNavigationHome currentPath={pathname} />
          {tabList.map(({ title, path, icon }, index) => (
            <TabNavigation
              title={title}
              path={path}
              currentPath={pathname}
              icon={icon}
              key={index + "sx"}
            />
          ))}
        </div>
        <button
          className="font-bold text-3xl text-white absolute top-4 right-5"
          onClick={() => setShowNavigation(false)}
        >
          X
        </button>
      </aside>
    );
}


const TabNavigationHome = ({currentPath} : {currentPath : string}) => {
    return(
        <Link 
            className={`w-56 flex items-center gap-3 p-2 rounded-xl font-bold ${currentPath == "/"? "bg-white/20" : ""} `}
            href="/"
        >
            <Image
                src="/ic_home.svg"
                alt=""
                width={20}
                height={20}
            />
            <p className="text-lg font-thin">Home</p>
        </Link>
    )
}

const TabNavigation = ({title,path,currentPath,icon} : props) => {
    return(
        <Link 
            className={`w-56 flex items-center gap-3 p-2 rounded-xl font-bold ${currentPath.includes(path)? "bg-white/20" : ""} `}
            href={path}
        >
            <Image
                src={icon}
                alt=""
                width={20}
                height={20}
            />
            <p className="text-lg font-thin">{title}</p>
        </Link>
    )
}





export default Navigation;