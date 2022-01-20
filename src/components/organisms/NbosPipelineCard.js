import React from 'react';
import { NbosHighchartPipeline } from '../molecules/NbosHighchartPipeline';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosPipelineLabel } from '../atoms/NbosPipelineLabel';
import { NbosPipelineToggleGroup } from '../atoms/NbosPipelineToggleGroup';

export const NbosPipelineCard = ({ opportunitySummary, show5 }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-rows-5 tw-pt-2">
      <div className="tw-pl-10 tw-pr-10">
        <NbosPipelineToggleGroup />
      </div>
      <div className="tw-row-span-4 tw-justify-center">
        <NbosHighchartPipeline opportunitySummary={opportunitySummary} />
      </div>
      <div className="tw-pl-7">
        <NbosPipelineLabel show5={show5} />
      </div>
    </div>
  </NbosSurface>
);
