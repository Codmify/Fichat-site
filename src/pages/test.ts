import axios from "axios";

const signupDetails = {
  email: "o.oshindeinde@gmail.com",
  username: "Alptem",
  password: "teST12783",
};

const navigate = useNavigate();

const handleRegister = async (data) => {
  setLoading(true);
  try {
    // process.env.${VARAIABLE NAME}
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/auth/user/form-register`,
      data
    );
    console.log(res.data);
    navigate("/verify-email?auth=true");
    // {
    //   "status": "success",
    //   "data": {
    //     "message": "kindly check your email to complete your registration"
    //   }
    // }
  } catch (error: unknown) {
    console.log(String(error?.response?.data?.message));
  } finally {
    setLoading(false);
  }
};

handleRegister(signupDetails);


// 1st page: Tell User to check their mail
// 2nd page:  will display spinner on load
//  then if token is successful it redirects to the login page

// https://fichat.vercel.app/verify?token=12345&email=test@gmail.com

export default function VerifyFromEmailPage () {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const verifyToken = async (token, email) => {
    const data = {
      token: token,
      // email: email
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/auth/user/form-verify`,
        data
      );
      console.log(res.data);
      //   "status": "success",
      //   "data": {
      //     "message": "kindly check your email to complete your registration"
      //   }
      // }
      navigate("/dashboard");
    } catch (error: unknown) {
      console.log(String(error?.response?.data?.message));
    } finally {
      setLoading(false);
    }
  }

  useLayoutEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if(!token && !email) {
      navigate('/login')
    }  else {
      verifyToken(token,email)
    }
  }, [])

  return (

  )
}