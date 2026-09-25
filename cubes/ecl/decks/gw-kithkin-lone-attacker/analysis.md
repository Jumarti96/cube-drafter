---
deck_name: "gw-kithkin-lone-attacker"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GW"
format: "40-card"
built_at: "2026-08-11T22:46:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
4x Forest                   Land — basic
8x Plains                   Land — basic
2x Evolving Wilds           Land — basic fetch
2x Radiant Grove            Land — GW dual, enters tapped
1x Temple Garden            Land — GW untapped-capable
```

### CREATURES (14)

```
CMC  Card                         Qty   Color  Role                                                       Rar
1    Goldmeadow Nomad             x2    W      Engine — one-mana Kithkin worth +2 to X: the body, then a token from the graveyard C
1    Kinsbaile Aspirant           x2    W      Engine — one-mana Kithkin                                  U
2    Bristlebane Battler          x1    G      Payoff — lone attacker with NATIVE trample and ward {2}    R
2    Eclipsed Kithkin             x1    GW     Engine — two-mana Kithkin that digs four deep for another  U
2    Great Forest Druid           x1    G      Carrier — 0/4 gap+4 Bark carrier and any-colour fixer      C
2    Thoughtweft Lieutenant       x2    GW     Connection — repeatable trample on every Kithkin ETB       U
3    Crossroads Watcher           x1    G      Payoff — lone attacker with native trample; grows per creature ETB C
4    Bristlebane Outrider         x2    G      Payoff — lone attacker with evasion; works with neither payoff drawn U
4    Thoughtweft Imbuer           x2    W      Payoff — +X/+X per Kithkin to a creature attacking alone   U
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                         Qty   Color  Role                                                       Rar
3    Crib Swap                    x2    W      Interaction — instant unconditional exile; clears the blocker precombat U
3    Pyrrhic Strike               x1    W      Interaction — modal artifact/enchantment + mv>=3 creature  U
```

### OTHER SPELLS (6)

```
CMC  Card                         Qty   Color  Role                                                       Rar
2    Bark of Doran                x2    W      Payoff — converts the lone attacker's toughness into damage U
3    Ajani, Outland Chaperone     x1    W      Engine — a Kithkin token every turn, immune to creature removal M
3    Clachan Festival             x2    W      Engine — two Kithkin tokens on entry, then one per {4}{W}  U
3    Gilt-Leaf's Embrace          x1    G      Connection — flash trample + indestructible on the swing turn C
```

## SIDEBOARD (10)

```
Card                         Qty   Color  Role / When to board in                                        Rar
Chomping Changeling          x2    G      vs artifacts (11) / enchantments (21); also a changeling Kithkin U
Protective Response          x2    W      vs blockers — convoked off the idle Kithkin; a removed blocker lets a trampler through U
Unforgiving Aim              x2    G      vs evasion (41 cube cards) / enchantments (21)                 C
Rooftop Percher              x2    C      vs graveyard (39); a 3/3 flier, and a changeling so it still counts as Kithkin C
Selfless Safewright          x1    G      vs removal-heavy decks — names Kithkin for hexproof+indestructible R
Winnowing                    x1    W      vs wide non-tribal boards — choosing a Kithkin costs this deck almost nothing R
```

## ANALYSIS

### DECK IDENTITY

GW Kithkin lone-attacker aggro. The deck goes wide on Kithkin and then attacks with exactly ONE creature, because Thoughtweft Imbuer reads 'Whenever a creature you control attacks alone, it gets +X/+X until end of turn, where X is the number of Kithkin you control.' Every other body is deliberately held back — they are not attackers, they are the count that sets X, and they stay untapped as blockers. Bark of Doran multiplies the swing by making the lone attacker assign combat damage equal to its toughness rather than its power, and because Imbuer's bonus is +X/+X it raises toughness too: a Bark'd Imbuer with four other Kithkin attacks alone as a 4/10 and assigns 10. The whole plan dies to one chump blocker, so the build spends real slots on connection: Bristlebane Battler and Crossroads Watcher carry native trample, Thoughtweft Lieutenant grants trample on every Kithkin entering, Gilt-Leaf's Embrace flashes in trample and indestructible, and Bristlebane Outrider simply 'can't be blocked by creatures with power 2 or less'. State plainly: this is a Kithkin tribal deck that uses toughness as a damage-conversion mechanic, not a Treefolk deck. Only 7 of its 14 creature copies have toughness greater than power, and it runs exactly one Treefolk card.


### READ THIS FIRST: THIS IS THE DRIFTED BUILD, AND THAT WAS THE POINT

Of the three decks built from the "Treefolk / Toughness Matters" brief, this is the one that does
not really honour it, and that was disclosed before it was chosen. The reason is structural, not a
building error: **there are 7 Treefolk in the entire cube** — exactly one mono-green
(`Great Forest Druid`), two mono-white (`Moonlit Lamenter`, `Sun-Dappled Celebrant`), two mono-black,
one BW — and the tribal payoff `Doran, Besieged by Time` costs `{1}{W}{B}{G}`. **No GW Treefolk deck
is buildable in this cube.**

What GW *does* have is the second toughness payoff, `Thoughtweft Imbuer`, whose ability keys off
Kithkin rather than Treefolk. So this build follows the payoff into a different tribe:

| | Deck A (BGW) | Deck B (WB) | **Deck C (GW)** |
|---|---|---|---|
| Creature copies with toughness > power | 11 of 11 | 12 of 12 | **7 of 14** |
| Treefolk cards | 6 | 4 | **1** |
| Kithkin cards | 0 | 0 | **15** |

It is a strong aggro deck. It is not a toughness deck, and the analysis will not pretend otherwise.

### THE KILL, IN NUMBERS

`Thoughtweft Imbuer` triggers only when **exactly one** creature attacks. Everything else stays
home. The payoff for that restriction:

| Lone attacker | Base | + Bark (+0/+1) | X = 4 Kithkin | Attacks as | Assigns |
|---|---|---|---|---|---|
| Thoughtweft Imbuer | 0/5 | 0/6 | +4/+4 | 4/10 | **10** |
| Thoughtweft Imbuer | 0/5 | 0/6 | +6/+6 (X=6) | 6/12 | **12** |
| Bristlebane Outrider | 3/5 | 3/6 | +4/+4 | 7/10 | **10** |
| Great Forest Druid | 0/4 | 0/5 | +4/+4 | 4/9 | **9** |

Two swings is lethal from 20. Note the trigger says *"a creature you control"*, not *"a Kithkin"* —
so `Great Forest Druid`, which is not a Kithkin and adds nothing to X, is still a legal recipient
and the widest Bark gap in the deck.

**The honest probability.** The headline line needs three cards — an Imbuer (2 copies), a Bark
(2 copies), and a way through a blocker. Its joint probability by turn 6 is about **0.20**. That is
a bonus, not a plan, which is why the deck is built so that **six** creature copies can carry a
lone attack on their own: Imbuer ×2, Outrider ×2 (*"can't be blocked by creatures with power 2 or
less"*), `Bristlebane Battler` ×1 (*"Trample, ward {2}"*) and `Crossroads Watcher` ×1 (*"Trample"*).
That role sits at **p = 0.879** with no weighted copies.

### THE CHUMP-BLOCK PROBLEM IS THE WHOLE DESIGN

A deck that attacks with one creature loses everything to one 1/1. The shape judge picked this
build over two rivals specifically on this axis — it rejected the "most resilient" build because
"its keystone package contains no trample and no reachable evasion by turn 6, so the resilience
protects a kill that a 1/1 token still blanks."

Connection sources, after repair — **5 of 23 nonland cards**, and critically **2 are unconditional
native trample** rather than triggers that must line up:

| Card | Trample source | Condition |
|---|---|---|
| Bristlebane Battler | native | none |
| Crossroads Watcher | native | none |
| Thoughtweft Lieutenant ×2 | granted | a Kithkin must enter that turn |
| Gilt-Leaf's Embrace | granted, flash | costs 3 mana on the swing turn |

That composition change mattered more than the count. Before the repair all four sources were
conditional, and on the thesis turn with six lands the only on-demand Kithkin ETB is Clachan
Festival's `{4}{W}` — five mana, leaving one for Equip {1} and nothing else. **The trample plan and
the Bark plan were competing for the same six mana.** Putting the trample on the attacker itself
dissolves that conflict.

### KEY COUNTS

| Claim | Count against this list |
|---|---|
| Kithkin sources (set X) | 16 — 15 Kithkin copies plus Ajani's recurring token |
| Lone attackers that need no other card | 6 of 23 nonland cards, p = 0.879 by turn 6 |
| P(seeing a Thoughtweft Imbuer by turn 6) | 48.7% — the deck is built not to require it |
| P(full Imbuer + Bark + connection line) | ≈ 0.20 |
| Bark of Doran live on | 7 of 14 creature copies; **dead on every 1/1 Kithkin token** |
| Trample sources | 5 of 23, of which 2 are unconditional |
| Behold costs fed | `Kinsbaile Aspirant`'s "behold a Kithkin or pay {2}" — 15 Kithkin copies qualify |
| Changelings in the sideboard | 4 (`Rooftop Percher` ×2, `Chomping Changeling` ×2) still count as Kithkin, so hate cards cost no X |
| `Pyrrhic Strike` as a blocker answer | **zero** — "mana value 3 or greater" cannot kill a 1/1; it is in the list only for noncreature permanents |

### WHY THE NON-ATTACKING BODIES ARE NOT WASTED

The obvious objection is that this deck attacks with one creature while the opponent attacks with
their whole board. The answer is that the idle Kithkin are **untapped blockers on exactly the turns
they would otherwise have been tapped attacking**, and the two biggest are defensive statlines:
`Thoughtweft Imbuer` is a 0/5 and `Bristlebane Outrider` a 3/5. The deck's threat is not board-wide
power, it is one number — so the wide-board opponent is the matchup it is best equipped for.

`Protective Response` in the sideboard sharpens this: *"Convoke. Destroy target attacking or
blocking creature"* is paid for by the very bodies the thesis forbids from attacking, and against a
trampling attacker, destroying the blocker sends the full damage through.

### WHAT THE GRILL CHANGED

Five blocking findings, all upheld:

- **`Champion of the Clachan` was cut.** Its text is *"Other Kithkin you control get +1/+1"* — an
  **anthem**, which pays off a go-wide attack this deck by thesis never makes. Worse, the assembly
  hard gate was passing by 0.046 on the strength of that one card, discounted to weight 0.6.
  `Bristlebane Battler` replaced it rare-for-rare and the gate now passes at 0.879 with no weights.
- **`Crossroads Watcher` and `Goldmeadow Nomad` ×2 came in**, fixing both curve warnings.
  Goldmeadow Nomad also refuted my own stated reasoning: I had accepted the low one-drop count on
  the grounds that "a one-mana Kithkin and a two-mana Kithkin are worth exactly the same +1 to X."
  False — Goldmeadow Nomad is worth **+2 to X over its lifetime**, because
  *"Exile this card from your graveyard: Create a 1/1 ... Kithkin creature token"* fires after it
  dies.
- **The `wide_boards` concession was rewritten.** It had claimed a maindeck sweeper "would kill the
  Kithkin count." False: `Winnowing` lets you choose the survivor, and with 16 Kithkin sources it
  costs this deck almost nothing while convoke is paid by the idle board. The true costs are that
  it is a rare against a full budget and that it is nearly blank against a mono-tribal opponent —
  so it went to the sideboard, where it is boarded in against wide *non-tribal* boards.

### WHAT BEATS THIS DECK

A cheap removal spell held for the attack step, and a flier. Spot removal on the lone attacker
blanks the entire turn — `Gilt-Leaf's Embrace` (flash indestructible) and `Selfless Safewright` from
the board are the answers, but there is only so much room. And the deck has no flying and no reach
in the maindeck against a cube whose largest threat class is evasion at 41 cards; it races rather
than blocking there, which is a plan that works right up until it doesn't.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:8  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  lone_attacker: 6 copies → p=0.88 (need ≥ 0.75)
  PASS  kithkin_count: 16 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Conceded in the MAINBOARD only, and not for the reason first given. Winnowing IS a near-one-sided sweeper here (choosing a Kithkin spares 14 of this deck's 16 Kithkin sources, and convoke is paid by the bodies the thesis forbids from attacking), so the true costs are different: it is a rare against a budget already at 5 of 5, and it is nearly blank against a mono-tribal opponent, who keeps their board the same way this deck keeps its own. It is therefore a sideboard card, brought in against wide non-tribal boards. In the maindeck the deck is the aggressor and its own 0/5 Imbuer and 3/5 Outrider hold the ground while the clock runs.
  OK        single_large_threat: Crib Swap, Pyrrhic Strike
  OK        noncreature_permanents: Pyrrhic Strike
  CONCEDED  stack: No card in G/W in this pool counters a spell; this deck races rather than contesting the stack.
  CONCEDED  graveyard: No graveyard hate exists in G/W in this pool; the colourless Rooftop Percher carries the answer from the sideboard, where it is also a changeling and so still counts toward the Kithkin X.
```

- All four structural checks now PASS with zero flags, after repair. Before the grill the curve carried two WARN flags: 'MV 1 share 9% below band minimum 15%' and 'MV 4+ share 22% above band maximum 20%'. Both were cleared by cards rather than by argument — Goldmeadow Nomad x2 took the MV1 share to 17.4%, and replacing the 4-mana Champion of the Clachan with the 2-mana Bristlebane Battler took the MV4+ share to 17.4%.

- ASSEMBLY: the payoff role is declared as 'lone_attacker' rather than as Thoughtweft Imbuer alone (2 copies, p=0.487). All six copies are full weight — each either is the X-source or carries printed evasion or native trample — so no discounted copy props up the gate. This was not always true: the pre-repair build passed by 0.046 on a copy weighted 0.6, which the grill correctly identified as a gate resting on a judgement call rather than on cards.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three sinks convert surplus lands into X: Clachan Festival x2 ('{4}{W}: Create a 1/1 green and white Kithkin creature token'), Ajani, Outland Chaperone ('+1: Create a 1/1 green and white Kithkin creature token') which costs no mana at all, and Bark of Doran's Equip {1} moving the equipment to a fresh carrier each turn. Because the kill scales with the Kithkin count, an extra land is literally an extra point of damage. Evolving Wilds x2 thin the deck. |
| screw | mitigation | The curve is the mitigation: 11 of 23 nonland cards cost 1 or 2, including four one-drops. Great Forest Druid ('{T}: Add one mana of any color') is a two-mana any-colour source, and Eclipsed Kithkin digs four cards deep for 'a Kithkin, Forest, or Plains card'. Two colours with 5 of 17 lands able to enter tapped (Radiant Grove x2, Evolving Wilds x2, and Temple Garden when the 2 life is not paid). The goldfish simulation reports 86% keepable and a 57% turn-1 play rate, both the highest of the three builds. |
| decapitation | mitigation | Thoughtweft Imbuer is a 2-of seen only 48.7% of the time by the thesis turn, so the deck is built not to need it. Six creature copies can carry a lone attack unaided: Bristlebane Outrider x2 ('can't be blocked by creatures with power 2 or less'), Bristlebane Battler ('Trample, ward {2}' — the ward taxes the removal spell) and Crossroads Watcher ('Trample'). Ajani, Outland Chaperone is a planeswalker, so creature removal and sweepers cannot touch the recurring Kithkin engine at all, and Goldmeadow Nomad answers its own removal by making a token from the graveyard. Selfless Safewright from the sideboard names Kithkin for hexproof and indestructible at flash speed. |
| gas-out | mitigation | Three permanents keep producing with no further cards: Clachan Festival x2 at {4}{W} a token, Ajani's +1 every turn for free, and Goldmeadow Nomad x2 converting itself from the graveyard into a token. Eclipsed Kithkin replaces itself from the top four. The deck is also the fastest of the three at a turn-6 thesis, so it asks fewer turns of its hand than either sister build. |
| raced | mitigation | This is the deck doing the racing — the earliest thesis turn of the three at 86% keepable and a 57% turn-1 play rate. Against the cube's 41 evasion cards it also blocks well while setting up, precisely because the bodies that raise X are forbidden from attacking anyway: Thoughtweft Imbuer is a 0/5 wall and Bristlebane Outrider a 3/5. The sideboard adds Unforgiving Aim x2 ('Destroy target creature with flying') and Rooftop Percher x2, a 3/3 flier that is also a changeling and so still counts toward X. |
| disruption-fizzle | mitigation | The critical turn is the lone attack, and it is the deck's most fragile moment because all the damage sits on one body. Gilt-Leaf's Embrace has flash and grants indestructible, so removal aimed at the attacker mid-combat fails; Crib Swap x2 exiles a surprise blocker at instant speed; Bristlebane Battler's ward {2} taxes the answer. If the attacker is dealt with before the trigger, the Kithkin count is untouched and the deck attacks alone again next turn with a different body — X does not reset. The pool contains no counterspells in G/W, so the interaction being played around is removal, not the stack. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Doran, Besieged by Time | OUT OF COLOUR — STRUCTURALLY UNAVAILABLE. The archetype's namesake costs {1}{W}{B}{G}, identity BGW, so no GW deck can cast him. This is the root cause of this build's archetype drift: of the 7 Treefolk cube-wide, exactly 1 is mono-green and 2 are mono-white, and the tribal payoff is outside these colours. A GW Treefolk deck is not buildable in this cube. |
| Champion of the Clachan | RARE CUT IN REPAIR. 4/5 Kithkin with flash whose text is 'Other Kithkin you control get +1/+1' — an anthem pays off a go-wide ATTACK, and this deck's thesis forbids attacking with more than one creature. Both grill agents independently ruled it does not deliver the lone-attacker kill, and the assembly hard gate was passing by 0.046 on exactly that copy. |
| Figure of Fable | RARE CUT IN REPAIR. The full chain to the 7/8 protection stage costs 10 mana across three activations, outside the turn-6 thesis, and at the reachable 2/3 and 4/5 stages it grants no evasion at all — so it answers neither the chump-block problem nor the clock. |
| Kinbinding | RARE, REJECTED AT SKETCH STAGE. Its anthem scales with 'the number of creatures that entered the battlefield under your control this turn', which is near-blank on exactly the post-sweeper turns it was proposed to cover, and it rebuilds the Kithkin count at one body per turn. Ajani, Outland Chaperone does the removal-proof recurring-Kithkin job at 3 mana instead of 5 and its -2 also kills a tapped blocker. |
| Keep Out | SIDEBOARD CUT IN REPAIR. Its damage mode requires the creature to already be tapped, so it cannot clear a blocker before the lone attack, and the sideboard was spending 6 of 10 copies on a 21-card enchantment class while the cube's largest class, graveyard at 39 cards, had 2. |
| Kinscaer Sentry | RARE, ACTIVELY ANTI-SYNERGISTIC. 'Put a creature card with mana value X or less from your hand onto the battlefield tapped and attacking, where X is the number of attacking creatures you control' — X is 1 when attacking alone, and putting a second creature in as an attacker breaks the 'attacks alone' condition Thoughtweft Imbuer requires. |
| Gallant Fowlknight | 3/4 gap+1 Kithkin whose ETB grants the team +1/+0 and Kithkin first strike; first strike does not beat a chump blocker, and the +1/+0 narrows the Bark of Doran gap on every creature it touches. |
| Reluctant Dounguard | 4/4 Kithkin entering with two -1/-1 counters is a 2/2 with gap 0 — invisible to Bark of Doran — and it grows only as other creatures enter, which is the same trigger Bristlebane Battler uses on a body with native trample. |
| Mistmeadow Council | STRONG-FIT COMMON, ONE TIER BELOW. 4/3 that costs {1} less with a Kithkin out and draws a card, but 4/3 has power greater than toughness — it is the wrong direction for Bark of Doran, and at 4-5 mana it competes with the payoffs. |
| Timid Shieldbearer | 2/2 Kithkin for {1}{W} that raises X, but its {4}{W} team pump rewards a go-wide attack the thesis forbids; Goldmeadow Nomad is worth +2 to X over its lifetime for one mana instead. |
| Surly Farrier | 2/2 Kithkin whose tap ability grants +1/+1 and vigilance at sorcery speed; vigilance is irrelevant to a deck attacking with one creature, and tapping it does not reduce the Kithkin count but does cost the activation. |
| Wary Farmer | 3/3 Kithkin for three mana with an end-step surveil; a fine body but gap 0 for Bark, and the deck's three-mana slot is fully committed to Clachan Festival, Ajani and Crib Swap. |
| Brigid's Command | RARE. Choose two of four modes, including copying a Kithkin and making a token — genuinely 2 Kithkin for three mana — but the rare budget went to Bristlebane Battler, Ajani, Temple Garden, Selfless Safewright and Winnowing, all of which answer a failure mode rather than adding to a count already at 16. |
| Brigid, Clachan's Heart // Brigid, Doun's Mind | RARE. Makes a Kithkin token on entry and on each transform, and the back face taps for X mana, but the transform costs a mana every upkeep and the deck would rather spend that mana on Clachan Festival's repeatable token. |
| Kithkeeper | Makes X Kithkin tokens where X is the number of colours among permanents you control — X is only 2 in a two-colour deck, for seven mana, well past the turn-6 thesis. |
| Stalactite Dagger | SIDEBOARD CONSIDERATION. Makes a changeling token and turns the equipped creature into every creature type, so it both raises X and makes any creature a Kithkin; but its +1/+1 does not open a Bark gap and the deck already runs Bark of Doran x2 in the equipment slot. |
| Thoughtweft Charge | SIDEBOARD CONSIDERATION. Its +3/+3 preserves the Bark gap exactly, unlike Gilt-Leaf's Embrace whose +2/+0 narrows it by 2 — but Embrace's flash trample AND indestructible answers both the chump blocker and the removal spell in one card, which a raw pump does not. |
| Sun-Dappled Celebrant | 5/6 gap+1 Treefolk with convoke and vigilance; it would restore some of the toughness theme, but at six mana it is two turns past the thesis and it is not a Kithkin, so it adds nothing to X. |
| Slumbering Walker | RARE. 4/7 gap+3 is the best raw Bark carrier available in white, but it enters as a 2/5, is not a Kithkin, and its recursion clause returns creatures with power 2 or less — a grindy ability in a deck trying to win on turn 6. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.14 adj [MV 2.52 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  32.0%  prod  41.2%  gap  -9.2pp  [OK]
  W  demand  68.0%  prod  64.7%  gap  +3.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card is from the ecl mainboard or is a format-supplied basic land.
[PASS] commons/uncommons max 2 copies: no card exceeds 2 across mainboard + sideboard.
[PASS] rares/mythics max 1 copy: all five are singletons.
[PASS] USER CONSTRAINT max 5 rare/mythic cards across MB+SB: exactly 5 - Ajani, Outland Chaperone; Bristlebane Battler; Temple Garden (mainboard); Selfless Safewright; Winnowing (sideboard).
[PASS] Basic lands are format-supplied and exempt from copy limits: Plains x8, Forest x4.
[PASS] Colour usability: every nonland card returns a usable mode under effective_cost.best_mode for core_colors G/W; no splash declared.
```