---
deck_name: "gw-human-clue-midrange"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-26T20:50:06Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x5   Forest                                     
  x9   Plains                                     
  x1   Evolving Wilds                             {T}, Sacrifice this land: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.
  x2   Radiant Grove                              ({T}: Add {G} or {W}.) This land enters tapped.
```

### CREATURES (12)

```
CMC  Card                                       Qty   Color Role                               Rar
  1  Thraben Inspector                          x2    W     engine                             C
  2  Avacynian Priest                           x2    W     interaction                        C
  2  Metallic Mimic                             x1    C     payoff                             R
  3  Crusader of Odric                          x2    W     payoff                             C
  3  Mentor of the Meek                         x2    W     payoff/engine                      U
  3  Tireless Tracker                           x1    G     engine                             R
  3  Torens, Fist of the Angels                 x1    GW    payoff/engine                      R
  4  Restoration Angel                          x1    W     threat/engine                      R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                       Qty   Color Role                               Rar
  2  Gather the Townsfolk                       x2    W     enabler                            C
  2  Join the Dance                             x2    GW    enabler                            U
  2  Valorous Stance                            x2    W     interaction                        U
  3  Clear Shot                                 x2    G     interaction                        U
```

### OTHER SPELLS (3)

```
CMC  Card                                       Qty   Color Role                               Rar
  3  Ulvenwald Mysteries                        x2    G     engine                             U
  3  Wedding Announcement // Wedding Festivity  x1    C     engine/payoff                      R
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                                                Rar
Cathar Commando                            x2    W     interaction -- vs the cube's 24 artifacts / 25 enchantments: '{1}, Sacrifice this creature: Destroy target artifact or enchantment' -- and sacrificing it feeds Ulvenwald Mysteries a nontoken creature death C
Angelic Purge                              x1    W     interaction -- vs any problem permanent: 'Exile target artifact, creature, or enchantment'; the sacrifice cost is paid by a spent Clue, which costs this deck nothing C
Bound by Moonsilver                        x1    W     interaction -- vs a large blocker and the cube's transform creatures: 'can't attack, block, or transform'; a spent Clue can be sacrificed to move it C
Fiend Hunter                               x1    W     interaction -- vs a single dominant creature: exile on a Human body that Mentor of the Meek also draws off U
Faith Unbroken                             x1    W     interaction -- vs a creature too big for Clear Shot: exiles it while the Aura remains, and gives +2/+2 U
Slayer of the Wicked                       x2    W     interaction -- vs Vampire/Werewolf/Zombie decks: 51 of the cube's creatures carry one of those three types, on a Human body U
Soul-Guide Gryff                           x2    W     interaction -- vs graveyard decks: at 75 cards / 27.1% density this is the cube's largest threat class, and a grind deck has the time to spend {4}{W} on a flier that answers it C
```

## ANALYSIS

### DECK IDENTITY

A GW Humans deck that wins by drawing more cards than its opponent and then attacking with what the drawing built. Four separate Clue sources -- Thraben Inspector's ETB, Tireless Tracker's landfall, Ulvenwald Mysteries' death trigger, and Evolving Wilds giving Tracker two landfall triggers from one land slot -- feed a hand that Mentor of the Meek x2 then refills off every small body that enters. Ulvenwald Mysteries closes the loop by converting sacrificed Clues into Human Soldier tokens, so a Clue is never a dead artifact. The kill is not a combo: it is Crusader of Odric, whose power equals the creature count, plus Torens tokens and Wedding Festivity's anthem, attacking into an opponent who has run out of cards.

### THE CLUE LOOP

This deck is the only one of the four whose card advantage is a closed loop rather than a set of unrelated value cards. The loop has four inputs and two outputs:

```
  Thraben Inspector (ETB)  ─┐
  Tireless Tracker (landfall)─┤
  Ulvenwald Mysteries (a nontoken creature dies) ─┤──→  CLUE  ──{2}, sacrifice──┐
  Evolving Wilds (two landfall triggers, see below) ─┘                          │
                                                                                ├──→ a CARD
  Ulvenwald Mysteries: "Whenever you sacrifice a Clue, create a 1/1 white Human Soldier" ──→ a HUMAN
  Tireless Tracker:    "Whenever you sacrifice a Clue, put a +1/+1 counter on this creature" ──→ a bigger body
```

The reason Ulvenwald Mysteries is the load-bearing card — and the reason the judge picked this build over the other two — is that it makes the `{2}` conversion cost pay twice. Cracking a Clue in most decks buys a card. Here it buys a card **and** a Human Soldier token, which is itself a Mentor of the Meek trigger, which buys another card. That is the answer to the standard failure mode of a Clue deck: drawing cards you cannot afford to convert.

### EVOLVING WILDS IS AN ENGINE PIECE, NOT FIXING

Tireless Tracker reads *"Landfall — Whenever a land you control enters, investigate."* Evolving Wilds reads *"{T}, Sacrifice this land: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle."*

That is **two landfall triggers from one land slot** — one when the Wilds enters, one when the fetched basic enters. No other land in this pool does that. The cost is that it produces no mana of its own and the fetched land arrives tapped; in a deck with a turn-8 clock that is affordable, and in the two aggro builds it would not be.

One ruling worth noting for play: **Radiant Grove is not a legal Evolving Wilds target.** Its type line reads `Land — Forest Plains`, which gives it the Forest and Plains land *types* but not the *basic* supertype. Of the 17 lands, 14 are legal fetch targets.

### WHY ODRIC IS BLANK HERE AND EXCELLENT IN THE HANWEIR DECK

The same card, two decks, opposite verdicts — worth stating because it is the clearest illustration of why a card is never good or bad in isolation.

Odric, Lunarch Marshal grants the team any keyword one creature already has. Keyword sources in **this** mainboard: flying, on Restoration Angel. That is it — one keyword, on one card, for `{3}{W}`. In the RW Hanweir build the same card sees **8 distinct keywords across 12 card copies** and is a repeating team-wide double-strike engine.

Cathars' Crusade is the mirror case in the other direction. Its trigger count here is the **highest of all four builds** — 12 creature cards plus seven token sources — and it was still cut, because all five rare slots are occupied by cards that Cathars' Crusade itself depends on to function. Cutting one to make room would shrink its own denominator. It is recorded in the excluded list as the strongest rare this deck cannot afford, and it is the first card to try if the rare cap is ever lifted.

### HOW THIS DECK ACTUALLY WINS

The failure mode of a grind deck is drawing twenty cards and never converting them into damage. Two cards prevent that:

- **Crusader of Odric** — *"power and toughness are each equal to the number of creatures you control."* This build makes the widest late board of the four, and unlike the Hanweir deck (where the width arrives mid-combat, after attackers are declared) the tokens here are on the battlefield before combat, so Crusader attacks at full size. A turn-7 board of six to eight creatures makes it a three-mana 6/6 to 8/8.
- **Wedding Festivity**, the back face of Wedding Announcement — *"Creatures you control get +1/+1"* — which turns a pile of 1/1 Human Soldiers into a real attack.

Notice that Wedding Announcement's front face is itself the deck in miniature: *"If you attacked with two or more creatures this turn, draw a card. Otherwise, create a 1/1 white Human creature token."* It draws when you are ahead and rebuilds when you are behind, for zero mana, every turn.

### MATCHUP NOTE — THE CLOCK IS THE LIABILITY

A turn-8 goldfish in a cube whose fastest decks kill on turn 5 is a real problem, and this build buys the most interaction of the four (6 slots, at the top of the midrange band) precisely because of it. It still has no lifegain and no sweeper — green and white have none affordable in this pool — so against a red-black vampire or red-green werewolf curve-out on the draw it can die holding a hand full of cards. That is the stated price of the card-advantage identity.

Against the cube's largest threat class it is better positioned than any of the other three: graveyard decks are 27.1% of the cube, and this is the only build with the tempo to spare for two Soul-Guide Gryffs out of the board.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:9  3:11  4:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.5: Metallic Mimic@0.8, Wedding Announcement // Wedding Festivity@0.8, Restoration Angel@0.9) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.6: Tireless Tracker@0.9, Ulvenwald Mysteries@0.7) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 34%  T2 92%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Clear Shot, Crusader of Odric, Avacynian Priest, Mentor of the Meek
  OK        single_large_threat: Valorous Stance, Clear Shot, Avacynian Priest, Restoration Angel
  CONCEDED  noncreature_permanents: The only maindeckable GW answers to an artifact or enchantment are Cathar Commando and Angelic Purge, both of which cost a permanent or a body to use. In a deck whose engine pieces (Ulvenwald Mysteries x2 and Wedding Announcement) are themselves noncreature permanents, the mainboard slots are better spent on the engine and the answers are boarded in -- 24 artifacts and 25 enchantments in the cube make this a known, boardable matchup rather than a maindeck tax.
  CONCEDED  stack: White and green have no counterspell in this cube at any rarity, so a stack answer is not purchasable at any slot cost. This build's structural response is that it is the deck most able to absorb a countered spell: it draws more cards than any of the other three, so a single lost spell is replaced rather than mourned.
  CONCEDED  graveyard: The cube is 27.1% graveyard-interactive, the largest single threat class. Soul-Guide Gryff at {4}{W} is the only GW answer and it is the one card this build could most plausibly maindeck given its turn-8 clock -- but a four-mana 2/2 flier competes directly with Restoration Angel and the second Mentor of the Meek for the same turn, and it is dead in the many matchups that do not use the graveyard. Two copies sit in the sideboard instead, the most of any of the four builds.
```

No WARN-tier flags were raised; `structural_responses` is empty.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | This is the build that most wants extra lands. Tireless Tracker converts every single land drop into a Clue ('Landfall -- Whenever a land you control enters, investigate'), so a flooded draw is a stream of cards rather than dead cardboard. Clues themselves are the mana sink -- '{2}, Sacrifice this token: Draw a card' -- and Ulvenwald Mysteries turns each sacrificed Clue into a Human Soldier token on top of the card. Join the Dance's {3}{G}{W} flashback and Avacynian Priest's repeatable {1} tap are two further sinks. |
| `screw` | mitigation | 11 of 23 nonland cards cost 2 or less and 2 more cost 1, so a two-land keep still curves Thraben Inspector into Gather the Townsfolk into Mentor of the Meek. The goldfish check reports 87% of 1000 opening hands keepable and 88% reaching three lands by turn 3. Evolving Wilds and 14 basics mean the colours are reliable even on a short land count; 15 of 17 lands enter untapped. |
| `decapitation` | mitigation | There is no single key card. The Clue engine is spread across four independent sources -- Thraben Inspector x2 (ETB), Tireless Tracker (landfall), Ulvenwald Mysteries x2 (death trigger) and Evolving Wilds (double landfall) -- and the card conversion across Mentor of the Meek x2 and Wedding Announcement. Killing Tireless Tracker on sight, the most likely target, leaves EIGHT other card-advantage copies live -- Thraben Inspector x2, Ulvenwald Mysteries x2, Mentor of the Meek x2, Wedding Announcement and Evolving Wilds. Valorous Stance x2 protects whichever piece actually matters in the moment, and Restoration Angel's flash blink can save a creature from targeted removal in response. |
| `gas-out` | mitigation | Gas-out is the failure mode this deck is specifically built to be immune to. Net-positive or self-replacing cards in the mainboard: Thraben Inspector x2 (Clue), Tireless Tracker (a Clue per land drop), Ulvenwald Mysteries x2 (a Clue per nontoken death, then a Human per Clue), Mentor of the Meek x2 (a card per small creature entering), Wedding Announcement (a card per attacking end step), Join the Dance x2 (a second casting via on-colour flashback), Torens (an extra body per creature spell) and Restoration Angel (re-uses an ETB). That is 12 of 23 nonland cards that replace themselves or better. |
| `raced` | accepted | A turn-8 clock in a cube whose fastest decks kill on turn 5 is a real liability, and this build accepts it. It buys the maximum interaction its band allows -- 6 slots, the most of the four builds -- plus Avacynian Priest x2 as repeatable blocker-tapping, but it has no lifegain and no sweeper (green and white have none affordable in this pool). Against the RB vampire or RG werewolf curve-out on the draw, it can simply die with a hand full of cards. Mitigating would mean trading Clue sources for cheap blockers and burn, which is to say building Deck A instead -- the card-advantage identity IS the acceptance of a slow clock. |
| `disruption-fizzle` | mitigation | There is no critical turn to disrupt: the plan is cumulative rather than a single combo turn, so interaction aimed at any one spell costs the opponent a card and delays the deck by roughly one draw step. Concretely, if the turn a Mentor of the Meek resolves is answered, the second copy does the same job, and Clues already on the battlefield are uncounterable stored cards that convert at instant speed for {2} whenever mana is open. Valorous Stance x2 at instant speed protects a creature mid-combat. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Ghoulish Procession, Siege Zombie, Crawl from the Cellar | The deterministic splash filter surfaced these three black Zombie-cluster cards; none reads Human, Clue or investigate, so no splash colour is taken. |
| Hinterland Logger // Timber Shredder, Villagers of Estwald // Howlpack of Estwald, Scorned Villager // Moonscarred Werewolf | Human on the front face only -- each transforms into a Werewolf and stops being Human, deleting itself as a numerator for Mayor of Avabruck, Hamlet Captain and Dawnhart Disciple. Worse here than in the aggro builds: a grind deck plays LONG games, so more upkeeps pass and the transform condition ('if no spells were cast last turn') is met more often. |
| Moonlight Hunt, Howlpack Resurgence, Shrill Howler // Howling Chorus, Pack Guardian | Every one reads Wolf or Werewolf; this build runs zero of both, so their text is blank. |
| Unnatural Growth, Cultivator Colossus, Bramble Wurm, Ghoultree, Wrenn and Seven, Sigarda, Host of Herons, Subjugator Angel, Bruna, the Fading Light, Vanquish the Horde | Five mana or more. A midrange deck can afford ONE top-end slot and it goes to Restoration Angel at four; these compete with the turn the Clue engine wants to be cashing in. Vanquish the Horde is additionally a SWEEPER that would destroy this deck's own accumulated board. |
| Splinterfright, Moldgraf Millipede, Spider Spawning | CORRECTED (the previous count wrongly applied the DECK's zero-self-mill property to Splinterfright, which brings its own: 'At the beginning of your upkeep, mill two cards'). The real objection is a BOOTSTRAP one, and it is sharper. Splinterfright's 'power and toughness are each equal to the number of creature cards in your graveyard' is checked continuously, including the moment it resolves. This mainboard has 12 creature cards and no self-mill from any OTHER card, so on the turn Splinterfright is cast the graveyard's creature-card count comes only from combat deaths -- 0 or 1 on turn 3, which makes it a 0/0 that dies to state-based actions before its first upkeep ever arrives. Its own mill-2 only operates on turns after it has survived, which requires the graveyard to already be non-empty. Moldgraf Millipede ('mill three cards, then put a +1/+1 counter on this creature for each creature card in your graveyard') has the same dependency without the death risk, and Spider Spawning at {4}{G} makes 1-3 chump blockers at that count. CUT on the bootstrap, not on a flat 1-3 figure. |
| Dauntless Cathar | Cut on its own text, NOT under a graveyard-counting reason (it counts nothing). It is a 3/1 Human for {2}{W} with '{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying'. THE COUNT THAT DECIDES IT: at power 3 it does NOT trigger Mentor of the Meek ('another creature you control with power 2 or less'), which is this deck's payoff and the reason 8 of its 12 creature cards were chosen. A 3/1 body that misses the deck's central trigger is worse here than Crusader of Odric at the same cost, whose power equals the board. |
| Stitcher's Graft, Demonmail Hauberk, Neglected Heirloom // Ashmouth Blade, Lunarch Mantle, Blazing Torch, Cobbled Wings, Butcher's Cleaver, Harvest Hand // Scrounged Scythe, Gryff's Boon, Strength of Arms | The whole Equipment and Voltron package. It is Deck B's pipeline, not this one: equipment concentrates value on ONE creature, whereas this build's thesis is accumulating many small bodies and many cards. Butcher's Cleaver and Harvest Hand in particular cost 6 and 5 total mana before they affect a board, which a deck already spending {2} per Clue cannot fund. |
| Cathars' Crusade | SEPARATED OUT AND COUNTED. 'Whenever a creature you control enters, put a +1/+1 counter on each creature you control' reads a count of creature-entering events. THE COUNT AGAINST THE FINISHED 40: 5 DISTINCT TOKEN-MAKING CARDS across 8 copies (the previous text said '7 token sources', which matched neither figure): Gather the Townsfolk x2 (2 tokens each), Join the Dance x2 (2 each, and again on flashback), Torens x1 (1 per creature spell, so up to 12 over a game), Wedding Announcement x1 (1 per non-attacking end step) and Ulvenwald Mysteries x2 (1 per Clue sacrificed). Plus the 12 creature cards themselves, each of which is its own creature-entering event. That is the highest trigger count of the four builds, and on a six-creature board a single Torens token is +6/+6 of permanent stats. THE COUNT FAVOURS INCLUSION. It is cut anyway on two costs, neither an adjective: (1) THE RARE CAP, stated precisely: 3 of the 5 spent rares -- Tireless Tracker, Torens and Wedding Announcement -- are themselves Clue or Human-token sources that Cathars' Crusade counts, so cutting one of THOSE to make room shrinks its own denominator. The other two, Metallic Mimic and Restoration Angel, generate neither Clues nor tokens, so that argument does NOT apply to them -- they would each be a genuine swap candidate for Cathars' Crusade on a straight power comparison. They are kept for a different stated reason: Metallic Mimic puts a PERMANENT counter on 10 of the 12 Human creature copies and on every token from all five token sources, which is a wider and cheaper effect than Crusade at {2} versus {3}{W}{W}; and Restoration Angel is the deck's only four-mana flash flier and its only way to re-use an ETB, in a build that otherwise has no evasive threat at all. (2) At {3}{W}{W} it would be the deck's only five-drop against 17 lands and a 4-MV ceiling, and it affects nothing on the turn it resolves, in the build whose stated weakness is already a slow clock. RECORDED as the strongest rare this deck cannot afford, and the first card to try if the cap is lifted. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 2.48 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  32.0%  prod  41.2%  gap  -9.2pp  [OK]
  W  demand  68.0%  prod  64.7%  gap  +3.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS -- Phase 5C check 3 against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Max copy count of any nonbasic is 2.
rares_mythics_max_1_each         PASS -- all five appear once.
rares_mythics_max_5_total        PASS -- exactly 5 across mainboard + sideboard: Tireless Tracker, Wedding Announcement, Torens Fist of the Angels, Metallic Mimic, Restoration Angel. The sideboard is entirely commons and uncommons.
all_cards_from_cube              PASS -- Phase 5C check 2, exact-name match against the working pool cache.
basics_unlimited                 Plains x9 and Forest x5 are exempt from the copy caps.
```
