import userIcon from "../assets/user-image.jpg";
import { BiUserCircle, BiPhoneCall, BiSolidMessageAltDetail } from "react-icons/bi";
import { PiChats } from "react-icons/pi"
import { RiContactsFill } from "react-icons/ri"
import { BsFillBookmarksFill } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { MdOutlineLightMode } from "react-icons/md"
import { useLocation, Link } from "react-router-dom";
import NavToolTip from "../../tooltip/NavToolTip";


const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="fixed md:relative bottom-0 md:left-0 md:py-6 mx-auto bg-[#2e2e2e] w-full md:w-[90px] z-40 md:h-screen">
            <ul className="flex md:flex-col w-full mx-auto items-center gap-y-9">
                <li className="w-full hidden md:flex items-center justify-center cursor-pointer text-[#4eac6d] text-lg md:text-[25px]">
                    <BiSolidMessageAltDetail />
                </li>

                <li className={`w-full hidden md:flex items-center justify-center text-lg md:text-[25px] ${location.pathname === "/profile" ? "border-r-2 border-[#4eac6d] text-[#4eac6d]" : ""}`}>
                    <Link
                        to="profile"
                        className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer group'
                    >
                        <BiUserCircle className={location.pathname === "/profile" ? "text-[#4eac6d]" : ""} />

                        <NavToolTip path="Profile" />
                    </Link>
                </li>

                <li className={`w-full flex items-center justify-center text-lg md:text-[25px] ${location.pathname === "/" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Link
                        to="."
                        className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer group'
                    >
                        <PiChats className={`my-4 md:my-0 ${location.pathname === "/" ? "text-[#4eac6d]" : ""}`} />

                        <NavToolTip path="Chats" />
                    </Link>
                </li>

                <li className={`w-full flex items-center justify-center text-lg md:text-[25px] ${location.pathname === "/contacts" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Link
                        to="contacts"
                        className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer group'
                    >
                        <RiContactsFill className={`my-4 md:my-0 ${location.pathname === "/contacts" ? "text-[#4eac6d]" : ""}`} />

                        <NavToolTip path="Contacts" />
                    </Link>
                </li>

                <li className={`w-full flex items-center justify-center text-lg md:text-[25px] ${location.pathname === "/calls" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Link
                        to="calls"
                        className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer group'
                    >
                        <BiPhoneCall className={`my-4 md:my-0 ${location.pathname === "/calls" ? "text-[#4eac6d]" : ""}`} />

                        <NavToolTip path="Calls" />
                    </Link>
                </li>

                <li className={`w-full flex items-center justify-center text-lg md:text-[25px] ${location.pathname === "/bookmark" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Link
                        to="bookmark"
                        className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer group'
                    >
                        <BsFillBookmarksFill className={`my-4 md:my-0 ${location.pathname === "/bookmark" ? "text-[#4eac6d]" : ""}`} />

                        <NavToolTip path="Bookmark" />
                    </Link>
                </li>

                <li className={`w-full flex items-center justify-center text-lg md:text-[25px] ${location.pathname === "/settings" ? "border-t-2 md:border-t-0 md:border-r-2 border-[#4eac6d]" : ""}`}>
                    <Link
                        to="settings"
                        className='w-full p-1 flex items-center justify-center text-[#8f9198] cursor-pointer group'
                    >
                        <FiSettings className={`my-4 md:my-0 ${location.pathname === "/settings" ? "text-[#4eac6d]" : ""}`} />

                        <NavToolTip path="Settings" />
                    </Link>
                </li>

                <li className="w-full flex items-center justify-center cursor-pointer text-[#8f9198] text-lg md:text-[25px] px-2 group">
                    <MdOutlineLightMode />
                    <NavToolTip path="Light Mode" />
                </li>

                <li className="w-full flex items-center justify-center cursor-pointer">
                    <img src={userIcon} alt="User" className="rounded-full w-[20px] md:w-[30px]" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar