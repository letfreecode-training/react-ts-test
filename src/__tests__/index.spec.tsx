import * as React from 'react';
import Hello from '../containers/hello';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as jsdom from 'jsdom';

declare var global: NodeJS.Global & {
  document: Document;
};

const doc: Document = new jsdom.JSDOM(
  '<!doctype html><html><body></body></html>'
).window.document;

global.document = doc;

Enzyme.configure({ adapter: new Adapter() });

describe('Store test', () => {
  it('改變 username', () => {
    const tree = mount(<Hello name="Whien" />);
    expect(
      tree
        .childAt(0)
        .childAt(1)
        .text()
    ).toEqual('Hello, Whien');
  });
});
