import { ChangeEvent, FormEvent } from "react"
import { FiMoreHorizontal } from "react-icons/fi"
import { BsEmojiSmile, BsMic } from "react-icons/bs"
import { IoMdSend } from "react-icons/io"

type Props = {
    message: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export default function Footer({ message, handleChange, handleSubmit }: Props) {

    return (
        <footer className="bg-[#2e2e2e] text-[#8f9198] z-40 w-full px-2 md:px-6 py-4 fixed lg:absolute bottom-0 border-t-[0.25px] border-t-[#3d3d3d]">
            <form className="flex items-center gap-4 md:gap-6" onSubmit={handleSubmit}>
                <FiMoreHorizontal size={20} className="cursor-pointer" />
                <BsEmojiSmile size={20} className="cursor-pointer" />
                <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={handleChange}
                    name="message"
                    autoComplete="off"
                    className="w-full bg-[#262626] text-white/90 font-[500] rounded-md border-none outline-0 outline-none text-[1rem] tracking-wide py-3 placeholder:font-[400]"
                    placeholder="Type your message..." />
                <BsMic size={20} className="cursor-pointer hidden md:flex" />
                <button className="hover:bg-[#4eac6d] text-white/90 py-2 px-4 rounded-[4px] font-[600] bg-[#4eac6d]/60" disabled={!message}><IoMdSend size={20} className="cursor-pointer" /></button>
            </form>
        </footer>
    )
}