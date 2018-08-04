import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store/index.d';
import { User } from '../store/reducers/user';
import { change_name } from '../store/reducers/user';

type Props = {
  user: User;
  change_name: (value: string) => void;
};
export const Hello: React.StatelessComponent<Props> = props => (
  <div>
    <div>
      <input
        onChange={e => props.change_name(e.target.value)}
        type="text"
        value={props.user.name}
      />
    </div>
    <div>Hello, {props.user.name}</div>
  </div>
);

const mapStateToProps = (state: StoreState) => ({
  user: state.user
});
const mapDispatchToProps = {
  change_name
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
