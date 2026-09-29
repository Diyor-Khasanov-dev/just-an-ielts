export type Language = 'eng' | 'uz' | 'ru'

export interface Translations {
  // Navigation & General
  nav: {
    howItWorks: string
    estimator: string
    skillsHub: string
    signIn: string
    startLearning: string
    getStarted: string
  }
  // Hero section
  hero: {
    badge: string
    title1: string
    titleEm: string
    subtitle: string
    buildPlan: string
    seeHowItWorks: string
    trustedBy: string
    todaysFocus: string
    targetBand: string
    readinessScore: string
    recommendedSession: string
    writingSessionTitle: string
    writingSessionDesc: string
  }
  // Band Estimator
  estimator: {
    eyebrow: string
    title: string
    subtitle: string
    pace: string
    timeline: string
    priorityStrategy: string
    dailyPractice: string
    targetReadiness: string
    difficultyLevel: string
  }
  // Skills Showcase
  skills: {
    eyebrow: string
    title: string
    listening: string
    reading: string
    writing: string
    speaking: string
    masteryDrills: string
    startPracticeNow: string
    launchPracticeHub: string
  }
  // Method
  method: {
    eyebrow: string
    title: string
    titleEm: string
    subtitle: string
    step1: string
    step2: string
    step3: string
    step4: string
    createPlan: string
  }
  // Testimonials
  testimonials: {
    eyebrow: string
    title: string
    verifiedLearner: string
  }
  // Footer
  footer: {
    rights: string
  }
  // Sidebar
  sidebar: {
    workspace: string
    overview: string
    practiceHub: string
    mockTests: string
    myProgress: string
    historyPoints: string
    skillPractice: string
    listening: string
    reading: string
    writing: string
    speaking: string
    vocabulary: string
    grammar: string
    readyForBand8: string
    unlockFeedback: string
    explorePlans: string
    settings: string
    logout: string
  }
  // Topbar / Navbar
  navbar: {
    searchPlaceholder: string
    targetBand: string
  }
  // Auth
  auth: {
    welcomeBack: string
    signInToContinue: string
    subtitle: string
    continueWithGoogle: string
    orContinueWithEmail: string
    emailAddress: string
    password: string
    forgotPassword: string
    signIn: string
    newToIelts: string
    createAccount: string
    termsAgreement: string
    terms: string
    privacyPolicy: string
    purposeTitle: string
    purposeTitleEm: string
    purposeDesc: string
  }
  // Onboarding
  onboarding: {
    personalisePath: string
    stepOf3: string
    whatBringsYou: string
    whenTakingTest: string
    planReady: string
    chooseStartingPoint: string
    back: string
    continue: string
    freePlan: string
    freePlanDesc: string
    premiumPlan: string
    premiumPlanDesc: string
    startPremium: string
    continueForFree: string
    mostPopular: string
  }
  // Settings
  settings: {
    eyebrow: string
    title: string
    subtitle: string
    tabProfile: string
    tabReminders: string
    tabSecurity: string
    tabAppearance: string
    profileHeader: string
    fullName: string
    emailAddress: string
    targetBandScore: string
    upcomingExamDate: string
    studyPaceHeader: string
    dailyGoal: string
    minsDay: string
    dailyNotifications: string
    dailyNotificationsDesc: string
    appearanceHeader: string
    themeMode: string
    lightTheme: string
    darkTheme: string
    languagePreference: string
    selectLanguage: string
    saveChanges: string
    savedSuccess: string
  }
  // Dashboard / Practice
  dashboard: {
    greeting: string
    subtitle: string
    startPractice: string
    overallReadiness: string
    awayFromTarget: string
    viewProgress: string
    continueLeftOff: string
    shortFocusedPractice: string
    seeAllPractice: string
    latestBand: string
    min: string
    todaysFocus: string
    ideasEasierToFollow: string
    linkingIdeasDesc: string
    paragraphFlow: string
    clarityFeedback: string
    beginWritingTask: string
    recentActivity: string
    history: string
  }
  // 404 Not Found
  notFound: {
    eyebrow: string
    title: string
    titleEm: string
    subtitle: string
    backHome: string
    continuePracticing: string
    lookingForPage: string
    mainNav: string
    targetBand: string
    unexpectedQuestion: string
    findingNextStep: string
    keepGoing: string
    nextQuestion: string
    oneWrongAnswer: string
    disclaimer: string
  }
  // Loading
  loading: {
    loadingWorkspace: string
    preparingSession: string
    pleaseWait: string
  }
}

export const translations: Record<Language, Translations> = {
  eng: {
    nav: {
      howItWorks: 'How it works',
      estimator: 'Band Estimator',
      skillsHub: 'Skills Hub',
      signIn: 'Sign in',
      startLearning: 'Start learning',
      getStarted: 'Get started',
    },
    hero: {
      badge: 'Targeted IELTS Preparation workspace',
      title1: 'Every target band starts with',
      titleEm: 'a better plan.',
      subtitle:
        'Cut out the guesswork with focused practice drills, interactive exam tools, and clear feedback engineered for your specific score target.',
      buildPlan: 'Build my study plan',
      seeHowItWorks: 'See how it works',
      trustedBy: 'Trusted by 12,000+ IELTS test takers worldwide',
      todaysFocus: "Today's Focus",
      targetBand: 'YOUR TARGET BAND',
      readinessScore: 'readiness score',
      recommendedSession: 'RECOMMENDED SESSION',
      writingSessionTitle: 'Writing Task 2 · Coherence & Flow',
      writingSessionDesc: 'Opinion Essay · 12 min exercise',
    },
    estimator: {
      eyebrow: 'PERSONALIZED ROADMAP',
      title: 'Calculate your path to Band',
      subtitle:
        'Select your goal band score to see recommended weekly preparation time and high-priority study focus.',
      pace: 'Recommended Pace',
      timeline: 'Estimated Timeline',
      priorityStrategy: 'Priority Strategy',
      dailyPractice: 'Consistent daily practice',
      targetReadiness: 'To reach target readiness',
      difficultyLevel: 'Difficulty level:',
    },
    skills: {
      eyebrow: 'PREPARE WITH INTENTION',
      title: 'Master every exam dimension.',
      listening: 'listening',
      reading: 'reading',
      writing: 'writing',
      speaking: 'speaking',
      masteryDrills: 'Skill Mastery Drills',
      startPracticeNow: 'Start Practice Now',
      launchPracticeHub: 'Launch Practice Hub',
    },
    method: {
      eyebrow: 'A CALMER WAY TO PREPARE',
      title: 'Less guessing.',
      titleEm: 'More progress.',
      subtitle:
        'Traditional test prep floods you with endless worksheets. We give you structured daily objectives, instant diagnostics, and step-by-step guidance.',
      step1: 'Set your target band score and upcoming test date.',
      step2: 'Follow a personalized weekly schedule focusing on your weakest areas.',
      step3: 'Receive instant criterion-based feedback after every exercise.',
      step4: 'Track your readiness band trajectory with clear, actionable insights.',
      createPlan: 'Create my study plan',
    },
    testimonials: {
      eyebrow: 'REAL TRANSFORMATION',
      title: 'Hear from test takers who hit their band',
      verifiedLearner: 'Verified Learner',
    },
    footer: {
      rights: '© ' + new Date().getFullYear() + ' just an ielts. Study with clarity and confidence.',
    },
    sidebar: {
      workspace: 'Workspace',
      overview: 'Overview',
      practiceHub: 'Practice hub',
      mockTests: 'Mock tests',
      myProgress: 'My progress',
      historyPoints: 'History & Points',
      skillPractice: 'Skill Practice',
      listening: 'Listening',
      reading: 'Reading',
      writing: 'Writing',
      speaking: 'Speaking',
      vocabulary: 'Vocabulary',
      grammar: 'Grammar',
      readyForBand8: 'Ready for Band 8+?',
      unlockFeedback: 'Unlock AI writing feedback & full mock exams.',
      explorePlans: 'Explore plans →',
      settings: 'Settings',
      logout: 'Log out',
    },
    navbar: {
      searchPlaceholder: 'Search lessons, practice drills, or flashcards...',
      targetBand: 'Target: Band',
    },
    auth: {
      welcomeBack: 'Welcome back',
      signInToContinue: 'Sign in to continue.',
      subtitle: "We'll take you to a short setup, then your dashboard.",
      continueWithGoogle: 'Continue with Google',
      orContinueWithEmail: 'or continue with email',
      emailAddress: 'Email address',
      password: 'Password',
      forgotPassword: 'Forgot password?',
      signIn: 'Sign in',
      newToIelts: 'New to IELTS?',
      createAccount: 'Create an account',
      termsAgreement: 'By continuing, you agree to our',
      terms: 'Terms',
      privacyPolicy: 'Privacy Policy',
      purposeTitle: 'Practice with',
      purposeTitleEm: 'purpose.',
      purposeDesc:
        'Build a focused routine for every IELTS skill, with clear feedback at every step.',
    },
    onboarding: {
      personalisePath: "LET'S PERSONALISE YOUR PATH",
      stepOf3: 'STEP',
      whatBringsYou: 'What brings you to IELTS?',
      whenTakingTest: 'When are you taking your test?',
      planReady: 'YOUR PLAN IS READY',
      chooseStartingPoint: 'Choose your starting point.',
      back: 'Back',
      continue: 'Continue',
      freePlan: 'Free plan',
      freePlanDesc: 'Build your routine and practise every skill.',
      premiumPlan: 'Premium',
      premiumPlanDesc: 'Unlimited feedback, mock tests and targeted review.',
      startPremium: 'Start Premium',
      continueForFree: 'Continue for free',
      mostPopular: 'Most popular',
    },
    settings: {
      eyebrow: 'PREFERENCES & GOALS',
      title: 'Settings',
      subtitle:
        'Customize your target band, exam date timeline, daily reminders, theme mode, language, and profile preferences.',
      tabProfile: 'Profile & Band Target',
      tabReminders: 'Practice Reminders',
      tabSecurity: 'Account Security',
      tabAppearance: 'Appearance & Language',
      profileHeader: 'Profile & Band Goals',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      targetBandScore: 'Target Band Score',
      upcomingExamDate: 'Upcoming Exam Date',
      studyPaceHeader: 'Study Pace & Reminders',
      dailyGoal: 'Daily Practice Goal',
      minsDay: 'mins/day',
      dailyNotifications: 'Daily Study Notifications',
      dailyNotificationsDesc: 'Receive email reminders when your streak is at risk.',
      appearanceHeader: 'Theme Mode & Language',
      themeMode: 'Theme Mode',
      lightTheme: 'Light Theme',
      darkTheme: 'Dark Theme',
      languagePreference: 'Language Preference',
      selectLanguage: 'Select Language',
      saveChanges: 'Save Changes',
      savedSuccess: 'Settings updated successfully! Your preferences have been saved.',
    },
    dashboard: {
      greeting: 'Good morning, Alex.',
      subtitle: 'Here is a clear path towards your target band.',
      startPractice: 'Start a practice',
      overallReadiness: 'Overall readiness',
      awayFromTarget: 'away. Keep this week\'s streak going.',
      viewProgress: 'View progress',
      continueLeftOff: 'Continue where you left off',
      shortFocusedPractice: 'Short, focused practice that fits your day.',
      seeAllPractice: 'See all practice',
      latestBand: 'Latest band',
      min: 'min',
      todaysFocus: "Today's focus",
      ideasEasierToFollow: 'Make your ideas easier to follow.',
      linkingIdeasDesc: 'Practice linking your main ideas with precise, natural transitions.',
      paragraphFlow: 'Build a stronger paragraph flow',
      clarityFeedback: 'Get instant clarity feedback',
      beginWritingTask: 'Begin writing task',
      recentActivity: 'Recent activity',
      history: 'History',
    },
    notFound: {
      eyebrow: 'PAGE NOT FOUND',
      title: 'Not every answer',
      titleEm: 'is the right one.',
      subtitle: "Looks like this page didn't make the cut. It may have moved, been removed, or the URL may be incorrect.",
      backHome: 'Back to home',
      continuePracticing: 'Continue practicing',
      lookingForPage: 'Looking for a page?',
      mainNav: 'Try using the top or side navigation',
      targetBand: 'Your Target Band',
      unexpectedQuestion: 'Unexpected Question',
      findingNextStep: 'Finding your next study step',
      keepGoing: 'Keep going',
      nextQuestion: 'Next question →',
      oneWrongAnswer: "One wrong answer doesn't end the test.",
      disclaimer: 'Practice tests are independently built and not affiliated with IDP, British Council, or Cambridge.',
    },
    loading: {
      loadingWorkspace: 'Loading your workspace...',
      preparingSession: 'Preparing your personalized study session',
      pleaseWait: 'Please wait a moment',
    },
  },

  uz: {
    nav: {
      howItWorks: 'Qanday ishlaydi',
      estimator: 'Ball kalkulyatori',
      skillsHub: 'Ko‘nikmalar markazi',
      signIn: 'Kirish',
      startLearning: 'O‘rganishni boshlash',
      getStarted: 'Boshlash',
    },
    hero: {
      badge: 'IELTS ga maqsadli tayyorgarlik maydoni',
      title1: 'Har bir orzudagi ball',
      titleEm: 'yaxshi rejadan boshlanadi.',
      subtitle:
        'Maqsadli mashqlar, interaktiv imtihon vositalari va aniq fikr-mulohazalar bilan taxminlarga barham bering.',
      buildPlan: 'O‘quv rejamni tuzish',
      seeHowItWorks: 'Qanday ishlashini ko‘rish',
      trustedBy: 'Dunyo bo‘ylab 12,000+ IELTS topshiruvchilar ishonchi',
      todaysFocus: 'Bugungi e’tibor',
      targetBand: 'MAQSADLI BALLINGIZ',
      readinessScore: 'tayyorgarlik darajasi',
      recommendedSession: 'TAVSIYA ETILGAN MASHQ',
      writingSessionTitle: 'Writing Task 2 · Mantiq va izchillik',
      writingSessionDesc: 'Fikr insho · 12 daqiqalik mashq',
    },
    estimator: {
      eyebrow: 'SHAXSIY YO‘L XARITASI',
      title: 'Ballingizga erishish yo‘lini hisoblang',
      subtitle:
        'Haftalik tavsiya etilgan vaqt va ustuvor o‘quv yo‘nalishini ko‘rish uchun maqsadli ballingizni tanlang.',
      pace: 'Tavsiya etilgan sur’at',
      timeline: 'Taxminiy muddat',
      priorityStrategy: 'Ustuvor strategiya',
      dailyPractice: 'Muntazam kunlik amaliyot',
      targetReadiness: 'Tayyorgarlik darajasiga erishish uchun',
      difficultyLevel: 'Qiyinchilik darajasi:',
    },
    skills: {
      eyebrow: 'MAQSAD BN TAYYORLANING',
      title: 'Imtihonning har bir bo‘limini egallang.',
      listening: 'tinglash',
      reading: 'o‘qish',
      writing: 'yozish',
      speaking: 'gapirish',
      masteryDrills: 'Ko‘nikma mashqlari',
      startPracticeNow: 'Mashqni hozir boshlash',
      launchPracticeHub: 'Mashqlar markaziga o‘tish',
    },
    method: {
      eyebrow: 'TINCHROQ TAYYORLANISH YO‘LI',
      title: 'Kamroq taxmin.',
      titleEm: 'Ko‘proq natija.',
      subtitle:
        'An’anaviy tayyorgarlik sizni cheksiz qog‘ozlar bilan to‘ldiradi. Biz sizga kunlik aniq maqsadlar va bosqichma-bosqich yo‘riqnoma beramiz.',
      step1: 'Maqsadli ball va imtihon sanangizni belgilang.',
      step2: 'Eshitish va zaif tomonlaringizga qaratilgan haftalik rejaga amal qiling.',
      step3: 'Har bir mashqdan so‘ng tezkor baho va tavsiyalar oling.',
      step4: 'Aniq tahlillar bilan tayyorgarlik o‘sishingizni kuzatib boring.',
      createPlan: 'O‘quv rejamni yaratish',
    },
    testimonials: {
      eyebrow: 'HAQIQIY NATIJALAR',
      title: 'Orzusidagi ballga erishgan topshiruvchilar fikri',
      verifiedLearner: 'Tasdiqlangan o‘quvchi',
    },
    footer: {
      rights: '© ' + new Date().getFullYear() + ' just an ielts. Aniq va ishonch bilan o‘rganing.',
    },
    sidebar: {
      workspace: 'Ish maydoni',
      overview: 'Umumiy ko‘rinish',
      practiceHub: 'Amaliyot markazi',
      mockTests: 'Sinov imtihonlari',
      myProgress: 'Mening natijalarim',
      historyPoints: 'Tarix va Ballar',
      skillPractice: 'Ko‘nikma amaliyoti',
      listening: 'Listening (Tinglash)',
      reading: 'Reading (O‘qish)',
      writing: 'Writing (Yozish)',
      speaking: 'Speaking (Gapirish)',
      vocabulary: 'Lug‘at',
      grammar: 'Grammatika',
      readyForBand8: 'Band 8+ ga tayyormisiz?',
      unlockFeedback: 'AI insho tahlili va to‘liq sinov imtihonlarini oching.',
      explorePlans: 'Tariflarni ko‘rish →',
      settings: 'Sozlamalar',
      logout: 'Chiqish',
    },
    navbar: {
      searchPlaceholder: 'Darslar, amaliyot mashqlari va lug‘atlarni qidirish...',
      targetBand: 'Maqsad: Ball',
    },
    auth: {
      welcomeBack: 'Xush kelibsiz',
      signInToContinue: 'Davom etish uchun tizimga kiring.',
      subtitle: 'Qisqa sozlashdan so‘ng boshqaruv paneliga o‘tasiz.',
      continueWithGoogle: 'Google orqali kirish',
      orContinueWithEmail: 'yoki email orqali davom etish',
      emailAddress: 'Email manzilingiz',
      password: 'Parol',
      forgotPassword: 'Parolni unutdingizmi?',
      signIn: 'Kirish',
      newToIelts: 'IELTS da yangimisiz?',
      createAccount: 'Hisob yaratish',
      termsAgreement: 'Davom etish orqali siz bizning',
      terms: 'Shartlar',
      privacyPolicy: 'Maddalarimizga rozilik bildirasiz',
      purposeTitle: 'Maqsad bilan',
      purposeTitleEm: 'mashq qiling.',
      purposeDesc:
        'Har bir IELTS ko‘nikmasi uchun aniq va bosqichma-bosqich fikr-mulohaza bilan tayyorlaning.',
    },
    onboarding: {
      personalisePath: 'YO‘LINGIZNI SHAXSIYLASHTIRAMIZ',
      stepOf3: 'BOSQICH',
      whatBringsYou: 'IELTS sizga nima uchun kerak?',
      whenTakingTest: 'Imtihonni qachon topshirasiz?',
      planReady: 'REJANGIZ TAYYOR',
      chooseStartingPoint: 'Boshlanish nuqtasini tanlang.',
      back: 'Orqaga',
      continue: 'Davom etish',
      freePlan: 'Bepul tarif',
      freePlanDesc: 'O‘quv tartibingizni yarating va har bir ko‘nikmani mashq qiling.',
      premiumPlan: 'Premium',
      premiumPlanDesc: 'Cheksiz AI tahlillar, sinov testlari va yo‘naltirilgan ko‘rib chiqish.',
      startPremium: 'Premium boshlash',
      continueForFree: 'Bepul davom etish',
      mostPopular: 'Eng ommabop',
    },
    settings: {
      eyebrow: 'AFZALLIKLAR VA MAQSADLAR',
      title: 'Sozlamalar',
      subtitle:
        'Maqsadli ballingizni, imtihon sanasini, kunlik eslatmalarni, mavzu rejimini va tilni sozlang.',
      tabProfile: 'Profil va Maqsad',
      tabReminders: 'Eslatmalar',
      tabSecurity: 'Xavfsizlik',
      tabAppearance: 'Mavzu va Til',
      profileHeader: 'Profil va Maqsadlar',
      fullName: 'To‘liq ism',
      emailAddress: 'Email manzil',
      targetBandScore: 'Maqsadli ball',
      upcomingExamDate: 'Bo‘lajak imtihon sanasi',
      studyPaceHeader: 'O‘quv sur’ati va Eslatmalar',
      dailyGoal: 'Kunlik amaliyot maqsadi',
      minsDay: 'daqiqa/kun',
      dailyNotifications: 'Kunlik bildirishnomalar',
      dailyNotificationsDesc: 'Ketma-ketligingiz xavf ostida bo‘lganda email xabar oling.',
      appearanceHeader: 'Mavzu rejimi va Til',
      themeMode: 'Mavzu rejimi',
      lightTheme: 'Yorug‘ mavzu',
      darkTheme: 'Tungi mavzu',
      languagePreference: 'Tanlangan til',
      selectLanguage: 'Tilni tanlang',
      saveChanges: 'O‘zgarishlarni saqlash',
      savedSuccess: 'Sozlamalar muvaffaqiyatli saqlandi!',
    },
    dashboard: {
      greeting: 'Xayrli kun, Alex.',
      subtitle: 'Maqsadli ballingiz sari aniq yo‘nalish.',
      startPractice: 'Mashqni boshlash',
      overallReadiness: 'Umumiy tayyorgarlik',
      awayFromTarget: 'qoldi. Bu haftalik natijani davom ettiring.',
      viewProgress: 'Natijalarni ko‘rish',
      continueLeftOff: 'Qolgan joydan davom eting',
      shortFocusedPractice: 'Kuningizga mos keladigan qisqa va samarali mashqlar.',
      seeAllPractice: 'Barcha mashqlarni ko‘rish',
      latestBand: 'So‘nggi ball',
      min: 'daq',
      todaysFocus: 'Bugungi e’tibor',
      ideasEasierToFollow: 'Fikrlaringizni tushunarliroq bayon qiling.',
      linkingIdeasDesc: 'Asosiy fikrlarni aniq va tabiiy o‘tish so‘zlari bilan bog‘lang.',
      paragraphFlow: 'Mantiqiy abzatslar ketma-ketligini yarating',
      clarityFeedback: 'Zudlik bilan aniqlik tahlilini oling',
      beginWritingTask: 'Writing mashqini boshlash',
      recentActivity: 'So‘nggi faoliyat',
      history: 'Tarix',
    },
    notFound: {
      eyebrow: 'SAHIFA TOPILMADI',
      title: 'Har bir javob ham',
      titleEm: 'to‘g‘ri bo‘lavermaydi.',
      subtitle: "Aftidan, bu sahifa mavjud emas. U ko‘chirilgan, o‘chirilgan yoki havola xato kiritilgan bo‘lishi mumkin.",
      backHome: 'Bosh sahifaga qaytish',
      continuePracticing: 'Mashqni davom ettirish',
      lookingForPage: 'Sahifani qidiryapsizmi?',
      mainNav: 'Asosiy menyudan foydalanib ko‘ring',
      targetBand: 'Maqsadli Ballingiz',
      unexpectedQuestion: 'Kutilmagan Savol',
      findingNextStep: 'Keyingi bosqich tayyorlanmoqda',
      keepGoing: 'Davom eting',
      nextQuestion: 'Keyingi savol →',
      oneWrongAnswer: "Bitta xato javob bilan imtihon tugamaydi.",
      disclaimer: 'Amaliyot testlari mustaqil yaratilgan va IDP, British Council yoki Cambridge bilan bog‘liq emas.',
    },
    loading: {
      loadingWorkspace: 'Ish maydoni yuklanmoqda...',
      preparingSession: 'Shaxsiy o‘quv mashg‘ulotingiz tayyorlanmoqda',
      pleaseWait: 'Biroz kuting',
    },
  },

  ru: {
    nav: {
      howItWorks: 'Как это работает',
      estimator: 'Калькулятор балла',
      skillsHub: 'Центр навыков',
      signIn: 'Войти',
      startLearning: 'Начать обучение',
      getStarted: 'Начать',
    },
    hero: {
      badge: 'Пространство целевой подготовки к IELTS',
      title1: 'Каждый целевой балл начинается с',
      titleEm: 'хорошего плана.',
      subtitle:
        'Исключите угадывание с помощью точечных упражнений, интерактивных инструментов экзамена и понятной обратной связи.',
      buildPlan: 'Составить план обучения',
      seeHowItWorks: 'Посмотреть, как это работает',
      trustedBy: 'Доверяют более 12 000 сдающих IELTS по всему миру',
      todaysFocus: 'Сегодня в фокусе',
      targetBand: 'ВАШ ЦЕЛЕВОЙ БАЛЛ',
      readinessScore: 'уровень готовности',
      recommendedSession: 'РЕКОМЕНДУЕМОЕ ЗАНЯТИЕ',
      writingSessionTitle: 'Writing Task 2 · Связность и логика',
      writingSessionDesc: 'Эссе-мнение · Упражнение на 12 мин',
    },
    estimator: {
      eyebrow: 'ПЕРСОНАЛЬНАЯ ДОРОЖНАЯ КАРТА',
      title: 'Рассчитайте свой путь к баллу',
      subtitle:
        'Выберите желаемый балл, чтобы увидеть рекомендуемое недельное время и приоритеты подготовки.',
      pace: 'Рекомендуемый темп',
      timeline: 'Ориентировочный срок',
      priorityStrategy: 'Приоритетная стратегия',
      dailyPractice: 'Регулярная ежедневная практика',
      targetReadiness: 'Для достижения целевой готовности',
      difficultyLevel: 'Уровень сложности:',
    },
    skills: {
      eyebrow: 'ГОТОВЬТЕСЬ ОСОЗНАННО',
      title: 'Освойте каждый раздел экзамена.',
      listening: 'аудирование',
      reading: 'чтение',
      writing: 'письмо',
      speaking: 'говорение',
      masteryDrills: 'Тренировка навыков',
      startPracticeNow: 'Начать практику сейчас',
      launchPracticeHub: 'Открыть центр практики',
    },
    method: {
      eyebrow: 'СПОКОЙНЫЙ ПУТЬ К ПОДГОТОВКЕ',
      title: 'Меньше сомнений.',
      titleEm: 'Больше прогресса.',
      subtitle:
        'Традиционная подготовка перегружает бесконечными распечатками. Мы даем структурированные ежедневные цели и пошаговые инструкции.',
      step1: 'Установите целевой балл и дату предстоящего экзамена.',
      step2: 'Следуйте недельному расписанию с акцентом на слабые места.',
      step3: 'Получайте мгновенную диагностическую оценку после каждого задания.',
      step4: 'Отслеживайте траекторию готовности с помощью понятной аналитики.',
      createPlan: 'Создать план обучения',
    },
    testimonials: {
      eyebrow: 'РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ',
      title: 'Отзывы тех, кто достиг своего целевого балла',
      verifiedLearner: 'Проверенный ученик',
    },
    footer: {
      rights: '© ' + new Date().getFullYear() + ' just an ielts. Учитесь уверенно и эффективно.',
    },
    sidebar: {
      workspace: 'Рабочее пространство',
      overview: 'Обзор',
      practiceHub: 'Центр практики',
      mockTests: 'Пробные тесты',
      myProgress: 'Мой прогресс',
      historyPoints: 'История и Баллы',
      skillPractice: 'Практика навыков',
      listening: 'Listening (Аудирование)',
      reading: 'Reading (Чтение)',
      writing: 'Writing (Письмо)',
      speaking: 'Speaking (Говорение)',
      vocabulary: 'Словарь',
      grammar: 'Грамматика',
      readyForBand8: 'Готовы к Band 8+?',
      unlockFeedback: 'Откройте ИИ-анализ эссе и полные пробные тесты.',
      explorePlans: 'Посмотреть тарифы →',
      settings: 'Настройки',
      logout: 'Выйти',
    },
    navbar: {
      searchPlaceholder: 'Поиск уроков, упражнений и карточек слов...',
      targetBand: 'Цель: Band',
    },
    auth: {
      welcomeBack: 'С возвращением',
      signInToContinue: 'Войдите, чтобы продолжить.',
      subtitle: 'Мы проведем короткую настройку, затем откроем панель.',
      continueWithGoogle: 'Войти через Google',
      orContinueWithEmail: 'или войти через email',
      emailAddress: 'Email адрес',
      password: 'Пароль',
      forgotPassword: 'Забыли пароль?',
      signIn: 'Войти',
      newToIelts: 'Впервые на IELTS?',
      createAccount: 'Создать аккаунт',
      termsAgreement: 'Продолжая, вы соглашаетесь с нашими',
      terms: 'Условиями',
      privacyPolicy: 'Политикой конфиденциальности',
      purposeTitle: 'Практика с',
      purposeTitleEm: 'целью.',
      purposeDesc:
        'Создайте привычку для каждого навыка IELTS с понятной обратной связью на каждом шагу.',
    },
    onboarding: {
      personalisePath: 'ПЕРСОНАЛИЗИРУЕМ ВАШ ПУТЬ',
      stepOf3: 'ШАГ',
      whatBringsYou: 'Какова ваша цель сдачи IELTS?',
      whenTakingTest: 'Когда вы планируете сдавать тест?',
      planReady: 'ВАШ ПЛАН ГОТОВ',
      chooseStartingPoint: 'Выберите вариант старта.',
      back: 'Назад',
      continue: 'Продолжить',
      freePlan: 'Бесплатный тариф',
      freePlanDesc: 'Создайте график и практикуйте каждый навык.',
      premiumPlan: 'Premium',
      premiumPlanDesc: 'Неограниченный ИИ-анализ, пробные тесты и целевой разбор.',
      startPremium: 'Начать Premium',
      continueForFree: 'Продолжить бесплатно',
      mostPopular: 'Самый популярный',
    },
    settings: {
      eyebrow: 'ПРЕДПОЧТЕНИЯ И ЦЕЛИ',
      title: 'Настройки',
      subtitle:
        'Настройте целевой балл, дату экзамена, напоминания, тему и языковые предпочтения.',
      tabProfile: 'Профиль и Цель',
      tabReminders: 'Напоминания',
      tabSecurity: 'Безопасность',
      tabAppearance: 'Внешний вид и Язык',
      profileHeader: 'Профиль и Цели',
      fullName: 'Полное имя',
      emailAddress: 'Email адрес',
      targetBandScore: 'Целевой балл',
      upcomingExamDate: 'Дата экзамена',
      studyPaceHeader: 'Темп обучения и Напоминания',
      dailyGoal: 'Ежедневная цель практики',
      minsDay: 'мин/день',
      dailyNotifications: 'Ежедневные уведомления',
      dailyNotificationsDesc: 'Получайте напоминания по почте, когда серии практики грозит сброс.',
      appearanceHeader: 'Тема оформления и Язык',
      themeMode: 'Тема оформления',
      lightTheme: 'Светлая тема',
      darkTheme: 'Тёмная тема',
      languagePreference: 'Предпочитаемый язык',
      selectLanguage: 'Выберите язык',
      saveChanges: 'Сохранить изменения',
      savedSuccess: 'Настройки успешно обновлены!',
    },
    dashboard: {
      greeting: 'Доброе утро, Алекс.',
      subtitle: 'Вот ваш четкий путь к целевому баллу.',
      startPractice: 'Начать практику',
      overallReadiness: 'Общая готовность',
      awayFromTarget: 'до цели. Продолжайте серию на этой неделе.',
      viewProgress: 'Посмотреть прогресс',
      continueLeftOff: 'Продолжить с места остановки',
      shortFocusedPractice: 'Короткая, эффективная практика для вашего дня.',
      seeAllPractice: 'Все упражнения',
      latestBand: 'Последний балл',
      min: 'мин',
      todaysFocus: 'Сегодня в фокусе',
      ideasEasierToFollow: 'Сделайте изложение мыслей более понятным.',
      linkingIdeasDesc: 'Практикуйтесь связывать мысли точными и естественными переходами.',
      paragraphFlow: 'Улучшите логику построения абзацев',
      clarityFeedback: 'Получите мгновенную обратную связь',
      beginWritingTask: 'Начать задание Writing',
      recentActivity: 'Недавняя активность',
      history: 'История',
    },
    notFound: {
      eyebrow: 'СТРАНИЦА НЕ НАЙДЕНА',
      title: 'Не каждый ответ',
      titleEm: 'бывает правильным.',
      subtitle: 'Похоже, эта страница недоступна. Возможно, она была перемещена, удалена или адрес указан неверно.',
      backHome: 'Вернуться на главную',
      continuePracticing: 'Продолжить практику',
      lookingForPage: 'Ищете нужный раздел?',
      mainNav: 'Воспользуйтесь основным меню навигации',
      targetBand: 'Ваш Целевой Балл',
      unexpectedQuestion: 'Неожиданный Вопрос',
      findingNextStep: 'Подбираем следующий шаг',
      keepGoing: 'Продолжайте путь',
      nextQuestion: 'Следующий вопрос →',
      oneWrongAnswer: 'Одна ошибка — это еще не конец теста.',
      disclaimer: 'Практические тесты разработаны независимо и не связаны с IDP, British Council или Cambridge.',
    },
    loading: {
      loadingWorkspace: 'Загрузка рабочего пространства...',
      preparingSession: 'Подготовка персонального занятия',
      pleaseWait: 'Пожалуйста, подождите',
    },
  },
}
