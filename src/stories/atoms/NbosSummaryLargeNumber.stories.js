import React from 'react';

import { NbosSummaryLargeNumber } from '../../components/atoms/NbosSummaryLargeNumber';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NbosSummaryLargeNumber',
  component: NbosSummaryLargeNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <NbosSummaryLargeNumber {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  largeNumber: '56',
};
