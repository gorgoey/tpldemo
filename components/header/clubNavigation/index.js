
import { ClubsList } from './configClub'
import Image from 'next/image'

export default function ClubNavigation() {
    return (
        <div className="col-span-3 hidden md:block">
            <nav className="clubNavigation flex items-center px-5 w-full">
                <div className="clubSitesHeading">
                    <h4 className="font-halftime font-light text-xs white">
                        club site
                    </h4>
                </div>
                <ul className="flex">
                    {ClubsList.map(({imageXS,imageSM, image, url, name,  i}) => (
                        <li className="py-3 px-4" key={i}>
                            <a href={url}>
                                <div className="badge-xs md:hidden">
                                    <img src={imageXS} alt="xs"></img>
                                </div>
                                <div className="badge-sm transform transition-all hover:scale-150">
                                    {/* <img src={image} alt="sm"></img> */}
                                    <Image src={image} width="40" height="40"></Image>
                                </div>
                                <span className="hidden">{name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}