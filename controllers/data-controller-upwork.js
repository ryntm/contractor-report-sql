const upworkData = require('../models/UpworkData');
const express = require('express');
const router = express.Router();

router.get('/api/upwork-data/:year/:month', (req, res) => {
    
    upworkData.selectUpworkDataDegree(parseInt(req.params.year), parseInt(req.params.month), data => {
        res.json(data);
    });
    
});

router.get('/api/upwork-data', (req, res) => {
    
    upworkData.selectAllUpworkData(data => {
        res.json(data);
    });

});



module.exports = router