
import { Progress } from "@/components/ui/progress";

type SkillCategory = {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Technical Skills",
    skills: [
      { name: "Skill 1", level: 90 },
      { name: "Skill 2", level: 85 },
      { name: "Skill 3", level: 80 },
      { name: "Skill 4", level: 75 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Teamwork", level: 95 }
    ]
  },

];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-portfolio-muted max-w-3xl mx-auto">
            A comprehensive overview of my professional capabilities and expertise.
          </p>
        </div>

       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-portfolio-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold font-outfit text-portfolio-primary mb-6 pb-2 border-b border-portfolio-muted">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 mr-4">Salesforce Dev & Admin</span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300 mr-4">LWC</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 mr-4">Apex</span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300 mr-4">Javascript</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 mr-4">SLDS</span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">REST API</span>
              </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">
                Integration
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                SFDX
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                Python
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">
                Git
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                JIRA
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">
                Azure ADO
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                Node.js
              </span>
            </div>


          <div className="mt-2 flex-wrap gap-2" >
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">Windows</span>
          <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300 mr-4">Linux</span>
          </div>
          </div>
          <div className="bg-portfolio-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold font-outfit text-portfolio-primary mb-6 pb-2 border-b border-portfolio-muted">
                Soft Skills
              </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 mr-4">
                <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500 mr-1"></span>Communication</span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 mr-4">
                <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500 mr-1"></span>Time Management</span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 mr-4">
                <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500 mr-1"></span>Self-Starter Attitude</span>
            </div>
            <div className=" flex flex-wrap gap-2 mt-2">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 mr-4">
            <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500 mr-1"></span>Team Player</span>
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 mr-4">
                <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500 mr-1"></span>Continuous Learning & Self-Improvement</span>
              
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 mr-4">
            <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500 mr-1"></span>Adaptability to New Technologies</span>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
}
