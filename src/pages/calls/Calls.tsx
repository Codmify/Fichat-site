import { Outlet } from "react-router-dom"


const Calls = () => {
  return (
    <>
    <section className="bg-[#262626] min-h-screen basis-full lg:basis-[29%] p-4 text-[#8f9198] text-lg font-[700] md:ml-[84px] lg:ml-0 lg:relative md:left-[90px]">Calls Page</section>
    <Outlet />
    </>
  )
}

export default Calls