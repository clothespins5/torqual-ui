import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourceHeaderComponent, ResourceHeaderInput} from "../../organisms/resource-header/resource-header.component";

@Component({
  selector: 'lib-resource-page-template',
  standalone: true,
  imports: [CommonModule, ResourceHeaderComponent],
  templateUrl: './resource-page-template.component.html',
  styleUrls: ['./resource-page-template.component.css']
})
export class ResourcePageTemplateComponent {
  @Input({required: true}) input!: ResourceHeaderInput;

}
