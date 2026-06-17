#!/usr/bin/env python3
"""
Append fr-147 to fr-166 — all uploaded document content:
Sleep, Breathwork, Meditation, Supplements from Funk Roberts' materials.
Run AFTER all previous gen scripts.
"""

import os

KB_PATH = os.path.join(os.path.dirname(__file__), "../lib/knowledge-base.ts")

cid = 147
CHUNKS = []

def add(speaker_id, topics, tags, content, quote=None, protocol=None, source_ref="Funk Roberts / Over 40 Alpha"):
    global cid
    chunk = {
        "id": f"fr-{cid:03d}",
        "speakerId": speaker_id,
        "topic": topics,
        "tags": tags,
        "content": content,
        "sourceRef": source_ref,
    }
    if quote:
        chunk["quote"] = quote
    if protocol:
        chunk["protocol"] = protocol
    CHUNKS.append(chunk)
    cid += 1

# ═══════════════════════════════════════════════════════
# SLEEP DOCUMENTS
# ═══════════════════════════════════════════════════════

add(
    "funk-roberts",
    ["sleep", "recovery", "hormones", "testosterone"],
    ["Alpha Sleep Philosophy", "sleep rules", "circadian rhythm", "testosterone", "deep sleep", "REM", "men over 40"],
    (
        "THE ALPHA SLEEP PHILOSOPHY — Over 40 Alpha Sleep Challenge (Funk Roberts)\n\n"
        "CORE PHILOSOPHY PILLARS:\n"
        "1. SLEEP IS YOUR #1 RECOVERY WEAPON: Sleep is the absolute foundation for fat loss, testosterone production, "
        "and overall health. You cannot out-train, out-eat, or out-supplement poor sleep. If your sleep is broken, "
        "your testosterone is broken.\n\n"
        "2. DEEP SLEEP IS THE ANABOLIC HORMONE SUPERCHARGER: ~90% of daily testosterone is produced during deep and REM "
        "sleep (first 3-5 sleep cycles). This is when the body releases Growth Hormone, DHEA, and Luteinizing Hormone "
        "(LH) to rebuild muscle, burn belly fat, and restore drive.\n\n"
        "3. SLEEP IS A RELATIONSHIP, NOT A TRANSACTION: Great sleep is the natural outcome of how you structure your day, "
        "your light exposure, and your nervous system regulation — not willpower.\n\n"
        "4. RHYTHM IS RECOVERY: The body thrives on a predictable 24-hour circadian rhythm. Consistency is far more "
        "important than perfection. When your body knows exactly when to power up and wind down, you build natural "
        "sleep pressure that produces deep rest.\n\n"
        "5. AIM FOR RESTORATIVE SLEEP: Men over 40 should achieve 3-4 hours of restorative sleep (Deep + REM) within "
        "7-9 hours total. Quality over quantity.\n\n"
        "THE 9 FUNK ROBERTS ALPHA SLEEP RULES:\n"
        "Rule 1 — Anchor Your Wake Time & Morning Light: Pick a wake time and keep it within 30-minute variation. Get "
        "5-10 minutes of natural sunlight within 30-60 minutes of waking to anchor circadian rhythm.\n\n"
        "Rule 2 — Stimulus Control: The bed is for sleep and sex ONLY. Never scroll, email, or watch TV in bed.\n\n"
        "Rule 3 — The 20-Minute Rule: If awake and frustrated for 20 minutes, get up. Go to a low-light calm zone "
        "(read fiction or deep breathe) and only return when sleepy.\n\n"
        "Rule 4 — Master the Alpha Wind-Down Routine: Sleep starts 30-60 minutes before your head hits the pillow. "
        "Shut down all screens and blue light 60 minutes before bed. Switch to dim lamps or red lights.\n\n"
        "Rule 5 — Optimize Thermal & Light Environment: Keep bedroom at 60-67°F (16-19°C). Make the room pitch black. "
        "Eliminate all electronics and LED lights.\n\n"
        "Rule 6 — Time Your Nutrition & Caffeine: Cut off ALL caffeine by 1-2 PM. Finish last large meal 2-3 hours "
        "before bed. If needed, small protein + healthy fat snack (Greek yogurt, walnuts) to stabilize blood sugar.\n\n"
        "Rule 7 — Use the 4-2-6-2 Breathing Protocol: Activate parasympathetic system before bed. For 5-10 minutes: "
        "Inhale 4 sec → Hold 2 sec → Exhale 6 sec → Hold 2 sec. Lowers cortisol, boosts melatonin.\n\n"
        "Rule 8 — Stop Trying to Sleep (Paradoxical Intention): Remove sleep performance anxiety. Instead, gently aim "
        "to stay awake in a relaxed state. Tell yourself: 'I give myself permission to rest.'\n\n"
        "Rule 9 — Bad Night Bounce-Back Protocol: Do NOT sleep in, do NOT over-caffeinate, do NOT take long naps. "
        "Wake at normal time, get morning sunlight, limit naps to 15-20 min before 2 PM, resume normal rhythm."
    ),
    quote="Sleep is your #1 recovery weapon. You cannot out-train, out-eat, or out-supplement poor sleep. If your sleep is broken, your testosterone is broken.",
    protocol=[
        "Anchor wake time daily within 30-minute variation — no exceptions",
        "Get 5-10 min natural sunlight within 60 min of waking — anchors circadian rhythm",
        "Shut down screens and blue light 60 min before bed — switch to dim/red light",
        "Keep bedroom 60-67°F, pitch black, zero electronics",
        "Cut all caffeine by 1-2 PM",
        "Do 4-2-6-2 nasal breathing for 5-10 min before sleep (4 in, 2 hold, 6 out, 2 hold)",
        "If awake 20+ min in bed, get up — calm zone only until sleepy",
        "After bad night: wake at normal time, get sunlight, max 20 min nap before 2 PM",
    ],
    source_ref="Funk Roberts — Over 40 Alpha Sleep Challenge Program"
)

add(
    "funk-roberts",
    ["sleep", "recovery", "protocols"],
    ["sleep reset", "7 minute protocol", "wake up at night", "cortisol", "men over 40 sleep"],
    (
        "THE 7-MINUTE SLEEP RESET PROTOCOL — For Men Over 40 Who Wake Up at Night\n\n"
        "WHY MEN WAKE UP AND CAN'T FALL BACK ASLEEP:\n"
        "• Cortisol Spike — stress hormone wakes you and keeps mind racing\n"
        "• Blood Sugar Drop — low blood sugar triggers adrenaline release\n"
        "• Poor Sleep Environment — light, temperature, or discomfort disrupts deep sleep\n"
        "• Overthinking & Anxiety — brain stays in problem-solving mode\n\n"
        "THE 7-MINUTE SLEEP RESET PROTOCOL:\n\n"
        "Step 1 (0-10 sec) — STOP Looking at the Clock: Looking at the clock triggers stress. "
        "Accept you woke up and move into reset mode. Mindset: 'It's okay — I'm going to use this time to get even deeper sleep.'\n\n"
        "Step 2 (1 min) — 4-7-8 Breathing Method: Inhale 4 sec, Hold 7 sec, Exhale 8 sec. "
        "Shifts nervous system into relaxation mode. Activates parasympathetic system (rest & digest).\n\n"
        "Step 3 (1 min) — Full-Body Relaxation Scan: Mentally scan head to toe releasing tension. "
        "Focus on relaxing jaw, shoulders, and lower back first. Breathe slowly.\n\n"
        "Step 4 (2 min) — Legs-Up Pose: Lay on back, legs up against wall. Hold 2 min with slow breathing. "
        "Reduces blood flow to brain — lowers anxiety and cortisol. Forces nervous system shift from fight-or-flight.\n\n"
        "Step 5 (2 min) — Reverse Sleep Countdown: Count backward from 100 slowly. Imagine sinking into bed with each number. "
        "If mind drifts, gently return to counting. Distracts brain from overthinking, slows brain wave activity.\n\n"
        "BONUS — Sleep Reset Drink (if woke from hunger/blood sugar drop):\n"
        "Mix: Warm water + tart cherry juice (1 oz) + magnesium powder (200-400mg) + pinch of sea salt. "
        "Tart cherry naturally boosts melatonin; magnesium relaxes muscles and nervous system; salt stabilizes blood sugar."
    ),
    quote="The 7-Minute Sleep Reset guides you back into deep sleep within minutes by calming the nervous system, resetting melatonin, and shifting from fight-or-flight to rest mode.",
    protocol=[
        "STOP: Do not look at clock — accept wakeup, shift to reset mode",
        "BREATHE: 4-7-8 method — 4 inhale, 7 hold, 8 exhale for 1 minute",
        "SCAN: Full-body tension release head to toe, 1 minute",
        "LEGS-UP: Back on floor, legs up wall for 2 minutes — reduces cortisol",
        "COUNTDOWN: Count backward from 100 slowly, sinking into bed",
        "IF HUNGRY: Warm water + tart cherry juice + magnesium powder + sea salt",
    ],
    source_ref="Funk Roberts — The 7-Minute Sleep Reset Protocol"
)

add(
    "funk-roberts",
    ["sleep", "recovery", "nutrition", "cortisol"],
    ["bad night sleep", "fix sleep", "bounce back", "fat burning", "cortisol", "circadian reset"],
    (
        "HOW TO FIX SLEEP AFTER A BAD NIGHT & STILL BURN FAT — 6-Step Protocol\n\n"
        "WHAT A BAD NIGHT OF SLEEP DOES:\n"
        "Spikes cortisol (stress hormone), slows metabolism, increases sugar/carb cravings, lowers testosterone "
        "and recovery, disrupts fat-burning rhythm. One bad night won't ruin progress — unless you let it spiral.\n\n"
        "THE 6 STEPS:\n\n"
        "Step 1 — WAKE UP ON SCHEDULE (No Sleeping In): Stick to your usual wake-up time even after 4-5 hours. "
        "Sleeping in delays circadian rhythm, throws off melatonin, makes next night worse. "
        "Immediately open curtains or go outside — sunlight in eyes resets sleep-wake cycle.\n\n"
        "Step 2 — MOVE FIRST THING: 5-10 min of walking, mobility, or light stretching. "
        "Add deep nasal breathing to lower cortisol. Bonus: go barefoot outside (grounding). "
        "Shakes off sleep inertia and improves fat metabolism even when tired.\n\n"
        "Step 3 — HYDRATE & STABILIZE BLOOD SUGAR: After poor sleep, body becomes more insulin resistant and craves carbs. "
        "Drink 16-24 oz water with electrolytes or pink salt. Eat protein + healthy fat breakfast "
        "(eggs + avocado, protein shake + almond butter). Avoid sugary coffee, toast, cereal, or high-carb meals.\n\n"
        "Step 4 — PRIORITIZE FAT-BURNING, NOT EXHAUSTING WORKOUTS: Avoid high-intensity HIIT or heavy lifting "
        "(further spikes cortisol). Instead do fat-burning metabolic circuit, recovery band session, or walk.\n\n"
        "Step 5 — STRATEGIC NAPPING (Optional): 10-20 min power nap before 2 PM ONLY. Any later disrupts nighttime sleep. "
        "Do NOT nap if you have insomnia — it reduces sleep pressure needed to sleep at night.\n\n"
        "Step 6 — PREPARE BETTER SLEEP TONIGHT: Cut caffeine after 12 PM. Extra magnesium (400-500mg glycinate). "
        "Begin wind-down 90 min earlier. Room to 65°F. Do 10 min 4-7-8 breathing before sleep."
    ),
    protocol=[
        "Wake at normal time regardless of hours slept — no sleeping in",
        "Get sunlight immediately upon waking to reset circadian rhythm",
        "5-10 min gentle movement first thing: walk, mobility, or stretch",
        "Drink 16-24 oz water + electrolytes; eat protein + fat breakfast",
        "Avoid HIIT and heavy lifting after bad sleep — fat-burn walk or mobility instead",
        "Power nap: 10-20 min ONLY before 2 PM if needed",
        "Tonight: cut caffeine after noon, take extra magnesium, begin wind-down 90 min earlier",
    ],
    source_ref="Funk Roberts — 6 Steps to Fix Sleep After a Bad Night"
)

add(
    "funk-roberts",
    ["sleep", "hormones", "testosterone", "recovery"],
    ["restorative sleep", "deep sleep", "REM sleep", "testosterone production", "growth hormone", "sleep quality"],
    (
        "RESTORATIVE SLEEP: WHY QUALITY BEATS QUANTITY FOR MEN OVER 40\n"
        "(Funk Roberts — Over 40 Alpha Podcast Episode 192)\n\n"
        "THE CORE TRUTH: You can sleep 8 hours and wake up exhausted. Hours alone don't matter — "
        "the type of sleep does. For men over 40, the goal is achieving 3-4 hours of RESTORATIVE sleep "
        "(Deep Sleep + REM) within a 7-9 hour window.\n\n"
        "WHAT RESTORATIVE SLEEP DOES:\n"
        "• Repairs muscle tissue and releases Growth Hormone\n"
        "• Regulates and produces testosterone\n"
        "• Burns fat during deep sleep stages\n"
        "• Strengthens immune system\n"
        "• Processes memories and regulates emotions\n"
        "• Cleans waste products (including amyloid plaques) from the brain\n\n"
        "THE TWO CRITICAL STAGES:\n\n"
        "DEEP SLEEP (Slow Wave Sleep): The physically restorative stage. This is when Growth Hormone is released, "
        "muscle is rebuilt, immune function is restored, and blood pressure drops. Men over 40 naturally get less "
        "deep sleep — and this is why they feel older.\n\n"
        "REM SLEEP (Rapid Eye Movement): The mentally restorative stage. Processes emotions, consolidates memory, "
        "regulates mood and testosterone. Most men are chronically REM-deficient without knowing it.\n\n"
        "HOW SLEEP DEPRIVATION DESTROYS MEN OVER 40:\n"
        "• Just 1 week of sleep deprivation = testosterone levels of a man 10-15 years older\n"
        "• Poor sleep raises cortisol → cortisol kills testosterone and causes belly fat storage\n"
        "• Disrupts ghrelin (hunger up) and leptin (fullness down) — impossible to lose weight\n"
        "• Impairs glucose control → more fat storage, especially visceral abdominal fat\n\n"
        "HOW TO MAXIMIZE RESTORATIVE SLEEP:\n"
        "1. Protect your first 90-minute sleep cycle (deepest sleep) — go to bed at the same time nightly\n"
        "2. Avoid alcohol within 3 hours of bed — it kills REM sleep even if it makes you drowsy\n"
        "3. Keep bedroom cold (60-67°F) — core temp drop triggers deep sleep\n"
        "4. Magnesium glycinate (400mg) before bed enhances deep sleep quality\n"
        "5. Don't exercise intensely within 2-3 hours of bed — raises core temp\n"
        "6. Track your sleep quality, not just duration — use HRV or sleep score apps"
    ),
    quote="Not all sleep is created equal. For men over 40, quality matters even more than quantity — specifically, the restorative deep sleep and REM stages where testosterone, growth hormone, and recovery happen.",
    protocol=[
        "Target 3-4 hours of restorative (Deep + REM) sleep within 7-9 hours total",
        "Consistent bedtime protects the critical first 90-min deep sleep cycle",
        "No alcohol within 3 hours of bed — it destroys REM sleep",
        "Bedroom at 60-67°F — core temp drop is the trigger for deep sleep",
        "Magnesium glycinate 400mg before bed to enhance deep sleep quality",
        "Track sleep quality (not just hours) using HRV or sleep score",
    ],
    source_ref="Funk Roberts — Over 40 Alpha Podcast Episode 192: Restorative Sleep"
)

# ═══════════════════════════════════════════════════════
# BREATHWORK DOCUMENTS
# ═══════════════════════════════════════════════════════

add(
    "funk-roberts",
    ["breathwork", "stress", "recovery", "mindset"],
    ["21-day breathwork challenge", "breathing techniques", "diaphragmatic breathing", "cortisol reduction", "men over 40"],
    (
        "21-DAY ALPHA BREATHWORK CHALLENGE — Complete Program Guide\n"
        "By Funk Roberts & Over 40 Alpha\n\n"
        "PROGRAM PURPOSE: A 21-day step-by-step breathwork program for men over 40, 50, 60, and 70. "
        "Reduce anxiety, stress, and cortisol; improve relaxation, focus, and concentration; "
        "potentially increase testosterone levels. Master 7 powerful breathwork techniques and build a daily practice.\n\n"
        "WHY BREATHWORK IS ESSENTIAL AFTER 40:\n"
        "• Reduces Anxiety & Stress: Activates parasympathetic nervous system — calms the mind\n"
        "• Improves Relaxation: Allows recovery from the pressures of daily life\n"
        "• Decreases Cortisol: High cortisol from chronic stress is the testosterone killer — breathwork lowers it\n"
        "• Boosts Energy: Improved oxygenation = more mitochondrial energy production\n"
        "• Enhances Focus: Better oxygen delivery to the brain = sharper mental clarity\n"
        "• Supports Hormones: Lower cortisol = higher testosterone — the connection is direct\n\n"
        "THE 7 BREATHING TECHNIQUES IN THE 21-DAY CHALLENGE:\n\n"
        "1. DIAPHRAGMATIC BREATHING (Days 1-3): Deep belly breathing that activates the vagus nerve. "
        "Inhale fully into the belly (not chest), hold briefly, exhale slowly. 5-10 min daily.\n\n"
        "2. BOX BREATHING (Days 4-6): Inhale 4 sec, Hold 4 sec, Exhale 4 sec, Hold 4 sec. "
        "Used by Navy SEALs for stress management and focus under pressure.\n\n"
        "3. 4-7-8 BREATHING (Days 7-9): Inhale 4 sec, Hold 7 sec, Exhale 8 sec. "
        "Powerful for sleep onset and anxiety reduction.\n\n"
        "4. TACTICAL BREATHING (Days 10-12): Combat breathing to lower heart rate rapidly. "
        "Inhale 4 sec, Hold 4 sec, Exhale 4 sec. Used before high-performance situations.\n\n"
        "5. WIM HOF POWER BREATHING (Days 13-15): 30-40 rapid deep breaths, then exhale and hold. "
        "Increases oxygen, alkalizes blood, reduces inflammation, boosts energy.\n\n"
        "6. COHERENCE BREATHING (Days 16-18): 5 seconds in, 5 seconds out. Creates heart-rate variability "
        "coherence between heart and brain — the ideal recovery state.\n\n"
        "7. INTEGRATED DAILY PRACTICE (Days 19-21): Combine techniques — morning power breathing, "
        "afternoon box breathing, evening 4-7-8 for sleep."
    ),
    quote="Breathwork may be one of the most underutilized tools for men over 40. It directly reduces cortisol, improves testosterone, and gives you a recovery tool that requires no equipment and zero cost.",
    protocol=[
        "Day 1-3: Diaphragmatic breathing — 5-10 min of deep belly breathing daily",
        "Day 4-6: Box breathing — 4 sec in, 4 hold, 4 out, 4 hold for stress/focus",
        "Day 7-9: 4-7-8 breathing — 4 in, 7 hold, 8 out — best for sleep and anxiety",
        "Day 10-12: Tactical breathing — inhale 4, hold 4, exhale 4 — before pressure situations",
        "Day 13-15: Wim Hof — 30-40 rapid deep breaths then hold exhale",
        "Day 16-18: Coherence breathing — 5 sec in, 5 sec out — for HRV and recovery",
        "Day 19-21: Integrate all — morning power, afternoon box, evening 4-7-8",
        "Minimum daily: 5 minutes of breathwork — the ROI is enormous",
    ],
    source_ref="Funk Roberts — 21-Day Alpha Breathwork Challenge Program Guide"
)

add(
    "funk-roberts",
    ["breathwork", "recovery", "performance", "mindset"],
    ["Wim Hof", "power breathing", "oxygen", "cold exposure", "energy", "inflammation", "men over 40"],
    (
        "WIM HOF POWER BREATHING FOR MEN OVER 40\n\n"
        "BACKGROUND: The Wim Hof Method, developed by Dutch extreme athlete Wim Hof, uses cycles of deep "
        "inhalations followed by passive exhalations, ending with breath holds. This is one of the most "
        "powerful performance and recovery tools available to men over 40.\n\n"
        "PHYSICAL BENEFITS:\n"
        "• Increased Oxygen: Deep breathing significantly increases O2 levels — enhances performance and endurance\n"
        "• Enhanced Energy: Oxygen boost reduces fatigue\n"
        "• Improved Circulation: Increased blood flow improves cardiovascular health\n"
        "• Pain Reduction: Endorphin release reduces pain perception\n"
        "• Reduced Inflammation: Alkalizes the blood, reducing chronic systemic inflammation\n\n"
        "MENTAL BENEFITS:\n"
        "• Reduced Stress and Anxiety: Activates PNS (parasympathetic nervous system)\n"
        "• Improved Mental Clarity: Better oxygen delivery to the brain\n"
        "• Increased Willpower and Discipline: Mastering cold exposure builds mental toughness\n"
        "• Better Mood: Triggers endorphin and dopamine release\n\n"
        "THE WIM HOF POWER BREATHING PROTOCOL:\n\n"
        "ROUND 1-3 (repeat for 3-4 rounds):\n"
        "1. Inhale FULLY through the nose/mouth — expand chest and belly completely\n"
        "2. Exhale PASSIVELY — just release, no forced exhale\n"
        "3. Repeat rapidly 30-40 times\n"
        "4. After last exhale — HOLD the exhale (lungs empty) as long as comfortable\n"
        "5. When you need to breathe — take one big recovery breath, hold 15 sec\n"
        "6. Exhale, rest 30 sec — then begin next round\n\n"
        "IMPORTANT SAFETY: Always practice seated or lying down. NEVER near water. "
        "You may feel tingling, light-headedness, or euphoria — this is normal.\n\n"
        "COLD EXPOSURE COMBINATION: After Wim Hof breathing, the body is primed for cold exposure. "
        "End showers with 30-90 seconds cold. This combination maximally activates the "
        "sympathetic nervous system then parasympathetic recovery — the ultimate performance cycle.\n\n"
        "RESOURCES (Funk Roberts' Over 40 Alpha):\n"
        "• Video: Wim Hof Power Breathing Guided Session\n"
        "• Audio: Power Breathing Guided Session\n"
        "• Bonus: Power Breathing Benefits for Men Over 40 (mp3)"
    ),
    protocol=[
        "Sit or lie down — NEVER stand or near water",
        "Take 30-40 rapid, full breaths — in through nose, passive exhale",
        "After last exhale — hold breath (empty lungs) as long as comfortable",
        "Recovery breath: inhale fully, hold 15 sec, then exhale",
        "Repeat for 3-4 rounds total",
        "Combine with 30-90 sec cold shower after breathing for maximum benefit",
        "Practice 3-4x per week — morning is ideal",
    ],
    source_ref="Funk Roberts — Wim Hof Power Breathing for Men Over 40"
)

add(
    "funk-roberts",
    ["stress", "cortisol", "breathwork", "recovery", "testosterone"],
    ["stress reduction pillar", "cortisol", "fight or flight", "nervous system", "4-2-6-2 breathing", "cold therapy", "journaling"],
    (
        "THE STRESS REDUCTION PILLAR — Calm the Nervous System, Lower Cortisol, Reclaim Control\n\n"
        "THE PROBLEM: Most men over 40 are living in constant 'fight or flight' mode. Work pressure, financial "
        "responsibilities, family obligations, poor sleep, social media keep the body in chronic stress. "
        "When stress remains elevated too long:\n"
        "• Cortisol increases → Testosterone decreases\n"
        "• Belly fat increases → Recovery suffers\n"
        "• Sleep quality declines → Energy drops\n"
        "• Motivation decreases → Anxiety and irritability rise\n\n"
        "THE SOLUTION: Not to eliminate stress — but to manage and RECOVER from it.\n\n"
        "THE STRESS REDUCTION PILLAR RULES:\n\n"
        "Rule #1 — PRACTICE BREATHWORK DAILY: Breathwork is the fastest way to shift from stressed to relaxed.\n"
        "Daily Minimum: 5 minutes. Protocol: 4-2-6-2 Breathing:\n"
        "• Inhale through nose 4 sec → Hold 2 sec → Exhale through nose 6 sec → Hold 2 sec\n\n"
        "Rule #2 — COLD THERAPY (1-3x per week): Cold showers or cold water immersion activate the vagus nerve, "
        "reduce inflammation, and teach the nervous system to tolerate stress. Start with 30-60 sec cold at end of shower.\n\n"
        "Rule #3 — LIMIT SCREEN/NEWS EXPOSURE: Set phone-free periods. No news first 30 min of morning. "
        "No screens 60 min before bed. Constant digital input keeps the nervous system activated.\n\n"
        "Rule #4 — JOURNALING (5-10 min daily): Brain dump thoughts before bed — offloads mental load from the "
        "prefrontal cortex. Write 3 things you're grateful for + 1 intention for tomorrow.\n\n"
        "Rule #5 — NATURE & MOVEMENT: Walking in nature (even 10-15 min) lowers cortisol measurably. "
        "Combine with grounding (barefoot on grass/earth).\n\n"
        "Rule #6 — CONNECTION & COMMUNITY: Isolation is a cortisol driver. Regular connection with purpose-aligned "
        "men, brotherhood, and meaningful relationships is physiologically protective."
    ),
    protocol=[
        "Daily: 5 min 4-2-6-2 breathing (4 in, 2 hold, 6 out, 2 hold)",
        "1-3x/week: Cold shower 30-60 sec at end — activates vagus nerve",
        "No phone/news for first 30 min of morning — protect your nervous system",
        "No screens 60 min before bed",
        "5-10 min journaling before bed: brain dump + 3 gratitudes + 1 tomorrow intention",
        "10-15 min nature walk — measurably lowers cortisol",
        "Maintain brotherhood and meaningful male connection",
    ],
    source_ref="Funk Roberts — Stress Reduction Pillar Rules"
)

# ═══════════════════════════════════════════════════════
# SUPPLEMENT DOCUMENTS
# ═══════════════════════════════════════════════════════

add(
    "funk-roberts",
    ["supplements", "vitamins", "nutrition", "hormones"],
    ["vitamins men over 40", "essential vitamins", "magnesium", "vitamin D", "zinc", "omega-3", "B vitamins"],
    (
        "BEST VITAMINS FOR MEN OVER 40 — Complete Guide\n"
        "(Funk Roberts — Over 40 Alpha Podcast Episode 188)\n\n"
        "THE NON-NEGOTIABLE VITAMIN FOUNDATION FOR MEN OVER 40:\n\n"
        "1. VITAMIN D3 + K2 (5,000-10,000 IU D3 with 100-200mcg K2):\n"
        "Critical for testosterone production, bone density, immune function, mood, and cardiovascular health. "
        "Most men over 40 are severely deficient. D3 without K2 can cause calcium to deposit in arteries — "
        "always pair them. Test your levels annually (optimal: 60-80 ng/mL).\n\n"
        "2. MAGNESIUM GLYCINATE (400-500mg before bed):\n"
        "The mineral almost every man is deficient in. Required for 300+ enzymatic reactions. "
        "Directly involved in testosterone production. Magnesium glycinate is the most bioavailable form — "
        "better absorbed, doesn't cause digestive issues. Also improves sleep quality dramatically.\n\n"
        "3. OMEGA-3 FISH OIL (2-4g EPA/DHA daily):\n"
        "Reduces systemic inflammation (the root cause of most age-related decline), supports brain function, "
        "reduces triglycerides, improves joint health, and enhances heart health. Take with meals containing fat.\n\n"
        "4. ZINC (25-40mg daily):\n"
        "Essential for testosterone synthesis — zinc deficiency directly causes testosterone drop. "
        "Also critical for immune function, wound healing, and prostate health. Zinc picolinate or gluconate "
        "are best absorbed forms. Take with food to prevent nausea.\n\n"
        "5. B-COMPLEX VITAMINS:\n"
        "B12 (especially methylcobalamin), B6, and folate are critical for energy metabolism, nervous system, "
        "and red blood cell production. B12 absorption declines significantly with age. Many men are functionally "
        "deficient even with normal blood tests. Methylated forms (methylcobalamin, methylfolate) bypass "
        "MTHFR gene variants that prevent conversion.\n\n"
        "6. VITAMIN C (500-1,000mg):\n"
        "Reduces cortisol response post-exercise, supports immune function, collagen synthesis for joint health, "
        "and acts as an antioxidant protecting testosterone-producing Leydig cells.\n\n"
        "7. ASHWAGANDHA (300-600mg KSM-66 extract):\n"
        "The most evidence-backed adaptogen for men over 40. Reduces cortisol by 25-30%, directly supports "
        "testosterone production, improves sleep quality, and builds stress resilience.\n\n"
        "8. CREATINE MONOHYDRATE (3-5g daily):\n"
        "One of the most researched and proven supplements. Builds strength and muscle, supports brain health, "
        "improves power output, and helps counter age-related muscle loss (sarcopenia)."
    ),
    quote="Most men over 40 are walking around vitamin D, magnesium, zinc, and omega-3 deficient — and wondering why they feel like crap, have low testosterone, and can't sleep.",
    protocol=[
        "Vitamin D3 (5,000-10,000 IU) + K2 (100-200mcg) — take with fat-containing meal",
        "Magnesium Glycinate (400-500mg) — before bed for sleep and testosterone",
        "Omega-3 Fish Oil (2-4g EPA/DHA) — with meals",
        "Zinc Picolinate (25-40mg) — with food to prevent nausea",
        "B-Complex with methylated forms (methylcobalamin B12, methylfolate) — morning",
        "Vitamin C (500-1,000mg) — post-workout to lower cortisol",
        "Ashwagandha KSM-66 (300-600mg) — morning or before bed",
        "Creatine Monohydrate (3-5g daily) — any time, consistency matters most",
    ],
    source_ref="Funk Roberts — Podcast Episode 188: Best Vitamins for Men Over 40"
)

add(
    "navin-khan",
    ["supplements", "nutrition", "performance", "hormones", "recovery"],
    ["supplement stacks", "foundational supplements", "testosterone supplements", "muscle supplements", "fat loss supplements", "Navin Khan", "Rocktomic"],
    (
        "COMPLETE SUPPLEMENT STACK GUIDE FOR MEN OVER 40\n"
        "By Navin Khan — Sports Nutritionist, Exercise Physiologist, Head of R&D at Rocktomic Labs\n\n"
        "THE CORE STRUGGLES SUPPLEMENTS ADDRESS AFTER 40:\n"
        "• Energy crashes from declining testosterone, hydration issues, poor nutrient absorption\n"
        "• Muscle loss (sarcopenia) — ~1% muscle loss per year after 40 if not actively countered\n"
        "• Slower recovery — nagging injuries, longer soreness, reduced protein synthesis\n"
        "• Hormonal shifts — testosterone drops, cortisol rises, insulin sensitivity worsens\n"
        "• Digestive health — gut function and nutrient absorption decline\n"
        "• Inflammation & joint pain — stiffness, aches, reduced mobility\n\n"
        "THE 5 STACK CATEGORIES:\n\n"
        "1. FOUNDATIONAL HEALTH STACK (The Base):\n"
        "Multivitamin + Vitamin D3K2 + Magnesium → Replaces nutrient gaps that directly impact testosterone, "
        "energy, and immune function. Without these cofactors, testosterone production and recovery slow down.\n"
        "Omega-3s → Fight systemic inflammation, lower triglycerides, keep arteries flexible, enhance hormone receptor function.\n"
        "Electrolytes/Hydration → Sodium-potassium balance critical for nerve conduction, muscle contraction, blood pressure.\n\n"
        "2. HORMONE & TESTOSTERONE STACK:\n"
        "Ashwagandha KSM-66 (600mg) — reduces cortisol 25-30%, boosts testosterone naturally\n"
        "Zinc (25-40mg) + Magnesium — direct precursors to testosterone synthesis\n"
        "Vitamin D3K2 (5,000+ IU) — testosterone production requires adequate Vitamin D\n"
        "Tongkat Ali (200-400mg) — increases free testosterone by binding SHBG\n"
        "Fenugreek (500mg) — reduces SHBG, increases free testosterone bioavailability\n\n"
        "3. MUSCLE & PERFORMANCE STACK:\n"
        "Creatine Monohydrate (5g daily) — #1 evidence-backed supplement for strength and muscle\n"
        "Whey Protein (25-40g post-workout) — complete amino acid profile for muscle protein synthesis\n"
        "HMB (3g daily) — reduces muscle breakdown, preserves mass during cutting\n"
        "Beta-Alanine (3.2g) — improves muscular endurance\n\n"
        "4. RECOVERY & JOINT STACK:\n"
        "Collagen Peptides (10-15g) + Vitamin C — joint repair and tendon health\n"
        "Turmeric/Curcumin (500-1,000mg with piperine) — systemic anti-inflammatory\n"
        "Glucosamine/Chondroitin — joint cartilage support\n"
        "MSM (1,000-2,000mg) — reduces joint pain and inflammation\n\n"
        "5. FAT LOSS & METABOLIC STACK:\n"
        "Berberine (500mg 3x daily) — blood sugar regulation, insulin sensitivity (as effective as metformin)\n"
        "CLA (3g daily) — reduces body fat, preserves lean muscle\n"
        "Green Tea Extract/EGCG — mild thermogenic, antioxidant protection\n"
        "Fiber (psyllium husk, 10g) — reduces hunger, stabilizes blood sugar, gut health"
    ),
    protocol=[
        "MORNING: D3K2 + Magnesium + Omega-3 + B-Complex + Ashwagandha",
        "PRE-WORKOUT: Creatine + Electrolytes",
        "POST-WORKOUT: Whey Protein (25-40g) + Vitamin C",
        "WITH DINNER: Zinc + Turmeric/Curcumin + Omega-3",
        "BEFORE BED: Magnesium Glycinate (400mg) + Collagen Peptides",
        "DAILY: Berberine with meals if targeting fat loss or blood sugar",
        "WEEKLY: Audit how you feel — adjust based on energy, recovery, sleep quality",
    ],
    source_ref="Navin Khan / Rocktomic Labs — Over 40 Supplement Coaching Guide"
)

add(
    "funk-roberts",
    ["supplements", "nutrition", "protein", "muscle"],
    ["protein powder", "whey protein", "Alpha Whey Armor", "clean protein", "muscle building supplements", "soy lecithin"],
    (
        "PROTEIN POWDER & CLEAN SUPPLEMENT GUIDE FOR MEN OVER 40\n"
        "(Funk Roberts — Over 40 Alpha Supplements)\n\n"
        "WHY PROTEIN IS THE #1 SUPPLEMENT PRIORITY AFTER 40:\n"
        "After 40, muscle protein synthesis declines and the anabolic response to protein weakens. "
        "To preserve and build muscle you need higher protein intake — 0.8-1.2g per pound of bodyweight daily. "
        "Most men don't hit this through food alone. Protein powder fills the gap.\n\n"
        "WHAT TO LOOK FOR IN A CLEAN PROTEIN POWDER:\n"
        "✓ Whey protein isolate or concentrate from grass-fed cows\n"
        "✓ 25-30g protein per serving\n"
        "✓ Minimal ingredients — ideally under 10\n"
        "✓ No artificial sweeteners (sucralose, aspartame, acesulfame K)\n"
        "✓ No fillers, gums, or unnecessary additives\n"
        "✓ Digestive enzymes (lactase, protease) for better absorption\n\n"
        "WHAT TO AVOID:\n"
        "✗ Soy lecithin — processed additive with no muscle/recovery benefit, can cause digestive issues\n"
        "✗ Proprietary blends — hide cheap protein amounts\n"
        "✗ Mass-market powders with artificial colors and flavors\n"
        "✗ Cheap protein blends (collagen counted as protein)\n\n"
        "FUNK'S ALPHA WHEY ARMOR APPROACH:\n"
        "Designed specifically for men over 40: cleaner formulation, easier to digest, built for lean muscle, "
        "recovery, and hormonal performance. No soy lecithin, no artificial sweeteners, enzyme-enhanced.\n\n"
        "SUPPLEMENT Q&A — SOY LECITHIN:\n"
        "Soy lecithin is added to improve texture and mixability, NOT for health benefit. "
        "While it's not highly harmful, it's a processing additive. The concern: many powders containing "
        "soy lecithin also have artificial sweeteners and fillers. Men with soy sensitivity should avoid.\n\n"
        "PROTEIN TIMING FOR MEN OVER 40:\n"
        "• 30-40g within 30-60 min post-workout (the muscle protein synthesis window is blunted after 40 — "
        "don't skip this)\n"
        "• Morning: 30-40g at breakfast to stop overnight muscle catabolism\n"
        "• Before bed: 20-30g casein protein to provide slow-release amino acids overnight"
    ),
    protocol=[
        "Target 0.8-1.2g protein per pound bodyweight daily",
        "Post-workout: 30-40g whey protein within 30-60 min",
        "Morning: 30-40g protein at breakfast — stops overnight catabolism",
        "Pre-sleep: 20-30g casein protein for overnight muscle repair",
        "Choose protein powders with <10 ingredients, no artificial sweeteners",
        "Look for digestive enzymes in formula — critical for men over 40's absorption",
        "Avoid powders with soy lecithin, artificial colors, or proprietary blends",
    ],
    source_ref="Funk Roberts — Protein Powder & Over 40 Alpha Supplement Guide"
)

add(
    "navin-khan",
    ["supplements", "nutrition", "testosterone", "fat loss", "sleep", "joints"],
    ["supplement stacks by problem", "top 10 struggles men over 40", "low testosterone stack", "belly fat stack", "joint pain stack", "brain fog stack"],
    (
        "OVER 40 ALPHA SUPPLEMENT STACKS — BY PROBLEM\n"
        "(Navin Khan / Rocktomic Labs for Funk Roberts)\n\n"
        "TOP 10 STRUGGLES MEN OVER 40 FACE WITH TARGETED SUPPLEMENT STACKS:\n\n"
        "1. LOW TESTOSTERONE & HORMONAL IMBALANCE\n"
        "Stack: Natural testosterone booster (herbs + minerals), Vitamin D3K2, Zinc, Magnesium, Ashwagandha, Tongkat Ali\n"
        "Goal: Reignite manhood, energy, and confidence\n\n"
        "2. LOW ENERGY & CHRONIC FATIGUE\n"
        "Stack: Adaptogens (Ashwagandha, Rhodiola), B-Complex, CoQ10, Greens/Superfood powder\n"
        "Goal: Fight fatigue, get all-day energy without coffee crashes\n\n"
        "3. BELLY FAT & WEIGHT GAIN\n"
        "Stack: Omega-3 fish oil, Berberine (blood sugar support), CLA, Thermogenic fat-burner\n"
        "Goal: Burn stubborn belly fat, improve insulin sensitivity, get leaner\n\n"
        "4. POOR SLEEP & RECOVERY\n"
        "Stack: Magnesium Glycinate, Glycine, GABA, L-Theanine, Melatonin (0.5-1mg low dose)\n"
        "Goal: Deep restorative sleep for more energy, muscle, and better mornings\n\n"
        "5. JOINT PAIN, ACHES & LOSS OF MOBILITY\n"
        "Stack: Collagen peptides + Vitamin C, Turmeric/Curcumin, MSM, Glucosamine, Omega-3\n"
        "Goal: Relieve joint pain and move like you did 20 years ago\n\n"
        "6. MUSCLE LOSS & STRENGTH (Sarcopenia)\n"
        "Stack: Whey Protein, Creatine Monohydrate, HMB, Leucine-rich aminos\n"
        "Goal: Rebuild lost muscle and feel strong again\n\n"
        "7. BRAIN FOG & LACK OF FOCUS\n"
        "Stack: Lion's Mane mushroom, Alpha-GPC, Bacopa, Omega-3 DHA, Ginkgo Biloba\n"
        "Goal: Boost focus, memory, and mental energy\n\n"
        "8. INFLAMMATION & IMMUNE WEAKNESS\n"
        "Stack: Turmeric/Curcumin (high dose), Vitamin C, Vitamin D3, Quercetin, Zinc\n"
        "Goal: Reduce systemic inflammation — the root of most age-related decline\n\n"
        "9. DIGESTIVE HEALTH & GUT ISSUES\n"
        "Stack: Probiotic (multi-strain), Prebiotic fiber, Digestive enzymes, L-Glutamine\n"
        "Goal: Restore gut health — the foundation of nutrient absorption and immunity\n\n"
        "10. STRESS & ANXIETY\n"
        "Stack: Ashwagandha (KSM-66), Rhodiola Rosea, L-Theanine, Magnesium, Phosphatidylserine\n"
        "Goal: Lower cortisol, regulate stress response, improve mental resilience"
    ),
    protocol=[
        "Identify your #1 struggle first — address it with a targeted 3-4 supplement stack",
        "Start foundational stack first (D3K2 + Magnesium + Omega-3 + Zinc) before adding targeted",
        "Low T: Add Ashwagandha KSM-66 + Tongkat Ali + Zinc to foundation",
        "Sleep issues: Add Magnesium Glycinate + L-Theanine + low-dose melatonin (0.5-1mg)",
        "Joint pain: Add Collagen + Vitamin C + Turmeric/Curcumin + MSM",
        "Brain fog: Add Lion's Mane + Alpha-GPC + Omega-3 DHA",
        "Give any new supplement 4-8 weeks to assess effectiveness",
    ],
    source_ref="Navin Khan / Rocktomic Labs — Over 40 Alpha Supplement Stacks Guide"
)

# ═══════════════════════════════════════════════════════
# MEDITATION DOCUMENTS
# ═══════════════════════════════════════════════════════

add(
    "funk-roberts",
    ["meditation", "mindset", "stress", "recovery"],
    ["meditation for men", "how to meditate", "meditation benefits", "cortisol", "testosterone", "5 minute meditation"],
    (
        "MEDITATION FOR MEN OVER 40 — The Complete Framework\n\n"
        "WHY MEDITATION IS A PERFORMANCE TOOL FOR MEN:\n"
        "Meditation isn't mystical or spiritual fluff — it's brain training. Just as lifting weights builds muscle, "
        "meditation builds the mental muscle of focus, self-regulation, and stress resilience. "
        "For men over 40, it directly lowers cortisol, which means directly supporting testosterone.\n\n"
        "THE SCIENCE OF MEDITATION AND MEN'S HEALTH:\n"
        "• Reduces cortisol and chronic stress response\n"
        "• Increases gray matter density in the prefrontal cortex (decision-making, focus)\n"
        "• Decreases amygdala reactivity (fear, anxiety, emotional overreaction)\n"
        "• Improves heart rate variability — the key marker of recovery capacity\n"
        "• Reduces systemic inflammation markers (CRP, IL-6)\n"
        "• Improves sleep quality and testosterone production\n\n"
        "5 MYTHS ABOUT MEDITATION (BUSTED):\n"
        "Myth 1: 'You have to empty your mind' — WRONG. The practice IS noticing thoughts and returning attention. "
        "Every redirect is a mental rep.\n"
        "Myth 2: 'It takes hours a day' — WRONG. 5-10 minutes daily produces measurable brain changes.\n"
        "Myth 3: 'It's only for spiritual people' — WRONG. Elite athletes, military operators, and CEOs use it.\n"
        "Myth 4: 'I'm too busy' — WRONG. Men who meditate report getting MORE done with LESS stress.\n"
        "Myth 5: 'If I fall asleep, I'm doing it wrong' — WRONG. Rest is part of the practice.\n\n"
        "THE 5-MINUTE MEDITATION PROTOCOL FOR BUSY MEN:\n"
        "1. Set a timer for 5 minutes — remove time pressure\n"
        "2. Sit upright (don't lie down) — alert relaxation\n"
        "3. Close eyes, take 3 deep breaths to transition\n"
        "4. Focus on the sensation of breathing at the nostrils or chest\n"
        "5. When thoughts arise (they will), notice without judgment and return to breath\n"
        "6. At timer — open eyes, take 1 intentional breath before moving\n\n"
        "WHEN TO MEDITATE:\n"
        "• Morning: Sets calm, focused tone for the day — reduces cortisol spike after waking\n"
        "• Pre-workout: 5 min focused breathing improves performance and mind-muscle connection\n"
        "• Post-workout: Accelerates parasympathetic recovery\n"
        "• Before bed: Most powerful — lowers cortisol, raises melatonin, improves sleep quality"
    ),
    quote="Meditation is not about becoming a different person. It's about training your awareness and gaining a healthier perspective on yourself. For men over 40, it's the performance tool that makes all other tools work better.",
    protocol=[
        "Start with 5 minutes daily — morning is ideal",
        "Sit upright, set a timer, close eyes, take 3 deep breaths",
        "Focus on breath sensation — nostrils, chest, or belly",
        "When thoughts arise: notice, don't judge, return to breath (each return IS the practice)",
        "Build to 10-15 min over 4 weeks",
        "Pre-bed meditation: specifically lowers cortisol and raises melatonin",
        "Track consistency for 21 days — the habit forms by day 21",
    ],
    source_ref="Funk Roberts — Meditation for Men Over 40 Framework"
)

add(
    "funk-roberts",
    ["meditation", "mindset", "recovery", "stress"],
    ["REAL Alpha meditation", "21-day meditation challenge", "loving kindness", "self inquiry", "surrender meditation", "gratitude meditation"],
    (
        "THE REAL ALPHA MEDITATION PROGRAMS — Complete Suite\n\n"
        "THE 21-DAY ALPHA MEDITATION CHALLENGE:\n"
        "Funk Roberts' structured 21-day program to build a daily meditation habit. Covers 7 different meditation "
        "styles over 3 weeks, building from foundation to mastery.\n\n"
        "WEEK 1 — Foundation (Days 1-7): Focused attention meditation. Learning to use the breath as an anchor. "
        "5-10 min sessions. Goal: build the daily habit and understand the basic technique.\n\n"
        "WEEK 2 — Deepening (Days 8-14): Body scan meditation + loving-kindness meditation. "
        "Releases held tension in the body. Builds self-compassion and reduces emotional reactivity.\n\n"
        "WEEK 3 — Integration (Days 15-21): Visualization + gratitude meditation + open awareness. "
        "Using meditation to connect with purpose, vision, and gratitude for life in the second half.\n\n"
        "LOVING-KINDNESS MEDITATION PROTOCOL:\n"
        "1. Close eyes, take 3 deep breaths\n"
        "2. Bring to mind someone you love easily — feel that warmth\n"
        "3. Direct these phrases to them: 'May you be happy. May you be healthy. May you be safe. May you live with ease.'\n"
        "4. Expand to yourself: 'May I be happy. May I be healthy. May I be safe. May I live with ease.'\n"
        "5. Expand to neutral people, then difficult people, then all beings\n"
        "Result: Reduces cortisol, increases oxytocin, improves heart health and relationship quality.\n\n"
        "SELF-INQUIRY MEDITATION:\n"
        "Sit quietly and ask: 'Who am I beyond my roles and responsibilities?' Notice the witness behind all thoughts. "
        "This practice builds identity stability — crucial for men over 40 navigating life transitions.\n\n"
        "SURRENDER MEDITATION:\n"
        "Actively release control of outcomes during meditation. Breathe in acceptance, breathe out resistance. "
        "Statement: 'I release what I cannot control. I act on what I can. I trust the process.'\n\n"
        "GRATITUDE MEDITATION:\n"
        "Spend 5 min mentally reviewing 3 specific things you're grateful for — vivid and detailed, not generic. "
        "Gratitude activates the prefrontal cortex and reduces the brain's default threat-detection mode.\n\n"
        "POSITIVE PSYCHOLOGY MODULE (Funk Roberts):\n"
        "8-week framework covering: optimism training, resilience building, strength identification, "
        "positive relationships, mindfulness and flow, finding meaning and purpose in the second half of life."
    ),
    protocol=[
        "21-Day Challenge: 5-10 min daily — track every session",
        "Week 1: Focused attention on breath (5-10 min)",
        "Week 2: Body scan + loving-kindness meditation",
        "Week 3: Visualization + gratitude + open awareness",
        "Loving-kindness: 5 min — expand warmth from loved one → self → all",
        "Gratitude meditation: 3 specific vivid gratitudes for 5 min daily",
        "Surrender meditation: breathe in acceptance, breathe out resistance",
    ],
    source_ref="Funk Roberts — 21-Day REAL Alpha Meditation Challenge"
)

add(
    "funk-roberts",
    ["mindset", "meditation", "gratitude", "resilience", "leadership"],
    ["positive psychology", "gratitude practice", "resilience", "optimism", "purpose", "second half of life", "meaning"],
    (
        "POSITIVE PSYCHOLOGY & GRATITUDE FOR MEN OVER 40\n\n"
        "WHY POSITIVE PSYCHOLOGY MATTERS IN THE SECOND HALF:\n"
        "Men over 40 often operate from a deficit mindset — focusing on what's lost (youth, hormones, speed, "
        "opportunity). Positive psychology retrains the brain to scan for resources, strengths, and possibilities. "
        "This isn't toxic positivity — it's neurological reprogramming.\n\n"
        "THE SCIENCE:\n"
        "• Gratitude practice activates the prefrontal cortex — the same region responsible for discipline and decision-making\n"
        "• Regular gratitude reduces cortisol by up to 23%\n"
        "• Optimistic men have better cardiovascular outcomes, stronger immune function, and live longer\n"
        "• Resilience is trainable — it's a skill, not a personality trait\n\n"
        "THE 8-WEEK POSITIVE PSYCHOLOGY MODULE:\n"
        "Week 1: Introduction to positive psychology + personal happiness/wellbeing assessment\n"
        "Week 2: The science of optimism — cognitive restructuring, reframing negative scenarios\n"
        "Week 3: Resilience — strategies for bouncing back from adversity; analyze past challenges\n"
        "Week 4: The Happiness Advantage — using positive emotions to improve performance\n"
        "Week 5: Strengths and virtues — identify personal strengths, apply in daily life\n"
        "Week 6: Positive relationships — build and maintain meaningful connections\n"
        "Week 7: Mindfulness and flow — find your flow activities and daily mindfulness practice\n"
        "Week 8: Meaning and purpose — craft your personal mission statement for the second half\n\n"
        "DAILY GRATITUDE PROTOCOL:\n"
        "Morning: Write 3 specific things you're grateful for (vivid, not generic). "
        "'I'm grateful for my health' is weak. 'I'm grateful for the fact that I woke up today and my legs work "
        "and I can train' is powerful.\n\n"
        "Evening: Write 1 thing that went well today + what you did to make it happen. "
        "This trains the brain to attribute good outcomes to your actions (internal locus of control).\n\n"
        "THE RESILIENCE FRAMEWORK:\n"
        "1. Acknowledge the difficulty — don't minimize it\n"
        "2. Identify what you can control vs. what you can't\n"
        "3. Find the growth opportunity in the challenge\n"
        "4. Take one concrete action forward\n"
        "5. Seek support — resilience is not done alone"
    ),
    protocol=[
        "Morning: Write 3 specific, vivid gratitudes — not generic",
        "Evening: 1 thing that went well + what YOU did to make it happen",
        "Weekly: Identify your top 3 personal strengths and how you used them",
        "Monthly: Review and update your personal mission statement",
        "Daily: Reframe one negative situation — what is it teaching you?",
        "Build positive male relationships — schedule connection intentionally",
    ],
    source_ref="Funk Roberts — Positive Psychology & Gratitude for Men Over 40"
)

# ═══════════════════════════════════════════════════════
# ADDITIONAL CONTENT FROM HARVARD SLEEP DOCUMENT
# ═══════════════════════════════════════════════════════

add(
    "funk-roberts",
    ["sleep", "hormones", "nutrition", "recovery", "testosterone"],
    ["sleep science", "testosterone and sleep", "cortisol sleep", "glucose control sleep", "ghrelin leptin", "sleep deprivation effects"],
    (
        "SLEEP SCIENCE FOR MEN OVER 40 — How Sleep Deprivation Destroys Your Body\n\n"
        "THE FOUR HORMONAL DISASTERS FROM POOR SLEEP:\n\n"
        "1. TESTOSTERONE COLLAPSE:\n"
        "Research shows that just ONE WEEK of sleep deprivation leaves men with testosterone levels equivalent "
        "to a man 10-15 years older. This isn't gradual — it's rapid and severe. Without optimal testosterone, "
        "it becomes harder to stay lean, build muscle, and maintain drive and motivation.\n\n"
        "2. IMPAIRED GLUCOSE CONTROL:\n"
        "Poor sleep destroys how your body handles glucose. With good glucose control, carbs go into muscle "
        "tissue for repair and energy. With poor sleep-induced insulin resistance, the same carbs go straight "
        "to body fat — especially VISCERAL (belly) fat around the organs. This is why many men gain fat "
        "rapidly when they're sleep-deprived despite not changing their diet.\n\n"
        "3. ELEVATED CORTISOL:\n"
        "Sleep deprivation directly spikes cortisol — the tissue-breaking, muscle-destroying, fat-storing "
        "stress hormone. High cortisol means: muscle loss, belly fat accumulation, testosterone suppression, "
        "and impaired recovery. The more you train without adequate sleep, the more cortisol dominates.\n\n"
        "4. GHRELIN & LEPTIN DISRUPTION:\n"
        "Ghrelin (hunger hormone) rises without adequate sleep — you eat more. "
        "Leptin (fullness hormone) falls — you don't feel satisfied. "
        "The result: uncontrollable hunger, carb cravings, and weight gain that feels impossible to stop.\n\n"
        "WHAT 7+ HOURS DOES FOR MEN OVER 40:\n"
        "• Maximizes testosterone production (90% produced during sleep)\n"
        "• Maintains insulin sensitivity — carbs fuel muscle, not fat\n"
        "• Normalizes cortisol — allows recovery and muscle building\n"
        "• Regulates appetite hormones — makes healthy eating easier\n"
        "• Releases Growth Hormone — the anti-aging, fat-burning, muscle-building hormone\n"
        "• Clears amyloid plaques from the brain — reduces Alzheimer's risk"
    ),
    quote="One week of sleep deprivation leaves men with testosterone levels equivalent to a man 10-15 years older. Sleep is not optional — it's the foundation of your hormonal health.",
    source_ref="Funk Roberts — Sleep & Recovery Science (Pillar 2)"
)

# ═══════════════════════════════════════════════════════
# IMPLEMENTATION PLAN / ALPHA SYSTEM OVERVIEW
# ═══════════════════════════════════════════════════════

add(
    "funk-roberts",
    ["training", "nutrition", "sleep", "mindset", "supplements", "lifestyle"],
    ["implementation plan", "Alpha system", "complete program", "men over 40 system", "all pillars", "Second Half Strong"],
    (
        "THE SECOND HALF STRONG IMPLEMENTATION PLAN — Complete System Overview\n"
        "(Funk Roberts — Over 40 Alpha)\n\n"
        "THE COMPLETE MEN OVER 40 HEALTH OPERATING SYSTEM:\n"
        "This is the full integration of all pillars for men who are serious about the second half of their life.\n\n"
        "PILLAR 1 — TRAINING:\n"
        "• Resistance Training: 3-4x per week, compound movements, moderate weight, higher reps (10-15)\n"
        "• HIIT/Metabolic Training: 2x per week, 20-30 min sessions with full recovery between\n"
        "• Mobility Work: Daily, 10-15 min — non-negotiable for men over 40\n"
        "• Key principle: Train smarter, not harder. Consistency over intensity.\n\n"
        "PILLAR 2 — NUTRITION:\n"
        "• Protein: 0.8-1.2g per pound bodyweight — the non-negotiable foundation\n"
        "• Anti-inflammatory base: whole foods, minimal processed, eliminate seed oils\n"
        "• Intermittent fasting optional: 16:8 window works well for many men over 40\n"
        "• Carb timing: cluster carbs around training\n"
        "• Key principle: Eat to perform, recover, and support hormones — not just for weight\n\n"
        "PILLAR 3 — SLEEP:\n"
        "• Target: 7-9 hours total, 3-4 hours restorative (deep + REM)\n"
        "• Consistent wake time every day\n"
        "• Alpha Wind-Down Routine: screens off 60 min before bed, 4-2-6-2 breathing\n\n"
        "PILLAR 4 — STRESS MANAGEMENT:\n"
        "• Daily breathwork: 5 min minimum\n"
        "• Daily meditation: 5-10 min\n"
        "• Cold therapy: 1-3x per week\n"
        "• Journaling: 5 min evening gratitude + brain dump\n\n"
        "PILLAR 5 — SUPPLEMENTS:\n"
        "• Foundation: D3K2 + Magnesium + Omega-3 + Zinc + B-Complex\n"
        "• Protein: 30-40g whey post-workout and morning\n"
        "• Performance: Creatine 5g daily\n"
        "• Testosterone: Ashwagandha + Tongkat Ali (if needed)\n\n"
        "PILLAR 6 — MINDSET (REAL Alpha):\n"
        "• Radical Ownership of all outcomes\n"
        "• Evolution: constant growth mindset\n"
        "• Alignment: mind, body, purpose unified\n"
        "• Leadership: lead yourself and family first\n\n"
        "THE DAILY ALPHA ROUTINE:\n"
        "Morning: Wake anchor time → sunlight → movement → hydrate → protein breakfast → supplements\n"
        "Midday: Training → post-workout protein → refuel\n"
        "Evening: Wind-down 60 min before bed → breathwork → meditation/journaling → sleep 10 PM-7 AM target"
    ),
    protocol=[
        "Train 3-4x strength + 2x metabolic per week + daily 10-15 min mobility",
        "Protein: 0.8-1.2g per pound bodyweight daily",
        "Sleep: 7-9 hours, consistent wake time, 60-min screen-free wind-down",
        "Daily: 5 min breathwork + 5 min meditation + evening journaling",
        "Foundation supplements: D3K2 + Magnesium + Omega-3 + Zinc + B-Complex daily",
        "Creatine 5g daily + Whey 25-40g post-workout",
        "REAL Alpha: Radical Ownership → Evolution → Alignment → Leadership",
    ],
    source_ref="Funk Roberts — Second Half Strong Complete Implementation Plan"
)

# ═══════════════════════════════════════════════════════
# INJECT INTO KNOWLEDGE-BASE.TS
# ═══════════════════════════════════════════════════════

def chunk_to_ts(c):
    def esc(s):
        return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    lines = ["  {"]
    lines.append(f'    id: "{c["id"]}",')
    lines.append(f'    speakerId: "{c["speakerId"]}",')
    topics_str = ", ".join(f'"{t}"' for t in c["topic"])
    lines.append(f'    topic: [{topics_str}],')
    tags_str = ", ".join(f'"{t}"' for t in c["tags"])
    lines.append(f'    tags: [{tags_str}],')
    lines.append(f'    content: `{esc(c["content"])}`,')
    if "quote" in c:
        lines.append(f'    quote: `{esc(c["quote"])}`,')
    if "protocol" in c:
        proto = ",\n      ".join(f'`{esc(p)}`' for p in c["protocol"])
        lines.append(f'    protocol: [\n      {proto},\n    ],')
    lines.append(f'    sourceRef: "{c["sourceRef"]}",')
    lines.append("  }")
    return "\n".join(lines)

with open(KB_PATH, "r", encoding="utf-8") as f:
    src = f.read()

INSERT_MARKER = "];\n\nexport const topicIndex"
if INSERT_MARKER not in src:
    raise RuntimeError("Marker not found in knowledge-base.ts")

new_ts = "\n".join(chunk_to_ts(c) + "," for c in CHUNKS)
src = src.replace(INSERT_MARKER, f"\n{new_ts}\n{INSERT_MARKER}")

with open(KB_PATH, "w", encoding="utf-8") as f:
    f.write(src)

print(f"Appended {len(CHUNKS)} chunks (fr-147 to fr-{cid-1})")
print(f"New file size: {len(src):,} bytes")
