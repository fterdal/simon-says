import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss'],
})
// TODO: Typescript is saying:
// "Property 'color' has no initializer and is not definitely assigned in the constructor"
// SO suggests Adding "strictPropertyInitialization": true to your tsconfig.json, but maybe that's bad?
// https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
export class ColorButtonComponent {
  @Input() color: string;

  constructor() {
    console.log(this);
  }
}
