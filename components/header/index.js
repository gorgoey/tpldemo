import React, { useState } from 'react'
import ClubNavigation from './clubNavigation/index'
import Image from 'next/image'
export const MainMenu = [
    {
      name:'Thai League',
      url: ''
    },
    {
        name:'Video',
        url: ''
    },
    {
        name:'Communities',
        url: ''
    },
    {
        name:'More',
        url: ''
    },
]
export default function Header() {
    const [open, setOpen] = useState(false)
    const mainMenuToggle = open ? 'block' : 'hidden'
    const closeIcon = open ? 'block' : 'hidden'
    const openIcon = open ? 'hidden' : 'block'

    return (
        <div className="header shadow bg-white z-20 relative">
            <div className="grid grid-flow-col grid-cols-1 md:grid-cols-4">
                <div className=" md:row-span-2 justify-items-center">
                    <div className="self-center justify-self-center h-full">
                        <a className="flex items-center justify-center w-32 p-2 md:h-full md:w-full">
                            <Image src="/TPLlogo.svg" layout="responsive" width={200} height={70}></Image>
                        </a>
                    </div>
                </div>
                <ClubNavigation></ClubNavigation>
                <div className={`${mainMenuToggle} MainMenu absolute  md:block bg-red-500 top-14 md:relative md:top-0 col-span-3 w-full bg-red-700`}>
                    <ul className="flex flex-col md:flex-row">
                        {MainMenu.map(({i , name})=>(
                            <li className="p-4" key={i}>
                                <a>
                                    <span className="text-white font-halftime">{name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex md:hidden bg-red-700">
                    <button className={`p-4 ${open}`} open={open} onClick={() => setOpen(!open)}>
                        <div>
                            <img className={`${openIcon}`} src="/icon-hamberger.svg"></img>
                            <img className={`${closeIcon}`} src="/icon-close.svg"></img>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}