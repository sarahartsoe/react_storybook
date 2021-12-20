import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchBehaviorMetrics = createAsyncThunk(
  'behavior/setBehaviorMetrics',
  async () => {
    const reponse = await services.getBehaviorMetrics();
    console.log(reponse.data);
    return reponse.data[0];
  },
);

export const metrics2Slice = createSlice({
  name: 'outcome',
  initialState: {
    satisfactionY1: '##',
    satisfactionY2: '',
    clientCallsY1: '',
    clientCallsY2: '',
    prospectCallsY1: '',
    prospectCallsY2: '',
    strategiesY1: '',
    strategiesY2: '',
  },
  reducers: {},
  extraReducers: {
    [fetchBehaviorMetrics.fulfilled]: (state, { payload }) => {
      state.satisfactionY1 = `${payload.avg_overall_rm_sat_y1}`;
      state.satisfactionY2 = `${payload.avg_overall_rm_sat_y2}`;
      state.clientCallsY1 = `${payload.client_calls_y1}`;
      state.clientCallsY2 = `${payload.client_calls_y2}`;
      state.prospectCallsY1 = `${payload.prospect_calls_y1}`;
      state.prospectCallsY2 = `${payload.prospect_calls_y2}`;
      state.strategiesY1 = `${payload.strat_uploaded_y1}`;
      state.strategiesY2 = `${payload.strat_uploaded_y2}`;
    },
  },
});

export const { setBehaviorMetrics } = metrics2Slice.actions;
export default metrics2Slice.reducer;
