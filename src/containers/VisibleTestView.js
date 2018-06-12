import { connect } from 'react-redux'
import { toggleTestComponent } from '../actions'
import TestView from '../views/TestView';


var getVisibleTestComponents = (state,testComponents, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return testComponents
    case 'SHOW_COMPLETED':
      return testComponents.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return testComponents.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = state => ({
  store: state.store,
  testComponents: getVisibleTestComponents(state,state.testComponents, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTestComponent: id => dispatch(toggleTestComponent(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestView)
