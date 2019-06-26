var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

const servo =http.createServer(function (req, res) {
 // res.end();
})
servo.on('request',(req,res)=>{
//const ps = fs.readdirSync("./paginas");
//let pagina = "./paginas"+req.url;
//console.log(pagina)
//console.log(ps)

	let pagina = './paginas' + req.url;
	
	    if (pagina == './paginas/') {
	        pagina = './paginas/index.html';
	    }else if(req.url == "/inverno"){
	    	pagina = "./paginas/inverno.html"
	    }
	console.log(pagina)
	    var extensao = String(path.extname(pagina)).toLowerCase();
	    var mimeTypes = {
	        '.html': 'text/html',
	        '.js': 'text/javascript',
	        '.css': 'text/css',
	        '.json': 'application/json',
	        '.png': 'image/png',
	        '.jpg': 'image/jpg',
	        '.gif': 'image/gif',
	        '.wav': 'audio/wav',
	        '.mp4': 'video/mp4',
	        '.woff': 'application/font-woff',
	        '.ttf': 'application/font-ttf',
	        '.eot': 'application/vnd.ms-fontobject',
	        '.otf': 'application/font-otf',
	        '.svg': 'application/image/svg+xml',
	        '.wasm': 'application/wasm'
	    };
	
	    var contentType = mimeTypes[extensao] || 'application/octet-stream';
	    fs.readFile(pagina, function(error, content) {
	        if (error) {
	            if(error.code == 'ENOENT') {
	                fs.readFile('./404.html', function(error, content) {
	                    res.writeHead(404, { 'Content-Type': contentType });
	                    res.end(content, 'utf-8');
	                });
	            }
	            else {
	                res.writeHead(500);
	                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
	                res.end();
	            }
	        }
	        else {
	            res.writeHead(200, { 'Content-Type': contentType });
	            res.end(content, 'utf-8');
	        }
	    });

	
/*
		fs.readFile(pagina,
		 (err, data)=>{

			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.write("404 Not Found");
			}
			
			res.writeHead(200,{'Content-Type': 'text/html'});
			res.write(data, "utf-8")				
			res.end()
		});
*/
		
	/*
	res.writeHead(200, 
		{'Content-Type': 'text/html'}
	);
	res.write("ohhhh "+pagina+" bora trabalhar")	

	res.end()
	*/
})

servo.listen(8080, ()=>{
	console.log('rodou, mas q audacia desse filho da #@$*$_')
});
