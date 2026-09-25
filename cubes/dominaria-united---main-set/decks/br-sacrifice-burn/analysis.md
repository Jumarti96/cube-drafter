---
deck_name: "br-sacrifice-burn"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-08-14T03:35:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x2 Geothermal Bog     enters tapped
  x1 Sulfurous Springs  untapped dual, pays 1 life
  x6 Mountain           basic
  x8 Swamp              basic
```

### CREATURES (19)

```
CMC  Card                       Qty  Color  Role            Rar
  1  Cult Conscript             x2   B      Enabler/Fodder  U
  1  Phoenix Chick              x2   R      Enabler/Fodder  U
  2  Phyrexian Vivisector       x2   B      Payload/Payoff  C
  2  Splatter Goblin            x2   B      Enabler/Fodder  C
  3  Balduvian Atrocity         x2   B      Enabler/Fodder  U
  3  Braids, Arisen Nightmare   x1   B      Engine/Outlet   R
  3  Lagomos, Hand of Hatred    x2   BR     Engine/Outlet   U
  3  Squee, Dubious Monarch     x1   R      Enabler/Fodder  R
  4  Garna, Bloodfist of Keld   x2   BR     Payload/Payoff  U
  4  Phyrexian Warhorse         x2   B      Engine/Outlet   C
  4  Sheoldred, the Apocalypse  x1   B      Payload/Payoff  M
```

### INSTANTS & SORCERIES (3)

```
CMC  Card              Qty  Color  Role                    Rar
  1  Bone Splinters    x2   B      Interaction/Disruption  C
  2  Lightning Strike  x1   R      Interaction/Disruption  C
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty  Color  Role           Rar
  3  Braids's Frightful Return  x1   B      Engine/Outlet  U
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in
Battlefly Swarm          x2   B      Enabler/Interaction — vs. the flying half of the cube's 51-card evasion class (31 of the 51 have flying). 'Flying / {B}: This creature gains deathtouch until end of turn' blocks and kills any flier regardless of size, and it is still fodder afterwards.  [C]
Knight of Dusk's Shadow  x2   B      Threat/Interaction — vs. the cube's 22-card lifegain class: 'Your opponents can't gain life' turns off the whole class, which matters because Garna's damage plan is a slow accumulation that lifegain undoes.  [U]
Lightning Strike         x1   R      Interaction/Disruption — vs. decks that go under us, and as extra reach in races — 'deals 3 damage to any target' can go to the face.  [C]
Smash to Dust            x2   R      Interaction/Disruption — vs. the cube's 15 artifacts ('Destroy target artifact'), and its third mode ('deals 1 damage to each creature your opponents control') is the deck's only sweeper against a wide board of X/1 tokens.  [C]
Liliana of the Veil      x1   B      Interaction/Disruption — vs. ward/hexproof threats and single-bomb decks: '-2: Target player sacrifices a creature' ignores targeting protection, and it is repeatable, which spot removal is not.  [M]
Extinguish the Light     x2   B      Interaction/Disruption — vs. large creatures and planeswalkers — 'Destroy target creature or planeswalker' at instant speed with no size clause. The mainboard's only unconditional creature answer is Bone Splinters x2, which costs a body; against the 13 members of the cube's evasion class that neither Lightning Strike nor a size-capped removal spell can kill, these are the answer.  [C]
```

## ANALYSIS

### DECK IDENTITY

A B/R sacrifice deck built on the sweeper-resilient interpretation of the archetype: it wants creatures to die and it wants them to come back. Lagomos, Hand of Hatred manufactures a 2/1 trampling haste token every combat and sacrifices it automatically at the next end step, so a death happens every turn with no outlet, no mana and nothing for a removal spell to answer. Garna, Bloodfist of Keld converts each death into a card when the body was attacking and into 1 damage to each opponent when it was not, and Sheoldred, the Apocalypse doubles that non-combat clock on her own. Cult Conscript, Phoenix Chick, Squee and Braids's Frightful Return all rebuild from the graveyard, so a board wipe delays the turn-7 kill rather than resetting it.


### THE TOKEN THAT CANNOT BE ANSWERED

Lagomos, Hand of Hatred is the reason this deck exists. Its text is worth reading closely:

> At the beginning of combat on your turn, create a 2/1 red Elemental creature token with trample and haste. Sacrifice it at the beginning of the next end step.

Three things follow, and each one matters:

1. **The death costs nothing.** No mana, no tap, no sacrifice outlet. In a cube whose entire structural census finds 10 sacrifice outlets across five colours — one of them free — a card that manufactures a death every turn for zero is not a nice-to-have, it is the archetype's power source.
2. **The sacrifice is a delayed trigger with no target.** There is no activated ability to respond to and no spell to counter. An opponent holding removal can kill Lagomos, but the token already on the battlefield still dies at end step and still triggers Garna.
3. **The token dies while NOT attacking.** Garna's text is conditional: *"draw a card if it was attacking. Otherwise, Garna deals 1 damage to each opponent."* The Lagomos token attacks on the turn it is made and then dies at the *next* end step — which is after combat, when it is no longer attacking. So the Lagomos–Garna loop is always the damage mode, one point per copy of Garna per turn, forever, through any board stall.

### THE CRYSTAL GROTTO MISTAKE, AND WHAT REPLACED IT

This deck originally ran a Crystal Grotto on the reasoning that its `{1}, {T}: Add one mana of any color` could be Garna's second red source. The Phase 9 grill showed that reasoning was mechanically wrong, and it is worth stating why because it is an easy error to repeat: the ability costs one generic mana **in addition to** the tap. Using Grotto to produce Garna's second red therefore consumes Grotto plus another land to yield a single mana — so a 4-mana Garna needs a **fifth** land in play. Grotto does not make Garna castable on curve; it makes it castable a turn late.

It was replaced with a sixth Mountain. Simulated over 200,000 shuffles on the play, Garna castable by turn 4 went from **55.3% to 60.3%**, with Braids's double-black by turn 3 unchanged at 74.1%. Red is over-served by 20.6 percentage points relative to its pip share, and that entire distortion exists to cast one card.

### THE MODE-CHOICE THE DECK ACTUALLY MAKES

Garna is not a card that does one thing. Its two modes are selected by *how the creature died*, which is information the pilot controls:

| Situation | Which mode | Why |
|---|---|---|
| Lagomos token at end step | 1 damage to each opponent | It is no longer attacking |
| A creature trades in combat while attacking | Draw a card | It was attacking |
| Phyrexian Warhorse eats a blocker-less body post-combat | 1 damage | Not attacking |
| Balduvian Atrocity's kicked reanimation at end step | 1 damage | Sacrificed after combat |

So the deck draws when it is winning combat and burns when it is not. That is unusual for an aristocrats payoff and it is the reason this build tolerates a thin 2-drop slot: the engine cards at 3 MV are what convert both game states into progress.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:6  2:5  3:7  4:5
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.85 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 7.6: Cult Conscript@0.8, Cult Conscript@0.8, Phoenix Chick@0.7, Phoenix Chick@0.7, Balduvian Atrocity@0.8, Balduvian Atrocity@0.8) → p=0.95 (need ≥ 0.75)
  PASS  outlet: 8 copies (effective 7.2: Braids, Arisen Nightmare@0.7, Braids's Frightful Return@0.5) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 72%  T2 94%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The only mainboard card that touches more than one opposing creature is Splatter Goblin's 'target creature an opponent controls gets -1/-1', which kills one X/1. The cube's only B/R sweeper effect is Smash to Dust's third mode ('deals 1 damage to each creature your opponents control'), and it is a sideboard card rather than a maindeck one because it also kills this deck's own 1/1 Phoenix Chick and its Lagomos Elemental tokens before they can attack. Mainboard, this class is conceded; it is answered from the sideboard with Smash to Dust x2.
  OK        single_large_threat: Bone Splinters, Sheoldred, the Apocalypse, Garna, Bloodfist of Keld
  CONCEDED  noncreature_permanents: Corrected after the Phase 9 grill, which showed the previous 'OK' was false. The two cards previously cited -- Braids, Arisen Nightmare and Braids's Frightful Return chapter III -- both read 'of their choice', so the OPPONENT picks which permanent to sacrifice; neither answers a specific noncreature permanent. The cube contains 18 enchantments and 3 enchantment answers (Destroy Evil in W, Silverback Elder in G, Tear Asunder in B/G) -- ZERO of them castable in B/R. The pool's only B/R-castable answer is Chaotic Transformation ({5}{R}, rare), and it is not run: the 5 rare/mythic slots are fully spent (Squee, Braids, Sulfurous Springs, Sheoldred, Liliana), and at mana value 6 in a deck with average MV 2.48 it would also replace the exiled permanent with a random one of the same type. This class is conceded outright and named as the deck's largest structural gap.
  CONCEDED  stack: B/R has no counterspell anywhere in this cube. The deck's answer to a resolving spell is that its damage is already banked: Garna's triggers have resolved before the opponent's turn, and Braids, Arisen Nightmare forces a permanent sacrifice at each end step regardless of what resolved.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire cube, so no colour can answer this class at all. This deck is itself one of the graveyard decks (Cult Conscript, Phoenix Chick, Squee and Braids's Frightful Return all recur), so the class is symmetric rather than one-sided.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Five mana sinks, all uncapped or repeatable: Phyrexian Warhorse x2 ('{1}, Sacrifice another creature' - no tap symbol, unlimited per turn), Cult Conscript x2 ('{1}{B}: Return this card from your graveyard to the battlefield'), Phoenix Chick x2 ('you may pay {R}{R}. If you do, return this card from your graveyard'), Squee, Dubious Monarch ('You may cast this card from your graveyard by paying {3}{R} and exiling four other cards'), and Balduvian Atrocity x2's Kicker {R}. A surplus land is a body or a death in every one of those cases. |
| screw | mitigation | 6 of the 23 nonland cards cost 1 and 5 cost 2, so 11 of 23 are castable off two lands; the Phase 6b goldfish check reports 84% keepable hands, a 72% turn-1 play rate, 94% turn-2 and 99% turn-3 (the last figure was previously rounded up to 100% and is corrected here), with 3 lands by turn 3 in 89% of hands. The 2-MV slot was 4 of 23 before the Phase 9 repair and is now 5 of 23; it is still the thinnest part of the curve, which is the cost of a build whose engine cards (Lagomos, Balduvian Atrocity) live at 3 MV. |
| decapitation | mitigation | Garna answered on sight does not end the plan. Phyrexian Vivisector x2 keeps converting deaths (its trigger is unconditional), Lagomos x2 keeps producing and killing a body every turn regardless, Sheoldred, the Apocalypse continues draining 2 per opponent draw with no board requirement at all, and Braids's Frightful Return's chapter II ('Return target creature card from your graveyard to your hand') rebuys the answered Garna. The payoff role is 5 copies across 3 cards and P(payoff seen by turn 7) is 0.85. |
| gas-out | mitigation | The count is stated with its composition rather than inflated. Cards that produce a CARD or a BODY after the hand empties: Garna x2 (draws for every attacking creature that dies), Braids, Arisen Nightmare x1 (draws at each end step the opponent declines to match), Braids's Frightful Return x1 (rebuys a creature at II, draws at III), Cult Conscript x2, Phoenix Chick x2 and Squee x1 (all return themselves from the graveyard for mana alone) = 9 of 23. Phyrexian Vivisector x2 is deliberately NOT in that 9 - its scry is selection, not a card or a body - and Sheoldred converts each of the real draws into 2 life. The previous version counted Vivisector inside the figure and the grill was right to flag it. |
| raced | mitigation | The deck races rather than blocks, which is what its default_role of aggressor requires: Garna's 'deals 1 damage to each opponent' ignores blockers entirely and Lagomos guarantees one such trigger every turn, and Sheoldred, the Apocalypse adds 2 more per turn cycle off the opponent's own draw step while gaining us 2 per card we draw - the mainboard's only lifegain. The removal count is stated accurately after the grill corrected it: against the 51-card evasion class, Lightning Strike answers the 32 members with toughness 3 or less, and against the 13 members that neither a 3-damage burn spell nor a size-capped removal spell can kill, the mainboard has exactly 2 unconditional answers (Bone Splinters x2, 'Destroy target creature', no size clause) - and each costs a body. The limit is stated plainly: the mainboard has 0 creatures that can block a flier - Phoenix Chick has flying but reads 'This creature can't block'. Against the flying half of the evasion class (31 of 51), Battlefly Swarm x2 and Extinguish the Light x2 come in from the sideboard. |
| disruption-fizzle | mitigation | The critical turn is answered by redundancy rather than protection, and the numbers are from the assembly gate: the outlet role is 8 copies across 4 different cards (Lagomos x2, Phyrexian Warhorse x2, Braids x1, Braids's Frightful Return x1), P(outlet by turn 7) = 0.94, with Bone Splinters x2 as additional one-shots. More importantly Lagomos's sacrifice is not an activated ability and not a spell - it is a delayed triggered ability with no target, so there is no window in which removal or a counterspell prevents the death once the token exists. Killing Lagomos on sight only stops future tokens; the one already on the battlefield still dies at end step and still triggers Garna. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Hurler Cyclops | Its sacrifice-into-damage ability is the only card in the pool that converts a sacrifice DIRECTLY into damage without needing Garna on the battlefield -- a stronger card here than an earlier note credited. Excluded on colour and curve: {3}{R}{R} at mana value 5 against 9 red sources in a 17-land deck with average MV 2.478. First card to add if the format slows down. |
| Ragefire Hellkite | 'Whenever this creature attacks, you may sacrifice another creature. If you do, this creature gains double strike' is a free outlet attached to a 6/6 flier, but at {4}{R}{R} it is a 6-mana card in a deck whose curve tops at 4 and whose goldfish is turn 7. It also costs one of the 5 capped rare slots. |
| Rundvelt Hordemaster | Its lord clause and death trigger both key on Goblins. The list runs 2 Goblin cards of 19 creature cards (Splatter Goblin x2, Squee x1) plus Squee's Goblin tokens -- corrected from an earlier claim of 0. 2 of 19 is still too thin for a lord costing one of 5 capped rare slots. |
| Balduvian Berserker | 'When this creature dies, it deals damage equal to its power to any target' is on-plan reach at 2 power for {2}{R}, but the 3-MV slot already holds 8 of the list's 23 nonland cards and adding a ninth pushes avg MV past the point where land_target moves off 17. |
| Rivaz of the Claw | Its mana ability and graveyard recast both read 'Dragon creature spell'; the final list runs 0 Dragons, so two of its three abilities are blank text. |
| Weatherlight Compleated | 'draw a card if it has seven or more phyresis counters' — needs 7 creature deaths for one card, and costs a capped mythic slot. |
| Sengir Connoisseur | 'This ability triggers only once each turn' caps it at one +1/+1 counter per turn for {3}{B}{B} against a turn-7 goldfish. |
| Gibbering Barricade | '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' is the only draw-per-death outlet in the colours, but 3 mana per activation on a Defender body does not advance a deck whose payoff rewards attacking (Garna draws only 'if it was attacking'). |
| Toxic Abomination | A 3/2 for {1}{B} would fill the thin 2-MV slot, but 'When this creature enters, you lose 2 life' stacks with Sulfurous Springs in a deck that already pays life, and it has no death trigger. |
| Knight of Dusk's Shadow | 'Your opponents can't gain life' answers a real 22-card class, but it is matchup-dependent and the maindeck 2-MV slot is better spent on Phyrexian Vivisector, whose trigger is unconditional. Moved to the sideboard. |
| Electrostatic Infantry | 'Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature' — the final list runs 3 instants/sorceries of 23 nonland cards (Bone Splinters x2, Lightning Strike x1). 3/23 is too thin a denominator. |
| Goblin Picker | '{R}, {T}, Discard a card: Draw a card' is card filtering, not card advantage, and it competes for the 2-MV slot with a death payoff. |
| Yavimaya Steelcrusher | '{1}, Sacrifice this creature: Destroy target artifact' is a one-shot self-sacrifice that is only live against the cube's 15 artifacts; Smash to Dust does the same job from the sideboard without occupying a maindeck creature slot. |
| Blight Pile | '{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control' — the final list runs 0 creatures with defender, so X is 0. |
| Shadow Prophecy | Domain — 'Look at the top X cards, where X is the number of basic land types among lands you control'. A 2-colour list controls at most 2 basic land types, so X is 2 for {2}{B} and 2 life. |
| Tattered Apparition | A {3}{B} 2/2 flier with a {1}{B} pump is a fine mana sink, but the 3-MV slot is already the list's densest at 8 of 23 cards and it has no death or sacrifice text. |
| Dragon Whelp | Its self-sacrifice clause triggers only after four activations of '{R}: +1/+0' in one turn — a 4-mana investment for a conditional death the deck can get for free from Lagomos. |
| Evolved Sleeper | A strong 1-mana rare mana sink, but it has no sacrifice or death text and rare slots are capped at 5 across both boards. |
| In Thrall to the Pit | Kicked it steals a creature and sacrifices it, which is removal — but the sacrifice is of the OPPONENT's creature, so it triggers none of Garna, Phyrexian Vivisector or Cult Conscript, all of which read 'creature you control'. |
| Aggressive Sabotage | 'Target player discards two cards' plus 3 damage when kicked is real reach, but at {2}{B} (or 4 mana kicked) it is a sorcery that adds no body to a deck whose payoffs all key on creatures dying. |
| Warhost's Frenzy | Kicked, 'whenever a creature you control dies this turn, draw a card' is a strong one-turn Garna mimic — but it needs a turn where multiple creatures die, and the deck's uncapped outlet (Phyrexian Warhorse) already draws nothing; it is a combat trick in a deck that would rather have a permanent. |
| Cut Down | It was in the pre-grill mainboard at x1. Cut during Phase 9 repair to spend the free 5th rare/mythic slot on Sheoldred, the Apocalypse; this also brought Interaction from 17.4% to 13.0%, inside the aggro band. It answers 24 of the 46 evasion-class creatures with printed power and toughness; the members it misses are what Bone Splinters and the sideboard's Extinguish the Light exist for. |
| Crystal Grotto | Cut during Phase 9 repair for a sixth Mountain. Its second ability costs a mana IN ADDITION to the tap, so as Garna's second red source it needs a fifth land -- it makes Garna castable a turn late, not on curve. Simulated Garna on-curve rose 55.3% to 60.3% after the swap. |
| Phyrexian Rager | Proposed by the grill to fill the 2-MV hole. Declined on a factual check: it costs {2}{B}, mana value 3, so it cannot fill a 2-MV hole. A second Splatter Goblin ({1}{B}, mana value 2) was used instead, and is also an on-plan death trigger. |
| Chaotic Transformation | The pool's ONLY B/R-castable answer to an enchantment, against a cube containing 18 of them. Excluded because it is a rare and the 5-slot cap is fully spent, and because at mana value 6 in a deck averaging 2.478 it also hands the opponent a random replacement permanent of the same type. This is the deck's largest acknowledged gap. |
| Drag to the Bottom | Domain sweeper: with Swamp and Mountain, X = 3, so -3/-3 to every creature -- a genuine answer to the conceded wide-boards class, and the sweeper-resilient lens makes the symmetry closer to one-sided than usual. Excluded purely on the rare cap being fully spent. |
| Defiler of Instinct | Its cast trigger keys on red permanent spells; this list runs 7 of 23 nonland (Phoenix Chick x2, Squee x1, Lagomos x2, Garna x2). A real second non-combat damage source, excluded on the rare cap and on {R}{R} at mana value 4 over 9 red sources. |
| The Elder Dragon War | Chapter I answers the conceded wide-boards class and pushes the damage plan, and read ahead can start at III for a 4/4 flier instead. Excluded on the rare cap, and because chapter I kills this deck's own Cult Conscripts, Phoenix Chicks and Lagomos tokens. |
| Thrill of Possibility | Its discard cost is upside next to four graveyard-recursion cards, and Squee's alternate cost specifically requires exiling four other cards from the graveyard, which this deck has no other way to set up. Excluded because at 2 MV it competes with the death-trigger bodies that advance the board, and the card flow already comes from Garna, Braids and Sheoldred. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.03 adj [MV 2.48 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  67.7%  prod  64.7%  gap  +3.0pp  [OK]
  R  demand  32.3%  prod  52.9%  gap -20.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1. mainboard count == 40  -- got 40
  [PASS] 1. sideboard count == 10  -- got 10
  [PASS] 2. every name exists in working pool (exact match)  -- []
  [PASS] 3. copy counts obey card_pool_rules
  [PASS] 3b. <=5 rares/mythics across MB+SB  -- 5: Braids, Arisen Nightmare x1 (rare), Liliana of the Veil x1 (mythic), Sheoldred, the Apocalypse x1 (mythic), Squee, Dubious Monarch x1 (rare), Sulfurous Springs x1 (rare)
  [PASS] 4. every nonland usable in core+splash (best_mode)  -- []
  [PASS] 5. <=3 cards per splash colour, all in splash_candidates  -- splash_colors=[] used=[]
  [PASS] 6. land count within 1 of recommendation  -- have 17, recommended 17
```
