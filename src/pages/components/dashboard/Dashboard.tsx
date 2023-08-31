import { Asidebar } from "../asidebar/Asidebar";
import { BiSolidMessageAltDetail } from "react-icons/bi"
import ChatModal from "../modals/ChatModal";
import { useRecoilValue } from "recoil";
import { chatModalState } from "../../atoms/ChatModalAtom";


export default function Dashboard() {
    const chatState = useRecoilValue(chatModalState)

    return (
        <>
        {chatState.isOpen && <ChatModal />}
        <main className="flex">
            <Asidebar />
            <section className="bg-[#2e2e2e] basis-[70%] mx-auto hidden md:flex items-center justify-center flex-col text-[#8f9198] min-h-screen">
                <div className="bg_image" ></div>
                <div className="absolute">
                    <div className="flex items-center justify-center p-[1.25rem] text-[50px] text-center rounded-full bg-[#4eac6d]/20 w-fit mx-auto">
                        <BiSolidMessageAltDetail className="text-[#4eac6d]" />
                    </div>

                    <div className="w-[50%] mx-auto text-center py-4">
                        <h2 className="text-2xl font-[600]">Welcome to FiChat App</h2>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. cum sociis natoque penatibus et</p>
                        <button className="my-4 py-3 px-8 rounded-md font-[600] bg-[rgb(78,172,109)] text-white/90 hover:bg-[rgba(78,172,109,0.5)]">Get Started</button>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}