import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";

interface AuthState {
    loginToken?: string
}

const initialState: AuthState = {
    loginToken: undefined
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateLoginToken: (state, action: PayloadAction<string | undefined>) => {
            console.log(action)
            state.loginToken = action.payload
        }
    }
})

export const {updateLoginToken} = authSlice.actions;

export const selectloginToken = (state: RootState) => state.auth.loginToken;

export default authSlice.reducer;