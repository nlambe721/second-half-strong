#!/usr/bin/env python3
"""
Wave 2 summit expert chunks — 8 brand-new experts not previously integrated.
Reads existing knowledge-base.ts to find max ID, then appends new chunks.
"""

import re

OUTFILE = "/home/user/second-half-strong/lib/knowledge-base.ts"

# Find current max chunk ID
with open(OUTFILE, "r") as f:
    existing = f.read()

existing_ids = [int(x) for x in re.findall(r'id: "fr-(\d+)"', existing)]
cid = max(existing_ids) + 1
print(f"Starting from fr-{cid:03d} (max existing: fr-{max(existing_ids):03d})")

chunks = []

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
# 8 NEW SUMMIT EXPERTS — Wave 2
# ============================================================

add("mollie-eastman",
    ["sleep-optimization","sleep-quality","circadian-rhythm"],
    ["mollie-eastman","sleep","sleep-is-a-skill","circadian","optimization","men-over-40","recovery","HRV"],
    "Mollie Eastman, founder of Sleep Is A Skill, makes the case that sleep is not a fixed biological trait — it is a skill that can be developed, optimized, and dramatically improved regardless of age. Her message to men over 40: sleep is the single lever with the highest carryover to every other health goal. More than training. More than nutrition. More than supplements. Yet it is consistently the most deprioritized pillar. The average doctor has approximately two hours of training in sleep — even at top medical schools — so systemic gaps in sleep medicine mean most men never receive a proper sleep assessment. Mollie works with high performers and men over 40 to treat sleep as a performance skill: understanding sleep architecture, circadian biology, light exposure, temperature, and nervous system regulation. Men who optimize sleep first see improvements in hormone levels, recovery, body composition, mood, and cognitive clarity — often within two weeks.",
    "Sleep is a skill. And like any skill, the more you learn about it and apply what you learn, the better you get. Most men are sleeping by accident. We want you sleeping by design.",
    ["Treat sleep as a performance skill — something to study, measure, and improve","Track sleep with a wearable to get objective data on sleep stages, HRV, and recovery","Address morning light: get outside within 30 minutes of waking to anchor your circadian clock","Build a wind-down routine 60-90 minutes before bed: dim lights, no screens, cool temperature","If you are going through a difficult sleep period, protect your belief that this can improve — the mindset matters as much as the tactics"],
    "summit-mollie-eastman-sleep")

add("mike-ranfone",
    ["nutrition","performance","strength","longevity"],
    ["mike-ranfone","ranfone-training","nutrition","performance","strategy-vs-tactics","men-over-40","sustainable"],
    "Mike Ranfone, founder of Ranfone Training Systems and high-performance strength and conditioning coach, distinguishes between tactics and strategy in men's nutrition after 40. The fitness industry sells tactics: the six-week program, the elimination diet, the macro split. What men over 40 need is a strategy: a sustainable nutritional framework designed to support six decades of health, not six weeks of results. Mike has trained elite athletes and everyday men for over 20 years, and his consistent finding is that the men who win long-term are the ones who build nutritional habits that work alongside their real life — not habits that require their life to stop. His core nutritional framework for men over 40: adequate protein at every meal, whole foods as the majority of intake, strategic meal timing around training, and enough flexibility to be sustained for years without burnout.",
    "The industry sells you tactics. What you need is a strategy. A strategy is something that supports the goal for six decades, not six weeks.",
    ["Build a nutritional strategy, not a diet: something sustainable for years not weeks","Hit protein targets at every meal: aim for 40-50g per meal for men over 40","Whole foods should make up 80% of intake: processed food is the primary nutritional problem","Time your largest meals around your training windows for better body composition","Stop searching for the perfect diet: the best diet is the one you can sustain long-term"],
    "summit-mike-ranfone-nutrition")

add("marc-rodriguez",
    ["leadership","longevity","competition","example"],
    ["marc-rodriguez","leadership","legacy","longevity","Hyrox","competition","4-pillars","example"],
    "Marc Rodriguez, leadership coach and competitive Hyrox athlete at 47, reframes longevity for men over 40 through the lens of legacy and leadership. His four pillars of longevity: sleep, stress management, exercise, and nutrition — but his framework goes deeper than physical optimization. The men over 40 who are doing the work are not just improving themselves. They are changing the trajectory of their lineage — their children, grandchildren, and the people who watch them. Leading by example is the most powerful health intervention available. Marc now competes in Hyrox at 47, has two grandchildren, and uses competition as a vehicle to demonstrate that the second half of life can be the best half. His message: your example is the most powerful motivational tool you have. When people see a 47-year-old competing, they believe they can too.",
    "At 47 with two grandchildren, I am competing at Hyrox. Not to win. To show people that showing up is possible. Your example is someone else's permission slip.",
    ["Adopt the four pillars: sleep, stress, exercise, nutrition — but lead with them, not just follow them","Define yourself as the example: who in your circle is watching and waiting for your permission to start?","Compete or pursue physical challenges: entry into races, events, or competitions builds accountability","Tie fitness to leadership: health is not just personal — it is your legacy and your influence","You may be beaten in competition but the act of showing up changes the people around you"],
    "summit-marc-rodriguez-leadership")

add("lance-short",
    ["resilience","BJJ","surgery-recovery","never-stop"],
    ["lance-short","BJJ","jiu-jitsu","resilience","open-heart","surgery","movement","65","never-stop"],
    "Lance Short is 65 years old, a Brazilian Jiu-Jitsu practitioner, former military officer, black belt in karate, and certified dance instructor who refuses to define himself by his medical history. After multiple surgeries including a fused ankle, Lance underwent open heart surgery at 58. Most men at that point stop. Lance did the opposite: he stepped onto the BJJ mats for the first time. Today he continues training and competing. His guiding principle: movement is life. Everything alive moves. When you stop moving, the decline accelerates. His primary motivation for maintaining his physical capability: he became a father later in life. His son is 18 and Lance is 65. He needed to be able to show up — to throw a frisbee, race his son, climb a mountain, do whatever his son wanted to do. The outcome of physical training is not aesthetics. The outcome is capability for the people you love.",
    "Movement is life. Everything alive moves. Stop moving and it is over. I had open heart surgery at 58 and I started BJJ. That is the answer.",
    ["Movement is non-negotiable: find the movements you can do post-surgery or injury and do them","Use your family as the specific motivation: show up for your children and grandchildren","Physical training after 60 is about capability, not aesthetics: can you move, react, and play?","BJJ and martial arts provide physical training AND mental challenge AND community at any age","The recovery mindset: every challenge is an opportunity to discover what you can do, not proof of what you cannot"],
    "summit-lance-short-BJJ")

add("frank-rich",
    ["addiction-recovery","mens-identity","pornography","nervous-system"],
    ["frank-rich","rebuild-man","addiction","recovery","porn","nervous-system","identity","men-over-40"],
    "Frank Rich, founder of Rebuild Man, addresses one of the most hidden health crises affecting men over 40: pornography addiction framed as a nervous system and brain-based challenge rather than a willpower failure. With six years of work with high performers — successful entrepreneurs, professional athletes, surgeons — Frank found a consistent pattern: external achievement masked deep disconnection in intimate and sexual relationships. Men who had built businesses, raised families, and maintained physical fitness were experiencing profound disconnection from their partners. His reframe: this is not a moral failure. It is a neurological pattern formed early and reinforced for decades. The brain can be rewired. Identity can be rebuilt. Men who complete his program consistently report experiencing genuine intimacy — often for the first time in decades despite long marriages and families.",
    "This is not a discipline problem. It is a nervous system and brain challenge. The men who break free do not use willpower. They rewire the system.",
    ["Reframe the challenge: this is a neurological pattern, not a character flaw","Understand the dopamine disruption: porn rewires the brain reward system over years of use","Recovery requires nervous system regulation: breathwork, movement, community, and identity work","Intimate reconnection is the real reward: men who recover report experiencing genuine connection for the first time","Seek structured coaching support — willpower alone almost never resolves a deeply wired neurological pattern"],
    "summit-frank-rich-rebuild-man")

add("eddie-panting",
    ["purpose","mental-strength","redemption","discipline"],
    ["eddie-panting","good-life-fitness","combat-sports","prison","purpose","mental-health","redemption","discipline"],
    "Eddie Panting, regional manager at GoodLife Fitness, combat sports coach, and lifelong student of philosophy, brings one of the most powerful redemption stories to the Men Over 40 Summit. After time spent in federal prison and years of adversity, Eddie rebuilt his life entirely through fitness, discipline, purpose, and philosophy. His anchor text: Man's Search for Meaning by Viktor Frankl — a book he has read over 50 times and recommends to every man he coaches. His core message: men must find a purpose beyond themselves. Not a job. Not an income. A genuine reason to become who they were always meant to be. For men over 40, this often means confronting years of misaligned identity — knowing what you did not want to be but not yet knowing what you want to become. The process of eating well, training consistently, and building physical discipline opens mental and identity doors that nothing else opens.",
    "Find your purpose. Not your job. Your purpose. The men who transform their health are the men who discovered something worth getting strong for.",
    ["Read Man's Search for Meaning by Viktor Frankl — it reframes suffering as the fuel for meaning","Recognize the identity you do not want to be — this negative clarity becomes positive direction","Physical discipline opens mental doors: start with the body and the mind follows","Purpose outside yourself is the foundation of mental strength: who are you becoming this for?","Redemption is available to every man: your past does not define your future unless you let it"],
    "summit-eddie-panting-purpose")

add("robert-linkel",
    ["resistance-training","sarcopenia","older-adults","rucking"],
    ["robert-linkel","training-older-adult","resistance-training","sarcopenia","rucking","cancer","hip-replacement","over-40"],
    "Robert Linkel, director of education at Fitbody Bootcamp and founder of TrainingTheOlderAdult.com, speaks with unique credibility on training through adversity. He underwent thyroid cancer surgery and had both hips replaced at age 36 — giving him first-hand experience of the rehabilitation and retraining journey that most of his older clients face. His five resistance training strategies for men over 40: first, recognize the sarcopenia problem (3-8% muscle loss per decade after 30 accelerates as you age). Second, prioritize resistance training with key focus lifts. Third, build intelligent program design — frequency and progressive overload without overtraining. Fourth, apply recovery strategies actively. Fifth, address foundational health hygiene including sleep, nutrition, and foot care. His standout point: muscle mass is the single most important variable for longevity and quality of life. The more muscle you have, the longer and better you live.",
    "Muscle mass is probably the most important thing in all of this. The more muscle mass you have, the better quality of life and the longer you are going to live.",
    ["Prioritize resistance training as the non-negotiable foundation of all health goals after 40","Program for frequency: 3 resistance training sessions per week hit every major muscle group","Include rucking (loaded walking) as a low-impact way to build strength and conditioning simultaneously","Recovery is training: sleep, soft tissue work, and stress management are part of the program","Do not wait until 60 to start — the men who thrive at 70 are the ones who built muscle at 50"],
    "summit-robert-linkel-older-adults")

add("roderick-lambert",
    ["mitochondria","fat-loss","cellular-health","metabolic-health"],
    ["roderick-lambert","mitochondria","weight-loss","energy","fat-adaptation","circadian","fasting","cellular"],
    "Roderick Lambert presents the root cause framework for midlife weight gain, fatigue, and brain fog that most conventional approaches miss entirely: mitochondrial dysfunction. If men over 40 are doing everything right — training, reducing calories, eating healthy — and still struggling with stubborn weight gain, low energy, and brain fog, the answer is not working harder. The answer is fixing the system that creates energy in the first place. Mitochondria are the cellular powerhouses that produce all metabolic energy. As they decline in density and efficiency through lifestyle damage, the body struggles to produce energy, burns glucose inefficiently, stores fat more readily, and loses the ability to adapt to metabolic demands. The fix: food quality over quantity, fat adaptation to restore metabolic flexibility, meal timing with fasting windows, circadian rhythm alignment through light exposure management, and daily movement especially walking.",
    "Real fat loss after 40 is not about eating less and training harder. It is about fixing the system that creates energy in the first place. Fix your mitochondria, fix everything.",
    ["Understand mitochondrial dysfunction as the root cause of fatigue, belly fat, and brain fog","Prioritize food quality over caloric restriction: nutrients fuel mitochondrial function","Work toward fat adaptation: reduce sugar and refined carbs to allow the body to burn fat efficiently","Use fasting windows (16:8) to trigger cellular repair and metabolic reset","Manage light exposure: morning sunlight, evening darkness, no blue light 90 minutes before bed to protect circadian function","Walk 30+ minutes daily: walking is one of the most powerful mitochondrial health tools available"],
    "summit-roderick-lambert-mitochondria")

print(f"Generated {len(chunks)} new expert chunks")
print(f"IDs: fr-{chunks[0]['id'].split('-')[1]} to fr-{chunks[-1]['id'].split('-')[1]}")

# ============================================================
# Inject into knowledge-base.ts
# ============================================================

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
    print("ERROR: Could not find array closing")
    exit(1)

updated = existing[:arr_close] + "\n\n" + new_chunk_ts + "\n" + existing[arr_close:]

# Rebuild topicIndex
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
