<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 66bebf5510770a8755befd7ceb05b1396d07c5f0
import { Outlet } from "react-router-dom"


const Profile = () => {
  return (
    <>
<<<<<<< HEAD
      <section className="bg-[#262626] min-h-screen basis-full lg:basis-[29%] p-4 text-[#8f9198] text-lg font-[700] md:ml-[84px] lg:ml-0 lg:relative md:left-[90px]">Profile Page</section>
      <Outlet />
=======
    <section className="bg-[#262626] min-h-screen basis-full lg:basis-[29%] p-4 text-[#8f9198] text-lg font-[700] md:ml-[84px] lg:ml-0 lg:relative md:left-[90px]">Profile Page</section>
    <Outlet />
>>>>>>> 66bebf5510770a8755befd7ceb05b1396d07c5f0
    </>
  )
}
=======
import DropDownY from "./Dropdown/DropDownY";
import ImageProfile from "./assets/gt1.jpeg";
import ProfileImage from "./imageProfile/ProfileImage";
import ProfileText from "./imageProfile/ProfileText";

const Profile = () => {
  return (
    <section>
      <div className="relative">
        <img src={ImageProfile} alt="no image" className="h-44 w-full" />

        <div className="p-4 absolute top-0 left-0 right-0 ">
          <div className="text-white flex items-center justify-between">
            <h1 className="text-lg font-[700]">My Profile</h1>

            <div className="">
              <DropDownY />
            </div>
          </div>
        </div>

        <div className="-mt-12">
          <ProfileImage
            name="Gt"
            title="Front end Developer"
            imageUrl="/gt1.jpeg"
          />
        </div>

        <ProfileText />
      </div>
    </section>
  );
};
>>>>>>> 5a31a0a324132e26fd9d88137157ac28819b869a

export default Profile;
