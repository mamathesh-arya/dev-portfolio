
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend API
    console.log("Form submission:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-portfolio-muted max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-light rounded-full text-portfolio-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-primary">Email</h4>
                  <a href="mailto:mamathesh333@gmail.com" className="text-portfolio-text hover:text-portfolio-accent transition-colors">
                    mamathesh333@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-light rounded-full text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-primary">Phone</h4>
                  <a href="tel:+917483071720"  className="text-portfolio-text hover:text-portfolio-accent transition-colors">
                    +91 7483071720
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-light rounded-full text-red-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-primary">Location</h4>
                  <p className="text-portfolio-text">
                    Bengaluru, Karnataka, India.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-portfolio-primary mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/mamathesh-mr/" target="_blank"
                  className="p-3 bg-portfolio-light rounded-full text-portfolio-LinkedIn hover:bg-portfolio-accent hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://github.com/mamathesh-arya" target="_blank" 
                  className="p-3 bg-portfolio-light rounded-full text-black hover:bg-portfolio-accent hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-5 w-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                {/* <a 
                  href="#" 
                  className="p-3 bg-portfolio-light rounded-full text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-1">
                    Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="border-portfolio-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-portfolio-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                    className="border-portfolio-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="min-h-[150px] border-portfolio-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-portfolio-accent hover:bg-portfolio-highlight text-white">
                  <Send size={16} className="mr-2" />
                  <span>Send Message</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
