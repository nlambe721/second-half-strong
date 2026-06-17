#!/bin/bash
# Download all uploaded documents
declare -A URLS=(
  # Sleep
  ["pillar2-sleep.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/341b4782709740d99fd7dd886a10813e.docx"
  ["how-to-fix-sleep.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/f071e07f9ea348eebeb75ef9954f8bc1.docx"
  ["sleep-reset-7min.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/b557c3f7b95f493cbe3aed34296c87b6.docx"
  ["alpha-sleep-philosophy.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/300831e342494f1f9065971d08add895.docx"
  ["harvard-sleep.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/10247a45f5254379a532c90bbcccf36d.docx"
  ["why-men-stop-sleeping.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/92e151f1bfcc4643946bf67e84251bbc.docx"
  # Meditation
  ["21-day-meditation-challenge.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/ee31fc8de36b456cb4f04741d5dc8559.pdf"
  ["21-day-mindful-meditation.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/06db0e6af3ad4ec3814c57d8daa32a62.pdf"
  ["implementation-plan-alpha.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/270d0fc40aeb42608e417ffe18c48a5f.pdf"
  ["loving-kindness-meditation.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/b80d0ba9188a4d309c198aef27dff5d4.docx"
  ["gratitude-meditation-script.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/cd64aae4e51846f78a8e6bc8f7a7473f.docx"
  ["establishing-formal-meditation.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/88d0c83dd1bb491b8882dcd450dbb3d1.docx"
  ["meditation-main.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/fb51197415a9481385a58a0a1ddaacab.pdf"
  ["5-min-meditation-guide.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/48c3b1c55d5944aeafd8f9a6da227c81.pdf"
  ["real-21-day-meditation.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/83899c1ecda140cfa680bd86b3e9ac14.pdf"
  ["alpha-mindful-meditation.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/0f4299e2c3074b76bac6b9dff694419f.pdf"
  ["beginner-mindful-meditation.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/7081ed4ebc8e4e84a12a44bbae484989.docx"
  ["self-inquiry-meditation.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/1eb067f722204ddb84aa56b59502c233.docx"
  ["surrender-meditation.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/8dd2377ebaab46b393ae9099da78eb93.docx"
  ["positive-psychology-gratitude.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/bafb2127e94f4429a47b0bcd8bb2798d.docx"
  # Meditation TXT
  ["5-ways-meditation.txt"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/57a74ed8ea00415f9fb520f7845aefd4.txt"
  ["5-myths-meditation.txt"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/eb13bdd7250740baa03ca83446f38777.txt"
  ["top-reasons-meditate.txt"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/99b0890abe744826890062263fac5c0b.txt"
  # Breathwork
  ["beginner-alpha-breathwork.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/69e875ce441d488c941999ae40965e5d.pdf"
  ["21-day-breathwork-challenge.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/5edb86904eed442eb936b1a4ae1ff07c.docx"
  ["breathwork-summary.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/1a33658cb81f48f2acd241b5dada8e35.pdf"
  ["wim-hof-breathing.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/b8a31d56bc9742cab8514bf831794632.docx"
  ["21-day-alpha-breathwork.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/b62ccdaddd21473783fc481adb9cc0ee.docx"
  ["ai-stress-reduction.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/6d0cd76ab31845dea8fde9aa41565c3d.docx"
  ["breathwork-men.txt"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/8c475d3e0e8349d1aad1b6b11d00c3ad.txt"
  # Supplements
  ["supplements-men-over-40.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/996565ec760f4e68b17beff613c9e221.pdf"
  ["rocktomic-over40-alpha.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/3eed6fd89cc24be9a9bf901aa40fe3b0.docx"
  ["over40-supplement-impl.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/8e1dbf03df28483daa73cf48f7e32be0.pdf"
  ["supplement-qa-lectin.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/3553c6de65614762bce7a350f1e95cd7.docx"
  ["best-vitamins-ep188.txt"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/7204db1f3e9b42afb90d20ea541f8075.txt"
  ["protein-powder-supplement.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/787c6e3fca75450d9b123de96ba54e11.docx"
  ["over40-supplements-coaching.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/6b7f04253b204ffabb55df8c7169d812.docx"
  ["muscle-building-supplement.pdf"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/44fb694abc23440b890f58b535365fcf.pdf"
  ["stacks-rocktomic-over40.docx"]="https://galaxy-prod.tlcdn.com/view/user_2pj1TQ7MRcbruy5E5BuTJ1V8I1f/ca4bf27b4df946fbae29422ff4c8bd18.docx"
)

for fname in "${!URLS[@]}"; do
  url="${URLS[$fname]}"
  if [ ! -f "$fname" ]; then
    curl -sL "$url" -o "$fname" && echo "✓ $fname" || echo "✗ $fname"
  else
    echo "→ $fname (exists)"
  fi
done
echo "DONE"
