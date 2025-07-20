import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      name: "Lagos-Calabar Coastal Highway",
      location: "Lagos to Cross River",
      budget: "15.6 trillion",
      startDate: "2024",
      expectedCompletion: "2030",
      status: "ongoing",
      progress: 15,
      description: "700km superhighway connecting Lagos to Calabar with economic zones",
      currentAdmin: "Bola Tinubu",
      category: "Infrastructure"
    },
    {
      id: 2,
      name: "Abuja Light Rail Phase 2",
      location: "Federal Capital Territory",
      budget: "2.8 trillion",
      startDate: "2018",
      expectedCompletion: "2025",
      status: "delayed",
      progress: 65,
      description: "Extension of Abuja metro rail system to outer districts",
      currentAdmin: "Bola Tinubu",
      category: "Transportation"
    },
    {
      id: 3,
      name: "Mambilla Hydroelectric Power Project",
      location: "Taraba State",
      budget: "5.8 trillion", 
      startDate: "2017",
      expectedCompletion: "2030",
      status: "ongoing",
      progress: 25,
      description: "3,050MW hydroelectric power plant to boost national grid",
      currentAdmin: "Muhammadu Buhari",
      category: "Energy"
    },
    {
      id: 4,
      name: "Ajaokuta Steel Complex Revival",
      location: "Kogi State",
      budget: "12.0 trillion",
      startDate: "1979",
      expectedCompletion: "Abandoned",
      status: "abandoned",
      progress: 85,
      description: "Steel production complex that was never commissioned despite near completion",
      currentAdmin: "Multiple Administrations",
      category: "Industry"
    },
    {
      id: 5,
      name: "Second Niger Bridge",
      location: "Anambra/Delta States",
      budget: "2.0 trillion",
      startDate: "2018",
      expectedCompletion: "2023",
      status: "completed",
      progress: 100,
      description: "1.6km bridge reducing traffic on the original Niger Bridge",
      currentAdmin: "Muhammadu Buhari",
      category: "Infrastructure"
    },
    {
      id: 6,
      name: "Kaduna-Kano Railway Modernization",
      location: "Kaduna to Kano",
      budget: "3.5 trillion",
      startDate: "2020",
      expectedCompletion: "2026",
      status: "ongoing",
      progress: 40,
      description: "Standard gauge railway connecting northern commercial centers",
      currentAdmin: "Muhammadu Buhari",
      category: "Transportation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-vote-yes";
      case "ongoing": return "text-primary";
      case "delayed": return "text-news-trending";
      case "abandoned": return "text-vote-no";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "ongoing": return <Clock className="h-4 w-4" />;
      case "delayed": return <AlertTriangle className="h-4 w-4" />;
      case "abandoned": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.status === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusCounts = {
    all: projects.length,
    ongoing: projects.filter(p => p.status === "ongoing").length,
    completed: projects.filter(p => p.status === "completed").length,
    delayed: projects.filter(p => p.status === "delayed").length,
    abandoned: projects.filter(p => p.status === "abandoned").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="bg-primary text-white">
              Project Tracker
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nation's Projects Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the progress of major infrastructure and development projects across Nigeria. 
            Monitor ongoing initiatives and assess completed, delayed, or abandoned projects.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(statusCounts).map(([status, count]) => (
            <Card 
              key={status}
              className={`cursor-pointer transition-all duration-200 ${
                filter === status ? 'ring-2 ring-primary shadow-elevated' : 'hover:shadow-card'
              }`}
              onClick={() => setFilter(status)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">{count}</div>
                <div className="text-sm text-muted-foreground capitalize">{status}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColor(project.status)} border-current`}
                  >
                    <span className="flex items-center gap-1">
                      {getStatusIcon(project.status)}
                      {project.status}
                    </span>
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>₦{project.budget}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{project.startDate} - {project.expectedCompletion}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Current Admin:</span> {project.currentAdmin}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;