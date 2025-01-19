const express = require('express');
const router = express.Router();
const repairRequests = require('../services/repair-requests');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json(await repairRequests.getAllRepairRequests());
  } catch (err) {
    // console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;