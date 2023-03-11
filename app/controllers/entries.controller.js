const db = require('../models');
const validationUtils = require('../utils/validation-utils');
const Entries = db.entries;

const createEntry = (req, res) => {
  validationUtils
    .validateOrReject(req.body, {
      name: { type: 'string', required: true },
      number: { type: 'number', required: true }
    })
    .then((bodyClean) => {
      
        const entries = new Entries({
          name: bodyClean.name,
          number: bodyClean.number
        });

        entries
          .save(entries)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || 'Some error occurred while creating.',
            });
          });
      
    })
    .catch((err) => {
      console.log('errrr -> ', err);
      res.status(500).send({
        message: err,
      });
    });
};


const getEntry = async (req, res) => {
  const entries = await Entries.find({});
  res.send(entries);
}

const updateEntry = async (req, res) => {
  const entries = await Entries.findByIdAndUpdate(req.body.id, 
    req.body.data
  );
  res.send(entries);
}

const deleteEntry = async (req, res) => {
  const entries = await Entries.deleteOne({_id : req.params.id});
  res.send(entries);
}


module.exports = {
  createEntry,
  getEntry,
  updateEntry,
  deleteEntry
};
