import { Outlet } from "react-router-dom"


const Bookmark = () => {
  return (
    <>
    <section className="bg-[#262626] min-h-screen basis-full lg:basis-[29%] p-4 text-[#8f9198] text-lg font-[700] md:ml-[84px] lg:ml-0 lg:relative lg:left-[90px]">Bookmark Page</section>
    <Outlet />
    </>
  )
}

export default Bookmark