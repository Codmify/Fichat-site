import { chatModalState } from "../../atoms/ChatModalAtom"
import { useRecoilValue } from "recoil"
import useCloseModal from "../../hooks/useCloseModal"
import InviteContact from "./InviteContact"
import AddContact from "./AddContact"
import Group from "./Group"


const ChatModal = () => {
    const chatModal = useRecoilValue(chatModalState)
    const closeModal = useCloseModal()

    return (
        <>
            <section className='absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-40' onClick={closeModal}></section>
            
            <div className="w-full sm:w-[600px] sm:left-[12%] absolute left-0 md:left-[30%] top-[11%] flex justify-center items-center z-50">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                    <div className="bg-[#2e2e2e] rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-800 mx-6">
                        {chatModal.type === "invite" ? <InviteContact /> : chatModal.type === "contact" ? <AddContact /> : <Group />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatModal