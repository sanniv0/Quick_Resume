// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  resumes;
  currentUserId;
  currentResumeId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.resumes = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentResumeId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getResume(id) {
    return this.resumes.get(id);
  }
  async createResume(insertResume) {
    const id = this.currentResumeId++;
    const now = /* @__PURE__ */ new Date();
    const resume = {
      ...insertResume,
      id,
      createdAt: now,
      updatedAt: now,
      template: insertResume.template || "classic",
      colorScheme: insertResume.colorScheme || "primary",
      fontStyle: insertResume.fontStyle || "Inter"
    };
    this.resumes.set(id, resume);
    return resume;
  }
  async updateResume(id, updateData) {
    const existingResume = this.resumes.get(id);
    if (!existingResume) {
      return void 0;
    }
    const updatedResume = {
      ...existingResume,
      ...updateData,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.resumes.set(id, updatedResume);
    return updatedResume;
  }
  async deleteResume(id) {
    return this.resumes.delete(id);
  }
  async listResumes() {
    return Array.from(this.resumes.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var resumes = pgTable("resumes", {
  id: serial("id").primaryKey(),
  personalInfo: jsonb("personal_info").notNull(),
  experience: jsonb("experience").notNull(),
  education: jsonb("education").notNull(),
  skills: jsonb("skills").notNull(),
  certifications: jsonb("certifications").notNull(),
  projects: jsonb("projects").notNull(),
  template: text("template").notNull().default("classic"),
  colorScheme: text("color_scheme").notNull().default("primary"),
  fontStyle: text("font_style").notNull().default("Inter"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  summary: z.string().optional()
});
var experienceItemSchema = z.object({
  id: z.string(),
  jobTitle: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  location: z.string().optional(),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().optional()
});
var educationItemSchema = z.object({
  id: z.string(),
  institution: z.string().min(1, "Institution name is required"),
  degree: z.string().min(1, "Degree is required"),
  field: z.string().optional(),
  location: z.string().optional(),
  graduationDate: z.string().optional(),
  gpa: z.string().optional()
});
var skillsSchema = z.object({
  technical: z.array(z.string()).default([]),
  soft: z.array(z.string()).default([]),
  languages: z.array(z.string()).default([])
});
var certificationItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Certification name is required"),
  issuer: z.string().min(1, "Issuing organization is required"),
  issueDate: z.string().optional(),
  expiryDate: z.string().optional(),
  credentialId: z.string().optional(),
  credentialUrl: z.string().optional()
});
var projectItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  url: z.string().optional(),
  githubUrl: z.string().optional()
});
var insertResumeSchema = createInsertSchema(resumes).extend({
  personalInfo: personalInfoSchema,
  experience: z.array(experienceItemSchema),
  education: z.array(educationItemSchema),
  skills: skillsSchema,
  certifications: z.array(certificationItemSchema),
  projects: z.array(projectItemSchema)
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/resumes", async (req, res) => {
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
  app2.get("/api/resumes/:id", async (req, res) => {
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
  app2.put("/api/resumes/:id", async (req, res) => {
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
  app2.delete("/api/resumes/:id", async (req, res) => {
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
  app2.get("/api/resumes", async (req, res) => {
    try {
      const resumes2 = await storage.listResumes();
      res.json(resumes2);
    } catch (error) {
      res.status(500).json({
        message: error instanceof Error ? error.message : "Failed to fetch resumes"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  base: process.env.NODE_ENV === "production" ? "/" : process.env.VITE_BASE_PATH || "/Quick_Resume",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "..", "client", "dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
