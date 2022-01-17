import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtextLeft } from '../atoms/NbosSummarySubtextLeft';
import { NbosSummaryNumeric } from '../atoms/NbosSummaryNumeric';
import { formatCurrency } from '../../utilities/utilities.js';

export const NbosSummary1 = ({ summary1 }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-3 tw-text-left tw-p-8">
      <div className="tw-text-left tw-grid-rows-2">
        <NbosSummaryNumeric
          summaryNumeric={`${formatCurrency(summary1.avgLoan)}`}
        />
        <NbosSummarySubtextLeft subTextLabel="TTM Avg Loan Balance" />
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryNumeric
            summaryNumeric={`${formatCurrency(summary1.avgCredit)}`}
          />
          <NbosSummarySubtextLeft subTextLabel="TTM Avg Credit Commitments" />
        </div>
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <NbosSummaryNumeric
          summaryNumeric={`${formatCurrency(summary1.deposit)}`}
        />
        <NbosSummarySubtextLeft subTextLabel="TTM Deposit Balance" />
      </div>
    </div>
  </NbosSurface>
);
