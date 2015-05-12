var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function PersonList(personDao) {
  this.personDao = personDao;
}

PersonList.prototype = {
    showPeople: function (req, res) {
        var self = this;

        var querySpec = {
            query: 'SELECT * FROM people p WHERE p.id = "2"',
        };

        self.personDao.find(querySpec, function (err, items) {
            if (err) {
                throw (err);
            }

            res.render('index', {
                title: 'Sample people database ',
                people: items
            });
        });
    },

    addPerson: function (req, res) {
        var self = this;
        var item = req.body;

        self.personDao.addItem(item, function (err) {
            if (err) {
                throw (err);
            }

            res.redirect('/');
        });
    }
};

module.exports = PersonList;