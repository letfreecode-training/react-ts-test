import * as React from 'react';
import { prependOnceListener } from 'cluster';

type Props = {
  name: string;
};
const Hello: React.StatelessComponent<Props> = props => (
  <div>
    <div>
      <input type="text" />
    </div>
    <div>Hello, {props.name}</div>
  </div>
);

export default Hello;
