const path = require ('path');
const express = require ('express');
const dotenv = require ('dotenv');
const cors = require ('cors');
const connectDB = require('./config/db')


// load env vars

dotenv.config({path : './config/config.env'});

// Connect Db
connectDB();

const app = express();

//  body parser Middleware
app.use(express.json());

// Enable cors
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/v1/stores', require('./routes/stores'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );