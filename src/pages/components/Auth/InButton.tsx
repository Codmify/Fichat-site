import { Link } from "react-router-dom";

interface InButtonProps {
    label: string;
    btnTo: string;
}

const InButton: React.FC<InButtonProps> = ({label, btnTo}) => {
    return(
        <Link to={btnTo} className="text-white text-center w-full bg-[#4eac6d] hover:bg-[#42925d] transition-all duration-300 font-normal hover:transition-all hover:duration-300 focus:ring-1 focus:ring-[#85dda150] rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">{label}</Link>
    )
}

export default InButton;