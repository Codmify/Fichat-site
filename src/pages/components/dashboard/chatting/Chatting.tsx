import { ChangeEvent, FormEvent, useState } from "react"
import Messages from "./messages/Messages"
import Header from "./header/Header"
import Footer from "./footer/Footer";
import Drawer from "./drawer/Drawer";


const Chatting = () => {
  const [allMessages, setAllMessages] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    allMessages.push(message)
    setIsSent(true)
    setMessage("")
    setAllMessages(allMessages)
  }

  const handleLeftMenu = () => {
    setIsMenu(true)
    setOpenMenu(false)
  }

  const handleRightMenu = () => {
    setIsMenu(false)
    setOpenMenu(true)
  }

  const closeAllMenu = () => {
    if (isMenu) {
      setIsMenu(false)
    }

    if (openMenu) {
      setOpenMenu(false)
    }
  }


  return (
    <section className={`bg-[#2e2e2e] bg_image basis-auto grow lg:flex text-[#8f9198] h-screen relative`} onClick={closeAllMenu}>
      <section className={`h-screen basis-auto grow relative z-20  ${isOpen && "hidden lg:block"}`}>

        <Header
          isMenu={isMenu}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleLeftMenu={handleLeftMenu}
        />

        <Messages
          isSent={isSent}
          allMessages={allMessages}
        />

        <Footer
          message={message}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>


      {/* -------------------- Right Sidebar ---------------------------- */}
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openMenu={openMenu}
        handleRightMenu={handleRightMenu}
      />
    </section>
  )
}

export default Chatting