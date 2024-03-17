import type {Meta, StoryObj} from '@storybook/angular';
import {argsToTemplate} from "@storybook/angular";
import {SideNavComponent} from "./side-nav.component";

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
      {id: '1', icon: 'home',},
      {id: '2', icon: 'gavel',}
    ],
  },
};
