import React from 'react';
import { NbosClientInfo } from '../molecules/NbosClientInfo.js';
import { NbosClient } from '../molecules/NbosClient.js';
import { NbosSummary1 } from '../molecules/NbosSummary1.js';
import { NbosSummary2 } from '../molecules/NbosSummary2.js';

export const NbosSummary = ({ userInfo, clientInfo, summary1, summary2 }) => (
  <div className="tw-grid tw-grid-cols-3 tw-grid-flow-col tw-gap-4">
    <div className="tw-col-span-1">
      <NbosClientInfo userInfo={userInfo} />
    </div>
    <div className="tw-col-span-2 tw-grid tw-grid-rows-{n} tw-grid-flow-row tw-gap-9">
      <div className="tw-row-span-1">
        <NbosClient clientInfo={clientInfo} />
      </div>
      <div className="tw-row-span-1">
        <NbosSummary1 summary1={summary1} />
      </div>
      <div className="tw-row-span-1">
        <NbosSummary2 summary2={summary2} />
      </div>
    </div>
  </div>
);
