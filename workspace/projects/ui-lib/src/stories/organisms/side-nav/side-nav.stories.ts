import type {Meta, StoryObj} from '@storybook/angular';
import {SideNavComponent} from "./side-nav.component";
import {SidenavItemId, SidenavItemIcon} from "../../../models/sidenav";
import {argsToTemplate} from "@storybook/angular";

const meta: Meta<SideNavComponent> = {
  title: 'Organisms/SideNav',
  component: SideNavComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SideNavComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <lib-side-nav ${argsToTemplate(args)}></lib-side-nav>
      `,
  }),
  args: {
    sidenavItems: [
      {id: SidenavItemId('1'), icon: SidenavItemIcon('home'),},
      {id: SidenavItemId('2'), icon: SidenavItemIcon('gavel'),}
    ],
  },
};
