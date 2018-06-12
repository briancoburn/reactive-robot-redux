const testComponents = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEST_COMPONENT':
      return [
        ...state,
        {
          id: action.id,
          valueA: action.valueA,
          valueB: action.valueB,
          status: action.status,
          completed: false
        }
      ]
      break;
    case 'UPDATE_TEST_COMPONENT':

      return state.map((testComponent) => {
        if(testComponent.id === action.id){
          testComponent.valueA = action.valueA;
          testComponent.valueB = action.valueB;
          testComponent.status = action.status;
          testComponent.updated = action.true;
        }
        return testComponent
      });
      break;
    case 'TOGGLE_TEST_COMPONENT':
      return state.map(testComponent => (testComponent.id === action.id) ? {testComponent, completed: !testComponent.completed} : testComponent)
      break;
    case 'INITIAL_ITEMS':
      return [
        ...state,
        action.items
      ]
      break;
    default:
      return state
  }
}

export default testComponents
