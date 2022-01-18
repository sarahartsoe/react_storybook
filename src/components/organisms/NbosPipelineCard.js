import React from 'react';
import { NbosHighchartPipeline } from '../molecules/NbosHighchartPipeline';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosPipelineLabel } from '../atoms/NbosPipelineLabel';
import { NbosPipelineToggleGroup } from '../atoms/NbosPipelineToggleGroup';

export const NbosPipelineCard = ({ opportunitySummary }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-rows-5 tw-pt-2">
      <div className="tw-pl-10 tw-pr-10">
        <NbosPipelineToggleGroup />
      </div>
      <div className="tw-row-span-4 tw-justify-center">
        <NbosHighchartPipeline opportunitySummary={opportunitySummary} />
      </div>
      <div className="tw-pl-7">
        <NbosPipelineLabel />
      </div>
    </div>
  </NbosSurface>
);
