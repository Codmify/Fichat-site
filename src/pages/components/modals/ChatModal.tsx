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
            <section className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-40' onClick={closeModal}></section>
            
            <div className="fixed left-[50%] top-[50%] w-full mx-auto max-w-[600px] h-[320px] translate-x-[-50%] translate-y-[-50%] z-50 active_modal">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                    <div className="bg-[#2e2e2e] rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-800 mx-2">
                        {chatModal.type === "invite" ? <InviteContact /> : chatModal.type === "contact" ? <AddContact /> : <Group />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatModal