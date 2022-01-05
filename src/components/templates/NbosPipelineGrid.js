import React from 'react';
import { NbosPipelineCard } from '../organisms/NbosPipelineCard';
import { NbosAgGrid } from '../molecules/NbosAgGrid';

export const NbosPipelineGrid = ({
  opportunitySummary,
  opportunitiesDetail,
}) => (
  <div className="">
    <NbosPipelineCard opportunitySummary={opportunitySummary} />
    <NbosAgGrid opportunitiesDetail={opportunitiesDetail} />
  </div>
);
