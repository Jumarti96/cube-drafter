---
deck_name: "wb-drain-aristocrats"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-14T03:13:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x1 Caves of Koilos  untapped dual, pays 1 life
  x2 Sunlit Marsh     enters tapped
  x5 Plains           basic
  x8 Swamp            basic
```

### CREATURES (19)

```
CMC  Card                           Qty  Color  Role                Rar
  1  Battlefly Swarm                x2   B      Enabler/Fodder      C
  1  Cult Conscript                 x2   B      Enabler/Fodder      U
  2  Benalish Sleeper               x1   W      Threat/Interaction  C
  2  Elas il-Kor, Sadistic Pilgrim  x2   WB     Payload/Payoff      U
  2  Knight of Dusk's Shadow        x1   B      Threat              U
  2  Phyrexian Vivisector           x2   B      Payload/Payoff      C
  2  Resolute Reinforcements        x2   W      Enabler/Fodder      U
  2  Splatter Goblin                x1   B      Enabler/Fodder      C
  3  Aron, Benalia's Ruin           x2   WB     Engine/Outlet       U
  3  Braids, Arisen Nightmare       x1   B      Engine/Outlet       R
  4  Phyrexian Warhorse             x2   B      Engine/Outlet       C
  4  Ratadrabik of Urborg           x1   WB     Payload/Payoff      R
```

### INSTANTS & SORCERIES (4)

```
CMC  Card            Qty  Color  Role                    Rar
  1  Bone Splinters  x2   B      Interaction/Disruption  C
  1  Cut Down        x2   B      Interaction/Disruption  U
```

### OTHER SPELLS (1)

```
CMC  Card              Qty  Color  Role                    Rar
  3  Citizen's Arrest  x1   W      Interaction/Disruption  C
```

## SIDEBOARD (10)

```
Card                       Qty  Color  Role / When to board in
Destroy Evil               x2   W      Interaction/Disruption — vs. the cube's 18 enchantments (Citizen's Arrest, Leyline Binding, Temporary Lockdown, the Sagas) and vs. toughness-4-or-greater creatures that Cut Down's 'total power and toughness 5 or less' clause cannot kill.  [C]
Phyrexian Missionary       x1   W      Infrastructure/Threat — vs. removal-heavy and grindy decks: kicked for {1}{B} it returns a creature card from the graveyard to hand, the deck's only rebuy other than Cult Conscript's gated recursion; the 2/3 lifelink body also blocks the 20 non-flying members of the evasion class.  [U]
Citizen's Arrest           x1   W      Interaction/Disruption — vs. decks with a single unanswerable bomb creature or a planeswalker; the second copy of the only unconditional exile in the colours.  [C]
Extinguish the Light       x1   B      Interaction/Disruption — vs. large creatures and planeswalkers — 'Destroy target creature or planeswalker' at instant speed, with no size clause.  [C]
Griffin Protector          x2   W      Interaction/Threat — vs. the flying half of the cube's 51-card evasion class (31 of the 51 have flying). A 2/3 flier that blocks them, and 'Whenever another creature you control enters, this creature gets +1/+1 until end of turn' scales with this deck's 22 bodies.  [C]
Prayer of Binding          x2   W      Interaction/Disruption — vs. the cube's 15 artifacts and its planeswalkers — 'exile up to one target nonland permanent an opponent controls' is the only nonland-permanent catch-all available to W/B here, and it has flash.  [U]
Sheoldred, the Apocalypse  x1   B      Standalone Threat — vs. grindy/controlling decks: a 4/5 deathtouch that gains 2 life per card you draw and drains 2 per card an opponent draws, converting a long game the aggro plan would lose.  [M]
```

## ANALYSIS

### DECK IDENTITY

A B/W go-wide aristocrats deck built on the lowest-curve interpretation of the archetype. Cheap multi-body creatures and recursive fodder feed two payoffs: Elas il-Kor, Sadistic Pilgrim turns each death into uninteractive life loss, and Aron, Benalia's Ruin converts a death into a permanent +1/+1 counter on the whole board. Phyrexian Warhorse supplies the deaths on demand at {1} with no tap symbol, and Bone Splinters and Braids, Arisen Nightmare supply deaths that need no outlet at all. The deck wins by attacking with a pumped board around turn 6, with drain as the reach that closes through a stall.


### THE OUTLET PROBLEM, AND WHY PHYREXIAN WARHORSE IS THE DECK

Dominaria United is a set with real death payoffs and almost no free sacrifice outlets. The cube dossier's structural census counts 10 sacrifice outlets across all five colours, of which exactly 1 is free. Reading the oracle text of every outlet in W/B narrows it further:

| Outlet | Cost | Per-turn ceiling |
|---|---|---|
| Aron, Benalia's Ruin | `{W}{B}, {T}, Sacrifice another creature` | 1 (tap symbol) |
| Phyrexian Warhorse | `{1}, Sacrifice another creature` | **unlimited** |
| Gibbering Barricade | `{2}{B}, Sacrifice a creature` | unlimited, but 3 mana each |
| Shadow-Rite Priest | `{3}{B}{B}, {T}, Sacrifice another Cleric` | 1, and only 2 of 21 bodies are Clerics |

Phyrexian Warhorse is the only card in the colours that converts an arbitrary number of bodies into deaths in one turn for one mana each. That is what makes an Elas il-Kor turn lethal rather than incremental: with Warhorse on board and four spare bodies, Elas drains 4 in one activation window at instant speed, through a board stall, in response to a removal spell. Everything else in the list is one death per turn.

### THE RATADRABIK LINE

Ratadrabik of Urborg reads: *"Whenever another legendary creature you control dies, create a token that's a copy of that creature, except it's not legendary and it's a 2/2 black Zombie in addition to its other colors and types."* The list runs 5 other legendary creature copies. Two lines matter:

- **Elas il-Kor dies → you get a second Elas.** The token is not legendary, so it stacks with the other real copy. Two drain triggers per death.
- **Aron dies → you get a 2/2 Aron.** The copy keeps `{W}{B}, {T}, Sacrifice another creature`, so the outlet survives its own removal.

This is why Ratadrabik earns a capped rare slot in an aggro deck that would normally not want a 4-drop: it is insurance on the two cards the deck cannot function without.

### WHAT THE DECK CANNOT DO

Two threat classes are conceded outright, and the concessions are structural, not lazy. The cube contains **zero graveyard-hate cards in any colour** — that class is unanswerable by construction, not by colour choice. And W/B has no counterspell anywhere in this cube, so the deck's answer to a resolving spell is to already be ahead on board.

The third gap is real and only partly covered: the deck has **one** card that draws a card (Braids, Arisen Nightmare). Everything else described as "refuel" is board-refuel — Cult Conscript returning itself, Resolute Reinforcements bringing two bodies. Against a deck that trades one-for-one and goes long, the sideboard's Phyrexian Missionary and Sheoldred, the Apocalypse are the plan, and both are boarded in for exactly that reason.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:8  2:9  3:4  4:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.8: Ratadrabik of Urborg@0.8) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.6: Cult Conscript@0.8, Cult Conscript@0.8) → p=0.90 (need ≥ 0.75)
  PASS  outlet: 5 copies (effective 4.1: Aron, Benalia's Ruin@0.7, Aron, Benalia's Ruin@0.7, Braids, Arisen Nightmare@0.7) → p=0.75 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 82%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Aron, Benalia's Ruin, Battlefly Swarm, Splatter Goblin
  OK        single_large_threat: Bone Splinters, Citizen's Arrest, Elas il-Kor, Sadistic Pilgrim, Battlefly Swarm
  OK        noncreature_permanents: Citizen's Arrest, Braids, Arisen Nightmare
  CONCEDED  stack: W/B has no counterspell anywhere in this cube; the deck's answer to a resolving spell is to already be ahead on board by that turn, and Braids, Arisen Nightmare forces a permanent sacrifice at each end step regardless of what resolved.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire cube, so no colour can answer this class at all; the deck instead races the 12.9%-density graveyard decks with a turn-6 goldfish.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Five distinct uncapped mana sinks: Phyrexian Warhorse x2 ('{1}, Sacrifice another creature: This creature gets +2/+1 until end of turn' - no tap symbol, unlimited per turn), Knight of Dusk's Shadow x1 ('{1}{B}: This creature gets +1/+1 until end of turn'), Cult Conscript x2 ('{1}{B}: Return this card from your graveyard to the battlefield'), Battlefly Swarm x2 ('{B}: This creature gains deathtouch until end of turn'), and Aron x2. At 16 lands the flood tail is also the shortest the land_target model allows for this curve. |
| screw | mitigation | 8 of the 24 nonland cards cost 1 and 9 cost 2, so 17 of 24 are castable off two lands; the Phase 6b goldfish check reports 82% keepable hands, an 82% turn-1 play rate and 96% turn-2. Cut Down, Bone Splinters and Battlefly Swarm all cost a single {B}, so a two-land hand still both interacts and develops. |
| decapitation | mitigation | The payoff role is 5 copies deep, not 1: Elas il-Kor x2 and Phyrexian Vivisector x2 both trigger unconditionally on any creature death ('Whenever a creature you control dies, scry 1' has no gating clause), and Ratadrabik of Urborg remakes a killed Elas as a non-legendary 2/2 black Zombie copy that retains 'Whenever another creature you control dies, each opponent loses 1 life'. Killing one Elas does not turn the drain off. |
| gas-out | mitigation | Stated with its limit rather than inflated: exactly ONE mainboard card draws a card (Braids, Arisen Nightmare - 'that player loses 2 life and you draw a card'). The rest of the refuel is board-refuel, not card-refuel, and the count is exactly 7 of 24 nonland cards: Braids x1, Cult Conscript x2 (returns itself from the graveyard for {1}{B}), Resolute Reinforcements x2 (a second body from one card), and Phyrexian Warhorse x2 (a second body from one card when kicked for {W}). Phyrexian Vivisector x2 is deliberately NOT in that 7 - it scries on every death, which converts a dead draw step into a live one but adds no card and no body. When the matchup makes card-refuel decisive, Phyrexian Missionary (kicked: 'return target creature card from your graveyard to your hand') comes in from the sideboard. |
| raced | mitigation | Corrected after the Phase 9 grill, which showed the previous claim was false: Elas il-Kor has deathtouch but no flying and no reach, and 31 of the cube's 51 evasion cards fly. The deck now runs Battlefly Swarm x2 ('Flying / {B}: This creature gains deathtouch until end of turn') - a 1-mana flier that blocks and kills any of those 31 regardless of size, and is still the cheapest sacrifice fodder in the pool. Elas il-Kor x2 holds the 20 non-flying members with deathtouch and gains 1 life per creature entering across 21 bodies; Knight of Dusk's Shadow's 'Your opponents can't gain life' shuts off the cube's 22-card lifegain class from racing back; and Griffin Protector x2 (2/3 flying) is in the sideboard for the matchups where the air is the whole game. |
| disruption-fizzle | accepted | One removal spell aimed at Aron, Benalia's Ruin in response to its activation costs the alpha-strike turn, and this pool offers W/B no protection spell the deck can afford. Mitigating would mean running Take Up the Shield or Join Forces in place of fodder creatures - which removes the very bodies the go-wide plan and Aron's own sacrifice cost depend on, converting an aggro deck into a worse midrange one. The partial hedge that does not cost identity is already taken: the outlet role is 5 copies across 3 different cards (Aron x2, Phyrexian Warhorse x2, Braids x1), so answering one does not answer the turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sheoldred, the Apocalypse | Mythic bomb, but its text ('Whenever you draw a card, you gain 2 life') is orthogonal to sacrifice; with only 5 rare/mythic slots it competes with cards that are on-plan. |
| Weatherlight Compleated | 'draw a card if it has seven or more phyresis counters' — needs 7 creature deaths for one card; before that it is scry 1 per death. A mythic slot for a delayed cantrip engine. |
| Serra Paragon | Recurs a permanent with MV<=3 once per turn, but exiles it on the next death — it actively anti-synergizes with repeat sacrifice loops, and costs a mythic slot. |
| Defiler of Faith | Cost reduction applies only to WHITE permanent spells; 9 of the 24 nonland cards in the final list are white permanents (37.5%), for a 5-mana card in a deck whose curve tops at 4. EXCLUDE. |
| Shadow-Rite Priest | Outlet costs {3}{B}{B}, {T} and requires sacrificing another CLERIC; the final list runs 2 Clerics (Elas il-Kor x2, 'Phyrexian Kor Cleric'), so the sacrifice cost is fed 2 of 21 bodies. EXCLUDE. |
| Gibbering Barricade | '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' is a real repeatable outlet and the only draw-per-death in the colours, but at 3 mana per activation on a Defender body it does not advance a turn-6 aggro clock. Cut from the sideboard during Phase 9 repair because its role there ('blocks the evasion class') is false for 31 of the 51 evasion cards, which fly. |
| Sengir Connoisseur | 'This ability triggers only once each turn' caps it at one counter per turn for 5 mana — too slow for a T6 goldfish. |
| Wingmantle Chaplain | Token count scales with creatures that have DEFENDER; the final list runs 0 defenders, so it is a 4-mana 0/3 that makes exactly one Bird. EXCLUDE. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is symmetric, and 17 of this list's 24 nonland cards are MV<=2 plus every Soldier token at MV 0. Strictly worse for us than for most opponents. EXCLUDE. |
| Drag to the Bottom | Domain sweeper (-X/-X where X = basic land types); a 2-colour list has at most 2 basic types, so it is -2/-2 for 4 mana and it kills our own tokens. |
| Blight Pile | '{X}{B}, {T}: Each opponent loses X life' style drain requires untapped mana and a surviving body; the deck already drains via Elas without paying mana. |
| Sheoldred's Restoration | Reanimation for 4 (or 6 kicked) and it exiles itself; the deck's fodder is 1/1 tokens and 1-2 MV creatures not worth a 4-mana rebuy. |
| Braids's Frightful Return | Chapter I is a one-shot sacrifice; three chapters over three turns for one death trigger is below the rate of a Braids or an Aron activation. |
| Evolved Sleeper | A strong rare mana sink, but it is a lone creature with no sacrifice or death text — it does not feed or consume the engine, and rare slots are capped at 5. |
| Valiant Veteran | 'Other Soldiers you control get +1/+1' -- Soldiers in the final list are Resolute Reinforcements x2 plus its 2 tokens plus Benalish Sleeper x1 = 5 of 21 bodies. Too thin a denominator to spend a capped rare slot. EXCLUDE. |
| Plaza of Heroes | Fixes only for legendary spells; 6 of the list's 24 nonland cards are legendary, and it costs a rare slot that a spell uses better. |
| Thran Portal | 'Mana abilities of this land cost an additional 1 life' on top of a painland-heavy manabase, for a rare slot. |
| Captain's Call | 'Create three 1/1 white Soldier creature tokens' is the best body-per-card ratio in the pool (this list averages 1.11). Excluded on curve, not value: {3}{W} against a locked 'lowest-curve / most explosive' lens and an avg MV of 2.083. First card to add if that lens is revisited. |
| Liliana of the Veil | '-2: Target player sacrifices a creature' is a repeatable death for Elas il-Kor and ward/hexproof-proof removal. She is NOT excluded on the rare/mythic cap -- the final list spends only 4 of 5, so a slot is free and deliberately left unspent. She is excluded on her own text against this build: '+1: Each player discards a card' is the ability a 3-mana planeswalker most often activates, and it is symmetric against a deck with 8 one-drops and 9 two-drops designed to be hellbent by turn 4. |
| Braids's Frightful Return | Chapters II and III do add a fodder rebuy and a Braids-pattern drain/draw on a body the cube's 6 sweepers do not touch, but the value arrives across three turns against a turn-6 goldfish, and chapter I's sacrifice is a one-shot. EXCLUDE on tempo, not on card quality. |
| Toxic Abomination | A 3/2 for {1}{B} advances the clock faster than Splatter Goblin's 2/1, but 'When this creature enters, you lose 2 life' stacks on top of Caves of Koilos in a deck that is already paying life, and it has no death trigger. EXCLUDE. |
| Sengir Connoisseur | 'This ability triggers only once each turn' caps it at one +1/+1 counter per turn for {3}{B}{B} -- too slow for a turn-6 goldfish, and it was the keystone the shape judge flagged in a rejected sketch. |
| Argivian Cavalier | 'When this creature enters, create a 1/1 white Soldier creature token' -- two bodies for {2}{W}, and it was in the pre-grill mainboard. Cut during Phase 9 repair to make room for Battlefly Swarm x2 and Phyrexian Warhorse x2. Grounds: at MV 3 it was the most expensive pure-fodder card in the list, and the two cards that replaced it each close a gap it did not: Warhorse is the only untapped repeatable outlet in the colours, and Battlefly Swarm is the only flier, against 31 flying cards in the cube's 51-card evasion class. Body count fell 23 -> 21; outlet cards rose 2 -> 4 and fliers 0 -> 2. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.08 vs 2.5, 0 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  63.6%  prod  68.8%  gap  -5.2pp  [OK]
  W  demand  36.4%  prod  50.0%  gap -13.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1. mainboard count == 40  -- got 40
  [PASS] 1. sideboard count == 10  -- got 10
  [PASS] 2. every name exists in working pool (exact match)  -- []
  [PASS] 3. copy counts obey card_pool_rules
  [PASS] 3b. <=5 rares/mythics across MB+SB  -- 4: Braids, Arisen Nightmare x1 (rare), Caves of Koilos x1 (rare), Ratadrabik of Urborg x1 (rare), Sheoldred, the Apocalypse x1 (mythic)
  [PASS] 4. every nonland usable in core+splash (best_mode)  -- []
  [PASS] 5. <=3 cards per splash colour, all in splash_candidates  -- splash_colors=[] used=[]
  [PASS] 6. land count within 1 of recommendation  -- have 16, recommended 16
```
