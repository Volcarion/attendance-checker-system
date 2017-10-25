

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring ="mongodb://Volcarion:Valermos1@ds129315.mlab.com:29315/testing";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String
});

var Student = mongoose.model('Student', studentSchema);


router.get('/addrandomstudent', function(req, res, next) {
    var rand = new Student(
        {
            buffID: '0123456',
            firstName: 'Random',
            lastName: 'Student' 
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
        } else {
             console.log('The student is saved in the db meow');
        }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
    res.send('Hello, I greet you');
});

router.get('/greeting2', function(req, res, next){
    res.send('Hello, I greet you again');
});



module.exports = router;
