const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	console.log("Create Server.");
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("Hello Server.");
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`[SUCCESS] Server running at http://${HOSTNAME}:${PORT}/`);
});