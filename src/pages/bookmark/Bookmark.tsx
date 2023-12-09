import { Outlet } from "react-router-dom"


const Bookmark = () => {
  return (
    <>
    <section className="bg-[#262626] min-h-screen basis-full lg:basis-[24.4%] p-4 text-[#8f9198] text-lg font-[700] md:ml-[70px] lg:relative">Bookmark Page</section>
    <Outlet />
    </>
  )
}

export default Bookmark