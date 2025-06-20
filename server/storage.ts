import { users, resumes, type User, type InsertUser, type Resume, type InsertResume } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getResume(id: number): Promise<Resume | undefined>;
  createResume(resume: InsertResume): Promise<Resume>;
  updateResume(id: number, resume: Partial<InsertResume>): Promise<Resume | undefined>;
  deleteResume(id: number): Promise<boolean>;
  listResumes(): Promise<Resume[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private resumes: Map<number, Resume>;
  private currentUserId: number;
  private currentResumeId: number;

  constructor() {
    this.users = new Map();
    this.resumes = new Map();
    this.currentUserId = 1;
    this.currentResumeId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getResume(id: number): Promise<Resume | undefined> {
    return this.resumes.get(id);
  }

  async createResume(insertResume: InsertResume): Promise<Resume> {
    const id = this.currentResumeId++;
    const now = new Date();
    const resume: Resume = { 
      ...insertResume,
      id,
      createdAt: now,
      updatedAt: now,
      template: insertResume.template || "classic",
      colorScheme: insertResume.colorScheme || "primary", 
      fontStyle: insertResume.fontStyle || "Inter",
    };
    this.resumes.set(id, resume);
    return resume;
  }

  async updateResume(id: number, updateData: Partial<InsertResume>): Promise<Resume | undefined> {
    const existingResume = this.resumes.get(id);
    if (!existingResume) {
      return undefined;
    }

    const updatedResume: Resume = {
      ...existingResume,
      ...updateData,
      updatedAt: new Date(),
    };
    
    this.resumes.set(id, updatedResume);
    return updatedResume;
  }

  async deleteResume(id: number): Promise<boolean> {
    return this.resumes.delete(id);
  }

  async listResumes(): Promise<Resume[]> {
    return Array.from(this.resumes.values());
  }
}

export const storage = new MemStorage();
