import React from 'react';
import { NbosSummarySubtextLeft } from '../atoms/NbosSummarySubtextLeft';
import { NbosCircleBlue } from '../atoms/NbosCircleBlue';
import { NbosCircleGrey } from '../atoms/NbosCircleGrey';

export const NbosMetricsFooter = () => (
  <div className="tw-grid tw-grid-cols-2 tw-col-start-1 tw-justify-start ">
    <div className="tw-grid tw-grid-cols-2">
      <NbosCircleBlue />
      <NbosSummarySubtextLeft subTextLabel="RM" />
    </div>
    <div className="tw-grid tw-grid-cols-2">
      <NbosCircleGrey />
      <NbosSummarySubtextLeft subTextLabel="This Time Last Year" />
    </div>
  </div>
);
