
export const addTestComponent = (id, valueA, valueB, status) => ({
  type: 'ADD_TEST_COMPONENT',
  id,
  valueA,
  valueB,
  status
})


export const updateTestComponent = (id, valueA, valueB, status) => ({
  type: 'UPDATE_TEST_COMPONENT',
  id,
  valueA,
  valueB,
  status
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTestComponent = id => ({
  type: 'TOGGLE_TEST_COMPONENT',
  id
})

export const initialItems = items => ({
  type: 'INITIAL_ITEMS',
  items
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
