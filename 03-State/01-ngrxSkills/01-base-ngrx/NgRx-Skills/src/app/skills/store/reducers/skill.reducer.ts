import { SkillActionsUnion, SkillActionTypes } from '../actions/skill.actions';
import { Skill } from '../models/skill.model';

// State
export const skillFeatureKey = 'skills';

export interface SkillsState {
  skills: Skill[];
  loaded: boolean;
}

export const initialState = {
  skills: [
    { id: '123', name: 'rxjs', completed: true },
    { id: '456', name: 'ngrx', completed: false },
  ],
  loaded: false,
};

// Reducer
export function SkillReducer(
  state: SkillsState = initialState,
  action: SkillActionsUnion
) {
  switch (action.type) {
    case SkillActionTypes.AddSkill:
      const arrAdd = [...state.skills, action.payload];
      return { ...state, skills: arrAdd };
    case SkillActionTypes.DeleteSkill:
      const arrDel = state.skills.filter((s) => s.id !== action.payload.id);
      return { ...state, skills: arrDel };
    case SkillActionTypes.ToggleComplete:
      return { ...state };
    default:
      return state;
  }
}
