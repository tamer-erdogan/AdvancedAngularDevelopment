import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-cascade',
  templateUrl: './reactive-cascade.component.html',
  styleUrls: ['./reactive-cascade.component.scss'],
})
export class ReactiveCascadeComponent implements OnInit {
  public profileForm: FormGroup;

  readonly selectValues = [
    { type: 'Framework', values: ['Angular', 'React', 'Vue.js'] },
    { type: 'Cloud', values: ['Azure', 'Google Cloud', 'Sorry - No Amazon'] },
  ];

  selects: string[];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstNameInput: [''],
      lastNameInput: [''],
      optionGroups: this.fb.array([
        this.fb.group({
          typename: [''],
          skill: [''],
        }),
        this.fb.group({
          typename: [''],
          skill: [''],
        }),
      ]),
    });

    this.selects = [];
  }

  ngOnInit(): void {
    // this.getOptionGroupControls();
  }

  public getOptionGroupControls(): AbstractControl[] {
    return (this.profileForm.controls['optionGroups'] as FormArray).controls;
  }

  public saveProfileForm() {
    console.log(this.profileForm.value);
  }

  getValuesForType(type) {
    const select = this.selectValues.find((_) => _.type == type);
    return select ? select.values : select;
  }
}
