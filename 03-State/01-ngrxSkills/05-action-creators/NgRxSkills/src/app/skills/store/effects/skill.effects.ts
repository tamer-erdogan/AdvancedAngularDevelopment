import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SkillsService } from '../../skills.service';
import {
  loadSkills,
  loadSkillsError,
  loadSkillsSuccess,
} from '../actions/skill.actions';
import { Skill } from '../models/skill.model';

@Injectable()
export class SkillsEffects {
  constructor(private actions$: Actions, private service: SkillsService) {}

  // Note: Make sure you are starting json-server or your api before using this
  @Effect()
  loadVouchers$: Observable<Action> = this.actions$.pipe(
    ofType(loadSkills),
    mergeMap((action) =>
      this.service.getSkills().pipe(
        map((skills: Skill[]) => loadSkillsSuccess({ skills })),
        catchError((err) => of(loadSkillsError({ err })))
      )
    )
  );
}
