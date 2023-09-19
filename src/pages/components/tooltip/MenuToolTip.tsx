import { BsArchive, BsMicMute } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri"

export default function MenuToolTip() {
  return (
    <section className="absolute right-2 bg-[#3a3a3a] top-9 z-10 py-2 w-[150px] md:w-[60%] rounded-lg flex flex-col gap-y-2">
        <div className="hover:bg-[#444444]">
            <small className="w-full px-6 py-1 flex justify-between items-center font-[400] text-[1rem] cursor-pointer"><span>Achive</span> <BsArchive size={15}/></small>
        </div>

        <div className="hover:bg-[#444444]">
            <small className="w-full px-6 py-1 flex justify-between items-center font-[400] text-[1rem] cursor-pointer"><span>Muted</span> <BsMicMute size={15} /></small>
        </div>

        <div className="hover:bg-[#444444]">
            <small className="w-full px-6 py-1 flex justify-between items-center font-[400] text-[1rem] cursor-pointer"><span>Delete</span> <RiDeleteBin6Line size={15} /></small>
        </div>
    </section>
  )
}
