import React from 'react';
import { NbosAgGrid } from '../molecules/NbosAgGrid';
import { NbosSurface } from '../atoms/NbosSurface';

export const NbosPipelineGridCard = ({ opportunitiesDetail }) => (
  <NbosSurface>
    <div className="">
      <div className="">
        <NbosAgGrid opportunitiesDetail={opportunitiesDetail} />
      </div>
    </div>
  </NbosSurface>
);
