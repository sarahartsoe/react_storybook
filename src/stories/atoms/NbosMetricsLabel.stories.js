import React from 'react';

import { NbosMetricsLabel } from '../../components/atoms/NbosMetricsLabel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NbosMetricsLabel',
  component: NbosMetricsLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <NbosMetricsLabel {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mainTextLabel: 'Loan Production',
};
