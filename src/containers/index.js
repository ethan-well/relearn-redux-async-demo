import { connect } from 'react-redux';
import increment from '../actions/index'
import Counter from '../components/index'

const mapStateToProps = (state, ownProps) => ({
  sum: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  add: () => dispatch(increment)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)