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
    navigate("/verify-email");
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