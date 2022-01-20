import React from 'react';
import './underline.css';

export const NbosPipelineLabel = ({ show5 }) => {
  return (
    <p className="tw-font-bold tw-text-sm tw-mr-auto tw-flex tw-text-center">
      <u>{show5 ? 'Top 5 Opportunities' : 'All Opportunities'}</u>
    </p>
  );
};
