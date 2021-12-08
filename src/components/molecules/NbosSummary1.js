import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtext } from '../atoms/NbosSummarySubtext';
import { NbosSummaryNumeric } from '../atoms/NbosSummaryNumeric';

export const NbosSummary1 = () => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-3 tw-text-left tw-p-8">
      <div className="tw-text-left tw-grid-rows-2">
        <NbosSummaryNumeric summaryNumeric="$519.09k" />
        <NbosSummarySubtext subTextLabel="TTM Avg Loan Balance" />
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryNumeric summaryNumeric="$549.13k" />
          <NbosSummarySubtext subTextLabel="TTM Avg Credit Commitments" />
        </div>
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <NbosSummaryNumeric summaryNumeric="$0.00" />
        <NbosSummarySubtext subTextLabel="TTM Deposit Balance" />
      </div>
    </div>
  </NbosSurface>
);
