const express = require('express');
const router = express.Router();
const repairRequests = require('../services/repair-requests');

/* GET programming languages. */
router.get('/new', async function(req, res, next) {
  
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json(await repairRequests.getAllNewRepairRequests());
  } catch (err) {
    // console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.get('/approved', async function(req, res, next) {
  
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json(await repairRequests.getAllApprovedRepairRequests());
  } catch (err) {
    // console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json(await repairRequests.getCompleteRepairRequest(req.params.id));
  } catch (err) {
    // console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


module.exports = router;