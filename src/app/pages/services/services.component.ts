import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
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
    ]),
    trigger('staggerIn', [
      transition(':enter', [
        query('.service-card, .process-step', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Business Process Automation',
      description: 'Streamline your operations by automating repetitive tasks and workflows. Our custom solutions help reduce manual work, minimize errors, and improve efficiency.',
      icon: 'settings',
      features: [
        'Workflow automation',
        'Document processing',
        'Data entry automation',
        'Task scheduling',
        'Custom integrations'
      ],
      image: 'https://images.unsplash.com/photo-1742241391668-e6fbeb9b018f'
    },
    {
      title: 'AI Integration',
      description: 'Leverage the power of artificial intelligence to gain insights, make better decisions, and enhance customer experiences. We implement AI solutions tailored to your specific business needs.',
      icon: 'cpu',
      features: [
        'Predictive analytics',
        'Machine learning models',
        'Natural language processing',
        'Computer vision integration',
        'AI-powered decision support'
      ],
      image: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to address your unique business challenges. We build scalable, user-friendly applications that help you achieve your goals.',
      icon: 'code',
      features: [
        'Web applications',
        'Mobile applications',
        'Database design',
        'API development',
        'Legacy system modernization'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to help your business navigate digital transformation. We assess your current processes, identify opportunities for improvement, and develop a roadmap for implementation.',
      icon: 'trending-up',
      features: [
        'Technology assessment',
        'Digital strategy development',
        'Process optimization',
        'Change management',
        'ROI analysis'
      ],
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4'
    }
  ];
  
  processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We start by understanding your business, challenges, and goals through in-depth discussions and analysis.'
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Based on our findings, we develop a strategic plan that outlines the proposed solutions, timeline, and expected outcomes.'
    },
    {
      number: '03',
      title: 'Implement',
      description: 'Our team of experts builds and implements the solutions, ensuring they integrate seamlessly with your existing systems.'
    },
    {
      number: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure your solutions continue to perform optimally as your business evolves.'
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
