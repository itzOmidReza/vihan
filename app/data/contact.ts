// app/data/contact.ts
import type {
  ContactChannel,
  ContactOffice,
  ContactSubjectOption,
} from '~/types'

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    type: 'email',
    title: {
      fa: 'ایمیل ما',
      en: 'Email Us',
    },
    value: 'info@vihandata.ir',
    href: 'mailto:info@vihandata.ir',
    icon: 'Mail',
    colorClass: 'bg-blue-500/10 text-blue-500',
    isLtr: true,
  },
  {
    id: 'phone',
    type: 'phone',
    title: {
      fa: 'شماره تماس',
      en: 'Phone Number',
    },
    value: '۰۸۳-۳۸۲۵۰۰۰۰',
    href: 'tel:+988338250000',
    icon: 'Phone',
    colorClass: 'bg-emerald-500/10 text-emerald-500',
    isLtr: true,
  },
  {
    id: 'hours',
    type: 'hours',
    title: {
      fa: 'ساعات کاری',
      en: 'Working Hours',
    },
    value: 'شنبه تا چهارشنبه ۹ تا ۱۸',
    icon: 'Clock',
    colorClass: 'bg-purple-500/10 text-purple-500',
    isLtr: false,
  },
]

export const contactOffice: ContactOffice = {
  title: {
    fa: 'دفتر مرکزی',
    en: 'Headquarters',
  },
  address: {
    fa: 'کرمانشاه، پارک علم و فناوری زاگرس، مرکز رشد فناوری اطلاعات، برج فناوری',
    en: 'Zagros Science & Technology Park, IT Incubator Center, Tech Tower, Kermanshah',
  },
  socials: {
    linkedin: 'https://linkedin.com/company/vihan-tech',
    instagram: 'https://instagram.com/vihan_tech',
    twitter: 'https://x.com/vihan_tech',
    github: 'https://github.com/vihan-tech',
  },
}

export const contactSubjectOptions: ContactSubjectOption[] = [
  {
    id: 'ai',
    label: {
      fa: 'هوش مصنوعی و یادگیری ماشین',
      en: 'AI & Machine Learning',
    },
  },
  {
    id: 'web',
    label: {
      fa: 'توسعه وب‌سایت و پلتفرم آنلاین',
      en: 'Web Development & Platforms',
    },
  },
  {
    id: 'app',
    label: {
      fa: 'اپلیکیشن موبایل و PWA',
      en: 'Mobile App & PWA',
    },
  },
  {
    id: 'dashboard',
    label: {
      fa: 'داشبورد مدیریتی و هوش تجاری',
      en: 'Executive Dashboard & BI',
    },
  },
  {
    id: 'consulting',
    label: {
      fa: 'مشاوره فنی و معماری سیستم',
      en: 'Technical Consultation & Architecture',
    },
  },
]

