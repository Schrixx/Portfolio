import { useState } from "react"
import { NavLink } from "react-router-dom"

import Layout from "src/components/Layout"
import { RevealLeft, RevealRight, RevealStaggered, RevealVertical, RevealOpacity } from "src/components/RevealAnimations"

import { v4 as uuidv4 } from "uuid"

import { IconContext } from "react-icons"
import { BsCode } from "react-icons/bs"
import { HiCode } from "react-icons/hi"
import { RiComputerLine } from "react-icons/ri"
import { HiOutlineMail } from "react-icons/hi"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { TiDocumentText } from "react-icons/ti"

import backgroundLines1 from "assets/background/backgroundLines1.svg"
import circuit1 from "assets/background/circuit1.svg"
import circuit2 from "assets/background/circuit2.svg"
import circuit3 from "assets/background/circuit3.svg"
import circuit4 from "assets/background/circuit4.svg"
import backgroundLights from "assets/background/backgroundLights.svg"

import githubIcon from "assets/logos/githubLogo.svg"
import linkedInIcon from "assets/logos/linkedInLogo.svg"
import aboutIMG from "assets/portfolioImages/aboutIMG.jpg"
import violin from "assets/portfolioImages/violin.jpg"
import cactus from "assets/portfolioImages/cactus.jpg"

import { companyWebsiteSkills1, companyWebsiteSkills2, companyWebsiteSkills3, skillsData } from "src/data/skillsData"

const Home = () => {
  const [showAbout, setShowAbout] = useState<boolean>(false)

  const toggleAbout = () => {
    setShowAbout((showAbout) => !showAbout)
  }

  return (
    <Layout>
      <script src="https://web3forms.com/client/script.js" async defer></script>
      
      <img src={backgroundLines1} className="hidden md:block absolute z-[-1] top-0 right-0" />
      <img src={circuit1} className="hidden aboutScreen:block absolute z-[-1] top-[1250px] left-0" />
      <img src={circuit2} className="hidden aboutScreen:block absolute z-[-1] top-[2200px] right-0" />
      <img src={circuit3} className="hidden aboutScreen:block absolute z-[-1] top-[3200px] left-0" />
      <img src={circuit4} className="hidden aboutScreen:block absolute z-[-1] top-[4200px] right-0" />

      <div id="intro" className="pt-[65px] lg:pt-60" />

      {/* intro */}
      <div className="px-4 lg:px-8 text-whiteSmoke">
        <div className="xl:max-w-7xl xl:mx-auto flex flex-col lg:flex-row justify-between">
          <RevealLeft className="flex flex-col gap-4 md:gap-6 max-w-2xl order-2 lg:order-1">
            <div className="flex justify-center sm:justify-normal items-center gap-2">
              <div className="h-px w-9 bg-bittersweet" />
              <h1 className="text-bittersweet pixelFont sm:text-3xl lg:text-4xl tracking-widest">Web Developer</h1>
              <div className="h-px w-9 bg-bittersweet" />
            </div>
            <div className="flex flex-col gap-12">
              <p className="text-4xl sm:text-5xl md:text-6xl curvyFont text-center sm:text-start">As a <span className="text-lighterBittersweet font-medium">Front-End Developer</span>, I enjoy creating responsive, user-friendly experiences while maintaining visually pleasing aesthetics.</p>
              <div className="flex justify-center sm:justify-normal gap-8">
                <a href="#portfolio" className="scroll-smooth"><button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-3 sm:p-4 w-fit transition-colors flex items-center scale-90 sm:scale-100"><span className="mr-4"><BsCode color="#F2F2F2" size="24" /></span>My Work</button></a>
                <a href="/resume" target="__blank" className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-3 sm:p-4 w-fit transition-colors flex items-center scale-90 sm:scale-100"><span className="mr-4"><TiDocumentText color="#F2F2F2" size="24" /></span>Resume</a>
              </div>
            </div>
          </RevealLeft>
          <RevealRight className="flex justify-center items-center order-1 lg:order-2 my-16 lg:my-0">
            <div className="flex lg:flex-col items-center gap-4">
              <div className="bg-darkerBittersweet w-10 sm:w-36 lg:w-2 h-2 lg:h-36 mb-2" />
              <NavLink to="https://github.com/Schrixx" target="_blank" data-tooltip="Github" className="md:tooltip"><img src={githubIcon} className="h-16 w-full" /></NavLink>
              <NavLink to="https://www.linkedin.com/in/moses-osuna-a7501b9a/" target="_blank" data-tooltip="LinkedIn" className="md:tooltip"><img src={linkedInIcon} className="h-16 w-full" /></NavLink>
              <div className="bg-darkerBittersweet w-10 sm:w-36 lg:w-2 h-2 lg:h-36 mb-2" />
            </div>
          </RevealRight>
        </div>
      </div>

      <div id="skills" className="pt-36 sm:pt-52" />

      {/* skills */}
      <div id="skills" className="px-4 lg:px-8 xl:px-0 xl:max-w-7xl xl:mx-auto text-whiteSmoke flex flex-col gap-4">
        <RevealVertical><p className="tracking-widest">The Skills and Tools That Bring My Work To Life</p></RevealVertical>
        <ul className="flex flex-wrap gap-4">
          {skillsData.map((item, index) => {
            return (
              <RevealStaggered key={uuidv4()} index={index}>
                <li className="flex items-center gap-2 bg-lighterRaisinBlack p-2 rounded-lg lg:hover:scale-105 transition-transform">
                  <img src={item.icon} className="h-7 w-auto" />
                  <p className="tracking-wide cursor-default">{item.title}</p>
                </li>
              </RevealStaggered>
            )
          })}
        </ul>
      </div>

      <div id="portfolio" className="pt-36 sm:pt-52" />

      {/* portfolio */}
      <div className="px-4 lg:px-8 xl:max-w-7xl xl:mx-auto text-whiteSmoke flex flex-col gap-20">
        <RevealVertical className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold">
            Portfolio
          </h1>
          <p className="text-lighterHyundai text-center portfolioScreen:text-start">
            Check out my projects using video demonstrations, links to source code, and live websites.
          </p>
        </RevealVertical>
        {/* 1 */}
        <div className="flex flex-wrap lg:flex-row lg:items-center justify-center portfolioScreen:justify-between gap-4 px-4 sm:px-0">
          <RevealLeft className="relative w-full pb-[56.25%] sm:pb-[40%] portfolioScreen:pb-[29%] h-0 max-w-[560px] order-2 portfolioScreen:order-1 shadow-negHard shadow-lighterHyundai"><iframe width="560" height="315" className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/4XLt0qWjxUc?si=hFkV9PZcf8T7XW4o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></RevealLeft>
          <RevealRight className="flex flex-col gap-4 max-w-lg order-1 portfolioScreen:order-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">
                1. Weather Web App
              </h1>
              <div className="h-px w-16 bg-hyundaiYellow" />
            </div>
            <p className="text-base text-evenLighterRaisinBlack">
            This is a Weather Web App made on my own. 
            It's capable of displaying weather data on a given city; specifically the current high and low, humidity, sunrise and sunset, and finally wind speed. 
            As for the UI and visuals I took inspiration from other weather app designs.
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Learning</h1>
              <p className="text-base text-evenLighterRaisinBlack">
                Implementing a debouncer into this project was a great learning experience.
                Debouncers are sometimes neglected, but in large-scale projects, if you're calling an API on every keystroke there will be increased monetary costs.
                Debouncers mitigate this problem by only calling the API after every 500ms rather than every keystroke.
              </p>
            </div>
            <h1 className="text-2xl font-semibold">Tech Used</h1>
            <ul className="flex flex-wrap gap-4">
              {companyWebsiteSkills3.map((item, index) => {
                return (
                  <RevealStaggered key={uuidv4()} index={index}>
                    <li className="flex items-center gap-2 bg-lighterRaisinBlack p-1 rounded-lg lg:hover:scale-105 transition-transform">
                      <img src={item.icon} className="h-5 w-auto" />
                      <p className="tracking-wide cursor-default text-lg">{item.title}</p>
                    </li>
                  </RevealStaggered>
                )
              })}
            </ul>
            <IconContext.Provider value={{color: "#ECA72C"}}>
              <div className="flex gap-4 items-center">
                <NavLink to="https://github.com/Schrixx/Weather-Website" target="_blank" className="pt-2 tooltip" data-tooltip="Source Code"><button><HiCode size="36" /></button></NavLink>
                <NavLink to="https://weather-website-three-blond.vercel.app/" target="_blank" className="pt-2 tooltip" data-tooltip="Live Website"><button><RiComputerLine size="36" /></button></NavLink>
              </div>
            </IconContext.Provider>
          </RevealRight>
        </div>
        {/* 2 */}
        <div className="my-2 sm:my-4 portfolioScreen:my-0" />
        <div className="flex flex-wrap lg:flex-row lg:items-center justify-center portfolioScreen:justify-between gap-4 px-4 sm:px-0">
          <RevealRight className="relative w-full pb-[56.25%] sm:pb-[40%] portfolioScreen:pb-[29%] h-0 max-w-[560px] order-2 shadow-hard shadow-lighterHyundai"><iframe width="560" height="315" className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/YgzISpOb-MY?si=BVB57nhSI7Bl63Zu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></RevealRight>
          <RevealLeft className="flex flex-col gap-4 max-w-lg order-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">
                2. Responsive Company Website
              </h1>
              <div className="h-px w-16 bg-hyundaiYellow" />
            </div>
            <p className="text-base text-evenLighterRaisinBlack">
              This is my take on what a responsive art company website could look like.
              It includes a main landing page, an about page, an artwork page, and a contact page.
              The layout and design was made by myself, while taking inspiration from a very large array of websites.
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
              {companyWebsiteSkills1.map((item, index) => {
                return (
                  <RevealStaggered key={uuidv4()} index={index}>
                    <li className="flex items-center gap-2 bg-lighterRaisinBlack p-1 rounded-lg lg:hover:scale-105 transition-transform">
                      <img src={item.icon} className="h-5 w-auto" />
                      <p className="tracking-wide cursor-default text-lg">{item.title}</p>
                    </li>
                  </RevealStaggered>
                )
              })}
            </ul>
            <IconContext.Provider value={{color: "#ECA72C"}}>
              <div className="flex gap-4 items-center">
                <NavLink to="https://github.com/Schrixx/Company-Website" target="_blank" className="pt-2 tooltip" data-tooltip="Source Code"><button><HiCode size="36" /></button></NavLink>
                <NavLink to="https://landing-page-schrixx.vercel.app/" target="_blank" className="pt-2 tooltip" data-tooltip="Live Website"><button><RiComputerLine size="36" /></button></NavLink>
              </div>
            </IconContext.Provider>
          </RevealLeft>
        </div>
        {/* 3 */}
        <div className="my-2 sm:my-4 portfolioScreen:my-0" />
        <div className="flex flex-wrap lg:flex-row lg:items-center justify-center portfolioScreen:justify-between gap-4 px-4 sm:px-0">
          <RevealRight className="flex flex-col gap-4 max-w-lg order-1 portfolioScreen:order-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">
                3. Portfolio Website
              </h1>
              <div className="h-px w-16 bg-hyundaiYellow" />
            </div>
            <p className="text-base text-evenLighterRaisinBlack">
              This is my responsive portfolio website made by myself.
              This is a one-page website with several sections showcasing my skills and adaptability for front-end development.
              The colors were chosen by myself and the design was made using inspiration from many other websites.
            </p>
            <h1 className="text-2xl font-semibold">Tech Used</h1>
            <ul className="flex flex-wrap gap-4">
              {companyWebsiteSkills2.map((item, index) => {
                return (
                  <RevealStaggered key={uuidv4()} index={index}>
                    <li className="flex items-center gap-2 bg-lighterRaisinBlack p-1 rounded-lg lg:hover:scale-105 transition-transform">
                      <img src={item.icon} className="h-5 w-auto" />
                      <p className="tracking-wide cursor-default text-lg">{item.title}</p>
                    </li>
                  </RevealStaggered>
                )
              })}
            </ul>
            <IconContext.Provider value={{color: "#ECA72C"}}>
              <div className="flex gap-4 items-center">
                <NavLink to="https://github.com/Schrixx/Portfolio" target="_blank" className="pt-2 tooltip" data-tooltip="Source Code"><button><HiCode size="36" /></button></NavLink>
              </div>
            </IconContext.Provider>
          </RevealRight>
          <RevealLeft className="relative w-full pb-[56.25%] sm:pb-[40%] portfolioScreen:pb-[29%] h-0 max-w-[560px] order-2 portfolioScreen:order-1 shadow-negHard2 shadow-lighterHyundai"><iframe width="560" height="315" className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/XPfwgJzDtvI?si=8wNyEygiWWjacAxD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></RevealLeft>
        </div>
      </div>

      <div id="about" className="pt-36 sm:pt-52" />
      
      {/* About */}
      <div className="px-4 aboutScreen:px-0 aboutScreen:max-w-7xl aboutScreen:mx-auto flex flex-col justify-center gap-20 text-center aboutScreen:text-start">
        <RevealVertical className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold text-whiteSmoke">
            About Me
          </h1>
          <div className="h-px w-4/5 bg-whiteSmoke" />
        </RevealVertical>
        <div className="flex flex-wrap justify-center aboutScreen:justify-between items-center gap-4 aboutScreen:gap-0">
          <RevealLeft><img src={aboutIMG} width="525px" height="350px" className="rounded-3xl shadow-hard" /></RevealLeft>
          <RevealRight className="flex flex-col gap-6 max-w-xl items-center aboutScreen:items-baseline">
            <h1 className="text-whiteSmoke text-5xl sm:text-6xl font-bold tracking-wide">
              Moses Osuna
            </h1>
            <h1 className="text-caribbeanCurrent text-4xl sm:text-5xl font-bold tracking-wide">
              Front-End Developer
            </h1>
            <p className="text-evenLighterRaisinBlack text-xl tracking-wide leading-normal">
              Hello, I'm <span className="text-whiteSmoke">Moses Osuna</span>. I'm a <span className="text-whiteSmoke">Front-End Developer</span> based in 🌵<span className="text-whiteSmoke">Tucson, Arizona</span> who enjoys working with <span className="text-whiteSmoke">React</span> and other front-end tools. 
              I look forward to opportunities that allow me to showcase my creativity and logical skills within a development team.
            </p>
            <button onClick={toggleAbout} className={`${showAbout ? "hidden" : ""} underline italic text-evenLighterRaisinBlack hover:text-whiteSmoke text-start w-fit transition-colors`}>Show More...</button>
            <a href="#contact" className={`${showAbout ? "hidden": ""} scroll-smooth`}><button className="bg-caribbeanCurrent hover:bg-evenLighterRaisinBlack text-whiteSmoke rounded-lg p-2 sm:p-3 w-fit transition-colors flex items-center"><span className="mr-4"><HiOutlineMail color="#F2F2F2" size="24" /></span>Contact Me</button></a>
          </RevealRight>
        </div>
        <div className={`${showAbout ? "flex": "hidden"} flex-wrap justify-center aboutScreen:justify-between items-center gap-4 aboutScreen:gap-0`}>
          <RevealLeft><img src={cactus} width="525px" height="350px" className="rounded-3xl shadow-hard" /></RevealLeft>
          <RevealRight className="max-w-xl">
            <p className="text-evenLighterRaisinBlack text-xl tracking-wide leading-normal">
              I was born and raised in Tucson, Arizona, always curious about technology and games as I was growing up.
              I eventually started using my parents' computer, fiddling with settings and learning how the insides work.
              This led to me taking many technology classes in highschool, and even attending college as a cybersecurity major, where I am today.
              Even after all this time, I still have loads of fun learning about tech and programming!
            </p>
          </RevealRight>
        </div>
        <div className={`${showAbout ? "flex": "hidden"} flex-wrap justify-center aboutScreen:justify-between items-center gap-4 aboutScreen:gap-0`}>
          <RevealLeft><img src={violin} width="525px" height="350px" className="rounded-3xl shadow-hard" /></RevealLeft>
          <RevealRight className="max-w-xl">
            <p className="text-evenLighterRaisinBlack text-xl tracking-wide leading-normal">
              In regard to my hobbies, I am in love with learning and my free time is never void of some form of it.
              I love 🎨Art, keeping up with ⌨️Programming Languages, playing 🎮Games competitively, and playing the 🎻Violin.
              In particular, I've recently been having lots of fun with art and bought a drawing tablet to create digital art with!
            </p>
          </RevealRight>
        </div>
        <div className="flex flex-col items-center gap-6">
          <button onClick={toggleAbout} className={`${showAbout ? "" : "hidden"} underline italic text-evenLighterRaisinBlack hover:text-whiteSmoke text-start w-fit transition-colors`}>...Show Less</button>
          <a href="#contact" className={`${showAbout ? "" : "hidden"} scroll-smooth`}><button className="bg-caribbeanCurrent hover:bg-evenLighterRaisinBlack text-whiteSmoke rounded-lg p-2 sm:p-3 w-fit transition-colors flex items-center"><span className="mr-4"><HiOutlineMail color="#F2F2F2" size="24" /></span>Contact Me</button></a>
        </div>
      </div>

      <div id="contact" className="pt-36 sm:pt-52" />

      {/* contact */}
      <RevealOpacity className="xs:px-4">
        <div className='flex flex-col lg:flex-row max-w-7xl w-fit mx-auto bg-lighterRaisinBlack shadow-smallContainer rounded-xl text-whiteSmoke shadow-xl'>
          <div className="relative bg-slightLighterRaisingBlack p-12 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
            <img src={backgroundLights} className="hidden lg:block absolute bottom-0 right-0 rounded-bl-xl" />
            <div className="flex flex-col justify-center items-center max-w-sm mx-auto gap-8 text-center">
              <h1 className="text-2xl font-bold">Contact Information 📧</h1>
              <p className="text-base">If you have questions or would just like to talk about tech, feel free to contact me!</p>
              <IconContext.Provider value={{color: "#F05D5E", size: "30"}}>
                <div className="flex justify-center gap-8">
                  <NavLink to="https://github.com/Schrixx" target="_blank"><BsGithub /></NavLink>
                  <NavLink to="https://www.linkedin.com/in/moses-osuna-a7501b9a/" target="_blank"><BsLinkedin /></NavLink>
                </div>
              </IconContext.Provider>
              <a href="mailto: xschrixx@gmail.com" className="w-fit hover:underline"><p className="text-base">xschrixx@gmail.com</p></a>
            </div>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-4 p-12 text-cloudBurstBlue'>
            <input type="hidden" name="access_key" value="41efc0b3-b988-4930-83cc-a6e32aebe63c" />
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col">
                <label className="text-base">First Name</label>
                <input type="text" name="First Name" className='bg-evenLighterRaisinBlack p-1 bg-opacity-10 rounded-lg placeholder:text-gray-400 focus:outline-lighterBittersweet outline-offset-0 outline-none' autoComplete="off" required />
              </div>
              <div className="flex flex-col">
                <label className="text-base">Last Name</label>
                <input type="text" name="Last Name" className='bg-evenLighterRaisinBlack p-1 bg-opacity-10 rounded-lg placeholder:text-gray-400 focus:outline-lighterBittersweet outline-offset-0 outline-none' autoComplete="off" required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col">
                <label className="text-base">Email</label>
                <input type="email" name="email" className='bg-evenLighterRaisinBlack p-1 bg-opacity-10 rounded-lg placeholder:text-gray-400 focus:outline-lighterBittersweet outline-offset-0 outline-none' autoComplete="off" required />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label className='text-base'>Phone Number</label>
                  <label className='italic text-darkerBittersweet text-base'>optional*</label>
                </div>
                <input type="text" name="Phone Number" className='bg-evenLighterRaisinBlack p-1 bg-opacity-10 rounded-lg placeholder:text-gray-400 focus:outline-lighterBittersweet outline-offset-0 outline-none' autoComplete="off" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label className='text-base'>Subject</label>
                <label className='italic text-darkerBittersweet text-base'>optional*</label>
              </div>
              <input type="text" name="subject" className='bg-evenLighterRaisinBlack p-1 bg-opacity-10 rounded-lg placeholder:text-gray-400 focus:outline-lighterBittersweet outline-offset-0 outline-none' autoComplete="off" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <label className="italic text-darkerBittersweet text-sm">Max. 500 Characters</label>
            </div>
            <textarea maxLength={500} name="message" className='bg-evenLighterRaisinBlack p-1 bg-opacity-10 rounded-lg h-48 resize-none placeholder:text-gray-400 focus:outline-lighterBittersweet outline-offset-0 outline-none' autoComplete="off" required />
            <button className='p-2 bg-darkerBittersweet hover:bg-bittersweet text-whiteSmoke rounded-lg max-w-fit transition-colors'>Submit</button>
          </form>
        </div>
      </RevealOpacity>

      <div id="footer" className="pt-16 sm:pt-52" />
    </Layout>
  )
}

export default Home
