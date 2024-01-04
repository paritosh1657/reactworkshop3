import { createSlice } from "@reduxjs/toolkit"

const userSlice= createSlice({
  name: "userSlice",
  initialState:{
   testState:"demo",
   count: 0
  },
  reducers:{
    handleTest:(state, action)=>{
      state.testState= action.payload;
    },
    counterState:(state, action)=>{
      state.count= state.count +1;
    },
    decrementCounter:(state, action)=>{
      if(state.count >0){
        state.count= state.count -1
      }
    },
    resetCounter:(state, action)=>{
      state.count= 0;
    }
  }
})

export const {handleTest, counterState, decrementCounter, resetCounter} = userSlice.actions;
export default userSlice.reducer;