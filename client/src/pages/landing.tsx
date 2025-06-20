import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Palette, Edit, Paintbrush, Download, Lightbulb, Smartphone, Check, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from multiple professionally designed templates that showcase your experience in the best light."
    },
    {
      icon: Edit,
      title: "Easy-to-Use Interface",
      description: "Intuitive form-based input system that guides you through each section of your resume creation."
    },
    {
      icon: Paintbrush,
      title: "Customization Options", 
      description: "Personalize your resume with custom colors, fonts, and layouts to make it uniquely yours."
    },
    {
      icon: Download,
      title: "Instant PDF Download",
      description: "Download your completed resume as a high-quality PDF ready for job applications."
    },
    {
      icon: Lightbulb,
      title: "Expert Tips & Guidance",
      description: "Receive helpful tips and best practices throughout the resume creation process."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Build your resume on any device with our fully responsive design that works everywhere."
    }
  ];

  const templates = [
    {
      id: "classic",
      name: "Classic Professional",
      description: "Traditional layout perfect for corporate roles",
      gradient: "from-neutral-100 to-neutral-200"
    },
    {
      id: "modern",
      name: "Modern Creative",
      description: "Contemporary design for creative professionals",
      gradient: "from-primary/10 to-primary/20"
    },
    {
      id: "minimalist",
      name: "Clean Minimalist",
      description: "Simple, elegant design that highlights content",
      gradient: "from-neutral-50 to-neutral-100"
    },
    {
      id: "executive",
      name: "Executive Professional",
      description: "Sophisticated design for senior-level positions",
      gradient: "from-accent/10 to-accent/20"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <FileText className="text-primary text-2xl mr-2" />
                <span className="text-xl font-bold text-neutral-900">Quick Resume</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-neutral-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <Link to="/features">
                  <span className="text-neutral-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Features</span>
                </Link>
                <Link to="/examples">
                  <span className="text-neutral-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Examples</span>
                </Link>
                <Link to="/pricing">
                  <span className="text-neutral-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Pricing</span>
                </Link>
                <Link to="/help">
                  <span className="text-neutral-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Help</span>
                </Link>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <Link to="/builder">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium">
                  Start Building Now
                </Button>
              </Link>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden ml-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-neutral-900 hover:text-primary">Home</a>
              <Link to="/features">
                <span className="block px-3 py-2 text-base font-medium text-neutral-500 hover:text-primary cursor-pointer">Features</span>
              </Link>
              <Link to="/examples">
                <span className="block px-3 py-2 text-base font-medium text-neutral-500 hover:text-primary cursor-pointer">Examples</span>
              </Link>
              <Link to="/pricing">
                <span className="block px-3 py-2 text-base font-medium text-neutral-500 hover:text-primary cursor-pointer">Pricing</span>
              </Link>
              <Link to="/help">
                <span className="block px-3 py-2 text-base font-medium text-neutral-500 hover:text-primary cursor-pointer">Help</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Create Your Perfect Resume in{" "}
                <span className="text-primary">Minutes</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
                At Quick Resume, we believe everyone deserves a chance to showcase their skills and experiences in the best possible light. Build a professional resume that gets you noticed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/builder">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl">
                    Start Building Now
                  </Button>
                </Link>
                <Link to="/builder">
                <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 font-semibold text-lg">
                  View Templates
                </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center">
                  <Check className="text-accent mr-2 h-4 w-4" />
                  <span>No sign-up required</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-accent mr-2 h-4 w-4" />
                  <span>Instant PDF download</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Professional resume mockup */}
              <div className="bg-white rounded-xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">John Doe</h3>
                      <p className="text-sm text-neutral-600">Software Engineer</p>
                    </div>
                    <div className="w-16 h-16 bg-neutral-200 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-200 rounded w-3/4"></div>
                    <div className="h-2 bg-neutral-200 rounded w-1/2"></div>
                    <div className="h-2 bg-neutral-200 rounded w-2/3"></div>
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <h4 className="font-medium text-neutral-900 mb-2">Experience</h4>
                    <div className="space-y-2">
                      <div className="h-2 bg-neutral-200 rounded w-full"></div>
                      <div className="h-2 bg-neutral-200 rounded w-4/5"></div>
                      <div className="h-2 bg-neutral-200 rounded w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <Download className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Everything You Need to Build the Perfect Resume
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our comprehensive resume builder provides all the tools and guidance you need to create a professional, standout resume.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-neutral-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section id="templates" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Professional Resume Templates
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates, each crafted to highlight your unique skills and experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className={`aspect-[3/4] bg-gradient-to-br ${template.gradient} p-6`}>
                  <div className="h-full bg-white rounded-lg shadow-sm p-4 text-xs">
                    {template.id === "classic" && (
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-neutral-300 rounded-full mx-auto mb-2"></div>
                        <div className="h-2 bg-neutral-300 rounded w-3/4 mx-auto mb-1"></div>
                        <div className="h-1 bg-neutral-200 rounded w-1/2 mx-auto"></div>
                      </div>
                    )}
                    {template.id === "modern" && (
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-neutral-300 rounded w-full mb-1"></div>
                          <div className="h-1 bg-neutral-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    )}
                    {template.id === "minimalist" && (
                      <div className="mb-4">
                        <div className="h-3 bg-neutral-800 rounded w-2/3 mb-2"></div>
                        <div className="h-1 bg-neutral-300 rounded w-1/2"></div>
                      </div>
                    )}
                    {template.id === "executive" && (
                      <div className="border-b border-neutral-200 pb-3 mb-4">
                        <div className="h-2 bg-neutral-300 rounded w-3/4 mb-1"></div>
                        <div className="h-1 bg-neutral-200 rounded w-1/2"></div>
                      </div>
                    )}
                    <div className="space-y-3">
                      <div>
                        <div className="h-1 bg-neutral-400 rounded w-1/3 mb-1"></div>
                        <div className="h-1 bg-neutral-200 rounded w-full mb-1"></div>
                        <div className="h-1 bg-neutral-200 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-neutral-600">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/builder">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl">
                Start Building Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            About Quick Resume
          </h2>
          <div className="prose prose-lg mx-auto text-neutral-600 leading-relaxed">
            <p className="text-xl mb-6">
              At Quick Resume, we believe that everyone deserves a chance to showcase their skills and experiences in the best possible light. Our mission is to provide an easy-to-use, professional resume builder that helps job seekers create standout resumes quickly and efficiently.
            </p>
            <p className="text-lg mb-6">
              We understand that creating a resume can be overwhelming, which is why we've designed our platform to be intuitive and user-friendly. Whether you're a recent graduate, career changer, or seasoned professional, our tools and guidance will help you create a resume that gets noticed.
            </p>
            <p className="text-lg">
              With professional templates, customization options, and expert tips, Quick Resume empowers you to present your best self to potential employers. Join thousands of job seekers who have successfully landed their dream jobs with resumes built on our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral-600">
              Have questions or need support? We're here to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Email Support</h3>
                <p className="text-neutral-600 mb-4">Get help with any questions or issues</p>
                <a href="mailto:support@quickresume.com" className="text-primary hover:text-primary/80 font-medium">
                  support@quickresume.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-accent text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">FAQ</h3>
                <p className="text-neutral-600 mb-4">Find answers to common questions</p>
                <Button variant="link" className="text-primary hover:text-primary/80 font-medium p-0">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Live Chat</h3>
                <p className="text-neutral-600 mb-4">Chat with our support team</p>
                <Button variant="link" className="text-primary hover:text-primary/80 font-medium p-0">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <FileText className="text-primary text-2xl mr-2" />
                <span className="text-xl font-bold">Quick Resume</span>
              </div>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                Create professional resumes quickly and efficiently with our easy-to-use builder. Join thousands of job seekers who have landed their dream jobs.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#templates" className="hover:text-white transition-colors">Templates</a></li>
                <li><Link to="/examples"><span className="hover:text-white transition-colors cursor-pointer">Examples</span></Link></li>
                <li><Link to="/pricing"><span className="hover:text-white transition-colors cursor-pointer">Pricing</span></Link></li>
                <li><Link to="/features"><span className="hover:text-white transition-colors cursor-pointer">Features</span></Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><Link to="/help"><span className="hover:text-white transition-colors cursor-pointer">Help Center</span></Link></li>
                <li><Link to="/privacy"><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></Link></li>
                <li><Link to="/terms"><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2025 Quick Resume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
