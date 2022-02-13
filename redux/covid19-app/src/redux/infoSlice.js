import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({

    name: "info",
    initialState: {

        confirmed: {},
        recovered: {},
        deaths:{},
        lastUpdate: "",
    },

    reducers: {

        setConfirmed: (state,actions) => {
            state.confirmed = actions.payload;
        },

        setRecovered: (state,actions) => {
            state.recovered = actions.payload;
        },

        setDeaths: (state,actions) => {
            state.deaths = actions.payload;
        },

        setLastUpdate: (state,actions) => {
            state.lastUpdate = actions.payload;
        },

    }

});

export const { setConfirmed, setRecovered, setDeaths, setLastUpdate } = infoSlice.actions;
export default infoSlice.reducer