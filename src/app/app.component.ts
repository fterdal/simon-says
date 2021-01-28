import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// TODO: How to assign a css property to the host node???
export class AppComponent {
  colors = ['blue', 'yellow', 'green', 'red'];
  currentColor = 'white'
  // TODO: What happens when the child component changes it's color?
  // Does the App component register a change? Or is it singlely bound?

  log(color: string) {
    console.log('App component:', color)
    this.currentColor = color
  }
}
