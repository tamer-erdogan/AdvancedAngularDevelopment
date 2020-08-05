import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  template: ` <div class="divclass">Second Child</div> `,
  styles: [``],
})
export class SecondChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
