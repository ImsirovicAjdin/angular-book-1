import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  border = 10;

  randomColor() {
    let hex = '#'+Math.random().toString(16).substr(-6);
    alert(`This is a random color: ${hex}`);
  }
}
