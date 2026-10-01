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
    examInDays: string
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
    maiQuote: string
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
    alreadyHaveAccount: string
    step1Subtitle: string
    step2Subtitle: string
    step3Subtitle: string
    planNote: string
    goals: {
      uni: string
      work: string
      personal: string
      notSure: string
    }
    dates: {
      less1m: string
      m1to3: string
      m3to6: string
      notBooked: string
    }
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
    latestSessions: string
  }
  // Listening Module
  listeningModule: {
    eyebrow: string
    title: string
    subtitle: string
    currentScore: string
    section: string
    mins: string
    playingSection: string
    speed: string
    transcript: string
    syncTranscript: string
    audioTimestamp: string
    questionsTitle: string
    questionsDesc: string
    correctAnswer: string
    submitAnswers: string
    scoreCorrect: string
    rewind10s: string
    mute: string
    unmute: string
  }
  // Reading Module
  readingModule: {
    eyebrow: string
    title: string
    subtitle: string
    currentScore: string
    passage: string
    highlightMode: string
    normalMode: string
    fontSize: string
    questionsTitle: string
    questionsDesc: string
    correctAnswer: string
    submitAnswers: string
    scoreCorrect: string
    clickToHighlight: string
  }
  // Writing Module
  writingModule: {
    eyebrow: string
    title: string
    subtitle: string
    target: string
    task1: string
    task2: string
    promptTitle: string
    promptTask1: string
    promptTask2: string
    placeholder: string
    wordCount: string
    minWords: string
    evaluating: string
    evaluateAi: string
    showModelAnswer: string
    hideModelAnswer: string
    modelAnswerTitle: string
    modelAnswerText: string
    aiDiagnostics: string
    taskAchievement: string
    coherenceCohesion: string
    lexicalResource: string
    grammaticalAccuracy: string
  }
  // Speaking Module
  speakingModule: {
    eyebrow: string
    title: string
    subtitle: string
    target: string
    part1: string
    part2: string
    part3: string
    prepTimer: string
    startPrepTimer: string
    pauseTimer: string
    recordAnswer: string
    stopRecording: string
    recordingActive: string
    recordingPreview: string
    aiAnalysis: string
    fluencyScore: string
    lexicalResource: string
    hesitationTracker: string
    listenBack: string
  }
  // Vocabulary Module
  vocabularyModule: {
    eyebrow: string
    title: string
    subtitle: string
    mastered: string
    words: string
    deck: string
    flashcards: string
    wordList: string
    clickToFlip: string
    definition: string
    exampleSentence: string
    collocations: string
    synonyms: string
    prevWord: string
    nextWord: string
    markAsMastered: string
    masteredBadge: string
  }
  // Grammar Module
  grammarModule: {
    eyebrow: string
    title: string
    subtitle: string
    score: string
    drillTitle: string
    questionCount: string
    candidateSentence: string
    selectCorrect: string
    correctStructure: string
    containsError: string
    excellent: string
    reviewRule: string
  }
  // Tests / Mock Exams Module
  testsModule: {
    eyebrow: string
    title: string
    subtitle: string
    latestScore: string
    academicModule: string
    generalTraining: string
    fullMockExam: string
    minsDuration: string
    questions: string
    startFullMock: string
    sectionBreakdown: string
    listeningSection: string
    readingSection: string
    writingSection: string
    speakingSection: string
    mockExamLaunched: string
    mockInstructions: string
  }
  // History & Points
  historyModule: {
    eyebrow: string
    title: string
    subtitle: string
    totalPoints: string
    activeStreak: string
    days: string
    bonusXpTomorrow: string
    unlockedMilestones: string
    badges: string
    viewAllBadges: string
    unlockedBadgesTitle: string
    historyLogTitle: string
    all: string
    writing: string
    listening: string
    reading: string
    speaking: string
    tests: string
    correct: string
    levelSeniorScholar: string
    nextBadge: string
  }
  // Progress & Trajectory
  progressModule: {
    eyebrow: string
    title: string
    subtitle: string
    streakActive: string
    overallReadiness: string
    improvementNeeded: string
    estimatedReadiness: string
    currentBand: string
    trajectoryTitle: string
    days30: string
    days60: string
    allTime: string
    priorityDiagnostics: string
    headingDrill: string
    essayEditor: string
    readingErrors: string
    writingTransitions: string
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
  // Inside JUST AN IELTS Features Showcase
  insideLook: {
    eyebrow: string
    title: string
    subtitle: string
    tryItYourself: string
    feature1Title: string
    feature1Desc: string
    feature1Badge: string
    feature2Title: string
    feature2Desc: string
    feature2Badge: string
    feature3Title: string
    feature3Desc: string
    feature3Badge: string
    feature4Title: string
    feature4Desc: string
    feature4Badge: string
    feature5Title: string
    feature5Desc: string
    feature5Badge: string
    feature6Title: string
    feature6Desc: string
    feature6Badge: string
    interactiveExp: string
    readyToTest: string
    experienceDesc: string
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
      rights:
        '© ' + new Date().getFullYear() + ' just an ielts. Study with clarity and confidence.',
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
      examInDays: 'Exam in 24 days',
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
      maiQuote: 'My score improved because I finally knew what to practise next.',
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
      alreadyHaveAccount: 'Already have an account?',
      step1Subtitle: 'Your goal helps us build a study plan that makes sense for you.',
      step2Subtitle: 'We will tailor your weekly pace to your timeline.',
      step3Subtitle: 'Start free with a clear weekly plan, or unlock detailed feedback whenever you are ready.',
      planNote: 'You can change or upgrade your plan at any time.',
      goals: {
        uni: 'University admission',
        work: 'Work or migration',
        personal: 'Personal development',
        notSure: 'Not sure yet',
      },
      dates: {
        less1m: 'In less than 1 month',
        m1to3: '1–3 months',
        m3to6: '3–6 months',
        notBooked: 'I have not booked yet',
      },
    },
    settings: {
      eyebrow: 'PREFERENCES & GOALS',
      title: 'Settings',
      subtitle:
        'Customize your target band, exam date timeline, daily reminders, language, and profile preferences.',
      tabProfile: 'Profile & Band Target',
      tabReminders: 'Practice Reminders',
      tabSecurity: 'Account Security',
      tabAppearance: 'Language',
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
      appearanceHeader: 'Language Preferences',
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
      awayFromTarget: "away. Keep this week's streak going.",
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
      latestSessions: 'Your latest sessions',
    },
    listeningModule: {
      eyebrow: 'IELTS LISTENING MODULE',
      title: 'Listening Practice',
      subtitle: 'Train your ear with authentic exam recordings, variable speed, and synchronized transcripts.',
      currentScore: 'Current Score',
      section: 'Section',
      mins: 'mins',
      playingSection: 'Playing Section',
      speed: 'Speed',
      transcript: 'Transcript',
      syncTranscript: 'Synchronized Transcript',
      audioTimestamp: 'Audio Timestamp',
      questionsTitle: 'Questions 21 - 22: Multiple Choice',
      questionsDesc: 'Choose the correct letter A, B, or C based on the recording above.',
      correctAnswer: 'Correct Answer ✓',
      submitAnswers: 'Submit Answers & Check Feedback',
      scoreCorrect: 'Score 2/2 Correct',
      rewind10s: 'Rewind 10s',
      mute: 'Mute',
      unmute: 'Unmute',
    },
    readingModule: {
      eyebrow: 'IELTS READING MODULE',
      title: 'Reading Speed & Matching Drills',
      subtitle: 'Read dual-pane passages, track line timers, and complete paragraph matching questions.',
      currentScore: 'Current Score',
      passage: 'Passage',
      highlightMode: 'Highlight Mode',
      normalMode: 'Normal Mode',
      fontSize: 'Font Size',
      questionsTitle: 'Questions 1 - 2: True / False / Not Given',
      questionsDesc: 'Identify whether the statement matches the passage information.',
      correctAnswer: 'Correct Answer ✓',
      submitAnswers: 'Submit Answers & Check Analysis',
      scoreCorrect: 'Score 2/2 Correct',
      clickToHighlight: 'Click paragraphs in highlight mode to mark key evidence sentences.',
    },
    writingModule: {
      eyebrow: 'IELTS WRITING MODULE',
      title: 'Writing Practice & AI Evaluation',
      subtitle: 'Draft responses with live word count, paragraph flow analysis, and official criteria feedback.',
      target: 'Writing Target',
      task1: 'Task 1 · Academic Report',
      task2: 'Task 2 · Opinion Essay',
      promptTitle: 'Prompt Question',
      promptTask1: 'The chart below shows the percentage of households in two countries using renewable energy sources from 2010 to 2024. Summarise the information by selecting and reporting the main features.',
      promptTask2: 'Some people believe that artificial intelligence will replace human jobs and cause widespread unemployment. To what extent do you agree or disagree with this statement?',
      placeholder: 'Type or paste your IELTS essay response here...',
      wordCount: 'Word Count',
      minWords: 'Min Target',
      evaluating: 'Evaluating Essay with AI...',
      evaluateAi: 'Evaluate Essay with AI',
      showModelAnswer: 'Show Band 9 Model Answer',
      hideModelAnswer: 'Hide Model Answer',
      modelAnswerTitle: 'Band 9 Model Answer',
      modelAnswerText: 'In recent years, artificial intelligence and automated systems have transformed modern workplace environments. While some individuals argue that AI threatens traditional job security, I firmly believe that automated technology creates more opportunities by enhancing human productivity and creating new specialized industries.',
      aiDiagnostics: 'AI Criteria Diagnostics Breakdown',
      taskAchievement: 'Task Achievement / Response',
      coherenceCohesion: 'Coherence & Cohesion',
      lexicalResource: 'Lexical Resource',
      grammaticalAccuracy: 'Grammatical Accuracy & Range',
    },
    speakingModule: {
      eyebrow: 'IELTS SPEAKING MODULE',
      title: 'Speaking Simulator & Audio Recorder',
      subtitle: 'Practice Part 1, 2, and 3 examiner prompts with countdown timers and hesitation tracking.',
      target: 'Speaking Target',
      part1: 'Part 1 · Introduction',
      part2: 'Part 2 · Cue Card',
      part3: 'Part 3 · Discussion',
      prepTimer: '1-Minute Prep Countdown',
      startPrepTimer: 'Start Prep Timer',
      pauseTimer: 'Pause',
      recordAnswer: 'Record Answer (2 Mins)',
      stopRecording: 'Stop Recording',
      recordingActive: 'Recording Active...',
      recordingPreview: 'Audio Recording Preview',
      aiAnalysis: 'AI Speaking Diagnostics',
      fluencyScore: 'Fluency & Coherence',
      lexicalResource: 'Lexical Diversity',
      hesitationTracker: 'Hesitation & Pause Tracking',
      listenBack: 'Listen Back to Recording',
    },
    vocabularyModule: {
      eyebrow: 'IELTS VOCABULARY MODULE',
      title: 'Academic Flashcard Decks',
      subtitle: 'Master Band 7.5+ collocations, definitions, and academic topic word banks.',
      mastered: 'Mastered Words',
      words: 'words',
      deck: 'Topic Deck',
      flashcards: 'Interactive Flashcards',
      wordList: 'Deck Word List',
      clickToFlip: 'Click card to reveal definition & collocations',
      definition: 'Definition',
      exampleSentence: 'Example Sentence in IELTS Context',
      collocations: 'High-Frequency Collocations',
      synonyms: 'Academic Synonyms',
      prevWord: 'Previous Word',
      nextWord: 'Next Word',
      markAsMastered: 'Mark as Mastered',
      masteredBadge: 'Mastered ✓',
    },
    grammarModule: {
      eyebrow: 'IELTS GRAMMAR MODULE',
      title: 'Grammar Masterclass & Error Fixer',
      subtitle: 'Eliminate frequent grammatical mistakes and expand sentence structures for higher Band scores.',
      score: 'Grammar Score',
      drillTitle: 'Grammar Error Corrector Drill',
      questionCount: 'Question 1 of 5',
      candidateSentence: 'Candidate Sentence (Contains Error)',
      selectCorrect: 'Select Correct Grammatical Structure:',
      correctStructure: 'Correct Structure ✓',
      containsError: 'Contains Error ✕',
      excellent: 'Excellent!',
      reviewRule: 'Review Rule:',
    },
    testsModule: {
      eyebrow: 'FULL EXAM SIMULATION',
      title: 'IELTS Mock Tests Hub',
      subtitle: 'Experience full-length exam simulations under strict official timing and conditions.',
      latestScore: 'Latest Mock Score',
      academicModule: 'Academic Module',
      generalTraining: 'General Training',
      fullMockExam: 'Full Mock Examination',
      minsDuration: '160 mins total',
      questions: '80 questions',
      startFullMock: 'Start Full Mock Test',
      sectionBreakdown: 'Exam Section Breakdown',
      listeningSection: 'Listening · 30 mins · 40 questions',
      readingSection: 'Reading · 60 mins · 40 questions',
      writingSection: 'Writing · 60 mins · 2 tasks',
      speakingSection: 'Speaking · 11-14 mins · 3 parts',
      mockExamLaunched: 'Mock Exam Simulation Mode Active',
      mockInstructions: 'Please ensure you are in a quiet room. The exam timer will begin immediately.',
    },
    historyModule: {
      eyebrow: 'ACTIVITY LOG & MILESTONES',
      title: 'Practice History & Points',
      subtitle: 'Review your completed practice sessions, earned experience points, and unlocked badges.',
      totalPoints: 'Total Preparation Points',
      activeStreak: 'Active Study Streak',
      days: 'Days',
      bonusXpTomorrow: '+50 Bonus XP tomorrow',
      unlockedMilestones: 'Unlocked Milestones',
      badges: 'Badges',
      viewAllBadges: 'View All (6)',
      unlockedBadgesTitle: 'Unlocked Achievement Badges',
      historyLogTitle: 'Practice History Log',
      all: 'All',
      writing: 'Writing',
      listening: 'Listening',
      reading: 'Reading',
      speaking: 'Speaking',
      tests: 'Tests',
      correct: 'correct',
      levelSeniorScholar: 'Level 5 · Senior Scholar',
      nextBadge: 'Next: Task 2 Specialist',
    },
    progressModule: {
      eyebrow: 'PREPARATION ANALYTICS',
      title: 'My Progress & Band Trajectory',
      subtitle: 'Track your score growth, skill readiness, study streak, and diagnostic weak points.',
      streakActive: '8-Day Study Streak Active',
      overallReadiness: 'Estimated Band Readiness',
      improvementNeeded: 'overall readiness. 0.5 band improvement needed in Reading.',
      estimatedReadiness: 'Estimated Readiness',
      currentBand: 'Current Band',
      trajectoryTitle: 'Score Growth Trajectory',
      days30: '30d',
      days60: '60d',
      allTime: 'all',
      priorityDiagnostics: 'Priority Diagnostics',
      headingDrill: 'Launch Heading Drill →',
      essayEditor: 'Launch Essay Editor →',
      readingErrors: '3 errors in Passage 2. Focus on main idea scanning.',
      writingTransitions: 'Improve Coherence score with varied linkers.',
    },
    notFound: {
      eyebrow: 'PAGE NOT FOUND',
      title: 'Not every answer',
      titleEm: 'is the right one.',
      subtitle:
        "Looks like this page didn't make the cut. It may have moved, been removed, or the URL may be incorrect.",
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
      disclaimer:
        'Practice tests are independently built and not affiliated with IDP, British Council, or Cambridge.',
    },
    insideLook: {
      eyebrow: 'INSIDE THE PLATFORM',
      title: 'Take a look inside JUST AN IELTS',
      subtitle:
        'Explore the actual tools, interactive modules, and diagnostic feedback systems built to get you to your target band score.',
      tryItYourself: 'Try It Yourself',
      feature1Title: 'Instant AI Criteria Diagnostics',
      feature1Desc:
        'Real-time feedback on Task Achievement, Coherence, Lexical Resource, and Grammar for Writing & Speaking.',
      feature1Badge: 'Writing & Speaking',
      feature2Title: 'Authentic Audio Speed Drills',
      feature2Desc:
        'Variable playback speeds (0.75x–1.5x), synchronized transcript highlights, distractor alerts, and Section 1-4 practice.',
      feature2Badge: 'Listening Mastery',
      feature3Title: 'Reading Passage Speed Reader',
      feature3Desc:
        'Dual-pane passage reader, built-in line timer, synonym finder, and True/False/Not Given paragraph matching.',
      feature3Badge: 'Reading Accelerator',
      feature4Title: 'Cue Card Simulator & Audio Recorder',
      feature4Desc:
        'Part 1, 2, and 3 examiner prompts with 1-minute cue card planning timer, audio playback, and hesitation tracking.',
      feature4Badge: 'Speaking Simulator',
      feature5Title: 'Full Mock Test Suite & Progress Analytics',
      feature5Desc:
        'Timed full-length mock exams calibrated against official IDP & British Council scoring standards.',
      feature5Badge: 'Exam Simulation',
      feature6Title: 'Vocabulary & Grammar Skill Boosters',
      feature6Desc:
        'Topic-specific academic vocabulary packs, collocation builders, and targeted sentence structure drills.',
      feature6Badge: 'Foundation & Polish',
      interactiveExp: 'Interactive Experience',
      readyToTest: 'Ready to test your current IELTS band?',
      experienceDesc: 'Experience live criteria evaluation, authentic exam timing, and personalized progress tracking right now.',
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
      examInDays: 'Imtihongacha 24 kun qoldi',
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
      maiQuote: 'Keyin nima mashq qilishni bilganim sababli ballim oshdi.',
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
      alreadyHaveAccount: 'Hisobingiz bormi?',
      step1Subtitle: 'Maqsadingiz sizga mos keladigan o‘quv rejasini tuzishga yordam beradi.',
      step2Subtitle: 'Haftalik sur’atni vaqtingizga moslashtiramiz.',
      step3Subtitle: 'Aniq haftalik reja bilan bepul boshlang yoki tayyor bo‘lganingizda batafsil tahlilni oching.',
      planNote: 'Istalgan vaqtda tarifingizni o‘zgartirishingiz yoki oshirishingiz mumkin.',
      goals: {
        uni: 'Universitetga kirish',
        work: 'Ishlash yoki migratsiya',
        personal: 'Shaxsiy rivojlanish',
        notSure: 'Hali aniq emas',
      },
      dates: {
        less1m: '1 oydan kamroq vaqtda',
        m1to3: '1–3 oy ichida',
        m3to6: '3–6 oy ichida',
        notBooked: 'Hali kun belgilamadim',
      },
    },
    settings: {
      eyebrow: 'AFZALLIKLAR VA MAQSADLAR',
      title: 'Sozlamalar',
      subtitle: 'Maqsadli ballingizni, imtihon sanasini, kunlik eslatmalarni va tilni sozlang.',
      tabProfile: 'Profil va Maqsad',
      tabReminders: 'Eslatmalar',
      tabSecurity: 'Xavfsizlik',
      tabAppearance: 'Til',
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
      appearanceHeader: 'Til sozlamalari',
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
      latestSessions: 'So‘nggi mashg‘ulotlaringiz',
    },
    listeningModule: {
      eyebrow: 'IELTS LISTENING MODULI',
      title: 'Tinglab tushunish amaliyoti',
      subtitle: 'Haqiqiy imtihon yozuvlari, o‘zgaruvchan tezlik va sinxron matnlar bilan tinglashni mashq qiling.',
      currentScore: 'Joriy Ball',
      section: 'Bo‘lim',
      mins: 'daqiqa',
      playingSection: 'Eshitilayotgan bo‘lim',
      speed: 'Tezlik',
      transcript: 'Matn',
      syncTranscript: 'Sinxronlashtirilgan Matn',
      audioTimestamp: 'Audio Vaqti',
      questionsTitle: '21 - 22 Savollar: Ko‘p Tanlovli',
      questionsDesc: 'Yuqoridagi audioga asoslanib A, B yoki C to‘g‘ri javobini tanlang.',
      correctAnswer: 'To‘g‘ri Javob ✓',
      submitAnswers: 'Javoblarni Tekshirish va Tahlil Olish',
      scoreCorrect: 'Natija: 2/2 To‘g‘ri',
      rewind10s: '10 sek orqaga',
      mute: 'Ovozni o‘chirish',
      unmute: 'Ovozni yoqish',
    },
    readingModule: {
      eyebrow: 'IELTS READING MODULI',
      title: 'O‘qish Tezligi va Moslashtirish Mashqlari',
      subtitle: 'Ikki panelli matnlarni o‘qing, vaqtni kuzating va sarlavhalarni moslashtirish topshiriqlarini bajaring.',
      currentScore: 'Joriy Ball',
      passage: 'Matn',
      highlightMode: 'Belgilash Rejimi',
      normalMode: 'Odiviy Rejim',
      fontSize: 'Shrift Hajmi',
      questionsTitle: '1 - 2 Savollar: True / False / Not Given',
      questionsDesc: 'Tasdiq matn ma’lumotlariga mos kelishini aniqlang.',
      correctAnswer: 'To‘g‘ri Javob ✓',
      submitAnswers: 'Javoblarni Tekshirish',
      scoreCorrect: 'Natija: 2/2 To‘g‘ri',
      clickToHighlight: 'Asosiy dalil cümlalarni belgilash uchun belgilar rejimida abzatslarni bosing.',
    },
    writingModule: {
      eyebrow: 'IELTS WRITING MODULI',
      title: 'Yozish Amaliyoti va AI Baholash',
      subtitle: 'So‘zlar soni, abzatslar mantiqi va rasmiy mezonlar bo‘yicha AI fikri bilan insho yozing.',
      target: 'Yozish Maqsadi',
      task1: 'Task 1 · Akademik Hisobot',
      task2: 'Task 2 · Fikr Inshosi',
      promptTitle: 'Mavzu Savoli',
      promptTask1: 'Quyidagi grafik ikkita mamlakatda 2010-yildan 2024-yilgacha qayta tiklanadigan energiya manbalaridan foydalanadigan xonadonlar foizini ko‘rsatadi. Asosiy xususiyatlarni tanlab va hisobot berib ma’lumotni xulosalang.',
      promptTask2: 'Ba’zi odamlar sun’iy intellekt inson ish o‘rinlarini egallaydi va ommaviy ishsizlikka olib keladi deb hisoblashadi. Bu fikrga qanchalik qo‘shilasiz yoki qo‘shilmaysiz?',
      placeholder: 'IELTS insho javobingizni shu yerga yozing yoki kiriting...',
      wordCount: 'So‘zlar Soni',
      minWords: 'Minimal Maqsad',
      evaluating: 'Insho AI orqali baholanmoqda...',
      evaluateAi: 'Inshoni AI orqali baholash',
      showModelAnswer: 'Band 9 Namuna Javobni Ko‘rish',
      hideModelAnswer: 'Namuna Javobni Yashirish',
      modelAnswerTitle: 'Band 9 Namuna Javob',
      modelAnswerText: 'So‘nggi yillarda sun’iy intellekt va avtomatlashtirilgan tizimlar zamonaviy ish muhitini tubdan o‘zgartirdi. Ba’zilar AI an’anaviy ish o‘rinlariga xavf soladi deb ta’kidlashsa-da, men avtomatlashtirish inson undorligini oshirish va yangi ixtisoslashgan sohalarni yaratish orqali ko‘proq imkoniyatlar yaratadi deb qat’iy ishonaman.',
      aiDiagnostics: 'AI Mezonlari Bo‘yicha Tahlil',
      taskAchievement: 'Topshiriq Bajarilishi / Javob',
      coherenceCohesion: 'Mantiq va Izchillik',
      lexicalResource: 'So‘z Boyligi (Lexical Resource)',
      grammaticalAccuracy: 'Grammatik Aniqlik va Qamrov',
    },
    speakingModule: {
      eyebrow: 'IELTS SPEAKING MODULI',
      title: 'Gapirish Simulyatori va Ovoz Yozgich',
      subtitle: 'Imtihon topshiriqlari, vaqt taymeri va ikkilanmalarni kuzatish bilan Parts 1, 2, 3 ni mashq qiling.',
      target: 'Gapirish Maqsadi',
      part1: 'Part 1 · Kirish',
      part2: 'Part 2 · Cue Card',
      part3: 'Part 3 · Muhokama',
      prepTimer: '1 Daqiqalik Tayyorgarlik Taymeri',
      startPrepTimer: 'Taymerni Boshlash',
      pauseTimer: 'Pauza',
      recordAnswer: 'Javobni Yozib Olish (2 Daqiqa)',
      stopRecording: 'Yozishni To‘xtatish',
      recordingActive: 'Ovoz Yozilmoqda...',
      recordingPreview: 'Yozib Olingan Ovozni Tinglash',
      aiAnalysis: 'AI Gapirish Tahlili',
      fluencyScore: 'Ravonlik va Izchillik',
      lexicalResource: 'So‘z Boyligi Turfa-rangligi',
      hesitationTracker: 'Tutilish va To‘xtalishlar Tahlili',
      listenBack: 'Ovoz Yozuvini Qayta Eshitish',
    },
    vocabularyModule: {
      eyebrow: 'IELTS LUG‘AT MODULI',
      title: 'Akademik Lug‘at Kartochkalari',
      subtitle: 'Band 7.5+ iboralar, ta’riflar va akademik mavzuli so‘zlar to‘plamini egallang.',
      mastered: 'O‘zlashtirilgan So‘zlar',
      words: 'so‘z',
      deck: 'Mavzuli To‘plam',
      flashcards: 'Interaktiv Kartochkalar',
      wordList: 'To‘plam So‘zlar Ro‘yxati',
      clickToFlip: 'Ta’rif va iboralarni ko‘rish uchun kartani bosing',
      definition: 'Ta’rif (Ma’nosi)',
      exampleSentence: 'IELTS Kontekstidagi Misol Cümlo',
      collocations: 'Tez-tez Ishlatiladigan Iboralar (Collocations)',
      synonyms: 'Akademik Sinonimlar',
      prevWord: 'Oldingi So‘z',
      nextWord: 'Keyingi So‘z',
      markAsMastered: 'O‘zlashtirildi deb belgilash',
      masteredBadge: 'O‘zlashtirildi ✓',
    },
    grammarModule: {
      eyebrow: 'IELTS GRAMMATIKA MODULI',
      title: 'Grammatika Masterklassi va Xatolar Tuzatuvchisi',
      subtitle: 'Tez-tez uchraydigan grammatik xatolarni yo‘qoting va yuqori Band ballari uchun gap tuzilishini kengaytiring.',
      score: 'Grammatika Balli',
      drillTitle: 'Grammatik Xatolarni Tuzatish Mashqi',
      questionCount: '1-savol (Jami 5 ta)',
      candidateSentence: 'Nomzod Cümlasi (Xato Mavjud)',
      selectCorrect: 'To‘g‘ri Grammatik Tuzilmani Tanlang:',
      correctStructure: 'To‘g‘ri Tuzilma ✓',
      containsError: 'Xato Mavjud ✕',
      excellent: 'Ajoyib!',
      reviewRule: 'Qoidani Ko‘rib Chiqing:',
    },
    testsModule: {
      eyebrow: 'TO‘LIQ IMTIHON SIMULYATSIYASI',
      title: 'IELTS Sinov Imtihonlari Markazi',
      subtitle: 'Rasmiy vaqt va shartlar asosida to‘liq sinov imtihonlarini topshiring.',
      latestScore: 'So‘nggi Sinov Balli',
      academicModule: 'Academic Moduli',
      generalTraining: 'General Training',
      fullMockExam: 'To‘liq Sinov Imtihoni',
      minsDuration: 'Jami 160 daqiqa',
      questions: '80 ta savol',
      startFullMock: 'To‘liq Sinovni Boshlash',
      sectionBreakdown: 'Imtihon Bo‘limlari Tahlili',
      listeningSection: 'Listening · 30 daqiqa · 40 savol',
      readingSection: 'Reading · 60 daqiqa · 40 savol',
      writingSection: 'Writing · 60 daqiqa · 2 ta topshiriq',
      speakingSection: 'Speaking · 11-14 daqiqa · 3 bo‘lim',
      mockExamLaunched: 'Sinov Imtihoni Rejimi Faol',
      mockInstructions: 'Tinch xonada ekanligingizga ishonch hosil qiling. Imtihon taymeri darhol boshlanadi.',
    },
    historyModule: {
      eyebrow: 'FAOLIYAT VA NISHONLAR',
      title: 'Amaliyot Tarixi va Ballar',
      subtitle: 'Bajarilgan mashqlarni, to‘plangan tajriba ballarini va ochilgan nishonlarni ko‘rib chiqing.',
      totalPoints: 'Jami Tayyorgarlik Ballari',
      activeStreak: 'Faol Ketma-ketlik',
      days: 'Kun',
      bonusXpTomorrow: 'Ertaga +50 Bonus XP',
      unlockedMilestones: 'Erishilgan Marralar',
      badges: 'Nishonlar',
      viewAllBadges: 'Barchasini Ko‘rish (6)',
      unlockedBadgesTitle: 'Erishilgan Yutuq Nishonlari',
      historyLogTitle: 'Amaliyot Tarixi Jurnali',
      all: 'Barchasi',
      writing: 'Writing',
      listening: 'Listening',
      reading: 'Reading',
      speaking: 'Speaking',
      tests: 'Testlar',
      correct: 'to‘g‘ri',
      levelSeniorScholar: '5-Daraja · Katta O‘quvchi',
      nextBadge: 'Keyingisi: Task 2 Mutaxassisi',
    },
    progressModule: {
      eyebrow: 'TAYYORGARLIK ANALITIKASI',
      title: 'Mening Natijalarim va Ball O‘sishi',
      subtitle: 'Ballaringiz o‘sishini, ko‘nikma tayyorgarligini va zaif nuqtalaringizni kuzatib boring.',
      streakActive: '8 Kunlik Ketma-ketlik Faol',
      overallReadiness: 'Taxminiy Tayyorgarlik',
      improvementNeeded: 'tayyorgarlik. Reading modulida 0.5 ball oshirish kerak.',
      estimatedReadiness: 'Taxminiy Tayyorgarlik',
      currentBand: 'Joriy Ball',
      trajectoryTitle: 'Ball O‘sish Yo‘nalishi',
      days30: '30 kun',
      days60: '60 kun',
      allTime: 'Barchasi',
      priorityDiagnostics: 'Ustuvor Diagnostika',
      headingDrill: 'Sarlavhalar Mashqini Boshlash →',
      essayEditor: 'Insho Tahririni Boshlash →',
      readingErrors: '2-matnda 3 ta xato. Asosiy fikrni tezkor o‘qishga e’tibor bering.',
      writingTransitions: 'O‘tish so‘zlaridan foydalanib Coherence ballini oshiring.',
    },
    notFound: {
      eyebrow: 'SAHIFA TOPILMADI',
      title: 'Har bir javob ham',
      titleEm: 'to‘g‘ri bo‘lavermaydi.',
      subtitle:
        'Aftidan, bu sahifa mavjud emas. U ko‘chirilgan, o‘chirilgan yoki havola xato kiritilgan bo‘lishi mumkin.',
      backHome: 'Bosh sahifaga qaytish',
      continuePracticing: 'Mashqni davom ettirish',
      lookingForPage: 'Sahifani qidiryapsizmi?',
      mainNav: 'Asosiy menyudan foydalanib ko‘ring',
      targetBand: 'Maqsadli Ballingiz',
      unexpectedQuestion: 'Kutilmagan Savol',
      findingNextStep: 'Keyingi bosqich tayyorlanmoqda',
      keepGoing: 'Davom eting',
      nextQuestion: 'Keyingi savol →',
      oneWrongAnswer: 'Bitta xato javob bilan imtihon tugamaydi.',
      disclaimer:
        'Amaliyot testlari mustaqil yaratilgan va IDP, British Council yoki Cambridge bilan bog‘liq emas.',
    },
    insideLook: {
      eyebrow: 'PLATFORMA ICHIDA',
      title: 'Platforma Ichiga Nazar Soling',
      subtitle:
        'Maqsadli ballingizga erishishingiz uchun yaratilgan haqiqiy vositalar, interaktiv modullar va AI tahlil tizimlarini ko‘ring.',
      tryItYourself: 'O‘zingiz Sinab Ko‘ring',
      feature1Title: 'Zudlik bilan AI Tahlili',
      feature1Desc:
        'Writing va Speaking bo‘yicha mezonlarga mos onlayn baholash, xatolar tahlili va Band 9 namunalari.',
      feature1Badge: 'Yozish va Gapirish',
      feature2Title: 'Eshitish va Tezlik Mashqlari',
      feature2Desc:
        'Audio tezligini moslashtirish (0.75x–1.5x), matnni belgilash va vaqt taymeri bilan ishlash.',
      feature2Badge: 'Tinglash Ko‘nikmasi',
      feature3Title: 'O‘qish va Tezlik O‘lchagich',
      feature3Desc:
        'Ikki panelli matn o‘quvchi, taymer, sinonimlar qidiruvi va matn sarlavhalarini moslashtirish.',
      feature3Badge: 'O‘qish Tezlatgichi',
      feature4Title: 'Cue Card Simulyatori va Ovoz Yozish',
      feature4Desc:
        '1 daqiqalik tayyorgarlik taymeri, ovozni qayta eshitish va mavzular bo‘yicha maxsus lug‘atlar.',
      feature4Badge: 'Gapirish Simulyatori',
      feature5Title: 'To‘liq Sinov Imtihonlari va Tahlillar',
      feature5Desc:
        'Rasmiy British Council va IDP standartlariga asoslangan vaqt bo‘yicha to‘liq sinov imtihonlari.',
      feature5Badge: 'Imtihon Simulyatsiyasi',
      feature6Title: 'Lug‘at va Grammatika Mashqlari',
      feature6Desc:
        'Akademik so‘zlar to‘plami, iboralar va grammatik tuzilmalarni mukammallashtirish mashqlari.',
      feature6Badge: 'Poydevor va Mahorat',
      interactiveExp: 'Interaktiv Tajriba',
      readyToTest: 'Hozirgi IELTS ballingizni tekshirishga tayyormisiz?',
      experienceDesc: 'Onlayn mezon baholashi, haqiqiy imtihon vaqti va shaxsiy rivojlanishingizni hoziroq sinang.',
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
      examInDays: 'Экзамен через 24 дня',
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
      maiQuote: 'Мой балл вырос, потому что я наконец понял, что тренировать дальше.',
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
      alreadyHaveAccount: 'Уже есть аккаунт?',
      step1Subtitle: 'Ваша цель помогает нам составить подходящий план обучения.',
      step2Subtitle: 'Мы подстроим недельный темп под ваши сроки.',
      step3Subtitle: 'Начните бесплатно с четким планом или откройте подробный разбор в любое время.',
      planNote: 'Вы можете изменить или обновить тариф в любое время.',
      goals: {
        uni: 'Поступление в университет',
        work: 'Работа или миграция',
        personal: 'Личное развитие',
        notSure: 'Пока не определился',
      },
      dates: {
        less1m: 'Менее чем через 1 месяц',
        m1to3: 'Через 1–3 месяца',
        m3to6: 'Через 3–6 месяцев',
        notBooked: 'Еще не забронировал',
      },
    },
    settings: {
      eyebrow: 'ПРЕДПОЧТЕНИЯ И ЦЕЛИ',
      title: 'Настройки',
      subtitle: 'Настройте целевой балл, дату экзамена, напоминания и языковые предпочтения.',
      tabProfile: 'Профиль и Цель',
      tabReminders: 'Напоминания',
      tabSecurity: 'Безопасность',
      tabAppearance: 'Язык',
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
      appearanceHeader: 'Языковые настройки',
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
      latestSessions: 'Ваши последние занятия',
    },
    listeningModule: {
      eyebrow: 'МОДУЛЬ IELTS LISTENING',
      title: 'Практика аудирования',
      subtitle: 'Тренируйте слух с аутентичными записями, настройкой скорости и синхронным текстом.',
      currentScore: 'Текущий балл',
      section: 'Раздел',
      mins: 'мин',
      playingSection: 'Воспроизведение раздела',
      speed: 'Скорость',
      transcript: 'Транскрипт',
      syncTranscript: 'Синхронизированный транскрипт',
      audioTimestamp: 'Таймкод аудио',
      questionsTitle: 'Вопросы 21 - 22: Множественный выбор',
      questionsDesc: 'Выберите правильный вариант A, B или C на основе аудиозаписи.',
      correctAnswer: 'Правильный ответ ✓',
      submitAnswers: 'Проверить ответы и получить разбор',
      scoreCorrect: 'Результат: 2/2 правильно',
      rewind10s: 'Назад на 10 сек',
      mute: 'Выключить звук',
      unmute: 'Включить звук',
    },
    readingModule: {
      eyebrow: 'МОДУЛЬ IELTS READING',
      title: 'Скорость чтения и сопоставление',
      subtitle: 'Читайте двухпанельные тексты, следите за таймером и выполняйте задания на сопоставление.',
      currentScore: 'Текущий балл',
      passage: 'Текст',
      highlightMode: 'Режим выделения',
      normalMode: 'Обычный режим',
      fontSize: 'Размер шрифта',
      questionsTitle: 'Вопросы 1 - 2: True / False / Not Given',
      questionsDesc: 'Определите, соответствует ли утверждение информации из текста.',
      correctAnswer: 'Правильный ответ ✓',
      submitAnswers: 'Проверить ответы',
      scoreCorrect: 'Результат: 2/2 правильно',
      clickToHighlight: 'Нажимайте на абзацы в режиме выделения, чтобы отметить ключевые доказательства.',
    },
    writingModule: {
      eyebrow: 'МОДУЛЬ IELTS WRITING',
      title: 'Практика письма и ИИ-оценка',
      subtitle: 'Пишите эссе с подсчетом слов, анализом структуры и проверкой по официальным критериям.',
      target: 'Цель Writing',
      task1: 'Task 1 · Академический отчет',
      task2: 'Task 2 · Эссе-мнение',
      promptTitle: 'Тема задания',
      promptTask1: 'График ниже показывает процент домохозяйств в двух странах, использующих возобновляемые источники энергии с 2010 по 2024 год. Обобщите информацию, выделив основные черты.',
      promptTask2: 'Некоторые считают, что искусственный интеллект заменит людей и приведет к массовой безработице. Насколько вы согласны или не согласны с этим мнением?',
      placeholder: 'Введите или вставьте ваш текст эссе IELTS...',
      wordCount: 'Количество слов',
      minWords: 'Мин. цель',
      evaluating: 'ИИ анализирует эссе...',
      evaluateAi: 'Проверить эссе с помощью ИИ',
      showModelAnswer: 'Показать образцовый ответ Band 9',
      hideModelAnswer: 'Скрыть образцовый ответ',
      modelAnswerTitle: 'Образцовый ответ Band 9',
      modelAnswerText: 'В последние годы искусственный интеллект и автоматизированные системы существенно изменили рабочую среду. Хотя некоторые утверждают, что ИИ угрожает традиционной занятости, я твердо убежден, что автоматизация создает больше возможностей за счет повышения производительности и создания новых специальностей.',
      aiDiagnostics: 'Детализация ИИ-диагностики критериев',
      taskAchievement: 'Выполнение задания / Ответ',
      coherenceCohesion: 'Связность и логика',
      lexicalResource: 'Словарный запас (Lexical Resource)',
      grammaticalAccuracy: 'Грамматическая точность и диапазон',
    },
    speakingModule: {
      eyebrow: 'МОДУЛЬ IELTS SPEAKING',
      title: 'Симулятор Говорения и Запись Речи',
      subtitle: 'Практикуйте карточки Parts 1, 2, 3 с таймером подготовки и анализом пауз.',
      target: 'Цель Speaking',
      part1: 'Part 1 · Введение',
      part2: 'Part 2 · Cue Card',
      part3: 'Part 3 · Обсуждение',
      prepTimer: '1 минута на подготовку',
      startPrepTimer: 'Запустить таймер',
      pauseTimer: 'Пауза',
      recordAnswer: 'Записать ответ (2 мин)',
      stopRecording: 'Остановить запись',
      recordingActive: 'Идет запись...',
      recordingPreview: 'Прослушивание записи',
      aiAnalysis: 'ИИ-диагностика говорения',
      fluencyScore: 'Беглость и связность',
      lexicalResource: 'Разнообразие лексики',
      hesitationTracker: 'Анализ задержек и пауз',
      listenBack: 'Прослушать запись',
    },
    vocabularyModule: {
      eyebrow: 'МОДУЛЬ IELTS VOCABULARY',
      title: 'Карточки академической лексики',
      subtitle: 'Освойте устойчивые сочетания, определения и тематические подборки слов Band 7.5+.',
      mastered: 'Изучено слов',
      words: 'слов',
      deck: 'Тематическая подборка',
      flashcards: 'Интерактивные карточки',
      wordList: 'Список слов подборки',
      clickToFlip: 'Нажмите на карточку, чтобы увидеть определение и сочетания',
      definition: 'Определение',
      exampleSentence: 'Пример в контексте IELTS',
      collocations: 'Устойчивые сочетания (Collocations)',
      synonyms: 'Академические синонимы',
      prevWord: 'Предыдущее слово',
      nextWord: 'Следующее слово',
      markAsMastered: 'Отметить как изученное',
      masteredBadge: 'Изучено ✓',
    },
    grammarModule: {
      eyebrow: 'МОДУЛЬ IELTS GRAMMAR',
      title: 'Мастер-класс грамматики и тренажер ошибок',
      subtitle: 'Устраните частые грамматические ошибки и усложните структуры предложений.',
      score: 'Балл грамматики',
      drillTitle: 'Тренажер исправления ошибок',
      questionCount: 'Вопрос 1 из 5',
      candidateSentence: 'Предложение кандидата (содержит ошибку)',
      selectCorrect: 'Выберите правильную грамматическую структуру:',
      correctStructure: 'Правильная структура ✓',
      containsError: 'Содержит ошибку ✕',
      excellent: 'Отлично!',
      reviewRule: 'Разбор правила:',
    },
    testsModule: {
      eyebrow: 'ПОЛНАЯ СИМУЛЯЦИЯ ЭКЗАМЕНА',
      title: 'Центр пробных тестов IELTS',
      subtitle: 'Пройдите полноформатные пробные экзамены в условиях официального регламента.',
      latestScore: 'Последний пробный балл',
      academicModule: 'Академический модуль',
      generalTraining: 'General Training',
      fullMockExam: 'Полный пробный экзамен',
      minsDuration: '160 мин всего',
      questions: '80 вопросов',
      startFullMock: 'Начать полный пробный тест',
      sectionBreakdown: 'Структура разделов экзамена',
      listeningSection: 'Listening · 30 мин · 40 вопросов',
      readingSection: 'Reading · 60 мин · 40 вопросов',
      writingSection: 'Writing · 60 мин · 2 задания',
      speakingSection: 'Speaking · 11-14 мин · 3 части',
      mockExamLaunched: 'Режим пробного экзамена активен',
      mockInstructions: 'Убедитесь, что вы находитесь в тихой комнате. Таймер запустится сразу.',
    },
    historyModule: {
      eyebrow: 'ЖУРНАЛ АКТИВНОСТИ И ДОСТИЖЕНИЯ',
      title: 'История практики и Баллы',
      subtitle: 'Просматривайте выполненные занятия, заработанные очки опыта и открытые значки.',
      totalPoints: 'Всего очков подготовки',
      activeStreak: 'Активная серия дней',
      days: 'Дней',
      bonusXpTomorrow: '+50 Бонусных XP завтра',
      unlockedMilestones: 'Достигнутые рубежи',
      badges: 'Значки',
      viewAllBadges: 'Посмотреть все (6)',
      unlockedBadgesTitle: 'Открытые значки достижений',
      historyLogTitle: 'Журнал истории практики',
      all: 'Все',
      writing: 'Writing',
      listening: 'Listening',
      reading: 'Reading',
      speaking: 'Speaking',
      tests: 'Тесты',
      correct: 'верно',
      levelSeniorScholar: 'Уровень 5 · Продвинутый ученик',
      nextBadge: 'Следующий: Специалист Task 2',
    },
    progressModule: {
      eyebrow: 'АНАЛИТИКА ПОДГОТОВКИ',
      title: 'Мой прогресс и Динамика балла',
      subtitle: 'Отслеживайте рост баллов, готовность навыков, серию занятий и слабые места.',
      streakActive: 'Активна 8-дневная серия',
      overallReadiness: 'Оценка готовности',
      improvementNeeded: 'готовности. Требуется +0.5 балла в Reading.',
      estimatedReadiness: 'Оценка готовности',
      currentBand: 'Текущий балл',
      trajectoryTitle: 'Динамика роста балла',
      days30: '30 дн',
      days60: '60 дн',
      allTime: 'Все время',
      priorityDiagnostics: 'Приоритетная диагностика',
      headingDrill: 'Начать упражнение сопоставления →',
      essayEditor: 'Открыть редактор эссе →',
      readingErrors: '3 ошибки в Тексте 2. Сосредоточьтесь на сканировании основных мыслей.',
      writingTransitions: 'Улучшите балл Coherence за счет вводных слов.',
    },
    notFound: {
      eyebrow: 'СТРАНИЦА НЕ НАЙДЕНА',
      title: 'Не каждый ответ',
      titleEm: 'бывает правильным.',
      subtitle:
        'Похоже, эта страница недоступна. Возможно, она была перемещена, удалена или адрес указан неверно.',
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
      disclaimer:
        'Практические тесты разработаны независимо и не связаны с IDP, British Council или Cambridge.',
    },
    insideLook: {
      eyebrow: 'ВНУТРИ ПЛАТФОРМЫ',
      title: 'Заглянуть Внутрь JUST AN IELTS',
      subtitle:
        'Ознакомьтесь с реальными инструментами, интерактивными модулями и диагностикой ИИ для достижения вашего целевого балла.',
      tryItYourself: 'Попробуйте Сами',
      feature1Title: 'Мгновенная ИИ-Диагностика Критериев',
      feature1Desc:
        'Анализ Task Achievement, Coherence, Lexical Resource и Grammar для Writing и Speaking в реальном времени.',
      feature1Badge: 'Письмо и Говорение',
      feature2Title: 'Тренировка Аудирования и Скорости',
      feature2Desc:
        'Управление скоростью аудио (0.75x–1.5x), синхронный подсвет текста, таймер и распознавание ловушек.',
      feature2Badge: 'Аудирование',
      feature3Title: 'Интерактивное Чтение с Таймером',
      feature3Desc:
        'Двухпанельное чтение, встроенный таймер, поиск синонимов и отработка True/False/Not Given.',
      feature3Badge: 'Ускоритель Чтения',
      feature4Title: 'Симулятор Cue Card и Запись Речи',
      feature4Desc:
        'Задания карточек Parts 1, 2, 3 с таймером на 1 минуту, прослушиванием записей и анализом задержек.',
      feature4Badge: 'Симулятор Говорения',
      feature5Title: 'Полные Пробные Тесты и Аналитика',
      feature5Desc:
        'Полноформатные пробные экзамены на время по официальным стандартам British Council и IDP.',
      feature5Badge: 'Симуляция Экзамена',
      feature6Title: 'Словарь и Грамматический Тренажер',
      feature6Desc:
        'Тематические подборки академических слов, устойчивые сочетания и отработка сложных грамматических конструкций.',
      feature6Badge: 'База и Совершенствование',
      interactiveExp: 'Интерактивный опыт',
      readyToTest: 'Готовы проверить ваш текущий балл IELTS?',
      experienceDesc: 'Оцените проверку ИИ по критериям, аутентичный тайминг и отслеживание прогресса прямо сейчас.',
    },
    loading: {
      loadingWorkspace: 'Загрузка рабочего пространства...',
      preparingSession: 'Подготовка персонального занятия',
      pleaseWait: 'Пожалуйста, подождите',
    },
  },
}
