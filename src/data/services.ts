// src/data/services.ts

export const servicesHeader = {
  titleStart: "تخصص‌های",
  titleHighlight: "عمیق",
  titleEnd: "ما",
  description: "ما یک آژانس همه‌کاره نیستیم. تخصص ما در چهار حوزه‌ی اصلی متمرکز است که در ترکیب با یکدیگر، امکان ساخت سیستم‌های هوشمند، امن و بسیار بهینه‌شده را فراهم می‌کنند."
};

export const servicesList = [
  {
    id: "ai",
    title: "هوش مصنوعی و تحلیل داده",
    subtitle: "استخراج ارزش واقعی از داده‌های خام",
    description: "ما از مدل‌های آماده استفاده نمی‌کنیم؛ بلکه معماری‌های یادگیری ماشین را دقیقاً برای چالش اختصاصی شما طراحی و آموزش می‌دهیم.",
    features: [
      "پردازش تصویر و بینایی کامپیوتر (نظارت صنعتی، پزشکی)",
      "پردازش زبان طبیعی (NLP) اختصاصی برای زبان فارسی",
      "مدل‌سازی سری‌های زمانی برای پیش‌بینی دقیق",
      "تشخیص آنومالی (Anomaly Detection) در داده‌های صنعتی"
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>`
  },
  {
    id: "security",
    title: "امنیت شبکه و زیرساخت",
    subtitle: "محافظت در سطح تحقیقاتی، نه صرفاً نصب فایروال",
    description: "با بهره‌گیری از دانش آکادمیک (PhD) و تجربه هک قانون‌مند (Bug Bounty)، امنیت شبکه‌های سازمانی و صنعتی شما را تضمین می‌کنیم.",
    features: [
      "تست نفوذ (Penetration Testing) و امنیت تهاجمی",
      "طراحی و پیاده‌سازی سیستم‌های تشخیص نفوذ (IDS)",
      "پایش هوشمند شبکه و جلوگیری از تهدیدات Zero-day",
      "پیکربندی پیشرفته تجهیزات سازمانی (مانند MikroTik)"
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>`
  },
  {
    id: "embedded",
    title: "سیستم‌های Embedded و IoT",
    subtitle: "نزدیک‌ترین نقطه به سخت‌افزار",
    description: "توسعه‌ی نرم‌افزارهای سطح پایین و پایدار برای بردهای صنعتی و اینترنت اشیا، جایی که محدودیت منابع و نیاز به پایداری مطلق وجود دارد.",
    features: [
      "توسعه توزیع اختصاصی لینوکس (Embedded Linux / Yocto)",
      "برنامه‌نویسی و سفارشی‌سازی بوت‌لودرها (مانند U-Boot)",
      "توسعه و بهینه‌سازی کرنل لینوکس برای سخت‌افزار خاص",
      "یکپارچه‌سازی سطح پایین سخت‌افزار و نرم‌افزار"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`
  },
  {
    id: "web",
    title: "توسعه وب و اتصال AI",
    subtitle: "پل ارتباطی مدل‌های پیچیده و کاربران",
    description: "بهترین مدل‌های هوش مصنوعی بدون یک رابط کاربری سریع و ایمن بی‌فایده‌اند. ما سیستم‌های Full-Stack مدرنی توسعه می‌دهیم که تحمل بار پردازشی بالا را داشته باشند.",
    features: [
      "توسعه وب‌اپلیکیشن‌های Full-Stack با Astro و Nuxt",
      "توسعه بک‌اند قدرتمند با NestJS و میکروسرویس‌ها",
      "اتصال امن و سریع مدل‌های هوش مصنوعی به رابط کاربری",
      "اتوماسیون جریان‌های کاری (n8n) بدون هزینه‌های جانبی گزاف"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  }
];
