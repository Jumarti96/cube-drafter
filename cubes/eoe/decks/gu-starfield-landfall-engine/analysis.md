---
deck_name: "gu-starfield-landfall-engine"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GU"
format: "40-card"
built_at: "2026-08-03T16:56:12Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
8x Forest                   Basic - Lander fetch target
5x Island                   Basic - Lander fetch target
2x Tangled Islet            GU dual, enters tapped
1x Breeding Pool            GU dual, untapped for 2 life
```

### CREATURES (8)

```
CMC  Card                     Qty   Color  Role                                                           Rar
  2  Biomechan Engineer       x2    GU     Ramp: 2/2 body + Lander                                        U
  2  Genemorph Imago          x1    GU     Converter: sets a Robot to base 6/6 per land ETB               R
  3  Galactic Wayfarer        x1    G      Ramp: 3/3 + Lander                                             C
  4  Icetill Explorer         x1    G      ENGINE: extra land drop + GY lands                             R
  4  Mightform Harmonizer     x1    G      Payoff: power doubling COMPOUNDS per land ETB                  R
  4  Starfield Vocalist       x1    U      ENGINE: every permanent-ETB trigger fires twice                R
  7  Glacier Godmaw           x1    G      Top-end: Lander + team anthem per landfall                     U
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                     Qty   Color  Role                                                           Rar
  1  Sami's Curiosity         x2    G      Ramp: MV1 Lander                                               C
  2  Consult the Star Charts  x1    U      Selection scaled by land count                                 R
  2  Desculpting Blast        x1    U      Bounce any nonland permanent                                   U
  2  Divert Disaster          x2    U      Counter; Lander if they pay                                    C
  2  Seedship Impact          x1    G      Answer: artifact/ench + Lander                                 U
  3  Unravel                  x2    U      Hard counter                                                   U
  5  Cerebral Download        x1    U      Draw three at instant speed                                    U
```

### OTHER SPELLS (6)

```
CMC  Card                     Qty   Color  Role                                                           Rar
  1  Cryoshatter              x2    U      Removal: destroys a resolved creature                          C
  3  Larval Scoutlander       x2    G      Ramp: two land ETBs at once                                    U
  5  Eusocial Engineering     x2    G      FINISHER: a 2/2 Robot per land ETB                             U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                        Rar
Annul                    x2    U      Counters artifact/ench spells; 74 artifacts + 16 ench in cube  U
Seedship Impact          x1    G      2nd artifact/enchantment answer                                U
Dauntless Scrapbot       x2    C      Graveyard exile vs 27 opposing GY cards                        U
Shattered Wings          x2    G      Destroys a resolved artifact/ench/flier                        C
Tractor Beam             x2    U      Steals the biggest creature; also a body for Imago             U
Mouth of the Storm       x1    U      Pseudo-sweeper: -3/-0 to their team; 6/6 flier ward 2          U
```

## ANALYSIS

### DECK IDENTITY

Simic landfall engine control. Icetill Explorer grants an additional land drop each turn and lets lands be replayed from the graveyard, so land ETB events arrive twice a turn; Landers add more at instant speed on either player's turn. Eusocial Engineering converts every one of those ETBs into a 2/2 Robot, and Starfield Vocalist makes each of those triggers fire an additional time - its wording covers any permanent entering, and a land is a permanent. Mightform Harmonizer then doubles a Robot's power once per trigger, compounding across the two-to-four ETBs a turn the engine manufactures, while Genemorph Imago sets one to base 6/6 as a floor. Eight copies of interaction, including Cryoshatter as the deck's only hard creature removal, hold the board while the engine assembles, and Consult the Star Charts turns the land count itself into card selection.

### THE ENGINE IS A RATE, NOT A CARD

The thesis for this deck is not "play a big thing." It is: **make land ETB *events* happen more often than once per turn, then get paid per event.**

That distinction decided the whole build. Two rejected sketches wanted **Harmonious Grovestrider** (*"power and toughness are each equal to the number of lands you control"*) as the finisher — but that reads a static land **count**. It cannot notice whether a land arrived once or twice this turn. Of the 24 nonland cards here, **14** (Icetill Explorer, Larval Scoutlander ×2, and the 11 Lander-producing copies) exist specifically to manufacture extra ETB *events*. A count-reader is blind to all of them.

Every payoff in this list is instead per-event:

| Card | Per land ETB |
|---|---|
| Eusocial Engineering ×2 | *"create a 2/2 colorless Robot artifact creature token"* |
| Mightform Harmonizer | *"double the power of target creature you control until end of turn"* |
| Genemorph Imago | *"target creature has base power and toughness … 6/6"* |
| Icetill Explorer | *"mill a card"* — which feeds its own graveyard-land replay |
| Glacier Godmaw | *"creatures you control get +1/+1 and gain vigilance and **haste**"* |

### STARFIELD VOCALIST DOUBLES LANDS — THE WORDING MATTERS

*"If a **permanent** entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time."*

The word is **permanent**, not "artifact or creature". A land is a permanent, so this doubles landfall. It is also a static replacement on the trigger event rather than a trigger of its own, so it works on the opponent's turn — which matters, because a Lander is *"{2}, {T}, Sacrifice this token"* with no timing restriction and can be cracked at instant speed.

Exactly what it doubles here, recounted during the grill: **11 of 24 nonland copies.** Five are landfall payoffs (Eusocial Engineering ×2, Genemorph Imago, Mightform Harmonizer, Icetill Explorer, Glacier Godmaw's landfall). Six more are permanent-ETB triggers, which the wording also covers (Biomechan Engineer ×2, Larval Scoutlander ×2, Galactic Wayfarer, Glacier Godmaw's own ETB Lander). It does **not** double Sami's Curiosity, Divert Disaster or Seedship Impact — those make Landers as *spell* effects, not as triggered abilities of permanents.

### THE 32-POWER ROBOT

The single sharpest line in the deck, and it came out of the self-grill:

**Mightform Harmonizer's doubling compounds. Genemorph Imago's base-setting does not.** *"Double the power"* applied four times to a 2/2 is 32. *"Has base power and toughness 6/6"* applied four times is still 6.

On an Icetill Explorer turn with Starfield Vocalist out, one land drop is 2 ETB events × 2 (Vocalist) = **4 triggers**. That is: 4 Robots from a single Eusocial Engineering, and a Robot doubled to 32 power. And the two payoffs **combine** — base-setting applies in a lower layer than doubling, so Imago sets a Robot to base 6/6 and Mightform then doubles from 6, not from 2. Glacier Godmaw's doubled landfall grants that board **+2/+2, vigilance and haste**, so the Robots made this turn attack this turn.

### GENEMORPH IMAGO IS NOT REMOVAL HERE

*"…target creature has base power and toughness 3/3 until end of turn. If you control six or more lands, that creature has base power and toughness 6/6 until end of turn **instead**."*

"Instead" replaces the clause outright, and the ability is mandatory. From six lands onward — where a 16-land landfall deck lives from about turn 5 — Imago **cannot shrink anything**. Pointed at an opposing 4/4 it would be a *buff*. All three independent sketchers caught this, and the deck acts on it: Imago is in the list as a **converter** aimed at our own free Robot tokens, and it is explicitly *not* counted among the answers to a large threat.

That coverage class is instead carried by **Cryoshatter** — added during the grill, which found the mainboard had **0 of 24 cards that destroy or exile a resolved creature**. Seedship Impact cannot target creatures; Desculpting Blast only bounces; Unravel and Divert Disaster are stack-only. Cryoshatter at {U} (*"Enchanted creature gets -5/-0. When enchanted creature becomes tapped or is dealt damage, destroy it"*) is the fix.

### KNOWN CEILINGS

- **Basic-land exhaustion.** 13 basics in the deck against as many as 15 basic-fetch instances (11 Lander copies at one each, plus Larval Scoutlander ×2 searching for two each). A failed search yields no land ETB — no Robot, no rewrite. Not binding before roughly turn 10 at {2} per Lander, but it is a real floor.
- **Singleton engine.** Four of the five engine cards are 1-ofs, forced by the 6-card rare/mythic cap. Eusocial Engineering ×2 is the only redundant piece, which is why the interaction suite is built to protect whichever piece lands first.
- **The `raced` mode is accepted, not fixed.** Against creature aggro only **7 of 8** interaction copies are live (Seedship Impact cannot touch a creature), one of those seven only bounces, and the mainboard has no blocker before turn 3.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (24 nonland):  1:4  2:8  3:5  4:3  5:3  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.6: Genemorph Imago@0.8, Starfield Vocalist@0.8) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 8.8: Larval Scoutlander@0.9, Larval Scoutlander@0.9, Icetill Explorer@0.7, Seedship Impact@0.5, Divert Disaster@0.4, Divert Disaster@0.4) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 56%  T2 92%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: Neither green nor blue offers a sweeper in this cube, and the one colourless option, Extinguisher Battleship at {8}, is unreachable on a 16-land curve topping at mana value 7. The deck instead out-widens: Eusocial Engineering x2 create a 2/2 Robot on every land ETB, Starfield Vocalist doubles that to two Robots per ETB, and Icetill Explorer supplies two ETBs a turn. Mitigating with a real sweeper would mean leaving G/U.
  OK        single_large_threat: Cryoshatter, Unravel, Divert Disaster, Desculpting Blast
  OK        noncreature_permanents: Seedship Impact, Desculpting Blast
  OK        stack: Unravel, Divert Disaster
  CONCEDED  graveyard: No mainboard graveyard answer; Dauntless Scrapbot x2 ('exile each opponent's graveyard') is a sideboard swap. Denominator corrected during the grill: the cube holds 31 graveyard-interaction cards, 4 of which appear in this deck's own lists (Icetill Explorer, Shattered Wings, Dauntless Scrapbot, and formerly Lost in Space), so 27 oppose.
```

- goldfish WARN - keepable sits exactly AT the 80% threshold rather than below it, and 3-lands-by-turn-3 is 84%. Accepted rather than repaired: the deck is already at deck_audit.land_target recommended count of 16, so raising the land count to force the number higher would contradict the same function Phase 6 audits against. The mechanism that carries two-land keeps instead is the four one-mana plays - Sami Curiosity x2, which banks a land ETB for a later turn, and Cryoshatter x2, which answers an early threat for {U} - plus Larval Scoutlander searching for up to two basic land cards.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands are the engine's fuel. Every land ETB is a 2/2 Robot from each Eusocial Engineering, doubled by Starfield Vocalist, plus a power doubling from Mightform Harmonizer and a base-6/6 rewrite from Genemorph Imago. Consult the Star Charts reads 'Look at the top X cards of your library, where X is the number of lands you control', so a flooded board digs deeper. Icetill Explorer converts a second land in hand into a second ETB rather than a dead card. Stated ceiling: the deck holds 13 basics against as many as 15 basic-fetch instances (11 Lander copies plus Larval Scoutlander x2 searching for two each), so in a very long game a Lander can find nothing - this is not binding before roughly turn 10 at {2} per activation, but it is a real floor and the record names it. |
| screw | mitigation | 11 green and 8 blue sources out of 16, against a 19/15 pip split, with five double-pip cards across four names (Unravel x2 {1}{U}{U}, Icetill Explorer {2}{G}{G}, Mightform Harmonizer {2}{G}{G}, Eusocial Engineering x2 {3}{G}{G}, Glacier Godmaw {5}{G}{G}). Breeding Pool can enter untapped for 2 life. 13 of 16 lands are basics, so Sami's Curiosity x2 and Larval Scoutlander x2 can fetch the colour that is missing - Larval Scoutlander searches for 'up to two basic land cards', so it can take one Forest and one Island. Caveat stated: every fetched fix arrives tapped. Eusocial Engineering has warp {1}{G}, so it deploys on two lands rather than five. |
| decapitation | mitigation | The engine is layered. Eusocial Engineering x2 turns land ETBs into a board on its own, and Genemorph Imago can target itself, turning a 1/3 flier into a base 6/6 flier on every land ETB with no other permanent needed - either one alone is a functioning payoff. Starfield Vocalist is explicitly NOT in that set: the assembly model discounts it to 0.8 precisely because it is blank unless another ETB-triggered permanent is already out. Unravel x2 and Divert Disaster x2 protect whichever piece resolves first, which is why the interaction count sits where it does. Structural caveat the record owns: 4 of the 5 engine cards are singletons, forced by the 6-card rare/mythic cap. |
| gas-out | mitigation | Consult the Star Charts is kickable ('If this spell was kicked, put two of those cards into your hand instead') and scales with the land count the deck is already maximising. Icetill Explorer mills lands and then replays them from the graveyard, so its own mill is a resource. Eusocial Engineering and Glacier Godmaw generate board without spending cards from hand, and Biomechan Engineer x2 carry a late-game '{8}: Draw two cards and create a 2/2 colorless Robot artifact creature token' as a mana sink. |
| raced | accepted | This is a controller with a goldfish turn of 8, an average mana value of 2.875 and no card that pressures a life total before turn 5. Against creature aggro only 7 of the 8 interaction copies are live - Seedship Impact 'Destroy target artifact or enchantment' cannot touch a creature at all - and 1 of those 7 (Desculpting Blast) only bounces. Adding a faster clock would mean cutting either the interaction that holds the board or the Lander package that assembles the engine, and the engine IS the win condition, so both cuts remove the deck. The stated cost of accepting: a hand with fewer than two live interaction copies loses to a curve-out before Eusocial Engineering comes down, and the mainboard has no blocker before turn 3. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with. Lander activations are independent {2} abilities with no timing restriction, so they are usable at instant speed and spreadable across turns; Eusocial Engineering's tokens accrue one land at a time rather than in one burst. The deck also holds its own counterspells - Unravel x2 and Divert Disaster x2 - specifically to protect the turn the engine is assembled. The earlier claim that warping Eusocial Engineering could 'bait an answer' is withdrawn: warp exiles it at the beginning of the next end step, so it never sits on the battlefield long enough to be answered. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Harmonious Grovestrider (U) | 'power and toughness are each equal to the number of lands you control' reads a static land COUNT, not land ETB events. This build's entire acceleration package exists to produce extra ETBs per turn, which a count-reader cannot notice. It was the keystone of both rejected sketches; the judge's decisive ground for rejecting them. |
| Fungal Colossus (C) / Survey Mechan (U) / All-Fates Scroll (U) | All three scale on DIFFERENTLY NAMED lands. This manabase holds 4 distinct names because a control deck holding up {1}{U} on turn 2 cannot afford a stack of enters-tapped duals. Fungal Colossus would be a 5/5 for {2}{G} at best; Survey Mechan's ability would cost {6}. |
| Famished Worldsire (M) | {5}{G}{G}{G} with a triple-green pip in a deck with only 11 green sources of 16, and 'Devour land 3' sacrifices the lands Consult the Star Charts and Genemorph Imago both read. |
| Pull Through the Weft (U) | 'return up to two target land cards from your graveyard to the battlefield tapped' duplicates Icetill Explorer's own 'You may play lands from your graveyard' clause, and the keystone of the rejected reactive-attrition sketch. |
| Mightform Harmonizer (R) | Doubling power per landfall is a real per-ETB payoff, but the bodies here are 2/2 Robot tokens, so it doubles 2 to 4 where Genemorph Imago rewrites the same token to base 6/6 - and only one of the two fits the rare budget. |
| Bioengineered Future (R) | 'Each creature you control enters with an additional +1/+1 counter for each land that entered this turn' would make Eusocial Engineering's Robots enter oversized, which is genuinely on-plan. Cut only because the 6-card rare/mythic budget is fully spent on the four engine rares plus Breeding Pool and Quantum Riddler. |
| Icecave Crasher (C) / Seedship Agrarian (U) | Both are per-ETB green payoffs and both would work here, but a control deck at 9 interaction copies has 2 threat slots, and Genemorph Imago and Glacier Godmaw convert the token board better than a single self-pumping body does. |
| Edge Rover (U) | A {G} 2/2 with reach would be the mainboard's only one-drop blocker, which the accepted 'raced' mode gives up. Rejected because 'When this creature dies, EACH PLAYER creates a Lander token' hands the opponent the same acceleration this deck is built on. |
| Annul (U) | Sideboard consideration, boarded in as 2 copies. Not mainboard because it counters only artifact and enchantment SPELLS - against a creature deck it is a blank, where Divert Disaster and Unravel are always live. |
| Mm'menon, the Right Hand (R) / Starwinder (R) / Quantum Riddler (M) | All three are strong blue rares. Quantum Riddler took the last rare slot for the sideboard as a resilient flier with card draw; Mm'menon and Starwinder were cut because the mainboard runs only 6 artifacts and 1 creature above MV 5 respectively, so neither engine has enough to read. |
| Cerebral Download (U) / Uthros Scanship (U) | Both are real card advantage, but Cerebral Download's surveil X counts ARTIFACTS - this mainboard holds 4 artifact cards (Larval Scoutlander x2 plus the Lander tokens) - and Uthros Scanship at {3}{U} competes with the engine four-drops. |
| Extinguisher Battleship (R) | The only sweeper castable in G/U, and the answer to the class this deck concedes. Excluded on curve: at {8} it is unreachable on a 16-land manabase whose next-highest card is MV 7, and it would cost a rare slot the engine needs. |
| Lost in Space (C) | Cut during the grill. 'Target artifact or creature's OWNER puts it on THEIR CHOICE of the top or bottom of their library' - against a threat worth answering the owner picks top and redraws it. It was credited as an answer to a large threat and is not one. |
| Sinister Cryologist (U) | Sideboard consideration, cut during the grill. '-3/-0 UNTIL END OF TURN' kills nothing; it only wins one combat step, which is two slots of a ten-card sideboard for an effect that leaves the threat on the battlefield. |
| Mechanozoa (C) | Sideboard consideration, cut during the grill. Six mana (or warp {2}{U} for a one-shot) to tap one permanent and delay its untap by a turn, in a 16-land deck already carrying a card at mana value 7. |
| Quantum Riddler (M) | A 4/6 flier with 'When this creature enters, draw a card' and a draw-doubling static is a strong control-mirror card, but the last rare slot went to Mightform Harmonizer, whose power doubling COMPOUNDS across the 2-4 land ETBs a turn this engine manufactures. |
| Bioengineered Future (R) | Genuinely on-plan: Eusocial Engineering's Robots are created after the land that triggered them, so they would enter at 3/3 or larger permanently. Excluded only because the rare/mythic budget is spent at 6/6, and Mightform Harmonizer's compounding beat it for the last slot. This is the first card to try when iterating. |
| Seedship Agrarian (U) | A repeatable Lander source whose landfall clause grows it permanently, and Larval Scoutlander's Station ('Tap another creature you control') is a free tap outlet for it. Cut on slots rather than on mechanism - the ramp package is already 7 of 24 and this build spends its remaining slots on interaction the grill showed it lacked. |
| Icecave Crasher (C) | A 4/4 trample body that scales on the exact event this pipeline manufactures. Cut because a controller with 8 interaction copies and 5 threat copies has no room for a sixth threat; it is the natural swap if the accepted 'raced' mode proves too expensive in practice. |
| Moonlit Meditation (R) | 'The first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of enchanted permanent' would turn Eusocial Engineering's first Robot each turn into a copy of Glacier Godmaw. Excluded on the rare budget and on fragility - it is an Aura on a permanent that must already be the right permanent. |
| Tractor Beam (U) | Moved INTO the sideboard during the grill. 'You control enchanted permanent' is the only permanent, unconditional answer to a large creature available in G/U, and it hands the deck a body Genemorph Imago can rewrite to base 6/6. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 11   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.33 adj [MV 2.88 vs 2.5, 11 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  55.9%  prod  68.8%  gap -12.9pp  [OK]
  U  demand  44.1%  prod  50.0%  gap  -5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies: PASS
rares/mythics max 1 copy: PASS
max 6 rare+mythic cards across mainboard+sideboard: PASS - 6 used, exactly at the cap: Genemorph Imago, Consult the Star Charts, Icetill Explorer, Starfield Vocalist, Mightform Harmonizer and Breeding Pool, all mainboard. The sideboard contains zero rares.
basic lands unlimited (format-supplied): PASS - 8 Forest, 5 Island
all cards from cube mainboard: PASS
colour usability within G/U (effective_cost.best_mode): PASS
splash cap: PASS - no splash colours
```