import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  darkModeEnabled: boolean
  prefersDarkMode: MediaQueryList

  ngOnInit() {
    this.prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  }

  toggleDarkMode(event: any) {
    document.body.classList.toggle('dark', event.checked)
  }

}
