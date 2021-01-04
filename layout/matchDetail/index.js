import Image from 'next/image' 

export default function MatchDetails() { 
    return (
    <div className="mx-auto relative overflow-hidden">
        <div className="bg-picture absolute -top-60">
            <Image className=" w-screen" quality={100} src="/leostadium.jpg" layout="fill" width={1920} height={1200}></Image>
        </div>
        <div className="container mx-auto md:pt-10">
            <div className="match-bar flex flex-wrap md:flex-nowrap bg-red-700 bg-opacity-80 py-2 text-white relative z-10 w-full mb-96 font-halftime">
                <div className="matchDate mx-3">วัน<span>เสาร์ 26 ธันวาคม 2020</span></div>
                <div className="matchStadium flex items-center mx-1"><img className="mx-1 w-6" src="/match/icon-stadium.svg"></img>สนาม<span>ลีโอ สเตเดี้ยม , ปทุมธานี</span></div>
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
                            <div className="name-full hidden md:block sm:text-md md:text-lg lg:text-3xl">BG PATHUM UNITED</div>
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
                            <div className="name-full hidden md:block sm:text-md md:text-lg lg:text-3xl">SCG MUANGTHONG UNITED</div>
                            <div className="name-short md:hidden text-2xl">MTUTD</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="matchStats container font-halftime mx-auto">
                <div className="matchStats halftime text-center mt-5 ">
                    <span> Half Time :</span>  3 - 3 
                </div>
                <div className="matchStats halftime text-center mb-5">
                    <span> kick - off :</span>  19:00 
                </div>

                <div className="flex justify-center ">
                    <div className="matchStats relative w-1/8 text-sm sm:text-sm home pr-1 md:pr-4">
                        <div className="flex items-center"><span  className="mx-2">Diogo Luis Santo</span> 6', 30' <div className="mx-2"><img className="w-4" src="/match/ball.svg"></img></div> </div>
                        <div className="flex items-center"><span className="mx-2">ธีรศิลป์ แดงดา</span> 10', 90' <div className="mx-2"><img  className="w-4" src="/match/ball.svg"></img></div></div>
                    </div>
                    <div className="matchStats relative w-1/8 text-sm sm:text away pl-1 md:pl-4">
                        <div className="flex items-center"><div className="mx-2"><img className="w-4" src="/match/ball.svg"></img></div> <span className="mx-2">พิชา อุทา</span> 7' , 13 , 60 </div>
                        <div className="flex items-center"><div className="mx-2"><img className="w-4" src="/match/ball.svg"></img></div> <span className="mx-2">พิชา อุทา</span> 7' , 13 , 60 </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    ) 
}
    