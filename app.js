const express = require('express');
const cors = require('cors');

const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/gifts', giftRoutes);

app.use('/api/gifts/search', searchRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

