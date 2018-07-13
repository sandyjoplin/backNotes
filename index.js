const Note = require('./models');
const app = require ('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// permitir la conexion al backed
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// crear una nota
app.post('/notes', (req, res)=>{

    let {text, color}= req.body;
    let newNote = new Note ({text, color});

    newNote.save().then(()=>{
    res.send(newNote);
    });

});

// mandar a traer todas las notas
app.get('/notes', (req, res)=>{
 Note.find({},(err, notesList)=>{
 res.send(notesList);
 });

});
 
// eiminar notas
app.delete('/notes',(req, res)=>{
    let id = req.body.id;
 Note.findByIdAndRemove(id,(err, deleteNotes)=>{
res.send(deleteNotes);
 });
});


app.listen(3000,()=>{
 console.log("ya me siento de universidad");
});