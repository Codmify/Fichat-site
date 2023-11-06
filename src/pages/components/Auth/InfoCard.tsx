
interface InfoProps {
    text: string;
    error?: boolean;
}
const InfoCard: React.FC<InfoProps> = ({text, error}) => {
    return (
        <>
            <div className={`block max-w-sm p-4 px-6 border ${error? 'border-red-600 bg-red-500': 'border-[#cbe4fb] bg-[#dcedfc]'} rounded shadow`}>
                <p className={`font-normal text-center text-sm ${error ? 'text-slate-100' : 'text-[#306391]'}`}>{text}</p>
            </div>
        </>
    )
};

export default InfoCard;