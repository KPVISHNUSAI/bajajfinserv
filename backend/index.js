const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://kpvishnusai1111:finserv1234@cluster0.2leb6w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
