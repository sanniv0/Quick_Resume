import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertResumeSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume routes
  app.post("/api/resumes", async (req, res) => {
    try {
      const validatedData = insertResumeSchema.parse(req.body);
      const resume = await storage.createResume(validatedData);
      res.json(resume);
    } catch (error) {
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid resume data" 
      });
    }
  });

  app.get("/api/resumes/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const resume = await storage.getResume(id);
      
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      
      res.json(resume);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to fetch resume" 
      });
    }
  });

  app.put("/api/resumes/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertResumeSchema.partial().parse(req.body);
      const resume = await storage.updateResume(id, validatedData);
      
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      
      res.json(resume);
    } catch (error) {
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid resume data" 
      });
    }
  });

  app.delete("/api/resumes/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteResume(id);
      
      if (!success) {
        return res.status(404).json({ message: "Resume not found" });
      }
      
      res.json({ message: "Resume deleted successfully" });
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to delete resume" 
      });
    }
  });

  app.get("/api/resumes", async (req, res) => {
    try {
      const resumes = await storage.listResumes();
      res.json(resumes);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to fetch resumes" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
