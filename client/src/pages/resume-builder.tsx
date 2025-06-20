import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Save, Download, Dock, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { ResumeTemplates } from "@/components/resume-templates";
import { ResumeForm } from "@/components/resume-form";
import { ResumePreview } from "@/components/resume-preview";
import { generatePDF } from "@/lib/pdf-generator";
import { createEmptyResumeData } from "@/lib/resume-data";
import type { Resume, InsertResume } from "@shared/schema";

export default function ResumeBuilder() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState<InsertResume>(createEmptyResumeData());
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const [resumeId, setResumeId] = useState<number | null>(null);

  const steps = [
    { id: 1, name: "Template", description: "Choose your template" },
    { id: 2, name: "Personal Info", description: "Add your details" },
    { id: 3, name: "Experience", description: "Add your work history" },
    { id: 4, name: "Education", description: "Add your education" },
    { id: 5, name: "Skills", description: "Add your skills" },
    { id: 6, name: "Projects", description: "Add your projects" },
    { id: 7, name: "Certifications", description: "Add certifications" },
    { id: 8, name: "Download", description: "Get your resume" },
  ];

  // Save resume mutation
  const saveResumeMutation = useMutation({
    mutationFn: async (data: InsertResume) => {
      if (resumeId) {
        const response = await apiRequest("PUT", `/api/resumes/${resumeId}`, data);
        return response.json();
      } else {
        const response = await apiRequest("POST", "/api/resumes", data);
        return response.json();
      }
    },
    onSuccess: (data: Resume) => {
      if (!resumeId) {
        setResumeId(data.id);
      }
      toast({
        title: "Resume saved",
        description: "Your resume has been saved successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error saving resume",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSave = () => {
    saveResumeMutation.mutate(resumeData);
  };

  const handleDownload = async () => {
    try {
      await generatePDF(resumeData);
      toast({
        title: "PDF downloaded",
        description: "Your resume has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error downloading PDF",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateResumeData = (updates: Partial<InsertResume>) => {
    setResumeData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Builder Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-700 mr-4">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center">
                <span className="text-lg font-semibold text-neutral-900">Resume Builder</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                disabled={saveResumeMutation.isPending}
              >
                <Save className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Save Draft</span>
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-accent hover:bg-accent/90 text-white"
                size="sm"
              >
                <Download className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Download PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between text-sm">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-2 ${
                  step.id <= currentStep ? 'text-primary' : 'text-neutral-400'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    step.id <= currentStep 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral-200'
                  }`}>
                    {step.id}
                  </div>
                  <span className="font-medium hidden sm:inline">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-neutral-200 mx-4 rounded-full">
                    <div 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        step.id < currentStep ? 'bg-primary w-full' : 'bg-primary w-0'
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Builder Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <ResumeTemplates
                  selectedTemplate={resumeData.template || "classic"}
                  selectedColorScheme={resumeData.colorScheme || "primary"}
                  selectedFont={resumeData.fontStyle || "Inter"}
                  onTemplateChange={(template) => updateResumeData({ template })}
                  onColorSchemeChange={(colorScheme) => updateResumeData({ colorScheme })}
                  onFontChange={(fontStyle) => updateResumeData({ fontStyle })}
                />
              )}
              
              {currentStep === 2 && (
                <ResumeForm
                  resumeData={resumeData}
                  onUpdate={updateResumeData}
                  currentStep="personal"
                />
              )}
              
              {currentStep === 3 && (
                <ResumeForm
                  resumeData={resumeData}
                  onUpdate={updateResumeData}
                  currentStep="experience"
                />
              )}
              
              {currentStep === 4 && (
                <ResumeForm
                  resumeData={resumeData}
                  onUpdate={updateResumeData}
                  currentStep="education"
                />
              )}
              
              {currentStep === 5 && (
                <ResumeForm
                  resumeData={resumeData}
                  onUpdate={updateResumeData}
                  currentStep="skills"
                />
              )}
              
              {currentStep === 6 && (
                <ResumeForm
                  resumeData={resumeData}
                  onUpdate={updateResumeData}
                  currentStep="projects"
                />
              )}
              
              {currentStep === 7 && (
                <ResumeForm
                  resumeData={resumeData}
                  onUpdate={updateResumeData}
                  currentStep="certifications"
                />
              )}
              
              {currentStep === 8 && (
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Resume is Ready!</h2>
                  <p className="text-neutral-600 mb-6">
                    Congratulations! Your professional resume is complete and ready to download.
                  </p>
                  <div className="space-y-4">
                    <Button
                      onClick={handleDownload}
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF Resume
                    </Button>
                    <Button
                      onClick={handleSave}
                      variant="outline"
                      className="w-full"
                      size="lg"
                      disabled={saveResumeMutation.isPending}
                    >
                      <Save className="h-5 w-5 mr-2" />
                      Save Draft
                    </Button>
                  </div>
                  <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">Tips for Success:</h3>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• Tailor your resume for each job application</li>
                      <li>• Use strong action verbs in your experience descriptions</li>
                      <li>• Keep your resume to 1-2 pages maximum</li>
                      <li>• Proofread carefully for spelling and grammar errors</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                {currentStep < steps.length ? (
                  <Button onClick={handleNext}>
                    Continue
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </Button>
                ) : (
                  <Link to="/">
                    <Button variant="outline">
                      Return Home
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-neutral-900">Live Preview</h2>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={previewMode === "mobile" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("mobile")}
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={previewMode === "desktop" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("desktop")}
                  >
                    <Dock className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <ResumePreview
                resumeData={resumeData}
                previewMode={previewMode}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
