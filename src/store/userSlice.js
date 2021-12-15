import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    hireDate: '',
    role: '',
    teamLead: '',
  },
  reducer: {
    setUserInfo: (state, action) => {
      state.userName = `${action.payload.first_name} ${action.payload.last_name}`;
      state.hireDate = '1/1/2021';
      state.role = action.payload.role;
      state.teamLead = `${action.payload.tl_first_name} ${action.payload.tl_last_name} `;
    },
  },
});

export const fetchUserInfo = createAsyncThunk('user/setUserInfo', async () => {
  console.log('fetch user info');
  const response = await services.getUsers();
  return response.data;
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
