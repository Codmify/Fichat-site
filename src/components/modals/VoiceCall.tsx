import { BsMicMute } from "react-icons/bs"
import { BiVolumeFull, BiUserPlus } from "react-icons/bi"
import { ImPhoneHangUp } from "react-icons/im"
import { contacts } from "../../library/contacts"
import { useParams } from "react-router-dom"


const VoiceCall = () => {
    const params = useParams()
    const { id } = params
    const contactId = contacts.filter((contact) => contact.id === id)


    return (
        <section className="bg-[#262626] pt-6 text-[#8f9198] rounded-lg">
            {contactId.map(contact => (
                <div key={contact.id}>
                    <div>
                        <img src={contact.image} alt="" className="rounded-full h-20 w-20 border-[5px] border-[#424242] mx-auto" />
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-7 -mb-10">
                        <div className="flex flex-col items-center  gap-y-1">
                            <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer font-[700] text-[#8f9198] rounded-full p-2 w-fit">
                                <BsMicMute size={20} />
                            </div>
                            <small className="uppercase text-xs font-[600] py-1">Mute</small>
                        </div>

                        <div className="flex flex-col items-center gap-y-1">
                            <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer text-[#8f9198] rounded-full p-2 w-fit">
                                <BiVolumeFull size={20} />
                            </div>
                            <small className="uppercase text-xs font-[600] py-1">Speaker</small>
                        </div>

                        <div className="flex flex-col items-center  gap-y-1">
                            <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer text-[#8f9198] rounded-full p-2 w-fit">
                                <BiUserPlus size={20} />
                            </div>
                            <small className="uppercase text-xs font-[600] py-1">Add New</small>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 z-10 relative -bottom-[70px]">
                        <div className="bg-[#ef476f] text-white w-fit p-5 border-[6px] border-[#2e2e2e] rounded-full cursor-pointer hover:bg-[#fd5179]">
                            <ImPhoneHangUp size={25} />
                        </div>
                        <h2 className="font-[600]">{contact.name}</h2>
                    </div>

                    <div className="bg-[#318f5165] w-full py-11 rounded-bl-lg rounded-br-lg relative">
                    </div>
                </div>
            ))}
        </section>
    )
}

export default VoiceCall