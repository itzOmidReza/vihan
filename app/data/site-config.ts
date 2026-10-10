// app/data/site-config.ts
export const siteConfig = {
  name: {
    fa: 'ویهان',
    en: 'Vihan',
  },
  legalName: {
    fa: 'شرکت ویهان داده گستر زاگرس',
    en: 'Vihan Dade Gostar Zagros Co.',
  },
  slogan: {
    fa: 'تلاقی خلاقیت انسانی و قدرت هوش مصنوعی',
    en: 'The Intersection of Human Creativity and AI Power',
  },
  contact: {
    phone: '۰۲۱-۱۲۳۴۵۶۷۸',
    rawPhone: '+982112345678',
    mobile: '۰۹۱۸۵۶۲۱۵۶۷',
    rawMobile: '+989185621567',
    email: 'info@vihan.tech',
    address: {
      fa: 'تهران، خیابان آزادی، ناحیه نوآوری شریف، برج فناوری',
      en: 'Tech Tower, Sharif Innovation District, Azadi St, Tehran',
    },
    workingHours: {
      fa: 'شنبه تا چهارشنبه ۹ تا ۱۸',
      en: 'Sat - Wed: 9:00 - 18:00',
    },
  },
  stats: {
    specialists: '۴+', // تعداد واقعی اعضای تیم
    projects: '۵+',    // تعداد پروژه‌های موفق توسعه‌یافته
    technologies: '۱۰+', // پشته‌های فنی مدرن
  },
  socials: {
    github: 'https://github.com/vihan-tech',
    linkedin: 'https://linkedin.com/company/vihan-tech',
    twitter: 'https://x.com/vihan_tech',
    instagram: 'https://instagram.com/vihan_tech',
  },
} as const
