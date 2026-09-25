---
deck_name: "rw-ragost-food-combustion"
cube_id: "eoe"
cube_slug: "eoe"
colors: "RW"
format: "40-card"
built_at: "2026-08-07T17:35:19Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
  8x Mountain
  4x Plains
  1x Sacred Foundry   ({T}: Add {R} or {W}.) As this land enters, you may pay 2 life. If you
  2x Sacred Peaks   ({T}: Add {R} or {W}.) This land enters tapped.
```

### CREATURES (13)

```
CMC  Card                     Qty   Color  Role                                                                                             Rar
  1  Kavaron Harrier          x2    R      Threat — 1-mana artifact body, makes artifacts on attack                                         U
  1  Rust Harvester           x1    R      Payoff — converts artifact cards in the graveyard into escalating face damage                    R
  1  Slagdrill Scrapper       x2    R      Engine — repeatable sac outlet + card draw                                                       C
  2  Chrome Companion         x1    C      Threat — artifact body, tap-to-gain-life untaps Ragost; graveyard answer                         C
  2  Oreplate Pangolin        x2    R      Threat — scales with artifact flood                                                              C
  2  Ragost, Deft Gastronaut  x1    RW     Payoff — Food combustion engine                                                                  R
  3  Haliya, Guided by Light  x1    W      Payoff — converts incidental lifegain into cards                                                 R
  3  Weftstalker Ardent       x2    R      Payoff — artifact-ETB drain                                                                      U
  4  Sami, Ship's Engineer    x1    RW     Threat/engine — free artifact token every turn you attack with two creatures                     U
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                     Qty   Color  Role                                                                                             Rar
  1  Focus Fire               x1    W      Interaction — the only instant-speed removal; X = 2 + creatures/Spacecraft                       C
  1  Plasma Bolt              x1    R      Interaction — 3 damage to ANY target most turns; Void is live off constant sacrifices and warps  C
  3  Ruinous Rampage          x1    R      Payoff — 3 damage to each opponent, one Ragost activation as a spell                             U
```

### OTHER SPELLS (9)

```
CMC  Card                     Qty   Color  Role                                                                                             Rar
  1  Nutrient Block           x2    C      Engine — indestructible Food, replaces itself                                                    C
  1  Squire's Lightblade      x2    W      Enabler — 1-mana artifact that triggers 4 ETB payoffs                                            C
  2  Melded Moxite            x2    R      Engine — filters, converts into a second artifact                                                C
  2  Weapons Manufacturing    x1    R      Engine — doubles every nontoken artifact into a Munitions                                        R
  3  Banishing Light          x1    W      Interaction — catch-all exile for any nonland permanent                                          C
  3  Warmaker Gunship         x1    R      Threat — 4/3 Spacecraft whose ETB damage scales with artifact count                              R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                              Rar
Reroute Systems          x1    W      vs removal aimed at Ragost and vs the damage half of the cube's 5 sweepers — indestructible for {W}  U
Drill Too Deep           x2    R      vs artifacts — 'Destroy target artifact' at 2 mana                                                   C
Banishing Light          x1    W      vs enchantments — the cube has 16 and only ONE enchantment answer cube-wide (green)                  C
Cut Propulsion           x2    R      vs the 56-card evasion class — kills any flier at any size, doubled damage vs flying                 U
Dauntless Scrapbot       x2    C      vs the 31-card graveyard class — exiles each opponent's graveyard on an artifact body                U
Radiant Strike           x2    W      vs the 74-card artifact class and tapped attackers; the 3 life also untaps Ragost                    C
```

## ANALYSIS

### DECK IDENTITY

A red-white artifact aggro deck that wins with a creature board and converts its spent artifacts into reach. Ragost, Deft Gastronaut retroactively turns every artifact already in play into a Food with a lifegain sacrifice ability, and converts each Food into 3 damage to each opponent. CORRECTED RATE (Challenger F1): the SUSTAINED rate is one activation - 3 damage - per turn cycle. A second activation on the opponent's turn is available, but keeping the loop running then requires life gained during THEIR turn, so a full 6-damage cycle costs up to 4 artifacts and 6 mana against a library holding 15 nontoken artifacts. Six damage is a burst, not a clock. Weapons Manufacturing turns each nontoken artifact into two, the second carrying a 2-damage leave-the-battlefield trigger; Sami, Ship's Engineer makes a free artifact token at every end step you attacked with two creatures, the only card-free Food supply in these colours; and Rust Harvester recycles artifact cards Ragost has already eaten into escalating damage to any target. The plan does not require Ragost: Weftstalker Ardent x2 converts the same artifact flood into direct damage on its own.

### THE RAGOST LOOP, STATED HONESTLY

The temptation with Ragost is to describe an engine that fires twice every turn. It does not, and the
distinction decides how you sequence.

Oracle: `{1}, {T}, Sacrifice a Food: Ragost deals 3 damage to each opponent.` and
`At the beginning of each end step, if you gained life this turn, untap Ragost.`

On your own turn the untap is nearly free — Haliya, any artifact ETB, Chrome Companion becoming tapped,
or a single activation of the `{2}, {T}, Sacrifice this artifact: You gain 3 life` ability Ragost grants
every artifact will all satisfy it. So you reliably get one activation per turn and untap into the
opponent's turn. The **second** activation, on their turn, is available — but untapping *again* for your
next turn needs life gained during *their* turn, and the deck's only instant-speed lifegain is flashing
Squire's Lightblade with Haliya out.

| Rate | Cost | When |
|---|---|---|
| 3 damage / turn cycle | 1 Food + `{1}` | Sustained, from turn 4 |
| 6 damage / turn cycle | up to 4 artifacts + `{1}{1}{2}{2}` | A burst turn, not a clock |

Against a library holding 15 nontoken artifacts, four artifacts consumed in a single cycle exceeds the
deck's expected draw. Treat Ragost as **3 reliable damage a turn that ignores blockers**, and the burst
as something you spend once, to finish.

### WHY SAMI IS IN A DECK THAT ISN'T ABOUT TOKENS

`At the beginning of your end step, if you control two or more tapped creatures, create a tapped 2/2
colorless Robot artifact creature token.` Thirteen of the 25 nonland cards are creatures and **none has
vigilance**, so attacking with any two turns it on; Ragost tapping for his own ability plus one attacker
also does it.

That token is worth four separate things at once: a Food for Ragost (3 damage), an Oreplate Pangolin
counter, two Weftstalker Ardent pings, and a Haliya life trigger — which is itself the Ragost untap. It
is the only card in red or white that produces an artifact every turn **without spending a card**, which
is precisely the constraint the loop above runs into. It does *not* trigger Weapons Manufacturing, whose
clause reads "nontoken artifact."

Its Station interaction is a quiet bonus: Wedgelight Rammer, the card Sami replaced, was a noncreature
artifact and could never Station Warmaker Gunship. Sami's tokens are creatures and can.

### THE MUNITIONS MATH

Weapons Manufacturing reads `Whenever a nontoken artifact you control enters, create a colorless artifact
token named Munitions with "When this token leaves the battlefield, it deals 2 damage to any target."`
15 of 25 nonland cards are nontoken artifacts, so it roughly doubles the deck's permanent count.

The interaction worth knowing: under Ragost, a Munitions token **is a Food**. Sacrificing one to Ragost's
damage ability deals 3 to each opponent *and* the token leaving the battlefield deals another 2 to any
target. That is 5 damage from a permanent that cost you nothing but the artifact that made it.

### WHAT THE MANA BASE IS DOING

Pip demand is 18 red to 7 white — 72/28 — but white production is 46.7%, an 18.7-point over-supply the
audit explicitly passes. That is deliberate, not sloppy: the two cards that most want to resolve on curve
are Ragost at `{R}{W}` on turn 2 and Sami at `{2}{R}{W}` on turn 4, and both need white the turn you cast
them. Sacred Foundry is the only untapped-capable RW dual in the entire pool; Sacred Peaks x2 always
enter tapped, which is the price of the second and third dual.

Command Bridge was rejected on its own text: `When this land enters, sacrifice it unless you tap an
untapped permanent you control` makes it a bad turn-1 land in a deck with eleven 1-drops.

### KNOWN THIN SPOTS

Stated plainly rather than buried:

- **15 lands against a recommended 16.** The goldfish check returns 80.2% keepable hands against an 80.0%
  threshold. That is the margin, not a cushion. If this deck disappoints, the first change to try is the
  16th land over the second Squire's Lightblade.
- **One Spacecraft.** Warmaker Gunship is now alone, so nothing in the 50 is justified on a Spacecraft
  count any more — that was a real flaw the grill caught in the first draft's sideboard.
- **Wide boards are conceded.** Lithobraking's `2 damage to each creature` would kill 9 of this deck's 13
  creature copies. There is no sweeper this deck can play; the plan is to race, and Ragost's damage
  ignoring the opponent's board is what makes racing viable.
- **No counterspells exist in red or white anywhere in this pool.** The stack is unanswerable by
  construction.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (25 nonland):  1:11  2:7  3:6  4:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.3: Weftstalker Ardent@0.6, Weftstalker Ardent@0.6, Rust Harvester@0.7, Ruinous Rampage@0.4) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 14 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 80%
  play by turn: T1 91%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper fits this list: Lithobraking's '2 damage to each creature' would kill 9 of this deck's 13 creature copies and Ruinous Rampage's artifact mode exiles its own Foods; the plan is to race, since Ragost's '{1},{T}, Sacrifice a Food: Ragost deals 3 damage to each opponent' ignores the opponent's board entirely for a sustained 3 damage per turn cycle (6 only in a burst turn).
  OK        single_large_threat: Warmaker Gunship, Banishing Light, Plasma Bolt, Focus Fire, Rust Harvester
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: Red and white have no counterspell anywhere in this pool; the deck's answer to a spell it cannot counter is to have already converted its board into direct damage.
  OK        graveyard: Chrome Companion
```

- No WARN-tier flags: curve PASS and goldfish PASS (keepable 80%, T1 play 92%, T2 play 99%). No response required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands convert to cards and damage: Slagdrill Scrapper x2 reads '{2}, {T}, Sacrifice another artifact OR LAND: Draw a card', so an excess land is literally a card; Rust Harvester and Ragost both have repeatable mana-sink activations ({2} and {1} respectively, every turn); Kavaron Harrier turns {2} per attack into a fresh 2/2 artifact token. |
| screw | mitigation | Two-land hands are keepable because 11 of 25 nonland cards cost exactly 1 and 7 more cost 2 - a 2-land hand deploys on curve through turn 3. Melded Moxite x2 ('you may discard a card. If you do, draw two cards') digs. Stated honestly: the goldfish check reports 80.2% keepable against an 80.0% threshold - that IS the margin, not a cushion, and it is the price of building to 15 lands when the audit recommends 16. |
| decapitation | mitigation | Ragost answered on sight leaves the plan intact. Non-Ragost face-damage redundancy is 4 of 25 nonland cards (Challenger F8 corrected the inflated '6', which had counted Ragost himself and the non-damaging Haliya): Weftstalker Ardent x2 ('deals 1 damage to each opponent' per creature-or-artifact ETB, and 20/25 nonland cards trigger it), Rust Harvester ('deals damage equal to its power to any target'), and Ruinous Rampage ('deals 3 damage to each opponent'). Reroute Systems in the sideboard ('Target artifact or creature gains indestructible until end of turn') protects him for {W}. |
| gas-out | mitigation | Four card-replacing effects keep the hand stocked: Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card') replaces itself the moment Ragost eats it; Melded Moxite x2 draws two for one discard on entry; Slagdrill Scrapper x2 turns any spare artifact or land into a card; and Haliya draws every turn the deck gains 3 life, which one Food sacrifice does by itself. |
| raced | accepted | The deck loses some races to the cube's fastest evasive starts and cannot mitigate without abandoning its identity: adding lifegain-for-defence cards (Flight-Deck Coordinator, Dawnstrike Vanguard) means white cards that make no artifact, starving Weapons Manufacturing, Oreplate Pangolin and Weftstalker Ardent of the ETB count they are paid on. The cost of mitigating is the engine itself. What the deck does have is a sustained 3 damage per turn cycle from Ragost that ignores the opponent's board - NOT 6, see the corrected rate in deck_identity - plus Sami, Ship's Engineer replacing the consumed Food for free each turn. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with - the clock is incremental (3 damage per Food, 1 per ETB, 2 per Munitions leaving) rather than a burst answerable mid-chain. Removal aimed at Ragost mid-activation still leaves the artifacts on board for Weftstalker Ardent and Rust Harvester. Nutrient Block x2 is indestructible, so 2 of the 15 nontoken artifacts survive 'destroy' effects; the other 13 do not - an earlier overstatement, corrected. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Memorial Vault | RARE, cut for the 6-rare cap. '{T}, Sacrifice another artifact: Exile the top X cards...' competes with Ragost for the same artifacts and taps to do it; Ragost's damage mode is the better use of a Food. |
| Rust Harvester | RARE, cut for the 6-rare cap. Its ability exiles artifact cards from your GRAVEYARD, not the battlefield, so it does not consume Foods; a 1/1 body for a rare slot the engine cards need more. |
| Pain for All | RARE, cut for the 6-rare cap. An Aura on a creature is a 2-for-1 against the removal-dense WB and R decks in this cube, and the deck's reach already comes from Ragost. |
| Tannuk, Steadfast Second | MYTHIC, cut for the 6-rare cap. Warp {2}{R} on artifacts is card-disadvantage-neutral acceleration, but at 4 mana it is slower than simply casting the 1- and 2-drop artifacts the deck already runs. |
| Dawnsire, Sunstar Dreadnought | MYTHIC, cut. Needs 10 charge counters before it does anything and 20 to attack; this deck's creatures average 2 power, so Stationing it costs more turns than the Ragost clock takes to win. |
| Pinnacle Starcage | RARE, cut. 'exile all artifacts and creatures with mana value 2 or less' is symmetric and this deck's core is 1- and 2-mana artifacts — it exiles more of ours than theirs. |
| The Seriema | RARE, cut for the 6-rare cap. It tutors a legendary creature, which finds Ragost — but at 3 mana plus needing to then cast him, it is a turn slower than the games this deck wants to play. |
| Terminal Velocity | RARE at 6 mana; the deck's average MV is under 2.5 and it has no large artifact worth cheating in. |
| Devastating Onslaught | MYTHIC. Copying an artifact X times does make X Foods, but at {X}{X}{R} making 3 copies costs 7 mana — Ragost only converts 2 of them per turn cycle anyway. |
| Zookeeper Mechan | A 1/3 artifact that taps for {R}, but tapping it for mana competes with Stationing and with Chrome Companion's tap trigger; the deck is not mana-constrained at 2 mana. |
| Starport Security | A 1/1 artifact body, but '{3}{W},{T}: Tap another target creature' costs 4 (2 with a +1/+1 counter) and this build runs no reliable counter source. |
| Dockworker Drone | A 2-mana 1/1 artifact whose death trigger moves counters — the deck runs 0 other +1/+1-counter payoffs, so the trigger is blank here. |
| Focus Fire | 'deals X damage to target attacking or blocking creature' only works in combat; the deck wants removal it can use proactively on the opponent's blockers before attacking. |
| Emergency Eject | 'Destroy target nonland permanent. Its controller creates a Lander token' — giving a ramp token back is a real cost, and Banishing Light answers the same targets without it. |
| Drill Too Deep | The relevant mode is 'Destroy target artifact', which is a sideboard card in a cube where only some decks play artifacts; the charge-counter mode needs a Spacecraft already down. |
| Susurian Voidborn | SPLASH candidate not taken. Its drain triggers on things DYING, and this deck sacrifices only 1-2 artifacts per turn cycle — 1-2 damage, against Ragost's 3 per Food for the same fodder. |
| Comet Crawler | SPLASH candidate not taken. Lifelink attacker that eats an artifact for +2/+0, but it competes with Ragost for Foods and the black splash only supports 3 cards. |
| Secluded Starforge | RARE land producing only {C}; '{5},{T}: Create a 2/2 Robot' is a 5-mana artifact-maker in a deck whose curve tops at 4. Colorless-only is a real cost in a two-colour deck. |
| Command Bridge (2nd copy) | 'sacrifice it unless you tap an untapped permanent you control' makes it a poor turn-1 land; one copy is enough to support a 1-card black splash. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     1.88   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.49 adj [MV 1.88 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  72.0%  prod  73.3%  gap  -1.3pp  [OK]
  W  demand  28.0%  prod  46.7%  gap -18.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Mainboard count == 40                                    PASS (40)
Sideboard count == 10                                    PASS (10)
Every card exists in the cube pool by exact name         PASS
Commons/uncommons <= 2 copies                            PASS
Rares/mythics <= 1 copy                                  PASS
<= 6 rares/mythics TOTAL across MB+SB (lands count)      PASS (6/6)
   Ragost, Deft Gastronaut (R), Haliya, Guided by Light (R), Warmaker Gunship (R), Weapons Manufacturing (R), Rust Harvester (R), Sacred Foundry (R)
Every nonland card usable in R/W                                    PASS
Splash cap                                               PASS (no splash colours declared)
Basic lands unrestricted (format-supplied)               PASS
```
