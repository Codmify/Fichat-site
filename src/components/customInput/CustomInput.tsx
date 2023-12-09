import {useState} from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface DynamicInputProps {
    placeholder: string;
    labelFor: string;
    InputId: string;
    forgotPassword: boolean;
    label: string;
    name: string; // Use keyof to ensure that 'name' corresponds to a key in FormData
    type: string;
    value: string;
    emailEmpty: string;
    passwordEmpty: string;
    isLoading: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function CustomInput({ label, labelFor, type, name, placeholder, value, InputId, emailEmpty, passwordEmpty, isLoading, onChange }: DynamicInputProps) {

    const [visible, setVisivle] = useState(false)

    return (
        <div className='relative mb-5'>
            <div className='flex justify-between'>
                <label htmlFor={labelFor} className="text-[rgba(254,254,254,0.900)] font-[500] text-[0.75rem] leading-[20px] pb-1">{label}</label>
            </div>

            <input 
                className={`rounded-md border-[1px] outline-none border-[#494949] bg-transparent p-[12px] w-full placeholder:font-[500] placeholder:text-[12px] placeholder:leading-[20px] placeholder:text-[#929292] 
                ${emailEmpty && !value && isLoading ? "border-[#EF4444]" : "border-[#494949]"}

                ${passwordEmpty && !value ? "border-[#EF4444]" : "border-[#494949]"}`}

                type={type === 'password' && !visible ? 'password' : 'text'} 
                id={InputId} 
                placeholder={placeholder}  
                value={value}
                onChange={onChange}
                name={name}
                autoComplete='off'
                autoSave='off'
            />

            {type === 'password' && (
                <div className='absolute cursor-pointer right-3 top-10 hover:text-[#333] text-[#8f9198] duration-500 text-lg' onClick={() => setVisivle(!visible)}>
                    {visible ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
            )}
        </div>
    )
}
