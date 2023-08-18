import {createSlice} from '@reduxjs/toolkit';
import avatar from './avtar.webp';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
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
            // localStorage.setItem('token', action.payload.token);

        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.isLoading = false;
            state.userName = undefined;
            state.profile_pic = "https://ik.imagekit.io/pqymxdgbi/avtar.png";
            // localStorage.removeItem('token');
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
        
    }
});

export const { loginUser, logoutUser, setLoading } = loginSlice.actions;
export default loginSlice.reducer;

