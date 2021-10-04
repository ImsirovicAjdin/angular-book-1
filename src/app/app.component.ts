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
  border: any;
  color = '';

  constructor(private data: SomedataService) {
    console.log(this.randomWidthAndCustomColor());
  }

  randomWidthAndCustomColor() {
    this.data.someMethodFromService().subscribe(res => {
      this.border = res;
    });
    this.color = '#'+Math.random().toString(16).substr(-6);
  }
}
