import { NavLink } from "react-router-dom"
import Layout from "src/components/Layout"
import { v4 as uuidv4 } from 'uuid'

import { IconContext } from "react-icons"
import { BsCode } from "react-icons/bs"
import { HiCode } from "react-icons/hi"
import { TiDocumentText } from "react-icons/ti"
import { RiComputerLine } from "react-icons/ri"

import githubIcon from "assets/logos/githubLogo.svg"
import linkedInIcon from "assets/logos/linkedInLogo.svg"
import introCurvyLines from "assets/introCurvyLines.svg"

import { companyWebsiteSkills, skillsData } from "src/data/skillsData"

const Home = () => {
  return (
    <Layout>
      {/* intro background */}
      <img src={introCurvyLines} className="hidden sm:block absolute z-[-1] top-0 right-0" />

      <div className="pt-[65px] lg:pt-60" />

      {/* intro */}
      <div id="intro" className="px-4 lg:px-8 text-whiteSmoke">
        <div className="xl:max-w-7xl xl:mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-4 md:gap-6 max-w-2xl order-2 lg:order-1">
            <div className="flex justify-center sm:justify-normal items-center gap-2">
              <div className="h-px w-9 bg-bittersweet" />
              <h1 className="text-bittersweet pixelFont sm:text-3xl lg:text-4xl tracking-widest">Web Developer</h1>
              <div className="h-px w-9 bg-bittersweet" />
            </div>
            <div className="flex flex-col gap-12">
              <p className="text-4xl sm:text-5xl md:text-6xl curvyFont text-center sm:text-start">As a <span className="text-lighterHyundai font-medium">Front End Developer</span>, I enjoy creating responsive, user-friendly experiences while maintaining visually pleasing aesthetics.</p>
              <div className="flex justify-center sm:justify-normal gap-8">
                <a href="#portfolio" className="scroll-smooth"><button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-3 sm:p-4 w-fit transition-colors flex items-center"><span className="mr-4"><BsCode color="#F2F2F2" size="24" /></span>My Work</button></a>
                <button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-3 sm:p-4 w-fit transition-colors flex items-center scale-90 sm:scale-100"><span className="mr-4"><TiDocumentText color="#F2F2F2" size="24" /></span>Resume</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center order-1 lg:order-2 my-16 lg:my-0">
            <div className="flex lg:flex-col items-center gap-4">
              <div className="bg-darkerBittersweet w-10 sm:w-36 lg:w-2 h-2 lg:h-36 mb-2" />
              <NavLink to="https://github.com/Schrixx" target="_blank" data-tooltip="Github" className="md:tooltip"><img src={githubIcon} className="h-16 w-full" /></NavLink>
              <NavLink to="https://www.linkedin.com/in/moses-osuna-a7501b9a/" target="_blank" data-tooltip="LinkedIn" className="md:tooltip"><img src={linkedInIcon} className="h-16 w-full" /></NavLink>
              <div className="bg-darkerBittersweet w-10 sm:w-36 lg:w-2 h-2 lg:h-36 mb-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 sm:pt-52" />

      {/* skills */}
      <div id="skills" className="px-4 lg:px-8 xl:px-0 xl:max-w-7xl xl:mx-auto text-whiteSmoke flex flex-col gap-4">
        <p className="tracking-widest">The Skills and Tools That Bring My Work To Life</p>
        <ul className="flex flex-wrap gap-4">
          {skillsData.map((item) => {
            return (
              <li key={uuidv4()} className="flex items-center gap-2 bg-lighterRaisinBlack p-2 rounded-lg lg:hover:scale-105 transition-transform">
                <img src={item.icon} className="h-7 w-auto" />
                <p className="tracking-wide cursor-default">{item.title}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="pt-16 sm:pt-52" />

      {/* portfolio */}
      <div id="portfolio" className="px-4 lg:px-8 xl:px-0 xl:max-w-7xl xl:mx-auto text-whiteSmoke flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-semibold">
            Portfolio
          </h1>
          <p className="text-lighterHyundai">
            Check out my projects using video demonstrations, links to source code, and live websites.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/YgzISpOb-MY?si=BVB57nhSI7Bl63Zu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
          <div className="flex flex-col gap-4 max-w-lg">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">
                Responsive Company Website
              </h1>
              <div className="h-px w-16 bg-hyundaiYellow" />
            </div>
            <p className="text-base text-evenLighterRaisinBlack">
              This is a sample website made to replicate what an art company website may look like. 
              It includes a main landing page, an about page, an artwork page, and a contact page. 
              The layout and design was made by yours truly.
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Challenges</h1>
              <p className="text-base text-evenLighterRaisinBlack">
                The greatest challenge I faced was related to design and color palletes.
                Design and color used to be a limiting factor to my work, but I believe this website and my portfolio website is a testament to my improvement and ever-growing development.
              </p>
            </div>
            <h1 className="text-2xl font-semibold">Tech Used</h1>
            <ul className="flex flex-wrap gap-4">
              {companyWebsiteSkills.map((item) => {
                return (
                  <li key={uuidv4()} className="flex items-center gap-2 bg-lighterRaisinBlack p-1 rounded-lg lg:hover:scale-105 transition-transform">
                    <img src={item.icon} className="h-5 w-auto" />
                    <p className="tracking-wide cursor-default text-lg">{item.title}</p>
                  </li>
                )
              })}
            </ul>
            <IconContext.Provider value={{color: "#DF4445"}}>
              <div className="flex gap-4 items-center">
                <NavLink to="https://github.com/Schrixx/Company-Website" target="_blank" className="pt-2 tooltip" data-tooltip="Source Code"><button><HiCode size="36" /></button></NavLink>
                <NavLink to="https://landing-page-schrixx.vercel.app/" target="_blank" className="pt-2 tooltip" data-tooltip="Live Website"><button><RiComputerLine size="36" /></button></NavLink>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <div className="pt-16 sm:pt-52" />
    </Layout>
  )
}

export default Home
