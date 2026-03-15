import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Cognizant",
      position: "Full Stack Developer",
      duration: "October 2025 – Present",
      description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
        browser-based video recording, and API integrations like WhatsApp/email reminders. 
        Optimized workflows with autosave features and real-time scraping, 
        leveraging Next.js, Supabase, and Cloudflare workers.`,
      href: "https://qmarktechnolabs.com/",
      logoUrl: "/qmark.png",
    },
    {
      company: "qmark technolabs",
      position: "Software Developer Intern",
      duration: "January 2025 – May 2025",
      description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
        browser-based video recording, and API integrations like WhatsApp/email reminders. 
        Optimized workflows with autosave features and real-time scraping, 
        leveraging Next.js, Supabase, and Cloudflare workers.`,
      href: "https://qmarktechnolabs.com/",
      logoUrl: "/qmark.png",
    },
    {
      company: "ieee kerala section",
      position: "Web Master",
      duration: "January 2023 – January 2024",
      description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
        browser-based video recording, and API integrations like WhatsApp/email reminders. 
        Optimized workflows with autosave features and real-time scraping, 
        leveraging Next.js, Supabase, and Cloudflare workers.`,
      href: "https://ieee-link.org/",
      logoUrl: "ieee.png",
    },
  ];

  return (
    <div className="space-y-2">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex items-center gap-4 mb-4">
          {exp.logoUrl && (
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={exp.logoUrl}
                alt={exp.company}
                className="object-contain"
              />
              <AvatarFallback>{exp.company[0]}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                {exp.href ? (
                  <a
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <h3 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                    {exp.company}
                  </h3>
                )}
                <p className="text-sm md:text-lg text-neutral-800 dark:text-neutral-400">
                  {exp.position}
                </p>
              </div>
              <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-400 whitespace-nowrap">
                {exp.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
