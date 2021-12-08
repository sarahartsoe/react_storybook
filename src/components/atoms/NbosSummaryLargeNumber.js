import React from 'react';
import PropTypes from 'prop-types';

export const NbosSummaryLargeNumber = ({ ...props }) => {
  return (
    <p className="tw-font-semibold tw-text-3xl tw-font-sans tw-mr-auto tw-pl-2">
      {props.largeNumber}
    </p>
  );
};

NbosSummaryLargeNumber.propTypes = {
  largeNumber: PropTypes.string.isRequired,
};
