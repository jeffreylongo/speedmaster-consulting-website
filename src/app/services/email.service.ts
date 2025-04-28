import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // For a production app, we would use a real email service API
  // For now, we'll simulate the email service
  private readonly emailEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';
  
  constructor(private http: HttpClient) { }

  /**
   * Sends an email with the contact form data
   * @param contact The contact information from the form
   * @returns An observable with the API response
   */
  sendContactEmail(contact: Contact): Observable<any> {
    // In a real implementation, we would use an email service like EmailJS, SendGrid, etc.
    // Here's an example using a simulated API call
    
    const emailData = {
      service_id: 'service_id', // Replace with your email service ID
      template_id: 'template_id', // Replace with your email template ID
      user_id: 'user_id', // Replace with your user ID
      template_params: {
        from_name: contact.name,
        from_email: contact.email,
        from_phone: contact.phone || 'Not provided',
        from_company: contact.company || 'Not provided',
        message: contact.message,
        to_email: 'speedmasterconsulting@gmail.com'
      }
    };

    // For demonstration, we're simulating a successful response
    // In a real application, uncomment this code and use an actual email service API
    // return this.http.post(this.emailEndpoint, emailData)
    //   .pipe(
    //     catchError(error => {
    //       console.error('Error sending email:', error);
    //       return throwError(() => new Error('Failed to send email. Please try again later.'));
    //     })
    //   );

    // For demo purposes, simulate successful email sending
    return of({ success: true, message: 'Email sent successfully' }).pipe(
      // Add a small delay to simulate network request
      // delay(1000)
    );
  }
}
