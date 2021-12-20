import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchClientInfo = createAsyncThunk(
  'client/setClientInfo',
  async () => {
    const reponse = await services.getClientInfo();
    console.log(reponse.data);
    return reponse.data[0];
  },
);

export const clientsSlice = createSlice({
  name: 'client',
  initialState: {
    totalRelationships: '##',
    creditOnly: '',
    topProspects: '',
    highRelationships: '',
    suspects: '',
  },
  reducers: {},
  extraReducers: {
    [fetchClientInfo.fulfilled]: (state, { payload }) => {
      state.totalRelationships = `${payload.relationships}`;
      state.creditOnly = `${payload.credit_only}`;
      state.topProspects = `${payload.top_prospects}`;
      state.suspects = `${payload.suspects}`;
      state.highRelationships = `${payload.high_relationships}`;
    },
  },
});

export const { setClientInfo } = clientsSlice.actions;
export default clientsSlice.reducer;
