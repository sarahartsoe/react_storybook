import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchOpportunitiesDetail = createAsyncThunk(
  'opportunitiesDetail/setOpportunitiesDetail',
  async () => {
    const reponse = await services.getOpportunitiesDetail();
    return reponse.data;
  },
);

export const opportunitiesDetailSlice = createSlice({
  name: 'opportunitiesDetail',
  initialState: {
    opportunities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchOpportunitiesDetail.fulfilled]: (state, { payload }) => {
      state.opportunities = payload;
      state.opportunities = payload.map(v => ({ ...v, details: 'Details' }));
    },
  },
});

export const { setOpportunitySummary } = opportunitiesDetailSlice.actions;
export default opportunitiesDetailSlice.reducer;
