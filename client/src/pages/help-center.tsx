import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, ArrowLeft, Search, HelpCircle, Book, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I create my first resume?",
      answer: "Click 'Start Building Now' on the homepage, select a template, and follow the step-by-step form to add your personal information, experience, education, skills, projects, and certifications."
    },
    {
      question: "Can I save my resume and edit it later?",
      answer: "Yes! Use the 'Save Draft' button while building your resume. Your progress will be saved and you can return to edit it anytime."
    },
    {
      question: "What file format is my resume downloaded in?",
      answer: "Your resume is downloaded as a high-quality PDF file that's ready to submit to employers or print."
    },
    {
      question: "How many templates are available?",
      answer: "We offer 4 professional templates: Classic Professional, Modern Creative, Clean Minimalist, and Executive Professional."
    },
    {
      question: "Can I customize the colors and fonts?",
      answer: "Yes! Each template can be customized with different color schemes (blue, green, red, purple) and font styles (Inter, Open Sans, Roboto, Lato)."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We take privacy seriously and only store your information temporarily to enable the resume building process. See our Privacy Policy for details."
    },
    {
      question: "Can I add multiple work experiences?",
      answer: "Yes! You can add as many work experiences, education entries, projects, and certifications as needed for your resume."
    },
    {
      question: "What should I include in my resume?",
      answer: "Include your contact information, professional summary, work experience, education, relevant skills, key projects, and any certifications. Keep it concise and relevant to the job you're applying for."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="text-primary text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Help Center</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Find answers to common questions and get help with building your perfect resume.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Book className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Getting Started</h3>
                <p className="text-neutral-600 mb-6">
                  New to Quick Resume? Learn the basics of creating your first professional resume.
                </p>
                <Button variant="outline">View Guide</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <MessageCircle className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">FAQs</h3>
                <p className="text-neutral-600 mb-6">
                  Find quick answers to the most frequently asked questions about our platform.
                </p>
                <Button variant="outline">Browse FAQs</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Mail className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Contact Support</h3>
                <p className="text-neutral-600 mb-6">
                  Can't find what you're looking for? Get in touch with our support team.
                </p>
                <Button variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-neutral-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-neutral-500">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Still Need Help?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Our support team is here to help you succeed with your resume building journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Contact Support
            </Button>
            <Link to="/builder">
              <Button variant="outline" size="lg">
                Try Building a Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}