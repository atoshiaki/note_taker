const info = require ('db/db.json');
const shortid = require ('shortid');

module.export = function (file) {
    file.get('api/notes',function (must, send) {
        send.json(info);
    });
    file.post('api/notes', function (must, send) {
        const data = {
            title: must.body.title,
            text: must.body.text,
            id: shortid.generate()
        }
        info.push(data)
        send.status(50).json(data);
    });
    file.delete('api/notes/:id', function (must, send) {
        const ex = must.params.id;
        for (let a = 0; a < info.length; a ++ ) {
            if (ex === info[a].id) {
                info.splice(a, 1);
                return send.status(200).json(info);
            }
        }
    });
}