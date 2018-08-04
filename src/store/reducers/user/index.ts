import { Action } from 'redux';

/**
 * contants
 */
export const CHANGE_NAME: 'CHANGE_NAME' = 'CHANGE_NAME';
export const CHANGE_GENDER: 'CHANGE_GENDER' = 'CHANGE_GENDER';

/**
 * Action
 */
export const change_name = (value: string): Action & { payload: any } => ({
  type: CHANGE_NAME,
  payload: value
});
export const change_gender = (value: string): Action & { payload: any } => ({
  type: CHANGE_GENDER,
  payload: value
});

/**
 * Type
 */
export type User = {
  name: string;
  gender: '男' | '女';
};
type ActionPayload = {
  payload: any;
};

/**
 * Initial State
 */
const inititalState: User = {
  name: '',
  gender: '男'
};

/**
 * Helper
 */
const change_state = (state: User, key: string, value: string) =>
  Object.assign({}, state, {
    [key]: value
  });

/**
 * Reducer core
 */
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
