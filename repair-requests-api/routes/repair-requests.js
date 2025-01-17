const express = require('express');
const router = express.Router();
const repairRequests = require('../services/repair-requests');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await repairRequests.getAllRepairRequests());
  } catch (err) {
    // console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;