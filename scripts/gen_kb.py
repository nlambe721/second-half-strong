#!/usr/bin/env python3
"""
Complete self-contained knowledge base generator.
Produces all 116 chunks (fr-001 to fr-116) covering Waves 1-19.
No external file dependencies.
"""

import os, re

chunks = []
cid = 1

def add(speaker_id, topics, tags, content, quote=None, protocol=None, source_ref="funk-roberts-men-over-40"):
    global cid
    chunk = {"id": f"fr-{cid:03d}", "speakerId": speaker_id, "topic": topics, "tags": tags,
             "content": content, "sourceRef": source_ref}
    if quote: chunk["quote"] = quote
    if protocol: chunk["protocol"] = protocol
    chunks.append(chunk)
    cid += 1

def esc(s):
    return s.replace('\\','\\\\').replace('"','\\"').replace('\n','\\n').replace('\r','').replace('\t',' ')

# ============================================================
# WAVE 1 — Core Rules & Philosophy (fr-001 to fr-008)
# ============================================================

add("funk-roberts",["recovery","warm-up","training-philosophy"],["recovery","warm-up","over-40","longevity","consistency"],
    "The Over 40 Alpha Program is built to transform men, not destroy them. For men over 40, 50, 60, and beyond, recovery is not optional — it is a mandatory part of the transformation process. The goal is not just to complete one workout. The goal is to train consistently for life without injury. Training creates the stimulus. Nutrition provides the fuel. Recovery allows the body to adapt, repair, grow, and keep going. A man who skips recovery may still train hard, but he will eventually break down. A man who respects recovery can train consistently for years. Consistency beats intensity. Longevity beats ego. Recovery keeps men in the game.",
    "Longevity beats ego. Recovery keeps men in the game.",
    ["Never skip the warm-up — shorten the main workout if pressed for time","Every workout must include dynamic warm-up prep","Schedule dedicated recovery days each week","Treat sleep as training — it is when adaptation happens"],
    "funk-ai-rules-v2")

add("funk-roberts",["warm-up","injury-prevention","training-structure"],["warm-up","dynamic","joint-health","nervous-system"],
    "Every workout must begin with a proper warm-up. The warm-up prepares the body, joints, muscles, nervous system, heart, and mind for the workout ahead. Skipping the warm-up increases injury risk and reduces performance. If a member says they are short on time, the AI Coach should recommend shortening the main workout before skipping the warm-up. The warm-up is non-negotiable. Dynamic warm-ups for men over 40 should include movement that activates the hips, shoulders, thoracic spine, and knees — the four most common injury points for men in this age group. Think of the warm-up as insurance for your joints.",
    "Do the warm-up first, then shorten the workout if needed. Never jump into intense training cold.",
    ["5-10 min dynamic movement before every session","Focus on hips, shoulders, spine, and knees","Include activation work for glutes and core","Match warm-up intensity to the main workout"],
    "funk-ai-rules-v2")

add("funk-roberts",["training-structure","session-design","coaching"],["structure","session","trainer","longevity","results"],
    "When you train men in their 40s, 50s, 60s, and beyond, how you structure the session matters just as much as the exercises you choose. A well-designed session has five phases: warm-up, priming, main workout, cool-down, and mobility. Rushing or skipping any phase leaves results on the table and increases injury risk. The session structure communicates respect for the man\'s body and his time. One of the biggest mistakes trainers and trainees make is failing to plan the entire session. Warm-ups are rushed. Stretching is forgotten. The session ends abruptly. That leaves your body without the full benefits of a complete training experience. For men over 40, the cool-down and mobility phase is just as important as the main workout.",
    "When you train men over 40, structure is not optional. It is essential.",
    ["Plan all 5 phases before starting","Warm-up: 5-10 min dynamic movement","Priming: activation for target muscles","Cool-down: 5 min low-intensity movement","Mobility: 5-10 min static stretching and joint work"],
    "canfitpro")

add("funk-roberts",["coaching-philosophy","ai-coach","knowledge-system"],["funk-roberts","over-40","testosterone","ecosystem"],
    "The Funk Roberts AI Fitness Coach is not just a chatbot. It is a knowledge system built on trusted, proven content from the Over 40 Alpha Brotherhood. It covers training, testosterone optimization, nutrition, supplements, sleep, recovery, mindset, breathwork, and mobility — everything a man over 40 needs to reclaim his health. The AI Coach answers only from the Funk Roberts ecosystem. It never gives generic fitness advice. It speaks like a coach — direct, motivational, and evidence-based. The mission is simple: help men over 40, 50, 60, and beyond get lean, strong, and healthy without wrecking their bodies or their lives.",
    "The AI Coach speaks like Funk Roberts — direct, motivational, masculine. It never accepts excuses, but it always supports the man.",
    None,"funk-fitness-coach")

add("funk-roberts",["program-philosophy","over-40","testosterone"],["REAL","alpha","over-40","testosterone","lifestyle"],
    "The REAL Alpha Men system is built around 8 pillars that address the total man — not just his workouts. REAL stands for Radical Ownership, Evolution, Alignment, and Leadership. The system recognizes that men over 40 face unique challenges: declining testosterone, increased stress, family responsibilities, career pressures, and a fitness culture that does not speak to them. The Over 40 Alpha approach meets men where they are and builds them up systematically. Every pillar reinforces the others. You cannot have physical transformation without mental transformation. You cannot sustain health changes without lifestyle changes. The REAL Alpha system addresses all of it.",
    "You cannot have physical transformation without mental transformation.",
    None,"funk-roberts-real-system")

add("funk-roberts",["testosterone","natural-optimization","lifestyle"],["testosterone","natural","lifestyle","over-40","men"],
    "Testosterone naturally declines at roughly 1-2% per year after age 30. By 40, most men are already feeling the effects: fatigue, reduced muscle mass, increased belly fat, lower libido, poor recovery, and brain fog. But low testosterone is not inevitable. The lifestyle choices men make every day either support or sabotage their hormonal health. The pillars of natural testosterone optimization are: resistance training, quality sleep, stress management, proper nutrition, and eliminating endocrine disruptors. These are not optional extras — they are the foundation. Before considering any hormonal intervention, every man should optimize his lifestyle completely.",
    "Low testosterone is not inevitable — it is often a lifestyle problem with lifestyle solutions.",
    ["Lift heavy 3-4x per week — compound movements prioritized","Get 7-9 hours of quality sleep every night","Reduce chronic stress through breathwork and recovery","Eat adequate protein and healthy fats","Eliminate alcohol, processed foods, and endocrine disruptors"],
    "funk-roberts-testosterone")

add("funk-roberts",["fat-loss","muscle-building","body-composition"],["fat-loss","muscle","metabolism","over-40","results"],
    "Men over 40 can absolutely lose fat and build muscle simultaneously — but the approach must be intelligent. The metabolism slows, cortisol affects recovery differently, and hormonal shifts change how the body responds to training and nutrition. The key principles: prioritize resistance training over cardio, eat enough protein (1g per pound of bodyweight), keep cardio metabolic not destructive, manage sleep and stress obsessively, and cycle intensity through deload weeks. Many men over 40 make the mistake of training like they did at 22 — too much volume, not enough recovery, too little protein. The smarter approach always wins long-term.",
    "Train smarter, not just harder. Your body at 40 responds to intelligence — not punishment.",
    ["Prioritize compound lifts: squat, hinge, press, pull","Eat 1g protein per pound of bodyweight daily","Add 2-3 metabolic conditioning sessions per week","Deload every 4-6 weeks to allow full recovery","Track sleep quality as carefully as workouts"],
    "funk-roberts-body-composition")

add("funk-roberts",["training-philosophy","longevity","sustainability"],["longevity","consistency","over-40","sustainable"],
    "The biggest mistake men over 40 make is treating fitness as a sprint instead of a lifelong practice. They go all in for 6 weeks, burn out or get injured, then spend months recovering. The Over 40 Alpha approach is built for the long game. Sustainable progress over years beats dramatic results that disappear in months. This requires: consistent moderate training rather than sporadic extreme training, excellent recovery protocols, a nutrition approach you can maintain, and a mindset shift from punishment to performance. The man who trains consistently for 5 years will always outperform the man who goes hard for 6 weeks and stops.",
    "Consistency over years beats intensity for weeks. The long game always wins.",
    None,"funk-roberts-philosophy")

# ============================================================
# WAVE 2-3 — Summit Interviews (fr-009 to fr-038)
# ============================================================

add("anthony-balduzzi",["family-health","fat-loss","fathers-over-40"],["fit-father","family","dad","over-40","weight-loss","motivation"],
    "Dr. Anthony Balduzzi founded the Fit Father Project after losing his own father at age 42 to preventable health complications. His mission: help dads over 40 lose weight, regain energy, build strength, and live healthier lives — for themselves and their families. The Fit Father approach recognizes that busy fathers need time-efficient, family-friendly protocols that actually fit their lifestyle. Key insight from Anthony: most men over 40 who struggle with health are not lazy — they are overwhelmed, under-supported, and using strategies designed for younger men. The program has helped over 10,000 men collectively transform their health using a balanced approach to training, nutrition, and lifestyle.",
    "Your kids need you healthy. That is a mission worth fighting for every single day.",
    ["Follow a structured training program 3-4x per week","Prioritize simple whole food meals the family can share","Get accountability — connect with other fathers doing the same work","Start with one habit and build systematically"],
    "summit-balduzzi")

add("ben-greenfield",["performance","longevity","biohacking"],["biohacking","performance","longevity","optimization","over-40"],
    "Ben Greenfield is a world-renowned health expert and New York Times bestselling author who has spent over two decades helping elite athletes and high performers optimize energy, recovery, and longevity. For men over 40, Ben\'s approach centers on optimizing the fundamentals before exploring advanced biohacking: sleep quality, stress management, movement variety, and nutrition timing. His key message: most men are looking for complex solutions when the basics done consistently would transform their health. Light exposure management, cold therapy, zone 2 cardio, and resistance training remain the foundational pillars — everything else is optimization on top.",
    "Master the basics obsessively before adding complexity. The fundamentals are where the results live.",
    ["Morning light exposure within 30 min of waking","Zone 2 cardio 3-4x per week for metabolic health","Resistance training 3x per week","Cold exposure 3-5 min cold shower or ice bath daily","Sleep optimization: dark, cool room, consistent schedule"],
    "summit-ben-greenfield")

add("bryan-krahn",["muscle-building","physique","realistic-expectations"],["muscle","physique","realistic","over-40","no-bs"],
    "Bryan Krahn is a highly respected physique coach who specializes in helping ordinary men build extraordinary physiques in their 40s, 50s, 60s, and beyond. His no-BS approach: men over 40 CAN build significant muscle and transform their physiques — but they need strategies designed for their age, not copied from 22-year-olds. Key differences for men over 40: more recovery needed between sessions, volume must be managed carefully, technique matters more than weight, and protein intake becomes even more critical. Bryan emphasizes that intelligent programming — managing volume, intensity, frequency, and recovery — is what separates men who make progress from those who stall or get injured.",
    "You can build an incredible physique after 40. You just need to train smarter than you did at 22.",
    ["Reduce volume compared to younger years — quality over quantity","Increase recovery time between sessions for same muscle group","Prioritize technique and time under tension over heavy weight","Increase protein to 1-1.2g per pound of bodyweight","Programme deload weeks every 4-6 weeks"],
    "summit-funk-interview")

add("summit-expert",["mindset","resilience","over-40"],["mindset","resilience","transformation","men-over-40"],
    "The mental game of health after 40 is fundamentally different from your 20s. At 40+, men carry decades of habits, identities, and beliefs about what they can and cannot do physically. The most important transformation is not physical — it is the shift from seeing yourself as someone declining to seeing yourself as someone ascending. Men who make dramatic health transformations after 40 share one trait: they made a decision that their health was non-negotiable. Not a wish. Not a goal. A decision. From that decision, every action becomes aligned. Mindset is not soft — it is the foundation that everything else is built on. Without it, even the best program will eventually be abandoned.",
    "Health transformation after 40 begins with a non-negotiable decision — not a wish, not a goal, a decision.",
    ["Write down your non-negotiable health commitments","Identify and challenge limiting beliefs about aging","Build your identity as a healthy man","Find your brotherhood — men who hold the standard"],
    "summit-chris")

add("dean-pohlman",["mobility","yoga","flexibility"],["yoga","mobility","man-flow","flexibility","joint-health","over-40"],
    "Dean Pohlman, founder of Man Flow Yoga, has dedicated his career to making mobility and yoga accessible and relevant for men — particularly men over 40. His insight: traditional yoga often fails men because it is not designed with their physiology, goals, or ego in mind. Man Flow Yoga is strength-focused, practical, and results-driven. For men over 40, mobility work is not optional — it is what allows everything else to continue. Tight hips cause back pain. Poor shoulder mobility causes rotator cuff problems. Limited thoracic mobility reduces power output. Dean\'s message: 10-15 minutes of targeted mobility work daily can eliminate chronic pain, improve athletic performance, and extend your training career by decades.",
    "Mobility is not stretching. It is the ability to control your body through a full range of motion. That is power.",
    ["10-15 min mobility work daily — make it a non-negotiable","Target hips, shoulders, thoracic spine, and ankles","Focus on strength within range of motion","Consistency over intensity — 10 min every day beats 60 min once a week"],
    "summit-dean-pohlman")

add("summit-expert",["strength-training","power","athletic-performance"],["strength","power","athletic","over-40","performance"],
    "Strength and power do not have to decline as men age — they decline when men stop training them. Research is clear: men who engage in progressive resistance training maintain significantly greater strength, power output, muscle mass, and functional capacity than their untrained peers — well into their 70s and beyond. For men over 40, the focus should be on maintaining neuromuscular power alongside traditional strength training. This means including explosive movements: medicine ball throws, power cleans, jump squats, and sprints. Neglecting power training is one of the biggest mistakes aging men make — strength without power means you cannot respond quickly to the demands of life.",
    "You do not lose power because you age. You lose power because you stop training it.",
    ["Include 2-3 explosive movements per training week","Sprint or jump exercises to maintain fast-twitch fibers","Progressive overload remains the primary driver of strength adaptation","Train movement patterns: push, pull, hinge, squat, carry, rotate"],
    "summit-eddie")

add("summit-expert",["gut-health","nutrition","inflammation"],["gut-health","inflammation","nutrition","microbiome","over-40"],
    "Gut health is one of the most underappreciated factors in men\'s health after 40. The gut microbiome influences testosterone levels, inflammatory response, mental health, immune function, energy, and body composition. Men over 40 who suffer from chronic inflammation, fatigue, brain fog, and stubborn belly fat often have significant gut dysbiosis. The solution: prioritize diverse, whole food nutrition with adequate fiber, reduce ultra-processed foods and alcohol, manage stress (which directly disrupts the gut), and consider targeted probiotic supplementation. Fixing the gut often fixes everything else simultaneously.",
    "Fix the gut and you often fix the hormones, the energy, the mood, and the belly fat simultaneously.",
    ["Eat 30+ different plants per week for microbiome diversity","Eliminate ultra-processed foods and alcohol","Manage stress — cortisol destroys gut integrity","Include fermented foods: kefir, sauerkraut, yogurt","Consider a quality probiotic with multiple strains"],
    "summit-fir")

add("summit-expert",["fat-loss","metabolic-health","nutrition"],["fat-loss","metabolism","metabolic-health","over-40","sustainable"],
    "Metabolic health is the foundation of everything men over 40 want: fat loss, muscle building, energy, hormonal balance, and longevity. Men over 40 commonly suffer from insulin resistance, elevated cortisol, and disrupted circadian rhythms that make traditional calorie-cutting approaches frustrating and ineffective. The smarter approach: improve insulin sensitivity through resistance training, optimize sleep, reduce processed carbohydrates, time meals around training, and manage stress. When metabolic health improves, fat loss becomes almost effortless.",
    "Fix your metabolism and fat loss takes care of itself. Fight your metabolism and you will always struggle.",
    ["Resistance train 3-4x per week to improve insulin sensitivity","Eat most carbohydrates around training windows","Reduce processed carbs and sugars","Sleep 7-9 hours — poor sleep destroys metabolic health","Manage cortisol — chronic stress locks fat in place"],
    "summit-greg")

add("summit-expert",["men-health","preventive-health","longevity"],["preventive","health","longevity","men","over-40"],
    "Men over 40 face a convergence of challenges: declining hormones, increased cardiovascular risk, reduced muscle mass, greater accumulation of chronic stress, and a culture that teaches men to ignore their health until crisis hits. Prevention is always better than treatment. The men who age best are those who treat their health as a priority in their 40s — not their 60s when the damage has already accumulated. The core preventive pillars: regular exercise especially resistance training, quality nutrition, adequate sleep, strong social connections, stress management, and regular medical monitoring including bloodwork.",
    "The best time to start was 20 years ago. The second best time is right now.",
    ["Get annual bloodwork: testosterone, PSA, lipids, glucose, thyroid","Start resistance training if not already doing it","Prioritize sleep as the single highest-ROI health investment","Build strong male friendships — social isolation kills men"],
    "summit-health")

add("summit-expert",["coaching","accountability","behavior-change"],["coaching","accountability","behavior","consistency","habits"],
    "Accountability is not a personality trait — it is a system. Men who consistently achieve their health goals do not do it through willpower alone. They build systems, environments, and communities that make the right behaviors easier and the wrong behaviors harder. The role of a coach is not to motivate — motivation is temporary. The role of a coach is to help the man build systems that produce consistent action regardless of how he feels. Key accountability tools: public commitments, tracking systems, social support, scheduled check-ins, and clear consequence structures. Men who are held accountable by others achieve dramatically better results than those who go it alone.",
    "Motivation is temporary. Systems are permanent. Build the system, not the willpower.",
    ["Join a community of men with the same goals","Use a training log or app to track every session","Schedule weekly check-ins with an accountability partner","Make commitments public to raise the stakes","Review progress weekly and adjust"],
    "summit-jb")

add("summit-expert",["stress-management","mental-health","men"],["stress","mental-health","men","anxiety","over-40"],
    "Men over 40 carry enormous amounts of unprocessed stress from careers, relationships, financial pressures, and a culture that discourages vulnerability. Chronic stress is not just unpleasant — it is physiologically destructive. It elevates cortisol chronically, which suppresses testosterone, disrupts sleep, increases belly fat storage, accelerates inflammation, and increases risk of heart disease. The masculine approach to stress management is tactical. Breathwork, physical training, cold exposure, quality sleep, purposeful action, and strong male community are all effective stress management tools that align with how men actually operate.",
    "Stress is a physiological emergency that your body cannot distinguish from a physical threat. Manage it or it manages you.",
    ["Practice 5-10 min breathwork daily to reset the nervous system","Use physical training as a cortisol regulation tool","Build strong friendships and brotherhood connections","Develop a shutdown ritual — transition from work stress to home mode","Identify and address the source of chronic stress"],
    "summit-joy")

add("summit-expert",["purpose","identity","second-half-of-life"],["purpose","identity","meaning","second-half","men-over-40"],
    "Men in their 40s and 50s often experience an identity crisis that goes far beyond the cliche midlife crisis. They have achieved what they were supposed to achieve — career, family, possessions — and yet something feels hollow. This is the invitation to build a second half of life that is more intentional, more aligned with values, and more deeply fulfilling. Men who navigate this transition well redefine success on their own terms. They invest in relationships, health, purpose, and contribution rather than simply accumulating more. The healthiest men in their 50s, 60s, and 70s are those who found a mission bigger than themselves.",
    "The first half of life is about building. The second half is about becoming. Both require courage.",
    ["Clarify your values — what actually matters to you now","Invest in relationships more than achievements","Find a mission or contribution that extends beyond your own life","Mentor younger men — purpose through leadership","Health is the foundation — without it, none of the rest is possible"],
    "summit-justin")

add("summit-expert",["nutrition","protein","muscle-preservation"],["protein","nutrition","muscle","over-40","anabolic"],
    "Protein is the most critical nutritional variable for men over 40 who want to maintain or build muscle. Anabolic resistance — the reduced ability of muscle to respond to protein — increases with age, meaning older men actually need MORE protein than younger men, not less. Current research supports 1.6-2.2g of protein per kilogram of bodyweight for men over 40 who are resistance training. Distribution matters: spreading protein evenly across 3-5 meals is more effective than eating most protein in one sitting. High-quality sources: lean meats, eggs, fish, Greek yogurt, cottage cheese, and protein supplementation when whole food intake is insufficient.",
    "Men over 40 need more protein than men in their 20s — not less. Anabolic resistance is real, and protein is the answer.",
    ["Target 1.6-2.2g protein per kg bodyweight daily","Spread protein across 3-5 meals minimum","Prioritize whole food protein sources: meat, eggs, fish","Have 30-50g protein within 2 hours of resistance training","Use quality protein powder to fill gaps when needed"],
    "summit-keith")

add("summit-expert",["functional-training","movement","athleticism"],["functional","movement","athleticism","over-40","strength"],
    "Functional training for men over 40 is about maintaining and rebuilding the athleticism that makes life feel powerful and free. It is not just about looking good in the mirror — it is about being able to sprint after your kids, carry heavy bags without pain, play sports without injury, and move through life with confidence and capacity. The foundation of functional training: multi-directional movement, rotational power, single-leg stability, and carry patterns. Men who train functionally maintain their physical independence longer and experience fewer age-related movement limitations.",
    "Train for life, not just for the mirror. Functional strength is what lets you sprint, carry, play, and live fully.",
    ["Include carries: farmer carries, suitcase carries, overhead carries","Train single-leg movements for balance and stability","Incorporate rotational exercises: med ball throws, cable rotations","Add multi-directional movements: lateral lunges, shuffles","Test yourself regularly: sprint, jump, carry — know where you stand"],
    "summit-luke-j")

add("summit-expert",["sleep","recovery","performance"],["sleep","recovery","performance","testosterone","growth-hormone"],
    "Sleep is the most powerful recovery and anabolic tool available to men over 40 — and it is free. During deep sleep, the body releases 70-80% of its daily growth hormone, consolidates muscle protein synthesis, repairs tissue, and regulates cortisol. Men who chronically sleep less than 7 hours have measurably lower testosterone, higher cortisol, reduced insulin sensitivity, increased belly fat, and significantly impaired recovery from training. Sleep optimization is not optional — it is the multiplier that makes everything else work.",
    "Sleep is not laziness. Sleep is the most anabolic thing you can do for your body every single night.",
    ["Maintain a consistent sleep/wake schedule 7 days a week","Aim for 7-9 hours in a cool, dark, quiet room","Eliminate screens 60 minutes before bed","Avoid alcohol within 3 hours of sleep","Get morning sunlight within 30 min of waking to anchor your circadian rhythm"],
    "summit-luke-w")

add("summit-expert",["men-health","cardiovascular","longevity"],["cardiovascular","heart","longevity","men","prevention"],
    "Cardiovascular disease remains the number one killer of men over 40, and yet most men either ignore cardiovascular health entirely or approach it incorrectly. The optimal cardiovascular protocol for men over 40 combines Zone 2 training (60-70% max HR, 3-4x per week) with higher intensity intervals 1-2x per week. Zone 2 builds mitochondrial density and reduces cardiovascular disease risk. High-intensity intervals maintain VO2 max — a powerful predictor of longevity. Regular monitoring: blood pressure, resting heart rate, lipid panel, and ideally a coronary calcium scan.",
    "VO2 max is one of the strongest predictors of longevity. Train to maintain it — it does not preserve itself.",
    ["3-4x per week Zone 2 cardio: walk, bike, row at conversational pace","1-2x per week high-intensity intervals","Monitor blood pressure monthly","Get annual lipid panel and cardiovascular markers","Build to 150 min/week moderate or 75 min/week vigorous cardio"],
    "summit-mens-health")

add("summit-expert",["testosterone","hormones","optimization"],["testosterone","TRT","hormones","optimization","over-40"],
    "The conversation around testosterone replacement therapy is more nuanced than most men realize. The first step for any man concerned about testosterone is always lifestyle: sleep, resistance training, stress management, nutrition, and eliminating endocrine disruptors. If after 3-6 months of genuine lifestyle optimization testosterone is still clinically low with symptoms, TRT becomes a legitimate conversation with a qualified physician. TRT is not a shortcut — it is a medical intervention for men who need it.",
    "Optimize lifestyle first. TRT is a medical tool for men who need it — not a shortcut for men who have not done the work.",
    ["Get comprehensive hormone panel: total T, free T, SHBG, LH, FSH, estradiol","Optimize lifestyle for 3-6 months before considering medical intervention","Work with a physician who specializes in men\'s hormonal health","Understand TRT is a lifetime commitment","Monitor and optimize: the goal is optimal, not just normal"],
    "summit-mike")

add("summit-expert",["nutrition","anti-inflammatory","eating"],["anti-inflammatory","food","inflammation","nutrition","over-40"],
    "Chronic inflammation is the silent driver behind the most common health problems men over 40 face: joint pain, cardiovascular disease, insulin resistance, cognitive decline, and cancer risk. And diet is one of the most powerful tools for managing inflammation. The foundation of anti-inflammatory eating: abundant vegetables, quality proteins, healthy fats especially omega-3s, minimal processed foods, minimal added sugars. The foods that drive inflammation: refined seed oils, ultra-processed foods, excessive alcohol, refined sugar, and trans fats.",
    "You cannot out-supplement a pro-inflammatory diet. Food is the foundation of everything.",
    ["Base meals on vegetables, quality protein, and healthy fats","Eat fatty fish 2-3x per week for omega-3 fatty acids","Eliminate refined seed oils: canola, soybean, corn oil","Limit alcohol to 1-2 drinks per week maximum","Remove ultra-processed foods from your regular eating"],
    "summit-percy")

add("summit-expert",["training","intermittent-fasting","metabolic"],["intermittent-fasting","fasting","metabolic","fat-loss","timing"],
    "Intermittent fasting can be a powerful tool for men over 40 — but it is not a universal solution. The most common protocol is 16:8 (16 hours fasting, 8 hours eating window). Benefits: improved insulin sensitivity, reduced inflammation, increased growth hormone output, and simplified eating structure. Cautions: fasting should not compromise protein intake or post-workout nutrition. Men who train intensely should place at least one quality meal within 2 hours of resistance training.",
    "Fasting is a tool, not a religion. Use it when it serves your goals, not because someone says you should.",
    ["Start with a 12-hour fast (7pm to 7am) before extending the window","Ensure protein targets are still met within the eating window","Break fast with protein-rich meal for satiety and muscle preservation","Avoid fasting on heavy training days if performance suffers","Monitor energy and performance — adjust the protocol if needed"],
    "summit-ruston")

add("summit-expert",["community","brotherhood","accountability"],["community","brotherhood","accountability","men","support"],
    "The crisis of modern masculinity is partly a crisis of male community. Men in their 40s and beyond are more socially isolated than any previous generation. Research shows that chronic loneliness is as damaging to health as smoking 15 cigarettes per day. Men are not designed to go it alone. The ancient model of male brotherhood — training together, building together, and being honest with each other — is what kept men healthy. Recreating that in the modern world is not optional for men who want to thrive in their second half of life.",
    "No supplement replaces brotherhood. Men need men. Find yours.",
    ["Join a community of men pursuing the same health goals","Get a training partner for at least some weekly sessions","Attend a men\'s group or accountability circle","Be honest about your struggles with at least one trusted man","Create regular time for male friendship — schedule it like training"],
    "summit-sm")

add("summit-expert",["joint-health","pain","training-around-injury"],["joint-health","pain","injury","training","over-40"],
    "Joint pain is the most common reason men over 40 stop training — and in most cases, it is preventable and manageable without stopping exercise. Complete rest is usually the wrong answer. Research consistently shows that appropriate loading — the right exercises at the right intensity — actually promotes joint healing. For knee pain: strengthen the glutes and hamstrings. For shoulder pain: strengthen the rotator cuff and improve thoracic mobility. For lower back pain: strengthen the core and improve hip mobility. Train around pain, not through it, while addressing the root cause.",
    "Rest is rarely the answer for joint pain in men over 40. Appropriate movement is the medicine.",
    ["Identify pain-provoking movements and temporarily avoid them","Strengthen the muscles surrounding the painful joint","Add mobility work for the joint above and below the painful area","Consider a sports physio or movement specialist for persistent pain","Maintain training volume — just substitute pain-free movements"],
    "summit-clark")

add("summit-expert",["recovery-nutrition","post-workout","supplements"],["post-workout","nutrition","recovery","protein","supplements"],
    "Post-workout nutrition for men over 40 is a critical window that most men underutilize. After resistance training, the muscle is primed for protein synthesis for 2-4 hours. Missing this window leaves significant muscle-building potential untapped. The optimal post-workout protocol: 30-50g quality protein within 1-2 hours of training, with some carbohydrates to replenish glycogen and reduce cortisol. Creatine monohydrate (5g daily) dramatically improves post-workout recovery for men over 40 and has the strongest evidence base of any sports supplement.",
    "The post-workout window is when the muscle is most ready to grow. Do not miss it.",
    ["Consume 30-50g protein within 2 hours of resistance training","Include 20-60g carbohydrates post-workout to replenish glycogen","Take 5g creatine monohydrate daily","Hydrate: replace 150% of fluid lost during training","Avoid alcohol post-workout — it directly suppresses protein synthesis"],
    "summit-interview-recovery-nutrition")

add("summit-expert",["mindset","discipline","habit-formation"],["discipline","habits","consistency","identity","transformation"],
    "Habit formation is the engine of lasting health transformation. Motivation gets you started. Habits keep you going. The most effective approach is not willpower — it is designing your environment and routines so the desired behavior requires minimal decision-making. For men over 40: pack your gym bag the night before, schedule training like a meeting, prepare meals on Sunday, put your supplements where you will see them. Identity-based habits are the most powerful: instead of saying \'I am trying to exercise,\' say \'I am a man who trains.\' That identity shift changes everything about how you make decisions.",
    "You do not rise to your goals. You fall to the level of your systems. Build better systems.",
    ["Design your environment: remove barriers to healthy behavior","Stack habits onto existing routines","Track habits daily — what gets measured gets done","Shift identity: \'I am a man who trains\' not \'I am trying to train\'","Accept imperfection — missing one day is fine, missing two is a habit"],
    "summit-habit-formation")

add("summit-expert",["supplements","foundational","basics"],["supplements","foundation","vitamin-d","magnesium","omega-3"],
    "For men over 40, supplement overwhelm is real — and expensive. The truth: most men would benefit more from getting the foundational supplements right than from chasing exotic compounds. The evidence-based foundational stack for men over 40: Vitamin D3 (2000-5000 IU daily), Magnesium glycinate (300-400mg nightly), Omega-3 fish oil (2-3g EPA+DHA daily), Creatine monohydrate (5g daily). These four consistently taken will produce noticeable improvements in energy, sleep, recovery, and body composition.",
    "Get the foundational supplements right before spending money on the exotic ones. Most men skip the basics.",
    ["Vitamin D3: 2000-5000 IU daily with K2 for absorption","Magnesium glycinate: 300-400mg before bed","Omega-3: 2-3g EPA+DHA daily with meals","Creatine monohydrate: 5g daily at any time","Zinc: 15-30mg if diet is low in red meat and shellfish"],
    "summit-foundational-supplements")

add("summit-expert",["hormones","thyroid","energy"],["thyroid","hormones","energy","fatigue","over-40"],
    "Thyroid dysfunction is one of the most commonly missed root causes of fatigue, weight gain, brain fog, and poor recovery in men over 40. The standard thyroid test (TSH alone) often misses subclinical dysfunction. A comprehensive thyroid panel includes TSH, free T3, free T4, reverse T3, and thyroid antibodies. Men with subclinical hypothyroidism may feel significant symptoms while being told their thyroid is \'normal.\' Lifestyle factors that support thyroid health: adequate iodine (seafood, seaweed), selenium (Brazil nuts, fish), reducing chronic stress, and adequate sleep.",
    "Your thyroid is the master controller of your metabolism. If it is sluggish, everything else suffers.",
    ["Request a comprehensive thyroid panel, not just TSH","Eat Brazil nuts daily for selenium (1-2 per day)","Include seafood 2-3x per week for iodine","Reduce chronic stress — cortisol suppresses thyroid function","If symptoms persist, work with an integrative medicine physician"],
    "summit-thyroid-hormones")

# ============================================================
# WAVE 4-5 — Training Systems (fr-039 to fr-065)
# ============================================================

add("funk-roberts",["tricon-training","muscle-building","joint-friendly"],["tricon","hypertrophy","joint-friendly","tension","over-40"],
    "The Tricon Training Blueprint is a joint-friendly hypertrophy system specifically designed for men over 40. The core philosophy: stop thinking \'heavier is always better\' and start thinking \'how can I create more muscular tension with less joint stress?\' Each Tricon set includes three phases: Phase 1 — 3 explosive reps (controlled lowering, explosive lifting). Phase 2 — 3 isometric holds (hold in loaded position for 3-10 seconds). Phase 3 — 3 slow tension reps (slow eccentric, slow concentric, maximum tension). Total: 9 reps per Tricon set with maximum muscular recruitment and minimal joint strain.",
    "Muscles do not know weight. They know tension. Create maximum tension — not maximum weight.",
    ["Phase 1: 3 explosive reps with controlled lowering","Phase 2: 3 isometric holds at peak tension position","Phase 3: 3 slow reps with maximum muscular tension","Use 50-70% of your normal working weight","Include 1-2 Tricon movements per session"],
    "tricon-blueprint")

add("sam-spinelli",["resilience","athleticism","training-philosophy"],["resilience","athleticism","adaptable","strength","over-40"],
    "Dr. Sam Spinelli dismantles one of the most damaging narratives surrounding aging: that getting older automatically means becoming fragile, limited, and physically broken. The body is highly adaptable and capable of rebuilding strength, power, athleticism, and movement capacity well into later decades — if given the right stimulus. The middle path: intelligent loading, progressive adaptation, athletic preparation, and resilience training. A critical insight: avoidance and deconditioning are often more dangerous long-term than appropriately dosed movement and training. Stopping movement because something hurts usually makes things worse, not better.",
    "The human body is built to last. Give it the right stimulus and it will reward you with decades more of strength and athleticism.",
    ["Maintain progressive loading — do not stop challenging the body","Expose the body to athletic movements: sprints, jumps, throws","Address pain with movement modification, not avoidance","Build resilience: the ability to absorb load and recover","Train for the next 40 years, not just the next 40 days"],
    "built-to-last")

add("funk-roberts",["time-efficient","training","busy-schedule"],["time","efficiency","busy","20-min","HIIT","over-40"],
    "Lack of time is the most common reason men over 40 give for not exercising — and it is also the most solvable. Research consistently shows that 20-30 minutes of well-designed training produces 80% of the results of longer sessions. The keys to time-efficient training: compound movements only (no isolation exercises), circuit or super-set format (minimize rest), metabolic conditioning to maximize calorie burn during and after the session (EPOC effect), and high density (more work in less time). A 20-minute Funk Roberts metabolic conditioning session can outperform a 60-minute traditional gym session for fat loss and hormonal response.",
    "You do not need an hour. You need 20 minutes, a plan, and the willingness to work.",
    ["Build sessions around 3-4 compound movements only","Use circuit format: one exercise into the next with minimal rest","Include one metabolic finisher (tabata, AMRAP, or EMOM)","Train 4-5x per week for 20-30 min rather than 2x for 60 min","Track intensity — effort matters more than duration"],
    "no-time-training")

add("funk-roberts",["core-training","functional-core","stability"],["core","stability","functional","back-pain","posture"],
    "Core training for men over 40 is not about visible abs — it is about spinal stability, injury prevention, and transferring power through every movement. The core includes the transverse abdominis, multifidus, pelvic floor, diaphragm, glutes, and hip flexors. Weak core equals compromised movement, back pain, reduced power output, and increased injury risk. The most effective core training for men over 40 focuses on anti-extension, anti-rotation, and anti-lateral flexion — stabilization over crunch-based movements. Key exercises: plank variations, Pallof press, dead bug, bird dog, and farmer carry.",
    "A strong core is not six-pack abs. It is the ability to stabilize your spine under any load, in any position.",
    ["Prioritize anti-extension: plank, ab wheel rollout","Anti-rotation: Pallof press, single-arm carries","Anti-lateral flexion: suitcase carry, lateral plank","Include bird dog and dead bug for spinal stabilization","Train core in every session — it is structural, not cosmetic"],
    "core-training")

add("funk-roberts",["training-myths","fitness-education","over-40"],["myths","fitness","education","over-40","truth"],
    "Five common fitness myths that keep men over 40 stuck: 1) \'High reps, light weight for fat loss\' — FALSE. Compound movements with moderate-heavy weight build muscle, elevate metabolism, and burn more fat. 2) \'Cardio first thing in the morning for fat loss\' — the metabolic difference is negligible. Train when you can be consistent. 3) \'You need to feel sore to know you worked out\' — soreness is inflammation, not muscle growth. 4) \'Machines are safer than free weights for older men\' — free weights build stability and functional strength that machines cannot replicate. 5) \'You cannot build muscle after 40\' — false. Adaptation capacity exists at every age. The strategy just needs to change.",
    "The biggest training myths are keeping men over 40 from the results they deserve. Know the truth.",
    None,"five-myths-training")

add("funk-roberts",["training-system","programming","periodization"],["programming","periodization","system","over-40","progressive"],
    "The Over 40 Alpha Training System is built on intelligent periodization — planned variation in training variables to drive continuous adaptation while managing fatigue. The system cycles through three phases: Accumulation (higher volume, moderate intensity), Intensification (lower volume, higher intensity), and Realization (deload, consolidation). Each phase lasts 3-4 weeks. This prevents the plateaus and overtraining that derail men who train at the same intensity indefinitely. For men over 40, planned deloads are non-negotiable — they are when adaptation actually consolidates. Every 4-6 weeks, reduce volume by 40-50% and intensity by 10-15% for one week.",
    "Intelligent periodization is the difference between continuous progress and permanent plateau.",
    ["Accumulation phase: 12-15 reps, higher volume, 3-4 week cycle","Intensification phase: 5-8 reps, heavier weight, 3-4 week cycle","Deload every 4-6 weeks: reduce volume 40-50%, intensity 10-15%","Track your training to identify plateau patterns","Adjust program every 12-16 weeks for continued adaptation"],
    "training-system-40")

add("funk-roberts",["metabolic-conditioning","METCON","fat-loss"],["METCON","metabolic","conditioning","fat-loss","over-40"],
    "Alpha Plus METCON (metabolic conditioning) training is the most time-efficient approach for men over 40 who want simultaneous fat loss, cardiovascular improvement, and muscle preservation. The approach: compound movements, minimal rest, high work density, and post-workout EPOC (excess post-exercise oxygen consumption) that keeps metabolism elevated for hours after the session. Phase 3 builds on a foundation of strength and introduces higher intensity circuit work, timed intervals, and metabolic finishers. The result: rapid body composition improvement without excessive joint stress.",
    "Metabolic conditioning is the fat-loss tool most men never fully utilize. It is more powerful than any diet alone.",
    ["Perform METCON sessions 3-4x per week","Keep rest periods short: 20-40 seconds between exercises","Use compound movements only in circuit format","Add a 4-min metabolic finisher at the end of strength sessions","Track sessions and push intensity progressively each week"],
    "alpha-plus-metcon")

add("funk-roberts",["strength","power","advanced-training"],["strength","power","advanced","alpha-plus","progressive"],
    "Alpha Plus advanced programming shifts emphasis toward heavier strength work while maintaining metabolic conditioning. The programming focuses on joint-friendly heavy compound movements: trap bar deadlift, dumbbell floor press, landmine press, goblet squat, and cable row. These build significant strength without extreme spinal loading. Men over 40 need to build strength using exercises that match their mobility and joint health. Advanced methods include complex training (pairing a heavy compound lift with a plyometric exercise) and contrast training (alternating heavy and light sets to maximize neuromuscular activation).",
    "Heavy training is not off limits at 40 — it just needs to be smarter than it was at 22.",
    ["Use trap bar deadlift instead of conventional for joint-friendly loading","Dumbbell presses allow natural wrist and shoulder rotation","Landmine press is a shoulder-safe pressing option","Goblet squat keeps torso upright and reduces spinal compression","Rest 90-180 seconds on primary strength movements"],
    "alpha-plus-strength")

add("funk-roberts",["kettlebell-training","functional","conditioning"],["kettlebell","functional","conditioning","swing","over-40"],
    "Kettlebell training is one of the most effective tools for men over 40. The offset weight trains grip, core stability, and anti-rotation simultaneously. Hip-driven movements (swings, cleans, snatches) train the posterior chain powerfully without heavy spinal compression. The kettlebell swing is the single most powerful exercise for men over 40 — it simultaneously trains the posterior chain, elevates heart rate, burns fat, improves hip power, and requires no equipment beyond one bell. Mastering the hip hinge pattern first is essential before loading it.",
    "The kettlebell swing is the best single exercise for men over 40. Learn it, master it, use it for life.",
    ["Master the hip hinge before loading: push hips back, not down","Two-arm swing: 3-4 sets of 15-20 reps for strength-conditioning hybrid","Power clean to press for full body conditioning","Goblet squat for squat pattern teaching and core engagement","Kettlebell complexes: 3-5 exercises back to back, 3-4 rounds"],
    "kettlebell-training")

add("funk-roberts",["resistance-bands","travel-training","home-gym"],["bands","resistance","travel","home","no-equipment"],
    "Resistance bands are the most underrated training tool for men over 40. They eliminate the excuse of not having gym access. Quality resistance bands can replicate almost every gym movement: rows, presses, pull-aparts, squats, hinges, lateral work, and rotational exercises. The advantage for men over 40: bands provide variable resistance which aligns with the strength curve of most movements and reduces joint stress at vulnerable positions. A complete training system built around bands can maintain and even build significant muscle and strength for men who travel regularly or prefer home training.",
    "No gym, no problem. Bands in a backpack means you have a complete training system anywhere in the world.",
    ["Full body band circuit: row, press, squat, hinge, curl, extension","Use multiple bands for progressive resistance","Band pull-aparts: 20 reps daily for shoulder health","Monster walks for glute activation and hip stability","Include bands in every session for warm-up activation work"],
    "resistance-bands")

# Mobility Wave
add("dean-pohlman",["mobility","flexibility","joint-health"],["yoga","mobility","man-flow","flexibility","pain-free"],
    "Dean Pohlman\'s Man Flow Yoga addresses why most men avoid mobility work and why that avoidance is destroying their health and training. Men skip mobility because traditional yoga feels passive and disconnected from their goals. Man Flow Yoga is different: strength-focused, goal-oriented, and designed to make men better athletes and movers. Ten to fifteen minutes of targeted mobility daily can eliminate lower back pain, reduce shoulder issues, improve squat depth, increase pulling strength, and allow men to continue training with high intensity. Mobility is the oil in the engine — without it, everything eventually seizes.",
    "Mobility is not flexibility. It is control through a full range of motion. Men who have it move like athletes. Men who lack it eventually stop moving.",
    ["Morning mobility routine: 10-15 min targeting hips, shoulders, thoracic spine","World\'s greatest stretch: 30 seconds per side, daily","Hip flexor stretch: 60 seconds per side minimum","Thoracic rotation: 10 reps each side","Pigeon pose progression for deep hip opening"],
    "yoga-mobility-dean")

add("funk-roberts",["mobility","daily-practice","movement-quality"],["mobility","daily","movement","joints","flexibility"],
    "Mobility First is the principle that movement quality should always precede loading. Before adding weight, adding speed, or adding complexity, the movement pattern must be clean. Men over 40 who skip the mobility first approach tend to reinforce dysfunction under load — making movement problems worse over time and setting up inevitable injury. Five mobility categories every man over 40 should train: hip flexion and extension, shoulder flexion and rotation, thoracic rotation, ankle dorsiflexion, and spinal mobility. Address all five daily for 10-15 minutes.",
    "Move well before you move heavy. Every movement deficit will eventually express itself as pain or injury.",
    ["Hip 90/90 stretch: 60 sec each position","Thoracic rotation on all fours: 10 each side","Shoulder circles and cross-body stretch: 30 sec each","Deep squat hold: 60 seconds daily","Ankle circles and dorsiflexion stretch: 30 sec each side"],
    "mobility-first")

add("sean-fagan",["martial-arts","confidence","mental-toughness"],["muay-thai","martial-arts","confidence","conditioning","discipline"],
    "Sean Fagan of The Muay Thai Guy makes the case that Muay Thai and combat sports may be one of the most powerful tools available to men over 40. It is not just about fitness — it is about confidence, discipline, composure under pressure, and reconnecting with the physical, competitive nature that modern life suppresses. Muay Thai training for men over 40 does not require fighting or sparring — heavy bag work and pad work provide tremendous conditioning, stress relief, and skill development benefits. Men who regularly face physical challenge and discomfort carry a different confidence into every area of their life.",
    "Every man should know he can handle himself. Combat training builds that confidence from the inside out.",
    ["Heavy bag: 3-5 rounds of 2-3 min, 2x per week","Shadow boxing for movement, coordination, and cardiovascular","Pad work with a partner or coach for feedback and intensity","Focus on technique over power initially","Use Muay Thai rounds as metabolic conditioning finishers"],
    "muay-thai-over-40")

add("funk-roberts",["daily-mobility","morning-routine","joint-care"],["daily","morning","routine","joints","mobility","over-40"],
    "The daily mobility routine for men over 40 is the single highest-ROI investment of 10 minutes you can make each day. It should be done every morning before the day starts — not as part of training, but as maintenance for the machine. The routine targets the joints and muscle groups most commonly stiff in men: hip flexors, thoracic spine, shoulders, and ankles. Men who do 10 minutes of mobility every morning for 30 days typically report: elimination of morning stiffness, reduced back pain, improved training performance, and better posture throughout the day.",
    "Ten minutes of mobility every morning compounds into decades of better movement and a pain-free body.",
    ["Morning mobility order: breathe, spine, hips, shoulders, ankles","Hold each stretch 30-60 seconds minimum — do not rush","Make it meditative — use it as a morning mindfulness practice","Track consistency — 30 day daily challenge to build the habit","Gradually add range as flexibility improves"],
    "daily-mobility")

add("funk-roberts",["hip-mobility","lateral-hip","lower-body"],["hip","lateral","adductor","mobility","lower-body","over-40"],
    "Lateral hip and adductor mobility is one of the most neglected areas in men\'s fitness — and one of the most important for men over 40. Tight adductors and lateral hip muscles contribute to knee pain, lower back pain, pelvic tilt, and reduced athletic performance. The Alpha Metabolic Lateral Hip Protocol: Side Leg Adductor Raises (15 reps each side), Dynamic Reverse Lying Frog Stretch (15 reps), Fire Hydrants (15 reps each side), Lying Dynamic Butterfly Stretch (15 reps), and sustained holds for fire hydrant hold, split stretch, and frog resistance stretch. Train this protocol 3 times per week.",
    "Tight hips are not a sign of age — they are a sign of neglect. Address them directly and they respond remarkably.",
    ["Side leg adductor raises: 15 reps each side for activation","Fire hydrants: 15 reps each side for glute med and hip flexibility","Frog stretch: hold for 30-60 seconds to open inner groin","Fire hydrant hold: 15 seconds each side for strength + mobility","Frequency: 3x per week minimum"],
    "hip-stretch")

add("funk-roberts",["ROM","range-of-motion","stretching"],["ROM","range-of-motion","stretching","flexibility","recovery"],
    "The Alpha ROM Stretching System is a progressive flexibility and recovery protocol designed to systematically improve full-body range of motion for men over 40. The system addresses six major areas: shoulder complex, thoracic spine, hip flexors, hamstrings, groin and adductors, and ankle and calf complex. Each area is targeted with both dynamic (movement-based) and static (held position) stretching. The system prioritizes the areas most commonly restricted in men over 40 due to desk work, heavy training, and the natural effects of aging on connective tissue.",
    "Flexibility is earned, not inherited. Consistent stretching work systematically unlocks range of motion at any age.",
    ["Shoulder: cross-body stretch, doorframe chest stretch, behind-head tricep","Thoracic: foam roller extension, thread-the-needle rotation","Hip flexors: kneeling lunge stretch, couch stretch","Hamstrings: RDL stretch, lying hamstring stretch","Complete full routine 3x per week, target areas daily"],
    "alpha-rom-stretch")

# ============================================================
# WAVE 6 — Hormones (fr-066 to fr-072)
# ============================================================

add("dr-mike-fortunato",["hormone-optimization","testosterone","health"],["hormones","testosterone","optimal","health","sovereignty"],
    "Dr. Mike Fortunato exposes one of the biggest problems in modern healthcare: confusing \'normal\' with \'optimal.\' Millions of men over 40 are struggling with fatigue, low libido, brain fog, stubborn belly fat, poor recovery, and loss of drive. They get blood work and are told everything is \'normal.\' But normal reference ranges are not the standard of a thriving, vital man. The concept of sovereignty: when men regain their energy, clarity, and vitality, they begin asking deeper questions about purpose, passion, and fulfillment. This interview is about more than fixing hormones. It is about rebuilding the man.",
    "Normal is not the same as optimal. A man can be within the normal range and still feel terrible. We should not accept that.",
    ["Get comprehensive bloodwork: total T, free T, SHBG, estradiol, DHEA-S, thyroid panel","Know the difference: normal range vs. optimal range","Address lifestyle BEFORE considering any hormonal intervention","Work with a physician who understands optimal, not just normal","Test at the same time of day (morning) for consistent results"],
    "hormone-optimization")

add("dr-mike-fortunato",["testosterone","symptoms","assessment"],["testosterone","symptoms","low-T","diagnosis","men-over-40"],
    "The symptoms of suboptimal testosterone in men over 40 are specific and recognizable: persistent fatigue despite adequate sleep, reduced motivation and drive, increased belly fat especially around the midsection, decreased muscle mass despite training, low libido, erectile dysfunction, brain fog, depression or mood dysregulation, poor recovery from training, and loss of competitive drive. Many men normalize them as just getting older when they are actually signs of hormonal dysfunction that can be addressed. The first step is recognizing the pattern and taking action — not accepting decline as inevitable.",
    "Feeling terrible is not normal aging. Declining testosterone is addressable — but only if you recognize the symptoms and act.",
    ["Track your symptoms: energy, libido, mood, body composition, drive","Correlate symptoms with bloodwork for complete picture","Do not wait for symptoms to be severe before investigating","Lifestyle optimization first: sleep, training, stress, nutrition","Retest after 90 days of lifestyle changes before considering further intervention"],
    "hormone-symptoms")

add("logan-christopher",["natural-testosterone","pine-pollen","phytoandrogens"],["pine-pollen","natural","testosterone","phytoandrogens","herbal"],
    "Logan Christopher introduces pine pollen as an ancient superfood with potential effects on testosterone, free testosterone, libido, recovery, and prostate health. Pine pollen contains phytoandrogens — plant compounds that may interact with the body\'s androgen systems. The research landscape shows promising results for testosterone-related symptom improvement. The conversation also explores the broader impact of environmental endocrine disruptors — xenoestrogens from plastics, pesticides, and chemicals that are suppressing testosterone across the male population.",
    "We are swimming in a sea of endocrine disruptors. Protecting and supporting testosterone naturally is not optional — it is essential.",
    ["Pine pollen tincture: phytoandrogens are absorbed sublingually — hold under tongue","Eliminate plastic food and water containers — use glass and stainless steel","Filter tap water to reduce xenoestrogens and chemicals","Eat organic where possible to reduce pesticide load","Support liver detox: cruciferous vegetables help metabolize excess estrogen"],
    "pine-pollen")

add("mike-ranfone",["nutrition","muscle","metabolism"],["nutrition","muscle","metabolism","strategy","over-40"],
    "Mike Ranfone and Dr. Marko Lujic break down the three pillars of men\'s health after 40: nutrition, muscle, and metabolism. Most men over 40 do not have a nutrition problem — they have a strategy problem. They have tried diets. They have cut carbs. They have fasted. And nothing sticks because they are using approaches designed for younger men. The three pillars work together: optimal nutrition feeds muscle building, muscle building drives metabolic rate, and a healthy metabolism makes nutrition adherence easier. Data-driven approaches — tracking metrics, getting bloodwork, measuring progress — outperform guesswork.",
    "Most men do not have a nutrition problem. They have a strategy problem. The system needs to change, not just the diet.",
    ["Pillar 1: Nutrition — prioritize protein, real food, sustainability","Pillar 2: Muscle — resistance train consistently to drive metabolic rate","Pillar 3: Metabolism — sleep, stress, and hormonal optimization","Use data to drive decisions: track, test, adjust","Address all three pillars simultaneously — neglecting one undermines the others"],
    "three-pillars-health")

add("funk-roberts",["natural-testosterone","lifestyle","optimization"],["testosterone","natural","lifestyle","optimization","no-drugs"],
    "The natural testosterone optimization protocol for men over 40 is built on six pillars that compound when applied consistently. Pillar 1: Resistance training — heavy compound lifts 3-4x per week stimulate significant testosterone production. Pillar 2: Sprint and high-intensity work — explosive exercise acutely elevates testosterone and growth hormone. Pillar 3: Sleep 7-9 hours — 90% of daily testosterone is produced during sleep. Pillar 4: Stress management — chronically elevated cortisol directly suppresses testosterone production. Pillar 5: Nutrition — adequate healthy fats, zinc, vitamin D, and magnesium are raw materials for testosterone synthesis. Pillar 6: Eliminating suppressors — alcohol, endocrine disruptors, and chronic caloric restriction all suppress testosterone.",
    "Your lifestyle is either feeding or starving your testosterone. Every daily decision has a hormonal consequence.",
    ["Lift heavy 3-4x per week: squats, deadlifts, presses, rows","Sprint or HIIT 1-2x per week for acute T and GH spike","Sleep 7-9 hours every night — non-negotiable","Manage cortisol: breathwork, recovery, and stress reduction","Eat adequate healthy fats: eggs, avocado, olive oil, fatty fish"],
    "natural-testosterone-protocol")

# ============================================================
# WAVE 8 — Mindset (fr-079 to fr-086)
# ============================================================

add("funk-roberts",["warrior-mindset","discipline","transformation"],["warrior","mindset","discipline","30-day","transformation"],
    "The Warrior Mindset Reset is a 30-day implementation plan designed to break self-sabotaging habits, build discipline and mental toughness, and start operating like a man who fights back — no matter what. Phase 1 (Days 1-7): The Wake-Up Call. Face reality without filters — identify habits destroying your health, where you are lying to yourself, and what you are avoiding. Identify your emotional Why — who needs you healthy. Cut one destructive habit immediately. Phase 2 (Days 8-21): Rebuild the Foundation. Create daily structure: movement, whole food meals, hydration, sunlight. Phase 3 (Days 22-30): Mental Toughness and Identity Shift. You are either drifting or you are fighting. Warriors do not wait for motivation — they act.",
    "You are either drifting or you are fighting. There is no middle ground. Warriors act.",
    ["Day 1: Write honestly — habits killing you, where you lie to yourself, what you avoid","Day 2: Identify your Why emotionally — who needs you strong","Day 3: Cut ONE destructive habit immediately — do not negotiate","Days 8-21: Build daily structure with movement, food, water, sunlight","Days 22-30: Identity shift — become the man you need to be"],
    "warrior-mindset")

add("funk-roberts",["self-awareness","growth-mindset","personal-development"],["self-awareness","growth","mindset","development","men"],
    "The Alpha Mindset Academy builds men from the inside out through structured modules addressing the full spectrum of mental and emotional development. Module 1 addresses Self-Understanding: self-awareness, SMART goal setting, emotional intelligence, positive psychology, mindfulness, and growth mindset. The foundation insight: most men who fail in their health pursuits do not fail for lack of knowledge or even motivation — they fail because of unresolved internal patterns, limiting beliefs, and emotional reactivity that override their intentions. Fixing the mindset is not secondary to fixing the body — it is the prerequisite.",
    "You cannot outwork a broken mindset. Fix the foundation first — everything else is easier from there.",
    ["Self-assessment: identify your top 3 strengths and 3 areas for growth","Set SMART health goals: Specific, Measurable, Achievable, Relevant, Time-bound","Practice emotional regulation: pause before reacting, especially under stress","Gratitude journaling: 3 things daily, builds positive neural pathways","Growth mindset: reframe \'I failed\' as \'I learned\'"],
    "alpha-mindset-academy")

add("funk-roberts",["life-purpose","meaning","direction"],["purpose","meaning","life","alpha","coaching"],
    "Finding life purpose is not a luxury for men over 40 — it is a health imperative. Research consistently shows that men with a strong sense of purpose live longer, recover from illness faster, have lower rates of cardiovascular disease, and report dramatically higher life satisfaction. Purpose is not found — it is constructed through the intersection of what you are good at, what the world needs, what you love, and what you can be paid for. For men in midlife, purpose often expands beyond personal achievement to impact, contribution, and legacy.",
    "Purpose is not found. It is built. And without it, health optimization is just optimizing for an empty life.",
    ["Define your values: what matters most to you at this stage of life","Identify your unique contribution: what do you do that few others can","Connect purpose to health: frame training as preparation for your mission","Build legacy: what do you want to leave behind for the next generation","Review and refine purpose annually — it evolves as you do"],
    "life-purpose-coaching")

add("funk-roberts",["gratitude","mental-health","positive-psychology"],["gratitude","mindfulness","positive","mental-health","happiness"],
    "Gratitude practice is one of the most evidence-supported mental health interventions available. Regular gratitude practice reduces cortisol, improves sleep quality, increases emotional resilience, reduces symptoms of depression and anxiety, and strengthens social bonds. For men over 40 who are conditioned to focus on problems and solutions, gratitude practice rewires the brain toward recognition of what is working — which directly impacts energy, motivation, and wellbeing. The practice does not need to be long or elaborate: three specific things you are grateful for each morning, written by hand, creates measurable changes in brain chemistry and outlook within 21 days of consistency.",
    "Gratitude is not soft. It is neurological reprogramming that reduces cortisol and rewires your brain toward strength.",
    ["Write 3 specific gratitudes each morning — handwritten is more effective","Be specific: not \'my family\' but \'my son\'s laugh this morning\'","Include gratitude for your health and body","Share gratitude with others — it strengthens relationships","30-day gratitude challenge to build the neural pathway"],
    "alpha-mindset-gratitude")

add("funk-roberts",["growth-mindset","resilience","learning"],["growth","fixed","mindset","resilience","learning","failure"],
    "The growth mindset — the belief that abilities and intelligence can be developed through dedication and hard work — is the psychological foundation of all lasting transformation. Men with fixed mindsets create self-fulfilling prophecies that guarantee mediocrity. Men with growth mindsets see challenges as opportunities, setbacks as feedback, and effort as the path to mastery. For men over 40 in health transformation, the growth mindset shows up as: trying a new exercise program despite uncertainty, returning to training after a setback, seeking feedback from coaches, and reframing \'I failed\' as \'I learned what does not work for me.\'",
    "Fixed mindset says \'I cannot.\' Growth mindset asks \'how do I?\' That one shift changes everything.",
    ["Identify your fixed mindset triggers: where do you say \'I can\'t\'?","Replace \'I can\'t\' with \'I can\'t yet — what do I need to learn?\'","Celebrate effort and progress, not just outcome","Seek feedback actively — it accelerates growth","Reframe every setback: what did this teach me?"],
    "growth-mindset")

add("funk-roberts",["mental-mastery","discipline","focus"],["mental","mastery","discipline","focus","performance"],
    "Mental mastery is the ability to direct attention, manage emotional states, and maintain consistent action toward goals regardless of external circumstances or internal resistance. The core mental mastery skills: attentional control (the ability to focus on what matters and ignore what doesn\'t), emotional regulation (the ability to feel negative emotions without being controlled by them), and commitment consistency (the ability to honor promises made to yourself even when motivation is absent). These skills are trained like physical skills — through repeated, deliberate practice.",
    "Mental mastery is not about eliminating doubt or fear. It is about acting despite them. That is the real definition of discipline.",
    ["Attentional training: 10 min focused work without interruption daily","Emotional regulation: pause, breathe, assess before reacting","Keep promises to yourself: start small but keep every commitment","Visualization: 5 min daily mentally rehearsing your best performance","Cold exposure: 90-second cold shower trains tolerance for discomfort"],
    "mental-mastery")

add("funk-roberts",["identity","transformation","self-concept"],["identity","transformation","self-concept","over-40","who-you-are"],
    "Identity is the most powerful driver of behavior — more powerful than willpower, goals, or accountability. Men act in accordance with who they believe they are. If a man believes he is \'the kind of person who struggles with his weight,\' every attempt at change is fighting against his own self-concept. The identity transformation comes first: deciding who you are before the evidence fully supports it. \'I am a man who trains four days a week.\' \'I am a man who prioritizes sleep.\' Once the identity is established, behaviors that align with it feel natural. Behaviors that contradict it feel wrong. This is how transformation becomes permanent rather than temporary.",
    "Act as the man you want to become — before you fully are that man. Identity leads behavior.",
    ["Write your new identity statement in present tense: \'I am...\'","Ask before every decision: \'What would a healthy man do here?\'","Find evidence of your new identity daily — even small actions count","Surround yourself with men who hold the identity you want","Be patient — identity change takes months, not weeks"],
    "identity-transformation")

# ============================================================
# WAVE 9 — REAL Pillars (fr-087 to fr-094)
# ============================================================

add("funk-roberts",["radical-ownership","accountability","responsibility"],["radical-ownership","REAL","accountability","responsibility","alpha"],
    "Pillar 1 of the REAL Alpha Men system: Radical Ownership. The only reason any man ends up overweight, tired, inconsistent, low testosterone, stressed out, or disconnected is because somewhere along the line, he stopped owning his situation. Your \'why\' will not save you on a Tuesday night when you are staring at chips in the pantry. What sustains action is Ownership — not a feeling, but a decision. Radical Ownership means: no excuses about time, money, or life circumstances. You own your health outcomes completely. The moment you blame something outside yourself, you surrender the power to change.",
    "Stop waiting for the right time, the right circumstances, the right motivation. Own it now. That is the only move that works.",
    ["Write down every excuse you make for your health — own each one","Replace \'I don\'t have time\' with \'This is not my current priority\'","Take full responsibility for your body, energy, and health today","Stop waiting for motivation — take action and motivation follows","Daily commitment: one decision today that the healthy version of you would make"],
    "pillar1-radical-ownership")

add("funk-roberts",["evolution","growth","continuous-improvement"],["evolution","REAL","growth","improvement","continuous"],
    "Pillar 2 of the REAL Alpha Men system: Evolution. Real Alpha Men are never finished. They are always in the process of becoming a better version of themselves. Evolution requires embracing discomfort — the body and mind only grow when pushed beyond current capacity. Men who stay comfortable stay stuck. The evolutionary mindset applied to health: each month you should be able to point to something that is measurably better than it was. Stronger lift, better bloodwork, more consistent sleep, reduced body fat, improved mobility. If you cannot point to evidence of evolution, you are maintaining at best — or declining.",
    "You are never the finished product. Every day is an opportunity to become more of who you are capable of being.",
    ["Monthly evolution review: what is better this month versus last month?","Push past comfort zones in every training session — progressive overload","Read, learn, apply: invest 30 min daily in personal development","Seek feedback from coaches and mentors — external perspective accelerates evolution","Commit to being better at 50 than at 40, and better at 60 than at 50"],
    "pillar2-evolution")

add("funk-roberts",["alignment","discipline","structure"],["alignment","REAL","discipline","structure","freedom"],
    "Pillar 3 of the REAL Alpha Men system: Alignment. Most men do not fail because the program does not work — they fail because they refuse to align with the program. Freedom does not come from flexibility — freedom comes from structure. When your daily actions are aligned with your goals, results are inevitable. When there is misalignment — wanting health but choosing destructive habits — you create internal conflict that drains energy and produces zero progress. Alignment means your identity, your decisions, your daily actions, and your goals are all pointing in the same direction.",
    "Freedom comes through structure, not despite it. Aligned men move fast. Misaligned men spin their wheels.",
    ["Audit alignment: list your health goals then list your daily actions","Identify the gaps: where do your actions contradict your goals?","Remove one misalignment per week — small consistent corrections","Morning alignment ritual: review your goals before the day starts","Structure creates freedom — commit to the system fully for 90 days"],
    "pillar3-alignment")

add("funk-roberts",["leadership","masculine-leadership","example"],["leadership","REAL","example","family","masculine"],
    "Pillar 4 of the REAL Alpha Men system: Leadership. Real men lead — not by demanding respect but by earning it through example. The first domain of masculine leadership is self-leadership: the ability to manage yourself consistently before attempting to lead others. Family leadership through health: when a father transforms his body and energy, the ripple effect on his family is enormous. Children see that health is achievable and important. Spouses see commitment and capability. A healthy father is one of the greatest gifts a man can give his family.",
    "You lead by becoming. The healthiest man in the room does not need to say a word — his presence speaks.",
    ["Lead self first: manage your health, energy, and disciplines before leading others","Be transparent about your health journey with your family","Include family in health activities: cook together, train together, hike together","Model the behaviors you want your children to adopt","Lead your social circle toward health — your transformation gives others permission"],
    "pillar4-leadership")

add("funk-roberts",["brotherhood","community","connection"],["brotherhood","REAL","community","men","support"],
    "Pillar 5 of the REAL Alpha Men system: Brotherhood. Men are not designed to go it alone. The ancient model of male community — training together, holding each other accountable, being honest with each other — is what sustained men for millennia. Modern men have lost this. Isolation and loneliness are epidemic among men over 40. Brotherhood in the Over 40 Alpha context means: being part of a community of men who hold each other to high standards, celebrate each other\'s victories, support each other through challenges, and refuse to let each other settle for less than their potential.",
    "A man with a strong brotherhood is unstoppable. A man alone is always fighting on two fronts.",
    ["Join the Over 40 Alpha Brotherhood community","Find 1-2 accountability partners you check in with weekly","Be honest with your brothers about your struggles — vulnerability is strength","Celebrate others\' victories genuinely","Show up consistently — brotherhood is built through reliability"],
    "pillar5-brotherhood")

add("funk-roberts",["resilience","adversity","mental-toughness"],["resilience","adversity","grit","bounce-back","mental-toughness"],
    "Pillar 6 of the REAL Alpha Men system: Resilience. Life for men over 40 is full of setbacks, challenges, injuries, stressors, and unexpected obstacles. Resilience is not the absence of these challenges. Resilience is the ability to be knocked down and get back up — consistently, without excuses, with lessons learned. Health setbacks are inevitable: missed training weeks, periods of poor eating, sleep deprivation from life demands, injuries, and plateaus. The resilient man does not spiral into shame or abandon his efforts. He assesses, adjusts, and returns.",
    "Every man gets knocked down. The resilient man asks \'what do I do next?\' — not \'why did this happen to me?\'",
    ["When you miss training: return the next day, no self-punishment","When you eat poorly: next meal is clean — no spiral, no writing off the day","Injury protocol: see a professional, train what you can, address what hurts","Failure debrief: what happened, what did I learn, what do I do differently","Build resilience proactively: seek discomfort regularly so you are prepared"],
    "pillar6-resilience")

add("funk-roberts",["habits-systems","consistency","lifestyle"],["habits","systems","REAL","consistency","lifestyle"],
    "Pillar 7 of the REAL Alpha Men system: Systems and Habits. Warriors do not rely on motivation — they build systems that produce consistent action regardless of how they feel. The health system for men over 40 includes: a fixed training schedule (same times, same days), meal prep routine (Sunday batch cooking), sleep system (consistent bedtime ritual), supplement routine (same time, same place daily), and weekly review (assess and adjust). When these systems are in place, willpower becomes irrelevant. The right behavior happens because the system makes it happen.",
    "Motivation is a visitor. Systems are permanent residents. Build the system and stop waiting for the visitor.",
    ["Training: schedule 4 fixed sessions per week like non-negotiable meetings","Nutrition: prep 4-5 meals on Sunday, default to prepped food during the week","Sleep: same bedtime 7 days a week, bedroom optimized for sleep","Supplements: set out the next day\'s supplements the night before","Weekly review: 15 min to assess wins, struggles, and next week\'s priorities"],
    "pillar7-habits-systems")

add("funk-roberts",["legacy","purpose","impact"],["legacy","REAL","purpose","impact","second-half"],
    "Pillar 8 of the REAL Alpha Men system: Legacy. The final pillar asks the most important question a man over 40 can ask: What are you building this health for? Legacy is not about fame or monuments. It is about the impact you have on the people directly in your life. A healthy father who trains consistently is teaching his children that health is achievable and worth fighting for. A healthy grandfather who plays with his grandchildren is demonstrating that vitality does not have to end at 60. Your health is not just about you — it is the foundation of your capacity to contribute, love, lead, and serve.",
    "Your health is not the destination. Your health is the vehicle that takes you to everything that matters.",
    ["Define your legacy statement: what do you want to be remembered for?","Connect daily health actions to legacy impact","Invest in relationships that will define your legacy","Mentor younger men — your experience is a gift they need","Think 20 years forward: what does the healthiest version of you at 60 look like?"],
    "pillar8-legacy")

# ============================================================
# WAVE 10-11 — Nutrition + Stretch (fr-095 to fr-107)
# ============================================================

add("funk-roberts",["nutrition","testosterone-boosting","eating-lifestyle"],["nutrition","testosterone","meta-test-boost","eating","over-40"],
    "The Meta Test Boost Nutrition System is not a diet — it is a testosterone-boosting eating lifestyle designed for men over 40. The core principle: you do not count calories. You build balanced plates using a structured approach that automatically provides the right macronutrients. The balanced plate formula: 40% protein (palm-sized portion of lean protein), 30% complex carbohydrates (fist-sized portion from whole food sources), 20% healthy fats (thumb-sized portion), and as many vegetables as you want. Pick your go-to foods for the week, meal prep, and default to your prepped options. The simplicity is the system.",
    "The Meta Test Boost system is not a diet. It is a testosterone-feeding eating lifestyle. Eat to perform, not to starve.",
    ["Balanced plate: 40% protein, 30% carbs, 20% fats, unlimited vegetables","Pick 4-5 go-to meals you enjoy and prep them Sunday","Eat every 3-4 hours to maintain stable blood sugar and protein synthesis","Protein sources: chicken, turkey, beef, eggs, fish, Greek yogurt","Complex carbs: sweet potato, rice, oats, quinoa, fruit"],
    "nutrition-men-40-mtb")

add("funk-roberts",["protein","protein-sources","muscle-preservation"],["protein","muscle","sources","over-40","anabolic"],
    "Protein is the most critical macronutrient for men over 40 — and most men are chronically undereating it. The minimum target for muscle preservation and building: 1g per pound of bodyweight daily. Optimal for active men: 1.2-1.5g per pound. Top protein sources: chicken breast (31g per 100g), ground turkey (27g per 100g), salmon (25g per 100g — also provides omega-3s), eggs (6g each, complete amino acid profile), Greek yogurt (17g per 170g — also provides probiotics), cottage cheese (25g per cup — slow-digesting casein, excellent before bed). Protein timing: distribute evenly across 4-5 meals. Never go more than 5 hours without protein during waking hours.",
    "Protein is not just for bodybuilders. Every man over 40 who wants to maintain muscle, strength, and metabolism needs to prioritize protein relentlessly.",
    ["Target 1-1.5g protein per pound of bodyweight daily","Distribute across 4-5 meals — never skip protein","Post-training: 30-50g quality protein within 2 hours","Before bed: 20-30g slow-digesting casein (cottage cheese, Greek yogurt)","Add protein powder to fill gaps — whey for fast absorption, casein for slow"],
    "protein-protocol")

add("funk-roberts",["nutrition-rules","eating-guidelines","coaching"],["nutrition","rules","guidelines","coaching","over-40"],
    "The Over 40 Alpha nutrition system is built on non-negotiable rules. Rule 1: Never skip breakfast — protein within 60 minutes of waking stabilizes blood sugar and prevents muscle breakdown. Rule 2: Water first — drink 500ml of water upon waking before anything else. Rule 3: Eliminate liquid calories — no juice, soda, or alcohol. Rule 4: 80/20 rule — eat clean 80% of the time and allow flexibility 20%. Rule 5: Never go to a social event hungry — eat beforehand so temptation is manageable. Rule 6: Food quality over calorie counting — focus on nutrient density. Rule 7: Read labels — if you cannot pronounce the ingredients, do not eat it.",
    "Nutrition rules are not restrictions. They are the structure that makes transformation possible and sustainable.",
    ["Drink 500ml water immediately upon waking","Eat protein within 60 min of waking","Eliminate all liquid calories: juice, soda, most alcohol","80/20 rule: clean 80% of the time, flexible 20%","Never arrive at social events or restaurants hungry"],
    "nutrition-rules")

add("funk-roberts",["meal-plan","30-day","nutrition"],["meal-plan","30-day","MTB","nutrition","testosterone"],
    "The Meta Test Boost 30-Day Meal Plan provides complete structure for the first month of testosterone-boosting nutrition. Week 1 focuses on elimination: removing processed foods, alcohol, and sugar while establishing the balanced plate habit. Week 2 adds meal prep: cooking 4-5 meals on Sunday to eliminate weekday decision fatigue. Week 3 refines: adjusting portion sizes based on energy, hunger, and training performance. Week 4 optimizes: fine-tuning the system for long-term sustainability. Testosterone-boosting foods prioritized: eggs, fatty fish, lean red meat, cruciferous vegetables, nuts and seeds, avocados, and olive oil.",
    "A meal plan is just a plan. The transformation happens when you follow it consistently for 30 days and build the habit.",
    ["Week 1: elimination — remove processed food, sugar, alcohol","Week 2: prep — cook Sunday for the full week ahead","Week 3: adjust — calibrate portions to energy and performance","Week 4: optimize — refine for long-term adherence","Testosterone-boosting foods daily: eggs, leafy greens, fatty fish, olive oil"],
    "mtb-meal-plan")

add("funk-roberts",["fat-loss","abdominal","cutting-body-fat"],["abs","fat-loss","body-fat","cutting","lean"],
    "Visible abs at 40+ is absolutely achievable — but it requires addressing the specific hormonal and metabolic factors that make fat loss harder after 40. The key insight: abs are not made in the gym, they are revealed through nutrition. The fat-loss approach for men over 40: a modest caloric deficit (300-500 calories below maintenance), high protein to preserve muscle (1.2g+ per pound), resistance training to maintain metabolic rate, and stress management to reduce cortisol-driven belly fat storage.",
    "The abs are already there. Your job is to create the conditions to reveal them — and those conditions are mostly nutritional.",
    ["Caloric deficit: 300-500 calories below maintenance maximum","High protein: 1.2-1.5g per pound to preserve muscle while cutting","Resistance train 4x per week to maintain metabolic rate","Reduce cortisol: sleep, stress management, adequate recovery","Track body composition monthly — scale weight is misleading"],
    "eat-for-abs")

add("funk-roberts",["blood-sugar","diabetes-prevention","insulin"],["blood-sugar","diabetes","insulin","prevention","metabolic"],
    "Men over 40 are at significant risk for insulin resistance and Type 2 diabetes — often without knowing it. Prevention is dramatically easier than reversal. The lifestyle protocol for insulin sensitivity: resistance training 3-4x per week (muscle is the primary site of glucose disposal), reducing refined carbohydrates and sugar, walking after every meal (10-15 min post-meal walk reduces blood glucose spike by 30%), losing visceral belly fat, and monitoring fasting glucose and HbA1c annually.",
    "Type 2 diabetes is largely preventable and often reversible with the right lifestyle interventions. Do not wait for the diagnosis.",
    ["Resistance train 3-4x per week — muscle is your primary glucose disposal site","Walk 10-15 min after meals to reduce post-meal blood glucose spike","Reduce refined carbs and sugar","Monitor fasting glucose and HbA1c annually","Lose visceral belly fat — it directly drives insulin resistance"],
    "diabetes-nutrition")

add("funk-roberts",["hydration","water","performance"],["hydration","water","performance","testosterone","recovery"],
    "Hydration is one of the most overlooked performance and recovery variables for men over 40. Even 2% dehydration significantly impairs strength output, cognitive function, and recovery. The testosterone connection: adequate hydration is required for hormonal transport — testosterone and growth hormone circulate in the blood, which is 83% water. The daily hydration target: minimum 3-4 liters for active men over 40, more during intense training days or hot weather. Key strategy: drink 500ml immediately upon waking, then work toward consistent hydration throughout the day.",
    "Your blood is 83% water. Your hormones travel in that blood. Dehydration is not just thirst — it is a hormonal emergency.",
    ["Wake-up: 500ml water immediately, before coffee","Minimum 3-4 liters daily for active men","Add electrolytes if training more than 60 min or sweating heavily","Monitor: urine should be pale yellow throughout the day","Increase intake in hot weather and on training days"],
    "hydration")

add("funk-roberts",["stretching","flexibility","post-workout"],["stretching","flexibility","post-workout","recovery","cooldown"],
    "The Alpha Stretching System addresses the most common flexibility limitations in men over 40. The system distinguishes between three types: Dynamic stretching (pre-workout — controlled movement through range of motion), Active static stretching (immediate post-workout — hold 20-30 seconds while muscles are warm), and Passive static stretching (evening or rest days — deeper holds of 45-60 seconds for structural flexibility improvement). The six essential stretch categories for men over 40: chest and anterior shoulder, hip flexors, hamstrings, thoracic extension, glutes and piriformis, and calves and plantar fascia.",
    "Stretching is not punishment after a workout. It is the recovery investment that keeps you training for the next decade.",
    ["Post-workout static holds: 20-30 seconds, while muscles are warm","Evening passive stretching: 45-60 seconds for structural gains","Priority areas: chest, hip flexors, hamstrings, thoracic, glutes, calves","Foam roll before stretching to improve tissue quality","Daily minimum: hip flexors and chest/shoulders — the most chronically tight areas"],
    "alpha-stretch")

# ============================================================
# WAVE 12 — Sleep (fr-103 to fr-109)
# ============================================================

add("funk-roberts",["sleep","testosterone","recovery"],["sleep","testosterone","recovery","deep-sleep","over-40"],
    "The Alpha Sleep Philosophy establishes sleep as the #1 recovery weapon for men over 40. Non-negotiable truth: 90% of daily testosterone is produced during deep sleep and REM sleep within the first 3-5 sleep cycles. When sleep is broken, testosterone is broken. You cannot out-train, out-eat, or out-supplement poor sleep. The approach: sleep is a relationship, not a transaction. Great sleep is the natural outcome of how you structure your day — your light exposure, movement, nutrition timing, stress management, and nervous system regulation. Consistency is more important than perfection.",
    "90% of your testosterone is produced during sleep. Protect your sleep like it is your most important training session — because it is.",
    ["Consistent sleep/wake time: same times every day including weekends","Sleep goal: 7-9 hours, with 7.5 as the minimum for testosterone optimization","Bedroom: cool (65-68F), dark (blackout curtains), quiet (white noise if needed)","No screens 60 min before bed — blue light suppresses melatonin","Get morning sunlight within 30 min of waking to anchor circadian rhythm"],
    "sleep-philosophy")

add("funk-roberts",["sleep-recovery","bad-night","bounce-back"],["sleep","bad-night","recovery","cortisol","fat-burning"],
    "After a bad night of sleep, men over 40 face compounded challenges: elevated cortisol, slowed metabolism, increased sugar cravings, lower testosterone, and disrupted fat-burning rhythm. The key: one bad night will not ruin progress — unless you let it spiral. The 6-Step Sleep Recovery Protocol: Step 1 — Wake at your normal time, even on 4-5 hours. Step 2 — Get morning sunlight immediately to reset the clock. Step 3 — Hydrate and eat protein at your normal breakfast time. Step 4 — Do a 20-minute training session if possible. Step 5 — Avoid caffeine after 12pm. Step 6 — Go to bed 30 min earlier that night, same routine.",
    "One bad night is just a bad night. Spiraling into a bad week is a choice. The protocol brings you back fast.",
    ["Wake at normal time even after poor sleep — do not sleep in","Get morning sunlight immediately to reset circadian clock","Eat protein breakfast at normal time","Light exercise: even 20-min walk helps cortisol clearance","Bed 30 min early that night — same routine, no screens"],
    "sleep-fix-bad-night")

add("funk-roberts",["sleep-reset","nighttime-waking","sleep-protocol"],["sleep","reset","waking","middle-of-night","protocol"],
    "The 7-Minute Sleep Reset Protocol is designed for men over 40 who wake at night and struggle to fall back asleep. The root causes: cortisol spike, blood sugar drop, poor sleep environment, or anxiety. The protocol: Step 1 — Stop looking at the clock (looking triggers stress). Step 2 — 4-7-8 Breathing for 1 minute (inhale 4, hold 7, exhale 8). Step 3 — Progressive muscle relaxation from feet upward. Step 4 — Mental body scan focusing attention on physical sensations. Step 5 — Gratitude reframe — three things you are grateful for. Step 6 — If still awake after 20 min, get up, do something quiet, return when sleepy. Step 7 — Never force sleep.",
    "Do not fight waking in the night. Use the 7-minute protocol to guide yourself gently back to sleep.",
    ["Stop looking at the clock — set it across the room","4-7-8 breathing: inhale 4, hold 7, exhale 8 — repeat 4-6 times","Progressive muscle relaxation: tense and release from feet to head","Body scan meditation: focus on sensations, release thoughts","If awake 20+ min: get up, read quietly, return when sleepy — do not force it"],
    "sleep-reset-protocol")

add("funk-roberts",["sleep-importance","sleep-science","health"],["sleep","science","health","why","importance"],
    "Sleep deprivation in men over 40 has been directly linked to: 15% reduction in testosterone after one week of 5-hour nights, significant increase in cortisol, reduced insulin sensitivity leading to fat gain, impaired cognitive function comparable to legal intoxication, increased inflammatory markers, and elevated cardiovascular disease risk. Despite this evidence, men consistently undervalue sleep. The irony: men who sleep 7-9 hours are more productive, sharper, stronger, and more emotionally regulated than men who sleep 5-6 hours and feel \'fine.\'",
    "Sleep deprivation is not a badge of honor. It is slow-motion self-destruction. Protect your sleep.",
    ["Track sleep with a wearable device to understand your actual sleep architecture","Prioritize sleep over late-night entertainment","Feeling fine on 6 hours means you have adapted to dysfunction, not that you are doing well","Treat poor sleep as seriously as missing training sessions","30-day experiment: optimize sleep to 8 hours and track energy, performance, and mood"],
    "why-sleep-matters")

add("funk-roberts",["sleep","circadian-rhythm","sleep-quality"],["sleep","circadian","rhythm","quality","light","temperature"],
    "Sleep Pillar 2 addresses the sleep environment and daily habits that determine sleep quality. Temperature: the optimal sleep temperature is 65-68 degrees F — body temperature must drop to initiate and maintain deep sleep. Light: complete darkness is ideal. Even small amounts of light through eyelids suppress melatonin. Blackout curtains or a sleep mask are non-negotiable for optimal sleep. Noise: white noise or earplugs mask disruptive sounds. Evening routine: the 60 minutes before bed should be device-free, low-stimulation, and consistent.",
    "The sleep environment is not a comfort luxury — it is the control panel for your hormonal recovery. Optimize it.",
    ["Temperature: 65-68F — cool room, warm socks or blanket","Light: blackout curtains or quality sleep mask — complete darkness","Noise: white noise machine or fan to mask disruptions","Evening routine: devices off 60 min before bed, same sequence nightly","Bedding: invest in quality mattress and pillow"],
    "sleep-pillar2")

add("funk-roberts",["sleep-supplements","natural-sleep","melatonin"],["sleep","supplements","melatonin","magnesium","natural"],
    "Natural sleep supplementation for men over 40 focuses on supporting the body\'s own sleep mechanisms rather than sedation. Key supplements: Magnesium glycinate (300-400mg, 30-60 min before bed) — the most universally effective sleep supplement for men, supports GABA activity and relaxes muscles. Melatonin (0.5-1mg, 60-90 min before bed) — effective for circadian rhythm correction and travel. L-theanine (200mg) — promotes relaxed alertness, reduces pre-sleep anxiety. Ashwagandha (300-600mg daily) — reduces cortisol chronically, improving sleep quality over weeks. Avoid sleep sedation supplements — they suppress deep sleep architecture.",
    "Natural sleep supplementation supports the body\'s systems. Pharmaceutical sedation suppresses them. Know the difference.",
    ["Magnesium glycinate: 300-400mg, 30-60 min before bed","Melatonin: 0.5mg is sufficient — bigger dose is not better","L-theanine: 200mg for pre-sleep anxiety and mental quieting","Ashwagandha: 300mg daily for cortisol reduction over weeks","Avoid alcohol, antihistamines, and sedatives — they prevent restorative deep sleep"],
    "sleep-supplements")

add("summit-expert",["sleep-science","research","evidence"],["sleep","research","science","evidence","health"],
    "Sleep research confirms that sleep is not a passive state — it is an intensely active biological process essential for physical restoration, hormonal regulation, memory consolidation, immune function, and emotional processing. The highlights for men over 40: slow-wave deep sleep (Stage 3) is when growth hormone is released and physical restoration occurs. This stage declines significantly with age — but can be partially restored through consistent sleep schedules, reduced alcohol, regular exercise, and reduced pre-sleep screen exposure. REM sleep is when emotional processing and memory consolidation occur.",
    "Sleep is the most sophisticated biological performance tool we have. Nothing else comes close to what 8 hours of quality sleep does for a man.",
    ["Protect Stage 3 deep sleep: consistent schedule, no alcohol, morning exercise","Alcohol destroys sleep quality even if it helps you fall asleep — avoid within 3 hours","Consistent sleep schedule preserves circadian alignment","Napping: 20-minute power naps are restorative, longer naps disrupt nighttime sleep","Prioritize sleep debt repayment on weekends — but not by more than 60 min deviation"],
    "sleep-science")

# ============================================================
# WAVE 13-17 — Breathwork & Meditation (fr-110 to fr-116)
# ============================================================

add("funk-roberts",["breathwork","recovery","stress"],["breathwork","breathing","recovery","stress","cortisol","over-40"],
    "Breathwork is one of the most powerful recovery tools available to men over 40 — and one of the most underused. The Over 40 Alpha 21-Day Breathwork Challenge introduces diaphragmatic breathing, deep breathing techniques, and advanced breathwork protocols over 21 days through 7 progressive sessions. The physical benefits: reduced cortisol, improved oxygen efficiency, lower resting heart rate, enhanced recovery between training sessions. The mental benefits: reduced anxiety, improved focus, better emotional regulation. Breathwork is the one recovery tool that can be used anywhere, anytime, with zero equipment.",
    "You breathe 20,000 times a day. Most of those breaths are shallow and stress-promoting. Learn to breathe correctly and you change your chemistry.",
    ["Diaphragmatic breathing: belly rises first, not chest — practice daily","Box breathing: 4 in, 4 hold, 4 out, 4 hold — for focus and calm","4-7-8 breathing: for sleep onset and acute stress relief","Power breathing (Wim Hof): 30 deep breaths, then breath hold — for energy","Practice minimum 5 min daily — make it as consistent as brushing teeth"],
    "breathwork-21-day")

add("funk-roberts",["wim-hof","power-breathing","cold-exposure"],["Wim-Hof","power-breathing","cold","oxygen","energy"],
    "The Wim Hof Power Breathing method is a structured breathwork protocol with documented physiological benefits for men over 40. The protocol: 30 deep inhalations followed by passive exhalations, ending with a breath hold. This cycle is repeated 3 times. The benefits are well-documented: increased blood oxygenation, elevated energy levels, reduced inflammatory markers, improved stress tolerance, and activation of the sympathetic nervous system for enhanced alertness and focus. Wim Hof breathing is combined with cold exposure (cold shower or ice bath) for maximum physiological benefit — the combination powerfully reduces inflammation and cortisol.",
    "Breathwork changes your blood chemistry, your nervous system state, and your energy — within minutes. No supplement does that.",
    ["Round 1-3: 30 deep breaths — in through nose, out through mouth, passive exhale","After 30th breath: exhale completely, hold until you need to breathe","Then inhale fully and hold 15 seconds — recovery breath","Repeat 3-4 rounds, note the tingling and energy shift","Follow with 3-5 min cold shower for maximum cortisol reduction"],
    "wim-hof-breathing")

add("funk-roberts",["breathwork-protocol","progressive","4-phase"],["breathwork","protocol","progressive","diaphragmatic","box"],
    "The Alpha Breathwork Recovery System is a 4-week progressive protocol. Phase 1 (Week 1): Diaphragmatic breathing — 5 min daily, one hand on chest, one on belly, breathe into the belly first. Phase 2 (Week 2): Deep breathing — 10 min daily with 4-second inhale, 2-second hold, 6-second exhale, 2-second hold. Phase 3 (Week 3): Box breathing — 4-4-4-4 for 5-10 min. Trains calm under pressure for high-stress situations. Phase 4 (Week 4): Power breathing — 3 rounds of 30 deep breaths for energy and alkalinity. The complete system takes men from chronic shallow breathing to mastery of their own nervous system.",
    "Four weeks of systematic breathwork practice gives you control over your nervous system that most people never experience.",
    ["Week 1: 5 min diaphragmatic breathing daily — belly first","Week 2: 10 min 4-2-6-2 pattern for deep relaxation","Week 3: Box breathing 4-4-4-4 before stressful situations","Week 4: Wim Hof power breathing 3 rounds for energy","Combine all four based on need: box for stress, Wim Hof for energy, 4-7-8 for sleep"],
    "breathwork-implementation")

add("funk-roberts",["meditation","mindfulness","mental-health"],["meditation","mindfulness","mental-health","stress","focus"],
    "Meditation for men over 40 is not about emptying the mind — it is about training the mind to be where you want it. The evidence base is robust: regular practice reduces cortisol, lowers blood pressure, improves sleep quality, enhances emotional regulation, increases focus and cognitive performance, and reduces anxiety and depression. For men who are resistant to meditation, the approach is tactical: think of it as mental training for performance. The most accessible entry point: a simple 10-minute daily breath focus meditation. Sit comfortably, close eyes, focus on the sensation of breath at the nostrils. When the mind wanders, gently return focus to breath. That is the entire practice.",
    "Meditation is the gym for your mind. The reps are attention training. The gains are focus, calm, and resilience.",
    ["Start with 5-10 min daily — same time, same place builds habit","Focus on the breath sensation — not on controlling the breath","When mind wanders: notice, do not judge, return to breath","Consistency beats length: 10 min daily outperforms 60 min once a week","Apps like Waking Up or Calm can guide beginners effectively"],
    "meditation-mindfulness")

add("funk-roberts",["meditation","busy-men","practical"],["meditation","busy","practical","time-efficient","men-over-40"],
    "Meditation for Busy Men addresses the most common objection: I don\'t have time to sit and meditate. The solution: micro-meditation practices integrated into existing daily routines. The 5-minute morning breath scan before getting out of bed. The commute body scan: instead of checking your phone, notice physical sensations. The walking meditation: 10 min of focused awareness while walking. The waiting meditation: use every waiting moment — red lights, lines, elevators — for breath focus. The eating meditation: eat first meal of the day without screens, fully present. These practices train the same mental skills as formal sitting meditation without requiring dedicated time blocks.",
    "You do not need 20 quiet minutes. You need to use the moments you already have differently.",
    ["Morning: 5 min breath focus before getting out of bed","Commute: body scan instead of phone for 10 min","Walking: add mindful attention to any daily walk","Eating: first meal without screens — full presence","Waiting: every queue, red light, or pause is a micro-meditation opportunity"],
    "meditation-busy-men")

add("funk-roberts",["gratitude","meditation","positive-mindset"],["gratitude","meditation","mindset","morning","routine"],
    "The Gratitude Meditation combines two of the most evidence-supported mental health practices into one powerful daily ritual. The practice: sit quietly for 5-10 minutes and systematically bring to mind people, experiences, and aspects of your life that you are genuinely grateful for. Allow the felt sense of gratitude to arise — not just the intellectual acknowledgment, but the emotion. Research shows this practice reduces inflammatory markers, improves cardiovascular health markers, enhances immune function, improves sleep, and increases prosocial behavior. Including a health-specific gratitude component — gratitude for your body\'s capacity to train, recover, and function — creates a positive relationship with your physical health.",
    "Gratitude is not passive. It is neurological training that rewires your brain toward strength, resilience, and positive action.",
    ["Morning: sit 5-10 min and recall 3 people or experiences with genuine gratitude","Feel the emotion — not just the thought — of gratitude","Include gratitude for your body: its capacity to train, heal, and function","Evening: review the day for unexpected gifts — things that went well","Share gratitude with people in your life — it multiplies the effect"],
    "gratitude-meditation")

# ============================================================
# WAVE 18 — Meditation for Busy People (fr-117 to fr-122)
# ============================================================

add("funk-roberts",["meditation","mindfulness","mental health","stress management"],["meditation history","focused attention","open monitoring","five elements","categories"],
    "Meditation has been practiced for thousands of years across many cultures and traditions. Modern science has validated what ancient practitioners discovered intuitively. There are two primary categories of meditation. Focused Attention meditation directs your awareness to a single object such as your breath, a mantra, or a candle flame, training your ability to sustain concentration and return attention when it wanders. Open Monitoring meditation broadens awareness to observe all thoughts, sensations, and emotions without attachment, developing nonjudgmental awareness of the present moment. Five essential elements of effective meditation include: a quiet environment to minimize external distractions, a comfortable posture whether sitting, lying, or walking, a point of focus such as breath or mantra, an open and receptive attitude toward whatever arises, and consistent practice over time. For men over 40, meditation is not a passive or soft activity. It is active mental training that builds the psychological resilience and recovery capacity that physical training alone cannot provide.",
    None,None,"Meditation for Busy People — Wave 18")

add("funk-roberts",["meditation","heart health","brain health","psychological wellbeing","research"],["research","studies","cardiology","stress reduction","wellbeing","anxiety","blood pressure"],
    "The research on meditation is extensive and compelling. For cardiovascular health, regular meditation has been shown to reduce blood pressure, lower heart rate, and decrease the risk of cardiovascular events. The American Heart Association recognizes meditation as a beneficial practice for heart health. For brain aging, neuroscientists at Harvard found that long-term meditators have more gray matter in regions associated with attention, interoception, and sensory processing, and the natural age-related thinning of the cortex is significantly reduced in practitioners. For psychological wellbeing, a landmark meta-analysis of over 18,000 participants found mindfulness meditation programs reduced symptoms of anxiety, depression, and pain. For men over 40 dealing with high cortisol, disrupted sleep, and mental fatigue from career and family demands, meditation provides a proven physiological and psychological reset that compounds over time.",
    None,None,"Meditation for Busy People — Wave 18")

add("funk-roberts",["meditation","brain health","neuroscience","neuroplasticity"],["hippocampus","amygdala","posterior cingulate","temporal parietal junction","cortex","neuroplasticity","brain structures"],
    "Meditation produces measurable structural and functional changes in the brain. The left hippocampus, responsible for learning, memory consolidation, and emotional regulation, shows increased gray matter density in meditators. This directly counters the age-related hippocampal shrinkage that begins accelerating in men over 40. The posterior cingulate cortex, which governs self-referential thought and mind-wandering, becomes less reactive in experienced meditators, explaining reduced rumination and anxiety. The temporoparietal junction shows increased activity and connectivity after just eight weeks of practice. The amygdala shows reduced gray matter density and lower activation after consistent meditation, meaning less reactive stress responses and better emotional regulation. The prefrontal cortex shows strengthened connections to emotional regions, improving top-down regulation. These are real neurological upgrades that improve every domain of life.",
    None,None,"Meditation for Busy People — Wave 18")

add("funk-roberts",["meditation","cortisol","recovery","stress hormones","sleep"],["relaxation response","cortisol reduction","parasympathetic","telomeres","inflammation","physiological effects"],
    "The physiological effects of meditation work through the relaxation response coined by Harvard cardiologist Herbert Benson. When you meditate, the parasympathetic nervous system activates, reducing heart rate, slowing respiration, lowering blood pressure, and decreasing oxygen consumption. Cortisol, the primary stress hormone that destroys testosterone, disrupts sleep, and promotes belly fat in men over 40, is measurably reduced by consistent meditation practice. Studies show cortisol levels drop significantly after eight weeks of regular practice. Inflammation markers including C-reactive protein and interleukin-6, which accelerate aging and suppress testosterone, show meaningful reductions in meditators. At the cellular level, meditation appears to protect telomere length, the biological markers of cellular aging. Research by Nobel laureate Elizabeth Blackburn found that meditators maintain longer telomeres compared to non-meditators of the same age.",
    None,None,"Meditation for Busy People — Wave 18")

add("funk-roberts",["meditation","movement meditation","mindfulness practices","daily routine"],["movement meditation","observation meditation","affirmation meditation","walking meditation","types of meditation"],
    "Three highly practical meditation approaches work well for busy men over 40. Movement Meditation integrates mindfulness into physical activity already in your schedule. Walking meditation involves slow deliberate walking while focusing completely on each step, the sensation of foot contact, breath rhythm, and surrounding sounds. Yoga, tai chi, and certain martial arts practices also qualify. The key is directing full attention to physical sensations rather than mental chatter. Observation Meditation is one of the simplest and most accessible practices. Find a comfortable seated position, close your eyes, and simply observe your thoughts, sensations, and emotions as they arise without judgment or engagement. Imagine you are sitting on a riverbank watching thoughts float by as leaves on the water. You notice them but do not jump in. Affirmation Meditation combines focused intention with meditative calm. After a few minutes of breath-focused settling, you introduce positive statements tied to your goals and identity: I am strong, I am resilient, I am building my best body and healthiest life now.",
    None,None,"Meditation for Busy People — Wave 18")

add("funk-roberts",["meditation","daily practice","habit formation","journaling","consistency"],["daily routine","journal meditation","habit building","morning practice","five minutes","consistency"],
    "Creating a sustainable daily meditation practice is about consistency over duration. Five minutes every day outperforms sixty minutes once a week. The most effective time for men over 40 is first thing in the morning before checking phones or email, when the mind is still relatively quiet. Find a consistent spot in your home designated solely for practice. Use the same chair or cushion every day. Start with five minutes using breath as your anchor. When the mind wanders, gently return attention to the breath without frustration. That moment of noticing and returning IS the practice. Journal Meditation for the Soul extends meditation benefits through writing. Immediately after your sitting practice, write for five to ten minutes about what arose during the session, what you are grateful for, and what intention you are carrying into the day. Men who meditate consistently report better training focus, faster recovery, improved relationships, and clearer decision-making. The second half of your life can be stronger in every dimension.",
    None,None,"Meditation for Busy People — Wave 18")

# ============================================================
# WAVE 19 — Supplements for Men Over 40 (fr-123 to fr-116+)
# ============================================================

add("navin-khan",["supplements","testosterone","hormone support"],["testosterone support","zinc","vitamin D","boron","ashwagandha","tongkat ali","DIM","hormonal optimization"],
    "The testosterone support stack for men over 40 addresses the hormonal environment from multiple angles simultaneously. Zinc (25-45mg daily) is the most critical mineral for testosterone production — zinc deficiency is directly correlated with low testosterone and is extremely common in men who sweat regularly. Vitamin D3 (5000 IU daily with K2) acts as a steroid hormone precursor — virtually every cell in the body has vitamin D receptors, and men with optimal vitamin D levels have significantly higher testosterone. Boron (3-10mg daily) increases free testosterone by reducing SHBG, which binds and inactivates testosterone. Ashwagandha (KSM-66, 300-600mg daily) reduces cortisol by 27-30% in clinical trials, directly supporting testosterone. Tongkat Ali (200-400mg daily) supports LH and testosterone production. DIM (Diindolylmethane, 200-400mg daily) balances estrogen metabolism to favor less potent estrogen metabolites, reducing the testosterone-suppressing effects of estrogen dominance.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","muscle building","creatine","protein","recovery"],["creatine","HMB","protein","leucine","BCAAs","muscle preservation","anabolic support"],
    "The muscle building and preservation stack for men over 40 addresses anabolic resistance — the reduced sensitivity of aging muscle to protein and training stimuli. Creatine monohydrate (5g daily) is the most well-researched sports supplement in history with proven benefits for muscle strength, power output, muscle mass, cognitive function, and even cardiovascular health. HMB (Beta-Hydroxy Beta-Methylbutyrate, 3g daily) reduces muscle protein breakdown and is particularly effective for men over 40 due to its anti-catabolic properties. Whey protein isolate (25-35g) post-workout provides rapidly absorbed leucine-rich protein that maximally stimulates muscle protein synthesis. Leucine specifically (2-3g per meal) is the amino acid that triggers the muscle-building mTOR pathway — older men need more leucine per meal than younger men to achieve the same anabolic response. Tart cherry extract reduces post-exercise muscle soreness and inflammation, improving recovery between sessions.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","sleep","recovery","cortisol"],["magnesium","melatonin","ashwagandha","l-theanine","GABA","sleep stack","cortisol control"],
    "The sleep and recovery stack for men over 40 is arguably the most impactful supplement category because sleep is when testosterone is produced, growth hormone is released, and physical repair occurs. Magnesium glycinate (400mg taken 45-60 min before bed) is the foundational sleep supplement — it activates GABA receptors, relaxes muscle tissue, reduces cortisol, and has the best absorption profile of all magnesium forms. Phosphatidylserine (400mg daily) is a phospholipid that blunts cortisol response to exercise and stress, directly supporting testosterone by reducing the cortisol-testosterone antagonism. L-theanine (200mg before bed) promotes alpha brainwave activity associated with relaxed alertness without sedation, improving sleep quality without grogginess. Magnesium threonate specifically crosses the blood-brain barrier and may improve sleep architecture and cognitive function. Combining magnesium glycinate with L-theanine creates a powerful non-sedating sleep quality stack without dependency risk.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","anti-inflammatory","joint health"],["omega-3","curcumin","boswellia","collagen","joint health","inflammation","EPA","DHA"],
    "The anti-inflammatory and joint health stack targets the chronic low-grade inflammation that accelerates aging, suppresses testosterone, causes joint pain, and drives metabolic dysfunction in men over 40. Omega-3 fatty acids (EPA and DHA, 3-4g daily of combined EPA+DHA, not total fish oil) are the most evidence-backed anti-inflammatory supplement available. They reduce prostaglandins and cytokines, lower cardiovascular risk, support brain health, and improve joint lubrication. Curcumin with piperine (1000-1500mg daily, always with black pepper extract or fat for absorption) is the active compound in turmeric with powerful NF-kB pathway inhibition — blocking the molecular inflammation switch. Boswellia serrata (400-800mg daily) specifically reduces joint inflammation via a different pathway than curcumin, making them highly synergistic. Type 2 collagen (40mg daily, undenatured) has clinical evidence for reducing joint pain and stiffness by promoting immune tolerance to cartilage breakdown. Glycine (3-5g daily) supports collagen synthesis throughout the body.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","brain","cognitive","nootropics"],["brain health","nootropics","lion\'s mane","bacopa","CDP choline","omega-3","cognitive performance"],
    "Brain health and cognitive performance supplements for men over 40 address the neural changes that accompany aging: reduced neuroplasticity, declining neurotransmitter production, reduced cerebral blood flow, and increased oxidative stress in brain tissue. Lion\'s Mane mushroom (1000-2000mg daily) is the most evidence-backed natural nootropic for neurogenesis, stimulating production of Nerve Growth Factor (NGF) which supports neuron health and may slow cognitive decline. Bacopa monnieri (300mg of 50% bacosides, daily) has the strongest clinical evidence base for memory, learning speed, and anxiety reduction of any nootropic herb — requires 8-12 weeks for full effect. CDP choline (250-500mg daily) provides both choline for acetylcholine production and cytidine for brain energy metabolism. Phosphatidylserine (400mg daily) is a structural phospholipid that is FDA-qualified for reduced risk of cognitive dysfunction. Combined with omega-3 fatty acids (DHA specifically is critical for neural membrane fluidity), this stack provides comprehensive cognitive support.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","cardiovascular","heart health"],["cardiovascular","CoQ10","bergamot","nitric oxide","beetroot","heart health","cholesterol"],
    "The cardiovascular health supplement stack for men over 40 addresses the increasing cardiovascular risk that comes with age, declining hormone levels, and years of lifestyle accumulation. CoQ10 (100-300mg daily, ubiquinol form for men over 40) is critical for mitochondrial energy production in heart muscle cells — and CoQ10 levels decline significantly with age and with statin use. Men taking statins absolutely must supplement CoQ10. Bergamot extract (500mg daily) has clinical evidence for improving lipid profiles including reducing LDL, raising HDL, and reducing triglycerides without the side effects of statins. Aged garlic extract (600mg daily) reduces arterial stiffness, lowers blood pressure, and has antiplatelet effects. Nitric oxide support through L-citrulline (3-6g daily) or organic beetroot powder improves endothelial function, reduces blood pressure, and improves exercise performance by enhancing blood flow and oxygen delivery.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","gut health","microbiome","digestion"],["probiotics","prebiotics","digestive enzymes","gut health","microbiome","L-glutamine"],
    "The gut health stack for men over 40 addresses the gut microbiome changes, reduced stomach acid production, and intestinal permeability issues that commonly develop with age and stress. A quality multi-strain probiotic (50-100 billion CFU with Lactobacillus acidophilus, L. plantarum, Bifidobacterium longum, and B. bifidum) supports microbiome diversity, reduces inflammation, improves nutrient absorption, and supports testosterone-related bacteria strains. Prebiotic fiber (10-20g daily from inulin, FOS, or resistant starch) feeds beneficial bacteria — probiotics without prebiotics are like planting seeds without watering them. Digestive enzymes (broad spectrum with protease, lipase, and amylase, taken with meals) improve nutrient extraction from food, critical for men who train hard and need maximum protein absorption. L-glutamine (5-10g daily) is the preferred fuel of intestinal cells and helps maintain gut barrier integrity, reducing intestinal permeability (leaky gut) that drives systemic inflammation.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","energy","adaptogen","adrenal"],["adaptogens","ashwagandha","rhodiola","eleuthero","energy","stress","adrenal fatigue","cortisol"],
    "The adaptogen and energy stack for men over 40 addresses the chronic stress, adrenal burden, and energy dysregulation that accumulates from decades of high demands without adequate recovery. Adaptogens are herbs that help the body resist and adapt to stress without overstimulating or sedating. Ashwagandha KSM-66 (600mg daily) is the most clinically validated adaptogen, showing reductions in cortisol, improvements in testosterone, enhanced recovery from exercise, and improved cognitive function. Rhodiola rosea (200-400mg of 3% rosavins daily, morning only) improves mental and physical performance under stress, reduces fatigue, and supports mood without stimulant effects. Eleuthero (Siberian ginseng, 400-800mg daily) has 40 years of clinical use in Soviet athletic and military research showing improved stress tolerance and physical endurance. Phosphatidylserine (400mg daily) blunts the cortisol response to training and reduces the post-exercise cortisol spike that suppresses testosterone. Combined, these adaptogens build long-term stress resilience rather than providing temporary stimulant effects.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

add("navin-khan",["supplements","fat loss","metabolic health","cardiovascular","inflammation","blood sugar"],["fat burner","yohimbe","green tea","EGCG","blood sugar","chromium","berberine","beetroot","CoQ10","inflammation","NF-kB","metabolic stack","cardiovascular"],
    "The Fat Loss and Metabolic stack targets the mechanisms of belly fat accumulation unique to men over 40. Metabolism slows from muscle loss and insulin resistance. Cortisol rises driving belly fat storage. Energy crashes create sugar cravings. Fat-burning hormones including testosterone and growth hormone decline. Caffeine combined with yohimbe stimulates catecholamines including adrenaline and noradrenaline that unlock fat cells. Yohimbe specifically blocks alpha-2 receptors that trap fat in stubborn areas like belly and love handles. Use cautiously in the morning or pre-workout in a fasted state, avoiding with high blood pressure or anxiety. Green Tea Extract EGCG enhances thermogenesis and fat oxidation by inhibiting the enzyme that breaks down norepinephrine, prolonging fat-burning signals. Blood sugar support ingredients including chromium, cinnamon bark, and banaba leaf improve insulin sensitivity, stabilize blood glucose, and prevent fat storage. The Metabolic, Cardiovascular, and Anti-Inflammatory Stack addresses chronic inflammation as the root cause of most chronic disease in men over 40. Elevated blood sugar sticks to low-density lipoproteins increasing arterial damage and cholesterol synthesis. The NF-kB pathway is the molecular inflammation switch. Blocking chronic NF-kB activation with curcumin and other anti-inflammatories is critical. Blood Sugar Ultra ROC803 combines cinnamon bark, banaba leaf, and chromium picolinate for blood glucose control. Premium Adaptogen Blend ROC726 combines ashwagandha, rhodiola rosea, and turmeric for cortisol balance and inflammation control. Organic Beetroot ROC914 boosts nitric oxide levels improving circulation and cardiovascular endurance. CoQ10 supports mitochondrial energy production and heart health which both decline with age.",
    None,None,"Over 40 Supplements Coaching Call — Wave 19")

print(f"Generated {len(chunks)} chunks")

# ============================================================
# Write the TypeScript file
# ============================================================

def build_ts():
    lines = []
    lines.append("// ============================================================")
    lines.append("// SECOND HALF STRONG — COMPLETE RAG KNOWLEDGE BASE")
    lines.append("// Funk Roberts / Men Over 40 Health Summit")
    lines.append(f"// {len(chunks)} Chunks covering Waves 1-19")
    lines.append("// ============================================================")
    lines.append("")
    lines.append("export interface KnowledgeChunk {")
    lines.append("  id: string;")
    lines.append("  speakerId: string;")
    lines.append("  topic: string[];")
    lines.append("  tags: string[];")
    lines.append("  content: string;")
    lines.append("  quote?: string;")
    lines.append("  protocol?: string[];")
    lines.append("  sourceRef: string;")
    lines.append("}")
    lines.append("")
    lines.append("export const knowledgeChunks: KnowledgeChunk[] = [")
    lines.append("")

    for c in chunks:
        lines.append("  {")
        lines.append(f'    id: "{c["id"]}",')
        lines.append(f'    speakerId: "{c["speakerId"]}",')
        topics = ", ".join(f'"{t}"' for t in c["topic"])
        lines.append(f"    topic: [{topics}],")
        tags = ", ".join(f'"{t}"' for t in c["tags"])
        lines.append(f"    tags: [{tags}],")
        lines.append(f'    content: "{esc(c["content"])}",')
        if c.get("quote"):
            lines.append(f'    quote: "{esc(c["quote"])}",')
        if c.get("protocol"):
            protos = ", ".join(f'"{esc(p)}"' for p in c["protocol"])
            lines.append(f"    protocol: [{protos}],")
        lines.append(f'    sourceRef: "{esc(c["sourceRef"])}",')
        lines.append("  },")
        lines.append("")

    lines.append("];\n")

    # Topic index
    topic_index = {}
    for c in chunks:
        for t in c["topic"]:
            topic_index.setdefault(t, []).append(c["id"])

    lines.append("export const topicIndex: Record<string, string[]> = {")
    for t, ids in sorted(topic_index.items()):
        id_list = ", ".join(f'"{i}"' for i in ids)
        lines.append(f'  "{t}": [{id_list}],')
    lines.append("};\n")

    lines.append(r"""export function searchKnowledge(query: string, maxResults: number = 5): KnowledgeChunk[] {
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
""")
    return "\n".join(lines)

ts = build_ts()
out_path = "/home/user/second-half-strong/lib/knowledge-base.ts"
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, "w") as f:
    f.write(ts)

print(f"Written {len(ts):,} bytes to {out_path}")
print(f"Total: {len(chunks)} chunks (fr-001 to fr-{len(chunks):03d})")
