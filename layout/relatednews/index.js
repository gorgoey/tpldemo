export default function RelatedNews() {
    return (
        <div className="relative">
            <div class="flex w-full items-center my-5 justify-between border-b-2 border-gray-200">
                <h2 class="font-headline text-2xl">ข่าวที่เกี่ยวข้อง</h2>
                <a class="font-halftime">ข่าวที่เกี่ยวข้อง <span class=""> &gt; </span></a>
            </div>
        <div>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="bg-white overflow-hidden">
                  <a className="block">
                      <div className="transform transition-all duration-1000 hover:scale-110">
                          <img src="/heroplaylist-image.jpg"></img>
                      </div>
                      <div>
                          <span className="font-halftime text-xs">feature</span>
                          <div className="font-fulltime text-lg">บีจียืนยันปล่อยยืม 'โตติ' ซบสมุทรปราการ</div>
                      </div>
                  </a>
              </div>
              <div className="bg-white overflow-hidden">
                  <a className="block">
                      <div className="transform transition-all duration-1000 hover:scale-110">
                          <img src="/thumb-1.jpg"></img>
                      </div>
                      <div>
                          <span className="font-halftime text-xs">feature</span>
                          <div className="font-fulltime text-lg">ราชบุรี เปิดตัวแข้งใหม่ 3 ราย ลุยเลก 2</div>
                      </div>
                  </a>
              </div>
              <div className="bg-white overflow-hidden">
                  <a className="block">
                      <div className="transform transition-all duration-1000 hover:scale-110">
                          <img src="/heroplaylist-image.jpg"></img>
                      </div>
                      <div>
                          <span className="font-halftime text-xs">feature</span>
                          <div className="font-fulltime text-lg">บีจียืนยันปล่อยยืม 'โตติ' ซบสมุทรปราการ</div>
                      </div>
                  </a>
              </div>
              <div className="bg-white overflow-hidden">
                  <a className="block">
                      <div className="transform transition-all duration-1000 hover:scale-110">
                          <img src="/thumb-1.jpg"></img>
                      </div>
                      <div>
                          <span className="font-halftime text-xs">feature</span>
                          <div className="font-fulltime text-lg">ราชบุรี เปิดตัวแข้งใหม่ 3 ราย ลุยเลก 2</div>
                      </div>
                  </a>
              </div>
          </div>
        </div>
      </div>
    )
}