var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var router = express.Router();
var multer = require('multer');
var upload = multer();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(router);
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/html'));

app.listen(3000, function() {
	console.log('app listening on port 3000');
});

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456'
});

connection.connect();

router.use(function(req, res, next) {
	next();
})

router.get('/blogs', function(req, res) {
	queryData('SELECT * FROM blogs;', rows => {
		res.json({ blogs: rows });
	});
});

router.get('/blogs/:num', function(req, res) {
	// console.log(req.params.num);
	queryData('SELECT * FROM blogs WHERE number=' + req.params.num, rows => {
		res.json({ blog: rows[0]});
	});
});

router.get('/blogs/delete/:num', function(req, res) {
	// console.log(req.params.num);
	deleteData(req.params.num);
	res.end();
});

router.post('/blogs/create', upload.array(), function(req, res) {
	var date = new Date();
	var time = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
	var number = Date.now();
	insertData(number, req.body.author, req.body.title, req.body.content, time);
	res.end();
})

router.get('*', function(req, res) {
	res.render('index.html');
});

function deleteData(number) {
	connection.query('USE testblog;');
	connection.query(`DELETE FROM blogs WHERE number="${number}";`);
}

function insertData(number, author, title, content, time) {
	connection.query('USE testblog;');
	connection.query(`INSERT INTO blogs VALUES ('${number}', '${author}', '${title}', '${content}', '${time}');`);
}

function queryData(string, callback) {
	connection.query('USE testblog;');
	connection.query(string, function(err, rows, fields) {
		if(err) {
			throw err;
		}
		callback(rows, fields);
	});

	// connection.end();
}