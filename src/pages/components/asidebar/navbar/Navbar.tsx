import user from "../assets/user-image.jpg";
import { Tooltip } from 'flowbite-react';
import { BiUserCircle, BiPhoneCall, BiSolidMessageAltDetail } from "react-icons/bi";
import { PiChats } from "react-icons/pi"
import { RiContactsFill } from "react-icons/ri"
import { BsFillBookmarksFill } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { MdOutlineLightMode } from "react-icons/md"
import { useLocation, Link } from "react-router-dom";


const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="basis-full flex md:py-6 md:basis-[25%] w-full mx-auto bg-[#2e2e2e] sticky bottom-0">
            <ul className="flex md:flex-col mx-auto w-full items-center gap-y-8">
                <li className="w-full hidden md:flex items-center justify-center cursor-pointer text-[#4eac6d] text-xl md:text-[24px]">
                    <BiSolidMessageAltDetail />
                </li>

                <li className={`w-full hidden md:flex items-center justify-center ${location.pathname === "/profile" ? "border-r-2 border-[#4eac6d] text-[#4eac6d]" : ""}`}>
                    <Tooltip
                        content="Profile"
                        style="dark"
                        placement="right"
                        className="md:ml-3"
                    >
                        <Link
                            to="profile"
                            className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer'
                        >
                            <BiUserCircle className={location.pathname === "/profile" ? "text-[#4eac6d]" : ""} />
                        </Link>
                    </Tooltip>
                </li>

                <li className={`w-full flex items-center justify-center text-xl md:text-[24px] ${location.pathname === "/" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Tooltip
                        content="Chats"
                        style="dark"
                        placement="right"
                        className="md:ml-3"
                    >
                        <Link
                            to="."
                            className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer'
                        >
                            <PiChats className={`my-4 md:my-0 ${location.pathname === "/" ? "text-[#4eac6d]" : ""}`} />
                        </Link>
                    </Tooltip>
                </li>

                <li className={`w-full flex items-center justify-center text-xl md:text-[24px] ${location.pathname === "/contacts" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Tooltip
                        content="Contacts"
                        style="dark"
                        placement="right"
                        className="md:ml-3"
                    >
                        <Link
                            to="contacts"
                            className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer'
                        >
                            <RiContactsFill className={`my-4 md:my-0 ${location.pathname === "/contacts" ? "text-[#4eac6d]" : ""}`} />
                        </Link>
                    </Tooltip>
                </li>

                <li className={`w-full flex items-center justify-center text-xl md:text-[24px] ${location.pathname === "/calls" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Tooltip
                        content="Calls"
                        style="dark"
                        placement="right"
                        className="md:ml-3"
                    >
                        <Link
                            to="calls"
                            className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer'
                        >
                            <BiPhoneCall className={`my-4 md:my-0 ${location.pathname === "/calls" ? "text-[#4eac6d]" : ""}`} />
                        </Link>
                    </Tooltip>
                </li>

                <li className={`w-full flex items-center justify-center text-xl md:text-[24px] ${location.pathname === "/bookmark" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Tooltip
                        content="Bookmark"
                        style="dark"
                        placement="right"
                        className="md:ml-3"
                    >
                        <Link
                            to="bookmark"
                            className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer'
                        >
                            <BsFillBookmarksFill className={`my-4 md:my-0 ${location.pathname === "/bookmark" ? "text-[#4eac6d]" : ""}`} />
                        </Link>
                    </Tooltip>
                </li>

                <li className={`w-full flex items-center justify-center text-xl md:text-[24px] ${location.pathname === "/settings" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Tooltip
                        content="Settings"
                        style="dark"
                        placement="right"
                        className="md:ml-3"
                    >
                        <Link
                            to="settings"
                            className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer'
                        >
                            <FiSettings className={`my-4 md:my-0 ${location.pathname === "/settings" ? "text-[#4eac6d]" : ""}`} />
                        </Link>
                    </Tooltip>
                </li>

                <li className="w-full flex items-center justify-center cursor-pointer text-[#8f9198] text-xl md:text-[24px] px-2">
                    <Tooltip
                        content="Light Mode"
                        style="dark"
                        placement="right"
                        className="ml-3"

                    >
                        <MdOutlineLightMode />
                    </Tooltip>
                </li>

                <li className="w-full flex items-center justify-center cursor-pointer">
                    <img src={user} alt="User" className="rounded-full w-[26px] md:w-[30px]" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar