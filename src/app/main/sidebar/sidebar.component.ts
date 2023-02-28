import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  openLink(pdfUrl: string) {
    window.open(pdfUrl, '_blank', 'noopener noreferrer');
  }
  copy() {
    navigator.clipboard.writeText(`joan.mk7@gmail.com`);
  }
}
