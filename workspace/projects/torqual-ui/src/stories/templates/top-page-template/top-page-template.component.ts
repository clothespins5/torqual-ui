import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../../molecules/top-bar/top-bar.component";
import {SideNavComponent} from "../../organisms/side-nav/side-nav.component";
import {SidenavItem} from "../../../models/sidenav";

export type TopPageTemplateInput = {
  leftNavItems: SidenavItem[],
  rightNavItems: SidenavItem[],
}

@Component({
  selector: 'lib-top-page-template',
  standalone: true,
  imports: [CommonModule, TopBarComponent, SideNavComponent],
  templateUrl: './top-page-template.component.html',
  styleUrls: ['./top-page-template.component.css']
})
export class TopPageTemplateComponent {
  @Input({required: true}) input: TopPageTemplateInput = {
    leftNavItems: [],
    rightNavItems: [],
  };
  @Output() leftNavItemClick = new EventEmitter<SidenavItem>()
  @Output() rightNavItemClick = new EventEmitter<SidenavItem>()
}
