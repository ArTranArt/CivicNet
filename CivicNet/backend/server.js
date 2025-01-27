const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('frontend'));
app.use(express.json());

app.get('/api/proposals', (req, res) => {
  res.json({ proposals: [] });
});

app.post('/api/proposals', (req, res) => {
  const { title, description } = req.body;
  // Save proposal to a database (mocked here)
  console.log(`New Proposal: ${title} - ${description}`);
  res.status(201).json({ message: 'Proposal submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
