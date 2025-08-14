import type { Express } from "express";
import express from "express"; // ✅ Fix for ReferenceError
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import path from "path";
import fs from "fs";


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  file_path: text("file_path"), // ✅ Added column for uploaded file
  createdAt: timestamp("created_at").defaultNow().notNull(),
  is_read: boolean("is_read").default(false), // optional, if needed
});

// Validation schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
  file_path: true, // ✅ Allow this optional field during insert
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
