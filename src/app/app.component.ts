import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yearTitle = 'The year';
  title = 'my-app';
  //border = this.randomWidth();
  border = 0;
  color = '';

  constructor() {
    console.log(this.randomWidthAndCustomColor());
  }

  randomWidthAndCustomColor() {
    this.border = Math.round(Math.random()*100);
    this.color = '#'+Math.random().toString(16).substr(-6);
  }
  // randomColor() {
  //   let hex = '#'+Math.random().toString(16).substr(-6);
  //   alert(`This is a random color: ${hex}`);
  // }

  // randomWidth() {
  //   return Math.round(Math.random()*100);
  // }
}
