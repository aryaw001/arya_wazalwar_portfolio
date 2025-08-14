import express from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

// Set up multer to save files in /uploads
const upload = multer({
  dest: path.join(process.cwd(), "uploads"),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB max
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", upload.single("file"), async (req, res) => {
    try {
      const { file } = req;
      const data = req.body;

      // Validate the form fields
      const validatedData = insertContactMessageSchema.parse({
        name: data.name?.toString(),
        email: data.email?.toString(),
        subject: data.subject?.toString(),
        message: data.message?.toString(),
        file_path: file ? file.path : undefined,
      });

      // Log what is being saved
      console.log("Saving message to DB:", validatedData);

      // Store in DB
      const message = await storage.createContactMessage(validatedData);

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: message.id,
      });
    } catch (error: unknown) {
      console.error("Error in /api/contact:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else if (error instanceof Error) {
        res.status(500).json({
          success: false,
          message: error.message || "Internal server error",
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets/AryaWazalwar_Resume.pdf");

      if (fs.existsSync(resumePath)) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'attachment; filename="AryaWazalwar_Resume.pdf"');
        const fileStream = fs.createReadStream(resumePath);
        fileStream.pipe(res);
      } else {
        res.status(404).json({
          success: false,
          message: "Resume file not found",
        });
      }
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({
        success: false,
        message: "Error downloading resume",
      });
    }
  });

  // Serve uploaded files publicly
  app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

  const httpServer = createServer(app);
  return httpServer;
} 