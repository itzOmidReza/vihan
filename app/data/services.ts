// app/data/services.ts
import type { ServiceItem, ProcessStep } from '~/types'

export const services: ServiceItem[] = [
  {
    id: 'ai-ml',
    serviceNumber: '01',
    title: {
      fa: 'هوش مصنوعی و یادگیری ماشین',
      en: 'Artificial Intelligence & Machine Learning',
    },
    description: {
      fa: 'ارائه راهکارهای پیشرفته پردازش تصویر، تحلیل داده و مدل‌های پیش‌بینی برای خودکارسازی کسب‌وکار شما.',
      en: 'Providing state-of-the-art computer vision, data analytics, and predictive models to automate workflows.',
    },
    icon: 'Cpu',
    color: 'blue',
    features: [
      { fa: 'پردازش زبان طبیعی (NLP)', en: 'Natural Language Processing (NLP)' },
      { fa: 'بینایی ماشین', en: 'Computer Vision' },
      { fa: 'سیستم‌های توصیه‌گر', en: 'Recommendation Systems' },
    ],
  },
  {
    id: 'web-development',
    serviceNumber: '02',
    title: {
      fa: 'توسعه وب‌سایت‌های مدرن',
      en: 'Modern Web Development',
    },
    description: {
      fa: 'طراحی و برنامه‌نویسی سایت‌های فوق‌سریع با Nuxt 4 و معماری Microservices برای مقیاس‌پذیری نامحدود.',
      en: 'Designing and engineering ultra-fast sites with Nuxt 4 and microservices architecture for infinite scalability.',
    },
    icon: 'Globe',
    color: 'emerald',
    features: [
      { fa: 'رندرینگ SSR و ISR', en: 'SSR & ISR Rendering' },
      { fa: 'بهینه‌سازی Core Web Vitals', en: 'Core Web Vitals Optimization' },
      { fa: 'امنیت بالا', en: 'High Security' },
    ],
  },
  {
    id: 'mobile-pwa',
    serviceNumber: '03',
    title: {
      fa: 'اپلیکیشن‌های موبایل (PWA/Native)',
      en: 'Mobile Applications (PWA/Native)',
    },
    description: {
      fa: 'توسعه اپلیکیشن‌های چندسکویی با تجربه کاربری عالی و هماهنگی کامل با سیستم‌عامل‌های iOS و Android.',
      en: 'Cross-platform app development with exceptional user experience and full iOS & Android compatibility.',
    },
    icon: 'Smartphone',
    color: 'purple',
    features: [
      { fa: 'تجربه کاربری Native', en: 'Native User Experience' },
      { fa: 'دسترسی آفلاین', en: 'Offline Access' },
      { fa: 'Push Notifications', en: 'Push Notifications' },
    ],
  },
  {
    id: 'data-bi',
    serviceNumber: '04',
    title: {
      fa: 'تحلیل داده و هوش تجاری',
      en: 'Data Analytics & Business Intelligence',
    },
    description: {
      fa: 'تبدیل داده‌های خام به داشبوردها و گزارش‌های مدیریتی برای تصمیم‌گیری‌های دقیق و سودآور.',
      en: 'Transforming raw data into executive dashboards and reports for accurate and profitable decisions.',
    },
    icon: 'ChartColumn',
    color: 'amber',
    features: [
      { fa: 'مانیتورینگ زنده', en: 'Live Monitoring' },
      { fa: 'گزارش‌گیری خودکار', en: 'Automated Reporting' },
      { fa: 'یکپارچگی با پایگاه داده', en: 'Database Integration' },
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '۰۱',
    title: { fa: 'مشاوره و نیازسنجی', en: 'Consultation & Discovery' },
    description: {
      fa: 'بررسی دقیق اهداف کسب‌وکار و شناخت نیازهای فنی پروژه',
      en: 'In-depth analysis of business goals and technical scope',
    },
  },
  {
    step: '۰۲',
    title: { fa: 'طراحی و معماری', en: 'Design & Architecture' },
    description: {
      fa: 'ترسیم وایرفریم‌ها، پروتوتایپ تجربه کاربری و انتخاب پشته نرم‌افزاری',
      en: 'Wireframing, UI/UX prototyping, and tech-stack blueprinting',
    },
  },
  {
    step: '۰۳',
    title: { fa: 'توسعه و پیاده‌سازی', en: 'Development & Testing' },
    description: {
      fa: 'برنامه‌نویسی چابک، بازبینی مستمر کدها و آزمون‌های تضمین کیفیت',
      en: 'Agile development, regular code reviews, and quality assurance',
    },
  },
  {
    step: '۰۴',
    title: { fa: 'پشتیبانی و توسعه مداوم', en: 'Deployment & Support' },
    description: {
      fa: 'راه‌اندازی امن روی زیرساخت و همراهی مداوم برای ارتقای پایدار',
      en: 'Secure cloud deployment and continuous feature scaling',
    },
  },
]
