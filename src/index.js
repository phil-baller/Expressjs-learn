const express = require('express')
const cors = require('cors')

const groceriesRouter = require('./routes/groceries');
const marketRouter = require('./routes/markets');
const taskRouter = require('./routes/tasks');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = 3001;

app.use(cors());
app.use('/api', groceriesRouter);
app.use('/api/markets', marketRouter);
app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


