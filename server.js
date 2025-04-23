const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/save-location', (req, res) => {
  const { latitude, longitude, id } = req.body;
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const log = `ID: ${id} | Location: ${mapLink}\n`;
  fs.appendFileSync('locations.txt', log);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
