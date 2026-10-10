// app/data/projects.ts
import type { Project } from '~/types'

export const projects: Project[] = [
  {
    id: 'school-management-platform',
    title: {
      fa: 'پلتفرم جامع مدیریت و آموزش هوشمند مدارس',
      en: 'Smart School Management & E-Learning Platform',
    },
    description: {
      fa: 'سامانه یکپارچه مدیریت فرآیندهای آموزشی، نمرات، حضور و غیاب و آزمون‌های آنلاین پیاده‌سازی‌شده برای دو مجتمع آموزشی.',
      en: 'Integrated academic ecosystem governing grading, attendance, and online evaluations deployed across two school campuses.',
    },
    category: 'web',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 'medical-tourism-platform',
    title: {
      fa: 'پلتفرم بین‌المللی گردشگری سلامت (مدیکال توریسم)',
      en: 'Cross-Border Medical Tourism Portal',
    },
    description: {
      fa: 'سامانه چندزبانه ارتباط بیماران بین‌المللی با مراکز درمانی، نوبت‌دهی آنلاین و ترانسفر پزشکی با هوش مصنوعی ترجمه پرونده.',
      en: 'Multilingual portal facilitating patient admissions, online scheduling, and clinical transfers for international patients.',
    },
    category: 'web',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'i18n', 'FastAPI', 'Node.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 'psychology-clinic-platform',
    title: {
      fa: 'سامانه رزرواسیون و خدمات روانشناسی بالینی',
      en: 'Clinical Psychology & Therapy Booking Platform',
    },
    description: {
      fa: 'پلتفرم اختصاصی نوبت‌دهی آنلاین جلسات مشاوره، پرونده الکترونیک مراجعین و آزمون‌های خودارزیابی روانی.',
      en: 'Specialized therapy appointment booking engine with secure client records and self-assessment evaluations.',
    },
    category: 'web',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop',
    tags: ['Vue 3', 'Tailwind CSS', 'Calendar Engine', 'REST API'],
    link: '#',
  },
  {
    id: 'corporate-portal',
    title: {
      fa: 'پورتال اختصاصی و هویت سازمانی شرکت صنعتی',
      en: 'Enterprise Corporate Platform & Digital Branding',
    },
    description: {
      fa: 'طراحی وب‌سایت شرکتی مدرن با کارایی بالا، کاتالوگ دیجیتال محصولات و پنل معرفی خدمات سازمانی.',
      en: 'High-performance corporate portal featuring interactive product catalogs and B2B service inquiry flows.',
    },
    category: 'web',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'Tailwind v4', 'SEO Architecture', 'Shadcn-Vue'],
    link: '#',
  },
  {
    id: 'financial-ai-assistant',
    title: {
      fa: 'تحلیلگر هوشمند و پردازش داده‌های مالی',
      en: 'Intelligent Financial Analytics Core',
    },
    description: {
      fa: 'توسعه موتور پردازش داده و الگوریتم‌های هوش مصنوعی برای مصورسازی روند بازار و تصمیم‌گیری داده‌محور.',
      en: 'Data processing engine and machine learning pipelines designed for market pattern detection and data visualization.',
    },
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2000&auto=format&fit=crop',
    tags: ['Python', 'PyTorch', 'FastAPI', 'Chart Engine'],
    link: '#',
  },
]
