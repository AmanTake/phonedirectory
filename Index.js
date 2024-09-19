const express = require('express');
const db = require('./dbconnect');
const app = express();
const UserRouters = require('./Routers/UserRoutes');
const ContactRouters = require('./Routers/ContactRoutes')
const GroupRouters = require('./Routers/GroupRouters')
const bodyParser = require('body-parser')
const cors = require('cors');
// const { AddContact } = require('./Controllers/ContactController');

db('mongodb://localhost:27017/Phone_book')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use((cors()));
app.use('/users',UserRouters)
app.use('/api',ContactRouters)
app.use('/group',GroupRouters)

app.listen(5000,()=>{console.log("Server Started Happy Heacking")})