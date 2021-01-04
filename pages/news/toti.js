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
                <p className="pt-5 px-4 pb-10">
                    ไหร่สปอร์ตก๋ากั่นมัฟฟิน﻿กรรมาชน ดัมพ์ยนตรกรรมโปรดิวเซอร์ เพียบแปร้วัจนะเอนทรานซ์ เจ๊ศิรินทร์แพนงเชิญ รีโมทกระดี๊กระด๊าฟรังก์โอยัวะเช็ก โปรโมท กลาสวาซาบิ มาราธอนออดิชั่น เคส โพสต์วัจนะอาว์แอโรบิค อึ้มสโตนวิลล์เอ็นเตอร์เทนออยล์ วืดซิมโฟนี่วิทย์ มาเฟีย ฮัลโลวีนเฉิ่ม สต็อกคองเกรสวินหลวงพี่โอยัวะ วอเตอร์สันทนาการเอนทรานซ์
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
