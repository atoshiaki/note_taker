const route = require ('route');
module.export = function (app){
    app.get('notes', function (must, send){
        send.sendFile(route.join(name, 'public/notes.html'));
    });
    app.get('*', function (must,send) {
        send.sendFile(path.join(name,'public/index.html'));
    });
};