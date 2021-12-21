import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

export const fetchOpportunitySummary = createAsyncThunk(
  'opportunitySummary/setOpportunitySummary',
  async () => {
    const reponse = await services.getOpportunitySummary();
    console.log(reponse.data);
    return reponse.data;
  },
);

export const opportunitiesSlice = createSlice({
  name: 'opportunitySummary',
  initialState: {
    stageOne2020: '##',
    stageTwo2020: '',
    stageThree2020: '',
    stageFour2020: '',
    booked2020: '',
    stageOne2021: '##',
    stageTwo2021: '',
    stageThree2021: '',
    stageFour2021: '',
    booked2021: '',
  },
  reducers: {},
  extraReducers: {
    [fetchOpportunitySummary.fulfilled]: (state, { payload }) => {
      state.stageOne2020 = `${payload[1].stage_1}`;
      state.stageTwo2020 = `${payload[1].stage_2}`;
      state.stageThree2020 = `${payload[1].stage_3}`;
      state.stageFour2020 = `${payload[1].stage_4}`;
      state.booked2020 = `${payload[1].booked_ytd}`;
      state.stageOne2021 = `${payload[2].stage_1}`;
      state.stageTwo2021 = `${payload[2].stage_1}`;
      state.stageThree2021 = `${payload[2].stage_1}`;
      state.stageFour2021 = `${payload[2].stage_1}`;
      state.booked2021 = `${payload[2].booked_ytd}`;
    },
  },
});

export const { setOpportunitySummary } = opportunitiesSlice.actions;
export default opportunitiesSlice.reducer;
