
// var favicon=require("serve-favicon")
// var logger=require('morgan')
var express=require('express')
var path=require('path');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var assert = require('assert');
var cookieParser=require('cookie-parser');
var session=require('express-session')
var morgan=require('morgan')
// var multer=require('multer')
// var upload=multer();
const MongoClient = require('mongodb').MongoClient
var app=express();
var db
app.use(bodyParser.urlencoded({extended: true}))
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
//   db.collection('quotes').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     // renders index.ejs
//     // res.render('index.ejs', {quotes: result})
//     // console.log(result)
//   })
// })
MongoClient.connect('mongodb://saadqamar:Gmail12345@ds157233.mlab.com:57233/patient_tracker', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
  app.post('/patients', (req, res) => {
  db.collection('patients').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log(result)
    console.log('saved to database')
    res.redirect('/')
  })
})
app.get('/allData',(req,res)=>{
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send(result)
  })
})
// var mongoose = require('mongoose');
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// // Parsers for POST data
// app.use(bodyParser.json(), function (err, req, res, next) {
//     if (err) {
//         return res.status(500).json({ error: err });
//     }
//     next();
// });
// app.use(bodyParser.urlencoded({ extended: false }));

// mongoose.connect('mongodb://saadqamar:Gmail12345@ds157233.mlab.com:57233/patient_tracker', {
//     useMongoClient: true
//     /* other options */
// });
// var patientSchema = mongoose.Schema({
//     Pname: String,
//     Dname: String,
//     Mname: String,
//     Mcost: String,
//     Disease: String,
//     Date: String
// })
// // user model
// var patientModel = mongoose.model("patient", patientSchema)

// app.post('/patients', function (request, response) {
//     response.header('Access-Control-Allow-Origin', "*");
//     // response.setHeader('Access-Control-Allow-Origin', '*')
//     var patientObj = request.body;
//     console.log("Server side",patientObj);
//     var saveData = new patientModel(patientObj)
//     saveData.save(function (err, data) {
//         if (!err) {
//             console.log("data", data)
//             response.send(data)
//         } else {
//             console.log("Err", err)
//             response.send(err)
//         }
//     })
// })


// // When successfully connected
// mongoose.connection.on('connected', function () {
//     console.log('Mongoose default connection open to ');
// });

// // If the connection throws an error
// mongoose.connection.on('error', function (err) {
//     console.log('Mongoose default connection error: ' + err);
// });

// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {
//     console.log('Mongoose default connection disconnected');
// });

// app.listen(3000, function () {
//     console.log("Server run on port 3000")
// });