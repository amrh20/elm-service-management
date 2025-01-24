import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.scss'
})
export class ServiceInfoComponent {
  @Input() title: string = '';
  @Input() items: { label: string; value: string }[] = [];
  @Input() cols: number = 1;
}
