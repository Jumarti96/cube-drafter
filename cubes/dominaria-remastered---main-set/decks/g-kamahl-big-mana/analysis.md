---
deck_name: "g-kamahl-big-mana"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "G"
format: "40-card"
built_at: "2026-08-02T17:39:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  16x Forest
```

### CREATURES (12)

```
CMC  Card                   Qty  Color  Role                                                                                                                                         Rar
  1  Birds of Paradise      x1   G      Ramp                                                                                                                                         R
  2  Stonewood Invoker      x2   G      Payoff (mana sink / backup clock)                                                                                                            C
  2  Werebear               x2   G      Ramp                                                                                                                                         C
  3  Elvish Spirit Guide    x2   G      Ramp                                                                                                                                         U
  3  Krosan Restorer        x2   G      Ramp / kill-turn insurance                                                                                                                   C
  6  Elvish Aberration      x2   G      Ramp / Consistency                                                                                                                           C
  6  Kamahl, Fist of Krosa  x1   G      Payoff (kill mechanism)                                                                                                                      M
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                   Qty  Color  Role                                                                                                                                         Rar
  1  Worldly Tutor          x1   G      Infrastructure                                                                                                                               R
  2  Nature's Lore          x2   G      Ramp                                                                                                                                         U
  3  Call of the Herd       x2   G      Payoff (kill-turn bodies)                                                                                                                    U
  4  Break Asunder          x1   G      Interaction                                                                                                                                  C
```

### OTHER SPELLS (6)

```
CMC  Card                   Qty  Color  Role                                                                                                                                         Rar
  1  Wild Growth            x2   G      Ramp                                                                                                                                         C
  2  Sylvan Library         x1   G      Infrastructure                                                                                                                               M
  4  Icy Manipulator        x2   C      Interaction                                                                                                                                  U
  5  Gauntlet of Power      x1   C      Engine (pipeline anchor)                                                                                                                     M
```

## SIDEBOARD (10)

```
Card                   Qty  Color  Role / When to board in                                                                                                                      Rar
Tormod's Crypt         x2   C      Hate - graveyard - vs Reanimator, Flashback/GY-Cast, Threshold and Self-Mill decks.                                                          U
Break Asunder          x1   G      Hate - noncreature permanents - vs Opposition, Sulfuric Vortex, Sneak Attack, Squirrel Nest, and any deck on an opposing Gauntlet of Power.  C
Sandstorm              x2   G      Hate - wide boards - vs Goblins and Tokens - 21 token-generating cards in the pool, most of them 1/1s.                                       C
Giant Spider           x2   G      Flex - blocker vs evasion - vs any deck whose clock is in the air; out vs ground-based midrange.                                             C
Emerald Charm          x2   G      Flex - modal answer - vs enchantment decks and vs single evasive finishers.                                                                  C
Wall of Junk           x1   C      Flex - anti-aggro blocker - vs aggro decks that would kill before turn 7 - the 'raced' failure mode this build formally accepts.             U
```

## ANALYSIS

### DECK IDENTITY

Mono-green big mana whose threats are its lands. Thirteen accelerants build a Forest board, then Kamahl, Fist of Krosa turns it into an army - '{G}: Target land becomes a 1/1 creature until end of turn. It's still a land' followed by '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample until end of turn'. The crucial constraint, which the self-grill caught and which shapes the whole list: animating a land does NOT untap it, so every land tapped to pay for the sequence is a land that cannot attack. What the kill turn is short of is untapped bodies, not mana - which is why Call of the Herd x2 is in the deck, supplying four attackers across two cards that cost nothing on the turn that matters. Stonewood Invoker's repeatable '{7}{G}: +5/+5' is a backup clock. Gauntlet of Power naming green doubles all 16 basic Forests; its anthem is irrelevant to the animated lands, which are colourless.

### THE CORRECTION THAT SHAPED THIS DECK

This list looks different from the obvious Kamahl build because of one line of oracle text that is easy to read past:

> Kamahl, Fist of Krosa — "{G}: Target land becomes a 1/1 creature until end of turn. **It's still a land.**"

It grants no untap. So a Forest you tapped to pay for the animation is a *tapped creature*, and a tapped creature cannot attack. My first version of this deck counted the same seven Forests as both the mana source and the attacking army, and claimed a 30-damage turn 7. The self-grill caught it. The real inequality is:

| | |
|---|---|
| Mana available | `(L − U) + D` |
| Cost of the turn | `U` animations at {G}, plus 5 for "{2}{G}{G}{G}" |
| Solve `(L−U)+D ≥ U+5` | **`U ≤ (L + D − 5) / 2`** |

At 7 lands and 2 mana creatures that is `U ≤ 2` — **two** 4/4 tramplers plus Kamahl, or 15 damage. Not 30. The deck as first built did not kill on its stated turn.

**The scarce resource on the kill turn is untapped bodies, not mana.** Every card choice below follows from that.

### WHY CALL OF THE HERD IS THE SECOND-MOST-IMPORTANT CARD

`Call of the Herd` — "Create a 3/3 green Elephant creature token. // Flashback {3}{G}" — is two cards' worth of attackers from one slot, and both Elephants are deployed on *earlier* turns. On turn 7 they cost **zero** of the nine available mana while contributing 6/6 of trample each under the overrun. That takes the corrected line to:

| Attacker | Count | Power after "+3/+3 and gain trample" | Damage |
|---|---|---|---|
| Animated Forests | 2 | 4/4 | 8 |
| Elephant tokens | 2 | 6/6 | 12 |
| Kamahl himself | 1 | 7/6 | 7 |
| **Total** | | | **27, lethal** |

Birds of Paradise and Werebear are *not* counted — they are tapped for mana. That discipline is the whole lesson of the correction.

It replaced `Kavu Primarch`, whose kicked mode costs {8} — precisely the resource the corrected math shows the deck does not have on the turn that matters.

### GAUNTLET DOES LESS HERE THAN IT LOOKS LIKE IT SHOULD

Worth being explicit, because it is counter-intuitive for a deck commissioned around Gauntlet of Power:

- **Mana clause — full value.** "Whenever a basic land is tapped for mana of the chosen color…" applies to **16 of 16** lands, because every land is a basic Forest.
- **Anthem clause — does *not* touch the kill.** "Creatures of the chosen color get +1/+1" reaches the 12 green creature copies and the Elephant tokens, but **0 of the animated lands**. Kamahl's ability confers no colour, and lands are colourless. The army Gauntlet is supposedly pumping is the one part of the board it cannot see.

So Gauntlet is in this deck as a mana doubler and nothing else. That is still worth a mythic slot — it converts turn 7 into turn 6 — but it is not the anthem card it appears to be.

### THREE CARDS, THREE DIFFERENT LAND PROPERTIES

The mana base is 16 basic Forests and zero utility lands, and that is over-determined — three separate cards key off land properties, and they key off *different* ones:

| Card | Property it keys off | Consequence |
|---|---|---|
| Gauntlet of Power | **Basic** supertype | only basics are doubled |
| Nature's Lore | **Forest** land type | can fetch any Forest-typed card |
| Elvish Aberration (Forestcycling) | **Forest** land type | same |

I initially claimed the basic Forest was the only Forest-typed land in the pool. That was false, and the grill caught it: `Haunted Mire`, `Radiant Grove`, `Tangled Islet` and `Wooded Ridgeline` all carry the Forest subtype and *are* legal Nature's Lore targets. They are excluded for stated reasons, not denied: each reads "This land enters tapped" (a turn of acceleration in a deck racing to turn 7), none carries the Basic supertype (so Gauntlet never fires on them), and each produces an off-colour against a mana base with 23 green pips and zero of anything else.

### THE HONEST WEAKNESS

This deck has no removal. Mono-green's entire interaction suite in this cube is `Sandstorm` (1 damage to attackers), `Lull` (a fog), `Emerald Charm` (loses flying) and `Giant Spider` (a 2/4 blocker) — **zero** targeted creature removal. The two maindeck `Icy Manipulator` are the only colour-blind, size-blind answer available in any colour this deck can cast.

And there is one class it cannot answer at all: a creature with a static attack tax. `Windborn Muse` reads "Creatures can't attack you unless their controller pays {2} for each creature they control that's attacking you" — against a five-body alpha strike that is {10} on the exact turn this deck is tapped out by construction. It is a creature, so `Break Asunder` cannot touch it; tapping it with `Icy Manipulator` does not suppress a static ability. With the rare/mythic cap at 5/5, `Triskelion` is not available as an answer. That gap is accepted, not solved.

The `raced` failure mode is likewise accepted rather than mitigated: every card that would help is a card that pushes the kill turn later, which makes the race worse.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (24 nonland):  1:4  2:7  3:6  4:3  5:1  6:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.8: Worldly Tutor@0.8) → p=0.89 (need ≥ 0.75)
  PASS  ramp: 13 copies (effective 11.2: Elvish Spirit Guide@0.5, Elvish Spirit Guide@0.5, Elvish Aberration@0.6, Elvish Aberration@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 62%  T2 95%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Green's only sweeper in this pool is Sandstorm ('deals 1 damage to each attacking creature'), which answers x/1s and nothing else, so it is held in the sideboard. Maindeck the class is out-scaled rather than answered: Kamahl's '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample until end of turn' makes blockers irrelevant, and animated lands enter as 4/4 tramplers that outclass any token board. Maindecking Sandstorm would cost an accelerant and push the kill past turn 7.
  OK        single_large_threat: Icy Manipulator
  OK        noncreature_permanents: Break Asunder
  CONCEDED  stack: Green has no counterspell in this pool. The substitute is redundancy in the BODIES the kill needs, not protection: Call of the Herd x2 each supply two attackers ('Create a 3/3 green Elephant creature token' plus 'Flashback {3}{G}') that cost zero mana on the kill turn, and Stonewood Invoker x2 is a backup clock - none of the four needs Kamahl or Gauntlet to have resolved, so a counterspell spent on either 1-of mythic does not end the game. Maindecking reactive slots is not possible: mono-green has no counterspell to maindeck.
  CONCEDED  graveyard: Tormod's Crypt is the only graveyard hate card in the entire cube and it is held in the sideboard; maindecking a do-nothing artifact would cost one of the 13 accelerants that make the turn-7 kill reachable at all.
```

- No WARN flags were raised. run_structural_checks returned overall PASS: curve PASS (MV distribution 1:4 2:7 3:6 4:3 5:1 6:3), assembly PASS (payoff effective 5.8, p=0.89; ramp effective 11.2, p=0.99), goldfish PASS (84% keepable, 84% three-lands-by-turn-3), coverage PASS.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | A surplus land is still a threat, which is the point of the archetype: Kamahl's '{G}: Target land becomes a 1/1 creature until end of turn' converts every excess land into a body, bounded by the mana inequality above. Stonewood Invoker's '{7}{G}: +5/+5' is unbounded per turn, and Elvish Aberration's 'Forestcycling {2}' turns a flooded hand into the specific card it wants. Krosan Restorer's '{T}: Untap target land' makes a surplus land into extra mana as well. |
| screw | mitigation | 13 accelerants mean this deck is far likelier to be short on spells than on mana: Birds of Paradise ({G}), Wild Growth ({G}) and Werebear ({1}{G}) turn a 2-land hand into 3-4 mana by turn 3, and Nature's Lore puts a Forest onto the battlefield for {1}{G}. goldfish_sim reports 84% keepable and 84% for three lands by turn 3 over 1000 hands. Elvish Aberration's Forestcycling {2} is a dedicated land-finder. |
| decapitation | mitigation | Kamahl is a 1-of and is explicitly not the single point of failure. Call of the Herd x2 supplies four bodies that attack without him, Stonewood Invoker x2 is a backup clock needing neither mythic, and Worldly Tutor rebuys Kamahl if he is answered. If Gauntlet is answered the deck loses a mana multiplier, not a threat - the 16 Forests still pay for animation and overrun one turn later. |
| gas-out | mitigation | Sylvan Library ('you may draw two additional cards... pay 4 life or put the card on top') is a permanent draw engine that costs nothing when declined, and Elvish Aberration x2 and Break Asunder cycle rather than rotting. Counted honestly: 'Cards: Net-Positive' = 1 of 24 (Sylvan Library), 'Cards: Self-Replacing' = 3 of 24. Call of the Herd is the structural answer rather than a draw spell - 'Flashback {3}{G}' means it is still a threat after it has been drawn and used once. Beyond that, lands are spells here: a topdecked Forest is another animatable body. |
| raced | accepted | Turn 7 is a slow clock and the maindeck interaction is two Icy Manipulators. Against the cube's fastest clocks this deck simply dies first, and mono-green in this pool has no way to fix that - the colour's entire interaction suite is Sandstorm (1 damage to attackers), Lull (a fog), Emerald Charm (loses flying) and Giant Spider (a 2/4 blocker), every one of which is held in the sideboard precisely because maindecking it means cutting an accelerant, which pushes the kill turn later and makes the race worse rather than better. The cost of mitigating is the kill turn itself. Wall of Junk is the cheapest sideboard partial answer: a 0/7 Defender for {2} that returns to hand and blocks every turn. |
| disruption-fizzle | mitigation | The kill turn is a sequence of small activations, not one big spell - '{G}: Target land becomes a 1/1 creature' is paid four or five separate times, so a single counterspell cannot answer 'the spell'. Removing Kamahl mid-sequence loses the animations already paid for, which is real; the maindeck answer is Krosan Restorer x2 ('{T}: Untap target land'), which lets the deck retry the following turn with the same mana, and Stonewood Invoker's activation is an entirely separate route the same answer does not touch. Emerald Charm's 'Untap target permanent' is a sideboard-only reinforcement and is labelled as such. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Exploration | 'You may play an additional land on each of your turns' needs a land in hand to matter; at 16 lands in 40 the second drop is live in a minority of turns, and it cost one of only 5 rare/mythic slots that Gauntlet, Kamahl, Birds, Sylvan Library and Worldly Tutor already occupy. |
| Jolrael, Mwonvuli Recluse | '{4}{G}{G}: Until end of turn, creatures you control have base power and toughness X/X, where X is the number of cards in your hand' - this deck empties its hand deploying 13 accelerants, so X is typically 1-3 on the turn it matters. Rare slot. |
| Forgotten Ancient | 'Whenever a player casts a spell, you may put a +1/+1 counter on this creature' accumulates over many turns; Kamahl converts the same mana into lethal in one. Rare slot. |
| Nut Collector | 'Threshold - All Squirrels get +2/+2 as long as there are seven or more cards in your graveyard' - this list mills 0 cards and discards 0, so Threshold is not reachable on schedule. Mythic slot. |
| Saproling Symbiosis | 'Create a 1/1 green Saproling creature token for each creature you control' - the 11 creature copies here are mana dorks that stay tapped, and Kamahl already turns lands into bodies for {G} apiece. Rare slot. |
| Triskelion | A 6-mana 4/4 that pings for 3 total; it competes directly with Kamahl at the top of the curve without advancing the kill. Rare slot. |
| Terravore | 'Terravore's power and toughness are each equal to the number of land cards in all graveyards' - this list puts 0 land cards into any graveyard, so it is a */* that reads 0/0 on an empty board. |
| Crop Rotation | 'As an additional cost to cast this spell, sacrifice a land. Search your library for a land card, put that card onto the battlefield' is NET-NEUTRAL on land count - it is a tutor, not ramp, and this deck's only fetch targets are basic Forests that Nature's Lore already gets without the sacrifice. |
| Battlefield Scrounger | 'Threshold - Put three cards from your graveyard on the bottom of your library: This creature gets +3/+3' needs 7 cards in the graveyard; this deck has no self-mill and no discard outlet. |
| Fa'adiyah Seer | '{T}: Draw a card and reveal it. If it isn't a land card, discard it' - at 16 lands in 40, 60% of the cards it reveals are discarded. Sylvan Library selects without throwing cards away. |
| Deadwood Treefolk | 'Vanishing 3' plus a graveyard-creature return - a six-mana value engine in a deck that wants its six-mana slot to be Kamahl. |
| Gamekeeper | 'When this creature dies, you may exile it. If you do, reveal cards from the top of your library until you reveal a creature card' - a reanimator enabler; this list runs 11 creature copies, most of them 0/1 and 1/1 mana dorks, so the hit is usually a Werebear. |
| Call of the Herd | A 3/3 token plus 'Flashback {3}{G}' is fine value, but this deck's threats are its lands - a vanilla 3/3 does not scale with the mana surplus the way Stonewood Invoker's '{7}{G}: +5/+5' does. |
| Symbiotic Beast | 'When this creature dies, create four 1/1 green Insect creature tokens' - six mana for a 4/4 with a death trigger, competing with Kamahl's slot and adding nothing to the mana engine. |
| Penumbra Bobcat | A 2/1 with a death trigger; it neither ramps nor converts mana, which are the only two jobs in this deck. |
| Squirrel Nest | 'Enchanted land has "{T}: Create a 1/1 green Squirrel creature token"' TAPS the land - it competes directly with Gauntlet's doubling and Kamahl's animation for the same Forest. |
| Primal Boost | 'Target creature gets +4/+4 until end of turn' is a single-target pump; Kamahl's '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample' does it to the whole board and adds trample. |
| Mind Stone | '{T}: Add {C}' - 23 of 23 pips in this deck are {G}, and it cannot pay Kamahl's '{G}:' animation, its '{G}{G}{G}' overrun component, or Stonewood Invoker's '{G}'. |
| Thran Golem | 'As long as this creature is enchanted, it gets +2/+2 and has flying, first strike, and trample' - this list runs 2 Auras (Wild Growth x2) and both enchant LANDS, so the condition is met 0 times out of 24 nonland cards. |
| Juggernaut | A 5/3 for {4} that 'attacks each combat if able' - it is colourless so Gauntlet's anthem never touches it, and forced attacks are a liability for a deck that wants to stall until turn 7. |
| Mishra's Factory | '{1}: This land becomes a 2/2 Assembly-Worker artifact creature' is redundant with Kamahl's '{G}: Target land becomes a 1/1 creature'; it is neither basic (no Gauntlet double) nor a Forest (Nature's Lore and Forestcycling cannot fetch it) and it produces {C} against 23 green pips. |
| Slippery Karst | 'This land enters tapped' costs a turn of acceleration in a deck racing to turn 7, and it is neither basic nor a Forest - so it forfeits the Gauntlet double and cannot be fetched. |
| Terminal Moraine | Produces only {C} against 23 green pips, and its '{2}, {T}, Sacrifice this land' fetch puts the basic in TAPPED while removing a land Kamahl could have animated. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 14   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.72 adj [MV 2.96 vs 2.5, 14 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                                       cube_mainboard only - every card verified by exact name against working_pool.json
commons_uncommons_max_2                    PASS - highest count is 2; Break Asunder is 1 mainboard + 1 sideboard = 2 total, exactly at the common cap
rares_mythics_max_1_each                   PASS
rares_mythics_max_5_total_MB_plus_SB       PASS at exactly 5/5 - all five are mainboard: Gauntlet of Power (mythic), Kamahl Fist of Krosa (mythic), Sylvan Library (mythic), Birds of Paradise (rare), Worldly Tutor (rare). The sideboard is entirely commons and uncommons by design, which is what freed all five slots for the mainboard.
basics                                     Forest x16 - format-supplied, exempt from copy limits
colour                                     core_colors ['G'], splash_colors [] - every nonland card returns a non-null effective_cost.best_mode(card, ['G'], []) in normal cast mode
```
