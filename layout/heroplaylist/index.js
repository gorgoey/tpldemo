export default function Heroplaylist() {
    return (
        <div className="heroplaylist pt-20 pb-20 flex w-full relative">
            <embed className="absolute w-screen top-0 -right-1/4"  type="image/svg+xml"  src="./pattean.svg"  />
            <div className="flex shadow-lg z-10">
                <div className="w-1/2 overflow-hidden">
                    <a className="block transform transition-all duration-1000 hover:scale-110">
                        <img className="w-full" src="./heroplaylist-image.jpg" ></img>
                    </a>
                </div>
                <div className="heroPlaylist-caption  w-1/2 bg-red-700 bg-opacity-75 text-white p-6 ">
                    <span className="hero-playlist__thumbnail-tag text-xs">Feature</span>
                    <h1 className="hero-playlist__thumbnail-title font-headline text-4xl mt-4 mb-6">
                        <a>บีจียืนยันปล่อยยืม 'โตติ' ซบสมุทรปราการ</a>
                    </h1>
                    <p className="text-md">บีจี ปทุม ยูไนเต็ด ยืนยันการปล่อย ดาเนียล การ์เซีย โรดริเกวซ หรือ โตติ ไปร่วมทัพสมุทรปราการ ซิตี้ ด้วยสัญญายืมตัว</p>
                </div>
            </div>
        </div>
    )
}