import sqlite3 from "sqlite3"; // SQLite3 driver
import { open } from "sqlite"; // Helper for async SQLite operations

// Function to open the database
export async function openDb() {
  return open({
    filename: "./auth.db", // Path to SQLite file
    driver: sqlite3.Database, // Specify SQLite driver
  });
}

// Initialize the database with a users table
async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);
  console.log("Users table created");
}

initDb();

export async function addUser(name: string, email: string) {
  const db = await openDb();
  await db.run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    [name, email]
  );
  console.log("User added:", name);
}

export async function getUsers() {
  const db = await openDb();
  const users = await db.all(`SELECT * FROM users`);
  return users;
}

async function testDb() {
  await addUser("Magda Jadach", "magdalena.jadach@gmail.com");
  const users = await getUsers();
  console.log(users);
}

testDb();
