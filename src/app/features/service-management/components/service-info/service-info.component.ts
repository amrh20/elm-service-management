import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';
@Component({
  selector: 'app-service-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.scss',
  animations: [
    trigger('staggerEnter', [
      transition(':enter', [
        query('.service-info__item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class ServiceInfoComponent {
  @Input() title: string = '';
  @Input() items: { label: string; value: string }[] = [];
  @Input() cols: number = 1;
}
