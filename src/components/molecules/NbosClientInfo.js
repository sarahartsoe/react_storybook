import React from 'react';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosClientInfoAvatar } from '../atoms/NbosClientInfoAvatar';
import { NbosSummarySubtext } from '../atoms/NbosSummarySubtext';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export const NbosClientInfo = ({ userInfo }) => (
  <NbosSurface>
    <div className="tw-grid tw-grid-rows-5 tw-justify-items-center tw-content-center tw-content-around">
      <div className="tw-text-center tw-pt-9">
        <NbosClientInfoAvatar />
      </div>
      <div className="tw-justify-items-center tw-pt-8">
        <NbosSummarySubtext subTextLabel="Name" />
        <NbosClientInfoMainText mainTextLabel={userInfo.userName} />
      </div>
      <div className="tw-text-center tw-pt-8">
        <NbosSummarySubtext subTextLabel="Hire Date" />
        <NbosClientInfoMainText mainTextLabel="10/10/2017" />
      </div>
      <div className="tw-text-center tw-pt-8">
        <NbosSummarySubtext subTextLabel="Role" />
        <NbosClientInfoMainText mainTextLabel="Commercial RM II" />
      </div>
      <div className="tw-text-center tw-pt-8 tw-pb-4">
        <NbosSummarySubtext subTextLabel="Team Lead" />
        <NbosClientInfoMainText mainTextLabel="John Smith" />
      </div>
    </div>
  </NbosSurface>
);
