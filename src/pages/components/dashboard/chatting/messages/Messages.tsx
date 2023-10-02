import margurite from "../../assets/margurite.jpg"
import { BsCheckAll } from "react-icons/bs"
import { contacts } from "../../../../library/contacts"
import { useParams } from "react-router-dom"
import { useEffect, useRef } from "react"


type Props = {
    isSent: boolean,
    allMessages: string[]
}


export default function Messages({ isSent, allMessages }: Props) {
    const { id } = useParams()
    const scrollRef = useRef<HTMLDivElement>(null)
    const filteredContacts = contacts.filter((contact) => contact.id === id)

    useEffect(() => {
        if (allMessages.length) {
            scrollRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }
    }, [allMessages?.length])

    return (
        <section className="px-2 md:px-6 py-4 max-h-[75%] md:max-h-[70%] overflow-y-auto" id="scroll">
            {filteredContacts.map(contact => (
                <div key={contact.id}>
                    <div className="text-white/70 md:max-w-[calc(100%-100px)] mr-auto my-4 flex gap-2 md:gap-4 items-center">

                        <img src={contact.image} alt="User" className="w-[25px] rounded-full -mt-4" />
                        <div className="w-fit max-w-[70%]">
                            <div className="bg-[#363636] p-2 rounded-md  w-full">
                                <p className="leading-[1.5rem] flex flex-wrap font-[500]">Good morning 😍</p>
                            </div>
                            <small className="text-[#8f9198] my-1 flex items-center gap-2">{contact.name} <span>11:05am</span></small>
                        </div>
                    </div >

                    <div className="text-white/70 md:max-w-[calc(100%-100px)] ml-auto my-4 flex gap-2 md:gap-4 items-center flex-row-reverse">
                        <img src={margurite} alt="User" className="w-[25px] rounded-full" />
                        <div className="w-fit max-w-[70%]">
                            <div className="bg-[rgba(93,189,125,0.3)] p-2 rounded-md w-full">
                                <p className="leading-[1.5rem] flex flex-wrap font-[500]">Good morning {contact.name}. How are you? What about our next meeting?</p>
                            </div>
                            <small className="text-[#8f9198] flex items-center justify-end my-1 gap-2"><span className="text-[#4eac6d] text-lg"><BsCheckAll /></span><span>11:05am</span> You</small>
                        </div>
                    </div>

                    <div className="text-white/70 md:max-w-[calc(100%-100px)] mr-auto my-4 flex gap-2 md:gap-4 items-center">
                        <img src={contact.image} alt="User" className="w-[25px] rounded-full -mt-4" />
                        <div className="w-fit max-w-[70%]">
                            <div className="bg-[#363636] p-3 rounded-md  w-full">
                                <p className="leading-[1.5rem] flex flex-wrap font-[500]">I'm fine boss, hope the meeting is still holding today</p>
                            </div>
                            <small className="text-[#8f9198] my-1 flex items-center text-xs gap-4">{contact.name} <span>11:05am</span></small>
                        </div>
                    </div>

                    {allMessages.map(message => (
                        <div key={message} className="text-white/90 md:max-w-[calc(100%-100px)] ml-auto flex gap-2 md:gap-4 items-center flex-row-reverse my-2">
                            <img src={margurite} alt="User" className='w-[25px] rounded-full -mr-2' />
                            <div className="w-fit max-w-[70%] bg-[rgba(93,189,125,0.3)] rounded-md ml-auto">
                                    <p className="leading-[1.5rem] flex flex-wrap font-[500] px-2 pt-2 pb-0">{isSent && message}</p>
                                <small className="text-white/60 flex flex-row-reverse items-center justify-start mt-2 mb-0.5 pr-0.5 gap-0.5 text-xs"><span className="text-[#4eac6d]"><BsCheckAll /></span>1:12pm</small>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div ref={scrollRef} className="pb-8 lg:pb-4"></div>
        </section>
    )
}