import { NavLink } from "react-router-dom"
import { navbarData } from "src/data/navbarData"
import { v4 as uuidv4 } from 'uuid'
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from "react"


const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  useEffect(() => {
    console.log(mobileMenu)
  }, [mobileMenu])

  const manageMobileMenu = () => {
    setMobileMenu(mobileMenu => !mobileMenu)
  }

  return (
    <header className="fixed z-40 w-full flex justify-center">

      {/* main nav menu */}
      <nav className="w-full lg:w-auto border-lighterRaisinBlack border-b-[1px] lg:border-x-[1px] border-t-0">
        <div className={`sm:hidden flex justify-between py-5 px-7 w-full ${mobileMenu ? "" : "shadow-lg"}`}>
          <p className="text-whiteSmoke tracking-widest text-base">Moses Osuna</p>
          <button onClick={manageMobileMenu}><AiOutlineMenu color="#EEEEEE" size="22px" /></button>
        </div>
        <ul className="hidden sm:flex sm:justify-center list-none w-full shadow-lg">
          {navbarData.map((item) => {
            return (
              <li key={uuidv4()} className="flex flex-grow flex-shrink border-r-[1px] last:border-r-0 border-lighterRaisinBlack first:bg-lighterRaisinBlack">
                <NavLink to={item.path} className="py-4 lg:pl-7 lg:pr-[12vw] pl-5 transition-colors duration-500 text-whiteSmoke hover:text-hyundaiYellow">
                  <span className="tracking-widest text-base">{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* mobile menu */}
      <nav className={`w-full ${mobileMenu ? "sm:opacity-0 opacity-100" : "opacity-0"} transition-opacity delay-75 duration-500`}>
        <ul className={`${mobileMenu ? "absolute top-[65px] z-50 sm:hidden" : "top-[-100%]"} left-0 w-full flex flex-col justify-center transition-all duration-1000`}>
          {navbarData.map((item) => {
              return (
                <li key={uuidv4()} className="">
                  <NavLink to={item.path} className=" transition-colors duration-500 text-whiteSmoke hover:text-hyundaiYellow">
                    <span className="tracking-widest">{item.title}</span>
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