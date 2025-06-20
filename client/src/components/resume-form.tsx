import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2 } from "lucide-react";
import type { InsertResume, ExperienceItem, EducationItem, CertificationItem, ProjectItem } from "@shared/schema";

interface ResumeFormProps {
  resumeData: InsertResume;
  onUpdate: (updates: Partial<InsertResume>) => void;
  currentStep: "personal" | "experience" | "education" | "skills" | "projects" | "certifications";
}

export function ResumeForm({ resumeData, onUpdate, currentStep }: ResumeFormProps) {
  if (currentStep === "personal") {
    return <PersonalInfoForm resumeData={resumeData} onUpdate={onUpdate} />;
  }

  if (currentStep === "experience") {
    return <ExperienceForm resumeData={resumeData} onUpdate={onUpdate} />;
  }

  if (currentStep === "education") {
    return <EducationForm resumeData={resumeData} onUpdate={onUpdate} />;
  }

  if (currentStep === "skills") {
    return <SkillsForm resumeData={resumeData} onUpdate={onUpdate} />;
  }

  if (currentStep === "projects") {
    return <ProjectsForm resumeData={resumeData} onUpdate={onUpdate} />;
  }

  if (currentStep === "certifications") {
    return <CertificationsForm resumeData={resumeData} onUpdate={onUpdate} />;
  }

  return null;
}

function PersonalInfoForm({ resumeData, onUpdate }: { resumeData: InsertResume; onUpdate: (updates: Partial<InsertResume>) => void }) {
  const handlePersonalInfoChange = (field: string, value: string) => {
    onUpdate({
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Personal Information</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={resumeData.personalInfo.firstName}
              onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={resumeData.personalInfo.lastName}
              onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={resumeData.personalInfo.location || ""}
            onChange={(e) => handlePersonalInfoChange("location", e.target.value)}
            placeholder="City, State"
          />
        </div>

        <div>
          <Label htmlFor="website">Website/Portfolio</Label>
          <Input
            id="website"
            value={resumeData.personalInfo.website || ""}
            onChange={(e) => handlePersonalInfoChange("website", e.target.value)}
            placeholder="https://your-website.com"
          />
        </div>

        <div>
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            value={resumeData.personalInfo.summary || ""}
            onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
            placeholder="Brief summary of your professional background and key achievements..."
            rows={4}
          />
          <p className="text-sm text-neutral-500 mt-1">
            Write 2-3 sentences highlighting your key skills and career goals.
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceForm({ resumeData, onUpdate }: { resumeData: InsertResume; onUpdate: (updates: Partial<InsertResume>) => void }) {
  const addExperience = () => {
    const newExperience: ExperienceItem = {
      id: Date.now().toString(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    onUpdate({
      experience: [...resumeData.experience, newExperience],
    });
  };

  const updateExperience = (id: string, updates: Partial<ExperienceItem>) => {
    onUpdate({
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onUpdate({
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">Work Experience</h2>
        <Button onClick={addExperience} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {resumeData.experience.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-neutral-500 mb-4">No work experience added yet.</p>
            <Button onClick={addExperience}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Job
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <Card key={exp.id}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {exp.jobTitle || `Position ${index + 1}`}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExperience(exp.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Job Title *</Label>
                    <Input
                      value={exp.jobTitle}
                      onChange={(e) => updateExperience(exp.id, { jobTitle: e.target.value })}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div>
                    <Label>Company *</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <Label>Location</Label>
                  <Input
                    value={exp.location || ""}
                    onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                    placeholder="City, State"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date *</Label>
                    <Input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={exp.endDate || ""}
                      onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                      disabled={exp.current}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`current-${exp.id}`}
                    checked={exp.current}
                    onCheckedChange={(checked) => updateExperience(exp.id, { current: !!checked })}
                  />
                  <Label htmlFor={`current-${exp.id}`}>I currently work here</Label>
                </div>

                <div>
                  <Label>Job Description</Label>
                  <Textarea
                    value={exp.description || ""}
                    onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                  />
                  <p className="text-sm text-neutral-500 mt-1">
                    Use bullet points and action verbs to describe your key accomplishments.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function EducationForm({ resumeData, onUpdate }: { resumeData: InsertResume; onUpdate: (updates: Partial<InsertResume>) => void }) {
  const addEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      location: "",
      graduationDate: "",
      gpa: "",
    };
    onUpdate({
      education: [...resumeData.education, newEducation],
    });
  };

  const updateEducation = (id: string, updates: Partial<EducationItem>) => {
    onUpdate({
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onUpdate({
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">Education</h2>
        <Button onClick={addEducation} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      {resumeData.education.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-neutral-500 mb-4">No education added yet.</p>
            <Button onClick={addEducation}>
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <Card key={edu.id}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {edu.institution || `Education ${index + 1}`}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEducation(edu.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Institution *</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                      placeholder="University Name"
                    />
                  </div>
                  <div>
                    <Label>Degree *</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Field of Study</Label>
                    <Input
                      value={edu.field || ""}
                      onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                      placeholder="Computer Science"
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={edu.location || ""}
                      onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Graduation Date</Label>
                    <Input
                      type="month"
                      value={edu.graduationDate || ""}
                      onChange={(e) => updateEducation(edu.id, { graduationDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>GPA (Optional)</Label>
                    <Input
                      value={edu.gpa || ""}
                      onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                      placeholder="3.8"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function SkillsForm({ resumeData, onUpdate }: { resumeData: InsertResume; onUpdate: (updates: Partial<InsertResume>) => void }) {
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");

  const addTechnicalSkill = () => {
    if (newTechnicalSkill.trim()) {
      onUpdate({
        skills: {
          ...resumeData.skills,
          technical: [...resumeData.skills.technical, newTechnicalSkill.trim()],
        },
      });
      setNewTechnicalSkill("");
    }
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim()) {
      onUpdate({
        skills: {
          ...resumeData.skills,
          soft: [...resumeData.skills.soft, newSoftSkill.trim()],
        },
      });
      setNewSoftSkill("");
    }
  };

  const addLanguage = () => {
    if (newLanguage.trim()) {
      onUpdate({
        skills: {
          ...resumeData.skills,
          languages: [...resumeData.skills.languages, newLanguage.trim()],
        },
      });
      setNewLanguage("");
    }
  };

  const removeSkill = (category: keyof typeof resumeData.skills, index: number) => {
    const updatedSkills = [...resumeData.skills[category]];
    updatedSkills.splice(index, 1);
    onUpdate({
      skills: {
        ...resumeData.skills,
        [category]: updatedSkills,
      },
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Skills</h2>
      
      <div className="space-y-6">
        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                value={newTechnicalSkill}
                onChange={(e) => setNewTechnicalSkill(e.target.value)}
                placeholder="Add a technical skill..."
                onKeyPress={(e) => e.key === "Enter" && addTechnicalSkill()}
              />
              <Button onClick={addTechnicalSkill} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.technical.map((skill, index) => (
                <div key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-2">
                  <span>{skill}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSkill("technical", index)}
                    className="h-auto p-0 text-primary hover:text-red-500"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                placeholder="Add a soft skill..."
                onKeyPress={(e) => e.key === "Enter" && addSoftSkill()}
              />
              <Button onClick={addSoftSkill} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.soft.map((skill, index) => (
                <div key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full flex items-center gap-2">
                  <span>{skill}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSkill("soft", index)}
                    className="h-auto p-0 text-accent hover:text-red-500"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                placeholder="Add a language..."
                onKeyPress={(e) => e.key === "Enter" && addLanguage()}
              />
              <Button onClick={addLanguage} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.languages.map((language, index) => (
                <div key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full flex items-center gap-2">
                  <span>{language}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSkill("languages", index)}
                    className="h-auto p-0 text-neutral-700 hover:text-red-500"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProjectsForm({ resumeData, onUpdate }: { resumeData: InsertResume; onUpdate: (updates: Partial<InsertResume>) => void }) {
  const addProject = () => {
    const newProject: ProjectItem = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      startDate: "",
      endDate: "",
      current: false,
      url: "",
      githubUrl: "",
    };
    onUpdate({
      projects: [...resumeData.projects, newProject],
    });
  };

  const updateProject = (id: string, updates: Partial<ProjectItem>) => {
    onUpdate({
      projects: resumeData.projects.map((project) =>
        project.id === id ? { ...project, ...updates } : project
      ),
    });
  };

  const removeProject = (id: string) => {
    onUpdate({
      projects: resumeData.projects.filter((project) => project.id !== id),
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">Projects</h2>
        <Button onClick={addProject} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      {resumeData.projects.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-neutral-500 mb-4">No projects added yet.</p>
            <Button onClick={addProject}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Project
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {resumeData.projects.map((project, index) => (
            <Card key={project.id}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {project.name || `Project ${index + 1}`}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeProject(project.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Project Name *</Label>
                  <Input
                    value={project.name}
                    onChange={(e) => updateProject(project.id, { name: e.target.value })}
                    placeholder="My Awesome Project"
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={project.description || ""}
                    onChange={(e) => updateProject(project.id, { description: e.target.value })}
                    placeholder="Describe what this project does and your role..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={project.startDate || ""}
                      onChange={(e) => updateProject(project.id, { startDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={project.endDate || ""}
                      onChange={(e) => updateProject(project.id, { endDate: e.target.value })}
                      disabled={project.current}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`current-project-${project.id}`}
                    checked={project.current}
                    onCheckedChange={(checked) => updateProject(project.id, { current: !!checked })}
                  />
                  <Label htmlFor={`current-project-${project.id}`}>This is an ongoing project</Label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Project URL</Label>
                    <Input
                      value={project.url || ""}
                      onChange={(e) => updateProject(project.id, { url: e.target.value })}
                      placeholder="https://myproject.com"
                    />
                  </div>
                  <div>
                    <Label>GitHub URL</Label>
                    <Input
                      value={project.githubUrl || ""}
                      onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function CertificationsForm({ resumeData, onUpdate }: { resumeData: InsertResume; onUpdate: (updates: Partial<InsertResume>) => void }) {
  const addCertification = () => {
    const newCertification: CertificationItem = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      issueDate: "",
      expiryDate: "",
      credentialId: "",
      credentialUrl: "",
    };
    onUpdate({
      certifications: [...resumeData.certifications, newCertification],
    });
  };

  const updateCertification = (id: string, updates: Partial<CertificationItem>) => {
    onUpdate({
      certifications: resumeData.certifications.map((cert) =>
        cert.id === id ? { ...cert, ...updates } : cert
      ),
    });
  };

  const removeCertification = (id: string) => {
    onUpdate({
      certifications: resumeData.certifications.filter((cert) => cert.id !== id),
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">Certifications</h2>
        <Button onClick={addCertification} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Certification
        </Button>
      </div>

      {resumeData.certifications.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-neutral-500 mb-4">No certifications added yet.</p>
            <Button onClick={addCertification}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Certification
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {resumeData.certifications.map((cert, index) => (
            <Card key={cert.id}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {cert.name || `Certification ${index + 1}`}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCertification(cert.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Certification Name *</Label>
                    <Input
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                      placeholder="AWS Certified Solutions Architect"
                    />
                  </div>
                  <div>
                    <Label>Issuing Organization *</Label>
                    <Input
                      value={cert.issuer}
                      onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                      placeholder="Amazon Web Services"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Issue Date</Label>
                    <Input
                      type="month"
                      value={cert.issueDate || ""}
                      onChange={(e) => updateCertification(cert.id, { issueDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Expiry Date</Label>
                    <Input
                      type="month"
                      value={cert.expiryDate || ""}
                      onChange={(e) => updateCertification(cert.id, { expiryDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Credential ID</Label>
                    <Input
                      value={cert.credentialId || ""}
                      onChange={(e) => updateCertification(cert.id, { credentialId: e.target.value })}
                      placeholder="ABC123DEF456"
                    />
                  </div>
                  <div>
                    <Label>Credential URL</Label>
                    <Input
                      value={cert.credentialUrl || ""}
                      onChange={(e) => updateCertification(cert.id, { credentialUrl: e.target.value })}
                      placeholder="https://credentials.example.com/verify"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
