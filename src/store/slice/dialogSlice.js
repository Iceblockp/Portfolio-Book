import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: null,
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        close: (state) => {
            state.value = null;
        },
        open: (state, action) => {
            state.value = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { open, close } = dialogSlice.actions;

export default dialogSlice.reducer