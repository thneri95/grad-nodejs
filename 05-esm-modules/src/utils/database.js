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

// module.exports = {
//   connectToDatabase,
//   disconnectDatabase
// }
