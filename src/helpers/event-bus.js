/**
 * Created by brian on 2/24/16.
 */
//import {Observable} from 'rxjs-es/Observable';
//import {Observer} from 'rxjs-es/Observer';
//import * as appModel from '../model/app-model';
//rxjs version//
let rx = require('rxjs/Rx');
//console.log('event-bus::rx:',rx);
//let rx = require('@reactivex/rx');
//let Observable = rx.Observable;
let Observer = rx.Subscriber;

let listeners = [];
let observer;
export function init(){
   console.log('event-bus::init()');
    //observer keeps track of the model, managing state and concurrency
    this.observer = Observer.create(
       function next(event){//events indicating changes from model
           // console.log('event-bus::onNext()==>event.name:',event.name);
           // console.log('event-bus::onNext()==>event.data:',event.data);
           //console.log('event-bus::onNext()==>data:',data);
           listeners.map(function(listener){
               if(listener && listener.onEvent){
                   listener.onEvent(event);
               }
           });
       },
       function onError(error){
           console.log('event-bus::onError()==>error:',error);
       },
       function onCompleted(finalData){
           console.log('event-bus::onCompleted()==>finalData:',finalData);
       }

    );
    return observer;

}
export function addListener(listenerIn){
    console.log('EventBus::addListener()==>listenerIn.id:', listenerIn.id);

    listeners.push(listenerIn);
    // if(listenerIn.versionNumber){//bc might want to have a better way to check this
    //     console.log('eventBus==>adding main==>observer:', observer);
    //     appModel.init(observer);
    // }
}

export function removeListener(listenerIn){
    console.log('EventBus::removeListener()==>listenerIn:', listenerIn);
    let index = listeners.indexOf(listenerIn);
    listeners.splice(index,1);
}
export function triggerEvent(event){
    // console.log('EventBus::triggerEvent()****==> event:', event);
    // console.log('EventBus::triggerEvent()==>listeners:', listeners);
    
    // listeners.map(function(listener){
    //     if(listener && listener.onEvent){
    //         listener.onEvent(eventName,data);
    //     }
    // });
    // data.eventName = eventName;
    this.observer.next(event);
    //let appModel decide if it has anything to update for this event
    //appModel.update(eventName, data);
    
}


// let source = rx.Observable.create(observer =>{
//    observer.onNext('stupid');
//    observer.onCompleted();
// });
//
// let EventBus = ()=>{
//    console.log('EventB
// us()');
//
// };
//EventBus();


//plain javascript Observer implementation
// let listeners = [];
// export function init(){
//     console.log('EventBus::init()');
// }
//
// //a listener just needs an onEvent method to handle whatever events it cares about
// export function addListener(listenerIn){
//     console.log('EventBus::addListener()==>listenerIn:', listenerIn);
//     listeners.push(listenerIn);
// }
//
// export function removeListener(listenerIn){
//     console.log('EventBus::removeListener()==>listenerIn:', listenerIn);
//     let index = listeners.indexOf(listenerIn);
//     listeners.splice(index,1);
// }
//
// export function triggerEvent(eventName, data){
//     console.log('EventBus::triggerEvent()****==>eventName:'+eventName+', data:', data);
//     console.log('EventBus::triggerEvent()==>listeners:', listeners);
//     listeners.map(function(listener){
//         if(listener && listener.onEvent){
//             listener.onEvent(eventName,data);
//         }
//     });
// }