import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { conversation } from "../../types";

interface conversationState {
    conversations: conversation[] | []
}


const initialState: conversationState = {
    conversations: [],
}


export const conversationsSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        setConversations: (state, action: PayloadAction<conversation[]>) => {
            state.conversations = action.payload
        }
    },





})
export const { setConversations } = conversationsSlice.actions;

export default conversationsSlice.reducer;