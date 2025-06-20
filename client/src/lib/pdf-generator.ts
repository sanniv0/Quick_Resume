import type { InsertResume } from "@shared/schema";

export async function generatePDF(resumeData: InsertResume) {
  // Create a temporary div to render the resume
  const tempDiv = document.createElement('div');
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  tempDiv.style.width = '8.5in';
  tempDiv.style.minHeight = '11in';
  tempDiv.style.backgroundColor = 'white';
  tempDiv.style.padding = '0.5in';
  tempDiv.style.fontFamily = resumeData.fontStyle || 'Arial';
  tempDiv.style.fontSize = '12px';
  tempDiv.style.lineHeight = '1.4';
  tempDiv.style.color = '#000';

  // Generate HTML content based on template
  const htmlContent = generateResumeHTML(resumeData);
  tempDiv.innerHTML = htmlContent;

  document.body.appendChild(tempDiv);

  try {
    // Use the browser's print functionality to generate PDF
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      throw new Error('Could not open print window');
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${resumeData.personalInfo.firstName} ${resumeData.personalInfo.lastName}</title>
          <style>
            @page {
              size: A4;
              margin: 0.5in;
            }
            body {
              font-family: ${resumeData.fontStyle || 'Arial'}, sans-serif;
              font-size: 12px;
              line-height: 1.4;
              color: #000;
              margin: 0;
              padding: 0;
            }
            .resume-container {
              width: 100%;
              max-width: 8.5in;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .name {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .contact {
              font-size: 11px;
              color: #666;
            }
            .section {
              margin-bottom: 20px;
            }
            .section-title {
              font-size: 14px;
              font-weight: bold;
              color: ${getColor(resumeData.colorScheme || 'primary')};
              border-bottom: 1px solid ${getColor(resumeData.colorScheme || 'primary')};
              padding-bottom: 2px;
              margin-bottom: 10px;
            }
            .job-title {
              font-weight: bold;
              margin-bottom: 2px;
            }
            .job-details {
              font-size: 11px;
              color: #666;
              margin-bottom: 5px;
            }
            .description {
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            ${htmlContent}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    
    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);

  } finally {
    document.body.removeChild(tempDiv);
  }
}

function generateResumeHTML(resumeData: InsertResume): string {
  const { personalInfo, experience, education, skills, projects, certifications } = resumeData;
  
  let html = `
    <div class="header">
      <div class="name">${personalInfo.firstName} ${personalInfo.lastName}</div>
      <div class="contact">
        ${personalInfo.email} | ${personalInfo.phone}
        ${personalInfo.location ? ` | ${personalInfo.location}` : ''}
        ${personalInfo.website ? ` | ${personalInfo.website}` : ''}
      </div>
    </div>
  `;

  if (personalInfo.summary) {
    html += `
      <div class="section">
        <div class="section-title">Professional Summary</div>
        <div>${personalInfo.summary}</div>
      </div>
    `;
  }

  if (experience.length > 0) {
    html += `
      <div class="section">
        <div class="section-title">Professional Experience</div>
    `;
    
    experience.forEach(exp => {
      html += `
        <div style="margin-bottom: 15px;">
          <div class="job-title">${exp.jobTitle}</div>
          <div class="job-details">
            ${exp.company} | ${exp.startDate} - ${exp.current ? 'Present' : exp.endDate || 'Present'}
            ${exp.location ? ` | ${exp.location}` : ''}
          </div>
          ${exp.description ? `<div class="description">${exp.description}</div>` : ''}
        </div>
      `;
    });
    
    html += '</div>';
  }

  // Education section
  if (education.length > 0) {
    html += `
      <div class="section">
        <div class="section-title">Education</div>
    `;
    
    education.forEach(edu => {
      html += `
        <div style="margin-bottom: 15px;">
          <div class="job-title">${edu.degree}</div>
          <div class="job-details">
            ${edu.institution}${edu.field ? ` - ${edu.field}` : ''} | ${edu.graduationDate || 'In Progress'}
            ${edu.location ? ` | ${edu.location}` : ''}
          </div>
          ${edu.gpa ? `<div class="description">GPA: ${edu.gpa}</div>` : ''}
        </div>
      `;
    });
    
    html += '</div>';
  }

  // Skills section
  if (skills.technical.length > 0 || skills.soft.length > 0 || skills.languages.length > 0) {
    html += `
      <div class="section">
        <div class="section-title">Skills</div>
    `;
    
    if (skills.technical.length > 0) {
      html += `
        <div style="margin-bottom: 10px;">
          <strong>Technical:</strong> ${skills.technical.join(', ')}
        </div>
      `;
    }
    
    if (skills.soft.length > 0) {
      html += `
        <div style="margin-bottom: 10px;">
          <strong>Soft Skills:</strong> ${skills.soft.join(', ')}
        </div>
      `;
    }
    
    if (skills.languages.length > 0) {
      html += `
        <div style="margin-bottom: 10px;">
          <strong>Languages:</strong> ${skills.languages.join(', ')}
        </div>
      `;
    }
    
    html += '</div>';
  }

  // Projects section
  if (projects.length > 0) {
    html += `
      <div class="section">
        <div class="section-title">Projects</div>
    `;
    
    projects.forEach(project => {
      html += `
        <div style="margin-bottom: 15px;">
          <div class="job-title">${project.name}</div>
          <div class="job-details">
            ${project.startDate} - ${project.current ? 'Present' : project.endDate || 'Completed'}
          </div>
          ${project.description ? `<div class="description">${project.description}</div>` : ''}
          ${project.technologies && project.technologies.length > 0 ? 
            `<div style="font-size: 11px; color: #666;">Technologies: ${project.technologies.join(', ')}</div>` : ''}
        </div>
      `;
    });
    
    html += '</div>';
  }

  // Certifications section
  if (certifications.length > 0) {
    html += `
      <div class="section">
        <div class="section-title">Certifications</div>
    `;
    
    certifications.forEach(cert => {
      html += `
        <div style="margin-bottom: 15px;">
          <div class="job-title">${cert.name}</div>
          <div class="job-details">
            ${cert.issuer} | ${cert.issueDate || 'Active'}
          </div>
          ${cert.credentialId ? `<div style="font-size: 11px; color: #666;">ID: ${cert.credentialId}</div>` : ''}
        </div>
      `;
    });
    
    html += '</div>';
  }

  return html;
}

function getColor(colorScheme: string | undefined): string {
  switch (colorScheme) {
    case 'accent':
      return '#10B981';
    case 'red':
      return '#EF4444';
    case 'purple':
      return '#A855F7';
    default:
      return '#2563EB';
  }
}
