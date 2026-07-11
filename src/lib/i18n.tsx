import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "uz";

export const dictionary = {
  en: {
    common: {
      language: "Language",
      english: "EN",
      uzbek: "UZ",
      viewAll: "View all",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      hireMe: "Hire me",
    },
    hero: {
      available: "Available for new projects · Q3 2026",
      titleTop: "Building software",
      titleGradient: "that feels inevitable.",
      introName: "I'm",
      name: "Farrukh Tuganov",
      connector: "a",
      subtitle: "shipping polished, performant products for ambitious teams.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      stats: [
        ["Starter", "In the IT"],
        ["10+", "Projects developed"],
        ["500+", "Commits"],
      ],
    },
    aboutPreview: {
      eyebrow: "01 — About",
      title: "Building products that solve real",
      gradient: "problems",
      paragraphs: [
        "I'm a Full Stack Developer who treats software like a product, not just lines of code. I enjoy building clean, practical applications using React, TypeScript, Java, and Spring Boot.",
        "Through training and real projects like EatEase and a full-stack MERN blog platform, I've worked on REST APIs, authentication systems, responsive UIs, and database-driven applications.",
        "I care about writing maintainable code, building smooth user experiences, and continuously improving how I design and structure applications.",
      ],
    },
    skills: {
      eyebrow: "02 — Stack",
      title: "A toolkit refined by",
      gradient: "shipping",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        Tools: "Tools",
      },
    },
    experience: {
      eyebrow: "03 — Journey",
      title: "Starting years of building things that",
      gradient: "scale",
    },
    featuredProjects: {
      eyebrow: "04 — Selected work",
      title: "Featured",
      gradient: "projects",
    },
    contactCta: {
      eyebrow: "Let's connect",
      title: "Have an idea or opportunity?",
      gradient: "Let's talk.",
      body: "I'm a Full Stack Developer focused on React, Java, and Spring Boot. I enjoy building clean, user-friendly applications and continuously improving my craft. Feel free to reach out if you'd like to collaborate.",
      reachMe: "Reach me",
      email: "Email",
    },
    projectsPage: {
      eyebrow: "Selected work",
      title: "Projects worth",
      gradient: "opening",
      intro: "A sample of products I've designed, engineered, and shipped from training, internships, and personal practice.",
      body: "A focused collection of full-stack, frontend, and backend projects that show how I work across UI, APIs, data, and product flow.",
      certificationsEyebrow: "Certifications",
      certificationsTitle: "Verified credentials.",
      issued: "Issued",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Find me where",
      gradient: "work happens",
      intro: "I keep this page simple: no contact form, no fake inbox. Use the direct links below and I will reply from the channel you choose.",
      cards: {
        Email: "Best for project details, collaboration ideas, and official communication.",
        LinkedIn: "Best for professional updates, hiring conversations, and networking.",
        GitHub: "Best for reviewing my code, projects, and development activity.",
        Telegram: "Best for quick messages and faster informal communication.",
      },
      location: "Location",
      locationValue: "Remote, available worldwide",
      response: "Response",
      responseValue: "Usually within 24-48 hours",
    },
    aboutPage: {
      eyebrow: "About",
      title: "A journey of",
      gradient: "learning and building",
      intro: "From building my first web pages to developing full-stack applications with React and Spring Boot, I've always been fascinated by turning ideas into software that people can use.",
      paragraphs: [
        "I'm a Full Stack Developer with a strong focus on React, TypeScript, Java, and Spring Boot. I enjoy building modern web applications that combine intuitive user experiences with reliable backend systems.",
        "My software engineering journey began during my studies at the European University of Lefke, where I discovered a passion for web development. What started with building simple interfaces quickly evolved into developing complete applications with databases, REST APIs, and authentication systems.",
        "Through professional experience at BIGIT, training at ITransition, and projects such as EatEase and a full-stack MERN blog platform, I've gained hands-on experience across the entire development lifecycle. I'm constantly learning, exploring new technologies, and looking for opportunities to grow as a developer.",
      ],
      education: "Education",
      degree: "Bachelor of Software Engineering",
      university: "European University of Lefke · 2021 — 2025",
      interests: "Interests",
      interestItems: ["Traveling", "Technology", "Football", "Business", "Startups", "Software Architecture"],
      strengths: "Strengths",
    },
    blogPage: {
      eyebrow: "Writing",
      title: "Notes from the",
      gradient: "build",
      intro: "Short essays on systems, frontend craft, performance and the taste gap in AI-generated UI.",
      featured: "Featured",
      search: "Search articles...",
      all: "All",
      more: "More",
      less: "Show less",
      min: "min",
      minRead: "min read",
    },
  },
  uz: {
    common: {
      language: "Til",
      english: "EN",
      uzbek: "UZ",
      viewAll: "Barchasi",
    },
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      projects: "Loyihalar",
      blog: "Blog",
      contact: "Aloqa",
      hireMe: "Bog'lanish",
    },
    hero: {
      available: "Yangi loyihalar uchun ochiq · 2026 Q3",
      titleTop: "Foydali dasturlar",
      titleGradient: "yarataman.",
      introName: "Men",
      name: "Farrukh Tuganov",
      connector: "",
      subtitle: "jamoalar uchun chiroyli, tezkor va sifatli mahsulotlar yaratadigan Full Stack dasturchiman.",
      viewProjects: "Loyihalarni ko'rish",
      contactMe: "Aloqa",
      stats: [
        ["Starter", "IT sohasida"],
        ["10+", "Loyiha yaratildi"],
        ["500+", "Commit"],
      ],
    },
    aboutPreview: {
      eyebrow: "01 — Men haqimda",
      title: "Haqiqiy muammolarni hal qiladigan",
      gradient: "mahsulotlar",
      paragraphs: [
        "Men Full Stack dasturchiman. Dasturiy ta'minotni faqat kod sifatida emas, foydalanuvchi uchun foydali mahsulot sifatida ko'raman. React, TypeScript, Java va Spring Boot yordamida toza va amaliy ilovalar yaratishni yoqtiraman.",
        "EatEase va MERN blog platformasi kabi loyihalar orqali REST API, autentifikatsiya, responsive UI va ma'lumotlar bazasi bilan ishlaydigan ilovalar ustida ishlaganman.",
        "Menga qo'llab-quvvatlash oson bo'lgan kod yozish, qulay foydalanuvchi tajribasi yaratish va ilovalar arxitekturasini doimiy yaxshilash muhim.",
      ],
    },
    skills: {
      eyebrow: "02 — Texnologiyalar",
      title: "Amaliy ishlar orqali shakllangan",
      gradient: "toolkit",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Ma'lumotlar bazasi",
        Tools: "Vositalar",
      },
    },
    experience: {
      eyebrow: "03 — Yo'l",
      title: "Masshtablanuvchi tizimlar yaratishdagi",
      gradient: "boshlang'ich tajriba",
    },
    featuredProjects: {
      eyebrow: "04 — Tanlangan ishlar",
      title: "Asosiy",
      gradient: "loyihalar",
    },
    contactCta: {
      eyebrow: "Bog'lanamiz",
      title: "G'oya yoki imkoniyat bormi?",
      gradient: "Keling gaplashamiz.",
      body: "Men React, Java va Spring Boot yo'nalishiga e'tibor qaratgan Full Stack dasturchiman. Toza, foydalanuvchiga qulay ilovalar yaratishni va o'z mahoratimni doimiy oshirishni yoqtiraman.",
      reachMe: "Bog'lanish",
      email: "Email",
    },
    projectsPage: {
      eyebrow: "Tanlangan ishlar",
      title: "Ko'rishga arziydigan",
      gradient: "loyihalar",
      intro: "O'qish, amaliyot va shaxsiy tajriba davomida yaratgan loyihalarimdan namunalar.",
      body: "UI, API, ma'lumotlar va mahsulot oqimi bo'yicha qanday ishlashimni ko'rsatadigan full-stack, frontend va backend loyihalar to'plami.",
      certificationsEyebrow: "Sertifikatlar",
      certificationsTitle: "Tasdiqlangan sertifikatlar.",
      issued: "Berilgan",
    },
    contactPage: {
      eyebrow: "Aloqa",
      title: "Meni topishingiz mumkin bo'lgan",
      gradient: "kanallar",
      intro: "Bu sahifani sodda qoldirdim: forma yo'q, soxta inbox yo'q. Quyidagi to'g'ridan-to'g'ri havolalardan birini tanlang.",
      cards: {
        Email: "Loyiha tafsilotlari, hamkorlik g'oyalari va rasmiy aloqa uchun eng qulay.",
        LinkedIn: "Professional yangiliklar, ish takliflari va networking uchun.",
        GitHub: "Kodlarim, loyihalarim va dasturlash faoliyatimni ko'rish uchun.",
        Telegram: "Tezkor va norasmiy xabarlar uchun eng qulay.",
      },
      location: "Manzil",
      locationValue: "Remote, butun dunyo bo'ylab",
      response: "Javob",
      responseValue: "Odatda 24-48 soat ichida",
    },
    aboutPage: {
      eyebrow: "Men haqimda",
      title: "",
      gradient: "O'rganish va yaratish yo'li",
      intro: "Birinchi web sahifalarimdan boshlab React va Spring Boot bilan full-stack ilovalar yaratishgacha, g'oyalarni foydalanuvchilar ishlata oladigan dasturga aylantirish meni doim qiziqtirgan.",
      paragraphs: [
        "Men React, TypeScript, Java va Spring Boot yo'nalishlariga e'tibor qaratgan Full Stack dasturchiman. Intuitiv frontend va ishonchli backend tizimlarini birlashtiradigan zamonaviy web ilovalar yaratishni yoqtiraman.",
        "Dasturlash yo'lim European University of Lefke'dagi o'qishim davomida boshlandi. Oddiy interfeyslar yaratishdan boshlangan qiziqish ma'lumotlar bazasi, REST API va autentifikatsiyaga ega to'liq ilovalar yaratishga aylandi.",
        "BIGITdagi ish tajribasi, ITransitiondagi trening va EatEase hamda MERN blog platformasi kabi loyihalar orqali ishlab chiqish jarayonining turli bosqichlarida amaliy tajriba oldim. Hozir ham doimiy o'rganyapman va dasturchi sifatida o'sishga intilyapman.",
      ],
      education: "Ta'lim",
      degree: "Software Engineering bakalavri",
      university: "European University of Lefke · 2021 — 2025",
      interests: "Qiziqishlar",
      interestItems: ["Sayohat", "Texnologiya", "Futbol", "Biznes", "Startaplar", "Software Architecture"],
      strengths: "Kuchli tomonlar",
    },
    blogPage: {
      eyebrow: "Yozuvlar",
      title: "Ish jarayonidan",
      gradient: "qaydlar",
      intro: "Tizimlar, frontend, performance va AI yaratgan UI sifati haqida qisqa yozuvlar.",
      featured: "Tanlangan",
      search: "Maqolalarni qidirish...",
      all: "Barchasi",
      more: "Batafsil",
      less: "Yopish",
      min: "daq",
      minRead: "daq o'qish",
    },
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  text: (typeof dictionary)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");
    if (stored === "uz" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "uz" : "en"),
      text: dictionary[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
