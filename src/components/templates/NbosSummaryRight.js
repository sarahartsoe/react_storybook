import React from 'react';
import { NbosClient } from '../molecules/NbosClient.js';
import { NbosSummary1 } from '../molecules/NbosSummary1.js';
import { NbosSummary2 } from '../molecules/NbosSummary2.js';

export const NbosSummaryRight = ({ clientInfo, summary1, summary2 }) => (
  <div className="tw-grid tw-grid-rows-3 tw-gap-3">
    <div>
      <NbosClient clientInfo={clientInfo} />
    </div>
    <div className="tw-mt-5">
      <NbosSummary1 summary1={summary1} />
    </div>
    <div>
      <NbosSummary2 summary2={summary2} />
    </div>
  </div>
);
