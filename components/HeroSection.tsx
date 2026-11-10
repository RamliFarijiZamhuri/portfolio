"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16">
                <div>
                    <Image
                        src="/Myfoto.jpg"
                        alt="Ramli Fariji Zamhuri"
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                        priority
                    />
                </div>
                <div className="mt-8 md:w-4/5 lg:w-3/5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-stone-800/80 border border-teal-200 dark:border-stone-700 text-teal-700 dark:text-teal-400 text-sm font-medium mb-5 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        Informatics Engineering Student @ Universitas Pamulang
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Hi, I&#39;m{" "}
                        <span className="text-teal-600 dark:text-teal-400">
                            Ramli Fariji Zamhuri
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl mt-4 mb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                        An Informatics Engineering undergraduate student at{" "}
                        <span className="font-semibold text-teal-600 dark:text-teal-400">
                            Universitas Pamulang
                        </span>{" "}
                        and an enthusiastic{" "}
                        <span className="font-semibold text-teal-600 dark:text-teal-400">
                            Frontend Developer
                        </span>
                        . Passionate about building modern, responsive, and user-friendly web applications that deliver real impact and value.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300">
                        <span className="px-3 py-1 bg-neutral-100 dark:bg-stone-800/60 rounded-full border border-neutral-200 dark:border-stone-700">
                            🎓 Universitas Pamulang
                        </span>
                        <span className="px-3 py-1 bg-neutral-100 dark:bg-stone-800/60 rounded-full border border-neutral-200 dark:border-stone-700">
                            💻 Frontend Web Developer
                        </span>
                        <span className="px-3 py-1 bg-neutral-100 dark:bg-stone-800/60 rounded-full border border-neutral-200 dark:border-stone-700">
                            🏆 3rd Place HIMTIF Hackathon Winner
                        </span>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4">
                        <Link
                            to="projects"
                            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-lg shadow hover:bg-teal-700 cursor-pointer transition-all"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            View Projects
                        </Link>
                        <a
                            href="/CV-Ramli-Fariji-Zamhuri.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-800 dark:text-neutral-100 font-semibold px-6 py-3 bg-white dark:bg-stone-800 border border-neutral-300 dark:border-stone-700 rounded-lg shadow hover:bg-neutral-100 dark:hover:bg-stone-700 transition-all cursor-pointer"
                        >
                            View Resume
                        </a>
                    </div>

                    <div className="flex flex-row items-center text-center justify-center pt-20">
                        <Link
                            to="about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <HiArrowDown size={35} className="animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection