import axios from 'axios';

const apiBaseURL = 'http://localhost:3004';

const services = {
  getUsers: () => {
    console.log(apiBaseURL);
    return axios.get(`${apiBaseURL}/users`);
  },
  getClientInfo: () => {
    return axios.get(`${apiBaseURL}/clients`);
  },
  getSummary1: () => {
    return axios.get(`${apiBaseURL}/summary1`);
  },
  getSummary2: () => {
    return axios.get(`${apiBaseURL}/summary2`);
  },
  getOutcomeMetrics: () => {
    return axios.get(`${apiBaseURL}/outcome_metrics`);
  },
  getBehaviorMetrics: () => {
    return axios.get(`${apiBaseURL}/behavior_metrics`);
  },
  getOpportunitySummary: () => {
    return axios.get(`${apiBaseURL}/opportunities_summary`);
  },
};

export default services;
