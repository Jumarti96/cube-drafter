---
deck_name: "wu-disturb-aura-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-28T02:40:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  8x Plains                                     basic, untapped
  6x Island                                     basic, untapped
  2x Idyllic Beachfront                         UW dual, enters tapped
```

### CREATURES (10)

```
CMC  Card                                       Qty  Color  Role                        Rar
  1  Lantern Bearer // Lanterns' Lift           x2   C      payoff-disturb-host         C
  1  Thraben Inspector                          x2   W      threat-host                 C
  2  Niblis of the Urn                          x1   W      threat-evasive-host         U
  2  Twinblade Geist // Twinblade Invocation    x2   C      payoff-disturb-host         U
  3  Nebelgast Herald                           x1   U      interaction-tempo           U
  3  Spell Queller                              x1   UW     interaction-protection      R
  3  Thalia, Heretic Cathar                     x1   W      threat-tempo-tax            R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                                       Qty  Color  Role                        Rar
  1  Silent Departure                           x1   U      interaction-tempo           C
  1  Syncopate                                  x2   U      interaction-counter         C
  2  Valorous Stance                            x1   W      interaction-protection      U
  3  Geistlight Snare                           x2   U      interaction-counter         U
```

### OTHER SPELLS (8)

```
CMC  Card                                       Qty  Color  Role                        Rar
  1  Gryff's Boon                               x2   W      engine-attachment           U
  1  Stitcher's Graft                           x1   C      engine-attachment           R
  2  Lunarch Mantle                             x1   W      engine-attachment           C
  3  Cathar's Call                              x2   W      engine-attachment           U
  3  Wedding Announcement // Wedding Festivity  x1   C      engine-card-flow            R
  4  Faith Unbroken                             x1   W      interaction-removal         U
```

## SIDEBOARD (10)

```
Card                                       Qty  Color  Role / When to board in     Rar
Cathar Commando                            x2   W      hate-artifact-enchantment   C
Angelic Purge                              x1   W      hate-noncreature-permanent  C
Bound by Moonsilver                        x1   W      hate-single-large-threat    C
Imprisoned in the Moon                     x1   U      hate-single-large-threat    C
Mist Raven                                 x2   U      flex-tempo-evasion          U
Slayer of the Wicked                       x1   W      hate-tribal-creatures       U
Soul-Guide Gryff                           x1   W      hate-graveyard              C
Subjugator Angel                           x1   W      hate-wide-boards            U
```

## ANALYSIS

### DECK IDENTITY

A WU tempo Voltron deck whose threats and whose attachments are largely the same cards. Lantern Bearer and Twinblade Geist are creatures that come back from the graveyard as Auras via Disturb, and both read 'If [it] would be put into a graveyard from anywhere, exile it instead' -- so a removal spell answers them once rather than two-for-one'ing the way Voltron normally loses. Around that core sit 10 bodies of which 5 fly, six attachments, and a five-card stack-interaction suite whose job is not board control but keeping the suited flier alive through the one turn it needs to connect. Thalia, Heretic Cathar taxes the opponent's development so that turn arrives first.

This is the resilient Voltron build, and the reason it works is a rules interaction the other three colour pairs cannot buy.

### The disturb cards are not two-for-one'able

Voltron loses to a removal spell that eats the creature and every Aura on it. Two cards in this deck refuse that trade:

| Card | Front face | Back face | The clause that matters |
|---|---|---|---|
| Lantern Bearer | 1-mana 1/1 Flying Spirit | Lanterns' Lift, Aura: +1/+1 and flying | "If Lanterns' Lift would be put into a graveyard from anywhere, exile it instead" |
| Twinblade Geist | 2-mana 2/2 Double strike Spirit | Twinblade Invocation, Aura: double strike | "If Twinblade Invocation would be put into a graveyard from anywhere, exile it instead" |

Kill the creature and it is not gone -- it is fuel. You recast it from the graveyard as an Aura for its Disturb cost. The opponent spent a card to convert your creature into an enchantment. That is a one-for-one at worst, and against a deck holding up Syncopate it is often a zero-for-one.

### Geistlight Snare is a one-mana counterspell in this deck specifically

Its oracle reads: "This spell costs {1} less to cast if you control a Spirit. It also costs {1} less to cast if you control an enchantment." Both conditions are structural here, not situational:

- **Spirits:** 7 of 24 nonland cards (2 Lantern Bearer, 2 Twinblade Geist, 1 Niblis of the Urn, 1 Nebelgast Herald, 1 Spell Queller)
- **Enchantments:** 7 of 24 nonland cards (2 Gryff's Boon, 1 Lunarch Mantle, 2 Cathar's Call, 1 Faith Unbroken, 1 Wedding Announcement), plus both disturb Aura backs

CORRECTED (Challenger F9): the earliest BOTH discounts are live is turn three, not turn two -- six of the seven enchantments are Auras and cannot be cast without a creature already down, so on turn two with only a Spirit this is {1}{U}. Wedding Announcement was added at Phase 9 for exactly this reason: it is a standalone enchantment, one of only two in the WU pool, so it turns the second discount on without a creature. That is what makes the deck able to hold up protection *and* develop the board in the same turn, which is the whole difficulty of playing a protect-the-queen deck.

### What the shape judge caught, and why Restoration Angel is not here

The judge flagged an oracle trap worth recording, because Restoration Angel looks like the perfect card for this deck and is actively bad in it. Its ETB reads "exile target non-Angel creature you control, then return that card to the battlefield." Blinking your own suited creature in response to removal *strips the suit*: the Equipment unattaches, and the disturb Auras -- which say "exile it instead" -- are permanently gone rather than recastable. The best-looking protection spell in the colour pair is a two-for-one against yourself. Overcharged Amalgam failed a similar check: its counter fires only "when this creature exploits a creature," and the fodder would have to be one of the eleven evasive hosts.

### Blue is over-supplied on purpose

The mana audit shows blue at 50% production against 37.5% pip demand -- a 12.5pp over-supply that looks like a mistake and is not. Blue's cards in this deck are the ones that must be held up at instant speed. A white pip you cannot spend on your own turn is wasted; an untapped Island on the opponent's turn is Syncopate or Geistlight Snare. The gap is inside the 15pp tolerance and the audit passes.

### The honest weakness

This deck is the worse racer of the two aggressive builds. Its bodies are 1/1s and 2/2s that cannot block a Vampire aggro curve, and its mana goes to counterspells rather than damage. It has exactly one unconditional creature removal spell in the mainboard (Faith Unbroken, at MV 4). Against the cube's fastest starts it is boarding Subjugator Angel and two Mist Raven to buy the turns its clock needs.

### Two numbers the grill corrected

The Phase 9 Challenger reproduced every count in this record from the deck array and caught three that were wrong. Worth keeping visible: the deck has **5 of 10 creatures with flying**, not the nine an earlier draft claimed (Twinblade Geist has double strike, not flying, and its Disturb back grants double strike too); instants and sorceries are **6 of 24**, not six; and Lunarch Mantle's '{1}, Sacrifice a permanent' clause means the deck does have a repeatable sacrifice outlet, which two count-dependent verdicts had recorded as zero. None of the three changed a card decision, but a verdict resting on a number that does not reproduce is not a verdict.

### The graveyard problem is a pool limitation, not a build choice

The cube's largest threat class by far is graveyard interaction: 75 of 277 nonland cards, 27.1% density. This deck's answer is one Soul-Guide Gryff. That is not enough, and it cannot be fixed: `structural_census.graveyard_hate` is **empty for the entire cube**, and Soul-Guide Gryff's 'exile up to one target card from a graveyard' is the only graveyard-touching effect available in W or U. The grill proposed Epitaph Golem as a repeatable answer; its oracle reads 'Put target card from **your** graveyard on the bottom of **your** library', so it operates on its own controller's graveyard and is self-recursion, not hate. Against the cube's graveyard decks this deck is racing, not interacting.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Tempo):  [PASS]
  MV distribution (24 nonland):  1:10  2:5  3:8  4:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.86 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.5: Stitcher's Graft@0.8, Wedding Announcement // Wedding Festivity@0.7) → p=0.88 (need ≥ 0.75)
  PASS  protection: 6 copies (effective 5.65: Geistlight Snare@0.9, Geistlight Snare@0.9, Spell Queller@0.85) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 89%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The answer is that this deck does not contest the ground -- 5 of its 10 creatures have flying printed, and 2 Gryff's Boon plus Lunarch Mantle's sacrifice-for-flying ability put the suited body over the top of a wide board rather than into it. Thalia, Heretic Cathar additionally makes every opposing creature enter tapped, so a wide board assembles a turn slower. Subjugator Angel ('tap all creatures your opponents control') is the sideboard answer. CORRECTED per Challenger F12: the earlier version of this concession referred to 'Cobbled-Wings-style evasion', naming a card not in the 40.
  OK        single_large_threat: Faith Unbroken, Valorous Stance, Silent Departure, Spell Queller, Syncopate, Geistlight Snare
  CONCEDED  noncreature_permanents: Zero mainboard artifact or enchantment removal. The two answers this colour pair has -- Cathar Commando and Hopeful Initiate -- are both white creatures, and Cathar Commando is sideboarded at 2 copies instead. Maindecking it would cost an evasive host or a counterspell on a 24-card nonland budget, and the counterspells already answer a noncreature permanent BEFORE it resolves, which is the tempo deck's preferred timing: Syncopate x2, Geistlight Snare x2 and Spell Queller are 5 of 24 cards that stop an artifact or enchantment on the stack.
  OK        stack: Syncopate, Geistlight Snare, Spell Queller
  CONCEDED  graveyard: No mainboard graveyard hate, and this is a pool limitation rather than a build choice: dossier structural_census.graveyard_hate is EMPTY for the entire 300-card cube, and Soul-Guide Gryff's 'exile up to one target card from a graveyard' is the only graveyard-touching effect in W or U. It is sideboarded because at MV 5 it is far above a curve at avg MV 2.00. The Phase 9 Challenger proposed Epitaph Golem as a repeatable answer; its oracle reads 'Put target card from YOUR graveyard on the bottom of YOUR library', so it is self-recursion on its own controller's graveyard, not hate. Against the cube's 27.1%-density graveyard decks this deck races rather than interacts, and it accepts that.
```

- No WARN-tier flags were raised. Phase 6b returned PASS on all four checks (curve 9/7/6/2; assembly payoff p=0.90, enabler p=0.89, protection p=0.84; goldfish 84% keepable; coverage), so there is no deviation to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to action six ways, and this is the deck of the four best equipped for it: 2 Lantern Bearer have 'Disturb {2}{U}' and 2 Twinblade Geist have 'Disturb {2}{W}', so four cards are castable a second time from the graveyard; 2 Gryff's Boon have '{3}{W}: Return this card from your graveyard to the battlefield attached to target creature'; 2 Thraben Inspector each leave a Clue ('{2}, Sacrifice this token: Draw a card'); Syncopate's '{X}' scales with every extra land; 2 Cathar's Call turn every subsequent turn into a free 1/1 for no mana; and Wedding Announcement draws a card or makes a body every end step by itself. |
| screw | mitigation | Keepable on two lands: 9 of 24 nonland cost 1 and 7 cost 2, so a two-land hand deploys a flier on turn one and a counterspell or a second body on turn two -- and Geistlight Snare is frequently castable for {U} on turn two with a Spirit already down. Phase 6b goldfish measures 84% keepable and 84% to have three lands by turn three. Thraben Inspector's Clue digs toward the third land. |
| decapitation | mitigation | This is the mode the deck is built around. The key piece answered on sight is the suited flier, and five of 24 nonland cards stop the answer before it resolves (Syncopate x2, Geistlight Snare x2, Spell Queller) while Valorous Stance blanks a destroy effect at instant speed. Behind that, the threats regenerate: Lantern Bearer and Twinblade Geist both come back from the graveyard via Disturb as Auras that then read 'exile it instead' of dying again, Gryff's Boon returns itself for {3}{W}, and 2 Cathar's Call manufacture a fresh legal host every end step. There is no single creature the deck cannot afford to lose. |
| gas-out | mitigation | Net-positive or self-replacing cards: 2 Lantern Bearer and 2 Twinblade Geist (disturb = a second use each), 2 Gryff's Boon (returns itself), 2 Thraben Inspector (Clue = a card), 2 Cathar's Call (a 1/1 body every end step, indefinitely) and 1 Wedding Announcement (a card or a body every end step, then an anthem) = 11 of 24 nonland cards producing a second card, a second use, or ongoing board. That is the highest such count of the four Voltron builds. |
| raced | mitigation | REWRITTEN after Challenger F4. The previous entry ACCEPTED losing to the cube's fastest clocks (dossier: 58 evasion cards at 21% density, 23 Vampires) on the grounds that WU has no cheap creature removal -- which is true, but it was not the only option, and the Challenger was right that the acceptance overstated the cost. Thalia, Heretic Cathar is now maindecked: 'Creatures and nonbasic lands your opponents control enter tapped' is not removal, so it does not cost a counterspell slot, and it makes every opposing blocker and flash creature arrive a turn late -- which against an aggro curve is worth more than a single removal spell. She is also a 3/2 'First strike' body that blocks a 2-power attacker profitably, which nothing else in the list does. Behind her: Nebelgast Herald and Niblis of the Urn tap attackers, Silent Departure bounces one for {U}, and the sideboard brings Subjugator Angel and 2 Mist Raven. Honest residual: the deck is still the slower of the two aggressive Voltron builds, and 7 of its 10 bodies are 1/1s and 2/2s that cannot block a 3/2 profitably. |
| disruption-fizzle | mitigation | The critical turn is the turn the suited flier attacks, and the failure is instant-speed removal in response. Three layers answer it. (1) Stack interaction at 5 of 24 nonland cards -- Syncopate x2, Geistlight Snare x2 (frequently {U} here, so it can be held up alongside a threat rather than instead of one) and Spell Queller. (2) Valorous Stance, an Instant reading 'Target creature gains indestructible until end of turn'. (3) The threats survive their own deaths: Lantern Bearer and Twinblade Geist return via Disturb as Auras, so removal on the host costs this deck tempo rather than the card. Deliberately NOT claimed: Spell Queller only exiles 'target spell with mana value 4 or less', and if the 2/3 body is later answered the exiled card comes back -- it is a delay against expensive removal, not an answer. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Deranged Assistant, Grizzled Angler // Grisly Anglerfish, Soulcipher Board // Cipherbound Spirit, Laboratory Maniac, Rise from the Tides, Reckless Scholar, Mystic Retrieval, Soul Separator | Self-mill engines and mill payoffs. Their oracle text fills a graveyard, and this deck's only graveyard uses are disturb and flashback costs it pays from cards already drawn -- milling those cards does not let it cast them. Laboratory Maniac's 'you win the game instead' needs an empty library, a plan this deck does not build toward. |
| Wretched Gryff, Abundant Maw, It of the Horrid Swarm, Decimator of the Provinces, Distended Mindbender, Elder Deep-Fiend, Emrakul, the Promised End | CORRECTED after Challenger F1, which showed the original reason was factually false. It claimed every Emerge cost here is off-colour ({B}/{G}); in fact Wretched Gryff is 'Emerge {5}{U}' and Elder Deep-Fiend is 'Flash / Emerge {5}{U}{U}', both fully castable in WU. The real mechanism, which was never stated: Emerge is 'reduced by that creature's mana value', so the cost is a CREATURE, and all 10 creature copies in the final list are evasive Aura hosts the plan needs alive -- sacrificing one to cast an Eldrazi is the same two-for-one the entire archetype is built to avoid. Elder Deep-Fiend would additionally consume a rare slot. Abundant Maw ({6}{B}), It of the Horrid Swarm ({6}{G}) and Decimator of the Provinces ({6}{G}{G}{G}) DO have off-colour emerge and are uncastable; Distended Mindbender is {5}{B}{B}; Emrakul is MV 13 with a card-type discount reaching at best MV 8. |
| Bruna, the Fading Light, Brisela, Voice of Nightmares, Gisela, the Broken Blade | Meld halves: each is a 7-11 mana body whose payoff requires owning and controlling the named partner. Bruna is MV 7 and Brisela MV 11; neither is reachable on this curve, and each would consume a rare/mythic slot. |
| Deadeye Navigator, Hullbreaker Horror, Temporal Mastery, Vanquish the Horde | Six-plus mana finishers that arrive after the thesis turn and do not advance the suit-up plan: Deadeye Navigator at MV 6 pairs for a blink loop this deck has no ETB engine for, Hullbreaker Horror is MV 7, Temporal Mastery is a MV 7 extra turn, and Vanquish the Horde's 'Destroy all creatures' kills the suited host. |
| Epitaph Golem | RECLASSIFIED after Challenger F2, which proposed it as repeatable graveyard hate to answer the cube's 27%-density graveyard class. Its oracle is '{2}: Put target card from YOUR graveyard on the bottom of YOUR library' -- it operates on its controller's own graveyard, so it is self-recursion and anti-mill, not opponent hate. It was also mis-filed originally under 'self-mill engines'. Correct verdict: CUT, because a MV 5 3/5 whose ability recycles this deck's own cards competes with the disturb and flashback recursion the deck already runs at 6 of 24 nonland cards, and it is not an answer to anything. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.0   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 2.0 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  37.5%  prod  50.0%  gap -12.5pp  [OK]
  W  demand  62.5%  prod  62.5%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            40 / 40
[PASS] Sideboard size            10 / 10
[PASS] Copy limits               commons/uncommons max 2 copies, rares/mythics max 1 copy, basics unlimited and rarity-exempt.
                                 Phase 5C check 3 cross-checked every distinct card's mainboard+sideboard total against cube_search.get_max_copies. PASS.
[PASS] Rare/mythic cap           4 / 5 -> Spell Queller, Stitcher's Graft, Thalia, Heretic Cathar, Wedding Announcement // Wedding Festivity
[PASS] Colour usability          every nonland card usable in WU via effective_cost.best_mode
[PASS] Splash cap                splash_colors = [] (no off-colour card in the list)
[PASS] Basic lands               8 Plains + 6 Island are format-supplied and exempt from the rarity cap and the copy limit.
[PASS] Cube membership           every card matched by exact name in the working pool
```