// const http = require('http');
const fastify = require('fastify');
const dotenv = require('dotenv');

dotenv.config();

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = 3000;

let result;

const app = fastify({
	logger: true
});

// app.get('/', async(request, response) => {
// 	response.send(result);
// });

// app.post('/users', async(request, response) => {
// 	console.log(`Request: ${request.body}`);
// 	const data = request.body;
// 	result = {...data};
// 	response.send(result);
// });

const usersRoute = {
	method: "POST",
	url: "/users",
	schema: {
		body: {
			username: {
				type: "string"
			},
			password: {
				type: "string"
			}
		},
		response: {
			200: {
				type: 'object',
				properties: {
					userID: {
						type: "string"
					},
					username: {
						type: "string"
					}
				}
			}
		}
	},
	handler: async(req, res) => {
		const requestBody = req.body;
		result = {...requestBody, isSuccess: true};
		res.send({...result, userID: "01"});
	}
};

app.route(usersRoute);

app.listen(PORT, HOSTNAME, () => {
	console.log(`[SUCCESS] Server is running at http://${HOSTNAME}:${PORT}`);
});
