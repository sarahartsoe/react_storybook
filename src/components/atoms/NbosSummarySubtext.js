import React from 'react';
import PropTypes from 'prop-types';

export const NbosSummarySubtext = ({ ...props }) => {
  return (
    <p className="tw-text-gray-500 tw-text-sm tw-mr-auto tw-flex tw-pl-2">
      {props.subTextLabel}
    </p>
  );
};

NbosSummarySubtext.propTypes = {
  subTextLabel: PropTypes.string.isRequired,
};
