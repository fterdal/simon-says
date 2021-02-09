import { Component, OnInit } from '@angular/core';
import { SequenceService } from './services/sequence.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// TODO: How to assign a css property to the host node???
export class AppComponent implements OnInit {
  colors = ['blue', 'yellow', 'green', 'red'];
  currentColor = 'white';
  // TODO: What happens when the child component changes it's color?
  // Does the App component register a change? Or is it singlely bound?

  constructor(private sequence: SequenceService) {
  }
  
  ngOnInit() {
    this.sequence
      .getSequence('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        console.log(response);
      });

  }

  log(color: string) {
    console.log('App component:', color);
    this.currentColor = color;
  }
}
