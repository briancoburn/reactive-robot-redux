import React, { Component } from 'react';
import * as eventBus from '../helpers/event-bus';
require('./TestComponent.css');

export default class TestComponent extends Component {

    constructor(){
        super();
        this.state = {updated:false, valueA: 0, valueB: 0, status: 'ok'};
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.valueA !== this.state.valueA || nextProps.valueB !== this.state.valueB){
        this.setState({updated:true,valueA:nextProps.valueA,valueB:nextProps.valueB,status:nextProps.status, timestamp:nextProps.timestamp});
        setTimeout(() => {
          this.setState({updated: false});
        }, 500);
      }
    }

    componentDidMount(){
      this.setState({id:this.props.id,valueA:this.props.valueA,valueB:this.props.valueB, status: this.props.status});
    }

    render(){
      // console.log('TestComponent::render()');
      let combinedClassName = '';
      if(this.state.updated){
        if(this.state.status==='error'){
          combinedClassName = 'testComponent backgroundRed'
        }else if(this.state.status==='warning'){
          combinedClassName = 'testComponent backgroundYellow'
        }else if(this.state.status==='info'){
          combinedClassName = 'testComponent backgroundGreen'
        }

      }else{
        combinedClassName = 'testComponent backgroundBlue'
      }
      return (
        <div className={combinedClassName}>
          <span>{'valueA:'+this.state.valueA}</span>
          <span>{'valueB:'+this.state.valueB}</span>
        </div>
      );
    }
}
