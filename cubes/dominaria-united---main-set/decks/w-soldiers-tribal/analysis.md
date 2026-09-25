---
deck_name: "w-soldiers-tribal"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "W"
format: "40-card"
built_at: "2026-08-14T03:03:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
18x  Plains                   Basic - untapped white source, zero fixing cost
```

### CREATURES (13)
```
CMC  Card                        Qty   Color  Role                                            Rar
2    Benalish Sleeper            x1    W      Threat - 3/1 Soldier two-drop (black kicker declined)  C
2    Guardian of New Benalia     x1    W      Threat/infra - Soldier body, enlist scry 2      R
2    Resolute Reinforcements     x2    W      Enabler - flash, two Soldier bodies             U
2    Valiant Veteran             x1    W      Payoff - Soldier anthem, graveyard counter mode  R
3    Argivian Cavalier           x2    W      Enabler - token on ETB, enlist                  C
3    Charismatic Vanguard        x2    W      Payoff - repeatable team pump, Soldier          C
4    Griffin Protector           x1    W      Payoff - evasive body that grows on each ETB    C
4    Serra Paragon               x1    W      Engine - graveyard rebuild after a sweeper      M
5    Defiler of Faith            x1    W      Engine/payoff - Soldier per white permanent spell  R
5    Serra Redeemer              x1    W      Payoff - two +1/+1 counters on each small ETB   R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                        Qty   Color  Role                                            Rar
2    Destroy Evil                x2    W      Interaction - big blocker or enchantment        C
2    Take Up the Shield          x1    W      Protection - counter + indestructible           C
4    Captain's Call              x2    W      Enabler - three Soldier tokens                  C
4    Heroic Charge               x2    W      Payoff - alpha-strike finisher (red kicker declined)  C
```

### OTHER SPELLS (2)
```
CMC  Card                        Qty   Color  Role                                            Rar
3    Citizen's Arrest            x2    W      Interaction - unconditional exile               C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Runic Shot                  x2    W      Destroy target tapped creature — vs attacking or evasive decks whose creatures tap      U
Knight of Dawn's Light      x2    W      First-strike blocker, lifegain amplifier — vs fast aggro and racing decks               U
Take Up the Shield          x1    W      Indestructible + counter — vs targeted removal and damage-based sweepers                C
Coalition Skyknight         x2    W      Evasive flier with enlist — vs ground stalls and big-creature decks                     U
Prayer of Binding           x2    W      Flash exile any nonland permanent — vs artifact/enchantment decks and single-bomb decks  U
Argivian Phalanx            x1    W      4/4 vigilance, affinity for creatures — vs grindy decks that go long                    C
```

## ANALYSIS

### DECK IDENTITY

Mono-white Soldiers go-wide aggro. It converts cheap white cards into multiple bodies (Resolute Reinforcements, Argivian Cavalier, Captain's Call, Defiler of Faith), then makes those bodies lethal with Valiant Veteran's static Soldier anthem, Serra Redeemer's two +1/+1 counters on every small creature that enters, and a Heroic Charge alpha strike. It pays zero fixing cost: every land is a Plains, so all five permitted rare/mythic slots are spent on spells rather than on a manabase. The locked build lens is sweeper resilience — Serra Paragon replays permanents from the graveyard, Valiant Veteran has a graveyard mode, and Take Up the Shield protects the anthem body.

### WHY MONO-COLOUR IS THE COMPETITIVE CHOICE HERE

Every white-producing nonbasic land in this cube is either a two-colour dual that enters tapped or a rare painland,
and the pool rules cap the deck at five rare/mythic cards total. A two-colour build therefore pays for its fixing
twice: once in tempo (tapped lands) and once in rare budget (a painland displaces a spell). Mono-white pays neither.
All five permitted rare/mythic slots are spent on spells - Valiant Veteran, Guardian of New Benalia, Serra Redeemer,
Defiler of Faith and Serra Paragon - and all 18 lands enter untapped and deal no damage.

Two cards in this list print an off-white colour identity and are played entirely in their white mode:

| Card | Printed identity | Mode played | What is given up |
|---|---|---|---|
| Heroic Charge | RW | cast {2}{W}{W}, Kicker {1}{R} declined | trample on the pumped team |
| Benalish Sleeper | BW | cast {1}{W}, Kicker {B} declined | the symmetric edict on ETB |

Both are still doing the job they were slotted for - a mass pump and a 3/1 Soldier two-drop.

### THE SOLDIER COUNT, STATED AS A COUNT

Valiant Veteran reads "Other Soldiers you control get +1/+1". Against this list:

- **Nontoken Soldiers:** Resolute Reinforcements x2, Benalish Sleeper x1, Guardian of New Benalia x1,
  Charismatic Vanguard x2, Serra Redeemer x1 = **7 of the 12 other creature copies** in the mainboard.
- **Every token this deck makes is a Soldier.** Resolute Reinforcements, Argivian Cavalier, Captain's Call and
  Defiler of Faith all read "create a 1/1 white Soldier creature token" verbatim - 4 of the 4 token sources.

So the anthem's denominator grows as the game goes on rather than shrinking. Argivian Cavalier (Orc Knight),
Griffin Protector (Griffin), Serra Paragon (Angel) and Defiler of Faith (Phyrexian Human) are the four bodies
that do not get the buff - but three of the four make Soldiers that do.

### DEFILER OF FAITH'S TWO CLAUSES, COUNTED SEPARATELY

Defiler of Faith does two different things and each has a different denominator against this list:

| Clause | Qualifying cards | Count |
|---|---|---|
| "Whenever you cast a white permanent spell, create a 1/1 white Soldier creature token" | every creature + Citizen's Arrest | **15 of 22 nonland cards** |
| "white permanent spells ... cost {W} less to cast if you paid life this way" | same 15 cards | **15 of 22**, saving up to {W} each at 2 life |

The seven cards that trigger neither clause are the instants and sorceries: Take Up the Shield, Destroy Evil x2,
Captain's Call x2 and Heroic Charge x2. Note that Captain's Call is one of them - the deck's widest card does not
trigger its own token engine, which is the main reason Defiler of Faith is a payoff here rather than a combo piece.

### SERRA REDEEMER TURNS THE TOKENS INTO REAL CARDS

"Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature."
The counters are permanent, so unlike an anthem the value survives Serra Redeemer being killed. Against this list
every single token qualifies (all are 1/1), and of the nontoken creatures Resolute Reinforcements (1/1) x2,
Guardian of New Benalia (2/2), Valiant Veteran (2/2) and Argivian Cavalier (2/2) x2 qualify - 6 of the 12 other
creature copies. With Serra Redeemer on the battlefield, one Captain's Call is three 3/3s for four mana.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (22 nonland):  2:8  3:6  4:6  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 6.7: Griffin Protector@0.7, Defiler of Faith@0.8, Charismatic Vanguard@0.6, Charismatic Vanguard@0.6) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.5: Serra Paragon@0.5) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 88%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-white in this pool has no sweeper at common/uncommon and the only colourless one (Karn's Sylex) destroys this deck's own mana-value-0 Soldier tokens; the plan is to be the wider board and win the damage race with Charismatic Vanguard's {4}{W} team pump.
  OK        single_large_threat: Citizen's Arrest, Destroy Evil
  OK        noncreature_permanents: Destroy Evil, Citizen's Arrest
  CONCEDED  stack: White has no counterspell in this pool; the deck's answer to a key opposing spell is to have already presented lethal width by turn 6 rather than to interact on the stack.
  CONCEDED  graveyard: dossier.structural_census records 0 graveyard-hate cards in the entire cube, so no colour and no sideboard can answer this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two mana sinks turn surplus lands into damage: Charismatic Vanguard x2 ('{4}{W}: Creatures you control get +1/+1 until end of turn'), which scales with the token count, and Valiant Veteran's graveyard mode ('{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control'), which is live even after the anthem body has died. Serra Paragon additionally converts a graveyard land into an extra land drop rather than a dead draw. |
| screw | mitigation | 9 of 22 nonland cards cost exactly 2 and every land is a Plains, so there is no colour-screw failure mode at all — only land-count screw. The goldfish check measured 88% keepable hands and 92% to reach 3 lands by turn 3. A two-land hand casts Resolute Reinforcements (2 bodies), Benalish Sleeper (3/1), Guardian of New Benalia or Valiant Veteran on curve. |
| decapitation | mitigation | Valiant Veteran answered on sight still leaves two independent payoffs that need no anthem: Serra Redeemer ('put two +1/+1 counters on that creature' — permanent counters, not a static buff that dies with its source) and Heroic Charge x2 (an instant that cannot be answered before it resolves by creature removal). Valiant Veteran also has a graveyard mode that fires after it is killed. |
| gas-out | mitigation | The deck's card-to-board conversion is its refuel: Captain's Call x2 is three bodies from one card, Resolute Reinforcements x2 and Argivian Cavalier x2 are two each, and Defiler of Faith adds a Soldier per white permanent spell. Explicit Cards: Net-Positive / Self-Replacing count in this list is 1 of 22 (Serra Paragon, which replays a permanent with mana value 3 or less from the graveyard each turn — 13 of the 22 nonland cards are legal targets for it). The plan is to empty the hand onto the board before turn 6 rather than to refuel, and Serra Paragon is the one card that keeps drawing value after that. |
| raced | mitigation | dossier.threat_profile records evasion as the densest threat class (51 cards, 21%). Mainboard answers are Citizen's Arrest x2 (exiles any creature, including fliers) and Destroy Evil x2; the sideboard adds Runic Shot x2 (destroys a tapped creature - an attacking flier is tapped) and Knight of Dawn's Light x2 (first strike, and 'If you would gain life, you gain that much life plus 1 instead', which amplifies Prayer of Binding's 'You gain 2 life' and Take Up the Shield's lifelink grant). |
| disruption-fizzle | mitigation | The critical turn is a Heroic Charge alpha strike. It is redundant (2 copies) and it is an instant, so it can be held until blockers are declared. If it is countered, the board it was pumping is untouched and Charismatic Vanguard's {4}{W} activation is a second, uncounterable-in-practice way to push the same damage the following turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is symmetric and every Soldier token has mana value 0 — it exiles this deck's own board. |
| Leyline Binding | Domain reduces it by 1 per basic land type; a mono-white manabase has exactly 1 (Plains), so it costs {4}{W} rather than {W}. |
| Urza Assembles the Titans | Chapters II and III both key off planeswalker cards; this list runs 0 planeswalkers, so two of three chapters are blank. |
| Artillery Blast | Domain — deals '1 plus the number of basic land types' damage; mono-white caps it at 2 damage and only to a tapped creature. |
| Clockwork Drawbridge | 0/3 defender that cannot attack; a deck whose damage comes from attacking with width gains nothing from a wall plus a {2}{W} tap ability. |
| Walking Bulwark | Its haste/defender-attack ability targets 'creature with defender'; this list runs 0 defenders once the Chaplain package is cut, so the ability has no legal target. |
| Shield-Wall Sentinel | Tutors 'a creature card with defender'; 0 defenders in the pool build make it a 4-mana 1/3 that draws nothing. |
| Karn's Sylex | Its {X} sweeper destroys each nonland permanent with MV X or less — at any X that kills opposing threats it also kills this deck's MV-0 tokens. |
| Vanquisher's Axe | Equipment concentrates stats on one creature; the plan wins by spreading damage across many bodies, and Equip {2} competes with casting another token maker. |
| Hero's Heirloom | Its trample/haste rider requires the equipped creature to be legendary; this list runs 0 legendary creatures. |
| Relic of Legends | Its second ability taps a legendary creature; with 0 legendary creatures it is a 3-mana rock in a deck whose curve tops at 5. |
| Salvaged Manaworker | 1/3 for {2} that fixes colours; mono-white needs no fixing and the body does not attack. |
| Meteorite | 5 mana for 2 damage and a mana rock — off-curve for a deck that wants to be attacking by turn 4. |
| Jodah's Codex | Domain reduces its {5} activation by 1 per basic land type; mono-white pays {4} per card, unreachable in an aggro curve. |
| Golden Argosy | 'exile each creature that crewed it this turn' removes attackers from combat — actively anti-synergistic with a go-wide attack step. |
| Karn, Living Legacy | Powerstone mana 'can't be spent to cast a nonartifact spell'; this list is 0 artifacts, so the +1 produces mana it cannot use. |
| Archangel of Wrath | Both damage triggers require kicker {B} and/or {R}; unkicked it is a vanilla {2}{W}{W} 3/4 flier, and the rare slot is contested by Valiant Veteran and Defiler of Faith. |
| Phyrexian Missionary | Its graveyard-recursion trigger requires kicker {1}{B}; unkicked it is a 2/3 lifelink body with no tribal or token relevance. |
| Stall for Time | Taps two creatures and cycles; the stun-counter upside requires kicker {1}{U}, and a tempo tap does not advance a board-width clock. |
| Juniper Order Rootweaver | Its +1/+1 counter trigger reads 'if it was kicked' with Kicker {G}; in mono-white it is a vanilla 2/2 for {1}{W}. |
| Shalai's Acolyte | Enters with two +1/+1 counters only 'if it was kicked' ({1}{G}); unkicked it is a 3/4 flier for {4}{W}, above this curve. |
| Inscribed Tablet | Land-finding card selection for a 17-land aggro deck that would rather deploy a threat on turn 2. |
| Automatic Librarian | 3/2 scry 2 for {3} colourless — a fine body but it makes no token and is not a Soldier, so it scales with nothing here. |
| Timeless Lotus | 5-mana five-colour rock in a mono-coloured 17-land aggro deck. |
| Weatherlight Compleated | Its phyresis counters accrue when creatures die and only pay off (draw) at seven counters — far past this deck's goldfish turn. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.09   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.79 adj [MV 3.09 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                         cube_mainboard
commons_uncommons_max_2      PASS — max copies used: 2 (Resolute Reinforcements, Benalish Sleeper, Destroy Evil, Argivian Cavalier, Charismatic Vanguard, Citizen's Arrest, Captain's Call, Heroic Charge, Prayer of Binding, Runic Shot, Knight of Dawn's Light, Coalition Skyknight); Take Up the Shield is 1 main + 1 sideboard = 2
rares_mythics_max_1_each     PASS
rares_mythics_max_5_total    PASS — exactly 5: Valiant Veteran (R), Guardian of New Benalia (R), Serra Redeemer (R), Defiler of Faith (R), Serra Paragon (M). Sideboard contains 0 rares.
basics_unlimited             18 Plains
```