const { Router } = require('express')
const express = require('express');
const router = Router();

router.use(express.json());
router.use(express.urlencoded());

const groceryList = [
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
]

//Get all groceries
router.get('/groceries', (req, res) => {
    res.cookie('Visited', true, { maxAge: 60000, });
    res.send(groceryList);
});

//Get a single grocery item 
router.get('/groceries/:item', (req, res) => {
    console.log(req.cookies)
    const { item } = req.params;
    const groceryItem = groceryList.find((grocery) => grocery.item === item);
    res.send(groceryItem);
})

//Get grocery body
router.post('/groceries', (req, res) => {
    console.log(req.body);
    res.send(201)
})

router.get('/shopping/cart', (req, res) => { })

router.post('/shopping/cart/item', (req, res) => {
    const { item, quantity } = req.body;
    const cartItem = { item, quantity };
    const cart = req.session;
    if (cart) {
        req.session.cart.items.push(cartItem);
    } else {
        req.session.cart = {
            items: [cartItem],
        };
    }
    res.send(201);
})


module.exports = router;