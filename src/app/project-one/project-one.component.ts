import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent {
  colOne = `Angular 15 + TypeScript \n CSS + Bootstrap`;
  colTwo = 'JSON Server \n Service for downloading and editing data';
  colThree = 'RxJS \n Obresvable';
  desc = `When launched, the application loads files and devices and displays the current status. 
  Clicking a file tile in the list of all files selects it. In the same multiple files may be 
  selected at a time. The file could not be deselected. File selection adds it to devices that 
  don't have it yet and saves the changes to the backend. A new file added to the device has a 
  download progress of 0. The device is downloading the file at speed specified for device. 
  A given device can only download 1 file at a time. Given file can be downloaded by only 1 
  device at a time. Completing the file download saves changes to the backend.`;

  constructor() { }

  openLink() {
    window.open('https://github.com/joannamaria27//fileTransferPanel', '_blank', 'noopener noreferrer');
  }
}
