const server = require('./server')

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub
const PORT = 9090;
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
