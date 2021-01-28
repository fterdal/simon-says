import { Component, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss'],
})
// TODO: Typescript is saying:
// "Property 'color' has no initializer and is not definitely assigned in the constructor"
// SO suggests Adding "strictPropertyInitialization": true to your tsconfig.json, but maybe that's bad?
// https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc

// Okay, this article actually has some helpful references:
// https://ultimatecourses.com/blog/passing-data-angular-2-components-input
export class ColorButtonComponent {
  @Input() color: string;
  @Output() selectColor = new EventEmitter();
  
  changeColor() {
    console.log("color change", this.color);
    this.selectColor.emit(this.color);
  }
}
