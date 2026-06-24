import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "E-Commerce",
        description:
            "Visit my repository on github.",
        image: "/projects/Ecommerce.png",
        github: "https://github.com/RamliFarijiZamhuri/Toko-electronic-cahaya-abadi",
        link: "https://cahayaabadielectronic.netlify.app/",
    },
    {
        name: "Anime List",
        description: "Visit my repository on github.",
        image: "/projects/AnimeList.png",
        github: "https://github.com/RamliFarijiZamhuri/cuyanimelist",
        link: "https://cuyanimelist-snowy.vercel.app/",
    },
    {
        name: "Movie List",
        description:
            "Visit my repository on github.",
        image: "/projects/MovieList.png",
        github: "https://github.com/RamliFarijiZamhuri/cuymovielist",
        link: "https://cuymovielist.vercel.app/",
    },
    {
        name: "Registration Form",
        description:
            "Visit my repository on github.",
        image: "/projects/RegistrationForm.png",
        github: "https://github.com/RamliFarijiZamhuri/RegistrationForm",
        link: "https://registrationform-by-rams.vercel.app/",
    },
    {
        name: "Password Generator",
        description:
            "Visit my repository on github.",
        image: "/projects/PasswordGenerator.png",
        github: "https://github.com/RamliFarijiZamhuri/password-generator",
        link: "https://password-generator-psi-sandy.vercel.app/",
    },
    {
        name: "Articale",
        description:
            "Visit my repository on github.",
        image: "/projects/Articale.png",
        github: "https://github.com/RamliFarijiZamhuri/artikel-cianjur",
        link: "https://articale.vercel.app/",
    },
    {
        name: "Unpam Space",
        description:
            "Visit my repository on github.",
        image: "/projects/UnpamSpace.png",
        github: "https://github.com/RamliFarijiZamhuri/UNPAM-SPACE",
        link: "https://unpam-space.vercel.app//",
    },
    {
        name: "Trash Bank App",
        description:
            "Visit my repository on github.",
        image: "/projects/Trash-Bank-App.png",
        github: "https://github.com/RamliFarijiZamhuri/Aplikasi-Bank-Sampah-Digital",
        link: "https://unpam-space.vercel.app//",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={project.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection