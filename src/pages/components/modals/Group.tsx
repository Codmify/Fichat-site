import { IoMdClose } from "react-icons/io"
import useCloseModal from "../../hooks/useCloseModal"
import { useState, ChangeEvent } from "react"
import { contacts } from "../../library/contacts"


const Group = () => {
    const closeModal = useCloseModal()
    const [inputValue, setInputValue] = useState("")
    const [textarea, setTextArea] = useState("")
    const [open, setOpen] = useState(false)
    const firstCharacter = contacts.map(contact => contact.name.charAt(0))
    const uniqueCharacter = [...new Set(firstCharacter)].sort()


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }


    return (
        <section className="bg-[#262626]  text-[#8f9198] rounded-lg">
            <header className="flex justify-between items-center py-3 px-4 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
                <h2 className="text-md text-[#8f9198] font-[700] my-1">Create New Group</h2>
                <button
                    className="bg-transparent rounded-lg p-1.5 ml-auto inline-flex items-center hover:text-white text-[#8f9198] text-lg"
                    onClick={closeModal}
                ><IoMdClose className="" /></button>
            </header>

            <form>
                <div className="p-6 text-sm flex flex-col gap-y-4 border-b-[0.25px] border-[rgba(143,145,152,0.6)] max-h-[350px] overflow-y-auto">
                    <div>
                        <label htmlFor="group">Group Name</label>
                        <input
                            type="text"
                            id="group"
                            name="group"
                            value={inputValue}
                            onChange={handleChange}
                            className="w-full bg-[#2e2e2e]  outline-0 border-0 rounded-md text-sm py-3 my-2"
                            placeholder="Enter Group Name" />
                    </div>

                    <div>
                        <label htmlFor="name">Group members</label>
                        <div className="text-white bg-[#2e2e2e] w-fit p-2 my-2 cursor-pointer rounded-md" onClick={() => setOpen(!open)}>Select Members</div>

                        <section className={`bg-[#2e2e2e] mt-3 ${open ? "block" : "hidden"}`}>
                            <div className='bg-[#2e2e2e]'>
                                <h2 className="sticky top bg-[#3d3d3d] text-white/80 px-4 py-2 w-full rounded-tl-md rounded-tr-md">Contacts</h2>
                            </div>

                            <ul className="max-h-[200px] overflow-y-auto px-4 pt-2 pb-4">
                                {uniqueCharacter.map(alphabet => (
                                    <li
                                        key={alphabet}
                                        className={`list-none ${alphabet.toLowerCase().includes(inputValue) ? "block" : "hidden"}`}
                                    >
                                        <div className='py-3'>
                                            <p className='text-[#4eac6d] font-[600]'>{alphabet}</p>
                                        </div>

                                        {contacts.filter(contact => contact.name.charAt(0) === alphabet)
                                            .map(char => (
                                                <div
                                                    key={char.name}
                                                    className={`flex items-center flex-row-reverse gap-2 py-1 cursor-pointer ml-4 w-fit ${char.name.toLowerCase().includes(inputValue) ? "block" : "hidden"}`}
                                                >
                                                    <label
                                                        htmlFor={char.name}
                                                        className="tracking-wider text-white/70 hover:text-white text-xs"
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
                    </div>

                    <div>
                        <label htmlFor="message">Description</label>
                        <textarea
                            id="message"
                            name="message"
                            value={textarea}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextArea(e.target.value)}
                            className="w-full bg-[#2e2e2e]  outline-0 border-0 rounded-md text-sm py-3 mt-2 px-3" rows={3}
                            placeholder="Enter Description"></textarea>
                    </div>
                </div>

                <div className="px-6 py-3 flex justify-end gap-x-6">
                    <button onClick={closeModal} className="text-[#4eac6d] hover:underline">Close</button>
                    <button className="hover:bg-[#4eac6d] text-white/90 py-2 px-4 rounded-[4px] font-[600] bg-[#4eac6d]/60">Create Groups</button>
                </div>
            </form>

        </section>
    )
}

export default Group