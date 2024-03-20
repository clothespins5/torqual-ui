import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../../atoms/card/card.component";

export type ResourceListItem = {
  id: string,
  name: string,
}
export type ResourceListPageTemplateInput = {
  items: ResourceListItem[]
}

@Component({
  selector: 'lib-resource-list-page-template',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './resource-list-page-template.component.html',
  styleUrls: ['./resource-list-page-template.component.css']
})
export class ResourceListPageTemplateComponent {
  @Input({required: true}) input!: ResourceListPageTemplateInput;
  @Output() itemClick = new EventEmitter<ResourceListItem>();
}
