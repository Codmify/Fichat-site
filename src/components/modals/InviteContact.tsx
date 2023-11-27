import { IoMdClose } from "react-icons/io"
import useCloseModal from "../../hooks/useCloseModal"
import { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"
import { toast } from "react-toastify"


const initState = {
  email: ""
}

const InviteContact = () => {
  const closeModal = useCloseModal()
  const [inputValue, setInputValue] = useState(initState)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const accessToken = JSON.parse(sessionStorage.getItem("access_token") as string)
      await axios.post(`
      ${import.meta.env.VITE_BASE_API_URL}/contacts/invite`, inputValue,
        {
          method: "POST",
          headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          }
        })
      setInputValue(initState)
      toast.success(`"Sent successfully`, {
        position: "bottom-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false)

    } catch (err: unknown) {
      toast.success(`${err}`, {
        position: "bottom-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false)
    } finally {
      setInputValue(initState)
      setIsLoading(false)
    }
  }


  return (
    <section className="bg-[#262626]  text-[#8f9198] rounded-lg">
      <header className="flex justify-between items-center py-2 px-8 border-b-[0.25px] border-[rgba(143,145,152,0.6)]">
        <h2 className="text-[1.25rem] text-[#8f9198] font-[700] my-3">Invitation</h2>
        <button
          className="bg-transparent rounded-lg p-1.5 ml-auto inline-flex items-center hover:text-white text-[#8f9198] text-lg"
          onClick={closeModal}
        ><IoMdClose className="" /></button>
      </header>

      <form onSubmit={handleSubmit}>
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
              placeholder="Enter an email to invite a friend" />
          </div>
        </div>

        <div className="p-6 flex justify-end gap-x-6">
          <button onClick={closeModal} className="text-[#4eac6d] hover:underline">Close</button>
          <button className="hover:bg-[#4eac6d] text-white/90 py-2 px-4 rounded-[4px] font-[600] bg-[#4eac6d]/60">
            {isLoading ? <div className="flex items-center justify-center gap-x-3">
              <div className="w-5 h-5 block border-[4px] border-solid border-[#ccc] border-t-[rgb(51,51,51,0.7)] rounded-full animate-spin"></div>Inviting...
            </div> :
              "Invite"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default InviteContact