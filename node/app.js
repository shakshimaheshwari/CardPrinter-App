'use strict';
require('dotenv').load();
const Hapi = require('hapi');
const dataSet = require('../data/studentData.json');
const server = new Hapi.Server();
server.connection({
    port: process.env.port || 7000
});

server.register([{
    register: require('inert')
},{
    register: require('vision')
},{
    register: require('./core'),
    options:{
        data: dataSet
    }
}], error =>{
    if(error){
        console.log("Error:",error);
    }else{
        //Start the server
       server.start(()=>{
        console.log('Hapi server running at port:',server.info.uri);
        }); 
    }
})

