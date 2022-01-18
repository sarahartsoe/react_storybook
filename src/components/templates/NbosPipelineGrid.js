import React, { useState } from 'react';
import { NbosPipelineCard } from '../organisms/NbosPipelineCard';
import { NbosPipelineGridCard } from '../organisms/NbosPipelineGridCard';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export default function NbosPipelineGrid({
  opportunitySummary,
  opportunitiesDetail,
}) {
  const [show5, showAll] = useState(true);
  const onClick = () => showAll(!show5);
  const arrayForSort = [...opportunitiesDetail.opportunities];
  const sortedArray = arrayForSort.sort(function (a, b) {
    return b.revenue - a.revenue;
  });
  console.log(show5);
  const newArrayTop5 = sortedArray.slice(0, 5);
  console.log(newArrayTop5);
  return (
    <div className="">
      <NbosSurface>
        <div className="tw-p-3 tw-border-b-2 tw-border-b-gray-700">
          <NbosClientInfoMainText mainTextLabel="Pipeline" />
        </div>
      </NbosSurface>
      <NbosPipelineCard opportunitySummary={opportunitySummary} />
      <NbosPipelineGridCard
        opportunitiesDetail={
          show5 ? newArrayTop5 : opportunitiesDetail.opportunities
        }
        top5={newArrayTop5}
        show5={show5}
      />
      <NbosSurface>
        <button onClick={onClick} className="tw-text-blue-600 tw-pb-2">
          {show5 ? 'View Full Pipeline' : 'View Top 5'}
        </button>
      </NbosSurface>
    </div>
  );
}
