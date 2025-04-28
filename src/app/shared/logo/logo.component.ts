import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [
    trigger('pulse', [
      transition('* => *', [
        style({ transform: 'scale(1)' }),
        animate('1s ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('1s ease-in-out', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class LogoComponent {
  @Input() isFooter = false;
}
