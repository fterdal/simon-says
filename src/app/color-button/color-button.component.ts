import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  // Two Way binding is wacky:
  // https://angular.io/guide/two-way-binding#how-two-way-binding-works
  @Input() color: string;
  @Output() colorChange = new EventEmitter<string>();

  changeColor() {
    console.log('color change', this.color);
    this.colorChange.emit(this.color);
  }
}
