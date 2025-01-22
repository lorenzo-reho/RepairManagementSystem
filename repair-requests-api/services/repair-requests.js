const db = require('./db');
const config = require('../config');

// lista delle richieste ancora da approvare
async function getAllNewRepairRequests(){
  
  const rows = await db.query(
    "SELECT request_id, title, priority, SUBSTR(`description`, 1, 40) AS description, address FROM repair_requests WHERE approved=0"
  );

  return rows;
}

async function getAllApprovedRepairRequests(){
  
  const rows = await db.query(
    "SELECT request_id, title, priority, SUBSTR(`description`, 1, 40) AS description, address FROM repair_requests WHERE approved=1"
  );

  return rows;
}


// lista delle richieste ancora da approvare
async function getCompleteRepairRequest(id){
  
  const row = await db.query(
    `SELECT request_id, title, priority, description, address, name, surname, telephone, date  FROM repair_requests WHERE request_id=${id}`
  );

  return row;
}



module.exports = {
  getAllNewRepairRequests,
  getAllApprovedRepairRequests,
  getCompleteRepairRequest
}