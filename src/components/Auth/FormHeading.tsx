interface HeadingProps {
    greeting: React.ReactNode,
    authMessage: React.ReactNode
}

const FormHeading: React.FC<HeadingProps> = ({greeting, authMessage}) => {
    return(
        <div className="text-[#adb5bd] text-center w-full mt-10">
                <h4 className="text-[1.5rem] md:text-[1.75rem] font-semibold capitalize">{greeting}</h4>
                <p className="text-[#8f9198] text-sm md:text-base">{authMessage}</p>
        </div>
    )
};

export default FormHeading;