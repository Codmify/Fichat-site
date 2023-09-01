import { Route, Routes } from "react-router-dom"
import { Chat } from "./pages/components/chat/Chat"
import Profile from "./pages/components/profile/Profile"
import Contacts from "./pages/components/contacts/Contacts"
import Calls from "./pages/components/calls/Calls"
import Bookmark from "./pages/components/bookmark/Bookmark"
import Settings from "./pages/components/settings/Settings"
import { RecoilRoot } from "recoil"
import Dashboard from "./pages/components/dashboard/Dashboard"
import Chatting from "./pages/components/chat/chatting/Chatting"
import Login from "./pages/components/Auth/Login"
import Register from "./pages/components/Auth/Register"
import ForgotPassword from "./pages/components/Auth/ForgotPassword"


function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="register" element={<Register />}/>
          <Route path="auth-recoverpw" element={<ForgotPassword />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Chat />} />
          <Route path="chats" element={<Chat />} />
          <Route path="chats/:id" element={<Chatting />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="calls" element={<Calls />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App
