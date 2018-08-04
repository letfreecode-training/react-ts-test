import * as React from 'react';
import { render } from 'react-dom';

/**
 * Enzyme core
 */
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * redux
 */
import { createStore, combineReducers, Store } from 'redux';
import { Provider } from 'react-redux';

/**
 * Test Component
 */
import Hello from '../../containers/hello';

/**
 * Reducer
 */
import userReducer from '../../store/reducers/user';
import { StoreState } from '../../store/index.d';

/**
 * jsdom implement
 */
import * as jsdom from 'jsdom';
declare var global: NodeJS.Global & {
  document: Document;
};
const doc: Document = new jsdom.JSDOM(
  '<!doctype html><html><body></body></html>'
).window.document;
global.document = doc;

/**
 * Enzyme plugin
 */
Enzyme.configure({ adapter: new Adapter() });

const store: Store = createStore(
  combineReducers({
    user: userReducer
  })
);

describe('<Hello />', () => {
  let tree: ReactWrapper;

  beforeEach(() => {
    tree = mount(
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  });
  afterEach(() => {
    tree = null;
  });

  it('預設性別 `男`', () => {
    const state: StoreState = store.getState();
    expect(state.user.gender).toEqual('男');
  });
  it('按鈕改變性別', () => {
    let state: StoreState;
    /**
     * 第一次點擊，將預設 `男` 改為 `女`
     */
    tree.find('button').simulate('click');
    state = store.getState();
    expect(state.user.gender).toEqual('女');

    /**
     * 第二次點擊，將 `女` 改回 `男`
     */
    tree.find('button').simulate('click');
    state = store.getState();
    expect(state.user.gender).toEqual('男');
  });
  it('輸入改變名字', () => {
    tree.find('input').simulate('change', { target: { value: 'Whien' } });
    const state: StoreState = store.getState();
    expect(state.user.name).toEqual('Whien');
  });
});
