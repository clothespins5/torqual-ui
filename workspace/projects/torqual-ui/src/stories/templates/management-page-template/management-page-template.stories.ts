import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate} from "@storybook/angular";
import {ManagementPageTemplateComponent} from "./management-page-template.component";

const meta: Meta<ManagementPageTemplateComponent> = {
  title: 'Templates/ManagementPageTemplate',
  component: ManagementPageTemplateComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ManagementPageTemplateComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <div style="height: 300px">
        <lib-management-page-template ${argsToTemplate(args)}>
            <div left>ng-content select="[left]"</div>
            <div right>ng-content select="[right]"</div>
        </lib-management-page-template>
      </div>
      `,
  }),
  args: {
    input: {
      title: 'Example Title'
    }
  }
};
