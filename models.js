
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sandy:Serafina16@cluster0-hzlph.mongodb.net/devf?retryWrites=true',{ useNewUrlParser: true });

const Note = mongoose.model('Note', {
     text: String ,
     color: String

    });

module.exports = Note;