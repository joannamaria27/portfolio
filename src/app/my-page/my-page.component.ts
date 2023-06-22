import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})

export class MyPageComponent implements OnInit, OnDestroy {

  infoProfileEnglish = `I am a graduate of Bialystok University of Technology with a degree in Computer Science. 
  I have knowledge and skills in web technologies,
  sach as Angular and TypeScript, as well as knowledge of SQL and C# programming. 
  Although I have limited professional experience, 
  I am   highly motivated to gain new skills and experience in the IT industry. 
  I am creative and always seek new solutions, and my attention to detail helps me deliver high-quality work. 
  I am flexible and able to work effectively in a team with a positive attitude.
  `
  cv = './assets/cv.pdf';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = 'linear-gradient(90deg, rgba(136,225,145,1) 31%, rgba(151,163,223,1) 68%)';
  }
  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background-image');
  }

  downloadCV(pdfUrl: string, pdfName: string): void {
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  openCV(pdfUrl: string): void {
    window.open(pdfUrl, '_blank', 'noopener noreferrer');
  }
}
