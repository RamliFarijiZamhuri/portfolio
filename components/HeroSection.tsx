"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16">
                <div className="">
                    <Image
                        src="/Myfoto.jpg"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0">Hi, I&#39;m Ramli Fariji Zamhuri!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-semibold text-teal-600">
                            Frontend Developer{" "}
                        </span>
                        from Cianjur, West java. Working towards creating software that
                        makes life easier and more meaningful.
                    </p>
                    <Link to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Projects
                    </Link>
                    <div className="flex flex-row items-center text-center justify-center pt-32">
                        <HiArrowDown size={35} className="animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection