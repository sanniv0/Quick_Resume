import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowLeft, Scale } from "lucide-react";

export default function TermsOfService() {
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
          <Scale className="text-primary text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
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
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Agreement to Terms</h2>
              <p className="text-neutral-600 mb-6">
                By accessing and using Quick Resume, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Description of Service</h2>
              <p className="text-neutral-600 mb-6">
                Quick Resume provides an online resume building platform that allows users to create, customize, and download professional resumes. Our service includes multiple templates, customization options, and PDF generation capabilities.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">User Responsibilities</h2>
              <p className="text-neutral-600 mb-4">As a user of our service, you agree to:</p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>Provide accurate and truthful information in your resume</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to interfere with or disrupt the service</li>
                <li>Not use automated tools to access the service</li>
                <li>Respect intellectual property rights</li>
                <li>Not share your account access with others</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Intellectual Property</h2>
              <p className="text-neutral-600 mb-6">
                The service and its original content, features, and functionality are and will remain the exclusive property of Quick Resume. The service is protected by copyright, trademark, and other laws. You retain ownership of the content you create using our platform.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">User Content</h2>
              <p className="text-neutral-600 mb-6">
                You retain all rights to the content you input into your resume. By using our service, you grant us a limited license to process, store, and display your content solely for the purpose of providing the resume building service.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Prohibited Uses</h2>
              <p className="text-neutral-600 mb-4">You may not use our service:</p>
              <ul className="list-disc list-inside text-neutral-600 mb-6">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Service Availability</h2>
              <p className="text-neutral-600 mb-6">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service at any time with or without notice.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-neutral-600 mb-6">
                The service is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the service or the information included on this website.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Limitation of Liability</h2>
              <p className="text-neutral-600 mb-6">
                Quick Resume will not be liable for any damages of any kind arising from the use of this service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Privacy Policy</h2>
              <p className="text-neutral-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Termination</h2>
              <p className="text-neutral-600 mb-6">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to Terms</h2>
              <p className="text-neutral-600 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
              <p className="text-neutral-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none text-neutral-600 mb-6">
                <li>Email: legal@quickresume.com</li>
                <li>Address: 123 Business Ave, Suite 100, City, State 12345</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}