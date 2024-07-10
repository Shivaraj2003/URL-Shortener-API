const express = require("express");
const mongoose = require("mongoose");
const {getUrls,handleURLShortening, renderUrls} = require('../controller/url')

const router = express.Router();

router.get('/',getUrls);

router.get('/:shortId',renderUrls);

router.post('/',handleURLShortening);

module.exports= router;