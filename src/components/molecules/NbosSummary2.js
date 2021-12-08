import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtext } from '../atoms/NbosSummarySubtext';
import { NbosSummaryNumeric } from '../atoms/NbosSummaryNumeric';

export const NbosSummary2 = () => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-3 tw-text-left tw-p-8">
      <div className="tw-text-left tw-grid-rows-2">
        <NbosSummaryNumeric summaryNumeric="$518.89" />
        <NbosSummarySubtext subTextLabel="TTM Revenue" />
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryNumeric summaryNumeric="4.41%" />
          <NbosSummarySubtext subTextLabel="TTM Avg RAR0C" />
        </div>
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <NbosSummaryNumeric summaryNumeric="0.94%" />
        <NbosSummarySubtext subTextLabel="Fee Equivalent + Card % of Loan Commit" />
      </div>
    </div>
  </NbosSurface>
);
