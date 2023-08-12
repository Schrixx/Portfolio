import { NavLink } from "react-router-dom"
import { navbarData } from "src/data/navbarData"
import { v4 as uuidv4 } from 'uuid'


const Navbar = () => {
  return (
    <header className="fixed top-0 left-2/4 z-50 max-w-7xl">
      <nav className="">
        <ul className="flex list-none w-full">
          {navbarData.map((item) => {
            return (
              <li key={uuidv4()} className="flex">
                <div className="h-full w-px bg-hover" />
                <NavLink to={item.path} className="py-5 pl-7 pr-[15vw] decoration transition-colors duration-700 text-darkenedWhite hover:text-creamYellow">
                  <span className="">{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar