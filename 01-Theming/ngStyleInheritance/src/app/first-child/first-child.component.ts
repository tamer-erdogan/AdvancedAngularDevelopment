import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `
    <div class="divclass">First Child</div>
    <app-nested-child></app-nested-child>
  `,
  styles: [
    `
      .divclass {
        border: blue 2px solid;
      }
    `,
  ],
})
export class FirstChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
