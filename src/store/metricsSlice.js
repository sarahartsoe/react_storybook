import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchOutcomeMetrics = createAsyncThunk(
  'outcome/setOutcomeMetrics',
  async () => {
    const reponse = await services.getOutcomeMetrics();
    console.log(reponse.data);
    return reponse.data[0];
  },
);

export const metricsSlice = createSlice({
  name: 'outcome',
  initialState: {
    loanProdY1: '##',
    loanProdY2: '',
    DepGrowthY1: '',
    DepGrowthY2: '',
    TmGrowthY1: '',
    TmGrowthY2: '',
    newClientsY1: '',
    newClientsY2: '',
  },
  reducers: {},
  extraReducers: {
    [fetchOutcomeMetrics.fulfilled]: (state, { payload }) => {
      state.loanProdY1 = `${payload.loan_prod_y1}`;
      state.loanProdY2 = `${payload.loan_prod_y2}`;
      state.DepGrowthY1 = `${payload.dep_growth_y1}`;
      state.DepGrowthY2 = `${payload.dep_growth_y2}`;
      state.TmGrowthY1 = `${payload.tm_growth_y1}`;
      state.TmGrowthY2 = `${payload.tm_growth_y2}`;
      state.newClientsY1 = `${payload.new_clients_y1}`;
      state.newClientsY2 = `${payload.new_clients_y2}`;
    },
  },
});

export const { setOutcomeMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
