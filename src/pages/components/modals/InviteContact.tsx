import { IoMdClose } from "react-icons/io"
import useCloseModal from "../../hooks/useCloseModal"
import { useState, ChangeEvent } from "react"


const InviteContact = () => {
  const closeModal = useCloseModal()
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
  })

  const [textarea, setTextArea] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <section className="bg-[#262626]  text-[#8f9198] rounded-lg">
      <header className="flex justify-between items-center py-2 px-4 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
        <h2 className="text-md text-[#8f9198] font-[700] my-3">Invitation</h2>
        <button
          className="bg-transparent rounded-lg p-1.5 ml-auto inline-flex items-center hover:text-white text-[#8f9198] text-lg"
          onClick={closeModal}
        ><IoMdClose className="" /></button>
      </header>

      <form>
        <div className="p-6 flex flex-col gap-y-4 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
          <div>
            <label htmlFor="email" className="font-[600]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputValue.email}
              onChange={handleChange}
              className="w-full bg-[#2e2e2e]  outline-0 border-0 rounded-md text-sm py-3 my-2"
              placeholder="Enter email" />
          </div>

          <div>
            <label htmlFor="name" className="font-[600]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputValue.name}
              onChange={handleChange}
              className="w-full bg-[#2e2e2e]  outline-0 border-0 rounded-md text-sm py-3 mt-2 px-3"
              placeholder="Enter name" />
          </div>

          <div>
            <label htmlFor="message" className="font-[600]">Invitation Message</label>
            <textarea
              id="message"
              name="message"
              value={textarea}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextArea(e.target.value)}
              className="w-full bg-[#2e2e2e]  outline-0 border-0 rounded-md text-sm py-3 mt-2 px-3"
              placeholder="Enter message"></textarea>
          </div>
        </div>

        <div className="p-6 flex justify-end gap-x-6">
          <button onClick={closeModal} className="text-[#4eac6d] hover:underline">Close</button>
          <button className="hover:bg-[#4eac6d] text-white/90 py-2 px-4 rounded-[4px] font-[600] bg-[#4eac6d]/60">Invite</button>
        </div>
      </form>

    </section>
  )
}

export default InviteContact