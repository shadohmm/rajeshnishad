import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  email = 'rajeshnishad1242k@gmail.com';
  userName = '';
  userEmail = '';
  userMessage = '';

  sendEmail(event: Event): void {
    event.preventDefault(); // Prevent page reload

    const subject = `Message from ${this.userName}`;
    const body = `Hi Rajesh,\n\n${this.userMessage}\n\nRegards,\n${this.userName} (${this.userEmail})`;

    // Open the user's email client
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
