import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  engineeringServices = [
    'Custom application development',
    'Website modernization',
    'Mobile app development',
    'Backend systems and API integrations',
    'WordPress and e-commerce platform support'
  ];

  automationServices = [
    'AI-powered task automation',
    'Customer service chatbots',
    'Automated reporting',
    'Data cleanup and transformation',
    'Process optimization using machine learning'
  ];

  constructor() { }

  ngOnInit(): void {}
}
