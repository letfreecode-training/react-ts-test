import { createStore, combineReducers, Store } from 'redux';
import userReducer, {
  change_name,
  User,
  CHANGE_NAME
} from '../store/reducers/user';
import { StoreState } from '../store/index.d';

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
  it('預設 state', () => {
    const defaultState: User = {
      name: '',
      gender: ''
    };
    const state: StoreState = store.getState();
    expect(state.user).toEqual(defaultState);
  });
  it('預設名稱 `Whien`', () => {
    const state: StoreState = store.getState();
    expect(state.user.name).toEqual('');
  });

  it('改變名稱 `YoYoMan`', () => {
    store.dispatch({
      type: CHANGE_NAME,
      payload: 'YoYoMan'
    });
    store.dispatch(change_name('YoYoMan'));
    const state: StoreState = store.getState();
    expect(state.user.name).toEqual('YoYoMan');
  });
});
