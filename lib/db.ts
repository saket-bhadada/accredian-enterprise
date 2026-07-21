import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

// ---------- Types ----------

export interface NewLead {
  name: string;
  email: string;
  company: string;
  team_size: string;
  message?: string | null;
  user_agent?: string | null;
  ip?: string | null;
}

export interface Lead extends NewLead {
  id: number;
  created_at: string;
}

// ---------- Database singleton ----------

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "leads.db");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

// Enable WAL mode for better concurrent read/write performance.
db.pragma("journal_mode = WAL");

// ---------- Migration ----------

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    email      TEXT NOT NULL,
    company    TEXT NOT NULL,
    team_size  TEXT NOT NULL,
    message    TEXT,
    created_at TEXT NOT NULL,
    user_agent TEXT,
    ip         TEXT
  );
`);

// ---------- Prepared statements ----------

const insertStmt = db.prepare<
  [string, string, string, string, string | null, string, string | null, string | null]
>(`
  INSERT INTO leads (name, email, company, team_size, message, created_at, user_agent, ip)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const listStmt = db.prepare("SELECT * FROM leads ORDER BY id DESC");

// ---------- Public API ----------

export function insertLead(input: NewLead): Lead {
  const created_at = new Date().toISOString();
  const info = insertStmt.run(
    input.name,
    input.email,
    input.company,
    input.team_size,
    input.message ?? null,
    created_at,
    input.user_agent ?? null,
    input.ip ?? null
  );

  return {
    id: Number(info.lastInsertRowid),
    ...input,
    created_at,
  };
}

export function listLeads(): Lead[] {
  return listStmt.all() as Lead[];
}
