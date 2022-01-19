import React, { useEffect, useState } from 'react';
import './home/style.css';
import { Layout } from 'antd';
import { NbosHeader } from '../atoms/NbosHeader.js';
import { NbosSideNav } from '../atoms/NbosSideNav.js';
import { NbosSummary } from '../templates/NbosSummary.js';
// import { NbosSummaryRight } from '../templates/NbosSummaryRight.js';
import { NbosMetricsCard } from '../organisms/NbosMetricsCard';
import NbosPipelineGrid from '../templates/NbosPipelineGrid.js';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { fetchUserInfo } from '../../store/userSlice.js';
import { fetchClientInfo } from '../../store/clientsSlice';
import { fetchSummary1 } from '../../store/summary1Slice';
import { fetchSummary2 } from '../../store/summary2Slice';
import { fetchOutcomeMetrics } from '../../store/metricsSlice';
import { fetchBehaviorMetrics } from '../../store/metrics2Slice';
import { fetchOpportunitySummary } from '../../store/opportunitiesSlice';
import { fetchOpportunitiesDetail } from '../../store/opportunitiesDetailSlice';
import { store } from '../../store';

const { Header, Content, Sider } = Layout;

export const NbosDashboard = () => {
  const userInfo = useSelector(state => state.userInfo);
  const clientInfo = useSelector(state => state.clientInfo);
  const summary1 = useSelector(state => state.summary1);
  const summary2 = useSelector(state => state.summary2);
  const outcomeMetrics = useSelector(state => state.outcomeMetrics);
  const behaviorMetrics = useSelector(state => state.behaviorMetrics);
  const opportunitySummary = useSelector(state => state.opportunitySummary);
  const opportunitiesDetail = useSelector(state => state.opportunitiesDetail);
  const dispatch = useDispatch();

  const [metricsData, setMetricsData] = useState('outcome');

  const handleChangeToggle = async value => {
    setMetricsData(value);
    if (value === 'behavior ' && behaviorMetrics.length === 0) {
      await dispatch(fetchBehaviorMetrics());
    } else if (value === 'outcome' && outcomeMetrics.length === 0) {
      await dispatch(fetchOutcomeMetrics());
    }
    console.log(value);
  };

  useEffect(async () => {
    await dispatch(fetchUserInfo());
    await dispatch(fetchClientInfo());
    await dispatch(fetchSummary1());
    await dispatch(fetchSummary2());
    await dispatch(fetchOutcomeMetrics());
    await dispatch(fetchBehaviorMetrics());
    await dispatch(fetchOpportunitySummary());
    await dispatch(fetchOpportunitiesDetail());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Layout
          style={{
            backgroundColor: '#F9F9F9',
          }}
        >
          <Header className="header">
            <NbosHeader />
          </Header>
          <Layout className="tw-h-full" style={{ minHeight: '100vh' }}>
            <Sider
              style={{
                height: 2300,
              }}
              class="sider"
              width={200}
              height="2300px"
              className="site-layout-background tw-h-full"
            >
              <NbosSideNav />
            </Sider>
            <Content
              className="site-layout-background tw-m-8 tw-gap-4"
              style={{
                padding: 24,
                margin: 64,
                height: 2300,
                backgroundColor: '#F9F9F9',
              }}
            >
              <div className="tw-grid tw-grid-rows-{n} tw-grid-flow-row tw-gap-4">
                <div className="">
                  <NbosSummary
                    userInfo={userInfo}
                    clientInfo={clientInfo}
                    summary1={summary1}
                    summary2={summary2}
                  />
                </div>
                <div className="">
                  <NbosMetricsCard
                    userInfo={userInfo}
                    chartData={
                      metricsData === 'behavior'
                        ? behaviorMetrics
                        : outcomeMetrics
                    }
                    chartType={metricsData}
                    onChange={handleChangeToggle}
                  />
                </div>
                <div className="">
                  <NbosPipelineGrid
                    opportunitySummary={opportunitySummary}
                    opportunitiesDetail={opportunitiesDetail}
                  />
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Provider>
  );
};
