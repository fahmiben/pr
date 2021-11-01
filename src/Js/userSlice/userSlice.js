import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const registerUser=createAsyncThunk(
  "user/registerUser",
  async (user) => {
      try {
          let result=await axios.post("http://localhost:5000/user/registerUser",user);
          return result;
      } catch (error) {
          console.log(error)
      }
  }
);

export const loginUser=createAsyncThunk(
  "user/loginUser",
  async (user) => {
      try {
          let result=await axios.post("http://localhost:5000/user/login",user);
          return result;
      } catch (error) {
          console.log(error)
      }
  }
);

export const currentUser=createAsyncThunk(
  "user/currentUser",
  async () => {
    let opts={
      headers:{
        Authorization:localStorage.getItem("token"),
      }
    }
      try {
          let result=await axios.get("http://localhost:5000/user/current",opts);
          return result;
      } catch (error) {
          console.log(error)
      }
  }
);

const initialState = {
  user:null,
  status:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout:(state,action)=>{
      localStorage.removeItem("token");
      localStorage.removeItem("userType");

      state.user=null;

    },
  },
  extraReducers:{
   [registerUser.pending]:(state)=>{
       state.status="pending";
   },
   [registerUser.fulfilled]:(state,action)=>{
    state.status="success";
    state.user=action.payload.data?.user;
    console.log(action.payload)
    localStorage.setItem("token", action.payload.data?.token);
    localStorage.setItem("userType", action.payload.data?.user.userType);

},
[registerUser.rejected]:(state)=>{
    state.status="failed";
},

[loginUser.pending]:(state)=>{
  state.status="pending";
},
[loginUser.fulfilled]:(state,action)=>{
state.status="success";
state.user=action.payload.data.searchedUser;
localStorage.setItem("token", action.payload.data?.token);
localStorage.setItem("userType", action.payload.data?.user.userType);

},
[loginUser.rejected]:(state)=>{
state.status="failed";
},

[currentUser.pending]:(state)=>{
  state.status="pending";
},
[currentUser.fulfilled]:(state,action)=>{
state.status="success";
state.user=action.payload.data.user;
},
[currentUser.rejected]:(state)=>{
state.status="failed";
},
  }
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;


export default userSlice.reducer;