import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  border = this.randomWidth();

  constructor() {
    console.log(this.randomWidth());
  }

  randomColor() {
    let hex = '#'+Math.random().toString(16).substr(-6);
    alert(`This is a random color: ${hex}`);
  }

  randomWidth() {
    return Math.round(Math.random()*100);
  }
}
