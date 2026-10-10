// app/data/projects.ts
import type { Project } from '~/types'

export const projects: Project[] = [
  {
    id: 'financial-ai',
    title: {
      fa: 'تحلیلگر هوشمند بازارهای مالی',
      en: 'Financial Market AI Analyzer',
    },
    description: {
      fa: 'پلتفرم پیش‌بینی نوسانات ارزهای دیجیتال با استفاده از شبکه‌های عصبی عمیق و پردازش داده‌های لحظه‌ای.',
      en: 'Cryptocurrency volatility forecasting platform using deep neural networks and real-time streaming.',
    },
    category: 'ai',
    image: '/images/projects/crypto-market.webp',
    tags: ['Python', 'PyTorch', 'Nuxt 4', 'FastAPI'],
    link: '#',
  },
  {
    id: 'anomaly-detection',
    title: {
      fa: 'سیستم تشخیص ناهنجاری صنعتی',
      en: 'Industrial Anomaly Detection System',
    },
    description: {
      fa: 'کنترل کیفیت خودکار خطوط تولید کارخانجات با استفاده از بینایی ماشین و تشخیص عیوب قطعات در کمتر از چند میلی‌ثانیه.',
      en: 'Automated manufacturing QC leveraging computer vision for sub-second defect identification.',
    },
    category: 'ai',
    image: '/images/projects/industrial-vision.webp',
    tags: ['OpenCV', 'TensorFlow', 'Docker', 'Edge AI'],
    link: '#',
  },
  {
    id: 'voice-assistant',
    title: {
      fa: 'دستیار صوتی هوشمند سازمانی',
      en: 'Enterprise Voice Assistant',
    },
    description: {
      fa: 'بات هوشمند پاسخگویی صوتی با قابلیت درک لهجه‌های مختلف و اتصال به CRM داخلی شرکت.',
      en: 'Intelligent conversational voice agent with multi-dialect NLP integrated with internal CRM.',
    },
    category: 'ai',
    image: '/images/projects/voice-ai.webp',
    tags: ['Speech-to-Text', 'NLP', 'FastAPI', 'Vue 3'],
    link: '#',
  },
  {
    id: 'real-estate-platform',
    title: {
      fa: 'پلتفرم جامع املاک مدرن',
      en: 'Modern Real Estate Platform',
    },
    description: {
      fa: 'سامانه جستجوی ملک با قابلیت تور مجازی ۳۶۰ درجه و تخمین هوشمند قیمت مسکن بر مبنای هوش مکانی.',
      en: 'Property discovery portal featuring 360 virtual tours and automated spatial valuation models.',
    },
    category: 'web',
    image: '/images/projects/real-estate.webp',
    tags: ['Nuxt 4', 'Tailwind CSS', 'PostgreSQL', 'Mapbox'],
    link: '#',
  },
  {
    id: 'lms-platform',
    title: {
      fa: 'آکادمی آنلاین آموزش برنامه‌نویسی',
      en: 'Online Code Academy LMS',
    },
    description: {
      fa: 'سیستم مدیریت یادگیری (LMS) با قابلیت اجرای آنلاین کد در مرورگر و ارزیابی خودکار تمرین‌ها.',
      en: 'Comprehensive LMS equipped with an in-browser sandbox runner and automated grading.',
    },
    category: 'web',
    image: '/images/projects/code-academy.webp',
    tags: ['Vue 3', 'WebAssembly', 'Node.js', 'Redis'],
    link: '#',
  },
  {
    id: 'super-app-services',
    title: {
      fa: 'سوپر اپلیکیشن خدمات شهری',
      en: 'Urban Services Super App',
    },
    description: {
      fa: 'یک اپلیکیشن چندمنظوره برای پرداخت‌های شهری، رزرو پارکینگ و پیگیری درخواست‌های شهروندی.',
      en: 'Integrated mobile super-app for municipal micro-payments, smart parking, and citizen requests.',
    },
    category: 'mobile',
    image: '/images/projects/super-app.webp',
    tags: ['PWA', 'Capacitor', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  {
    id: 'fitness-tracker',
    title: {
      fa: 'پلتفرم سلامت و تناسب اندام',
      en: 'Health & Fitness Ecosystem',
    },
    description: {
      fa: 'اپلیکیشن مربی هوشمند با قابلیت آنالیز حرکات ورزشی از طریق دوربین گوشی و برنامه‌ریزی تغذیه.',
      en: 'Smart workout tracker with real-time pose estimation via phone camera and meal planning.',
    },
    category: 'mobile',
    image: '/images/projects/fitness.webp',
    tags: ['Vue 3', 'MediaPipe', 'GraphQL'],
    link: '#',
  },
  {
    id: 'artist-social-network',
    title: {
      fa: 'شبکه اجتماعی متخصصین هنر',
      en: 'Creative Artists Community',
    },
    description: {
      fa: 'بستری برای اشتراک‌گذاری آثار هنری با رعایت کپی‌رایت و فروش آثار دیجیتال.',
      en: 'Portfolio showcase and marketplace for digital creators with royalty management.',
    },
    category: 'web',
    image: '/images/projects/art-community.webp',
    tags: ['Nuxt 4', 'Pinia', 'Tailwind v4'],
    link: '#',
  },
  {
    id: 'chain-store-dashboard',
    title: {
      fa: 'پنل مدیریت فروشگاه‌های زنجیره‌ای',
      en: 'Retail Chain ERP Dashboard',
    },
    description: {
      fa: 'مدیریت یکپارچه انبارداری، حسابداری و فروش بیش از ۵۰ شعبه به صورت متمرکز.',
      en: 'Unified enterprise ERP dashboard governing logistics, POS sales, and accounting across 50+ stores.',
    },
    category: 'dashboard',
    image: '/images/projects/dashboard-erp.webp',
    tags: ['Nuxt 4', 'Reka UI', 'ECharts', 'PostgreSQL'],
    link: '#',
  },
]
