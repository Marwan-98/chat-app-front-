import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { conversation, message } from "../../types";

interface conversationState {
    conversations: conversation[] | []
    messages: message[] | []
}
const initialState: conversationState = {
    conversations: [],
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
    },
})

export const { setConversations, setMessages } = conversationsSlice.actions;
export default conversationsSlice.reducer;