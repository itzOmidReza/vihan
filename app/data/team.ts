// app/data/team.ts
import type { TeamMember } from '~/types'

export const teamMembers: TeamMember[] = [
  {
    id: 'hosna-ghahramani',
    name: {
      fa: 'حسنا قهرمانی',
      en: 'Hosna Ghahramani',
    },
    role: {
      fa: 'مدیر عامل و متخصص AI',
      en: 'CEO & AI Specialist',
    },
    bio: {
      fa: 'مهندس یادگیری ماشین و سیستم‌های هوشمند',
      en: 'Machine Learning & Intelligent Systems Engineer',
    },
    avatar: 'https://github.com/Hosnaqh9.png',
    resume: '/resumes/hosna-ghahramani-cv.pdf',
    socials: {
      github: 'https://github.com/Hosnaqh9',
      linkedin: 'https://www.linkedin.com/in/hosna-ghahramani',
    },
  },
  {
    id: 'mahdiyeh-velayi',
    name: {
      fa: 'مهدیه ولایی',
      en: 'Mahdiyeh Velayi',
    },
    role: {
      fa: 'ارشد توسعه نرم‌افزار',
      en: 'Senior Software Engineer',
    },
    bio: {
      fa: 'عاشق معماری سیستم‌های توزیع شده',
      en: 'Passionate about distributed systems architecture',
    },
    avatar: '/team/member2.jpg',
    resume: '/resumes/mahdiyeh-velayi-cv.pdf',
    socials: {
      github: 'https://github.com/mahdiyeh',
      linkedin: 'https://www.linkedin.com/in/mahdiyeh-velayi',
    },
  },
  {
    id: 'fardin-deregeh',
    name: {
      fa: 'فردین درکه',
      en: 'Fardin Deregeh',
    },
    role: {
      fa: 'متخصص هوش مصنوعی',
      en: 'AI Specialist',
    },
    bio: {
      fa: 'تمرکز بر روی بینایی ماشین و شبکه‌های عصبی.',
      en: 'Focused on computer vision and neural networks.',
    },
    avatar: 'https://github.com/Im-Fardin.png',
    resume: '/resumes/fardin-derege-cv.pdf',
    socials: {
      github: 'https://github.com/Im-Fardin',
      linkedin: 'https://www.linkedin.com/in/fardin-deregeh/',
    },
  },
  {
    id: 'mersad-karimi',
    name: {
      fa: 'مرصاد کریمی',
      en: 'Mersad Karimi',
    },
    role: {
      fa: 'Embedded Linux Developer',
      en: 'Embedded Linux Developer',
    },
    bio: {
      fa: 'علاقه‌مند به یکپارچه‌سازی سیستم‌ها',
      en: 'Enthusiastic about systems integration and embedded architectures',
    },
    avatar: 'https://github.com/xmersad.png',
    resume: '/resumes/Mersad-Karimi-cv.pdf',
    socials: {
      github: 'https://github.com/xmersad',
      linkedin: 'https://www.linkedin.com/in/mersadk',
    },
  },
  {
    id: 'omidreza-shahbazi',
    name: {
      fa: 'امیدرضا شهبازی',
      en: 'Omidreza Shahbazi',
    },
    role: {
      fa: 'توسعه‌دهنده Full-stack',
      en: 'Full-Stack Developer',
    },
    bio: {
      fa: 'عاشق معماری سیستم‌های توزیع شده و Nuxt.',
      en: 'Passionate about distributed systems architecture and Nuxt.',
    },
    avatar: 'https://github.com/itzOmidReza.png',
    resume: '/resumes/omidreza-shahbazi-cv.pdf',
    socials: {
      github: 'https://github.com/itzOmidReza',
      linkedin: 'https://www.linkedin.com/in/itzomidreza/',
    },
  },
]
