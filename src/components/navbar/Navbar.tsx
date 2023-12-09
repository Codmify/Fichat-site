import NavToolTip from "../tooltip/NavToolTip";
import chat_icon from "./assets/chat_icon.png"
import call_icon from "./assets/call_icon.png"
import start_icon from "./assets/star_icon.png"
import media_icon from "./assets/media_icon.png"
import settings_icon from "./assets/settings_icon.png"
import plus_icon from "./assets/plus_icon.png"
import profile_picture from "./assets/profile_picture.png"
import login_icon from "./assets/login_icon.png"
import { useParams, Link } from "react-router-dom";



const Navbar = () => {
    const { id } = useParams()


    return (
        <nav className={`fixed bottom-0 lg:left-0 lg:top-0 md:pt-4 px-[5px] mx-auto bg-[#4EAC6D] text-[#FEFEFE] w-full md:w-[70px] z-30 ${id && "hidden lg:flex"}`}>
            <ul className="flex md:flex-col w-full md:h-screen justify-between mx-auto items-center md:pb-[40px]">

                <div className="flex md:flex-col gap-[10px]">
                    <li className="w-full hidden md:flex items-center justify-center cursor-pointer">
                        <h4 className="bg-[#FEFEFE] text-[#212121] w-[50px] h-[50px] rounded-[8px] font-[600] text-[1.5rem] leading-8 flex justify-center items-center">FC</h4>
                    </li>

                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="/dashboard"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <div className="bg-[#FEFEFE] w-[46px] h-[46px] rounded-[8px] flex justify-center items-center relative">
                                <div className="bg-[#EF4444] w-[22px] h-[22px] rounded-full flex justify-center items-center absolute -top-2 left-[34px] text-[12px] leading-[14px] font-[700] text-[#FEFEFE]">1</div>

                                <img src={chat_icon} alt="Chat Icon" width={32} />
                            </div>

                            <NavToolTip path="Chats" />
                        </Link>
                    </li>

                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="calls"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >

                            <img src={start_icon} alt="Call Icon" width={32} />

                            <NavToolTip path="Calls" />
                        </Link>
                    </li>

                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="#"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <img src={call_icon} alt="Call Icon" width={32} />
                            <NavToolTip path="Favorite" />
                        </Link>
                    </li>
                </div>

                <div className="flex md:flex-col gap-4">
                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="bookmark"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <img src={media_icon} alt="Media Icon" width={32} />
                            <NavToolTip path="Bookmark" />
                        </Link>
                    </li>

                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="settings"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <img src={settings_icon} alt="Settings Icon" width={32} />
                            <NavToolTip path="Settings" />
                        </Link>
                    </li>

                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="#"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <img src={plus_icon} alt="Plus Icon" width={32} />
                            <NavToolTip path="Add contacts" />
                        </Link>
                    </li>

                    <li className="w-full flex items-center justify-center">
                        <Link
                            to="#"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <div className="bg-[#ECC22D] rounded-[8px] w-[48px] h-[48px] flex justify-center items-center relative">
                                <div className="bg-[#BF3535] w-[22px] h-[22px] rounded-full flex justify-center items-center absolute -top-2 left-[34px] text-[12px] leading-[14px] font-[700] text-[#FEFEFE]">1</div>

                                <img src={profile_picture} alt="User Profile Icon" className="w-[48px] h-[48px] object-cover" />
                            </div>
                            <NavToolTip path="Profile" />
                        </Link>
                    </li>


                    <li className="w-full flex items-center justify-center md:mt-4">
                        <Link
                            to="#"
                            className='w-full p-1 flex items-center justify-center cursor-pointer group'
                        >
                            <img src={login_icon} alt="Logout Icon" width={32} />
                            <NavToolTip path="Log out" />
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar