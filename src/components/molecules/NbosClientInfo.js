import React from 'react';
// import PropTypes from 'prop-types';
import { NbosSurface } from '../atoms/NbosSurface';
import { NbosClientInfoAvatar } from '../atoms/NbosClientInfoAvatar';
import { NbosSummarySubtext } from '../atoms/NbosSummarySubtext';
import { NbosClientInfoMainText } from '../atoms/NbosClientInfoMainText';

export const NbosClientInfo = () => (
  <NbosSurface>
    <div className="tw-grid tw-grid-rows-5 tw-text-center tw-justify-items-center p-8">
      <div className="tw-text-center">
        <NbosClientInfoAvatar />
      </div>
      <div className="tw-justify-items-center">
        <NbosSummarySubtext subTextLabel="Name" />
        <NbosClientInfoMainText mainTextLabel="Patrick Barnes" />
      </div>
      <div className="tw-text-center">
        <NbosSummarySubtext subTextLabel="Hire Date" />
        <NbosClientInfoMainText mainTextLabel="10/10/2017" />
      </div>
      <div className="tw-text-center">
        <NbosSummarySubtext subTextLabel="Role" />
        <NbosClientInfoMainText mainTextLabel="Commercial RM II" />
      </div>
      <div className="tw-text-center">
        <NbosSummarySubtext subTextLabel="Team Lead" />
        <NbosClientInfoMainText mainTextLabel="John Smith" />
      </div>
    </div>
  </NbosSurface>
);
