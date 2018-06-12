import io from 'socket.io-client';
import * as eventBus from './helpers/event-bus';
export default class AppModel{


    constructor(){
        var socket;
        console.log('AppModel')
        socket = io('http://localhost:3000');

        eventBus.init();
        eventBus.addListener(this);
        socket.on('connect', function(){
            console.log('AppModel::socket connected');
            //eventBus.triggerEvent('socket-connected',{eventName:'socket:connected'})
            eventBus.triggerEvent({name:'socket:connected'})

        });
        socket.on('config', function(data){
            console.log('>>>>>>>>got config on socket==>data:',data);
            this.config = data;
            let updateObj = {};
            data.forEach((datum)=>{
                updateObj[datum.id]=datum;

            });
            eventBus.triggerEvent({name:'config',data:updateObj});
        })

        socket.on('msg', function(data){
            //console.log('got msg on socket==>data:',data);
            eventBus.triggerEvent({name:'msg',data});
        })

    }
    onEvent(data){
        // console.log('AppModel::onEvent()==>data:', data);
    }
}