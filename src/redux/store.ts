
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducer/usersState';
import userSlice from './reducer/userState';
import conversationsSlice from './reducer/conversationsState';

const store = configureStore({
    reducer: {
        users: usersSlice,
        user: userSlice,
        conversations: conversationsSlice
    },

    }
);
export type RootState= ReturnType<typeof store.getState>;
 
export  { store };