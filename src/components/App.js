import React from 'react'
import { createStore } from 'redux';
import Footer from './Footer'
import AddTestComponent from '../containers/AddTestComponent'
import VisibleTestView from '../containers/VisibleTestView'
import testComponents from '../reducers/testComponents'
//import AppStore from '../AppStore';
console.log('creating AppStore');
const store = createStore(testComponents);

const unsubscribe = store.subscribe(() => {
  console.log('AppStore::==>store.state:', store.getState())
})
console.log('components/App::initial state of the store:',store.getState())
// const appStore = new AppStore(store);
const App = () => (
  <div>
    <AddTestComponent />
    <VisibleTestView />
  </div>
)

export default App
