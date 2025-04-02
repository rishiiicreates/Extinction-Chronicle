import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// API Routes for endangered species data and conservation information
export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);
  
  // Get all endangered animals
  app.get("/api/animals", (req, res) => {
    // In a real app, this would fetch from a database
    // For our purpose, we'll use static data from the client side
    res.json({ message: "Data is provided on the client to minimize API calls" });
  });
  
  // Get conservation projects
  app.get("/api/conservation-projects", (req, res) => {
    res.json({ message: "Conservation data is provided on the client to minimize API calls" });
  });
  
  // Newsletter signup endpoint
  app.post("/api/newsletter/signup", (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: "Valid email address is required" });
    }
    
    // In a real app, this would save to a database
    // Here we'll just return success
    res.status(200).json({ 
      message: "Thank you for joining our conservation initiative! We'll keep you updated on conservation efforts.",
      email
    });
  });

  return httpServer;
}
