#!/usr/bin/env python3
"""
Comprehensive KB expansion — reads ALL unique summit transcripts + docs folder
and adds meaningful chunks for every speaker with < 3 existing chunks.
"""

import os, re

KB_PATH = "/home/user/second-half-strong/lib/knowledge-base.ts"
SUMMIT_DIR = "/home/user/second-half-strong/scripts/summit"
DOCS_DIR = "/home/user/second-half-strong/scripts/docs"

with open(KB_PATH, "r", encoding="utf-8") as f:
    content = f.read()

ids = re.findall(r'id: "fr-(\d+)"', content)
last_id = max(int(x) for x in ids) if ids else 162
print(f"Starting from fr-{last_id + 1}")

def next_id():
    global last_id
    last_id += 1
    return f"fr-{last_id}"

def read_file(path):
    for enc in ["utf-8", "latin-1", "cp1252"]:
        try:
            with open(path, encoding=enc) as f:
                return f.read()
        except:
            pass
    return ""

def clean_text(raw, max_chars=3000):
    """Remove timestamps, clean whitespace, truncate."""
    lines = raw.split("\n")
    clean = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Skip pure timestamp lines
        if re.match(r'^\d+:\d+[\.:]\d+\s*$', line):
            continue
        if re.match(r'^\[\d+:\d+[\.:]\d+\]', line):
            line = re.sub(r'^\[\d+:\d+[\.:]\d+\]\s*', '', line)
        if not line:
            continue
        clean.append(line)
    text = " ".join(clean)
    # Remove excessive whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text[:max_chars]

def escape_ts(s):
    return s.replace("\\", "\\\\").replace("`", "'").replace("${", "\\${")

def speaker_chunk_count(speaker_id):
    return len(re.findall(f'speakerId: "{speaker_id}"', content))

new_chunks = []

def add_chunk(speaker_id, display_name, topics, tags, text_content, source_ref, quote=None, protocol=None):
    if len(text_content.strip()) < 100:
        return
    cid = next_id()
    topics_str = '", "'.join(topics)
    tags_str = '", "'.join(tags)
    escaped = escape_ts(text_content.strip()[:2800])
    
    quote_line = f'\n    quote: "{escape_ts(quote)}",' if quote else ''
    protocol_lines = ""
    if protocol:
        pl = '", "'.join([escape_ts(p) for p in protocol])
        protocol_lines = f'\n    protocol: ["{pl}"],'

    chunk = f'''  {{
    id: "{cid}",
    speakerId: "{speaker_id}",
    topic: ["{topics_str}"],
    tags: ["{tags_str}"],
    content: `{escaped}`,{quote_line}{protocol_lines}
    sourceRef: "{source_ref}",
  }},'''
    new_chunks.append(chunk)
    print(f"  + {cid}: {speaker_id}")

# ─────────────────────────────────────────────────────────────────────────────
# SUMMIT TRANSCRIPTS — only add chunks for speakers with < 3 existing chunks
# ─────────────────────────────────────────────────────────────────────────────

TRANSCRIPT_MAP = [
    # (filename, speaker_id, display_name, primary_topics, primary_tags, source_label)
    ("balduzzi.txt", "anthony-balduzzi", "Dr. Anthony Balduzzi",
     ["fit-father-project", "fat-loss-over-40", "men-health-optimization"],
     ["fat loss", "training", "nutrition", "testosterone", "men over 40"],
     "Men Over 40 Health Summit — Dr. Anthony Balduzzi"),
    
    ("ben-and.txt", "ben-pakulski", "Ben Pakulski",
     ["mitochondria-optimization", "muscle-intelligence", "M140-protocol"],
     ["mitochondria", "muscle", "energy", "optimization", "training", "longevity"],
     "Men Over 40 Health Summit — Ben Pakulski"),
    
    ("ben-greenfield-1.txt", "ben-greenfield", "Ben Greenfield",
     ["biohacking-over-40", "longevity-performance", "advanced-protocols"],
     ["biohacking", "performance", "longevity", "sleep", "recovery", "hormones"],
     "Men Over 40 Health Summit — Ben Greenfield"),
    
    ("bill-m.txt", "bill-maeda", "Bill Maeda",
     ["strength-systems-40plus", "performance-training"],
     ["strength training", "performance", "men over 40", "movement"],
     "Men Over 40 Health Summit — Bill Maeda"),
    
    ("bill-maeda2.txt", "bill-maeda", "Bill Maeda",
     ["athletic-performance", "training-longevity"],
     ["strength", "athletic performance", "training", "longevity"],
     "Men Over 40 Health Summit — Bill Maeda Part 2"),
    
    ("chris.txt", "chris-lopez", "Chris Lopez",
     ["kettlebell-training", "fat-loss-conditioning"],
     ["kettlebell", "training", "conditioning", "fat loss", "functional fitness"],
     "Men Over 40 Health Summit — Chris Lopez"),
    
    ("clark.txt", "clark-bartram", "Clark Bartram",
     ["body-transformation", "fitness-over-60", "longevity-mindset"],
     ["transformation", "fitness", "longevity", "mindset", "training"],
     "Men Over 40 Health Summit — Clark Bartram"),
    
    ("dean-1.txt", "dean-pohlman", "Dean Pohlman",
     ["yoga-for-men", "mobility-recovery", "flexibility"],
     ["yoga", "mobility", "flexibility", "recovery", "men over 40"],
     "Men Over 40 Health Summit — Dean Pohlman (Man Flow Yoga)"),
    
    ("dean-2.txt", "dean-somerset", "Dean Somerset",
     ["corrective-exercise", "movement-quality", "pain-free-training"],
     ["corrective exercise", "functional training", "movement quality", "pain relief"],
     "Men Over 40 Health Summit — Dean Somerset"),
    
    ("eddie-and-funk.txt", "eddie-panting", "Eddie Panting",
     ["athletic-performance", "combat-sports-fitness"],
     ["athletic performance", "training", "conditioning", "combat sports"],
     "Men Over 40 Health Summit — Eddie Panting & Funk Roberts"),
    
    ("fir.txt", "firas-zahabi", "Firas Zahabi",
     ["martial-arts-mindset", "discipline", "combat-performance"],
     ["martial arts", "mindset", "discipline", "confidence", "performance"],
     "Men Over 40 Health Summit — Firas Zahabi"),
    
    ("frank-rich.txt", "frank-rich", "Frank Rich",
     ["men-health-systems", "coaching-transformation"],
     ["men's health", "coaching", "systems", "lifestyle", "transformation"],
     "Men Over 40 Health Summit — Frank Rich"),
    
    ("funk-roberts-summit.txt", "funk-roberts", "Funk Roberts",
     ["second-half-strong-system", "men-over-40-blueprint"],
     ["training", "nutrition", "testosterone", "mindset", "men over 40", "system"],
     "Men Over 40 Health Summit — Funk Roberts Keynote"),
    
    ("greg.txt", "gregory-dzemaili", "Gregory Dzemaili",
     ["kettlebell-mastery", "athletic-longevity", "movement-quality"],
     ["kettlebell", "training", "longevity", "movement", "strength"],
     "Men Over 40 Health Summit — Gregory Dzemaili"),
    
    ("interview-1.txt", "dan-john", "Dan John",
     ["simple-strength-systems", "training-longevity", "minimalist-training"],
     ["strength", "training", "simplicity", "longevity", "barbell", "fundamentals"],
     "Men Over 40 Health Summit — Dan John"),
    
    ("interview-2.txt", "dr-sherry-mcallister", "Dr. Sherry McAllister",
     ["whole-being-health", "nervous-system-optimization", "chiropractic"],
     ["alignment", "chiropractic", "movement", "nervous system", "recovery", "posture"],
     "Men Over 40 Health Summit — Dr. Sherry McAllister"),
    
    ("interview-3.txt", "coach-kavita", "Coach Kavita Ajlani",
     ["relationships-intimacy", "emotional-health", "love-life-over-40"],
     ["relationships", "intimacy", "emotional health", "mindset", "communication"],
     "Men Over 40 Health Summit — Coach Kavita Ajlani"),
    
    ("interview-4.txt", "kenneth-swartz", "Kenneth Swartz",
     ["oxidative-stress", "cellular-energy", "biological-aging"],
     ["oxidative stress", "energy", "cellular health", "aging", "recovery", "inflammation"],
     "Men Over 40 Health Summit — Kenneth Swartz"),
    
    ("interview-5.txt", "kevin-carr", "Kevin Carr",
     ["training-for-longevity", "functional-strength", "movement-screening"],
     ["training", "longevity", "functional strength", "movement", "assessment"],
     "Men Over 40 Health Summit — Kevin Carr"),
    
    ("interview-6.txt", "phil-derue", "Phil DeRue",
     ["elite-coaching", "combat-performance", "mental-toughness"],
     ["combat sports", "performance", "coaching", "discipline", "mental toughness"],
     "Men Over 40 Health Summit — Phil DeRue"),
    
    ("interview-7.txt", "stefanos-sifandos", "Stefanos Sifandos",
     ["inner-work", "masculine-vulnerability", "deep-relationships"],
     ["inner work", "relationships", "intimacy", "emotional intelligence", "mindset"],
     "Men Over 40 Health Summit — Stefanos Sifandos"),
    
    ("interview-luke-w.txt", "mental-toughness-coaches", "Kelsey Dunbar & Marc Rogala",
     ["mental-fitness", "resilience-building", "stress-toughness"],
     ["mental fitness", "resilience", "toughness", "mindset", "stress management"],
     "Men Over 40 Health Summit — Mental Toughness Interview"),
    
    ("jb.txt", "jason-brown", "Jason Brown",
     ["programming-40plus", "training-strategies", "coaching"],
     ["training", "strategies", "men over 40", "fitness", "programming"],
     "Men Over 40 Health Summit — Jason Brown"),
    
    ("jb-part2.txt", "jason-brown", "Jason Brown",
     ["advanced-programming", "training-systems-40plus"],
     ["programming", "training", "men over 40", "recovery", "periodization"],
     "Men Over 40 Health Summit — Jason Brown Part 2"),
    
    ("joe-defranco.txt", "joe-defranco", "Joe DeFranco",
     ["athletic-development", "performance-training", "strength-systems"],
     ["athletic development", "performance", "training", "strength", "conditioning"],
     "Men Over 40 Health Summit — Joe DeFranco"),
    
    ("joe-defranco2.txt", "joe-defranco", "Joe DeFranco",
     ["longevity-training", "strength-conditioning-over-40"],
     ["strength", "conditioning", "longevity", "training", "performance"],
     "Men Over 40 Health Summit — Joe DeFranco Part 2"),
    
    ("joy.txt", "joyce-somers", "Joyce Somers",
     ["gut-health", "microbiome", "digestive-optimization"],
     ["gut health", "microbiome", "digestion", "inflammation", "nutrition", "leaky gut"],
     "Men Over 40 Health Summit — Joyce Somers"),
    
    ("justin.txt", "dr-justin-farnsworth", "Dr. Justin Farnsworth",
     ["power-training", "explosiveness-over-40", "movement-quality"],
     ["power", "explosiveness", "athleticism", "movement", "training", "performance"],
     "Men Over 40 Health Summit — Dr. Justin Farnsworth"),
    
    ("keith.txt", "keith-bozeman", "Keith Bozeman",
     ["blood-work-interpretation", "lab-markers-men", "hormone-labs"],
     ["blood work", "labs", "testosterone", "hormones", "health markers", "optimization"],
     "Men Over 40 Health Summit — Keith Bozeman"),
    
    ("lance-bjj.txt", "lance-short", "Lance Short",
     ["bjj-fitness", "martial-arts-conditioning", "combat-sports"],
     ["BJJ", "martial arts", "fitness", "performance", "discipline"],
     "Men Over 40 Health Summit — Lance Short"),
    
    ("linkul-virtual.txt", "robert-linkel", "Robert Linkel",
     ["resistance-training-older-adults", "5-key-strategies", "strength-over-40"],
     ["resistance training", "older adults", "men over 40", "strength", "muscle"],
     "Men Over 40 Health Summit — Robert Linkel"),
    
    ("luke.txt", "luka-hocevar", "Luka Hocevar",
     ["athletic-training-over-40", "performance-coaching", "NBA-methods"],
     ["athletic training", "performance", "men over 40", "strength", "conditioning"],
     "Men Over 40 Health Summit — Luka Hocevar"),
    
    ("marc-rodriguez.txt", "marc-rodriguez", "Marc Rodriguez",
     ["strength-conditioning", "performance-training"],
     ["strength", "conditioning", "performance", "training"],
     "Men Over 40 Health Summit — Marc Rodriguez"),
    
    ("mens-health-presenta.txt", "nick-tricon", "Nick (Tricon Training)",
     ["triple-contraction-training", "strength-hypertrophy"],
     ["triple contraction", "training", "strength", "muscle", "technique"],
     "Men Over 40 Health Summit — Tricon Training Presentation"),
    
    ("mike-and-marko.txt", "dr-marco-lujic", "Mike Ranfone & Dr. Marco Lujic",
     ["performance-nutrition", "longevity-nutrition", "food-as-medicine"],
     ["nutrition", "longevity", "performance", "health markers", "food quality"],
     "Men Over 40 Health Summit — Mike Ranfone & Dr. Marco Lujic"),
    
    ("mike.txt", "dr-mike-fortunato", "Dr. Mike Fortunato",
     ["hormone-optimization", "TRT-protocols", "testosterone-restoration"],
     ["hormones", "testosterone", "energy", "TRT", "optimization", "low T"],
     "Men Over 40 Health Summit — Dr. Mike Fortunato"),
    
    ("mollie.txt", "mollie-eastman", "Mollie Eastman",
     ["sleep-optimization", "circadian-rhythm", "alpha-sleep-protocol"],
     ["sleep", "recovery", "sleep optimization", "circadian rhythm", "insomnia"],
     "Men Over 40 Health Summit — Mollie Eastman (Sleep Is A Skill)"),
    
    ("percy.txt", "dr-perry-nicholson", "Dr. Perry Nicholson",
     ["lymphatic-health", "chronic-pain-relief", "inflammation-management"],
     ["lymphatic health", "chronic pain", "inflammation", "recovery", "mobility"],
     "Men Over 40 Health Summit — Dr. Perry Nicholson"),
    
    ("roderik-lambert.txt", "roderick-lambert", "Roderick Lambert",
     ["athletic-training", "performance-longevity"],
     ["athletic training", "performance", "conditioning", "longevity"],
     "Men Over 40 Health Summit — Roderick Lambert"),
    
    ("ruston.txt", "rustin-webb", "Rustin Webb",
     ["strength-with-purpose", "pain-free-movement", "mobility-training"],
     ["strength", "purpose", "mobility", "pain relief", "functional training"],
     "Men Over 40 Health Summit — Rustin Webb"),
    
    ("summit-health-i.txt", "dr-mike-t-nelson", "Dr. Mike T. Nelson",
     ["supplements-over-40", "metabolic-flexibility", "performance-nutrition"],
     ["supplements", "metabolic flexibility", "performance", "nutrition", "fat loss"],
     "Men Over 40 Health Summit — Dr. Mike T. Nelson"),
    
    ("summit-health-w.txt", "dr-tom-cowan", "Dr. Tom Cowan",
     ["natural-health", "holistic-medicine", "alternative-protocols"],
     ["natural health", "holistic medicine", "lifestyle", "wellness", "nutrition"],
     "Men Over 40 Health Summit — Dr. Tom Cowan"),
    
    ("sm.txt", "marcello-fragrance", "Marcello",
     ["sensory-wellness", "lifestyle-optimization"],
     ["sensory wellness", "presence", "lifestyle", "confidence"],
     "Men Over 40 Health Summit — Marcello"),
]

for filename, speaker_id, display_name, topics, tags, source_ref in TRANSCRIPT_MAP:
    path = os.path.join(SUMMIT_DIR, filename)
    if not os.path.exists(path):
        print(f"  MISSING: {filename}")
        continue
    
    existing = speaker_chunk_count(speaker_id)
    if existing >= 3:
        print(f"  SKIP (has {existing} chunks): {speaker_id}")
        continue
    
    raw = read_file(path)
    if not raw or len(raw.strip()) < 200:
        print(f"  SKIP (too short): {filename}")
        continue
    
    full_text = clean_text(raw, 6000)
    
    # How many more chunks needed
    need = 3 - existing
    
    # Split text into parts
    part_size = len(full_text) // (need + 1) if need > 1 else len(full_text)
    
    parts = []
    if need >= 2 and len(full_text) > 2000:
        # Split into 2 meaningful parts
        mid = len(full_text) // 2
        # Find sentence boundary near mid
        for i in range(mid, min(mid + 300, len(full_text))):
            if full_text[i] in ".!?":
                mid = i + 1
                break
        parts = [full_text[:mid], full_text[mid:]]
    else:
        parts = [full_text]
    
    for i, part in enumerate(parts[:need]):
        part = part.strip()
        if len(part) < 150:
            continue
        part_topics = topics.copy()
        if i == 1:
            part_topics = [topics[0] + "-advanced"] + topics[1:]
        add_chunk(speaker_id, display_name, part_topics, tags, part, source_ref)

# ─────────────────────────────────────────────────────────────────────────────
# DOCS FOLDER — breathwork, meditation, sleep, supplements
# ─────────────────────────────────────────────────────────────────────────────

DOCS_MAP = [
    # (filename, speaker_id, display_name, topics, tags, source_label)
    ("breathwork-men.txt", "funk-roberts", "Funk Roberts",
     ["breathwork-men-over-40", "breathing-protocols"],
     ["breathwork", "breathing", "stress", "recovery", "energy", "focus"],
     "Funk Roberts — Breathwork for Men Over 40"),
    
    ("5-myths-meditation.txt", "funk-roberts", "Funk Roberts",
     ["meditation-myths", "mindfulness-men"],
     ["meditation", "mindset", "stress", "focus", "mental health"],
     "Funk Roberts — 5 Myths About Meditation"),
    
    ("5-ways-meditation.txt", "funk-roberts", "Funk Roberts",
     ["meditation-benefits", "mental-performance"],
     ["meditation", "mental health", "focus", "performance", "stress reduction"],
     "Funk Roberts — 5 Ways Meditation Helps Men"),
    
    ("best-vitamins-ep188.txt", "funk-roberts", "Funk Roberts",
     ["vitamins-men-over-40", "supplement-protocols"],
     ["vitamins", "supplements", "nutrition", "testosterone", "energy", "men over 40"],
     "Funk Roberts — Best Vitamins for Men Over 40 (Ep. 188)"),
    
    ("top-reasons-meditate.txt", "funk-roberts", "Funk Roberts",
     ["meditation-purpose", "mental-clarity-men"],
     ["meditation", "mindset", "clarity", "stress", "focus"],
     "Funk Roberts — Top Reasons to Meditate"),
    
    ("wim-hof-breathing.docx", "funk-roberts", "Funk Roberts",
     ["wim-hof-method", "cold-exposure-breathing"],
     ["Wim Hof", "breathing", "cold exposure", "energy", "recovery", "immune"],
     "Funk Roberts — Wim Hof Breathing Protocol"),
    
    ("alpha-sleep-philosophy.docx", "funk-roberts", "Funk Roberts",
     ["alpha-sleep-system", "sleep-optimization-protocol"],
     ["sleep", "recovery", "sleep optimization", "testosterone", "men over 40"],
     "Funk Roberts — Alpha Sleep Philosophy"),
    
    ("pillar2-sleep.docx", "funk-roberts", "Funk Roberts",
     ["sleep-pillar", "recovery-fundamentals"],
     ["sleep", "recovery", "health fundamentals", "men over 40"],
     "Funk Roberts — Sleep as a Core Pillar"),
    
    ("harvard-sleep.docx", "summit-expert", "Harvard Sleep Research",
     ["sleep-science", "evidence-based-sleep"],
     ["sleep", "science", "recovery", "health", "research"],
     "Summit Resource — Harvard Sleep Research"),
    
    ("how-to-fix-sleep.docx", "funk-roberts", "Funk Roberts",
     ["sleep-troubleshooting", "fix-poor-sleep"],
     ["sleep", "insomnia", "recovery", "fix", "protocol", "men over 40"],
     "Funk Roberts — How to Fix Your Sleep"),
    
    ("over40-supplements-coaching.docx", "funk-roberts", "Funk Roberts",
     ["supplement-coaching-over-40", "supplement-stack"],
     ["supplements", "coaching", "men over 40", "testosterone", "energy", "nutrition"],
     "Funk Roberts — Supplement Coaching for Men Over 40"),
    
    ("rocktomic-over40-alpha.docx", "funk-roberts", "Funk Roberts",
     ["rocktomic-alpha-supplements", "over40-supplement-stack"],
     ["supplements", "Rocktomic", "alpha", "men over 40", "testosterone"],
     "Funk Roberts — Rocktomic Over 40 Alpha System"),
    
    ("stacks-rocktomic-over40.docx", "funk-roberts", "Funk Roberts",
     ["supplement-stacks", "rocktomic-protocols"],
     ["supplement stacks", "Rocktomic", "protocols", "men over 40", "testosterone"],
     "Funk Roberts — Supplement Stacks & Protocols"),
    
    ("supplement-qa-lectin.docx", "funk-roberts", "Funk Roberts",
     ["supplement-qa", "lectin-protocol"],
     ["supplements", "Q&A", "lectins", "nutrition", "gut health"],
     "Funk Roberts — Supplement Q&A (Lectin)"),
]

for filename, speaker_id, display_name, topics, tags, source_ref in DOCS_MAP:
    path = os.path.join(DOCS_DIR, filename)
    if not os.path.exists(path):
        # Try without extension check
        base = os.path.splitext(filename)[0]
        for ext in [".txt", ".docx", ".pdf"]:
            alt = os.path.join(DOCS_DIR, base + ext)
            if os.path.exists(alt):
                path = alt
                break
        else:
            print(f"  MISSING: {filename}")
            continue
    
    raw = read_file(path)
    if not raw or len(raw.strip()) < 100:
        print(f"  SKIP (empty/unreadable): {filename}")
        continue
    
    # For docs, don't check chunk count — always add if meaningful content
    text = clean_text(raw, 3000)
    if len(text) < 200:
        print(f"  SKIP (too short after clean): {filename}")
        continue
    
    # Check if we already have a chunk from this exact source
    safe_ref = source_ref.replace('"', '')
    if f'sourceRef: "{safe_ref}"' in content:
        print(f"  SKIP (already indexed): {source_ref}")
        continue
    
    add_chunk(speaker_id, display_name, topics, tags, text, source_ref)

# ─────────────────────────────────────────────────────────────────────────────
# WRITE TO KB
# ─────────────────────────────────────────────────────────────────────────────

print(f"\n{'='*50}")
print(f"Total new chunks: {len(new_chunks)}")
print(f"New IDs: fr-{last_id - len(new_chunks) + 1} to fr-{last_id}")

if not new_chunks:
    print("Nothing to add.")
else:
    insertion = "\n" + "\n".join(new_chunks) + "\n"
    
    # Try multiple closing patterns
    patterns = [
        "\n];\n\nexport const topicIndex",
        "\n];\n\nfunction searchKnowledge",
        "\n];\n\nexport function searchKnowledge",
    ]
    
    new_content = content
    for pattern in patterns:
        if pattern in content:
            new_content = content.replace(pattern, insertion + "];")
            # Re-add the rest
            new_content = new_content + content[content.index(pattern) + len(pattern) - 1:]
            # Actually do a cleaner replacement
            idx = content.index(pattern)
            new_content = content[:idx] + insertion + content[idx:]
            print(f"  Inserted before: '{pattern.strip()[:30]}...'")
            break
    
    if new_content == content:
        # Fallback: append before last ]
        last_bracket = content.rfind("\n];")
        if last_bracket != -1:
            new_content = content[:last_bracket] + insertion + content[last_bracket:]
            print("  Used fallback insertion (before last ];)")
    
    with open(KB_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"\nWritten to {KB_PATH}")
    
    # Verify
    import re as re2
    new_count = len(re2.findall(r'id: "fr-\d+"', new_content))
    print(f"Total chunks now: {new_count}")
