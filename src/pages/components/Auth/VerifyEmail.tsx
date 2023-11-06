import Heading from './Heading'
import FormHeading from './FormHeading'
import InfoCard from './InfoCard'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";
import InButton from './InButton';
import { toast } from 'react-toastify';


const VerifyEmail: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [btnloading, setBtnloading] = useState(false)
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('Email not yet verified');
  const [greeting, setGreeting] = useState('Ops! Try Again');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
    // Extract the 'token' and 'email' parameters from the query string
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(()=>{
    verifyToken(token);
  }, [])

// console.log(token);
// console.log(email);
const verifyToken = async (token: string | null): Promise<boolean> => {
  if (token) {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/auth/user/form-verify/${token}`);

      // Check the response and return true or false based on the verification result
      console.log(response.data);
      if (response.data.status === 'success') {
        setMessage(response.data.data);
        setLoading(false);
        setGreeting(('Congratulations!'));
        setError(false);
        return true;
      } else {
        setLoading(false);
        setError(true);
        return false;
      }
    } catch (error) {
      // Handle any errors that may occur during verification
      setMessage(`${error}`);
      setGreeting(('Ops! Try Again'));
      console.error('Verification error:', error);
      setLoading(false);
      setError(true);
      return false;
    }
  }

  // Return false if either the token or email is null
  return false;
};

const resendEmail = async (email: string | null) => {
  setBtnloading(true);
  try {
    const res = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/auth/user/form-verify/resend`,
        {email: email}
        );
        setBtnloading(false);
        toast.success('Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(res.data)
        // navigate to email verification page
        navigate('/onestepaway');
  } catch (error) {
    toast.error("An error occured. Check your details!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setBtnloading(false);
  }
}

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
                        {loading ? <AiOutlineLoading className="animate-spin text-xl mx-auto" /> :  <div className='flex gap-10 flex-col justify-center h-full items-center w-full'>
                          <FormHeading
                          greeting = {`${greeting}`}
                          authMessage = {`${error?'Something went wrong':'Email verification successfully'}`} />
                          <InfoCard error={error} text={`${message}`}/>
                          {/* <button onClick={()=> {verifyToken(token)}} className='bg-red-700 p-4'>Click to verify</button> */}
                          {error ? <div className='w-[90%] md:w-[40%] lg:w-[30%] xl:w-[20%]'><InButton loading={btnloading} onClick={()=>{resendEmail(email)}} label='Resend Email'/></div> :<Link to={'/'} className='text-white z-20 text-center w-[90%] md:w-[40%] lg:w-[30%] xl:w-[20%] bg-[#4eac6d] hover:bg-[#42925d] transition-all duration-300 font-normal hover:transition-all hover:duration-300 focus:ring-1 focus:ring-[#85dda150] rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'>Proceed to Log in</Link>}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default VerifyEmail;