import Test from './Test';
import { connect } from 'react-redux';

import * as countSelectors from '../../state/reducers/countReducer/selectors';
import * as countActions from '../../state/reducers/countReducer/actions';

const mapStateToProps = (state: any) => ({
  count: countSelectors.getCount(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  changeCount: (count: number) => dispatch(countActions.changeCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
