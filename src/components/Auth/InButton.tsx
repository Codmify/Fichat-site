import { AiOutlineLoading } from "react-icons/ai";

interface InButtonProps {
    label: string;
    loading?: boolean;
    onClick?: () => any;
}

const InButton: React.FC<InButtonProps> = ({label, loading, onClick}) => {
    return(
        <button onClick={onClick} type="submit" className={`text-white z-20 text-center w-full bg-[#4eac6d] hover:bg-[#42925d] transition-all duration-300 font-normal hover:transition-all hover:duration-300 focus:ring-1 focus:ring-[#85dda150] rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`} disabled={loading ? true : false}>
            {!loading? label : <AiOutlineLoading className="animate-spin text-xl mx-auto" />}
        </button>
    )
}

export default InButton;