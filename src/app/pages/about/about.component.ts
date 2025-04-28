import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule
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
        query('.team-member, .value-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  teamMembers = [
    {
      name: 'Jeffrey Longo',
      position: 'Founder & Lead Engineer',
      bio: 'Full-stack software engineer with over 10 years of experience building scalable applications. Specializes in AI integration and process automation.',
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4'
    },
    {
      name: 'Alex Johnson',
      position: 'AI Solutions Architect',
      bio: 'Expert in machine learning and artificial intelligence with a background in data science. Helps businesses leverage AI for improved operations.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df'
    },
    {
      name: 'Marie Chen',
      position: 'Business Automation Specialist',
      bio: 'Focuses on streamlining business processes through custom automation solutions. Background in both technology and business administration.',
      image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e'
    }
  ];
  
  coreValues = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions for our clients.',
      icon: 'lightbulb'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all client and business relationships.',
      icon: 'shield'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in every project we undertake.',
      icon: 'award'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure solutions that truly meet their needs.',
      icon: 'users'
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
