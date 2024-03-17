import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate} from "@storybook/angular";
import {ResourceHeaderComponent} from "./resource-header.component";

const meta: Meta<ResourceHeaderComponent> = {
  title: 'Organisms/ResourceHeader',
  component: ResourceHeaderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ResourceHeaderComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <div style="height: 300px">
        <lib-resource-header ${argsToTemplate(args)}/>
      </div>
      `,
  }),
  args: {
    input: {
      number: 1,
      name: 'name',
      type: 'type'
    }
  },
};
