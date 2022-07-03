import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'userSlice',
    initialState: {
        status: 'checking',
        user :{},
        errorMsg: undefined
    },
    reducers: {
        onChecking: ( state ) => {
            state.status ='checking';
            state.user = {} ;
            state.errorMsg = undefined ; 
        },

        onLogin: ( state, {payload} ) => {
            state.status = 'authenticated';
            state.user = payload; 
            state.errorMsg = undefined;
        }
    }
});

export const { onChecking, onLogin } = userSlice.actions;