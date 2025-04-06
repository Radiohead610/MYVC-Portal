const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const queryRoutes = require('./routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount the single API route
app.use('/api/query', queryRoutes);

app.get('/', (req, res) => {
    res.send('Backend API is running!');
});


const PORT = process.env.PORT || 8100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
