
interface InfoProps {
    text: string;
}
const InfoCard: React.FC<InfoProps> = ({text}) => {
    return (
        <>
            <div className="block max-w-sm p-4 px-6 bg-[#dcedfc] border border-[#cbe4fb] rounded shadow">
                <p className="font-normal text-center text-sm text-[#306391]">{text}</p>
            </div>
        </>
    )
};

export default InfoCard;