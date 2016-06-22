'use strict';

const Path = require('path');
function core(server, options, next){
    //Load routes
    server.route(require('./routes')(options));
    
    //Configure HApi to use Handlebars for view rendering
    server.views({
        engines:{
            html:require('handlebars')
        },
        path: Path.join(__dirname, '../views')
    })
    //core logic
    server.register({
        register: require('./main'),
        options:{
            data: options.data
        }
    }, error=>{
        if(error){
            console.log("There was an error in loading the main plugin");
        }
    });
    
    return next();
}

core.attributes ={
    name :'core',
    dependencies: ['inert','vision']
}

module.exports = core;