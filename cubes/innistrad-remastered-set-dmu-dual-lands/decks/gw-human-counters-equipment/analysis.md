---
deck_name: "gw-human-counters-equipment"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-26T20:10:15Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x5   Forest                                     
  x10  Plains                                     
  x2   Radiant Grove                              ({T}: Add {G} or {W}.) This land enters tapped.
```

### CREATURES (14)

```
CMC  Card                                       Qty   Color Role                               Rar
  1  Thraben Inspector                          x2    W     threat/infrastructure              C
  2  Duskwatch Recruiter // Krallenhorde Howler x2    C     engine/toolbox tutor               U
  2  Metallic Mimic                             x1    C     payoff                             R
  2  Twinblade Geist // Twinblade Invocation    x2    C     payoff/keyword source              U
  3  Crusader of Odric                          x2    W     payoff                             C
  3  Fiend Hunter                               x1    W     interaction                        U
  3  Harvest Hand // Scrounged Scythe           x1    C     payoff/equipment                   C
  3  Torens, Fist of the Angels                 x1    GW    payoff/engine                      R
  4  Gisela, the Broken Blade                   x1    W     payoff/keyword source              M
  4  Odric, Lunarch Marshal                     x1    W     payoff                             R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                       Qty   Color Role                               Rar
  2  Travel Preparations                        x2    G     payoff                             U
  2  Valorous Stance                            x2    W     interaction                        U
  3  Angelic Purge                              x1    W     interaction                        C
  3  Clear Shot                                 x2    G     interaction                        U
```

### OTHER SPELLS (2)

```
CMC  Card                                       Qty   Color Role                               Rar
  3  Butcher's Cleaver                          x1    C     payoff/equipment                   U
  5  Cathars' Crusade                           x1    W     payoff/engine                      R
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                                                Rar
Gryff's Boon                               x1    W     payoff -- vs ground stalls and removal-heavy decks: grants flying and returns from the graveyard for {3}{W}, so it survives its carrier dying U
Cathar Commando                            x2    W     interaction -- vs the cube's 24 artifacts / 25 enchantments: '{1}, Sacrifice this creature: Destroy target artifact or enchantment', at flash speed C
Cobbled Wings                              x1    C     payoff/equipment -- vs ground stalls: 'Equipped creature has flying. Equip {1}' -- and with Odric out, flying spreads to the whole team C
Bound by Moonsilver                        x1    W     interaction -- vs a large blocker: 'Enchanted creature can't attack, block, or transform' -- also answers the cube's many transform creatures C
Faith Unbroken                             x1    W     interaction -- vs a single dominant creature: exiles it for as long as the Aura remains, and gives +2/+2 to a counter-laden Human U
Slayer of the Wicked                       x2    W     interaction -- vs Vampire/Werewolf/Zombie decks: 51 of the cube's creatures carry one of those three types, and it arrives on a Human body that carries equipment U
Soul-Guide Gryff                           x2    W     interaction -- vs graveyard decks: at 75 cards / 27.1% density this is the single largest threat class in the cube, so it gets two copies -- 'exile up to one target card from a graveyard' on a flying body that also gives Odric a flying keyword to spread C
```

## ANALYSIS

### DECK IDENTITY

A GW Humans go-tall build. Rather than flooding the board, it deploys three to five Human bodies and makes each of them enormous with PERMANENT +1/+1 counters -- Cathars' Crusade counters every creature each time any creature enters, Metallic Mimic pre-loads a counter onto every Human, Travel Preparations adds four counters across two castings, and training on Torens and its tokens grows them from combat itself. It then makes that oversized creature unanswerable in combat with Human-specific equipment (Butcher's Cleaver grants lifelink, Harvest Hand's Scrounged Scythe grants menace) and, crucially, with Odric, Lunarch Marshal, which copies any keyword one creature has onto the entire team -- so Twinblade Geist's double strike or Gisela's flying/first strike/lifelink becomes a team-wide property. The toolbox lens shows in Duskwatch Recruiter digging for the right body and six interaction slots covering whatever the matchup presents.

### ODRIC IS THE ACTUAL KILL

The counters are how this deck gets big; Odric, Lunarch Marshal is how it wins. His text reads: *"At the beginning of each combat, creatures you control gain first strike until end of turn if a creature you control has first strike. The same is true for flying, deathtouch, double strike, haste, hexproof, indestructible, lifelink, menace, reach, skulk, trample, and vigilance."* One creature having a keyword gives it to all of them.

The deck deliberately supplies six distinct keywords across seven card copies:

| Keyword | Source | Copies |
|---|---|---|
| double strike | Twinblade Geist (and Twinblade Invocation, its disturb face) | 2 |
| flying | Gisela, the Broken Blade | 1 |
| first strike | Gisela, the Broken Blade | 1 |
| lifelink | Gisela; Butcher's Cleaver on any Human | 2 |
| menace | Harvest Hand's Scrounged Scythe on any Human | 1 |
| indestructible | Valorous Stance (until end of turn) | 2 |

The one that matters most is **double strike**. On a board where Cathars' Crusade has been putting a counter on every creature every time anything enters, granting the whole team double strike does not add damage linearly — it doubles the entire accumulated investment in one combat step. A four-creature board at 5/5 each is 20 damage; with Odric plus Twinblade Geist alive it is 40.

That is also why Odric survived the count-dependent check here and was **cut** from Deck A: in the token-swarm build the keyword count was two (first strike on Thalia, vigilance on Intangible Virtue's tokens), both on a single card each. The card is identical; the deck is what makes it good or blank.

### THE ARITHMETIC OF ONE CATHARS' CRUSADE TRIGGER

Cathars' Crusade reads *"Whenever a creature you control enters, put a +1/+1 counter on each creature you control."* The counters scale with the board that already exists, so each trigger is worth more than the last:

- Board of 2, a creature enters → 3 counters placed (the newcomer counts itself)
- Board of 4, a creature enters → 5 counters
- Board of 5 with Torens out, you cast any creature → the creature enters (6 counters) AND Torens makes a token, which also enters (7 counters) = 13 counters from one card

Torens, Fist of the Angels is therefore not a token-maker in this deck so much as a Crusade-trigger doubler: *"Whenever you cast a creature spell, create a 1/1 green and white Human Soldier creature token with training."* Every creature spell is two entries instead of one.

### WHY THE HUMAN COUNT IS 9 OF 14, NOT 14 OF 14

Three of this deck's most important cards are not Humans, and that is a deliberate trade rather than an oversight:

- **Twinblade Geist** is a Spirit Warrior. It is in the deck as a double-strike source for Odric, not as an equipment carrier — Butcher's Cleaver's lifelink clause and Metallic Mimic's counter both read "Human" and skip it.
- **Gisela, the Broken Blade** is an Angel Horror. Same trade: three keywords on one body is worth more here than Human-ness.
- **Harvest Hand** enters as a Scarecrow and only becomes the menace-granting Equipment after it dies.

So Metallic Mimic naming Human, Butcher's Cleaver and Scrounged Scythe all operate on 9 of the 14 mainboard creature copies (64.3%), plus every Torens token, which is a Human Soldier. A clear majority, but not the near-total coverage the token build enjoys.

### PLAY-PATTERN WARNING: FIEND HUNTER AND ANGELIC PURGE

Angelic Purge costs *"sacrifice a permanent"* as an additional cost. Fiend Hunter reads *"When this creature leaves the battlefield, return the exiled card to the battlefield under its owner's control."* If Fiend Hunter is the only permanent you can spare when you cast Angelic Purge, paying the cost with it hands the opponent back the creature it exiled. Spare fodder in a normal mid-game board includes Torens tokens, Thraben Inspector's Clues, Radiant Grove and any basic — so this is avoidable, but it has to be seen coming.

### WHAT THE FIVE RARE SLOTS BOUGHT, AND WHAT THEY COST

| Rare | Why it is irreplaceable here |
|---|---|
| Cathars' Crusade | The only effect in the pool that scales counters with board width |
| Metallic Mimic | The only card that makes the counters arrive automatically on every Human |
| Torens, Fist of the Angels | The only card that doubles Crusade triggers |
| Odric, Lunarch Marshal | The only keyword-sharing effect in the cube |
| Gisela, the Broken Blade | Three distinct keywords on one body, the densest Odric enabler available |

The cost of that budget is visible in two places. First, **Overgrown Farmland** — the GW dual that enters untapped from turn 3 — is a rare, so the mana base is Radiant Grove x2 plus basics, and the deck must reach {W}{W} on turn 5 off 12 white sources. Second, and more seriously, **Archangel Avacyn** is the only card in these colours that grants the team indestructible, and it is a mythic. That means this deck has no way to protect its board from Vanquish the Horde, and its answer is recursion after the fact (Harvest Hand returning itself transformed, Twinblade Geist's disturb, Travel Preparations' flashback) rather than prevention.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:9  3:9  4:2  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 9.6: Odric, Lunarch Marshal@0.8, Cathars' Crusade@0.7, Metallic Mimic@0.8, Butcher's Cleaver@0.7, Harvest Hand // Scrounged Scythe@0.6) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.8: Duskwatch Recruiter // Krallenhorde Howler@0.8) → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 35%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Clear Shot, Crusader of Odric, Cathars' Crusade, Twinblade Geist // Twinblade Invocation
  OK        single_large_threat: Valorous Stance, Fiend Hunter, Angelic Purge, Clear Shot
  OK        noncreature_permanents: Angelic Purge
  CONCEDED  stack: White and green have no counterspell in this cube at any rarity, so a stack answer cannot be bought at any slot cost. The deck's response to a countered spell is that its counters are already on the battlefield: Travel Preparations, Metallic Mimic and training put PERMANENT +1/+1 counters on creatures, so a countered Cathars' Crusade costs a card but not the accumulated board.
  CONCEDED  graveyard: The cube is 27% graveyard-interactive, but the only GW maindeckable answer is Soul-Guide Gryff at {4}{W}, which competes directly with the turn Cathars' Crusade must resolve. It is boarded in instead.
```

No WARN-tier flags were raised; `structural_responses` is empty.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Duskwatch Recruiter x2 is a repeatable mana sink -- '{2}{G}: Look at the top three cards of your library. You may reveal a creature card from among them and put it into your hand' converts every surplus land into a body for the rest of the game. Butcher's Cleaver's equip {3} and Travel Preparations' {1}{W} flashback are two more sinks, and Thraben Inspector x2 leave Clues that cash in for cards. |
| `screw` | mitigation | 11 of 23 nonland cards cost 2 or less and 2 more cost 1, so a two-land keep still curves Thraben Inspector into Twinblade Geist or Travel Preparations. 15 of 17 lands enter untapped. The goldfish check reports 87% of 1000 opening hands keepable and 88% reaching three lands by turn 3 -- the highest of the four builds, because 17 lands against a 2.61 curve is a comfortable ratio. |
| `decapitation` | mitigation | TWO SUB-CASES, both answered. (a) SINGLE-TARGET REMOVAL ON SIGHT: Cathars' Crusade is the card an opponent most wants to answer, and killing it undoes nothing already done -- the counters it placed are PERMANENT and stay on the creatures. The counter sources are spread across Metallic Mimic, Travel Preparations x2 and training on Torens and its tokens, so no one answer stops the accumulation. Valorous Stance x2 ('Target creature gains indestructible until end of turn') protects the single oversized creature at instant speed. (b) SWEEPERS -- the harder case, and the one this deck is genuinely most exposed to, because a 'destroy all creatures' effect erases every accumulated +1/+1 counter along with the bodies. The dossier buckets 4 cards as sweepers, but only TWO are genuine mass-destroy against this board: Vanquish the Horde ('Destroy all creatures') and Archangel Avacyn's transformed face. Savage Alliance ('1 damage to each creature target opponent controls') and Smoldering Werewolf ('1 damage to each of up to two target creatures') are small-damage effects that kill 1/1 tokens but leave every counter-laden creature standing, so the real exposure is 2 cards, not 4. Three cards in this list rebuild through a wrath from the graveyard, by their own oracle text: Harvest Hand // Scrounged Scythe -- 'When this creature dies, return it to the battlefield transformed under your control' -- literally survives the wrath and comes back as the menace Equipment; Twinblade Geist // Twinblade Invocation x2 -- 'Disturb {2}{W}' -- each recasts from the graveyard as an aura granting double strike, which with Odric is a team-wide effect on the rebuilt board; and Travel Preparations x2 -- 'Flashback {1}{W}' -- re-applies counters to whatever survives. Duskwatch Recruiter x2 then refills the hand with creature cards at '{2}{G}' without drawing a card. What the deck cannot do is prevent the wrath: the only GW card in the pool that grants team-wide indestructible is Archangel Avacyn, a MYTHIC, and all 5 rare/mythic slots are already spent on Cathars' Crusade, Torens, Metallic Mimic, Odric and Gisela. Buying wrath protection therefore costs one of those five -- and cutting any of them removes either the counter engine or the keyword-sharing kill. That trade is declined, and the recursion above is what the deck plays instead. |
| `gas-out` | mitigation | Duskwatch Recruiter x2 is a repeatable draw-equivalent that never runs out. Thraben Inspector x2 replace themselves via Clues. Travel Preparations x2 each get cast twice (flashback {1}{W}, on-colour). Torens converts every subsequent creature spell into an extra body. Critically, this build stores its resources on the battlefield as permanent counters rather than in hand, so an empty hand with a developed board is still winning. |
| `raced` | accepted | Against the cube's fastest clocks -- the RB vampire and RG werewolf aggro decks -- this build's turn-6 thesis is a full turn slower than theirs. It does have Butcher's Cleaver and Gisela as lifelink sources and six interaction slots, so it is not defenceless, but on the draw against a curve-out it can lose before Cathars' Crusade resolves. Mitigating would mean cutting the five-drop anchor and the four-drop keyword sources for two-drop blockers -- which is to say, becoming Deck A. The go-tall identity IS the acceptance of a slower clock in exchange for a board no removal spell fully answers. |
| `disruption-fizzle` | mitigation | The critical turn is the Cathars' Crusade turn, and the deck is deliberately not all-in on it: Metallic Mimic, Travel Preparations x2 and training all place counters independently of it. If the Crusade turn is interacted with, Valorous Stance x2 answer creature-based interruption at instant speed, and Odric plus Twinblade Geist provide an alternative kill -- team-wide double strike on even a modest board -- that does not route through Cathars' Crusade at all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Crawl from the Cellar, Indulgent Aristocrat, Butcher Ghoul | The deterministic splash filter surfaced these three black cards; all three read Zombie or Vampire ('Put a +1/+1 counter on up to one target Zombie', 'Put a +1/+1 counter on each Vampire you control'), tribes this build runs zero of, so no splash colour is taken and splash_colors is []. |
| Hinterland Logger // Timber Shredder, Villagers of Estwald // Howlpack of Estwald, Scorned Villager // Moonscarred Werewolf | Human on the front face only -- each transforms into a Werewolf and stops being Human, deleting itself as a numerator for Mayor of Avabruck, Hamlet Captain, Dawnhart Disciple, Butcher's Cleaver and Harvest Hand. |
| Moonlight Hunt, Howlpack Resurgence, Shrill Howler // Howling Chorus, Pack Guardian | Every one reads Wolf or Werewolf; this build runs zero of both, so their text is blank. |
| Young Wolf, Lumberknot, Festerhide Boar | Counters cards that are not Humans and whose triggers need creatures to DIE (undying, 'whenever a creature dies', morbid). This build accumulates counters on surviving creatures via Cathars' Crusade and training, and it runs no sacrifice outlet, so the death rate that powers them is not something the deck produces. |
| Bruna, the Fading Light, Subjugator Angel, Sigarda, Host of Herons, Unnatural Growth, Cultivator Colossus, Bramble Wurm, Ghoultree, Wrenn and Seven, Second Harvest | Five mana or more. Cathars' Crusade at {3}{W}{W} is already this build's top end and its own curve risk; a second five-plus slot competes with the turn the anchor must resolve. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.19 adj [MV 2.61 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  29.2%  prod  41.2%  gap -12.0pp  [OK]
  W  demand  70.8%  prod  70.6%  gap  +0.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS -- Phase 5C check 3 against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Max copy count of any nonbasic is 2.
rares_mythics_max_1_each         PASS -- all five appear once.
rares_mythics_max_5_total        PASS -- exactly 5 across mainboard + sideboard: Cathars' Crusade, Torens Fist of the Angels, Metallic Mimic, Odric Lunarch Marshal, Gisela the Broken Blade. The sideboard is entirely commons and uncommons.
all_cards_from_cube              PASS -- Phase 5C check 2, exact-name match against the working pool cache.
basics_unlimited                 Plains x10 and Forest x5 are exempt from the copy caps.
```
