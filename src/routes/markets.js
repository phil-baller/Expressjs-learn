const { Router } = require('express');

const router = Router();

const marketist = [
    {
        id: 2,
        name: 'Walmart',
        miles: 0.6,
    },
    {
        id: 2,
        name: 'Target',
        miles: 4.5,
    },
    {
        id: 3,
        name: 'Costco',
        miles: 2.8,
    },
    {
        id: 4,
        name: 'Safeway',
        miles: 5.3,
    },
    {
        id: 5,
        name: 'Whole Foods',
        miles: 0.8,
    }
]

router.get('/', (req, res) => {
    const { miles } = req.query;
    const parsedMiles = parseInt(miles);
    if (!isNaN(parsedMiles)) {
        const filteredMarkets = marketist.filter((market) => market.miles <= parsedMiles);
        res.send(filteredMarkets);
    } else {
        res.send(marketist);
    }
    console.log(req.query)
})

module.exports = router;