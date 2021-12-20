import React, { useEffect } from 'react';
// import './components/pages/home/style.css';
import { Layout } from 'antd';
import { NbosHeader } from '../atoms/NbosHeader.js';
import { NbosSideNav } from '../atoms/NbosSideNav.js';
import { NbosSummaryLeft } from '../templates/NbosSummaryLeft.js';
import { NbosSummaryRight } from '../templates/NbosSummaryRight.js';
import { NbosMetricsCard } from '../organisms/NbosMetricsCard';
import { NbosPipelineGrid } from '../templates/NbosPipelineGrid.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../store/userSlice.js';
import { fetchClientInfo } from '../../store/clientsSlice';
import { fetchSummary1 } from '../../store/summary1Slice';
import { fetchSummary2 } from '../../store/summary2Slice';
import { fetchOutcomeMetrics } from '../../store/metricsSlice';
import { fetchBehaviorMetrics } from '../../store/metrics2Slice';

const { Header, Content, Sider } = Layout;

export const NbosDashboard = () => {
  const userInfo = useSelector(state => state.userInfo);
  const clientInfo = useSelector(state => state.clientInfo);
  const summary1 = useSelector(state => state.summary1);
  const summary2 = useSelector(state => state.summary2);
  const outcomeMetrics = useSelector(state => state.outcomeMetrics);
  const behaviorMetrics = useSelector(state => state.behaviorMetrics);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchUserInfo());
    await dispatch(fetchClientInfo());
    await dispatch(fetchSummary1());
    await dispatch(fetchSummary2());
    await dispatch(fetchOutcomeMetrics());
    await dispatch(fetchBehaviorMetrics());
  });

  return (
    <div className="App">
      <Layout
        style={{
          backgroundColor: '#F9F9F9',
        }}
      >
        <Header className="header">
          <NbosHeader />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{ height: '100%', position: 'absolute' }}
            className="site-layout-background tw-h-full"
          >
            <NbosSideNav />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background tw-m-8"
              style={{
                padding: 24,
                margin: 64,
                minHeight: 280,
                backgroundColor: '#F9F9F9',
              }}
            >
              <div className="tw-grid tw-grid-cols-3 tw-gap-4">
                <div className="tw-grid tw-grid-cols-3 tw-grid-rows-3 tw-col-span-3 tw-grid-flow-col tw-gap-3">
                  <div className="tw-row-span-3 tw-col-span-1">
                    <NbosSummaryLeft userInfo={userInfo} />
                  </div>
                  <div className="tw-row-span-3 tw-col-span-2">
                    <NbosSummaryRight
                      clientInfo={clientInfo}
                      summary1={summary1}
                      summary2={summary2}
                    />
                  </div>
                </div>
                <div className="tw-col-span-3">
                  <NbosMetricsCard
                    outcomeMetrics={outcomeMetrics}
                    behaviorMetrics={behaviorMetrics}
                  />
                </div>
                <div className="tw-col-span-3">
                  <NbosPipelineGrid />
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};
