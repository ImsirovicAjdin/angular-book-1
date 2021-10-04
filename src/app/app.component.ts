import { Component, OnInit } from '@angular/core';
import { SomedataService } from './somedata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yearTitle = 'The year';
  title = 'my-app';
  border = 0;
  color = '';

  constructor(private data: SomedataService) {
    console.log(this.randomWidthAndCustomColor());
  }

  randomWidthAndCustomColor() {
    this.border = this.data.someMethodFromService();
    this.color = '#'+Math.random().toString(16).substr(-6);
  }
}
