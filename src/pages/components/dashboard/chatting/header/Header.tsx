import { BiSolidPhoneCall, BiVideo } from "react-icons/bi"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { FiChevronLeft } from "react-icons/fi"
import { FaSearch } from "react-icons/fa"
import { CgMoreVerticalAlt } from "react-icons/cg"
import { useSetRecoilState } from "recoil"
import { Link, useParams } from "react-router-dom"
import { callsState } from "../../../../atoms/CallsAtom"
import { contacts } from "../../../../library/contacts"
import MenuToolTip from "../../../tooltip/MenuToolTip"


type Props = {
    isOpen: boolean
    isMenu: boolean,
    handleLeftMenu: () => void,
    setIsOpen: (isOpen: boolean) => void
}

export default function Header({ handleLeftMenu, isMenu, setIsOpen }: Props) {
    const { id } = useParams()
    const setCallState = useSetRecoilState(callsState)
    const filteredContacts = contacts.filter((contact) => contact.id === id)

    const handleVoiceCall = () => {
        setCallState((prev) => ({ ...prev, isOpen: true, type: "voice" }))
    }

    const handleVideoCall = () => {
        setCallState((prev) => ({ ...prev, isOpen: true, type: "video" }))
    }


    return (
        <header className="bg-[#2e2e2e] text-[#8f9198] sticky top-0 z-40 w-full border-b-[0.25px] border-b-[#3d3d3d]">
            <div className="flex justify-between items-center w-full gap-2 py-3 pr-4 pl-1 md:p-4 lg:p-6">
                {filteredContacts.map(contact => (
                    <div key={contact.name} className="flex gap-3 items-center">
                        <Link to=".." className="cursor-pointer lg:hidden rounded-full">
                            <FiChevronLeft size={25} />
                        </Link>
                        <div className="w-[40px] h-[40px] relative">
                            <img src={contact.image} alt={contact.name} className="rounded-full" />
                            <div className={`w-3 h-3 border-2 border-black rounded-full absolute -right-1 bottom-0 ${contact.isActive ? "bg-[#06d6a0]" : "bg-[#ffd166]"}`}></div>
                        </div>
                        <div>
                            <h3 className='text-[15px] font-[700]'>{contact.name}</h3>
                            <p className="text-xs font-[400] py-0.5">{contact.isActive ? "Active" : "Away"}</p>
                        </div>
                    </div>
                ))}

                <div className="flex gap-3 sm:gap-4 lg:gap-8 items-center relative">
                    <FaSearch size={20} className="cursor-pointer hidden lg:flex" />

                    <BiSolidPhoneCall size={20} className="cursor-pointer" onClick={handleVoiceCall} />

                    <BiVideo size={20} className="cursor-pointer" onClick={handleVideoCall} />

                    <BsFillInfoCircleFill size={20} className="cursor-pointer" onClick={() => setIsOpen(true)} />

                    <CgMoreVerticalAlt size={20}
                        className="cursor-pointer hidden lg:flex"
                        onClick={handleLeftMenu}
                    />

                    {isMenu && <MenuToolTip />}
                </div>
            </div>
        </header>
    )
}