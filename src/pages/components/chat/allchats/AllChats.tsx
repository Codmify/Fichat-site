import catrina from "../assets/catrina.jpg"
import donaldson from "../assets/donaldson.jpg"
import faulkna from "../assets/faulkna.jpg"
import hendrix from "../assets/hendrix.jpg"
import margurite from "../assets/margurite.jpg"
import norris from "../assets/norris.jpg"
import tonia from "../assets/tonia.jpg"
import { AiOutlinePlus } from "react-icons/ai"
import { PiArchiveDuotone } from "react-icons/pi"
import { chatModalState } from "../../../atoms/ChatModalAtom"
import { useSetRecoilState } from "recoil"
import { chatState } from "../../../atoms/ChatAtom"
import ChatToolTip from "../../tooltip/ChatToolTip"
import { Link } from "react-router-dom"


type Contact = {
  name: string,
  image: string,
  isActive: boolean,
  isFavorite: boolean,
  messages: string | number
}

type Channel = {
  name: string,
  messages: number | string
}

const AllChats = () => {
  const setChatModalState = useSetRecoilState(chatModalState)
  const setChatState = useSetRecoilState(chatState)

  const handleInvite = (type: "contact" | "group") => {
    setChatModalState((prev) => ({ ...prev, isOpen: true, type: type }))
  }

  const handleAllChats = () => {
    setChatState((prev) => ({ ...prev, isOpen: true, type: "archived" }))
  }


  const contacts: Contact[] = [
    {
      name: "Marguerite Campbell",
      image: margurite,
      isActive: true,
      isFavorite: true,
      messages: 3,
    },
    {
      name: "Katrina",
      image: catrina,
      isActive: false,
      isFavorite: true,
      messages: ""
    },
    {
      name: "Miranda",
      image: norris,
      isActive: true,
      isFavorite: true,
      messages: ""
    },
    {
      name: "Faulkner Benjamin",
      image: faulkna,
      isActive: true,
      isFavorite: true,
      messages: ""
    },
    {
      name: "Tonia Clay",
      image: tonia,
      isActive: true,
      isFavorite: false,
      messages: ""
    },
    {
      name: "Hendrix Martin",
      image: hendrix,
      isActive: false,
      isFavorite: false,
      messages: ""
    },
    {
      name: "Dean Vargas",
      image: catrina,
      isActive: true,
      isFavorite: false,
      messages: 5
    },
    {
      name: "Donaldson Riddle",
      image: donaldson,
      isActive: true,
      isFavorite: false,
      messages: ""
    },
    {
      name: "Norris Decker",
      image: norris,
      isActive: true,
      isFavorite: false,
      messages: ""
    },
    {
      name: "Zimmerman Langley",
      image: margurite,
      isActive: true,
      isFavorite: false,
      messages: ""
    },

  ]

  const channels: Channel[] = [
    { name: "Landing Design", messages: 12 },
    { name: "Design Phase 2", messages: "" },
    { name: "Brand Suggestion", messages: 85 },
    { name: "Reporting", messages: "" }
  ]

  const favourites = contacts.filter(contact => contact.isFavorite)
  const directMessages = contacts.filter(contact => !contact.isFavorite)


  return (
    <>
      <section className="bg-[#262626] w-full">
        <h2 className="uppercase text-xs font-[400] my-2">Favourites</h2>
        <div>
          <ul className="py-1">
            {favourites.map(favorite => (
              <li key={favorite.name} className="my-3">
                <Link to={`/chats/${4}`} className="flex justify-between items-center gap-4"
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] relative">
                      <img src={favorite.image} alt={favorite.name} className="rounded-full" />
                      <div className={`${favorite.isActive ? "w-3 h-3 border-2 border-black rounded-full bg-[#06d6a0] absolute -right-1 bottom-0" : "hidden"}`}></div>
                    </div>
                    <h3 className='text-sm'>{favorite.name}</h3>
                  </div>
                  <div className={`${favorite.messages ? "bg-[#2e2e2e] text-[11px] rounded-full px-2" : "hidden"}`}>
                    <p>{favorite.messages}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="uppercase text-xs font-[400] mt-4 flex justify-between items-center">DIRECT MESSAGES
          <button
            className="bg-[rgba(78,172,109,0.1)] p-2 text-white hover:bg-[#4eac6d] text-sm rounded-sm group relative"
            onClick={() => handleInvite("contact")}
          >
            <AiOutlinePlus />
            <ChatToolTip path="New Message" />
          </button>
        </h2>
        <div>
          <ul className="py-1">
            {directMessages.map(favorite => (
              <li key={favorite.name} className="my-3">
                <article className="flex justify-between items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] relative">
                      <img src={favorite.image} alt={favorite.name} className="rounded-full" />
                      <div className={`${favorite.isActive ? "w-3 h-3 border-2 border-black rounded-full bg-[#06d6a0] absolute -right-1 bottom-0" : "hidden"}`}></div>
                    </div>
                    <h3 className="text-sm">{favorite.name}</h3>
                  </div>
                  <div className={`${favorite.messages ? "bg-[#2e2e2e] text-[11px] rounded-full px-2" : "hidden"}`}>
                    <p>{favorite.messages}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="uppercase text-xs font-[400] mt-4 flex justify-between items-center w-full">Channels
          <button className="bg-[rgba(78,172,109,0.1)] p-2 text-white hover:bg-[#4eac6d] text-sm rounded-sm relative group"
            onClick={() => handleInvite("group")}
          >
            <AiOutlinePlus />
            <ChatToolTip path="Create Group" />
          </button>
        </h2>
        <div className="pb-8">
          <ul className="py-1">
            {channels.map(channel => (
              <li key={channel.name} className="my-3">
                <article className="flex justify-between items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#2e2e2e] text-[11px] rounded-full px-2">
                      <p className="text-xl">#</p>
                    </div>
                    <h3 className="text-sm">{channel.name}</h3>
                  </div>
                  <div className={`${channel.messages ? "bg-[#2e2e2e] text-[11px] rounded-full px-2" : "hidden"}`}>
                    <p>{channel.messages}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex justify-center items-center gap-x-1 pb-[70px] md:pb-1.5 cursor-pointer w-fit mx-auto"
        onClick={handleAllChats}
      >
        <small className="text-[11px] text-[#4eac6d]">Archived Contacts</small>
        <PiArchiveDuotone className="text-[#4eac6d]" size={10} />
      </div>
    </>
  )
}

export default AllChats