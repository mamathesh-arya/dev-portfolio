
import { Linkedin, Github, Twitter, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">My Portfolio</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Thank you for visiting my professional portfolio. Connect with me on 
              social media and let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mamathesh-mr/" target="_blank"
                className="p-2 bg-white/10 rounded-full hover:bg-portfolio-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/mamathesh-arya" target="_blank"
                className="p-2 bg-white/10 rounded-full hover:bg-portfolio-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              {/* <a 
                href="#" 
                className="p-2 bg-white/10 rounded-full hover:bg-portfolio-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
              <a 
                href="mailto:mamathesh333@gmail.com" 
                className="p-2 bg-white/10 rounded-full hover:bg-portfolio-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
            <ul className="space-y-2 space-x-2 grid grid-cols-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors ml-2">About Me</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">My Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              </li>
              {/* <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              </li> */}
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:mamathesh333@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  mamathesh333@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-300">
                  Bengaluru, Karnataka, India.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" className="border-gray-300 text-gray-300 hover:bg-portfolio-accent hover:border-portfolio-accent hover:text-white">
                <a href="https://drive.google.com/file/d/18XCyyPnKNlw9pPI3x9GrFgCmk6-kO9Z1/view" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <FileText size={16} />
                  <span className="text-gray-600">Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
          
         
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} ACT Unites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
