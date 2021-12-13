import React from 'react';
import PropTypes from 'prop-types';

export const NbosMetricsLabel = ({ ...props }) => {
  return (
    <p className="tw-font-bold tw-text-sm tw-mr-auto tw-flex tw-text-center">
      {props.mainTextLabel}
    </p>
  );
};

NbosMetricsLabel.propTypes = {
  mainTextLabel: PropTypes.string.isRequired,
};
