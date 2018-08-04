import { createStore, combineReducers, Store } from 'redux';
import userReducer, {
// type
  User,

  //action
  change_name,
  change_gender,

  // contants
  CHANGE_NAME,
  CHANGE_GENDER
} from '../store/reducers/user';

describe('Store', () => {
  let store: Store;
  beforeEach(() => {
    store = createStore(
      combineReducers({
        user: userReducer
      })
    );
  });

  afterEach(() => {
    jest.resetModules();
  });

  const findState = (key: string) => store.getState()[key];
  const findUserStateFromKey = (key: 'name' | 'gender') =>
    store.getState().user[key];

  it('預設 state', () => {
    const defaultState: User = {
      name: '',
      gender: ''
    };

    expect(findState('user')).toEqual(defaultState);
  });

  it('預設名稱 ``', () => {
    expect(findUserStateFromKey('name')).toEqual('');
  });

  it('預設性別 ``', () => {
    expect(findUserStateFromKey('gender')).toEqual('');
  });

  it('改變名稱 `YoYoMan`', () => {
    store.dispatch({
      type: CHANGE_NAME,
      payload: 'YoYoMan'
    });
    store.dispatch(change_name('YoYoMan'));
    expect(findUserStateFromKey('name')).toEqual('YoYoMan');
  });

  it('改變性別 `girl`', () => {
    store.dispatch({
      type: CHANGE_GENDER,
      payload: 'girl'
    });
    store.dispatch(change_gender('girl'));
    expect(findUserStateFromKey('gender')).toEqual('girl');
  });
});
