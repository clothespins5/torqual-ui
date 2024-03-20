import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate, moduleMetadata} from "@storybook/angular";
import {TopPageTemplateComponent} from "./top-page-template.component";
import {SideNavComponent} from "../../organisms/side-nav/side-nav.component";
import * as SideNavi from "../../organisms/side-nav/side-nav.stories";
import {
  ManagementPageTemplateComponent,
  ManagementPageTemplateInput
} from "../management-page-template/management-page-template.component";
import {ResourcePageTemplateComponent} from "../resource-page-template/resource-page-template.component";
import {ResourceHeaderInput} from "../../organisms/resource-header/resource-header.component";
import {
  ResourceListPageTemplateComponent,
  ResourceListPageTemplateInput
} from "../resource-list-page-template/resource-list-page-template.component";
import * as ResourceHeader from "../../organisms/resource-header/resource-header.stories"
import * as ResourceListPageTemplate from "../resource-list-page-template/resource-list-page-template.stories"
import * as ManagementPageTemplate from "../management-page-template/management-page-template.stories"

const meta: Meta<TopPageTemplateComponent> = {
  title: 'Templates/TopPageTemplate',
  component: TopPageTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        ResourceListPageTemplateComponent,
        ManagementPageTemplateComponent,
        ResourcePageTemplateComponent,
        SideNavComponent,
      ],
    }),
  ],
};

export default meta;
type TopPagePropsAndOtherPageProps = TopPageTemplateComponent & {
  resourceListPageInput: ResourceListPageTemplateInput,
  managementPageInput: ManagementPageTemplateInput,
  resourceHeaderInput: ResourceHeaderInput
}
type Story = StoryObj<TopPagePropsAndOtherPageProps>;

export const Default: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <div style="height: 400px">
        <lib-top-page-template ${argsToTemplate(args)}>
          <div center>
            <div>ng-content select="[center]"</div>
          </div>
        </lib-top-page-template>
      </div>
      `,
  }),
  args: {
    input: {
      leftNavItems: SideNavi.Example.args?.sidenavItems!,
      rightNavItems: [
        {id: '1', icon: 'star'},
        {id: '2', icon: 'settings'}
      ],
    }
  },
};


export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <div style="height: 400px">
        <lib-top-page-template ${argsToTemplate(args)}>
          <lib-management-page-template center [input]="managementPageInput">
            <lib-resource-list-page-template left [input]="resourceListPageInput"/>
            <lib-resource-page-template right [input]="resourceHeaderInput">
              <div body>detail</div>
            </lib-resource-page-template>
          </lib-management-page-template>
        </lib-top-page-template>
      </div>
      `,
  }),
  args: {
    ...Default.args,
    resourceListPageInput: ResourceListPageTemplate.Example.args?.input,
    managementPageInput: ManagementPageTemplate.Example.args?.input,
    resourceHeaderInput: ResourceHeader.Example.args?.input,
  },
};
