/**
 * Interface representing contact form data
 */
export interface Contact {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}
