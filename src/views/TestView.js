import React from 'react'
import TestComponent from '../components/TestComponent';
require('./TestView.css');

export default class TestView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // console.log('TestView::render()');
    return (<ul className='componentContainer'>
      {this.props.testComponents.map(testComponent =>
        <TestComponent
          key={testComponent.id}
          {...testComponent}
          onClick={() => toggleTestComponent(todo.id)}
        />
      )}
  </ul>)
  }
}
