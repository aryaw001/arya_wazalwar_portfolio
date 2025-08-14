import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from "@shared/schema";

// Load environment variables first
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?\n" +
    "Current .env contents:\n" +
    `DATABASE_URL=${process.env.DATABASE_URL || 'NOT SET'}`
  );
}

// Pass the DATABASE_URL string directly to createPool
export const pool = mysql.createPool(process.env.DATABASE_URL);

export const db = drizzle(pool, { schema, mode: 'default' });