import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor() { }

  openLink(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }
  copy() {
    navigator.clipboard.writeText(`joan.mk7@gmail.com`);
  }
}
