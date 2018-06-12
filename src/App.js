import React, { Component } from 'react';
import AppModel from './AppModel';
import TestView from './views/TestView';

export default class App extends Component {

    constructor(){
        super();
        console.log('App==>making new appmodel');
        this.appModel = new AppModel();
    }

    componentDidMount(){
        console.log('App::componentDidMount()==>');
    }

    render() {
        console.log('App::render()');
      return (<div>App</div>)
        return (
        <div className="App">
            <div className="App-header">
                <h2>Reactive Robot - performance testing of frontend data solutions for react</h2>
                <h3>testing:rxjs</h3>
            </div>
            <TestView/>
        </div>
    );
    }
}
