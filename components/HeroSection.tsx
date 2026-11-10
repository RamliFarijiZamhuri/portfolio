"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-[100dvh] flex flex-col items-center justify-center pt-16 pb-6 md:pt-20 md:pb-10"
        >
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn w-full max-w-2xl px-4 my-auto">
                {/* Profile Photo - Lebih besar di HP & Laptop */}
                <div className="relative mb-3 sm:mb-5">
                    <div className="w-55 h-55 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-500/20 dark:ring-teal-400/20 hover:scale-105 transition-transform duration-300 mx-auto">
                        <Image
                            src="/Myfoto.jpg"
                            alt="Ramli Fariji Zamhuri"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-stone-800 border border-teal-200 dark:border-stone-700 text-teal-700 dark:text-teal-400 text-xs sm:text-sm font-medium mb-2.5 sm:mb-4 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    Informatics Student @ Universitas Pamulang
                </div>

                {/* Headline - Tetap besar & tebal */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2 sm:mb-3">
                    Hi, I&#39;m{" "}
                    <span className="text-teal-600 dark:text-teal-400">
                        Ramli Fariji Zamhuri
                    </span>
                </h1>

                {/* Bio - Tetap jelas & nyaman dibaca */}
                <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-lg mx-auto">
                    An Informatics Engineering student at{" "}
                    <span className="font-semibold text-neutral-900 dark:text-white">
                        Universitas Pamulang
                    </span>{" "}
                    & passionate{" "}
                    <span className="font-semibold text-neutral-900 dark:text-white">
                        Frontend Developer
                    </span>
                    , focused on crafting responsive, clean, and intuitive web applications.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Link
                        to="projects"
                        className="text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 bg-teal-600 rounded-xl shadow-md hover:bg-teal-700 cursor-pointer transition-all active:scale-95"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        View Projects
                    </Link>
                    <a
                        href="asset/CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-800 dark:text-neutral-100 text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-stone-800 border border-neutral-300 dark:border-stone-700 rounded-xl shadow-md hover:bg-neutral-100 dark:hover:bg-stone-700 transition-all cursor-pointer active:scale-95"
                    >
                        View Resume
                    </a>
                </div>

                {/* Scroll Down Indicator */}
                <div className="flex justify-center">
                    <Link
                        to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        aria-label="Scroll to About section"
                        className="cursor-pointer p-1.5 rounded-full text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-neutral-100 dark:hover:bg-stone-800 transition-all"
                    >
                        <HiArrowDown size={26} className="animate-bounce" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection