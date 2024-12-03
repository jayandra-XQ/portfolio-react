const About = () => {
    return (
        <div
            name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-xl mt-20">
                    I am Jayandra Hamal, a dedicated Full Stack Developer with a focus on the MERN stack. Currently pursuing a Bachelor degree in Computer Engineering, I have a strong passion for creating efficient and scalable web applications. My expertise lies in technologies like React, Node.js, Express, MongoDB, and I am also proficient in TypeScript.
                </p>

                <br />

                <p className="text-xl">
                    Throughout my journey, I have worked on various personal and academic projects that reflect my commitment to clean code and user-centered design. I strive to continuously learn and implement the latest industry standards in my work, ensuring that the solutions I develop not only meet but exceed expectations.
                </p>

            </div>
        </div>
    )
}

export default About
