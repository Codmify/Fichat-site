import google_icon from "./assets/google_icon.png"
import error_icon from "./assets/error_icon.png"

import CustomInput from "../../components/customInput/CustomInput"
import { useState } from "react"
import CheckBoxInput from "../../components/Auth/CheckboxInput"
import { Link, useNavigate } from "react-router-dom"
import Seperator from "../../components/seperator/Seperator"
import AuthSidebar from "../../components/authSidebar/AuthSidebar"
import { toast } from "react-toastify"
import axios from "axios"


interface FormData {
  email: string;
  password: string;
}

const initialFormData: FormData = {
  email: '',
  password: '',
};


export default function Login() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false)
  const [emailEmpty, setEmailEmpty] = useState<string>("")
  const [passwordEmpty, setPasswordEmpty] = useState<string>("")
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const navigate = useNavigate()


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email.trim()) {
      setEmailEmpty("Your email is required")

    } else if (!formData.password.trim()) {
      setPasswordEmpty("Your password is required")
    }

    setIsLoading(true)

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/auth/user/form-login`,
        formData
      );

      sessionStorage.setItem("access_token", JSON.stringify(res.data.accessToken));

      toast.success(`${res.data.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      navigate("/dashboard");

      /* eslint-disable */
    } catch (error: any) {
      console.log(error)
      toast.error(`${error.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        theme: "dark",

      });
    } finally {
      setIsLoading(false)
    }
  }




  return (
    <section className="min-h-screen flex items-center">

      <AuthSidebar />

      <div className="bg-[#282828] text-[#FEFEFE] min-h-screen w-full flex justify-center items-center">
        <div className="w-[90%] max-w-[600px] lg:max-w-[500px] mx-auto bg-[rgba(33,33,33,0.800)] rounded-2xl p-8">
          <h3 className="font-[600] text-center text-[2rem] leading-[49px]">Hi, Welcome back</h3>

          <p className="font-[500] leading-[27px] text-[rgba(254,254,254,0.900)] text-center">Enter your email and password to sign in</p>

          <div className="pt-[40px]">
            <CustomInput
              type="email"
              label="Email address"
              name="email"
              labelFor="email"
              placeholder="✉ emailaddress@example.com"
              InputId='email'
              forgotPassword={false}
              value={formData.email}
              emailEmpty={emailEmpty}
              passwordEmpty={passwordEmpty}
              isLoading={isLoading}
              onChange={handleInputChange}
            />

            <div className={`${emailEmpty && !formData.email && isLoading ? "-mt-4 mb-4 text-[#EF4444] font-medium text-[12px] leading-[14px] flex items-start gap-2" : "hidden"}`}>
              <img src={error_icon} alt="Error Icon" className={emailEmpty ? "block" : "hidden"} />
              {emailEmpty}</div>

            <CustomInput
              type="password"
              label="Password"
              name="password"
              labelFor="pswd"
              placeholder="🔗 Enter password"
              InputId='pswd'
              forgotPassword={true}
              value={formData.password}
              emailEmpty={emailEmpty}
              passwordEmpty={passwordEmpty}
              isLoading={isLoading}
              onChange={handleInputChange}
            />
          </div>

          <div className={`${passwordEmpty && !formData.password ? "-mt-4 mb-4 text-[#EF4444] font-medium text-[12px] leading-[14px] flex items-start gap-2" : "hidden"}`}>
            <img src={error_icon} alt="Error Icon" className={passwordEmpty ? "block" : "hidden"} />
            {passwordEmpty}</div>


          <div className="flex items-start justify-between">
            <CheckBoxInput
              label="Remeber me"
              labelFor="rememberMe"
              inputId="rememberMe"
              onChange={handleCheckboxChange}
            />

            <Link to="/forgot" className="font-semibold text-xs text-[rgba(254,254,254,0.900)]">Forgot password?</Link>
          </div>

          <button
            className="bg-[#4EAC6D] hover:bg-[#3c8554] duration-500 w-full my-3 text-[rgba(254,254,254,0.900)] py-3 px-8 rounded-lg"
            onClick={handleSubmit}
            disabled={isLoading}>
            {isLoading && !emailEmpty && !passwordEmpty ?
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-[3px] border-t-transparent animate-spin border-white rounded-full"></div>
                <span>Logging in...</span>
              </div> :
              "Log in"
            }
          </button>

          <Seperator />

          <button className="bg-[#FEFEFE] hover:bg-[#ecebeb] duration-500 text-[rgba(27,27,27,0.9)] w-full my-3 py-3 px-8 rounded-lg text-[1rem] flex items-center gap-4 justify-center font-semibold">
            <img src={google_icon} alt="" />
            <span>Sign in with google</span>
          </button>

          <div>
            <p className="pt-6 flex gap-2 items-center justify-center text-xs font-normal text-[rgba(254,254,254,0.900)]">Don&apos;t have an account?
              <Link to="/register" className="text-[#4EAC6D]">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}
