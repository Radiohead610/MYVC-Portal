const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', async (req, res) => {
    const { sql } = req.body;

    try {
        const [rows, fields] = await db.query(sql);
        const isSelect = sql.trim().toLowerCase().startsWith('select');

        res.json({
            success: true,
            data: isSelect ? rows : {
                message: 'Query executed successfully',
                affectedRows: rows.affectedRows,
                insertId: rows.insertId,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
