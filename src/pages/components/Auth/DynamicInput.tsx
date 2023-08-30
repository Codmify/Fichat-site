import {useState} from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';

interface DynamicInputProps {
    placeholder: string;
    labelFor: string;
    InputId: string;
    forgotPassword: boolean;
    label: string;
    name: string; // Use keyof to ensure that 'name' corresponds to a key in FormData
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    error: string | undefined;
}

const DynamicInput: React.FC<DynamicInputProps> = ({ label, labelFor, type, name,placeholder, value, InputId, forgotPassword, onChange, onBlur, error }) => {
    const [visible, setVisivle] = useState(false)

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (onChange) {
    //         onChange(event.target.value);
    //     }
    // };

    return (
        <div className='relative'>
            <div className='flex justify-between'>
                <label htmlFor={labelFor} className="capitalize block mb-2 text-sm font-medium text-[#8f9198] dark:text-white">{label}</label>
                <Link to="/auth-recoverpw" className={forgotPassword ? "block text-[#8f9198] text-sm" : 'hidden'}>Forgot password?</Link>
            </div>
            <input 
                className="bg-[#333] border border-none text-[#8f9198] text-sm rounded-md focus:ring-0 focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-blue-500 ps-4" 
                type={type === 'password' && !visible ? 'password' : 'text'} 
                id={InputId} 
                placeholder={placeholder}  
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />
            {type === 'password' && (
                <div className='absolute right-3 top-10 text-[#8f9198] text-lg' onClick={() => setVisivle(!visible)}>
                    {visible ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
            )}
            {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
        </div>
    )
}

export default DynamicInput;