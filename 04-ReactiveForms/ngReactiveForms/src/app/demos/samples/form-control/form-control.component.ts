import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor() {}

  postal = new FormControl('3544');
  city = new FormControl('Idolsberg', [Validators.maxLength(15)]);

  ngOnInit() {}
}
