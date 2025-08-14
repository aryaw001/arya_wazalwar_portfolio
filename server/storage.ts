import {
  users,
  contactMessages,
  type User,
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    await db.insert(users).values(insertUser);
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, insertUser.username));
    return user!;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    await db.insert(contactMessages).values(insertMessage);

    // Safely fetch the most recent message
    const [message] = await db
      .select()
      .from(contactMessages)
      .orderBy(desc(contactMessages.id))
      .limit(1);

    return message!;
  }
}

export const storage = new DatabaseStorage();
