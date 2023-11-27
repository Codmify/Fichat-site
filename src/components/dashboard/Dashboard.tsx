import ChatModal from "../modals/ChatModal";
import { useRecoilValue } from "recoil";
import { chatModalState } from "../../atoms/ChatModalAtom";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { callsState } from "../../atoms/CallsAtom";
import CallsModal from "../modals/CallsModal";
import { useEffect } from "react";


export default function Dashboard() {
    const chatState = useRecoilValue(chatModalState)
    const callState = useRecoilValue(callsState)
    const accessToken = sessionStorage.getItem("access_token") as string
    const navigate = useNavigate()

    useEffect(() => {
        if (!accessToken) {
            navigate("/")
        }

    }, [navigate, accessToken])

    return (
        <>
            {chatState.isOpen && <ChatModal />}
            {callState.isOpen && <CallsModal />}
            <Navbar />
            <main className="min-h-screen flex w-full">
                <Outlet />
            </main>
        </>
    )
}