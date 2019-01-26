import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import Counter from '../components/index'

const mapStateToProps = (state, ownProps) => ({
  state: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)