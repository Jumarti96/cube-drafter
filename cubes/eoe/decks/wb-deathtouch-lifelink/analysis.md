---
deck_name: "wb-deathtouch-lifelink"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-07T18:30:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Plains
  7x Swamp
  1x Godless Shrine   ({T}: Add {W} or {B}.) As this land enters, you may pay 2 life. If you
  2x Sunlit Marsh   ({T}: Add {W} or {B}.) This land enters tapped.
```

### CREATURES (13)

```
CMC  Card                          Qty   Color  Role                                                                                                               Rar
  1  Hullcarver                    x2    B      Threat — 1-mana deathtouch that blocks and kills anything                                                          C
  2  Honored Knight-Captain        x1    W      Enabler — two bodies for two mana, both of which get the deathtouch grant                                          U
  2  Sunstar Chaplain              x1    W      Threat — same end-step trigger as Flight-Deck Coordinator one mana cheaper, and the deck's only counter source     R
  2  Syr Vondam, Sunstar Exemplar  x1    BW     Threat — vigilance menace that grows and gains on every creature death                                             R
  3  Dual-Sun Adepts               x2    W      Threat — printed double strike, which turns granted deathtouch one-sided                                           U
  4  Elegy Acolyte                 x1    B      Payoff — 4/4 lifelink that draws a card whenever creatures connect                                                 R
  4  Gravblade Heavy               x2    B      Threat — a SECOND deathtouch source independent of Syr Vondam, while you control an artifact                       C
  5  Exalted Sunborn               x1    W      Payoff — 4/5 flying lifelink; doubles every token the deck makes                                                   M
  5  Syr Vondam, the Lucent        x2    BW     Payoff — grants the whole team +1/+0 and deathtouch on every attack                                                U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                          Qty   Color  Role                                                                                                               Rar
  1  Focus Fire                    x2    W      Interaction — 1-mana instant, X scales with the board this deck builds anyway                                      C
  1  Honor                         x1    W      Enabler — 1-mana cantrip; the deck's only card draw and its only counter for Dual-Sun Technique                    U
  1  Tragic Trajectory             x2    B      Interaction — a 1-mana -10/-10 whenever a nonland permanent left the battlefield this turn, which combat provides  U
  2  Dual-Sun Technique            x1    W      Enabler — instant double strike; with granted deathtouch the blocker dies before it swings back                    U
```

### OTHER SPELLS (4)

```
CMC  Card                          Qty   Color  Role                                                                                                               Rar
  1  Squire's Lightblade           x2    W      Enabler — flash first strike; deathtouch plus first strike kills the blocker before it swings back                 C
  2  Lumen-Class Frigate           x1    W      Enabler — a +1/+1 anthem at 2 charge counters, and an artifact that switches on Gravblade Heavy                    R
  3  Banishing Light               x1    W      Interaction — the only catch-all for a noncreature permanent                                                       C
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                                                                                                 Rar
Seam Rip                      x2    W      vs fast MV<=2 starts                                                                                                    U
Dark Endurance                x1    B      vs removal-heavy and blocking decks — indestructible protects Syr Vondam through a wrath                                C
Depressurize                  x1    B      vs x/1 and x/2 aggro starts at instant speed                                                                            C
Banishing Light               x1    W      vs enchantments — the cube runs 16 and has ONE enchantment answer cube-wide                                             C
Emergency Eject               x1    W      vs the 74-card artifact class, the 16 enchantments, and attacking fliers — instant-speed destroy any nonland permanent  U
Gravkill                      x2    B      vs recursive or oversized threats — exile, not destroy                                                                  C
Radiant Strike                x2    W      vs the 74-card artifact class (29.7% of the cube) and tapped attackers; 3 life in a race                                C
```

## ANALYSIS

### DECK IDENTITY

A white-black combat deck that wins by making blocking illegal in practice. Syr Vondam, the Lucent is a 4/4 deathtouch lifelink body that grants your OTHER creatures +1/+0 and deathtouch every time it enters or attacks, so a 1/1 token trades with anything the opponent has. Squire's Lightblade, Dual-Sun Adepts and Dual-Sun Technique convert that from a trade into a one-sided kill: deathtouch plus first or double strike destroys the blocker in the first-strike damage step, before it deals any damage back. Underneath, 4 lifelink copies (Syr Vondam, the Lucent x2, Elegy Acolyte, Exalted Sunborn) win the race, and Hullcarver and Gravblade Heavy supply deathtouch that does not depend on Syr Vondam being alive. Tragic Trajectory turns the deck's own combat deaths into a one-mana -10/-10.

### THE VOID MISREAD, AND WHY IT MATTERS

The most consequential thing the grill found on this deck was not a card choice — it was a misreading of four words.

Void reads: *if a nonland permanent left the battlefield this turn or a spell was warped this turn.* I had excluded
Tragic Trajectory from this deck on the grounds that "this deck sacrifices nothing", treating Void as though it read
*a nonland permanent **you control***. It does not. This deck's entire plan is granting deathtouch so that blockers
die — a nonland permanent leaves the battlefield on essentially every turn combat happens, usually the opponent's.

Tragic Trajectory is a **one-mana −10/−10** here, not a one-mana −2/−2.

The timing caveat is real and worth knowing at the table: it is a **sorcery**, so unless something already died
earlier in the turn, Void is only on in your postcombat main phase. It kills the blocker that survived, not the
blocker you wanted to remove before attacking.

### DEATHTOUCH + FIRST STRIKE IS THE ACTUAL ENGINE

Syr Vondam, the Lucent grants deathtouch, which makes every block a **trade**. First or double strike is what turns
a trade into a **free kill**: the attacker assigns damage in the first-strike step, deathtouch makes any nonzero
damage lethal, and the blocker is destroyed as a state-based action before the regular damage step in which it would
have dealt its damage back.

| Source | Cost | Timing |
|---|---|---|
| Dual-Sun Adepts ×2 | printed double strike | always on, no enabling card needed |
| Squire's Lightblade ×2 | `{W}` | Flash — after blockers are declared |
| Dual-Sun Technique | `{1}{W}` | Instant — after blockers are declared |

Two honest limits: it does **not** work against a blocker that itself has first strike, or against an indestructible
one. And this deck has **zero trample across all 50 cards** — killing the blocker for free does not mean the damage
gets through. The correct claim is "kills the blocker for free," not "kills the blocker and still hits you."

Squire's Lightblade's first strike comes from its *enters* trigger only. Paying `Equip {3}` moves it and grants only
the static +1/+0 — you cannot re-buy first strike by re-equipping.

### WHY THE THESIS TURN MOVED FROM 6 TO 7

The payoff costs `{2}{W}{B}{B}`. At 17 lands the earliest it casts is turn 5, and it must then survive to attack.
The assembly gate priced this exactly: at turn 6 the deathtouch-source role returned **p=0.75 against a 0.75 floor**.

The repair that was *not* available: adding copies. Syr Vondam the Lucent, Hullcarver and Gravblade Heavy are all
already at their maximum legal counts, and a scan of all 276 pool cards found exactly one other deathtouch source in
W/B — Entropic Battlecruiser, which grants it only at 8 charge counters. There was no fourth copy of anything to add.

The repair that *was* available and was used elsewhere: real cards. The strike-enabler role also failed, at p=0.68,
and that one was fixed with cards (Dual-Sun Technique), not with a turn change. Two failures, two different fixes —
which is the evidence that the turn revision was forced rather than convenient.

### THE ARTIFACT COUNT GRAVBLADE HEAVY NEEDS

`As long as you control an artifact, this creature gets +1/+0 and has deathtouch.` Five of 23 nonland cards are
artifacts: Hullcarver ×2, Squire's Lightblade ×2, Lumen-Class Frigate.

Four of the five cost one mana and the fifth costs two, so they precede Gravblade Heavy's own `{3}{B}` on curve
rather than competing with it, and Squire's Lightblade in particular keeps being an artifact long after its one-shot
first strike is spent.

One caveat worth stating: **two of the five artifacts are Hullcarver, which is itself a deathtouch source.** In those
games Gravblade Heavy is not adding an independent source at all. Genuinely independent enablement comes from three
of the five copies.

### KNOWN THIN SPOTS

- **This is the flood-weakest deck of the four.** One cantrip (Honor), no ramp, and mana sinks that cost `{5}`,
  `{4}{W}{W}` and `{3}`. The 17-land base and 88% three-lands-by-turn-3 reduce how often it matters, not what
  happens when it does.
- **No mainboard protection for the payoff.** Dark Endurance is sideboard-only, so game one relies entirely on
  Hullcarver ×2 and Gravblade Heavy ×2 surviving Syr Vondam being answered.
- **No unconditional creature removal in the mainboard.** Focus Fire only hits attacking or blocking creatures;
  Tragic Trajectory is a sorcery gated on Void; Banishing Light is a single copy. Faller's Faithful is the first
  card to add if that hurts.
- **Both Syr Vondam, the Lucent copies are legendary.** The second is a blank while the first is out. The redundancy
  is draw-redundancy — which is exactly what the assembly gate measures — not board-redundancy.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:9  2:5  3:3  4:3  5:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  deathtouch_source: 6 copies (effective 4: Hullcarver@0.5, Hullcarver@0.5, Gravblade Heavy@0.5, Gravblade Heavy@0.5) → p=0.77 (need ≥ 0.75)
  PASS  lifelink_racer: 4 copies → p=0.77 (need ≥ 0.75)
  PASS  strike_enabler: 5 copies (effective 3.9: Squire's Lightblade@0.7, Squire's Lightblade@0.7, Dual-Sun Technique@0.5) → p=0.76 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 88%  T2 98%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Hullcarver, Focus Fire, Syr Vondam, the Lucent, Tragic Trajectory
  OK        single_large_threat: Tragic Trajectory, Hullcarver, Banishing Light, Focus Fire, Gravblade Heavy
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: White and black have no counterspell anywhere in this pool; this deck answers a resolved spell after the fact with Banishing Light and Focus Fire, or races past it.
  CONCEDED  graveyard: No white or black card in this pool interacts with an opponent's graveyard except Chrome Companion, whose {2},{T} ability bottoms ONE card per turn — far too slow against the cube's 31 graveyard cards, and this build has no artifact-matters reason to run it either. The class is answered from the sideboard by Gravkill, which EXILES rather than destroys and so denies the reanimator decks their target.
```

- No WARN-tier flags: curve PASS (1:9 2:5 3:3 4:3 5:3) and goldfish PASS (85% keepable, 88% turn-1 play, up from 74% before the grill repairs lowered the curve). No response required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | accepted | CORRECTED after Challenger F4 marked this UNSATISFIED. The previous entry claimed the deck's only mana sink was Dual-Sun Adepts' '{5}: Creatures you control get +1/+1', which is false on the list's own text: Honored Knight-Captain's '{4}{W}{W}, Sacrifice this creature: Search your library for an Equipment card' (live, since the deck runs Squire's Lightblade x2), Squire's Lightblade's own 'Equip {3}', and Lumen-Class Frigate's Station are all sinks. That is 6 of 23 nonland COPIES (4 distinct cards) carrying one, not 1 — an earlier version of this entry said '4 of 23 copies', conflating distinct cards with copies. Honor was added as a genuine cantrip, taking accel_count from 0 to 1. What is still ACCEPTED is that this remains the weakest flood profile of the four decks in this run, and the cost of fixing it further is real: every additional draw spell displaces a deathtouch source or a strike enabler, and those two roles sit at p=0.77 and p=0.76 against a 0.75 floor — there genuinely is no slack left in THOSE buckets, even though the pre-grill entry wrongly implied there was no slack anywhere. |
| screw | mitigation | 9 of 23 nonland cards cost 1 and 5 more cost 2 — 14 of 23 at mana value 2 or less, up from 12 of 23 before the grill repairs lowered the curve. The goldfish check reports 85% keepable hands, 88% turn-1 plays and 98% turn-2 plays — the strongest screw profile of the four decks in this run, which is what the highest land count plus nine one-drops buys. |
| decapitation | mitigation | Syr Vondam, the Lucent is answered on sight in some games, and that is exactly why deathtouch_source was declared as its own assembly role. Two independent sources survive him: Hullcarver x2, whose deathtouch is printed on a 1-mana body and needs no condition at all, and Gravblade Heavy x2, whose deathtouch turns on from any of the 5 artifacts in the list. STATED PLAINLY: Dark Endurance is SIDEBOARD-only and is now a single copy, so in game one there are 0 of 23 nonland copies protecting the payoff — the game-one insurance is entirely those two independent deathtouch sources. |
| gas-out | mitigation | CORRECTED after Challenger F3 marked this UNSATISFIED. The previous entry accepted the mode on the grounds that adding card draw meant cutting a gated role; the Challenger showed 8 of 23 nonland copies sat in NO declared role, so that cost was not real. Honor ('Put a +1/+1 counter on target creature. Draw a card.') was added from one of those free slots, alongside Elegy Acolyte ('Whenever one or more creatures you control deal combat damage to a player, you draw a card and lose 1 life') and Dual-Sun Technique's rider, which Honor and Sunstar Chaplain now actually feed — before the repair, no card in the deck could put a +1/+1 counter on another creature, so that rider was dead text. |
| raced | mitigation | CORRECTED after Challenger F2 marked this UNSATISFIED. The previous entry claimed 'Hullcarver x2 blocks and kills any attacker for one mana' against the cube's evasion class. That is false and is retracted: Hullcarver's complete oracle text is 'Deathtouch' on a 1/1 with no flying and no reach, and 48 of the 56 cards in the cube's evasion class have flying. Hullcarver blocks none of them. What actually answers a race here: four lifelink copies (Syr Vondam, the Lucent x2, Elegy Acolyte, Exalted Sunborn) gain life while dealing it; Exalted Sunborn is itself a 4/5 FLYING lifelink body that blocks the class; Focus Fire x2 is instant-speed and its text is 'target ATTACKING or blocking creature', so it does hit fliers; and Radiant Strike x2 from the sideboard destroys 'target artifact or TAPPED creature', which an attacking flier is. Two limits the Challenger raised and this entry now carries: the 4 lifelink copies cost 4, 5, 5 and 5, so there is no lifelink body before turn 4, and two of the four are the same legendary card, so at most 3 distinct lifelink bodies can ever be on the battlefield at once. Offsetting that, the grill repairs cut two mid-curve bodies and added four one-drops, moving avg MV from 2.61 to 2.39 and turn-1 play from 74% to 88%. |
| disruption-fizzle | mitigation | The critical turn is the attack in which Syr Vondam grants deathtouch. If he is removed in response to the attack trigger the trigger has already resolved and the team keeps deathtouch for that combat. Squire's Lightblade has Flash and Focus Fire is an instant, so the deck can respond inside the combat step rather than committing everything at sorcery speed. Dark Endurance in the sideboard makes the key attacker indestructible for {1}{B}, or {B} when it targets a blocking creature. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sunset Saboteur | RARE, and the SHAPE JUDGE flagged it as a weak keystone in the winning sketch: 'Whenever this creature attacks, put a +1/+1 counter on target creature AN OPPONENT CONTROLS.' A 4/1 menace for two mana is a strong clock, but it permanently grows an opposing blocker every single attack. Excluded rather than justified — a persistent buff to the opponent's board is not worth one of only six rare slots. |
| Insatiable Skittermaw | Menace is excellent alongside granted deathtouch (two blockers must be declared and both die), but its Void clause needs a nonland permanent to leave the battlefield and this deck sacrifices nothing and runs only one warp card, so it is a vanilla 2/2 menace here. |
| Tragic Trajectory | COUNT-DEPENDENT REJECTION. Its Void mode is a one-mana -10/-10, but Void requires a nonland permanent to have left the battlefield or a spell to have been warped this turn. This deck sacrifices nothing and has exactly 1 of 23 nonland cards with warp (Exalted Sunborn), so Void is off most turns and this is a one-mana -2/-2. It is premium in the aristocrats build and mediocre here — the same card, a different deck. |
| Hylderblade | The SHAPE JUDGE flagged a rejected sketch for calling this a 'deathtouch source' — its text is 'Equipped creature gets +3/+1' and it grants no deathtouch at all. Its free Void re-attach also needs the same Void condition this deck cannot reliably turn on. Excluded on both counts. |
| Vote Out | Convoke would be genuinely cheap off a 15-creature board, but tapping creatures to convoke means not attacking with them, which is the one thing this deck is trying to do every turn. |
| Dawnstrike Vanguard | A 4/5 lifelink that grows the whole team, and thematically perfect — but {5}{W} is a six-drop in a deck whose payoff already costs five, and the locked build is the lowest-curve interpretation. |
| Knight Luminary / Rayblade Trooper / Luxknight Breacher / Weftblade Enhancer | All make bodies or counters, but none of them makes a block worse for the opponent. In a deck whose entire kill is 'blocking is a losing trade', a vanilla body competes with a deathtouch source or a strike enabler and loses. |
| Brightspear Zealot | A 2/4 vigilance body whose +2/+0 needs two spells cast in a turn; this deck casts one spell most turns, so it is a 2/4 that does not attack well. |
| Starfighter Pilot / Dockworker Drone / Pulsar Squadron Ace | Cheap white bodies with rider abilities (surveil, counters, Spacecraft tutoring) that this build has no payoff for — it runs 0 Spacecraft-matters cards and no counter-matters cards other than Dual-Sun Technique's rider. |
| Archenemy's Charm | RARE. Mode 3 ('two +1/+1 counters, gains lifelink') is a real fit, but {B}{B}{B} in a deck whose pip demand is 60% white is the hardest cast in the shortlist. |
| Sunstar Chaplain | RARE. Its counters need two or more tapped creatures at end step, which attacking provides — but with the rare budget at 5 of 6 and no counter payoffs, the slot went to Lumen-Class Frigate, which is an anthem AND an artifact that switches on Gravblade Heavy. |
| Zealous Display | 'Creatures you control get +2/+0' is a fine finisher, but with granted deathtouch the extra power is largely redundant — a 1/1 deathtouch attacker already kills whatever blocks it. |
| Dark Endurance | SIDEBOARD ONLY. Indestructible protects Syr Vondam through a wrath and through targeted removal, which matters against removal-dense decks, but it is a reactive card in a proactive deck. |
| Depressurize | SIDEBOARD ONLY. '-3/-0 then destroy if power is 0 or less' only answers small creatures; Focus Fire answers anything on a board this deck builds anyway. |
| Gravkill | SIDEBOARD. Exile rather than destroy is the point — it denies the cube's reanimator decks their target, which is why it is the mainboard graveyard concession's answer. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.31 adj [MV 2.39 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  43.3%  prod  58.8%  gap -15.5pp  [OK]
  W  demand  56.7%  prod  58.8%  gap  -2.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Mainboard count == 40                                    PASS (40)
Sideboard count == 10                                    PASS (10)
Every card exists in the cube pool by exact name         PASS
Commons/uncommons <= 2 copies                            PASS
Rares/mythics <= 1 copy                                  PASS
<= 6 rares/mythics TOTAL across MB+SB (lands count)      PASS (6/6)
   Elegy Acolyte (R), Exalted Sunborn (M), Sunstar Chaplain (R), Syr Vondam, Sunstar Exemplar (R), Lumen-Class Frigate (R), Godless Shrine (R)
Every nonland card usable in W/B                                    PASS
Splash cap                                               PASS (no splash colours declared)
Basic lands unrestricted (format-supplied)               PASS
```
