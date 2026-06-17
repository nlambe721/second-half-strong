#!/usr/bin/env python3
"""
Full knowledge base expansion — extracts key content from ALL unique transcript files
and adds comprehensive chunks for every speaker with full coverage.
Appends to knowledge-base.ts starting at fr-163.
"""

import os, re, textwrap

KB_PATH = "/home/user/second-half-strong/lib/knowledge-base.ts"

# Read current KB to find last chunk id
with open(KB_PATH, "r") as f:
    content = f.read()

ids = re.findall(r'id: "fr-(\d+)"', content)
last_id = max(int(x) for x in ids) if ids else 162
print(f"Last chunk ID: fr-{last_id}")

def next_id():
    global last_id
    last_id += 1
    return f"fr-{last_id}"

def read_file(path):
    for enc in ["utf-8", "latin-1"]:
        try:
            with open(path, encoding=enc) as f:
                return f.read()
        except:
            pass
    return ""

def extract_speaker_content(text, max_chars=8000):
    """Extract meaningful speaker content, skipping timestamps."""
    lines = text.split("\n")
    content_lines = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Skip timestamp-only lines like "Speaker (00:01.234)"
        if re.match(r'^[\w\s]+ \(\d+:\d+\.\d+\)$', line):
            continue
        if re.match(r'^\(\d+:\d+\.\d+\)$', line):
            continue
        content_lines.append(line)
    return " ".join(content_lines)[:max_chars]

def escape_ts(s):
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

SUMMIT_DIR = "/home/user/second-half-strong/scripts/summit"

# Define unique files (exclude s- duplicates) and their speakers
TRANSCRIPTS = [
    # (filename, speakerId, displayName, topic, tags)
    ("balduzzi.txt", "anthony-balduzzi", "Dr. Anthony Balduzzi",
     ["fat-loss", "fitness-over-40", "men's-health"],
     ["fat loss", "training", "nutrition", "testosterone"]),
    ("s-balduzzi2.txt", "anthony-balduzzi", "Dr. Anthony Balduzzi",
     ["fit-father-project", "men-over-40"],
     ["training", "nutrition", "lifestyle"]),
    ("ben-and.txt", "ben-pakulski", "Ben Pakulski",
     ["mitochondria", "muscle-intelligence", "M140"],
     ["mitochondria", "muscle", "optimization", "energy"]),
    ("ben-greenfield-1.txt", "ben-greenfield", "Ben Greenfield",
     ["biohacking", "performance", "longevity"],
     ["biohacking", "performance", "longevity", "sleep"]),
    ("bill-m.txt", "bill-maeda", "Bill Maeda",
     ["strength", "performance"],
     ["strength training", "performance", "men over 40"]),
    ("bill-maeda2.txt", "bill-maeda", "Bill Maeda",
     ["strength-systems", "athletic-performance"],
     ["strength", "athletic performance", "training"]),
    ("chris.txt", "chris-lopez", "Chris Lopez",
     ["kettlebell", "conditioning"],
     ["kettlebell", "training", "conditioning", "fat loss"]),
    ("clark.txt", "clark-bartram", "Clark Bartram",
     ["body-transformation", "fitness-longevity"],
     ["transformation", "fitness", "longevity", "mindset"]),
    ("dean-1.txt", "dean-pohlman", "Dean Pohlman",
     ["yoga-for-men", "mobility"],
     ["yoga", "mobility", "flexibility", "recovery"]),
    ("dean-2.txt", "dean-somerset", "Dean Somerset",
     ["corrective-exercise", "functional-training"],
     ["corrective exercise", "functional training", "movement"]),
    ("s-dean-and.txt", "dean-pohlman", "Dean Pohlman",
     ["mobility-recovery", "yoga-men-over-40"],
     ["yoga", "mobility", "flexibility", "recovery", "men over 40"]),
    ("eddie-and-funk.txt", "eddie-panting", "Eddie Panting",
     ["athletic-performance", "training"],
     ["athletic performance", "training", "conditioning"]),
    ("fir.txt", "firas-zahabi", "Firas Zahabi",
     ["combat-sports", "martial-arts", "mindset"],
     ["martial arts", "mindset", "discipline", "confidence"]),
    ("frank-rich.txt", "frank-rich", "Frank Rich",
     ["men's-health-systems", "coaching"],
     ["men's health", "coaching", "systems", "lifestyle"]),
    ("funk-roberts-summit.txt", "funk-roberts", "Funk Roberts",
     ["men-over-40-system", "core-philosophy"],
     ["training", "nutrition", "testosterone", "mindset", "men over 40"]),
    ("greg.txt", "gregory-dzemaili", "Gregory Dzemaili",
     ["kettlebell-mastery", "athletic-longevity"],
     ["kettlebell", "training", "longevity", "movement"]),
    ("interview-1.txt", "dan-john", "Dan John",
     ["strength-training", "simple-systems"],
     ["strength", "training", "simplicity", "longevity"]),
    ("interview-2.txt", "dr-sherry-mcallister", "Dr. Sherry McAllister",
     ["chiropractic", "whole-being-alignment", "nervous-system"],
     ["alignment", "chiropractic", "movement", "nervous system", "recovery"]),
    ("interview-3.txt", "coach-kavita", "Coach Kavita Ajlani",
     ["relationships", "love-life", "emotional-health"],
     ["relationships", "intimacy", "emotional health", "mindset"]),
    ("interview-4.txt", "kenneth-swartz", "Kenneth Swartz",
     ["oxidative-stress", "cellular-energy", "aging"],
     ["oxidative stress", "energy", "cellular health", "aging", "recovery"]),
    ("interview-5.txt", "kevin-carr", "Kevin Carr",
     ["training-for-longevity", "functional-strength"],
     ["training", "longevity", "functional strength", "movement"]),
    ("interview-6.txt", "phil-derue", "Phil DeRue",
     ["combat-performance", "elite-coaching"],
     ["combat sports", "performance", "coaching", "discipline"]),
    ("interview-7.txt", "stefanos-sifandos", "Stefanos Sifandos",
     ["inner-work", "vulnerability", "relationships"],
     ["inner work", "relationships", "intimacy", "emotional intelligence"]),
    ("interview-luke-w.txt", "kelsey-dunbar", "Kelsey Dunbar & Marc Rogala",
     ["mental-fitness", "resilience", "toughness"],
     ["mental fitness", "resilience", "toughness", "mindset", "stress"]),
    ("jb.txt", "jason-brown", "Jason Brown",
     ["training-strategies-40plus", "coaching"],
     ["training", "strategies", "men over 40", "fitness"]),
    ("jb-part2.txt", "jason-brown", "Jason Brown",
     ["programming-40plus", "training-systems"],
     ["programming", "training", "men over 40", "recovery"]),
    ("joe-defranco.txt", "joe-defranco", "Joe DeFranco",
     ["athletic-development", "performance-training"],
     ["athletic development", "performance", "training", "strength"]),
    ("joe-defranco2.txt", "joe-defranco", "Joe DeFranco",
     ["strength-conditioning", "longevity-training"],
     ["strength", "conditioning", "longevity", "training"]),
    ("joy.txt", "joyce-somers", "Joyce Somers",
     ["gut-health", "microbiome", "digestion"],
     ["gut health", "microbiome", "digestion", "inflammation", "nutrition"]),
    ("justin.txt", "dr-justin-farnsworth", "Dr. Justin Farnsworth",
     ["power", "explosiveness", "movement-quality"],
     ["power", "explosiveness", "athleticism", "movement", "training"]),
    ("keith.txt", "keith-bozeman", "Keith Bozeman",
     ["blood-work-interpretation", "lab-results"],
     ["blood work", "labs", "testosterone", "hormones", "health markers"]),
    ("lance-bjj.txt", "lance-short", "Lance Short",
     ["bjj", "combat-sports-fitness"],
     ["BJJ", "martial arts", "fitness", "performance"]),
    ("linkul-virtual.txt", "robert-linkel", "Robert Linkel",
     ["resistance-training-older-adults", "5-strategies"],
     ["resistance training", "older adults", "men over 40", "strength"]),
    ("luke.txt", "luka-hocevar", "Luka Hocevar",
     ["athletic-training-over-40", "NBA-coaching"],
     ["athletic training", "performance", "men over 40", "strength"]),
    ("marc-rodriguez.txt", "marc-rodriguez", "Marc Rodriguez",
     ["strength-conditioning", "performance"],
     ["strength", "conditioning", "performance", "training"]),
    ("mens-health-presenta.txt", "tricon-training", "Tricon Training (Nick)",
     ["triple-contraction-training", "strength"],
     ["triple contraction", "training", "strength", "muscle"]),
    ("mike-and-marko.txt", "mike-ranfone", "Mike Ranfone & Dr. Marco Lujic",
     ["nutrition-longevity", "performance-nutrition"],
     ["nutrition", "longevity", "performance", "health markers"]),
    ("mike.txt", "dr-mike-fortunato", "Dr. Mike Fortunato",
     ["hormone-optimization", "low-energy", "TRT"],
     ["hormones", "testosterone", "energy", "TRT", "optimization"]),
    ("mollie.txt", "mollie-eastman", "Mollie Eastman",
     ["sleep-optimization", "alpha-sleep"],
     ["sleep", "recovery", "sleep optimization", "circadian rhythm"]),
    ("percy.txt", "dr-perry-nicholson", "Dr. Perry Nicholson",
     ["lymphatic-health", "chronic-pain", "inflammation"],
     ["lymphatic health", "chronic pain", "inflammation", "recovery"]),
    ("roderik-lambert.txt", "roderick-lambert", "Roderick Lambert",
     ["athletic-training", "performance"],
     ["athletic training", "performance", "conditioning"]),
    ("ruston.txt", "rustin-webb", "Rustin Webb",
     ["strength-purpose", "pain-mobility"],
     ["strength", "purpose", "mobility", "pain relief"]),
    ("summit-health-i.txt", "dr-mike-t-nelson", "Dr. Mike T. Nelson",
     ["supplements", "metabolic-flexibility"],
     ["supplements", "metabolic flexibility", "performance", "nutrition"]),
    ("summit-health-w.txt", "dr-tom-cowan", "Dr. Tom Cowan",
     ["natural-health", "holistic-medicine"],
     ["natural health", "holistic medicine", "lifestyle", "wellness"]),
    ("sm.txt", "marcello-fragrance", "Marcello",
     ["sensory-wellness", "fragrance-presence"],
     ["sensory wellness", "presence", "lifestyle"]),
]

new_chunks = []

for filename, speaker_id, display_name, topics, tags in TRANSCRIPTS:
    path = os.path.join(SUMMIT_DIR, filename)
    if not os.path.exists(path):
        print(f"  SKIP (not found): {filename}")
        continue

    raw = read_file(path)
    if not raw:
        print(f"  SKIP (empty): {filename}")
        continue

    # Check if this speaker already has chunks with good coverage (3+ chunks = skip)
    existing = len(re.findall(f'speakerId: "{speaker_id}"', content))
    if existing >= 3:
        print(f"  SKIP (already has {existing} chunks): {speaker_id}")
        continue

    text = extract_speaker_content(raw, 6000)
    if len(text) < 200:
        print(f"  SKIP (too short): {filename}")
        continue

    # Split into 2 chunks if content is long enough
    mid = len(text) // 2
    # Find a sentence break near the middle
    for i in range(mid, min(mid + 500, len(text))):
        if text[i] in ".!?":
            mid = i + 1
            break

    parts = [text[:mid].strip(), text[mid:].strip()] if len(text) > 1500 else [text.strip()]

    for idx, part in enumerate(parts):
        if len(part) < 100:
            continue
        chunk_id = next_id()
        part_topics = topics.copy()
        if idx == 1:
            part_topics = [t + "-part2" for t in topics[:2]]

        tags_str = '", "'.join(tags)
        topics_str = '", "'.join(part_topics)

        chunk = f'''  {{
    id: "{chunk_id}",
    speakerId: "{speaker_id}",
    topic: ["{topics_str}"],
    tags: ["{tags_str}"],
    content: `{escape_ts(part[:2500])}`,
    sourceRef: "Men Over 40 Health Summit — {display_name}",
  }},'''
        new_chunks.append(chunk)
        print(f"  + {chunk_id}: {speaker_id} ({filename}{'  part2' if idx==1 else ''})")

print(f"\nAdding {len(new_chunks)} new chunks (fr-{last_id - len(new_chunks) + 1} to fr-{last_id})")

if not new_chunks:
    print("Nothing to add.")
else:
    insertion = "\n" + "\n".join(new_chunks) + "\n"
    # Insert before the closing ]; of knowledgeChunks
    new_content = content.replace(
        "\n];\n\nexport const topicIndex",
        insertion + "];\n\nexport const topicIndex"
    )
    if new_content == content:
        # Try alternate closing pattern
        new_content = content.replace(
            "\n];\n\nfunction searchKnowledge",
            insertion + "];\n\nfunction searchKnowledge"
        )
    with open(KB_PATH, "w") as f:
        f.write(new_content)
    print(f"\nDone. Written to {KB_PATH}")
