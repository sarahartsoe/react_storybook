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
      // state.clientName = `${payload[1].client_name}`;
      // state.productType = `${payload[1].product_type}`;
      // state.salesStage = `${payload[1].sales_stage}`;
      // state.revenue = `${payload[1].revenue}`;
      // state.dateClosed = `${payload[1].date_closed}`;
    },
  },
});

export const { setOpportunitySummary } = opportunitiesDetailSlice.actions;
export default opportunitiesDetailSlice.reducer;
