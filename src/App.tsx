import Dashboard from "./pages/components/dashboard/Dashboard"
import { Route, Routes } from "react-router-dom"
import { Chat } from "./pages/components/chat/Chat"
import Profile from "./pages/components/profile/Profile"
import Contacts from "./pages/components/contacts/Contacts"
import Calls from "./pages/components/calls/Calls"
import Bookmark from "./pages/components/bookmark/Bookmark"
import Settings from "./pages/components/settings/Settings"
import Login from "./pages/components/Auth/Login"
import Register from "./pages/components/Auth/Register"


function App() {

  return (
    <Routes>
        <Route path="/" element={<Login />}>
          <Route path="register" element={<Register />}/>
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Chat />} />
          <Route path="chats" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="calls" element={<Calls />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
    </Routes>
   
  )
}

export default App
