// app/data/projects.ts
import type { Project, ProjectCategoryOption } from '~/types'

export const projectCategories: ProjectCategoryOption[] = [
  {
    id: 'all',
    label: {
      fa: 'همه',
      en: 'All',
    },
  },
  {
    id: 'ai',
    label: {
      fa: 'هوش مصنوعی',
      en: 'Artificial Intelligence',
    },
  },
  {
    id: 'web',
    label: {
      fa: 'وب',
      en: 'Web Platforms',
    },
  },
  {
    id: 'app',
    label: {
      fa: 'اپلیکیشن',
      en: 'Applications',
    },
  },
  {
    id: 'dashboard',
    label: {
      fa: 'داشبورد',
      en: 'Dashboards',
    },
  },
]

export const projects: Project[] = [
  {
    id: 'ai-market-analyzer',
    title: {
      fa: 'تحلیلگر هوشمند بازارهای مالی',
      en: 'Intelligent Financial Market Analyzer',
    },
    description: {
      fa: 'پلتفرم پیش‌بینی نوسانات ارزهای دیجیتال و بازارهای سرمایه با استفاده از شبکه‌های عصبی عمیق و پردازش داده‌های لحظه‌ای.',
      en: 'Real-time financial fluctuation forecasting platform utilizing deep neural networks and streaming data pipelines.',
    },
    category: 'ai',
    categoryLabel: {
      fa: 'هوش مصنوعی',
      en: 'AI & ML',
    },
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
    tags: ['TensorFlow', 'Python', 'Nuxt 4', 'FastAPI'],
    icon: 'Cpu',
    featured: true,
    link: '#',
  },
  {
    id: 'industrial-anomaly-detection',
    title: {
      fa: 'سیستم تشخیص ناهنجاری صنعتی',
      en: 'Industrial Anomaly Detection System',
    },
    description: {
      fa: 'کنترل کیفیت خودکار خطوط تولید کارخانجات با استفاده از بینایی ماشین و تشخیص عیوب میکرومتری قطعات در میلی‌ثانیه.',
      en: 'Automated factory QC pipeline leveraging computer vision and sub-millisecond edge defect detection.',
    },
    category: 'ai',
    categoryLabel: {
      fa: 'هوش مصنوعی',
      en: 'AI & ML',
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    tags: ['OpenCV', 'PyTorch', 'Vue 3', 'Edge Computing'],
    icon: 'Cpu',
    featured: true,
    link: '#',
  },
  {
    id: 'enterprise-voice-assistant',
    title: {
      fa: 'دستیار صوتی هوشمند سازمانی',
      en: 'Enterprise Conversational Voice Assistant',
    },
    description: {
      fa: 'بات هوشمند پاسخگویی صوتی با قابلیت درک لهجه‌های بومی و اتصال امن به CRM و ERP داخلی شرکت‌ها.',
      en: 'Intelligent voice IVR agent with regional dialect processing and native CRM/ERP integrations.',
    },
    category: 'ai',
    categoryLabel: {
      fa: 'هوش مصنوعی',
      en: 'AI & ML',
    },
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2000&auto=format&fit=crop',
    tags: ['NLP', 'FastAPI', 'WebSpeech', 'Python'],
    icon: 'Cpu',
    featured: false,
    link: '#',
  },
  {
    id: 'modern-real-estate-platform',
    title: {
      fa: 'پلتفرم جامع املاک مدرن',
      en: 'Modern Real Estate & Spatial Platform',
    },
    description: {
      fa: 'سامانه جستجوی هوشمند ملک با قابلیت تور مجازی ۳۶۰ درجه، نقشه‌های حرارتی قیمت مسکن و فیلترهای پیشرفته مکانی.',
      en: 'Property marketplace featuring 360-degree virtual tours, spatial valuation heatmaps, and geospatial search.',
    },
    category: 'web',
    categoryLabel: {
      fa: 'وب',
      en: 'Web Platform',
    },
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
    tags: ['Three.js', 'Nuxt 4', 'Mapbox', 'PostgreSQL'],
    icon: 'Globe',
    featured: true,
    link: '#',
  },
  {
    id: 'coding-academy-lms',
    title: {
      fa: 'آکادمی آنلاین آموزش برنامه‌نویسی',
      en: 'Interactive Coding Academy LMS',
    },
    description: {
      fa: 'سیستم مدیریت یادگیری تعاملی (LMS) با قابلیت اجرای زنده کد در مرورگر کاربر و سیستم منتورینگ و ارزیابی هوشمند.',
      en: 'Learning Management System featuring in-browser sandboxed code execution and automated code reviews.',
    },
    category: 'web',
    categoryLabel: {
      fa: 'وب',
      en: 'Web Platform',
    },
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop',
    tags: ['WebContainers', 'Firebase', 'Vue 3', 'TypeScript'],
    icon: 'Globe',
    featured: false,
    link: '#',
  },
  {
    id: 'urban-services-superapp',
    title: {
      fa: 'سوپر اپلیکیشن خدمات شهری',
      en: 'Municipal Services Urban SuperApp',
    },
    description: {
      fa: 'اپلیکیشن یکپارچه برای پرداخت‌های خرد شهری، رزرو پارکینگ و پیگیری بی‌درنگ درخواست‌های شهروندی.',
      en: 'Unified citizen application for contactless municipal payments, smart parking reservations, and civic requests.',
    },
    category: 'app',
    categoryLabel: {
      fa: 'اپلیکیشن',
      en: 'Mobile App',
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
    tags: ['Capacitor', 'Vue 3', 'Node.js', 'Tailwind CSS'],
    icon: 'PanelsTopLeft',
    featured: true,
    link: '#',
  },
  {
    id: 'smart-fitness-platform',
    title: {
      fa: 'پلتفرم سلامت و تناسب اندام',
      en: 'AI Smart Fitness & Biometrics Platform',
    },
    description: {
      fa: 'اپلیکیشن مربی هوشمند شخصی با تحلیل کامپیوتری فرم حرکات ورزشی و طراحی برنامه‌های تغذیه بر پایه داده.',
      en: 'Personal AI fitness coach providing real-time pose estimation and data-driven training regimens.',
    },
    category: 'app',
    categoryLabel: {
      fa: 'اپلیکیشن',
      en: 'Mobile App',
    },
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2000&auto=format&fit=crop',
    tags: ['MediaPipe', 'TypeScript', 'PWA', 'Tailwind CSS'],
    icon: 'PanelsTopLeft',
    featured: false,
    link: '#',
  },
  {
    id: 'art-professionals-network',
    title: {
      fa: 'شبکه اجتماعی متخصصین هنر و طراحی',
      en: 'Creative Professionals Decentralized Network',
    },
    description: {
      fa: 'فضایی تخصصی برای اشتراک‌گذاری پرتفولیوهای دیجیتال، ثبت اصالت اثر و تعامل حرفه‌ای میان هنرمندان معاصر.',
      en: 'Creative portfolio exchange platform featuring content copyright provenance and creator networking.',
    },
    category: 'app',
    categoryLabel: {
      fa: 'اپلیکیشن',
      en: 'Mobile App',
    },
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop',
    tags: ['Web3', 'Vue 3', 'Tailwind v4', 'IPFS'],
    icon: 'PanelsTopLeft',
    featured: false,
    link: '#',
  },
  {
    id: 'chain-store-management-panel',
    title: {
      fa: 'پنل مدیریت فروشگاه‌های زنجیره‌ای',
      en: 'Enterprise Multi-Store Management Dashboard',
    },
    description: {
      fa: 'داشبورد جامع نظارت بر موجودی انبارها، تحلیل گردش مالی و مدیریت متمرکز شعب در سراسر کشور.',
      en: 'Real-time multi-branch retail management dashboard with automated inventory logistics and financial ledgering.',
    },
    category: 'dashboard',
    categoryLabel: {
      fa: 'داشبورد',
      en: 'Dashboard',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'SQL Server', 'Excel Export', 'Chart Engine'],
    icon: 'PanelsTopLeft',
    featured: true,
    link: '#',
  },
  {
    id: 'school-management-platform',
    title: {
      fa: 'پلتفرم جامع مدیریت و آموزش هوشمند مدارس',
      en: 'Smart School Management & E-Learning Platform',
    },
    description: {
      fa: 'سامانه یکپارچه مدیریت فرآیندهای آموزشی، نمرات، حضور و غیاب و آزمون‌های آنلاین پیاده‌سازی‌شده برای دو مجتمع آموزشی.',
      en: 'Integrated academic ecosystem governing grading, attendance, and online evaluations deployed across school campuses.',
    },
    category: 'web',
    categoryLabel: {
      fa: 'وب',
      en: 'Web Platform',
    },
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    icon: 'Globe',
    featured: false,
    link: '#',
  },
  {
    id: 'medical-tourism-platform',
    title: {
      fa: 'پلتفرم بین‌المللی گردشگری سلامت (مدیکال توریسم)',
      en: 'Cross-Border Medical Tourism Portal',
    },
    description: {
      fa: 'سامانه چندزبانه ارتباط بیماران بین‌المللی با مراکز درمانی، نوبت‌دهی آنلاین و ترانسفر پزشکی با ترجمه هوشمند پرونده.',
      en: 'Multilingual portal facilitating patient admissions, online scheduling, and clinical transfers for international patients.',
    },
    category: 'web',
    categoryLabel: {
      fa: 'وب',
      en: 'Web Platform',
    },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'i18n', 'FastAPI', 'Node.js', 'Tailwind CSS'],
    icon: 'Globe',
    featured: false,
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
    categoryLabel: {
      fa: 'وب',
      en: 'Web Platform',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'Tailwind v4', 'SEO Architecture', 'Shadcn-Vue'],
    icon: 'Globe',
    featured: false,
    link: '#',
  },
]
