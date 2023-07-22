import {createSlice} from '@reduxjs/toolkit';
import avatar from './avtar.webp';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: true,
        isLoading: false,
        userName: "chetan_saini",
        name: "Chetan Saini",
        email: "chetansaini1241@gmail.com",
        profile_pic: "https://ik.imagekit.io/pqymxdgbi/avtar.png",
        cf_userName: "chetan_saini",
        cc_userName: "chetan_saini21",
        lc_userName: "chetan_saini21",
        ac_userName: "chetan_saini12",
    },
    reducers: {
        loginUser: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.userName = action.payload.userName;
            if(action.payload.profile_pic)
            state.profile_pic = action.payload.profile_pic;
            if(action.payload.cf_userName)
            state.cf_userName = action.payload.cf_userName;
            if(action.payload.cc_userName)
            state.cc_userName = action.payload.cc_userName;
            if(action.payload.lc_userName)
            state.lc_userName = action.payload.lc_userName;
            if(action.payload.ac_userName)
            state.ac_userName = action.payload.ac_userName;
            localStorage.setItem('token', action.payload.token);

        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.isLoading = false;
            state.userName = undefined;
            state.profile_pic = "https://ik.imagekit.io/pqymxdgbi/avtar.png";
            state.cf_userName = undefined;
            state.cc_userName = undefined;
            state.lc_userName = undefined;
            state.ac_userName = undefined;
            localStorage.removeItem('token');
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
        
    }
});

export const { loginUser, logoutUser, setLoading } = loginSlice.actions;
export default loginSlice.reducer;

