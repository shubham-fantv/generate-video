import { openDB } from "idb";

const DB_NAME = "MoonFightTech";
const DB_VERSION = 1;
const STORE_NAME = "user";

const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "_id" });
      }
    },
  });
};

/**
 * Save user data to IndexedDB
 * @param {Object} userData - The user data object
 */
export const saveUserData = async (userData) => {
  try {
    const db = await initDB();
    // Assuming userData has a unique '_id' field
    await db.put(STORE_NAME, userData); // Use _id as the key
  } catch (error) {
    console.error("Error saving user data:", error);
    // Optionally, you can throw the error again or handle it differently
    throw error; // Rethrow if you want to propagate the error
  }
};


/**
 * Retrieve user data from IndexedDB
 * @returns {Object|null} - The user data object or null if not found
 */
export const getUserData = async (id) => {
  const db = await initDB();
  // Assuming the user ID is known, e.g., 1
  return db.get(STORE_NAME, id);
};
