import { IoMdClose, IoMdSend } from "react-icons/io"
import useCloseModal from "../../hooks/useCloseModal"
import { useState, ChangeEvent } from "react"
import { FiSearch } from "react-icons/fi"



const AddContact = () => {
  const closeModal = useCloseModal()
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }


  return (
    <section className="bg-[#262626]  text-[#8f9198] rounded-lg">
      <header className="flex justify-between items-center py-2 px-4 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
        <h2 className="text-md text-[#8f9198] font-[700] my-3">Add Contact</h2>
        <button
          className="bg-transparent rounded-lg p-1.5 ml-auto inline-flex items-center hover:text-white text-[#8f9198] text-lg"
          onClick={closeModal}
        ><IoMdClose className="" /></button>
      </header>

      <form className="flex items-center py-6 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
            <label htmlFor="search" className="absolute -left-[1000px]">Search</label>
            <input
              type="text"
              id="search"
              value={inputValue}
              onChange={handleChange}
              name="search"
              className="w-full bg-[#2e2e2e] rounded-md border-none outline-0 outline-none text-sm py-3 mx-6 placeholder:font-[400]"
              placeholder="Search here..." />
            <button className="absolute right-6 px-4 border-none text-[16px]">
              <FiSearch />
            </button>
      </form>

      <div className="p-6 flex justify-end gap-x-6">
          <button onClick={closeModal} className="text-[#4eac6d] hover:underline">Cancel</button>
          <button className="hover:bg-[#4eac6d] text-white/90 py-2 px-4 rounded-[4px] font-[600] bg-[#4eac6d]/60"><IoMdSend /></button>
        </div>
    </section>
  )
}

export default AddContact