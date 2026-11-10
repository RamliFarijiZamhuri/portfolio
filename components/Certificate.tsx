import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Certificate = [
    {
        name: "Dicoding Indonesia",
        description:
            "Belajar Dasar Pemrograman Web — Pemahaman fundamental pembuatan website menggunakan HTML5, styling CSS3, serta penerapan tata letak responsif.",
        image: "/certificates/Dicoding.png",
    },
    {
        name: "Dicoding Indonesia",
        description:
            "Belajar Dasar Pemrograman JavaScript — Pemahaman dasar sintaks JavaScript, tipe data, pengkondisian, perulangan, fungsi, dan logika pemrograman modern.",
        image: "/certificates/dasar-pemrograman-js.png",
    },
    {
        name: "Dicoding Indonesia",
        description:
            "Belajar Dasar Cloud dan Gen AI di AWS — Pengenalan fundamental komputasi awan (cloud computing) serta eksplorasi konsep Generative AI pada ekosistem Amazon Web Services.",
        image: "/certificates/dicoding-dasar cloud dan gen ai di aws.png",
    },
    {
        name: "freeCodeCamp",
        description:
            "Responsive Web Design Developer Certification — 300 jam pembelajaran mendalam tentang HTML5, CSS3 modern, Flexbox, CSS Grid, dan perancangan web responsif.",
        image: "/certificates/Freecodecamp.png",
    },
    {
        name: "HIMTIF Hackathon",
        description:
            "Penghargaan Juara 3 atas ide kreatif dan solusi inovatif pada kompetisi Hackathon dengan tema \"Innovating Beyond The Code\" yang diselenggarakan oleh HIMTIF.",
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
                                            alt={Certificate.name}
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