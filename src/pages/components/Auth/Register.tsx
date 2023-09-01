import FormInterface from "./FormInterface";
import Heading from "./Heading";



const Register = () => {

    return (
        <div className="conatainer text-white min-h-screen bg-[#4eac6duu]">
            <div className="flex flex-col md:flex-row h-full p-3 py-0 md:p-5 relative">
                <div className="w-full text-center md:text-left md:w-[25%] py-7 md:ps-7">
                    <Heading 
                        logoDesc={"Responsive Bootstrap 5 Chat App"} 
                        logoTitle={'Doot'}
                    />
                </div>
                <div className="w-[100%] mx-auto md:mx-0 md:w-[75%] p-2">
                    <FormInterface />
                </div>
            </div>
        </div>
    )
};

export default Register;