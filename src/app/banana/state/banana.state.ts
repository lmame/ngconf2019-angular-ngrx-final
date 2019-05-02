
// Definition of the banana possible states.
export interface State {
    isPeeled: boolean;
    bitesRemaining: number;
    color: string;
}
 
export const initialState: State = {} as State;
