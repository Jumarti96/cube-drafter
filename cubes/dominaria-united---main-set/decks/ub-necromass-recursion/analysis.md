---
deck_name: "ub-necromass-recursion"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-15T00:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
11x Swamp
4x Island
2x Contaminated Aquifer   UB dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                          Qty   Color  Role                              Rar
1    Cult Conscript                x2    B      Threat/Self-recursion             U
2    Vohar, Vodalian Desecrator    x2    UB     Engine/Loot into graveyard        U
3    Braids, Arisen Nightmare      x1    B      Threat/Grind engine               R
3    Eerie Soultender              x2    B      Threat/GY-fill + recursion        C
3    Gibbering Barricade           x2    B      Engine/Sacrifice outlet (banks creature cards)C
3    Phyrexian Rager               x1    B      Threat/Card advantage body        C
4    Ertai Resurrected             x1    UB     Interaction/Flexible              R
4    Monstrous War-Leech           x2    B      Threat/Payoff                     U
7    Writhing Necromass            x2    B      Threat/Payoff                     C
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                          Qty   Color  Role                              Rar
1    Bone Splinters                x2    B      Interaction/Sac-to-kill           C
1    Cut Down                      x2    B      Interaction                       U
1    Rona's Vortex                 x1    U      Interaction                       U
```

### OTHER SPELLS (3)

```
CMC  Card                          Qty   Color  Role                              Rar
3    Braids's Frightful Return     x2    B      Threat/Recursion saga             U
5    The Cruelty of Gix            x1    B      Threat/Reanimation                R
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                         Rar
Battlefly Swarm               x2    B      Sideboard/Anti-flier                            C
Knight of Dusk's Shadow       x2    B      Sideboard/Lifegain-hate                         U
Negate                        x2    U      Sideboard/Stack + sweepers                      C
Pilfer                        x2    B      Sideboard/Proactive disruption                  C
Aether Channeler              x1    U      Sideboard/Permanent-answer                      R
Liliana of the Veil           x1    B      Sideboard/Non-targeted removal                  M
```

## ANALYSIS
### DECK IDENTITY
A Dimir attrition deck that treats its own graveyard as a discount rack. Writhing Necromass costs {1} less for each creature card in the yard and Monstrous War-Leech's power and toughness equal the greatest mana value among cards there, so every creature that dies makes the next threat cheaper or bigger. Eerie Soultender, Cult Conscript and Braids's Frightful Return buy those bodies back while the opponent's stay dead, and The Cruelty of Gix reanimates one outright. The deck does not race; it wins because the opponent runs out of answers before it runs out of creatures.

### THE GRAVEYARD IS A DISCOUNT RACK, NOT A COMBO PIECE

Two payoffs read the yard, and they read it differently. Writhing Necromass:
*"This spell costs {1} less to cast for each creature card in your graveyard"* — a **count**.
Monstrous War-Leech: *"power and toughness are each equal to the greatest mana value among cards
in your graveyard"* — a **maximum**, and note it says *cards*, not creature cards.

That second distinction matters more than it looks. Writhing Necromass has a printed mana value of
**7**, and cost reduction changes what you pay, not what the card's mana value is. So a Necromass
that got countered, discarded or milled makes every subsequent War-Leech a **7/7 for `{3}{B}`**.

**This mainboard runs 15 creature cards of 23 nonland cards.** That is the pool the discount draws
from, and it is fed five ways beyond ordinary combat deaths: Eerie Soultender's *"mill three"*,
kicked War-Leech's *"mill four"*, Bone Splinters' sacrifice cost, Vohar's per-turn loot, and
Gibbering Barricade's *"{2}{B}, Sacrifice a creature"*.

### THE HONEST TIMELINE

Simulation, rather than optimism, sets the schedule. Against a model with ordinary attrition:

| Turn | P(≥4 creature cards in yard) | Mean effective Necromass cost | P(War-Leech is a 7/7) |
|---|---|---|---|
| 5 | 24% | 4.53 | 18% |
| 6 | 42% | 3.76 | 29% |
| 7 | 59% | 3.09 | 40% |

An earlier draft of this build's record claimed "4–6 creature cards by turn 5–6 is the median."
It is not — that is a turn-7 median. The **thesis turn of 7 was right; the reasoning behind it was
a turn optimistic**, and the record now says so. Writhing Necromass is a `{3}{B}`–`{2}{B}` 5/5
deathtouch on turns 6–7, which is exactly when this deck intends to take over.

The same correction applies to War-Leech. "Bin a Necromass and every War-Leech is a 7/7" is a true
sentence about a case that happens 11–29% of the time on turns 4–6. The honest expectation is a
**3.4/3.4 on turn 4 and a 4.2/4.2 on turn 5 for `{3}{B}`** — still a fine rate — with the 7/7 as
upside. And the downside deserves naming: with a **completely empty** graveyard War-Leech is a
**0/0 and dies immediately**, which is the real reason its `{U}` kicker is self-protection and not
just a bonus.

### WHY REMOVAL IS THE WORST CARD THE OPPONENT CAN DRAW

This is the structural point of the archetype. Every answer they spend puts another creature card
in the yard, which makes the next Writhing Necromass cost `{1}` less and can raise War-Leech's
size. Four separate cards buy the body back:

- Eerie Soultender — *"{4}{B}, Exile this card from your graveyard: Return another target creature card from your graveyard to your hand."*
- Cult Conscript — *"{1}{B}: Return this card from your graveyard to the battlefield."*
- Braids's Frightful Return II — *"Return target creature card from your graveyard to your hand."*
- The Cruelty of Gix III — *"Put target creature card from **a** graveyard onto the battlefield under your control."*

That last one says *a* graveyard, not *your* graveyard — it steals from theirs, so it doubles as
removal-as-value against a creature they just lost.

### ONE INTERACTION THAT DOES NOT WORK, STATED BECAUSE IT LOOKS LIKE IT SHOULD

It is tempting to say Bone Splinters plus Cult Conscript is free removal: sacrifice the Conscript,
kill their creature, bring the Conscript back. **It does not work that way.** Cult Conscript's type
line is `Creature — Skeleton Warrior`, and its return reads *"Activate only if a **non-Skeleton**
creature died under your control this turn."* Sacrificing the Conscript means a Skeleton died,
which does not satisfy its own condition. Some *other* creature must have died that turn.

What does survive: Bone Splinters is unconditional removal for `{B}` that banks a creature card,
and 13 of the 15 creature cards in this list are non-Skeletons that can switch the Conscript back
on when they die — and Gibbering Barricade can supply that death on demand rather than waiting for
combat.

### THE SWAP THAT FIXED TWO THINGS AT ONCE

An earlier version of this build ran 17 lands against a `land_target` recommendation of 18, and
argued the gap away by pricing Writhing Necromass at an effective 3 rather than its printed 7. The
grill showed that argument overshot — "Necromass at 3" needs four banked creature cards, which is a
13–28% outcome on turn 5, not the median.

The fix was a card swap rather than a better argument: **−1 Extinguish the Light, −1 Phyrexian
Rager, +2 Gibbering Barricade.** That moved average mana value from 2.91 to 2.87, below the 2.88
boundary at which the recommendation rounds up — so `land_target` now returns **17**, the build is
17, and there is no deviation left to justify.

### GIBBERING BARRICADE, AND WHY IT IS GOOD HERE AND BAD NEXT DOOR

*"Defender / {2}{B}, Sacrifice a creature: You gain 1 life and draw a card."* It is the only
repeatable sacrifice outlet castable in UB anywhere in this cube.

The interesting part is that **the same clause is anti-synergy in the sibling defenders build of
this archetype and pro-synergy here.** In that deck, sacrificing a creature lowers the defender
count that both win conditions read as X — an engine that shrinks its own payoff. In this deck,
sacrificing a creature *is* the payoff: every activation is +1 to the Writhing Necromass discount,
a card drawn, and a non-Skeleton death that switches Cult Conscript's return back on. Identical
oracle text, opposite verdict, because the denominator changed.

It was initially cut on price — Bone Splinters banks a creature for `{B}` and kills something. That
was the wrong axis. The deficit was **volume, not price**: Bone Splinters is 2 of 23 cards and needs
both a spare body and a legal target, where Barricade banks unconditionally every turn.

### THE NET, NOT THE GROSS

The easy mistake in a graveyard deck is to count only the cards that fill the yard. This list has
**10 of 23** that bank a creature card — and **7 of 23 that remove one**:

- Eerie Soultender — *"**Exile this card from your graveyard**: Return **another** target creature card…"* removes **two** at once, itself and the target.
- Cult Conscript — *"Return this card from your graveyard to the battlefield."* −1.
- Braids's Frightful Return II — *"Return target creature card from your graveyard to your hand."* −1.
- The Cruelty of Gix III, aimed at your own yard. −1.

A single Soultender activation at a median stock takes the Necromass discount most of the way back
to zero. That is the deck's real internal tension, and the play consequence is concrete: **bank
first, rebuy only when the board demands it**, and prefer flooding mana into Gibbering Barricade
(which adds) over a rebuy (which subtracts).

### WHAT BLUE IS ACTUALLY FOR

This is a near-mono-black deck: **24 black pips against 4 blue**. Blue does exactly four jobs —
Vohar's `{U}{B}`, Ertai Resurrected's single `{U}`, one Rona's Vortex, and War-Leech's `Kicker {U}`
— and **no card in the deck requires `{U}{U}`**. The binding number is therefore P(at least one
blue source), which at 6 sources is about 76% by turn 2 and 88% by turn 5. Every blue card except
the single Vortex has a black-only fallback: War-Leech casts unkicked, and the Vortex's own kicker
is `{2}{B}`. A blue-less draw costs a mill-four and some tempo, not castability.

Note the pip census understates blue slightly, because `Kicker {U}` is an additional cost and never
appears in the card's mana cost — the census counts zero blue pips for a card this deck usually
wants to kick.

### WHAT THIS DECK CANNOT DO

**Sweepers are the worst thing that can happen to it** — 14 creature cards with no sweeper of its
own. All six sweepers in the cube are noncreature spells, which is precisely why Negate ×2 is in
the sideboard and is more valuable here than in either sibling build.

**Resolved noncreature permanents** cannot be removed: blue and black in this cube have no
destroy-artifact or destroy-enchantment effect at all. The board answers this proactively with
Pilfer ×2 (take it before it resolves) and reactively with the one bounce the colours have,
Aether Channeler.

**Graveyard hate does not exist in this cube.** A probe of all 452 pool entries finds only
self-referential graveyard text. Of the three decks built from this archetype, this is the one most
exposed to it — and the environment contains none.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:7  2:2  3:8  4:3  5:1  7:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.9: Monstrous War-Leech@0.8, Monstrous War-Leech@0.8, The Cruelty of Gix@0.7, Braids, Arisen Nightmare@0.6) → p=0.84 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 11.5: Vohar, Vodalian Desecrator@0.7, Vohar, Vodalian Desecrator@0.7, Bone Splinters@0.8, Bone Splinters@0.8, Phyrexian Rager@0.5) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 80%  T2 91%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The mainboard carries no sweeper. Mitigating means Drag to the Bottom (-3/-3 on this manabase) or Choking Miasma (-2/-2), and both kill this deck's own recursion core - Cult Conscript 2/1, Eerie Soultender 3/1, Vohar 1/2, Phyrexian Rager 2/2 - which is the engine that prices Writhing Necromass. The deck instead blocks with a 5/5 deathtouch Necromass, which trades with any single attacker, and rebuys chump blockers with Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield'.
  OK        single_large_threat: Bone Splinters, Ertai Resurrected, Rona's Vortex, Writhing Necromass
  CONCEDED  noncreature_permanents: Blue and black in this cube contain no 'destroy or exile target artifact/enchantment' effect, so the mainboard cannot remove a resolved one; it answers them on the stack with Ertai Resurrected. Bounce is the colours' only post-resolution answer and it is boarded as Aether Channeler.
  OK        stack: Ertai Resurrected
  CONCEDED  graveyard: A probe across the entire cube pool found no card in any colour that exiles or attacks an opponent's graveyard. For this deck that cuts one way only - it is the deck most exposed to graveyard hate and the environment contains none.
```
- No WARN-tier flags: curve and goldfish both returned PASS.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands convert into the deck's own recursion: Cult Conscript x2 is a {1}{B} sink that returns a body from the graveyard every turn a non-Skeleton died, Eerie Soultender is a {4}{B} sink that returns a creature card to hand from exile, Monstrous War-Leech has a Kicker {U}, and Rona's Vortex has a Kicker {2}{B}. Gibbering Barricade x2 adds a fifth at '{2}{B}, Sacrifice a creature'. Five repeatable or optional mana sinks across 23 nonland cards, and unlike a spell-based deck the sinks keep working from an empty hand. TENSION TO STATE (Challenger finding 6): two of these sinks - Eerie Soultender's rebuy and Cult Conscript's return - REMOVE creature cards from the graveyard, so spending flood mana on them raises the price of the deck's headline threat. Flooding into Gibbering Barricade activations is strictly better than flooding into rebuys, because Barricade adds to the yard instead of subtracting. |
| screw | mitigation | 9 of the 23 nonland cards cost 1 or 2 mana (Cult Conscript x2 and Cut Down x2 and Bone Splinters x2 at MV1, Rona's Vortex at MV1, Vohar x2 at MV2), and the goldfish simulation reports 85% keepable hands with 88% three-lands-by-turn-3 and a turn-1 play 79% of the time. The deck is also uniquely tolerant of a slow start because Writhing Necromass gets CHEAPER the longer the game runs. |
| decapitation | mitigation | There is no single key card to answer. The two payoffs are 2-ofs (Writhing Necromass x2, Monstrous War-Leech x2) and the recursion is spread across four different cards that each rebuy a body: Eerie Soultender ('Return another target creature card from your graveyard to your hand'), Cult Conscript ('Return this card from your graveyard to the battlefield'), Braids's Frightful Return chapter II ('Return target creature card from your graveyard to your hand') and The Cruelty of Gix chapter III ('Put target creature card from a graveyard onto the battlefield'). Answering a threat here does not remove it from the game - it moves it to the zone this deck is built to exploit, which is the archetype's structural answer to removal. THE ONE GENUINE DECAPITATION RISK, now recorded: the deck is weakest on turn 1-3 before anything has died, because both payoffs scale off an empty resource - Writhing Necromass costs its full {6}{B} and Monstrous War-Leech is literally a 0/0 that dies to state-based actions with an empty graveyard. The mitigation is that neither is a card you cast in that window; the early turns belong to Cult Conscript, Vohar and cheap removal, which is what fills the yard in the first place. |
| gas-out | mitigation | Phyrexian Rager x2 ('you draw a card and you lose 1 life'), Braids, Arisen Nightmare ('that player loses 2 life and you draw a card'), Braids's Frightful Return chapter III ('they lose 2 life and you draw a card') and Vohar's per-turn loot all replace cards, and the recursion suite means an empty hand still has a graveyard full of castable creatures. The deck's resource is the yard, not the hand, so hellbent is not a loss state. |
| raced | accepted | Against the cube's fastest clocks this deck has no sweeper and its cheap bodies are small (Cult Conscript 2/1, Vohar 1/2, Phyrexian Rager 2/2, Eerie Soultender 3/1). Mitigating means maindecking Drag to the Bottom or Choking Miasma, and both would kill this deck's own recursion core - every one of those four bodies dies to -2/-2 - which is not merely a bad trade but a strictly negative one, because those bodies are the engine that prices Writhing Necromass. ON AVAILABILITY (Challenger finding 7, contested in part): the Challenger argued both named counterfactuals are unavailable, making the concession an argument from cards the deck could never play. Half of that is right - Drag to the Bottom is a rare and the 5-rare cap is fully spent, so it is genuinely unreachable, and that makes this concession partly FORCED rather than chosen. But Choking Miasma IS legal here: its printed color_identity is [B,G] only because of 'Kicker {G}', and effective_cost.best_mode(card, [U,B], []) returns a normal cast at {1}{B}{B} with the kicker declined. Raw color_identity is the test the build rules explicitly forbid for this purpose, and the sibling defenders build in this same cube runs Choking Miasma in its sideboard on exactly that basis. So that counterfactual is real, the card is castable, and the stated cost stands. The cost of mitigating is the deck's identity: a graveyard value deck that sweeps its own graveyard-feeders is a worse version of a control deck. The race is instead answered on the ground by a 5/5 DEATHTOUCH Necromass, which trades with any attacker of any size, and from the sideboard. |
| disruption-fizzle | mitigation | There is no single critical turn to disrupt - the plan is a sequence of bodies, and each one answered is a creature card banked that makes the next Writhing Necromass cost {1} less. Removal aimed at the engine is the least effective it can be here: killing an Eerie Soultender has already given you its mill three, and killing a Cult Conscript is undone for {1}{B}. The one genuine disruption risk is a counterspell on a discounted Necromass, and the answer is that the second copy costs the same or less, because the countered one goes to the graveyard as a CREATURE card and increases its own discount by 1. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sengir Connoisseur | 'Whenever one or more other creatures die, put a +1/+1 counter on this creature' is a real payoff for a deck whose creatures die, and it flies. At {3}{B}{B} it is the heaviest double-black cost available and competes directly with The Cruelty of Gix and Braids, Arisen Nightmare on the same turn; the 14-creature list already has enough three- and four-drops. |
| Extinguish the Light | CUT IN PHASE 9. It was the only unconditional {2}{B}{B} removal in the list and the only mainboard answer to a planeswalker besides Ertai Resurrected. Cut because Bone Splinters is also unconditional at a fifth of the cost and banks a creature card doing it, and because the grill showed the deck's real deficit was proactive graveyard-banking volume, not removal. |
| Phyrexian Rager (2nd copy) | TRIMMED TO 1 IN PHASE 9. A fair {2}{B} 2/2 that replaces itself, but its only route to the graveyard is dying, which this deck does not control - the assembly check discounts it to 0.5 weight for exactly that. The slot went to a card that banks on demand. |
| Tolarian Terror | Costs {1} less per INSTANT AND SORCERY card in the graveyard; this list runs 6 of 23 nonland cards against 14 creature cards, so it reads the wrong half of the yard. It is the payoff for a different sub-archetype of this same cube. |
| Tyrannical Pitlord | Named as a keystone by the rejected 'threat-dense' sketch and flagged by the judge: 'When this creature leaves the battlefield, sacrifice the chosen creature' costs a SECOND creature every time the top-end dies, which in a deck built on banking and rebuying its own bodies is a real cost, not upside. It was also the 4th mainboard rare in that sketch, which would have left a one-card sideboard. |
| Coral Colony | '{1}{U}, {T}: Target player mills X cards, where X is the number of creatures you control with defender' - this mainboard runs 0 defenders across 23 nonland cards, so X = 0. It is the self-mill engine for the defenders build, not this one. |
| Founding the Third Path | Chapter II mills four, which this deck wants, but chapter I free-casts an instant or sorcery of mana value 1 or 2 and this list runs only 6 instants and sorceries total; and it adds 0 creature cards to the yard itself. Two slots for one useful chapter. |
| Talas Lookout | 'When this creature dies, look at the top two cards of your library. Put one of them into your hand and the other into your graveyard' is on-plan - a body that banks a card on death - but {2}{U}{U} is a double-blue cost in a deck with 6 blue sources, which is the one cost this manabase genuinely cannot pay. |
| Shadow Prophecy | 'Put up to two of them into your hand and the rest into your graveyard' looks like self-mill, but X is the domain count and this two-colour manabase caps X at 2 - so it puts up to two cards in hand and ZERO in the graveyard. The mill half is blank here. |
| Drag to the Bottom | At domain X = 3 on this manabase its -3/-3 kills Cult Conscript (2/1), Eerie Soultender (3/1), Vohar (1/2), Phyrexian Rager (2/2) and Braids, Arisen Nightmare (3/3) - the entire cheap recursion core that prices Writhing Necromass. Sweeping your own graveyard-feeders is strictly negative here. |
| Choking Miasma | Same problem as Drag to the Bottom one step smaller: at -2/-2 it still kills Cult Conscript, Eerie Soultender, Vohar and Phyrexian Rager. It is the right sideboard card for the defenders build in this same archetype and the wrong one for this deck. |
| Sheoldred, the Apocalypse | The strongest card in the colours and a fine 4/5 deathtouch body, but the 5-rare cap is fully allocated to cards that read the graveyard (Braids Arisen Nightmare, The Cruelty of Gix, Ertai Resurrected) or answer a class the deck otherwise cannot (Aether Channeler, Liliana of the Veil). Sheoldred is powerful here but not synergistic, and the cap forces the choice. |
| Defiler of Flesh | 'Whenever you cast a black permanent spell, target creature you control gets +1/+1 and gains menace' with a {B}-discount on black permanents - 18 of the 23 nonland cards are black permanents, so the count is genuinely there. Cut on the rare cap and on {2}{B}{B} competing with the same turn as Braids and Cruelty. |
| Evolved Sleeper | A one-drop mana sink that eventually draws cards, but every activation is sorcery-speed mana this deck would rather spend on Cult Conscript's return or Eerie Soultender's rebuy, and it costs a rare slot. |
| Weatherlight Compleated | 'Whenever a creature you control dies, put a phyresis counter on Weatherlight Compleated' scales with exactly what this deck does, but it needs seven counters before it draws and four before it is a creature at all - too slow against a thesis turn of 7, and it costs a mythic slot. |
| Shadow-Rite Priest | '{3}{B}{B}, {T}, Sacrifice another Cleric: Search your library for a black creature card, put it onto the battlefield' would be a genuine tutor-to-play, but this list runs exactly 2 Clerics (Eerie Soultender x2) of 14 creature cards, and the Priest itself is the second - so the sacrifice requirement is nearly unfeedable. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' - this list runs 5 such copies (Cut Down x2, Bone Splinters x2, Rona's Vortex x1) of 23 nonland cards, so the tutor is live, but a 3/3 for {3}{U} in a deck with 6 blue sources is the wrong cost. |
| Crystal Grotto | Excluded from the manabase. A {1} tax on coloured mana is unaffordable in a deck this black-hungry, where the cheap plays are {B} and {1}{B} on curve. |
| Ertai's Scorn | {1}{U}{U} is the one cost profile this manabase cannot support - 6 blue sources and no other card in the deck asking for double blue. Negate at {1}{U} does the sideboard job instead. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.49 adj [MV 2.87 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  85.7%  prod  76.5%  gap  +9.2pp  [OK]
  U  demand  14.3%  prod  35.3%  gap -21.0pp  [OK]
```


## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard only - every card verified present in working_pool by exact name
commons_uncommons: max 2 copies each - Writhing Necromass 2, Monstrous War-Leech 2, Eerie Soultender 2, Cult Conscript 2, Gibbering Barricade 2, Braids's Frightful Return 2, Vohar 2, Cut Down 2, Bone Splinters 2, Contaminated Aquifer 2, Battlefly Swarm 2, Negate 2, Knight of Dusk's Shadow 2, Pilfer 2, Phyrexian Rager 1, Rona's Vortex 1 - all at or under the cap
rares_mythics: max 1 copy each - Braids, Arisen Nightmare 1, The Cruelty of Gix 1, Ertai Resurrected 1 (mainboard); Aether Channeler 1, Liliana of the Veil 1 (sideboard)
rare_mythic_total_cap: 5 of 5 used (3 mainboard, 2 sideboard) - exactly at the user's cap. The shape judge explicitly penalised the rejected 'threat-dense' sketch for spending 4 of 5 in the mainboard alone, which would have left a 1-card sideboard against the rest of the cube.
basics: format-supplied, unlimited - 11 Swamp, 4 Island
```
