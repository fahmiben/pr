import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const registerUser=createAsyncThunk(
  "service/services",
  async (user) => {
      try {
          let result=await axios.post("http://localhost:5000/service/services",user);
          return result;
      } catch (error) {
          console.log(error)
      }
  }
);

export const { logout } = serviceSlice.actions;


export default serviceSlice.reducer;
