import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ManagementPageTemplateInput = {
  title: string,
}

@Component({
  selector: 'lib-management-page-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management-page-template.component.html',
  styleUrls: ['./management-page-template.component.css']
})
export class ManagementPageTemplateComponent {
  @Input({required: true}) input!: ManagementPageTemplateInput
}
