const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');

//ALL ROUTES
const userRoutes = require('./routes/user.routes');
const doctorRoutes = require('./routes/doctor.routes');
const messageRoutes = require('./routes/message.routes');
const medicalReportRoutes = require('./routes/medicalReport.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('hello world');
});


app.use('/users', userRoutes);
app.use('/doctors', doctorRoutes);
app.use('/messages', messageRoutes);
app.use('/medical-reports', medicalReportRoutes);

module.exports = app;