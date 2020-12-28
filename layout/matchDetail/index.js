import Image from 'next/image' 

export default function MatchDetails() { 
    return (
    <div className="mx-auto relative overflow-hidden">
        <div className="bg-picture absolute -top-60">
            <Image className=" w-screen" quality={100} src="/leostadium.jpg" layout="fill" width={1920} height={1200}></Image>
        </div>
        <div className="container mx-auto md:pt-10">
            <div className="match-bar bg-red-700 py-2 text-white flex relative z-10 w-full mb-96 font-halftime">
                <div className="matchDate mx-3">วัน<span>เสาร์ 26 ธันวาคม 2020</span></div>
                <div className="matchStadium mx-1">สนาม<span>ลีโอ สเตเดี้ยม , ปทุมธานี</span></div>
            </div>
        </div>
        <div className="matchTimeContainer z-10 bg-red-900 py-10 px-4 lg:px-0 h-full bg-opacity-90 relative text-white bg">
            <div className="matchScores-wrapper container mx-auto relative z-10">
                <div className="matchScores-logo flex flex-wrap justify-center">
                    <Image className=" bg-gray-100 mx-auto" quality={100} src="/toyota-thai-league-logo.svg" width={215} height={60}></Image>
                </div>
                <div className="matchScores-score flex">
                    <div className="matchScores-home flex items-center w-1/2">
                        <div className="matchScores-home logo">
                            <img src="/match/bgpu.png" />
                        </div>
                        <div className="bg-red-700 text-center h-full flex items-center justify-center font-halftime  w-full ">
                            <div className="name-full hidden md:block md:text-lg lg:text-4xl">BG PATHUM UNITED</div>
                            <div className="name-short md:hidden text-2xl md:text-3xl lg:text-4xl xl:text-6xl">BGPU</div>
                        </div>
                    </div>
    
                    <div className="matchScores-bar w-1/5 bg-gray-200 font-fulltime grid grid-cols-3  text-black">
                        <div className="matchScores-bar-home flex justify-center items-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                            4
                        </div>
                        <div className="matchScores-bar-logo flex justify-center items-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                            -
                        </div>
                        <div className="matchScores-bar-away flex justify-center items-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                            4
                        </div>
                    </div>
    
                    <div className="matchScores-away flex flex-row-reverse items-center w-1/2">
                        <div className="matchScores-away logo">
                            <img src="/match/mtutd-away.png" />
                        </div>
                        <div className="bg-red-700 text-center h-full flex items-center justify-center font-halftime  w-full ">
                            <div className="name-full hidden md:block  md:text-lg lg:text-4xl">SCG MUANGTHONG UNITED</div>
                            <div className="name-short md:hidden text-2xl">MTUTD</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="matchStats container mx-auto">
                <div className="matchStats halftime text-center mt-5 ">
                    <span> Half Time :</span>  2 - 2 
                </div>
                <div className="matchStats halftime text-center mb-5">
                    <span> kick - off :</span>  19:00 
                </div>

                <div className="flex justify-between">
                    <div className="matchStats w-1/8  home">
                        <div>6',30' Diogo Luis Santo</div>
                        <div>10',90' ธีรศิลป์ แดงดา</div>
                    </div>
                    <div className="matchStats w-1/8 away">
                        <div>7' , 13 , 60 พิชา อุทา</div>
                        <div>10' Dealay</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    ) 
}
    