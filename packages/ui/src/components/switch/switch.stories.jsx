import React from 'react';

import Switch from './index';

export default {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Switch.args = {};

