import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate, moduleMetadata} from "@storybook/angular";
import {ResourcePageTemplateComponent} from "./resource-page-template.component";
import {ResourceHeaderComponent} from "../../organisms/resource-header/resource-header.component";
import * as ResourceHeader  from "../../organisms/resource-header/resource-header.stories"

const meta: Meta<ResourcePageTemplateComponent> = {
  title: 'Templates/ResourcePageTemplate',
  component: ResourcePageTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ResourceHeaderComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<ResourcePageTemplateComponent>;

export const Example: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 300px">
        <lib-resource-page-template ${argsToTemplate(args)}>
          <div body style="height: 100px">ng-content select="[body]</div>
        </lib-resource-page-template>
      </div>
      `,
  }),
  args: {
    resourceHeader: ResourceHeader.Example.args?.input,
  },
};
