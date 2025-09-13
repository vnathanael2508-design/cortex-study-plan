import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, BarChart3, FileText } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Processing",
      description: "Upload and analyze study materials with AI"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Smart Assessments", 
      description: "Auto-generate quizzes from your content"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Progress Analytics",
      description: "Track learning with detailed insights"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Personalized Study",
      description: "AI-driven recommendations for optimal learning"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Adaptive Learning
                </span>
                <br />
                <span className="text-foreground">Platform</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform your study experience with AI-powered document processing, 
                automated assessments, and personalized learning recommendations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 hover:scale-105"
              >
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-primary/5 transition-all duration-300"
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-card hover:shadow-primary transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Students using adaptive learning platform"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;