import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate, moduleMetadata} from "@storybook/angular";
import {TopPageTemplateComponent} from "./top-page-template.component";
import {SideNavComponent} from "../../organisms/side-nav/side-nav.component";
import * as SideNavi from "../../organisms/side-nav/side-nav.stories";
import {SidenavItemIcon, SidenavItemId} from "../../../models/sidenav";

const meta: Meta<TopPageTemplateComponent> = {
  title: 'Templates/TopPageTemplate',
  component: TopPageTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SideNavComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<TopPageTemplateComponent>;

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <div style="height: 300px">
        <lib-top-page-template ${argsToTemplate(args)}>
          <div center>
            <div>ng-content select="[center]"</div>
          </div>
        </lib-top-page-template>
      </div>
      `,
  }),
  args: {
    leftNavItems: SideNavi.Example.args?.sidenavItems,
    rightNavItems: [
      {id: SidenavItemId('1'), icon: SidenavItemIcon('settings'),},
      {id: SidenavItemId('2'), icon: SidenavItemIcon('star'),}
    ],
  },
};
