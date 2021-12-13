import React from 'react';
import PropTypes from 'prop-types';

export const NbosSummarySubtextLeft = ({ ...props }) => {
  return (
    <p className="tw-text-gray-500 tw-text-left tw-text-sm tw-mr-auto tw-pl-2">
      {props.subTextLabel}
    </p>
  );
};

NbosSummarySubtextLeft.propTypes = {
  subTextLabel: PropTypes.string.isRequired,
};
