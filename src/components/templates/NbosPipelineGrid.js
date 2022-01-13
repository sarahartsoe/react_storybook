import React from 'react';
import { NbosPipelineCard } from '../organisms/NbosPipelineCard';
import { NbosPipelineGridCard } from '../organisms/NbosPipelineGridCard';
// import { NbosAgGrid } from '../molecules/NbosAgGrid';

export const NbosPipelineGrid = ({
  opportunitySummary,
  opportunitiesDetail,
}) => (
  <div className="">
    <NbosPipelineCard opportunitySummary={opportunitySummary} />
    <NbosPipelineGridCard opportunitiesDetail={opportunitiesDetail} />
  </div>
);
