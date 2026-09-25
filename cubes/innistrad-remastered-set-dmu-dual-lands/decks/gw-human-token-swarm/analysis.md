---
deck_name: "gw-human-token-swarm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-26T19:47:57Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x5   Forest                                     
  x9   Plains                                     
  x2   Radiant Grove                              ({T}: Add {G} or {W}.) This land enters tapped.
```

### CREATURES (14)

```
CMC  Card                                       Qty   Color Role                               Rar
  1  Thraben Inspector                          x2    W     enabler/infrastructure             C
  2  Avacynian Priest                           x2    W     interaction                        C
  2  Dawnhart Disciple                          x2    G     payoff                             C
  2  Hamlet Captain                             x2    G     payoff                             U
  2  Mayor of Avabruck // Howlpack Alpha        x1    C     payoff                             R
  2  Metallic Mimic                             x1    C     payoff                             R
  3  Crusader of Odric                          x2    W     payoff                             C
  3  Thalia, Heretic Cathar                     x1    W     interaction/threat                 R
  3  Torens, Fist of the Angels                 x1    GW    engine                             R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                       Qty   Color Role                               Rar
  2  Gather the Townsfolk                       x2    W     enabler                            C
  2  Join the Dance                             x2    GW    enabler                            U
  2  Valorous Stance                            x1    W     interaction                        U
  3  Rally the Peasants                         x2    W     payoff/finisher                    U
```

### OTHER SPELLS (3)

```
CMC  Card                                       Qty   Color Role                               Rar
  2  Intangible Virtue                          x2    W     payoff                             U
  3  Wedding Announcement // Wedding Festivity  x1    C     engine/payoff                      R
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                                                Rar
Cathar Commando                            x2    W     interaction -- vs the cube's 24 artifacts / 25 enchantments: '{1}, Sacrifice this creature: Destroy target artifact or enchantment' C
Valorous Stance                            x1    W     interaction -- vs single large threats: 'Destroy target creature with toughness 4 or greater' U
Angelic Purge                              x2    W     interaction -- vs any problem permanent: 'Exile target artifact, creature, or enchantment'; the sacrifice cost is paid by a spare 1/1 token C
Clear Shot                                 x2    G     interaction -- vs fliers (58 evasive cards, 21% of the cube): damage equal to power, so it reaches the air my ground board cannot U
Slayer of the Wicked                       x2    W     interaction -- vs Vampire/Werewolf/Zombie decks: 51 of the cube's creatures carry one of those three types U
Soul-Guide Gryff                           x1    W     interaction -- vs graveyard decks (75 cards, 27% density): 'exile up to one target card from a graveyard' C
```

## ANALYSIS

### DECK IDENTITY

A GW Human token swarm. It deploys Human bodies and 1/1 Human tokens on turns 1-3 from six token sources (Gather the Townsfolk x2, Join the Dance x2, Torens, Wedding Announcement), then converts that width into lethal with stacked anthem effects: Intangible Virtue on the tokens, Mayor of Avabruck on the Humans, Metallic Mimic pre-loading counters, Hamlet Captain on every attack, and Rally the Peasants as the burst finisher. Crusader of Odric is the single card that most directly reads the deck's own width. It has almost no interaction by design -- the plan is to be attacking with 8-12 bodies on turn 5 before an answer matters.

### THE ANTHEM STACK — WHY THIS DECK'S 1/1s ARE NOT 1/1s

The deck's entire proposition is that a 1/1 Human token is never actually a 1/1. Eight separate pump effects across five card slots read the board, and they stack multiplicatively across a wide board rather than additively:

| Effect | Text | Applies to | Copies |
|---|---|---|---|
| Intangible Virtue | Creature tokens you control get +1/+1 and have vigilance | tokens only | 2 |
| Mayor of Avabruck | Other Human creatures you control get +1/+1 | every Human, token or not | 1 |
| Metallic Mimic (naming Human) | Each other creature you control of the chosen type enters with an additional +1/+1 counter | every Human entering afterward, permanently | 1 |
| Hamlet Captain | Whenever this creature attacks or blocks, other Humans you control get +1/+1 until end of turn | every attacking Human | 2 |
| Wedding Festivity (back face) | Creatures you control get +1/+1 | everything | 1 |
| Rally the Peasants | Creatures you control get +2/+0 until end of turn | everything, at instant speed | 2 |

The load-bearing detail is that **every token this deck makes is specifically a Human token** — Gather the Townsfolk, Join the Dance, Torens and Wedding Announcement all say so in their oracle text. That is why Mayor of Avabruck and Hamlet Captain, which read "Humans" rather than "creatures", are full anthems here rather than half ones. It is also the reason the two rejected build sketches were rejected: their width came from Lingering Souls, Mausoleum Guard and Dauntless Cathar, all of which make **Spirit** tokens, which are invisible to four of the six effects above.

A concrete line: turn 2 Gather the Townsfolk, turn 3 Hamlet Captain plus a one-drop, turn 4 Intangible Virtue and attack. The two tokens are 2/2s from Virtue, and Hamlet Captain's attack trigger makes them 3/3s. Four bodies swing for roughly 11. Turn 5 Rally the Peasants adds +2/+0 to each, at instant speed, after blockers.

### THE WEREWOLF TRAP

Green's Human count in this cube is inflated by cards that stop being Human the moment they flip. Hinterland Logger, Villagers of Estwald and Scorned Villager all read "Creature -- Human Werewolf" on the front and transform into a Werewolf-only back face "at the beginning of each upkeep, if no spells were cast last turn." A deck counting them as Humans is counting a numerator that deletes itself in exactly the turns it is short on gas. All three were cut for this reason, and it is recorded in the sweep.

Mayor of Avabruck has the same clause, and that is genuinely a cost the deck accepts rather than dodges: its back face, Howlpack Alpha, pumps "each other creature you control that's a Werewolf or a Wolf", of which this deck runs **zero**. Flipping Mayor turns an anthem into a vanilla body plus a 2/2 Wolf each end step. This is why it is declared at weight 0.7 rather than 1.0 in the assembly check. In practice an aggro deck casts a spell nearly every turn, so the flip is a punishment for stumbling, not a baseline.

### WHAT THE FIVE RARE SLOTS BOUGHT

The user cap of five rares/mythics is the single most binding constraint on this build, and it was spent on effects that no common or uncommon in these colours replicates:

| Rare | What it does that nothing cheaper does |
|---|---|
| Wedding Announcement // Wedding Festivity | The only card in GW that is both a repeating token faucet and, later, an unconditional team anthem |
| Torens, Fist of the Angels | The only card that turns *every creature spell* into an extra Human body |
| Mayor of Avabruck | The only static "Humans get +1/+1" anthem in the pool |
| Metallic Mimic | The only effect that makes the pump *permanent* (+1/+1 counters, not until-end-of-turn) |
| Thalia, Heretic Cathar | The only tempo tax; "creatures and nonbasic lands your opponents control enter tapped" buys the extra attack step the turn-5 clock needs, and in a cube where every single dual land enters tapped anyway, the land half of that clause is unusually punishing |

Notably this budget is also what excludes **Overgrown Farmland**, the better of the two GW duals, from the mana base -- it is a rare. The land base is therefore Radiant Grove x2 plus basics, and 14 of the 16 lands enter untapped, which for a turn-5 clock is worth more than the fixing would have been.

### MATCHUP NOTE — THE AIR

The cube is 21% evasive (58 cards). This deck has no flier, no reach creature, and no maindeck answer to one. Against a deck that stabilizes on the ground and attacks in the air, the plan is strictly to have killed it first; the sideboard's Clear Shot x2 ("It deals damage equal to its power to target creature you don't control") is the only card in these colours at common or uncommon that touches a flier, and it only works once the anthems have made a creature big enough.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:2  2:15  3:7
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 10.3: Metallic Mimic@0.8, Mayor of Avabruck // Howlpack Alpha@0.7, Wedding Announcement // Wedding Festivity@0.8) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.8: Wedding Announcement // Wedding Festivity@0.8) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 34%  T2 95%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Crusader of Odric, Hamlet Captain, Intangible Virtue, Rally the Peasants, Avacynian Priest
  OK        single_large_threat: Valorous Stance, Avacynian Priest
  CONCEDED  noncreature_permanents: GW's answers to artifacts and enchantments in this pool (Cathar Commando, Angelic Purge, Hopeful Initiate) all cost a card or a body; maindecking them would replace token-makers and push the goldfish turn past 5, so they sit in the sideboard where 24 artifacts and 25 enchantments are a known, boardable matchup rather than a maindeck tax.
  CONCEDED  stack: White and green have no counterspell in this cube at any rarity, so a stack answer is not purchasable at any slot cost; the deck's response to a countered spell is redundancy -- 6 token-makers and 9 anthem/pump effects mean no single spell is the plan.
  CONCEDED  graveyard: The cube is 27% graveyard-interactive (75 cards), but GW's only maindeckable answer in this pool is Soul-Guide Gryff at {4}{W} -- a four-mana 2/2 flier is above this deck's entire curve (top MV is 3) and would cost a turn of pressure against a thesis that kills on turn 5. It is boarded in instead, where it answers the matchup that actually shows up.
```

No WARN-tier flags were raised; `structural_responses` is empty.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Thraben Inspector x2 leaves a Clue ('{2}, Sacrifice this token: Draw a card') that turns a surplus land into a card. Wedding Announcement converts every attacking turn into 'draw a card' rather than a token. Rally the Peasants and Join the Dance's {3}{G}{W} flashback are both mana sinks that scale with a board the deck already has, so extra lands become extra damage. |
| `screw` | mitigation | Keepable on two lands: 15 of the 24 nonland cards cost exactly 2 and 2 more cost 1, so a two-land hand still curves Thraben Inspector into Gather the Townsfolk into Hamlet Captain. The goldfish check confirms it: 84% of 1000 opening hands are keepable and 95% have a play by turn 2. 14 of 16 lands enter untapped, so the two lands you do have are live on the turn you draw them. |
| `decapitation` | mitigation | There is no key card to answer. The anthem effect is spread across 8 copies in 5 different card slots (Intangible Virtue x2, Mayor of Avabruck, Hamlet Captain x2, Rally the Peasants x2, Wedding Festivity) and the width across 6 more. Killing Mayor of Avabruck on sight costs the opponent a card and leaves the other seven pump effects live; Valorous Stance ('Target creature gains indestructible until end of turn') protects the one that matters in a pinch. |
| `gas-out` | mitigation | Four cards replace or exceed themselves: Thraben Inspector x2 (Clue), Wedding Announcement (draws on every attacking turn), and Join the Dance x2 (flashback {3}{G}{W} is a second casting from the graveyard, and unlike Lingering Souls's black flashback this one is on-colour). Torens converts every subsequent creature spell into two bodies rather than one, which is card advantage in board terms. |
| `raced` | accepted | The fastest clocks in this cube's threat profile are the RB vampire aggro and RG werewolf decks. This deck has 3 interaction cards and no lifegain, so it does not interact with a race -- it tries to be faster, and against an equal-speed deck on the draw it can simply lose. Mitigating would mean maindecking blockers or lifegain (Lunarch Veteran, Butcher's Cleaver's lifelink), and both cost token-maker or anthem slots -- which is to say they cost the turn-5 kill that IS this deck's identity. |
| `disruption-fizzle` | mitigation | The critical turn is the alpha strike, and its critical card is Rally the Peasants, an INSTANT -- so it is cast after blockers are declared, when the opponent has already committed. If the first copy is answered there is a second, plus Hamlet Captain x2 which pumps from the battlefield rather than the stack and so cannot be countered at all. Avacynian Priest ('{1}, {T}: Tap target non-Human creature') pre-empts the single blocker that would otherwise eat the attack, at sorcery speed on the turn before. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Ghoulish Procession, Siege Zombie, Crawl from the Cellar | The deterministic splash filter surfaced these three black Zombie-cluster cards; none reads Human or token-anthem text, so no splash colour is taken and splash_colors is empty for this build. |
| Hinterland Logger // Timber Shredder, Villagers of Estwald // Howlpack of Estwald, Scorned Villager // Moonscarred Werewolf | Human on the front face only — each transforms into a Werewolf and stops being Human, so it cannot be relied on as a numerator for Mayor of Avabruck, Hamlet Captain, Dawnhart Disciple or Butcher's Cleaver. |
| Moonlight Hunt, Howlpack Resurgence, Shrill Howler // Howling Chorus, Pack Guardian | Every one reads Wolf or Werewolf; this build runs zero Wolves and zero Werewolves, so their text is blank here. |
| Bruna, the Fading Light, Subjugator Angel, Sigarda, Host of Herons, Unnatural Growth, Cultivator Colossus, Bramble Wurm, Ghoultree, Wrenn and Seven | Five mana or more in a deck whose thesis kills on turn 5 — the board is already committed by the turn these cost, and each costs a card slot that would otherwise be another body or anthem. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.72 adj [MV 2.21 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  30.8%  prod  43.8%  gap -13.0pp  [OK]
  W  demand  69.2%  prod  68.8%  gap  +0.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS -- verified by Phase 5C check 3 against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Max copy count of any nonbasic in this deck is 2.
rares_mythics_max_1_each         PASS -- all five rares appear once.
rares_mythics_max_5_total        PASS -- exactly 5 across mainboard + sideboard: Mayor of Avabruck, Metallic Mimic, Thalia Heretic Cathar, Torens Fist of the Angels, Wedding Announcement. The sideboard is entirely commons and uncommons.
all_cards_from_cube              PASS -- Phase 5C check 2, exact-name match against the working pool cache; basics are format-supplied.
basics_unlimited                 Plains x9 and Forest x5 are exempt from the copy caps.
```
