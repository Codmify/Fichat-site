import { callsState } from "../../atoms/CallsAtom"
import { useRecoilValue } from "recoil"
import useCloseModal from "../../hooks/useCloseModal"
import VideoCall from "./VideoCall"
import VoiceCall from "./VoiceCall"



const CallsModal = () => {
    const callState = useRecoilValue(callsState)
    const closeModal = useCloseModal()

    return (
        <>
            <section className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-40' onClick={closeModal}></section>

           
            <div className="fixed left-[50%] top-[50%] w-full mx-auto max-w-[500px] h-[320px] translate-x-[-50%] translate-y-[-50%] z-50 active_modal">
                <div className="w-full flex justify-center items-center">
                    <div className="w-full h-full mx-auto flex items-center justify-center">
                        <div className="bg-[#2e2e2e] rounded-lg shadow w-full mx-6">
                            {callState.type === "voice" ? <VoiceCall /> : <VideoCall />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallsModal