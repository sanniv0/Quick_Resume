import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="text-primary text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-neutral-600">
            Last updated: June 20, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Introduction</h2>
              <p className="text-neutral-600 mb-6">
                At Quick Resume, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our resume building service.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information We Collect</h2>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Personal Information</h3>
              <p className="text-neutral-600 mb-4">
                When you create a resume, we collect the information you provide, including:
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>Name and contact information (email, phone, address)</li>
                <li>Work experience and employment history</li>
                <li>Educational background</li>
                <li>Skills and certifications</li>
                <li>Project details and descriptions</li>
                <li>Any other information you choose to include in your resume</li>
              </ul>

              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Technical Information</h3>
              <p className="text-neutral-600 mb-6">
                We automatically collect certain technical information, including:
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Usage patterns and preferences</li>
                <li>Session data and timestamps</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
              <p className="text-neutral-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>Provide and improve our resume building service</li>
                <li>Generate and format your resume documents</li>
                <li>Save your progress and allow future editing</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Analyze usage patterns to improve our platform</li>
                <li>Ensure security and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Storage and Security</h2>
              <p className="text-neutral-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your resume data is stored securely and is only accessible to you through your session.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Sharing</h2>
              <p className="text-neutral-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Rights</h2>
              <p className="text-neutral-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cookies and Tracking</h2>
              <p className="text-neutral-600 mb-6">
                We use cookies and similar technologies to enhance your experience, remember your preferences, and analyze site usage. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Retention</h2>
              <p className="text-neutral-600 mb-6">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Resume drafts are automatically deleted after a period of inactivity.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Updates to This Policy</h2>
              <p className="text-neutral-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
              <p className="text-neutral-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none text-neutral-600 mb-6">
                <li>Email: privacy@quickresume.com</li>
                <li>Address: 123 Business Ave, Suite 100, City, State 12345</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}