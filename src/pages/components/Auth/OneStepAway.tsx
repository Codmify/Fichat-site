import Heading from './Heading';
import FormHeading from './FormHeading';
import InfoCard from './InfoCard';
import InButton from './InButton';
import { Link } from 'react-router-dom';



function OneStepAway() {
  return (
    <div className="conatainer text-white min-h-screen	bg-[#4eac6d]">
            <div className="flex flex-col md:flex-row h-screen p-3 py-0 md:p-5 relative">
                <div className="w-full text-center md:text-left md:w-[25%] py-7 md:ps-7">
                    <Heading 
                        logoDesc={"Responsive Bootstrap 5 Chat App"} 
                        logoTitle={'Doot'}
                    />
                </div>
                <div className="w-[100%] h-full mx-auto md:mx-0 md:w-[75%] p-2">
                    <div className="flex gap-5 flex-col justify-center h-full items-center bg-[#262626] rounded-2xl p-5">
                        <FormHeading
                        greeting = "Almost Done!"
                        authMessage = "Just one more step" />
                        <InfoCard text="A Link has been sent to your Email"/>
                        <a href='https://gmail.com' target='_blank' className='block ms-1 text-white mt-4 z-20 text-center w-[90%] md:w-[40%] lg:w-[30%] xl:w-[20%] bg-[#4eac6d] hover:bg-[#42925d] transition-all duration-300 font-normal hover:transition-all hover:duration-300 focus:ring-1 focus:ring-[#85dda150] rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'>Check Mail to Proceed</a>
                        <div className="text-[#8f9198] text-center text-sm -mt-4">
                            Go back to <Link to="/" className="text-[#adb5bd] font-medium underline">Sign in Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OneStepAway;