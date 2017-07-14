const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);

// Port
const port = process.env.PORT || 3001;

// Static files
app.use(express.static('client/build'));

// Parse JSON body
app.use(bodyParser.json())

// Health
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok'
  });
});

app.get('*', (req, res) => {
  res.sendfile(__dirname + '/client/build/index.html');
});

// Create the server
http.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port);
});
