---
deck_name: "wb-hylderblade-void"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-06T03:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  11x Swamp
  3x Plains
  2x Sunlit Marsh           WB dual, enters tapped
  1x Godless Shrine         WB dual, untapped for 2 life
```

### CREATURES (12)
```
CMC  Card                            Qty   Color  Role                                    Rar
2    Syr Vondam, Sunstar Exemplar    x1    BW     Menace carrier, grows on deaths/exiles  R
2    Timeline Culler                 x2    B      Haste carrier, re-warps from graveyard  U
3    Faller's Faithful               x2    B      Removal on a body                       U
3    Insatiable Skittermaw           x2    B      Menace carrier, Void self-growth        C
3    Rayblade Trooper                x1    W      Counter placement + warp Void switch    U
3    Susurian Voidborn               x2    B      Warp {B} Void switch + drain            U
4    Elegy Acolyte                   x1    B      Lifelink carrier, draws on connection   R
5    Alpharael, Stonechosen          x1    B      Void finisher - halves defender's life  M
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Embrace Oblivion                x1    B      Removal whose sac cost guarantees Void  C
2    Hymn of the Faller              x2    B      Card draw, doubled on a Void turn       U
3    Emergency Eject                 x2    W      Destroy ANY nonland permanent, instant  U
4    Gravkill                        x1    B      Exile a creature or Spacecraft, instant C
```

### OTHER SPELLS (5)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Hylderblade                     x2    B      THESIS - +3/+1, free Void self-attach   U
1    Squire's Lightblade             x2    W      Flash self-attaching Equipment          C
5    Auxiliary Boosters              x1    W      Equipment that brings its own carrier   C
```

## SIDEBOARD (10)
```
Card                            Qty   Color  Role / When to board in                         Rar
Focus Fire                      x1    W      vs the 22.5% evasion axis, scales with board    C
Seam Rip                        x2    W      vs cheap permanents of any type                 U
Zero Point Ballad               x1    B      vs wide boards; X set beneath our carrier       R
Banishing Light                 x1    W      vs a resolved noncreature permanent             C
Dauntless Scrapbot              x1    C      vs graveyard decks, on a body                   U
Radiant Strike                  x2    W      vs artifacts (30% of cube) + 3 life vs races    C
Vote Out                        x2    B      vs a large creature; convoke makes it cheap     U
```

## ANALYSIS

### DECK IDENTITY

W/B Equipment Voltron built as a flexible-toolbox midrange deck around Hylderblade. Hylderblade grants +3/+1 - the largest single buff in the cube - and its Equip {4} is never paid: its Void trigger re-attaches it for free at end step on any turn a nonland permanent left the battlefield or a spell was warped. Every removal spell the deck casts is therefore also the switch that re-arms the Equipment, and the warp creatures turn Void on when the opponent presents no removal target at all. Black removal clears blockers so a menace carrier connects, and Alpharael, Stonechosen converts any Void attack into half the defender's life.

### THE VOID SWITCH COUNT IS THE WHOLE DECK

Hylderblade, Insatiable Skittermaw and Alpharael all read the same clause: "if a nonland permanent left the battlefield this turn or a spell was warped this turn." The deck's entire value proposition is how often that is true. Counted against this list, **11 of 23 nonland cards (47.8%) switch Void on by themselves**:

| Leg | Cards | Copies |
|---|---|---|
| "a spell was warped this turn" | Timeline Culler x2, Susurian Voidborn x2, Rayblade Trooper x1 | 5 |
| "a nonland permanent left the battlefield" | Embrace Oblivion x1, Faller's Faithful x2, Emergency Eject x2, Gravkill x1 | 6 |

Two of these are qualitatively better than the rest. **Embrace Oblivion** sacrifices an artifact or creature as an additional cost, so it switches Void on even if the removal is countered and even against an empty opposing board — it is the only unconditional switch in the list. **Timeline Culler** reads "You may cast this card from your graveyard using its warp ability," so it is the only *repeatable* switch: one card, arbitrarily many Void turns at {B} and 2 life each.

Deliberately **not** counted: Hymn of the Faller's extra draw, Elegy Acolyte's token, Insatiable Skittermaw's counter and Hylderblade's own re-attach are all Void *payoffs*, not switches — counting them would be circular. Tragic Trajectory was cut for exactly this reason: its -10/-10 mode requires Void to already be on, so it can never bootstrap.

### WHY THE EQUIP COST NEVER GETS PAID

Hylderblade's printed Equip {4} is unpayable on a 17-land curve that wants to spend turns 2–4 developing. The Void trigger is the whole point: it attaches **at the beginning of your end step**, after combat, so the +3/+1 is live for the *following* turn's attack. That timing is also the answer to removal — if the carrier dies, the Equipment stays on the battlefield and the very next Void end step re-attaches it to a fresh body at no cost. A Voltron deck normally gets two-for-one'd by a single removal spell; this one does not.

### THE CARRIER WANTS MENACE, NOT SIZE

+3/+1 on a 2/2 is a 5/3 — big enough to matter, small enough to be chump-blocked. That is why the carriers were chosen for evasion rather than base stats: Insatiable Skittermaw x2 and Syr Vondam, Sunstar Exemplar x1 both have menace, so a single chump block does not stop them, and Auxiliary Boosters' token arrives with flying pre-attached. Syr Vondam is the best of them: Hylderblade takes it from 2/2 to 5/3, which crosses the power-4 threshold on its own death trigger — "When Syr Vondam dies or is put into exile while its power is 4 or greater, destroy up to one target nonland permanent" — so answering the carrier costs the opponent a permanent.

### KNOWN TOOLCHAIN ARTIFACT

The mana audit reports `Ramp cards: 2`. That is a tagger false positive: the two cards carrying the land-fetch tag are Emergency Eject, whose oracle reads "**Its controller** creates a Lander token" — the Lander goes to the opponent. Real acceleration in this deck is zero. The land recommendation is 17 under either value, so nothing downstream changes, but the trace should not be read as claiming this deck ramps.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:5  3:9  4:2  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.4: Insatiable Skittermaw@0.8, Insatiable Skittermaw@0.8, Alpharael, Stonechosen@0.8) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.5: Hylderblade@0.85, Hylderblade@0.85, Embrace Oblivion@0.8) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 64%  T2 92%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: W/B has no maindeck sweeper this curve can afford, and a symmetric wipe would kill the carrier the whole Hylderblade plan is stacked onto. Zero Point Ballad ('Destroy all creatures with toughness X or less') is sideboarded for that axis; because Hylderblade grants only +3/+1 toughness, X can be set beneath our own carrier.
  OK        single_large_threat: Gravkill, Faller's Faithful, Embrace Oblivion
  OK        noncreature_permanents: Emergency Eject
  CONCEDED  stack: The pool contains no counterspell in white or black at all, so this axis cannot be covered in these colours at any slot cost; the deck answers threats after they resolve instead.
  CONCEDED  graveyard: Cube graveyard density is 31 of 249 nonland cards (12.5%) and none of it is a fast combo kill. Dauntless Scrapbot ('exile each opponent's graveyard') is sideboarded for the decks where it is the losing axis.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus lands pay equip costs the plan otherwise never affords: Hylderblade's own 'Equip {4}' becomes payable on a non-Void turn, and Squire's Lightblade and Auxiliary Boosters both read 'Equip {3}' to move an attachment onto a fresh carrier. Vote Out's convoke from the sideboard is a second sink. Warp is deliberately NOT cited here - it is a mana-saving mechanic and belongs to the screw entry. |
| screw | mitigation | Warp is the screw insurance: Susurian Voidborn 'Warp {B}', Timeline Culler 'Warp-{B}, Pay 2 life' and Rayblade Trooper 'Warp {1}{W}' let a 2-3 mana card deploy for one or two mana on a short mana base, then be re-cast later from exile. 5 of 23 nonland cards cost one mana and 5 cost two. The goldfish simulator (1000 hands, seed 0) reports 87% keepable and 88% with three lands by turn 3. |
| decapitation | mitigation | Hylderblade is not lost with its carrier - the Equipment stays on the battlefield and the next Void end step re-attaches it to another creature for free. That is the structural answer, and it is why this build was chosen. Carrier redundancy is 8 payoff copies across 6 names, and Auxiliary Boosters ('create a 2/2 colorless Robot artifact creature token and attach this Equipment to it') plus Elegy Acolyte's Void token both manufacture a fresh re-attach target. Stated honestly: the mainboard has no instant-speed protection, so targeted removal on the carrier always trades. |
| gas-out | mitigation | Three axes. Draw: Hymn of the Faller x2 ('you draw a card and lose 1 life. Void - ... draw another card') and Elegy Acolyte x1 ('Whenever one or more creatures you control deal combat damage to a player, you draw a card and lose 1 life') = 3 of 23 nonland cards. Two-for-ones: Faller's Faithful x2 is removal stapled to a body = 2 of 23. Warp double-casting: Timeline Culler x2, Susurian Voidborn x2, Rayblade Trooper x1 = 5 of 23 cards that are cast twice from one card, and Timeline Culler does it from the graveyard. Syr Vondam, Sunstar Exemplar converts each creature death or exile into a +1/+1 counter and a life, so attrition itself feeds the carrier. |
| raced | accepted | The curve is 3-heavy (9 of 23 nonland cards at MV 3) and the goldfish is turn 6, so against the cube's fastest evasive starts (56 evasion cards, 22.5% density) this deck interacts rather than races. Mitigating would mean cutting the 4- and 5-drop payoffs for cheap bodies, which removes Alpharael and Elegy Acolyte - the cards that make a Hylderbladed carrier lethal rather than merely large. The maindeck hedge is Elegy Acolyte's lifelink; Focus Fire and Radiant Strike come in from the board. |
| disruption-fizzle | mitigation | The critical turn is an end-step trigger and an attack, neither of which is a spell, so no counterspell can answer Hylderblade's re-attach or Alpharael's halving trigger - and the pool contains no counterspell in white or black at all. If the carrier is removed in response to the attack trigger, Hylderblade survives and re-attaches next Void end step at no cost: the deck loses a turn, not the engine. The genuine hole, stated rather than papered over: the mainboard has zero instant-speed protection, so removal on the carrier is never answered, only recovered from. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| All-Fates Stalker | Its ETB exile lasts only 'until this creature leaves the battlefield', so it is a reversible tempo blink rather than removal - and warped, it returns the exiled creature at the same end step. Cut once it stopped being counted as an answer. |
| The Dominion Bracelet | Mythic. Stripped of its {15} ability (which needs 15 power to be free; a Hylderbladed carrier reaches 5-7), its text is '+1/+1' with 'Equip {1}' - the third-best of three attachments paying the highest rarity cost, in a deck whose real Equipment attaches for free. The slot bought Elegy Acolyte instead. |
| Syr Vondam, the Lucent | {2}{W}{B}{B} against 6 white sources and a 25%-white pip split is the hardest cast available in these colours. Its mass deathtouch also does not make the carrier unblockable - deathtouch makes blocking unprofitable but does not stop a chump block from a player facing lethal. |
| Tragic Trajectory | Its Void mode requires Void to ALREADY be on, so it can never bootstrap the engine - it was the only interaction card that was not also a switch. Base mode is -2/-2, frequently dead against the cube's 3-toughness commons. |
| Hardlight Containment | Rare. 'Enchant artifact you control' - this list holds 5 artifact copies of 23 nonland cards, so it is dead in the games where none has landed, and it competes for the same artifacts Hylderblade wants. Gravkill ('Exile target creature or Spacecraft') took the slot unconditionally. |
| Gravblade Heavy | 'As long as you control an artifact, this creature gets +1/+0 and has deathtouch' runs off the same 5-of-23 artifact denominator, so its bonus is off in a majority of board states. |
| Reroute Systems | Neither mode reliably makes a permanent leave the battlefield, so it is not a Void switch: the indestructible mode makes one LESS likely to leave, and the damage mode needs a TAPPED creature and only trips Void if 2 damage is lethal. |
| Decode Transmissions | Draw-2 at MV 3 in a list already 9-deep at MV 3. Hymn of the Faller fixes the same draw hole at MV 2 and its Void rider rides the identical switch density. |
| Starfield Shepherd | A 3/2 flier would be the deck's only air evasion, but {3}{W}{W} against 6 white sources at a 25% white pip share is uncastable here. |
| Sunset Saboteur | Rare. A 2-mana menace carrier with ward looks ideal, but 'Whenever this creature attacks, put a +1/+1 counter on target creature an opponent controls' grows a blocker every single swing - the opposite of what a Voltron carrier wants. |
| Chorale of the Void | Rare Aura. Its Void clause is a SACRIFICE clause, not a payoff - 'sacrifice this Aura unless a nonland permanent left the battlefield this turn' - so it punishes the non-Void turns rather than rewarding the Void ones, and unlike Hylderblade it dies with its carrier. |
| Voidforged Titan / Elegy Acolyte's grindy shell | The rejected grindy-value sketch built on Voidforged Titan x2 and card-draw engines; the shape judge rejected it as 'a control plan wearing an aggressor's role' that draws cards without advancing the equip clock to turn 6. Elegy Acolyte survived the cut on its own merits as a lifelink body. |
| Auxiliary Boosters (second copy) | At MV 5 in a 17-land deck, one copy is the ceiling; a second would put 2 of 23 nonland cards above the curve's usable top. |
| Meltstrider's Gear / Atomic Microsizer / Illvoi Light Jammer | Off-colour Equipment (G, U, U). W/B fixing is 3 duals and no pool land produces W/B plus a third colour, so no off-colour card was considered and splash_colors is empty. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.19 adj [MV 2.61 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  75.0%  prod  82.4%  gap  -7.4pp  [OK]
  W  demand  25.0%  prod  35.3%  gap -10.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard
  [PASS] commons_uncommons_max_2_copies: OK
  [PASS] rares_mythics_max_1_copy: OK
  [PASS] rare_mythic_total_cap_6: 5 used - Alpharael Stonechosen (M, MB), Elegy Acolyte (R, MB), Syr Vondam Sunstar Exemplar (R, MB), Godless Shrine (R, MB land), Zero Point Ballad (R, SB). 1 slot deliberately unused.
  [PASS] basic_lands_exempt: Swamp 11, Plains 3 - format-supplied, unlimited
  [PASS] colour_usability: all 22 distinct nonland names usable in W/B via effective_cost.best_mode; no splash
```