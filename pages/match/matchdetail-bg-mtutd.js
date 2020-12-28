import Head from 'next/head'
import Header from '../../components/header/index'
import MatchDetails from '../../layout/matchDetail/index'
import Footer from '../../components/footer/index'

export default function MatchDetail() {
  return (
    <div>
      <Header></Header>
        <MatchDetails></MatchDetails>
        <div className="container mx-auto">
          <div className="w-full h-3 my-4 border-b-4 border-red-700 "></div>
        </div>
        <Footer></Footer>
    </div>
  )
}