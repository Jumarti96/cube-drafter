---
deck_name: "gw-darien-go-wide-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-11T19:12:29Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
  4x Forest                
  7x Plains                
  2x Crystal Grotto        Any-color fixer, scry 1
  2x Radiant Grove         GW dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                      Qty  Color  Role                                    Rar
  2  Juniper Order Rootweaver  x2   W      2-drop body, kicked counter placement   C
  2  Resolute Reinforcements   x2   W      Flash 2-for-1 bodies, Redeemer trigger  U
  2  Valiant Veteran           x1   W      Soldier lord anthem + graveyard mass-c  R
  3  Anointed Peacekeeper      x1   W      Tax key removal/sweeper, vigilant 3/3   R
  3  Argivian Cavalier         x2   W      2 bodies in one card, enlist attacker   C
  3  King Darien XLVIII        x1   WG     Anthem + token engine + wipe insurance  R
  3  Queen Allenal of Ruadach  x2   WG     Token amplifier, scales with board wid  U
  4  Griffin Protector         x2   W      Flying beater that grows on each ETB    C
  5  Defiler of Faith          x1   W      White permanent casts make Soldiers, c  R
  5  Serra Redeemer            x1   W      Double counters on every small body ET  R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                       Qty  Color  Role                                    Rar
  1  Strength of the Coalition  x2   G      Kicked team-wide counter finisher       U
  2  Bite Down                  x1   G      Removal scaling with counter-grown bod  C
  2  Take Up the Shield         x1   W      Protect key payoff from removal         C
  3  Scout the Wilderness       x2   G      Land + kicked 2 Soldiers, keeps spells  C
  4  Captain's Call             x2   W      3 bodies for width payoffs              C
```

### OTHER SPELLS (2)

```
CMC  Card                  Qty  Color  Role                                    Rar
  3  Citizen's Arrest      x2   W      Unconditional exile removal             C
```

## SIDEBOARD (10)

```
Card                        Qty  Color  Role / When to board in                 Rar
Tail Swipe                  x1   G      fight removal vs ground midrange        U
Bite Down                   x1   G      Removal scaling with counter-grown bod  C
Destroy Evil                x2   W      vs 4+ toughness walls and enchantments  C
Broken Wings                x2   G      artifact/enchantment/flyer removal      C
Love Song of Night and Day  x2   W      refuel + counters vs control/grind      U
Prayer of Binding           x2   W      flash exile vs bombs/planeswalkers      U
```

## ANALYSIS

### Game Plan

GW go-wide aggro that fuses tokens with +1/+1 counters through four multiplicative payoffs. Seven distinct token sources (Resolute Reinforcements, Argivian Cavalier, Captain's Call, kicked Scout the Wilderness, King Darien's activation, Defiler of Faith's cast trigger, Queen Allenal's replacement) flood the board; Queen Allenal turns every token batch into one extra Soldier; Serra Redeemer turns every entering power-≤2 body into a 3/3; King Darien and Valiant Veteran both anthem the army (Veteran's bonus hits the ~dozen Soldier tokens the deck makes), and Darien sacrifices to save the token army from a board wipe. Kicked Strength of the Coalition converts width into +N/+N of permanent stats. The opponent must answer three separate scaling axes — body count, counters, and anthems — at once.

### Trigger Math

- Captain's Call with Allenal out: 4 Soldiers; with Redeemer also out: 4 bodies carrying 8 counters — 12 power for 4 mana.
- Defiler of Faith counts 13 white permanent spell cards in the mainboard; each cast is a free Soldier (doubled by Allenal).
- Kicked Scout the Wilderness = land + 2 (3 with Allenal) Soldiers — it plays as lands #16-17 on top of the 15 real lands.
- Valiant Veteran from the graveyard: {3}{W}{W} + exile puts a counter on each Soldier — a wipe-recovery play that converts a dead lord into a mass pump.
- Enlist on Argivian Cavalier lets a freshly-made token add its power the turn it enters.

### Grill Adjustments

The self-grill's mana simulation (200k trials) found 14 lands missed the third land drop ~31% of the time against ten 3-drops and heavy kicker costs, so the deck moved to 15 lands. Llanowar Stalker (temporary, power-only pump; T1 green only ~45% reliable) was cut for Valiant Veteran — the open 5th rare slot — and a maindeck Bite Down, doubling the real removal count.

### Key Weaknesses and Answers

Sweepers are the defining risk: hold Resolute Reinforcements (flash) and Darien's sacrifice, tax with Anointed Peacekeeper (name their sweeper off the hand peek), and rebuild with Veteran's graveyard pump. Big ground blockers stall the swarm — Destroy Evil and Bite Down/Tail Swipe come in. Flyers race the ground army — Broken Wings covers the air post-board.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card limit (5/5 used):**
- Ajani, Sleeper Agent — counter distribution, but its GGWW-leaning cost fights this deck's white-heavy 15-land manabase; belongs to the Defiler-of-Vigor build.
- Guardian of New Benalia — solid 2-drop Soldier with enlist/scry; lost the last rare slot to Valiant Veteran, which scales with the whole board.
- Temporary Lockdown — anti-synergy: it would exile most of our own board (tokens and MV≤2 permanents).
- Serra Paragon — recursion is slower than this deck wants to be.

**Strong uncommons a tier below the chosen includes:**
- Llanowar Stalker — cut during the grill: until-end-of-turn, power-only growth on an unreliable T1 green source.
- Charismatic Vanguard — {4}{W} team pump on a 3/2 Soldier body; too mana-hungry next to Strength of the Coalition.
- Wingmantle Chaplain — defender-based token engine; wrong speed for an aggro list.
- Shalai's Acolyte — strong in the kicker-counters build but a 5-drop that adds no width here.
- Join Forces — untap + pump two creatures; narrow next to Take Up the Shield.

**Sideboard considerations that missed the cut:**
- Snarespinner — cut during the grill as redundant with Broken Wings against flyers and low-impact in a competitive board.
- Mesa Cavalier — 2/1 flyer + 2 life; too low-impact even vs. burn.
- Love Song of Night and Day stayed, but board it only against decks that can't out-card you: chapter I refuels the opponent too.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  23.5%  prod  53.3%  gap -29.8pp  [OK]
  W  demand  76.5%  prod  73.3%  gap  +3.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each (verified per name vs pool multipliers)
[PASS] Rares/mythics: max 1 copy each
[PASS] Max 5 rares/mythics total (main+side): 5/5 used - Anointed Peacekeeper, Defiler of Faith, King Darien XLVIII, Serra Redeemer, Valiant Veteran
[PASS] All cards from cube mainboard (verified by exact name against working pool)
[PASS] Color identity within GW (basics/colorless exempt)
```