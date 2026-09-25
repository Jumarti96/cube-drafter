---
deck_name: "c-mono-artifact-aggro-prison"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "C"
format: "40-card"
built_at: "2026-07-31T01:53:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  15x Island                   basic blue source
  1x Mishra's Factory         colorless manland; artifact creature when animated
  1x Terminal Moraine         
```

### CREATURES (13)
```
CMC  Card                         Qty  Color Role                                     Rar
  0  Ornithopter                  x2   C     Enabler (free body/chump)                C
  2  Millikin                     x2   C     Ramp (creature)                          U
  2  Wall of Junk                 x1   C     Blocker                                  U
  3  Dragon Engine                x2   C     Threat (mana-sink beater)                C
  4  Dodecapod                    x2   C     Threat (resilient, punishes discard)     U
  4  Juggernaut                   x2   C     Threat (primary 5/3 clock)               C
  5  Thran Golem                  x1   C     Threat (vanilla 3/3 filler)              U
  6  Triskelion                   x1   C     Payoff/Reach (pinger closer)             R
```

### OTHER SPELLS (10)
```
CMC  Card                         Qty  Color Role                                     Rar
  0  Tormod's Crypt               x1   C     Hate (graveyard)                         U
  2  Damping Sphere               x1   C     Prison (tax)                             U
  2  Helm of Awakening            x1   C     Accelerant (generic cost reducer)        R
  2  Mind Stone                   x2   C     Ramp + late cantrip                      C
  3  Crawlspace                   x1   C     Prison (anti-go-wide)                    R
  3  Dragon Blood                 x1   C     Mana sink (+1/+1)                        U
  3  Jalum Tome                   x1   C     Filtering (card-neutral)                 C
  4  Icy Manipulator              x2   C     Prison (repeatable tap-down)             U
```

## SIDEBOARD (10)
```
Card                         Qty  Color Role / When to board in                  Rar
Maze of Ith                  x1   L     Prison land (Fog) — vs aggro / a single big attacker (incl. flyers) — repeatable Fog at zero spell cost R
Mishra's Factory             x1   L     Land + Threat — vs control/sweepers — an extra manland that dodges removal U
Terminal Moraine             x1   L     Land — vs screw-prone draws — extra land + fetch C
Tormod's Crypt               x1   C     Hate (graveyard) — vs reanimator/graveyard (45 GY cards) U
Damping Sphere               x1   C     Hate (tax) — vs ramp/storm/big-mana      U
Wall of Junk                 x1   C     Blocker — vs aggro — extra 0/7 blocker   U
Dragon Blood                 x1   C     Mana sink — vs grindy control — a mana sink that grows the board U
Jalum Tome                   x1   C     Filtering — vs control/attrition — extra filtering C
Jester's Cap                 x1   C     Toolbox (library strip) — vs combo / toolbox control — exile three key cards from their library R
Thran Golem                  x1   C     Threat (body) — vs removal-light midrange — one more body U
```

## ANALYSIS

### DECK IDENTITY
Mono-colorless artifact midrange-prison. Resilient colorless bodies (Juggernaut 5/3, Dragon Engine, Dodecapod, Triskelion, Thran Golem, the Mishra's Factory manland) apply pressure while prison pieces (Crawlspace caps attackers at two, Icy Manipulator x2 taps the key blocker/attacker, Damping Sphere taxes multi-spell turns) blunt the opponent; Mind Stone / Millikin ramp deploy the expensive threats on time and Helm of Awakening discounts the all-generic curve. Triskelion pings for removal and reach. The whole deck casts on generic mana, so it has ZERO colour screw — its defining edge.

Zero colour screw is the whole point. Every card in the 40 is colourless with an all-generic cost, so the manabase is pure generic (15 basics used as {C}-equivalents plus Mishra's Factory and Terminal Moraine); the deck can never be colour-screwed, and it could be splashed into any colour without touching its mana. The mana_audit 'U splash' line is cosmetic — the Islands print as blue but the deck's measured U demand is zero.

The prison is real but the removal is not. Crawlspace ('no more than two creatures can attack you each combat'), Icy Manipulator x2 and the Wall of Junk blocker genuinely blunt aggro, but colourless has no way to DESTROY anything — no removal of creatures, artifacts, enchantments, or spells on the stack. Against a creature deck the live interaction is effectively about 4 of 23 cards (~17%); Tormod's Crypt and Damping Sphere are matchup-narrow. The softest matchup is a fast flying clock: only Icy x2 (tap one flyer a turn) and Ornithopter chumps answer the air maindeck, with Maze of Ith boarding in. These are identity-forced costs of the colourless shell, paid for with the zero-screw consistency.

Helm of Awakening is a counts-justified accelerant. 'Spells cost {1} less' reduces 20 of the 23 nonland cards (only the three 0-cost cards — Ornithopter x2, Tormod's Crypt — gain nothing), turning Juggernaut into {3} and Triskelion into {5}; on a curve that tops at 6 with no cheap interaction, that acceleration matters more than the symmetric downside (opponents' spells also cost {1} less). It is nonetheless the deck's most cuttable card if the metagame is spell-light.

Mono-colourless nearly exhausts the pool. All 13 non-rare colourless artifacts are already in the maindeck; every remaining unused colourless card is rare/mythic (and the build is at the 5-rare cap) or a colour-fixing land the deck doesn't want. The sideboard is therefore built from the last two legal rares (Maze of Ith, Jester's Cap) plus 2nd copies and utility lands — a forced consequence of the pool floor, and the reason this colourless variant trades the interaction and card-advantage ceiling of the blue builds for perfect mana.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  0:3  2:7  3:5  4:6  5:1  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  threat: 9 copies → p=0.98 (need ≥ 0.75)
  PASS  acceleration: 4 copies → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 50%  T2 95%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Crawlspace, Icy Manipulator, Triskelion
  OK        single_large_threat: Icy Manipulator, Triskelion, Wall of Junk
  CONCEDED  noncreature_permanents: Mono-colorless has no way to destroy a resolved noncreature permanent; the deck races under them, Damping Sphere neutralizes big-mana ones, and Jester's Cap (SB) strips them pre-draw.
  CONCEDED  stack: No stack interaction exists in mono-colorless; the deck instead applies proactive pressure and taxes multi-spell/storm turns with Damping Sphere.
  OK        graveyard: Tormod's Crypt
```
- curve PASS (no WARN)
- goldfish PASS (no WARN): keepable 86%, T1 play 50%, T2 95%

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus mana always advances the board: Dragon Engine '{2}: +1/+0', Dragon Blood '{3},{T}: +1/+1 counter on target creature', Icy Manipulator {1} activation, Mishra's Factory {1} animate, and Mind Stone's sac-draw all sink extra mana. |
| screw | mitigation | Perfect generic mana removes colour screw entirely; Mind Stone x2 and Millikin x2 ramp plus Terminal Moraine's basic-fetch smooth land screw, keepable 86%. Ornithopter (free) and seven two-drops keep a 2-land hand active. |
| decapitation | mitigation | There is no single key card — the threats are fully redundant (Juggernaut x2, Dragon Engine x2, Dodecapod x2, Triskelion, Thran Golem, the Mishra's Factory manland). Dodecapod even enters as a 5/5 if discarded. Removing any one threat leaves the beatdown intact. |
| gas-out | accepted | Mono-colorless card advantage is genuinely ~1 maindeck source — Mind Stone's sac-draw; Jalum Tome is card-neutral filtering and Millikin is self-mill, not advantage. Against dedicated attrition/control the deck runs dry, and fully mitigating would require blue/black draw the colorless identity forbids — the accepted cost of the zero-colour-screw edge. Board-based inevitability (the Mishra's Factory manland keeps attacking with an empty hand) and Urza's Blueprints from the board are the slow hedge. |
| raced | mitigation | Against the cube's fastest clocks the deck defends rather than out-races: Crawlspace ('no more than two creatures can attack you'), Icy Manipulator x2 (tap the key attacker), Wall of Junk (0/7 blocker) and Maze of Ith (SB Fog) let its bigger bodies stabilize and take over. Anti-flying is the soft spot (only Icy x2 and Ornithopter chumps main; Maze from the board) — the accepted price of a colourless shell. |
| disruption-fizzle | mitigation | No single critical turn — the beatdown is incremental. One removal trades for one of many redundant threats and the clock continues; Dodecapod enters larger if discarded, and Mishra's Factory dodges sorcery-speed removal entirely. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Urza's Blueprints | 'Echo {6}. {T}: Draw a card' — the only repeatable colorless card-advantage engine, the deck's answer to its gas-out hole, but the {6}+echo tempo is too slow for the maindeck turn-8 clock, so it lives in the sideboard for grindy matchups. |
| Cryptic Gateway | 'Tap two creatures sharing a type: put a creature of that type from hand' — the deck has 5 Constructs (Dragon Engine x2, Millikin x2, Triskelion) that could chain, but it needs two untapped bodies plus a matching card in hand; too clunky for the race, and rare-capped. |
| Urza's Incubator | 'Creature spells of the chosen type cost {2} less' — the largest shared type is Construct at only 5 cards; a mythic slot for a narrow discount, cut for the cap. |
| Gauntlet of Power | Anthem buffs creatures of a chosen COLOR; every creature here is colorless, so it buffs zero of them — a dead card in mono-colorless. |
| Umbilicus | Symmetric upkeep 'pay 2 life or return a permanent' bounces the deck's own cheap artifacts too — net-negative on a wide artifact board. |
| Lotus Blossom | Petal-counter ramp of 'any one color' is both too slow and irrelevant (the deck needs only generic); Mind Stone/Millikin ramp immediately. |
| Dark Depths | A 20/20 Marit Lage costs {30} of activations with no counter-removal support in-pool — unreachable for a turn-8 aggressor. |
| Gemstone Mine | Colored fixing with a 3-use cap; a mono-colorless deck needs no fixing, so it is strictly worse than a basic here. |
| Thran Golem (as a payoff) | Only a 3/3 unless enchanted; with zero Auras it never gains '+2/+2, flying, first strike, trample' — run purely as a vanilla filler body. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.29 adj [MV 2.78 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]

Splash Check: [PASS]
  U  15 card(s), max CMC 0  sources 15/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
copy_limits: commons/uncommons <=2, rares/mythics <=1 — PASS
rare_mythic_cap: 5 total (Triskelion R, Crawlspace R, Helm of Awakening R [main] + Maze of Ith R, Jester's Cap R [side]) — AT CAP, PASS
colors: mono-colorless; every nonland castable on generic mana; measured colored demand 0 — PASS
basics: Island uncapped, used as generic {C}-equivalent sources — PASS
pool_note: Mono-colorless nearly exhausts the pool's colorless cards; the sideboard necessarily includes 2nd copies and utility lands.
```