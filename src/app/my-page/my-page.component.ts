import { Component } from '@angular/core';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})

export class MyPageComponent {
  infoProfileEnglish = `I am keen computer science
  student which allows me to explore
  my creative side. I am eager to
  develop further and I love to learn. I
  really enjoy detailed work and
  ability to be critical in my
  observations. I am naturally patient
  and this is required as solutions are
  not always obvious. At the end the
  project has to look good and must
  be intuitive and user friendly which
  always makes me feel I have
  achieved my goal.
  `
  cv = './assets/cv.pdf';

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(pdfUrl: string, pdfName: string): void {
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  openCV(pdfUrl: string): void {
    window.open(pdfUrl, '_blank', 'noopener noreferrer');
  }
}
