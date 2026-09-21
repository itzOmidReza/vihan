// src/data/home.ts

export const heroData = {
  badge: "توسعه سیستم‌های اختصاصی، نه قالب‌های آماده",
  titleLine1: "سیستم‌های هوشمند برای",
  titleGradient: "چالش‌های واقعی صنعت.",
  description: "یک ترکیب نادر از تخصص‌های عمیق زیر یک سقف. از پردازش تصویر و امنیت تهاجمی شبکه‌های صنعتی تا توسعه کرنل لینوکس. بدون شعارهای اغراق‌آمیز، فقط مهندسی دقیق.",
  primaryCta: { text: "درخواست مشاوره فنی", link: "/contact" },
  secondaryCta: { text: "بررسی پروژه‌های واقعی", link: "/projects" }
};

export const homeServicesData = {
  header: {
    titleStart: "حوزه‌های",
    titleGradient: "تخصص",
    titleEnd: "ما",
    description: "ما یک آژانس همه‌کاره نیستیم. تمرکز ما منحصراً روی چهار حوزه مهندسی عمیق است که ترکیب آن‌ها، زیرساخت‌های بی‌رقیبی خلق می‌کند."
  },
  // داده‌های مخصوص چیدمان Bento Grid در صفحه اصلی
  items: [
    {
      id: "ai",
      title: "هوش مصنوعی و داده",
      description: "پردازش تصویر، NLP فارسی و توسعه مدل‌های یادگیری ماشین اختصاصی برای استخراج ارزش از داده‌های خام صنعتی و پزشکی.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      isLarge: true, // برای Span شدن در گرید
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>`
    },
    {
      id: "security",
      title: "امنیت شبکه",
      description: "محافظت در سطح تحقیقاتی، تست نفوذ و توسعه سیستم‌های تشخیص نفوذ (IDS) برای شبکه‌های حساس.",
      isLarge: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>`
    },
    {
      id: "embedded",
      title: "سیستم‌های Embedded",
      description: "توسعه کرنل لینوکس، برنامه‌نویسی بوت‌لودرها و سفارشی‌سازی نرم‌افزار برای سخت‌افزارهای پردازش لبه (Edge).",
      isLarge: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`
    },
    {
      id: "web",
      title: "توسعه وب و اتصال AI",
      description: "توسعه پلتفرم‌های Full-Stack مدرن و ایمن با Astro و NestJS برای اتصال مدل‌های پیچیده به رابط کاربری با تحمل بار بالا.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      isLarge: true,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    }
  ]
};

export const homeProjectsData = {
  header: {
    titleStart: "پروژه‌های",
    titleGradient: "واقعی",
    description: "ما به جای طرح‌های مفهومی، روی چالش‌های عملیاتی کار می‌کنیم. بررسی دستاوردهای ما در محیط‌های صنعتی و تحقیقاتی."
  },
  cta: {
    text: "مشاهده همه پروژه‌ها",
    link: "/projects"
  }
};

export const ctaData = {
  titleLine1: "آماده‌اید زیرساخت خود را",
  titleGradient: "متحول کنید؟",
  description: "فرقی نمی‌کند نیاز به یک معماری هوش مصنوعی اختصاصی داشته باشید یا ایمن‌سازی شبکه‌های صنعتی؛ مهندسین ما آماده‌ی بررسی چالش شما هستند.",
  primaryBtn: { text: "شروع پروژه مشترک", link: "/contact" },
  secondaryBtn: { text: "ارسال ایمیل مستقیم", link: "mailto:info@vihanco.ir" }
};
