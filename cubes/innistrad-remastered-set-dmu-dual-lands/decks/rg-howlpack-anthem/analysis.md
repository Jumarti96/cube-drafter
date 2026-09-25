---
deck_name: "rg-howlpack-anthem"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RG"
format: "40-card"
built_at: "2026-08-26T19:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x8   Forest                                           basic
  x6   Mountain                                         basic
  x1   Rockfall Vale                                    RG dual, untapped from your 3rd land (rare - 5th rare slot)
  x2   Wooded Ridgeline                                 RG dual, always enters tapped (common)
```

### CREATURES (15)
```
CMC  Card                                             Qty   Color  Role                           Rar
1    Village Messenger // Moonrise Intruder           x2    R      1-drop haste, counts           C
1    Young Wolf                                       x2    G      Undying Wolf body              C
2    Duskwatch Recruiter // Krallenhorde Howler       x2    G      Dig engine / flood outlet      U
2    Hungry Ridgewolf                                 x2    R      Self-anthem trampler           C
2    Mayor of Avabruck // Howlpack Alpha              x1    G      Anthem + token faucet          R
2    Runebound Wolf                                   x2    R      Count-to-face reach            U
3    Geier Reach Bandit // Vildin-Pack Alpha          x2    R      3-power haste Werewolf         U
4    Huntmaster of the Fells // Ravager of the Fells  x1    RG     Two bodies + race swing        R
4    Pack Guardian                                    x1    G      Flash 2-for-1, land sink       U
```

### INSTANTS & SORCERIES (3)
```
CMC  Card                                             Qty   Color  Role                           Rar
2    Moonlight Hunt                                   x2    G      Count-scaled removal           U
3    Savage Alliance                                  x1    R      Wide-board sweep / trample     U
```

### OTHER SPELLS (5)
```
CMC  Card                                             Qty   Color  Role                           Rar
3    Howlpack Resurgence                              x2    G      Primary anthem (+1/+1, trample U
3    Stensia Masquerade                               x1    R      Board-wide first strike        U
4    Arlinn Kord // Arlinn, Embraced by the Moon      x1    RG     Wolf source + mass trample     M
4    Garruk Relentless // Garruk, the Veil-Cursed     x1    G      Repeatable Wolf tokens         M
```

## SIDEBOARD (10)
```
Card                                             Qty   Color  Role / When to board in
Abrade                                           x2    R      [U] Against artifact decks. 24 artifacts in the cube and Abrade is the only card castable in R or G that answers one; the 3-damage mode keeps it live otherwise.
Fiery Temper                                     x2    R      [U] Against fliers and low-toughness threats - 'deals 3 damage to any target' at instant speed reaches the 58-card evasion class the ground board cannot block. Its Madness {R} is also what makes Lightning Axe's discard a free spell instead of a card lost.
Lightning Axe                                    x2    R      [U] Against toughness 4-5 blockers that Abrade's 3 damage cannot kill and the Wolf board cannot attack through. Board it in alongside Fiery Temper so the additional discard cost casts a spell rather than throwing one away.
Ambush Viper                                     x2    G      [C] Against big-creature midrange; flash deathtouch ambushes an attacker or a freshly landed fatty. Cost: it is a Snake, so each copy shrinks every count payoff's denominator by one.
Hanweir Watchkeep // Bane of Hanweir             x2    R      [C] Against faster aggro - a 1/5 Defender that blocks all day and is still a Werewolf the anthems count.
```

## ANALYSIS

### DECK IDENTITY

A red-green Wolf-count aggro deck. Fifteen of its twenty-three nonland cards carry the Wolf or Werewolf creature type on the printed line, and four more cards manufacture 2/2 green Wolf tokens, so the board is almost entirely made of the exact creature type its payoffs read. Those payoffs - Howlpack Resurgence, Stensia Masquerade, the back face of Mayor of Avabruck and Runebound Wolf - read 'Wolf or Werewolf' or simply 'attacking creatures', never 'transformed'. That is the whole point: every flip Werewolf in this pool transforms only 'if no spells were cast last turn', a clause either player can switch off, so a competitive build must not depend on it. Transforming is upside, not the plan. Of the four Wolf-token sources only Garruk's '0: Create a 2/2 green Wolf creature token' is unconditionally repeatable - Arlinn's token ability transforms her as part of the ability, and Howlpack Alpha's end-step token and Huntmaster's re-trigger are both transform-gated.

### THE CLAUSE THIS DECK REFUSES TO BUILD AROUND

Every flip Werewolf in this pool carries the same line: *At the beginning of each upkeep, if no
spells were cast last turn, transform this creature.* That clause counts spells cast by **either
player**, and the back faces carry the mirror clause that flips them back when a player casts two or
more. In a competitive 40-card pod, an opponent who deploys one creature a turn holds your entire
team on its front face for the whole game, at no cost to them.

So this build treats the transform as upside and never as a step in the plan. Of the 23 nonland
cards, the ones that actually convert board width into lethal damage all read a creature **type**,
not a face:

| Payoff | Text it reads | Transform needed? |
|---|---|---|
| Howlpack Resurgence x2 | "Each creature you control that's a Wolf or a Werewolf gets +1/+1 and has trample" | No |
| Stensia Masquerade | "Attacking creatures you control have first strike" | No |
| Runebound Wolf x2 | "damage equal to the number of Wolves and Werewolves you control" | No |
| Moonlight Hunt x2 | "Each creature you control that's a Wolf or a Werewolf deals damage equal to its power" | No |
| Mayor of Avabruck | back-face anthem + end-step Wolf token | Yes |

Only one of the five is transform-gated, and it is the one card whose **front** face is also live
(it pumps 7 of the 23 nonland cards, since every Werewolf here is a Human before it flips).

### THE DENOMINATOR

Fifteen of the 23 nonland cards carry the Wolf or Werewolf type on the printed line. Four more make
2/2 green Wolf tokens. That 15 is the number every payoff above multiplies, and it is why the
Threats/Payoffs slot sits at 78% of nonlands rather than the 45-55% the aggro band suggests: in this
pipeline a body and a payoff are the *same slot*. Trimming creatures to hit the band would shrink
the multiplicand.

### THE COMBAT MATH THAT WINS THE GAME

The reason Stensia Masquerade was worth overturning a bad Phase 5A cut for is what it does *stacked*
with the anthem. A turn-5 board of four Wolf bodies:

- Base: four 2/2s attacking into 2/2 blockers - every attack is a mutual trade.
- With Howlpack Resurgence: four 3/3 **tramplers** - blockers eat 2 and 1 goes through each.
- With Resurgence **and** Masquerade: four 3/3 first-striking tramplers - the blockers die before
  dealing damage, you lose **nothing**, and the trample damage still goes through.

That is the difference between an attack that costs you your board and an attack that costs the
opponent theirs, from a single {2}{R} enchantment. And in a cube whose
`threat_profile.enchantment_answers` is **2 cards out of 300** (Cathar Commando and Hopeful
Initiate, both white), both of the deck's enchantment anthems are functionally unanswerable once
resolved.

### MANA SINKS ARE THE FLOOD PLAN

At 17 lands and a 2.44 average mana value this deck floods. Four repeatable activated abilities eat
the surplus without a card - Duskwatch Recruiter x2 at {2}{G} and Runebound Wolf x2 at {3}{R} - and
Pack Guardian converts a flooded land *directly into a term in the count*: "you may discard a land
card. If you do, create a 2/2 green Wolf creature token." It is the only land-to-Wolf conversion in
the pool.

### WHAT THE COLOURS CANNOT DO

Verified against oracle text rather than assumed. Red and green in this cube contain:

- **zero** counterspells,
- **zero** enchantment removal (the cube's only two answers are white),
- **zero** graveyard hate (the cube's only two are white and black), against a pool that is 27%
  graveyard cards,
- exactly **one** artifact answer, Abrade, which is why it is in the sideboard at two copies.

Three of the five coverage classes are therefore conceded on the record rather than papered over.
The deck's answer to all three is the clock: 57% of opening hands make a turn-1 play, 96% make a
turn-2 play, and the thesis kill is turn 6.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:6  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.1: Mayor of Avabruck // Howlpack Alpha@0.7, Arlinn Kord // Arlinn, Embraced by the Moon@0.8, Runebound Wolf@0.8, Runebound Wolf@0.8) → p=0.88 (need ≥ 0.75)
  PASS  wolf_body: 15 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Savage Alliance
  OK        single_large_threat: Moonlight Hunt, Garruk Relentless // Garruk, the Veil-Cursed
  CONCEDED  noncreature_permanents: Verified against oracle text by grepping the full pool: Abrade is the only card castable in R or G that destroys or exiles an artifact, and R and G contain zero enchantment answers (the cube's only two, Cathar Commando and Hopeful Initiate, are white). Abrade sits in the sideboard; the mainboard spends the slot on the turn-6 clock instead.
  CONCEDED  stack: Red and green in this pool contain no counterspells or stack interaction of any kind. The deck's answer is speed - a board that demands an answer by turn 4 and kills on turn 6.
  CONCEDED  graveyard: Verified against oracle text: the cube's only graveyard hate is Soul-Guide Gryff (white) and Invasion of Innistrad (black); neither is castable in R or G. Against the cube's 75 graveyard cards this deck races rather than interacts.
```

- No WARN flags to respond to: curve, assembly, goldfish and coverage all returned PASS on the final list (MV distribution 1:4 2:9 3:6 4:4 against the Aggro bands of MV1 >= 15%, MV2 >= 25%, MV4+ <= 20%; payoff p=0.88 and wolf_body p=1.00 against the 0.75 assembly threshold; 86% keepable hands, 57% turn-1 play rate).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Four repeatable activated abilities convert surplus mana with no spell cast: Duskwatch Recruiter x2 ('{2}{G}: Look at the top three cards of your library. You may reveal a creature card from among them and put it into your hand') and Runebound Wolf x2 ('{3}{R}, {T}: This creature deals damage equal to the number of Wolves and Werewolves you control to target opponent'). Pack Guardian additionally converts a flooded land directly into a body - 'you may discard a land card. If you do, create a 2/2 green Wolf creature token' - the only land-to-Wolf conversion in the pool, and it adds a term to the very count the payoffs multiply. |
| screw | mitigation | 14 of the 23 nonland cards cost 2 or less and the top of the curve is 4, so a two-land hand casts real spells on turns 1, 2 and 3. The goldfish sim over 1000 hands returns 87% keepable (threshold 80%) and a 96% turn-2 play rate. Duskwatch Recruiter digs three deep for a creature once a third land arrives. |
| decapitation | mitigation | The key effect is a standing anthem and the deck runs three, plus a planeswalker: Howlpack Resurgence x2 ('Each creature you control that's a Wolf or a Werewolf gets +1/+1 and has trample') and Stensia Masquerade ('Attacking creatures you control have first strike'), backed by Arlinn's back-face '+1: Creatures you control get +1/+1 and gain trample until end of turn'. The enchantment effects are close to unanswerable in this cube: dossier.threat_profile.enchantment_answers is 2 cards in 300, both white. |
| gas-out | mitigation | Duskwatch Recruiter x2 is the unconditional refill - every spare 3 mana buys a creature card off the top three. Garruk's back-face '-1: Sacrifice a creature. If you do, search your library for a creature card, reveal it, put it into your hand' converts a spent body into a fresh threat, and its sacrifice cost is fed by 15 printed Wolf/Werewolf bodies plus tokens. Two further refuels exist but are transform-gated and are named as such rather than counted: Howlpack Alpha's end-step Wolf token and Huntmaster's re-trigger on transforming back. |
| raced | mitigation | This deck is the fast clock: 56% of opening hands make a turn-1 play, 96% a turn-2 play, and the thesis kill is turn 6. Where it needs to interact it does so on-plan - Moonlight Hunt x2 kills a blocker or a racing attacker at instant speed using the board it already has, Savage Alliance sweeps 1-toughness attackers, and Huntmaster's 'you gain 2 life' plus Ravager's '2 damage to target opponent' swing the race by four points on one card. |
| disruption-fizzle | mitigation | The critical turn is the alpha strike, and the card that makes it lethal has Flash: 'Flash / Each creature you control that's a Wolf or a Werewolf gets +1/+1 and has trample'. Howlpack Resurgence can be held until after blockers are declared or after the opponent has spent removal, so the key turn is not telegraphed. Young Wolf's undying and the four token engines mean a single removal spell mid-combat costs the deck one body, not the attack. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Ghoulish Procession, Siege Zombie, Voldaren Bloodcaster // Bloodbat Summoner | The three qualifying black splash candidates. All make Zombie/Bat bodies rather than Wolves, so they add nothing to the Wolf count, while a third colour would take land slots away from the {R}{R} and {G}{G} costs the shell already strains to support. |
| Dawnhart Disciple, Hamlet Captain, Intrepid Provisioner | Human-tribal pumps ('other Humans you control get +1/+1'). The deck's own Werewolf front faces are Humans, so these are live - but every anthem and count payoff in the locked pipeline reads Wolf/Werewolf, and a Human pump stops working the moment a Werewolf transforms. |
| Lupine Prototype | A 5/5 Wolf for {2}, but 'This creature can't attack or block unless a player has no cards in hand' - this deck has no wheel or mass-discard effect, so it is a Wolf-typed body that never attacks or blocks. |
| Chandra, Dressed to Kill, Traverse the Ulvenwald, Eldritch Evolution, Tireless Tracker, Vexing Devil, Zealous Conscripts, Helvault, Reforge the Soul, Tamiyo's Journal, Stitcher's Graft, Wrenn and Seven, Unnatural Growth, Mirrorwing Dragon, Cultivator Colossus, Decimator of the Provinces, Bedlam Reveler, Distended Mindbender, Elder Deep-Fiend | Rares and mythics that are individually strong but off the Wolf-count plan. The pool rules cap the deck at 5 rare/mythic cards across mainboard and sideboard, and that budget is spoken for by the Wolf payoffs themselves. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.09 adj [MV 2.43 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  53.8%  prod  64.7%  gap -10.9pp  [OK]
  R  demand  46.2%  prod  52.9%  gap  -6.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] commons_uncommons_max_2: PASS - checked every distinct name against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Highest count of any common/uncommon is 2.
  [PASS] rares_mythics_max_1: PASS - all five rare/mythic cards appear exactly once.
  [PASS] rare_mythic_total_max_5: PASS - exactly 5 across mainboard and sideboard: Mayor of Avabruck // Howlpack Alpha, Huntmaster of the Fells // Ravager of the Fells, Arlinn Kord // Arlinn, Embraced by the Moon, Garruk Relentless // Garruk, the Veil-Cursed, and Rockfall Vale. All five are mainboard; the sideboard contains zero rares by necessity.
  [PASS] basics_unlimited: PASS - Forest x8 and Mountain x6 are format-supplied and exempt.
  [PASS] all_cards_in_pool: PASS - every name matched the working pool cache by exact string.
  [PASS] colour_usability: PASS - effective_cost.best_mode returned a usable mode in [R,G] for every nonland card. Garruk Relentless // Garruk, the Veil-Cursed has printed color_identity [B,G] but mana_cost {3}{G} and no black mana requirement on either face, so it is a core-colour card, not a splash.
  [PASS] splash_cap: PASS - zero cards require the black splash; splash_colors is set but unused.
```