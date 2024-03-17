import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-resource-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-header.component.html',
  styleUrls: ['./resource-header.component.css']
})
export class ResourceHeaderComponent {
  @Input({required: true}) input!: ResourceHeaderInput;

}

export type ResourceHeaderInput = {
  number: number,
  name: string,
  type: string,
}
