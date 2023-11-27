import { atom } from "recoil";

type CallSate = {
    isOpen: boolean,
    type: "voice" | "video"
}

const initialCallState: CallSate = {
    isOpen: false,
    type: "voice"
}

export const callsState = atom<CallSate>({
    key: "callsState",
    default: initialCallState
})