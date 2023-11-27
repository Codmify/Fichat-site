import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { CiLock, CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";


export default function User() {
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.setItem("access_token", "");
        if (!sessionStorage.getItem("access_token")) navigate("/")
    }


    return (
        <section className="text-[#8f9198] py-2 rounded-lg flex flex-col gap-y-2">
            <div className="hover:bg-[#444444] px-6 w-full">
                <Link to="/dashboard/profile" className="w-full py-1 flex justify-between items-center font-[400] text-[0.88rem] cursor-pointer"><span>Profile</span> <CgProfile size={15} /></Link>
            </div>

            <div className="hover:bg-[#444444] px-6">
                <small className="w-full py-1 flex justify-between items-center font-[400] text-[0.88rem] cursor-pointer"><span>Setting</span> <IoMdSettings size={15} /></small>
            </div>

            <div className="hover:bg-[#444444] px-6">
                <small className="w-full py-1 flex justify-between items-center font-[400] text-[0.88rem] cursor-pointer"><span>Change Password</span> <CiLock size={15} /></small>
            </div>

            <div className="hover:bg-[#444444] px-6">
                <small onClick={handleLogout} className="w-full py-1 flex justify-between items-center font-[400] text-[0.88rem] cursor-pointer"><span>Log out</span> <CiLogout size={15} /></small>
            </div>
        </section>
    )
}
