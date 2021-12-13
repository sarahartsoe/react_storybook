import React from 'react';
import { NbosMetricsToggle } from '../atoms/NbosMetricsToggle';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export const NbosMetricsHeader = () => (
  <div className="tw-grid tw-grid-cols-2">
    <div>
      <NbosClientInfoMainText mainTextLabel="Patrick Barnes vs. This Time Last Year" />
    </div>
    <div>
      <NbosMetricsToggle />
    </div>
  </div>
);
