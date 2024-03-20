import type {Meta, StoryObj} from '@storybook/angular';
import {CardComponent} from "./card.component";

const meta: Meta<CardComponent> = {
  title: 'Atoms/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <lib-card>#1 name</lib-card>
    `,
  }),
};
