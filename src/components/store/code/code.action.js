import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCode = createAsyncThunk(
  "code/get",
  async (id) => {
    const resp = await axios.get(`https://newyeargiftjs--mishaoson.repl.co/cods/${id}`);
    
    return resp.data
  }
);