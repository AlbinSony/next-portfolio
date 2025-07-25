import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'feenix',
    title: "Feenix",
    description: "Feenix is a cutting-edge SaaS platform designed to transform fee collection and student management for tuition centers and coaching institutes. Leveraging modern web technologies and intuitive UI/UX design, Feenix streamlines administrative tasks with AI-assisted insights, automated reminders, and smart reporting. From batch-wise fee assignment to real-time dues tracking and WhatsApp-based communication, Feenix empowers educators to focus on teaching while simplifying operations. With robust backend architecture built on Node.js and MongoDB, and a React-based dynamic frontend, Feenix delivers a seamless, secure, and scalable experience for every tuition business.",
    liveLink: "https://feenix-user.vercel.app/",
    githubLink: "https://github.com/AlbinSony/feenix",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Groq AI",
      "TypeScript",
      "shadcn/ui",
      "Express",
      "Node.js"
    ],
  },
  {
    id: 'EasyML',
    title: "Easy ML",
    description: "EasyML-main is a project designed to simplify the process of building, training, and deploying machine learning models. It provides a user-friendly interface and robust tools for both beginners and experienced data scientists. The repository supports a variety of popular machine learning algorithms and workflows, making experimentation and model selection seamless. EasyML-main also includes features for data preprocessing, visualization, and model evaluation. Its modular design ensures easy integration with existing Python-based data science ecosystems.",
    liveLink: "https://github.com/AlbinSony/EasyML-main",
    githubLink: "https://github.com/AlbinSony/EasyML-main",
    tags: [
      "Python",
      "JavaScript",
      "Machine Learning",
      "Data Science",
      "Flask",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "MySQL",
    ],
  },
  {
    id: 'WorkEase',
    title: "WorkEase",
    description: "Workease is a project management and productivity application designed to streamline workflow for teams and individuals. It offers features such as task assignment, progress tracking, and collaboration tools to enhance workplace efficiency. The platform supports integration with popular calendar and communication tools, making coordination seamless. Users can customize project boards, set deadlines, and monitor project milestones in real-time. Overall, Workease aims to simplify complex project management tasks and foster better teamwork through an intuitive interface.",
    liveLink: "https://github.com/AlbinSony/workease",
    githubLink: "https://github.com/AlbinSony/workease",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Prisma ",
      "Clerk",
      "Docker"
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
