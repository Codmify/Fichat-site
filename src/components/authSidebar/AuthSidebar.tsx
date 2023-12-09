import group_images from "./assets/group_images.png"
import sign_in_dailog from "./assets/sign_in_dailog.png"
import bg_frame from "./assets/bg_frame.png"

export default function AuthSidebar() {
  return (
    <div className="hidden lg:flex relative gap-8 max-h-screen overflow-y-auto justify-center items-center w-[80%] grow">
    <img src={bg_frame} alt="Background Pattern" className="" />

    <h1 className="text-[#333333] absolute top-[40px] font-[700] text-[2.82rem] leading-[65px] text-center block w-fit">Welcome Back,</h1>

    <img src={group_images} alt="A group Images" className="w-full max-w-[481px] mx-auto absolute top-[9rem] block z-10" />

    <img src={sign_in_dailog} alt="A dailog with a text written on it" className="z-1 w-full absolute top-[80%] max-w-[655px] max-h-[445px]" />
  </div>
  )
}