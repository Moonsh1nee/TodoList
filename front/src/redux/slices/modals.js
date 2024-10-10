import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modalListCreateOpen: false,
    modalListEditOpen: false,
}

const modalsSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalListCreate: (state) => {
            state.modalListCreateOpen = !state.modalListCreateOpen;
        },
        modalListEdit: (state) => {
            state.modalListEditOpen = !state.modalListEditOpen;
        }
    }
});

export const modalsReducer = modalsSlice.reducer;

export const {modalListCreate, modalListEdit} = modalsSlice.actions;