import { Outlet } from "react-router-dom"

const Settings = () => {
  return (
    <>
    <section className="bg-[#262626] overflow-hidden min-h-screen basis-full lg:basis-[24.4%] md:ml-[70px] p-4 text-[#8f9198] text-lg font-[700] lg:relative">Settings Page</section>
    <Outlet />
    </>
  )
}

export default Settings