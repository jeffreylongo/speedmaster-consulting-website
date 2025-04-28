import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerIn', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  services = [
    {
      title: 'Process Automation',
      description: 'Streamline your business operations by automating repetitive tasks and workflows.',
      icon: 'settings'
    },
    {
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to gain insights and enhance decision-making.',
      icon: 'trending-up'
    },
    {
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to your specific business needs.',
      icon: 'code'
    }
  ];
  
  testimonials = [
    {
      quote: "Speedmaster helped us automate our inventory management, saving us 15 hours per week.",
      author: "Sarah Johnson",
      position: "Operations Manager, TechRetail"
    },
    {
      quote: "Their AI solution improved our customer response time by 40% and increased satisfaction rates.",
      author: "Michael Chen",
      position: "CEO, ServiceNow"
    },
    {
      quote: "The custom CRM they built has transformed how we interact with customers. Worth every penny.",
      author: "Jessica Williams",
      position: "Sales Director, GrowthCorp"
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialize any needed functionality
  }
  
  scrollToContact() {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}
