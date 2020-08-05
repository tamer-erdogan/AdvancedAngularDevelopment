import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="heading">
      <h2>Angular Style Inheritance & Encapsulation</h2>
    </div>
    <div class="divclass">
      <div>App Component</div>
      <app-first-child></app-first-child>
      <app-second-child></app-second-child>
    </div>`,
  styles: [
    `
      .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem;
      }

      .divclass {
        padding: 1rem;
        margin: 1rem;
        border: 2px solid red;
      }

      div {
        margin: 1.5rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ngStyleInheritance';
}
