const express = require('express');
const app = express();
const port = 5000; // Change this to the desired port number

// Define routes and middleware here (optional)
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});