var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sqlite3 from "sqlite3"; // SQLite3 driver
import { open } from "sqlite"; // Helper for async SQLite operations
// Function to open the database
export function openDb() {
    return __awaiter(this, void 0, void 0, function* () {
        return open({
            filename: "./auth.db", // Path to SQLite file
            driver: sqlite3.Database, // Specify SQLite driver
        });
    });
}
// Initialize the database with a users table
function initDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield openDb();
        yield db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);
        console.log("Users table created");
    });
}
initDb();
