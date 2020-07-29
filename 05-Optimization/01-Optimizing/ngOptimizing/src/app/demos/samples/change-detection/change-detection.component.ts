import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills/skills';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent implements OnInit {
  constructor() {
    this.fillSkills();
  }

  // TODO: Change number to something you can "feel" on your machine
  items = 500;
  title = 'Change Detection';
  skills: Skill[] = [];

  ngOnInit() {}

  fillSkills() {
    const arr = [];
    for (let i = 0; i < this.items; i++) {
      arr.push({
        id: i,
        topicId: 2,
        name: `skill ${i}`,
        hours: 3,
        completed: false,
      });
    }
    this.skills = arr;
  }

  changeTitle() {
    this.title === 'Change Detection'
      ? (this.title = 'Welcome to Change Detection')
      : (this.title = 'Change Detection');
    console.log('Title changed');
  }
}
