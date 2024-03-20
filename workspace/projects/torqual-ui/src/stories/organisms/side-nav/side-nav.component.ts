import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavItem} from "../../../models/sidenav";
import {IconComponent} from "../../atoms/icon/icon.component";
import {IconButtonComponent} from "../../atoms/icon-button/icon-button.component";

@Component({
  selector: 'lib-side-nav',
  standalone: true,
  imports: [CommonModule, IconComponent, IconButtonComponent],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sidenavItems: SidenavItem[] = []
  @Output() sidenavItemClick = new EventEmitter<SidenavItem>()
}
