// ============================================================
// SECOND HALF STRONG — COMPLETE RAG KNOWLEDGE BASE
// Funk Roberts / Men Over 40 Health Summit
// 105 Chunks covering Waves 1-19
// ============================================================

export interface KnowledgeChunk {
  id: string;
  speakerId: string;
  topic: string[];
  tags: string[];
  content: string;
  quote?: string;
  protocol?: string[];
  sourceRef: string;
}

export const knowledgeChunks: KnowledgeChunk[] = [

  {
    id: "fr-001",
    speakerId: "funk-roberts",
    topic: ["recovery", "warm-up", "training-philosophy"],
    tags: ["recovery", "warm-up", "over-40", "longevity", "consistency"],
    content: "The Over 40 Alpha Program is built to transform men, not destroy them. For men over 40, 50, 60, and beyond, recovery is not optional — it is a mandatory part of the transformation process. The goal is not just to complete one workout. The goal is to train consistently for life without injury. Training creates the stimulus. Nutrition provides the fuel. Recovery allows the body to adapt, repair, grow, and keep going. A man who skips recovery may still train hard, but he will eventually break down. A man who respects recovery can train consistently for years. Consistency beats intensity. Longevity beats ego. Recovery keeps men in the game.",
    quote: "Longevity beats ego. Recovery keeps men in the game.",
    protocol: ["Never skip the warm-up — shorten the main workout if pressed for time", "Every workout must include dynamic warm-up prep", "Schedule dedicated recovery days each week", "Treat sleep as training — it is when adaptation happens"],
    sourceRef: "funk-ai-rules-v2",
  },

  {
    id: "fr-002",
    speakerId: "funk-roberts",
    topic: ["warm-up", "injury-prevention", "training-structure"],
    tags: ["warm-up", "dynamic", "joint-health", "nervous-system"],
    content: "Every workout must begin with a proper warm-up. The warm-up prepares the body, joints, muscles, nervous system, heart, and mind for the workout ahead. Skipping the warm-up increases injury risk and reduces performance. If a member says they are short on time, the AI Coach should recommend shortening the main workout before skipping the warm-up. The warm-up is non-negotiable. Dynamic warm-ups for men over 40 should include movement that activates the hips, shoulders, thoracic spine, and knees — the four most common injury points for men in this age group. Think of the warm-up as insurance for your joints.",
    quote: "Do the warm-up first, then shorten the workout if needed. Never jump into intense training cold.",
    protocol: ["5-10 min dynamic movement before every session", "Focus on hips, shoulders, spine, and knees", "Include activation work for glutes and core", "Match warm-up intensity to the main workout"],
    sourceRef: "funk-ai-rules-v2",
  },

  {
    id: "fr-003",
    speakerId: "funk-roberts",
    topic: ["training-structure", "session-design", "coaching"],
    tags: ["structure", "session", "trainer", "longevity", "results"],
    content: "When you train men in their 40s, 50s, 60s, and beyond, how you structure the session matters just as much as the exercises you choose. A well-designed session has five phases: warm-up, priming, main workout, cool-down, and mobility. Rushing or skipping any phase leaves results on the table and increases injury risk. The session structure communicates respect for the man's body and his time. One of the biggest mistakes trainers and trainees make is failing to plan the entire session. Warm-ups are rushed. Stretching is forgotten. The session ends abruptly. That leaves your body without the full benefits of a complete training experience. For men over 40, the cool-down and mobility phase is just as important as the main workout.",
    quote: "When you train men over 40, structure is not optional. It is essential.",
    protocol: ["Plan all 5 phases before starting", "Warm-up: 5-10 min dynamic movement", "Priming: activation for target muscles", "Cool-down: 5 min low-intensity movement", "Mobility: 5-10 min static stretching and joint work"],
    sourceRef: "canfitpro",
  },

  {
    id: "fr-004",
    speakerId: "funk-roberts",
    topic: ["coaching-philosophy", "ai-coach", "knowledge-system"],
    tags: ["funk-roberts", "over-40", "testosterone", "ecosystem"],
    content: "The Funk Roberts AI Fitness Coach is not just a chatbot. It is a knowledge system built on trusted, proven content from the Over 40 Alpha Brotherhood. It covers training, testosterone optimization, nutrition, supplements, sleep, recovery, mindset, breathwork, and mobility — everything a man over 40 needs to reclaim his health. The AI Coach answers only from the Funk Roberts ecosystem. It never gives generic fitness advice. It speaks like a coach — direct, motivational, and evidence-based. The mission is simple: help men over 40, 50, 60, and beyond get lean, strong, and healthy without wrecking their bodies or their lives.",
    quote: "The AI Coach speaks like Funk Roberts — direct, motivational, masculine. It never accepts excuses, but it always supports the man.",
    sourceRef: "funk-fitness-coach",
  },

  {
    id: "fr-005",
    speakerId: "funk-roberts",
    topic: ["program-philosophy", "over-40", "testosterone"],
    tags: ["REAL", "alpha", "over-40", "testosterone", "lifestyle"],
    content: "The REAL Alpha Men system is built around 8 pillars that address the total man — not just his workouts. REAL stands for Radical Ownership, Evolution, Alignment, and Leadership. The system recognizes that men over 40 face unique challenges: declining testosterone, increased stress, family responsibilities, career pressures, and a fitness culture that does not speak to them. The Over 40 Alpha approach meets men where they are and builds them up systematically. Every pillar reinforces the others. You cannot have physical transformation without mental transformation. You cannot sustain health changes without lifestyle changes. The REAL Alpha system addresses all of it.",
    quote: "You cannot have physical transformation without mental transformation.",
    sourceRef: "funk-roberts-real-system",
  },

  {
    id: "fr-006",
    speakerId: "funk-roberts",
    topic: ["testosterone", "natural-optimization", "lifestyle"],
    tags: ["testosterone", "natural", "lifestyle", "over-40", "men"],
    content: "Testosterone naturally declines at roughly 1-2% per year after age 30. By 40, most men are already feeling the effects: fatigue, reduced muscle mass, increased belly fat, lower libido, poor recovery, and brain fog. But low testosterone is not inevitable. The lifestyle choices men make every day either support or sabotage their hormonal health. The pillars of natural testosterone optimization are: resistance training, quality sleep, stress management, proper nutrition, and eliminating endocrine disruptors. These are not optional extras — they are the foundation. Before considering any hormonal intervention, every man should optimize his lifestyle completely.",
    quote: "Low testosterone is not inevitable — it is often a lifestyle problem with lifestyle solutions.",
    protocol: ["Lift heavy 3-4x per week — compound movements prioritized", "Get 7-9 hours of quality sleep every night", "Reduce chronic stress through breathwork and recovery", "Eat adequate protein and healthy fats", "Eliminate alcohol, processed foods, and endocrine disruptors"],
    sourceRef: "funk-roberts-testosterone",
  },

  {
    id: "fr-007",
    speakerId: "funk-roberts",
    topic: ["fat-loss", "muscle-building", "body-composition"],
    tags: ["fat-loss", "muscle", "metabolism", "over-40", "results"],
    content: "Men over 40 can absolutely lose fat and build muscle simultaneously — but the approach must be intelligent. The metabolism slows, cortisol affects recovery differently, and hormonal shifts change how the body responds to training and nutrition. The key principles: prioritize resistance training over cardio, eat enough protein (1g per pound of bodyweight), keep cardio metabolic not destructive, manage sleep and stress obsessively, and cycle intensity through deload weeks. Many men over 40 make the mistake of training like they did at 22 — too much volume, not enough recovery, too little protein. The smarter approach always wins long-term.",
    quote: "Train smarter, not just harder. Your body at 40 responds to intelligence — not punishment.",
    protocol: ["Prioritize compound lifts: squat, hinge, press, pull", "Eat 1g protein per pound of bodyweight daily", "Add 2-3 metabolic conditioning sessions per week", "Deload every 4-6 weeks to allow full recovery", "Track sleep quality as carefully as workouts"],
    sourceRef: "funk-roberts-body-composition",
  },

  {
    id: "fr-008",
    speakerId: "funk-roberts",
    topic: ["training-philosophy", "longevity", "sustainability"],
    tags: ["longevity", "consistency", "over-40", "sustainable"],
    content: "The biggest mistake men over 40 make is treating fitness as a sprint instead of a lifelong practice. They go all in for 6 weeks, burn out or get injured, then spend months recovering. The Over 40 Alpha approach is built for the long game. Sustainable progress over years beats dramatic results that disappear in months. This requires: consistent moderate training rather than sporadic extreme training, excellent recovery protocols, a nutrition approach you can maintain, and a mindset shift from punishment to performance. The man who trains consistently for 5 years will always outperform the man who goes hard for 6 weeks and stops.",
    quote: "Consistency over years beats intensity for weeks. The long game always wins.",
    sourceRef: "funk-roberts-philosophy",
  },

  {
    id: "fr-009",
    speakerId: "anthony-balduzzi",
    topic: ["family-health", "fat-loss", "fathers-over-40"],
    tags: ["fit-father", "family", "dad", "over-40", "weight-loss", "motivation"],
    content: "Dr. Anthony Balduzzi founded the Fit Father Project after losing his own father at age 42 to preventable health complications. His mission: help dads over 40 lose weight, regain energy, build strength, and live healthier lives — for themselves and their families. The Fit Father approach recognizes that busy fathers need time-efficient, family-friendly protocols that actually fit their lifestyle. Key insight from Anthony: most men over 40 who struggle with health are not lazy — they are overwhelmed, under-supported, and using strategies designed for younger men. The program has helped over 10,000 men collectively transform their health using a balanced approach to training, nutrition, and lifestyle.",
    quote: "Your kids need you healthy. That is a mission worth fighting for every single day.",
    protocol: ["Follow a structured training program 3-4x per week", "Prioritize simple whole food meals the family can share", "Get accountability — connect with other fathers doing the same work", "Start with one habit and build systematically"],
    sourceRef: "summit-balduzzi",
  },

  {
    id: "fr-010",
    speakerId: "ben-greenfield",
    topic: ["performance", "longevity", "biohacking"],
    tags: ["biohacking", "performance", "longevity", "optimization", "over-40"],
    content: "Ben Greenfield is a world-renowned health expert and New York Times bestselling author who has spent over two decades helping elite athletes and high performers optimize energy, recovery, and longevity. For men over 40, Ben's approach centers on optimizing the fundamentals before exploring advanced biohacking: sleep quality, stress management, movement variety, and nutrition timing. His key message: most men are looking for complex solutions when the basics done consistently would transform their health. Light exposure management, cold therapy, zone 2 cardio, and resistance training remain the foundational pillars — everything else is optimization on top.",
    quote: "Master the basics obsessively before adding complexity. The fundamentals are where the results live.",
    protocol: ["Morning light exposure within 30 min of waking", "Zone 2 cardio 3-4x per week for metabolic health", "Resistance training 3x per week", "Cold exposure 3-5 min cold shower or ice bath daily", "Sleep optimization: dark, cool room, consistent schedule"],
    sourceRef: "summit-ben-greenfield",
  },

  {
    id: "fr-011",
    speakerId: "bryan-krahn",
    topic: ["muscle-building", "physique", "realistic-expectations"],
    tags: ["muscle", "physique", "realistic", "over-40", "no-bs"],
    content: "Bryan Krahn is a highly respected physique coach who specializes in helping ordinary men build extraordinary physiques in their 40s, 50s, 60s, and beyond. His no-BS approach: men over 40 CAN build significant muscle and transform their physiques — but they need strategies designed for their age, not copied from 22-year-olds. Key differences for men over 40: more recovery needed between sessions, volume must be managed carefully, technique matters more than weight, and protein intake becomes even more critical. Bryan emphasizes that intelligent programming — managing volume, intensity, frequency, and recovery — is what separates men who make progress from those who stall or get injured.",
    quote: "You can build an incredible physique after 40. You just need to train smarter than you did at 22.",
    protocol: ["Reduce volume compared to younger years — quality over quantity", "Increase recovery time between sessions for same muscle group", "Prioritize technique and time under tension over heavy weight", "Increase protein to 1-1.2g per pound of bodyweight", "Programme deload weeks every 4-6 weeks"],
    sourceRef: "summit-funk-interview",
  },

  {
    id: "fr-012",
    speakerId: "summit-expert",
    topic: ["mindset", "resilience", "over-40"],
    tags: ["mindset", "resilience", "transformation", "men-over-40"],
    content: "The mental game of health after 40 is fundamentally different from your 20s. At 40+, men carry decades of habits, identities, and beliefs about what they can and cannot do physically. The most important transformation is not physical — it is the shift from seeing yourself as someone declining to seeing yourself as someone ascending. Men who make dramatic health transformations after 40 share one trait: they made a decision that their health was non-negotiable. Not a wish. Not a goal. A decision. From that decision, every action becomes aligned. Mindset is not soft — it is the foundation that everything else is built on. Without it, even the best program will eventually be abandoned.",
    quote: "Health transformation after 40 begins with a non-negotiable decision — not a wish, not a goal, a decision.",
    protocol: ["Write down your non-negotiable health commitments", "Identify and challenge limiting beliefs about aging", "Build your identity as a healthy man", "Find your brotherhood — men who hold the standard"],
    sourceRef: "summit-chris",
  },

  {
    id: "fr-013",
    speakerId: "dean-pohlman",
    topic: ["mobility", "yoga", "flexibility"],
    tags: ["yoga", "mobility", "man-flow", "flexibility", "joint-health", "over-40"],
    content: "Dean Pohlman, founder of Man Flow Yoga, has dedicated his career to making mobility and yoga accessible and relevant for men — particularly men over 40. His insight: traditional yoga often fails men because it is not designed with their physiology, goals, or ego in mind. Man Flow Yoga is strength-focused, practical, and results-driven. For men over 40, mobility work is not optional — it is what allows everything else to continue. Tight hips cause back pain. Poor shoulder mobility causes rotator cuff problems. Limited thoracic mobility reduces power output. Dean's message: 10-15 minutes of targeted mobility work daily can eliminate chronic pain, improve athletic performance, and extend your training career by decades.",
    quote: "Mobility is not stretching. It is the ability to control your body through a full range of motion. That is power.",
    protocol: ["10-15 min mobility work daily — make it a non-negotiable", "Target hips, shoulders, thoracic spine, and ankles", "Focus on strength within range of motion", "Consistency over intensity — 10 min every day beats 60 min once a week"],
    sourceRef: "summit-dean-pohlman",
  },

  {
    id: "fr-014",
    speakerId: "summit-expert",
    topic: ["strength-training", "power", "athletic-performance"],
    tags: ["strength", "power", "athletic", "over-40", "performance"],
    content: "Strength and power do not have to decline as men age — they decline when men stop training them. Research is clear: men who engage in progressive resistance training maintain significantly greater strength, power output, muscle mass, and functional capacity than their untrained peers — well into their 70s and beyond. For men over 40, the focus should be on maintaining neuromuscular power alongside traditional strength training. This means including explosive movements: medicine ball throws, power cleans, jump squats, and sprints. Neglecting power training is one of the biggest mistakes aging men make — strength without power means you cannot respond quickly to the demands of life.",
    quote: "You do not lose power because you age. You lose power because you stop training it.",
    protocol: ["Include 2-3 explosive movements per training week", "Sprint or jump exercises to maintain fast-twitch fibers", "Progressive overload remains the primary driver of strength adaptation", "Train movement patterns: push, pull, hinge, squat, carry, rotate"],
    sourceRef: "summit-eddie",
  },

  {
    id: "fr-015",
    speakerId: "summit-expert",
    topic: ["gut-health", "nutrition", "inflammation"],
    tags: ["gut-health", "inflammation", "nutrition", "microbiome", "over-40"],
    content: "Gut health is one of the most underappreciated factors in men's health after 40. The gut microbiome influences testosterone levels, inflammatory response, mental health, immune function, energy, and body composition. Men over 40 who suffer from chronic inflammation, fatigue, brain fog, and stubborn belly fat often have significant gut dysbiosis. The solution: prioritize diverse, whole food nutrition with adequate fiber, reduce ultra-processed foods and alcohol, manage stress (which directly disrupts the gut), and consider targeted probiotic supplementation. Fixing the gut often fixes everything else simultaneously.",
    quote: "Fix the gut and you often fix the hormones, the energy, the mood, and the belly fat simultaneously.",
    protocol: ["Eat 30+ different plants per week for microbiome diversity", "Eliminate ultra-processed foods and alcohol", "Manage stress — cortisol destroys gut integrity", "Include fermented foods: kefir, sauerkraut, yogurt", "Consider a quality probiotic with multiple strains"],
    sourceRef: "summit-fir",
  },

  {
    id: "fr-016",
    speakerId: "summit-expert",
    topic: ["fat-loss", "metabolic-health", "nutrition"],
    tags: ["fat-loss", "metabolism", "metabolic-health", "over-40", "sustainable"],
    content: "Metabolic health is the foundation of everything men over 40 want: fat loss, muscle building, energy, hormonal balance, and longevity. Men over 40 commonly suffer from insulin resistance, elevated cortisol, and disrupted circadian rhythms that make traditional calorie-cutting approaches frustrating and ineffective. The smarter approach: improve insulin sensitivity through resistance training, optimize sleep, reduce processed carbohydrates, time meals around training, and manage stress. When metabolic health improves, fat loss becomes almost effortless.",
    quote: "Fix your metabolism and fat loss takes care of itself. Fight your metabolism and you will always struggle.",
    protocol: ["Resistance train 3-4x per week to improve insulin sensitivity", "Eat most carbohydrates around training windows", "Reduce processed carbs and sugars", "Sleep 7-9 hours — poor sleep destroys metabolic health", "Manage cortisol — chronic stress locks fat in place"],
    sourceRef: "summit-greg",
  },

  {
    id: "fr-017",
    speakerId: "summit-expert",
    topic: ["men-health", "preventive-health", "longevity"],
    tags: ["preventive", "health", "longevity", "men", "over-40"],
    content: "Men over 40 face a convergence of challenges: declining hormones, increased cardiovascular risk, reduced muscle mass, greater accumulation of chronic stress, and a culture that teaches men to ignore their health until crisis hits. Prevention is always better than treatment. The men who age best are those who treat their health as a priority in their 40s — not their 60s when the damage has already accumulated. The core preventive pillars: regular exercise especially resistance training, quality nutrition, adequate sleep, strong social connections, stress management, and regular medical monitoring including bloodwork.",
    quote: "The best time to start was 20 years ago. The second best time is right now.",
    protocol: ["Get annual bloodwork: testosterone, PSA, lipids, glucose, thyroid", "Start resistance training if not already doing it", "Prioritize sleep as the single highest-ROI health investment", "Build strong male friendships — social isolation kills men"],
    sourceRef: "summit-health",
  },

  {
    id: "fr-018",
    speakerId: "summit-expert",
    topic: ["coaching", "accountability", "behavior-change"],
    tags: ["coaching", "accountability", "behavior", "consistency", "habits"],
    content: "Accountability is not a personality trait — it is a system. Men who consistently achieve their health goals do not do it through willpower alone. They build systems, environments, and communities that make the right behaviors easier and the wrong behaviors harder. The role of a coach is not to motivate — motivation is temporary. The role of a coach is to help the man build systems that produce consistent action regardless of how he feels. Key accountability tools: public commitments, tracking systems, social support, scheduled check-ins, and clear consequence structures. Men who are held accountable by others achieve dramatically better results than those who go it alone.",
    quote: "Motivation is temporary. Systems are permanent. Build the system, not the willpower.",
    protocol: ["Join a community of men with the same goals", "Use a training log or app to track every session", "Schedule weekly check-ins with an accountability partner", "Make commitments public to raise the stakes", "Review progress weekly and adjust"],
    sourceRef: "summit-jb",
  },

  {
    id: "fr-019",
    speakerId: "summit-expert",
    topic: ["stress-management", "mental-health", "men"],
    tags: ["stress", "mental-health", "men", "anxiety", "over-40"],
    content: "Men over 40 carry enormous amounts of unprocessed stress from careers, relationships, financial pressures, and a culture that discourages vulnerability. Chronic stress is not just unpleasant — it is physiologically destructive. It elevates cortisol chronically, which suppresses testosterone, disrupts sleep, increases belly fat storage, accelerates inflammation, and increases risk of heart disease. The masculine approach to stress management is tactical. Breathwork, physical training, cold exposure, quality sleep, purposeful action, and strong male community are all effective stress management tools that align with how men actually operate.",
    quote: "Stress is a physiological emergency that your body cannot distinguish from a physical threat. Manage it or it manages you.",
    protocol: ["Practice 5-10 min breathwork daily to reset the nervous system", "Use physical training as a cortisol regulation tool", "Build strong friendships and brotherhood connections", "Develop a shutdown ritual — transition from work stress to home mode", "Identify and address the source of chronic stress"],
    sourceRef: "summit-joy",
  },

  {
    id: "fr-020",
    speakerId: "summit-expert",
    topic: ["purpose", "identity", "second-half-of-life"],
    tags: ["purpose", "identity", "meaning", "second-half", "men-over-40"],
    content: "Men in their 40s and 50s often experience an identity crisis that goes far beyond the cliche midlife crisis. They have achieved what they were supposed to achieve — career, family, possessions — and yet something feels hollow. This is the invitation to build a second half of life that is more intentional, more aligned with values, and more deeply fulfilling. Men who navigate this transition well redefine success on their own terms. They invest in relationships, health, purpose, and contribution rather than simply accumulating more. The healthiest men in their 50s, 60s, and 70s are those who found a mission bigger than themselves.",
    quote: "The first half of life is about building. The second half is about becoming. Both require courage.",
    protocol: ["Clarify your values — what actually matters to you now", "Invest in relationships more than achievements", "Find a mission or contribution that extends beyond your own life", "Mentor younger men — purpose through leadership", "Health is the foundation — without it, none of the rest is possible"],
    sourceRef: "summit-justin",
  },

  {
    id: "fr-021",
    speakerId: "summit-expert",
    topic: ["nutrition", "protein", "muscle-preservation"],
    tags: ["protein", "nutrition", "muscle", "over-40", "anabolic"],
    content: "Protein is the most critical nutritional variable for men over 40 who want to maintain or build muscle. Anabolic resistance — the reduced ability of muscle to respond to protein — increases with age, meaning older men actually need MORE protein than younger men, not less. Current research supports 1.6-2.2g of protein per kilogram of bodyweight for men over 40 who are resistance training. Distribution matters: spreading protein evenly across 3-5 meals is more effective than eating most protein in one sitting. High-quality sources: lean meats, eggs, fish, Greek yogurt, cottage cheese, and protein supplementation when whole food intake is insufficient.",
    quote: "Men over 40 need more protein than men in their 20s — not less. Anabolic resistance is real, and protein is the answer.",
    protocol: ["Target 1.6-2.2g protein per kg bodyweight daily", "Spread protein across 3-5 meals minimum", "Prioritize whole food protein sources: meat, eggs, fish", "Have 30-50g protein within 2 hours of resistance training", "Use quality protein powder to fill gaps when needed"],
    sourceRef: "summit-keith",
  },

  {
    id: "fr-022",
    speakerId: "summit-expert",
    topic: ["functional-training", "movement", "athleticism"],
    tags: ["functional", "movement", "athleticism", "over-40", "strength"],
    content: "Functional training for men over 40 is about maintaining and rebuilding the athleticism that makes life feel powerful and free. It is not just about looking good in the mirror — it is about being able to sprint after your kids, carry heavy bags without pain, play sports without injury, and move through life with confidence and capacity. The foundation of functional training: multi-directional movement, rotational power, single-leg stability, and carry patterns. Men who train functionally maintain their physical independence longer and experience fewer age-related movement limitations.",
    quote: "Train for life, not just for the mirror. Functional strength is what lets you sprint, carry, play, and live fully.",
    protocol: ["Include carries: farmer carries, suitcase carries, overhead carries", "Train single-leg movements for balance and stability", "Incorporate rotational exercises: med ball throws, cable rotations", "Add multi-directional movements: lateral lunges, shuffles", "Test yourself regularly: sprint, jump, carry — know where you stand"],
    sourceRef: "summit-luke-j",
  },

  {
    id: "fr-023",
    speakerId: "summit-expert",
    topic: ["sleep", "recovery", "performance"],
    tags: ["sleep", "recovery", "performance", "testosterone", "growth-hormone"],
    content: "Sleep is the most powerful recovery and anabolic tool available to men over 40 — and it is free. During deep sleep, the body releases 70-80% of its daily growth hormone, consolidates muscle protein synthesis, repairs tissue, and regulates cortisol. Men who chronically sleep less than 7 hours have measurably lower testosterone, higher cortisol, reduced insulin sensitivity, increased belly fat, and significantly impaired recovery from training. Sleep optimization is not optional — it is the multiplier that makes everything else work.",
    quote: "Sleep is not laziness. Sleep is the most anabolic thing you can do for your body every single night.",
    protocol: ["Maintain a consistent sleep/wake schedule 7 days a week", "Aim for 7-9 hours in a cool, dark, quiet room", "Eliminate screens 60 minutes before bed", "Avoid alcohol within 3 hours of sleep", "Get morning sunlight within 30 min of waking to anchor your circadian rhythm"],
    sourceRef: "summit-luke-w",
  },

  {
    id: "fr-024",
    speakerId: "summit-expert",
    topic: ["men-health", "cardiovascular", "longevity"],
    tags: ["cardiovascular", "heart", "longevity", "men", "prevention"],
    content: "Cardiovascular disease remains the number one killer of men over 40, and yet most men either ignore cardiovascular health entirely or approach it incorrectly. The optimal cardiovascular protocol for men over 40 combines Zone 2 training (60-70% max HR, 3-4x per week) with higher intensity intervals 1-2x per week. Zone 2 builds mitochondrial density and reduces cardiovascular disease risk. High-intensity intervals maintain VO2 max — a powerful predictor of longevity. Regular monitoring: blood pressure, resting heart rate, lipid panel, and ideally a coronary calcium scan.",
    quote: "VO2 max is one of the strongest predictors of longevity. Train to maintain it — it does not preserve itself.",
    protocol: ["3-4x per week Zone 2 cardio: walk, bike, row at conversational pace", "1-2x per week high-intensity intervals", "Monitor blood pressure monthly", "Get annual lipid panel and cardiovascular markers", "Build to 150 min/week moderate or 75 min/week vigorous cardio"],
    sourceRef: "summit-mens-health",
  },

  {
    id: "fr-025",
    speakerId: "summit-expert",
    topic: ["testosterone", "hormones", "optimization"],
    tags: ["testosterone", "TRT", "hormones", "optimization", "over-40"],
    content: "The conversation around testosterone replacement therapy is more nuanced than most men realize. The first step for any man concerned about testosterone is always lifestyle: sleep, resistance training, stress management, nutrition, and eliminating endocrine disruptors. If after 3-6 months of genuine lifestyle optimization testosterone is still clinically low with symptoms, TRT becomes a legitimate conversation with a qualified physician. TRT is not a shortcut — it is a medical intervention for men who need it.",
    quote: "Optimize lifestyle first. TRT is a medical tool for men who need it — not a shortcut for men who have not done the work.",
    protocol: ["Get comprehensive hormone panel: total T, free T, SHBG, LH, FSH, estradiol", "Optimize lifestyle for 3-6 months before considering medical intervention", "Work with a physician who specializes in men's hormonal health", "Understand TRT is a lifetime commitment", "Monitor and optimize: the goal is optimal, not just normal"],
    sourceRef: "summit-mike",
  },

  {
    id: "fr-026",
    speakerId: "summit-expert",
    topic: ["nutrition", "anti-inflammatory", "eating"],
    tags: ["anti-inflammatory", "food", "inflammation", "nutrition", "over-40"],
    content: "Chronic inflammation is the silent driver behind the most common health problems men over 40 face: joint pain, cardiovascular disease, insulin resistance, cognitive decline, and cancer risk. And diet is one of the most powerful tools for managing inflammation. The foundation of anti-inflammatory eating: abundant vegetables, quality proteins, healthy fats especially omega-3s, minimal processed foods, minimal added sugars. The foods that drive inflammation: refined seed oils, ultra-processed foods, excessive alcohol, refined sugar, and trans fats.",
    quote: "You cannot out-supplement a pro-inflammatory diet. Food is the foundation of everything.",
    protocol: ["Base meals on vegetables, quality protein, and healthy fats", "Eat fatty fish 2-3x per week for omega-3 fatty acids", "Eliminate refined seed oils: canola, soybean, corn oil", "Limit alcohol to 1-2 drinks per week maximum", "Remove ultra-processed foods from your regular eating"],
    sourceRef: "summit-percy",
  },

  {
    id: "fr-027",
    speakerId: "summit-expert",
    topic: ["training", "intermittent-fasting", "metabolic"],
    tags: ["intermittent-fasting", "fasting", "metabolic", "fat-loss", "timing"],
    content: "Intermittent fasting can be a powerful tool for men over 40 — but it is not a universal solution. The most common protocol is 16:8 (16 hours fasting, 8 hours eating window). Benefits: improved insulin sensitivity, reduced inflammation, increased growth hormone output, and simplified eating structure. Cautions: fasting should not compromise protein intake or post-workout nutrition. Men who train intensely should place at least one quality meal within 2 hours of resistance training.",
    quote: "Fasting is a tool, not a religion. Use it when it serves your goals, not because someone says you should.",
    protocol: ["Start with a 12-hour fast (7pm to 7am) before extending the window", "Ensure protein targets are still met within the eating window", "Break fast with protein-rich meal for satiety and muscle preservation", "Avoid fasting on heavy training days if performance suffers", "Monitor energy and performance — adjust the protocol if needed"],
    sourceRef: "summit-ruston",
  },

  {
    id: "fr-028",
    speakerId: "summit-expert",
    topic: ["community", "brotherhood", "accountability"],
    tags: ["community", "brotherhood", "accountability", "men", "support"],
    content: "The crisis of modern masculinity is partly a crisis of male community. Men in their 40s and beyond are more socially isolated than any previous generation. Research shows that chronic loneliness is as damaging to health as smoking 15 cigarettes per day. Men are not designed to go it alone. The ancient model of male brotherhood — training together, building together, and being honest with each other — is what kept men healthy. Recreating that in the modern world is not optional for men who want to thrive in their second half of life.",
    quote: "No supplement replaces brotherhood. Men need men. Find yours.",
    protocol: ["Join a community of men pursuing the same health goals", "Get a training partner for at least some weekly sessions", "Attend a men's group or accountability circle", "Be honest about your struggles with at least one trusted man", "Create regular time for male friendship — schedule it like training"],
    sourceRef: "summit-sm",
  },

  {
    id: "fr-029",
    speakerId: "summit-expert",
    topic: ["joint-health", "pain", "training-around-injury"],
    tags: ["joint-health", "pain", "injury", "training", "over-40"],
    content: "Joint pain is the most common reason men over 40 stop training — and in most cases, it is preventable and manageable without stopping exercise. Complete rest is usually the wrong answer. Research consistently shows that appropriate loading — the right exercises at the right intensity — actually promotes joint healing. For knee pain: strengthen the glutes and hamstrings. For shoulder pain: strengthen the rotator cuff and improve thoracic mobility. For lower back pain: strengthen the core and improve hip mobility. Train around pain, not through it, while addressing the root cause.",
    quote: "Rest is rarely the answer for joint pain in men over 40. Appropriate movement is the medicine.",
    protocol: ["Identify pain-provoking movements and temporarily avoid them", "Strengthen the muscles surrounding the painful joint", "Add mobility work for the joint above and below the painful area", "Consider a sports physio or movement specialist for persistent pain", "Maintain training volume — just substitute pain-free movements"],
    sourceRef: "summit-clark",
  },

  {
    id: "fr-030",
    speakerId: "summit-expert",
    topic: ["recovery-nutrition", "post-workout", "supplements"],
    tags: ["post-workout", "nutrition", "recovery", "protein", "supplements"],
    content: "Post-workout nutrition for men over 40 is a critical window that most men underutilize. After resistance training, the muscle is primed for protein synthesis for 2-4 hours. Missing this window leaves significant muscle-building potential untapped. The optimal post-workout protocol: 30-50g quality protein within 1-2 hours of training, with some carbohydrates to replenish glycogen and reduce cortisol. Creatine monohydrate (5g daily) dramatically improves post-workout recovery for men over 40 and has the strongest evidence base of any sports supplement.",
    quote: "The post-workout window is when the muscle is most ready to grow. Do not miss it.",
    protocol: ["Consume 30-50g protein within 2 hours of resistance training", "Include 20-60g carbohydrates post-workout to replenish glycogen", "Take 5g creatine monohydrate daily", "Hydrate: replace 150% of fluid lost during training", "Avoid alcohol post-workout — it directly suppresses protein synthesis"],
    sourceRef: "summit-interview-recovery-nutrition",
  },

  {
    id: "fr-031",
    speakerId: "summit-expert",
    topic: ["mindset", "discipline", "habit-formation"],
    tags: ["discipline", "habits", "consistency", "identity", "transformation"],
    content: "Habit formation is the engine of lasting health transformation. Motivation gets you started. Habits keep you going. The most effective approach is not willpower — it is designing your environment and routines so the desired behavior requires minimal decision-making. For men over 40: pack your gym bag the night before, schedule training like a meeting, prepare meals on Sunday, put your supplements where you will see them. Identity-based habits are the most powerful: instead of saying 'I am trying to exercise,' say 'I am a man who trains.' That identity shift changes everything about how you make decisions.",
    quote: "You do not rise to your goals. You fall to the level of your systems. Build better systems.",
    protocol: ["Design your environment: remove barriers to healthy behavior", "Stack habits onto existing routines", "Track habits daily — what gets measured gets done", "Shift identity: 'I am a man who trains' not 'I am trying to train'", "Accept imperfection — missing one day is fine, missing two is a habit"],
    sourceRef: "summit-habit-formation",
  },

  {
    id: "fr-032",
    speakerId: "summit-expert",
    topic: ["supplements", "foundational", "basics"],
    tags: ["supplements", "foundation", "vitamin-d", "magnesium", "omega-3"],
    content: "For men over 40, supplement overwhelm is real — and expensive. The truth: most men would benefit more from getting the foundational supplements right than from chasing exotic compounds. The evidence-based foundational stack for men over 40: Vitamin D3 (2000-5000 IU daily), Magnesium glycinate (300-400mg nightly), Omega-3 fish oil (2-3g EPA+DHA daily), Creatine monohydrate (5g daily). These four consistently taken will produce noticeable improvements in energy, sleep, recovery, and body composition.",
    quote: "Get the foundational supplements right before spending money on the exotic ones. Most men skip the basics.",
    protocol: ["Vitamin D3: 2000-5000 IU daily with K2 for absorption", "Magnesium glycinate: 300-400mg before bed", "Omega-3: 2-3g EPA+DHA daily with meals", "Creatine monohydrate: 5g daily at any time", "Zinc: 15-30mg if diet is low in red meat and shellfish"],
    sourceRef: "summit-foundational-supplements",
  },

  {
    id: "fr-033",
    speakerId: "summit-expert",
    topic: ["hormones", "thyroid", "energy"],
    tags: ["thyroid", "hormones", "energy", "fatigue", "over-40"],
    content: "Thyroid dysfunction is one of the most commonly missed root causes of fatigue, weight gain, brain fog, and poor recovery in men over 40. The standard thyroid test (TSH alone) often misses subclinical dysfunction. A comprehensive thyroid panel includes TSH, free T3, free T4, reverse T3, and thyroid antibodies. Men with subclinical hypothyroidism may feel significant symptoms while being told their thyroid is 'normal.' Lifestyle factors that support thyroid health: adequate iodine (seafood, seaweed), selenium (Brazil nuts, fish), reducing chronic stress, and adequate sleep.",
    quote: "Your thyroid is the master controller of your metabolism. If it is sluggish, everything else suffers.",
    protocol: ["Request a comprehensive thyroid panel, not just TSH", "Eat Brazil nuts daily for selenium (1-2 per day)", "Include seafood 2-3x per week for iodine", "Reduce chronic stress — cortisol suppresses thyroid function", "If symptoms persist, work with an integrative medicine physician"],
    sourceRef: "summit-thyroid-hormones",
  },

  {
    id: "fr-034",
    speakerId: "funk-roberts",
    topic: ["tricon-training", "muscle-building", "joint-friendly"],
    tags: ["tricon", "hypertrophy", "joint-friendly", "tension", "over-40"],
    content: "The Tricon Training Blueprint is a joint-friendly hypertrophy system specifically designed for men over 40. The core philosophy: stop thinking 'heavier is always better' and start thinking 'how can I create more muscular tension with less joint stress?' Each Tricon set includes three phases: Phase 1 — 3 explosive reps (controlled lowering, explosive lifting). Phase 2 — 3 isometric holds (hold in loaded position for 3-10 seconds). Phase 3 — 3 slow tension reps (slow eccentric, slow concentric, maximum tension). Total: 9 reps per Tricon set with maximum muscular recruitment and minimal joint strain.",
    quote: "Muscles do not know weight. They know tension. Create maximum tension — not maximum weight.",
    protocol: ["Phase 1: 3 explosive reps with controlled lowering", "Phase 2: 3 isometric holds at peak tension position", "Phase 3: 3 slow reps with maximum muscular tension", "Use 50-70% of your normal working weight", "Include 1-2 Tricon movements per session"],
    sourceRef: "tricon-blueprint",
  },

  {
    id: "fr-035",
    speakerId: "sam-spinelli",
    topic: ["resilience", "athleticism", "training-philosophy"],
    tags: ["resilience", "athleticism", "adaptable", "strength", "over-40"],
    content: "Dr. Sam Spinelli dismantles one of the most damaging narratives surrounding aging: that getting older automatically means becoming fragile, limited, and physically broken. The body is highly adaptable and capable of rebuilding strength, power, athleticism, and movement capacity well into later decades — if given the right stimulus. The middle path: intelligent loading, progressive adaptation, athletic preparation, and resilience training. A critical insight: avoidance and deconditioning are often more dangerous long-term than appropriately dosed movement and training. Stopping movement because something hurts usually makes things worse, not better.",
    quote: "The human body is built to last. Give it the right stimulus and it will reward you with decades more of strength and athleticism.",
    protocol: ["Maintain progressive loading — do not stop challenging the body", "Expose the body to athletic movements: sprints, jumps, throws", "Address pain with movement modification, not avoidance", "Build resilience: the ability to absorb load and recover", "Train for the next 40 years, not just the next 40 days"],
    sourceRef: "built-to-last",
  },

  {
    id: "fr-036",
    speakerId: "funk-roberts",
    topic: ["time-efficient", "training", "busy-schedule"],
    tags: ["time", "efficiency", "busy", "20-min", "HIIT", "over-40"],
    content: "Lack of time is the most common reason men over 40 give for not exercising — and it is also the most solvable. Research consistently shows that 20-30 minutes of well-designed training produces 80% of the results of longer sessions. The keys to time-efficient training: compound movements only (no isolation exercises), circuit or super-set format (minimize rest), metabolic conditioning to maximize calorie burn during and after the session (EPOC effect), and high density (more work in less time). A 20-minute Funk Roberts metabolic conditioning session can outperform a 60-minute traditional gym session for fat loss and hormonal response.",
    quote: "You do not need an hour. You need 20 minutes, a plan, and the willingness to work.",
    protocol: ["Build sessions around 3-4 compound movements only", "Use circuit format: one exercise into the next with minimal rest", "Include one metabolic finisher (tabata, AMRAP, or EMOM)", "Train 4-5x per week for 20-30 min rather than 2x for 60 min", "Track intensity — effort matters more than duration"],
    sourceRef: "no-time-training",
  },

  {
    id: "fr-037",
    speakerId: "funk-roberts",
    topic: ["core-training", "functional-core", "stability"],
    tags: ["core", "stability", "functional", "back-pain", "posture"],
    content: "Core training for men over 40 is not about visible abs — it is about spinal stability, injury prevention, and transferring power through every movement. The core includes the transverse abdominis, multifidus, pelvic floor, diaphragm, glutes, and hip flexors. Weak core equals compromised movement, back pain, reduced power output, and increased injury risk. The most effective core training for men over 40 focuses on anti-extension, anti-rotation, and anti-lateral flexion — stabilization over crunch-based movements. Key exercises: plank variations, Pallof press, dead bug, bird dog, and farmer carry.",
    quote: "A strong core is not six-pack abs. It is the ability to stabilize your spine under any load, in any position.",
    protocol: ["Prioritize anti-extension: plank, ab wheel rollout", "Anti-rotation: Pallof press, single-arm carries", "Anti-lateral flexion: suitcase carry, lateral plank", "Include bird dog and dead bug for spinal stabilization", "Train core in every session — it is structural, not cosmetic"],
    sourceRef: "core-training",
  },

  {
    id: "fr-038",
    speakerId: "funk-roberts",
    topic: ["training-myths", "fitness-education", "over-40"],
    tags: ["myths", "fitness", "education", "over-40", "truth"],
    content: "Five common fitness myths that keep men over 40 stuck: 1) 'High reps, light weight for fat loss' — FALSE. Compound movements with moderate-heavy weight build muscle, elevate metabolism, and burn more fat. 2) 'Cardio first thing in the morning for fat loss' — the metabolic difference is negligible. Train when you can be consistent. 3) 'You need to feel sore to know you worked out' — soreness is inflammation, not muscle growth. 4) 'Machines are safer than free weights for older men' — free weights build stability and functional strength that machines cannot replicate. 5) 'You cannot build muscle after 40' — false. Adaptation capacity exists at every age. The strategy just needs to change.",
    quote: "The biggest training myths are keeping men over 40 from the results they deserve. Know the truth.",
    sourceRef: "five-myths-training",
  },

  {
    id: "fr-039",
    speakerId: "funk-roberts",
    topic: ["training-system", "programming", "periodization"],
    tags: ["programming", "periodization", "system", "over-40", "progressive"],
    content: "The Over 40 Alpha Training System is built on intelligent periodization — planned variation in training variables to drive continuous adaptation while managing fatigue. The system cycles through three phases: Accumulation (higher volume, moderate intensity), Intensification (lower volume, higher intensity), and Realization (deload, consolidation). Each phase lasts 3-4 weeks. This prevents the plateaus and overtraining that derail men who train at the same intensity indefinitely. For men over 40, planned deloads are non-negotiable — they are when adaptation actually consolidates. Every 4-6 weeks, reduce volume by 40-50% and intensity by 10-15% for one week.",
    quote: "Intelligent periodization is the difference between continuous progress and permanent plateau.",
    protocol: ["Accumulation phase: 12-15 reps, higher volume, 3-4 week cycle", "Intensification phase: 5-8 reps, heavier weight, 3-4 week cycle", "Deload every 4-6 weeks: reduce volume 40-50%, intensity 10-15%", "Track your training to identify plateau patterns", "Adjust program every 12-16 weeks for continued adaptation"],
    sourceRef: "training-system-40",
  },

  {
    id: "fr-040",
    speakerId: "funk-roberts",
    topic: ["metabolic-conditioning", "METCON", "fat-loss"],
    tags: ["METCON", "metabolic", "conditioning", "fat-loss", "over-40"],
    content: "Alpha Plus METCON (metabolic conditioning) training is the most time-efficient approach for men over 40 who want simultaneous fat loss, cardiovascular improvement, and muscle preservation. The approach: compound movements, minimal rest, high work density, and post-workout EPOC (excess post-exercise oxygen consumption) that keeps metabolism elevated for hours after the session. Phase 3 builds on a foundation of strength and introduces higher intensity circuit work, timed intervals, and metabolic finishers. The result: rapid body composition improvement without excessive joint stress.",
    quote: "Metabolic conditioning is the fat-loss tool most men never fully utilize. It is more powerful than any diet alone.",
    protocol: ["Perform METCON sessions 3-4x per week", "Keep rest periods short: 20-40 seconds between exercises", "Use compound movements only in circuit format", "Add a 4-min metabolic finisher at the end of strength sessions", "Track sessions and push intensity progressively each week"],
    sourceRef: "alpha-plus-metcon",
  },

  {
    id: "fr-041",
    speakerId: "funk-roberts",
    topic: ["strength", "power", "advanced-training"],
    tags: ["strength", "power", "advanced", "alpha-plus", "progressive"],
    content: "Alpha Plus advanced programming shifts emphasis toward heavier strength work while maintaining metabolic conditioning. The programming focuses on joint-friendly heavy compound movements: trap bar deadlift, dumbbell floor press, landmine press, goblet squat, and cable row. These build significant strength without extreme spinal loading. Men over 40 need to build strength using exercises that match their mobility and joint health. Advanced methods include complex training (pairing a heavy compound lift with a plyometric exercise) and contrast training (alternating heavy and light sets to maximize neuromuscular activation).",
    quote: "Heavy training is not off limits at 40 — it just needs to be smarter than it was at 22.",
    protocol: ["Use trap bar deadlift instead of conventional for joint-friendly loading", "Dumbbell presses allow natural wrist and shoulder rotation", "Landmine press is a shoulder-safe pressing option", "Goblet squat keeps torso upright and reduces spinal compression", "Rest 90-180 seconds on primary strength movements"],
    sourceRef: "alpha-plus-strength",
  },

  {
    id: "fr-042",
    speakerId: "funk-roberts",
    topic: ["kettlebell-training", "functional", "conditioning"],
    tags: ["kettlebell", "functional", "conditioning", "swing", "over-40"],
    content: "Kettlebell training is one of the most effective tools for men over 40. The offset weight trains grip, core stability, and anti-rotation simultaneously. Hip-driven movements (swings, cleans, snatches) train the posterior chain powerfully without heavy spinal compression. The kettlebell swing is the single most powerful exercise for men over 40 — it simultaneously trains the posterior chain, elevates heart rate, burns fat, improves hip power, and requires no equipment beyond one bell. Mastering the hip hinge pattern first is essential before loading it.",
    quote: "The kettlebell swing is the best single exercise for men over 40. Learn it, master it, use it for life.",
    protocol: ["Master the hip hinge before loading: push hips back, not down", "Two-arm swing: 3-4 sets of 15-20 reps for strength-conditioning hybrid", "Power clean to press for full body conditioning", "Goblet squat for squat pattern teaching and core engagement", "Kettlebell complexes: 3-5 exercises back to back, 3-4 rounds"],
    sourceRef: "kettlebell-training",
  },

  {
    id: "fr-043",
    speakerId: "funk-roberts",
    topic: ["resistance-bands", "travel-training", "home-gym"],
    tags: ["bands", "resistance", "travel", "home", "no-equipment"],
    content: "Resistance bands are the most underrated training tool for men over 40. They eliminate the excuse of not having gym access. Quality resistance bands can replicate almost every gym movement: rows, presses, pull-aparts, squats, hinges, lateral work, and rotational exercises. The advantage for men over 40: bands provide variable resistance which aligns with the strength curve of most movements and reduces joint stress at vulnerable positions. A complete training system built around bands can maintain and even build significant muscle and strength for men who travel regularly or prefer home training.",
    quote: "No gym, no problem. Bands in a backpack means you have a complete training system anywhere in the world.",
    protocol: ["Full body band circuit: row, press, squat, hinge, curl, extension", "Use multiple bands for progressive resistance", "Band pull-aparts: 20 reps daily for shoulder health", "Monster walks for glute activation and hip stability", "Include bands in every session for warm-up activation work"],
    sourceRef: "resistance-bands",
  },

  {
    id: "fr-044",
    speakerId: "dean-pohlman",
    topic: ["mobility", "flexibility", "joint-health"],
    tags: ["yoga", "mobility", "man-flow", "flexibility", "pain-free"],
    content: "Dean Pohlman's Man Flow Yoga addresses why most men avoid mobility work and why that avoidance is destroying their health and training. Men skip mobility because traditional yoga feels passive and disconnected from their goals. Man Flow Yoga is different: strength-focused, goal-oriented, and designed to make men better athletes and movers. Ten to fifteen minutes of targeted mobility daily can eliminate lower back pain, reduce shoulder issues, improve squat depth, increase pulling strength, and allow men to continue training with high intensity. Mobility is the oil in the engine — without it, everything eventually seizes.",
    quote: "Mobility is not flexibility. It is control through a full range of motion. Men who have it move like athletes. Men who lack it eventually stop moving.",
    protocol: ["Morning mobility routine: 10-15 min targeting hips, shoulders, thoracic spine", "World's greatest stretch: 30 seconds per side, daily", "Hip flexor stretch: 60 seconds per side minimum", "Thoracic rotation: 10 reps each side", "Pigeon pose progression for deep hip opening"],
    sourceRef: "yoga-mobility-dean",
  },

  {
    id: "fr-045",
    speakerId: "funk-roberts",
    topic: ["mobility", "daily-practice", "movement-quality"],
    tags: ["mobility", "daily", "movement", "joints", "flexibility"],
    content: "Mobility First is the principle that movement quality should always precede loading. Before adding weight, adding speed, or adding complexity, the movement pattern must be clean. Men over 40 who skip the mobility first approach tend to reinforce dysfunction under load — making movement problems worse over time and setting up inevitable injury. Five mobility categories every man over 40 should train: hip flexion and extension, shoulder flexion and rotation, thoracic rotation, ankle dorsiflexion, and spinal mobility. Address all five daily for 10-15 minutes.",
    quote: "Move well before you move heavy. Every movement deficit will eventually express itself as pain or injury.",
    protocol: ["Hip 90/90 stretch: 60 sec each position", "Thoracic rotation on all fours: 10 each side", "Shoulder circles and cross-body stretch: 30 sec each", "Deep squat hold: 60 seconds daily", "Ankle circles and dorsiflexion stretch: 30 sec each side"],
    sourceRef: "mobility-first",
  },

  {
    id: "fr-046",
    speakerId: "sean-fagan",
    topic: ["martial-arts", "confidence", "mental-toughness"],
    tags: ["muay-thai", "martial-arts", "confidence", "conditioning", "discipline"],
    content: "Sean Fagan of The Muay Thai Guy makes the case that Muay Thai and combat sports may be one of the most powerful tools available to men over 40. It is not just about fitness — it is about confidence, discipline, composure under pressure, and reconnecting with the physical, competitive nature that modern life suppresses. Muay Thai training for men over 40 does not require fighting or sparring — heavy bag work and pad work provide tremendous conditioning, stress relief, and skill development benefits. Men who regularly face physical challenge and discomfort carry a different confidence into every area of their life.",
    quote: "Every man should know he can handle himself. Combat training builds that confidence from the inside out.",
    protocol: ["Heavy bag: 3-5 rounds of 2-3 min, 2x per week", "Shadow boxing for movement, coordination, and cardiovascular", "Pad work with a partner or coach for feedback and intensity", "Focus on technique over power initially", "Use Muay Thai rounds as metabolic conditioning finishers"],
    sourceRef: "muay-thai-over-40",
  },

  {
    id: "fr-047",
    speakerId: "funk-roberts",
    topic: ["daily-mobility", "morning-routine", "joint-care"],
    tags: ["daily", "morning", "routine", "joints", "mobility", "over-40"],
    content: "The daily mobility routine for men over 40 is the single highest-ROI investment of 10 minutes you can make each day. It should be done every morning before the day starts — not as part of training, but as maintenance for the machine. The routine targets the joints and muscle groups most commonly stiff in men: hip flexors, thoracic spine, shoulders, and ankles. Men who do 10 minutes of mobility every morning for 30 days typically report: elimination of morning stiffness, reduced back pain, improved training performance, and better posture throughout the day.",
    quote: "Ten minutes of mobility every morning compounds into decades of better movement and a pain-free body.",
    protocol: ["Morning mobility order: breathe, spine, hips, shoulders, ankles", "Hold each stretch 30-60 seconds minimum — do not rush", "Make it meditative — use it as a morning mindfulness practice", "Track consistency — 30 day daily challenge to build the habit", "Gradually add range as flexibility improves"],
    sourceRef: "daily-mobility",
  },

  {
    id: "fr-048",
    speakerId: "funk-roberts",
    topic: ["hip-mobility", "lateral-hip", "lower-body"],
    tags: ["hip", "lateral", "adductor", "mobility", "lower-body", "over-40"],
    content: "Lateral hip and adductor mobility is one of the most neglected areas in men's fitness — and one of the most important for men over 40. Tight adductors and lateral hip muscles contribute to knee pain, lower back pain, pelvic tilt, and reduced athletic performance. The Alpha Metabolic Lateral Hip Protocol: Side Leg Adductor Raises (15 reps each side), Dynamic Reverse Lying Frog Stretch (15 reps), Fire Hydrants (15 reps each side), Lying Dynamic Butterfly Stretch (15 reps), and sustained holds for fire hydrant hold, split stretch, and frog resistance stretch. Train this protocol 3 times per week.",
    quote: "Tight hips are not a sign of age — they are a sign of neglect. Address them directly and they respond remarkably.",
    protocol: ["Side leg adductor raises: 15 reps each side for activation", "Fire hydrants: 15 reps each side for glute med and hip flexibility", "Frog stretch: hold for 30-60 seconds to open inner groin", "Fire hydrant hold: 15 seconds each side for strength + mobility", "Frequency: 3x per week minimum"],
    sourceRef: "hip-stretch",
  },

  {
    id: "fr-049",
    speakerId: "funk-roberts",
    topic: ["ROM", "range-of-motion", "stretching"],
    tags: ["ROM", "range-of-motion", "stretching", "flexibility", "recovery"],
    content: "The Alpha ROM Stretching System is a progressive flexibility and recovery protocol designed to systematically improve full-body range of motion for men over 40. The system addresses six major areas: shoulder complex, thoracic spine, hip flexors, hamstrings, groin and adductors, and ankle and calf complex. Each area is targeted with both dynamic (movement-based) and static (held position) stretching. The system prioritizes the areas most commonly restricted in men over 40 due to desk work, heavy training, and the natural effects of aging on connective tissue.",
    quote: "Flexibility is earned, not inherited. Consistent stretching work systematically unlocks range of motion at any age.",
    protocol: ["Shoulder: cross-body stretch, doorframe chest stretch, behind-head tricep", "Thoracic: foam roller extension, thread-the-needle rotation", "Hip flexors: kneeling lunge stretch, couch stretch", "Hamstrings: RDL stretch, lying hamstring stretch", "Complete full routine 3x per week, target areas daily"],
    sourceRef: "alpha-rom-stretch",
  },

  {
    id: "fr-050",
    speakerId: "dr-mike-fortunato",
    topic: ["hormone-optimization", "testosterone", "health"],
    tags: ["hormones", "testosterone", "optimal", "health", "sovereignty"],
    content: "Dr. Mike Fortunato exposes one of the biggest problems in modern healthcare: confusing 'normal' with 'optimal.' Millions of men over 40 are struggling with fatigue, low libido, brain fog, stubborn belly fat, poor recovery, and loss of drive. They get blood work and are told everything is 'normal.' But normal reference ranges are not the standard of a thriving, vital man. The concept of sovereignty: when men regain their energy, clarity, and vitality, they begin asking deeper questions about purpose, passion, and fulfillment. This interview is about more than fixing hormones. It is about rebuilding the man.",
    quote: "Normal is not the same as optimal. A man can be within the normal range and still feel terrible. We should not accept that.",
    protocol: ["Get comprehensive bloodwork: total T, free T, SHBG, estradiol, DHEA-S, thyroid panel", "Know the difference: normal range vs. optimal range", "Address lifestyle BEFORE considering any hormonal intervention", "Work with a physician who understands optimal, not just normal", "Test at the same time of day (morning) for consistent results"],
    sourceRef: "hormone-optimization",
  },

  {
    id: "fr-051",
    speakerId: "dr-mike-fortunato",
    topic: ["testosterone", "symptoms", "assessment"],
    tags: ["testosterone", "symptoms", "low-T", "diagnosis", "men-over-40"],
    content: "The symptoms of suboptimal testosterone in men over 40 are specific and recognizable: persistent fatigue despite adequate sleep, reduced motivation and drive, increased belly fat especially around the midsection, decreased muscle mass despite training, low libido, erectile dysfunction, brain fog, depression or mood dysregulation, poor recovery from training, and loss of competitive drive. Many men normalize them as just getting older when they are actually signs of hormonal dysfunction that can be addressed. The first step is recognizing the pattern and taking action — not accepting decline as inevitable.",
    quote: "Feeling terrible is not normal aging. Declining testosterone is addressable — but only if you recognize the symptoms and act.",
    protocol: ["Track your symptoms: energy, libido, mood, body composition, drive", "Correlate symptoms with bloodwork for complete picture", "Do not wait for symptoms to be severe before investigating", "Lifestyle optimization first: sleep, training, stress, nutrition", "Retest after 90 days of lifestyle changes before considering further intervention"],
    sourceRef: "hormone-symptoms",
  },

  {
    id: "fr-052",
    speakerId: "logan-christopher",
    topic: ["natural-testosterone", "pine-pollen", "phytoandrogens"],
    tags: ["pine-pollen", "natural", "testosterone", "phytoandrogens", "herbal"],
    content: "Logan Christopher introduces pine pollen as an ancient superfood with potential effects on testosterone, free testosterone, libido, recovery, and prostate health. Pine pollen contains phytoandrogens — plant compounds that may interact with the body's androgen systems. The research landscape shows promising results for testosterone-related symptom improvement. The conversation also explores the broader impact of environmental endocrine disruptors — xenoestrogens from plastics, pesticides, and chemicals that are suppressing testosterone across the male population.",
    quote: "We are swimming in a sea of endocrine disruptors. Protecting and supporting testosterone naturally is not optional — it is essential.",
    protocol: ["Pine pollen tincture: phytoandrogens are absorbed sublingually — hold under tongue", "Eliminate plastic food and water containers — use glass and stainless steel", "Filter tap water to reduce xenoestrogens and chemicals", "Eat organic where possible to reduce pesticide load", "Support liver detox: cruciferous vegetables help metabolize excess estrogen"],
    sourceRef: "pine-pollen",
  },

  {
    id: "fr-053",
    speakerId: "mike-ranfone",
    topic: ["nutrition", "muscle", "metabolism"],
    tags: ["nutrition", "muscle", "metabolism", "strategy", "over-40"],
    content: "Mike Ranfone and Dr. Marko Lujic break down the three pillars of men's health after 40: nutrition, muscle, and metabolism. Most men over 40 do not have a nutrition problem — they have a strategy problem. They have tried diets. They have cut carbs. They have fasted. And nothing sticks because they are using approaches designed for younger men. The three pillars work together: optimal nutrition feeds muscle building, muscle building drives metabolic rate, and a healthy metabolism makes nutrition adherence easier. Data-driven approaches — tracking metrics, getting bloodwork, measuring progress — outperform guesswork.",
    quote: "Most men do not have a nutrition problem. They have a strategy problem. The system needs to change, not just the diet.",
    protocol: ["Pillar 1: Nutrition — prioritize protein, real food, sustainability", "Pillar 2: Muscle — resistance train consistently to drive metabolic rate", "Pillar 3: Metabolism — sleep, stress, and hormonal optimization", "Use data to drive decisions: track, test, adjust", "Address all three pillars simultaneously — neglecting one undermines the others"],
    sourceRef: "three-pillars-health",
  },

  {
    id: "fr-054",
    speakerId: "funk-roberts",
    topic: ["natural-testosterone", "lifestyle", "optimization"],
    tags: ["testosterone", "natural", "lifestyle", "optimization", "no-drugs"],
    content: "The natural testosterone optimization protocol for men over 40 is built on six pillars that compound when applied consistently. Pillar 1: Resistance training — heavy compound lifts 3-4x per week stimulate significant testosterone production. Pillar 2: Sprint and high-intensity work — explosive exercise acutely elevates testosterone and growth hormone. Pillar 3: Sleep 7-9 hours — 90% of daily testosterone is produced during sleep. Pillar 4: Stress management — chronically elevated cortisol directly suppresses testosterone production. Pillar 5: Nutrition — adequate healthy fats, zinc, vitamin D, and magnesium are raw materials for testosterone synthesis. Pillar 6: Eliminating suppressors — alcohol, endocrine disruptors, and chronic caloric restriction all suppress testosterone.",
    quote: "Your lifestyle is either feeding or starving your testosterone. Every daily decision has a hormonal consequence.",
    protocol: ["Lift heavy 3-4x per week: squats, deadlifts, presses, rows", "Sprint or HIIT 1-2x per week for acute T and GH spike", "Sleep 7-9 hours every night — non-negotiable", "Manage cortisol: breathwork, recovery, and stress reduction", "Eat adequate healthy fats: eggs, avocado, olive oil, fatty fish"],
    sourceRef: "natural-testosterone-protocol",
  },

  {
    id: "fr-055",
    speakerId: "funk-roberts",
    topic: ["warrior-mindset", "discipline", "transformation"],
    tags: ["warrior", "mindset", "discipline", "30-day", "transformation"],
    content: "The Warrior Mindset Reset is a 30-day implementation plan designed to break self-sabotaging habits, build discipline and mental toughness, and start operating like a man who fights back — no matter what. Phase 1 (Days 1-7): The Wake-Up Call. Face reality without filters — identify habits destroying your health, where you are lying to yourself, and what you are avoiding. Identify your emotional Why — who needs you healthy. Cut one destructive habit immediately. Phase 2 (Days 8-21): Rebuild the Foundation. Create daily structure: movement, whole food meals, hydration, sunlight. Phase 3 (Days 22-30): Mental Toughness and Identity Shift. You are either drifting or you are fighting. Warriors do not wait for motivation — they act.",
    quote: "You are either drifting or you are fighting. There is no middle ground. Warriors act.",
    protocol: ["Day 1: Write honestly — habits killing you, where you lie to yourself, what you avoid", "Day 2: Identify your Why emotionally — who needs you strong", "Day 3: Cut ONE destructive habit immediately — do not negotiate", "Days 8-21: Build daily structure with movement, food, water, sunlight", "Days 22-30: Identity shift — become the man you need to be"],
    sourceRef: "warrior-mindset",
  },

  {
    id: "fr-056",
    speakerId: "funk-roberts",
    topic: ["self-awareness", "growth-mindset", "personal-development"],
    tags: ["self-awareness", "growth", "mindset", "development", "men"],
    content: "The Alpha Mindset Academy builds men from the inside out through structured modules addressing the full spectrum of mental and emotional development. Module 1 addresses Self-Understanding: self-awareness, SMART goal setting, emotional intelligence, positive psychology, mindfulness, and growth mindset. The foundation insight: most men who fail in their health pursuits do not fail for lack of knowledge or even motivation — they fail because of unresolved internal patterns, limiting beliefs, and emotional reactivity that override their intentions. Fixing the mindset is not secondary to fixing the body — it is the prerequisite.",
    quote: "You cannot outwork a broken mindset. Fix the foundation first — everything else is easier from there.",
    protocol: ["Self-assessment: identify your top 3 strengths and 3 areas for growth", "Set SMART health goals: Specific, Measurable, Achievable, Relevant, Time-bound", "Practice emotional regulation: pause before reacting, especially under stress", "Gratitude journaling: 3 things daily, builds positive neural pathways", "Growth mindset: reframe 'I failed' as 'I learned'"],
    sourceRef: "alpha-mindset-academy",
  },

  {
    id: "fr-057",
    speakerId: "funk-roberts",
    topic: ["life-purpose", "meaning", "direction"],
    tags: ["purpose", "meaning", "life", "alpha", "coaching"],
    content: "Finding life purpose is not a luxury for men over 40 — it is a health imperative. Research consistently shows that men with a strong sense of purpose live longer, recover from illness faster, have lower rates of cardiovascular disease, and report dramatically higher life satisfaction. Purpose is not found — it is constructed through the intersection of what you are good at, what the world needs, what you love, and what you can be paid for. For men in midlife, purpose often expands beyond personal achievement to impact, contribution, and legacy.",
    quote: "Purpose is not found. It is built. And without it, health optimization is just optimizing for an empty life.",
    protocol: ["Define your values: what matters most to you at this stage of life", "Identify your unique contribution: what do you do that few others can", "Connect purpose to health: frame training as preparation for your mission", "Build legacy: what do you want to leave behind for the next generation", "Review and refine purpose annually — it evolves as you do"],
    sourceRef: "life-purpose-coaching",
  },

  {
    id: "fr-058",
    speakerId: "funk-roberts",
    topic: ["gratitude", "mental-health", "positive-psychology"],
    tags: ["gratitude", "mindfulness", "positive", "mental-health", "happiness"],
    content: "Gratitude practice is one of the most evidence-supported mental health interventions available. Regular gratitude practice reduces cortisol, improves sleep quality, increases emotional resilience, reduces symptoms of depression and anxiety, and strengthens social bonds. For men over 40 who are conditioned to focus on problems and solutions, gratitude practice rewires the brain toward recognition of what is working — which directly impacts energy, motivation, and wellbeing. The practice does not need to be long or elaborate: three specific things you are grateful for each morning, written by hand, creates measurable changes in brain chemistry and outlook within 21 days of consistency.",
    quote: "Gratitude is not soft. It is neurological reprogramming that reduces cortisol and rewires your brain toward strength.",
    protocol: ["Write 3 specific gratitudes each morning — handwritten is more effective", "Be specific: not 'my family' but 'my son's laugh this morning'", "Include gratitude for your health and body", "Share gratitude with others — it strengthens relationships", "30-day gratitude challenge to build the neural pathway"],
    sourceRef: "alpha-mindset-gratitude",
  },

  {
    id: "fr-059",
    speakerId: "funk-roberts",
    topic: ["growth-mindset", "resilience", "learning"],
    tags: ["growth", "fixed", "mindset", "resilience", "learning", "failure"],
    content: "The growth mindset — the belief that abilities and intelligence can be developed through dedication and hard work — is the psychological foundation of all lasting transformation. Men with fixed mindsets create self-fulfilling prophecies that guarantee mediocrity. Men with growth mindsets see challenges as opportunities, setbacks as feedback, and effort as the path to mastery. For men over 40 in health transformation, the growth mindset shows up as: trying a new exercise program despite uncertainty, returning to training after a setback, seeking feedback from coaches, and reframing 'I failed' as 'I learned what does not work for me.'",
    quote: "Fixed mindset says 'I cannot.' Growth mindset asks 'how do I?' That one shift changes everything.",
    protocol: ["Identify your fixed mindset triggers: where do you say 'I can't'?", "Replace 'I can't' with 'I can't yet — what do I need to learn?'", "Celebrate effort and progress, not just outcome", "Seek feedback actively — it accelerates growth", "Reframe every setback: what did this teach me?"],
    sourceRef: "growth-mindset",
  },

  {
    id: "fr-060",
    speakerId: "funk-roberts",
    topic: ["mental-mastery", "discipline", "focus"],
    tags: ["mental", "mastery", "discipline", "focus", "performance"],
    content: "Mental mastery is the ability to direct attention, manage emotional states, and maintain consistent action toward goals regardless of external circumstances or internal resistance. The core mental mastery skills: attentional control (the ability to focus on what matters and ignore what doesn't), emotional regulation (the ability to feel negative emotions without being controlled by them), and commitment consistency (the ability to honor promises made to yourself even when motivation is absent). These skills are trained like physical skills — through repeated, deliberate practice.",
    quote: "Mental mastery is not about eliminating doubt or fear. It is about acting despite them. That is the real definition of discipline.",
    protocol: ["Attentional training: 10 min focused work without interruption daily", "Emotional regulation: pause, breathe, assess before reacting", "Keep promises to yourself: start small but keep every commitment", "Visualization: 5 min daily mentally rehearsing your best performance", "Cold exposure: 90-second cold shower trains tolerance for discomfort"],
    sourceRef: "mental-mastery",
  },

  {
    id: "fr-061",
    speakerId: "funk-roberts",
    topic: ["identity", "transformation", "self-concept"],
    tags: ["identity", "transformation", "self-concept", "over-40", "who-you-are"],
    content: "Identity is the most powerful driver of behavior — more powerful than willpower, goals, or accountability. Men act in accordance with who they believe they are. If a man believes he is 'the kind of person who struggles with his weight,' every attempt at change is fighting against his own self-concept. The identity transformation comes first: deciding who you are before the evidence fully supports it. 'I am a man who trains four days a week.' 'I am a man who prioritizes sleep.' Once the identity is established, behaviors that align with it feel natural. Behaviors that contradict it feel wrong. This is how transformation becomes permanent rather than temporary.",
    quote: "Act as the man you want to become — before you fully are that man. Identity leads behavior.",
    protocol: ["Write your new identity statement in present tense: 'I am...'", "Ask before every decision: 'What would a healthy man do here?'", "Find evidence of your new identity daily — even small actions count", "Surround yourself with men who hold the identity you want", "Be patient — identity change takes months, not weeks"],
    sourceRef: "identity-transformation",
  },

  {
    id: "fr-062",
    speakerId: "funk-roberts",
    topic: ["radical-ownership", "accountability", "responsibility"],
    tags: ["radical-ownership", "REAL", "accountability", "responsibility", "alpha"],
    content: "Pillar 1 of the REAL Alpha Men system: Radical Ownership. The only reason any man ends up overweight, tired, inconsistent, low testosterone, stressed out, or disconnected is because somewhere along the line, he stopped owning his situation. Your 'why' will not save you on a Tuesday night when you are staring at chips in the pantry. What sustains action is Ownership — not a feeling, but a decision. Radical Ownership means: no excuses about time, money, or life circumstances. You own your health outcomes completely. The moment you blame something outside yourself, you surrender the power to change.",
    quote: "Stop waiting for the right time, the right circumstances, the right motivation. Own it now. That is the only move that works.",
    protocol: ["Write down every excuse you make for your health — own each one", "Replace 'I don't have time' with 'This is not my current priority'", "Take full responsibility for your body, energy, and health today", "Stop waiting for motivation — take action and motivation follows", "Daily commitment: one decision today that the healthy version of you would make"],
    sourceRef: "pillar1-radical-ownership",
  },

  {
    id: "fr-063",
    speakerId: "funk-roberts",
    topic: ["evolution", "growth", "continuous-improvement"],
    tags: ["evolution", "REAL", "growth", "improvement", "continuous"],
    content: "Pillar 2 of the REAL Alpha Men system: Evolution. Real Alpha Men are never finished. They are always in the process of becoming a better version of themselves. Evolution requires embracing discomfort — the body and mind only grow when pushed beyond current capacity. Men who stay comfortable stay stuck. The evolutionary mindset applied to health: each month you should be able to point to something that is measurably better than it was. Stronger lift, better bloodwork, more consistent sleep, reduced body fat, improved mobility. If you cannot point to evidence of evolution, you are maintaining at best — or declining.",
    quote: "You are never the finished product. Every day is an opportunity to become more of who you are capable of being.",
    protocol: ["Monthly evolution review: what is better this month versus last month?", "Push past comfort zones in every training session — progressive overload", "Read, learn, apply: invest 30 min daily in personal development", "Seek feedback from coaches and mentors — external perspective accelerates evolution", "Commit to being better at 50 than at 40, and better at 60 than at 50"],
    sourceRef: "pillar2-evolution",
  },

  {
    id: "fr-064",
    speakerId: "funk-roberts",
    topic: ["alignment", "discipline", "structure"],
    tags: ["alignment", "REAL", "discipline", "structure", "freedom"],
    content: "Pillar 3 of the REAL Alpha Men system: Alignment. Most men do not fail because the program does not work — they fail because they refuse to align with the program. Freedom does not come from flexibility — freedom comes from structure. When your daily actions are aligned with your goals, results are inevitable. When there is misalignment — wanting health but choosing destructive habits — you create internal conflict that drains energy and produces zero progress. Alignment means your identity, your decisions, your daily actions, and your goals are all pointing in the same direction.",
    quote: "Freedom comes through structure, not despite it. Aligned men move fast. Misaligned men spin their wheels.",
    protocol: ["Audit alignment: list your health goals then list your daily actions", "Identify the gaps: where do your actions contradict your goals?", "Remove one misalignment per week — small consistent corrections", "Morning alignment ritual: review your goals before the day starts", "Structure creates freedom — commit to the system fully for 90 days"],
    sourceRef: "pillar3-alignment",
  },

  {
    id: "fr-065",
    speakerId: "funk-roberts",
    topic: ["leadership", "masculine-leadership", "example"],
    tags: ["leadership", "REAL", "example", "family", "masculine"],
    content: "Pillar 4 of the REAL Alpha Men system: Leadership. Real men lead — not by demanding respect but by earning it through example. The first domain of masculine leadership is self-leadership: the ability to manage yourself consistently before attempting to lead others. Family leadership through health: when a father transforms his body and energy, the ripple effect on his family is enormous. Children see that health is achievable and important. Spouses see commitment and capability. A healthy father is one of the greatest gifts a man can give his family.",
    quote: "You lead by becoming. The healthiest man in the room does not need to say a word — his presence speaks.",
    protocol: ["Lead self first: manage your health, energy, and disciplines before leading others", "Be transparent about your health journey with your family", "Include family in health activities: cook together, train together, hike together", "Model the behaviors you want your children to adopt", "Lead your social circle toward health — your transformation gives others permission"],
    sourceRef: "pillar4-leadership",
  },

  {
    id: "fr-066",
    speakerId: "funk-roberts",
    topic: ["brotherhood", "community", "connection"],
    tags: ["brotherhood", "REAL", "community", "men", "support"],
    content: "Pillar 5 of the REAL Alpha Men system: Brotherhood. Men are not designed to go it alone. The ancient model of male community — training together, holding each other accountable, being honest with each other — is what sustained men for millennia. Modern men have lost this. Isolation and loneliness are epidemic among men over 40. Brotherhood in the Over 40 Alpha context means: being part of a community of men who hold each other to high standards, celebrate each other's victories, support each other through challenges, and refuse to let each other settle for less than their potential.",
    quote: "A man with a strong brotherhood is unstoppable. A man alone is always fighting on two fronts.",
    protocol: ["Join the Over 40 Alpha Brotherhood community", "Find 1-2 accountability partners you check in with weekly", "Be honest with your brothers about your struggles — vulnerability is strength", "Celebrate others' victories genuinely", "Show up consistently — brotherhood is built through reliability"],
    sourceRef: "pillar5-brotherhood",
  },

  {
    id: "fr-067",
    speakerId: "funk-roberts",
    topic: ["resilience", "adversity", "mental-toughness"],
    tags: ["resilience", "adversity", "grit", "bounce-back", "mental-toughness"],
    content: "Pillar 6 of the REAL Alpha Men system: Resilience. Life for men over 40 is full of setbacks, challenges, injuries, stressors, and unexpected obstacles. Resilience is not the absence of these challenges. Resilience is the ability to be knocked down and get back up — consistently, without excuses, with lessons learned. Health setbacks are inevitable: missed training weeks, periods of poor eating, sleep deprivation from life demands, injuries, and plateaus. The resilient man does not spiral into shame or abandon his efforts. He assesses, adjusts, and returns.",
    quote: "Every man gets knocked down. The resilient man asks 'what do I do next?' — not 'why did this happen to me?'",
    protocol: ["When you miss training: return the next day, no self-punishment", "When you eat poorly: next meal is clean — no spiral, no writing off the day", "Injury protocol: see a professional, train what you can, address what hurts", "Failure debrief: what happened, what did I learn, what do I do differently", "Build resilience proactively: seek discomfort regularly so you are prepared"],
    sourceRef: "pillar6-resilience",
  },

  {
    id: "fr-068",
    speakerId: "funk-roberts",
    topic: ["habits-systems", "consistency", "lifestyle"],
    tags: ["habits", "systems", "REAL", "consistency", "lifestyle"],
    content: "Pillar 7 of the REAL Alpha Men system: Systems and Habits. Warriors do not rely on motivation — they build systems that produce consistent action regardless of how they feel. The health system for men over 40 includes: a fixed training schedule (same times, same days), meal prep routine (Sunday batch cooking), sleep system (consistent bedtime ritual), supplement routine (same time, same place daily), and weekly review (assess and adjust). When these systems are in place, willpower becomes irrelevant. The right behavior happens because the system makes it happen.",
    quote: "Motivation is a visitor. Systems are permanent residents. Build the system and stop waiting for the visitor.",
    protocol: ["Training: schedule 4 fixed sessions per week like non-negotiable meetings", "Nutrition: prep 4-5 meals on Sunday, default to prepped food during the week", "Sleep: same bedtime 7 days a week, bedroom optimized for sleep", "Supplements: set out the next day's supplements the night before", "Weekly review: 15 min to assess wins, struggles, and next week's priorities"],
    sourceRef: "pillar7-habits-systems",
  },

  {
    id: "fr-069",
    speakerId: "funk-roberts",
    topic: ["legacy", "purpose", "impact"],
    tags: ["legacy", "REAL", "purpose", "impact", "second-half"],
    content: "Pillar 8 of the REAL Alpha Men system: Legacy. The final pillar asks the most important question a man over 40 can ask: What are you building this health for? Legacy is not about fame or monuments. It is about the impact you have on the people directly in your life. A healthy father who trains consistently is teaching his children that health is achievable and worth fighting for. A healthy grandfather who plays with his grandchildren is demonstrating that vitality does not have to end at 60. Your health is not just about you — it is the foundation of your capacity to contribute, love, lead, and serve.",
    quote: "Your health is not the destination. Your health is the vehicle that takes you to everything that matters.",
    protocol: ["Define your legacy statement: what do you want to be remembered for?", "Connect daily health actions to legacy impact", "Invest in relationships that will define your legacy", "Mentor younger men — your experience is a gift they need", "Think 20 years forward: what does the healthiest version of you at 60 look like?"],
    sourceRef: "pillar8-legacy",
  },

  {
    id: "fr-070",
    speakerId: "funk-roberts",
    topic: ["nutrition", "testosterone-boosting", "eating-lifestyle"],
    tags: ["nutrition", "testosterone", "meta-test-boost", "eating", "over-40"],
    content: "The Meta Test Boost Nutrition System is not a diet — it is a testosterone-boosting eating lifestyle designed for men over 40. The core principle: you do not count calories. You build balanced plates using a structured approach that automatically provides the right macronutrients. The balanced plate formula: 40% protein (palm-sized portion of lean protein), 30% complex carbohydrates (fist-sized portion from whole food sources), 20% healthy fats (thumb-sized portion), and as many vegetables as you want. Pick your go-to foods for the week, meal prep, and default to your prepped options. The simplicity is the system.",
    quote: "The Meta Test Boost system is not a diet. It is a testosterone-feeding eating lifestyle. Eat to perform, not to starve.",
    protocol: ["Balanced plate: 40% protein, 30% carbs, 20% fats, unlimited vegetables", "Pick 4-5 go-to meals you enjoy and prep them Sunday", "Eat every 3-4 hours to maintain stable blood sugar and protein synthesis", "Protein sources: chicken, turkey, beef, eggs, fish, Greek yogurt", "Complex carbs: sweet potato, rice, oats, quinoa, fruit"],
    sourceRef: "nutrition-men-40-mtb",
  },

  {
    id: "fr-071",
    speakerId: "funk-roberts",
    topic: ["protein", "protein-sources", "muscle-preservation"],
    tags: ["protein", "muscle", "sources", "over-40", "anabolic"],
    content: "Protein is the most critical macronutrient for men over 40 — and most men are chronically undereating it. The minimum target for muscle preservation and building: 1g per pound of bodyweight daily. Optimal for active men: 1.2-1.5g per pound. Top protein sources: chicken breast (31g per 100g), ground turkey (27g per 100g), salmon (25g per 100g — also provides omega-3s), eggs (6g each, complete amino acid profile), Greek yogurt (17g per 170g — also provides probiotics), cottage cheese (25g per cup — slow-digesting casein, excellent before bed). Protein timing: distribute evenly across 4-5 meals. Never go more than 5 hours without protein during waking hours.",
    quote: "Protein is not just for bodybuilders. Every man over 40 who wants to maintain muscle, strength, and metabolism needs to prioritize protein relentlessly.",
    protocol: ["Target 1-1.5g protein per pound of bodyweight daily", "Distribute across 4-5 meals — never skip protein", "Post-training: 30-50g quality protein within 2 hours", "Before bed: 20-30g slow-digesting casein (cottage cheese, Greek yogurt)", "Add protein powder to fill gaps — whey for fast absorption, casein for slow"],
    sourceRef: "protein-protocol",
  },

  {
    id: "fr-072",
    speakerId: "funk-roberts",
    topic: ["nutrition-rules", "eating-guidelines", "coaching"],
    tags: ["nutrition", "rules", "guidelines", "coaching", "over-40"],
    content: "The Over 40 Alpha nutrition system is built on non-negotiable rules. Rule 1: Never skip breakfast — protein within 60 minutes of waking stabilizes blood sugar and prevents muscle breakdown. Rule 2: Water first — drink 500ml of water upon waking before anything else. Rule 3: Eliminate liquid calories — no juice, soda, or alcohol. Rule 4: 80/20 rule — eat clean 80% of the time and allow flexibility 20%. Rule 5: Never go to a social event hungry — eat beforehand so temptation is manageable. Rule 6: Food quality over calorie counting — focus on nutrient density. Rule 7: Read labels — if you cannot pronounce the ingredients, do not eat it.",
    quote: "Nutrition rules are not restrictions. They are the structure that makes transformation possible and sustainable.",
    protocol: ["Drink 500ml water immediately upon waking", "Eat protein within 60 min of waking", "Eliminate all liquid calories: juice, soda, most alcohol", "80/20 rule: clean 80% of the time, flexible 20%", "Never arrive at social events or restaurants hungry"],
    sourceRef: "nutrition-rules",
  },

  {
    id: "fr-073",
    speakerId: "funk-roberts",
    topic: ["meal-plan", "30-day", "nutrition"],
    tags: ["meal-plan", "30-day", "MTB", "nutrition", "testosterone"],
    content: "The Meta Test Boost 30-Day Meal Plan provides complete structure for the first month of testosterone-boosting nutrition. Week 1 focuses on elimination: removing processed foods, alcohol, and sugar while establishing the balanced plate habit. Week 2 adds meal prep: cooking 4-5 meals on Sunday to eliminate weekday decision fatigue. Week 3 refines: adjusting portion sizes based on energy, hunger, and training performance. Week 4 optimizes: fine-tuning the system for long-term sustainability. Testosterone-boosting foods prioritized: eggs, fatty fish, lean red meat, cruciferous vegetables, nuts and seeds, avocados, and olive oil.",
    quote: "A meal plan is just a plan. The transformation happens when you follow it consistently for 30 days and build the habit.",
    protocol: ["Week 1: elimination — remove processed food, sugar, alcohol", "Week 2: prep — cook Sunday for the full week ahead", "Week 3: adjust — calibrate portions to energy and performance", "Week 4: optimize — refine for long-term adherence", "Testosterone-boosting foods daily: eggs, leafy greens, fatty fish, olive oil"],
    sourceRef: "mtb-meal-plan",
  },

  {
    id: "fr-074",
    speakerId: "funk-roberts",
    topic: ["fat-loss", "abdominal", "cutting-body-fat"],
    tags: ["abs", "fat-loss", "body-fat", "cutting", "lean"],
    content: "Visible abs at 40+ is absolutely achievable — but it requires addressing the specific hormonal and metabolic factors that make fat loss harder after 40. The key insight: abs are not made in the gym, they are revealed through nutrition. The fat-loss approach for men over 40: a modest caloric deficit (300-500 calories below maintenance), high protein to preserve muscle (1.2g+ per pound), resistance training to maintain metabolic rate, and stress management to reduce cortisol-driven belly fat storage.",
    quote: "The abs are already there. Your job is to create the conditions to reveal them — and those conditions are mostly nutritional.",
    protocol: ["Caloric deficit: 300-500 calories below maintenance maximum", "High protein: 1.2-1.5g per pound to preserve muscle while cutting", "Resistance train 4x per week to maintain metabolic rate", "Reduce cortisol: sleep, stress management, adequate recovery", "Track body composition monthly — scale weight is misleading"],
    sourceRef: "eat-for-abs",
  },

  {
    id: "fr-075",
    speakerId: "funk-roberts",
    topic: ["blood-sugar", "diabetes-prevention", "insulin"],
    tags: ["blood-sugar", "diabetes", "insulin", "prevention", "metabolic"],
    content: "Men over 40 are at significant risk for insulin resistance and Type 2 diabetes — often without knowing it. Prevention is dramatically easier than reversal. The lifestyle protocol for insulin sensitivity: resistance training 3-4x per week (muscle is the primary site of glucose disposal), reducing refined carbohydrates and sugar, walking after every meal (10-15 min post-meal walk reduces blood glucose spike by 30%), losing visceral belly fat, and monitoring fasting glucose and HbA1c annually.",
    quote: "Type 2 diabetes is largely preventable and often reversible with the right lifestyle interventions. Do not wait for the diagnosis.",
    protocol: ["Resistance train 3-4x per week — muscle is your primary glucose disposal site", "Walk 10-15 min after meals to reduce post-meal blood glucose spike", "Reduce refined carbs and sugar", "Monitor fasting glucose and HbA1c annually", "Lose visceral belly fat — it directly drives insulin resistance"],
    sourceRef: "diabetes-nutrition",
  },

  {
    id: "fr-076",
    speakerId: "funk-roberts",
    topic: ["hydration", "water", "performance"],
    tags: ["hydration", "water", "performance", "testosterone", "recovery"],
    content: "Hydration is one of the most overlooked performance and recovery variables for men over 40. Even 2% dehydration significantly impairs strength output, cognitive function, and recovery. The testosterone connection: adequate hydration is required for hormonal transport — testosterone and growth hormone circulate in the blood, which is 83% water. The daily hydration target: minimum 3-4 liters for active men over 40, more during intense training days or hot weather. Key strategy: drink 500ml immediately upon waking, then work toward consistent hydration throughout the day.",
    quote: "Your blood is 83% water. Your hormones travel in that blood. Dehydration is not just thirst — it is a hormonal emergency.",
    protocol: ["Wake-up: 500ml water immediately, before coffee", "Minimum 3-4 liters daily for active men", "Add electrolytes if training more than 60 min or sweating heavily", "Monitor: urine should be pale yellow throughout the day", "Increase intake in hot weather and on training days"],
    sourceRef: "hydration",
  },

  {
    id: "fr-077",
    speakerId: "funk-roberts",
    topic: ["stretching", "flexibility", "post-workout"],
    tags: ["stretching", "flexibility", "post-workout", "recovery", "cooldown"],
    content: "The Alpha Stretching System addresses the most common flexibility limitations in men over 40. The system distinguishes between three types: Dynamic stretching (pre-workout — controlled movement through range of motion), Active static stretching (immediate post-workout — hold 20-30 seconds while muscles are warm), and Passive static stretching (evening or rest days — deeper holds of 45-60 seconds for structural flexibility improvement). The six essential stretch categories for men over 40: chest and anterior shoulder, hip flexors, hamstrings, thoracic extension, glutes and piriformis, and calves and plantar fascia.",
    quote: "Stretching is not punishment after a workout. It is the recovery investment that keeps you training for the next decade.",
    protocol: ["Post-workout static holds: 20-30 seconds, while muscles are warm", "Evening passive stretching: 45-60 seconds for structural gains", "Priority areas: chest, hip flexors, hamstrings, thoracic, glutes, calves", "Foam roll before stretching to improve tissue quality", "Daily minimum: hip flexors and chest/shoulders — the most chronically tight areas"],
    sourceRef: "alpha-stretch",
  },

  {
    id: "fr-078",
    speakerId: "funk-roberts",
    topic: ["sleep", "testosterone", "recovery"],
    tags: ["sleep", "testosterone", "recovery", "deep-sleep", "over-40"],
    content: "The Alpha Sleep Philosophy establishes sleep as the #1 recovery weapon for men over 40. Non-negotiable truth: 90% of daily testosterone is produced during deep sleep and REM sleep within the first 3-5 sleep cycles. When sleep is broken, testosterone is broken. You cannot out-train, out-eat, or out-supplement poor sleep. The approach: sleep is a relationship, not a transaction. Great sleep is the natural outcome of how you structure your day — your light exposure, movement, nutrition timing, stress management, and nervous system regulation. Consistency is more important than perfection.",
    quote: "90% of your testosterone is produced during sleep. Protect your sleep like it is your most important training session — because it is.",
    protocol: ["Consistent sleep/wake time: same times every day including weekends", "Sleep goal: 7-9 hours, with 7.5 as the minimum for testosterone optimization", "Bedroom: cool (65-68F), dark (blackout curtains), quiet (white noise if needed)", "No screens 60 min before bed — blue light suppresses melatonin", "Get morning sunlight within 30 min of waking to anchor circadian rhythm"],
    sourceRef: "sleep-philosophy",
  },

  {
    id: "fr-079",
    speakerId: "funk-roberts",
    topic: ["sleep-recovery", "bad-night", "bounce-back"],
    tags: ["sleep", "bad-night", "recovery", "cortisol", "fat-burning"],
    content: "After a bad night of sleep, men over 40 face compounded challenges: elevated cortisol, slowed metabolism, increased sugar cravings, lower testosterone, and disrupted fat-burning rhythm. The key: one bad night will not ruin progress — unless you let it spiral. The 6-Step Sleep Recovery Protocol: Step 1 — Wake at your normal time, even on 4-5 hours. Step 2 — Get morning sunlight immediately to reset the clock. Step 3 — Hydrate and eat protein at your normal breakfast time. Step 4 — Do a 20-minute training session if possible. Step 5 — Avoid caffeine after 12pm. Step 6 — Go to bed 30 min earlier that night, same routine.",
    quote: "One bad night is just a bad night. Spiraling into a bad week is a choice. The protocol brings you back fast.",
    protocol: ["Wake at normal time even after poor sleep — do not sleep in", "Get morning sunlight immediately to reset circadian clock", "Eat protein breakfast at normal time", "Light exercise: even 20-min walk helps cortisol clearance", "Bed 30 min early that night — same routine, no screens"],
    sourceRef: "sleep-fix-bad-night",
  },

  {
    id: "fr-080",
    speakerId: "funk-roberts",
    topic: ["sleep-reset", "nighttime-waking", "sleep-protocol"],
    tags: ["sleep", "reset", "waking", "middle-of-night", "protocol"],
    content: "The 7-Minute Sleep Reset Protocol is designed for men over 40 who wake at night and struggle to fall back asleep. The root causes: cortisol spike, blood sugar drop, poor sleep environment, or anxiety. The protocol: Step 1 — Stop looking at the clock (looking triggers stress). Step 2 — 4-7-8 Breathing for 1 minute (inhale 4, hold 7, exhale 8). Step 3 — Progressive muscle relaxation from feet upward. Step 4 — Mental body scan focusing attention on physical sensations. Step 5 — Gratitude reframe — three things you are grateful for. Step 6 — If still awake after 20 min, get up, do something quiet, return when sleepy. Step 7 — Never force sleep.",
    quote: "Do not fight waking in the night. Use the 7-minute protocol to guide yourself gently back to sleep.",
    protocol: ["Stop looking at the clock — set it across the room", "4-7-8 breathing: inhale 4, hold 7, exhale 8 — repeat 4-6 times", "Progressive muscle relaxation: tense and release from feet to head", "Body scan meditation: focus on sensations, release thoughts", "If awake 20+ min: get up, read quietly, return when sleepy — do not force it"],
    sourceRef: "sleep-reset-protocol",
  },

  {
    id: "fr-081",
    speakerId: "funk-roberts",
    topic: ["sleep-importance", "sleep-science", "health"],
    tags: ["sleep", "science", "health", "why", "importance"],
    content: "Sleep deprivation in men over 40 has been directly linked to: 15% reduction in testosterone after one week of 5-hour nights, significant increase in cortisol, reduced insulin sensitivity leading to fat gain, impaired cognitive function comparable to legal intoxication, increased inflammatory markers, and elevated cardiovascular disease risk. Despite this evidence, men consistently undervalue sleep. The irony: men who sleep 7-9 hours are more productive, sharper, stronger, and more emotionally regulated than men who sleep 5-6 hours and feel 'fine.'",
    quote: "Sleep deprivation is not a badge of honor. It is slow-motion self-destruction. Protect your sleep.",
    protocol: ["Track sleep with a wearable device to understand your actual sleep architecture", "Prioritize sleep over late-night entertainment", "Feeling fine on 6 hours means you have adapted to dysfunction, not that you are doing well", "Treat poor sleep as seriously as missing training sessions", "30-day experiment: optimize sleep to 8 hours and track energy, performance, and mood"],
    sourceRef: "why-sleep-matters",
  },

  {
    id: "fr-082",
    speakerId: "funk-roberts",
    topic: ["sleep", "circadian-rhythm", "sleep-quality"],
    tags: ["sleep", "circadian", "rhythm", "quality", "light", "temperature"],
    content: "Sleep Pillar 2 addresses the sleep environment and daily habits that determine sleep quality. Temperature: the optimal sleep temperature is 65-68 degrees F — body temperature must drop to initiate and maintain deep sleep. Light: complete darkness is ideal. Even small amounts of light through eyelids suppress melatonin. Blackout curtains or a sleep mask are non-negotiable for optimal sleep. Noise: white noise or earplugs mask disruptive sounds. Evening routine: the 60 minutes before bed should be device-free, low-stimulation, and consistent.",
    quote: "The sleep environment is not a comfort luxury — it is the control panel for your hormonal recovery. Optimize it.",
    protocol: ["Temperature: 65-68F — cool room, warm socks or blanket", "Light: blackout curtains or quality sleep mask — complete darkness", "Noise: white noise machine or fan to mask disruptions", "Evening routine: devices off 60 min before bed, same sequence nightly", "Bedding: invest in quality mattress and pillow"],
    sourceRef: "sleep-pillar2",
  },

  {
    id: "fr-083",
    speakerId: "funk-roberts",
    topic: ["sleep-supplements", "natural-sleep", "melatonin"],
    tags: ["sleep", "supplements", "melatonin", "magnesium", "natural"],
    content: "Natural sleep supplementation for men over 40 focuses on supporting the body's own sleep mechanisms rather than sedation. Key supplements: Magnesium glycinate (300-400mg, 30-60 min before bed) — the most universally effective sleep supplement for men, supports GABA activity and relaxes muscles. Melatonin (0.5-1mg, 60-90 min before bed) — effective for circadian rhythm correction and travel. L-theanine (200mg) — promotes relaxed alertness, reduces pre-sleep anxiety. Ashwagandha (300-600mg daily) — reduces cortisol chronically, improving sleep quality over weeks. Avoid sleep sedation supplements — they suppress deep sleep architecture.",
    quote: "Natural sleep supplementation supports the body's systems. Pharmaceutical sedation suppresses them. Know the difference.",
    protocol: ["Magnesium glycinate: 300-400mg, 30-60 min before bed", "Melatonin: 0.5mg is sufficient — bigger dose is not better", "L-theanine: 200mg for pre-sleep anxiety and mental quieting", "Ashwagandha: 300mg daily for cortisol reduction over weeks", "Avoid alcohol, antihistamines, and sedatives — they prevent restorative deep sleep"],
    sourceRef: "sleep-supplements",
  },

  {
    id: "fr-084",
    speakerId: "summit-expert",
    topic: ["sleep-science", "research", "evidence"],
    tags: ["sleep", "research", "science", "evidence", "health"],
    content: "Sleep research confirms that sleep is not a passive state — it is an intensely active biological process essential for physical restoration, hormonal regulation, memory consolidation, immune function, and emotional processing. The highlights for men over 40: slow-wave deep sleep (Stage 3) is when growth hormone is released and physical restoration occurs. This stage declines significantly with age — but can be partially restored through consistent sleep schedules, reduced alcohol, regular exercise, and reduced pre-sleep screen exposure. REM sleep is when emotional processing and memory consolidation occur.",
    quote: "Sleep is the most sophisticated biological performance tool we have. Nothing else comes close to what 8 hours of quality sleep does for a man.",
    protocol: ["Protect Stage 3 deep sleep: consistent schedule, no alcohol, morning exercise", "Alcohol destroys sleep quality even if it helps you fall asleep — avoid within 3 hours", "Consistent sleep schedule preserves circadian alignment", "Napping: 20-minute power naps are restorative, longer naps disrupt nighttime sleep", "Prioritize sleep debt repayment on weekends — but not by more than 60 min deviation"],
    sourceRef: "sleep-science",
  },

  {
    id: "fr-085",
    speakerId: "funk-roberts",
    topic: ["breathwork", "recovery", "stress"],
    tags: ["breathwork", "breathing", "recovery", "stress", "cortisol", "over-40"],
    content: "Breathwork is one of the most powerful recovery tools available to men over 40 — and one of the most underused. The Over 40 Alpha 21-Day Breathwork Challenge introduces diaphragmatic breathing, deep breathing techniques, and advanced breathwork protocols over 21 days through 7 progressive sessions. The physical benefits: reduced cortisol, improved oxygen efficiency, lower resting heart rate, enhanced recovery between training sessions. The mental benefits: reduced anxiety, improved focus, better emotional regulation. Breathwork is the one recovery tool that can be used anywhere, anytime, with zero equipment.",
    quote: "You breathe 20,000 times a day. Most of those breaths are shallow and stress-promoting. Learn to breathe correctly and you change your chemistry.",
    protocol: ["Diaphragmatic breathing: belly rises first, not chest — practice daily", "Box breathing: 4 in, 4 hold, 4 out, 4 hold — for focus and calm", "4-7-8 breathing: for sleep onset and acute stress relief", "Power breathing (Wim Hof): 30 deep breaths, then breath hold — for energy", "Practice minimum 5 min daily — make it as consistent as brushing teeth"],
    sourceRef: "breathwork-21-day",
  },

  {
    id: "fr-086",
    speakerId: "funk-roberts",
    topic: ["wim-hof", "power-breathing", "cold-exposure"],
    tags: ["Wim-Hof", "power-breathing", "cold", "oxygen", "energy"],
    content: "The Wim Hof Power Breathing method is a structured breathwork protocol with documented physiological benefits for men over 40. The protocol: 30 deep inhalations followed by passive exhalations, ending with a breath hold. This cycle is repeated 3 times. The benefits are well-documented: increased blood oxygenation, elevated energy levels, reduced inflammatory markers, improved stress tolerance, and activation of the sympathetic nervous system for enhanced alertness and focus. Wim Hof breathing is combined with cold exposure (cold shower or ice bath) for maximum physiological benefit — the combination powerfully reduces inflammation and cortisol.",
    quote: "Breathwork changes your blood chemistry, your nervous system state, and your energy — within minutes. No supplement does that.",
    protocol: ["Round 1-3: 30 deep breaths — in through nose, out through mouth, passive exhale", "After 30th breath: exhale completely, hold until you need to breathe", "Then inhale fully and hold 15 seconds — recovery breath", "Repeat 3-4 rounds, note the tingling and energy shift", "Follow with 3-5 min cold shower for maximum cortisol reduction"],
    sourceRef: "wim-hof-breathing",
  },

  {
    id: "fr-087",
    speakerId: "funk-roberts",
    topic: ["breathwork-protocol", "progressive", "4-phase"],
    tags: ["breathwork", "protocol", "progressive", "diaphragmatic", "box"],
    content: "The Alpha Breathwork Recovery System is a 4-week progressive protocol. Phase 1 (Week 1): Diaphragmatic breathing — 5 min daily, one hand on chest, one on belly, breathe into the belly first. Phase 2 (Week 2): Deep breathing — 10 min daily with 4-second inhale, 2-second hold, 6-second exhale, 2-second hold. Phase 3 (Week 3): Box breathing — 4-4-4-4 for 5-10 min. Trains calm under pressure for high-stress situations. Phase 4 (Week 4): Power breathing — 3 rounds of 30 deep breaths for energy and alkalinity. The complete system takes men from chronic shallow breathing to mastery of their own nervous system.",
    quote: "Four weeks of systematic breathwork practice gives you control over your nervous system that most people never experience.",
    protocol: ["Week 1: 5 min diaphragmatic breathing daily — belly first", "Week 2: 10 min 4-2-6-2 pattern for deep relaxation", "Week 3: Box breathing 4-4-4-4 before stressful situations", "Week 4: Wim Hof power breathing 3 rounds for energy", "Combine all four based on need: box for stress, Wim Hof for energy, 4-7-8 for sleep"],
    sourceRef: "breathwork-implementation",
  },

  {
    id: "fr-088",
    speakerId: "funk-roberts",
    topic: ["meditation", "mindfulness", "mental-health"],
    tags: ["meditation", "mindfulness", "mental-health", "stress", "focus"],
    content: "Meditation for men over 40 is not about emptying the mind — it is about training the mind to be where you want it. The evidence base is robust: regular practice reduces cortisol, lowers blood pressure, improves sleep quality, enhances emotional regulation, increases focus and cognitive performance, and reduces anxiety and depression. For men who are resistant to meditation, the approach is tactical: think of it as mental training for performance. The most accessible entry point: a simple 10-minute daily breath focus meditation. Sit comfortably, close eyes, focus on the sensation of breath at the nostrils. When the mind wanders, gently return focus to breath. That is the entire practice.",
    quote: "Meditation is the gym for your mind. The reps are attention training. The gains are focus, calm, and resilience.",
    protocol: ["Start with 5-10 min daily — same time, same place builds habit", "Focus on the breath sensation — not on controlling the breath", "When mind wanders: notice, do not judge, return to breath", "Consistency beats length: 10 min daily outperforms 60 min once a week", "Apps like Waking Up or Calm can guide beginners effectively"],
    sourceRef: "meditation-mindfulness",
  },

  {
    id: "fr-089",
    speakerId: "funk-roberts",
    topic: ["meditation", "busy-men", "practical"],
    tags: ["meditation", "busy", "practical", "time-efficient", "men-over-40"],
    content: "Meditation for Busy Men addresses the most common objection: I don't have time to sit and meditate. The solution: micro-meditation practices integrated into existing daily routines. The 5-minute morning breath scan before getting out of bed. The commute body scan: instead of checking your phone, notice physical sensations. The walking meditation: 10 min of focused awareness while walking. The waiting meditation: use every waiting moment — red lights, lines, elevators — for breath focus. The eating meditation: eat first meal of the day without screens, fully present. These practices train the same mental skills as formal sitting meditation without requiring dedicated time blocks.",
    quote: "You do not need 20 quiet minutes. You need to use the moments you already have differently.",
    protocol: ["Morning: 5 min breath focus before getting out of bed", "Commute: body scan instead of phone for 10 min", "Walking: add mindful attention to any daily walk", "Eating: first meal without screens — full presence", "Waiting: every queue, red light, or pause is a micro-meditation opportunity"],
    sourceRef: "meditation-busy-men",
  },

  {
    id: "fr-090",
    speakerId: "funk-roberts",
    topic: ["gratitude", "meditation", "positive-mindset"],
    tags: ["gratitude", "meditation", "mindset", "morning", "routine"],
    content: "The Gratitude Meditation combines two of the most evidence-supported mental health practices into one powerful daily ritual. The practice: sit quietly for 5-10 minutes and systematically bring to mind people, experiences, and aspects of your life that you are genuinely grateful for. Allow the felt sense of gratitude to arise — not just the intellectual acknowledgment, but the emotion. Research shows this practice reduces inflammatory markers, improves cardiovascular health markers, enhances immune function, improves sleep, and increases prosocial behavior. Including a health-specific gratitude component — gratitude for your body's capacity to train, recover, and function — creates a positive relationship with your physical health.",
    quote: "Gratitude is not passive. It is neurological training that rewires your brain toward strength, resilience, and positive action.",
    protocol: ["Morning: sit 5-10 min and recall 3 people or experiences with genuine gratitude", "Feel the emotion — not just the thought — of gratitude", "Include gratitude for your body: its capacity to train, heal, and function", "Evening: review the day for unexpected gifts — things that went well", "Share gratitude with people in your life — it multiplies the effect"],
    sourceRef: "gratitude-meditation",
  },

  {
    id: "fr-091",
    speakerId: "funk-roberts",
    topic: ["meditation", "mindfulness", "mental health", "stress management"],
    tags: ["meditation history", "focused attention", "open monitoring", "five elements", "categories"],
    content: "Meditation has been practiced for thousands of years across many cultures and traditions. Modern science has validated what ancient practitioners discovered intuitively. There are two primary categories of meditation. Focused Attention meditation directs your awareness to a single object such as your breath, a mantra, or a candle flame, training your ability to sustain concentration and return attention when it wanders. Open Monitoring meditation broadens awareness to observe all thoughts, sensations, and emotions without attachment, developing nonjudgmental awareness of the present moment. Five essential elements of effective meditation include: a quiet environment to minimize external distractions, a comfortable posture whether sitting, lying, or walking, a point of focus such as breath or mantra, an open and receptive attitude toward whatever arises, and consistent practice over time. For men over 40, meditation is not a passive or soft activity. It is active mental training that builds the psychological resilience and recovery capacity that physical training alone cannot provide.",
    sourceRef: "Meditation for Busy People — Wave 18",
  },

  {
    id: "fr-092",
    speakerId: "funk-roberts",
    topic: ["meditation", "heart health", "brain health", "psychological wellbeing", "research"],
    tags: ["research", "studies", "cardiology", "stress reduction", "wellbeing", "anxiety", "blood pressure"],
    content: "The research on meditation is extensive and compelling. For cardiovascular health, regular meditation has been shown to reduce blood pressure, lower heart rate, and decrease the risk of cardiovascular events. The American Heart Association recognizes meditation as a beneficial practice for heart health. For brain aging, neuroscientists at Harvard found that long-term meditators have more gray matter in regions associated with attention, interoception, and sensory processing, and the natural age-related thinning of the cortex is significantly reduced in practitioners. For psychological wellbeing, a landmark meta-analysis of over 18,000 participants found mindfulness meditation programs reduced symptoms of anxiety, depression, and pain. For men over 40 dealing with high cortisol, disrupted sleep, and mental fatigue from career and family demands, meditation provides a proven physiological and psychological reset that compounds over time.",
    sourceRef: "Meditation for Busy People — Wave 18",
  },

  {
    id: "fr-093",
    speakerId: "funk-roberts",
    topic: ["meditation", "brain health", "neuroscience", "neuroplasticity"],
    tags: ["hippocampus", "amygdala", "posterior cingulate", "temporal parietal junction", "cortex", "neuroplasticity", "brain structures"],
    content: "Meditation produces measurable structural and functional changes in the brain. The left hippocampus, responsible for learning, memory consolidation, and emotional regulation, shows increased gray matter density in meditators. This directly counters the age-related hippocampal shrinkage that begins accelerating in men over 40. The posterior cingulate cortex, which governs self-referential thought and mind-wandering, becomes less reactive in experienced meditators, explaining reduced rumination and anxiety. The temporoparietal junction shows increased activity and connectivity after just eight weeks of practice. The amygdala shows reduced gray matter density and lower activation after consistent meditation, meaning less reactive stress responses and better emotional regulation. The prefrontal cortex shows strengthened connections to emotional regions, improving top-down regulation. These are real neurological upgrades that improve every domain of life.",
    sourceRef: "Meditation for Busy People — Wave 18",
  },

  {
    id: "fr-094",
    speakerId: "funk-roberts",
    topic: ["meditation", "cortisol", "recovery", "stress hormones", "sleep"],
    tags: ["relaxation response", "cortisol reduction", "parasympathetic", "telomeres", "inflammation", "physiological effects"],
    content: "The physiological effects of meditation work through the relaxation response coined by Harvard cardiologist Herbert Benson. When you meditate, the parasympathetic nervous system activates, reducing heart rate, slowing respiration, lowering blood pressure, and decreasing oxygen consumption. Cortisol, the primary stress hormone that destroys testosterone, disrupts sleep, and promotes belly fat in men over 40, is measurably reduced by consistent meditation practice. Studies show cortisol levels drop significantly after eight weeks of regular practice. Inflammation markers including C-reactive protein and interleukin-6, which accelerate aging and suppress testosterone, show meaningful reductions in meditators. At the cellular level, meditation appears to protect telomere length, the biological markers of cellular aging. Research by Nobel laureate Elizabeth Blackburn found that meditators maintain longer telomeres compared to non-meditators of the same age.",
    sourceRef: "Meditation for Busy People — Wave 18",
  },

  {
    id: "fr-095",
    speakerId: "funk-roberts",
    topic: ["meditation", "movement meditation", "mindfulness practices", "daily routine"],
    tags: ["movement meditation", "observation meditation", "affirmation meditation", "walking meditation", "types of meditation"],
    content: "Three highly practical meditation approaches work well for busy men over 40. Movement Meditation integrates mindfulness into physical activity already in your schedule. Walking meditation involves slow deliberate walking while focusing completely on each step, the sensation of foot contact, breath rhythm, and surrounding sounds. Yoga, tai chi, and certain martial arts practices also qualify. The key is directing full attention to physical sensations rather than mental chatter. Observation Meditation is one of the simplest and most accessible practices. Find a comfortable seated position, close your eyes, and simply observe your thoughts, sensations, and emotions as they arise without judgment or engagement. Imagine you are sitting on a riverbank watching thoughts float by as leaves on the water. You notice them but do not jump in. Affirmation Meditation combines focused intention with meditative calm. After a few minutes of breath-focused settling, you introduce positive statements tied to your goals and identity: I am strong, I am resilient, I am building my best body and healthiest life now.",
    sourceRef: "Meditation for Busy People — Wave 18",
  },

  {
    id: "fr-096",
    speakerId: "funk-roberts",
    topic: ["meditation", "daily practice", "habit formation", "journaling", "consistency"],
    tags: ["daily routine", "journal meditation", "habit building", "morning practice", "five minutes", "consistency"],
    content: "Creating a sustainable daily meditation practice is about consistency over duration. Five minutes every day outperforms sixty minutes once a week. The most effective time for men over 40 is first thing in the morning before checking phones or email, when the mind is still relatively quiet. Find a consistent spot in your home designated solely for practice. Use the same chair or cushion every day. Start with five minutes using breath as your anchor. When the mind wanders, gently return attention to the breath without frustration. That moment of noticing and returning IS the practice. Journal Meditation for the Soul extends meditation benefits through writing. Immediately after your sitting practice, write for five to ten minutes about what arose during the session, what you are grateful for, and what intention you are carrying into the day. Men who meditate consistently report better training focus, faster recovery, improved relationships, and clearer decision-making. The second half of your life can be stronger in every dimension.",
    sourceRef: "Meditation for Busy People — Wave 18",
  },

  {
    id: "fr-097",
    speakerId: "navin-khan",
    topic: ["supplements", "testosterone", "hormone support"],
    tags: ["testosterone support", "zinc", "vitamin D", "boron", "ashwagandha", "tongkat ali", "DIM", "hormonal optimization"],
    content: "The testosterone support stack for men over 40 addresses the hormonal environment from multiple angles simultaneously. Zinc (25-45mg daily) is the most critical mineral for testosterone production — zinc deficiency is directly correlated with low testosterone and is extremely common in men who sweat regularly. Vitamin D3 (5000 IU daily with K2) acts as a steroid hormone precursor — virtually every cell in the body has vitamin D receptors, and men with optimal vitamin D levels have significantly higher testosterone. Boron (3-10mg daily) increases free testosterone by reducing SHBG, which binds and inactivates testosterone. Ashwagandha (KSM-66, 300-600mg daily) reduces cortisol by 27-30% in clinical trials, directly supporting testosterone. Tongkat Ali (200-400mg daily) supports LH and testosterone production. DIM (Diindolylmethane, 200-400mg daily) balances estrogen metabolism to favor less potent estrogen metabolites, reducing the testosterone-suppressing effects of estrogen dominance.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-098",
    speakerId: "navin-khan",
    topic: ["supplements", "muscle building", "creatine", "protein", "recovery"],
    tags: ["creatine", "HMB", "protein", "leucine", "BCAAs", "muscle preservation", "anabolic support"],
    content: "The muscle building and preservation stack for men over 40 addresses anabolic resistance — the reduced sensitivity of aging muscle to protein and training stimuli. Creatine monohydrate (5g daily) is the most well-researched sports supplement in history with proven benefits for muscle strength, power output, muscle mass, cognitive function, and even cardiovascular health. HMB (Beta-Hydroxy Beta-Methylbutyrate, 3g daily) reduces muscle protein breakdown and is particularly effective for men over 40 due to its anti-catabolic properties. Whey protein isolate (25-35g) post-workout provides rapidly absorbed leucine-rich protein that maximally stimulates muscle protein synthesis. Leucine specifically (2-3g per meal) is the amino acid that triggers the muscle-building mTOR pathway — older men need more leucine per meal than younger men to achieve the same anabolic response. Tart cherry extract reduces post-exercise muscle soreness and inflammation, improving recovery between sessions.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-099",
    speakerId: "navin-khan",
    topic: ["supplements", "sleep", "recovery", "cortisol"],
    tags: ["magnesium", "melatonin", "ashwagandha", "l-theanine", "GABA", "sleep stack", "cortisol control"],
    content: "The sleep and recovery stack for men over 40 is arguably the most impactful supplement category because sleep is when testosterone is produced, growth hormone is released, and physical repair occurs. Magnesium glycinate (400mg taken 45-60 min before bed) is the foundational sleep supplement — it activates GABA receptors, relaxes muscle tissue, reduces cortisol, and has the best absorption profile of all magnesium forms. Phosphatidylserine (400mg daily) is a phospholipid that blunts cortisol response to exercise and stress, directly supporting testosterone by reducing the cortisol-testosterone antagonism. L-theanine (200mg before bed) promotes alpha brainwave activity associated with relaxed alertness without sedation, improving sleep quality without grogginess. Magnesium threonate specifically crosses the blood-brain barrier and may improve sleep architecture and cognitive function. Combining magnesium glycinate with L-theanine creates a powerful non-sedating sleep quality stack without dependency risk.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-100",
    speakerId: "navin-khan",
    topic: ["supplements", "anti-inflammatory", "joint health"],
    tags: ["omega-3", "curcumin", "boswellia", "collagen", "joint health", "inflammation", "EPA", "DHA"],
    content: "The anti-inflammatory and joint health stack targets the chronic low-grade inflammation that accelerates aging, suppresses testosterone, causes joint pain, and drives metabolic dysfunction in men over 40. Omega-3 fatty acids (EPA and DHA, 3-4g daily of combined EPA+DHA, not total fish oil) are the most evidence-backed anti-inflammatory supplement available. They reduce prostaglandins and cytokines, lower cardiovascular risk, support brain health, and improve joint lubrication. Curcumin with piperine (1000-1500mg daily, always with black pepper extract or fat for absorption) is the active compound in turmeric with powerful NF-kB pathway inhibition — blocking the molecular inflammation switch. Boswellia serrata (400-800mg daily) specifically reduces joint inflammation via a different pathway than curcumin, making them highly synergistic. Type 2 collagen (40mg daily, undenatured) has clinical evidence for reducing joint pain and stiffness by promoting immune tolerance to cartilage breakdown. Glycine (3-5g daily) supports collagen synthesis throughout the body.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-101",
    speakerId: "navin-khan",
    topic: ["supplements", "brain", "cognitive", "nootropics"],
    tags: ["brain health", "nootropics", "lion's mane", "bacopa", "CDP choline", "omega-3", "cognitive performance"],
    content: "Brain health and cognitive performance supplements for men over 40 address the neural changes that accompany aging: reduced neuroplasticity, declining neurotransmitter production, reduced cerebral blood flow, and increased oxidative stress in brain tissue. Lion's Mane mushroom (1000-2000mg daily) is the most evidence-backed natural nootropic for neurogenesis, stimulating production of Nerve Growth Factor (NGF) which supports neuron health and may slow cognitive decline. Bacopa monnieri (300mg of 50% bacosides, daily) has the strongest clinical evidence base for memory, learning speed, and anxiety reduction of any nootropic herb — requires 8-12 weeks for full effect. CDP choline (250-500mg daily) provides both choline for acetylcholine production and cytidine for brain energy metabolism. Phosphatidylserine (400mg daily) is a structural phospholipid that is FDA-qualified for reduced risk of cognitive dysfunction. Combined with omega-3 fatty acids (DHA specifically is critical for neural membrane fluidity), this stack provides comprehensive cognitive support.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-102",
    speakerId: "navin-khan",
    topic: ["supplements", "cardiovascular", "heart health"],
    tags: ["cardiovascular", "CoQ10", "bergamot", "nitric oxide", "beetroot", "heart health", "cholesterol"],
    content: "The cardiovascular health supplement stack for men over 40 addresses the increasing cardiovascular risk that comes with age, declining hormone levels, and years of lifestyle accumulation. CoQ10 (100-300mg daily, ubiquinol form for men over 40) is critical for mitochondrial energy production in heart muscle cells — and CoQ10 levels decline significantly with age and with statin use. Men taking statins absolutely must supplement CoQ10. Bergamot extract (500mg daily) has clinical evidence for improving lipid profiles including reducing LDL, raising HDL, and reducing triglycerides without the side effects of statins. Aged garlic extract (600mg daily) reduces arterial stiffness, lowers blood pressure, and has antiplatelet effects. Nitric oxide support through L-citrulline (3-6g daily) or organic beetroot powder improves endothelial function, reduces blood pressure, and improves exercise performance by enhancing blood flow and oxygen delivery.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-103",
    speakerId: "navin-khan",
    topic: ["supplements", "gut health", "microbiome", "digestion"],
    tags: ["probiotics", "prebiotics", "digestive enzymes", "gut health", "microbiome", "L-glutamine"],
    content: "The gut health stack for men over 40 addresses the gut microbiome changes, reduced stomach acid production, and intestinal permeability issues that commonly develop with age and stress. A quality multi-strain probiotic (50-100 billion CFU with Lactobacillus acidophilus, L. plantarum, Bifidobacterium longum, and B. bifidum) supports microbiome diversity, reduces inflammation, improves nutrient absorption, and supports testosterone-related bacteria strains. Prebiotic fiber (10-20g daily from inulin, FOS, or resistant starch) feeds beneficial bacteria — probiotics without prebiotics are like planting seeds without watering them. Digestive enzymes (broad spectrum with protease, lipase, and amylase, taken with meals) improve nutrient extraction from food, critical for men who train hard and need maximum protein absorption. L-glutamine (5-10g daily) is the preferred fuel of intestinal cells and helps maintain gut barrier integrity, reducing intestinal permeability (leaky gut) that drives systemic inflammation.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-104",
    speakerId: "navin-khan",
    topic: ["supplements", "energy", "adaptogen", "adrenal"],
    tags: ["adaptogens", "ashwagandha", "rhodiola", "eleuthero", "energy", "stress", "adrenal fatigue", "cortisol"],
    content: "The adaptogen and energy stack for men over 40 addresses the chronic stress, adrenal burden, and energy dysregulation that accumulates from decades of high demands without adequate recovery. Adaptogens are herbs that help the body resist and adapt to stress without overstimulating or sedating. Ashwagandha KSM-66 (600mg daily) is the most clinically validated adaptogen, showing reductions in cortisol, improvements in testosterone, enhanced recovery from exercise, and improved cognitive function. Rhodiola rosea (200-400mg of 3% rosavins daily, morning only) improves mental and physical performance under stress, reduces fatigue, and supports mood without stimulant effects. Eleuthero (Siberian ginseng, 400-800mg daily) has 40 years of clinical use in Soviet athletic and military research showing improved stress tolerance and physical endurance. Phosphatidylserine (400mg daily) blunts the cortisol response to training and reduces the post-exercise cortisol spike that suppresses testosterone. Combined, these adaptogens build long-term stress resilience rather than providing temporary stimulant effects.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },

  {
    id: "fr-105",
    speakerId: "navin-khan",
    topic: ["supplements", "fat loss", "metabolic health", "cardiovascular", "inflammation", "blood sugar"],
    tags: ["fat burner", "yohimbe", "green tea", "EGCG", "blood sugar", "chromium", "berberine", "beetroot", "CoQ10", "inflammation", "NF-kB", "metabolic stack", "cardiovascular"],
    content: "The Fat Loss and Metabolic stack targets the mechanisms of belly fat accumulation unique to men over 40. Metabolism slows from muscle loss and insulin resistance. Cortisol rises driving belly fat storage. Energy crashes create sugar cravings. Fat-burning hormones including testosterone and growth hormone decline. Caffeine combined with yohimbe stimulates catecholamines including adrenaline and noradrenaline that unlock fat cells. Yohimbe specifically blocks alpha-2 receptors that trap fat in stubborn areas like belly and love handles. Use cautiously in the morning or pre-workout in a fasted state, avoiding with high blood pressure or anxiety. Green Tea Extract EGCG enhances thermogenesis and fat oxidation by inhibiting the enzyme that breaks down norepinephrine, prolonging fat-burning signals. Blood sugar support ingredients including chromium, cinnamon bark, and banaba leaf improve insulin sensitivity, stabilize blood glucose, and prevent fat storage. The Metabolic, Cardiovascular, and Anti-Inflammatory Stack addresses chronic inflammation as the root cause of most chronic disease in men over 40. Elevated blood sugar sticks to low-density lipoproteins increasing arterial damage and cholesterol synthesis. The NF-kB pathway is the molecular inflammation switch. Blocking chronic NF-kB activation with curcumin and other anti-inflammatories is critical. Blood Sugar Ultra ROC803 combines cinnamon bark, banaba leaf, and chromium picolinate for blood glucose control. Premium Adaptogen Blend ROC726 combines ashwagandha, rhodiola rosea, and turmeric for cortisol balance and inflammation control. Organic Beetroot ROC914 boosts nitric oxide levels improving circulation and cardiovascular endurance. CoQ10 supports mitochondrial energy production and heart health which both decline with age.",
    sourceRef: "Over 40 Supplements Coaching Call — Wave 19",
  },


  {
    id: "fr-106",
    speakerId: "anthony-balduzzi",
    topic: ["fathers-health", "motivation", "family-purpose"],
    tags: ["fit-father", "dads", "family", "purpose", "fathers", "over-40", "weight-loss"],
    content: "Dr. Anthony Balduzzi built the Fit Father Project from personal tragedy. He lost his father at age 42 to health complications, watching him wither away on hospice care when Anthony was just nine. That experience became his life mission: to help fathers over 40 reclaim their health before it is too late. His insight after 15 years working with tens of thousands of fathers: fitness is never just about looks. Fitness is about your family. Fitness is the expression of your values. It is your mission. Men over 40 who tie their health goals to their role as fathers, husbands, and leaders achieve dramatically better long-term adherence than those motivated purely by aesthetics. The Fit Father approach: lose the confusion, get a clear plan, build a community of support, and get results. Those four elements replace every false start.",
    quote: "Fitness is more than fitness. Fitness is your family. Fitness is the expression of your values. That is why it sticks.",
    protocol: ["Connect health goals to family identity: train to be here for your kids", "Use your children as your non-negotiable Why", "Commit to a structured program instead of random effort", "Join a community of fathers doing the same work", "Measure success in health markers and energy, not just appearance"],
    sourceRef: "summit-balduzzi-interview",
  },

  {
    id: "fr-107",
    speakerId: "ben-pakulski",
    topic: ["precision-health", "biohacking", "personalized-optimization"],
    tags: ["ben-pakulski", "muscle-intelligence", "M140", "personalized", "precision", "biometric", "longevity"],
    content: "Ben Pakulski, the godfather of intelligent muscle building and founder of Muscle Intelligence, describes the evolution from generic optimization to fully personalized health as Men 4.0. The core principle: stop doing what everyone else is doing and start learning what works specifically for you. Generic advice tells everyone to use peptides, saunas, and red light therapy. But without measuring your own biomarkers, you are guessing. Ben approach: test your genetics, test your bloodwork, understand your hormones, and then build a precise personal protocol based on what YOUR body actually needs. The technology now exists to make this accessible. The payoff: not wasting money on supplements and interventions that are not working for your specific physiology.",
    quote: "Do not waste your money on supplements you are not sure are working. Test, measure, and build a precise personal protocol.",
    protocol: ["Get genetic testing to understand your nutritional and training predispositions", "Get comprehensive bloodwork: not just the basics but deep hormone and metabolic panels", "Correlate your symptoms with your data — connect how you feel to what your numbers show", "Build your supplement protocol around YOUR biomarkers, not someone elses recommendations", "Retest every 90 days to measure what is actually working"],
    sourceRef: "summit-ben-pakulski-m140",
  },

  {
    id: "fr-108",
    speakerId: "ben-greenfield",
    topic: ["aging-biology", "mitochondria", "sarcopenia", "brain-health"],
    tags: ["ben-greenfield", "sarcopenia", "mitochondria", "aging", "muscle-loss", "brain", "neuroscience"],
    content: "Ben Greenfield breaks down the biological realities of aging at 40 that most men do not fully understand. Sarcopenia — the gradual loss of muscle mass — begins accelerating in the 40s, driven by declining mitochondrial density, reduced muscle protein synthesis, and lower anabolic hormone output. Men start to notice their arms and legs appear more lean, sometimes frail. But the brain piece is misunderstood: there is not much research supporting cognitive decline if the mind is stimulated. Neural stimulation through new challenges, dangerous activities, musical instruments, sports that require spatial awareness, and a low-inflammation diet rich in omega-3s and minerals can largely preserve cognitive function. The biggest controllable factors for men over 40: mitochondrial health, muscle preservation, and neural stimulation.",
    quote: "Your brain does not have to decline. Feed it with stimulation, challenge, omega-3s, and low inflammation — and it will keep performing.",
    protocol: ["Prioritize mitochondrial health: Zone 2 training, cold exposure, quality sleep", "Resistance train to counter sarcopenia — muscle preservation is the priority", "Stimulate the brain: new skills, new sports, musical instruments, chess", "Eat for brain health: omega-3s, colorful vegetables, low processed foods", "Challenge your eyes: sports requiring gaze shift, shooting, racket sports"],
    sourceRef: "summit-ben-greenfield-aging",
  },

  {
    id: "fr-109",
    speakerId: "bill-maeda",
    topic: ["functional-fitness", "cancer-survivor", "longevity", "movement"],
    tags: ["bill-maeda", "functional", "cancer", "survivor", "movement", "athlete", "over-50", "mobility"],
    content: "Bill Maeda, 57, is a functional strength and mobility coach who overcame a sport-ending injury and stage 3 colon cancer to redefine what athletic capability looks like after 50. His philosophy: train to maintain the attributes of a soldier and a fighter. Every training session is built around being able to perform, not just look good. Bill trains for functional real-world capacity: the ability to move, react, carry, and protect. His cancer battle gave him a different relationship with his body — training became a celebration of what the body can do, not a punishment for what it looks like. Men over 40 who survived health crises often train with the greatest consistency because they understand what it means to lose physical capacity.",
    quote: "Train like your life depends on your fitness — because it might. The body that can move, fight, and carry is the body worth building.",
    protocol: ["Define your training purpose beyond aesthetics: soldier, father, protector, athlete", "Build movement quality first: can you squat, carry, crawl, react?", "Vary training modalities — do not be a one-dimensional gym athlete", "After health challenges, reframe training as privilege not punishment", "Find the training identity that sustains you for decades, not programs that burn you out in weeks"],
    sourceRef: "summit-bill-maeda",
  },

  {
    id: "fr-110",
    speakerId: "chris-lopez",
    topic: ["power-training", "kettlebell", "longevity-training"],
    tags: ["chris-lopez", "power", "kettlebell", "StrongFirst", "performance", "longevity", "PLOs"],
    content: "Chris Lopez, StrongFirst instructor and creator of Power Longevity Sessions (PLOs), makes the case for performance-first training for men over 40. His insight: aesthetic goals are difficult to measure and take a long time to manifest — which demotivates men. Performance goals (getting stronger, jumping higher, lasting longer, better cardio) are measurable and happen faster, which sustains motivation. The Power Retreat Repeat system builds power endurance over time — the ability to express power repeatedly across a session. This drives athleticism, longevity, and body composition simultaneously. The aesthetic result is a byproduct of the performance goal, not the goal itself.",
    quote: "Train for performance. The aesthetic result is a byproduct. Train for looks and you will likely quit. Train for performance and the looks follow.",
    protocol: ["Set performance goals: strength PR, sprint time, kettlebell rep count — measurable targets", "Use kettlebell training as your performance baseline — swing, clean, press, squat, snatch", "Power longevity sessions: explosive power combined with conditioning endurance", "Track performance metrics weekly — seeing numbers improve sustains motivation", "Aesthetic progress follows performance progress — trust the byproduct"],
    sourceRef: "summit-chris-lopez-PLO",
  },

  {
    id: "fr-111",
    speakerId: "clark-bartram",
    topic: ["health-markers", "aesthetics", "men-over-40"],
    tags: ["clark-bartram", "CBX", "marine", "health-markers", "aesthetics", "narrative"],
    content: "Clark Bartram, former US Marine, ISSA Master Trainer, and National Fitness Hall of Fame inductee, offers one of the most important reframes in men health: stop making aesthetics the prime mover of your health journey. The look is the hook — it gets men into programs. But the look will not sustain the journey. What sustains it: health markers, energy, vitality, mindset, and attitude toward life. When men chase the six-pack, they quit when they do not see it fast enough. When men chase excellent bloodwork, improved testosterone levels, lower inflammation, and better energy — the body follows, and they stay in it. Shift the narrative from looking good to functioning optimally, and the aesthetics become the natural reward.",
    quote: "The look is the hook. But health markers are what keep men in the game for life. Lead with what actually matters.",
    protocol: ["Switch primary goal from aesthetics to health markers: bloodwork, energy, hormones", "Use annual bloodwork as your progress report — not the mirror", "Focus on the Why that will make you cry: family, longevity, contribution", "Allow aesthetics to be a byproduct of optimal health, not the target", "Find a community that reinforces health identity over appearance identity"],
    sourceRef: "summit-clark-bartram-CBX",
  },

  {
    id: "fr-112",
    speakerId: "dean-pohlman",
    topic: ["yoga", "mobility", "men-resistance"],
    tags: ["dean-pohlman", "man-flow-yoga", "yoga", "mobility", "men", "resistance", "hips", "back-pain"],
    content: "Dean Pohlman, founder of Man Flow Yoga, identifies the three reasons men avoid yoga and mobility work: they think it is too spiritual, they think it is for women, and they do not think it is a challenging enough workout. All three objections are legitimate but misguided. Man Flow Yoga addresses each: no spiritual content, built for men physiology and goals, and genuinely challenging. The root of most physical problems in men over 40 — tight hips, knee pain, lower back pain, shoulder issues — can be traced to years of sport without mobility work, compounded by decades of sitting 8-12 hours per day. The resolution: 10-15 minutes of targeted mobility daily. It is not a big time commitment. It is the compound interest investment that pays off in decades of pain-free movement.",
    quote: "Ten minutes of mobility daily is worth more than any supplement you will ever take. It is the investment that pays back for decades.",
    protocol: ["Address the three objections: Man Flow Yoga is results-focused, male-designed, and physically demanding", "Ten to fifteen minutes of targeted mobility daily prevents and resolves most chronic pain", "Priority areas: hips, shoulders, thoracic spine, and knees — the four most common failure points", "Sitting 8-12 hours daily is directly causing your mobility problems — move every 60 minutes", "Commit to 30 days of daily mobility and assess the difference in pain, movement, and training"],
    sourceRef: "summit-dean-pohlman-yoga",
  },

  {
    id: "fr-113",
    speakerId: "dean-somerset",
    topic: ["pain-management", "training-around-injury", "rehabilitation"],
    tags: ["dean-somerset", "pain", "injury", "rehab", "kinesiologist", "train-around", "80s-deadlift"],
    content: "Dean Somerset, kinesiologist and clinical exercise physiologist, challenges the most damaging belief in men health: that pain means stop. Complete rest is almost never the right answer. Dean has clients in their 80s who deadlift more than their body weight. Pain is the body talking — the louder it talks, the more specifically you need to address it. But avoidance and deconditioning typically make it worse. The key distinction: train smart, not through pain. When should trainers refer out? When something changes suddenly — sudden loss of strength, new pain never felt before, or lost function. When should you keep training? When nothing has changed from a chronic condition. The tools: movement modification, exercise substitution, and enough progressions to always find a pain-free way to load the target muscles.",
    quote: "Pain does not mean stop. It means listen, assess, and find the smart way to keep moving. Avoidance accelerates decline.",
    protocol: ["Distinguish sudden new pain (refer out) from chronic known pain (train around)", "Never rest completely — find a pain-free movement to substitute and keep training", "Build a toolbox of exercise progressions for every major movement pattern", "Address the root cause of pain while continuing to train what does not hurt", "Find a kinesiologist, sports physio, or movement specialist for persistent pain — do not guess"],
    sourceRef: "summit-dean-somerset-pain",
  },

  {
    id: "fr-114",
    speakerId: "firas-zahabi",
    topic: ["martial-arts", "aging-mindset", "intermittent-fasting", "joint-health"],
    tags: ["firas-zahabi", "tristar", "GSP", "martial-arts", "aging", "fasting", "autophagy", "joint-health"],
    content: "Firas Zahabi, head coach at TriStar Gym in Montreal and long-time coach of UFC Hall of Famer Georges St-Pierre, delivers a powerful message: getting old is a myth. With what we know now about hormones, nutrition, and fitness, there is no excuse to get old beyond your years. His number one weapon against aging: intermittent fasting and autophagy. When you fast for 16 hours, your body enters autophagy — it literally destroys and recycles damaged and dysfunctional cells. Nobel Prize-winning science. Fasting once or twice per day, combined with exercise within the fasting window, accelerates autophagy dramatically. His second key: joint health through science. There is no reason why shoulders, backs, and knees should ache permanently. His third key: the mindset that refuses to accept decline.",
    quote: "Getting old is a myth. With what we know now, 46 should be the new 36. We have no excuse to accept decline.",
    protocol: ["Intermittent fasting 16 hours daily: eat one to two meals per day for autophagy", "Exercise within the fasting window to accelerate cellular cleanup through autophagy", "Maintain a bulletproof mindset: refuse to accept decline as inevitable", "Invest in joint health science: there are real solutions for joint pain", "Train martial arts or heavy bag work for confidence, conditioning, and mental toughness"],
    sourceRef: "summit-firas-zahabi-tristar",
  },

  {
    id: "fr-115",
    speakerId: "bryan-krahn",
    topic: ["physique-over-40", "training-respect", "recovery"],
    tags: ["bryan-krahn", "physique", "over-40", "recovery", "respect-the-process", "peak", "breakdown"],
    content: "Bryan Krahn, physique coach specializing in men over 40, reveals a critical insight: age 40 is actually the physical peak for body composition — but the media frames it as the beginning of decline, and most men believe it. The real problem comes when men ignore the under-the-hood changes happening in their late 30s and early 40s and keep training as if they are 22. Bryan did this himself: looked great at 40 doing photo shoots, then by 45-46 was so beat up that training stopped being fun. Everything hurt. The fix was not training like an old person — it was training like someone who respects the process. The man who respects his body at this stage makes progress. The man who ignores it eventually dreads the gym.",
    quote: "At 40 you are at your peak for body composition. But you have to respect what is happening under the hood — or by 45 you will hate training.",
    protocol: ["Recognize: 40 is your physical peak, not the beginning of decline", "The changes happening in your late 30s and 40s require respect, not denial", "Reduce training frequency slightly but increase recovery focus", "Prioritize training quality over ego-driven intensity", "Stop training like you are 22 — train like a man who intends to be great at 60"],
    sourceRef: "summit-bryan-krahn-physique",
  },

  {
    id: "fr-116",
    speakerId: "gregory-dzemaili",
    topic: ["kettlebell", "joint-health", "eccentric-training", "simplicity"],
    tags: ["gregory-dzemaili", "kettlebell", "eccentric", "joint", "swing", "one-tool", "resilience"],
    content: "Gregory Dzemaili, founder of the Kettlebell Code, explains why kettlebell training uniquely serves men over 40. The key mechanism: continuous eccentric loading. Tendons and joint health respond exceptionally well to eccentric training — the lengthening phase of muscle contraction. Every kettlebell swing, clean, and snatch involves repeated eccentric loading through the hip hinge, which rehabilitates and strengthens tendons and ligaments. Additionally: one kettlebell, one square meter of space, five exercises — swing, press, clean, squat, snatch — and you never need a gym again. The unbrokenness of kettlebell training is its greatest tool: forcing you to pace yourself, to become one with the bell, to build resilience under sustained effort.",
    quote: "Five exercises: swing, press, clean, squat, snatch. One bell. One square meter. That is everything a man over 40 needs to stay strong for life.",
    protocol: ["Master the five fundamental kettlebell exercises: swing, press, clean, squat, snatch", "Use continuous swings, cleans, and snatches for eccentric tendon and joint conditioning", "Do not put the bell down during conditioning sets — the unbrokenness builds resilience", "One quality bell is your full gym — choose 24kg or 32kg as your primary training weight", "The kettlebell swing: best single exercise for posterior chain, conditioning, and fat loss"],
    sourceRef: "summit-gregory-dzemaili-kettlebell",
  },

  {
    id: "fr-117",
    speakerId: "dan-john",
    topic: ["strength-simplicity", "loaded-carries", "long-term-training"],
    tags: ["dan-john", "strength", "simple", "loaded-carry", "fundamental", "six-decades", "everything-works"],
    content: "Dan John, legendary strength coach and author with over six decades of lifting, coaching, and studying what actually works, offers the most important principle in training: everything works — for about six weeks. The mistake most men make is overcomplicating what should be simple. Push, pull, hinge, squat, and loaded carry. Drink water. Eat protein and vegetables. Sleep well. Take care of your relationships. Life is pretty simple. The hard part is showing up in the gym three days a week for 60 years. His career-changing discovery: loaded carries. After breaking his wrist in eight pieces and being told he would never train again, Dan focused on farmer walks and suitcase carries during rehabilitation. They transformed his training. For men over 40, loaded carries are among the best exercises available: they build real-world strength, challenge the core, and are joint-friendly.",
    quote: "Everything works. The problem is that everything works for about six weeks. Then it is time to change. That is not a bug — that is the design.",
    protocol: ["Master the five fundamental patterns: push, pull, hinge, squat, loaded carry", "Add farmer walks and suitcase carries to every training week — they are underrated tools", "Rotate program focus every 4-6 weeks: the body needs novelty to keep adapting", "Keep the overall approach simple: complicated is the enemy of consistent", "60 years of consistent simple training beats 6 years of complex perfect training"],
    sourceRef: "summit-dan-john-strength",
  },

  {
    id: "fr-118",
    speakerId: "dr-sherry-mcallister",
    topic: ["chiropractic", "whole-being-health", "nervous-system", "alignment"],
    tags: ["sherry-mcallister", "chiropractic", "nervous-system", "whole-being", "alignment", "stress-accumulation"],
    content: "Dr. Sherry McAllister, President of the Foundation for Chiropractic Progress with over 25 years of clinical experience, introduces Whole Being Health — the understanding that the body does not function in silos. Most men are conditioned to look for symptoms and assume health is the absence of those symptoms. But true health is the body operating at full capability: physically capable, mentally resilient, and neurologically balanced. Men over 40 feel older than they are because they have accumulated decades of physical and emotional stress, lost mobility through sedentary careers, and allowed muscle mass to decline. The nervous system becomes dysregulated under this accumulated load. Chiropractic alignment, movement restoration, and stress regulation are tools to restore the complete system.",
    quote: "Health is not the absence of symptoms. Health is full capability — physical, mental, and neurological. Optimize the entire system.",
    protocol: ["Treat health as whole-being capability, not just symptom management", "Address the nervous system: chronic stress dysregulates everything else", "Restore mobility through consistent movement — sedentary work is a health liability", "Seek chiropractic assessment for alignment issues contributing to pain and energy loss", "Manage stress at the neurological level: breathwork, movement, sleep, community"],
    sourceRef: "summit-sherry-mcallister-chiropractic",
  },

  {
    id: "fr-119",
    speakerId: "coach-kavita",
    topic: ["relationships", "men-over-40", "love-life", "wholeness"],
    tags: ["kavita", "relationships", "love", "dating", "men", "over-40", "partnership", "wholeness"],
    content: "Coach Kavita Ajlani addresses one of the most ignored dimensions of men health over 40: the quality of their intimate relationships and love life. Most men spend years optimizing their bodies, businesses, and finances — while their love life goes on the back burner. The cost: slower overall success, loneliness, and carrying the weight of life without partnership. The false belief: I just need to achieve more first — the six-pack, the bank account, the house — and then the right relationship will happen. Kavita insight: this postponement delays one of the greatest catalysts for hitting all other goals. Partnership shares the burden and activates purpose. Men in their 40s who are in thriving relationships report better health outcomes, better training consistency, and greater life satisfaction.",
    quote: "Men optimize their bodies and businesses and forget their love lives. Partnership is not a reward for achievement — it is a catalyst for it.",
    protocol: ["Stop using self-development as an excuse to avoid relationships", "Identify where the story of not enough is keeping you from taking action", "Prioritize relationships as a pillar of health — not a reward for physical achievement", "The right partnership amplifies everything: motivation, purpose, accountability, joy", "Being in your masculine means taking action — do not avoid the one area that requires it most"],
    sourceRef: "summit-kavita-relationships",
  },

  {
    id: "fr-120",
    speakerId: "kenneth-swartz",
    topic: ["cellular-health", "oxidative-stress", "longevity"],
    tags: ["ken-swartz", "C60", "carbon-60", "cellular", "oxidative-stress", "longevity", "anti-aging", "energy"],
    content: "Kenneth Swartz, known as Ken the Scientist, came to health and wellness from radiation research and fusion technology. His discovery of C60 (Carbon-60 fullerene) — a spherical molecule of 60 carbon atoms that acts as a powerful antioxidant — emerged from studying radiation protection. The landmark Baati study on rats showed dramatically extended lifespan from C60, with no cancers and no accelerated aging. For men over 40, C60 may support cellular energy production, reduce oxidative stress, and protect mitochondrial function. His broader message: cellular-level interventions — addressing oxidative stress, mitochondrial health, and inflammation — may be the most powerful longevity levers available, operating at a level that conventional supplements do not reach.",
    quote: "Health optimization for men over 40 must eventually address what is happening at the cellular level — oxidative stress, mitochondrial function, and cellular cleanup.",
    protocol: ["Reduce oxidative stress: the root of most cellular aging and chronic disease", "Support mitochondrial health: the powerhouses of your cells determine your energy", "Consider antioxidant interventions that operate at the cellular level", "Combine cellular-level support with foundational lifestyle: sleep, training, nutrition", "Get bloodwork measuring cellular stress markers: hs-CRP, oxidized LDL, homocysteine"],
    sourceRef: "summit-kenneth-swartz-C60",
  },

  {
    id: "fr-121",
    speakerId: "kevin-carr",
    topic: ["training-longevity", "aging-decline", "movement-medicine"],
    tags: ["kevin-carr", "MBSC", "movement-as-medicine", "functional", "training-longevity", "aging", "60-year-olds"],
    content: "Kevin Carr, partner at Mike Boyle Strength and Conditioning and co-founder of the Certified Functional Strength Coach certification, reframes aging for men over 40. Time is undefeated — the body will change. But the type of training controls the slope of decline. His proof: men at MBSC who are 60 years old and feel better than they did in their 20s. The reason: the period of their 30s and 40s when they were not exercising was their actual downturn. When they returned to intelligent training with a well-rounded program, they saw a peak later in life. Even simple interventions — lifting twice a week for 30 minutes, adding plyometric and power work, adding flexibility work — can level off the decline and allow continued improvement into the 50s and 60s.",
    quote: "The men who feel best at 60 are not genetic outliers. They are men who trained intelligently and consistently when it mattered.",
    protocol: ["Accept that some biological decline is inevitable — then train to control the slope", "Start with two 60-minute well-rounded sessions per week if returning to training", "Include plyometric and power work even in beginners — it is critical for long-term athleticism", "Do not train like you did in college: the science has advanced significantly", "Consistency over years is the only thing that produces the 60-year-olds who feel 20"],
    sourceRef: "summit-kevin-carr-MBSC",
  },

  {
    id: "fr-122",
    speakerId: "phil-derue",
    topic: ["complete-performance", "never-stop-moving", "multidimensional-fitness"],
    tags: ["phil-derue", "daru-strong", "UFC", "performance", "complete", "never-stop", "psychological", "spiritual"],
    content: "Phil DeRue, founder of Daru Strong Performance and coach to UFC champions Dustin Poirier and Edson Barbosa, defines true performance for men over 40. True performance is never just physical. It is neurological, physiological, behavioral, spiritual, and psychological — all operating together. The men who age best are those who never stop. They never stop moving. They never stop evolving. They never stop trying to elevate and adapt. Phil protocol for men over 40 who have lost their physical routine: identify your limiters through assessment, set clear goals, find a guide who can organize your approach, and execute with maximal intent — while understanding that 100% readiness is never required to show up.",
    quote: "True performance is neurological, physiological, behavioral, and spiritual. Never just physical. Never stop moving — that is the most important rule.",
    protocol: ["Assess your limiters first: where are your movement, strength, and mobility deficiencies?", "Set performance-based goals with your coach or training partner", "You do not need to be 100% to train — train to the readiness you have that day", "Never stop moving: the men who stay athletic into their 60s and 70s simply kept going", "Include rotation, lateral movement, jumping, and sprinting — train like an athlete"],
    sourceRef: "summit-phil-derue-daru-strong",
  },

  {
    id: "fr-123",
    speakerId: "stefanos-sifandos",
    topic: ["inner-work", "emotional-health", "vulnerability", "men"],
    tags: ["stefanos", "emotional", "vulnerability", "inner-work", "suppression", "intimacy", "men-over-40"],
    content: "Stefanos Sifandos challenges men over 40 to confront the most neglected dimension of their health: the inner world. Most men have been conditioned since childhood to suppress emotions, not show weakness, and push through everything. The result over decades: significant emotional and relational disconnection, an inability to be seen, accepted, or vulnerable, and overcompensation through external achievement. The outward success masks a foundational emptiness. Stefanos makes the case that this suppression is not just emotionally costly — it directly impacts physical health through chronic stress, inflammation, and hormonal disruption. The most complete men over 40 have done inner work: processing grief, reconnecting with their emotional experience, and building genuine intimacy.",
    quote: "No matter how strong you look on the outside, if you have not done the inner work, life will eventually catch up to you. That is not weakness — it is truth.",
    protocol: ["Acknowledge that emotional suppression has a physical cost: chronic stress, inflammation, hormonal disruption", "Identify the masks you wear: the achiever, the provider, the strong silent type — what is underneath?", "Find one safe relationship — therapist, coach, or trusted friend — to practice vulnerability", "The greatest men over 40 are multidimensional: physically strong AND emotionally real", "Begin inner work with honest journaling: what am I actually feeling, and what have I been avoiding?"],
    sourceRef: "summit-stefanos-inner-work",
  },

  {
    id: "fr-124",
    speakerId: "kelsey-dunbar",
    topic: ["resilience", "mental-fitness", "recovery", "second-half"],
    tags: ["suffer-to-tougher", "resilience", "mental-fitness", "addiction", "recovery", "second-half", "men-over-40"],
    content: "Kelsey Dunbar and Marc Rogala, co-founders of Suffer to Tougher, make the case that the second half of life — especially for men who have hit the wall — can be more powerful than the first. Marc story: a highly successful insurance executive with a family of six, he battled addiction after being prescribed pain pills following a neck injury. At 45, after multiple overdoses and being found clinically dead, he got sober. By 52, his message is clear: the worst suffering of your life does not have to define you — it can forge you. Men over 40 who carry the heaviest burdens are not broken. They are overloaded. The difference between men who survive that overload and those who do not is the decision to build mental fitness alongside physical fitness.",
    quote: "Your suffering is not your story. It is your forge. The men who come through the hardest years often become the strongest versions of themselves.",
    protocol: ["Mental fitness must be trained alongside physical fitness — they are equally important", "Identify the load you are carrying: career, family, financial, health — name it all", "Build resilience tools before the crisis hits: breathwork, community, journaling, movement", "Recovery from the worst moments is possible — Marc got sober at 45 and transformed his life", "The struggle you are enduring is building exactly the strength you need for the next chapter"],
    sourceRef: "summit-suffer-to-tougher",
  },

  {
    id: "fr-125",
    speakerId: "jason-brown",
    topic: ["full-body-training", "program-design", "recovery", "over-40"],
    tags: ["jason-brown", "full-body", "training", "split", "over-40", "recovery", "frequency", "time-efficient"],
    content: "Jason Brown of Jason Brown Coaching presents the most underused training structure for men over 40: full body training split. Most men believe full-body training is for beginners. This is wrong. Jason, coaching for over 20 years, fully converted to full-body training in his late 30s. The advantages: all movement patterns can be hit in two to three sessions per week, recovery is dramatically improved compared to body-part splits, it is highly adaptable for all training levels, and it leaves time for the things that matter more than strength training itself — mobility, cardiovascular work, and recovery. For busy men over 40 who do not have a surplus of time, full-body training is the highest-efficiency structure available.",
    quote: "Full body training is not for beginners. It is for serious men over 40 who respect their recovery and want maximum results in minimum sessions.",
    protocol: ["Two to three full body strength sessions per week cover all movement patterns", "Include all foundational patterns each session: squat, hinge, push, pull, lunge, carry", "Full-body splits are significantly easier to recover from than body-part splits", "The time saved allows investment in mobility, cardiovascular work, and recovery — which matter more", "Program frequency over volume: more exposures to each pattern produces faster motor skill"],
    sourceRef: "summit-jason-brown-full-body",
  },

  {
    id: "fr-126",
    speakerId: "joe-defranco",
    topic: ["training-longevity-laws", "smart-training", "movement-patterns"],
    tags: ["joe-defranco", "longevity", "if-it-hurts", "no-mandatory-exercises", "training-laws", "smart"],
    content: "Joe DeFranco, legendary strength and conditioning coach, presents his Laws of Training Longevity. Law 1: If it hurts, do not do it. Not the discomfort of a tough set — the physical pain signal of a real problem. Men who ignore that signal and pile on more weight end up with shoulder surgery or six months of PT instead of adjusting the movement and continuing to train. Law 2: There are no mandatory exercises. Unless you are a competitive powerlifter, no single exercise is required. What is required: cover the fundamental movement patterns — upper body push, upper body pull, squat, hinge, lunge, and carry. Find the specific exercise variation that fits YOUR body structure, YOUR limb lengths, YOUR injury history. Force-fitting exercises that do not suit your anatomy is one of the most common causes of injury in men over 40.",
    quote: "If it hurts, do not do it. There are no mandatory exercises. Cover the patterns — not specific exercises. Train for the long game.",
    protocol: ["Law 1: If it hurts, stop that exercise immediately and find a pain-free substitute", "Law 2: No mandatory exercises — choose variations that fit your body structure", "Cover movement patterns: push, pull, squat, hinge, lunge, carry — choose your best exercise for each", "Never force a barbell squat or deadlift if your anatomy does not suit it — trap bar is a great alternative", "The goal is to train consistently for the rest of your life — every decision must serve that goal"],
    sourceRef: "summit-joe-defranco-laws",
  },

  {
    id: "fr-127",
    speakerId: "joyce-somers",
    topic: ["gut-health", "leaky-gut", "inflammation", "mood"],
    tags: ["joyce-somers", "gut", "gut-health", "serotonin", "dopamine", "leaky-gut", "inflammation", "first-brain"],
    content: "Joyce Somers, holistic gut health practitioner, reveals why gut health is the root cause of symptoms most men over 40 attribute to aging. The gut produces the majority of the body serotonin and dopamine — your primary mood and motivation neurotransmitters. Brain fog, low motivation, mood dysregulation, and depression can begin in the gut, not the brain. Leaky gut — where the gut lining becomes permeable — allows pathogens and toxins to enter the bloodstream, triggering chronic systemic inflammation. That chronic inflammation is the root cause of most diseases: Alzheimer s, cardiovascular disease, metabolic dysfunction. Joyce approach: heal the gut first. Reduce heavy metals, microplastics, mold exposure, and ultra-processed foods while rebuilding the microbiome.",
    quote: "Most men over 40 are treating symptoms in their brain, hormones, and body that actually started in their gut. Fix the gut and fix everything.",
    protocol: ["Get tested for gut permeability and microbiome dysbiosis — the root of systemic inflammation", "Eliminate the primary gut disruptors: sugar, alcohol, ultra-processed foods, and seed oils", "Reduce environmental toxins: filter water for microplastics and heavy metals, reduce mold exposure", "Rebuild the microbiome with diverse vegetables, fermented foods, and quality probiotics", "Serotonin and dopamine are produced in the gut — good mood requires a healthy gut"],
    sourceRef: "summit-joyce-somers-gut",
  },

  {
    id: "fr-128",
    speakerId: "dr-justin-farnsworth",
    topic: ["athleticism", "power-training", "multi-directional-movement"],
    tags: ["justin-farnsworth", "rebuilt", "athleticism", "power", "multi-directional", "physical-therapy", "sport-of-life"],
    content: "Dr. Justin Farnsworth, founder of Rebuilt and doctor of physical therapy, makes the case that every man should remain athletic forever — not just in the gym, but in the sport of life. His critical insight: 95% of people never sprint after age 30. Not after 40 — after 30. And when those same sedentary men at 45 or 46 try to sprint in response to a challenge, they tear their hamstring or calf. Not because of age — because their body was never prepared. Multi-directional movement — lateral shuffles, deceleration, jumping, throwing, changing direction — is the specific training that keeps the body athletic, reduces stiffness, and builds the capacity for real-world demands. The body that can do these movements is the body that never feels old.",
    quote: "You should be athletic forever. Not just strong. Athletic. The sport of life demands it — getting off the ground, chasing your kids, getting out of the way of a car.",
    protocol: ["Include multi-directional movements in every training week: lateral, rotational, deceleration", "Progress sprint training gradually: do not attempt a full sprint after years of inactivity", "Jump training: box jumps, broad jumps, or bounds 1-2x per week for power preservation", "Throw: med ball throws against a wall train rotational power and neural quickness", "The athlete does not retire at 40 — he adapts his training and keeps his athleticism"],
    sourceRef: "summit-justin-farnsworth-rebuilt",
  },

  {
    id: "fr-129",
    speakerId: "keith-bozeman",
    topic: ["integrated-health", "physician-led", "longevity", "personalized-medicine"],
    tags: ["keith-bozeman", "medgevity", "physician", "integrated", "longevity", "bloodwork", "team"],
    content: "Keith Bozeman, founder of Medgevity, built his platform after a frustrating journey with conventional medicine. His vision: an integrated medical team — a board-certified physician plus an exercise physiologist plus a registered dietitian — working together to give men what they actually need: someone spending 363 days a year helping them stay well, not just treating them the 2 days they are sick. The breakthrough insight: information overload is not the problem. Integration is. Men have all the data — the bloodwork, the podcasts, the knowledge — but no one connecting it all into a coherent strategy. Information without integration is wasted. The modern man over 40 needs a system, not just more information.",
    quote: "Men do not have an information problem. They have an integration problem. You need a team that connects your bloodwork to your training to your nutrition to your lifestyle.",
    protocol: ["The goal is a proactive health team, not just a reactive doctor", "Get a comprehensive annual panel: integrate the results with your training and nutrition decisions", "If your doctor does not discuss lifestyle medicine proactively, find one who does", "Consider working with an integrated health team: MD plus exercise physiologist plus dietitian", "Information without integration is worthless — build a system that connects your health data to action"],
    sourceRef: "summit-keith-bozeman-medgevity",
  },

  {
    id: "fr-130",
    speakerId: "luka-hocevar",
    topic: ["athletic-training", "sprinting", "never-stop-moving"],
    tags: ["luka-hocevar", "vigor-ground", "athletic", "sprint", "power", "over-40", "60-year-olds"],
    content: "Luka Hocevar, founder of Vigor Ground Fitness and Performance and former professional basketball player, delivers a startling statistic: after age 30, 95% of people never sprint again. Not because their body cannot do it — because they stopped doing it, their body lost the capacity, and then attempting it became genuinely dangerous. Men who continue to sprint, jump, throw, and move in multiple directions into their 40s and 50s maintain athleticism that creates measurable real-world advantages: hiking challenging terrain, keeping up with their children, responding to emergencies. His 60-year-old clients who sprint and jump stand out everywhere they go — people their age cannot understand how they still move that way. The answer: they never stopped.",
    quote: "After age 30, 95% of people never sprint again. Do not be in that 95%. The body that sprints is the body that stays young.",
    protocol: ["Sprint training protocol: start with acceleration work before full-speed sprinting", "Progress: hill sprints before flat sprints — safer for hamstrings and Achilles", "Include lateral and deceleration movements: shuffles, backpedals, cone work", "Jump training: progress from static to dynamic, from double-leg to single-leg", "Never stop training athleticism — regress the movements if needed but never eliminate them"],
    sourceRef: "summit-luka-hocevar-vigor",
  },

  {
    id: "fr-131",
    speakerId: "summit-expert",
    topic: ["tricon-training", "hypertrophy", "CNS", "sarcopenia"],
    tags: ["tricon", "triple-contraction", "sarcopenia", "CNS", "joint-health", "hypertrophy", "over-40"],
    content: "The Tricon Training system (triple contraction) was developed specifically for the physiological reality of men over 40. Three factors compound with age: sarcopenia (3-8% muscle loss per decade after 30, accelerating in the 40s), increased joint wear and tear from decades of use, and slower CNS recovery. Heavy lifting in the one-to-five rep range overstimulates the CNS and degrades cartilage, ligaments, and tendons without providing additional muscle-building stimulus beyond what moderate loads already provide. Tricon solves this by maximizing muscular tension without maximum mechanical load. The three contraction phases create deep muscular fatigue and hypertrophic stimulus using 50-70% of normal working weight while protecting joints and the CNS. Men over 40 can build and maintain significant muscle with this approach.",
    quote: "Sarcopenia starts at 30 and accelerates at 40. You cannot stop it by lifting heavy and hoping for the best. You stop it by creating maximum tension intelligently.",
    protocol: ["Tricon set: explosive phase, isometric hold phase, slow tension phase — 3 reps each", "Use 50-70% of working weight — focus entirely on muscular tension quality", "Perform 3-4 Tricon sets per major muscle group per session", "Never train to failure on Tricon — stop with 1-2 reps left for CNS protection", "Include Tricon in 1-2 sessions per week, heavier compound work in others"],
    sourceRef: "summit-tricon-training",
  },

  {
    id: "fr-132",
    speakerId: "dr-mike-fortunato",
    topic: ["hormone-optimization", "testosterone", "beyond-normal"],
    tags: ["fortunato", "optimize-MD", "testosterone", "normal-vs-optimal", "hormone", "fog", "drive"],
    content: "Dr. Mike Fortunato, founder of Optimize MD Health, was himself a board-certified anesthesiologist whose health was deteriorating in his mid-30s. Chronic pain, severe fatigue, brain fog, zero libido, and complete loss of drive — and every colleague told him his labs were normal. He eventually found a hormone optimization clinic, started testosterone therapy, and began to glimpse the version of himself that had gone missing. His mission: help men understand the critical difference between normal and optimal. The standard laboratory reference range for testosterone is built from a population that includes unhealthy, sedentary men. A man can be within the normal range and feel terrible — because he is comparing to a population average, not to what a thriving 45-year-old man should feel like. Optimal is the target.",
    quote: "You are not supposed to feel foggy, tired, and without drive at 40. Normal is not the same as optimal. You deserve optimal.",
    protocol: ["The normal reference range is built from a sick population — optimal is a different target", "Request: total testosterone, free testosterone, SHBG, estradiol, LH, FSH, prolactin, PSA", "Work with a physician who understands optimal ranges, not just normal ranges", "Do not accept feeling terrible as the natural outcome of aging", "Track symptoms as a second data point alongside bloodwork: energy, libido, drive, clarity"],
    sourceRef: "summit-mike-fortunato-optimize",
  },

  {
    id: "fr-133",
    speakerId: "dr-perry-nicholson",
    topic: ["lymphatic-health", "chronic-pain", "movement-variety"],
    tags: ["perry-nicholson", "lymph-doctor", "stop-chasing-pain", "lymphatic", "inflammation", "chronic-pain", "movement"],
    content: "Dr. Perry Nicholson, known as the Lymph Doctor, is a chiropractic physician who helps men overcome chronic pain and inflammation through the lens most physicians completely ignore: the lymphatic system. The lymphatic system is the body primary drainage network — it removes waste, toxins, and inflammatory byproducts from tissue. When it becomes sluggish from chronic sitting, poor movement variety, and dehydration, systemic inflammation rises and chronic pain accumulates. His message for men over 40: stop going from zero to one hundred miles an hour when returning to exercise — that is how most chronic injuries begin. And stop doing the same movements repeatedly. Micro-trauma from repetitive motion accumulates over years before expressing as sudden injury.",
    quote: "The lymphatic system is the drainage network that keeps inflammation in check. Move it. Vary your movements. Drink water. That is your anti-inflammatory protocol.",
    protocol: ["Support lymphatic drainage: walk 30+ min daily, move in multiple directions, avoid prolonged sitting", "Vary your movement: the same repetitive pattern for years creates micro-trauma", "When returning to exercise: progress from zero to thirty, not from zero to one hundred", "Body weight training is highly effective for lymphatic stimulation and anti-inflammatory effect", "Get bloodwork for systemic inflammation markers: hs-CRP, ESR, white blood cell count"],
    sourceRef: "summit-perry-nicholson-lymph",
  },

  {
    id: "fr-134",
    speakerId: "rustin-webb",
    topic: ["mobility-fourth-pillar", "flexibility-vs-mobility", "movement-quality"],
    tags: ["rustin-webb", "mobility-recipe", "fourth-pillar", "flexibility", "mobility", "kinesiology", "movement"],
    content: "Rustin Webb, founder of the Mobility Recipe with a masters in kinesiology and 25 years in the fitness industry, identifies the missing fourth pillar of fitness that most men and even most fitness professionals ignore. The standard three pillars of fitness are strength, cardio, and nutrition. But these three collapse without the fourth: mobility — the full control of your body through its complete range of motion. Not flexibility, which is passive. Mobility is active control. Adults who skip mobility training are loading dysfunctional movement patterns and wondering why they get hurt. The mobility recipe: address mobility as a non-negotiable fourth pillar alongside your strength, cardio, and nutrition.",
    quote: "Strength, cardio, and nutrition all collapse without mobility as the fourth pillar. You cannot load a movement pattern you do not control.",
    protocol: ["Treat mobility as the fourth pillar: equally important as strength, cardio, and nutrition", "Distinguish mobility from flexibility: flexibility is passive range, mobility is active control", "Assess your mobility baseline: can you squat deeply, reach overhead, rotate fully?", "Start with the mobility foundations: hip, shoulder, and thoracic spine control", "Mobility work before strength work: if you cannot control it unloaded, do not load it"],
    sourceRef: "summit-rustin-webb-mobility",
  },

  {
    id: "fr-135",
    speakerId: "dr-mike-t-nelson",
    topic: ["supplements", "metabolic-flexibility", "coaching-leverage"],
    tags: ["mike-nelson", "supplements", "metabolic-flexibility", "FLEX-diet", "coaching-leverage", "protein", "sleep"],
    content: "Dr. Mike T. Nelson, PhD in exercise physiology and creator of the FLEX Diet Certification, introduces the concept of coaching leverage for men trying to make smart supplement and lifestyle decisions. The framework: rate every intervention by both physiological impact AND ability to actually implement it. Sleep scores 9-10 for physiology but a 1-2 for most people ability to change. Protein scores high on both — people enjoy the idea of eating more to get leaner. Supplements score moderate on physiology but very high on implementation (take two pills). This explains why protein optimization and quality supplementation are better starting points than trying to perfect sleep first. His supplement philosophy: supplements are supplements — they enhance an already solid foundation, they do not replace it.",
    quote: "The most physiologically powerful intervention is useless if the person will not do it. Coaching leverage is the product of both effectiveness AND implementation.",
    protocol: ["Start with protein optimization: high impact, easy to implement", "Sleep is the highest-leverage physiological intervention but lowest in implementation ease", "Supplements work best as a stack on top of training, protein, and basic recovery", "Use metabolic flexibility training: your body should be able to use both glucose and fat as fuel", "The best supplement protocol: nail the basics first, then layer targeted support"],
    sourceRef: "summit-mike-nelson-FLEX",
  },

  {
    id: "fr-136",
    speakerId: "dr-tom-cowan",
    topic: ["holistic-medicine", "scientific-literacy", "questioning-conventional"],
    tags: ["tom-cowan", "holistic", "alternative", "natural-health", "challenge", "conventional", "evidence", "question"],
    content: "Dr. Tom Cowan, alternative medicine physician and prolific author, brings a provocative perspective to the Men Over 40 Summit: scientific literacy requires investigating claims, not accepting them. His message for men over 40 navigating the overwhelming world of health advice: learn to ask whether the evidence actually supports the claim before accepting it as truth. Modern healthcare has produced tremendous benefits, but it has also produced a culture of assumption — where men accept diagnoses and protocols without asking how the underlying claims were established. For men over 40, the practical application is: do your own research, question conventional test interpretations, explore holistic and functional medicine approaches alongside conventional care, and do not accept a normal lab result as equivalent to optimal health.",
    quote: "Scientific literacy means investigating the claim, not accepting authority. Ask how they know what they claim to know — especially about your own health.",
    protocol: ["Question the evidence behind health claims: how was this established and who funded it?", "Explore functional and integrative medicine alongside conventional medicine", "Holistic health approaches can complement standard care for chronic conditions", "Optimal health requires active investigation, not passive compliance with standard recommendations", "Read widely from multiple perspectives and build your own evidence-based framework"],
    sourceRef: "summit-tom-cowan-holistic",
  },


  {
    id: "fr-137",
    speakerId: "mollie-eastman",
    topic: ["sleep-optimization", "sleep-quality", "circadian-rhythm"],
    tags: ["mollie-eastman", "sleep", "sleep-is-a-skill", "circadian", "optimization", "men-over-40", "recovery", "HRV"],
    content: "Mollie Eastman, founder of Sleep Is A Skill, makes the case that sleep is not a fixed biological trait — it is a skill that can be developed, optimized, and dramatically improved regardless of age. Her message to men over 40: sleep is the single lever with the highest carryover to every other health goal. More than training. More than nutrition. More than supplements. Yet it is consistently the most deprioritized pillar. The average doctor has approximately two hours of training in sleep — even at top medical schools — so systemic gaps in sleep medicine mean most men never receive a proper sleep assessment. Mollie works with high performers and men over 40 to treat sleep as a performance skill: understanding sleep architecture, circadian biology, light exposure, temperature, and nervous system regulation. Men who optimize sleep first see improvements in hormone levels, recovery, body composition, mood, and cognitive clarity — often within two weeks.",
    quote: "Sleep is a skill. And like any skill, the more you learn about it and apply what you learn, the better you get. Most men are sleeping by accident. We want you sleeping by design.",
    protocol: ["Treat sleep as a performance skill — something to study, measure, and improve", "Track sleep with a wearable to get objective data on sleep stages, HRV, and recovery", "Address morning light: get outside within 30 minutes of waking to anchor your circadian clock", "Build a wind-down routine 60-90 minutes before bed: dim lights, no screens, cool temperature", "If you are going through a difficult sleep period, protect your belief that this can improve — the mindset matters as much as the tactics"],
    sourceRef: "summit-mollie-eastman-sleep",
  },

  {
    id: "fr-138",
    speakerId: "mike-ranfone",
    topic: ["nutrition", "performance", "strength", "longevity"],
    tags: ["mike-ranfone", "ranfone-training", "nutrition", "performance", "strategy-vs-tactics", "men-over-40", "sustainable"],
    content: "Mike Ranfone, founder of Ranfone Training Systems and high-performance strength and conditioning coach, distinguishes between tactics and strategy in men's nutrition after 40. The fitness industry sells tactics: the six-week program, the elimination diet, the macro split. What men over 40 need is a strategy: a sustainable nutritional framework designed to support six decades of health, not six weeks of results. Mike has trained elite athletes and everyday men for over 20 years, and his consistent finding is that the men who win long-term are the ones who build nutritional habits that work alongside their real life — not habits that require their life to stop. His core nutritional framework for men over 40: adequate protein at every meal, whole foods as the majority of intake, strategic meal timing around training, and enough flexibility to be sustained for years without burnout.",
    quote: "The industry sells you tactics. What you need is a strategy. A strategy is something that supports the goal for six decades, not six weeks.",
    protocol: ["Build a nutritional strategy, not a diet: something sustainable for years not weeks", "Hit protein targets at every meal: aim for 40-50g per meal for men over 40", "Whole foods should make up 80% of intake: processed food is the primary nutritional problem", "Time your largest meals around your training windows for better body composition", "Stop searching for the perfect diet: the best diet is the one you can sustain long-term"],
    sourceRef: "summit-mike-ranfone-nutrition",
  },

  {
    id: "fr-139",
    speakerId: "marc-rodriguez",
    topic: ["leadership", "longevity", "competition", "example"],
    tags: ["marc-rodriguez", "leadership", "legacy", "longevity", "Hyrox", "competition", "4-pillars", "example"],
    content: "Marc Rodriguez, leadership coach and competitive Hyrox athlete at 47, reframes longevity for men over 40 through the lens of legacy and leadership. His four pillars of longevity: sleep, stress management, exercise, and nutrition — but his framework goes deeper than physical optimization. The men over 40 who are doing the work are not just improving themselves. They are changing the trajectory of their lineage — their children, grandchildren, and the people who watch them. Leading by example is the most powerful health intervention available. Marc now competes in Hyrox at 47, has two grandchildren, and uses competition as a vehicle to demonstrate that the second half of life can be the best half. His message: your example is the most powerful motivational tool you have. When people see a 47-year-old competing, they believe they can too.",
    quote: "At 47 with two grandchildren, I am competing at Hyrox. Not to win. To show people that showing up is possible. Your example is someone else's permission slip.",
    protocol: ["Adopt the four pillars: sleep, stress, exercise, nutrition — but lead with them, not just follow them", "Define yourself as the example: who in your circle is watching and waiting for your permission to start?", "Compete or pursue physical challenges: entry into races, events, or competitions builds accountability", "Tie fitness to leadership: health is not just personal — it is your legacy and your influence", "You may be beaten in competition but the act of showing up changes the people around you"],
    sourceRef: "summit-marc-rodriguez-leadership",
  },

  {
    id: "fr-140",
    speakerId: "lance-short",
    topic: ["resilience", "BJJ", "surgery-recovery", "never-stop"],
    tags: ["lance-short", "BJJ", "jiu-jitsu", "resilience", "open-heart", "surgery", "movement", "65", "never-stop"],
    content: "Lance Short is 65 years old, a Brazilian Jiu-Jitsu practitioner, former military officer, black belt in karate, and certified dance instructor who refuses to define himself by his medical history. After multiple surgeries including a fused ankle, Lance underwent open heart surgery at 58. Most men at that point stop. Lance did the opposite: he stepped onto the BJJ mats for the first time. Today he continues training and competing. His guiding principle: movement is life. Everything alive moves. When you stop moving, the decline accelerates. His primary motivation for maintaining his physical capability: he became a father later in life. His son is 18 and Lance is 65. He needed to be able to show up — to throw a frisbee, race his son, climb a mountain, do whatever his son wanted to do. The outcome of physical training is not aesthetics. The outcome is capability for the people you love.",
    quote: "Movement is life. Everything alive moves. Stop moving and it is over. I had open heart surgery at 58 and I started BJJ. That is the answer.",
    protocol: ["Movement is non-negotiable: find the movements you can do post-surgery or injury and do them", "Use your family as the specific motivation: show up for your children and grandchildren", "Physical training after 60 is about capability, not aesthetics: can you move, react, and play?", "BJJ and martial arts provide physical training AND mental challenge AND community at any age", "The recovery mindset: every challenge is an opportunity to discover what you can do, not proof of what you cannot"],
    sourceRef: "summit-lance-short-BJJ",
  },

  {
    id: "fr-141",
    speakerId: "frank-rich",
    topic: ["addiction-recovery", "mens-identity", "pornography", "nervous-system"],
    tags: ["frank-rich", "rebuild-man", "addiction", "recovery", "porn", "nervous-system", "identity", "men-over-40"],
    content: "Frank Rich, founder of Rebuild Man, addresses one of the most hidden health crises affecting men over 40: pornography addiction framed as a nervous system and brain-based challenge rather than a willpower failure. With six years of work with high performers — successful entrepreneurs, professional athletes, surgeons — Frank found a consistent pattern: external achievement masked deep disconnection in intimate and sexual relationships. Men who had built businesses, raised families, and maintained physical fitness were experiencing profound disconnection from their partners. His reframe: this is not a moral failure. It is a neurological pattern formed early and reinforced for decades. The brain can be rewired. Identity can be rebuilt. Men who complete his program consistently report experiencing genuine intimacy — often for the first time in decades despite long marriages and families.",
    quote: "This is not a discipline problem. It is a nervous system and brain challenge. The men who break free do not use willpower. They rewire the system.",
    protocol: ["Reframe the challenge: this is a neurological pattern, not a character flaw", "Understand the dopamine disruption: porn rewires the brain reward system over years of use", "Recovery requires nervous system regulation: breathwork, movement, community, and identity work", "Intimate reconnection is the real reward: men who recover report experiencing genuine connection for the first time", "Seek structured coaching support — willpower alone almost never resolves a deeply wired neurological pattern"],
    sourceRef: "summit-frank-rich-rebuild-man",
  },

  {
    id: "fr-142",
    speakerId: "eddie-panting",
    topic: ["purpose", "mental-strength", "redemption", "discipline"],
    tags: ["eddie-panting", "good-life-fitness", "combat-sports", "prison", "purpose", "mental-health", "redemption", "discipline"],
    content: "Eddie Panting, regional manager at GoodLife Fitness, combat sports coach, and lifelong student of philosophy, brings one of the most powerful redemption stories to the Men Over 40 Summit. After time spent in federal prison and years of adversity, Eddie rebuilt his life entirely through fitness, discipline, purpose, and philosophy. His anchor text: Man's Search for Meaning by Viktor Frankl — a book he has read over 50 times and recommends to every man he coaches. His core message: men must find a purpose beyond themselves. Not a job. Not an income. A genuine reason to become who they were always meant to be. For men over 40, this often means confronting years of misaligned identity — knowing what you did not want to be but not yet knowing what you want to become. The process of eating well, training consistently, and building physical discipline opens mental and identity doors that nothing else opens.",
    quote: "Find your purpose. Not your job. Your purpose. The men who transform their health are the men who discovered something worth getting strong for.",
    protocol: ["Read Man's Search for Meaning by Viktor Frankl — it reframes suffering as the fuel for meaning", "Recognize the identity you do not want to be — this negative clarity becomes positive direction", "Physical discipline opens mental doors: start with the body and the mind follows", "Purpose outside yourself is the foundation of mental strength: who are you becoming this for?", "Redemption is available to every man: your past does not define your future unless you let it"],
    sourceRef: "summit-eddie-panting-purpose",
  },

  {
    id: "fr-143",
    speakerId: "robert-linkel",
    topic: ["resistance-training", "sarcopenia", "older-adults", "rucking"],
    tags: ["robert-linkel", "training-older-adult", "resistance-training", "sarcopenia", "rucking", "cancer", "hip-replacement", "over-40"],
    content: "Robert Linkel, director of education at Fitbody Bootcamp and founder of TrainingTheOlderAdult.com, speaks with unique credibility on training through adversity. He underwent thyroid cancer surgery and had both hips replaced at age 36 — giving him first-hand experience of the rehabilitation and retraining journey that most of his older clients face. His five resistance training strategies for men over 40: first, recognize the sarcopenia problem (3-8% muscle loss per decade after 30 accelerates as you age). Second, prioritize resistance training with key focus lifts. Third, build intelligent program design — frequency and progressive overload without overtraining. Fourth, apply recovery strategies actively. Fifth, address foundational health hygiene including sleep, nutrition, and foot care. His standout point: muscle mass is the single most important variable for longevity and quality of life. The more muscle you have, the longer and better you live.",
    quote: "Muscle mass is probably the most important thing in all of this. The more muscle mass you have, the better quality of life and the longer you are going to live.",
    protocol: ["Prioritize resistance training as the non-negotiable foundation of all health goals after 40", "Program for frequency: 3 resistance training sessions per week hit every major muscle group", "Include rucking (loaded walking) as a low-impact way to build strength and conditioning simultaneously", "Recovery is training: sleep, soft tissue work, and stress management are part of the program", "Do not wait until 60 to start — the men who thrive at 70 are the ones who built muscle at 50"],
    sourceRef: "summit-robert-linkel-older-adults",
  },

  {
    id: "fr-144",
    speakerId: "roderick-lambert",
    topic: ["mitochondria", "fat-loss", "cellular-health", "metabolic-health"],
    tags: ["roderick-lambert", "mitochondria", "weight-loss", "energy", "fat-adaptation", "circadian", "fasting", "cellular"],
    content: "Roderick Lambert presents the root cause framework for midlife weight gain, fatigue, and brain fog that most conventional approaches miss entirely: mitochondrial dysfunction. If men over 40 are doing everything right — training, reducing calories, eating healthy — and still struggling with stubborn weight gain, low energy, and brain fog, the answer is not working harder. The answer is fixing the system that creates energy in the first place. Mitochondria are the cellular powerhouses that produce all metabolic energy. As they decline in density and efficiency through lifestyle damage, the body struggles to produce energy, burns glucose inefficiently, stores fat more readily, and loses the ability to adapt to metabolic demands. The fix: food quality over quantity, fat adaptation to restore metabolic flexibility, meal timing with fasting windows, circadian rhythm alignment through light exposure management, and daily movement especially walking.",
    quote: "Real fat loss after 40 is not about eating less and training harder. It is about fixing the system that creates energy in the first place. Fix your mitochondria, fix everything.",
    protocol: ["Understand mitochondrial dysfunction as the root cause of fatigue, belly fat, and brain fog", "Prioritize food quality over caloric restriction: nutrients fuel mitochondrial function", "Work toward fat adaptation: reduce sugar and refined carbs to allow the body to burn fat efficiently", "Use fasting windows (16:8) to trigger cellular repair and metabolic reset", "Manage light exposure: morning sunlight, evening darkness, no blue light 90 minutes before bed to protect circadian function", "Walk 30+ minutes daily: walking is one of the most powerful mitochondrial health tools available"],
    sourceRef: "summit-roderick-lambert-mitochondria",
  },


  {
    id: "fr-145",
    speakerId: "dr-marco-lujic",
    topic: ["nutrition", "hormones", "longevity", "medicine", "performance"],
    tags: ["nutrition strategy", "age management", "physician", "hormone optimization", "men over 40", "longevity", "preventive medicine", "RTS Health"],
    content: `Dr. Marco Lujic is a physician, age management specialist, and co-founder of RTS Health. After training and working as a general surgeon, Marco shifted from treating disease to preventing it — helping men take control of their health before problems start. He combines a medical background with an athletic mindset (former Division I athlete) and works at the intersection of medicine and performance, using advanced diagnostics, hormone optimization, and lifestyle strategies.

NUTRITION AS FOUNDATIONAL STRATEGY: The single most important nutritional principle is having a strategy that supports your goal. 'Flavor of the month' diets are tactical, not strategic — they work for 6-week programs but not for the 6 decades you want to pay dividends. Most men confuse tactics with strategy.

CORNERSTONE FRAMEWORK: Like a head cornerstone in architecture, nutrition is the base upon which everything else is built. Most physicians are never exposed to nutrition in medical school — this is a system failure. When you combine medical diagnostics with nutrition strategy and strength coaching, the results are transformative.

WHAT WORKS FOR MEN OVER 40: (1) Prioritize protein — muscle mass preservation becomes critical after 40 as muscle loss accelerates. (2) Understand your metabolic baseline through diagnostics (bloodwork, hormones, inflammation markers). (3) Reduce ultra-processed foods and seed oils, which drive chronic inflammation. (4) Time your nutrition around your training. (5) Get your hormones checked — low testosterone, insulin resistance, and thyroid dysfunction all show up as 'I'm just getting older' symptoms that are treatable.

PREVENTIVE vs REACTIVE MEDICINE: The conventional healthcare system waits for disease. Age management medicine intervenes earlier — identifying risk markers 10-15 years before disease manifests. Men over 40 should get comprehensive bloodwork including testosterone (total + free), SHBG, estradiol, thyroid panel, inflammation markers (hsCRP, homocysteine), metabolic panel, and nutrient levels (Vitamin D, B12, magnesium).`,
    quote: `There has never in the history been a time where dietary nutritional needs were more paramount. Nutrition is the head cornerstone — it is the strongest part of the foundation.`,
    protocol: [
      `Get comprehensive bloodwork: testosterone (total + free), SHBG, estradiol, thyroid, hsCRP, metabolic panel`,
      `Establish a nutrition strategy aligned to your goal — not just a 6-week tactic`,
      `Prioritize protein at every meal: minimum 0.8-1g per pound of bodyweight for muscle preservation`,
      `Eliminate ultra-processed foods and industrial seed oils as the baseline first step`,
      `Time carbohydrates around training windows; reduce them during sedentary periods`,
      `Work with a physician who integrates performance and medicine — not just disease management`,
    ],
    sourceRef: "Men Over 40 Health Summit – Mike Ranfone & Dr. Marco Lujic Session",
  },
  {
    id: "fr-146",
    speakerId: "marcello-fragrance",
    topic: ["mindset", "confidence", "identity", "lifestyle", "sensory wellness"],
    tags: ["fragrance", "sensory wellness", "confidence", "personal identity", "lifestyle", "presence", "self-care", "men over 40"],
    content: `Marcello is a niche fragrance collector, educator, and founder of the Niche Fragrance Collector YouTube channel and KEM Fragrance Tours. His masterclass at the Men Over 40 Health Summit covers the power of scent as a wellness and confidence tool — a dimension of self-care most men completely overlook.

WHY FRAGRANCE MATTERS FOR MEN OVER 40: 'Perfume is the mystery of you.' Scent creates instant impressions and signals presence, confidence, and attention to detail. A man who smells exceptional projects authority and sophistication. Activating all senses is part of living fully — most men deprioritize this completely.

FRAGRANCE TYPES (Oil Concentration Guide):
• Eau de Cologne (3-5% oil): Bright, effervescent, citrus-forward. Lasts 4-5 hours. Best for casual use.
• Eau de Toilette (10-15% oil): Office-appropriate, 5-6 hours, moderate complexity.
• Eau de Parfum (15-23% oil): Recommended for most men. Complex, 12+ hours, multiple evolving notes.
• Extrait de Parfum (23-30%+): Extremely dense and complex, longest lasting, most expensive.
• Attar/Oil Perfume: No alcohol, oil-based, dabbed on heat spots — lasts 24-48 hours.

THE FRAGRANCE WARDROBE CONCEPT: Just as you have different clothing for different occasions, you should have different fragrances — a daily office scent, a formal/event scent, a casual weekend scent, and a date/intimate scent. This is a sign of intentional living and elevated presence.

APPLICATION TECHNIQUE: Always spray on skin (not clothing) for heat activation. Target pulse points — neck, wrists, inner elbows, chest. The fragrance evolves as skin temperature rises. A proper fragrance opens with top notes, evolves through heart notes, and dries down to base notes over hours.

SENSORY WELLNESS INSIGHT: Smell is tied directly to the limbic system — the brain's emotional center. Scent triggers memory and emotion faster than any other sense. Wearing intentional fragrance is a daily ritual that grounds you in the present, elevates confidence, and signals to yourself and others that you take your presentation and experience of life seriously.`,
    quote: `If we couldn't smell, our lives would be black and white. When you activate your nose, all of a sudden your life becomes technicolor.`,
    protocol: [
      `Build a fragrance wardrobe: one for work, one for formal occasions, one for weekends, one for intimacy`,
      `Choose Eau de Parfum as your primary fragrance for best complexity and longevity (12+ hours)`,
      `Spray on skin (not clothing) — always on pulse points: neck, wrists, inner elbows, chest`,
      `Try an oil-based attar for 24-48 hour wear on heat spots without reapplication`,
      `Use fragrance as a daily intentional ritual — choose your scent based on the day ahead, like choosing your mindset`,
      `Learn to identify top/heart/base notes — this trains sensory awareness and presence`,
    ],
    sourceRef: "Men Over 40 Health Summit – Marcello, Niche Fragrance Collector Masterclass",
  },

  {
    id: "fr-147",
    speakerId: "funk-roberts",
    topic: ["sleep", "recovery", "hormones", "testosterone"],
    tags: ["Alpha Sleep Philosophy", "sleep rules", "circadian rhythm", "testosterone", "deep sleep", "REM", "men over 40"],
    content: `THE ALPHA SLEEP PHILOSOPHY — Over 40 Alpha Sleep Challenge (Funk Roberts)

CORE PHILOSOPHY PILLARS:
1. SLEEP IS YOUR #1 RECOVERY WEAPON: Sleep is the absolute foundation for fat loss, testosterone production, and overall health. You cannot out-train, out-eat, or out-supplement poor sleep. If your sleep is broken, your testosterone is broken.

2. DEEP SLEEP IS THE ANABOLIC HORMONE SUPERCHARGER: ~90% of daily testosterone is produced during deep and REM sleep (first 3-5 sleep cycles). This is when the body releases Growth Hormone, DHEA, and Luteinizing Hormone (LH) to rebuild muscle, burn belly fat, and restore drive.

3. SLEEP IS A RELATIONSHIP, NOT A TRANSACTION: Great sleep is the natural outcome of how you structure your day, your light exposure, and your nervous system regulation — not willpower.

4. RHYTHM IS RECOVERY: The body thrives on a predictable 24-hour circadian rhythm. Consistency is far more important than perfection. When your body knows exactly when to power up and wind down, you build natural sleep pressure that produces deep rest.

5. AIM FOR RESTORATIVE SLEEP: Men over 40 should achieve 3-4 hours of restorative sleep (Deep + REM) within 7-9 hours total. Quality over quantity.

THE 9 FUNK ROBERTS ALPHA SLEEP RULES:
Rule 1 — Anchor Your Wake Time & Morning Light: Pick a wake time and keep it within 30-minute variation. Get 5-10 minutes of natural sunlight within 30-60 minutes of waking to anchor circadian rhythm.

Rule 2 — Stimulus Control: The bed is for sleep and sex ONLY. Never scroll, email, or watch TV in bed.

Rule 3 — The 20-Minute Rule: If awake and frustrated for 20 minutes, get up. Go to a low-light calm zone (read fiction or deep breathe) and only return when sleepy.

Rule 4 — Master the Alpha Wind-Down Routine: Sleep starts 30-60 minutes before your head hits the pillow. Shut down all screens and blue light 60 minutes before bed. Switch to dim lamps or red lights.

Rule 5 — Optimize Thermal & Light Environment: Keep bedroom at 60-67°F (16-19°C). Make the room pitch black. Eliminate all electronics and LED lights.

Rule 6 — Time Your Nutrition & Caffeine: Cut off ALL caffeine by 1-2 PM. Finish last large meal 2-3 hours before bed. If needed, small protein + healthy fat snack (Greek yogurt, walnuts) to stabilize blood sugar.

Rule 7 — Use the 4-2-6-2 Breathing Protocol: Activate parasympathetic system before bed. For 5-10 minutes: Inhale 4 sec → Hold 2 sec → Exhale 6 sec → Hold 2 sec. Lowers cortisol, boosts melatonin.

Rule 8 — Stop Trying to Sleep (Paradoxical Intention): Remove sleep performance anxiety. Instead, gently aim to stay awake in a relaxed state. Tell yourself: 'I give myself permission to rest.'

Rule 9 — Bad Night Bounce-Back Protocol: Do NOT sleep in, do NOT over-caffeinate, do NOT take long naps. Wake at normal time, get morning sunlight, limit naps to 15-20 min before 2 PM, resume normal rhythm.`,
    quote: `Sleep is your #1 recovery weapon. You cannot out-train, out-eat, or out-supplement poor sleep. If your sleep is broken, your testosterone is broken.`,
    protocol: [
      `Anchor wake time daily within 30-minute variation — no exceptions`,
      `Get 5-10 min natural sunlight within 60 min of waking — anchors circadian rhythm`,
      `Shut down screens and blue light 60 min before bed — switch to dim/red light`,
      `Keep bedroom 60-67°F, pitch black, zero electronics`,
      `Cut all caffeine by 1-2 PM`,
      `Do 4-2-6-2 nasal breathing for 5-10 min before sleep (4 in, 2 hold, 6 out, 2 hold)`,
      `If awake 20+ min in bed, get up — calm zone only until sleepy`,
      `After bad night: wake at normal time, get sunlight, max 20 min nap before 2 PM`,
    ],
    sourceRef: "Funk Roberts — Over 40 Alpha Sleep Challenge Program",
  },
  {
    id: "fr-148",
    speakerId: "funk-roberts",
    topic: ["sleep", "recovery", "protocols"],
    tags: ["sleep reset", "7 minute protocol", "wake up at night", "cortisol", "men over 40 sleep"],
    content: `THE 7-MINUTE SLEEP RESET PROTOCOL — For Men Over 40 Who Wake Up at Night

WHY MEN WAKE UP AND CAN'T FALL BACK ASLEEP:
• Cortisol Spike — stress hormone wakes you and keeps mind racing
• Blood Sugar Drop — low blood sugar triggers adrenaline release
• Poor Sleep Environment — light, temperature, or discomfort disrupts deep sleep
• Overthinking & Anxiety — brain stays in problem-solving mode

THE 7-MINUTE SLEEP RESET PROTOCOL:

Step 1 (0-10 sec) — STOP Looking at the Clock: Looking at the clock triggers stress. Accept you woke up and move into reset mode. Mindset: 'It's okay — I'm going to use this time to get even deeper sleep.'

Step 2 (1 min) — 4-7-8 Breathing Method: Inhale 4 sec, Hold 7 sec, Exhale 8 sec. Shifts nervous system into relaxation mode. Activates parasympathetic system (rest & digest).

Step 3 (1 min) — Full-Body Relaxation Scan: Mentally scan head to toe releasing tension. Focus on relaxing jaw, shoulders, and lower back first. Breathe slowly.

Step 4 (2 min) — Legs-Up Pose: Lay on back, legs up against wall. Hold 2 min with slow breathing. Reduces blood flow to brain — lowers anxiety and cortisol. Forces nervous system shift from fight-or-flight.

Step 5 (2 min) — Reverse Sleep Countdown: Count backward from 100 slowly. Imagine sinking into bed with each number. If mind drifts, gently return to counting. Distracts brain from overthinking, slows brain wave activity.

BONUS — Sleep Reset Drink (if woke from hunger/blood sugar drop):
Mix: Warm water + tart cherry juice (1 oz) + magnesium powder (200-400mg) + pinch of sea salt. Tart cherry naturally boosts melatonin; magnesium relaxes muscles and nervous system; salt stabilizes blood sugar.`,
    quote: `The 7-Minute Sleep Reset guides you back into deep sleep within minutes by calming the nervous system, resetting melatonin, and shifting from fight-or-flight to rest mode.`,
    protocol: [
      `STOP: Do not look at clock — accept wakeup, shift to reset mode`,
      `BREATHE: 4-7-8 method — 4 inhale, 7 hold, 8 exhale for 1 minute`,
      `SCAN: Full-body tension release head to toe, 1 minute`,
      `LEGS-UP: Back on floor, legs up wall for 2 minutes — reduces cortisol`,
      `COUNTDOWN: Count backward from 100 slowly, sinking into bed`,
      `IF HUNGRY: Warm water + tart cherry juice + magnesium powder + sea salt`,
    ],
    sourceRef: "Funk Roberts — The 7-Minute Sleep Reset Protocol",
  },
  {
    id: "fr-149",
    speakerId: "funk-roberts",
    topic: ["sleep", "recovery", "nutrition", "cortisol"],
    tags: ["bad night sleep", "fix sleep", "bounce back", "fat burning", "cortisol", "circadian reset"],
    content: `HOW TO FIX SLEEP AFTER A BAD NIGHT & STILL BURN FAT — 6-Step Protocol

WHAT A BAD NIGHT OF SLEEP DOES:
Spikes cortisol (stress hormone), slows metabolism, increases sugar/carb cravings, lowers testosterone and recovery, disrupts fat-burning rhythm. One bad night won't ruin progress — unless you let it spiral.

THE 6 STEPS:

Step 1 — WAKE UP ON SCHEDULE (No Sleeping In): Stick to your usual wake-up time even after 4-5 hours. Sleeping in delays circadian rhythm, throws off melatonin, makes next night worse. Immediately open curtains or go outside — sunlight in eyes resets sleep-wake cycle.

Step 2 — MOVE FIRST THING: 5-10 min of walking, mobility, or light stretching. Add deep nasal breathing to lower cortisol. Bonus: go barefoot outside (grounding). Shakes off sleep inertia and improves fat metabolism even when tired.

Step 3 — HYDRATE & STABILIZE BLOOD SUGAR: After poor sleep, body becomes more insulin resistant and craves carbs. Drink 16-24 oz water with electrolytes or pink salt. Eat protein + healthy fat breakfast (eggs + avocado, protein shake + almond butter). Avoid sugary coffee, toast, cereal, or high-carb meals.

Step 4 — PRIORITIZE FAT-BURNING, NOT EXHAUSTING WORKOUTS: Avoid high-intensity HIIT or heavy lifting (further spikes cortisol). Instead do fat-burning metabolic circuit, recovery band session, or walk.

Step 5 — STRATEGIC NAPPING (Optional): 10-20 min power nap before 2 PM ONLY. Any later disrupts nighttime sleep. Do NOT nap if you have insomnia — it reduces sleep pressure needed to sleep at night.

Step 6 — PREPARE BETTER SLEEP TONIGHT: Cut caffeine after 12 PM. Extra magnesium (400-500mg glycinate). Begin wind-down 90 min earlier. Room to 65°F. Do 10 min 4-7-8 breathing before sleep.`,
    protocol: [
      `Wake at normal time regardless of hours slept — no sleeping in`,
      `Get sunlight immediately upon waking to reset circadian rhythm`,
      `5-10 min gentle movement first thing: walk, mobility, or stretch`,
      `Drink 16-24 oz water + electrolytes; eat protein + fat breakfast`,
      `Avoid HIIT and heavy lifting after bad sleep — fat-burn walk or mobility instead`,
      `Power nap: 10-20 min ONLY before 2 PM if needed`,
      `Tonight: cut caffeine after noon, take extra magnesium, begin wind-down 90 min earlier`,
    ],
    sourceRef: "Funk Roberts — 6 Steps to Fix Sleep After a Bad Night",
  },
  {
    id: "fr-150",
    speakerId: "funk-roberts",
    topic: ["sleep", "hormones", "testosterone", "recovery"],
    tags: ["restorative sleep", "deep sleep", "REM sleep", "testosterone production", "growth hormone", "sleep quality"],
    content: `RESTORATIVE SLEEP: WHY QUALITY BEATS QUANTITY FOR MEN OVER 40
(Funk Roberts — Over 40 Alpha Podcast Episode 192)

THE CORE TRUTH: You can sleep 8 hours and wake up exhausted. Hours alone don't matter — the type of sleep does. For men over 40, the goal is achieving 3-4 hours of RESTORATIVE sleep (Deep Sleep + REM) within a 7-9 hour window.

WHAT RESTORATIVE SLEEP DOES:
• Repairs muscle tissue and releases Growth Hormone
• Regulates and produces testosterone
• Burns fat during deep sleep stages
• Strengthens immune system
• Processes memories and regulates emotions
• Cleans waste products (including amyloid plaques) from the brain

THE TWO CRITICAL STAGES:

DEEP SLEEP (Slow Wave Sleep): The physically restorative stage. This is when Growth Hormone is released, muscle is rebuilt, immune function is restored, and blood pressure drops. Men over 40 naturally get less deep sleep — and this is why they feel older.

REM SLEEP (Rapid Eye Movement): The mentally restorative stage. Processes emotions, consolidates memory, regulates mood and testosterone. Most men are chronically REM-deficient without knowing it.

HOW SLEEP DEPRIVATION DESTROYS MEN OVER 40:
• Just 1 week of sleep deprivation = testosterone levels of a man 10-15 years older
• Poor sleep raises cortisol → cortisol kills testosterone and causes belly fat storage
• Disrupts ghrelin (hunger up) and leptin (fullness down) — impossible to lose weight
• Impairs glucose control → more fat storage, especially visceral abdominal fat

HOW TO MAXIMIZE RESTORATIVE SLEEP:
1. Protect your first 90-minute sleep cycle (deepest sleep) — go to bed at the same time nightly
2. Avoid alcohol within 3 hours of bed — it kills REM sleep even if it makes you drowsy
3. Keep bedroom cold (60-67°F) — core temp drop triggers deep sleep
4. Magnesium glycinate (400mg) before bed enhances deep sleep quality
5. Don't exercise intensely within 2-3 hours of bed — raises core temp
6. Track your sleep quality, not just duration — use HRV or sleep score apps`,
    quote: `Not all sleep is created equal. For men over 40, quality matters even more than quantity — specifically, the restorative deep sleep and REM stages where testosterone, growth hormone, and recovery happen.`,
    protocol: [
      `Target 3-4 hours of restorative (Deep + REM) sleep within 7-9 hours total`,
      `Consistent bedtime protects the critical first 90-min deep sleep cycle`,
      `No alcohol within 3 hours of bed — it destroys REM sleep`,
      `Bedroom at 60-67°F — core temp drop is the trigger for deep sleep`,
      `Magnesium glycinate 400mg before bed to enhance deep sleep quality`,
      `Track sleep quality (not just hours) using HRV or sleep score`,
    ],
    sourceRef: "Funk Roberts — Over 40 Alpha Podcast Episode 192: Restorative Sleep",
  },
  {
    id: "fr-151",
    speakerId: "funk-roberts",
    topic: ["breathwork", "stress", "recovery", "mindset"],
    tags: ["21-day breathwork challenge", "breathing techniques", "diaphragmatic breathing", "cortisol reduction", "men over 40"],
    content: `21-DAY ALPHA BREATHWORK CHALLENGE — Complete Program Guide
By Funk Roberts & Over 40 Alpha

PROGRAM PURPOSE: A 21-day step-by-step breathwork program for men over 40, 50, 60, and 70. Reduce anxiety, stress, and cortisol; improve relaxation, focus, and concentration; potentially increase testosterone levels. Master 7 powerful breathwork techniques and build a daily practice.

WHY BREATHWORK IS ESSENTIAL AFTER 40:
• Reduces Anxiety & Stress: Activates parasympathetic nervous system — calms the mind
• Improves Relaxation: Allows recovery from the pressures of daily life
• Decreases Cortisol: High cortisol from chronic stress is the testosterone killer — breathwork lowers it
• Boosts Energy: Improved oxygenation = more mitochondrial energy production
• Enhances Focus: Better oxygen delivery to the brain = sharper mental clarity
• Supports Hormones: Lower cortisol = higher testosterone — the connection is direct

THE 7 BREATHING TECHNIQUES IN THE 21-DAY CHALLENGE:

1. DIAPHRAGMATIC BREATHING (Days 1-3): Deep belly breathing that activates the vagus nerve. Inhale fully into the belly (not chest), hold briefly, exhale slowly. 5-10 min daily.

2. BOX BREATHING (Days 4-6): Inhale 4 sec, Hold 4 sec, Exhale 4 sec, Hold 4 sec. Used by Navy SEALs for stress management and focus under pressure.

3. 4-7-8 BREATHING (Days 7-9): Inhale 4 sec, Hold 7 sec, Exhale 8 sec. Powerful for sleep onset and anxiety reduction.

4. TACTICAL BREATHING (Days 10-12): Combat breathing to lower heart rate rapidly. Inhale 4 sec, Hold 4 sec, Exhale 4 sec. Used before high-performance situations.

5. WIM HOF POWER BREATHING (Days 13-15): 30-40 rapid deep breaths, then exhale and hold. Increases oxygen, alkalizes blood, reduces inflammation, boosts energy.

6. COHERENCE BREATHING (Days 16-18): 5 seconds in, 5 seconds out. Creates heart-rate variability coherence between heart and brain — the ideal recovery state.

7. INTEGRATED DAILY PRACTICE (Days 19-21): Combine techniques — morning power breathing, afternoon box breathing, evening 4-7-8 for sleep.`,
    quote: `Breathwork may be one of the most underutilized tools for men over 40. It directly reduces cortisol, improves testosterone, and gives you a recovery tool that requires no equipment and zero cost.`,
    protocol: [
      `Day 1-3: Diaphragmatic breathing — 5-10 min of deep belly breathing daily`,
      `Day 4-6: Box breathing — 4 sec in, 4 hold, 4 out, 4 hold for stress/focus`,
      `Day 7-9: 4-7-8 breathing — 4 in, 7 hold, 8 out — best for sleep and anxiety`,
      `Day 10-12: Tactical breathing — inhale 4, hold 4, exhale 4 — before pressure situations`,
      `Day 13-15: Wim Hof — 30-40 rapid deep breaths then hold exhale`,
      `Day 16-18: Coherence breathing — 5 sec in, 5 sec out — for HRV and recovery`,
      `Day 19-21: Integrate all — morning power, afternoon box, evening 4-7-8`,
      `Minimum daily: 5 minutes of breathwork — the ROI is enormous`,
    ],
    sourceRef: "Funk Roberts — 21-Day Alpha Breathwork Challenge Program Guide",
  },
  {
    id: "fr-152",
    speakerId: "funk-roberts",
    topic: ["breathwork", "recovery", "performance", "mindset"],
    tags: ["Wim Hof", "power breathing", "oxygen", "cold exposure", "energy", "inflammation", "men over 40"],
    content: `WIM HOF POWER BREATHING FOR MEN OVER 40

BACKGROUND: The Wim Hof Method, developed by Dutch extreme athlete Wim Hof, uses cycles of deep inhalations followed by passive exhalations, ending with breath holds. This is one of the most powerful performance and recovery tools available to men over 40.

PHYSICAL BENEFITS:
• Increased Oxygen: Deep breathing significantly increases O2 levels — enhances performance and endurance
• Enhanced Energy: Oxygen boost reduces fatigue
• Improved Circulation: Increased blood flow improves cardiovascular health
• Pain Reduction: Endorphin release reduces pain perception
• Reduced Inflammation: Alkalizes the blood, reducing chronic systemic inflammation

MENTAL BENEFITS:
• Reduced Stress and Anxiety: Activates PNS (parasympathetic nervous system)
• Improved Mental Clarity: Better oxygen delivery to the brain
• Increased Willpower and Discipline: Mastering cold exposure builds mental toughness
• Better Mood: Triggers endorphin and dopamine release

THE WIM HOF POWER BREATHING PROTOCOL:

ROUND 1-3 (repeat for 3-4 rounds):
1. Inhale FULLY through the nose/mouth — expand chest and belly completely
2. Exhale PASSIVELY — just release, no forced exhale
3. Repeat rapidly 30-40 times
4. After last exhale — HOLD the exhale (lungs empty) as long as comfortable
5. When you need to breathe — take one big recovery breath, hold 15 sec
6. Exhale, rest 30 sec — then begin next round

IMPORTANT SAFETY: Always practice seated or lying down. NEVER near water. You may feel tingling, light-headedness, or euphoria — this is normal.

COLD EXPOSURE COMBINATION: After Wim Hof breathing, the body is primed for cold exposure. End showers with 30-90 seconds cold. This combination maximally activates the sympathetic nervous system then parasympathetic recovery — the ultimate performance cycle.

RESOURCES (Funk Roberts' Over 40 Alpha):
• Video: Wim Hof Power Breathing Guided Session
• Audio: Power Breathing Guided Session
• Bonus: Power Breathing Benefits for Men Over 40 (mp3)`,
    protocol: [
      `Sit or lie down — NEVER stand or near water`,
      `Take 30-40 rapid, full breaths — in through nose, passive exhale`,
      `After last exhale — hold breath (empty lungs) as long as comfortable`,
      `Recovery breath: inhale fully, hold 15 sec, then exhale`,
      `Repeat for 3-4 rounds total`,
      `Combine with 30-90 sec cold shower after breathing for maximum benefit`,
      `Practice 3-4x per week — morning is ideal`,
    ],
    sourceRef: "Funk Roberts — Wim Hof Power Breathing for Men Over 40",
  },
  {
    id: "fr-153",
    speakerId: "funk-roberts",
    topic: ["stress", "cortisol", "breathwork", "recovery", "testosterone"],
    tags: ["stress reduction pillar", "cortisol", "fight or flight", "nervous system", "4-2-6-2 breathing", "cold therapy", "journaling"],
    content: `THE STRESS REDUCTION PILLAR — Calm the Nervous System, Lower Cortisol, Reclaim Control

THE PROBLEM: Most men over 40 are living in constant 'fight or flight' mode. Work pressure, financial responsibilities, family obligations, poor sleep, social media keep the body in chronic stress. When stress remains elevated too long:
• Cortisol increases → Testosterone decreases
• Belly fat increases → Recovery suffers
• Sleep quality declines → Energy drops
• Motivation decreases → Anxiety and irritability rise

THE SOLUTION: Not to eliminate stress — but to manage and RECOVER from it.

THE STRESS REDUCTION PILLAR RULES:

Rule #1 — PRACTICE BREATHWORK DAILY: Breathwork is the fastest way to shift from stressed to relaxed.
Daily Minimum: 5 minutes. Protocol: 4-2-6-2 Breathing:
• Inhale through nose 4 sec → Hold 2 sec → Exhale through nose 6 sec → Hold 2 sec

Rule #2 — COLD THERAPY (1-3x per week): Cold showers or cold water immersion activate the vagus nerve, reduce inflammation, and teach the nervous system to tolerate stress. Start with 30-60 sec cold at end of shower.

Rule #3 — LIMIT SCREEN/NEWS EXPOSURE: Set phone-free periods. No news first 30 min of morning. No screens 60 min before bed. Constant digital input keeps the nervous system activated.

Rule #4 — JOURNALING (5-10 min daily): Brain dump thoughts before bed — offloads mental load from the prefrontal cortex. Write 3 things you're grateful for + 1 intention for tomorrow.

Rule #5 — NATURE & MOVEMENT: Walking in nature (even 10-15 min) lowers cortisol measurably. Combine with grounding (barefoot on grass/earth).

Rule #6 — CONNECTION & COMMUNITY: Isolation is a cortisol driver. Regular connection with purpose-aligned men, brotherhood, and meaningful relationships is physiologically protective.`,
    protocol: [
      `Daily: 5 min 4-2-6-2 breathing (4 in, 2 hold, 6 out, 2 hold)`,
      `1-3x/week: Cold shower 30-60 sec at end — activates vagus nerve`,
      `No phone/news for first 30 min of morning — protect your nervous system`,
      `No screens 60 min before bed`,
      `5-10 min journaling before bed: brain dump + 3 gratitudes + 1 tomorrow intention`,
      `10-15 min nature walk — measurably lowers cortisol`,
      `Maintain brotherhood and meaningful male connection`,
    ],
    sourceRef: "Funk Roberts — Stress Reduction Pillar Rules",
  },
  {
    id: "fr-154",
    speakerId: "funk-roberts",
    topic: ["supplements", "vitamins", "nutrition", "hormones"],
    tags: ["vitamins men over 40", "essential vitamins", "magnesium", "vitamin D", "zinc", "omega-3", "B vitamins"],
    content: `BEST VITAMINS FOR MEN OVER 40 — Complete Guide
(Funk Roberts — Over 40 Alpha Podcast Episode 188)

THE NON-NEGOTIABLE VITAMIN FOUNDATION FOR MEN OVER 40:

1. VITAMIN D3 + K2 (5,000-10,000 IU D3 with 100-200mcg K2):
Critical for testosterone production, bone density, immune function, mood, and cardiovascular health. Most men over 40 are severely deficient. D3 without K2 can cause calcium to deposit in arteries — always pair them. Test your levels annually (optimal: 60-80 ng/mL).

2. MAGNESIUM GLYCINATE (400-500mg before bed):
The mineral almost every man is deficient in. Required for 300+ enzymatic reactions. Directly involved in testosterone production. Magnesium glycinate is the most bioavailable form — better absorbed, doesn't cause digestive issues. Also improves sleep quality dramatically.

3. OMEGA-3 FISH OIL (2-4g EPA/DHA daily):
Reduces systemic inflammation (the root cause of most age-related decline), supports brain function, reduces triglycerides, improves joint health, and enhances heart health. Take with meals containing fat.

4. ZINC (25-40mg daily):
Essential for testosterone synthesis — zinc deficiency directly causes testosterone drop. Also critical for immune function, wound healing, and prostate health. Zinc picolinate or gluconate are best absorbed forms. Take with food to prevent nausea.

5. B-COMPLEX VITAMINS:
B12 (especially methylcobalamin), B6, and folate are critical for energy metabolism, nervous system, and red blood cell production. B12 absorption declines significantly with age. Many men are functionally deficient even with normal blood tests. Methylated forms (methylcobalamin, methylfolate) bypass MTHFR gene variants that prevent conversion.

6. VITAMIN C (500-1,000mg):
Reduces cortisol response post-exercise, supports immune function, collagen synthesis for joint health, and acts as an antioxidant protecting testosterone-producing Leydig cells.

7. ASHWAGANDHA (300-600mg KSM-66 extract):
The most evidence-backed adaptogen for men over 40. Reduces cortisol by 25-30%, directly supports testosterone production, improves sleep quality, and builds stress resilience.

8. CREATINE MONOHYDRATE (3-5g daily):
One of the most researched and proven supplements. Builds strength and muscle, supports brain health, improves power output, and helps counter age-related muscle loss (sarcopenia).`,
    quote: `Most men over 40 are walking around vitamin D, magnesium, zinc, and omega-3 deficient — and wondering why they feel like crap, have low testosterone, and can't sleep.`,
    protocol: [
      `Vitamin D3 (5,000-10,000 IU) + K2 (100-200mcg) — take with fat-containing meal`,
      `Magnesium Glycinate (400-500mg) — before bed for sleep and testosterone`,
      `Omega-3 Fish Oil (2-4g EPA/DHA) — with meals`,
      `Zinc Picolinate (25-40mg) — with food to prevent nausea`,
      `B-Complex with methylated forms (methylcobalamin B12, methylfolate) — morning`,
      `Vitamin C (500-1,000mg) — post-workout to lower cortisol`,
      `Ashwagandha KSM-66 (300-600mg) — morning or before bed`,
      `Creatine Monohydrate (3-5g daily) — any time, consistency matters most`,
    ],
    sourceRef: "Funk Roberts — Podcast Episode 188: Best Vitamins for Men Over 40",
  },
  {
    id: "fr-155",
    speakerId: "navin-khan",
    topic: ["supplements", "nutrition", "performance", "hormones", "recovery"],
    tags: ["supplement stacks", "foundational supplements", "testosterone supplements", "muscle supplements", "fat loss supplements", "Navin Khan", "Rocktomic"],
    content: `COMPLETE SUPPLEMENT STACK GUIDE FOR MEN OVER 40
By Navin Khan — Sports Nutritionist, Exercise Physiologist, Head of R&D at Rocktomic Labs

THE CORE STRUGGLES SUPPLEMENTS ADDRESS AFTER 40:
• Energy crashes from declining testosterone, hydration issues, poor nutrient absorption
• Muscle loss (sarcopenia) — ~1% muscle loss per year after 40 if not actively countered
• Slower recovery — nagging injuries, longer soreness, reduced protein synthesis
• Hormonal shifts — testosterone drops, cortisol rises, insulin sensitivity worsens
• Digestive health — gut function and nutrient absorption decline
• Inflammation & joint pain — stiffness, aches, reduced mobility

THE 5 STACK CATEGORIES:

1. FOUNDATIONAL HEALTH STACK (The Base):
Multivitamin + Vitamin D3K2 + Magnesium → Replaces nutrient gaps that directly impact testosterone, energy, and immune function. Without these cofactors, testosterone production and recovery slow down.
Omega-3s → Fight systemic inflammation, lower triglycerides, keep arteries flexible, enhance hormone receptor function.
Electrolytes/Hydration → Sodium-potassium balance critical for nerve conduction, muscle contraction, blood pressure.

2. HORMONE & TESTOSTERONE STACK:
Ashwagandha KSM-66 (600mg) — reduces cortisol 25-30%, boosts testosterone naturally
Zinc (25-40mg) + Magnesium — direct precursors to testosterone synthesis
Vitamin D3K2 (5,000+ IU) — testosterone production requires adequate Vitamin D
Tongkat Ali (200-400mg) — increases free testosterone by binding SHBG
Fenugreek (500mg) — reduces SHBG, increases free testosterone bioavailability

3. MUSCLE & PERFORMANCE STACK:
Creatine Monohydrate (5g daily) — #1 evidence-backed supplement for strength and muscle
Whey Protein (25-40g post-workout) — complete amino acid profile for muscle protein synthesis
HMB (3g daily) — reduces muscle breakdown, preserves mass during cutting
Beta-Alanine (3.2g) — improves muscular endurance

4. RECOVERY & JOINT STACK:
Collagen Peptides (10-15g) + Vitamin C — joint repair and tendon health
Turmeric/Curcumin (500-1,000mg with piperine) — systemic anti-inflammatory
Glucosamine/Chondroitin — joint cartilage support
MSM (1,000-2,000mg) — reduces joint pain and inflammation

5. FAT LOSS & METABOLIC STACK:
Berberine (500mg 3x daily) — blood sugar regulation, insulin sensitivity (as effective as metformin)
CLA (3g daily) — reduces body fat, preserves lean muscle
Green Tea Extract/EGCG — mild thermogenic, antioxidant protection
Fiber (psyllium husk, 10g) — reduces hunger, stabilizes blood sugar, gut health`,
    protocol: [
      `MORNING: D3K2 + Magnesium + Omega-3 + B-Complex + Ashwagandha`,
      `PRE-WORKOUT: Creatine + Electrolytes`,
      `POST-WORKOUT: Whey Protein (25-40g) + Vitamin C`,
      `WITH DINNER: Zinc + Turmeric/Curcumin + Omega-3`,
      `BEFORE BED: Magnesium Glycinate (400mg) + Collagen Peptides`,
      `DAILY: Berberine with meals if targeting fat loss or blood sugar`,
      `WEEKLY: Audit how you feel — adjust based on energy, recovery, sleep quality`,
    ],
    sourceRef: "Navin Khan / Rocktomic Labs — Over 40 Supplement Coaching Guide",
  },
  {
    id: "fr-156",
    speakerId: "funk-roberts",
    topic: ["supplements", "nutrition", "protein", "muscle"],
    tags: ["protein powder", "whey protein", "Alpha Whey Armor", "clean protein", "muscle building supplements", "soy lecithin"],
    content: `PROTEIN POWDER & CLEAN SUPPLEMENT GUIDE FOR MEN OVER 40
(Funk Roberts — Over 40 Alpha Supplements)

WHY PROTEIN IS THE #1 SUPPLEMENT PRIORITY AFTER 40:
After 40, muscle protein synthesis declines and the anabolic response to protein weakens. To preserve and build muscle you need higher protein intake — 0.8-1.2g per pound of bodyweight daily. Most men don't hit this through food alone. Protein powder fills the gap.

WHAT TO LOOK FOR IN A CLEAN PROTEIN POWDER:
✓ Whey protein isolate or concentrate from grass-fed cows
✓ 25-30g protein per serving
✓ Minimal ingredients — ideally under 10
✓ No artificial sweeteners (sucralose, aspartame, acesulfame K)
✓ No fillers, gums, or unnecessary additives
✓ Digestive enzymes (lactase, protease) for better absorption

WHAT TO AVOID:
✗ Soy lecithin — processed additive with no muscle/recovery benefit, can cause digestive issues
✗ Proprietary blends — hide cheap protein amounts
✗ Mass-market powders with artificial colors and flavors
✗ Cheap protein blends (collagen counted as protein)

FUNK'S ALPHA WHEY ARMOR APPROACH:
Designed specifically for men over 40: cleaner formulation, easier to digest, built for lean muscle, recovery, and hormonal performance. No soy lecithin, no artificial sweeteners, enzyme-enhanced.

SUPPLEMENT Q&A — SOY LECITHIN:
Soy lecithin is added to improve texture and mixability, NOT for health benefit. While it's not highly harmful, it's a processing additive. The concern: many powders containing soy lecithin also have artificial sweeteners and fillers. Men with soy sensitivity should avoid.

PROTEIN TIMING FOR MEN OVER 40:
• 30-40g within 30-60 min post-workout (the muscle protein synthesis window is blunted after 40 — don't skip this)
• Morning: 30-40g at breakfast to stop overnight muscle catabolism
• Before bed: 20-30g casein protein to provide slow-release amino acids overnight`,
    protocol: [
      `Target 0.8-1.2g protein per pound bodyweight daily`,
      `Post-workout: 30-40g whey protein within 30-60 min`,
      `Morning: 30-40g protein at breakfast — stops overnight catabolism`,
      `Pre-sleep: 20-30g casein protein for overnight muscle repair`,
      `Choose protein powders with <10 ingredients, no artificial sweeteners`,
      `Look for digestive enzymes in formula — critical for men over 40's absorption`,
      `Avoid powders with soy lecithin, artificial colors, or proprietary blends`,
    ],
    sourceRef: "Funk Roberts — Protein Powder & Over 40 Alpha Supplement Guide",
  },
  {
    id: "fr-157",
    speakerId: "navin-khan",
    topic: ["supplements", "nutrition", "testosterone", "fat loss", "sleep", "joints"],
    tags: ["supplement stacks by problem", "top 10 struggles men over 40", "low testosterone stack", "belly fat stack", "joint pain stack", "brain fog stack"],
    content: `OVER 40 ALPHA SUPPLEMENT STACKS — BY PROBLEM
(Navin Khan / Rocktomic Labs for Funk Roberts)

TOP 10 STRUGGLES MEN OVER 40 FACE WITH TARGETED SUPPLEMENT STACKS:

1. LOW TESTOSTERONE & HORMONAL IMBALANCE
Stack: Natural testosterone booster (herbs + minerals), Vitamin D3K2, Zinc, Magnesium, Ashwagandha, Tongkat Ali
Goal: Reignite manhood, energy, and confidence

2. LOW ENERGY & CHRONIC FATIGUE
Stack: Adaptogens (Ashwagandha, Rhodiola), B-Complex, CoQ10, Greens/Superfood powder
Goal: Fight fatigue, get all-day energy without coffee crashes

3. BELLY FAT & WEIGHT GAIN
Stack: Omega-3 fish oil, Berberine (blood sugar support), CLA, Thermogenic fat-burner
Goal: Burn stubborn belly fat, improve insulin sensitivity, get leaner

4. POOR SLEEP & RECOVERY
Stack: Magnesium Glycinate, Glycine, GABA, L-Theanine, Melatonin (0.5-1mg low dose)
Goal: Deep restorative sleep for more energy, muscle, and better mornings

5. JOINT PAIN, ACHES & LOSS OF MOBILITY
Stack: Collagen peptides + Vitamin C, Turmeric/Curcumin, MSM, Glucosamine, Omega-3
Goal: Relieve joint pain and move like you did 20 years ago

6. MUSCLE LOSS & STRENGTH (Sarcopenia)
Stack: Whey Protein, Creatine Monohydrate, HMB, Leucine-rich aminos
Goal: Rebuild lost muscle and feel strong again

7. BRAIN FOG & LACK OF FOCUS
Stack: Lion's Mane mushroom, Alpha-GPC, Bacopa, Omega-3 DHA, Ginkgo Biloba
Goal: Boost focus, memory, and mental energy

8. INFLAMMATION & IMMUNE WEAKNESS
Stack: Turmeric/Curcumin (high dose), Vitamin C, Vitamin D3, Quercetin, Zinc
Goal: Reduce systemic inflammation — the root of most age-related decline

9. DIGESTIVE HEALTH & GUT ISSUES
Stack: Probiotic (multi-strain), Prebiotic fiber, Digestive enzymes, L-Glutamine
Goal: Restore gut health — the foundation of nutrient absorption and immunity

10. STRESS & ANXIETY
Stack: Ashwagandha (KSM-66), Rhodiola Rosea, L-Theanine, Magnesium, Phosphatidylserine
Goal: Lower cortisol, regulate stress response, improve mental resilience`,
    protocol: [
      `Identify your #1 struggle first — address it with a targeted 3-4 supplement stack`,
      `Start foundational stack first (D3K2 + Magnesium + Omega-3 + Zinc) before adding targeted`,
      `Low T: Add Ashwagandha KSM-66 + Tongkat Ali + Zinc to foundation`,
      `Sleep issues: Add Magnesium Glycinate + L-Theanine + low-dose melatonin (0.5-1mg)`,
      `Joint pain: Add Collagen + Vitamin C + Turmeric/Curcumin + MSM`,
      `Brain fog: Add Lion's Mane + Alpha-GPC + Omega-3 DHA`,
      `Give any new supplement 4-8 weeks to assess effectiveness`,
    ],
    sourceRef: "Navin Khan / Rocktomic Labs — Over 40 Alpha Supplement Stacks Guide",
  },
  {
    id: "fr-158",
    speakerId: "funk-roberts",
    topic: ["meditation", "mindset", "stress", "recovery"],
    tags: ["meditation for men", "how to meditate", "meditation benefits", "cortisol", "testosterone", "5 minute meditation"],
    content: `MEDITATION FOR MEN OVER 40 — The Complete Framework

WHY MEDITATION IS A PERFORMANCE TOOL FOR MEN:
Meditation isn't mystical or spiritual fluff — it's brain training. Just as lifting weights builds muscle, meditation builds the mental muscle of focus, self-regulation, and stress resilience. For men over 40, it directly lowers cortisol, which means directly supporting testosterone.

THE SCIENCE OF MEDITATION AND MEN'S HEALTH:
• Reduces cortisol and chronic stress response
• Increases gray matter density in the prefrontal cortex (decision-making, focus)
• Decreases amygdala reactivity (fear, anxiety, emotional overreaction)
• Improves heart rate variability — the key marker of recovery capacity
• Reduces systemic inflammation markers (CRP, IL-6)
• Improves sleep quality and testosterone production

5 MYTHS ABOUT MEDITATION (BUSTED):
Myth 1: 'You have to empty your mind' — WRONG. The practice IS noticing thoughts and returning attention. Every redirect is a mental rep.
Myth 2: 'It takes hours a day' — WRONG. 5-10 minutes daily produces measurable brain changes.
Myth 3: 'It's only for spiritual people' — WRONG. Elite athletes, military operators, and CEOs use it.
Myth 4: 'I'm too busy' — WRONG. Men who meditate report getting MORE done with LESS stress.
Myth 5: 'If I fall asleep, I'm doing it wrong' — WRONG. Rest is part of the practice.

THE 5-MINUTE MEDITATION PROTOCOL FOR BUSY MEN:
1. Set a timer for 5 minutes — remove time pressure
2. Sit upright (don't lie down) — alert relaxation
3. Close eyes, take 3 deep breaths to transition
4. Focus on the sensation of breathing at the nostrils or chest
5. When thoughts arise (they will), notice without judgment and return to breath
6. At timer — open eyes, take 1 intentional breath before moving

WHEN TO MEDITATE:
• Morning: Sets calm, focused tone for the day — reduces cortisol spike after waking
• Pre-workout: 5 min focused breathing improves performance and mind-muscle connection
• Post-workout: Accelerates parasympathetic recovery
• Before bed: Most powerful — lowers cortisol, raises melatonin, improves sleep quality`,
    quote: `Meditation is not about becoming a different person. It's about training your awareness and gaining a healthier perspective on yourself. For men over 40, it's the performance tool that makes all other tools work better.`,
    protocol: [
      `Start with 5 minutes daily — morning is ideal`,
      `Sit upright, set a timer, close eyes, take 3 deep breaths`,
      `Focus on breath sensation — nostrils, chest, or belly`,
      `When thoughts arise: notice, don't judge, return to breath (each return IS the practice)`,
      `Build to 10-15 min over 4 weeks`,
      `Pre-bed meditation: specifically lowers cortisol and raises melatonin`,
      `Track consistency for 21 days — the habit forms by day 21`,
    ],
    sourceRef: "Funk Roberts — Meditation for Men Over 40 Framework",
  },
  {
    id: "fr-159",
    speakerId: "funk-roberts",
    topic: ["meditation", "mindset", "recovery", "stress"],
    tags: ["REAL Alpha meditation", "21-day meditation challenge", "loving kindness", "self inquiry", "surrender meditation", "gratitude meditation"],
    content: `THE REAL ALPHA MEDITATION PROGRAMS — Complete Suite

THE 21-DAY ALPHA MEDITATION CHALLENGE:
Funk Roberts' structured 21-day program to build a daily meditation habit. Covers 7 different meditation styles over 3 weeks, building from foundation to mastery.

WEEK 1 — Foundation (Days 1-7): Focused attention meditation. Learning to use the breath as an anchor. 5-10 min sessions. Goal: build the daily habit and understand the basic technique.

WEEK 2 — Deepening (Days 8-14): Body scan meditation + loving-kindness meditation. Releases held tension in the body. Builds self-compassion and reduces emotional reactivity.

WEEK 3 — Integration (Days 15-21): Visualization + gratitude meditation + open awareness. Using meditation to connect with purpose, vision, and gratitude for life in the second half.

LOVING-KINDNESS MEDITATION PROTOCOL:
1. Close eyes, take 3 deep breaths
2. Bring to mind someone you love easily — feel that warmth
3. Direct these phrases to them: 'May you be happy. May you be healthy. May you be safe. May you live with ease.'
4. Expand to yourself: 'May I be happy. May I be healthy. May I be safe. May I live with ease.'
5. Expand to neutral people, then difficult people, then all beings
Result: Reduces cortisol, increases oxytocin, improves heart health and relationship quality.

SELF-INQUIRY MEDITATION:
Sit quietly and ask: 'Who am I beyond my roles and responsibilities?' Notice the witness behind all thoughts. This practice builds identity stability — crucial for men over 40 navigating life transitions.

SURRENDER MEDITATION:
Actively release control of outcomes during meditation. Breathe in acceptance, breathe out resistance. Statement: 'I release what I cannot control. I act on what I can. I trust the process.'

GRATITUDE MEDITATION:
Spend 5 min mentally reviewing 3 specific things you're grateful for — vivid and detailed, not generic. Gratitude activates the prefrontal cortex and reduces the brain's default threat-detection mode.

POSITIVE PSYCHOLOGY MODULE (Funk Roberts):
8-week framework covering: optimism training, resilience building, strength identification, positive relationships, mindfulness and flow, finding meaning and purpose in the second half of life.`,
    protocol: [
      `21-Day Challenge: 5-10 min daily — track every session`,
      `Week 1: Focused attention on breath (5-10 min)`,
      `Week 2: Body scan + loving-kindness meditation`,
      `Week 3: Visualization + gratitude + open awareness`,
      `Loving-kindness: 5 min — expand warmth from loved one → self → all`,
      `Gratitude meditation: 3 specific vivid gratitudes for 5 min daily`,
      `Surrender meditation: breathe in acceptance, breathe out resistance`,
    ],
    sourceRef: "Funk Roberts — 21-Day REAL Alpha Meditation Challenge",
  },
  {
    id: "fr-160",
    speakerId: "funk-roberts",
    topic: ["mindset", "meditation", "gratitude", "resilience", "leadership"],
    tags: ["positive psychology", "gratitude practice", "resilience", "optimism", "purpose", "second half of life", "meaning"],
    content: `POSITIVE PSYCHOLOGY & GRATITUDE FOR MEN OVER 40

WHY POSITIVE PSYCHOLOGY MATTERS IN THE SECOND HALF:
Men over 40 often operate from a deficit mindset — focusing on what's lost (youth, hormones, speed, opportunity). Positive psychology retrains the brain to scan for resources, strengths, and possibilities. This isn't toxic positivity — it's neurological reprogramming.

THE SCIENCE:
• Gratitude practice activates the prefrontal cortex — the same region responsible for discipline and decision-making
• Regular gratitude reduces cortisol by up to 23%
• Optimistic men have better cardiovascular outcomes, stronger immune function, and live longer
• Resilience is trainable — it's a skill, not a personality trait

THE 8-WEEK POSITIVE PSYCHOLOGY MODULE:
Week 1: Introduction to positive psychology + personal happiness/wellbeing assessment
Week 2: The science of optimism — cognitive restructuring, reframing negative scenarios
Week 3: Resilience — strategies for bouncing back from adversity; analyze past challenges
Week 4: The Happiness Advantage — using positive emotions to improve performance
Week 5: Strengths and virtues — identify personal strengths, apply in daily life
Week 6: Positive relationships — build and maintain meaningful connections
Week 7: Mindfulness and flow — find your flow activities and daily mindfulness practice
Week 8: Meaning and purpose — craft your personal mission statement for the second half

DAILY GRATITUDE PROTOCOL:
Morning: Write 3 specific things you're grateful for (vivid, not generic). 'I'm grateful for my health' is weak. 'I'm grateful for the fact that I woke up today and my legs work and I can train' is powerful.

Evening: Write 1 thing that went well today + what you did to make it happen. This trains the brain to attribute good outcomes to your actions (internal locus of control).

THE RESILIENCE FRAMEWORK:
1. Acknowledge the difficulty — don't minimize it
2. Identify what you can control vs. what you can't
3. Find the growth opportunity in the challenge
4. Take one concrete action forward
5. Seek support — resilience is not done alone`,
    protocol: [
      `Morning: Write 3 specific, vivid gratitudes — not generic`,
      `Evening: 1 thing that went well + what YOU did to make it happen`,
      `Weekly: Identify your top 3 personal strengths and how you used them`,
      `Monthly: Review and update your personal mission statement`,
      `Daily: Reframe one negative situation — what is it teaching you?`,
      `Build positive male relationships — schedule connection intentionally`,
    ],
    sourceRef: "Funk Roberts — Positive Psychology & Gratitude for Men Over 40",
  },
  {
    id: "fr-161",
    speakerId: "funk-roberts",
    topic: ["sleep", "hormones", "nutrition", "recovery", "testosterone"],
    tags: ["sleep science", "testosterone and sleep", "cortisol sleep", "glucose control sleep", "ghrelin leptin", "sleep deprivation effects"],
    content: `SLEEP SCIENCE FOR MEN OVER 40 — How Sleep Deprivation Destroys Your Body

THE FOUR HORMONAL DISASTERS FROM POOR SLEEP:

1. TESTOSTERONE COLLAPSE:
Research shows that just ONE WEEK of sleep deprivation leaves men with testosterone levels equivalent to a man 10-15 years older. This isn't gradual — it's rapid and severe. Without optimal testosterone, it becomes harder to stay lean, build muscle, and maintain drive and motivation.

2. IMPAIRED GLUCOSE CONTROL:
Poor sleep destroys how your body handles glucose. With good glucose control, carbs go into muscle tissue for repair and energy. With poor sleep-induced insulin resistance, the same carbs go straight to body fat — especially VISCERAL (belly) fat around the organs. This is why many men gain fat rapidly when they're sleep-deprived despite not changing their diet.

3. ELEVATED CORTISOL:
Sleep deprivation directly spikes cortisol — the tissue-breaking, muscle-destroying, fat-storing stress hormone. High cortisol means: muscle loss, belly fat accumulation, testosterone suppression, and impaired recovery. The more you train without adequate sleep, the more cortisol dominates.

4. GHRELIN & LEPTIN DISRUPTION:
Ghrelin (hunger hormone) rises without adequate sleep — you eat more. Leptin (fullness hormone) falls — you don't feel satisfied. The result: uncontrollable hunger, carb cravings, and weight gain that feels impossible to stop.

WHAT 7+ HOURS DOES FOR MEN OVER 40:
• Maximizes testosterone production (90% produced during sleep)
• Maintains insulin sensitivity — carbs fuel muscle, not fat
• Normalizes cortisol — allows recovery and muscle building
• Regulates appetite hormones — makes healthy eating easier
• Releases Growth Hormone — the anti-aging, fat-burning, muscle-building hormone
• Clears amyloid plaques from the brain — reduces Alzheimer's risk`,
    quote: `One week of sleep deprivation leaves men with testosterone levels equivalent to a man 10-15 years older. Sleep is not optional — it's the foundation of your hormonal health.`,
    sourceRef: "Funk Roberts — Sleep & Recovery Science (Pillar 2)",
  },
  {
    id: "fr-162",
    speakerId: "funk-roberts",
    topic: ["training", "nutrition", "sleep", "mindset", "supplements", "lifestyle"],
    tags: ["implementation plan", "Alpha system", "complete program", "men over 40 system", "all pillars", "Second Half Strong"],
    content: `THE SECOND HALF STRONG IMPLEMENTATION PLAN — Complete System Overview
(Funk Roberts — Over 40 Alpha)

THE COMPLETE MEN OVER 40 HEALTH OPERATING SYSTEM:
This is the full integration of all pillars for men who are serious about the second half of their life.

PILLAR 1 — TRAINING:
• Resistance Training: 3-4x per week, compound movements, moderate weight, higher reps (10-15)
• HIIT/Metabolic Training: 2x per week, 20-30 min sessions with full recovery between
• Mobility Work: Daily, 10-15 min — non-negotiable for men over 40
• Key principle: Train smarter, not harder. Consistency over intensity.

PILLAR 2 — NUTRITION:
• Protein: 0.8-1.2g per pound bodyweight — the non-negotiable foundation
• Anti-inflammatory base: whole foods, minimal processed, eliminate seed oils
• Intermittent fasting optional: 16:8 window works well for many men over 40
• Carb timing: cluster carbs around training
• Key principle: Eat to perform, recover, and support hormones — not just for weight

PILLAR 3 — SLEEP:
• Target: 7-9 hours total, 3-4 hours restorative (deep + REM)
• Consistent wake time every day
• Alpha Wind-Down Routine: screens off 60 min before bed, 4-2-6-2 breathing

PILLAR 4 — STRESS MANAGEMENT:
• Daily breathwork: 5 min minimum
• Daily meditation: 5-10 min
• Cold therapy: 1-3x per week
• Journaling: 5 min evening gratitude + brain dump

PILLAR 5 — SUPPLEMENTS:
• Foundation: D3K2 + Magnesium + Omega-3 + Zinc + B-Complex
• Protein: 30-40g whey post-workout and morning
• Performance: Creatine 5g daily
• Testosterone: Ashwagandha + Tongkat Ali (if needed)

PILLAR 6 — MINDSET (REAL Alpha):
• Radical Ownership of all outcomes
• Evolution: constant growth mindset
• Alignment: mind, body, purpose unified
• Leadership: lead yourself and family first

THE DAILY ALPHA ROUTINE:
Morning: Wake anchor time → sunlight → movement → hydrate → protein breakfast → supplements
Midday: Training → post-workout protein → refuel
Evening: Wind-down 60 min before bed → breathwork → meditation/journaling → sleep 10 PM-7 AM target`,
    protocol: [
      `Train 3-4x strength + 2x metabolic per week + daily 10-15 min mobility`,
      `Protein: 0.8-1.2g per pound bodyweight daily`,
      `Sleep: 7-9 hours, consistent wake time, 60-min screen-free wind-down`,
      `Daily: 5 min breathwork + 5 min meditation + evening journaling`,
      `Foundation supplements: D3K2 + Magnesium + Omega-3 + Zinc + B-Complex daily`,
      `Creatine 5g daily + Whey 25-40g post-workout`,
      `REAL Alpha: Radical Ownership → Evolution → Alignment → Leadership`,
    ],
    sourceRef: "Funk Roberts — Second Half Strong Complete Implementation Plan",
  },
];

export const topicIndex: Record<string, string[]> = {
  "30-day": ["fr-073"],
  "4-phase": ["fr-087"],
  "BJJ": ["fr-140"],
  "CNS": ["fr-131"],
  "METCON": ["fr-040"],
  "ROM": ["fr-049"],
  "abdominal": ["fr-074"],
  "accountability": ["fr-018", "fr-028", "fr-062"],
  "adaptogen": ["fr-104"],
  "addiction-recovery": ["fr-141"],
  "adrenal": ["fr-104"],
  "advanced-training": ["fr-041"],
  "adversity": ["fr-067"],
  "aesthetics": ["fr-111"],
  "aging-biology": ["fr-108"],
  "aging-decline": ["fr-121"],
  "aging-mindset": ["fr-114"],
  "ai-coach": ["fr-004"],
  "alignment": ["fr-064", "fr-118"],
  "anti-inflammatory": ["fr-026", "fr-100"],
  "assessment": ["fr-051"],
  "athletic-performance": ["fr-014"],
  "athletic-training": ["fr-130"],
  "athleticism": ["fr-022", "fr-035", "fr-128"],
  "bad-night": ["fr-079"],
  "basics": ["fr-032"],
  "behavior-change": ["fr-018"],
  "beyond-normal": ["fr-132"],
  "biohacking": ["fr-010", "fr-107"],
  "blood sugar": ["fr-105"],
  "blood-sugar": ["fr-075"],
  "body-composition": ["fr-007"],
  "bounce-back": ["fr-079"],
  "brain": ["fr-101"],
  "brain health": ["fr-092", "fr-093"],
  "brain-health": ["fr-108"],
  "breathwork": ["fr-085"],
  "breathwork-protocol": ["fr-087"],
  "brotherhood": ["fr-028", "fr-066"],
  "busy-men": ["fr-089"],
  "busy-schedule": ["fr-036"],
  "cancer-survivor": ["fr-109"],
  "cardiovascular": ["fr-024", "fr-102", "fr-105"],
  "cellular-health": ["fr-120", "fr-144"],
  "chiropractic": ["fr-118"],
  "chronic-pain": ["fr-133"],
  "circadian-rhythm": ["fr-082", "fr-137"],
  "coaching": ["fr-003", "fr-018", "fr-072"],
  "coaching-leverage": ["fr-135"],
  "coaching-philosophy": ["fr-004"],
  "cognitive": ["fr-101"],
  "cold-exposure": ["fr-086"],
  "community": ["fr-028", "fr-066"],
  "competition": ["fr-139"],
  "complete-performance": ["fr-122"],
  "conditioning": ["fr-042"],
  "confidence": ["fr-046"],
  "connection": ["fr-066"],
  "consistency": ["fr-068", "fr-096"],
  "continuous-improvement": ["fr-063"],
  "core-training": ["fr-037"],
  "cortisol": ["fr-094", "fr-099"],
  "creatine": ["fr-098"],
  "cutting-body-fat": ["fr-074"],
  "daily practice": ["fr-096"],
  "daily routine": ["fr-095"],
  "daily-mobility": ["fr-047"],
  "daily-practice": ["fr-045"],
  "diabetes-prevention": ["fr-075"],
  "digestion": ["fr-103"],
  "direction": ["fr-057"],
  "discipline": ["fr-031", "fr-055", "fr-060", "fr-064", "fr-142"],
  "eating": ["fr-026"],
  "eating-guidelines": ["fr-072"],
  "eating-lifestyle": ["fr-070"],
  "eccentric-training": ["fr-116"],
  "emotional-health": ["fr-123"],
  "energy": ["fr-033", "fr-104"],
  "evidence": ["fr-084"],
  "evolution": ["fr-063"],
  "example": ["fr-065", "fr-139"],
  "family-health": ["fr-009"],
  "family-purpose": ["fr-106"],
  "fat loss": ["fr-105"],
  "fat-loss": ["fr-007", "fr-009", "fr-016", "fr-040", "fr-074", "fr-144"],
  "fathers-health": ["fr-106"],
  "fathers-over-40": ["fr-009"],
  "fitness-education": ["fr-038"],
  "flexibility": ["fr-013", "fr-044", "fr-077"],
  "flexibility-vs-mobility": ["fr-134"],
  "focus": ["fr-060"],
  "foundational": ["fr-032"],
  "full-body-training": ["fr-125"],
  "functional": ["fr-042"],
  "functional-core": ["fr-037"],
  "functional-fitness": ["fr-109"],
  "functional-training": ["fr-022"],
  "gratitude": ["fr-058", "fr-090"],
  "growth": ["fr-063"],
  "growth-mindset": ["fr-056", "fr-059"],
  "gut health": ["fr-103"],
  "gut-health": ["fr-015", "fr-127"],
  "habit formation": ["fr-096"],
  "habit-formation": ["fr-031"],
  "habits-systems": ["fr-068"],
  "health": ["fr-050", "fr-081"],
  "health-markers": ["fr-111"],
  "heart health": ["fr-092", "fr-102"],
  "hip-mobility": ["fr-048"],
  "holistic-medicine": ["fr-136"],
  "home-gym": ["fr-043"],
  "hormone support": ["fr-097"],
  "hormone-optimization": ["fr-050", "fr-132"],
  "hormones": ["fr-025", "fr-033"],
  "hydration": ["fr-076"],
  "hypertrophy": ["fr-131"],
  "identity": ["fr-020", "fr-061"],
  "impact": ["fr-069"],
  "inflammation": ["fr-015", "fr-105", "fr-127"],
  "injury-prevention": ["fr-002"],
  "inner-work": ["fr-123"],
  "insulin": ["fr-075"],
  "integrated-health": ["fr-129"],
  "intermittent-fasting": ["fr-027", "fr-114"],
  "joint health": ["fr-100"],
  "joint-care": ["fr-047"],
  "joint-friendly": ["fr-034"],
  "joint-health": ["fr-029", "fr-044", "fr-114", "fr-116"],
  "journaling": ["fr-096"],
  "kettlebell": ["fr-110", "fr-116"],
  "kettlebell-training": ["fr-042"],
  "knowledge-system": ["fr-004"],
  "lateral-hip": ["fr-048"],
  "leadership": ["fr-065", "fr-139"],
  "leaky-gut": ["fr-127"],
  "learning": ["fr-059"],
  "legacy": ["fr-069"],
  "life-purpose": ["fr-057"],
  "lifestyle": ["fr-006", "fr-054", "fr-068"],
  "loaded-carries": ["fr-117"],
  "long-term-training": ["fr-117"],
  "longevity": ["fr-008", "fr-010", "fr-017", "fr-024", "fr-109", "fr-120", "fr-129", "fr-138", "fr-139"],
  "longevity-training": ["fr-110"],
  "love-life": ["fr-119"],
  "lower-body": ["fr-048"],
  "lymphatic-health": ["fr-133"],
  "martial-arts": ["fr-046", "fr-114"],
  "masculine-leadership": ["fr-065"],
  "meal-plan": ["fr-073"],
  "meaning": ["fr-057"],
  "meditation": ["fr-088", "fr-089", "fr-090", "fr-091", "fr-092", "fr-093", "fr-094", "fr-095", "fr-096"],
  "melatonin": ["fr-083"],
  "men": ["fr-019", "fr-123"],
  "men-health": ["fr-017", "fr-024"],
  "men-over-40": ["fr-111", "fr-119"],
  "men-resistance": ["fr-112"],
  "mens-identity": ["fr-141"],
  "mental health": ["fr-091"],
  "mental-fitness": ["fr-124"],
  "mental-health": ["fr-019", "fr-058", "fr-088"],
  "mental-mastery": ["fr-060"],
  "mental-strength": ["fr-142"],
  "mental-toughness": ["fr-046", "fr-067"],
  "metabolic": ["fr-027"],
  "metabolic health": ["fr-105"],
  "metabolic-conditioning": ["fr-040"],
  "metabolic-flexibility": ["fr-135"],
  "metabolic-health": ["fr-016", "fr-144"],
  "metabolism": ["fr-053"],
  "microbiome": ["fr-103"],
  "mindfulness": ["fr-088", "fr-091"],
  "mindfulness practices": ["fr-095"],
  "mindset": ["fr-012", "fr-031"],
  "mitochondria": ["fr-108", "fr-144"],
  "mobility": ["fr-013", "fr-044", "fr-045", "fr-112"],
  "mobility-fourth-pillar": ["fr-134"],
  "mood": ["fr-127"],
  "morning-routine": ["fr-047"],
  "motivation": ["fr-106"],
  "movement": ["fr-022", "fr-109"],
  "movement meditation": ["fr-095"],
  "movement-medicine": ["fr-121"],
  "movement-patterns": ["fr-126"],
  "movement-quality": ["fr-045", "fr-134"],
  "movement-variety": ["fr-133"],
  "multi-directional-movement": ["fr-128"],
  "multidimensional-fitness": ["fr-122"],
  "muscle": ["fr-053"],
  "muscle building": ["fr-098"],
  "muscle-building": ["fr-007", "fr-011", "fr-034"],
  "muscle-preservation": ["fr-021", "fr-071"],
  "natural-optimization": ["fr-006"],
  "natural-sleep": ["fr-083"],
  "natural-testosterone": ["fr-052", "fr-054"],
  "nervous-system": ["fr-118", "fr-141"],
  "neuroplasticity": ["fr-093"],
  "neuroscience": ["fr-093"],
  "never-stop": ["fr-140"],
  "never-stop-moving": ["fr-122", "fr-130"],
  "nighttime-waking": ["fr-080"],
  "nootropics": ["fr-101"],
  "nutrition": ["fr-015", "fr-016", "fr-021", "fr-026", "fr-053", "fr-070", "fr-073", "fr-138"],
  "nutrition-rules": ["fr-072"],
  "older-adults": ["fr-143"],
  "optimization": ["fr-025", "fr-054"],
  "over-40": ["fr-005", "fr-012", "fr-038", "fr-125"],
  "oxidative-stress": ["fr-120"],
  "pain": ["fr-029"],
  "pain-management": ["fr-113"],
  "performance": ["fr-010", "fr-023", "fr-076", "fr-138"],
  "periodization": ["fr-039"],
  "personal-development": ["fr-056"],
  "personalized-medicine": ["fr-129"],
  "personalized-optimization": ["fr-107"],
  "physician-led": ["fr-129"],
  "physique": ["fr-011"],
  "physique-over-40": ["fr-115"],
  "phytoandrogens": ["fr-052"],
  "pine-pollen": ["fr-052"],
  "pornography": ["fr-141"],
  "positive-mindset": ["fr-090"],
  "positive-psychology": ["fr-058"],
  "post-workout": ["fr-030", "fr-077"],
  "power": ["fr-014", "fr-041"],
  "power-breathing": ["fr-086"],
  "power-training": ["fr-110", "fr-128"],
  "practical": ["fr-089"],
  "precision-health": ["fr-107"],
  "preventive-health": ["fr-017"],
  "program-design": ["fr-125"],
  "program-philosophy": ["fr-005"],
  "programming": ["fr-039"],
  "progressive": ["fr-087"],
  "protein": ["fr-021", "fr-071", "fr-098"],
  "protein-sources": ["fr-071"],
  "psychological wellbeing": ["fr-092"],
  "purpose": ["fr-020", "fr-069", "fr-142"],
  "questioning-conventional": ["fr-136"],
  "radical-ownership": ["fr-062"],
  "range-of-motion": ["fr-049"],
  "realistic-expectations": ["fr-011"],
  "recovery": ["fr-001", "fr-023", "fr-078", "fr-085", "fr-094", "fr-098", "fr-099", "fr-115", "fr-124", "fr-125"],
  "recovery-nutrition": ["fr-030"],
  "redemption": ["fr-142"],
  "rehabilitation": ["fr-113"],
  "relationships": ["fr-119"],
  "research": ["fr-084", "fr-092"],
  "resilience": ["fr-012", "fr-035", "fr-059", "fr-067", "fr-124", "fr-140"],
  "resistance-bands": ["fr-043"],
  "resistance-training": ["fr-143"],
  "responsibility": ["fr-062"],
  "rucking": ["fr-143"],
  "sarcopenia": ["fr-108", "fr-131", "fr-143"],
  "scientific-literacy": ["fr-136"],
  "second-half": ["fr-124"],
  "second-half-of-life": ["fr-020"],
  "self-awareness": ["fr-056"],
  "self-concept": ["fr-061"],
  "session-design": ["fr-003"],
  "simplicity": ["fr-116"],
  "sleep": ["fr-023", "fr-078", "fr-082", "fr-094", "fr-099"],
  "sleep-importance": ["fr-081"],
  "sleep-optimization": ["fr-137"],
  "sleep-protocol": ["fr-080"],
  "sleep-quality": ["fr-082", "fr-137"],
  "sleep-recovery": ["fr-079"],
  "sleep-reset": ["fr-080"],
  "sleep-science": ["fr-081", "fr-084"],
  "sleep-supplements": ["fr-083"],
  "smart-training": ["fr-126"],
  "sprinting": ["fr-130"],
  "stability": ["fr-037"],
  "strength": ["fr-041", "fr-138"],
  "strength-simplicity": ["fr-117"],
  "strength-training": ["fr-014"],
  "stress": ["fr-085"],
  "stress hormones": ["fr-094"],
  "stress management": ["fr-091"],
  "stress-management": ["fr-019"],
  "stretching": ["fr-049", "fr-077"],
  "structure": ["fr-064"],
  "supplements": ["fr-030", "fr-032", "fr-097", "fr-098", "fr-099", "fr-100", "fr-101", "fr-102", "fr-103", "fr-104", "fr-105", "fr-135"],
  "surgery-recovery": ["fr-140"],
  "sustainability": ["fr-008"],
  "symptoms": ["fr-051"],
  "testosterone": ["fr-005", "fr-006", "fr-025", "fr-050", "fr-051", "fr-078", "fr-097", "fr-132"],
  "testosterone-boosting": ["fr-070"],
  "thyroid": ["fr-033"],
  "time-efficient": ["fr-036"],
  "training": ["fr-027", "fr-036"],
  "training-around-injury": ["fr-029", "fr-113"],
  "training-longevity": ["fr-121"],
  "training-longevity-laws": ["fr-126"],
  "training-myths": ["fr-038"],
  "training-philosophy": ["fr-001", "fr-008", "fr-035"],
  "training-respect": ["fr-115"],
  "training-structure": ["fr-002", "fr-003"],
  "training-system": ["fr-039"],
  "transformation": ["fr-055", "fr-061"],
  "travel-training": ["fr-043"],
  "tricon-training": ["fr-034", "fr-131"],
  "vulnerability": ["fr-123"],
  "warm-up": ["fr-001", "fr-002"],
  "warrior-mindset": ["fr-055"],
  "water": ["fr-076"],
  "whole-being-health": ["fr-118"],
  "wholeness": ["fr-119"],
  "wim-hof": ["fr-086"],
  "yoga": ["fr-013", "fr-112"],
};

export function searchKnowledge(query: string, maxResults: number = 5): KnowledgeChunk[] {
  const q = query.toLowerCase();
  const terms = q.split(/\s+/).filter(w => w.length > 2);
  const scores = new Map<string, number>();

  for (const [topic, ids] of Object.entries(topicIndex)) {
    const topicNorm = topic.replace(/-/g, " ");
    if (q.includes(topicNorm) || topicNorm.includes(q)) {
      for (const id of ids) {
        scores.set(id, (scores.get(id) ?? 0) + 3);
      }
    }
  }

  for (const chunk of knowledgeChunks) {
    const text = [
      chunk.content,
      chunk.topic.join(" "),
      chunk.tags.join(" "),
      chunk.quote ?? "",
      (chunk.protocol ?? []).join(" "),
    ].join(" ").toLowerCase();

    let score = scores.get(chunk.id) ?? 0;
    for (const term of terms) {
      const count = (text.match(new RegExp(term, "g")) ?? []).length;
      score += count * 0.5;
    }
    if (score > 0) scores.set(chunk.id, score);
  }

  return Array.from(scores.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxResults)
    .map(([id]) => knowledgeChunks.find((c) => c.id === id)!)
    .filter(Boolean);
}
