import Layout from "src/components/Layout"

import { BsCode } from "react-icons/bs"
import { TiDocumentText } from "react-icons/ti"

import githubLogo from "assets/githubLogo.svg"
import linkedInLogo from "assets/linkedInLogo.svg"
import introCurvyLines from "assets/introCurvyLines.svg"

import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <Layout>
      {/* intro background */}
      <img src={introCurvyLines} className="hidden md:block absolute z-[-1] top-0 right-0" />

      {/* nav spacer */}
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
                <button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-3 sm:p-4 w-fit transition-colors flex items-center"><span className="mr-4"><BsCode color="#F2F2F2" size="24" /></span>My Work</button>
                <button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-3 sm:p-4 w-fit transition-colors flex items-center scale-90 sm:scale-100"><span className="mr-4"><TiDocumentText color="#F2F2F2" size="24" /></span>Resume</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center order-1 lg:order-2 my-16 lg:my-0">
            <div className="flex lg:flex-col items-center gap-4">
              <div className="bg-darkerBittersweet w-10 sm:w-36 lg:w-2 h-2 lg:h-36 mb-2" />
              <NavLink to="https://github.com/Schrixx" target="_blank" data-tooltip="Github" className="md:tooltip"><img src={githubLogo} className="h-16 w-full" /></NavLink>
              <NavLink to="https://www.linkedin.com/in/moses-osuna-a7501b9a/" target="_blank" data-tooltip="LinkedIn" className="md:tooltip"><img src={linkedInLogo} className="h-16 w-full" /></NavLink>
              <div className="bg-darkerBittersweet w-10 sm:w-36 lg:w-2 h-2 lg:h-36 mb-2" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
