import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft, Check, Star, Zap, Crown } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with professional resumes",
      icon: FileText,
      features: [
        "1 resume download per month",
        "Access to all 4 templates",
        "Basic customization options",
        "PDF download",
        "Mobile responsive builder",
        "Email support"
      ],
      limitations: [
        "Limited downloads",
        "Standard templates only"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Ideal for active job seekers and career changers",
      icon: Star,
      features: [
        "Unlimited resume downloads",
        "Access to all templates",
        "Advanced customization",
        "Priority support",
        "Resume analytics",
        "Cover letter templates",
        "Multiple resume versions",
        "ATS optimization tips"
      ],
      limitations: [],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "Perfect for teams, recruiters, and career services",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Bulk resume creation",
        "Custom branding",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Is the free plan really free?",
      answer: "Yes! Our free plan is completely free forever. You can create and download one professional resume per month without any hidden costs."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also support PayPal for your convenience."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us within 30 days for a full refund."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated amount. When downgrading, the change takes effect at your next billing cycle."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures to protect your personal information. Your data is encrypted both in transit and at rest."
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="text-primary text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-neutral-600">
            Choose the plan that fits your career goals. Start free and upgrade as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-primary shadow-lg scale-105' : 'border border-neutral-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <plan.icon className="text-2xl" />
                  </div>
                  <CardTitle className="text-2xl text-neutral-900">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-neutral-900">
                    {plan.price}
                    <span className="text-lg font-normal text-neutral-500">/{plan.period}</span>
                  </div>
                  <p className="text-neutral-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : ''}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="text-accent h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <p className="text-sm font-medium text-neutral-700 mb-2">Limitations:</p>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-neutral-400 mr-3">•</span>
                            <span className="text-sm text-neutral-500">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Compare Plans</h2>
            <p className="text-lg text-neutral-600">See what's included in each plan</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-6 font-semibold text-neutral-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Free</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Resume Downloads", free: "1/month", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Templates", free: "4", pro: "4", enterprise: "4 + Custom" },
                  { feature: "Customization", free: "Basic", pro: "Advanced", enterprise: "Full" },
                  { feature: "Support", free: "Email", pro: "Priority", enterprise: "Dedicated" },
                  { feature: "Analytics", free: "✗", pro: "✓", enterprise: "Advanced" },
                  { feature: "Team Features", free: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "API Access", free: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "White-label", free: "✗", pro: "✗", enterprise: "✓" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="py-4 px-6 text-neutral-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-neutral-600">{row.free}</td>
                    <td className="py-4 px-6 text-center text-neutral-600">{row.pro}</td>
                    <td className="py-4 px-6 text-center text-neutral-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600">Have questions? We have answers.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-neutral-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who have advanced their careers with Quick Resume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100 px-8">
                Start Free Today
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}