import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  // getting signin from context
  const { googleSignIn } = UserAuth();

  let navigate = useNavigate();

  // calling function for signing in
  const signIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${"https://tradebrains.in/wp-content/uploads/2021/12/Minimum-Amount-For-Trading-in-india-2023-Cover-Image-1080x675.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "right", sm: "top", md: "top" },
          backgroundSize: "cover",
          height: { xs: "100vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "50px 30px",
            width: { xs: "70%", sm: "400px", md: "400px" },
            margin: "0px auto",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            webkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h2 style={{marginBottom: "40px",color:"white"}}>Welcome to Stock price app</h2>
          <h5 onClick={signIn} style={{ margin: "10px", color: "white"}}>
            Sign in with Google{" "}
            <span style={{ color: "dodgerblue", cursor: "pointer" }}>
              Click here
            </span>
          </h5>
        </Box>
      </Box>
    </>
  );
}

export default Login;
