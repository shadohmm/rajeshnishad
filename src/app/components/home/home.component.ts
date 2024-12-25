import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // https://www.behance.net/gallery/144641409/Personal-Portfolio-Web-Design?tracking_source=search_projects|developer+portfolio&l=2

  downloadResume(event: Event) {
    event.preventDefault(); 
    const link = document.createElement('a');
    link.href = 'assets/pdf/rajesh_nishad.pdf'; // Path to your PDF file
    link.download = 'Nishad Rajesh'; // File name to save as
    link.click();
  }

}
