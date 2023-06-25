import {createSlice} from "@reduxjs/toolkit";
import {servicesContactInfo} from "@/interfaces/generalResponses";

const User = createSlice({
    initialState: {
        settings: [] as servicesContactInfo[]
    },
    name: "User",
    reducers: {
        setSettings: (state, action) => void (state.settings = action.payload)
    },
});

export default User.reducer;

export const {setSettings} = User.actions;

export const getSetings = (state: any) => (state.User.settings as servicesContactInfo[])



