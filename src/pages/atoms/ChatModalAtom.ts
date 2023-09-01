import { atom } from "recoil";

type ChatModalState = {
    isOpen: boolean,
    type: "invite" | "contact" | "group"
}

const initialChatModalState: ChatModalState = {
    isOpen: false,
    type: 'invite'
}

export const chatModalState = atom<ChatModalState>({
    key: 'chatModalState',
    default: initialChatModalState
})