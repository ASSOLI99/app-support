/* ═══════════════════════════════════════════
   Al-Captain — Main JS (shared across all pages)
   ═══════════════════════════════════════════ */

/* ─── Translations ─── */
const T = {
  en: {
    /* NAV */
    "nav.home":    "Home",
    "nav.about":   "About Us",
    "nav.privacy": "Privacy Policy",
    "nav.deletion": "Delete account & data",
    "nav.lang":    "العربية",

    /* FOOTER */
    "footer.tagline": "Connecting passengers with trusted drivers across the region.",
    "footer.pages":   "Pages",
    "footer.contact": "Contact",
    "footer.copy":    "© 2026 Assoli Industries. All rights reserved.",
    "footer.built":   "Built with ♥",

    /* ── INDEX ── */
    "hero.tag":       "The Smarter Way to Ride",
    "hero.title":     "Your Ride,\nYour Rules",
    "hero.sub":       "Al-Captain connects passengers with verified drivers for safe, reliable trips — anytime, anywhere.",
    "hero.cta1":      "Get Started",
    "hero.cta2":      "Learn More",
    "hero.badge1":    "Verified Drivers",
    "hero.badge2":    "Real-time Tracking",
    "hero.badge3":    "Secure & Fast",

    "stats.rides":    "Rides Completed",
    "stats.drivers":  "Active Drivers",
    "stats.cities":   "Cities Covered",
    "stats.rating":   "Average Rating",

    "services.tag":   "What We Offer",
    "services.title": "Everything you need\nfor a great ride",
    "services.sub":   "From instant booking to real-time tracking, we've built every feature with your comfort in mind.",
    "s1.title": "Instant Booking",
    "s1.desc":  "Book a ride in seconds. No waiting, no hassle — just tap and go.",
    "s2.title": "Real-time Tracking",
    "s2.desc":  "Track your driver live on the map from pickup to drop-off.",
    "s3.title": "Verified Drivers",
    "s3.desc":  "Every driver is background-checked and rated by the community.",
    "s4.title": "Flexible Plans",
    "s4.desc":  "Daily, weekly, monthly, or yearly subscriptions — choose what fits you.",
    "s5.title": "In-app Chat",
    "s5.desc":  "Communicate with your driver directly within the app, safely and easily.",
    "s6.title": "Secure Payments",
    "s6.desc":  "All transactions are encrypted and processed through trusted providers.",

    "how.tag":   "How It Works",
    "how.title": "Up and running\nin 4 simple steps",
    "how.sub":   "Getting started with Al-Captain takes less than two minutes.",
    "h1.title":  "Create Your Account",
    "h1.desc":   "Sign up with your phone number or Google/Apple account.",
    "h2.title":  "Book a Ride",
    "h2.desc":   "Set your pickup and destination, choose your ride, confirm.",
    "h3.title":  "Track in Real-time",
    "h3.desc":   "Watch your driver approach on a live map.",
    "h4.title":  "Reach Your Destination",
    "h4.desc":   "Arrive safely and rate your experience.",

    "cta.tag":   "Ready to Ride?",
    "cta.title": "Download Al-Captain Today",
    "cta.sub":   "Available on iOS and Android. Join thousands of happy passengers.",
    "cta.btn":   "Get the App",

    /* ── ABOUT ── */
    "about.hero.tag":   "Our Story",
    "about.hero.title": "Driving Better\nExperiences",
    "about.hero.sub":   "We started Al-Captain with one goal: make transportation simple, safe, and accessible for everyone.",

    "story.tag":   "Who We Are",
    "story.title": "Built by people who love to move",
    "story.p1":    "Al-Captain was founded by Assoli Industries with a mission to reimagine how people get around. We believe every ride should be comfortable, predictable, and affordable.",
    "story.p2":    "Our platform connects passengers with a network of verified, professional drivers — bringing transparency and trust to every trip.",
    "story.p3":    "From our first beta to thousands of completed rides, we continue to build features driven by real user feedback.",

    "mission.tag":    "Our Mission & Vision",
    "mission.title":  "We exist to move people forward",
    "m1.title": "Safety First",
    "m1.desc":  "Every driver is verified, every ride is tracked, and every user is protected.",
    "m2.title": "Accessibility",
    "m2.desc":  "Affordable rides for everyone — passengers and drivers alike.",
    "m3.title": "Reliability",
    "m3.desc":  "No cancellations, no surprises. Just dependable service, every time.",
    "m4.title": "Innovation",
    "m4.desc":  "We keep building smarter features to make your experience better.",

    "values.tag":   "Our Values",
    "values.title": "What drives us every day",
    "v1.title": "Transparency",
    "v1.desc":  "Clear pricing, honest policies, and open communication.",
    "v2.title": "Community",
    "v2.desc":  "We grow when our passengers and drivers succeed together.",
    "v3.title": "Trust",
    "v3.desc":  "Every feature we build is designed to earn and keep your trust.",

    "team.tag":   "Behind the Wheel",
    "team.title": "The Assoli Industries Team",
    "team.sub":   "A passionate group of builders, designers, and operators dedicated to your journey.",

    "contact.tag":   "Get in Touch",
    "contact.title": "We'd love to hear from you",
    "contact.email": "Email",
    "contact.company": "Company",

    /* ── PRIVACY ── */
    "pp.hero.tag":   "Legal",
    "pp.hero.title": "Privacy Policy",
    "pp.hero.sub":   "Last updated: March 17, 2026",
    "pp.s1.title":   "1. Introduction",
    "pp.s1.body":    "Welcome to Al-Captain, a ride-booking and transportation app connecting passengers with drivers. Assoli Industries is committed to protecting your privacy and personal data. This policy explains how we collect, use, share, and protect your information. By using the app, you agree to the terms described in this policy.",
    "pp.s2.title":   "2. Data We Collect",
    "pp.s3.title":   "3. How We Use Your Data",
    "pp.s4.title":   "4. Third-Party Sharing",
    "pp.s4.note":    "We do not sell your personal data to any third party.",
    "pp.s5.title":   "5. Permissions Requested",
    "pp.s6.title":   "6. Data Storage & Security",
    "pp.s7.title":   "7. Data Retention",
    "pp.s8.title":   "8. Your Rights",
    "pp.s8.contact": "To exercise these rights, contact us at:",
    "pp.s9.title":   "9. Children's Privacy",
    "pp.s9.body":    "Al-Captain is not intended for individuals under the age of 18. We do not knowingly collect data from children.",
    "pp.s10.title":  "10. Policy Changes",
    "pp.s10.body":   "We may update this policy from time to time. You will be notified of material changes via an in-app notification or email. Continued use of the app after an update constitutes acceptance of the revised policy.",
    "pp.s11.title":  "11. Contact Us",

    /* shared table headers */
    "th.party":   "Party",       "th.purpose":     "Purpose",
    "th.perm":    "Permission",  "th.reason":      "Reason",
    "th.right":   "Right",       "th.description": "Description",

    /* data table rows */
    "pp.tp1": "Supabase",             "pp.tp1p": "Database and authentication",
    "pp.tp2": "Google Maps / Places", "pp.tp2p": "Map display and location suggestions",
    "pp.tp3": "Google OAuth",         "pp.tp3p": "Sign-in",
    "pp.tp4": "Apple Authentication", "pp.tp4p": "iOS sign-in",
    "pp.tp5": "Twilio",               "pp.tp5p": "Sending verification messages (OTP)",
    "pp.tp6": "Expo Notifications",   "pp.tp6p": "App push notifications",

    "pp.pm1": "Location",      "pp.pm1r": "Set your pickup point and help the driver reach you",
    "pp.pm2": "Microphone",    "pp.pm2r": "In-app voice communication features",
    "pp.pm3": "Photo Library", "pp.pm3r": "Uploading a profile picture or vehicle information",
    "pp.pm4": "Notifications", "pp.pm4r": "Trip alerts and booking updates",

    "pp.dc1": "Account & Profile",    "pp.dc1d": "Name, phone, gender, profile picture, UUID, user type, email",
    "pp.dc2": "Location",             "pp.dc2d": "Current location, trip start/end points, saved addresses",
    "pp.dc3": "Trip & Booking",       "pp.dc3d": "Booking details, ride history, ride status, driver/passenger info",
    "pp.dc4": "Financial",            "pp.dc4d": "Subscription info, transaction history, pricing data",
    "pp.dc5": "Device & Usage",       "pp.dc5d": "Notifications, session tokens, locally cached data",

    "pp.use1": "Service delivery — connecting passengers with drivers, processing bookings, displaying maps",
    "pp.use2": "Authentication — sign-in via Google or Apple",
    "pp.use3": "Notifications — sending updates about trips and bookings",
    "pp.use4": "App improvement — analyzing usage patterns to improve the service",
    "pp.use5": "Safety & security — preventing fraud and ensuring user safety",
    "pp.use6": "Customer support — responding to help requests",

    "pp.sec1": "Data stored on encrypted Supabase servers",
    "pp.sec2": "Session data stored locally using secure storage (AsyncStorage)",
    "pp.sec3": "All data transfers use HTTPS",
    "pp.sec4": "Authentication tokens are automatically refreshed",

    "pp.ret1": "Account data: retained while your account is active",
    "pp.ret2": "Trip history: retained for operational and dispute resolution purposes",
    "pp.ret3": "Upon account deletion, personal data is removed within 30 days",

    "pp.r1": "Access",  "pp.r1d": "View your personal data stored with us",
    "pp.r2": "Correct", "pp.r2d": "Fix any inaccurate information",
    "pp.r3": "Delete",  "pp.r3d": "Remove your account and all associated data",
    "pp.r4": "Opt Out", "pp.r4d": "Unsubscribe from notifications at any time",
    "pp.r5": "Object",  "pp.r5d": "Dispute processing of your data for certain purposes",
  },

  ar: {
    /* NAV */
    "nav.home":    "الرئيسية",
    "nav.about":   "من نحن",
    "nav.privacy": "سياسة الخصوصية",
    "nav.deletion": "حذف الحساب والبيانات",
    "nav.lang":    "English",

    /* FOOTER */
    "footer.tagline": "نربط الركاب بالسائقين الموثوقين في جميع أنحاء المنطقة.",
    "footer.pages":   "الصفحات",
    "footer.contact": "تواصل معنا",
    "footer.copy":    "© 2026 Assoli Industries. جميع الحقوق محفوظة.",
    "footer.built":   "صُنع بـ ♥",

    /* ── INDEX ── */
    "hero.tag":    "الطريقة الأذكى للتنقل",
    "hero.title":  "رحلتك،\nبشروطك",
    "hero.sub":    "الكابتن يربطك بسائقين موثّقين لرحلات آمنة وموثوقة — في أي وقت، وفي أي مكان.",
    "hero.cta1":   "ابدأ الآن",
    "hero.cta2":   "اعرف أكثر",
    "hero.badge1": "سائقون موثّقون",
    "hero.badge2": "تتبع فوري",
    "hero.badge3": "سريع وآمن",

    "stats.rides":   "رحلة مكتملة",
    "stats.drivers": "سائق نشط",
    "stats.cities":  "مدينة مغطّاة",
    "stats.rating":  "متوسط التقييم",

    "services.tag":   "ما نقدمه",
    "services.title": "كل ما تحتاجه\nلرحلة رائعة",
    "services.sub":   "من الحجز الفوري إلى التتبع اللحظي، بنينا كل ميزة لراحتك.",
    "s1.title": "حجز فوري",
    "s1.desc":  "احجز رحلتك في ثوانٍ. بلا انتظار، بلا تعقيد — فقط اضغط وانطلق.",
    "s2.title": "تتبع مباشر",
    "s2.desc":  "تابع موقع سائقك على الخريطة من نقطة الانطلاق حتى الوصول.",
    "s3.title": "سائقون موثّقون",
    "s3.desc":  "كل سائق تم التحقق منه وتقييمه من قِبل المجتمع.",
    "s4.title": "خطط مرنة",
    "s4.desc":  "اشتراكات يومية أو أسبوعية أو شهرية أو سنوية — اختر ما يناسبك.",
    "s5.title": "محادثة داخل التطبيق",
    "s5.desc":  "تواصل مع سائقك مباشرة داخل التطبيق بأمان وسهولة.",
    "s6.title": "دفع آمن",
    "s6.desc":  "جميع المعاملات مشفّرة وتتم عبر مزودين موثوقين.",

    "how.tag":   "كيف يعمل",
    "how.title": "جاهز للانطلاق\nفي 4 خطوات بسيطة",
    "how.sub":   "البدء مع الكابتن لا يستغرق أكثر من دقيقتين.",
    "h1.title":  "أنشئ حسابك",
    "h1.desc":   "سجّل برقم هاتفك أو حساب Google/Apple.",
    "h2.title":  "احجز رحلة",
    "h2.desc":   "حدد نقطة الانطلاق والوجهة، اختر رحلتك، وأكّد.",
    "h3.title":  "تابع بشكل مباشر",
    "h3.desc":   "شاهد سائقك يقترب على خريطة حية.",
    "h4.title":  "صِل إلى وجهتك",
    "h4.desc":   "اصل بأمان وقيّم تجربتك.",

    "cta.tag":   "مستعد للانطلاق؟",
    "cta.title": "حمّل الكابتن اليوم",
    "cta.sub":   "متوفر على iOS وAndroid. انضم لآلاف الركاب السعداء.",
    "cta.btn":   "حمّل التطبيق",

    /* ── ABOUT ── */
    "about.hero.tag":   "قصتنا",
    "about.hero.title": "نقود تجارب\nأفضل",
    "about.hero.sub":   "أسسنا الكابتن بهدف واحد: جعل التنقل بسيطاً وآمناً وفي متناول الجميع.",

    "story.tag":   "من نحن",
    "story.title": "بُني بأيدٍ تعشق الحركة",
    "story.p1":    "تأسس الكابتن على يد Assoli Industries بمهمة إعادة تصوّر كيفية تنقل الناس. نؤمن أن كل رحلة يجب أن تكون مريحة ومتوقعة وبأسعار معقولة.",
    "story.p2":    "منصتنا تربط الركاب بشبكة من السائقين الموثّقين والمحترفين — لتجلب الشفافية والثقة لكل رحلة.",
    "story.p3":    "من أول نسخة تجريبية إلى آلاف الرحلات المكتملة، نواصل بناء الميزات بناءً على آراء المستخدمين الفعليين.",

    "mission.tag":   "مهمتنا ورؤيتنا",
    "mission.title": "نوجد لنُحرّك الناس إلى الأمام",
    "m1.title": "السلامة أولاً",
    "m1.desc":  "كل سائق موثّق، كل رحلة متتبّعة، وكل مستخدم محمي.",
    "m2.title": "إمكانية الوصول",
    "m2.desc":  "رحلات ميسورة للجميع — للركاب والسائقين على حد سواء.",
    "m3.title": "الموثوقية",
    "m3.desc":  "لا إلغاءات، لا مفاجآت. خدمة موثوقة في كل مرة.",
    "m4.title": "الابتكار",
    "m4.desc":  "نواصل بناء ميزات أذكى لتجعل تجربتك أفضل.",

    "values.tag":   "قيمنا",
    "values.title": "ما يحرّكنا كل يوم",
    "v1.title": "الشفافية",
    "v1.desc":  "تسعير واضح وسياسات صادقة وتواصل مفتوح.",
    "v2.title": "المجتمع",
    "v2.desc":  "ننمو عندما ينجح ركابنا وسائقونا معاً.",
    "v3.title": "الثقة",
    "v3.desc":  "كل ميزة نبنيها مصممة لكسب ثقتك والحفاظ عليها.",

    "team.tag":   "خلف المقود",
    "team.title": "فريق Assoli Industries",
    "team.sub":   "مجموعة متحمسة من المطورين والمصممين والمشغّلين المكرّسين لرحلتك.",

    "contact.tag":     "تواصل معنا",
    "contact.title":   "يسعدنا سماعك",
    "contact.email":   "البريد الإلكتروني",
    "contact.company": "الشركة",

    /* ── PRIVACY ── */
    "pp.hero.tag":   "قانوني",
    "pp.hero.title": "سياسة الخصوصية",
    "pp.hero.sub":   "آخر تحديث: 17 مارس 2026",
    "pp.s1.title":   "١. مقدمة",
    "pp.s1.body":    "مرحباً بك في تطبيق الكابتن، تطبيق نقل وحجز رحلات يربط بين الركاب والسائقين. تلتزم شركة Assoli Industries بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع بياناتك واستخدامها ومشاركتها وحمايتها. باستخدامك للتطبيق، فإنك توافق على الشروط المبيّنة في هذه السياسة.",
    "pp.s2.title":   "٢. البيانات التي نجمعها",
    "pp.s3.title":   "٣. كيف نستخدم بياناتك",
    "pp.s4.title":   "٤. مشاركة البيانات مع أطراف ثالثة",
    "pp.s4.note":    "نحن لا نبيع بياناتك الشخصية لأي جهة خارجية.",
    "pp.s5.title":   "٥. الأذونات المطلوبة",
    "pp.s6.title":   "٦. تخزين البيانات وحمايتها",
    "pp.s7.title":   "٧. مدة الاحتفاظ بالبيانات",
    "pp.s8.title":   "٨. حقوقك",
    "pp.s8.contact": "للاستفادة من هذه الحقوق، تواصل معنا:",
    "pp.s9.title":   "٩. خصوصية الأطفال",
    "pp.s9.body":    "تطبيق الكابتن غير مخصص للأفراد دون سن 18 عاماً. لا نجمع عن قصد بيانات الأطفال.",
    "pp.s10.title":  "١٠. التغييرات على السياسة",
    "pp.s10.body":   "قد نُحدّث هذه السياسة من وقت لآخر. سيتم إعلامك بأي تغييرات جوهرية عبر إشعار داخل التطبيق أو البريد الإلكتروني. استمرارك في استخدام التطبيق بعد التحديث يعني موافقتك على السياسة الجديدة.",
    "pp.s11.title":  "١١. التواصل معنا",

    "th.party":   "الجهة",       "th.purpose":     "الغرض",
    "th.perm":    "الإذن",       "th.reason":      "السبب",
    "th.right":   "الحق",        "th.description": "الوصف",

    "pp.tp1": "Supabase",             "pp.tp1p": "قاعدة البيانات والمصادقة",
    "pp.tp2": "Google Maps / Places", "pp.tp2p": "عرض الخرائط واقتراح المواقع",
    "pp.tp3": "Google OAuth",         "pp.tp3p": "تسجيل الدخول",
    "pp.tp4": "Apple Authentication", "pp.tp4p": "تسجيل الدخول على iOS",
    "pp.tp5": "Twilio",               "pp.tp5p": "إرسال رسائل التحقق (OTP)",
    "pp.tp6": "Expo Notifications",   "pp.tp6p": "إشعارات التطبيق",

    "pp.pm1": "الموقع الجغرافي", "pp.pm1r": "تحديد نقطة الانطلاق ومساعدة السائق للوصول إليك",
    "pp.pm2": "الميكروفون",      "pp.pm2r": "ميزات التواصل الصوتي داخل التطبيق",
    "pp.pm3": "معرض الصور",      "pp.pm3r": "رفع صورة الملف الشخصي أو بيانات المركبة",
    "pp.pm4": "الإشعارات",       "pp.pm4r": "تنبيهات الرحلات وتحديثات الحجوزات",

    "pp.dc1": "الحساب والملف الشخصي", "pp.dc1d": "الاسم، الهاتف، الجنس، الصورة، UUID، نوع المستخدم، البريد",
    "pp.dc2": "الموقع الجغرافي",      "pp.dc2d": "الموقع الحالي، نقاط الانطلاق والوصول، العناوين المخزّنة",
    "pp.dc3": "الرحلات والحجوزات",    "pp.dc3d": "تفاصيل الحجوزات، سجل الرحلات، الحالة، بيانات السائق والراكب",
    "pp.dc4": "البيانات المالية",      "pp.dc4d": "معلومات الاشتراك، سجل المعاملات، بيانات التسعير",
    "pp.dc5": "الجهاز والاستخدام",    "pp.dc5d": "الإشعارات، بيانات الجلسة والرموز، البيانات المخزنة محلياً",

    "pp.use1": "تقديم الخدمة — ربط الركاب بالسائقين، معالجة الحجوزات، عرض الخرائط",
    "pp.use2": "التحقق من الهوية — تسجيل الدخول عبر Google أو Apple",
    "pp.use3": "الإشعارات — إرسال تحديثات حول الرحلات والحجوزات",
    "pp.use4": "تحسين التطبيق — تحليل أنماط الاستخدام لتطوير الخدمة",
    "pp.use5": "السلامة والأمن — منع الاحتيال وضمان سلامة المستخدمين",
    "pp.use6": "الدعم الفني — الاستجابة لطلبات المساعدة",

    "pp.sec1": "تُخزَّن بياناتك على خوادم Supabase المشفّرة",
    "pp.sec2": "تُحفظ بيانات الجلسة محلياً باستخدام التخزين الآمن (AsyncStorage)",
    "pp.sec3": "نستخدم بروتوكول HTTPS لجميع عمليات نقل البيانات",
    "pp.sec4": "يتم تحديث رموز المصادقة تلقائياً للحفاظ على أمان حسابك",

    "pp.ret1": "بيانات الحساب: يُحتفظ بها طالما حسابك نشط",
    "pp.ret2": "سجل الرحلات: يُحتفظ به لأغراض التشغيل والنزاعات",
    "pp.ret3": "عند حذف حسابك، يتم حذف بياناتك الشخصية خلال 30 يوماً",

    "pp.r1": "الاطلاع",   "pp.r1d": "الاطلاع على بياناتك الشخصية المخزنة لدينا",
    "pp.r2": "التصحيح",   "pp.r2d": "تصحيح أي بيانات غير دقيقة",
    "pp.r3": "الحذف",     "pp.r3d": "حذف حسابك وبياناتك المرتبطة به",
    "pp.r4": "الانسحاب",  "pp.r4d": "إلغاء الاشتراك في الإشعارات في أي وقت",
    "pp.r5": "الاعتراض",  "pp.r5d": "الاعتراض على معالجة بياناتك لأغراض معينة",
  }
};

/* ─── Language State ─── */
let currentLang = localStorage.getItem("alcaptain_lang") || "en";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("alcaptain_lang", lang);
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (T[lang][key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = T[lang][key];
      } else {
        el.innerHTML = T[lang][key].replace(/\n/g, "<br>");
      }
    }
  });

  // update lang button label
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.textContent = T[lang]["nav.lang"];
  });

  // mark active nav link
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(a => {
    a.classList.remove("active");
    const page = window.location.pathname.split("/").pop() || "index.html";
    const href = a.getAttribute("href");
    if (href && (href === page || (page === "" && href === "index.html"))) {
      a.classList.add("active");
    }
  });
}

function toggleLang() {
  applyLang(currentLang === "en" ? "ar" : "en");
}

/* ─── Mobile Nav ─── */
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });

  // close on link click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
    });
  });
}

/* ─── Scroll Reveal ─── */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

/* ─── Counter Animation ─── */
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)) + suffix;
    }, 16);
  });
}

function initCounters() {
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;

  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      io.disconnect();
    }
  }, { threshold: 0.3 });

  io.observe(statsSection);
}

/* ─── Sticky Nav shadow ─── */
function initNavScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? "0 2px 20px rgba(0,0,0,0.3)"
      : "none";
  }, { passive: true });
}

/* ─── Init ─── */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);
  initMobileNav();
  initReveal();
  initCounters();
  initNavScroll();
});
