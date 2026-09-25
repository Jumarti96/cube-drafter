---
deck_name: "wr-soldiers-enlist-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WR"
format: "40-card"
built_at: "2026-07-12T00:38:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
  5x Mountain              
  6x Plains                
  2x Crystal Grotto        Any-color fixer, scry 1
  2x Sacred Peaks          RW typed dual, enters tapped
```

### CREATURES (18)

```
CMC  Card                        Qty  Color  Role                                    Rar
  1  Phoenix Chick               x2   R      Recursive evasive 1-drop, returns with  U
  1  Shivan Devastator           x1   R      X-scaling hasty flying finisher         M
  2  Baird, Argivian Recruiter   x2   WR     Token keystone: triggers off anthem/en  U
  2  Guardian of New Benalia     x1   W      Soldier 2-drop, enlist scry, indestruc  R
  2  Resolute Reinforcements     x2   W      Flash 2 Soldier bodies                  U
  2  Valiant Veteran             x1   W      Soldier lord keystone + graveyard mass  R
  3  Argivian Cavalier           x2   W      Two bodies (Knight + Soldier token), e  C
  3  Keldon Flamesage            x1   R      Enlist body that free-casts burn/pumps  R
  3  Keldon Strike Team          x2   R      Kicked 3 bodies + team haste            C
  4  Tori D'Avenant, Fury Rider  x1   WR     Attack payoff: team pump + untap white  U
  5  Serra Redeemer              x1   W      Double counters on every entering Sold  R
  6  Argivian Phalanx            x2   W      Affinity-discounted 4/4 vigilance Sold  C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                  Qty  Color  Role                                    Rar
  2  Lightning Strike      x2   R      Cheap flexible removal                  C
  3  Hurloon Battle Hymn   x1   R      4-damage removal, kicked +4 life        U
  4  Captain's Call        x2   W      3 Soldier bodies for width              C
  4  Heroic Charge         x2   W      Team-wide finisher pump, kicked trampl  C
```

## SIDEBOARD (10)

```
Card                   Qty  Color  Role / When to board in                 Rar
Destroy Evil           x2   W      vs 4+ toughness walls and enchantments  C
Smash to Dust          x2   R      artifact/defender hate + 1-damage swee  C
Yavimaya Steelcrusher  x2   R      artifact hate on an enlist body         C
Prayer of Binding      x2   W      flash exile vs bombs/planeswalkers      U
Jaya's Firenado        x2   R      5-damage removal vs big midrange        C
```

## ANALYSIS

### Game Plan

White-Red Soldier aggro where the +1/+1 counters theme powers a token engine. The core loop: Valiant Veteran's static anthem ("Other Soldiers you control get +1/+1") makes every other Soldier's power exceed its base power, which satisfies Baird, Argivian Recruiter's end-step condition ("if you control a creature with power greater than its base power, create a 1/1 white Soldier") — so with Veteran plus any Soldier on the table (Baird himself counts), Baird produces a free body every single turn. The grill verified this loop is rules-correct: anthems, enlist taps, and +1/+1 counters all raise power above base power. Serra Redeemer converts every entering Soldier token into a 3/3; five Soldier-token sources (Resolute Reinforcements, Argivian Cavalier, Captain's Call, kicked Keldon Strike Team, and Baird himself) go wide; Tori D'Avenant and Heroic Charge convert the width into damage; Shivan Devastator scales into the late game as an X-cost hasty flyer.

### Trigger Math

- Captain's Call with Serra Redeemer out: three 3/3 Soldiers — 9 power for 4 mana, and every one of them keeps Baird on permanently.
- Argivian Phalanx's affinity for creatures routinely makes it a 2-3 mana 4/4 vigilance Soldier on a wide board.
- Kicked Keldon Strike Team: 3 bodies AND the whole team gains haste the turn it enters — the alpha-strike turn after Captain's Call.
- Keldon Flamesage attacking with an enlist tap at power 4-5 digs that deep for a free Lightning Strike or Heroic Charge.
- Phoenix Chick returns whenever you attack with three or more creatures ({R}{R}), tapped, attacking, and carrying a +1/+1 counter — a recursive Baird enabler.
- Valiant Veteran from the graveyard: {3}{W}{W} + exile puts a counter on each Soldier — the post-wipe rebuild that also flips every Soldier's power above base for Baird.
- Veteran's anthem covers 10 of 17 mainboard creature cards (all Soldier tokens included); Phoenix Chick, Cavalier's Knight body, Strike Team's Warrior body, Devastator, Flamesage, and Tori sit outside it.

### Grill Adjustments

The self-grill challenger flagged 14 lands as too greedy against the kicker taxes ({1}{W} Strike Team, {1}{R} Heroic Charge, {3}{W}{W} Veteran flashback) and only 4 untapped red sources for Tori/Phoenix Chick — the deck moved to 15 lands (5th Mountain), cutting a Hurloon Battle Hymn. Benalish Faithbonder (off-tribe Cleric) and Charismatic Vanguard (a {4}{W} pump that never fires at this land count) were cut for the two open rare slots: Serra Redeemer and Keldon Flamesage.

### Key Weaknesses and Answers

Three removal spells is the floor for aggro — big stabilizers are the problem: Jaya's Firenado comes in for 5-toughness walls and Destroy Evil for the rest. Sweepers hurt less than they hurt the GW token deck — Phoenix Chick and Valiant Veteran both rebuild from the graveyard. Sequence enlist on non-alpha turns: it taps a nonattacking creature, which subtracts from Tori/Heroic Charge math. Play Tori as a turn-5 card, not turn-4 — double red plus white is real strain even at 15 lands.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card limit (5/5 used):**
- Defiler of Faith — Soldier-per-white-cast engine; a natural fit, but a second five-drop the mana can't support. First swap if you drop Devastator.
- Anointed Peacekeeper — the challenger's alternative for the fifth slot (disruption over Flamesage's velocity); take it in sweeper-heavy metas.
- Squee, Dubious Monarch / Rundvelt Hordemaster — Goblin-tribal payoffs with no Goblins here.
- Astor, Bearer of Blades — no Equipment/Vehicle package.
- Jaya, Fiery Negotiator — strong but RR-hungry at 4 in a white-heavy base.

**Strong uncommons a tier below the chosen includes:**
- Take Up the Shield — triple duty here (protects Veteran/Baird, permanently enables Baird, blowout block); the top consideration for a Hymn or Steelcrusher slot when iterating.
- Coalition Skyknight — flying enlist body; lost the 3-slot to Keldon Strike Team's haste tokens.
- Balduvian Berserker — enlist death-burn; the deck wanted guaranteed width instead.
- Benalish Faithbonder / Charismatic Vanguard — cut during the grill (off-tribe; unusable mana sink).

**Sideboard considerations that missed the cut:**
- Flowstone Infusion / Furious Bellow — combat tricks below Heroic Charge's rate.
- Hammerhand — haste the Strike Team already provides.
- Hurloon Battle Hymn #2 — became the 15th land; re-add it against creature-dense metas by trimming a Jaya's Firenado.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  40.6%  prod  60.0%  gap -19.4pp  [OK]
  W  demand  59.4%  prod  66.7%  gap  -7.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each (verified per name vs pool multipliers)
[PASS] Rares/mythics: max 1 copy each
[PASS] Max 5 rares/mythics total (main+side): 5/5 used - Guardian of New Benalia, Keldon Flamesage, Serra Redeemer, Shivan Devastator, Valiant Veteran
[PASS] All cards from cube mainboard (verified by exact name against working pool)
[PASS] Color identity within WR (basics/colorless exempt)
```