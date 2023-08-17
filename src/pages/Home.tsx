import Layout from "src/components/Layout"

const Home = () => {
  return (
    <Layout>
      {/* nav spacer */}
      <div className="pt-60" />

      {/* intro */}
      {/* <div className="absolute right-0 h-[900px] w-full bg-[url('assets/introCircle.svg')] bg-no-repeat bg-cover" /> */}
      <div className="px-4 lg:max-w-7xl mx-auto flex justify-between text-whiteSmoke">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="h-px w-9 bg-bittersweet" />
            <h1 className="text-bittersweet pixelFont text-4xl tracking-widest">Web Developer</h1>
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-6xl curvyFont">As a <span className="text-lighterHyundai font-medium">Front End Developer</span>, I enjoy creating responsive, user-friendly experiences while maintaining simplistic and visually pleasing aesthetics.</p>
            <div className="flex gap-8">
              <button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-4 w-fit transition-colors">MY PROJECTS</button>
              <button className="bg-darkerBittersweet hover:bg-bittersweet rounded-lg p-4 w-fit transition-colors">RESUME</button>
            </div>
          </div>
        </div>
        <div>
          <h1>My Toolkit!</h1>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
