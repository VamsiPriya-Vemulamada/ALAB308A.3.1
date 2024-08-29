// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}
const dataBaseName = await central(id);
  console.log(dataBaseName);

   // User's Basic information
  const UsersBasicInfo = await dbs[dataBaseName](id);
  console.log(UsersBasicInfo);
   //Step 3 access to vault an steal personal data
  const personalData = await vault(id);
  console.log(personalData);
  return {
    ...UsersBasicInfo,
    ...personalData,
  };


getUserData(6);

//Part 2 : The implementation

async function testingDatabaseId() {
  try {
    // Using Promise.all to test with different ids
    console.log("Doing testing for invalid database ids:");
    await Promise.all([
      getUserData(1).then(console.log).catch(console.error), // Valid ID
      getUserData(5).then(console.log).catch(console.error), // Valid ID
      getUserData(11).then(console.log).catch(console.error), // Invalid ID
      getUserData(0).then(console.log).catch(console.error), // Invalid ID
      getUserData("DB123").then(console.log).catch(console.error), // Invalid type
      getUserData(true).then(console.log).catch(console.error), // Invalid type
    ]);
  } catch (error) {
    console.error("Unexpected error during tests:", error);
  }
}

testingDatabaseId();