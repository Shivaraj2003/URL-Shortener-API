const short = require('short-uuid');
const URL = require('../models/url');

async function getUrls(req, res) {
    try {
        const urls = await URL.find();
        return res.status(200).json({

            data: urls,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

async function handleURLShortening(req, res) {
    const shortID = short.generate();
    const body = req.body;
    if (!body.url) {
        return res.status(400).json('Url is required');
    }
    await URL.create(
        {
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: []
        }
    );

    return res.json({ id: shortID });
}

async function renderUrls(req, res) {
    const shortID = req.params.shortId;
    console.log(shortID);
    const entry = await URL.find(
        {
        shortId:shortID
         });
        
console.log(entry); 

return res.redirect(entry.redirectURL)

}

module.exports = { getUrls, handleURLShortening, renderUrls };