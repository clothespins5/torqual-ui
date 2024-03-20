import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate} from "@storybook/angular";
import {ResourceListPageTemplateComponent} from "./resource-list-page-template.component";

const meta: Meta<ResourceListPageTemplateComponent> = {
  title: 'Templates/ResourceListPageTemplate',
  component: ResourceListPageTemplateComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ResourceListPageTemplateComponent>;

export const Example: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 300px">
        <lib-resource-list-page-template ${argsToTemplate(args)}/>
      </div>
    `,
  }),
  args: {
    input: {
      items: [
        {id: '1', name: '#1 Resource Name 1',},
        {id: '2', name: '#2 Resource Name 2',},
        {id: '3', name: '#3 Resource Name 3',},
      ]
    }
  },
};
