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
  
  const row = await db.queryDetail(
    `SELECT request_id, title, priority, description, address, name, surname, telephone, date  FROM repair_requests WHERE request_id=${id}`
  );

  return row;
}

// lista delle richieste ancora da approvare
async function approveRequest(id){
  
  const n = await db.update(
    `UPDATE repair_requests SET approved=1 WHERE request_id=${id}`
  );

  return n;
}


async function denyRequest(id){
  
  const n = await db.update(
    `UPDATE repair_requests SET approved=0 WHERE request_id=${id}`
  );

  return n;
}


module.exports = {
  getAllNewRepairRequests,
  getAllApprovedRepairRequests,
  getCompleteRepairRequest,
  denyRequest,
  approveRequest
}