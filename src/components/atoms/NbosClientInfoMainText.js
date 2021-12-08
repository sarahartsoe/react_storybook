import React from 'react';
import PropTypes from 'prop-types';

export const NbosClientInfoMainText = ({ ...props }) => {
  return (
    <p className="tw-font-semibold tw-mr-auto tw-flex tw-text-center">
      {props.mainTextLabel}
    </p>
  );
};

NbosClientInfoMainText.propTypes = {
  mainTextLabel: PropTypes.string.isRequired,
};
