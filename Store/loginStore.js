import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
        isLoading: false,
        userName: "chetan_saini",
        profile_pic: "https://ik.imagekit.io/pqymxdgbi/avtar.png"
    },
    reducers: {
        loginUser: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.userName = action.payload.userName;
            if(action.payload.profile_pic)
            state.profile_pic = action.payload.profile_pic;
        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.isLoading = false;
            state.userName = undefined;
            state.profile_pic = "https://ik.imagekit.io/pqymxdgbi/avtar.png";
            localStorage.removeItem('token');
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
        
    }
});

export const { loginUser, logoutUser, setLoading } = loginSlice.actions;
export default loginSlice.reducer;

