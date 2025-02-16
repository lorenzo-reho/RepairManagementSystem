/*Contiene tutte le informazioni di configurazione riguardanti il nostro DB*/

const config = {
    db: {
      host: "192.168.1.176",
      user: "lorenzo1",
      password: "password123",
      database: "repairms",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };


  module.exports = config;