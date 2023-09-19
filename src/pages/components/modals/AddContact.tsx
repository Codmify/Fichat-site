import { IoMdClose, IoMdSend } from "react-icons/io"
import useCloseModal from "../../hooks/useCloseModal"
import { useState, ChangeEvent } from "react"
import { FiSearch } from "react-icons/fi"
import { contacts } from "../../library/contacts"



const AddContact = () => {
  const closeModal = useCloseModal()
  const [inputValue, setInputValue] = useState("")


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const firstCharacter = contacts.map(contact => contact.name.charAt(0))
  const uniqueCharacter = [...new Set(firstCharacter)].sort()


  return (
    <section className="bg-[#262626]  text-[#8f9198] rounded-lg">
      <header className="flex justify-between items-center py-2 px-4 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
        <h2 className="text-md text-[#8f9198] font-[700] my-3">Add contact</h2>
        <button
          className="bg-transparent rounded-lg p-1.5 ml-auto inline-flex items-center hover:text-white text-[#8f9198] text-lg"
          onClick={closeModal}
        ><IoMdClose /></button>
      </header>

      <form className="flex items-center py-6">
        <label htmlFor="search" className="absolute -left-[1000px]">Search</label>
        <input
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
          name="search"
          autoComplete="off"
          className="w-full bg-[#2e2e2e] rounded-md border-none outline-0 outline-none text-sm py-3 mx-6 placeholder:font-[400]"
          placeholder="Search here..." />
        <button className="absolute right-6 px-4 border-none text-[16px]">
          <FiSearch />
        </button>
      </form>

      <section className="px-8 text-xs">
        <h3 className="uppercase sticky top-0 font-[600] py-2">Contacts</h3>
        <ul className="max-h-[170px] overflow-y-auto">
          {uniqueCharacter.map(alphabet => (
            <li
              key={alphabet}
              className={`list-none ${alphabet.toLowerCase().includes(inputValue) ? "block" : "hidden"}`}
            >
              <div className='flex items-center gap-6 py-3'>
                <p className='text-[#4eac6d] font-[600]'>{alphabet}</p>
                <div className="h-[.5px] w-full bg-[#5e5d5d]"></div>
              </div>

              {contacts.filter(contact => contact.name.charAt(0) === alphabet)
                .map(char => (
                  <div
                    key={char.name}
                    className={`flex items-center flex-row-reverse gap-2 py-2 cursor-pointer ml-4 w-fit ${char.name.toLowerCase().includes(inputValue) ? "block" : "hidden"}`}
                  >
                    <label
                      htmlFor={char.name}
                      className="tracking-wider text-white/70 hover:text-white group"
                    >{char.name}</label>

                    <input
                      type="checkbox"
                      id={char.name}
                      name={char.name}
                      value={char.name}
                      className="w-3 h-3 rounded-sm"
                    />
                  </div>
                ))}
            </li>
          ))}
        </ul>
      </section>

      <div className="p-6 flex justify-end gap-x-6">
        <button onClick={closeModal} className="text-[#4eac6d] hover:underline">Cancel</button>
        <button className="hover:bg-[#4eac6d] text-white/90 py-2 px-4 rounded-[4px] font-[600] bg-[#4eac6d]/60"><IoMdSend /></button>
      </div>
    </section>
  )
}

export default AddContact