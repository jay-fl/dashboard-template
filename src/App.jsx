import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
//Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
//Pages admin
import Home from "./pages/admin/Home";
import Chat from "./pages/admin/Chat";
import Profile from "./pages/admin/Profile";
import Tickets from "./pages/admin/Tickets";
import Error404 from "./pages/Error404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} /> 
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
