var href = 'http://google.com/user.php?userName=XieYuxiao&age=25&sex=male#hash',
	search = href.split('?')[1].split('#')[0],
	url = require('url'),
	qs = require('querystring');


//qs.parse(str, [sep], [eq], [options]); sep:分割符 eq:键值连接符 options:最大属性数
var a = qs.parse(search);
col(a);

var b = qs.parse(search, '#');
col(b);

var c = qs.parse(search, '&', '=', {maxKeys:2});
col(c);

//qs.stringify(obj, [sep], [eq]);
var d = qs.stringify(a);
col(d);

var e = qs.stringify(a, '#', '=>');
console.log(e);

function col(obj) {
	console.log('\n');
	console.log(obj);
}

//url.parse
var f = url.parse(href);
console.log(f);

var g = url.format(f);
console.log(g);

//url.resove