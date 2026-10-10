// app/data/testimonials.ts
import type { Testimonial } from '~/types'

export const testimonials: Testimonial[] = [
  {
    id: 'mahnaz-derakhshan',
    name: {
      fa: 'مهناز درخشان',
      en: 'Mahnaz Derakhshan',
    },
    company: {
      fa: 'مدیر عامل ویراموتور',
      en: 'CEO at ViraMotor',
    },
    comment: {
      fa: 'همکاری با این تیم تجربه فوق‌العاده‌ای بود. ابزارهای هوش مصنوعی آن‌ها دقیقاً همان چیزی بود که برای بهینه‌سازی فروش به آن نیاز داشتیم.',
      en: 'Working with this team was an exceptional experience. Their AI tools were precisely what we needed to optimize sales.',
    },
    avatar: 'https://i.pravatar.cc/150?u=mahnaz',
    rating: 5,
  },
  {
    id: 'alireza-salimi',
    name: {
      fa: 'علیرضا سلیمی',
      en: 'Alireza Salimi',
    },
    company: {
      fa: 'مدیر فنی آریا‌تک',
      en: 'CTO at AryaTech',
    },
    comment: {
      fa: 'پشتیبانی عالی و دانش فنی بالا. پلتفرم آن‌ها به ما کمک کرد تا فرآیندهای تکراری را حذف کنیم و روی خلاقیت تمرکز کنیم.',
      en: 'Outstanding technical prowess and support. Their platform helped eliminate repetitive pipelines and focus on core innovation.',
    },
    avatar: 'https://i.pravatar.cc/150?u=alireza',
    rating: 5,
  },
  {
    id: 'sara-ahmadi',
    name: {
      fa: 'سارا احمدی',
      en: 'Sara Ahmadi',
    },
    company: {
      fa: 'بنیان‌گذار استارتاپ نوآ',
      en: 'Founder at Noa Startup',
    },
    comment: {
      fa: 'سرعت و امنیت زیرساخت‌های ارائه شده فراتر از انتظار ما بود. تیمی که واقعاً دغدغه رشد کسب‌وکار شما را دارد.',
      en: 'The speed and architectural resilience surpassed our highest expectations. A team genuinely dedicated to business growth.',
    },
    avatar: 'https://i.pravatar.cc/150?u=sara',
    rating: 5,
  },
  {
    id: 'reza-mohammadi',
    name: {
      fa: 'رضا محمدی',
      en: 'Reza Mohammadi',
    },
    company: {
      fa: 'مدیر دپارتمان IT پیشرو',
      en: 'IT Director at Pishro Group',
    },
    comment: {
      fa: 'راهکارهای هوشمندسازی این شرکت باعث شد هزینه‌های عملیاتی ما تا ۳۰ درصد در سال اول کاهش پیدا کند.',
      en: 'Their intelligent automation strategies helped reduce our operational expenses by 30% in the very first year.',
    },
    avatar: 'https://i.pravatar.cc/150?u=reza',
    rating: 5,
  },
]
