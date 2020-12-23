import Head from 'next/head'
import Header from '../components/header/index'
import Heroplaylist from '../layout/heroplaylist/index'
import FixedSidebar from '../layout/fixedSidebar/index'

export default function Home() {
  return (
    <div>
      <Header></Header>
        <div className="container mx-auto">
          <div className="flex flex-row">
            <FixedSidebar></FixedSidebar>
            <Heroplaylist></Heroplaylist>
          </div>
        </div>
    </div>
  )
}
