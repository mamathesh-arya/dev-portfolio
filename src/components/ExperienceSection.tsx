
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

const experience: ExperienceItem = {
  title: "Salesforce Developer",
  company: "Shrum Tech",
  period: "April 2023 - Present",
  description: "Description of your role and responsibilities. Include key projects you worked on, challenges you overcame, and significant achievements or contributions you made.",
  skills: ["LWC", "Apex", "Integration","Automation"]
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary">Career Journey</h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-portfolio-muted max-w-3xl mx-auto">
            My professional path and key role that has shaped my career.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={20} className="text-portfolio-accent" />
              <h3 className="text-xl font-semibold text-portfolio-primary font-outfit">{experience.title}</h3>
            </div>
            
            <div className="mb-4">
              <div className="font-medium text-portfolio-primary">{experience.company}</div>
              <div className="text-sm text-portfolio-muted">{experience.period}</div>
            </div>
            
            <p className="text-portfolio-text mb-6">
              {experience.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <Badge 
                  key={i} 
                  className="bg-portfolio-light text-portfolio-primary hover:bg-portfolio-accent hover:text-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

