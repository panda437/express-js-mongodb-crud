module.exports = (app) => {
  const entries = require('../controllers/entries.controller');

  var router = require('express').Router();

  // create
  router.post('/', entries.createEntry);

  // read
  router.get('/', entries.getEntry);

  // update
  router.put('/', entries.updateEntry);

  // delete
  router.delete('/:id', entries.deleteEntry);

  app.use('/entries', router);
};
