var http = require('http');
var url = require('url');
var fs = require('fs');

const servo =http.createServer(function (req, res) {
 // res.end();
})
servo.on('request',(req,res)=>{
const ps = fs.readdirSync("./paginas");
let pagina = "./paginas"+req.url;
console.log(pagina)
console.log(ps)

	if(req.url == "/"){
		pagina = pagina+"index.html";
		
	}

	
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
