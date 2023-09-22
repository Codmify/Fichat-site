import { Route, Routes } from "react-router-dom"
import { Chat } from "./pages/components/chat/Chat"
import Profile from "./pages/components/profile/Profile"
import Contacts from "./pages/components/contacts/Contacts"
import Calls from "./pages/components/calls/Calls"
import Bookmark from "./pages/components/bookmark/Bookmark"
import Settings from "./pages/components/settings/Settings"
import { RecoilRoot } from "recoil"
import Chatting from "./pages/components/dashboard/chatting/Chatting"
import Dashboard from "./pages/components/dashboard/Dashboard"
import Welcome from "./pages/components/dashboard/welcome/Welcome"
import Login from "./pages/components/Auth/Login"
import Register from "./pages/components/Auth/Register"
import ForgotPassword from "./pages/components/Auth/ForgotPassword"
import Verification from "./pages/components/Auth/Verification"
import Verified from "./pages/components/Auth/Verified"


function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="register" element={<Register />} />
        <Route path="recovery" element={<ForgotPassword />}/>
        <Route path="onestepaway" element={<Verification />}/>
        <Route path="verified" element={<Verified />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Chat />}>
            <Route index element={<Welcome />} />
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
      </Routes>
    </RecoilRoot>
  )
}

export default App
