import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skill } from './skill.model';

const skillsdata = [
  { id: 1, name: 'node.js', hours: 2, completed: false },
  { id: 2, name: 'type script', hours: 2, completed: false },
  { id: 3, name: 'java script', hours: 1, completed: false }
];

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor() {
    this.arrSkills = skillsdata;
    this.skills$.next(this.arrSkills);
  }

  private arrSkills: Skill[] = [];
  private skills$: BehaviorSubject<Skill[]> = new BehaviorSubject(
    this.arrSkills
  );

  getSkills(): Observable<Skill[]> {
    return this.skills$;
  }

  addSkill(item: Skill) {
    this.arrSkills.push(item);
    this.skills$.next(this.arrSkills);
  }

  deleteSkill(item: Skill) {
    this.arrSkills = this.arrSkills.filter(s => s.id != item.id);
    this.skills$.next(this.arrSkills);
  }
}
