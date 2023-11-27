import DynamicInput from "./DynamicInput";
import FormHeading from "./FormHeading";
import InButton from "./InButton";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import InfoCard from "./InfoCard";
import Heading from "./Heading";

interface FormData {
    email: string;
  }

  interface Errors {
    email?: string;
  }

const ForgotPassword = () => {
        const navigate = useNavigate();

        const validateEmail = (email: string) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
          };
        
    
        const initialFormData: FormData = {
            email: '',
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
            navigate('/')
            // console.log(errors)
            }
          };

    return(
        <div className="conatainer text-white min-h-screen	bg-[#4eac6d]">
            <div className="flex flex-col md:flex-row h-screen p-3 py-0 md:p-5 relative">
                <div className="w-full text-center md:text-left md:w-[25%] py-7 md:ps-7">
                    <Heading 
                        logoDesc={"Responsive Bootstrap 5 Chat App"} 
                        logoTitle={'Doot'}
                    />
                </div>
                <div className="w-[100%] h-full mx-auto md:mx-0 md:w-[75%] p-2">
                    <div className="flex gap-10 flex-col justify-center h-full items-center bg-[#262626] rounded-2xl p-5">
                        <FormHeading
                        greeting = "Reset Password"
                        authMessage = "Reset Password with Doot." />
                        <form onSubmit={handleSubmit} className="w-[98%] md:w-[55%] lg:w-[42%] xl:w-[33%] flex max-w-md flex-col gap-4">
                            <InfoCard text="Enter your Email and instructions will be sent to you!"/>
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
                            />
                            <div className="text-[#8f9198] mt-0 md:mt-3 mb-6 text-center text-sm z-10">
                            Remember It ? <Link to="/" className="text-[#adb5bd] font-medium underline">Login</Link>
                            </div>

                            <div className={`text-[#8f9198] w-[70%] mx-auto md:w-full md:bottom-8 z-10 mt-5 bottom-[4%] text-center text-sm`}>
                                © 2023 Doot. Crafted with <span>&#10084;</span> by Themesbrand
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default ForgotPassword;