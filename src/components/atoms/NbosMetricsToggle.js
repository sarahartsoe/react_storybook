import React from 'react';
import './togglestyles.css';
import SwitchSelector from 'react-switch-selector';

export default function NbosMetricsToggle({ changeHandler }) {
  const options = [
    {
      label: 'Outcome Metrics',
      value: 'outcome',
      selectedBackgroundColor: '#ffffff',
      innerHeight: 50,
      selectedFontColor: '#0166CC',
    },
    {
      label: 'Behavior Metrics',
      value: 'behavior',
      selectedBackgroundColor: '#ffffff',
      selectedFontColor: '#0166CC',
    },
  ];

  const handleToggleSwitch = newValue => {
    console.log(newValue);
    changeHandler(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === 'outcome',
  );

  return (
    <div className="toggle">
      <SwitchSelector
        onChange={handleToggleSwitch}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={'#0166CC'}
        fontColor={'#f5f6fa'}
        wrapperBorderRadius={3}
        optionBorderRadius={2}
      />
    </div>
  );
}
