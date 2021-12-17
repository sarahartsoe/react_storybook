import React from 'react';
import { NbosClientInfo } from '../molecules/NbosClientInfo.js';

export const NbosSummaryLeft = ({ userInfo }) => (
  <div className="tw-row-span-3">
    <NbosClientInfo userInfo={userInfo} />
  </div>
);
