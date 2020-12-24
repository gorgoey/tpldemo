import Head from 'next/head'
import Header from '../components/header/index'
import Heroplaylist from '../layout/heroplaylist/index'
import Herothumb from '../layout/heroplaylist/herothumb'
import FixedSidebar from '../layout/fixedSidebar/index'
import LatestNews from '../layout/latestNews/index'
import HighlightVideo from '../layout/highlightVideo/index'

export default function Home() {
  return (
    <div>
      <Header></Header>
        <div className="container mx-auto">
          <div className="flex flex-row">
            <FixedSidebar></FixedSidebar>
            <div className="w-1/1">
              <Heroplaylist></Heroplaylist>
              <div className="z-11 relative">
                <LatestNews></LatestNews>
                <HighlightVideo></HighlightVideo>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
