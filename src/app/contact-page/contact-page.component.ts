import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})


export class ContactPageComponent implements OnInit, OnDestroy {
  email = 'joan.mk7@gmail.com';
  phoneNumber = '509002427';
  city = 'Warsaw';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = 'linear-gradient(90deg, rgba(151,163,223,1) 31%, rgba(136,225,145,1) 68%)';
  }
  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background-image');
  }

}
