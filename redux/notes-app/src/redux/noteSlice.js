import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

export const noteSlice = createSlice({

    name: 'notes',
    initialState: {
        items: [],
        filter: "",
    },

    reducers: {

        addNote: (state, action) => {

            const item = { ...action.payload, id: uuid() }
            state.items = [...state.items, item]
        },

        deleteNote: (state, action) => {

            var newİtems = state.items.filter((value, index) => {
                return value.id != action.payload;
            });

            state.items = newİtems;
        },

        setFilter: (state, action) => {
            
            state.filter = action.payload;
        }
    }
})

export default noteSlice.reducer;
export const { addNote, deleteNote, setFilter } = noteSlice.actions;