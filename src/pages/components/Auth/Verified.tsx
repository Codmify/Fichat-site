import Heading from './Heading'
import FormHeading from './FormHeading'
import InfoCard from './InfoCard'

function Verified() {
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
                    <div className="flex gap-10 flex-col justify-center h-full items-center bg-[#262626] rounded-2xl p-5">
                        <FormHeading
                        greeting = "Welcome!"
                        authMessage = "You are all set" />
                        <InfoCard text="Verification Sucessful!"/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Verified