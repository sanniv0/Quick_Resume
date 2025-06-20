import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft, Eye, Download, Star } from "lucide-react";

export default function Examples() {
  const examples = [
    {
      id: 1,
      title: "Software Engineer",
      template: "Modern Creative",
      industry: "Technology",
      experience: "Mid-Level",
      description: "A clean, modern resume perfect for tech professionals highlighting coding skills and project experience.",
      skills: ["React", "Node.js", "Python", "AWS"],
      rating: 4.9,
      downloads: 1250
    },
    {
      id: 2,
      title: "Marketing Manager",
      template: "Classic Professional",
      industry: "Marketing",
      experience: "Senior",
      description: "Traditional format ideal for corporate marketing roles with emphasis on campaign results and ROI.",
      skills: ["Digital Marketing", "Analytics", "Leadership", "Strategy"],
      rating: 4.8,
      downloads: 980
    },
    {
      id: 3,
      title: "UX Designer",
      template: "Clean Minimalist",
      industry: "Design",
      experience: "Mid-Level",
      description: "Minimalist design that showcases creativity while maintaining professional appeal.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      rating: 4.9,
      downloads: 750
    },
    {
      id: 4,
      title: "Project Manager",
      template: "Executive Professional",
      industry: "Business",
      experience: "Senior",
      description: "Executive-level format perfect for senior management positions with focus on leadership achievements.",
      skills: ["Agile", "Stakeholder Management", "Budget Planning", "Team Leadership"],
      rating: 4.7,
      downloads: 620
    },
    {
      id: 5,
      title: "Data Scientist",
      template: "Modern Creative",
      industry: "Technology",
      experience: "Mid-Level",
      description: "Data-focused resume highlighting analytical skills, machine learning projects, and statistical expertise.",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      rating: 4.8,
      downloads: 890
    },
    {
      id: 6,
      title: "Sales Representative",
      template: "Classic Professional",
      industry: "Sales",
      experience: "Entry-Level",
      description: "Results-driven format emphasizing sales achievements, quotas exceeded, and relationship building.",
      skills: ["CRM", "Negotiation", "Lead Generation", "Customer Relations"],
      rating: 4.6,
      downloads: 540
    }
  ];

  const industries = ["All", "Technology", "Marketing", "Design", "Business", "Sales"];
  const experienceLevels = ["All", "Entry-Level", "Mid-Level", "Senior"];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-700 mr-4">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center">
                <FileText className="text-primary text-2xl mr-2" />
                <span className="text-xl font-bold text-neutral-900">Quick Resume</span>
              </div>
            </div>
            <Link to="/builder">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="text-primary text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Resume Examples</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get inspired by professionally crafted resume examples from various industries and experience levels.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-neutral-700 self-center mr-2">Industry:</span>
              {industries.map((industry) => (
                <Badge
                  key={industry}
                  variant={industry === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-white"
                >
                  {industry}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-neutral-700 self-center mr-2">Experience:</span>
              {experienceLevels.map((level) => (
                <Badge
                  key={level}
                  variant={level === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-white"
                >
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example) => (
              <Card key={example.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-neutral-900">{example.title}</CardTitle>
                      <p className="text-sm text-neutral-500">{example.template}</p>
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {example.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{example.industry}</Badge>
                      <Badge variant="outline">{example.experience}</Badge>
                    </div>
                    
                    <p className="text-sm text-neutral-600">{example.description}</p>
                    
                    <div>
                      <p className="text-sm font-medium text-neutral-700 mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {example.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {example.downloads} downloads
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Link to="/builder">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                          Use Template
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Ready to Create Your Resume?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Choose from our professional templates and create a resume that stands out from the crowd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Start Building Now
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="px-8">
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}