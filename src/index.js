const express = require('express')

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get('/groceries', (req, res) => {
    res.send([
        {
            item: 'Milk',
            quantity: 2,
        },
        {
            item: 'Eggs',
            quantity: 12,
        },
        {
            item: 'Bread',
            quantity: 3,
        },
        {
            item: 'Cheese',
            quantity: 1,
        },
    ])
})