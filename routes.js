module.exports = (app, db) => {
    const something = require('./controllers/something')(db);
    app.get('/somenonsense', something.getAll)
}