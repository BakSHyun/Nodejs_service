var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');//ejs 템플릿 엔진  연동

// route setting - 라우팅(routing)
app.get('/', function (req, res) { 
   //res.send('Hello World!');
   var data = req.body.name;
   res.render('index', {name: data});//views디렉토리안에 있는 index.ejs 파일
});

app.listen(process.env.PORT || 5000, function(){
     console.log('App Listening on port 5000');
});
