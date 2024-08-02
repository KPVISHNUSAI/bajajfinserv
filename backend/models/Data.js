const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    data: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Data', DataSchema);
