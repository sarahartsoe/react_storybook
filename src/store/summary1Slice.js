import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchSummary1 = createAsyncThunk(
  'client/setSummary1',
  async () => {
    const reponse = await services.getSummary1();
    return reponse.data[0];
  },
);

export const summary1Slice = createSlice({
  name: 'summary1',
  initialState: {
    avgLoan: '',
    avgCredit: '',
    deposit: '',
  },
  reducers: {},
  extraReducers: {
    [fetchSummary1.fulfilled]: (state, { payload }) => {
      state.avgLoan = `${payload.ttm_avg_loan_bal}`;
      state.avgCredit = `${payload.ttm_avg_credit_comm}`;
      state.deposit = `${payload.ttm_dep_bal}`;
    },
  },
});

export const { setSummary1 } = summary1Slice.actions;
export default summary1Slice.reducer;
