import React from 'react';
import PropTypes from 'prop-types';

export const NbosSummaryMedNumber = ({ ...props }) => {
  return (
    <p className="tw-font-semibold tw-text-xl tw-font-sans tw-mr-auto tw-pl-2">
      {props.medNumber}
    </p>
  );
};

NbosSummaryMedNumber.propTypes = {
  medNumber: PropTypes.string.isRequired,
};
