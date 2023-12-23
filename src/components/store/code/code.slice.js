import { createSlice } from "@reduxjs/toolkit";
import { getCode } from "./code.action";

export const codeSlice = createSlice({
    name: "code",
    initialState: {
        isLoading: false,
        code: "",
        error: "",
        auth: false,
    },
    reducers: {
        addCode: (state, {payload: code}) => {
            state.code = code
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getCode.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getCode.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isExist = true;
            state.error = "";
            if (action.payload.id == state.code) {
                state.auth = true;
            } else {
                state.error = "not found";
            }
          })
          .addCase(getCode.rejected, (state) => {
            state.isLoading = false;
            state.auth = false
            state.code = ""
            state.error = "not found";
          });
      }
})

export const { actions, reducer } = codeSlice