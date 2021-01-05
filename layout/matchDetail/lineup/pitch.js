import Image from 'next/image'

export default function Pitch() {
    return (
        <div className="w-full p-4">
           <div className="pitchContainer">
               <div className="pitch px-4 lg:px-10 my-4 lg:my-32">
                   <div className="home badge my-4 lg:my-10 flex flex-col text-center w-full"> 
                        <img className="w-14 mx-auto" src="/clubs/bgpu.png"></img>
                        <div className="font-halftime my-2"> บีจี ปทุม ยูไนเต็ด <span> 3-5-2</span></div>
                        <div className="w-1/6 mx-auto bg-blue-800 h-2"></div>
                   </div>
                   <div className="pitch-wrapper relative">
                        <Image layout="responsive" width={575} height={845} src="/lineup-pitch.jpg"></Image>
                        <div className="team home flex justify-between flex-col absolute px-2 py-4 top-0 left-0 right-0 h-1/2">
                            <div className="flex justify-between  text-center row-position">
                                <div className="pos bg-blue-800 text-white font-halftime">1</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-blue-800 text-white font-halftime">17</div>
                                <div className="pos bg-blue-800 text-white font-halftime">30</div>
                                <div className="pos bg-blue-800 text-white font-halftime">5</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-blue-800 text-white font-halftime">6</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-blue-800 text-white font-halftime">10</div>
                                <div className="pos bg-blue-800 text-white font-halftime">8</div>
                                <div className="pos bg-blue-800 text-white font-halftime">18</div>
                                <div className="pos bg-blue-800 text-white font-halftime">66</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-blue-800 text-white font-halftime">7</div>
                                <div className="pos bg-blue-800 text-white font-halftime">18</div>
                            </div>
                        </div>
                        <div className="team away flex justify-between flex-col-reverse absolute px-2 py-4 bottom-0 left-0 right-0 h-1/2">
                            <div className="flex justify-between  text-center row-position">
                                <div className="pos bg-red-700 text-white font-halftime">1</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-red-700 text-white font-halftime">5</div>
                                <div className="pos bg-red-700 text-white font-halftime">6</div>
                                <div className="pos bg-red-700 text-white font-halftime">25</div>
                                <div className="pos bg-red-700 text-white font-halftime">30</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-red-700 text-white font-halftime">18</div>
                                <div className="pos bg-red-700 text-white font-halftime">14</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                                <div className="pos bg-red-700 text-white font-halftime">19</div>
                                <div className="pos bg-red-700 text-white font-halftime">10</div>
                                <div className="pos bg-red-700 text-white font-halftime">37</div>
                            </div>
                            <div className="flex justify-between text-center row-position">
                               
                                <div className="pos bg-red-700 text-white font-halftime">87</div>
                               
                            </div>
                        </div>
                   </div>
                   <div className="away badge my-4 lg:my-10 flex flex-col-reverse text-center w-full"> 
                        <img className="w-14 mx-auto" src="/clubs/mtutd.png"></img>
                        <div className="font-halftime my-2"> เอสซีจี เมืองทอง ยูไนเต็ด <span> 4-2-3-1</span></div>
                        <div className="w-1/6 mx-auto bg-red-700 h-2"></div>
                   </div>
               </div>
           </div> 
        </div>
    )
}