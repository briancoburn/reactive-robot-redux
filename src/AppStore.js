// import { createStore } from 'redux';
import {Component} from 'react';
// import io from 'socket.io-client';
// import todos from './reducers';
// import testComponents from './reducers';
import { connect } from 'react-redux';
// import {addTodo, toggleTodo, addTestComponent, toggleTestComponent, initialItems, setVisibilityFilter, VisibilityFilters} from './actions';
// import * as eventBus from "./helpers/event-bus";
//
//
export default class AppStore extends Component{
// class AppStore extends Component{
  constructor(props){
    super(props);
    //let store = this.store = this.props.store;
    console.log('***AppStore***==>this.props:', this.props);
    // console.log('***AppStore***==>store:', store);
    // console.log('***AppStore***==>store:', store.getState());
    //this.store = store;
    // const store = this.store = createStore(todos)
    //const store = createStore(testComponents);

    const unsubscribe = this.props.subscribe(() => {
      console.log('AppStore::==>props.state:', props.getState())
    })
    console.log('state:',props.getState())
    // Dispatch some actions
    // store.dispatch(addTodo('Learn about actions'));
    // store.dispatch(addTodo('Learn about reducers'));
    // store.dispatch(addTodo('Learn about store'));
    //
    // store.dispatch(addTestComponent(0,0));
    // store.dispatch(addTestComponent(0,0));
    // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
    // mapStateToProps.bind(this);

    // this.props.dispatch(addTodo('Learn about actions'));
    // this.props.dispatch(addTodo('Learn about reducers'));
    // this.props.dispatch(addTodo('Learn about store'));
    //
    // this.props.dispatch(addTestComponent(0,0));
    // this.props.dispatch(addTestComponent(0,0));
    // this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
// Stop listening to state updates

    // this.setupSocket();
    // unsubscribe();

    // setTimeout(()=>{
    //   this.setupReduxStore();
    // },100)
  }


  // setupReduxStore(){
  //   console.log('AppStore::setupReduxStore()==starting');
  //   this.props.dispatch(addTodo('Learn about actions'));
  //   this.props.dispatch(addTodo('Learn about reducers'));
  //   this.props.dispatch(addTodo('Learn about store'));
  //
  //   let currentId = 0;
  //   this.props.dispatch(addTestComponent(currentId++,0,0));
  //   this.props.dispatch(addTestComponent(currentId++,0,0));
  //   this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
  //   console.log('AppStore::setupReduxStore()==done');
  // }

  setupSocket(){
    console.log('AppStore::setupSocket()');
    var socket;
    console.log('AppModel')
    socket = io('http://localhost:3000');

    // eventBus.init();
    // eventBus.addListener(this);
    socket.on('connect', function(){
      console.log('AppModel::socket connected');

      //eventBus.triggerEvent('socket-connected',{eventName:'socket:connected'})
      // eventBus.triggerEvent({name:'socket:connected'})
      // let loadInitialDataSocket = (socket) => {
      //   return (dispatch) => {
      //     // dispatch(clearAllItems())
      //     socket.on('config',(res)=>{
      //       //console.dir(res)
      //       console.log('AppStore::got config==>res:', res);
      //       dispatch(initialItems(res))
      //     })
      //   }
      // }
      // loadInitialDataSocket(socket);

    });

    socket.on('config',(res)=>{
      //console.dir(res)
      // const initialItems = (res) => ({
      //   type: "INITIAL_ITEMS",
      //   items: res
      // });
      console.log('AppStore::got config==>this.props:', this.props);
      console.log('AppStore::got config==>res:', res);
      res.forEach((item)=>{
        this.store.dispatch(addTestComponent(item.id,item.valueA,item.valueB));
      })

      //this.store.dispatch(initialItems(res));


      this.store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
      console.log('AppStore::==>after dispatching INITIAL_ITEMS, this.store.state:', this.store.getState())
      // let dispatcher = (dispatch)=>{
      //   console.log('calling dispatch for initial items');
      //   dispatch(initialItems(res))
      // }
      // dispatcher(res);

    })





    // socket.on('config', function(data){
    //   console.log('>>>>>>>>got config on socket==>data:',data);
    //   this.config = data;
    //   let updateObj = {};
    //   data.forEach((datum)=>{
    //     updateObj[datum.id]=datum;
    //     return (dispatch) => {
    //       // dispatch(clearAllItems())
    //       socket.on('initialList',(res)=>{
    //         console.dir(res)
    //         dispatch(initialItems(res))
    //       })
    //     }
    //
    //   });
    //   //eventBus.triggerEvent({name:'config',data:updateObj});
    // })

    socket.on('msg', function(data){
      //console.log('got msg on socket==>data:',data);
      //eventBus.triggerEvent({name:'msg',data});
    })
  }
  // Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener

}


















// const mapStateToProps = (state = {}) => {
//   // console.dir(state)
//   //return {...state};
//   //return state;
//   testComponents: state.testComponents
// };
//
//
//
//
//
//
// const AppStore = ({ dispatch }) => {
//
//   //const store = createStore(testComponents);
//
//   // const unsubscribe = store.subscribe(() => {
//   //   console.log('AppStore::==>store.state:', store.getState())
//   // })
//
//   // const mapStateToProps = state => ({
//   //   testComponents: getVisibleTestComponents(state.testComponents, state.visibilityFilter)
//   // })
//   //
//   // const mapDispatchToProps = dispatch => ({
//   //   toggleTestComponent: id => dispatch(toggleTestComponent(id))
//   // })
//   console.log('***AppStore***');
//   //console.log(store.getState())
//   // Dispatch some actions
//   dispatch(addTodo('Learn about actions'));
//   dispatch(addTodo('Learn about reducers'));
//   dispatch(addTodo('Learn about store'));
//
//   dispatch(addTestComponent(0,0));
//   dispatch(addTestComponent(0,0));
//   // store.dispatch(toggleTodo(0));
//   // store.dispatch(toggleTodo(1));
//   dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
//
// }
//
// export default connect(mapStateToProps)(AppStore)















// import React from 'react'
// import { connect } from 'react-redux'
// import {addTestComponent, addTodo, toggleTestComponent} from './actions'
// import App from './App';
//
// const AppStore = ({ dispatch }) => {
//   let input
//   function init(){
//     console.log('AppStore::init()==>dispatching ADD_TESTCOMPONENT');
//     dispatch(addTestComponent(input.value,0,0))
//   }
//   init();
// }

// const mapStateToProps = state => ({
//   store: this.state.store,
//   testComponents: getVisibleTestComponents(state,state.testComponents, state.visibilityFilter)
// })
//
// const mapDispatchToProps = dispatch => ({
//   toggleTestComponent: id => dispatch(toggleTestComponent(id))
// })
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);