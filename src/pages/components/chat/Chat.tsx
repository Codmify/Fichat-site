import { FiSearch } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { ChangeEvent, useState } from "react"
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { chatModalState } from "../../atoms/ChatModalAtom";
import AllChats from "./allchats/AllChats";
import ArchivedContact from "./archivedContact/ArchivedContact";
import  { chatState }  from "../../atoms/ChatAtom";
import ChatToolTip from "../tooltip/ChatToolTip";


export const Chat = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const setChatModalState = useSetRecoilState(chatModalState)
  const allChatState = useRecoilValue(chatState)
 

  const handleInvite = () => {
    setChatModalState((prev) => ({ ...prev, isOpen: true, type: "invite" }))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase())
  }

  return (
    <section className="max-h-screen text-[#8f9198] text-xl font-[700] w-full overflow-y-auto">
      <div className="bg-[#262626] w-full px-6">
        <header className="sticky top-0 bg-[#262626] w-full pt-6 z-10">
          <div className="flex justify-between items-center">
            <h2>Chats</h2>
            <button
              className="bg-[rgba(78,172,109,0.1)] p-2 text-white hover:bg-[#4eac6d] text-sm rounded-sm relative group"
              onClick={handleInvite}
            >
              <AiOutlinePlus />
              <ChatToolTip path="Add Contact" />
            </button>
          </div>

          <form className="flex items-center py-6">
            <label htmlFor="search" className="absolute -left-[1000px]">Search</label>
            <input
              type="text"
              id="search"
              value={inputValue}
              onChange={handleChange}
              name="search"
              className="w-full bg-[#2e2e2e] rounded-md border-none outline-0 outline-none text-sm py-3 placeholder:font-[400]"
              placeholder="Search here..." />
            <button className="absolute right-0 px-4 border-none text-[16px]">
              <FiSearch />
            </button>
          </form>
        </header>

        {allChatState.type === "chats" ? <AllChats /> : <ArchivedContact />}
      </div>
    </section>
  )
}
