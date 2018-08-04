import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store/index.d';
import { User } from '../store/reducers/user';
import { change_name, change_gender } from '../store/reducers/user';

type Props = {
  user: User;
  change_name(value: string): void;
  change_gender(value: string): void;
};
const chooseBoyOrGirl = (gender: '男' | '女'): string =>
  gender === '男' ? '女' : '男';
export const Hello: React.StatelessComponent<Props> = props => (
  <div>
    <div>
      <button
        onClick={() => props.change_gender(chooseBoyOrGirl(props.user.gender))}
      >
        更改性別
      </button>
      <input
        onChange={e => props.change_name(e.target.value)}
        type="text"
        value={props.user.name}
      />
    </div>
    <div>
      Hello, {props.user.name} - {props.user.gender}
    </div>
  </div>
);

const mapStateToProps = (state: StoreState) => ({
  user: state.user
});
const mapDispatchToProps = {
  change_name,
  change_gender
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
