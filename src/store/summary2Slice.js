import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchSummary2 = createAsyncThunk(
  'client/setSummary2',
  async () => {
    const reponse = await services.getSummary2();
    return reponse.data[0];
  },
);

export const summary2Slice = createSlice({
  name: 'summary2',
  initialState: {
    revenue: '##',
    avgRaroc: '',
    fee: '',
  },
  reducers: {},
  extraReducers: {
    [fetchSummary2.fulfilled]: (state, { payload }) => {
      state.revenue = `${payload.ttm_rev}`;
      state.avgRaroc = `${payload.ttm_avg_raroc}`;
      state.fee = `${payload.fee_equiv_card_load_comm}`;
    },
  },
});

export const { setSummary2 } = summary2Slice.actions;
export default summary2Slice.reducer;
