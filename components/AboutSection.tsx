import React from "react"

const skillCategories = [
    {
        title: "Frontend & Core",
        skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5", "CSS3"],
    },
    {
        title: "Styling & UI",
        skills: ["Tailwind CSS", "Responsive Design"],
    },
    {
        title: "Tools & Workflow",
        skills: ["Git", "GitHub", "REST API", "Vercel / Netlify"],
    },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-32">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi! I&#39;m <span className="font-bold">Ramli Fariji Zamhuri</span>, a Frontend Developer focused on building clean, responsive, and user-friendly web applications.
                        </p>
                        <br />
                        <p>
                            I graduated with a background in Computer Engineering from SMK Mutiara Qolbu Cianjur (2023). I enjoy turning designs into functional code using modern technologies like React, Next.js, and Tailwind CSS.
                        </p>
                        <br />
                        <p>
                            I am continuously improving my skills, eager to learn best practices in frontend architecture, and currently seeking new <span className="font-bold text-teal-500">internship or full-time opportunities</span> to contribute to real-world projects.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
                        <div className="space-y-4">
                            {skillCategories.map((cat, idx) => (
                                <div key={idx} className="bg-white/50 dark:bg-stone-900/50 p-4 rounded-xl border border-gray-200 dark:border-stone-800">
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2.5">
                                        {cat.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="bg-gray-100 dark:bg-stone-800 text-gray-800 dark:text-stone-200 px-3 py-1 rounded-md font-medium text-xs border border-gray-200 dark:border-stone-700 shadow-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection