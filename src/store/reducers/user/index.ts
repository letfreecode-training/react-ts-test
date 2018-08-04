import { Action } from 'redux';

export type User = {
  name: string;
};

const inititalState: User = {
  name: 'Whien'
};

const userReducer = (state: User = inititalState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default userReducer;
