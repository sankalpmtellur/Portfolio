// Keep SEO URLs on the custom domain. The Vercel deployment alias is https://smt2006.vercel.app.
export const SITE_URL = 'https://sankalpmtellur.online'
export const SOCIAL_IMAGE_PATH = '/assets/onyu.webp'
export const SOCIAL_IMAGE = `${SITE_URL}${SOCIAL_IMAGE_PATH}`
export const DEFAULT_DESCRIPTION = 'Portfolio of Sankalp M Tellur, a Computer Science & AI student at Rishihood University building software projects, experimenting with AI, and exploring entrepreneurship.'

export const routeSeo = {
  '/': {
    title: 'Sankalp M Tellur — Computer Science & AI Student',
    description: DEFAULT_DESCRIPTION,
  },
} as const

export function getRouteSeo(pathname: string) {
  return routeSeo[pathname as keyof typeof routeSeo] ?? routeSeo['/']
}

export function absoluteUrl(pathname = '/') {
  return new URL(pathname, `${SITE_URL}/`).toString()
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Sankalp M Tellur',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/sankalp.webp`,
      description: 'Computer Science & AI student, software builder, AI experimenter, and aspiring entrepreneur.',
      jobTitle: 'Computer Science & AI Student',
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Rishihood University',
      },
      sameAs: [
        'https://www.linkedin.com/in/sankalpmt/',
        'https://github.com/sankalpmtellur',
        'https://www.instagram.com/sankalp_m_tellur/',
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Python',
        'GSAP',
        'Figma',
        'Tailwind CSS',
        'Express.js',
        'MongoDB',
        'Artificial intelligence',
        'Entrepreneurship',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Sankalp M Tellur — Portfolio',
      description: DEFAULT_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    },
  ],
} as const
