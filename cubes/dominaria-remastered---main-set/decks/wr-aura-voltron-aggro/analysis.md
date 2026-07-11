---
deck_name: "wr-aura-voltron-aggro"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WR"
format: "40-card"
built_at: "2026-07-09T23:07:28Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  9x Plains
  4x Mountain
  2x Sacred Peaks          RW dual, enters tapped
  1x Clifftop Retreat      RW dual, untapped w/ Mountain or Plains
```

### CREATURES (15)
```
CMC  Card                              Qty  Color  Role                              Rar
  3  Valduk, Keeper of the Flame       x2   R      Voltron payoff engine             U
  3  Mesa Enchantress                  x2   W      Draw engine off enchantments      U
  3  Auramancer                        x2   W      Aura recursion from graveyard     C
  4  Flametongue Kavu                  x2   R      ETB removal + body                U
  4  Voice of All                      x2   W      Evasive protection Aura carrier   U
  4  Ridgetop Raptor                   x1   R      Double-strike Aura carrier        C
  5  Tiana, Ship's Caretaker           x2   RW     Recurs dead Auras, flying carrier U
  5  Lyra Dawnbringer                  x1   W      Bomb closer + Angel anthem        M
  5  Serra Angel                       x1   W      Evasive vigilance Aura carrier    U
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                              Qty  Color  Role                              Rar
  1  Swords to Plowshares              x1   W      Premium removal                   U
  1  Chain Lightning                   x1   R      Burn removal / reach              C
  1  Enlightened Tutor                 x1   W      Tutors any Aura to top of library R
  3  Sevinne's Reclamation             x1   W      Rebuys any permanent CMC<=3        R
```

### OTHER SPELLS (5)
```
CMC  Card                              Qty  Color  Role                              Rar
  2  Lightning Reflexes                x1   R      Cheap Aura, first strike, flash    C
  3  Griffin Guide                     x2   W      +2/+2 flying, death-insurance token U
  3  Undying Rage                      x2   R      +2/+2, self-recurring Valduk fuel  C
```

## SIDEBOARD (10)
```
Card                              Qty  Color  Role / When to board in              Rar
Windborn Muse                     x1   W      Taxes attackers, vs. other aggro     R
Radiant's Judgment                 x2   W      Answers power-4+ creatures, cycles   C
Solar Blast                        x2   R      Reach/removal, cycles for value      C
Orim's Thunder                     x2   W      Answers opposing artifacts/enchants  C
Tormod's Crypt                     x1   C      Graveyard hate                       U
Damping Sphere                     x1   C      Hoses fast mana / storm              U
Icy Manipulator                    x1   C      Repeatable tempo vs control/midrange U
```

## ANALYSIS

A small, resilient suite of buff Auras (Griffin Guide, Undying Rage, Lightning Reflexes) either turns Valduk, Keeper of the Flame into a token-generating engine or makes an evasive White beater (Voice of All, Serra Angel, Ridgetop Raptor) into a real clock. An "Enchantress" card-advantage core backs the plan: Mesa Enchantress draws off every enchantment cast, while Auramancer and Tiana rebuy dead Auras from the graveyard, and Enlightened Tutor / Sevinne's Reclamation find or rebuy whatever piece is missing. Lyra Dawnbringer tops the curve as a lifelink closer that quietly anthems the deck's other three Angels.

**Valduk math.** Valduk's trigger is flat — one 3/1 haste trample token per Aura or Equipment attached, regardless of the Aura's own power level (this cube has zero Equipment, so only Auras count). That means cheap, count-efficient Auras matter more than big stat boosts: stacking Griffin Guide + Undying Rage on Valduk in one turn creates two 3/1 hasty tokens (6 power of trample/haste on top of Valduk's own 7/6 body that turn) for a combined 4 mana of Auras. This is why Improvised Armor (a 4-mana Aura) was cut in favor of Lightning Reflexes (2 mana) and Ridgetop Raptor as a second home for the same Auras.

**Two viable carriers, not a conflict.** Auras don't have to go on Valduk — Undying Rage or Griffin Guide on Ridgetop Raptor (double strike) turns a 2/1 into a 4/3 or 4/1-flying that deals double combat damage, and the same Auras on Voice of All/Serra Angel just make a hard-to-remove flier bigger. Because Undying Rage self-recurs to hand when its host dies, and Auramancer/Tiana/Sevinne's Reclamation all rebuy Auras from the graveyard, losing the Aura to removal is rarely a full 2-for-1.

**Angel sub-theme.** Lyra Dawnbringer's anthem ("other Angels get +1/+1 and lifelink") quietly buffs three other creatures in this list — Tiana (Angel Artificer), Voice of All (Angel), and Serra Angel — turning the whole evasive-flier suite into life-gaining threats once Lyra resolves, which matters for racing other aggro decks.

**Card pool ceiling.** This cube's W/R aura count tops out at 5 in the maindeck (Griffin Guide x2, Undying Rage x2, Lightning Reflexes x1) with no Equipment anywhere in the 271-card set — that's a hard structural ceiling on how "Voltron" this shell can get. Enlightened Tutor and the recursion suite exist specifically to paper over that thinness by guaranteeing repeated access to the few Auras available, rather than relying on raw density.

**Mana base.** White carries roughly 2/3 of colored pip demand (65.6%) against 34.4% for red, split across only two double-white cards at the top (Serra Angel, Lyra) and no double-red costs anywhere — the 12 white-source / 7 red-source split (Sacred Peaks and Clifftop Retreat count toward both) keeps both gaps at a matched -9.4pp, comfortably inside tolerance.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card cap:** Divine Sacrament (rare anthem — cut because it doesn't buff Valduk, Flametongue Kavu, or Valduk's own red token output, i.e. it misses the deck's own payoff; its rare slot went to Clifftop Retreat instead for better fixing). Grim Lavamancer (rare repeatable reach/removal engine — strong card, but not Aura-synergistic, cut to preserve budget for the core consistency package). Lieutenant Kirtar, Pashalik Mons, Siege-Gang Commander, Shivan Dragon, Sulfuric Vortex, Gamble — all reviewed, all fine standalone cards, none central enough to the Aura-Voltron plan to justify a rare slot over Enlightened Tutor / Sevinne's Reclamation / Lyra / Clifftop Retreat / Windborn Muse.

**Uncommons/commons a tier below the chosen includes:** Improvised Armor (uncommon Aura, +2/+5, cycling — cut this iteration; strong flood insurance but a poor rate for Valduk's flat per-Aura trigger). Sun Clasp (common Aura, +1/+3 — cut; its bounce ability protects the host creature but does not return Sun Clasp itself to hand, it dies to the graveyard, making it weaker than its role initially suggested). Suq'Ata Lancer (common 2/2 haste+flanking — a fine alternate cheap body if Ridgetop Raptor underperforms). Order // Chaos (uncommon RW split — exile an attacker // creatures can't block; a real alpha-strike/removal hybrid that simply didn't have a 24th nonland slot open). A second Serra Angel (legal at 2 copies — only running 1 to manage curve top-heaviness; swap in if more top-end power is wanted over consistency). A second Swords to Plowshares or Chain Lightning (both legal at 2 — currently 1-of for curve/slot reasons, easy consistency upgrades later).

**Sideboard-consideration cards that didn't make the final 10:** Remedy (fog effect, weaker than the included removal suite), Spark Spray (minor reach, outclassed by Solar Blast), Renewed Faith (lifegain/cycling, redundant with Lyra's lifelink), Wrath of God (rare, directly anti-synergistic with our own board — never a real candidate), Crawlspace / Jester's Cap (rares that would require exceeding the 5-card cap).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.25   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  34.4%  prod  43.8%  gap  -9.4pp  [OK]
  W  demand  65.6%  prod  75.0%  gap  -9.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <= 2 copies each:              PASS (verified every card, both boards)
Rares/mythics <= 1 copy each:                    PASS
Max 5 rares/mythics total (main + sideboard):    PASS - exactly 5
  (Lyra Dawnbringer, Enlightened Tutor, Sevinne's Reclamation, Clifftop Retreat, Windborn Muse)
All cards sourced from cube mainboard pool:      PASS (verified by exact name against working pool)
```
