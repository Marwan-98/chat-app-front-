import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface conversationState {
    id: string 
}

const initialState: conversationState = {
    id: "0",
}

export const convoSlice = createSlice({
    name: "id",
    initialState,
    reducers: {
        setConvoId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }
})

export const { setConvoId } = convoSlice.actions;

export default convoSlice.reducer;