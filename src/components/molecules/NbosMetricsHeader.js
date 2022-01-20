import React from 'react';
import NbosMetricsToggle from '../atoms/NbosMetricsToggle';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export const NbosMetricsHeader = ({ userInfo, onChange }) => (
  <div className="tw-grid tw-grid-cols-6 tw-pt-2">
    <div className="tw-col-start-1 tw-col-end-3">
      <NbosClientInfoMainText
        mainTextLabel={`${userInfo.userName} vs. This Time Last Year`}
      />
    </div>
    <div className="tw-col-end-6">
      <NbosMetricsToggle changeHandler={onChange} />
    </div>
  </div>
);
