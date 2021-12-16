import React from 'react';
import { NbosHighchartPipeline } from '../molecules/NbosHighchartPipeline';
import { NbosPipelineHeader } from '../molecules/NbosPipelineHeader';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosPipelineLabel } from '../atoms/NbosPipelineLabel';
import { NbosPipelineToggleGroup } from '../atoms/NbosPipelineToggleGroup';

export const NbosPipelineCard = () => (
  <NbosSurface>
    <div className="tw-grid tw-grid-rows-5">
      <div className="tw-pl-4 tw-pr-4 tw-pt-2">
        <NbosPipelineHeader />
      </div>
      <div className="tw-pl-10 tw-pr-10">
        <NbosPipelineToggleGroup />
      </div>
      <div className="tw-row-span-3 tw-justify-center">
        <NbosHighchartPipeline />
      </div>
      <div className="tw-pl-7">
        <NbosPipelineLabel />
      </div>
    </div>
  </NbosSurface>
);
