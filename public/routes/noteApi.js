const info = require ('/db/db.json');
const user = require ('user');

module.export = function (file) {
    file.get('/api/notes',function (must, send) {
        send.json(info);
    });
    file.post('/api/notes', function (must, send) {
        const data = {
            title: must.body.title,
            text: must.body.text,
            id: user.generate()
        }
        info.push(data)
        send.status(50).json(data)
    })
}