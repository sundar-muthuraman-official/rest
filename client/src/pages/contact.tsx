import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const extendedContactMessageSchema = insertContactMessageSchema.extend({
  phone: z.string().optional(),
});

type ContactMessageForm = z.infer<typeof extendedContactMessageSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactMessageForm>({
    resolver: zodResolver(extendedContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactMessageForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactMessageForm) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "51B First Floor Mission Street,\nPondicherry, India",
      testId: "contact-address"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      testId: "contact-phone"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@heartsandplates.com",
      testId: "contact-email"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Sunday\nLunch: 12:00 PM - 3:00 PM\nDinner: 7:00 PM - 11:00 PM",
      testId: "contact-hours"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", testId: "social-facebook" },
    { icon: Instagram, href: "#", testId: "social-instagram" },
    { icon: Twitter, href: "#", testId: "social-twitter" },
    { icon: Mail, href: "#", testId: "social-email" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-restaurant-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-restaurant-primary mb-4" data-testid="contact-page-title">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="contact-page-subtitle">
            Visit us or get in touch for reservations and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-testid="contact-info-section">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-restaurant-primary" data-testid="contact-info-title">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={info.testId}>
                    <div className="bg-restaurant-secondary text-white p-3 rounded-lg">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-restaurant-text-dark">{info.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-restaurant-primary" data-testid="social-media-title">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-restaurant-primary hover:bg-restaurant-secondary text-white p-3 rounded-lg transition duration-300"
                      data-testid={social.testId}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg" data-testid="contact-form">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-restaurant-primary">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} data-testid="input-contact-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} data-testid="input-contact-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email Address" {...field} data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" {...field} data-testid="input-contact-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5} 
                            placeholder="Your message..." 
                            {...field} 
                            data-testid="textarea-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-restaurant-secondary hover:bg-restaurant-highlight text-white py-3 font-semibold transition duration-300 transform hover:scale-105"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section (Optional - can be enhanced with actual map integration) */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-restaurant-primary text-center" data-testid="location-title">
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-restaurant-primary" size={32} />
                  <p className="text-gray-600">
                    51B First Floor Mission Street<br />
                    Pondicherry, India
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Map integration available upon request
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
