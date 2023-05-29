import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { AuthContextProvider } from './Components/Context/AuthContext';
import {Routes,Route} from 'react-router-dom';

function App() {
  const token = localStorage.getItem("Authorization")

  return (
    <>
      <AuthContextProvider>
        <Routes>
          {token ? (
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
