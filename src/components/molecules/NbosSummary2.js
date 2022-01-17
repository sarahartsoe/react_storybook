import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtextLeft } from '../atoms/NbosSummarySubtextLeft';
import { NbosSummaryNumeric } from '../atoms/NbosSummaryNumeric';
import { formatCurrency } from '../../utilities/utilities.js';

export const NbosSummary2 = ({ summary2 }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-3 tw-text-left tw-p-8">
      <div className="tw-text-left tw-grid-rows-2">
        <NbosSummaryNumeric
          summaryNumeric={`${formatCurrency(summary2.revenue)}`}
        />
        <NbosSummarySubtextLeft subTextLabel="TTM Revenue" />
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryNumeric summaryNumeric={`${summary2.avgRaroc}%`} />
          <NbosSummarySubtextLeft subTextLabel="TTM Avg RAR0C" />
        </div>
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <NbosSummaryNumeric summaryNumeric={`${summary2.fee}%`} />
        <NbosSummarySubtextLeft subTextLabel="Fee Equivalent + Card % of Loan Commit" />
      </div>
    </div>
  </NbosSurface>
);
