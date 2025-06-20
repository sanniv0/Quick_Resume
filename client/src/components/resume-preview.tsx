import { Card } from "@/components/ui/card";
import type { InsertResume } from "@shared/schema";

interface ResumePreviewProps {
  resumeData: InsertResume;
  previewMode: "desktop" | "mobile";
}

export function ResumePreview({ resumeData, previewMode }: ResumePreviewProps) {
  const getColorScheme = () => {
    switch (resumeData.colorScheme) {
      case "accent":
        return "text-accent border-accent/20";
      case "red":
        return "text-red-500 border-red-500/20";
      case "purple":
        return "text-purple-500 border-purple-500/20";
      default:
        return "text-primary border-primary/20";
    }
  };

  const colorClasses = getColorScheme();

  return (
    <div className={`${previewMode === "mobile" ? "max-w-sm mx-auto" : "w-full"}`}>
      <Card className={`bg-white border border-neutral-200 shadow-sm overflow-hidden ${
        previewMode === "mobile" ? "text-xs" : "text-sm"
      }`}>
        <div className="p-8 aspect-[8.5/11] overflow-hidden">
          {resumeData.template === "classic" && (
            <ClassicTemplate resumeData={resumeData} colorClasses={colorClasses} />
          )}
          {resumeData.template === "modern" && (
            <ModernTemplate resumeData={resumeData} colorClasses={colorClasses} />
          )}
          {resumeData.template === "minimalist" && (
            <MinimalistTemplate resumeData={resumeData} colorClasses={colorClasses} />
          )}
          {resumeData.template === "executive" && (
            <ExecutiveTemplate resumeData={resumeData} colorClasses={colorClasses} />
          )}
        </div>
      </Card>
    </div>
  );
}

function ClassicTemplate({ resumeData, colorClasses }: { resumeData: InsertResume; colorClasses: string }) {
  return (
    <div className="text-center">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">
          {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
        </h1>
        <p className="text-sm text-neutral-600 mb-2">Professional Title</p>
        <p className="text-xs text-neutral-500">
          {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
          {resumeData.personalInfo.location && ` | ${resumeData.personalInfo.location}`}
        </p>
      </div>

      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold border-b pb-1 mb-3 ${colorClasses}`}>
            Professional Summary
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed text-left">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold border-b pb-1 mb-3 ${colorClasses}`}>
            Experience
          </h2>
          <div className="space-y-3 text-left">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-medium text-neutral-900">{exp.jobTitle}</h3>
                <p className="text-xs text-neutral-600">
                  {exp.company} | {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.description && (
                  <p className="text-xs text-neutral-600 mt-1">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold border-b pb-1 mb-3 ${colorClasses}`}>
            Education
          </h2>
          <div className="space-y-3 text-left">
            {resumeData.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-medium text-neutral-900">{edu.degree}</h3>
                <p className="text-xs text-neutral-600">
                  {edu.institution}{edu.field ? ` - ${edu.field}` : ""} | {edu.graduationDate || "In Progress"}
                </p>
                {edu.gpa && (
                  <p className="text-xs text-neutral-600 mt-1">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {(resumeData.skills.technical.length > 0 || resumeData.skills.soft.length > 0 || resumeData.skills.languages.length > 0) && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold border-b pb-1 mb-3 ${colorClasses}`}>
            Skills
          </h2>
          <div className="text-left space-y-2">
            {resumeData.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Technical:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.technical.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Soft Skills:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.soft.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Languages:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.languages.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold border-b pb-1 mb-3 ${colorClasses}`}>
            Projects
          </h2>
          <div className="space-y-3 text-left">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-medium text-neutral-900">{project.name}</h3>
                <p className="text-xs text-neutral-600">
                  {project.startDate} - {project.current ? "Present" : project.endDate}
                </p>
                {project.description && (
                  <p className="text-xs text-neutral-600 mt-1">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-xs text-neutral-500 mt-1">Technologies: {project.technologies.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold border-b pb-1 mb-3 ${colorClasses}`}>
            Certifications
          </h2>
          <div className="space-y-3 text-left">
            {resumeData.certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-medium text-neutral-900">{cert.name}</h3>
                <p className="text-xs text-neutral-600">
                  {cert.issuer} | {cert.issueDate || "Active"}
                </p>
                {cert.credentialId && (
                  <p className="text-xs text-neutral-500 mt-1">ID: {cert.credentialId}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ModernTemplate({ resumeData, colorClasses }: { resumeData: InsertResume; colorClasses: string }) {
  return (
    <div>
      <div className="flex items-start mb-6">
        <div className="w-16 h-16 bg-primary/20 rounded-full mr-4"></div>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-neutral-900 mb-1">
            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
          </h1>
          <p className="text-sm text-neutral-600 mb-2">Professional Title</p>
          <p className="text-xs text-neutral-500">
            {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
          </p>
        </div>
      </div>

      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold pb-1 mb-3 ${colorClasses}`}>
            About
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold pb-1 mb-3 ${colorClasses}`}>
            Experience
          </h2>
          <div className="space-y-3">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-medium text-neutral-900">{exp.jobTitle}</h3>
                <p className="text-xs text-neutral-600">
                  {exp.company} | {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.description && (
                  <p className="text-xs text-neutral-600 mt-1">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold pb-1 mb-3 ${colorClasses}`}>
            Education
          </h2>
          <div className="space-y-3">
            {resumeData.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-medium text-neutral-900">{edu.degree}</h3>
                <p className="text-xs text-neutral-600">
                  {edu.institution}{edu.field ? ` - ${edu.field}` : ""} | {edu.graduationDate || "In Progress"}
                </p>
                {edu.gpa && (
                  <p className="text-xs text-neutral-600 mt-1">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {(resumeData.skills.technical.length > 0 || resumeData.skills.soft.length > 0 || resumeData.skills.languages.length > 0) && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold pb-1 mb-3 ${colorClasses}`}>
            Skills
          </h2>
          <div className="space-y-2">
            {resumeData.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Technical:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.technical.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Soft Skills:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.soft.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Languages:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.languages.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold pb-1 mb-3 ${colorClasses}`}>
            Projects
          </h2>
          <div className="space-y-3">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-medium text-neutral-900">{project.name}</h3>
                <p className="text-xs text-neutral-600">
                  {project.startDate} - {project.current ? "Present" : project.endDate}
                </p>
                {project.description && (
                  <p className="text-xs text-neutral-600 mt-1">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-xs text-neutral-500 mt-1">Technologies: {project.technologies.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold pb-1 mb-3 ${colorClasses}`}>
            Certifications
          </h2>
          <div className="space-y-3">
            {resumeData.certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-medium text-neutral-900">{cert.name}</h3>
                <p className="text-xs text-neutral-600">
                  {cert.issuer} | {cert.issueDate || "Active"}
                </p>
                {cert.credentialId && (
                  <p className="text-xs text-neutral-500 mt-1">ID: {cert.credentialId}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MinimalistTemplate({ resumeData, colorClasses }: { resumeData: InsertResume; colorClasses: string }) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
        </h1>
        <p className="text-xs text-neutral-500">
          {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
          {resumeData.personalInfo.location && ` | ${resumeData.personalInfo.location}`}
        </p>
      </div>

      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">SUMMARY</h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">EXPERIENCE</h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-medium text-neutral-900">{exp.jobTitle}</h3>
                <p className="text-xs text-neutral-600">
                  {exp.company} | {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.description && (
                  <p className="text-xs text-neutral-600 mt-1">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">EDUCATION</h2>
          <div className="space-y-4">
            {resumeData.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-medium text-neutral-900">{edu.degree}</h3>
                <p className="text-xs text-neutral-600">
                  {edu.institution}{edu.field ? ` - ${edu.field}` : ""} | {edu.graduationDate || "In Progress"}
                </p>
                {edu.gpa && (
                  <p className="text-xs text-neutral-600 mt-1">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {(resumeData.skills.technical.length > 0 || resumeData.skills.soft.length > 0 || resumeData.skills.languages.length > 0) && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">SKILLS</h2>
          <div className="space-y-2">
            {resumeData.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Technical:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.technical.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Soft Skills:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.soft.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Languages:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.languages.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">PROJECTS</h2>
          <div className="space-y-4">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-medium text-neutral-900">{project.name}</h3>
                <p className="text-xs text-neutral-600">
                  {project.startDate} - {project.current ? "Present" : project.endDate}
                </p>
                {project.description && (
                  <p className="text-xs text-neutral-600 mt-1">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-xs text-neutral-500 mt-1">Technologies: {project.technologies.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">CERTIFICATIONS</h2>
          <div className="space-y-4">
            {resumeData.certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-medium text-neutral-900">{cert.name}</h3>
                <p className="text-xs text-neutral-600">
                  {cert.issuer} | {cert.issueDate || "Active"}
                </p>
                {cert.credentialId && (
                  <p className="text-xs text-neutral-500 mt-1">ID: {cert.credentialId}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ExecutiveTemplate({ resumeData, colorClasses }: { resumeData: InsertResume; colorClasses: string }) {
  return (
    <div>
      <div className="border-b border-neutral-200 pb-4 mb-6">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">
          {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
        </h1>
        <p className="text-xs text-neutral-500">
          {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
          {resumeData.personalInfo.location && ` | ${resumeData.personalInfo.location}`}
        </p>
      </div>

      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses.includes('accent') ? 'bg-accent' : colorClasses.includes('red') ? 'bg-red-500' : colorClasses.includes('purple') ? 'bg-purple-500' : 'bg-primary'}`}></div>
            <h2 className="text-sm font-semibold text-neutral-900">EXECUTIVE SUMMARY</h2>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed ml-4">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses.includes('accent') ? 'bg-accent' : colorClasses.includes('red') ? 'bg-red-500' : colorClasses.includes('purple') ? 'bg-purple-500' : 'bg-primary'}`}></div>
            <h2 className="text-sm font-semibold text-neutral-900">PROFESSIONAL EXPERIENCE</h2>
          </div>
          <div className="space-y-3 ml-4">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-medium text-neutral-900">{exp.jobTitle}</h3>
                <p className="text-xs text-neutral-600">
                  {exp.company} | {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.description && (
                  <p className="text-xs text-neutral-600 mt-1">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses.includes('accent') ? 'bg-accent' : colorClasses.includes('red') ? 'bg-red-500' : colorClasses.includes('purple') ? 'bg-purple-500' : 'bg-primary'}`}></div>
            <h2 className="text-sm font-semibold text-neutral-900">EDUCATION</h2>
          </div>
          <div className="space-y-3 ml-4">
            {resumeData.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-medium text-neutral-900">{edu.degree}</h3>
                <p className="text-xs text-neutral-600">
                  {edu.institution}{edu.field ? ` - ${edu.field}` : ""} | {edu.graduationDate || "In Progress"}
                </p>
                {edu.gpa && (
                  <p className="text-xs text-neutral-600 mt-1">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {(resumeData.skills.technical.length > 0 || resumeData.skills.soft.length > 0 || resumeData.skills.languages.length > 0) && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses.includes('accent') ? 'bg-accent' : colorClasses.includes('red') ? 'bg-red-500' : colorClasses.includes('purple') ? 'bg-purple-500' : 'bg-primary'}`}></div>
            <h2 className="text-sm font-semibold text-neutral-900">CORE COMPETENCIES</h2>
          </div>
          <div className="space-y-2 ml-4">
            {resumeData.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Technical:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.technical.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Leadership:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.soft.join(", ")}</p>
              </div>
            )}
            {resumeData.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-neutral-900 text-xs">Languages:</h3>
                <p className="text-xs text-neutral-600">{resumeData.skills.languages.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses.includes('accent') ? 'bg-accent' : colorClasses.includes('red') ? 'bg-red-500' : colorClasses.includes('purple') ? 'bg-purple-500' : 'bg-primary'}`}></div>
            <h2 className="text-sm font-semibold text-neutral-900">KEY PROJECTS</h2>
          </div>
          <div className="space-y-3 ml-4">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-medium text-neutral-900">{project.name}</h3>
                <p className="text-xs text-neutral-600">
                  {project.startDate} - {project.current ? "Present" : project.endDate}
                </p>
                {project.description && (
                  <p className="text-xs text-neutral-600 mt-1">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-xs text-neutral-500 mt-1">Technologies: {project.technologies.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resumeData.certifications.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses.includes('accent') ? 'bg-accent' : colorClasses.includes('red') ? 'bg-red-500' : colorClasses.includes('purple') ? 'bg-purple-500' : 'bg-primary'}`}></div>
            <h2 className="text-sm font-semibold text-neutral-900">CERTIFICATIONS</h2>
          </div>
          <div className="space-y-3 ml-4">
            {resumeData.certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-medium text-neutral-900">{cert.name}</h3>
                <p className="text-xs text-neutral-600">
                  {cert.issuer} | {cert.issueDate || "Active"}
                </p>
                {cert.credentialId && (
                  <p className="text-xs text-neutral-500 mt-1">ID: {cert.credentialId}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
