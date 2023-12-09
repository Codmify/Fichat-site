import chevron from "./assets/chevron_down_icon.png"
import facebook_icon from './assets/facebook_icon.png'
import green_circle from "./assets/green_circle.png"
import group_of_users from "./assets/group_of_users.png"
import instagram_icon from "./assets/instagram.png"
import linkedIn_icon from './assets/linkedin_icon.png'
import twitter_icon from "./assets/twitter_icon.png"
import user_one from './assets/user_one.png'
import user_two from "./assets/user_two.png"
import user_three from "./assets/user_three.png"
import menu_icon from "./assets/menu_icon.png"
import menu_close from "./assets/menu_close.png"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react";


export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        /* eslint-disable */
        const handle = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handle)

        return () => {
            document.removeEventListener("mousedown", handle)
        }
    }, [menuRef])



    return (
        <section className="background_style text-[#FEFEFE] min-h-screen pb-8">
            <header>

                {/* --------------- Desktop Navbar ------------------- */}
                <div className="flex justify-between items-center w-[80%] mx-auto py-4 lg:py-8">
                    <nav>
                        <ul className="m-0 hidden lg:flex items-center gap-[24px]">
                            <li className="flex gap-[8px] items-center font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                                <small>Features</small>
                                <img src={chevron} alt="Chevron Down" />
                            </li>

                            <li className="flex gap-[8px] items-center font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                                <small>Integrations</small>
                                <img src={chevron} alt="Chevron Down" />
                            </li>

                            <li className="flex gap-[8px] items-center font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                                <small>Privacy</small>
                                <img src={chevron} alt="Chevron Down" />
                            </li>

                            <li className="flex gap-[8px] items-center font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                                <small>Help Center</small>
                                <img src={chevron} alt="Chevron Down" />
                            </li>
                        </ul>
                    </nav>

                    <div className="links">
                        <ul className="m-0 hidden lg:flex items-center gap-[16px]">
                            <a href="/login" className="bg-[#418F5B] text-[#FEFEFE] py-[12px] px-8 rounded-[8px] hover:scale-[1.03] hover:cursor-pointer">Sign in</a>

                            <a href="/register" className="border-2 border-[#FEFEFE] rounded-[8px] py-[12px] px-8 bg-transparent text-[#FEFEFE] flex items-center gap-[8px] hover:scale-[1.03] hover:cursor-pointer">Register</a>
                        </ul>
                    </div>
                </div>



                {/* --------------------- Mobile Navbar ---------------------- */}
                <div className="flex lg:hidden justify-between px-6 items-center">
                    <Link to="/" className="font-[600]">Fichat Logo</Link>

                    <div className="p-2 cursor-pointer" onClick={() => setMenuOpen(true)}>
                        <img src={menu_icon} alt="Menu Icon" />
                    </div>
                </div>

                <nav className={`bg-[rgb(13,13,13)] h-screen w-[70%] fixed top-0 z-50 block lg:hidden duration-500 rounded-tl-[30px] rounded-bl-[30px] ${menuOpen ? "right-0" : "-right-[100%]"}`} ref={menuRef}>
                    <div className="flex m-8 items-end w-full ml-auto justify-end pr-6">
                        <div className="p-2 cursor-pointer" onClick={() => setMenuOpen(false)}>
                            <img src={menu_close} alt="Menu close" />
                        </div>
                    </div>

                    <ul className="m-0 flex flex-col lg:hidden items-start p-8 gap-[32px]">
                        <li className="flex gap-[8px] items-center justify-between w-full font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                            <small>Features</small>
                            <img src={chevron} alt="Chevron Down" />
                        </li>

                        <li className="flex gap-[8px] items-center justify-between w-full font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                            <small>Integrations</small>
                            <img src={chevron} alt="Chevron Down" />
                        </li>

                        <li className="flex gap-[8px] items-center justify-between w-full font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                            <small>Privacy</small>
                            <img src={chevron} alt="Chevron Down" />
                        </li>

                        <li className="flex gap-[8px] items-center justify-between w-full font-[500] text-[1.15rem] leading-[25px] text-[#FEFEFE] hover:cursor-pointer">
                            <small>Help Center</small>
                            <img src={chevron} alt="Chevron Down" />
                        </li>
                    </ul>

                    <div className="mt-8">
                        <ul className="m-0 my-4 flex flex-col items-center gap-[16px]">
                            <a href="/login" className="bg-[#418F5B] text-[#FEFEFE] py-[12px] px-8 rounded-[8px] w-full max-w-[70%] text-center hover:scale-[1.03] hover:cursor-pointer">Sign in</a>

                            <a href="/register" className="border-2 border-[#FEFEFE] rounded-[8px]  w-full max-w-[70%] text-center py-[12px] px-8 bg-transparent text-[#FEFEFE] hover:scale-[1.03] hover:cursor-pointer">Register</a>
                        </ul>
                    </div>
                </nav>
            </header>


            <div className={`${menuOpen ? "z-10 w-[50%] h-screen block lg:hidden fixed top-0 left-0 duration-500 bg-[rgba(0,0,0,0.5)] delay-300 z-1" : ""}`}></div>


            {/* -----------------Hero Section --------------------------- */}
            <section className="mt-20 pb-16 w-[90%] lg:w-[80%] mx-auto relative">
                <h1 className="font-[700] text-[2.5rem] lg:text-[3.65rem] text-center leading-[47px] lg:leading-[70px]">Welcome to Fichat!</h1>

                <h2 className="font-[700] text-[2.5rem] lg:text-[3.65rem] text-center leading-[47px] lg:leading-[70px]">The app to <span className="text-[#F59E0B]">c</span><span className="text-[#05FFFF]">o</span><span className="text-[#4EAC6D]">nn</span><span className="text-[#EF4444]">e</span><span className="text-[#3EC1F3]">c</span><span className="text-[#F59E0B]">t</span> your contacts in one click</h2>

                <p className="font-[500] text-[1.38rem] w-[90%] lg:w-[60%] mx-auto leading-[30px] text-center pt-6">Easy, Simple, reliable and free messaging app.</p>

                <p className="font-[500] text-[1.38rem] w-[90%] lg:w-[60%] mx-auto leading-[30px] text-center">Audio calling and Video calling with a worldwide reach</p>

                <div className="flex items-center justify-center mt-12 relative">
                    <img src={group_of_users} alt="A group of users" className="block" />

                    <img
                        src={green_circle}
                        alt="Green circle"
                        className="absolute top-[86%] hidden lg:block right-[23%]"
                    />

                    <img
                        src={user_one}
                        alt="A lady smiling"
                        className="absolute hidden lg:block left-0 top-[70%] z-10"
                    />

                    <img
                        src={green_circle}
                        alt="Green circle"
                        className="absolute hidden lg:block left-[2%] top-[83%]"
                    />

                    <img
                        src={user_two}
                        alt="A lady smiling"
                        className="absolute hidden lg:block left-[53%] top-[90%]"
                    />

                    <img
                        src={user_three}
                        alt="A lady smiling"
                        className="absolute top-[80%] hidden lg:block right-0 z-10"
                    />

                    <img
                        src={green_circle}
                        alt="Green circle"
                        className="absolute right-[3%] hidden lg:block top-[91%]"
                    />
                </div>

                <img
                    src={green_circle}
                    alt="Green circle"
                    className="absolute hidden lg:block left-[54.5%] top-[96%] "
                />
            </section>


            <footer className="">
                <div className="w-[90%] py-8 mx-auto mt-8 border-t-[1px] flex justify-between gap-4 items-center">
                    <div className="flex items-center gap-2 lg:gap-[1.5rem]">
                        <a href="#">
                            <img src={facebook_icon} alt="Facebook Icon" />
                        </a>

                        <a href="#">
                            <img src={twitter_icon} alt="Twitter Icon" />
                        </a>

                        <a href="#">
                            <img src={instagram_icon} alt="Instagram Icon" />
                        </a>

                        <a href="#">
                            <img src={linkedIn_icon} alt="LinkedIn Icon" />
                        </a>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-8">
                        <a href="#" className="font-[400] leading-[19px] text-[0.88rem] hover:underline">Terms of Service</a>
                        <a href="#" className="font-[400] leading-[19px] text-[0.88rem] hover:underline hidden lg:flex">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </section>
    )
}