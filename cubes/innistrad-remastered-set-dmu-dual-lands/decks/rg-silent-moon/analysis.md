---
deck_name: "rg-silent-moon"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RG"
format: "40-card"
built_at: "2026-08-26T19:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x6   Forest                                           basic
  x8   Mountain                                         basic
  x1   Rockfall Vale                                    RG dual, untapped from your 3rd land (rare - 5th rare slot)
  x2   Wooded Ridgeline                                 RG dual, always enters tapped (common)
```

### CREATURES (19)
```
CMC  Card                                             Qty   Color  Role                           Rar
1    Village Messenger // Moonrise Intruder           x2    R      T1 haste, flips to menace      C
2    Duskwatch Recruiter // Krallenhorde Howler       x2    G      Silent-turn dig engine         U
2    Hinterland Logger // Timber Shredder             x2    G      Flips to 4/2 trample           C
2    Mayor of Avabruck // Howlpack Alpha              x1    G      Human lord / Wolf anthem       R
2    Scorned Villager // Moonscarred Werewolf         x2    G      Mana dork Werewolf             C
3    Conduit of Storms // Conduit of Emrakul          x2    R      Self-transform to 5/4          C
3    Geier Reach Bandit // Vildin-Pack Alpha          x2    R      Flips Werewolves on entry      U
3    Kruin Outlaw // Terror of Kruin Pass             x1    R      Payoff: menace + dbl strike    R
3    Shrill Howler // Howling Chorus                  x2    G      Evasive, self-transforms       U
4    Huntmaster of the Fells // Ravager of the Fells  x1    RG     Paid on every flip cycle       R
4    Smoldering Werewolf // Erupting Dreadwolf        x2    R      Self-transform to 6/4 + ping   U
```

### OTHER SPELLS (4)
```
CMC  Card                                             Qty   Color  Role                           Rar
1    Neglected Heirloom // Ashmouth Blade             x2    C      Transform payoff equipment     U
3    Howlpack Resurgence                              x1    G      Anthem: +1/+1 and trample      U
4    Arlinn Kord // Arlinn, Embraced by the Moon      x1    RG     Spell-free Wolf + trample      M
```

## SIDEBOARD (10)
```
Card                                             Qty   Color  Role / When to board in
Moonlight Hunt                                   x2    G      [U] Against decks that cast a spell every turn and therefore hold your team on its front face - the flip plan is already off, so the cost of casting spells is zero. Its damage is the whole Wolf/Werewolf board's power.
Savage Alliance                                  x2    R      [U] Against token and go-wide decks - 'deals 1 damage to each creature target opponent controls'. This is the mainboard's conceded wide_boards class, brought back for the matchup that needs it.
Abrade                                           x2    R      [U] Against artifact decks - 24 artifacts in the cube and Abrade is the only card castable in R or G that answers one.
Lightning Axe                                    x2    R      [U] Against toughness 4-5 blockers that stop the flipped board; 5 damage for {R} is the cheapest hard answer in the colours.
Clear Shot                                       x2    G      [U] Against fliers and against a single blocker the ground board cannot pass. 'Target creature you control gets +1/+1 until end of turn. It deals damage equal to its power to target creature you don't control' works off ONE body, unlike Moonlight Hunt, and reaches a flier, which nothing in the mainboard does.
```

## ANALYSIS

### DECK IDENTITY

A red-green Werewolf deck that commits to the transform clause instead of routing around it. Nineteen of its twenty-three nonland cards are Werewolf-typed - the highest flip density the pool allows - and there is not a single instant or sorcery in the mainboard, because casting a spell means no upkeep transform for the thirteen cards that carry the clause. Deploy on turns one to three, then go quiet: the upkeep flips 2/1s into 4/2 tramplers, Village Messenger into a menace threat, and Kruin Outlaw into Terror of Kruin Pass, which has double strike and hands menace to all nineteen Werewolves. Six more Werewolves ignore the clause entirely and transform themselves for mana - Conduit of Storms into a 5/4, Shrill Howler into a 3/5 token engine, Smoldering Werewolf into a 6/4 that pings 2 on every attack. Silent turns still spend mana, because everything the deck does after turn three is an activated ability rather than a spell.

### THE BET THIS DECK MAKES

Every flip Werewolf reads: *At the beginning of each upkeep, if no spells were cast last turn,
transform this creature.* The Howlpack Anthem build treats that clause as unreliable and routes
around it. This build does the opposite - it accepts the clause as the price of admission and buys
the largest payout available.

The payout is a board that roughly doubles in size on one upkeep:

| Card | Front | Back |
|---|---|---|
| Village Messenger | 1/1 haste | 1/1 menace |
| Hinterland Logger | 2/1 | 4/2 trample |
| Scorned Villager | 1/1, taps for {G} | 1/1 vigilance, taps for {G}{G} |
| Conduit of Storms | 2/3 | **5/4** |
| Shrill Howler | 3/1, unblockable by smaller | 3/5, makes a 3/2 token on damage |
| Smoldering Werewolf | 3/2 | **6/4**, 2 damage to any target on every attack |
| Kruin Outlaw | 2/2 first strike | 2/2 **double strike**, all Werewolves gain menace |

Nineteen of the 23 nonland cards are Werewolf-typed. Terror of Kruin Pass makes every one of them
unblockable by a single creature.

### TWO NUMBERS THAT ARE NOT THE SAME NUMBER

This deck's write-up originally used one figure for two different things, and the Phase 9 grill
caught it. Both matter, and they differ:

- **19 of 23** cards are *Werewolf-typed*. This is the number that Kruin Outlaw's menace, Howlpack
  Resurgence's anthem and Mayor's back face all read - they key off the creature type.
- **13 of 23** cards actually *carry the upkeep clause*. Conduit of Storms, Shrill Howler and
  Smoldering Werewolf are Werewolf Horrors with **no upkeep clause at all** - they transform only
  through their own paid activations, and they are completely indifferent to what anyone cast.

So the cost of casting a spell is 13 cards' worth of flip, not 19. That is still a majority of the
deck, and it is still why there is not one instant or sorcery in the mainboard - but the honest
number is the smaller one.

### THE CLAUSE IS NOT YOURS TO CONTROL - SO SIX CARDS IGNORE IT

An opponent who plays one creature a turn holds your clause-carriers face-down for free. Six cards
transform with no reference to what was cast:

| Card | Text | Cost |
|---|---|---|
| Conduit of Storms x2 | "{3}{R}{R}: Transform this creature" | 5 mana, self only |
| Shrill Howler x2 | "{5}{G}: Transform this creature" | 6 mana, self only |
| Smoldering Werewolf x2 | "{4}{R}{R}: Transform this creature" | 6 mana, self only |

**Geier Reach Bandit is deliberately not on that list.** Its enabler - "Whenever a Werewolf you
control enters, you may transform it" - is printed on the *back* face, so it cannot break a lock it
has not already escaped. It is weighted 0.5 in the assembly check for exactly that reason, and an
earlier draft of this analysis wrongly counted it as clause-independent.

Those six activations cost 5 and 6 mana. That is why the thesis turn is **7** rather than the 5 the
sketchers proposed, why Scorned Villager x2 is maindecked, and why the fifth and last rare slot went
to Rockfall Vale rather than to a spell.

### WHAT THE FIFTH RARE SLOT BOUGHT

The rare budget is five cards total across 50. Four are non-negotiable payoffs: Kruin Outlaw (the
win condition), Mayor of Avabruck, Huntmaster and Arlinn. The fifth went to **Rockfall Vale**, a
land - because a land costs no nonland slot, and every double-pip cost in this deck is red
({1}{R}{R} Kruin on turn three, {2}{R}{R} Smoldering x2, and two of the three clause-breaking
activations) while every green cost is a single pip. Red sources went from 9 to 11.

The card it displaced was Garruk Relentless, which was the deck's only repeatable spell-free
removal. That is a real loss, and it is why `single_large_threat` is now an honest **conceded**
class rather than a claim: the mainboard's damage is Arlinn's 3 and Smoldering Werewolf's 1, neither
of which answers a genuinely large creature.

### THE ONE THAT LOOKS LIKE A FIT AND IS NOT

Lupine Prototype is a 5/5 Wolf for {2} that "can't attack or block unless a player has no cards in
hand." A spell-light deck sounds like the ideal home. It is the opposite: going silent means *not
casting*, so cards pile up in hand, and Duskwatch Recruiter's dig actively refills it. 0 of the 23
nonland cards empty a hand. Here it is a 5/5 guaranteed never to attack.

### WHERE IT IS THIN

Seventeen lands against 5- and 6-mana activations is tight even with two mana dorks. The deck has no
flier, no reach and no mainboard answer to a large creature, against a cube that is 20.9% evasion.
And the whole plan is partly in the opponent's hands. What keeps it viable rather than merely
hopeful is the floor underneath it: at zero flips this is still 19 aggressive Werewolf bodies, an
anthem that reads the *type* rather than the face, and a planeswalker making 2/2 Wolves through
loyalty abilities that cannot be locked out at all.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:8  4:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  werewolf_body: 19 copies → p=1.00 (need ≥ 0.75)
  PASS  flip_enabler: 8 copies (effective 4: Geier Reach Bandit // Vildin-Pack Alpha@0.5, Geier Reach Bandit // Vildin-Pack Alpha@0.5, Conduit of Storms // Conduit of Emrakul@0.7, Conduit of Storms // Conduit of Emrakul@0.7, Shrill Howler // Howling Chorus@0.4, Shrill Howler // Howling Chorus@0.4, Smoldering Werewolf // Erupting Dreadwolf@0.4, Smoldering Werewolf // Erupting Dreadwolf@0.4) → p=0.77 (need ≥ 0.75)
  PASS  payoff: 7 copies (effective 5.2: Kruin Outlaw // Terror of Kruin Pass@0.7, Mayor of Avabruck // Howlpack Alpha@0.7, Arlinn Kord // Arlinn, Embraced by the Moon@0.8, Neglected Heirloom // Ashmouth Blade@0.6, Neglected Heirloom // Ashmouth Blade@0.6, Huntmaster of the Fells // Ravager of the Fells@0.8) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 94%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: This build runs zero instants and sorceries in the mainboard by design: casting a spell means no upkeep transform for the 13 nonland cards that carry the clause. Savage Alliance ('deals 1 damage to each creature target opponent controls') is the pool's answer and sits in the sideboard at two copies for exactly the matchups where the flip plan is already switched off. The mainboard's answer to a wide board is to flip into a 4/2 trampler, a 5/4, a 6/4 and a double-striking threat that hands menace to all 19 Werewolves, and to outclass the board rather than sweep it.
  CONCEDED  single_large_threat: Corrected at Phase 9 rather than defended. The mainboard's only damage-based answers are Arlinn's back-face '-1: Arlinn deals 3 damage to any target' and Smoldering Werewolf's enter trigger, which is '1 damage to each of up to two target creatures' - one damage, not three. Neither answers a genuinely large creature, and the previous declaration overstated both. Garruk Relentless, which did answer this class with '0: Garruk deals 3 damage to target creature', was cut at Phase 9 to free the fifth rare slot for Rockfall Vale. Lightning Axe x2 holds the class from the sideboard; the mainboard races a large blocker with menace and double strike instead.
  CONCEDED  noncreature_permanents: Verified against oracle text: Abrade is the only card castable in R or G in this cube that destroys or exiles an artifact, and R and G contain zero enchantment answers (the cube's only two, Cathar Commando and Hopeful Initiate, are white). Abrade is in the sideboard; mainboarding it would also cost a flip window every time it is cast.
  CONCEDED  stack: Red and green in this pool contain no counterspells or stack interaction of any kind.
  CONCEDED  graveyard: Verified against oracle text: the cube's only graveyard hate is Soul-Guide Gryff (white) and Invasion of Innistrad (black); neither is castable in R or G. Against the cube's 75 graveyard cards this deck races rather than interacts.
```

- THESIS TURN REVISED 5 -> 7, and said plainly rather than buried. The Step-0 sketchers proposed a goldfish of 5. The shape judge flagged that Shrill Howler's {5}{G} is unreachable by turn 5 on this land count, and the assembly check then failed the flip_enabler role at p=0.71 against the 0.75 threshold on a turn-6 reading. Every self-transform in the deck costs 5 or 6 mana, so the flip package comes online turn 5-6 and the attack that uses it lands turn 7. Rather than tune a reliability weight until the gate agreed, the thesis turn was corrected to what the mana actually supports; at turn 7 flip_enabler passes at p=0.77 on 4.0 effective copies.
- ACCEL INPUT CORRECTED AT PHASE 9, which moved the land count 16 -> 17. deck_audit.accel_count returned 4, counting Conduit of Storms x2 because the cube tagger labels it 'Mana Ramp'. Its oracle text is 'Whenever this creature attacks, add {R} at the beginning of your next main phase this turn' - post-combat mana contingent on attacking, which shortens no deployment curve and is not what the land-target model measures. With accel corrected to 2 (Scorned Villager x2 only), land_target returns 17 and the deck is built to 17. The tool was not overridden; a bad input to it was.
- NO CURVE WARN on the final list. The earlier MV4+ warning (21%) disappeared when Garruk Relentless was cut at Phase 9: the curve is now 1:4 2:7 3:8 4:4 against the Aggro bands of MV1 >= 15% (17.4%), MV2 >= 25% (30.4%) and MV4+ <= 20% (17.4%).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This is the deck's best-covered mode, because its mana sinks ARE its plan. Eight of the 24 nonland cards convert surplus mana with no spell cast: Conduit of Storms x2 ('{3}{R}{R}: Transform this creature'), Shrill Howler x2 ('{5}{G}: Transform this creature'), Smoldering Werewolf x2 ('{4}{R}{R}: Transform this creature') and Duskwatch Recruiter x2 ('{2}{G}: Look at the top three cards of your library...'). Neglected Heirloom's Equip {1} and {3} add two more. A flooded board is exactly the board that can afford to flip itself. |
| screw | mitigation | 11 of the 24 nonland cards cost 2 or less and Scorned Villager x2 ('{T}: Add {G}') bridges to the four-drops. The goldfish sim over 1000 hands returns 83% keepable against the 80% threshold, with a 93% turn-2 play rate. The land count is 16 rather than 17 precisely because the accelerants are counted. |
| decapitation | mitigation | Kruin Outlaw is a singleton and is the named payoff, so this mode is answered by redundancy of EFFECT rather than of card. Three other cards convert a flipped board and all three are in the deck: Howlpack Resurgence ('Each creature you control that's a Wolf or a Werewolf gets +1/+1 and has trample' - 19 of 23 nonland cards), Mayor of Avabruck's back-face anthem, and Arlinn's back-face '+1: Creatures you control get +1/+1 and gain trample until end of turn'. Beyond that the flip itself is the payoff: Hinterland Logger becomes a 4/2 trampler, Conduit of Storms a 5/4, Smoldering Werewolf a 6/4 - none of which needs Kruin Outlaw to be lethal. |
| gas-out | mitigation | Duskwatch Recruiter x2 is the only refill in the pool that costs no flip window, because '{2}{G}: Look at the top three cards of your library. You may reveal a creature card from among them and put it into your hand' is an activated ability rather than a spell - it is the single most important non-Werewolf line in the deck, and with 19 creature cards among the 23 nonland slots it almost never misses. Mayor of Avabruck's back face adds a 2/2 Wolf 'At the beginning of your end step' every turn it survives, and Huntmaster re-triggers 'create a 2/2 green Wolf creature token and you gain 2 life' each time it transforms back. Garruk Relentless previously held a limb of this mitigation with its back-face '-1: Sacrifice a creature. If you do, search your library for a creature card'; Garruk was cut at Phase 9 to fund Rockfall Vale, and that limb is struck rather than left standing. |
| raced | accepted | This deck loses races it does not disrupt, and mitigating would cost it its identity. Its thesis turn is 7 against the Howlpack Anthem build's 6, and it mainboards zero instant-speed interaction. The honest magnitude, corrected at Phase 9: casting a spell costs the upkeep transform on 13 of the 23 nonland cards - the ones that actually carry the clause - not on all 19 Werewolves, since Conduit of Storms, Shrill Howler and Smoldering Werewolf have no upkeep clause at all. Thirteen of twenty-three is still the majority of the deck, and maindecking Moonlight Hunt or Lightning Axe would convert this into the Ravager Midrange build. The sideboard holds Moonlight Hunt x2, Lightning Axe x2 and Clear Shot x2 for the matchups where the flip is already dead and the spells are free. |
| disruption-fizzle | mitigation | The critical event is the upkeep transform, and what fizzles it is not removal - it is the opponent casting any spell. Six of the 23 nonland cards transform with no reference to what was cast last turn: Conduit of Storms x2 ('{3}{R}{R}: Transform this creature'), Shrill Howler x2 ('{5}{G}: Transform this creature') and Smoldering Werewolf x2 ('{4}{R}{R}: Transform this creature'). Six, not eight - Geier Reach Bandit is deliberately NOT counted here, because its 'Whenever a Werewolf you control enters, you may transform it' is printed on the back face, so it cannot break a lock it has not already escaped; that is also why it carries a 0.5 reliability weight in the assembly check. All six cost 5 or 6 mana, which is why the fifth rare slot went to Rockfall Vale and why Scorned Villager x2 is maindecked: reaching six mana on 17 lands is the precondition for this mitigation working, not an afterthought. Against removal aimed at one body the loss is one of 19 Werewolves, and Neglected Heirloom stays on the battlefield to be re-equipped for {1}. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Chandra, Dressed to Kill, Traverse the Ulvenwald, Cryptolith Rite, Collective Defiance, Eldritch Evolution, Helvault, Tireless Tracker, Reforge the Soul, Tamiyo's Journal, Wrenn and Seven, Zealous Conscripts, Vexing Devil, Stitcher's Graft, Hanweir Garrison | Rares and mythics that are individually strong but outside the transform plan. The pool rules cap the deck at 5 rare/mythic cards across mainboard and sideboard, and Kruin Outlaw plus the flip-relevant planeswalkers and Huntmaster already claim that budget. |
| Dawnhart Disciple, Hamlet Captain | Human-tribal pumps. The Werewolf front faces are Humans, so these are live before the flip - but they stop working the instant the deck does the one thing it is built to do, which makes them anti-synergistic here rather than merely weak. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.64 adj [MV 2.52 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  46.2%  prod  52.9%  gap  -6.7pp  [OK]
  R  demand  53.8%  prod  64.7%  gap -10.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] commons_uncommons_max_2: PASS - every distinct name checked against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Highest count of any common/uncommon is 2.
  [PASS] rares_mythics_max_1: PASS - all five rare/mythic cards appear exactly once.
  [PASS] rare_mythic_total_max_5: PASS - exactly 5 across mainboard and sideboard: Kruin Outlaw // Terror of Kruin Pass, Mayor of Avabruck // Howlpack Alpha, Huntmaster of the Fells // Ravager of the Fells, Arlinn Kord // Arlinn, Embraced by the Moon, Garruk Relentless // Garruk, the Veil-Cursed. All five are mainboard; the sideboard contains zero rares by necessity.
  [PASS] basics_unlimited: PASS - Mountain x7 and Forest x7 are format-supplied and exempt.
  [PASS] all_cards_in_pool: PASS - every name matched the working pool cache by exact string.
  [PASS] colour_usability: PASS - effective_cost.best_mode returned a usable mode in [R,G] for every nonland card. Garruk Relentless // Garruk, the Veil-Cursed has printed color_identity [B,G] but mana_cost {3}{G} and no black mana requirement on either face; best_mode stamps it 'cast', so it is a core-colour card rather than a splash.
  [PASS] splash_cap: PASS - splash_colors is empty; no off-colour card overlapped the Werewolf Matters cluster at one or fewer off-colour pips.
```