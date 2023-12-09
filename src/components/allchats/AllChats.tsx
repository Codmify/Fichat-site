// import { AiOutlinePlus } from "react-icons/ai"
// import { PiArchiveDuotone } from "react-icons/pi"
// import { chatModalState } from "../../atoms/ChatModalAtom"
// import { useSetRecoilState } from "recoil"
// import { chatState } from "../../atoms/ChatAtom"
// import ChatToolTip from "../tooltip/ChatToolTip"
// import { useParams } from "react-router-dom"
// import { contacts } from "../../library/contacts"
import { Accordion, Flowbite } from "flowbite-react"
import { customTheme } from "../../library/customTheme"


/* type Props = {
  search: string
  handleSearch: () => void
} */

const AllChats = (/* { search, handleSearch }: Props */) => {

  // const setChatModalState = useSetRecoilState(chatModalState)
  // const setChatState = useSetRecoilState(chatState)
  // const params = useParams()
  // const { id } = params

 /*  const handleInvite = (type: "contact" | "group") => {
    setChatModalState((prev) => ({ ...prev, isOpen: true, type: type }))
  } */

  /* const handleAllChats = () => {
    setChatState((prev) => ({ ...prev, isOpen: true, type: "archived" }))
  } */

  // const favourites = contacts.filter(contact => contact.isFavorite === true)
  // const directMessages = contacts.filter(contact => !contact.isFavorite)
  // const channels = contacts.filter(contact => contact.type === "channel")



  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Accordion flush>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Flowbite>
  );
}

{/* <section className="bg-[#262626]"> */ }
{/*  <h2 className="uppercase text-xs font-[700] py-2 px-6">Favourites</h2>
        <div>
          <ul className="py-1">
            {favourites.map(favorite => (
              <li
                key={favorite.id}
                className={`${favorite.id === id ? "bg-[#4eac6d65] text-white" : ""} 
              ${favorite.name.toLowerCase().includes(search) ? "block" : "hidden"}`}
              >
                <Link
                  to={`/dashboard/chats/${favorite.id}`}
                  className="flex justify-between items-center py-2 px-4 md:pl-6 md:pr-2 gap-4"
                  onClick={handleSearch}
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] relative">
                      <img src={favorite.image} alt={favorite.name} className="rounded-full" />
                      <div className={`${favorite.isActive ? "w-3 h-3 border-2 border-black rounded-full bg-[#06d6a0] absolute -right-1 bottom-0" : "hidden"}`}></div>
                    </div>

                    <h3 className={`text-sm ${favorite.messages ? "text-white/70 font-[600]" : "font-[400]"}`}>{search ? favorite.name.toLowerCase() : favorite.name}</h3>
                  </div>
                  <div className={`${favorite.messages ? "bg-[#2e2e2e] text-white/70 text-[11px] rounded-full px-2" : "hidden"}`}>
                    <p>{favorite.messages}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="uppercase text-xs font-[700] mt-4 px-4 md:pl-6 md:pr-2 flex justify-between items-center">DIRECT MESSAGES
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
            {directMessages.map(message => (
              <li
                key={message.name}
                className={`${message.id === id ? "bg-[#4eac6d65] text-white" : ""} ${message.name.toLowerCase().includes(search) ? "block" : "hidden"}`}
              >
                <Link
                  to={`/dashboard/chats/${message.id}`}
                  className="flex justify-between items-center py-2 px-4 md:pl-6 md:pr-2 gap-4"
                  onClick={handleSearch}
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] relative">
                      <img src={message.image} alt={message.name} className="rounded-full" />
                      <div className={`${message.isActive ? "w-3 h-3 border-2 border-black rounded-full bg-[#06d6a0] absolute -right-1 bottom-0" : "hidden"}`}></div>
                    </div>
                    <h3 className={`text-sm ${message.messages ? "text-white/70 font-[600]" : "font-[400]"}`}>{message.name}</h3>
                  </div>
                  <div className={`${message.messages ? "bg-[#2e2e2e] text-white/70 text-[11px] rounded-full px-2" : "hidden"}`}>
                    <p>{message.messages}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="uppercase text-xs font-[400] mt-4 px-4 md:pl-6 md:pr-2 flex justify-between items-center w-full">Channels
          <button className="bg-[rgba(78,172,109,0.1)] p-2 text-white hover:bg-[#4eac6d] text-sm rounded-sm relative group"
            onClick={() => handleInvite("group")}
          >
            <AiOutlinePlus />
            <ChatToolTip path="Create Group" />
          </button>
        </h2>
        <div className="pb-8">
          <ul className="py-4">
            {channels.map(channel => (
              <li key={channel.name}
                className={`${channel.id === id ? "bg-[#4eac6d65] text-white" : ""}`}
              >
                <Link to={`/dashboard/chats/${channel.id}`} className="flex justify-between items-center gap-4 py-2 px-4 md:pl-6 md:pr-2">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#2e2e2e] text-[11px] rounded-full px-2">
                      <p className="text-xl">{channel.image}</p>
                    </div>
                    <h3 className={`text-sm ${channel.messages ? "text-white/70 font-[600]" : "font-[400]"}`}>{channel.name}</h3>
                  </div>
                  <div className={`${channel.messages ? "bg-[#2e2e2e] text-white/70 text-[11px] rounded-full px-2" : "hidden"}`}>
                    <p>{channel.messages}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex justify-center items-center gap-x-1 pb-[70px] md:pb-1.5 cursor-pointer w-full mx-auto"
        onClick={handleAllChats}
      >
        <small className="text-[11px] text-[#4eac6d]">Archived Contacts</small>
        <PiArchiveDuotone className="text-[#4eac6d]" size={10} />
      </div> */}


export default AllChats