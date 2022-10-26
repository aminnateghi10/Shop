import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import User from "../models/user";

interface AuthState {
    loginToken?: string,
    user?:User
}

const initialState: AuthState = {
    loginToken: undefined ,
    user: undefined
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateLoginToken: (state, action: PayloadAction<string | undefined>) => {
            state.loginToken = action.payload
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export const {updateLoginToken , updateUser} = authSlice.actions;

export const selectloginToken = (state: RootState) => state.auth.loginToken;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;