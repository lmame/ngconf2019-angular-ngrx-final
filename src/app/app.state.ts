import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from './banana/state';

// Declaring the actions, reducers and effects.
export interface AppState {
  banana: bananaStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer
}

export const effects: Array<any> = [
  bananaStore.BananaEffects
];

// State getter.
export const getMyBanana = (s: AppState) => s.banana;
