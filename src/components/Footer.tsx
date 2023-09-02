import { IconContext } from "react-icons"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { navbarData } from "src/data/navbarData"

const Footer = () => {
    return (
      <>
        <div className="flex flex-col gap-8 justify-center items-center py-12 text-evenLighterRaisinBlack max-w-7xl mx-auto">
        <ul className="flex flex-wrap gap-4">
          {navbarData.map((item) => {
            return (
              <li>
                <a href={item.path} className="hover:text-whiteSmoke transition-colors duration-500 text-base sm:text-xl">{item.title}</a>
              </li>
            )
          })}
        </ul>
        <div>
          <IconContext.Provider value={{color: "#8E818E", size: "30"}}>
            <div className="flex justify-center gap-8">
              <NavLink to="https://github.com/Schrixx" target="_blank" className="lg:hover:scale-105 transition-transform"><BsGithub /></NavLink>
              <NavLink to="https://www.linkedin.com/in/moses-osuna-a7501b9a/" target="_blank" className="lg:hover:scale-105 transition-transform"><BsLinkedin /></NavLink>
            </div>
          </IconContext.Provider>
        </div>
        <p className="text-base sm:text-xl">Website Made By: Moses Osuna</p>
      </div>
    </>
    )
  }
  
export default Footer