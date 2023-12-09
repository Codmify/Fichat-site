import { FiSearch } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { ChangeEvent, useState } from "react"
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { chatModalState } from "../../atoms/ChatModalAtom";
import AllChats from "../../components/allchats/AllChats";
import ArchivedContact from "../../components/archivedContact/ArchivedContact";
import { chatState } from "../../atoms/ChatAtom";
import ChatToolTip from "../../components/tooltip/ChatToolTip";
import { Outlet, useParams } from "react-router-dom";


export const Chat = () => {
  const { id } = useParams()
  const [searchString, setSearchString] = useState<string>("")
  const setChatModalState = useSetRecoilState(chatModalState)
  const allChatState = useRecoilValue(chatState)


  const handleInvite = () => {
    setChatModalState((prev) => ({ ...prev, isOpen: true, type: "invite" }))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value.toLowerCase())
  }

  const handleSearch = () => {
    setSearchString("")
  }

  return (
    <>
      <section className={`bg-[#212121] basis-full lg:min-w-[23%] lg:basis-[23%] text-[#8f9198] text-lg font-[700] md:ml-[70px] ${id && "hidden lg:flex"}`}>
        <div className="bg-[#262626] max-h-screen overflow-y-auto w-full mx-auto">
          <header className="sticky top-0 bg-[#262626] w-full pt-6 z-20 md:pl-6 px-3">
            
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
                value={searchString}
                onChange={handleChange}
                name="search"
                autoComplete="off"
                className="w-full bg-[#2e2e2e] border-none rounded-md text-sm py-3 placeholder:font-[400]"
                placeholder="Search here..."
              />
              <button className="absolute right-4 px-4 outline-none border-none text-[16px]">
                <FiSearch />
              </button>
            </form>
          </header>

          {allChatState.type === "chats" ? 
          <AllChats search={searchString} handleSearch={handleSearch} /> 
          : <ArchivedContact />
          }
        </div>
      </section>
      <Outlet />
    </>
  ) 
}
