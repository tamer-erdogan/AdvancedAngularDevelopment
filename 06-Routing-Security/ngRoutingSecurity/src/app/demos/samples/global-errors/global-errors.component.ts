import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-errors',
  templateUrl: './global-errors.component.html',
  styleUrls: ['./global-errors.component.scss'],
})
export class GlobalErrorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  throwErr() {
    try {
      const a = 10 / 0;
      console.log(a);
    } catch (error) {
      throw error;
    }
  }
}
