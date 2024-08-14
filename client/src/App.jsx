import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Layout from "./Components/home/Layout";
import SocialPanel from "./Components/Market/SocialPanel";
import Register from "./Components/register/Register";
import Login from "./Components/login/Login";
import YouTubeShorts from "./Components/youtube/YouTubeShorts";
import ForgetPassword from "./Components/Forget/ForgetPassword";
import MessagePage from "./Components/Profile/MessagePage";


function App() {
  return (
    <div>
       
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/social" element={<SocialPanel />} />
        <Route path="/shorts" element={<YouTubeShorts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Register />} />
        <Route path="/for" element={<ForgetPassword />} />
        <Route path="/msg" element={<MessagePage />} />
        
        {/* other routes */}
      </Routes>
    </div>
  );
}

export default App;
