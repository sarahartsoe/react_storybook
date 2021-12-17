import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchUserInfo = createAsyncThunk('user/setUserInfo', async () => {
  console.log('fetching user info');
  const response = await services.getUsers();
  console.log(response.data);
  return response.data[4];
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    hireDate: '',
    role: '',
    teamLead: '',
  },
  reducers: {},
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.userName = `${payload.first_name} ${payload.last_name}`;
      state.hireDate = '2021/10/18';
      state.role = payload.role;
      state.teamLead = `${payload.tl_first_name} ${payload.tl_last_name} `;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
