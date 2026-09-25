---
deck_name: "wg-aura-voltron"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WG"
format: "40-card"
built_at: "2026-07-30T02:35:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x3  Forest                 
  x10 Plains                 
  x1  Drifting Meadow        W, tapped, cycling
  x2  Radiant Grove          WG dual, enters tapped
  x1  Slippery Karst         G, tapped, cycling
```

### CREATURES (11)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Birds of Paradise          x1  G      Ramp / fixing                 R
  1  Savannah Lions             x1  W      Turn-1 carrier                C
  2  Werebear                   x1  G      Dork / threshold beater       C
  3  Mesa Enchantress           x2  W      Aura cantrip engine           U
  4  Mystic Enforcer            x1  GW     Pro-black threshold flyer     U
  4  Mystic Zealot              x1  W      Threshold flyer               C
  4  Voice of All               x1  W      Protection flyer carrier      U
  5  Lyra Dawnbringer           x1  W      Standalone bomb finisher      M
  5  Serra Angel                x1  W      Evasive finisher              U
  5  Thran Golem                x1  C      Aura payoff carrier           U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Enlightened Tutor          x1  W      Aura/artifact tutor           R
  1  Swords to Plowshares       x1  W      Premium removal               U
  2  Wax // Wane                x1  GW     Trick / enchantment removal   U
  3  Radiant's Judgment         x1  W      Removal / cycling             C
  3  Sevinne's Reclamation      x1  W      Carrier/aura recursion        R
```

### OTHER SPELLS (7)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Wild Growth                x1  G      Ramp aura                     C
  2  Pacifism                   x1  W      Removal aura                  C
  2  Sun Clasp                  x1  W      Protective bounce aura        C
  2  Sylvan Library             x1  G      Card advantage (Mesa fuel)    M
  3  Griffin Guide              x1  W      Evasion aura + insurance      U
  3  Seton's Desire             x1  G      Pump / lure aura              C
  4  Improvised Armor           x1  W      Big buff / cycling            U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                 Rar
Tormod's Crypt             x1  C      Graveyard hate — vs graveyard decks     U
Emerald Charm              x1  G      Strip flying / enchant removal — vs fliers / key enchantments  C
Spirit Link                x1  W      Lifegain aura — vs aggro (race)         C
Call of the Herd           x1  G      Recurring threat — vs removal-heavy/control  U
Nomad Decoy                x1  W      Tapper (push damage) — vs big blockers  C
Battle Screech             x1  W      Go-wide flyers — vs control (go wide)   U
Break Asunder              x1  G      Artifact/enchant removal — vs artifacts/enchantments  C
Congregate                 x1  W      Anti-aggro lifegain — vs aggro/burn     U
Giant Spider               x1  G      Anti-air blocker — vs go-wide/fliers    C
Kavu Primarch              x1  G      Flexible late threat — vs control (grindy body)  C
```

## ANALYSIS

### DECK IDENTITY
A GW aura-voltron aggro deck. It deploys a resilient, evasive carrier and enchants it into a lethal flier: Thran Golem becomes a 7/7 flying first-strike trampler off any single +2/+2 aura (base 3/3, +2/+2 from its own ability plus the aura), and Griffin Guide grants flight to anything. Mesa Enchantress (x2) draws a card off every aura cast, so trading auras into removal is card-neutral; Sylvan Library and Enlightened Tutor keep the carrier+aura combination consistent. Lyra Dawnbringer is a standalone finisher that needs no suit-up, and a flyer-dense carrier base (Voice of All, Serra Angel, Mystic Enforcer/Zealot) means one removal spell does not strand the auras. The clock closes in the air around turn 5-6.

The central design problem of any aura-voltron deck is losing the whole investment to a single removal spell. This build answers that structurally rather than hoping to dodge it: **Mesa Enchantress x2** turns every aura into a cantrip, so trading an aura into removal costs zero cards; **Griffin Guide** leaves a 2/2 flyer behind when the carrier dies; **Sun Clasp** can bounce the carrier out of a kill spell for {W}; **Voice of All** and **Mystic Enforcer** carry protection; and **Lyra Dawnbringer** wins the game with no auras at all. One Swords does not end the game.

**The Mesa fuel count (Counts Principle):** Mesa draws on each enchantment cast, and 7 of the 23 nonland cards are enchantments (Griffin Guide, Seton's Desire, Improvised Armor, Sun Clasp, Pacifism, Wild Growth, Sylvan Library) — a 30% density that both justifies two copies and is the mechanism that makes the deck removal-resilient.

**Carrier density:** 11 creatures can wear an aura against 4 offensive auras (roughly 2.75 carriers per aura), so the auras are never stranded. Thran Golem is the highest ceiling — a base 3/3 that becomes a 7/7 flying, first-strike, trample threat off a single +2/+2 aura.

**The honest weaknesses** (all disclosed, not hidden): the curve is white-intensive (four double-white payoffs) while the acceleration (Werebear, Wild Growth) makes green, so a green-flooded hand is a real loss; threshold on four bodies is upside, not a baseline an aggressive deck reliably reaches by turn 5; and there is no maindeck sweeper, so the plan is to race over the top rather than defend a wide board.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:5  3:6  4:4  5:3
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: Thran Golem@0.6, Mystic Enforcer@0.7, Mystic Zealot@0.7) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.35: Griffin Guide@0.9, Seton's Desire@0.85, Sun Clasp@0.85, Improvised Armor@0.85, Enlightened Tutor@0.9) → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 66%  T2 90%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper maindeck (Wrath of God is anti-synergistic with our own carriers, and costs a capped rare slot); we race over the top in the air (Lyra, Serra Angel, an evasive carrier) and use the Griffin Guide token / Pacifism to blunt one attacker; Giant Spider comes in from the board vs go-wide ground aggro.
  OK        single_large_threat: Swords to Plowshares, Pacifism, Radiant's Judgment
  OK        noncreature_permanents: Wax // Wane
  CONCEDED  stack: GW has no countermagic in this pool; we answer on resolution and race.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt sits in the sideboard for the cube's dominant graveyard decks.
```
- Curve PASS (aggro).
- Assembly PASS (payoff p=0.80, enabler p=0.87).
- Goldfish PASS: 84% keepable.
- Threats band ~74% exceeds 45-55%: intentional — in aura-voltron the auras ARE the payoff and evasion grant, so the payload bucket runs hot.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Drifting Meadow + Slippery Karst cycle for a card; Sylvan Library and Mesa convert surplus draws; Improvised Armor cycles when a carrier is unavailable; excess mana pumps via Enlightened Tutor / extra auras. |
| screw | accepted | Goldfish keepable 84%; Birds/Werebear/Wild Growth accelerate. But this is a WW-intensive deck (four double-white payoffs) — a hand stuck on green sources is a real loss. Mitigating with more fixing/taplands would slow the turn-5 aggressive clock; accepted as the cost of the white-heavy voltron curve. |
| decapitation | mitigation | The carrier is not a single point of failure: Griffin Guide leaves a 2/2 flyer when the creature dies, Sun Clasp bounces the carrier out of a removal spell, Voice of All and Mystic Enforcer carry protection (from a colour / from black), Lyra Dawnbringer wins with no suit-up at all, and Mesa x2 makes every aura a cantrip so aura-into-removal trades cost no cards. Sevinne's Reclamation rebuys a dead mv<=3 carrier or aura. |
| gas-out | mitigation | Mesa Enchantress x2 (Self-Replacing per aura) + Sylvan Library (Net-Positive) + Enlightened Tutor keep the aura hand full; the deck does not run dry deploying its threats. |
| raced | accepted | This deck is usually the aggressor (goldfish turn 5). Against a faster clock it has Swords, Pacifism, Radiant's Judgment and Spirit Link (SB) to buy a turn, and Lyra's lifelink swings a race, but a deck with no sweeper and thin early interaction can lose the race to an even faster start. Accepted: adding more defense would blunt the proactive plan; the sideboard (Giant Spider, Congregate, Spirit Link) shores it up post-board. |
| disruption-fizzle | mitigation | The key turn (suiting up) meeting one removal spell is absorbed: Mesa cantrips the aura so the trade is card-neutral, Sun Clasp bounces the carrier in response, and redundant carriers + Lyra mean the plan continues; Wax // Wane can also destroy a Pacifism placed on our carrier. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Test of Endurance | mythic lifegain alt-win — off-plan for aggressive voltron; needs a different shell. |
| Nut Collector | mythic squirrel engine — a go-wide token payoff, not an aura-voltron piece; wrong axis. |
| Hunting Grounds | mythic cheat-creatures enchantment — powerful but not an aura, doesn't advance the suit-up-one-threat plan. |
| Divine Sacrament | rare anthem — helps a go-wide board, not a single-carrier voltron; loses the rare-slot race to Birds/Sylvan/Enl.Tutor. |
| Auramancer | the one cap-free enchantress-support omission — a 2/2 body that returns a killed aura from GY to hand (2-for-1 insurance). Left out only because the carrier/aura slots were full; a strong flex vs removal-heavy matchups. |
| Divine Sacrament | RARE anthem (+1/+1 white creatures, more at threshold) and a Mesa-fuel enchantment — good but blocked by the 5-rare cap. |
| Phantom Nishoba | RARE 7/7 trample lifelink standalone finisher — competes with Lyra for the finisher role and a rare slot. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.13 adj [MV 2.78 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  24.1%  prod  35.3%  gap -11.2pp  [OK]
  W  demand  75.9%  prod  76.5%  gap  -0.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Deck size 40                          PASS (23 nonland + 17 land)
All cards from cube pool              PASS
Commons/uncommons <= 2 copies         PASS (Mesa x2, Radiant Grove x2)
Rares/mythics <= 1 copy each          PASS
Max 5 rares/mythics total (main+SB)   PASS (exactly 5: Lyra Dawnbringer, Sylvan Library, Enlightened Tutor, Birds of Paradise, Sevinne's Reclamation; sideboard 0)
Colours within WG                     PASS (no splash)
```
