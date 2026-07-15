const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

async function connectToDatabase(dataName) {
  // Connection logic here

  console.log(`connected to the database ${dataName}`);
}

async function disconnectDatabase() {
  console.log("disconnecting from the database");
}

export { connectToDatabase, disconnectDatabase, databaseType };

// other way to export for CommonJS
// module.exports = {
//   connectToDatabase,
//   disconnectDatabase
// }
