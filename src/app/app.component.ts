import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// TODO: How to assign a css property to the host node???
export class AppComponent {
  colors = ['blue', 'yellow', 'green', 'red']
}
