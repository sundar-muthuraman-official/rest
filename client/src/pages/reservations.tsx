import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertTableReservationSchema, insertPartyBookingSchema } from "@shared/schema";
import { Info, Calendar, Users } from "lucide-react";

const extendedTableReservationSchema = insertTableReservationSchema.extend({
  guests: z.coerce.number().min(1, "At least 1 guest required").max(20, "Maximum 20 guests"),
});

const extendedPartyBookingSchema = insertPartyBookingSchema.extend({
  guests: z.coerce.number().min(1, "At least 1 guest required").max(500, "Maximum 500 guests"),
});

type TableReservationForm = z.infer<typeof extendedTableReservationSchema>;
type PartyBookingForm = z.infer<typeof extendedPartyBookingSchema>;

export default function Reservations() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"table" | "party">("table");

  // Table Reservation Form
  const tableForm = useForm<TableReservationForm>({
    resolver: zodResolver(extendedTableReservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
      specialRequests: "",
    },
  });

  // Party Booking Form
  const partyForm = useForm<PartyBookingForm>({
    resolver: zodResolver(extendedPartyBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: 50,
      eventType: "",
      requirements: "",
    },
  });

  // Table Reservation Mutation
  const tableReservationMutation = useMutation({
    mutationFn: async (data: TableReservationForm) => {
      const response = await apiRequest("POST", "/api/reservations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Reservation Confirmed!",
        description: "Your table reservation has been successfully submitted. We'll contact you shortly to confirm.",
      });
      tableForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
    },
    onError: (error) => {
      toast({
        title: "Reservation Failed",
        description: error.message || "Failed to submit reservation. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Party Booking Mutation
  const partyBookingMutation = useMutation({
    mutationFn: async (data: PartyBookingForm) => {
      const response = await apiRequest("POST", "/api/party-bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Party Booking Request Submitted!",
        description: "Our manager will contact you soon to discuss pricing and finalize your booking.",
      });
      partyForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/party-bookings"] });
    },
    onError: (error) => {
      toast({
        title: "Booking Request Failed",
        description: error.message || "Failed to submit party booking request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onTableSubmit = (data: TableReservationForm) => {
    tableReservationMutation.mutate(data);
  };

  const onPartySubmit = (data: PartyBookingForm) => {
    partyBookingMutation.mutate(data);
  };

  // Get today's date for minimum date validation
  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    { value: "12:00", label: "12:00 PM" },
    { value: "12:30", label: "12:30 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "13:30", label: "1:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:30", label: "8:30 PM" },
    { value: "21:00", label: "9:00 PM" },
  ];

  const eventTypes = [
    { value: "birthday", label: "Birthday Party" },
    { value: "anniversary", label: "Anniversary" },
    { value: "corporate", label: "Corporate Event" },
    { value: "wedding", label: "Wedding Function" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-restaurant-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-restaurant-primary mb-4" data-testid="reservations-page-title">
            Reservations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="reservations-page-subtitle">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <Button
              onClick={() => setActiveTab("table")}
              variant={activeTab === "table" ? "default" : "ghost"}
              className={`mr-1 ${activeTab === "table" ? "bg-restaurant-primary text-white" : ""}`}
              data-testid="tab-table-reservation"
            >
              <Calendar className="mr-2" size={16} />
              Table Reservation
            </Button>
            <Button
              onClick={() => setActiveTab("party")}
              variant={activeTab === "party" ? "default" : "ghost"}
              className={`ml-1 ${activeTab === "party" ? "bg-restaurant-primary text-white" : ""}`}
              data-testid="tab-party-booking"
            >
              <Users className="mr-2" size={16} />
              Party Hall Booking
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === "table" ? (
            <Card className="shadow-lg" data-testid="table-reservation-form">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-restaurant-primary">
                  Table Reservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...tableForm}>
                  <form onSubmit={tableForm.handleSubmit(onTableSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={tableForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} data-testid="input-table-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={tableForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Phone Number" {...field} data-testid="input-table-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={tableForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Email Address" {...field} data-testid="input-table-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={tableForm.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="date" min={today} {...field} data-testid="input-table-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={tableForm.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-table-time">
                                  <SelectValue placeholder="Select Time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot.value} value={slot.value}>
                                    {slot.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={tableForm.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Guests</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="1" 
                                max="20"
                                placeholder="Number of guests" 
                                {...field} 
                                data-testid="input-table-guests" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={tableForm.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={3} 
                              placeholder="Any special requests or dietary requirements..." 
                              {...field}
                              value={field.value || ""}
                              data-testid="textarea-table-requests"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-restaurant-secondary hover:bg-restaurant-highlight text-white py-3 font-semibold transition duration-300 transform hover:scale-105"
                      disabled={tableReservationMutation.isPending}
                      data-testid="button-submit-table-reservation"
                    >
                      {tableReservationMutation.isPending ? "Submitting..." : "Reserve Table"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg" data-testid="party-booking-form">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-restaurant-primary">
                  Party Hall Booking
                </CardTitle>
                <div className="p-4 bg-restaurant-accent bg-opacity-20 rounded-lg">
                  <p className="text-sm text-restaurant-text-dark flex items-start">
                    <Info className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                    For party hall bookings, pricing will be discussed with our manager based on your requirements.
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...partyForm}>
                  <form onSubmit={partyForm.handleSubmit(onPartySubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={partyForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Contact Person Name" {...field} data-testid="input-party-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={partyForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Phone Number" {...field} data-testid="input-party-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={partyForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Email Address" {...field} data-testid="input-party-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={partyForm.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Date</FormLabel>
                            <FormControl>
                              <Input type="date" min={today} {...field} data-testid="input-party-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={partyForm.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expected Guests</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="1" 
                                max="500"
                                placeholder="Number of guests" 
                                {...field} 
                                data-testid="input-party-guests" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={partyForm.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-party-event-type">
                                <SelectValue placeholder="Select Event Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {eventTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={partyForm.control}
                      name="requirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requirements & Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Please describe your event requirements, preferred menu, decorations, etc." 
                              {...field} 
                              data-testid="textarea-party-requirements"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-restaurant-primary hover:bg-restaurant-text-dark text-white py-3 font-semibold transition duration-300 transform hover:scale-105"
                      disabled={partyBookingMutation.isPending}
                      data-testid="button-submit-party-booking"
                    >
                      {partyBookingMutation.isPending ? "Submitting..." : "Request Party Hall Booking"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
