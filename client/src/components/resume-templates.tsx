import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ResumeTemplatesProps {
  selectedTemplate: string;
  selectedColorScheme: string;
  selectedFont: string;
  onTemplateChange: (template: string) => void;
  onColorSchemeChange: (colorScheme: string) => void;
  onFontChange: (font: string) => void;
}

export function ResumeTemplates({
  selectedTemplate,
  selectedColorScheme,
  selectedFont,
  onTemplateChange,
  onColorSchemeChange,
  onFontChange,
}: ResumeTemplatesProps) {
  const templates = [
    {
      id: "classic",
      name: "Classic Professional",
      description: "Traditional layout perfect for corporate roles",
      preview: (
        <div className="text-center">
          <div className="w-8 h-8 bg-neutral-300 rounded-full mx-auto mb-2"></div>
          <div className="h-1 bg-neutral-300 rounded w-3/4 mx-auto mb-1"></div>
          <div className="h-1 bg-neutral-200 rounded w-1/2 mx-auto mb-2"></div>
          <div className="space-y-1">
            <div className="h-1 bg-neutral-200 rounded w-full"></div>
            <div className="h-1 bg-neutral-200 rounded w-4/5"></div>
          </div>
        </div>
      ),
    },
    {
      id: "modern",
      name: "Modern Creative",
      description: "Contemporary design for creative professionals",
      preview: (
        <div className="flex items-start">
          <div className="w-6 h-6 bg-primary/20 rounded-full mr-2"></div>
          <div className="flex-1">
            <div className="h-1 bg-neutral-300 rounded w-full mb-1"></div>
            <div className="h-1 bg-neutral-200 rounded w-2/3 mb-2"></div>
            <div className="space-y-1">
              <div className="h-1 bg-neutral-200 rounded w-full"></div>
              <div className="h-1 bg-neutral-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "minimalist",
      name: "Clean Minimalist",
      description: "Simple, elegant design that highlights content",
      preview: (
        <div>
          <div className="h-3 bg-neutral-800 rounded w-2/3 mb-2"></div>
          <div className="h-1 bg-neutral-300 rounded w-1/2 mb-3"></div>
          <div className="space-y-2">
            <div>
              <div className="h-1 bg-neutral-800 rounded w-1/4 mb-1"></div>
              <div className="space-y-1">
                <div className="h-1 bg-neutral-200 rounded w-full"></div>
                <div className="h-1 bg-neutral-200 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "executive",
      name: "Executive Professional",
      description: "Sophisticated design for senior-level positions",
      preview: (
        <div>
          <div className="border-b border-neutral-200 pb-2 mb-3">
            <div className="h-2 bg-neutral-300 rounded w-3/4 mb-1"></div>
            <div className="h-1 bg-neutral-200 rounded w-1/2"></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <div className="h-1 bg-neutral-400 rounded w-1/3"></div>
            </div>
            <div className="ml-4 space-y-1">
              <div className="h-1 bg-neutral-200 rounded w-full"></div>
              <div className="h-1 bg-neutral-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const colorSchemes = [
    { id: "primary", name: "Professional Blue", color: "bg-primary" },
    { id: "accent", name: "Modern Green", color: "bg-accent" },
    { id: "red", name: "Classic Red", color: "bg-red-500" },
    { id: "purple", name: "Creative Purple", color: "bg-purple-500" },
  ];

  const fonts = [
    { id: "Inter", name: "Inter (Recommended)" },
    { id: "Open Sans", name: "Open Sans" },
    { id: "Roboto", name: "Roboto" },
    { id: "Lato", name: "Lato" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Choose Your Template</h2>
      
      {/* Template Selection */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 mb-8">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? "border-2 border-primary bg-primary/5"
                : "border-2 border-neutral-200 hover:border-neutral-300"
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <CardContent className="p-2 lg:p-4">
              <div className="aspect-[3/4] bg-white rounded shadow-sm p-2 lg:p-3 mb-2 lg:mb-3">
                {template.preview}
              </div>
              <h3 className="font-medium text-neutral-900 text-sm lg:text-base">{template.name}</h3>
              <p className="text-xs lg:text-sm text-neutral-600">{template.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customization Options */}
      <div className="pt-8 border-t border-neutral-200 space-y-6">
        <h3 className="text-lg font-semibold text-neutral-900">Customize Your Resume</h3>
        
        <div>
          <Label className="text-sm font-medium text-neutral-700 mb-2 block">Color Scheme</Label>
          <div className="flex space-x-3">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                className={`w-8 h-8 ${scheme.color} rounded-full border-2 transition-all ${
                  selectedColorScheme === scheme.id
                    ? "border-neutral-800 scale-110"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
                onClick={() => onColorSchemeChange(scheme.id)}
                title={scheme.name}
              />
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="font-select" className="text-sm font-medium text-neutral-700 mb-2 block">
            Font Style
          </Label>
          <Select value={selectedFont} onValueChange={onFontChange}>
            <SelectTrigger id="font-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fonts.map((font) => (
                <SelectItem key={font.id} value={font.id}>
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
