#!/usr/bin/env python3
"""
Read all summit interview transcripts and extract properly attributed knowledge chunks.
Outputs add() calls to append to gen_kb.py.
"""
import os, re

SUMMIT_DIR = "/home/user/second-half-strong/scripts/summit"

def clean(text):
    """Remove timestamps and speaker labels, clean whitespace."""
    # Remove timestamp patterns like (00:00.526)
    text = re.sub(r'\(\d+:\d+\.\d+\)', '', text)
    # Remove lines that are JUST a speaker label
    lines = text.split('\n')
    cleaned = []
    for line in lines:
        stripped = line.strip()
        # Skip pure speaker label lines
        if re.match(r'^[A-Z][^()\n]{0,60}\s*$', stripped) and ':' not in stripped and len(stripped) < 80:
            # Might be a speaker tag, skip if very short
            if len(stripped) < 40:
                continue
        cleaned.append(stripped)
    return ' '.join(c for c in cleaned if c).replace('  ', ' ')

def get_content(fname, chars=8000):
    path = os.path.join(SUMMIT_DIR, fname)
    if not os.path.exists(path):
        return ""
    with open(path, encoding='utf-8', errors='ignore') as f:
        return f.read(chars)

# Read each file
files = {f: get_content(f) for f in sorted(os.listdir(SUMMIT_DIR)) if f.endswith('.txt')}

for fname, content in files.items():
    print(f"\n{'='*60}")
    print(f"FILE: {fname}  ({len(content)} chars)")
    print(content[:500])
    print("...")
