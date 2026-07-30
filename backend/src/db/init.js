import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "../config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        const sql = fs.readFileSync(
            path.join(__dirname, "schema.sql"),
            "utf8"
        );

        console.log("Applying Schema...");
        await pool.query(sql);
        console.log("✅ Schema Applied Successfully.");
    } catch (err) {
        console.error("❌ Failed To Apply Schema:", err.message);
        process.exitCode = 1;
    } finally {
        await pool.end();
    }
})();
