import { Action } from 'redux';

/**
 * contants
 */
export const CHANGE_NAME: 'CHANGE_NAME' = 'CHANGE_NAME';
export const CHANGE_GENDER: 'CHANGE_GENDER' = 'CHANGE_GENDER';

/**
 * Action
 */
export const change_name = (value: string) => ({
  type: CHANGE_NAME,
  payload: value
});
export const change_gender = (value: string) => ({
  type: CHANGE_GENDER,
  payload: value
});

export type User = {
  name: string;
  gender: string;
};
type ActionPayload = {
  payload: any;
};

const inititalState: User = {
  name: '',
  gender: ''
};

const change_state = (state: User, key: string, value: string) =>
  Object.assign({}, state, {
    [key]: value
  });

const userReducer = (
  state: User = inititalState,
  action: Action & ActionPayload
) => {
  switch (action.type) {
    case CHANGE_NAME:
      return change_state(state, 'name', action.payload);
    case CHANGE_GENDER:
      return change_state(state, 'gender', action.payload);
    default:
      return state;
  }
};
export default userReducer;
