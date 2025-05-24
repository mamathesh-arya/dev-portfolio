
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
// import myImage from 'E:/protfolioImage2.png';

 const MyBackgroundImage = () =>{
    const imageUrl = "https://res.cloudinary.com/dw3un4hex/image/upload/v1748058171/protfolioImage_juenk2.png";
    return <img src={imageUrl} alt="My Background image"/>;
  };

export default function HeroSection() {
  const [showColorChange, setShowColorChange] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowColorChange(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

 

  return (
    <section id="top" className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-portfolio-light via-white to-portfolio-light">
      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl  duration-1000 ${showColorChange ? ' text-portfolio-shadowShow' : 'text-portfolio-primary'} mb-4 leading-tight animate-fade-in `} style={{ animationDelay: '0.2s' }}>
            {/* Hi, I'm <span className="text-portfolio-accent font-outfit gradient-text-hover">Mamathesh</span> */}
            Hi, I'm <span className={`transition-colors duration-1000 font-outfit ${showColorChange ? 'gradient-text-hover' : 'text-portfolio-accent'}`}>Mamathesh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-secondary mb-6 animate-fade-in font-notoSans" style={{ animationDelay: '0.4s' }}>
            Salesforce Developer
          </h2>
          <p className="text-lg text-portfolio-text mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          I aspire to contribute the tech industry by creating transformative software solutions  : )
         <p className="mt-2"> Welcome to my professional portfolio where I showcase my journey, skills, and achievements.</p>
          </p>
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button asChild className="bg-portfolio-accent hover:bg-portfolio-highlight text-white px-6 hover:scale-105 transition-transform">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 hover:scale-105 transition-transform hover">
              <a href="#about">View My Work</a>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2  hover:scale-105 transition-transform duration-300 ">
            {/* Replace with your actual headshot */}
            <div className="absolute inset-0 bg-portfolio-light flex items-center justify-center text-lg font-medium text-portfolio-muted">
           <MyBackgroundImage/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a 
          href="#about" 
          className="animate-bounce p-2 rounded-full border border-portfolio-muted text-portfolio-muted hover:border-portfolio-accent hover:text-portfolio-accent transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
