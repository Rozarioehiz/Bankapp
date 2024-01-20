// Redux slice
import { createSlice } from '@reduxjs/toolkit';

const MySlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    userToken: '',
    userBalance: {
      acctBalance: 0
    },
    userAcct: {
      acctNum: 0
    }
  },
  reducers: {
    Userdata: (state, { payload }) => {
      state.user = payload;
    },
    UserToken: (state, { payload }) => {
      state.userToken = payload;
    },
    UserLogOut: (state) => {
      state.userToken = '';
    },
    userBalance: (state, { payload }) => {
      state.userBalance = payload;
    },
    userAcct: (state, { payload }) => {
      state.userAcct = payload;
    }
  },
});

export const { Userdata, UserToken, UserLogOut, userBalance, userAcct } = MySlice.actions;
export default MySlice.reducer;
