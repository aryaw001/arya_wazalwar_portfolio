import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    file: File | null;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const formPayload = new FormData();
      formPayload.append("name", data.name);
      formPayload.append("email", data.email);
      formPayload.append("subject", data.subject);
      formPayload.append("message", data.message);
      if (data.file) {
        formPayload.append("file", data.file);
      }
      
      // v-- THE CHANGE IS HERE --v
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        body: formPayload,
      });
      // ^-- THE CHANGE IS HERE --^

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", file: null });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-red-100 text-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">Let's discuss opportunities and collaborations</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Email</h4>
                  <a href={`mailto:${personal.email}`} className="text-slate-600 hover:text-primary transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">LinkedIn</h4>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors">
                    Connect with me
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">GitHub</h4>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors">
                    View my repositories
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Location</h4>
                  <p className="text-slate-600">{personal.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full text-gray-900"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full text-gray-900"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full text-gray-900"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Your message..."
                    required
                    className="w-full resize-none text-gray-900"
                  />
                </div>
                <div>
                  <Label htmlFor="file" className="block text-sm font-semibold text-slate-700 mb-2">
                    Attach a file
                  </Label>
                  <Input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full text-gray-900"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary text-white py-3 px-6 font-semibold hover:bg-blue-700"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;