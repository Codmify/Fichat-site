import { useSetRecoilState } from "recoil"
import { chatModalState } from "../atoms/ChatModalAtom"
import { useEffect } from "react"
import { callsState } from "../atoms/CallsAtom"

const useCloseModal = () => {
    const setAuthModel = useSetRecoilState(chatModalState)
    const setCallModal = useSetRecoilState(callsState)

        const closeModal = () => {
            setAuthModel((prev) => ({ ...prev, isOpen: false, type: "invite" }))
            setCallModal((prev) => ({ ...prev, isOpen: false, type: "voice" }))
        }


    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        }

        window.addEventListener("keydown", handleEscape)
        return () => {
            window.removeEventListener("keydown", handleEscape)
        }
    }, [])

    return closeModal;
}

export default useCloseModal