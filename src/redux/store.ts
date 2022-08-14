
import { configureStore } from '@reduxjs/toolkit';
import chatAppReducer from '../redux/reducer/chatApp';

const store = configureStore({
    reducer: {
        chatApp: chatAppReducer,
    },

    }
);
export type RootState= ReturnType<typeof store.getState>;
 
export  { store };