const db = require("../../db/db.json");
const shortid = require("shortid");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });
    app.post("/api/notes", function(req, res) {
        const info = {
            title : req.body.title,
            text : req.body.text,
            id : shortid.generate()
        }
        db.push(info);
        res.status(666).json(info);
    });
    app.delete("/api/notes/:id", function(req, res) {
        const noteId = req.params.id;
        for (let i = 0; i < db.length; i ++ ) {

            if (noteId === db[i].id) {
                db.splice(i, 1);
                return res.status(666).json(db);
            }
        }
    });
}