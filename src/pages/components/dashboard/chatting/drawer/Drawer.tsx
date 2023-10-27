import { contacts } from "../../../../library/contacts"
import { useParams } from "react-router-dom"
import RightMenuToolTip from "../../../tooltip/RightMenuToolTip"
import { BiVideo } from "react-icons/bi"
import { CgMoreVerticalAlt } from "react-icons/cg"
import { BsFileEarmarkText } from "react-icons/bs"
import { BiSolidMessageAltDetail, BiImage, BiSolidPhoneCall } from "react-icons/bi"
import { IoMdClose, IoMdDownload } from "react-icons/io"
import { MdFavorite } from "react-icons/md"
import { FiMoreHorizontal } from "react-icons/fi"
import mediaOne from "../../assets/media1.jpg"
import mediaTwo from "../../assets/media2.jpg"
import mediaThree from "../../assets/media3.jpg"


type Props = {
    isOpen: boolean,
    openMenu: boolean,
    setIsOpen: (isOpen: boolean) => void,
    handleRightMenu: () => void
}

export default function Drawer({ isOpen, openMenu, setIsOpen, handleRightMenu }: Props) {
    const { id } = useParams()
    const filteredContacts = contacts.filter((contact) => contact.id === id)


  return (
    <section className={`relative ${isOpen ? "z-30 left-0 basis-full lg:basis-[35%] bg-[#262626] text-[#8f9198] duration-75 h-screen overflow-y-auto overflow-x-hidden" : "basis-0 flex-grow-0 flex-shrink-0 p-0 overflow-hidden duration-75"}`}>
        <header className="sticky top-0 p-4 border-b-[0.25px] bg-[#212121] border-b-[#3d3d3d] pb-4 z-20">
          {filteredContacts.map(contact => (
            <div key={contact.name} className="w-full relative">
              <div className="w-full">
                <div className="w-full h-[300px]">
                  <img src={contact.image} alt={contact.name} className="rounded-md w-full h-[300px] object-cover" />
                </div>
                <div className="absolute top-0 w-full h-full bg-black opacity-50 rounded-md"></div>

                <div className="w-full absolute top-4 flex justify-between items-center px-4 text-white/90 z-40">
                  <IoMdClose size={20} className="cursor-pointer text-white/90" onClick={() => setIsOpen(false)} />
                  <CgMoreVerticalAlt size={20} className="cursor-pointer"
                    onClick={handleRightMenu}
                  />

                  {openMenu && <RightMenuToolTip />}
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className='text-[15px] text-white/90 font-[700]'>{contact.name}</h3>
                  <div className="flex gap-1 items-center pt-1">
                    <div className={`${contact.isActive ? "w-3 h-3 border-2 border-black rounded-full bg-[#06d6a0]" : "w-3 h-3 border-2 border-black rounded-full bg-[#ffd166]"}`}></div>
                    <p className="text-sm">{contact.isActive ? "Active" : "Away"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </header>

        <article className="p-4 overflow-y-auto pb-8">

          {/* --------------- Activity Icons --------------------- */}
          <div className="border-b-[0.25px] border-b-[#3d3d3d] flex items-center justify-between flex-wrap gap-4 pb-6 pt-4">
            <div className="flex flex-col items-center  gap-y-1">
              <div className="bg-[#302f2f] cursor-pointer text-[#8f9198] rounded-[4px] p-2 w-fit">
                <BiSolidMessageAltDetail size={15} />
              </div>
              <small className="uppercase text-xs py-1">Message</small>
            </div>

            <div className="flex flex-col items-center gap-y-1">
              <div className="bg-[#302f2f] cursor-pointer text-pink-600 rounded-[4px] p-2 w-fit">
                <MdFavorite size={15} />
              </div>
              <small className="uppercase text-xs py-1">Favorite</small>
            </div>

            <div className="flex flex-col items-center  gap-y-1">
              <div className="bg-[#302f2f] cursor-pointer text-[#8f9198] rounded-[4px] p-2 w-fit">
                <BiSolidPhoneCall size={15} />
              </div>
              <small className="uppercase text-xs py-1">Audio</small>
            </div>

            <div className="flex flex-col items-center  gap-y-1">
              <div className="bg-[#302f2f] cursor-pointer text-[#8f9198] rounded-[4px] p-2 w-fit">
                <BiVideo size={15} />
              </div>
              <small className="uppercase text-xs py-1">Video</small>
            </div>

            <div className="flex flex-col items-center  gap-y-1">
              <div className="bg-[#302f2f] cursor-pointer text-[#8f9198] rounded-[4px] p-2 w-fit">
                <FiMoreHorizontal size={15} />
              </div>
              <small className="uppercase text-xs py-1">More</small>
            </div>
          </div>


          {/* ----------------- User Personal Information ----------------------- */}
          <>
            <section className="pt-4 pb-8 flex flex-col gap-y-6 border-b-[0.25px] border-b-[#3d3d3d]">
              {filteredContacts.map((contact) => (
                <>
                  <div>
                    <small className="uppercase text-xs font-[600]">Status:</small>
                    <p className="text-sm py-2 font-[500]">If several languages coalesce, the grammar of the resulting.</p>
                  </div>

                  <div>
                    <small className="uppercase text-xs font-[600]">Info:</small>
                    <div className="flex justify-between items-center">
                      <small className="text-sm font-[500]">Name</small>
                      <button className="bg-[rgba(78,172,109,0.1)] py-1 px-2 text-[#4eac6d] hover:text-white hover:bg-[#4eac6d] text-sm rounded-sm relative group">Edit</button>
                    </div>
                    <h4 className="text-sm font-[600]">{contact.name}</h4>
                  </div>

                  <div>
                    <small className="text-sm font-[500]">Email</small>
                    <h4 className="text-sm font-[600]">johndeo@gmail.com</h4>
                  </div>

                  <div>
                    <small className="text-sm font-[500]">Location</small>
                    <h4 className="text-sm font-[600]">Califonia</h4>
                  </div>
                </>
              ))}

            </section>

            {/* --------------- Groups In Common ---------------------- */}
            <section className="py-6 flex flex-col gap-y-4 border-b-[0.25px] border-b-[#3d3d3d]">
              <small className="text-xs font-[600] uppercase">Group In Common</small>
              <div className="flex gap-2 items-center">
                <div className="bg-[#2e2e2e] text-[11px] rounded-full px-2">
                  <p className="text-lg">#</p>
                </div>
                <h3 className="text-sm font-[600]">Landing Design</h3>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-[#2e2e2e] text-[11px] rounded-full px-2">
                  <p className="text-lg">#</p>
                </div>
                <h3 className="text-sm font-[600]">Design Phase 2</h3>
              </div>
            </section>

            {/* ------------------ Media files -------------------- */}
            <section className="py-4 flex flex-col gap-y-4 border-b-[0.25px] border-b-[#3d3d3d]">
              <div className="flex gap-2 items-center justify-between">
                <small className="text-xs font-[600] uppercase">Media</small>
                <button className="text-[#4eac6d] text-xs">Show all</button>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <img src={mediaOne} alt="A group of students listening to an Instructor in a class room" className="rounded-sm" />
                </div>
                <div>
                  <img src={mediaTwo} alt="A group of friends two males and two females laughing" />
                </div>
                <div>
                  <img src={mediaThree} alt="A desert" />
                </div>
                <div className="relative">
                  <img src={mediaOne} alt="Group of students listening to an Instructor in a class room" className="" />
                  <div className="absolute top-0 w-full h-full bg-black opacity-50">
                  </div>
                  <p className="text-white/90 text-lg z-10 absolute flex justify-center items-center top-4 left-6">+ 1</p>
                </div>
              </div>
            </section>

            {/* -------------------- Attached Files ------------------- */}
            <section className="pt-8 pb-3 flex flex-col gap-y-4">
              <small className="text-xs font-[600] uppercase">Attached Files</small>
              <div className="flex flex-col gap-y-2 items-center">
                <div className="flex items-center justify-between w-full bg-[#333333] py-2 px-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="w-fit p-2 bg-[rgba(78,172,109,0.2)] text-[#4eac6d] rounded-full">
                      <BsFileEarmarkText />
                    </div>
                    <div>
                      <h4 className="text-sm font-[600]">design-phase-1-approved.pdf</h4>
                      <small>12.5 MB</small>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <IoMdDownload className="cursor-pointer" />
                    <FiMoreHorizontal className="cursor-pointer" />
                  </div>
                </div>

                <div className="flex items-center justify-between w-full bg-[#333333] py-2 px-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="w-fit p-2 bg-[rgba(78,172,109,0.2)] text-[#4eac6d] rounded-full">
                      <BiImage />
                    </div>
                    <div>
                      <h4 className="text-sm font-[600]">Image-1.jpg</h4>
                      <small>4.2 MB</small>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <IoMdDownload className="cursor-pointer" />
                    <FiMoreHorizontal className="cursor-pointer" />
                  </div>
                </div>

                <div className="flex items-center justify-between w-full bg-[#333333] py-2 px-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="w-fit p-2 bg-[rgba(78,172,109,0.2)] text-[#4eac6d] rounded-full">
                      <BiImage />
                    </div>
                    <div>
                      <h4 className="text-sm font-[600]">Image-2.jpg</h4>
                      <small>3.1 MB</small>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <IoMdDownload className="cursor-pointer" />
                    <FiMoreHorizontal className="cursor-pointer" />
                  </div>
                </div>

                <div className="flex items-center justify-between w-full bg-[#333333] py-2 px-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="w-fit p-2 bg-[rgba(78,172,109,0.2)] text-[#4eac6d] rounded-full">
                      <BsFileEarmarkText />
                    </div>
                    <div>
                      <h4 className="text-sm font-[600]">Landing-A.zip</h4>
                      <small>6.7 MB</small>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <IoMdDownload className="cursor-pointer" />
                    <FiMoreHorizontal className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </section>
          </>
        </article>
      </section>
  )
}
