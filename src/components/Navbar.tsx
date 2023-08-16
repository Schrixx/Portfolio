import { NavLink } from "react-router-dom"
import { navbarData } from "src/data/navbarData"
import { v4 as uuidv4 } from 'uuid'
import { AiOutlineMenu } from 'react-icons/ai'
import { SlArrowRight } from "react-icons/sl"
import { useState } from "react"


const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const manageMobileMenu = () => {
    setMobileMenu(mobileMenu => !mobileMenu)
  }

  return (
    <header className={`fixed z-50 w-full flex flex-col justify-center`}>

      {/* main nav */}
      <nav className="w-full lg:w-auto border-lighterRaisinBlack border-b-[1px] lg:border-b-0 border-t-0">
        <div className={`sm:hidden flex justify-between py-5 px-7 w-full ${mobileMenu ? "" : "shadow-lg"} transition-shadow duration-500`}>
          <p className="text-whiteSmoke tracking-widest text-base">Moses Osuna</p>
          <button onClick={manageMobileMenu}><AiOutlineMenu color="#EEEEEE" size="22px" /></button>
        </div>
        <ul className="hidden sm:flex list-none w-full lg:max-w-fit lg:mx-auto shadow-lg lg:border-x-[1px] lg:border-b-[1px] border-lighterRaisinBlack">
          {navbarData.map((item: any) => {
            return (
              <li key={uuidv4()} className="flex flex-grow lg:flex-grow-0 first-letter:flex-shrink border-r-[1px] last:border-r-0 border-lighterRaisinBlack first:bg-lighterRaisinBlack">
                <NavLink to={item.path} className="p-4 lg:pl-7 lg:pr-[12vw] pl-5 transition-colors duration-500 text-whiteSmoke hover:text-hyundaiYellow">
                  <span className="tracking-widest text-base">{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* mobile menu */}
      <div className={`relative z-40 w-full bg-raisinBlack h-fit ${mobileMenu ? "sm:opacity-0 opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <nav className={`absolute ${mobileMenu ? 'sm:left-[-100%] top-0' : 'left-[-100%]'} left-0 bg-raisinBlack border-b-[1px] py-8 border-lighterRaisinBlack w-full transition-all duration-700 shadow-lg`}>
          <ul className="flex flex-col items-center w-full overflow-y-scroll">
            {navbarData.map((item: any) => {
                return (
                  <li key={uuidv4()} className="flex items-center w-full py-4">
                    <div className="h-px w-5 bg-hyundaiYellow" />
                    <NavLink to={item.path} onClick={manageMobileMenu} className="pl-4 py-4 w-full transition-colors duration-500 text-whiteSmoke hover:text-hyundaiYellow">
                      <span className="tracking-wider">{item.title}</span>
                    </NavLink>
                    <span className="pr-6"><SlArrowRight size="20px" color="#ECA72C" /></span>
                  </li>
                )
              })} 
          </ul>
        </nav>          
      </div>

    </header>
  )
}

export default Navbar