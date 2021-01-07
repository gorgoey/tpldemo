import Herothumb from './herothumb'

export default function Heroplaylist() {
  return (
    <div className="heroplaylist px-4 py-4 lg:px-0 lg:py-10 w-full relative">
      <img
        className="hero-bg"
        type="image/svg+xml"
        src="/static/images/hero-bg.svg"
      />
      <div className="flex flex-wrap  shadow-lg pb-10 z-12 relative">
        <div className="w-full lg:w-1/2 overflow-hidden">
          <a className="block transform transition-all duration-1000 hover:scale-110">
            <img
              className="w-full"
              src="/static/images/heroplaylist-image.jpg"></img>
          </a>
        </div>
        <div className="heroPlaylist-caption  w-full lg:w-1/2  bg-red-700 bg-opacity-90 text-white p-6 ">
          <span className="hero-playlist__thumbnail-tag text-xs">Feature</span>
          <h1 className="hero-playlist__thumbnail-title font-headline text-4xl mt-4 mb-6">
            <a>บีจียืนยันปล่อยยืม 'โตติ' ซบสมุทรปราการ</a>
          </h1>
          <p className="text-md">
            บีจี ปทุม ยูไนเต็ด ยืนยันการปล่อย ดาเนียล การ์เซีย โรดริเกวซ หรือ
            โตติ ไปร่วมทัพสมุทรปราการ ซิตี้ ด้วยสัญญายืมตัว
          </p>
        </div>
      </div>
      <Herothumb></Herothumb>
    </div>
  )
}
