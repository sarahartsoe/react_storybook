import React from 'react';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export const NbosPipelineHeader = () => (
  <NbosSurface>
    <div className="tw-p-3">
      <NbosClientInfoMainText mainTextLabel="Pipeline" />
    </div>
  </NbosSurface>
);
