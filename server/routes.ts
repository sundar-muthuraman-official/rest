import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTableReservationSchema, insertPartyBookingSchema, insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Table Reservations
  app.post("/api/reservations", async (req, res) => {
    try {
      const data = insertTableReservationSchema.parse(req.body);
      const reservation = await storage.createTableReservation(data);
      res.json(reservation);
    } catch (error) {
      res.status(400).json({ message: "Invalid reservation data", error });
    }
  });

  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getTableReservations();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reservations", error });
    }
  });

  // Party Bookings
  app.post("/api/party-bookings", async (req, res) => {
    try {
      const data = insertPartyBookingSchema.parse(req.body);
      const booking = await storage.createPartyBooking(data);
      res.json(booking);
    } catch (error) {
      res.status(400).json({ message: "Invalid party booking data", error });
    }
  });

  app.get("/api/party-bookings", async (req, res) => {
    try {
      const bookings = await storage.getPartyBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch party bookings", error });
    }
  });

  // Contact Messages
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact message data", error });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact messages", error });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
