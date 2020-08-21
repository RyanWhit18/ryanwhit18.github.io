const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/music', (req, res) => {
    res.render('music');
});

router.get('/videos', (req, res) => {
    res.render('videos');
});

router.get('/shop', (req, res) => {
    res.render('shop');
});

router.get('/gallery', (req, res) => {
    res.render('gallery');
});

router.get('/tour', (req, res) => {
    res.render('tour');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;