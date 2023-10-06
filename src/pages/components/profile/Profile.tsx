import { Outlet } from "react-router-dom";
import DropDownY from "./dropdown/DropDownY";
import ImageProfile from "./assets/gt1.jpeg";
import ProfileImage from "./imageProfile/ProfileImage";
import ProfileText from "./imageProfile/ProfileText";

const Profile = () => {
  return (
    <>
      <section className="bg-[#262626] min-h-screen  lg:min-w-[23%] basis-full lg:basis-[34%] text-[#8f9198] md:left-[90px] md:ml-[84px] lg:ml-0 lg:relative">
        <img src={ImageProfile} alt="no image" className="w-full h-40" />

        <div className="lg:max-w-[18rem]">
          <div className="absolute top-0 md:w-[87%] lg:w-[77%] p-3 w-full text-white flex justify-between items-center">
            <h1 className="text-lg font-bold">My Profile</h1>

            <DropDownY />
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

      <Outlet />
    </>
  );
};

export default Profile;

// import { Outlet } from "react-router-dom";
// import DropDownY from "./Dropdown/DropDownY";
// import ImageProfile from "./assets/gt1.jpeg";
// import ProfileImage from "./imageProfile/ProfileImage";
// import ProfileText from "./imageProfile/ProfileText";

// const Profile = () => {
//   return (
//     <>
//       <section>
//         <div className="relative">
//           <img src={ImageProfile} alt="no image" className="h-44 w-full" />

//           <div className="p-4 absolute top-0 left-0 right-0 ">
//             <div className="text-white flex items-center justify-between">
//               <h1 className="text-lg font-[700]">My Profile</h1>

//               <div className="">
//                 <DropDownY />
//               </div>
//             </div>
//           </div>

//           <div className="-mt-12">
//             <ProfileImage
//               name="Gt"
//               title="Front end Developer"
//               imageUrl="/gt1.jpeg"
//             />
//           </div>

//           <ProfileText />
//         </div>
//       </section>

//       <Outlet />
//     </>
//   );
// };

// export default Profile;
