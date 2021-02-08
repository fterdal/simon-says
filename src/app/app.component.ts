import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// TODO: How to assign a css property to the host node???
export class AppComponent {
  colors = ['blue', 'yellow', 'green', 'red'];
  currentColor = 'white';
  // TODO: What happens when the child component changes it's color?
  // Does the App component register a change? Or is it singlely bound?

  constructor(http: HttpClient) {
    // console.log(http.get);
    http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        console.log(response);
      });
  }

  log(color: string) {
    console.log('App component:', color);
    this.currentColor = color;
  }
}
