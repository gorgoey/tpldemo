import { Page } from '@lib/page'
import { getStatic } from '@lib/static'

import * as metaConfig from './meta'

import styles from './HomePage.module.css'

import Heroplaylist from './heroplaylist'
import FixedSidebar from './fixedSidebar'
import Standing from './standing'

function Highlight({ data }) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="w-1/2 hidden xl:block">
            <FixedSidebar></FixedSidebar>
            <Standing></Standing>
          </div>
          <div className="w-full lg:w-full">
            <Heroplaylist></Heroplaylist>
            <div className="z-11 relative">
              {/* <HighlightVideo></HighlightVideo>
              <LatestNews></LatestNews> */}
            </div>
          </div>
        </div>
        <div className="w-full h-3 my-4 border-b-4 border-red-700 "></div>
      </div>
    </section>
  )
}

export default function HomePage({ highlightArticles }) {
  return (
    <Page metaConfig={metaConfig}>
      <div>
        <Highlight data={highlightArticles} />
      </div>
    </Page>
  )
}

HomePage.defaultProps = {
  highlightArticles: [
    {
      title:
        'พุ่งต่อเนื่อง 250 ราย! ศบค.รายงานพบผู้ติดเชื้อโควิด-19 ในประเทศ 241 ราย',
      thumbnail: getStatic('images/mock/article/thumbnail-lg.jpg'),
      channel: 'ข่าว',
      pubDate: '1 ชั่วโมงที่แล้ว',
    },
  ],
}
