import Image from 'next/image'

export default function MatchDetails() {
    return (
        <div className="mx-auto">
            <div className="bg-picture relative">
                <Image className="absolute w-screen" quality={100} src="/leostadium.jpg" layout="fill" width={1920} height={600} minWidth={300} ></Image>
            </div>
        </div>
    )
}