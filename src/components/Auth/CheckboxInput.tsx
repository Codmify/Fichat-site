interface CheckProps {
    label: string;
    labelFor: string;
    inputId: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxInput: React.FC<CheckProps> = ({label, labelFor, inputId, onChange}) => {

    return (
        <div className="flex items-center mb-4">
            <input id={inputId} type="checkbox" className="w-4 h-4 text-[#3e8a57] bg-[#2b2b2b] border-none focus:border-none focus:ring-offset-0 focus:border-gray-300 rounded focus:ring-[#3e8a57] ring-[#8f9198] focus:ring-1 ring-1" onChange={onChange}/>
            <label htmlFor={labelFor} className="ml-2 text-sm font-medium text-[#8f9198] transition-all duration-700 focus:transition-all focus:duration-700 ease-in-out dark:text-white">{label}</label>
        </div>
    )
}

export default CheckBoxInput;