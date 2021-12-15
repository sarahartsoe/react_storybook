import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtextLeft } from '../atoms/NbosSummarySubtextLeft';
import { NbosSummaryMedNumber } from '../atoms/NbosSummaryMedNumber';
import { NbosSummaryLargeNumber } from '../atoms/NbosSummaryLargeNumber';

export const NbosClient = () => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-3 tw-text-left tw-p-8">
      <div className="tw-text-left tw-grid-rows-2">
        <NbosSummaryLargeNumber largeNumber="56" />
        <NbosSummarySubtextLeft subTextLabel="Total Relationships" />
      </div>
      <div className="tw-text-left tw-grid-rows-4 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryMedNumber medNumber="4" />
          <NbosSummarySubtextLeft subTextLabel="Credit Only Relationships" />
          <NbosSummaryMedNumber medNumber="6" />
          <NbosSummarySubtextLeft subTextLabel="Relationships with <$25 K TTM Revenue" />
        </div>
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <NbosSummaryMedNumber medNumber="14" />
        <NbosSummarySubtextLeft subTextLabel="Top Prospects" />
        <NbosSummaryMedNumber medNumber="0" />
        <NbosSummarySubtextLeft subTextLabel="Suspects" />
      </div>
    </div>
  </NbosSurface>
);
