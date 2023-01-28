import { Component } from '@angular/core';
import { PagesComponent } from './pages/pages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CafeOhLaLa';
  PagesComponent = PagesComponent
}
