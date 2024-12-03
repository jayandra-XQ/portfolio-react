import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mern from "../assets/mern.png";
import docker from "../assets/docker.png";
import typescript from "../assets/typescript.png";
import git from "../assets/git.png";

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: git,
            title: 'Git',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: mern,
            title: 'MERN stack',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            src: docker,
            title: 'Docker',
            style: 'shadow-blue-600'
        },
        {
            id: 9,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-600'
        },
      
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="mt-20">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
                    <p className="py-6">These are the technologies  I&apos;ve worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                    {experiences.map(({ id, src, title, style }) => (
                        <div key={id} className={"shadow-md hover:scale-105 duration-200 py-2 rounded-lg " + style}>
                            <div className={id === 7 || id === 8 ? "h-48 w-48 mx-auto flex justify-center items-center" : "h-40 w-40 mx-auto flex justify-center items-center"}>
                                <img src={src} alt={title} className={id === 7 || id === 8 ? "h-60 w-60 object-contain" : "h-24 w-24 object-contain"} />
                            </div>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
