import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { conversation, message } from "../../types";

interface conversationState {
    conversations: conversation[] | []
    messages: message[] | []
}
const initialState: conversationState = {
    conversations: JSON.parse(localStorage.getItem("conversations")!) || [],
    messages: []
}
export const conversationsSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        setConversations: (state, action: PayloadAction<conversation[]>) => {
            state.conversations = action.payload
        },
        setMessages: (state, action: PayloadAction<message[]>) => {
            state.messages = action.payload
        },
        addMessage: (state, action: PayloadAction<message>) => {
            state.messages = [...state.messages, action.payload];
        }
    },
})

export const { setConversations, setMessages, addMessage } = conversationsSlice.actions;
export default conversationsSlice.reducer;