import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosSummarySubtextLeft } from '../atoms/NbosSummarySubtextLeft';
import { NbosSummaryMedNumber } from '../atoms/NbosSummaryMedNumber';
import { NbosSummaryLargeNumber } from '../atoms/NbosSummaryLargeNumber';

export const NbosClient = ({ clientInfo }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-cols-3 tw-text-left tw-p-8">
      <div className="tw-text-left tw-grid-rows-2">
        <NbosSummaryLargeNumber largeNumber={clientInfo.totalRelationships} />
        <NbosSummarySubtextLeft subTextLabel="Total Relationships" />
      </div>
      <div className="tw-text-left tw-grid-rows-4 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryMedNumber medNumber={clientInfo.creditOnly} />
          <NbosSummarySubtextLeft subTextLabel="Credit Only Relationships" />
          <NbosSummaryMedNumber medNumber={clientInfo.highRelationships} />
          <NbosSummarySubtextLeft subTextLabel="Relationships with <$25 K TTM Revenue" />
        </div>
      </div>
      <div className="tw-text-left tw-grid-rows-2 tw-border-l-2">
        <div className="tw-grid tw-grid-rows-2">
          <NbosSummaryMedNumber medNumber={clientInfo.topProspects} />
          <NbosSummarySubtextLeft subTextLabel="Top Prospects" />
          <NbosSummaryMedNumber medNumber={clientInfo.suspects} />
          <NbosSummarySubtextLeft subTextLabel="Suspects" />
        </div>
      </div>
    </div>
  </NbosSurface>
);
