export type Project = {
  title: string
  label: string
  description: string
  stack: string[]
  stackNote?: string
  image?: string
  imageSmall?: string
  url?: string
  githubUrl?: string
  status?: string
  accent: 'coral' | 'blue' | 'mint' | 'violet'
  imageWidth?: number
  imageHeight?: number
}

export type SkillCategory = 'Languages' | 'Frameworks & Technologies' | 'Databases & Tools' | 'Thinking' | 'Shape'

export type Skill = {
  name: string
  category: SkillCategory
}

export const projects: Project[] = [
  {
    title: 'Purchase Assistant',
    label: 'AI purchase automation',
    description: 'Developing an AI-powered purchase assistant to automate order processing. The agent captures and processes order details and updates the database after human verification, with the goal of reducing employees’ manual workload.',
    stack: [],
    stackNote: 'Technology stack to be added',
    status: 'In progress',
    accent: 'violet',
    // Add the project preview and repository URL when they are available.
  },
  {
    title: 'Shweta Drug Distributors',
    label: 'Wholesale commerce',
    description: 'Developing a full-stack website for Shweta Drug Distributors to establish their online presence and automate business workflows, with the goal of reducing employees’ manual workload by approximately 30%.',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'Prisma'],
    image: '/assets/shwetadrug.webp',
    imageSmall: '/assets/shwetadrug-800.webp',
    url: 'https://shwetadrug.vercel.app/',
    status: 'In progress',
    accent: 'mint',
    imageWidth: 1600,
    imageHeight: 884,
    // TODO: add the GitHub repository URL when it is available.
  },
  {
    title: 'Onyu',
    label: 'Startup website',
    description: 'Built a frontend website for Onyu, a startup developing a smart ring, to showcase the product, its features, and brand.',
    stack: ['TypeScript', 'Tailwind', 'GSAP'],
    image: '/assets/onyu.webp',
    imageSmall: '/assets/onyu-800.webp',
    url: 'https://onyu-tech.vercel.app/',
    accent: 'coral',
    imageWidth: 1600,
    imageHeight: 882,
    // TODO: add the GitHub repository URL when it is available.
  },
  {
    title: 'Aikyam',
    label: "Women's PG platform",
    description: 'Built a website for Aikyam Women’s PG in Bangalore focused on clear information and easy discovery.',
    stack: ['Next.js', 'Tailwind', 'React'],
    image: '/assets/aikyam.webp',
    imageSmall: '/assets/aikyam-800.webp',
    url: 'https://aikyam-pg.vercel.app/',
    accent: 'blue',
    imageWidth: 1600,
    imageHeight: 884,
    // TODO: add the GitHub repository URL when it is available.
  },
  {
    title: 'IRCTC / 3D',
    label: 'Immersive frontend',
    description: 'An experimental 3D interface for a familiar travel experience — still in motion.',
    stack: ['TypeScript', 'Tailwind', 'Three.js'],
    image: '/assets/irctc.webp',
    imageSmall: '/assets/irctc-800.webp',
    url: 'https://irctc-frontend-eight.vercel.app/',
    status: 'In progress',
    accent: 'violet',
    imageWidth: 1600,
    imageHeight: 886,
    // TODO: add the GitHub repository URL when it is available.
  },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'React', category: 'Frameworks & Technologies' },
  { name: 'Next.js', category: 'Frameworks & Technologies' },
  { name: 'Node.js', category: 'Frameworks & Technologies' },
  { name: 'Express.js', category: 'Frameworks & Technologies' },
  { name: 'Tailwind CSS', category: 'Frameworks & Technologies' },
  { name: 'Supabase', category: 'Frameworks & Technologies' },
  { name: 'MongoDB', category: 'Databases & Tools' },
  { name: 'MySQL', category: 'Databases & Tools' },
  { name: 'Git', category: 'Databases & Tools' },
  { name: 'GitHub', category: 'Databases & Tools' },
  { name: 'Figma', category: 'Databases & Tools' },
  { name: 'Pandas', category: 'Databases & Tools' },
  { name: 'AI-based projects', category: 'Thinking' },
  { name: 'Entrepreneurship', category: 'Thinking' },
  { name: 'Product thinking', category: 'Thinking' },
  { name: 'GSAP', category: 'Shape' },
]

export const skillFilters: Array<'All' | SkillCategory> = ['All', 'Languages', 'Frameworks & Technologies', 'Databases & Tools', 'Thinking', 'Shape']

export const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Selected work', target: 'work' },
  { label: 'Journey', target: 'journey' },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sankalpmt/' },
  { label: 'GitHub', href: 'https://github.com/sankalpmtellur' },
]

export const signalItems = ['FRONTEND', 'FULL-STACK', 'AI PROJECTS', 'PRODUCT THINKING']
export const signalGroupCount = 6
