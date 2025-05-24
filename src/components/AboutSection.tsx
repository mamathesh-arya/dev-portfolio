
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-portfolio-muted max-w-3xl mx-auto">
            Know about my background, interests, and what drives me professionally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div>
            <h3 className="text-3xl  text-portfolio-primary mb-4 font-pangolin">My Career Journey</h3>
            <p className="text-portfolio-text mb-4">
            As a Salesforce developer with 2+ year of experience, I've cultivated a deep passion for creating tailored solutions on the world's <b>#1 CRM platform.</b> 
            <p className="mt-2">My journey in this field began with an entry-level position where I was first introduced to Salesforce. 
            Since then, I've progressed through various roles, working on a multitude of projects that have allowed me to specialize in coding and configuring Salesforce applications, with a focus on customizing and enhancing solutions using Apex, LWC, SOQL, and Integrations.</p>
            </p>
            <p className="text-portfolio-text mb-4">
            I believe in continuous learning and growth, which has led me through various challenges 
            and opportunities that have shaped my professional perspective and expertise over these 2+ years.
            </p>

            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-accent hover:bg-portfolio-highlight text-white flex items-center gap-2">
                <a href="https://drive.google.com/file/d/18XCyyPnKNlw9pPI3x9GrFgCmk6-kO9Z1/view" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} />
                  <span>Download Resume</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white">
                <a href="#skills">My Skills</a>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-portfolio-light p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-pangolin text-portfolio-primary mb-6 ">Key Achievements</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-portfolio-accent pl-4 py-2">
                  <h4 className="text-lg font-medium text-portfolio-primary font-kanchenjunga-medium ">Large Scale Data & File Migration</h4>
                  <p className="text-portfolio-text mt-2">
                  Awarded for leading migration of <b>200K+</b> data records and <b>1TB</b> files between Salesforce orgs.
                  </p>
                </div>
                
                <div className="border-l-4 border-portfolio-accent pl-4 py-2">
                  <h4 className="text-lg font-medium text-portfolio-primary font-kanchenjunga-medium">Community Portal Re-engineering</h4>
                  <p className="text-portfolio-text mt-2">
                  Recognized as a key player in transforming Visualforce community portal to LWC, designing reusable components.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
