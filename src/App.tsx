import { Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"

import Home from "./pages/home/Home"
import { Chat } from "./pages/chat/Chat"
import Profile from "./pages/profile/Profile"
import Contacts from "./pages/contacts/Contacts"
import Calls from "./pages/calls/Calls"
import Bookmark from "./pages/bookmark/Bookmark"
import Settings from "./pages/settings/Settings"

import Chatting from "./components/dashboard/chatting/Chatting"
import Dashboard from "./components/dashboard/Dashboard"
import Welcome from "./components/dashboard/welcome/Welcome"
import Login from "./pages/login/Login"
// import LoginOld from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import ForgotPassword from "./components/Auth/ForgotPassword"
import VerifyEmail from "./components/Auth/VerifyEmail"
import OneStepAway from "./components/Auth/OneStepAway"
import Error from "./components/error/Error"



function App() {

  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login_old" element={<LoginOld />} /> */}
        <Route path="register" element={<Register />} />
        <Route path="recovery" element={<ForgotPassword />} />
        <Route path="onestepaway" element={<OneStepAway />} />
        <Route path="verify" element={<VerifyEmail />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Chat />}>
            <Route index element={<Welcome />} />
            <Route path="chats" element={<Welcome />} />
            <Route path="chats/:id" element={<Chatting />} />
          </Route>

          <Route path="profile" element={<Profile />}>
            <Route index element={<Welcome />} />
          </Route>


          <Route path="contacts" element={<Contacts />}>
            <Route index element={<Welcome />} />
          </Route>

          <Route path="calls" element={<Calls />}>
            <Route index element={<Welcome />} />
          </Route>

          <Route path="bookmark" element={<Bookmark />}>
            <Route index element={<Welcome />} />
          </Route>

          <Route path="settings" element={<Settings />}>
            <Route index element={<Welcome />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
