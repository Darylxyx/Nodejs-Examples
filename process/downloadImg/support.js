var http = require('http'),
	fs = require('fs'),
	imgIndex = process.argv[3],
	imgUrl = process.argv[2] + imgIndex + process.argv[4];

fs.mkdir('./images', (err) => {
    if (err && err.code != 'EEXIST') return;
    http.get(imgUrl, (res) => {
        var out = fs.createWriteStream('./images/'+imgIndex+'.jpg', {
            encoding: 'binary'
        });

        res.on('data', (chunk) => {
            out.write(chunk);
        });

        res.on('end', () => {
            console.log('Image_'+imgIndex+' download complete.');
            out.end('');
        });
    });
});