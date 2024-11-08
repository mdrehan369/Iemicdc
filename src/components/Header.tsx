"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const pages = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about"
    },
    {
        name: "Speakers",
        path: "/speakers"
    },
    {
        name: "Committee",
        path: "/committee"
    },
    {
        name: "Call For Papers",
        path: "/papers"
    },
    // {
    //     name: "Important Dates",
    //     path: "/dates"
    // },
    // {
    //     name: "Submission",
    //     path: "/submissions"
    // },
    {
        name: "Registration",
        path: "/registrations"
    },
    {
        name: "Venue",
        path: "/venue"
    },
]

export const Header = () => {

    const [menu, setMenu] = useState(false)
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        setMenu(false)
    }, [pathName])

    return (
        <header className="w-full md:h-[14vh] h-[10vh] sticky z-50 bg-white top-0 left-0 flex items-center justify-between md:pl-[2vw] md:pr-[2vw] border-b-[2px]">
            <div className="flex items-center justify-start gap-8 animate-animate-appear">
                <div className="md:hidden ml-3 flex items-center justify-start gap-2">
                <Image src={'/images/logo.png'} width={40} height={40} alt="" className=" cursor-pointer md:h-auto h-[10vh] pt-2 object-fit w-auto" onClick={() => router.push("/")} />
                <h1 className="text-xl font-[1000]">IEM ICDC 2025</h1>
                </div>
                <Image src={'/images/iem-logo.png'} width={100} height={20} alt="" className=" cursor-pointer hidden md:block" onClick={() => window.open("https://iem.edu.in/", "__blank")}/>
                <Image src={'/images/uem-logo.png'} width={100} height={20} alt="" className=" cursor-pointer hidden md:block" onClick={() => window.open("https://uem.edu.in/uem-kolkata/", "__blank")} />
            </div>
            <Menu className="md:hidden mr-3 cursor-pointer" onClick={() => setMenu((prev) => !prev)} />
            <nav className={`md:w-fit w-full ${!menu  ? 'hidden' : 'block'} md:flex h-[100vh] md:h-[10vh] pt-6 transition-all duration-300 flex md:flex-row flex-col bg-white backdrop-blur-md md:relative absolute bg-opacity-80 md:top-0 top-[10vh] left-0 items-center animate-animate-appear md:justify-end overflow-hidden justify-start md:pt-0 gap-12 text-[1rem] font-[600] text-gray-600`}>
                {pages.map(page => (<div
                key={page.name}
                onClick={() => router.push(page.path)}
                className={`hover:text-primary transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 ${pathName === page.path ? 'after:w-full text-primary' : 'after:w-0'} after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full`}>
                    {page.name}
                </div>))}
            </nav>
        </header>
    )

}