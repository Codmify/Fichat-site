'use client';

import CheckBoxInput from "./CheckboxInput";
import DynamicInput from "./DynamicInput";
import FormHeading from "./FormHeading";
import InButton from "./InButton";
import SignInWith from "./SignInWith";
import { useLocation, Link } from "react-router-dom";


const FormInterface = () => {
    const location = useLocation() 
const loginFormInterface =
                <>
                    <DynamicInput
                        type="email"
                        label="Username"
                        labelFor="password"
                        placeholder="Enter username"
                        InputId='loginPswd'
                        forgotPassword = {false}
                        value="admin@themesbrand.com"
                    />
                    <DynamicInput 
                        type="password"
                        label="Password"
                        labelFor="password"
                        placeholder="Enter your password"
                        InputId='loginPswd'
                        forgotPassword = {true}
                        value="123456"
                    />
                    <CheckBoxInput 
                        label="Remember me"
                        inputId='rememberMe'
                        labelFor="rememberMe"
                    />
                    <InButton 
                        label="Log In"
                        btnTo="/dashboard"
                    />
                </>;
const regFromInterface =                
                <>
                    <DynamicInput
                        type="email"
                        label="Email"
                        labelFor="email"
                        placeholder="Enter Email"
                        InputId='email'
                        forgotPassword = {false}
                    />
                    <DynamicInput 
                        type="text"
                        label="Username"
                        labelFor="usname"
                        placeholder="Enter username"
                        InputId='username'
                        forgotPassword = {false}
                    />
                    <DynamicInput 
                        type="password"
                        label="Password"
                        labelFor="pswd"
                        placeholder="Enter password"
                        InputId='pswd'
                        forgotPassword = {true}
                    />
                    <div className="text-[#8f9198] text-sm md:text-[0.96rem]">By registering you agree to the Doot <a href="" className="text-[#4eac6d]">Terms of Use</a></div>
                    <InButton 
                        label="Register"
                        btnTo = 'dashboard'
                    />
                </>;

            let UiInterface;
            if(location.pathname === "/register"){
                UiInterface = regFromInterface 
            }
            else{
               UiInterface = loginFormInterface
            }
    return (
        <>
        <div className="flex gap-10 flex-col relative justify-center items-center bg-[#262626] h-full rounded-2xl p-5 pb-20">
            {location.pathname === "/register" ? <FormHeading
                greeting = "Register Account"
                authMessage = "Get your free Doot account now."
            /> : <FormHeading
            greeting = "Welcome back !"
            authMessage = "Sign in to continue to Doot." />
            }
            <form className="w-[98%] md:w-[55%] lg:w-[42%] xl:w-[33%] flex max-w-md flex-col gap-4">
                {UiInterface}
                {location.pathname === '/'? <SignInWith text= "Sign in with"/> : <SignInWith text= "Sign up using"/>}
                {location.pathname === '/register'? <div className="text-[#8f9198] mt-0 md:mt-6 text-center text-sm z-10">
                        Already have an account? <Link to="/" className="text-[#adb5bd] font-medium underline">Login</Link>
                    </div> : <div className="text-[#8f9198] mt-0 md:mt-6 text-center text-sm z-10">
                        Do you have an account? <Link to="register" className="text-[#adb5bd] font-medium underline">Register</Link>
                    </div>}

                <div className="text-[#8f9198] left-0 w-full bottom-8 md:bottom-6 z-10 text-center text-sm absolute">
                    © 2023 Doot. Crafted with <span>&#10084;</span> by Themesbrand
                </div>  
            </form>
        </div>
        </>
    )
}

export default FormInterface;