import React from 'react';
import { NbosMetricsToggle } from '../atoms/NbosMetricsToggle';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';
import { NbosSurface } from '../atoms/NbosSurface';

export const NbosMetricsHeader = () => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-2">
      <div>
        <NbosClientInfoMainText />
      </div>
      <div>
        <NbosMetricsToggle />
      </div>
    </div>
  </NbosSurface>
);
