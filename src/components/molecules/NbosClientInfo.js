import React from 'react';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtext } from '../atoms/NbosSummarySubtext';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export const NbosClientInfo = () => (
  <NbosSurface>
    <div className="tw-grid grid-rows-4">
      <div>
        <NbosSummarySubtext>Name</NbosSummarySubtext>
        <NbosClientInfoMainText>Patrick Barnes</NbosClientInfoMainText>
      </div>
      <div>
        <NbosSummarySubtext></NbosSummarySubtext>
        <NbosClientInfoMainText></NbosClientInfoMainText>
      </div>
      <div>
        <NbosSummarySubtext></NbosSummarySubtext>
        <NbosClientInfoMainText></NbosClientInfoMainText>
      </div>
      <div>
        <NbosSummarySubtext></NbosSummarySubtext>
        <NbosClientInfoMainText></NbosClientInfoMainText>
      </div>
    </div>
  </NbosSurface>
);
