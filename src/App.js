import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { AuthContextProvider } from './Components/Context/AuthContext';
import {Routes,Route} from 'react-router-dom';

function App() {
  // getting token fron local storage one logged in
  const token = localStorage.getItem("Authorization") 
  return (
    <>
    {/* for google authentication and to get user info */}
      <AuthContextProvider>
        {/* creating routes from react router dom */}
        <Routes>
          {/* conditional rendering to navigate to dashboard page if token is present or else stay in login page */}
          {cookies ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
