import shapeless_icon from "./assets/shapeless_icon.png"
import chats_icons from "./assets/chat_icons.png"
import small_chat_icon from "./assets/small_chat_icon.png"


export default function Welcome() {
    return (
        <div className="mx-auto hidden lg:flex flex-col items-center justify-center p-4 bg-[#212121] text-[#FEFEFE] h-screen md:relative basis-auto flex-grow bg_image">

            <div className="relative mt-16">
                <img src={shapeless_icon} alt="A shapeless chat icon" />
                <img src={chats_icons} alt="Group of chat icons" className="absolute top-[96px]" />
            </div>

            <div className="w-[50%] mx-auto text-center py-4">
                <p className="py-2 font-[500] text-[1.25rem] leading-[34px] text-[#929292]">Hello✋, start new conversations via your email</p>

                <button className="my-4 py-3 px-8 rounded-[8px] font-[600] bg-[#418F5B] text-white/90 mx-auto hover:bg-[rgba(78,172,109,0.5)] flex items-center gap-[8px] duration-500">
                    <small>Add New Contact</small>
                    <img src={small_chat_icon} alt="Small chat icon" />
                </button>
            </div>
        </div>
    )
}