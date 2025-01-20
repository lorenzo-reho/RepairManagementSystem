const db = require('./db');
const config = require('../config');

// lista delle richieste ancora da approvare
async function getAllRepairRequests(){
  
  const rows = await db.query(
    "SELECT request_id, title, priority, SUBSTR(`description`, 1, 40) AS description, address FROM repair_requests"
  );

  return rows;
}

module.exports = {
  getAllRepairRequests
}