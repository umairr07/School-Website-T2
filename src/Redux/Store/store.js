import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../Slice/slice";

export const store = configureStore({
    reducer: {
        header: headerSlice
    }
});
