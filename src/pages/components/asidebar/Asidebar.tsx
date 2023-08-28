import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";


export const Asidebar = () => {

    return (
        <aside className="flex flex-col-reverse md:flex-row text-2xl md:basis-[30%] basis-full bg-[#262626]">
            <Navbar />
            <div className="w-full min-h-screen">
                <Outlet />
            </div>
        </aside>
    )
}
