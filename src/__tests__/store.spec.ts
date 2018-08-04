import { createStore, combineReducers, Store } from 'redux';
import userReducer from '../store/reducers/user';

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
  it('預設名稱 `Whien`', () => {
    const state = store.getState();
    expect(state.user.name).toEqual('Whien');
  });
});
