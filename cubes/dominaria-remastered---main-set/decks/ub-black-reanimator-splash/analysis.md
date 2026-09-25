---
deck_name: "ub-black-reanimator-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-30T22:10:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x13  Swamp                    Black source
  x2   Contaminated Aquifer     U/B dual (enters tapped) — splash fixer
  x1   Island                   Blue source (splash)
  x1   Polluted Mire            Black source, cycling land (enters tapped)
```

### CREATURES (12)
```
CMC  Card                          Qty   Color Role                                Rar
  2  Millikin                     x1    C     Self-mill ramp                      U
  3  Phyrexian Ghoul              x1    B     Free sac outlet                     C
  3  Phyrexian Rager              x1    B     Body + card                         C
  3  Undead Gladiator             x1    B     Discard/recursion enabler           U
  4  Faceless Butcher             x1    B     Removal on a body                   U
  4  Juggernaut                   x1    C     Colorless backup beater             C
  5  Chainer, Dementia Master     x1    B     Repeatable reanimator               R
  5  Street Wraith                x1    B     Free cantrip / GY-fill              C
  6  Arcanis the Omnipotent       x1    U     Splash bomb: draw-3 engine (reanimation-only) R
  6  Necrosavant                  x2    B     Self-recurring backup body          U
  8  Denizen of the Deep          x1    U     Splash bomb: 11/11 (reanimation-only) R
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                          Qty   Color Role                                Rar
  1  Duress                       x1    B     Proactive disruption                C
  1  Entomb                       x1    B     GY-stocking tutor                   R
  1  Vampiric Tutor               x1    B     Assembly tutor                      M
  2  Chainer's Edict              x1    B     Edict removal                       U
  2  Terror                       x1    B     Removal                             C
  3  Ichor Slick                  x1    B     Removal / cycler                    C
  4  Dread Return                 x2    B     Reanimation outlet                  U
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty   Color Role                                Rar
  2  Mind Stone                   x1    C     Ramp / cantrip                      C
  2  Zombie Infestation           x1    B     Discard outlet                      U
  3  Jalum Tome                   x1    C     Repeatable looter (bins a drawn bomb) C
```

## SIDEBOARD (10)
```
Card                          Qty   Color Role / When to board in                              Rar
Duress                       x1    B     Control/combo/GY-hate: strip a key noncreature card  C
Tormod's Crypt               x1    C     Opposing graveyard/reanimator: exile their yard      U
Damping Sphere               x1    C     Storm/ramp/untap combos: tax + {C} lock              U
Terror                       x1    B     Aggro: extra spot removal                            C
Ichor Slick                  x1    B     Aggro/midrange: flexible removal                     C
Chainer's Edict              x1    B     Hexproof/single big threat: edict                    U
Faceless Butcher             x1    B     Midrange bombs: removal-body                         U
Phyrexian Debaser            x1    B     Go-wide/aggro: flying blocker, sac for -2/-2         C
Dark Withering               x1    B     Big nonblack fatties: extra removal (madness {B})    U
Icy Manipulator              x1    C     Control/big creatures: tap-down                      U
```

## ANALYSIS

### DECK IDENTITY

Black reanimator with a light blue splash for a genuine bomb. Entomb, Vampiric Tutor, and cheap discard/mill outlets find and bin a blue game-ender, then Chainer ({B}{B}{B}, pay 3 life) or two Dread Returns cheat it into play — Arcanis the Omnipotent ({T}: draw three cards, needing no blue to activate) is the primary payoff, an inevitability engine that also self-bounces to dodge removal; Denizen of the Deep (11/11) is a secondary reanimation target and a fast clock (softer, since it has no evasion and can be chump-blocked). The blue splash is reanimation-ONLY (Arcanis is {3}{U}{U}{U} and is never hardcast), so only ~3 blue sources are needed; two Necrosavants give a self-recurring black backup if the bombs are exiled, and a black removal/disruption suite protects the assembly.

### KEY INTERACTIONS

- **The splash needs zero blue to win.** Chainer and Dread Return PUT a creature onto the battlefield (they do not cast it), so a reanimated Arcanis/Denizen never pays its {U} pips. Arcanis's {T}: draw three and Denizen's ETB likewise cost no mana. Blue is required only for Arcanis's optional {2}{U}{U} self-bounce — hence a minimal 3-source splash.
- **Binning a drawn bomb.** A bomb you draw naturally is stranded until you can discard it. Maindeck outlets: Entomb (from library), Zombie Infestation (discard two), Undead Gladiator (discard one, upkeep), Jalum Tome (repeatable {2},{T}: draw then discard), plus Millikin/Street Wraith self-mill. Jalum Tome was added in the grill repair specifically to make drawn-bomb disposal repeatable.
- **Chainer's hidden cost.** Chainer makes every creature it reanimates a Nightmare, and 'When Chainer leaves the battlefield, exile all Nightmares.' Killing Chainer therefore exiles the bomb it reanimated (permanently — no graveyard re-buy) plus any Faceless Butcher (a natural Nightmare). The Dread Return line, which makes no Nightmares, is the more removal-proof way to keep a bomb.
- **Necrosavant as insurance.** If both bombs are exiled or the splash whiffs, two self-returning 5/5 Necrosavants ({3}{B}{B}, sac a creature, from the graveyard each upkeep) give a mono-black backup clock that needs no blue at all.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:3  2:5  3:5  4:4  5:2  6:3  8:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  enabler: 7 copies (effective 6: Zombie Infestation@0.8, Millikin@0.8, Street Wraith@0.7, Jalum Tome@0.7) → p=0.88 (need ≥ 0.75)
  PASS  payoff: 5 copies (effective 4.4: Necrosavant@0.7, Necrosavant@0.7) → p=0.78 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 50%  T2 89%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Chainer's Edict, Ichor Slick, Faceless Butcher
  OK        single_large_threat: Terror, Faceless Butcher, Chainer's Edict, Ichor Slick
  CONCEDED  noncreature_permanents: B/U-splash runs no maindeck artifact/enchantment removal; Duress preempts, SB brings Damping Sphere/Icy Manipulator
  CONCEDED  stack: no counters maindeck; Duress strips key noncreature spells proactively
  CONCEDED  graveyard: opponent-GY hate is sideboard-only (Tormod's Crypt); our own GY is the engine
```

Responses to WARN/notes: thesis_turn was revised 5->6 — reliably seeing one of the 3 into-play reanimators (Chainer + 2 Dread Return) for a 6-8-MV bomb is a turn-6 assembly, and no non-rare into-play reanimator can be added under the 5-rare cap. Curve PASSes after the revision (only Denizen, MV8, exceeds MV6, and its printed MV is never paid).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Mind Stone cashes for a card; Chainer ({B}{B}{B}) and Necrosavant ({3}{B}{B}) are repeatable mana sinks (their colored pips are paid by the 16 black sources, not the colorless rocks); once Arcanis is reanimated, {T}: draw three converts every extra turn into cards; Jalum Tome/cyclers turn dead lands into card flow. |
| screw | mitigation | 82% keepable (goldfish). Cheap black plays hold on two lands — Entomb {B}, Duress {B}, Terror at 2 — and the bombs are reanimated (bypassing their mana), so a light 17-land base still deploys the game-ender. Mind Stone/Millikin add generic {C} toward the reanimation cost (not colored mana); the 16 black sources supply {B}{B}{B}. Contaminated Aquifer/Polluted Mire fix but enter tapped — a minor tempo cost on 3 of 17 lands. |
| decapitation | mitigation | If the reanimated bomb is answered it returns to the graveyard for Chainer/Dread Return to re-buy, a second bomb or a Necrosavant is available, and Entomb/Vampiric Tutor find a replacement; Arcanis's {2}{U}{U} self-bounce dodges targeted removal. Caveat (grill catch): killing CHAINER exiles every creature it reanimated ('When Chainer leaves, exile all Nightmares') plus a natural-Nightmare Faceless Butcher — so the Dread Return line, which does not make Nightmares, is the more removal-proof way to keep a bomb permanently. |
| gas-out | mitigation | Arcanis's {T}: draw three cards is the ultimate refuel once online; before that, Phyrexian Rager ETB-draw, Undead Gladiator self-recursion, Jalum Tome looting, Mind Stone, and the two tutors keep the hand stocked. |
| raced | accepted | With the thesis turn at 6, the fastest aggro can get under the reanimation before a bomb lands; fully mitigating would mean cutting the bombs and tutors that ARE the win condition, so we accept some fast-aggro losses and lean on maindeck removal (Terror, Chainer's Edict, Ichor Slick, Faceless Butcher) plus SB (Phyrexian Debaser, extra removal, Dark Withering, Icy Manipulator). |
| disruption-fizzle | mitigation | The key reanimation turn meeting one answer survives — two Dread Returns plus Chainer mean a countered/removed outlet is retried with the bomb still in the graveyard — and Duress proactively strips the interaction before committing. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Frantic Search | excellent reanimator enabler but {2}{U} demands ~5-6 blue sources to cast reliably, which conflicts with the {B}{B}{B} Chainer core in a light U splash; kept as a splash candidate, not a maindeck lock. |
| Aven Fateshaper | a 4/5 flyer bomb but only 1 blue pip and a weaker payoff than Arcanis/Denizen — a splash slot better spent on the two game-enders. |
| Worldgorger Dragon | no aura reanimation loop exists in the pool; a 7/7 that exiles your own board on ETB — a liability. |
| Triskelion | colorless reach on a rare — the 5-rare cap is spent on the engine + the two blue bombs. |
| Mindslicer | symmetric discard rare; the rare cap is full and the splash bombs are the payoff, not a discard-parity break. |
| Dark Withering | cut from maindeck for Jalum Tome in the grill repair — a 6-mana removal spell whose value is the {B} madness cost, which needs a discard outlet; Jalum Tome patches the thinnest seam (binning a naturally-drawn bomb) more directly. Dark Withering stays in the sideboard. |
| Body Snatcher | a 4th into-play reanimator (returns a creature to the battlefield on death) but a rare — locked out by the 5-rare cap (spent on Entomb/Vampiric Tutor/Chainer/Arcanis/Denizen). |
| Oversold Cemetery | looks like reanimation but returns a creature to HAND — useless for the uncastable blue bombs, which can never be recast; correctly excluded. |
| Frantic Search | the allowed 3rd blue splash card and a strong discard/dig outlet, but it must be CAST for {2}{U}; Jalum Tome fills the same drawn-bomb-disposal role in colorless mana, keeping the splash purely reanimation-only (the deck never needs blue to win). |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.48   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.97 adj [MV 3.48 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]

Splash Check: [PASS]
  U  3 card(s), max CMC 8  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Pool: cube mainboard; commons/uncommons x2, rares/mythics x1.
MB size 40 [PASS]   SB size 10 [PASS]
Copy limits: all <= allowed (Dread Return/Necrosavant/Contaminated Aquifer 2; Terror/Ichor Slick/Chainer's Edict/Faceless Butcher/Duress 2 across MB+SB) [PASS]
Rares/mythics total MB+SB: 5 / 5 cap [PASS]  (Entomb, Vampiric Tutor, Chainer, Arcanis the Omnipotent, Denizen of the Deep)
Blue splash: 2 / 3 named cards (Arcanis the Omnipotent, Denizen of the Deep), all reanimation-only; 3 blue sources [PASS]
Color usability: every nonland card castable in [B] + U-splash [PASS]
Membership: all names exact-match in cube pool [PASS]
```
