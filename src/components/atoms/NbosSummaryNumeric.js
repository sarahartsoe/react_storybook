import React from 'react';
import PropTypes from 'prop-types';

export const NbosSummaryNumeric = ({ ...props }) => {
  return (
    <p className="tw-font-bold tw-text-2xl tw-font-sans tw-mr-auto tw-pl-2">
      {props.summaryNumeric}
    </p>
  );
};

NbosSummaryNumeric.propTypes = {
  summaryNumeric: PropTypes.string.isRequired,
};
