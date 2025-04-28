import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, LogoComponent]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];
  
  socialLinks = [
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/speedmaster-consulting', label: 'LinkedIn' },
    { icon: 'instagram', url: 'https://www.instagram.com/speedmasterconsulting/', label: 'Instagram' },
  ];
}
