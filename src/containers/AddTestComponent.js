import React from 'react'
import { connect } from 'react-redux'
import {addTestComponent, updateTestComponent} from '../actions'

const AddTestComponent = ({ dispatch }) => {
  let input = null;
  let numItems = 10000;
  let updateDelta = 33;
  let ids = [];
  let items = [];

  let setupItems = ()=>{
    for(let i = 0; i < numItems; i += 1){
      let id = Math.random();
      ids.push(id);
      let item = {id, valueA: 0, valueB: 0, status: 'ok'};
      items.push(item);
      dispatch(addTestComponent(id, 0, 0, 'ok'));
    }
  }

  let counter = 0;
  let limit = 2;
  let item = null;
  let itemCounter=0;
  let backwardsCounter = numItems-1;
  let statusOptions = ['info','warning','error'];


  setupItems();
  let testInterval1 = setInterval(function(){
    switch(counter){// only send one update per interval
      case 0:// update a random item within the array
        let randomCounter = Math.floor(Math.random()*items.length);
        item = items[randomCounter];
        item.status = statusOptions[Math.floor(Math.random() * statusOptions.length)]
        item.valueA = Math.floor(Math.random()*100);
        item.valueB = Math.floor(Math.random()*100);
        item.timestamp = Date.now();
        dispatch(updateTestComponent(item.id, item.valueA, item.valueB, item.status));
        // console.log(item.id+' '+item.valueA+' '+item.valueB);
        break;
      case 1:// cycle thru array forward
        if(itemCounter > items.length-1){
          itemCounter = 0;
        }
        item = items[itemCounter];
        item.valueA = Math.floor(Math.random()*100);
        item.valueB = Math.floor(Math.random()*100);
        item.status = 'error';
        item.timestamp = Date.now();
        // console.log(item.id+' '+item.valueA+' '+item.valueB);
        dispatch(updateTestComponent(item.id, item.valueA, item.valueB, item.status));
        itemCounter += 1;
        break;
      case 2:// cycle thru array backwards
        if(backwardsCounter <= 0){
          backwardsCounter = items.length-1;
        }
        item = items[backwardsCounter];
        item.valueA = Math.floor(Math.random()*100);
        item.valueB = Math.floor(Math.random()*100);
        item.status = 'info';
        item.timestamp = Date.now();
        // console.log(item.id+' '+item.valueA+' '+item.valueB);
        dispatch(updateTestComponent(item.id, item.valueA, item.valueB, item.status));
        backwardsCounter -= 1;
        break;
    }
    counter += 1;
    if(counter > limit){
      counter = 0;
    }
  },updateDelta);

  return(
    <div>
      <div className="App-header">
        <h2>Reactive Robot - testing frontend data solutions for react</h2>
        <h3>redux</h3>
      </div>
    </div>
  )
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTestComponent(input.value,0,0))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add TestComponent
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTestComponent)
