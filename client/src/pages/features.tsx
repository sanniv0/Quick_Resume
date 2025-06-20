import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowLeft, Palette, Edit, Download, Smartphone, Eye, Save, Zap, Shield, Users, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from 4 carefully designed templates that showcase your experience professionally.",
      details: ["Classic Professional for corporate roles", "Modern Creative for tech and design", "Clean Minimalist for any industry", "Executive Professional for leadership positions"]
    },
    {
      icon: Edit,
      title: "Easy Form-Based Editor",
      description: "Step-by-step guided process that makes resume creation simple and intuitive.",
      details: ["Personal information section", "Work experience with rich descriptions", "Education and certifications", "Skills and project showcase"]
    },
    {
      icon: Palette,
      title: "Customization Options",
      description: "Personalize your resume with colors, fonts, and layout preferences.",
      details: ["4 professional color schemes", "Multiple font options", "Responsive design", "Real-time preview"]
    },
    {
      icon: Download,
      title: "Instant PDF Download",
      description: "Generate high-quality PDF resumes ready for job applications.",
      details: ["Professional PDF formatting", "Optimized for ATS systems", "Print-ready quality", "Fast generation"]
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Build and edit your resume on any device with our mobile-optimized interface.",
      details: ["Works on phones and tablets", "Touch-friendly interface", "Consistent experience", "No app required"]
    },
    {
      icon: Eye,
      title: "Live Preview",
      description: "See your resume update in real-time as you make changes.",
      details: ["Desktop and mobile preview", "Instant updates", "WYSIWYG editing", "Template switching"]
    },
    {
      icon: Save,
      title: "Auto-Save & Drafts",
      description: "Never lose your work with automatic saving and draft management.",
      details: ["Automatic progress saving", "Resume drafts", "Edit anytime", "Secure storage"]
    },
    {
      icon: Zap,
      title: "Quick & Efficient",
      description: "Create a professional resume in minutes, not hours.",
      details: ["Streamlined workflow", "Pre-filled suggestions", "Smart formatting", "One-click actions"]
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your personal information is protected with enterprise-grade security.",
      details: ["Encrypted data storage", "Privacy-first design", "No third-party sharing", "GDPR compliant"]
    },
    {
      icon: Users,
      title: "No Registration Required",
      description: "Start building immediately without creating an account or providing email.",
      details: ["Instant access", "No spam emails", "Guest-friendly", "Quick start"]
    },
    {
      icon: Award,
      title: "ATS-Friendly Format",
      description: "Resumes designed to pass Applicant Tracking Systems used by employers.",
      details: ["Clean structure", "Proper formatting", "Keyword optimization", "Standard sections"]
    },
    {
      icon: FileText,
      title: "Multiple Sections",
      description: "Comprehensive resume sections to showcase all your qualifications.",
      details: ["Work experience", "Education background", "Skills and technologies", "Projects and certifications"]
    }
  ];

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
          <Zap className="text-primary text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Powerful Features</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to create a professional resume that gets you noticed by employers and recruiters.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-primary text-2xl" />
                  </div>
                  <CardTitle className="text-xl text-neutral-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-neutral-500 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">How It Works</h2>
            <p className="text-lg text-neutral-600">Create your professional resume in just a few simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Choose Template</h3>
              <p className="text-neutral-600">Select from our professional template collection</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Add Your Info</h3>
              <p className="text-neutral-600">Fill in your details using our guided forms</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Customize</h3>
              <p className="text-neutral-600">Personalize colors, fonts, and layout</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Download</h3>
              <p className="text-neutral-600">Get your professional PDF resume instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Choose Quick Resume?</h2>
            <p className="text-lg text-neutral-600">Join thousands of job seekers who have successfully landed their dream jobs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">95%</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Success Rate</h3>
              <p className="text-neutral-600">Of users report improved interview callbacks</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5M</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Minutes Average</h3>
              <p className="text-neutral-600">Time to create a complete professional resume</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">24/7</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Always Available</h3>
              <p className="text-neutral-600">Build your resume anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Professional Resume?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get started in seconds and have your resume ready in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100 px-8">
                Start Building Now
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}