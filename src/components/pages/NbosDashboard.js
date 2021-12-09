import React from 'react';
import { Layout } from 'antd';
import { NbosHeader } from '../atoms/NbosHeader.js';
import { NbosSideNav } from '../atoms/NbosSideNav.js';
import { NbosClientInfo } from '../molecules/NbosClientInfo.js';
import { NbosClient } from '../molecules/NbosClient.js';
import { NbosSummary1 } from '../molecules/NbosSummary1.js';
import { NbosSummary2 } from '../molecules/NbosSummary2.js';

const { Header, Content, Sider } = Layout;

export const NbosDashboard = () => {
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
        <Sider width={200} className="site-layout-background">
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
              <NbosClientInfo />
              <div className="tw-grid tw-grid-rows-3 tw-ml-8 tw-gap-4 tw-col-span-2">
                <NbosClient />
                <NbosSummary1 />
                <NbosSummary2 />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
