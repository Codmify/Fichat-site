import { BsMicMute, BsCameraVideoOff } from "react-icons/bs"
import { BiVolumeFull, BiRefresh } from "react-icons/bi"
import { ImPhoneHangUp } from "react-icons/im"
import { contacts } from "../../library/contacts"
import { useParams } from "react-router-dom"


const VideoCall = () => {
  const params = useParams()
  const { id } = params
  const contactId = contacts.filter((contact) => contact.id === id)


  return (
    <section className="">
      {contactId.map(contact => (
        <div key={contact.id} className='w-full flex flex-col justify-center items-center relative'>
          <img src={contact.image} alt="" className="rounded-lg h-[320px] w-[500px] object-cover" />

          <div className="flex items-center justify-center absolute gap-6 w-full z-[1]">
            <div className="flex flex-col items-center gap-y-1">
              <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer font-[700] text-[#8f9198] rounded-full p-2 w-fit">
                <BsMicMute size={20} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-1">
              <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer text-[#8f9198] rounded-full p-2 w-fit">
                <BiVolumeFull size={20} />
              </div>
            </div>

            <div className="flex flex-col items-center  gap-y-1">
              <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer text-[#8f9198] rounded-full p-2 w-fit">
                <BsCameraVideoOff size={20} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-1">
              <div className="bg-[#302f2f] hover:bg-[#3a3939] cursor-pointer text-[#8f9198] rounded-full p-2 w-fit">
                <BiRefresh size={20} />
              </div>
            </div>
          </div>

          <div className="bg-[#42925d] h-20 w-full absolute bottom-0 rounded-bl-lg rounded-br-lg"></div>

          <div className="flex absolute bottom-2 flex-col items-center gap-1 z-10">
            <div className="bg-[#ef476f] text-white w-fit p-5 border-[6px] border-[#2e2e2e] rounded-full cursor-pointer hover:bg-[#fd5179]">
              <ImPhoneHangUp size={25} />
            </div>
            <h2 className="font-[600] text-white/70">{contact.name}</h2>
          </div>

        </div>
      ))}
    </section>
  )
}

export default VideoCall