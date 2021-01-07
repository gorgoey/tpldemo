import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children }) {
  return (
    <div className="">
      <Header />
      <div className="">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
