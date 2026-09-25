---
deck_name: "wb-aristocrats-drain"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-07T18:04:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  3x Plains
  10x Swamp
  1x Godless Shrine   ({T}: Add {W} or {B}.) As this land enters, you may pay 2 life. If you
  2x Sunlit Marsh   ({T}: Add {W} or {B}.) This land enters tapped.
```

### CREATURES (15)

```
CMC  Card                          Qty   Color  Role                                                                                  Rar
  2  Honored Knight-Captain        x1    W      Fodder — two bodies for two mana; also tutors Hylderblade late                        U
  2  Lightless Evangel             x2    B      Payoff — grows on every sacrifice                                                     U
  2  Syr Vondam, Sunstar Exemplar  x1    BW     Payoff — grows and gains on every other creature dying or exiled                      R
  2  Timeline Culler               x2    B      Fodder engine — recasts itself from the graveyard for {B} and 2 life, forever         U
  2  Umbral Collar Zealot          x2    B      Outlet — FREE unlimited repeatable sacrifice outlet                                   U
  3  Comet Crawler                 x1    B      Outlet/threat — lifelink attacker that eats a permanent for +2/+0                     C
  3  Susurian Voidborn             x2    B      Payoff — drains 1 both ways on every creature or artifact death                       U
  4  Elegy Acolyte                 x1    B      Payoff — 4/4 lifelink that draws on combat damage; Void makes a Robot each turn       R
  4  Swarm Culler                  x2    B      Outlet — tap-triggered sacrifice that draws a card, on a 2/4 flier                    C
  5  Alpharael, Stonechosen        x1    B      Payoff — halves the defender's life on every attack while Void is on                  M
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                          Qty   Color  Role                                                                                  Rar
  1  Embrace Oblivion              x1    B      Outlet/removal — its sacrifice cost is itself a payoff trigger                        C
  1  Tragic Trajectory             x2    B      Interaction — -10/-10 for one mana whenever Void is on                                U
```

### OTHER SPELLS (6)

```
CMC  Card                          Qty   Color  Role                                                                                  Rar
  1  Hylderblade                   x1    B      Equipment — +3/+1 that re-attaches itself free every end step Void is on              U
  1  Nutrient Block                x2    C      Fodder — indestructible Food that draws a card when it dies; a {2} mana sink          C
  3  Banishing Light               x1    W      Interaction — the only catch-all for a noncreature permanent                          C
  3  Dubious Delicacy              x1    B      Interaction/sink — flash -3/-3, a Food, 3 reach, and the deck's repeatable mana sink  U
  4  Sothera, the Supervoid        x1    B      Payoff — every creature death exiles a creature each opponent controls                M
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                                                                                       Rar
Seam Rip                      x2    W      vs fast MV<=2 starts — Robot/Lander/Food openings                                                             U
Banishing Light               x1    W      vs enchantments — the cube runs 16 and has ONE enchantment answer cube-wide                                   C
Dauntless Scrapbot            x1    C      vs the 31-card graveyard class — exiles each opponent's graveyard                                             U
Gravkill                      x2    B      vs recursive or oversized threats — exile, not destroy                                                        C
Radiant Strike                x2    W      vs the 52 non-Spacecraft artifacts Gravkill cannot reach; board 1-2 Swamps to Plains alongside                C
Vote Out                      x2    B      vs creature decks — unconditional destroy; convoke is fed by the board and the tapping triggers Swarm Culler  U
```

## ANALYSIS

### DECK IDENTITY

A white-black aristocrats deck whose engine and whose threats are the same cards. Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' costs no mana, has no tap and has no limit, so every permanent you control is convertible at instant speed as many times as you have bodies. Susurian Voidborn turns each death into a 2-point life swing; Syr Vondam, Sunstar Exemplar turns each into a +1/+1 counter and a life; Lightless Evangel grows on every sacrifice; Sothera, the Supervoid turns each creature death into a non-targeted edict. Timeline Culler makes the fodder genuinely renewable - it recasts ITSELF from the graveyard for {B} and 2 life, so the same card can be sacrificed every turn. All of that sacrificing keeps Void switched on, which turns Tragic Trajectory into a one-mana -10/-10, re-attaches Hylderblade for free every end step, and lets Alpharael, Stonechosen halve the defender's life on each attack.

### THE FREE OUTLET IS THE WHOLE DECK

Umbral Collar Zealot reads `Sacrifice another creature or artifact: Surveil 1.` No mana. No tap. No once-per-turn.
That is the difference between this deck and a pile of death triggers: every permanent you control is convertible,
at instant speed, as many times as you have bodies.

The Phase 6b assembly gate proved how load-bearing that is. I declared **outlet** as its own assembly role rather
than folding it into "enabler", and the gate immediately **failed at p=0.71** — with Umbral Collar Zealot x2 as the
only unconditional outlet and Comet Crawler attack-gated behind it, the deck simply did not find a sacrifice engine
often enough by turn 7. Swarm Culler x2 fixed it at p=0.78. Had the role been folded in with the fodder, the
combined number would have passed and the hole would have shipped.

Its instant speed is also the answer to removal: sacrifice the creature in response to the spell aimed at it, and
every payoff trigger resolves anyway.

### TIMELINE CULLER IS FODDER THAT NEVER RUNS OUT

`You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life.`

Sacrifice it and it goes to the **graveyard**, not exile — which is where it can be cast from. So one card supplies
a body every turn for `{B}` and 2 life, indefinitely. The 2 life is paid back by the engine itself: Susurian Voidborn
gains 1 on every death, and the deck runs two lifelink bodies.

This replaced Xu-Ifit, Osteoharmonist during the grill. Both make renewable fodder, but Xu-Ifit costs a rare slot,
taps, is sorcery-only, and does nothing at all on turn 3 into an empty graveyard. Timeline Culler needs no other
creature to exist.

### VOID IS ON, AND THAT CHANGES FOUR CARDS

Void reads: *if a nonland permanent left the battlefield this turn **or a spell was warped this turn**.* This deck
satisfies both halves as its normal turn — it sacrifices permanents, and it runs 4 warp copies (Timeline Culler x2,
Susurian Voidborn x2) that turn Void on without sacrificing anything.

| Card | What Void does |
|---|---|
| Tragic Trajectory | −2/−2 becomes **−10/−10** for one mana |
| Hylderblade | Re-attaches itself free at end step, so `Equip {4}` is never paid |
| Alpharael, Stonechosen | Halves the defender's life on attack |
| Elegy Acolyte | A free 2/2 Robot at end step |

Hylderblade is the sharpest of these: it re-attaches onto a **fresh** body after the previous holder was sacrificed,
which is this deck's core action. 10 of 15 creature copies have toughness 2 or less; +3/+1 converts them from trades
into threats.

### SOTHERA IS AN EDICT, NOT A SWEEPER

`Whenever a creature you control dies, each opponent chooses a creature they control and exiles it.` This is stated
precisely because it is easy to oversell: it trades **one of your creatures for one of theirs**, capped by your own
body count. It is favourable only because your deaths also carry Susurian Voidborn's drain and Syr Vondam's counters
— the same sacrifice is being paid for three times.

Two things make it better than parity in practice: the exile is **non-targeted**, so hexproof and protection do not
dodge it, and Timeline Culler makes the fodder side of the exchange renewable.

### KNOWN THIN SPOTS

- **16 lands against a recommended 17.** The recommendation moved during the grill only because cutting Xu-Ifit and
  Beamsaw Prospector dropped the accel count from 3 to 2. The deck's core actions cost 0–1 mana, so 16 is defensible,
  but 17 is the number the model wants.
- **The outlet role is the thinnest gate at p=0.78** (against a 0.75 floor). If you cut anything, do not cut an outlet.
- **The graveyard class is conceded in the mainboard.** No white or black card in this pool interacts with an
  opponent's graveyard except Chrome Companion, which bottoms one card per turn. Dauntless Scrapbot answers it from
  the sideboard.
- **The sideboard has a mana problem you have to play around.** Five of ten sideboard cards need `{W}` off six white
  sources. Boarding two or more of them means swapping 1–2 Swamps to Plains. Radiant Strike is not the one to leave
  out — it is the only in-colour answer to the 52 non-Spacecraft artifacts in this cube.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:6  2:8  3:5  4:4  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 6.3: Lightless Evangel@0.6, Lightless Evangel@0.6, Sothera, the Supervoid@0.8, Elegy Acolyte@0.6, Alpharael, Stonechosen@0.7) → p=0.91 (need ≥ 0.75)
  PASS  outlet: 6 copies (effective 4.1: Swarm Culler@0.6, Swarm Culler@0.6, Comet Crawler@0.5, Embrace Oblivion@0.4) → p=0.78 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.8: Timeline Culler@0.9, Timeline Culler@0.9) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 76%  T2 98%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Sothera, the Supervoid, Umbral Collar Zealot, Dubious Delicacy
  OK        single_large_threat: Tragic Trajectory, Embrace Oblivion, Banishing Light, Dubious Delicacy
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: White and black have no counterspell anywhere in this pool; the deck answers a resolved spell after the fact with Embrace Oblivion, Tragic Trajectory and Banishing Light rather than on the stack.
  CONCEDED  graveyard: No white or black card in this pool interacts with an opponent's graveyard except Chrome Companion, a colourless 2-drop whose {2},{T} ability bottoms ONE card per turn — too slow against the cube's 31 graveyard cards to be worth a maindeck slot. Dauntless Scrapbot ('exile each opponent's graveyard') answers the class from the sideboard, where it is boarded in against the reanimator and Fell Gravship decks specifically.
```

- No WARN-tier flags: curve PASS (1:6 2:8 3:5 4:4 5:1) and goldfish PASS (84% keepable, T2 play 98%). No response required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | CORRECTED after Challenger F2 marked this UNSATISFIED. The original entry named three abilities as flood outlets that are no longer claimed as such (two of them are still in the deck; one was cut) — all three cost ZERO mana by their own text, which is an argument that they ignore surplus mana, not that they consume it. The real sinks in this list are: Dubious Delicacy, added for exactly this reason ('{2}, {T}, Sacrifice this artifact: You gain 3 life' and '{2}, {T}, Sacrifice this artifact: Target opponent loses 3 life' — two repeatable-cost modes on one card); Nutrient Block x2 at {2} each; Timeline Culler x2, whose graveyard recast costs {B} and can be done every single turn indefinitely; and Honored Knight-Captain's {4}{W}{W} Equipment tutor, which is live now that Hylderblade is in the list. Timeline Culler is the important one — it is an unbounded per-turn mana sink, not a one-shot. |
| screw | mitigation | Six of 24 nonland cards cost 1 and eight more cost 2 - 14 of 24 at mana value 2 or less - so a two-land hand operates through turn 3. Goldfish reports 84% keepable and 98% turn-2 plays; turn-1 play rate is 76%, and this is stated as a turn-2 deck rather than a turn-1 one. (An intermediate revision changed 'eight' to 'seven'; that was a correction applied against the pre-repair curve and has been reverted - the repaired curve is 1:6 2:8 3:5 4:4 5:1.) |
| decapitation | mitigation | There is no single key card. The payoff role holds 8 copies across 6 names (Susurian Voidborn x2, Syr Vondam, Lightless Evangel x2, Sothera, Elegy Acolyte, Alpharael) at p=0.91, and the outlet role holds 6 copies across 4 names at p=0.78. Losing any one name leaves both roles staffed — which is why they were declared as separate assembly roles in the first place. |
| gas-out | mitigation | Four independent refuel sources, all attached to the engine rather than bolted on: Swarm Culler x2 ('Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card'); Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card'), so feeding it to an outlet is card-neutral; Elegy Acolyte ('Whenever one or more creatures you control deal combat damage to a player, you draw a card and lose 1 life'); and Timeline Culler x2, which is not a draw spell but removes the need for one - 'You may cast this card from your graveyard using its warp ability. Warp-{B}, Pay 2 life' means the same two cards supply an unbounded number of sacrifices, so the deck stops needing to DRAW fodder at all. |
| raced | accepted | Against the cube's fastest evasive starts this deck can fall behind, and mitigating would cost its identity: the obvious fixes are cheap white lifegain or a sweeper, and neither works here. Flight-Deck Coordinator reads 'At the beginning of your end step, if you control two or more tapped creatures, you gain 2 life' — it has NO lifelink and makes no body worth sacrificing (an earlier version of this entry called it 'cheap lifelink defence', which its oracle text does not support — Challenger F10). Dawnstrike Vanguard does have lifelink but costs {5}{W}, which is not cheap and is uncastable off 6 white sources. Zero Point Ballad at X=2 destroys 10 of this deck's 15 creature copies (the Challenger computed 11 of 17 against the pre-repair list; recomputed here against the repaired one). What the deck does have is drain and lifelink that turn a race into a life-swing comparison: Susurian Voidborn x2 gains on every death, Comet Crawler and Elegy Acolyte both have lifelink, Dubious Delicacy gains 3 or drains 3, and Alpharael halves the opponent's total regardless of the board. |
| disruption-fizzle | mitigation | The engine has no critical turn to interact with: Umbral Collar Zealot's outlet is an activated ability with no timing restriction, so a sacrifice can be made in RESPONSE to the removal spell aimed at the creature being sacrificed and the payoff triggers resolve anyway. Nutrient Block is indestructible, so 'destroy' effects cannot deny that fodder at all, and Timeline Culler recurs from the graveyard for {B} after any answer. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Syr Vondam, the Lucent | UNCOMMON, 2 copies available and a genuine finisher ('other creatures you control get +1/+0 and gain deathtouch until end of turn' on every attack) — but it costs {2}{W}{B}{B} in a deck with only 6 white sources, and a 5-drop contradicts the locked lowest-curve build. It is the first card to try if this list plays too flat. |
| Xu-Ifit, Osteoharmonist (the 'rebuild' framing) | INCLUDED, but only in the role its text supports. The shape judge flagged a rejected sketch for calling it a board-rebuilder: it returns exactly ONE creature per turn and strips it of all abilities, so a recurred Susurian Voidborn is a vanilla body. It earns its slot as a renewable FODDER source, not as recursion. |
| Scrounge for Eternity | Its sacrifice cost is a payoff trigger and it returns a full ability-intact creature, unlike Xu-Ifit — but at {2}{B} sorcery speed for one body it is a one-shot, and the deck needed repeatable outlets, not one-shot value. |
| Insatiable Skittermaw | Void is on nearly every turn in this deck, so it grows every end step — but a menace 2/2 that becomes a 3/3 is a worse use of a 3-mana slot than Comet Crawler, which is an outlet and a lifelink body. |
| Vote Out | Convoke makes it cheap with a wide board, but at sorcery speed for one creature it was cut for Honored Knight-Captain, which supplies two sacrificeable bodies for two mana. |
| Dubious Delicacy | A Food that is also removal and 3 reach. Cut because the deck's fodder is already 7 copies deep and its two sacrifice modes both cost {2} and tap it — slow next to Umbral Collar Zealot's free outlet. |
| Hullcarver | A 1-mana deathtouch artifact creature — good fodder that trades up — but it is the only body in the shortlist with NO death trigger and no sacrifice payoff, so it was the correct cut when the land count moved to 16. |
| Knight Luminary | ETB 1/1 Soldier token gives two bodies, but at {3}{W} against Honored Knight-Captain's {1}{W} for the same two bodies, it is two mana worse in a deck that wants to deploy and sacrifice on curve. |
| Virus Beetle | An artifact creature whose ETB makes each opponent discard — real disruption, but 1/1 for 2 with no death trigger is worse fodder than Beamsaw Prospector at the same rate. |
| Wedgelight Rammer | Two artifact bodies from one card, but at {3}{W} in a deck with 6 white sources and 3 white cards; the white in this deck is paying for Syr Vondam and Banishing Light, not for artifacts. |
| Zero Point Ballad | RARE. 'Destroy all creatures with toughness X or less. You lose X life.' It is a sweeper, but this deck IS the wide board — at X=2 it kills 12 of its own creature copies. Sideboard-only at best, and the rare budget is better spent on Sothera. |
| Archenemy's Charm | RARE. {B}{B}{B} is a real cost in a deck that also wants {W} on turn 2 for Syr Vondam; the modes (exile a creature, return two from the graveyard, or +2 counters with lifelink) are strong but none of them pay the sacrifice engine. |
| Chorale of the Void | RARE Aura that steals from the DEFENDING player's graveyard on attack — depends entirely on the opponent having creatures in their yard, and an Aura is a 2-for-1 against this cube's dense removal. |
| Exalted Sunborn | MYTHIC. Doubling token creation is real with Honored Knight-Captain and Gravpack Monoist, but at {3}{W}{W} it is uncastable off 6 white sources. |
| Sunstar Chaplain / Sunset Saboteur / Lightstall Inquisitor | RARES in white and black that do not interact with the sacrifice engine at all; with only 6 rare slots and 4 already spent on cards that do, none earns a slot. |
| Depressurize | '-3/-0 then destroy if power is 0 or less' answers only small or already-shrunk creatures; Tragic Trajectory's Void mode is -10/-10 for one mana and Void is on nearly every turn here. |
| Decode Transmissions / Hymn of the Faller | Both draw cards off the Void condition this deck turns on constantly, but the deck already refuels through Swarm Culler ('sacrifice another creature or artifact... draw a card'), Nutrient Block and Elegy Acolyte, all of which come attached to a body or a payoff. |
| Command Bridge | 'sacrifice it unless you tap an untapped permanent you control' on a deck that wants its permanents untapped for Umbral Collar Zealot and Swarm Culler; the WB duals already cover fixing. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 17 recommended  [PASS]
Avg CMC:     2.42   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.44 adj [MV 2.42 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  89.3%  prod  81.2%  gap  +8.1pp  [OK]
  W  demand  10.7%  prod  37.5%  gap -26.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Mainboard count == 40                                    PASS (40)
Sideboard count == 10                                    PASS (10)
Every card exists in the cube pool by exact name         PASS
Commons/uncommons <= 2 copies                            PASS
Rares/mythics <= 1 copy                                  PASS
<= 6 rares/mythics TOTAL across MB+SB (lands count)      PASS (5/6)
   Syr Vondam, Sunstar Exemplar (R), Sothera, the Supervoid (M), Elegy Acolyte (R), Alpharael, Stonechosen (M), Godless Shrine (R)
Every nonland card usable in W/B                                    PASS
Splash cap                                               PASS (no splash colours declared)
Basic lands unrestricted (format-supplied)               PASS
```
