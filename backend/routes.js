const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', async (req, res) => {
    const { sql } = req.body;

    try {
        const results = await db.query(sql);
        res.json({ success: true, data: results });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
