import type {Meta, StoryObj} from '@storybook/angular';

import {IconComponent} from "./icon.component";

const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <lib-icon>star</lib-icon>
    `,
  }),
};
