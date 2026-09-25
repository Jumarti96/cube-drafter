---
deck_name: "ub-graveyard-theft"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-04T14:12:59Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
6x Island                     
8x Swamp                      
2x Contaminated Aquifer       ({T}: Add {U} or {B}.) This land enters tapped.
1x Watery Grave               ({T}: Add {U} or {B}.) As this land enters, you may pay 2 li
```

### CREATURES (7)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Illvoi Galeblade           x2    U      Cheap evasive Chorale carrier; sacrifices for a card C
3    Alpharael, Dreaming Acolyte x1    UB     Chorale carrier (deathtouch on your turn makes attac U
3    Cloudsculpt Technician     x2    U      Chorale carrier (1/4 flier - survives combat)        C
4    Swarm Culler               x2    B      Chorale carrier (2/4 flier) + card flow when tapped  C
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Tragic Trajectory          x2    B      Interaction (DESTROYS via -X/-X; feeds their yard)   U
1    Zero Point Ballad          x1    B      Sweeper + theft at X>=6                              R
2    Depressurize               x2    B      Interaction (explicit destroy)                       C
2    Hymn of the Faller         x2    B      Card flow                                            U
3    Unravel                    x1    U      Interaction (hard counter; protects the Chorale turn U
4    Vote Out                   x1    B      Interaction (unconditional destroy; Convoke paid by  U
6    Singularity Rupture        x1    UB     Sweeper + fills the OPPONENT's graveyard             R
```

### OTHER SPELLS (6)

```
CMC  Card                       Qty   Color  Role                                                 Rar
4    Chorale of the Void        x1    B      Primary theft engine (mines the DEFENDING player's g R
4    Sothera, the Supervoid     x1    B      Competing theft route (exiles rather than binning -  M
4    Tractor Beam               x2    U      Unconditional theft (You control enchanted permanent U
5    Susurian Dirgecraft        x2    B      Edict - puts a creature in THEIR graveyard; answers  U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                                                    Rar
Annul                      x2    U      Hate — Against artifacts or enchantments - the cube is 29.7% artifacts and this deck conce U
Cryoshatter                x2    U      Flex removal — Against creature decks - one mana, and it DESTROYS on tap or damage, so it  C
Divert Disaster            x2    U      Protection — Against decks with targeted removal - taxing their answer to your Chorale car C
Decode Transmissions       x1    B      Flex card flow — Against grindy decks where the extra two cards matter more than a removal C
Unravel                    x1    U      Protection — Second copy against combo or a single unanswerable bomb.                      U
Gravkill                   x2    B      Anti-synergy hedge — ONLY against opposing recursion decks. Its 'Exile target creature or  C
```

## ANALYSIS

### DECK IDENTITY

A U/B deck that wins with the opponent's own creatures. Every removal spell in the maindeck puts its target into a graveyard rather than exiling it, because the plan needs their creatures in their graveyard: Chorale of the Void reads 'Whenever enchanted creature attacks, put target creature card from defending player's graveyard onto the battlefield under your control tapped and attacking', and Singularity Rupture is pointed at THEM to bury half their library. Tractor Beam takes a permanent outright with no combat step required, and Zero Point Ballad at X of 6 or more hands back a creature it just killed. The creature base exists only to carry the Aura and survive combat - two four-toughness fliers and a deathtouch body - not to win on its own.

### THE RULE THAT DECIDES EVERY SLOT: DESTROY, NEVER EXILE

Chorale of the Void reads `Whenever enchanted creature attacks, put target creature card from defending player's graveyard onto the battlefield under your control tapped and attacking.` **Their** graveyard is this deck's resource. That single fact reverses the normal instinct about removal quality:

| Removal | What it does | Verdict here |
|---|---|---|
| Tragic Trajectory | Kills via −X/−X → card goes to their graveyard | **Feeds the plan** |
| Depressurize | `destroy it` | **Feeds the plan** |
| Vote Out | `Destroy target creature` | **Feeds the plan** |
| Cryoshatter (SB) | `destroy it` on tap or damage | **Feeds the plan** |
| **Gravkill** | `EXILE target creature or Spacecraft` | **Deletes the resource** |

All six maindeck interaction cards destroy. **Gravkill is 0 of 23 maindeck cards** and sits in the sideboard with a warning attached — it is board-in-only against opposing recursion decks, where denying *their* graveyard matters more than filling it. In the sister U/B build, Gravkill's exile clause was a virtue. Here it is a liability. Same card, same cube, opposite verdict — because the plan changed.

The same logic points **Singularity Rupture** the other way too. `any number of target players each mill half their library` lets you choose: in this deck you point it at the **opponent**, burying roughly a dozen of their cards for Chorale to shop from, rather than at yourself.

### SOTHERA IS A COMPETING THEFT ROUTE, NOT A SYNERGY

`Whenever a creature you control dies, each opponent chooses a creature they control and **exiles** it.` Exiles — not destroys. Every Sothera trigger removes a card from exactly the graveyard Chorale of the Void is trying to mine. One of the pool-blind sketchers caught this and cut the card entirely; the shape judge agreed and ranked the two sketches that included it uncritically below the one that didn't.

It is in this list anyway, and the reason is stated rather than hidden: the Phase 6b assembly gate **failed** at four theft copies (p = 0.73 against a 0.75 threshold), and Sothera is the only remaining theft effect in blue-black. It is declared at a discounted weight as a *competing* route.

The mitigating fact the sketches missed: Sothera's second clause needs `if a player controls no creatures` — which is precisely the board state **Singularity Rupture and Zero Point Ballad create**. Wrath, then Sothera hands you one of the exiled creatures with two +1/+1 counters at end step. It is not synergy with Chorale; it is a parallel plan that happens to key off the same sweepers.

### ONLY ONE OF THE FOUR THEFT EFFECTS IS UNCONDITIONAL

| Card | Condition |
|---|---|
| **Tractor Beam** | None. `You control enchanted permanent` — no combat, no graveyard, no attack |
| Chorale of the Void | Needs a creature you control, needs it to attack, and needs a nonland permanent to have left the battlefield that turn or it sacrifices itself |
| Zero Point Ballad | Only at X of 6 or more — seven mana and six life |
| Sothera | Needs one of your creatures to die first, then needs a player to control no creatures |

That asymmetry is why Tractor Beam is the only theft card run at two copies, and why the `decapitation` plan leans on it: it needs none of the machinery the other three require.

Note the limit though: Tractor Beam reads `Enchant creature or Spacecraft`. It **cannot** take a plain artifact or enchantment, which is why this deck still concedes the resolved-noncreature-permanent class and answers those on the stack with sideboarded Annul instead.

### THE VOID CLAUSE IS NOT THE PROBLEM IT LOOKS LIKE

Chorale sacrifices itself at end step `unless a nonland permanent left the battlefield this turn or a spell was warped this turn`. That reads like a tax, but this deck's entire gameplan *is* making permanents leave the battlefield — **11 of the 23 nonland cards satisfy it by themselves**. The real exposure is narrow and specific: a turn where you cast only Hymn of the Faller and pass. On that turn the Aura dies and costs two cards to rebuild.

### THE CREATURES ARE SCAFFOLDING, NOT A CLOCK

Seven creatures, and none of them is trying to win the game. Two four-toughness fliers (Swarm Culler 2/4, Cloudsculpt Technician 1/4) exist to *survive* the combat Chorale requires; Illvoi Galeblade is the cheapest possible carrier and cashes itself in for a card when the Aura is absent; Alpharael has deathtouch on your turn so attacking into anything is profitable. The damage comes from *their* creatures once you have taken them.

### PLAY PATTERN, AND THE MATCHUP IT LOSES

Trade early with destroy-only removal, deliberately filling their graveyard. Land a four-toughness flier around turn 3–4, Chorale it on turn 4–5, and start taking a creature every combat. Point Singularity Rupture at them when their yard needs stocking or their board needs clearing. Tractor Beam is the answer to anything too large to kill.

Be honest about the weakness: this is slower than its sister build, Chorale costs four mana and then needs a creature to survive a combat step before doing anything, and the payoffs are blank on an empty board. The `raced` mode is recorded as an **accepted** loss — the assembly gate already needed a fifth theft card, so there is no slack to spend on cheap blockers.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:4  3:4  4:7  5:2  6:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  theft: 5 copies (effective 3.7: Chorale of the Void@0.6, Zero Point Ballad@0.4, Sothera, the Supervoid@0.7) → p=0.81 (need ≥ 0.75)
  PASS  chorale_carrier: 7 copies (effective 6.4: Illvoi Galeblade@0.7, Illvoi Galeblade@0.7) → p=0.95 (need ≥ 0.75)
  PASS  their_graveyard_filler: 7 copies (effective 6.6: Tragic Trajectory@0.8, Tragic Trajectory@0.8) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 64%  T2 90%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Zero Point Ballad, Susurian Dirgecraft
  OK        single_large_threat: Tractor Beam, Vote Out, Susurian Dirgecraft
  CONCEDED  noncreature_permanents: No maindeck answer to a resolved noncreature permanent. Tractor Beam enchants 'creature or Spacecraft' only, so it cannot take a plain artifact or enchantment. Annul x2 is sideboarded to answer them on the stack instead - the maindeck slots are committed to the theft engine, and cutting a payoff or a Chorale carrier for a narrow artifact answer would lower the engine below the density the thesis needs.
  OK        stack: Unravel
  CONCEDED  graveyard: No maindeck graveyard hate, and here that is not merely a cost but a requirement: this deck's win condition is the OPPONENT's graveyard, so hating graveyards would disable its own kill mechanism. Dauntless Scrapbot and Chrome Companion are deliberately absent from the sideboard too, for the same reason.
```

- No WARN flags in the final report. An intermediate version WARNed on goldfish (79% keepable against an 80% threshold) after Sothera replaced a two-drop; that was repaired by trading a Vote Out back for the second Hymn of the Faller rather than accepted, and the final report reads 81%.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | CORRECTED AT THE GRILL - an earlier version of this entry claimed 'Susurian Dirgecraft and Swarm Culler both have Station'. That was false: Swarm Culler's text is 'Flying / Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card' - no Station, no charge counters. Only Susurian Dirgecraft has Station in this list. The genuine flood outlets are: Zero Point Ballad, an X spell where surplus lands buy a bigger sweep and reach the X=6 theft threshold; Tractor Beam at {2}{U}{U}, which converts spare mana into the opponent's best permanent; and Susurian Dirgecraft's Station, which turns spare creatures and turns into charge counters toward a 7+ flying body. |
| screw | mitigation | 9 of the 23 nonland cards cost 2 or less (curve 1:5, 2:4), including Illvoi Galeblade at {U}, Tragic Trajectory at {B}, Hymn of the Faller at {1}{B} and Depressurize at {1}{B}. The goldfish simulation reports 81% keepable hands, a turn-1 play in 64% and three lands by turn 3 in 88%. Watery Grave enters untapped for 2 life when the turn matters. |
| decapitation | mitigation | Chorale of the Void is a single copy and is the namesake, so the plan without it is the other four theft effects: Tractor Beam x2 takes a permanent outright with no combat step required, Zero Point Ballad steals at X=6, and Sothera steals off its own sweeper. The assembly gate puts P(seeing a theft effect by turn 10) at 0.81 across five copies. Tractor Beam in particular needs no creature, no attack and no graveyard. |
| gas-out | mitigation | Hymn of the Faller x2 draws and its Void clause draws a second card, which 11 of 23 nonland cards turn on. Swarm Culler x2 draws whenever it becomes tapped and a permanent is sacrificed, so attacking with a Chorale carrier also refuels. Illvoi Galeblade x2 cashes itself in for a card. Structurally, though, the refuel is theft: every Chorale trigger is a free creature from a resource this deck spends its removal building. |
| raced | accepted | This deck is slower than its sister build and does not fix the fast matchup. Its thesis turn is 10, Chorale costs four mana and then needs a creature to survive a combat step before it does anything, and the payoff cards do nothing on an empty board. Mitigating would mean cutting theft density for cheap blockers - but the assembly gate already failed at four theft copies and needed a fifth, so there is no slack to spend. The bounded consolation is real: Cloudsculpt Technician and Swarm Culler are four-toughness fliers that block well, and Cryoshatter x2 comes in from the sideboard as one-mana removal. |
| disruption-fizzle | mitigation | The critical turn is an attack with an enchanted creature, and the deck holds Unravel maindeck plus Divert Disaster x2 and a second Unravel in the sideboard to protect it. The deeper structural answer is that the Aura is not the only route: Tractor Beam needs no combat at all, and Zero Point Ballad and Sothera both steal off a sweeper rather than an attack. Losing the Chorale carrier to removal in response costs the trigger but not the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Gravkill | 'EXILE target creature or Spacecraft' — actively ANTI-synergistic here. This deck's whole plan is that their creatures end up in their graveyard for Chorale of the Void to mine; exiling them removes the resource. Correct in the other U/B build, wrong in this one. |
| Bygone Colossus | 9/9 for mana value 9 with no evasion; this build steals THEIR creatures rather than reanimating its own, so a nine-drop it must first bury and then find a reanimator for is off-plan. |
| Xu-Ifit, Osteoharmonist | 'Return target creature card from YOUR graveyard' — this deck mines the opponent's graveyard instead, and its own creature base is cheap evasive carriers not worth a reanimation slot. |
| Scrounge for Eternity | Also returns from your OWN graveyard only, and its 'mana value 5 or less' cap plus a sacrifice cost make it a poor fit for a deck whose payload is on the other side of the table. |
| Mouth of the Storm | 6/6 flier at mana value 7; a fine body, but this deck wins with stolen creatures and cheap evasive carriers, and seven mana competes with holding up counterspells on the Chorale turn. |
| Fell Gravship | 'mill three cards' mills YOU, and its mandatory return is 'from your graveyard' — both halves point at the wrong graveyard for this build. |
| Dauntless Scrapbot | 'exile each opponent's graveyard' is the exact opposite of this deck's plan — it destroys the resource Chorale of the Void feeds on. Not even a sideboard card here. |
| Chrome Companion | 'Put target card from a graveyard on the bottom of its owner's library' — same problem; graveyard hate is anti-synergistic with a deck that mines the opponent's yard. |
| Thaumaton Torpedo | A real answer to a resolved noncreature permanent, but its {6} activation competes with the mana this deck needs to hold up counterspells while attacking with a Chorale carrier. |
| Weftwalking | MYTHIC. 'shuffle your hand and graveyard into your library' — shuffles graveyards away, which is this archetype's resource. |
| Specimen Freighter | 'Whenever this Spacecraft attacks, defending player mills four cards' fills THEIR yard, which is on-plan, but it must reach 9 charge counters before it can attack at all. |
| Entropic Battlecruiser | RARE. Its 1+ ability only fires 'whenever an opponent discards a card' and this deck runs no repeatable discard outlet. |
| Alpharael, Stonechosen | MYTHIC. A genuine finisher, but at {3}{B}{B} it competes for the same slot as Sothera and does not interact with either graveyard. |
| Starwinder | RARE 7/7 that draws on combat damage; the rare budget is committed to the theft package (Chorale, Zero Point Ballad, Singularity Rupture, Sothera) plus Watery Grave. |
| Consult the Star Charts | RARE. Excellent selection, but the rare slots are spent on the theft engine itself and this build has no single-copy engine card that must be found. |
| Annul | 'Counter target artifact or enchantment spell' is too narrow to maindeck; kept as a sideboard consideration against the cube's 29.7% artifact density. |
| Virus Beetle | 'each opponent discards a card' puts a card in their graveyard, which is on-plan, but the opponent chooses which — and it is dead once their hand is empty. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.33 adj [MV 3.0 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  60.0%  prod  64.7%  gap  -4.7pp  [OK]
  U  demand  40.0%  prod  52.9%  gap -12.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                : cube_mainboard
multipliers         : {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}
rare/mythic cap (6) : PASS
verification        : All 40 mainboard + 10 sideboard cards exist by exact name in the working pool. No common/uncommon exceeds 2 combined copies; no rare/mythic exceeds 1. Rare+mythic total across mainboard and sideboard = 5 (Chorale of the Void, Zero Point Ballad, Singularity Rupture, Sothera the Supervoid, Watery Grave), inside the user's cap of 6. Basic lands are format-supplied and exempt.
```
