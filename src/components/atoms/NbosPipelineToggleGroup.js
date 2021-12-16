import React from 'react';
import './togglestyles.css';
import SwitchSelector from 'react-switch-selector';

const options = [
  {
    label: 'All',
    value: 'all',
    selectedBackgroundColor: '#0166CC',
    innerHeight: 50,
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Credit',
    value: 'credit',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Deposit',
    value: 'deposit',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Capital Markets',
    value: 'capital',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Treasury Management',
    value: 'treasury',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
  {
    label: 'Other',
    value: 'other',
    selectedBackgroundColor: '#0166CC',
    selectedFontColor: '#ffffff',
  },
];

const onChange = newValue => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar');

export const NbosPipelineToggleGroup = () => {
  return (
    <div className="toggle">
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={'#ffffff'}
        fontColor={'#0166CC'}
        wrapperBorderRadius={12}
        optionBorderRadius={7}
        border="1px solid rgba(1,102,204,100)"
      />
    </div>
  );
};
