import type { InsertResume } from "@shared/schema";

export function createEmptyResumeData(): InsertResume {
  return {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
    },
    certifications: [],
    projects: [],
    template: "classic",
    colorScheme: "primary",
    fontStyle: "Inter",
  };
}
