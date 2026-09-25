---
deck_name: "rw-hanweir-humans"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RW"
format: "40-card"
built_at: "2026-08-26T20:29:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Mountain                                   
  x7   Plains                                     
  x1   Hanweir Battlements                        {T}: Add {C}. {R}, {T}: Target creature gains haste until end of turn. {3}{R}{R}, {T}: If you both own and control this land and a creature named Hanweir Garrison, exile them, then meld them into Hanweir, the Writhing Township.
  x2   Sacred Peaks                               ({T}: Add {R} or {W}.) This land enters tapped.
```

### CREATURES (13)

```
CMC  Card                                       Qty   Color Role                               Rar
  1  Thraben Inspector                          x2    W     threat/infrastructure              C
  1  Village Messenger // Moonrise Intruder     x2    C     threat                             C
  2  Avacynian Priest                           x2    W     interaction                        C
  3  Geier Reach Bandit // Vildin-Pack Alpha    x2    C     threat                             U
  3  Hanweir Garrison                           x1    R     payoff/engine                      R
  3  Thalia, Heretic Cathar                     x1    W     threat/interaction                 R
  4  Markov Waltzer                             x2    RW    threat/payoff                      U
  4  Odric, Lunarch Marshal                     x1    W     payoff                             R
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                                       Qty   Color Role                               Rar
  2  Abrade                                     x2    R     interaction                        U
  2  Gather the Townsfolk                       x2    W     enabler                            C
  3  Angelfire Ignition                         x1    RW    payoff                             R
  3  Rally the Peasants                         x2    W     payoff/finisher                    U
  3  Uncaged Fury                               x2    R     payoff/finisher                    U
```

### OTHER SPELLS (1)

```
CMC  Card                                       Qty   Color Role                               Rar
  4  Blood Mist                                 x1    R     payoff/engine                      U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                                                Rar
Cathar Commando                            x2    W     interaction -- vs the cube's 24 artifacts / 25 enchantments: '{1}, Sacrifice this creature: Destroy target artifact or enchantment' at flash speed, on a Human body C
Bound by Moonsilver                        x1    W     interaction -- vs a large blocker and vs the cube's many transform creatures: 'Enchanted creature can't attack, block, or transform' C
Fiery Temper                               x2    R     interaction/reach -- vs decks that stabilise the ground: 'deals 3 damage to any target' can go to the face, closing the last points when the attack is walled U
Savage Alliance                            x1    R     interaction -- vs opposing go-wide token decks: escalate mode '1 damage to each creature target opponent controls' sweeps the 1/1s that would otherwise block every attacker U
Slayer of the Wicked                       x2    W     interaction -- vs Vampire/Werewolf/Zombie decks: 51 of the cube's creatures carry one of those three types U
Alchemist's Greeting                       x1    R     interaction -- vs a single large blocker: 'deals 4 damage to target creature' unconditionally, above Abrade's 3-damage ceiling C
Soul-Guide Gryff                           x1    W     interaction -- vs graveyard decks (75 cards, 27.1% density -- the cube's largest threat class): 'exile up to one target card from a graveyard' on a flying body C
```

## ANALYSIS

### DECK IDENTITY

An RW attack-trigger aggro deck. Hanweir Garrison is the engine: 'Whenever this creature attacks, create two 1/1 red Human creature tokens that are tapped and attacking' manufactures two extra attackers every single combat, and because the tokens arrive already attacking they contribute damage the turn they are made. Everything else exists to make the attack happen earlier and hit harder -- Village Messenger and Geier Reach Bandit attack the turn they land, Hanweir Battlements grants haste to anything else, Avacynian Priest and Thalia keep blockers off the table, and the damage is converted by two independent double-strike sources (Uncaged Fury, and Blood Mist which repeats every combat) plus Rally the Peasants, whose {2}{R} flashback is fully on-colour here. Odric, Lunarch Marshal is the multiplier that ties it together: with Blood Mist he grants double strike to the ENTIRE attacking board every turn. The Hanweir Battlements meld into Hanweir, the Writhing Township is real upside but is deliberately not the plan.

### THE ATTACK TRIGGER IS THE ENGINE, AND IT BEATS REMOVAL

Hanweir Garrison reads *"Whenever this creature attacks, create two 1/1 red Human creature tokens that are tapped and attacking."* Two details do the work:

1. **The tokens arrive already attacking.** They are not a board you build for next turn — they are damage this turn. A 2/3 body attacking alone deals 2; the same attack with Garrison deals 4 and leaves nothing tapped down that was not already committed.
2. **The trigger resolves before removal can matter.** Once Garrison has attacked, killing it in response to the trigger still leaves both tokens on the battlefield. The opponent has to answer it on the turn it lands, before it ever attacks, to get full value — which means Garrison effectively demands to be killed at sorcery speed on their turn.

Over three combats that is six extra Human bodies from one card, from an empty hand.

### THE BLOOD MIST + ODRIC LOOP

This is the deck's real ceiling and it is worth stating precisely.

- Blood Mist: *"At the beginning of combat on your turn, target creature you control gains double strike until end of turn."*
- Odric, Lunarch Marshal: *"At the beginning of each combat, creatures you control gain first strike until end of turn if a creature you control has first strike. The same is true for flying, deathtouch, double strike, haste, hexproof, indestructible, lifelink, menace, reach, skulk, trample, and vigilance."*

Both trigger at the beginning of combat, and both are yours — so **you choose the order they go on the stack**, which means you choose the order they resolve. Put Blood Mist to resolve first: it grants double strike to one creature. Odric then resolves, sees that a creature you control has double strike, and grants double strike to **every** creature you control. Every turn. For free.

Then Hanweir Garrison attacks into that and adds two more bodies. Rally the Peasants (*"+2/+0"*, instant) on a doubled board is +4 per creature.

Odric's keyword pool here is the densest of the four decks — **8 distinct keywords across 12 card copies**:

| Keyword | Sources |
|---|---|
| double strike | Uncaged Fury ×2, Blood Mist |
| haste | Village Messenger ×2, Geier Reach Bandit ×2, Markov Waltzer ×2, Angelfire Ignition, Hanweir Battlements' ability |
| flying | Markov Waltzer ×2 |
| first strike | Thalia, Heretic Cathar |
| vigilance, trample, lifelink, indestructible | Angelfire Ignition (all four at once) |

Angelfire Ignition on any creature with Odric out is a team-wide vigilance-trample-lifelink-indestructible-haste turn.

Worth noting: Odric was **dropped from this pipeline's machine seed** by the threat-band cap of 25, so no sketcher ever saw him. He was recovered at FILL, which draws from the whole colour-usable pool rather than the seeded slice.

### THE COST OF THE NAMESAKE

Hanweir Battlements is the second half of the meld, and it is expensive in two currencies:

- It is a **rare**, so with Hanweir Garrison it consumes 2 of the 5 permitted rare/mythic slots before any other card is chosen.
- It taps for **{C} only**. In a 17-land deck running `{1}{R}{W}` (Angelfire Ignition) and `{2}{R}{W}` (Markov Waltzer), one land that produces no coloured mana is a real tax.

It earns the slot anyway on its second line — *"{R}, {T}: Target creature gains haste until end of turn"* — which turns any freshly-cast creature into an immediate attacker. In a deck whose engine is attack triggers, a repeatable haste-granting land is closer to a spell than to a land.

The meld itself (`{3}{R}{R}, {T}`, needing both halves) produces **Hanweir, the Writhing Township**: *"Trample, haste / Whenever Hanweir attacks, create two 3/2 colorless Eldrazi Horror creature tokens that are tapped and attacking."* That is upside, not the plan — it requires drawing two specific single copies and five mana. Note that Hanweir, the Writhing Township is deliberately **not** one of the 40 cards: it arrives from outside the game via the meld, so including it would be illegal and would spend a sixth rare slot on a card that is never drawn.

### RED IS WHERE THIS ARCHETYPE'S FLASHBACK LIVES

A quiet but decisive reason this pipeline is RW and not GW: two of its best cards have flashback costs that are dead in green.

- Rally the Peasants: *"Flashback {2}{R}"* — in the GW token build this is uncastable, and the card is a one-shot. Here it is two finishers.
- Angelfire Ignition: *"Flashback {2}{R}{W}"* — only castable in these exact colours.

That is four castings of two cards, which for an aggro deck that empties its hand is the whole answer to running out of gas.

### MATCHUP NOTE

This deck has the highest turn-1 play rate of the four builds at **57%** (goldfish, 1000 hands) — Village Messenger has haste and attacks the turn it lands. Against another aggro deck it is usually the beatdown. Where it genuinely struggles is a deck that both blocks profitably and gains life: the mainboard has four interaction slots and no repeatable lifegain, so a stabilised opponent at a healthy life total is a game this deck was never built to win.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:6  3:9  4:4
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.2: Hanweir Garrison@0.7, Odric, Lunarch Marshal@0.7, Blood Mist@0.8) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.6: Hanweir Battlements@0.6) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 93%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Abrade, Odric, Lunarch Marshal, Blood Mist, Uncaged Fury, Avacynian Priest
  OK        single_large_threat: Abrade, Avacynian Priest, Thalia, Heretic Cathar
  OK        noncreature_permanents: Abrade
  CONCEDED  stack: Red and white have no counterspell in this cube at any rarity, so a stack answer cannot be bought at any slot cost. The deck's response is that its damage is spread across many small attackers plus two independent double-strike sources and two Rally the Peasants, so no single countered spell is the plan.
  CONCEDED  graveyard: The cube is 27.1% graveyard-interactive (75 cards, its largest threat class), but the only RW maindeckable answer is Soul-Guide Gryff at {4}{W} -- a four-mana 2/2 that does not attack profitably and sits a full mana above this deck's 4-MV ceiling on a turn-5 clock. It is boarded in instead.
```

No WARN-tier flags were raised; `structural_responses` is empty.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Hanweir Battlements is itself a mana sink -- '{R}, {T}: Target creature gains haste until end of turn' -- and at '{3}{R}{R}, {T}' it melds with Hanweir Garrison, which is a five-mana payoff for exactly the flooded board state. Rally the Peasants' flashback {2}{R} and Angelfire Ignition's flashback {2}{R}{W} are two more castings that cost only mana, not cards. Thraben Inspector x2 leave Clues that convert surplus mana into cards. |
| `screw` | mitigation | 10 of 23 nonland cards cost 2 or less and 4 of those cost 1, so a two-land hand still curves Village Messenger into Gather the Townsfolk into Hanweir Garrison. 15 of 17 lands enter untapped. The goldfish check reports 86% of 1000 opening hands keepable, 88% reaching three lands by turn 3, and -- the number that matters most for this build -- a 57% turn-1 play rate, the highest of the four decks, because Village Messenger has haste and attacks the turn it lands. |
| `decapitation` | mitigation | Hanweir Garrison is a single copy and IS the named engine, so this is the deck's sharpest risk and it is answered structurally rather than by protecting the card. First, the tokens are made by an ATTACK TRIGGER, so removal in response to the trigger still leaves both tokens on the battlefield -- the opponent must kill it before it ever attacks to get full value. Second, and more importantly, the kill does not require Garrison: Odric plus Blood Mist grants the whole board double strike every combat regardless of what made the board, and Rally the Peasants x2 plus Uncaged Fury x2 convert any set of attackers into lethal. The deck's 8 other attacking bodies plus Gather the Townsfolk x2 supply that board. Garrison accelerates the clock; it is not a prerequisite for it. |
| `gas-out` | mitigation | The engine refuels itself without drawing cards: Hanweir Garrison generates two new bodies from an empty hand every combat, so a topdecking Garrison player is still adding two creatures per turn. Beyond that, Thraben Inspector x2 replace themselves via Clues, and Rally the Peasants x2 and Angelfire Ignition each get cast twice via flashback -- and unlike the GW builds, both flashback costs ({2}{R} and {2}{R}{W}) are fully on-colour here, which is the specific reason this pipeline was built in red rather than green. |
| `raced` | accepted | This deck IS one of the fastest clocks in the format -- 57% turn-1 play rate, a turn-5 goldfish, and haste on four bodies -- so in most races it is the aggressor. Where it genuinely loses is to a deck that both blocks profitably and gains life, because the mainboard has no REPEATABLE lifegain and only 4 interaction slots. (Correction: the deck is not literally lifegain-free -- Angelfire Ignition grants 'vigilance, trample, lifelink, indestructible, and haste until end of turn', so one attack per casting does gain life. It is a single copy, one turn, on one creature, which is why it does not change the race maths.). Mitigating would mean maindecking the lifelink sources (Butcher's Cleaver, Lunarch Veteran) or more removal, and both cost attackers or haste enablers -- which is to say they cost the turn-5 clock that is the entire reason to build this deck rather than Deck B. |
| `disruption-fizzle` | mitigation | The critical turn is an alpha strike, and its converters are deliberately split across permanents and instants. Uncaged Fury x2 and Rally the Peasants x2 are INSTANTS, cast after blockers are declared when the opponent has already committed; Blood Mist and Odric are PERMANENTS whose triggers fire from the battlefield and cannot be countered at all. If the Rally turn meets a removal spell, the response is that Hanweir Garrison has already put two tokens onto the battlefield during the attack trigger and Avacynian Priest has already tapped the relevant blocker at sorcery speed the turn before. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Hanweir, the Writhing Township | NOT A DECK SLOT. This is the MELD result of Hanweir Garrison + Hanweir Battlements ('exile them, then meld them into Hanweir, the Writhing Township'). It arrives from outside the game via the meld, so putting it in the 40 would both be illegal and waste a card slot -- and it is a rare, which would consume a third of the 5-rare budget for a card that is never drawn. |
| Ghoulish Procession, Siege Zombie, Edgar Markov | The deterministic splash filter surfaced these; Edgar Markov is a THREE-colour {3}{R}{W}{B} mythic whose eminence only reads Vampire spells, and the other two are mono-black Zombie cards. This build runs zero Vampires and zero Zombies, so no splash is taken. |
| Falkenrath Gorger, Voldaren Epicure, Blood Petal Celebrant, Furyblade Vampire, Bloodmad Vampire, Stromkirk Occultist, Voldaren Ambusher, Neonate's Rush | Red's Vampire package. Every one reads Vampire, Blood token or madness -- Voldaren Ambusher deals 'X damage... where X is the number of Vampires you control', Neonate's Rush 'costs {1} less if you control a Vampire'. This is a HUMAN deck; the Vampire count is 0, so these are a different archetype sharing a colour. |
| Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Smoldering Werewolf // Erupting Dreadwolf, Conduit of Storms // Conduit of Emrakul, Kruin Outlaw // Terror of Kruin Pass | CORRECTED DENOMINATOR (the original reason claimed a Wolf/Werewolf count of 0, which was FALSE). The finished mainboard contains 4 Werewolf-typed creature copies: Village Messenger // Moonrise Intruder x2 and Geier Reach Bandit // Vildin-Pack Alpha x2, both 'Creature - Human Werewolf'. Re-derived against that true count of 4 of 13 creature copies: Runebound Wolf '{3}{R}, {T}: deals damage equal to the number of Wolves and Werewolves you control' is 1-2 damage for a four-mana activation; Ulrich's Kindred's only ability costs {3}{G}, which this RW deck cannot pay; Smoldering Werewolf needs {4}{R}{R} to transform; Kruin Outlaw's 'Werewolves you control have menace' sits on a back face and it is a RARE against a cap already spent; Conduit of Storms produces mana on attack rather than damage. Only Hungry Ridgewolf ('As long as you control another Wolf or Werewolf, this creature gets +1/+0 and has trample') is genuinely live at 4/13 -- and it is cut on the ARCHETYPE constraint rather than the count: it is not a Human, and the user's binding constraint for this build is the Humans tribe. |
| Bruna, the Fading Light, Subjugator Angel, Cathars' Crusade, Vanquish the Horde, Archangel Avacyn // Avacyn, the Purifier, Bedlam Reveler, Brisela, Voice of Nightmares, Reforge the Soul, Decimator of the Provinces, It of the Horrid Swarm, Wretched Gryff, Distended Mindbender, Elder Deep-Fiend | Five mana or more, or emerge. This build's clock is turn 5 and its curve tops at 4; Vanquish the Horde and Archangel Avacyn are additionally SWEEPERS, which would destroy the token board the deck spends every combat building. |
| Lingering Souls, Dauntless Cathar, Mausoleum Guard, Cathar's Call, Wedding Announcement // Wedding Festivity, Niblis of the Urn, Spectral Shepherd, Apothecary Geist, Drogskol Shieldmate, Twinblade Geist // Twinblade Invocation | White's SPIRIT package and its slow token engines. Spirits are not Humans, so they are blank for Butcher's Cleaver, Harvest Hand, Metallic Mimic and the Human-token plan; and Wedding Announcement/Cathar's Call make one token per END STEP where Hanweir Garrison makes two per ATTACK. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.24 adj [MV 2.57 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  50.0%  prod  52.9%  gap  -2.9pp  [OK]
  W  demand  50.0%  prod  52.9%  gap  -2.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS -- Phase 5C check 3 against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Max copy count of any nonbasic is 2.
rares_mythics_max_1_each         PASS -- all five appear once.
rares_mythics_max_5_total        PASS -- exactly 5 across mainboard + sideboard: Hanweir Garrison, Hanweir Battlements (a LAND, and it still counts against the cap), Odric Lunarch Marshal, Angelfire Ignition, Thalia Heretic Cathar. The sideboard is entirely commons and uncommons.
all_cards_from_cube              PASS -- Phase 5C check 2, exact-name match against the working pool cache.
basics_unlimited                 Plains x7 and Mountain x7 are exempt from the copy caps.
meld_card_excluded               Hanweir, the Writhing Township is deliberately NOT in the 40. It is the meld result of Hanweir Garrison + Hanweir Battlements and arrives from outside the game; including it would be illegal and would spend a sixth rare slot on a card that is never drawn.
```
