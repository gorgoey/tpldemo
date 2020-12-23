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
    return (
        <div className="header shadow">
            <div className="grid grid-flow-col">
                <div className="row-span-2 justify-items-center">
                    <div className="self-center justify-self-center h-full">
                        <a className="flex items-center justify-center h-full w-full">
                            <Image src="/TPLlogo.svg" width={200} height={70}></Image>
                        </a>
                    </div>
                </div>
                <ClubNavigation></ClubNavigation>
                <div className="MainMenu col-span-3 w-full bg-red-700">
                    <ul className="flex">
                        {MainMenu.map(({i , name})=>(
                            <li className="p-4" key={i}>
                                <a>
                                    <span className="text-white font-halftime">{name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}