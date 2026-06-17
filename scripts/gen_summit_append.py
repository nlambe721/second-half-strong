#!/usr/bin/env python3
"""
Summit expert chunks — appends to knowledge-base.ts.
Start IDs from fr-106 (after existing fr-001..fr-105).
"""

import re

OUTFILE = "/home/user/second-half-strong/lib/knowledge-base.ts"

chunks = []
cid = 106  # Start after existing fr-105

def esc(s):
    return s.replace('\\','\\\\').replace('"','\\"').replace('\n','\\n').replace('\r','').replace('\t',' ')

def add(speaker_id, topics, tags, content, quote=None, protocol=None, source_ref="men-over-40-health-summit"):
    global cid
    chunk = {
        "id": f"fr-{cid:03d}",
        "speakerId": speaker_id,
        "topic": topics,
        "tags": tags,
        "content": content,
        "sourceRef": source_ref
    }
    if quote: chunk["quote"] = quote
    if protocol: chunk["protocol"] = protocol
    chunks.append(chunk)
    cid += 1

# ============================================================
# SUMMIT EXPERT CHUNKS — from actual interview transcripts
# ============================================================

add("anthony-balduzzi",
    ["fathers-health","motivation","family-purpose"],
    ["fit-father","dads","family","purpose","fathers","over-40","weight-loss"],
    "Dr. Anthony Balduzzi built the Fit Father Project from personal tragedy. He lost his father at age 42 to health complications, watching him wither away on hospice care when Anthony was just nine. That experience became his life mission: to help fathers over 40 reclaim their health before it is too late. His insight after 15 years working with tens of thousands of fathers: fitness is never just about looks. Fitness is about your family. Fitness is the expression of your values. It is your mission. Men over 40 who tie their health goals to their role as fathers, husbands, and leaders achieve dramatically better long-term adherence than those motivated purely by aesthetics. The Fit Father approach: lose the confusion, get a clear plan, build a community of support, and get results. Those four elements replace every false start.",
    "Fitness is more than fitness. Fitness is your family. Fitness is the expression of your values. That is why it sticks.",
    ["Connect health goals to family identity: train to be here for your kids","Use your children as your non-negotiable Why","Commit to a structured program instead of random effort","Join a community of fathers doing the same work","Measure success in health markers and energy, not just appearance"],
    "summit-balduzzi-interview")

add("ben-pakulski",
    ["precision-health","biohacking","personalized-optimization"],
    ["ben-pakulski","muscle-intelligence","M140","personalized","precision","biometric","longevity"],
    "Ben Pakulski, the godfather of intelligent muscle building and founder of Muscle Intelligence, describes the evolution from generic optimization to fully personalized health as Men 4.0. The core principle: stop doing what everyone else is doing and start learning what works specifically for you. Generic advice tells everyone to use peptides, saunas, and red light therapy. But without measuring your own biomarkers, you are guessing. Ben approach: test your genetics, test your bloodwork, understand your hormones, and then build a precise personal protocol based on what YOUR body actually needs. The technology now exists to make this accessible. The payoff: not wasting money on supplements and interventions that are not working for your specific physiology.",
    "Do not waste your money on supplements you are not sure are working. Test, measure, and build a precise personal protocol.",
    ["Get genetic testing to understand your nutritional and training predispositions","Get comprehensive bloodwork: not just the basics but deep hormone and metabolic panels","Correlate your symptoms with your data — connect how you feel to what your numbers show","Build your supplement protocol around YOUR biomarkers, not someone elses recommendations","Retest every 90 days to measure what is actually working"],
    "summit-ben-pakulski-m140")

add("ben-greenfield",
    ["aging-biology","mitochondria","sarcopenia","brain-health"],
    ["ben-greenfield","sarcopenia","mitochondria","aging","muscle-loss","brain","neuroscience"],
    "Ben Greenfield breaks down the biological realities of aging at 40 that most men do not fully understand. Sarcopenia — the gradual loss of muscle mass — begins accelerating in the 40s, driven by declining mitochondrial density, reduced muscle protein synthesis, and lower anabolic hormone output. Men start to notice their arms and legs appear more lean, sometimes frail. But the brain piece is misunderstood: there is not much research supporting cognitive decline if the mind is stimulated. Neural stimulation through new challenges, dangerous activities, musical instruments, sports that require spatial awareness, and a low-inflammation diet rich in omega-3s and minerals can largely preserve cognitive function. The biggest controllable factors for men over 40: mitochondrial health, muscle preservation, and neural stimulation.",
    "Your brain does not have to decline. Feed it with stimulation, challenge, omega-3s, and low inflammation — and it will keep performing.",
    ["Prioritize mitochondrial health: Zone 2 training, cold exposure, quality sleep","Resistance train to counter sarcopenia — muscle preservation is the priority","Stimulate the brain: new skills, new sports, musical instruments, chess","Eat for brain health: omega-3s, colorful vegetables, low processed foods","Challenge your eyes: sports requiring gaze shift, shooting, racket sports"],
    "summit-ben-greenfield-aging")

add("bill-maeda",
    ["functional-fitness","cancer-survivor","longevity","movement"],
    ["bill-maeda","functional","cancer","survivor","movement","athlete","over-50","mobility"],
    "Bill Maeda, 57, is a functional strength and mobility coach who overcame a sport-ending injury and stage 3 colon cancer to redefine what athletic capability looks like after 50. His philosophy: train to maintain the attributes of a soldier and a fighter. Every training session is built around being able to perform, not just look good. Bill trains for functional real-world capacity: the ability to move, react, carry, and protect. His cancer battle gave him a different relationship with his body — training became a celebration of what the body can do, not a punishment for what it looks like. Men over 40 who survived health crises often train with the greatest consistency because they understand what it means to lose physical capacity.",
    "Train like your life depends on your fitness — because it might. The body that can move, fight, and carry is the body worth building.",
    ["Define your training purpose beyond aesthetics: soldier, father, protector, athlete","Build movement quality first: can you squat, carry, crawl, react?","Vary training modalities — do not be a one-dimensional gym athlete","After health challenges, reframe training as privilege not punishment","Find the training identity that sustains you for decades, not programs that burn you out in weeks"],
    "summit-bill-maeda")

add("chris-lopez",
    ["power-training","kettlebell","longevity-training"],
    ["chris-lopez","power","kettlebell","StrongFirst","performance","longevity","PLOs"],
    "Chris Lopez, StrongFirst instructor and creator of Power Longevity Sessions (PLOs), makes the case for performance-first training for men over 40. His insight: aesthetic goals are difficult to measure and take a long time to manifest — which demotivates men. Performance goals (getting stronger, jumping higher, lasting longer, better cardio) are measurable and happen faster, which sustains motivation. The Power Retreat Repeat system builds power endurance over time — the ability to express power repeatedly across a session. This drives athleticism, longevity, and body composition simultaneously. The aesthetic result is a byproduct of the performance goal, not the goal itself.",
    "Train for performance. The aesthetic result is a byproduct. Train for looks and you will likely quit. Train for performance and the looks follow.",
    ["Set performance goals: strength PR, sprint time, kettlebell rep count — measurable targets","Use kettlebell training as your performance baseline — swing, clean, press, squat, snatch","Power longevity sessions: explosive power combined with conditioning endurance","Track performance metrics weekly — seeing numbers improve sustains motivation","Aesthetic progress follows performance progress — trust the byproduct"],
    "summit-chris-lopez-PLO")

add("clark-bartram",
    ["health-markers","aesthetics","men-over-40"],
    ["clark-bartram","CBX","marine","health-markers","aesthetics","narrative"],
    "Clark Bartram, former US Marine, ISSA Master Trainer, and National Fitness Hall of Fame inductee, offers one of the most important reframes in men health: stop making aesthetics the prime mover of your health journey. The look is the hook — it gets men into programs. But the look will not sustain the journey. What sustains it: health markers, energy, vitality, mindset, and attitude toward life. When men chase the six-pack, they quit when they do not see it fast enough. When men chase excellent bloodwork, improved testosterone levels, lower inflammation, and better energy — the body follows, and they stay in it. Shift the narrative from looking good to functioning optimally, and the aesthetics become the natural reward.",
    "The look is the hook. But health markers are what keep men in the game for life. Lead with what actually matters.",
    ["Switch primary goal from aesthetics to health markers: bloodwork, energy, hormones","Use annual bloodwork as your progress report — not the mirror","Focus on the Why that will make you cry: family, longevity, contribution","Allow aesthetics to be a byproduct of optimal health, not the target","Find a community that reinforces health identity over appearance identity"],
    "summit-clark-bartram-CBX")

add("dean-pohlman",
    ["yoga","mobility","men-resistance"],
    ["dean-pohlman","man-flow-yoga","yoga","mobility","men","resistance","hips","back-pain"],
    "Dean Pohlman, founder of Man Flow Yoga, identifies the three reasons men avoid yoga and mobility work: they think it is too spiritual, they think it is for women, and they do not think it is a challenging enough workout. All three objections are legitimate but misguided. Man Flow Yoga addresses each: no spiritual content, built for men physiology and goals, and genuinely challenging. The root of most physical problems in men over 40 — tight hips, knee pain, lower back pain, shoulder issues — can be traced to years of sport without mobility work, compounded by decades of sitting 8-12 hours per day. The resolution: 10-15 minutes of targeted mobility daily. It is not a big time commitment. It is the compound interest investment that pays off in decades of pain-free movement.",
    "Ten minutes of mobility daily is worth more than any supplement you will ever take. It is the investment that pays back for decades.",
    ["Address the three objections: Man Flow Yoga is results-focused, male-designed, and physically demanding","Ten to fifteen minutes of targeted mobility daily prevents and resolves most chronic pain","Priority areas: hips, shoulders, thoracic spine, and knees — the four most common failure points","Sitting 8-12 hours daily is directly causing your mobility problems — move every 60 minutes","Commit to 30 days of daily mobility and assess the difference in pain, movement, and training"],
    "summit-dean-pohlman-yoga")

add("dean-somerset",
    ["pain-management","training-around-injury","rehabilitation"],
    ["dean-somerset","pain","injury","rehab","kinesiologist","train-around","80s-deadlift"],
    "Dean Somerset, kinesiologist and clinical exercise physiologist, challenges the most damaging belief in men health: that pain means stop. Complete rest is almost never the right answer. Dean has clients in their 80s who deadlift more than their body weight. Pain is the body talking — the louder it talks, the more specifically you need to address it. But avoidance and deconditioning typically make it worse. The key distinction: train smart, not through pain. When should trainers refer out? When something changes suddenly — sudden loss of strength, new pain never felt before, or lost function. When should you keep training? When nothing has changed from a chronic condition. The tools: movement modification, exercise substitution, and enough progressions to always find a pain-free way to load the target muscles.",
    "Pain does not mean stop. It means listen, assess, and find the smart way to keep moving. Avoidance accelerates decline.",
    ["Distinguish sudden new pain (refer out) from chronic known pain (train around)","Never rest completely — find a pain-free movement to substitute and keep training","Build a toolbox of exercise progressions for every major movement pattern","Address the root cause of pain while continuing to train what does not hurt","Find a kinesiologist, sports physio, or movement specialist for persistent pain — do not guess"],
    "summit-dean-somerset-pain")

add("firas-zahabi",
    ["martial-arts","aging-mindset","intermittent-fasting","joint-health"],
    ["firas-zahabi","tristar","GSP","martial-arts","aging","fasting","autophagy","joint-health"],
    "Firas Zahabi, head coach at TriStar Gym in Montreal and long-time coach of UFC Hall of Famer Georges St-Pierre, delivers a powerful message: getting old is a myth. With what we know now about hormones, nutrition, and fitness, there is no excuse to get old beyond your years. His number one weapon against aging: intermittent fasting and autophagy. When you fast for 16 hours, your body enters autophagy — it literally destroys and recycles damaged and dysfunctional cells. Nobel Prize-winning science. Fasting once or twice per day, combined with exercise within the fasting window, accelerates autophagy dramatically. His second key: joint health through science. There is no reason why shoulders, backs, and knees should ache permanently. His third key: the mindset that refuses to accept decline.",
    "Getting old is a myth. With what we know now, 46 should be the new 36. We have no excuse to accept decline.",
    ["Intermittent fasting 16 hours daily: eat one to two meals per day for autophagy","Exercise within the fasting window to accelerate cellular cleanup through autophagy","Maintain a bulletproof mindset: refuse to accept decline as inevitable","Invest in joint health science: there are real solutions for joint pain","Train martial arts or heavy bag work for confidence, conditioning, and mental toughness"],
    "summit-firas-zahabi-tristar")

add("bryan-krahn",
    ["physique-over-40","training-respect","recovery"],
    ["bryan-krahn","physique","over-40","recovery","respect-the-process","peak","breakdown"],
    "Bryan Krahn, physique coach specializing in men over 40, reveals a critical insight: age 40 is actually the physical peak for body composition — but the media frames it as the beginning of decline, and most men believe it. The real problem comes when men ignore the under-the-hood changes happening in their late 30s and early 40s and keep training as if they are 22. Bryan did this himself: looked great at 40 doing photo shoots, then by 45-46 was so beat up that training stopped being fun. Everything hurt. The fix was not training like an old person — it was training like someone who respects the process. The man who respects his body at this stage makes progress. The man who ignores it eventually dreads the gym.",
    "At 40 you are at your peak for body composition. But you have to respect what is happening under the hood — or by 45 you will hate training.",
    ["Recognize: 40 is your physical peak, not the beginning of decline","The changes happening in your late 30s and 40s require respect, not denial","Reduce training frequency slightly but increase recovery focus","Prioritize training quality over ego-driven intensity","Stop training like you are 22 — train like a man who intends to be great at 60"],
    "summit-bryan-krahn-physique")

add("gregory-dzemaili",
    ["kettlebell","joint-health","eccentric-training","simplicity"],
    ["gregory-dzemaili","kettlebell","eccentric","joint","swing","one-tool","resilience"],
    "Gregory Dzemaili, founder of the Kettlebell Code, explains why kettlebell training uniquely serves men over 40. The key mechanism: continuous eccentric loading. Tendons and joint health respond exceptionally well to eccentric training — the lengthening phase of muscle contraction. Every kettlebell swing, clean, and snatch involves repeated eccentric loading through the hip hinge, which rehabilitates and strengthens tendons and ligaments. Additionally: one kettlebell, one square meter of space, five exercises — swing, press, clean, squat, snatch — and you never need a gym again. The unbrokenness of kettlebell training is its greatest tool: forcing you to pace yourself, to become one with the bell, to build resilience under sustained effort.",
    "Five exercises: swing, press, clean, squat, snatch. One bell. One square meter. That is everything a man over 40 needs to stay strong for life.",
    ["Master the five fundamental kettlebell exercises: swing, press, clean, squat, snatch","Use continuous swings, cleans, and snatches for eccentric tendon and joint conditioning","Do not put the bell down during conditioning sets — the unbrokenness builds resilience","One quality bell is your full gym — choose 24kg or 32kg as your primary training weight","The kettlebell swing: best single exercise for posterior chain, conditioning, and fat loss"],
    "summit-gregory-dzemaili-kettlebell")

add("dan-john",
    ["strength-simplicity","loaded-carries","long-term-training"],
    ["dan-john","strength","simple","loaded-carry","fundamental","six-decades","everything-works"],
    "Dan John, legendary strength coach and author with over six decades of lifting, coaching, and studying what actually works, offers the most important principle in training: everything works — for about six weeks. The mistake most men make is overcomplicating what should be simple. Push, pull, hinge, squat, and loaded carry. Drink water. Eat protein and vegetables. Sleep well. Take care of your relationships. Life is pretty simple. The hard part is showing up in the gym three days a week for 60 years. His career-changing discovery: loaded carries. After breaking his wrist in eight pieces and being told he would never train again, Dan focused on farmer walks and suitcase carries during rehabilitation. They transformed his training. For men over 40, loaded carries are among the best exercises available: they build real-world strength, challenge the core, and are joint-friendly.",
    "Everything works. The problem is that everything works for about six weeks. Then it is time to change. That is not a bug — that is the design.",
    ["Master the five fundamental patterns: push, pull, hinge, squat, loaded carry","Add farmer walks and suitcase carries to every training week — they are underrated tools","Rotate program focus every 4-6 weeks: the body needs novelty to keep adapting","Keep the overall approach simple: complicated is the enemy of consistent","60 years of consistent simple training beats 6 years of complex perfect training"],
    "summit-dan-john-strength")

add("dr-sherry-mcallister",
    ["chiropractic","whole-being-health","nervous-system","alignment"],
    ["sherry-mcallister","chiropractic","nervous-system","whole-being","alignment","stress-accumulation"],
    "Dr. Sherry McAllister, President of the Foundation for Chiropractic Progress with over 25 years of clinical experience, introduces Whole Being Health — the understanding that the body does not function in silos. Most men are conditioned to look for symptoms and assume health is the absence of those symptoms. But true health is the body operating at full capability: physically capable, mentally resilient, and neurologically balanced. Men over 40 feel older than they are because they have accumulated decades of physical and emotional stress, lost mobility through sedentary careers, and allowed muscle mass to decline. The nervous system becomes dysregulated under this accumulated load. Chiropractic alignment, movement restoration, and stress regulation are tools to restore the complete system.",
    "Health is not the absence of symptoms. Health is full capability — physical, mental, and neurological. Optimize the entire system.",
    ["Treat health as whole-being capability, not just symptom management","Address the nervous system: chronic stress dysregulates everything else","Restore mobility through consistent movement — sedentary work is a health liability","Seek chiropractic assessment for alignment issues contributing to pain and energy loss","Manage stress at the neurological level: breathwork, movement, sleep, community"],
    "summit-sherry-mcallister-chiropractic")

add("coach-kavita",
    ["relationships","men-over-40","love-life","wholeness"],
    ["kavita","relationships","love","dating","men","over-40","partnership","wholeness"],
    "Coach Kavita Ajlani addresses one of the most ignored dimensions of men health over 40: the quality of their intimate relationships and love life. Most men spend years optimizing their bodies, businesses, and finances — while their love life goes on the back burner. The cost: slower overall success, loneliness, and carrying the weight of life without partnership. The false belief: I just need to achieve more first — the six-pack, the bank account, the house — and then the right relationship will happen. Kavita insight: this postponement delays one of the greatest catalysts for hitting all other goals. Partnership shares the burden and activates purpose. Men in their 40s who are in thriving relationships report better health outcomes, better training consistency, and greater life satisfaction.",
    "Men optimize their bodies and businesses and forget their love lives. Partnership is not a reward for achievement — it is a catalyst for it.",
    ["Stop using self-development as an excuse to avoid relationships","Identify where the story of not enough is keeping you from taking action","Prioritize relationships as a pillar of health — not a reward for physical achievement","The right partnership amplifies everything: motivation, purpose, accountability, joy","Being in your masculine means taking action — do not avoid the one area that requires it most"],
    "summit-kavita-relationships")

add("kenneth-swartz",
    ["cellular-health","oxidative-stress","longevity"],
    ["ken-swartz","C60","carbon-60","cellular","oxidative-stress","longevity","anti-aging","energy"],
    "Kenneth Swartz, known as Ken the Scientist, came to health and wellness from radiation research and fusion technology. His discovery of C60 (Carbon-60 fullerene) — a spherical molecule of 60 carbon atoms that acts as a powerful antioxidant — emerged from studying radiation protection. The landmark Baati study on rats showed dramatically extended lifespan from C60, with no cancers and no accelerated aging. For men over 40, C60 may support cellular energy production, reduce oxidative stress, and protect mitochondrial function. His broader message: cellular-level interventions — addressing oxidative stress, mitochondrial health, and inflammation — may be the most powerful longevity levers available, operating at a level that conventional supplements do not reach.",
    "Health optimization for men over 40 must eventually address what is happening at the cellular level — oxidative stress, mitochondrial function, and cellular cleanup.",
    ["Reduce oxidative stress: the root of most cellular aging and chronic disease","Support mitochondrial health: the powerhouses of your cells determine your energy","Consider antioxidant interventions that operate at the cellular level","Combine cellular-level support with foundational lifestyle: sleep, training, nutrition","Get bloodwork measuring cellular stress markers: hs-CRP, oxidized LDL, homocysteine"],
    "summit-kenneth-swartz-C60")

add("kevin-carr",
    ["training-longevity","aging-decline","movement-medicine"],
    ["kevin-carr","MBSC","movement-as-medicine","functional","training-longevity","aging","60-year-olds"],
    "Kevin Carr, partner at Mike Boyle Strength and Conditioning and co-founder of the Certified Functional Strength Coach certification, reframes aging for men over 40. Time is undefeated — the body will change. But the type of training controls the slope of decline. His proof: men at MBSC who are 60 years old and feel better than they did in their 20s. The reason: the period of their 30s and 40s when they were not exercising was their actual downturn. When they returned to intelligent training with a well-rounded program, they saw a peak later in life. Even simple interventions — lifting twice a week for 30 minutes, adding plyometric and power work, adding flexibility work — can level off the decline and allow continued improvement into the 50s and 60s.",
    "The men who feel best at 60 are not genetic outliers. They are men who trained intelligently and consistently when it mattered.",
    ["Accept that some biological decline is inevitable — then train to control the slope","Start with two 60-minute well-rounded sessions per week if returning to training","Include plyometric and power work even in beginners — it is critical for long-term athleticism","Do not train like you did in college: the science has advanced significantly","Consistency over years is the only thing that produces the 60-year-olds who feel 20"],
    "summit-kevin-carr-MBSC")

add("phil-derue",
    ["complete-performance","never-stop-moving","multidimensional-fitness"],
    ["phil-derue","daru-strong","UFC","performance","complete","never-stop","psychological","spiritual"],
    "Phil DeRue, founder of Daru Strong Performance and coach to UFC champions Dustin Poirier and Edson Barbosa, defines true performance for men over 40. True performance is never just physical. It is neurological, physiological, behavioral, spiritual, and psychological — all operating together. The men who age best are those who never stop. They never stop moving. They never stop evolving. They never stop trying to elevate and adapt. Phil protocol for men over 40 who have lost their physical routine: identify your limiters through assessment, set clear goals, find a guide who can organize your approach, and execute with maximal intent — while understanding that 100% readiness is never required to show up.",
    "True performance is neurological, physiological, behavioral, and spiritual. Never just physical. Never stop moving — that is the most important rule.",
    ["Assess your limiters first: where are your movement, strength, and mobility deficiencies?","Set performance-based goals with your coach or training partner","You do not need to be 100% to train — train to the readiness you have that day","Never stop moving: the men who stay athletic into their 60s and 70s simply kept going","Include rotation, lateral movement, jumping, and sprinting — train like an athlete"],
    "summit-phil-derue-daru-strong")

add("stefanos-sifandos",
    ["inner-work","emotional-health","vulnerability","men"],
    ["stefanos","emotional","vulnerability","inner-work","suppression","intimacy","men-over-40"],
    "Stefanos Sifandos challenges men over 40 to confront the most neglected dimension of their health: the inner world. Most men have been conditioned since childhood to suppress emotions, not show weakness, and push through everything. The result over decades: significant emotional and relational disconnection, an inability to be seen, accepted, or vulnerable, and overcompensation through external achievement. The outward success masks a foundational emptiness. Stefanos makes the case that this suppression is not just emotionally costly — it directly impacts physical health through chronic stress, inflammation, and hormonal disruption. The most complete men over 40 have done inner work: processing grief, reconnecting with their emotional experience, and building genuine intimacy.",
    "No matter how strong you look on the outside, if you have not done the inner work, life will eventually catch up to you. That is not weakness — it is truth.",
    ["Acknowledge that emotional suppression has a physical cost: chronic stress, inflammation, hormonal disruption","Identify the masks you wear: the achiever, the provider, the strong silent type — what is underneath?","Find one safe relationship — therapist, coach, or trusted friend — to practice vulnerability","The greatest men over 40 are multidimensional: physically strong AND emotionally real","Begin inner work with honest journaling: what am I actually feeling, and what have I been avoiding?"],
    "summit-stefanos-inner-work")

add("kelsey-dunbar",
    ["resilience","mental-fitness","recovery","second-half"],
    ["suffer-to-tougher","resilience","mental-fitness","addiction","recovery","second-half","men-over-40"],
    "Kelsey Dunbar and Marc Rogala, co-founders of Suffer to Tougher, make the case that the second half of life — especially for men who have hit the wall — can be more powerful than the first. Marc story: a highly successful insurance executive with a family of six, he battled addiction after being prescribed pain pills following a neck injury. At 45, after multiple overdoses and being found clinically dead, he got sober. By 52, his message is clear: the worst suffering of your life does not have to define you — it can forge you. Men over 40 who carry the heaviest burdens are not broken. They are overloaded. The difference between men who survive that overload and those who do not is the decision to build mental fitness alongside physical fitness.",
    "Your suffering is not your story. It is your forge. The men who come through the hardest years often become the strongest versions of themselves.",
    ["Mental fitness must be trained alongside physical fitness — they are equally important","Identify the load you are carrying: career, family, financial, health — name it all","Build resilience tools before the crisis hits: breathwork, community, journaling, movement","Recovery from the worst moments is possible — Marc got sober at 45 and transformed his life","The struggle you are enduring is building exactly the strength you need for the next chapter"],
    "summit-suffer-to-tougher")

add("jason-brown",
    ["full-body-training","program-design","recovery","over-40"],
    ["jason-brown","full-body","training","split","over-40","recovery","frequency","time-efficient"],
    "Jason Brown of Jason Brown Coaching presents the most underused training structure for men over 40: full body training split. Most men believe full-body training is for beginners. This is wrong. Jason, coaching for over 20 years, fully converted to full-body training in his late 30s. The advantages: all movement patterns can be hit in two to three sessions per week, recovery is dramatically improved compared to body-part splits, it is highly adaptable for all training levels, and it leaves time for the things that matter more than strength training itself — mobility, cardiovascular work, and recovery. For busy men over 40 who do not have a surplus of time, full-body training is the highest-efficiency structure available.",
    "Full body training is not for beginners. It is for serious men over 40 who respect their recovery and want maximum results in minimum sessions.",
    ["Two to three full body strength sessions per week cover all movement patterns","Include all foundational patterns each session: squat, hinge, push, pull, lunge, carry","Full-body splits are significantly easier to recover from than body-part splits","The time saved allows investment in mobility, cardiovascular work, and recovery — which matter more","Program frequency over volume: more exposures to each pattern produces faster motor skill"],
    "summit-jason-brown-full-body")

add("joe-defranco",
    ["training-longevity-laws","smart-training","movement-patterns"],
    ["joe-defranco","longevity","if-it-hurts","no-mandatory-exercises","training-laws","smart"],
    "Joe DeFranco, legendary strength and conditioning coach, presents his Laws of Training Longevity. Law 1: If it hurts, do not do it. Not the discomfort of a tough set — the physical pain signal of a real problem. Men who ignore that signal and pile on more weight end up with shoulder surgery or six months of PT instead of adjusting the movement and continuing to train. Law 2: There are no mandatory exercises. Unless you are a competitive powerlifter, no single exercise is required. What is required: cover the fundamental movement patterns — upper body push, upper body pull, squat, hinge, lunge, and carry. Find the specific exercise variation that fits YOUR body structure, YOUR limb lengths, YOUR injury history. Force-fitting exercises that do not suit your anatomy is one of the most common causes of injury in men over 40.",
    "If it hurts, do not do it. There are no mandatory exercises. Cover the patterns — not specific exercises. Train for the long game.",
    ["Law 1: If it hurts, stop that exercise immediately and find a pain-free substitute","Law 2: No mandatory exercises — choose variations that fit your body structure","Cover movement patterns: push, pull, squat, hinge, lunge, carry — choose your best exercise for each","Never force a barbell squat or deadlift if your anatomy does not suit it — trap bar is a great alternative","The goal is to train consistently for the rest of your life — every decision must serve that goal"],
    "summit-joe-defranco-laws")

add("joyce-somers",
    ["gut-health","leaky-gut","inflammation","mood"],
    ["joyce-somers","gut","gut-health","serotonin","dopamine","leaky-gut","inflammation","first-brain"],
    "Joyce Somers, holistic gut health practitioner, reveals why gut health is the root cause of symptoms most men over 40 attribute to aging. The gut produces the majority of the body serotonin and dopamine — your primary mood and motivation neurotransmitters. Brain fog, low motivation, mood dysregulation, and depression can begin in the gut, not the brain. Leaky gut — where the gut lining becomes permeable — allows pathogens and toxins to enter the bloodstream, triggering chronic systemic inflammation. That chronic inflammation is the root cause of most diseases: Alzheimer s, cardiovascular disease, metabolic dysfunction. Joyce approach: heal the gut first. Reduce heavy metals, microplastics, mold exposure, and ultra-processed foods while rebuilding the microbiome.",
    "Most men over 40 are treating symptoms in their brain, hormones, and body that actually started in their gut. Fix the gut and fix everything.",
    ["Get tested for gut permeability and microbiome dysbiosis — the root of systemic inflammation","Eliminate the primary gut disruptors: sugar, alcohol, ultra-processed foods, and seed oils","Reduce environmental toxins: filter water for microplastics and heavy metals, reduce mold exposure","Rebuild the microbiome with diverse vegetables, fermented foods, and quality probiotics","Serotonin and dopamine are produced in the gut — good mood requires a healthy gut"],
    "summit-joyce-somers-gut")

add("dr-justin-farnsworth",
    ["athleticism","power-training","multi-directional-movement"],
    ["justin-farnsworth","rebuilt","athleticism","power","multi-directional","physical-therapy","sport-of-life"],
    "Dr. Justin Farnsworth, founder of Rebuilt and doctor of physical therapy, makes the case that every man should remain athletic forever — not just in the gym, but in the sport of life. His critical insight: 95% of people never sprint after age 30. Not after 40 — after 30. And when those same sedentary men at 45 or 46 try to sprint in response to a challenge, they tear their hamstring or calf. Not because of age — because their body was never prepared. Multi-directional movement — lateral shuffles, deceleration, jumping, throwing, changing direction — is the specific training that keeps the body athletic, reduces stiffness, and builds the capacity for real-world demands. The body that can do these movements is the body that never feels old.",
    "You should be athletic forever. Not just strong. Athletic. The sport of life demands it — getting off the ground, chasing your kids, getting out of the way of a car.",
    ["Include multi-directional movements in every training week: lateral, rotational, deceleration","Progress sprint training gradually: do not attempt a full sprint after years of inactivity","Jump training: box jumps, broad jumps, or bounds 1-2x per week for power preservation","Throw: med ball throws against a wall train rotational power and neural quickness","The athlete does not retire at 40 — he adapts his training and keeps his athleticism"],
    "summit-justin-farnsworth-rebuilt")

add("keith-bozeman",
    ["integrated-health","physician-led","longevity","personalized-medicine"],
    ["keith-bozeman","medgevity","physician","integrated","longevity","bloodwork","team"],
    "Keith Bozeman, founder of Medgevity, built his platform after a frustrating journey with conventional medicine. His vision: an integrated medical team — a board-certified physician plus an exercise physiologist plus a registered dietitian — working together to give men what they actually need: someone spending 363 days a year helping them stay well, not just treating them the 2 days they are sick. The breakthrough insight: information overload is not the problem. Integration is. Men have all the data — the bloodwork, the podcasts, the knowledge — but no one connecting it all into a coherent strategy. Information without integration is wasted. The modern man over 40 needs a system, not just more information.",
    "Men do not have an information problem. They have an integration problem. You need a team that connects your bloodwork to your training to your nutrition to your lifestyle.",
    ["The goal is a proactive health team, not just a reactive doctor","Get a comprehensive annual panel: integrate the results with your training and nutrition decisions","If your doctor does not discuss lifestyle medicine proactively, find one who does","Consider working with an integrated health team: MD plus exercise physiologist plus dietitian","Information without integration is worthless — build a system that connects your health data to action"],
    "summit-keith-bozeman-medgevity")

add("luka-hocevar",
    ["athletic-training","sprinting","never-stop-moving"],
    ["luka-hocevar","vigor-ground","athletic","sprint","power","over-40","60-year-olds"],
    "Luka Hocevar, founder of Vigor Ground Fitness and Performance and former professional basketball player, delivers a startling statistic: after age 30, 95% of people never sprint again. Not because their body cannot do it — because they stopped doing it, their body lost the capacity, and then attempting it became genuinely dangerous. Men who continue to sprint, jump, throw, and move in multiple directions into their 40s and 50s maintain athleticism that creates measurable real-world advantages: hiking challenging terrain, keeping up with their children, responding to emergencies. His 60-year-old clients who sprint and jump stand out everywhere they go — people their age cannot understand how they still move that way. The answer: they never stopped.",
    "After age 30, 95% of people never sprint again. Do not be in that 95%. The body that sprints is the body that stays young.",
    ["Sprint training protocol: start with acceleration work before full-speed sprinting","Progress: hill sprints before flat sprints — safer for hamstrings and Achilles","Include lateral and deceleration movements: shuffles, backpedals, cone work","Jump training: progress from static to dynamic, from double-leg to single-leg","Never stop training athleticism — regress the movements if needed but never eliminate them"],
    "summit-luka-hocevar-vigor")

add("summit-expert",
    ["tricon-training","hypertrophy","CNS","sarcopenia"],
    ["tricon","triple-contraction","sarcopenia","CNS","joint-health","hypertrophy","over-40"],
    "The Tricon Training system (triple contraction) was developed specifically for the physiological reality of men over 40. Three factors compound with age: sarcopenia (3-8% muscle loss per decade after 30, accelerating in the 40s), increased joint wear and tear from decades of use, and slower CNS recovery. Heavy lifting in the one-to-five rep range overstimulates the CNS and degrades cartilage, ligaments, and tendons without providing additional muscle-building stimulus beyond what moderate loads already provide. Tricon solves this by maximizing muscular tension without maximum mechanical load. The three contraction phases create deep muscular fatigue and hypertrophic stimulus using 50-70% of normal working weight while protecting joints and the CNS. Men over 40 can build and maintain significant muscle with this approach.",
    "Sarcopenia starts at 30 and accelerates at 40. You cannot stop it by lifting heavy and hoping for the best. You stop it by creating maximum tension intelligently.",
    ["Tricon set: explosive phase, isometric hold phase, slow tension phase — 3 reps each","Use 50-70% of working weight — focus entirely on muscular tension quality","Perform 3-4 Tricon sets per major muscle group per session","Never train to failure on Tricon — stop with 1-2 reps left for CNS protection","Include Tricon in 1-2 sessions per week, heavier compound work in others"],
    "summit-tricon-training")

add("dr-mike-fortunato",
    ["hormone-optimization","testosterone","beyond-normal"],
    ["fortunato","optimize-MD","testosterone","normal-vs-optimal","hormone","fog","drive"],
    "Dr. Mike Fortunato, founder of Optimize MD Health, was himself a board-certified anesthesiologist whose health was deteriorating in his mid-30s. Chronic pain, severe fatigue, brain fog, zero libido, and complete loss of drive — and every colleague told him his labs were normal. He eventually found a hormone optimization clinic, started testosterone therapy, and began to glimpse the version of himself that had gone missing. His mission: help men understand the critical difference between normal and optimal. The standard laboratory reference range for testosterone is built from a population that includes unhealthy, sedentary men. A man can be within the normal range and feel terrible — because he is comparing to a population average, not to what a thriving 45-year-old man should feel like. Optimal is the target.",
    "You are not supposed to feel foggy, tired, and without drive at 40. Normal is not the same as optimal. You deserve optimal.",
    ["The normal reference range is built from a sick population — optimal is a different target","Request: total testosterone, free testosterone, SHBG, estradiol, LH, FSH, prolactin, PSA","Work with a physician who understands optimal ranges, not just normal ranges","Do not accept feeling terrible as the natural outcome of aging","Track symptoms as a second data point alongside bloodwork: energy, libido, drive, clarity"],
    "summit-mike-fortunato-optimize")

add("dr-perry-nicholson",
    ["lymphatic-health","chronic-pain","movement-variety"],
    ["perry-nicholson","lymph-doctor","stop-chasing-pain","lymphatic","inflammation","chronic-pain","movement"],
    "Dr. Perry Nicholson, known as the Lymph Doctor, is a chiropractic physician who helps men overcome chronic pain and inflammation through the lens most physicians completely ignore: the lymphatic system. The lymphatic system is the body primary drainage network — it removes waste, toxins, and inflammatory byproducts from tissue. When it becomes sluggish from chronic sitting, poor movement variety, and dehydration, systemic inflammation rises and chronic pain accumulates. His message for men over 40: stop going from zero to one hundred miles an hour when returning to exercise — that is how most chronic injuries begin. And stop doing the same movements repeatedly. Micro-trauma from repetitive motion accumulates over years before expressing as sudden injury.",
    "The lymphatic system is the drainage network that keeps inflammation in check. Move it. Vary your movements. Drink water. That is your anti-inflammatory protocol.",
    ["Support lymphatic drainage: walk 30+ min daily, move in multiple directions, avoid prolonged sitting","Vary your movement: the same repetitive pattern for years creates micro-trauma","When returning to exercise: progress from zero to thirty, not from zero to one hundred","Body weight training is highly effective for lymphatic stimulation and anti-inflammatory effect","Get bloodwork for systemic inflammation markers: hs-CRP, ESR, white blood cell count"],
    "summit-perry-nicholson-lymph")

add("rustin-webb",
    ["mobility-fourth-pillar","flexibility-vs-mobility","movement-quality"],
    ["rustin-webb","mobility-recipe","fourth-pillar","flexibility","mobility","kinesiology","movement"],
    "Rustin Webb, founder of the Mobility Recipe with a masters in kinesiology and 25 years in the fitness industry, identifies the missing fourth pillar of fitness that most men and even most fitness professionals ignore. The standard three pillars of fitness are strength, cardio, and nutrition. But these three collapse without the fourth: mobility — the full control of your body through its complete range of motion. Not flexibility, which is passive. Mobility is active control. Adults who skip mobility training are loading dysfunctional movement patterns and wondering why they get hurt. The mobility recipe: address mobility as a non-negotiable fourth pillar alongside your strength, cardio, and nutrition.",
    "Strength, cardio, and nutrition all collapse without mobility as the fourth pillar. You cannot load a movement pattern you do not control.",
    ["Treat mobility as the fourth pillar: equally important as strength, cardio, and nutrition","Distinguish mobility from flexibility: flexibility is passive range, mobility is active control","Assess your mobility baseline: can you squat deeply, reach overhead, rotate fully?","Start with the mobility foundations: hip, shoulder, and thoracic spine control","Mobility work before strength work: if you cannot control it unloaded, do not load it"],
    "summit-rustin-webb-mobility")

add("dr-mike-t-nelson",
    ["supplements","metabolic-flexibility","coaching-leverage"],
    ["mike-nelson","supplements","metabolic-flexibility","FLEX-diet","coaching-leverage","protein","sleep"],
    "Dr. Mike T. Nelson, PhD in exercise physiology and creator of the FLEX Diet Certification, introduces the concept of coaching leverage for men trying to make smart supplement and lifestyle decisions. The framework: rate every intervention by both physiological impact AND ability to actually implement it. Sleep scores 9-10 for physiology but a 1-2 for most people ability to change. Protein scores high on both — people enjoy the idea of eating more to get leaner. Supplements score moderate on physiology but very high on implementation (take two pills). This explains why protein optimization and quality supplementation are better starting points than trying to perfect sleep first. His supplement philosophy: supplements are supplements — they enhance an already solid foundation, they do not replace it.",
    "The most physiologically powerful intervention is useless if the person will not do it. Coaching leverage is the product of both effectiveness AND implementation.",
    ["Start with protein optimization: high impact, easy to implement","Sleep is the highest-leverage physiological intervention but lowest in implementation ease","Supplements work best as a stack on top of training, protein, and basic recovery","Use metabolic flexibility training: your body should be able to use both glucose and fat as fuel","The best supplement protocol: nail the basics first, then layer targeted support"],
    "summit-mike-nelson-FLEX")

add("dr-tom-cowan",
    ["holistic-medicine","scientific-literacy","questioning-conventional"],
    ["tom-cowan","holistic","alternative","natural-health","challenge","conventional","evidence","question"],
    "Dr. Tom Cowan, alternative medicine physician and prolific author, brings a provocative perspective to the Men Over 40 Summit: scientific literacy requires investigating claims, not accepting them. His message for men over 40 navigating the overwhelming world of health advice: learn to ask whether the evidence actually supports the claim before accepting it as truth. Modern healthcare has produced tremendous benefits, but it has also produced a culture of assumption — where men accept diagnoses and protocols without asking how the underlying claims were established. For men over 40, the practical application is: do your own research, question conventional test interpretations, explore holistic and functional medicine approaches alongside conventional care, and do not accept a normal lab result as equivalent to optimal health.",
    "Scientific literacy means investigating the claim, not accepting authority. Ask how they know what they claim to know — especially about your own health.",
    ["Question the evidence behind health claims: how was this established and who funded it?","Explore functional and integrative medicine alongside conventional medicine","Holistic health approaches can complement standard care for chronic conditions","Optimal health requires active investigation, not passive compliance with standard recommendations","Read widely from multiple perspectives and build your own evidence-based framework"],
    "summit-tom-cowan-holistic")

print(f"Generated {len(chunks)} summit expert chunks")
print(f"IDs: fr-106 to fr-{105 + len(chunks):03d}")

# ============================================================
# Inject into knowledge-base.ts
# ============================================================
with open(OUTFILE, "r") as f:
    existing = f.read()

def render_chunk(c):
    lines = ["  {"]
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
    return "\n".join(lines)

new_chunk_ts = "\n\n".join(render_chunk(c) for c in chunks)

# Insert before the closing "];"
arr_close = existing.find("\n];\n")
if arr_close == -1:
    print("ERROR: Could not find array closing in knowledge-base.ts")
    exit(1)

updated = existing[:arr_close] + "\n\n" + new_chunk_ts + "\n" + existing[arr_close:]

# Rebuild topicIndex from all chunks in the updated file
all_chunks_ids = re.findall(r'id: "(fr-\d+)"', updated)
all_chunks_topics = re.findall(r'topic: \[([^\]]+)\]', updated)

topic_map = {}
for cid_str, topics_str in zip(all_chunks_ids, all_chunks_topics):
    for t in re.findall(r'"([^"]+)"', topics_str):
        topic_map.setdefault(t, []).append(cid_str)

ti_start = updated.find("\nexport const topicIndex:")
if ti_start == -1:
    ti_start = updated.find("export const topicIndex:")
ti_end = updated.find("};\n", ti_start) + 3

ti_lines = ["\nexport const topicIndex: Record<string, string[]> = {"]
for t, ids in sorted(topic_map.items()):
    id_list = ", ".join(f'"{i}"' for i in ids)
    ti_lines.append(f'  "{t}": [{id_list}],')
ti_lines.append("};\n")

new_ti = "\n".join(ti_lines)
updated = updated[:ti_start] + new_ti + updated[ti_end:]

with open(OUTFILE, "w") as f:
    f.write(updated)

final_ids = re.findall(r'id: "fr-\d+"', updated)
print(f"\nFinal knowledge-base.ts: {len(final_ids)} total chunks")
print(f"File size: {len(updated):,} bytes")
print("Done!")
