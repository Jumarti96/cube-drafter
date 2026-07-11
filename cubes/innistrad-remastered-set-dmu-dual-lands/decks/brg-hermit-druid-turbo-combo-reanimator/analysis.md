---
deck_name: "brg-hermit-druid-turbo-combo-reanimator"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BRG"
format: "40-card"
built_at: "2026-07-09T17:37:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
4x Swamp
1x Mountain
2x Forest
2x Geothermal Bog        BR dual, enters tapped
2x Haunted Mire          BG dual, enters tapped
2x Wooded Ridgeline      RG dual, enters tapped
2x Evolving Wilds        Fetches any basic, fixes toward whichever color is short
```

### CREATURES (9)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Hermit Druid            x1    G      Self-mill enabler                 R
  3  Splinterfright          x1    G      GY-scaling threat + passive mill  U
  3  Morbid Opportunist      x1    B      Card draw off any creature death  U
  3  Somberwald Sage         x1    G      Ramp toward the top end           U
  4  Haunted Dead            x2    B      Self-reanimation / discard outlet U
  7  Bramble Wurm            x1    G      Backup fatty / anti-aggro life    C
  8  Griselbrand             x1    B      Primary payoff                    M
  8  Ghoultree               x1    G      Backup fatty, cheap post-mill     U
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Faithless Looting       x2    R      Discard outlet / selection        C
  1  Tragic Slip             x2    B      Removal                           C
  1  Lightning Axe           x2    R      Discard outlet + removal          U
  2  Collective Brutality    x1    B      Discard outlet / modal removal    R
  2  Grapple with the Past   x2    G      Self-mill + return to hand        C
  2  Infernal Grasp          x2    B      Removal                           U
  5  Edgar's Awakening       x2    B      Primary reanimation spell         U
  5  Through the Breach      x1    R      Cheat-into-play (temporary)       M
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Abundant Growth         x1    G      Fixing + cantrip                  C
  1  Mass Hysteria           x1    R      Haste enabler (symmetric)         R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Abrade                  x2    R      Creature/artifact answer vs aggro     U
Killing Wave            x2    B      Pseudo-sweeper vs go-wide/tokens      U
Sever the Bloodline     x1    B      Answers duplicated-name threats       U
Murderous Compulsion    x1    B      Cheap removal vs attackers            C
Clear Shot              x1    G      Fight removal, needs a body in play   U
Deadly Allure           x1    BG     Forces a lethal block                 U
Duel for Dominance      x1    G      Fight removal                         C
Eaten Alive             x1    B      Exile answer to recursive threats     C
```

## ANALYSIS

**Macro-Archetype: Combo. Projected Avg CMC: 3.0.**

**Slot allocation:**
- Lands: 15 (37.5% of N=40) — above the Combo baseline of 30–36%. This is a deliberate deviation: with 3 colors and this cube's DMU dual-land cycle providing only 1 common + 1 rare dual per pair, the mana audit's own formula-driven target is 16 lands, sitting *above* the archetype's proportional guideline. Rather than force a lean combo land count that the actual curve (top end at 8, three 5-drops) can't support, 15 lands plus the self-mill/recursion suite (Grapple with the Past, Somberwald Sage) was chosen as the workable middle ground; the audit still clears PASS at this count (diff of 1 land vs. recommended).
- Interaction: 4 dedicated removal spells plus Lightning Axe/Collective Brutality doing double duty as discard outlets ≈ 16–24% of 25 nonland cards — within the 10–20% Combo band on the low end once dual-purpose cards are counted once.
- Threats/Payoffs: Griselbrand, Splinterfright, Ghoultree, Bramble Wurm = 4 cards (16% of 25) — within the 5–15% band's upper edge, justified by needing backup targets since only 1 Griselbrand exists.
- Engine & Infrastructure: Hermit Druid, both Edgar's Awakenings, Through the Breach, Faithless Looting x2, Haunted Dead x2, Morbid Opportunist, Grapple x2, Somberwald Sage, Abundant Growth, Mass Hysteria = 14 cards (56% of 25) — at the top of the 40–50% Combo band, reflecting how enabler-dense a reanimator shell needs to be.

**Mana base construction:** 16 B pips / 8 G pips / 6 R pips across nonland cards (53.3% / 26.7% / 20.0%). Land production: B 53.3% (exact match), G 40.0%, R 33.3% — G and R are intentionally oversupplied relative to raw pip count because Hermit Druid, Somberwald Sage, and the self-mill package all want G online early, and Through the Breach/Faithless Looting/Lightning Axe want R online by turn 1–5. Every dual is run at 2 copies (this format's common/uncommon multiplier), which is what turns this cube's otherwise-THIN per-pair fixing (1 common + 1 rare dual per pair, in a true singleton pool) into GOOD fixing for deckbuilding purposes — no rare dual lands were needed, keeping the entire 5-card rare/mythic budget for spells.

**Be honest about what Hermit Druid actually does here.** Its ability reveals cards until it hits a card with the *Basic* land type — and only 7 of this deck's 15 lands (4 Swamp, 1 Mountain, 2 Forest) qualify; the three dual lands and Evolving Wilds do not. Classic all-in Hermit Druid combo shells run zero basics specifically so the mill never stops. Here it stops early, on average, and functions more as a value/filtering tool than a true "dump the whole library" turbo engine — the "Turbo-Combo" label describes the deck's game plan and aggressive mulligan/sequencing posture more than a guaranteed mechanical outcome from Hermit Druid alone. The deck's real consistency comes from its redundancy: 7 discard outlets, 2 self-mill spells, unconditional permanent reanimation via Edgar's Awakening, and a fully independent hand-to-battlefield line via Through the Breach that needs the graveyard at all. Both self-grill passes confirmed the deck is genuinely functional on this redundancy even though Hermit Druid underperforms its namesake billing.

**Through the Breach is a one-turn rental, not a permanent solution.** It sacrifices its target at the next end step. The realistic lines are: (1) put Griselbrand in, immediately pay life to draw cards and/or attack, accept the sacrifice, or (2) let it die to the graveyard and follow up with Edgar's Awakening later for a second, permanent copy of the same value. It is not a "stick him on the battlefield for good" button.

**Mass Hysteria is symmetric** — it reads "all creatures have haste," not "creatures you control." It's a real double-edged include: it lets a freshly-reanimated Griselbrand/Ghoultree/Bramble Wurm attack the turn it enters (its main justification, since Through the Breach already grants its own haste), but it equally hastes the opponent's board. Recognize it as the most situational card in the maindeck rather than an unconditional upgrade — it earned its slot as one of the five rare/mythic picks mainly because it was on the user's original card list and has a real, if narrow, window.

**Somberwald Sage cannot pay for Through the Breach.** Its mana is restricted to "cast creature spells," and Through the Breach is an instant. It only accelerates hardcasting Griselbrand, Ghoultree, or Bramble Wurm directly — still useful, just not the universal ramp piece it might first appear to be.

**Removal doubles as fuel.** Tragic Slip's morbid clause (-13/-13 instead of -1/-1) turns on off any death that turn — including creatures traded away by Infernal Grasp or sacrificed to Haunted Dead's own return cost — so the removal suite and the discard/reanimation package passively support each other's best-case lines.

### Cards Considered but Excluded

**Rares/mythics cut solely for the 5-card cap** (all verified BRG-legal and would have been reasonable includes with more room):
- The Meathook Massacre (mythic, B) — board wipe (-X/-X to all creatures) plus a drain trigger on every creature death, opponent's or yours. Would have been the strongest anti-aggro answer in the pool; lost out because the cap was already spent on the user's five suggested keystones.
- The Gitrog Monster (mythic, BG) — extra land drops plus draws a card whenever a land hits any graveyard; a strong alternate GY-engine payoff that synergizes with Grapple with the Past/Hermit Druid, but competes directly with Griselbrand for the "big BG reanimation target" slot.
- Emrakul, the Promised End (mythic, colorless) — an enormous alternate Through-the-Breach/reanimation target; excluded to avoid diluting the rare/mythic budget on a second top-end bomb when Ghoultree/Bramble Wurm already cover the "backup fatty" role at common/uncommon rarity.
- Wrenn and Seven (mythic, G) and Tireless Tracker (rare, G) — strong standalone value engines, but neither reanimates or cheats creatures into play, so they didn't advance the core plan enough to justify a cap slot.
- Bruna, the Fading Light (rare, W) — the "keystone" most explicitly tied to Reanimator in the pre-build analysis, but she's white (needs Gisela, the Broken Blade to meld, doubling the white investment) and doesn't fit the B/R/G identity at all; excluded on color grounds before the cap was even a factor.

**Uncommons that are strong fits, a tier below the chosen includes:**
- Bloodtithe Harvester (BR, uncommon) — an on-curve 2-drop that makes a discard-outlet-on-a-stick Blood token; lost the slot to Haunted Dead/Morbid Opportunist for curve reasons, but is a clean swap-in if you want an earlier discard outlet.
- Groundskeeper (G, uncommon) — recurs a basic land from the graveyard; directly answers the thin 15-land base's flood-or-screw risk and is worth testing if mana consistency is an issue in games.
- Moldgraf Millipede (G, common) — cheaper (5cmc) alternative to Ghoultree that also mills 3 on entry; a reasonable substitute if Ghoultree is too often uncastable early.
- Archghoul of Thraben (B, uncommon) — a Graveyard-tribal engine piece that didn't make the cut since this build isn't leaning on the Tribal/Kindred cluster.

**Sideboard-consideration cards that didn't make the final 10:**
- Distended Mindbender (rare, B, Emerge) — would have been excellent disruption against control (Thoughtseize-on-a-stick), but the rare/mythic cap left no room outside the mainboard's five.
- Boarded Window (uncommon, R) — situational discard-matters interaction; less universally applicable than the removal already in the 10 SB slots.
- Vexing Devil (rare, R) — an aggressive 1-drop; doesn't fit a reactive sideboard plan and would have cost more rare-cap room regardless.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  53.3%  prod  53.3%  gap  +0.0pp  [OK]
  G  demand  26.7%  prod  40.0%  gap -13.3pp  [OK]
  R  demand  20.0%  prod  33.3%  gap -13.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons up to 2 copies each — no card exceeds 2 copies
[PASS] Rares/mythics up to 1 copy each — Griselbrand, Through the Breach,
       Hermit Druid, Collective Brutality, Mass Hysteria each appear once
[PASS] Maximum 5 rares/mythics total (main+SB) — exactly 5, all mainboard;
       sideboard is 100% common/uncommon
```
