import { PiArchiveDuotone } from "react-icons/pi"
import { useSetRecoilState } from "recoil"
import { chatState } from "../../../atoms/ChatAtom"


type ArchivedContacts = {
    name: string,
    logo: string,
    isActive: boolean
}

const ArchivedContact = () => {
    const setChatState = useSetRecoilState(chatState)

    const archivedContacts: ArchivedContacts[] = [
        { name: "Miranda Valentine", logo: "mv", isActive: true },
        { name: "Dean Vargas", logo: "dv", isActive: true },
        { name: "Melody Montoya", logo: "mm", isActive: true },
        { name: "Miranda Valentine", logo: "", isActive: false },
    ]

    const handleChats = () => {
        setChatState((prev) => ({ ...prev, isOpen: true, type: "chats" }))
    }

    return (
        <>
            <section className="bg-[#262626]">
                <h2 className="uppercase text-xs font-[400] my-2 px-4 md:px-6">Archived</h2>
                <div>
                    <ul className="py-1">
                        {archivedContacts.map(contact => (
                            <li key={contact.name} className="">
                                <article className="flex justify-between items-center px-4 md:px-6 py-2">
                                    <div className="flex gap-2 items-center">
                                        <div className={`w-[30px] h-[30px] rounded-full relative uppercase flex items-center justify-center text-white ${contact.logo === "mv" ? "bg-[#ffd166]" : contact.logo === "dv" ? "bg-[#50a5f1]" : contact.logo === "mm" ? "bg-[#ef476f]" : "bg-[#2e2e2e]"}`}>
                                            <div className="text-xs">{!contact.logo ? "#" : contact.logo}</div>
                                            <div className={`${contact.isActive ? "w-3 h-3 border-2 border-black rounded-full bg-[#06d6a0] absolute -right-1 bottom-0" : "hidden"}`}></div>
                                        </div>
                                        <h3 className="text-sm">{contact.name}</h3>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <div
                className="flex justify-center items-center gap-x-1 pb-3 cursor-pointer w-fit mx-auto"
                onClick={handleChats}
            >
                <small className="text-[11px] text-[#4eac6d]">Chats</small>
                <PiArchiveDuotone className="text-[#4eac6d]" size={10} />
            </div>
        </>
    )
}

export default ArchivedContact