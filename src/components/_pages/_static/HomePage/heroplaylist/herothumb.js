export default function Herothumb() {
  return (
    <div className="text-white z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className="flex">
        <div className="w-1/2 lg:w-1/4">
          <img className="w-full" src="/static/images/thumb-1.jpg"></img>
        </div>
        <div className="w-full bg-red-700 bg-opacity-75 p-4">
          <a>
            <p className="mt-0 lg:mt-1 font-fulltime">
              ราชบุรี เปิดตัวแข้งใหม่ 3 ราย ลุยเลก 2
            </p>
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 lg:w-1/4">
          <img className="w-full" src="/static/images/thumb-1.jpg"></img>
        </div>
        <div className="w-full bg-red-700 bg-opacity-75 p-4">
          <a>
            <p className="mt-0 lg:mt-1 font-fulltime">
              ราชบุรี เปิดตัวแข้งใหม่ 3 ราย ลุยเลก 2
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
