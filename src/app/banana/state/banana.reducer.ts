import { GET_NEW_BANANA, PEEL_BANANA, EAT_BANANA, TIME_HOP_COMPLETE } from './banana.actions';
import * as programActions from './banana.actions';


// For each case we have to tell what to do.
export function reducer(state: any, action: programActions.BananaAction): any {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log('REDUCER ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    }
    case PEEL_BANANA: {
      console.log('REDUCER ' + PEEL_BANANA);
      // Here we simply return the state using spread and overwrite the isPeeled attribute.
      return {
        ...state,
        isPeeled: true
      };
    }
    case EAT_BANANA: {
      console.log('REDUCER: Taking ' + action.payload + ' bites of the banana')
      // state. contains the current values, action.payload contains the parameter.
      // See the Action for the parameter name.
      return {
        ...state,
        bitesRemaining: (state.bitesRemaining - action.payload)
      };
    }
    case TIME_HOP_COMPLETE: {
      console.log('REDUCER: Time hop complete')
      return {
        ...state,
        color: action.payload
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}