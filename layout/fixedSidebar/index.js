export default function FixedSidebar() {
    return (
        <div className="w-full">
            <nav className="fixedSlider pt-10 z-10 relative md:mx-5 lg:mx-20 shadow-xl">
                <div className="fixturesAbridgedHeader bg-white rounded-t p-5">
                    <header>
                        <div className="week font-halftime text-md text-center">Matchweek 1</div>
                        <div className="competition">
                            <div className="w-full my-2">
                                <img className="w-1/2 mx-auto" src="TPLlogo.svg"></img>
                            </div>
                            <span className="block text-lg font-halftime text-center">Toyota Thai League</span>
                        </div>
                    </header>
                </div>
                <div className="fixturesAbridgedContainer bg-white"> 
                    <div className="embeddableMatchSummary clubSidebarWidget">
                        <div className="fixturesAbridged matchListContainer"> 
                            <div className="day font-halftime text-md mb-2 px-2">
                                <div>Thursday 24 December</div>
                            </div>
                            <div className="matchDay">
                                <a className="block p-1 border-b-2 border-grey-400 hover:bg-red-700 hover:bg-opacity-500 hover:text-white">
                                    <div className="flex justify-between">
                                        <div className="flex text-md items-center px-2">
                                            <span className="teamName font-halftime text-sm">BGPU</span>
                                            <div className="badge px-1">
                                                <img src="./clubs/bgpu@x1.png"></img>
                                            </div>
                                            <span className="block p-1 timedate border border-grey-200 text-sm mx-2">19:30</span>
                                            <div className="badge px-1">
                                                <img src="./clubs/mtutd@x1.png"></img>
                                            </div>
                                            <span className="teamName font-halftime text-sm">MTUTD</span>
                                        </div>
                                        <div className="channel-badge">
                                            <img className="w-1/2" src="./ch/ch7@x2.png"></img>
                                        </div>
                                    </div>
                                </a>
                                <a className="block p-1 border-b-2 border-grey-400 hover:bg-red-700 hover:bg-opacity-500 hover:text-white">
                                    <div className="flex justify-between">
                                        <div className="flex text-md items-center px-2">
                                            <span className="teamName font-halftime text-sm">BUFC</span>
                                            <div className="badge px-1">
                                                <img src="./clubs/bufc@x1.png"></img>
                                            </div>
                                            <span className="block p-1 timedate border border-grey-200 mx-2 text-sm">20:00</span>
                                            <div className="badge px-1">
                                                <img src="./clubs/SPC@x1.png"></img>
                                            </div>
                                            <span className="teamName font-halftime text-sm">SPC</span>
                                        </div>
                                        <div className="channel-badge">
                                            <img className="w-1/2" src="./ch/mcot@x2.png"></img>
                                        </div>
                                    </div>
                                </a>
                                <a className="block p-1 border-b-2 border-grey-400 hover:bg-red-700 hover:bg-opacity-500 hover:text-white">
                                    <div className="flex justify-between">
                                        <div className="flex text-md items-center px-2">
                                            <span className="teamName font-halftime text-sm">PORT</span>
                                            <div className="badge px-1">
                                                <img src="./clubs/port@x1.png"></img>
                                            </div>
                                            <span className="block p-1 timedate border border-grey-200 text-sm mx-2">21:00</span>
                                            <div className="badge px-1">
                                                <img src="./clubs/btutd@x1.png"></img>
                                            </div>
                                            <span className="teamName font-halftime text-sm">BTUTD</span>
                                        </div>
                                        <div className="channel-badge">
                                            <img className="w-1/2" src="./ch/ch5@x2.png"></img>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center px-5 py-2 bg-white rounded-b">
                    <a className="btn widget-button font-halftime" href="/fixtures">
                        View All<span className="icn arrow-right"></span>
                    </a>
                </div>
            </nav>
        </div>
    )
}