import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      id: '01',
      title: 'CYBER BLOCKZ',
      description: `An Online Course & Certificate Management Platform.
      It is a full-stack web application build using Node.js, Angular, Express, and MySQL for a YouTube content creator. 
      The platform enables course management, allowing the admin to add and remove courses, conduct live classes for registered learners,
       and issue verifiable completion certificates upon successful course completion. The website also features a certificate 
       verification system to ensure authenticity.`,
      techStack: ['Node.js', 'Angular', 'MySQL', 'Expres.js', 'TypeScript', 'JavaScript'],
      link: 'https://b3.cyberblockz.in/home',
      image: '/rajeshnishad/assets/images/cyberblockz.png',
      altText: 'Cyber Blockz home page',
    },
    {
      id: '02',
      title: 'TOPSLICE',
      description: `A scalable MEAN stack application for ordering pizzas. Built a responsive frontend with Angular 
      and implemented robust backend logic with Node.js and PostgreSQL. Created RESTful APIs for seamless communication 
      and optimized database queries to enhance performance.`,
      techStack: ['Node.js', 'Angular', 'MongoDB', 'Expres.js', 'TypeScript', 'JavaScript'],
      link: 'https://github.com/shadohmm/TopSlice',
      image: '/rajeshnishad/assets/images/Topslice.png',
      altText: 'TopSlice Home Page',
    },
    {
      id: '02',
      title: 'SMART STREET LIGHT SYSTEM',
      description: `The Smart Street Light Management System is an innovative IoT-based solution designed to improve energy efficiency and enhance road safety. By utilizing RFID (Radio Frequency Identification) technology along with Arduino programming, the system detects vehicles on the street and automatically activates streetlights only when needed.
       This automation minimizes energy consumption while ensuring sufficient illumination for vehicles and pedestrians.`,
      techStack: [
        'RFID',
        'IoT',
        'MongoDB',
        'Arduino',
        'Arduino Programming',
        'Object Detection',
      ],
      link: 'https://github.com/shadohmm/Smart-Street-Light-Management-System',
      image: '/rajeshnishad/assets/images/SSLMS.png',
      altText: 'Smart Street Light System',
    },
  ];

}
