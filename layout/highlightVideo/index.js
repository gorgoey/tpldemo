export default function HighlightVideo() {
    return (
        <div className="py-5">
            <div className="flex w-full items-center my-5 justify-between border-b-2 border-gray-200">
                <h2 className="font-headline text-2xl">ไฮไลท์ ล่าสุด</h2>
                <a className="font-halftime">ไฮไลท์ ล่าสุด <span className=""> > </span></a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full">
                    <div>
                        <a className="highlightVideo-thumb block w-full relative">
                            <div className="z-11 relative">
                                <img src="https://img.youtube.com/vi/0hNNlwiSoys/maxresdefault.jpg"></img>
                            </div>
                            <div className="z-11 relative p-5 min-h-8rem">
                                <span className="font-halftime text-white text-xs">Video</span>
                                <h1 className="font-fulltime text-xl text-white mt-2">ไฮไลท์แม็ตช์เดย์ 12 : บีจี ปทุม เปิดบ้าน เอาชนะ ชลบุรี 2 - 1</h1>
                                <p className="text-white my-1">
                                    พบกับลูกยิงสวยๆ ของ เจนรบ สำเภาดี และ สุมัญญา ปุริสาย
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="w-full bg-white overflow-hidden">
                            <a className="block transform transition-all duration-1000 hover:text-red-500">
                                <div className="">
                                    <img src="https://i.ytimg.com/vi/2nRn-SvoR68/maxresdefault.jpg"></img>
                                </div>
                                <div className="scale-100">
                                    <span className="font-halftime text-xs">Video</span>
                                    <div className="font-halftime text-lg">ไฮไลท์ ตราด เอฟซี พบกับ นครราชสีมา มาสด้า เอฟซี</div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full bg-white overflow-hidden">
                            <a className="block transform transition-all duration-1000 hover:text-red-500">
                                <div className="overflow-hidden ">
                                    <img src="https://img.youtube.com/vi/k3ylxEuEDvA/maxresdefault.jpg"></img>
                                </div>
                                <div>
                                    <span className="font-halftime text-xs">Video</span>
                                    <div className="font-halftime text-lg">ไฮไลท์ โปลิศ เทโร พบกับ ระยอง เอฟซี</div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full bg-white overflow-hidden">
                            <a className="block transform transition-all duration-1000 hover:text-red-500">
                                <div className="overflow-hidden">
                                    <img src="https://img.youtube.com/vi/tBHn3B4JQzA/maxresdefault.jpg"></img>
                                </div>
                                <div>
                                    <span className="font-halftime text-xs">Video</span>
                                    <div className="font-halftime text-lg">ไฮไลท์ การท่าเรือ เอฟซี พบกับ ราชบุรี มิตรผล</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}