import { type User, type InsertUser, type TableReservation, type InsertTableReservation, type PartyBooking, type InsertPartyBooking, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createTableReservation(reservation: InsertTableReservation): Promise<TableReservation>;
  getTableReservations(): Promise<TableReservation[]>;
  
  createPartyBooking(booking: InsertPartyBooking): Promise<PartyBooking>;
  getPartyBookings(): Promise<PartyBooking[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private tableReservations: Map<string, TableReservation>;
  private partyBookings: Map<string, PartyBooking>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.tableReservations = new Map();
    this.partyBookings = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTableReservation(insertReservation: InsertTableReservation): Promise<TableReservation> {
    const id = randomUUID();
    const reservation: TableReservation = {
      ...insertReservation,
      id,
      createdAt: new Date(),
      specialRequests: insertReservation.specialRequests || null,
    };
    this.tableReservations.set(id, reservation);
    return reservation;
  }

  async getTableReservations(): Promise<TableReservation[]> {
    return Array.from(this.tableReservations.values());
  }

  async createPartyBooking(insertBooking: InsertPartyBooking): Promise<PartyBooking> {
    const id = randomUUID();
    const booking: PartyBooking = {
      ...insertBooking,
      id,
      createdAt: new Date(),
    };
    this.partyBookings.set(id, booking);
    return booking;
  }

  async getPartyBookings(): Promise<PartyBooking[]> {
    return Array.from(this.partyBookings.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
      phone: insertMessage.phone || null,
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
