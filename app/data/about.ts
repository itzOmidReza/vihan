// app/data/about.ts
import type { CoreValue, LocalizedString } from '~/types'

export const companyVision: {
  badge: LocalizedString
  title: LocalizedString
  mission: LocalizedString
  keyPoints: LocalizedString[]
} = {
  badge: {
    fa: 'چشم‌انداز و مأموریت',
    en: 'Vision & Mission',
  },
  title: {
    fa: 'مأموریت و چشم‌انداز ویهان',
    en: 'Vihan Vision & Mission',
  },
  mission: {
    fa: 'تبدیل شدن به معتبرترین قطب ارائه راهکارهای هوش مصنوعی کاربردی و سامانه‌های داده‌محور در سطح ملی و منطقه‌ای، از طریق به‌کارگیری هوشمندانه‌ترین استعدادها و بالاترین استانداردهای مهندسی روز جهان.',
    en: 'To become the benchmark hub for applied artificial intelligence and data-driven systems regionally, uniting visionary talent with elite engineering standards.',
  },
  keyPoints: [
    {
      fa: 'طراحی بومی سیستم‌های تصمیم‌یار هوشمند',
      en: 'Proprietary intelligent decision-support architectures',
    },
    {
      fa: 'امنیت داده‌ها و انطباق با حریم خصوصی سازمانی',
      en: 'Enterprise-grade data security and compliance',
    },
    {
      fa: 'نوآوری مداوم بر لبه تکنولوژی‌های جهانی',
      en: 'Continuous innovation at the frontier of global technology',
    },
  ],
}

export const coreValues: CoreValue[] = [
  {
    id: 'modern-engineering',
    title: {
      fa: 'مهندسی پیشرو و مدرن',
      en: 'Modern Engineering',
    },
    desc: {
      fa: 'پرهیز از روش‌های سنتی؛ اتکا به جدیدترین متدهای یادگیری ماشین، معماری ابری و فریم‌ورک‌های فوق سریع.',
      en: 'Rejecting legacy stagnation; embracing modern machine learning breakthroughs, cloud architecture, and ultra-fast frameworks.',
    },
    icon: 'Cpu',
  },
  {
    id: 'transparency',
    title: {
      fa: 'تعهد به کیفیت و شفافیت',
      en: 'Quality & Transparency',
    },
    desc: {
      fa: 'تحویل منظم گزارش‌های اسپرینت، کدنویسی استاندارد و مستندسازی کامل بدون پیچیدگی‌های مبهم.',
      en: 'Sprint accountability, pristine code standards, and transparent documentation without technical ambiguity.',
    },
    icon: 'ShieldCheck',
  },
  {
    id: 'scalability',
    title: {
      fa: 'تمرکز بر مقیاس‌پذیری تجاری',
      en: 'Scalable Growth',
    },
    desc: {
      fa: 'محصولاتی که می‌سازیم همراه با رشد کاربران و تراکنش‌های بیزینس شما پایدار می‌مانند و توسعه می‌یابند.',
      en: 'Architected to scale seamlessly as user traffic and business transactions multiply.',
    },
    icon: 'Zap',
  },
]

