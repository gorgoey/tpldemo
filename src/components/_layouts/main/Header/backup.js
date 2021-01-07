import Link from '@link'
import { getStatic } from '@lib/static'

function Hamburger() {
  return <div>Menu</div>
}

function Search() {
  return <div>Search</div>
}

function Logo() {
  return (
    <div>
      <Link route="home">
        <img className="h-8" src={getStatic('icons/logo-sanook.svg')} />
      </Link>
    </div>
  )
}

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-light h-12 py-2">
      <Hamburger />
      <Logo />
      <Search />
    </header>
  )
}
