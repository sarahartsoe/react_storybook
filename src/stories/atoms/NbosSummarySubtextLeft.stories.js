import React from 'react';

import { NbosSummarySubtextLeft } from '../../components/atoms/NbosSummarySubtextLeft';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NbosSummarySubtextLeft',
  component: NbosSummarySubtextLeft,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <NbosSummarySubtextLeft {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  subTextLabel: 'Name',
};
