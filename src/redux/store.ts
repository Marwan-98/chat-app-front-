
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducer/usersState';
import userSlice from './reducer/userState';

const store = configureStore({
    reducer: {
        users: usersSlice,
        user: userSlice
    },

    }
);
export type RootState= ReturnType<typeof store.getState>;
 
export  { store };