import resume from "assets/Resume.pdf"

const Resume = () => {
  return (
    <div className="w-full">
        <iframe src={resume} className="w-full h-[975px]"></iframe>
    </div>
  )
}

export default Resume