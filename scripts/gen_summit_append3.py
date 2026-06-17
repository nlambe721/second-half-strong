#!/usr/bin/env python3
"""
Append fr-145 and fr-146 to the knowledge base.
  fr-145: Dr. Marco Lujic (mike-and-marko.txt)
  fr-146: Marcello (sm.txt) - Niche Fragrance / Sensory Wellness
Run AFTER gen_kb.py, gen_summit_append.py, and gen_summit_append2.py.
"""

import os

KB_PATH = os.path.join(os.path.dirname(__file__), "../lib/knowledge-base.ts")

cid = 145

CHUNKS = []

def add(speaker_id, topics, tags, content, quote=None, protocol=None, source_ref="Men Over 40 Health Summit"):
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

# ---------- fr-145: Dr. Marco Lujic ----------
add(
    speaker_id="dr-marco-lujic",
    topics=["nutrition", "hormones", "longevity", "medicine", "performance"],
    tags=["nutrition strategy", "age management", "physician", "hormone optimization", "men over 40", "longevity", "preventive medicine", "RTS Health"],
    content=(
        "Dr. Marco Lujic is a physician, age management specialist, and co-founder of RTS Health. "
        "After training and working as a general surgeon, Marco shifted from treating disease to preventing it — "
        "helping men take control of their health before problems start. "
        "He combines a medical background with an athletic mindset (former Division I athlete) and works at the intersection "
        "of medicine and performance, using advanced diagnostics, hormone optimization, and lifestyle strategies.\n\n"
        "NUTRITION AS FOUNDATIONAL STRATEGY: The single most important nutritional principle is having a strategy "
        "that supports your goal. 'Flavor of the month' diets are tactical, not strategic — they work for 6-week programs "
        "but not for the 6 decades you want to pay dividends. Most men confuse tactics with strategy.\n\n"
        "CORNERSTONE FRAMEWORK: Like a head cornerstone in architecture, nutrition is the base upon which everything else "
        "is built. Most physicians are never exposed to nutrition in medical school — this is a system failure. "
        "When you combine medical diagnostics with nutrition strategy and strength coaching, the results are transformative.\n\n"
        "WHAT WORKS FOR MEN OVER 40: (1) Prioritize protein — muscle mass preservation becomes critical after 40 "
        "as muscle loss accelerates. (2) Understand your metabolic baseline through diagnostics (bloodwork, hormones, "
        "inflammation markers). (3) Reduce ultra-processed foods and seed oils, which drive chronic inflammation. "
        "(4) Time your nutrition around your training. (5) Get your hormones checked — low testosterone, insulin resistance, "
        "and thyroid dysfunction all show up as 'I'm just getting older' symptoms that are treatable.\n\n"
        "PREVENTIVE vs REACTIVE MEDICINE: The conventional healthcare system waits for disease. Age management medicine "
        "intervenes earlier — identifying risk markers 10-15 years before disease manifests. Men over 40 should get "
        "comprehensive bloodwork including testosterone (total + free), SHBG, estradiol, thyroid panel, inflammation "
        "markers (hsCRP, homocysteine), metabolic panel, and nutrient levels (Vitamin D, B12, magnesium)."
    ),
    quote="There has never in the history been a time where dietary nutritional needs were more paramount. Nutrition is the head cornerstone — it is the strongest part of the foundation.",
    protocol=[
        "Get comprehensive bloodwork: testosterone (total + free), SHBG, estradiol, thyroid, hsCRP, metabolic panel",
        "Establish a nutrition strategy aligned to your goal — not just a 6-week tactic",
        "Prioritize protein at every meal: minimum 0.8-1g per pound of bodyweight for muscle preservation",
        "Eliminate ultra-processed foods and industrial seed oils as the baseline first step",
        "Time carbohydrates around training windows; reduce them during sedentary periods",
        "Work with a physician who integrates performance and medicine — not just disease management",
    ],
    source_ref="Men Over 40 Health Summit – Mike Ranfone & Dr. Marco Lujic Session"
)

# ---------- fr-146: Marcello - Niche Fragrance / Sensory Wellness ----------
add(
    speaker_id="marcello-fragrance",
    topics=["mindset", "confidence", "identity", "lifestyle", "sensory wellness"],
    tags=["fragrance", "sensory wellness", "confidence", "personal identity", "lifestyle", "presence", "self-care", "men over 40"],
    content=(
        "Marcello is a niche fragrance collector, educator, and founder of the Niche Fragrance Collector YouTube channel "
        "and KEM Fragrance Tours. His masterclass at the Men Over 40 Health Summit covers the power of scent as a wellness "
        "and confidence tool — a dimension of self-care most men completely overlook.\n\n"
        "WHY FRAGRANCE MATTERS FOR MEN OVER 40: 'Perfume is the mystery of you.' Scent creates instant impressions "
        "and signals presence, confidence, and attention to detail. A man who smells exceptional projects authority "
        "and sophistication. Activating all senses is part of living fully — most men deprioritize this completely.\n\n"
        "FRAGRANCE TYPES (Oil Concentration Guide):\n"
        "• Eau de Cologne (3-5% oil): Bright, effervescent, citrus-forward. Lasts 4-5 hours. Best for casual use.\n"
        "• Eau de Toilette (10-15% oil): Office-appropriate, 5-6 hours, moderate complexity.\n"
        "• Eau de Parfum (15-23% oil): Recommended for most men. Complex, 12+ hours, multiple evolving notes.\n"
        "• Extrait de Parfum (23-30%+): Extremely dense and complex, longest lasting, most expensive.\n"
        "• Attar/Oil Perfume: No alcohol, oil-based, dabbed on heat spots — lasts 24-48 hours.\n\n"
        "THE FRAGRANCE WARDROBE CONCEPT: Just as you have different clothing for different occasions, "
        "you should have different fragrances — a daily office scent, a formal/event scent, a casual weekend scent, "
        "and a date/intimate scent. This is a sign of intentional living and elevated presence.\n\n"
        "APPLICATION TECHNIQUE: Always spray on skin (not clothing) for heat activation. Target pulse points — "
        "neck, wrists, inner elbows, chest. The fragrance evolves as skin temperature rises. A proper fragrance "
        "opens with top notes, evolves through heart notes, and dries down to base notes over hours.\n\n"
        "SENSORY WELLNESS INSIGHT: Smell is tied directly to the limbic system — the brain's emotional center. "
        "Scent triggers memory and emotion faster than any other sense. Wearing intentional fragrance is a daily "
        "ritual that grounds you in the present, elevates confidence, and signals to yourself and others that you "
        "take your presentation and experience of life seriously."
    ),
    quote="If we couldn't smell, our lives would be black and white. When you activate your nose, all of a sudden your life becomes technicolor.",
    protocol=[
        "Build a fragrance wardrobe: one for work, one for formal occasions, one for weekends, one for intimacy",
        "Choose Eau de Parfum as your primary fragrance for best complexity and longevity (12+ hours)",
        "Spray on skin (not clothing) — always on pulse points: neck, wrists, inner elbows, chest",
        "Try an oil-based attar for 24-48 hour wear on heat spots without reapplication",
        "Use fragrance as a daily intentional ritual — choose your scent based on the day ahead, like choosing your mindset",
        "Learn to identify top/heart/base notes — this trains sensory awareness and presence",
    ],
    source_ref="Men Over 40 Health Summit – Marcello, Niche Fragrance Collector Masterclass"
)

# ─────────────────── inject into knowledge-base.ts ───────────────────

def chunk_to_ts(c):
    def esc(s): return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    lines = [f'  {{']
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
        proto_lines = ",\n      ".join(f'`{esc(p)}`' for p in c["protocol"])
        lines.append(f'    protocol: [\n      {proto_lines},\n    ],')
    lines.append(f'    sourceRef: "{c["sourceRef"]}",')
    lines.append(f'  }}')
    return "\n".join(lines)

with open(KB_PATH, "r", encoding="utf-8") as f:
    src = f.read()

INSERT_MARKER = "];\n\nexport const topicIndex"
if INSERT_MARKER not in src:
    raise RuntimeError("Marker not found in knowledge-base.ts")

new_chunks_ts = "\n".join(chunk_to_ts(c) + "," for c in CHUNKS)
src = src.replace(INSERT_MARKER, f"\n{new_chunks_ts}\n{INSERT_MARKER}")

with open(KB_PATH, "w", encoding="utf-8") as f:
    f.write(src)

print(f"Appended {len(CHUNKS)} chunks (fr-145 to fr-{cid-1}) to knowledge-base.ts")
print(f"New file size: {len(src):,} bytes")
