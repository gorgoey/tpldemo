import Head from 'next/head'
import Header from '../../components/header/index'
import MatchDetails from '../../layout/matchDetail/index'
import Footer from '../../components/footer/index'
import RelatedNews from '../../layout/relatednews/index'
import MatchDetailContentLated from '../../layout/matchDetail/content'

export default function MatchDetail() {
  return (
    <div>
      <Header></Header>
        <div className="headerTitle h-62 overflow-hidden relative">
            <img className="absolute right-0 top-0 w-full" src="/hero-bg.svg"></img>
            <div className="container mx-auto">
                <div className="md:my-20 p-5 lg:p-0 z-11 relative">
                    <div className="text-white mb-5 text-sm">transfer</div>
                    <h1 className="text-white font-fulltime  text-lg lg:text-4xl">
                        บีจียืนยันปล่อยยืม 'โตติ' ซบสมุทรปราการ
                    </h1>
                    <div className="text-white my-3 text-sm">20/20/20 20:20</div>
                </div>
            </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full lg:px-10">
                <img className="w-full lg:-mt-6 z-10 relative" src="/heroplaylist-image.jpg"></img>
                <p className="pt-5 px-4 pb-10 text-xl">
                    จ่าฝูงไทยลีก ปล่อยดาวเตะชาวสเปน ไปร่วมทัพ เขี้ยวสมุทร เรียบร้อยช่วงเสกสองภายใต้สัญญายืมตัว
                </p>
                <p className="pt-2 px-4 pb-10 text-lg">
                    สโมสรบีจี ปทุม ยูไนเต็ด ทีมจ่าฝูงเลกแรกศึกโตโยต้า ไทยลีก ฤดูกาล 2020/21 ประกาศปล่อยตัว ดาเนี่ยล การ์เซีย โรดริเกวซ หรือว่า "โตติ" กองกลางชาวสเปนวัย 33 ปี ในการย้ายไปร่วมทีม สมุทรปราการ ซิตี้ ทีมร่วมลีก ด้วยสัญญายืมตัวในเลกที่สอง เรียบร้อยแล้ว
                </p>
                <p className="pt-2 px-4 pb-10 text-lg">
                    สำหรับ ดาเนี่ยล การ์เซีย โรดริเกวซ กองกลางวัย 33 ปี ย้ายมาเล่นฟุตบอลอาชีพในเมืองไทยครั้งแรกกับทัพ "เดอะ แรบบิท" ตั้งแต่ปี 2015 และเป็นหนึ่งในนักเตะที่ลงสนามรับใช้ต้นสังกัดเกิน 114 นัด
                </p>
                <p className="pt-2 px-4 pb-10 text-lg">
                โดยในฤดูกาล 2020 "โตติ" ลงสนามให้ บีจีพียู ไปทั้งหมด 12 นัด 967 นาที ยิงได้ 3 ประตู ซึ่งตลอด 6 ปี ที่รับใช้สโมสรบีจี ปทุม ยูไนเต็ด ลงสนามไปทั้งสิ้น 149 นัด ยิงได้ 31 ประตู รวมทุกรายการ
                </p>
            </div>
            <div className="w-1/3 px-4 hidden lg:block">
            </div>
          </div>
          <div className="w-full h-3 my-4 border-b-4 border-red-700 "></div>
          <RelatedNews></RelatedNews>
          <div className="w-full h-3 my-4 border-b-4 border-red-700 "></div>
        </div>
        <Footer></Footer>
    </div>
  )
}
