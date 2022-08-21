import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { userInfo } from "../../types";

interface usersState {
    users: userInfo[] | []
}


const initialState: usersState = {
    users: JSON.parse(localStorage.getItem("users")!) || []
}


export const usersSlice = createSlice({
    name: 'chatApp',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<userInfo[]>) => {
            state.users = action.payload
        }
    },





})
export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;