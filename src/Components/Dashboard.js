import React, { useState } from "react";
import { Button } from "@mui/material";
import {UserAuth} from './Context/AuthContext';
import { useNavigate } from "react-router-dom";
import './dashboard.css';
import Box from "@mui/material/Box";
import {
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  WhatsappIcon
} from "react-share";

function Dashboard() {
  const [symbol, setSymbol] = useState("");
  const [fdata, setFdata] = useState(null);
  const navigate = useNavigate()
  const { googleLogout, user} = UserAuth()

  const apikey = process.env.REACT_APP_API_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(symbol);
    console.log(apikey);
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}.BSE&outputsize=commpact&apikey=${apikey}`
    )
      .then((data) => data.json())
      .then((data) => setFdata(data))
      .catch((error) => console.log(error));
  };

  const logout = (e) =>{
    googleLogout()
    navigate('/')
  }

  return (
    <div className="dashboard">
      <Box className="topbar">
        <h4>{user.email}</h4>
      <Button onClick={(e)=>logout(e)} variant="outlined">Logout</Button>
      </Box>
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
      <h2 style={{color:"darkblue"}}>Dashboard</h2>
      <h4>Get the BSE stock prices for 15th May 2023</h4>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter Ticker Symbol"
          onChange={(e) => setSymbol(e.target.value)}
          style={{padding:"10px"}}
        />
        <p className="label" style={{color:"gray"}}>Example: RELIANCE</p>
        <Button type="submit" variant="outlined">Search</Button>
      </form>
      </Box>
      {fdata ? (
        <Box
        sx={{
          padding: "50px 30px",
          width: { xs: "70%", sm: "100px", md: "400px" },
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
        <div className="dashboard-r">
          <h5>The prices of <span style={{color:"dodgerblue"}}>{symbol}</span> for May 15 2023 are</h5>
          <h6>
          The opening price of the day: <span style={{color:"dodgerblue"}}>{(fdata["Time Series (Daily)"]["2023-05-15"]["1. open"])}</span>
          </h6>
          <h6>
          The closing price of the day: <span style={{color:"dodgerblue"}}>{(fdata["Time Series (Daily)"]["2023-05-15"]['4. close'])}</span>
          </h6>
        </div>
        <WhatsappShareButton
            url="https://localhost:3000"
            title={`The stock closing price of ${symbol} on 15th May is ${(fdata["Time Series (Daily)"]["2023-05-15"]['4. close'])}`}
            logofillcolor="white"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <EmailShareButton
            url="https://localhost:3000"
            subject="The stock price"
            body={`The stock price of ${symbol} on 15th May is ${(fdata["Time Series (Daily)"]["2023-05-15"]['4. close'])}`}
            className="Demo__some-network__share-button"
            logofillcolor="white"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Box>
      ) : null}
    </div>
  );
}

export default Dashboard;
