import HeroImage from "../assets/heroImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (

    <div name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I&apos;m a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            with experience in building seamless web applications, utilizing the power of React, Tailwind CSS, and the complete MERN stack (MongoDB, Express, React, Node.js). I am passionate about creating efficient, user-friendly solutions and continuously exploring new technologies to enhance my development skills.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex flex-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 mx-auto w-full ml-10  md:w-full"
          />
        </div>

      </div>
    </div>
  )
}

export default Home