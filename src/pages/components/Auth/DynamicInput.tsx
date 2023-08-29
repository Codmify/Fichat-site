import {useState} from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface DynamicInputProps {
    type: string;
    placeholder?: string;
    value?: string;
    label: string;
    labelFor: string;
    InputId: string;
    forgotPassword: boolean;
    onChange?: (value: string) => void;
}

const DynamicInput: React.FC<DynamicInputProps> = ({ label, labelFor, type, placeholder, value, InputId, forgotPassword, onChange }) => {
    const [visible, setVisivle] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className='relative'>
            <div className='flex justify-between'>
                <label htmlFor={labelFor} className="capitalize block mb-2 text-sm font-medium text-[#8f9198] dark:text-white">{label}</label>
                <a href="" className={forgotPassword ? "block text-[#8f9198] text-sm" : 'hidden'}>Forgot password?</a>
            </div>
            <input 
                className="bg-[#333] border border-none text-[#8f9198] text-sm rounded-md focus:ring-0 focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-blue-500 ps-4" 
                type={type === 'password' && !visible ? 'password' : 'text'} 
                id={InputId} 
                placeholder={placeholder}  
                value={value}
                onChange={handleInputChange}
                required 
            />
            {type === 'password' && (
                <div className='absolute right-3 top-10 text-[#8f9198] text-lg' onClick={() => setVisivle(!visible)}>
                    {visible ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
            )}
        </div>
    )
}

export default DynamicInput;