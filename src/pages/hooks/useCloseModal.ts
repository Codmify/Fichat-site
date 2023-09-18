import { useSetRecoilState } from "recoil"
import { chatModalState } from "../atoms/ChatModalAtom"
import { useEffect } from "react"

const useCloseModal = () => {
    const setAuthModel = useSetRecoilState(chatModalState)

        const closeModal = () => {
            setAuthModel((prev) => ({ ...prev, isOpen: false, type: "invite"}))
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