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
            <section className='absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-40' onClick={closeModal}></section>

            <div className="flex absolute sm:left-[12%] left-0 md:left-[30%] top-[20%] md:top-[25%] w-full mx-auto sm:w-[500px] h-[320px] items-center justify-center z-50">
                <div className="w-full flex justify-center items-center">
                    <div className="relative w-full h-full mx-auto flex items-center justify-center">
                        <div className="bg-[#2e2e2e] rounded-lg shadow relative w-full mx-6">
                            {callState.type === "voice" ? <VoiceCall /> : <VideoCall />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallsModal