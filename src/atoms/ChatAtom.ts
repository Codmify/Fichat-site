import { atom } from "recoil";

type ChatState = {
    isOpen: boolean,
    type:  "chats" | "archived"
}

const initialChatState: ChatState = {
    isOpen: false,
    type: 'chats'
}

export const chatState = atom<ChatState>({
    key: 'chatState',
    default: initialChatState
})