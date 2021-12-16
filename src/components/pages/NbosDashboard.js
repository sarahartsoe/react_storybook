import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { NbosHeader } from '../atoms/NbosHeader.js';
import { NbosSideNav } from '../atoms/NbosSideNav.js';
import { NbosSummaryLeft } from '../templates/NbosSummaryLeft.js';
import { NbosSummaryRight } from '../templates/NbosSummaryRight.js';
import { NbosMetricsCard } from '../organisms/NbosMetricsCard';
import { NbosPipelineGrid } from '../templates/NbosPipelineGrid.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../store/userSlice.js';

const { Header, Content, Sider } = Layout;

export const NbosDashboard = () => {
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchUserInfo());
  });
  return (
    <Layout
      style={{
        backgroundColor: '#F9F9F9',
      }}
    >
      <Header className="header">
        <NbosHeader />
      </Header>
      <Layout>
        <Sider width={200} height={100} className="site-layout-background">
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
                  <NbosSummaryRight />
                </div>
              </div>
              <div className="tw-col-span-3">
                <NbosMetricsCard />
              </div>
              <div className="tw-col-span-3">
                <NbosPipelineGrid />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
