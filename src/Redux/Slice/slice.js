import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        headers: [],
        loading: false,
        error: null
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setHeaders: (state, action) => {
            state.headers = action.payload;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { setLoading, setHeaders, setError } = headerSlice.actions;
export default headerSlice.reducer;
