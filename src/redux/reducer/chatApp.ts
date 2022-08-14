import { createSlice } from "@reduxjs/toolkit";
import { AppStateType, userInfo } from "../../types";



const initialState:AppStateType = {

    user:[],
} 


export const chatAppSlice=createSlice({

name:'chatApp',
initialState,
reducers:{

   
    setUser: ( state:AppStateType,{payload}: {payload:userInfo[]}) => {
        state.user=payload
    }
},





})
export const {setUser}=chatAppSlice.actions;

export default chatAppSlice.reducer;