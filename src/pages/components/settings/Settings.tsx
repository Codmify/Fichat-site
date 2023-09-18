import { Outlet } from "react-router-dom"

const Settings = () => {
  return (
    <>
    <section className="bg-[#262626] overflow-hidden min-h-screen basis-full lg:basis-[29%] md:ml-[84px] lg:ml-0 p-4 text-[#8f9198] text-lg font-[700] lg:relative md:left-[90px]">Settings Page</section>
    <Outlet />
    </>
  )
}

export default Settings