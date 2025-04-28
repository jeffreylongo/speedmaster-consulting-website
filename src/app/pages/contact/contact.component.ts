import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { EmailService } from '../../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from '../../shared/models/contact.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule
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
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  
  // For map display options
  mapOptions = {
    center: { lat: 40.7128, lng: -74.0060 }, // New York coordinates by default
    zoom: 12
  };
  
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10,15}$')]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }
  
  ngOnInit(): void {
  }
  
  // Getter for easy access to form fields
  get f() { return this.contactForm.controls; }
  
  // Method to scroll to contact form section
  scrollToContact() {
    document.querySelector('.contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  onSubmit() {
    this.submitted = true;
    
    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    const contactData: Contact = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      company: this.contactForm.value.company,
      message: this.contactForm.value.message
    };
    
    this.emailService.sendContactEmail(contactData)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.snackBar.open('Message sent successfully! We\'ll get back to you soon.', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.contactForm.reset();
          this.submitted = false;
          
          // Set default value for agreeToTerms after reset
          this.contactForm.patchValue({
            agreeToTerms: false
          });
        },
        error: (error) => {
          this.isSubmitting = false;
          this.snackBar.open('Error sending message. Please try again later.', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          console.error('Error sending contact email:', error);
        }
      });
  }
}
