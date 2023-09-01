'use client';

import CheckBoxInput from "./CheckboxInput";
import DynamicInput from "./DynamicInput";
import FormHeading from "./FormHeading";
import InButton from "./InButton";
import SignInWith from "./SignInWith";
import { useLocation, Link } from "react-router-dom";
import React, { useState } from 'react';
import InfoCard from "./InfoCard";

interface FormData {
    email: string;
    password: string;
    username: string;
  }

  interface Errors {
    email?: string;
    password?: string;
    username?: string;
  }

const FormInterface: React.FC = () => {
    const location = useLocation();

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = (password: string) => {
        // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
      };

    const initialFormData: FormData = {
        email: '',
        password: '',
        username: '',
      };
      const validateAllFieldsNotEmpty = () => {
        let hasEmptyField = false;
        Object.keys(formData).forEach((inputName) => {
          if (!formData[inputName as keyof FormData].trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, [inputName]: `${inputName} is required` }));
            hasEmptyField = true;
          }
        });
        return !hasEmptyField;
      };
    
      const [formData, setFormData] = useState<FormData>(initialFormData);
    
      const [errors, setErrors] = useState<Errors>({});
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
      };
    
      const validateInput = (inputName: keyof FormData) => {
        if (!formData[inputName].trim()) {
          setErrors((prevErrors) => ({ ...prevErrors, [inputName]: `${inputName} is required` }));
        } else if (inputName === 'email' && !validateEmail(formData.email)) {
          setErrors((prevErrors) => ({ ...prevErrors, [inputName]: 'Invalid email format' }));
        } else if (inputName === 'password' && !validatePassword(formData.password)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [inputName]: 'Password must be at least 8 characters and include uppercase, lowercase, digit, and special character',
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' }));
        }
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

    
         // Validate each input for empty and format
        let allValid = true;
        Object.keys(formData).forEach((inputName) => {
        validateInput(inputName as keyof FormData);
        if (errors[inputName as keyof FormData]) {
            allValid = false;
        }
        });

        if (!validateAllFieldsNotEmpty() || !allValid) {
            return; // Don't proceed with submission if there are errors
        }
    
        // Perform authentication logic here if validations pass
        const hasErrors = Object.values(errors).some((error) => error !== '');
        if (!hasErrors) {
          window.location.href = '/dashboard';
        }
      };
const loginFormInterface =
                <>
                    <DynamicInput
                        type="text"
                        label="Username"
                        labelFor="username"
                        name = 'username'
                        placeholder="Enter username"
                        InputId='uname'
                        forgotPassword = {false}
                        value={formData.username}
                        onChange={handleInputChange}
                        onBlur={() => validateInput('username')}
                        error={errors.username}
                    />
                    <DynamicInput 
                        type="password"
                        label="Password"
                        labelFor="password"
                        name="password"
                        placeholder="Enter your password"
                        InputId='loginPswd'
                        forgotPassword = {true}
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={() => validateInput('password')}
                        error={errors.password}
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
                        name="email"
                        labelFor="email"
                        placeholder="Enter Email"
                        InputId='email'
                        forgotPassword = {false}
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => validateInput('email')}
                        error={errors.email}
                    />
                    <DynamicInput 
                        type="text"
                        label="Username"
                        name="username"
                        labelFor="usname"
                        placeholder="Enter username"
                        InputId='username'
                        forgotPassword = {false}
                        value={formData.username}
                        onChange={handleInputChange}
                        onBlur={() => validateInput('username')}
                        error={errors.username}
                    />
                    <DynamicInput 
                        type="password"
                        label="Password"
                        name="password"
                        labelFor="pswd"
                        placeholder="Enter password"
                        InputId='pswd'
                        forgotPassword = {true}
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={() => validateInput('password')}
                        error={errors.password}
                    />
                    <div className="text-[#8f9198] text-sm md:text-[0.96rem]">By registering you agree to the Doot <a href="" className="text-[#4eac6d]">Terms of Use</a></div>
                    <InButton 
                        label="Register"
                        btnTo = '/dashboard'
                    />
                </>;
const recoveryInterface = 
                <>
                    <InfoCard />
                    <DynamicInput
                        type="email"
                        label="Email"
                        name="email"
                        labelFor="email"
                        placeholder="Enter Email"
                        InputId='email'
                        forgotPassword = {false}
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => validateInput('email')}
                        error={errors.email}
                    />
                    <InButton 
                        label="reset"
                        btnTo="/auth-recoverpw"
                    />
                </>

            let UiInterface;
            let headerInterfase;
            let qLink;
            let socLog;
            let cRight;
            if(location.pathname === "/register"){
                UiInterface = regFromInterface;
                headerInterfase = <FormHeading
                greeting = "Register Account"
                authMessage = "Get your free Doot account now."
                />;
                qLink = <div className="text-[#8f9198] mt-0 md:mt-3 mb-6 text-center text-sm z-10">
                Already have an account? <Link to="/" className="text-[#adb5bd] font-medium underline">Login</Link>
                </div>;
                socLog = <SignInWith text= "Sign up using"/>
                cRight= 'md:bottom-4'
            }
            else if (location.pathname === "/auth-recoverpw"){
                UiInterface = recoveryInterface;
                headerInterfase = <FormHeading
                greeting = "Reset Password"
                authMessage = "Reset Password with Doot." />;
                qLink= <div className="text-[#8f9198] mt-0 md:mt-3 mb-6 text-center text-sm z-10">
                Remember It ? <Link to="/" className="text-[#adb5bd] font-medium underline">Login</Link>
                </div>;
                cRight= 'md:bottom-8';
            }
            else{
               UiInterface = loginFormInterface;
               headerInterfase = <FormHeading
               greeting = "Welcome back !"
               authMessage = "Sign in to continue to Doot." />
               qLink = <div className="text-[#8f9198] mt-0 md:mt-3 mb-6 text-center text-sm z-10">
                Do you have an account? <Link to="register" className="text-[#adb5bd] font-medium underline">Register</Link>
                </div>;
                socLog = <SignInWith text= "Sign in with"/>;
                cRight= 'md:bottom-8'
            }



    return (
        <>
        <div className="flex gap-10 flex-col justify-center h-full items-center bg-[#262626] rounded-2xl p-5">
            {headerInterfase}
            <form onSubmit={handleSubmit} className="w-[98%] md:w-[55%] lg:w-[42%] xl:w-[33%] flex max-w-md flex-col gap-4">
                {UiInterface}
                {socLog}
                {qLink}

                <div className={`text-[#8f9198] w-[70%] mx-auto md:w-full ${cRight} z-10 mt-5 bottom-[4%] text-center text-sm`}>
                    © 2023 Doot. Crafted with <span>&#10084;</span> by Themesbrand
                </div>  
            </form>
        </div>
        </>
    )
}

export default FormInterface;