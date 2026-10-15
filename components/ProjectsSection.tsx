import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "E-Commerce Cahaya Abadi",
        description:
            "A modern online electronics store frontend with catalog browsing, shopping cart functionality, and responsive checkout layout.",
        tech: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
        image: "/projects/Ecommerce.png",
        github: "https://github.com/RamliFarijiZamhuri/Toko-electronic-cahaya-abadi",
        link: "https://cahayaabadielectronic.netlify.app/",
    },
    {
        name: "Anime List Explorer",
        description:
            "Anime discovery platform fetching real-time data from the Jikan REST API with search, pagination, and detailed media views.",
        tech: ["Next.js", "React", "REST API", "Tailwind CSS"],
        image: "/projects/AnimeList.png",
        github: "https://github.com/RamliFarijiZamhuri/cuyanimelist",
        link: "https://cuyanimelist-snowy.vercel.app/",
    },
    {
        name: "Movie List App",
        description:
            "Movie catalog web app integrating TMDB API to showcase trending movies, ratings, and detailed synopses.",
        tech: ["React", "REST API", "CSS Modules", "Vercel"],
        image: "/projects/MovieList.png",
        github: "https://github.com/RamliFarijiZamhuri/cuymovielist",
        link: "https://cuymovielist.vercel.app/",
    },
    {
        name: "Registration & Auth Form",
        description:
            "Responsive form interface implementing client-side validation, error handling, and clean feedback states.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        image: "/projects/RegistrationForm.png",
        github: "https://github.com/RamliFarijiZamhuri/RegistrationForm",
        link: "https://registrationform-by-rams.vercel.app/",
    },
    {
        name: "Password Generator Tool",
        description:
            "Utility web app to generate secure passwords with custom criteria such as length, symbols, and one-click clipboard copying.",
        tech: ["JavaScript", "HTML5", "Tailwind CSS"],
        image: "/projects/PasswordGenerator.png",
        github: "https://github.com/RamliFarijiZamhuri/password-generator",
        link: "https://password-generator-psi-sandy.vercel.app/",
    },
    {
        name: "Artikel Cianjur Web Portal",
        description:
            "Content-focused web layout designed for reading articles about local tourism and cultural highlights.",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/projects/Articale.png",
        github: "https://github.com/RamliFarijiZamhuri/artikel-cianjur",
        link: "https://articale.vercel.app/",
    },
    {
        name: "Unpam Space",
        description:
            "Community web portal project designed for student collaboration and sharing campus resources.",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/projects/UnpamSpace.png",
        github: "https://github.com/RamliFarijiZamhuri/UNPAM-SPACE",
        link: "https://unpam-space.vercel.app/",
    },
    {
        name: "Trash Bank App (Bank Sampah Digital)",
        description:
            "Digital waste management concept interface empowering users to track recyclable deposits and promote environmental sustainability.",
        tech: ["React", "Next.js", "Tailwind CSS"],
        image: "/projects/Trash-Bank-App.png",
        github: "https://github.com/RamliFarijiZamhuri/Aplikasi-Bank-Sampah-Digital",
        link: "https://unpam-space.vercel.app/",
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
                                        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
                                        <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                             {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="text-xs font-semibold px-2.5 py-1 bg-teal-50 dark:bg-stone-800 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-stone-700 rounded-md"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
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