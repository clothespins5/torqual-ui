import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../../molecules/top-bar/top-bar.component";
import {SideNavComponent} from "../../organisms/side-nav/side-nav.component";
import {SidenavItem} from "../../../models/sidenav";

@Component({
  selector: 'lib-top-page-template',
  standalone: true,
  imports: [CommonModule, TopBarComponent, SideNavComponent],
  templateUrl: './top-page-template.component.html',
  styleUrls: ['./top-page-template.component.css']
})
export class TopPageTemplateComponent {
  @Input() leftNavItems: SidenavItem[] = []
  @Input() rightNavItems: SidenavItem[] = []
  @Output() leftNavItemClick = new EventEmitter<SidenavItem>()
  @Output() rightNavItemClick = new EventEmitter<SidenavItem>()
}
