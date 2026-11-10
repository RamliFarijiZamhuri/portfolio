"use client" // this is a client component
import React, { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { HiArrowSmRight } from "react-icons/hi"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
    {
        label: "Certificates",
        page: "certificates",
    },
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <header className="w-full fixed top-0 z-50 bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-stone-800 transition-colors">
            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Brand / Logo */}
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setIsNavOpen(false)}
                        className="cursor-pointer group flex items-center space-x-1"
                    >
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
                            Ramli Fariji Zamhuri
                        </h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <div className="flex space-x-6 items-center">
                            {NAV_ITEMS.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.page}
                                    className="cursor-pointer font-medium text-neutral-700 hover:text-teal-600 dark:text-neutral-300 dark:hover:text-teal-400 transition-colors"
                                    activeClass="!text-teal-600 dark:!text-teal-400 font-semibold"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle Button Desktop */}
                        {mounted && (
                            <button
                                aria-label="Toggle theme"
                                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-stone-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-stone-700 transition-all focus:outline-none"
                            >
                                {currentTheme === "dark" ? (
                                    <RiSunLine size={20} className="text-amber-400" />
                                ) : (
                                    <RiMoonFill size={20} className="text-teal-600" />
                                )}
                            </button>
                        )}
                    </div>

                    {/* Mobile Controls (Theme Toggle + Hamburger) */}
                    <div className="flex items-center space-x-2 md:hidden">
                        {mounted && (
                            <button
                                aria-label="Toggle theme"
                                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-stone-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-stone-700 transition-all focus:outline-none"
                            >
                                {currentTheme === "dark" ? (
                                    <RiSunLine size={20} className="text-amber-400" />
                                ) : (
                                    <RiMoonFill size={20} className="text-teal-600" />
                                )}
                            </button>
                        )}

                        <button
                            aria-label={isNavOpen ? "Close menu" : "Open menu"}
                            className="p-2.5 rounded-xl text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-stone-800 hover:bg-neutral-200 dark:hover:bg-stone-700 transition-all focus:outline-none"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            {isNavOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown Card */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isNavOpen
                            ? "max-h-96 opacity-100 pb-4 pt-1"
                            : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="flex flex-col space-y-1 p-2.5 rounded-2xl bg-neutral-50/95 dark:bg-stone-800/95 border border-neutral-200/80 dark:border-stone-700/80 backdrop-blur-lg shadow-xl">
                        {NAV_ITEMS.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.page}
                                activeClass="bg-teal-50 dark:bg-stone-700/60 !text-teal-600 dark:!text-teal-400 font-semibold"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setIsNavOpen(false)}
                                className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-xl text-neutral-700 dark:text-neutral-200 font-medium hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-stone-700/40 transition-all"
                            >
                                <span>{item.label}</span>
                                <HiArrowSmRight className="text-neutral-400 dark:text-neutral-500 text-lg" />
                            </Link>
                        ))}

                        <div className="pt-2 mt-1 border-t border-neutral-200/80 dark:border-stone-700/80 flex items-center justify-between px-3 py-2">
                            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                                Curriculum Vitae
                            </span>
                            <a
                                href="asset/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold px-3 py-1.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar