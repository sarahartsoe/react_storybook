import React from 'react';
import { NbosMetricsHighchart } from '../molecules/NbosMetricsHighchart';
import { NbosMetricsHeader } from '../molecules/NbosMetricsHeader';
import { NbosSurface } from '../atoms/NbosSurface';

export const NbosMetricsCard = ({ userInfo, outcomeMetrics }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-rows-5">
      <div className="tw-pl-4 tw-pr-4 tw-pt-2">
        <NbosMetricsHeader userInfo={userInfo} />
      </div>
      <div className="tw-row-span-3 tw-justify-center">
        <NbosMetricsHighchart outcomeMetrics={outcomeMetrics} />
      </div>
    </div>
  </NbosSurface>
);
