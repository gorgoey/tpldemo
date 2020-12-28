import Image from 'next/image'

export default function MatchDetails() {
    return (
        <div className="mx-auto relative">
            <div className="bg-picture absolute">
                <Image className=" w-screen" quality={100} src="/leostadium.jpg" layout="fill" width={1920} height={1200} ></Image>
            </div>
            <div className="container mx-auto md:pt-10">
                <div className="match-bar bg-red-700 py-2 text-white flex relative z-10 w-full mb-96 font-halftime">
                    <div className="matchDate mx-3">วัน<span>เสาร์ 26 ธันวาคม 2020</span></div>
                    <div className="matchStadium mx-1">สนาม<span>ลีโอ สเตเดี้ยม , ปทุมธานี</span></div>
                </div>
                <div className="matchTimeContainer z-10 relative text-white">
                    <div className="matchScores-wrapper">
                        <div className="matchScores-logo flex flex-wrap justify-center">
                            <Image className=" bg-gray-200 mx-auto" quality={100} src="/toyota-thai-league-logo.svg"  width={215} height={60} ></Image>
                        </div>
                        <div className="matchScores-score flex">
                            <div className="matchScores-home flex items-center w-1/2">
                                <div className="matchScores-home logo">
                                    <img src="/match/bgpu.png"></img>
                                </div>
                                <div className="bg-red-700 text-center h-full flex items-center justify-center font-halftime  w-full ">
                                    <div className="name-full hidden md:block text-4xl">BG PATHUM UNITED</div>
                                    <div className="name-short md:hidden">BGPU</div>
                                </div>
                            </div>

                            <div className="matchScores-bar w-1/5 bg-gray-300 font-fulltime grid grid-cols-3  text-black">
                                <div className="matchScores-bar-home flex justify-center items-center  text-6xl">
                                    4
                                </div>
                                <div className="matchScores-bar-logo flex justify-center items-center text-6xl">
                                    -
                                </div>
                                <div className="matchScores-bar-away flex justify-center items-center text-6xl">
                                    4
                                </div>
                            </div>

                            <div className="matchScores-away flex flex-row-reverse items-center w-1/2">
                                <div className="matchScores-away logo">
                                    <img src="/match/mtutd-away.png"></img>
                                </div>
                                <div className="bg-red-700 text-center h-full flex items-center justify-center font-halftime  w-full ">
                                    <div className="name-full hidden md:block text-4xl">SCG MUANGTHONG UNITED</div>
                                    <div className="name-short md:hidden">MTUTD</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}