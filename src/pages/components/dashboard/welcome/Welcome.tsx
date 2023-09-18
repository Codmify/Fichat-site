import { BiSolidMessageAltDetail } from "react-icons/bi"


export default function Welcome() {
    return (
        <div className="mx-auto hidden lg:grid items-center justify-center p-4 bg-[#2e2e2e] text-[#8f9198] h-screen basis-auto flex-grow md:relative bg_image">
            <div className="w-[50%] mx-auto text-center py-4">
                <div className="p-[1.25rem] text-[50px] text-center rounded-full bg-[#4eac6d]/20 w-fit mx-auto">
                    <BiSolidMessageAltDetail className="text-[#4eac6d]" />
                </div>
                <h2 className="text-2xl font-[600] mt-4">Welcome to FiChat Site</h2>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. cum sociis natoque penatibus et</p>
                <button className="my-4 py-3 px-8 rounded-md font-[600] bg-[rgb(78,172,109)] text-white/90 hover:bg-[rgba(78,172,109,0.5)]">Get Started</button>
            </div>
        </div>
    )
}