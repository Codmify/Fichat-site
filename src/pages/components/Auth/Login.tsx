import FormInterface from "./FormInterface";
import Heading from "./Heading";
import { useLocation } from "react-router-dom";



const Login = () => {
    const location = useLocation();
    let screenHeight;
    if(location.pathname === "/register"){
        screenHeight = "h-full";
    }
    else {
        screenHeight = "h-screen";
    }
   
    return (
        <div className="conatainer text-white min-h-screen bg-[#4eac6d] pb-5 md:pb-0">
            <div className={`flex flex-col md:flex-row lg:${screenHeight} p-3 py-0 md:p-5 relative`}>
                <div className="w-full text-center md:text-left md:w-[25%] py-7 md:ps-7">
                    <Heading 
                        logoDesc={"Responsive Bootstrap 5 Chat App"} 
                        logoTitle={'Doot'}
                    />
                </div>
                <div className="w-[100%] h-full mx-auto md:mx-0 md:w-[75%] p-2">
                    <FormInterface />
                </div>
            </div>
        </div>
    )
}

export default Login;