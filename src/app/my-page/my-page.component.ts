import { Component } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})

export class MyPageComponent {
  constructor() { }
  infoProfile = "Jestem studentką Informatyki i chciałabym rozwijać się w kierunku tworzenia aplikacji internetowych. Lubię poznawać nowe możliwość rozwiązywania  problemów i wykorzystywać je w  praktyce."
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
  ngOnInit(): void {
  }

  downloadCV(pdfUrl: string, pdfName: string) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  openCV(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }
}
