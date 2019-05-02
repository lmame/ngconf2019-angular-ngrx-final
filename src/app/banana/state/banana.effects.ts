import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { INITIATE_TIME_HOP, InitiateTimeHop, TimeHopComplete} from './banana.actions';
import { RotService } from '../../rot.service';

// The effect will be triggered elsewhere, in the component.
// We implement InitiateTimeHop that will call the RotService.
@Injectable()
export class BananaEffects {  constructor(private actions$: Actions, private rot: RotService) { }
  @Effect()
  public initiateTimeHop$ = this.actions$.pipe(
    ofType(INITIATE_TIME_HOP),
    switchMap((action: InitiateTimeHop) => 
      this.rot.rotBanana().pipe(
        // When done (rotBanana) we call the action TimeHopComplete
        map(color => new TimeHopComplete(color))
      ),
    ),
  );
}