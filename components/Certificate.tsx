import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Certificate = [
    {
        name: "Dicoding Indonesia",
        description: "Belajar Dasar Pemrograman Web & Pengenalan Logika Pemrograman.",
        image: "/certificates/Dicoding.png",
    },
    {
        name: "freeCodeCamp",
        description: "Responsive Web Design Certification & Frontend Development fundamentals.",
        image: "/certificates/Freecodecamp.png",
    },
    {
        name: "Growia",
        description: "Dasar-Dasar Pengujian Perangkat Lunak (Software Quality Assurance).",
        image: "/certificates/dasar-dasar-pengujian-perangkat-lunak.png",
    },
    {
        name: "Pamulang University",
        description: "Seminar & Workshop: Kecerdasan Buatan (AI) untuk Pemahaman dan Implementasi Modern.",
        image: "/certificates/KECERDASAN-BUATAN-(AI)-UNTUK-PEMAHAMAN-DAN-IMPLEMENTASI-YANG-LEBIH-BAIK.png",
    },
    {
        name: "IBM SkillsBuild",
        description: "IBM Granite Models for Software Development & Enterprise AI Integration.",
        image: "/certificates/SkillsBuild_IBM-Granite-Models-for-Software-Development.png",
    },
    {
        name: "Pamulang University",
        description: "Software Engineering & Architecture Principles Training.",
        image: "/certificates/software-engineering.png",
    },
    {
        name: "IBM SkillsBuild",
        description: "Use Generative AI for Software Development & Productivity Enhancement.",
        image: "/certificates/SkillsBuild_Use-Generative-AI-for-Software-Development.png",
    },
    {
        name: "HIMTIF Hackathon",
        description: "Participant & Project Showcase in Annual Student Technology Hackathon.",
        image: "/certificates/hackathon-HIMTIF.png",
    },
]


const CertificateSections = () => {
    return (
        <section id="certificates" className="my-12 pb-12 md:pt-16 md:pb-24">
            <h1 className="text-center font-bold text-4xl">
                Certificate
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28">
                {Certificate.map((Certificate, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Image
                                            src={Certificate.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{Certificate.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {Certificate.description}
                                        </p>
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

export default CertificateSections