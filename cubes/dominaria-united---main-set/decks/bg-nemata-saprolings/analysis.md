---
deck_name: "bg-nemata-saprolings"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-08-14T03:56:59Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x2 Haunted Mire  enters tapped
  x4 Forest        basic
  x10 Swamp         basic
```

### CREATURES (14)

```
CMC  Card                       Qty  Color  Role                        Rar
  1  Battlefly Swarm            x2   B      Enabler/Fodder              C
  1  Cult Conscript             x2   B      Enabler/Fodder              U
  2  Llanowar Loamspeaker       x1   G      Infrastructure/Consistency  R
  2  Phyrexian Vivisector       x2   B      Payload/Payoff              C
  2  Salvaged Manaworker        x1   C      Infrastructure/Consistency  C
  2  Splatter Goblin            x2   B      Enabler/Fodder              C
  3  Braids, Arisen Nightmare   x1   B      Engine/Outlet               R
  3  Gibbering Barricade        x1   B      Engine/Outlet               C
  4  Nemata, Primeval Warden    x1   BG     Payload/Payoff              R
  4  Sheoldred, the Apocalypse  x1   B      Payload/Payoff              M
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                  Qty  Color  Role                    Rar
  1  Bone Splinters        x2   B      Interaction/Disruption  C
  2  Tear Asunder          x2   G      Interaction/Disruption  U
  3  Choking Miasma        x1   B      Interaction/Disruption  U
  4  Extinguish the Light  x1   B      Interaction/Disruption  C
```

### OTHER SPELLS (4)

```
CMC  Card                       Qty  Color  Role                    Rar
  3  Braids's Frightful Return  x2   B      Engine/Outlet           U
  3  Liliana of the Veil        x1   B      Interaction/Disruption  M
  3  The Weatherseed Treaty     x1   G      Enabler/Fodder          U
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in
Tail Swipe               x2   G      Interaction/Disruption — vs. single large threats and as cheap removal generally. 'Choose target creature you control and target creature you don't control... Then those creatures fight each other' costs {G} rather than Bite Down's {1}{G}, and it is unconditional removal rather than a ping, because with Nemata on the battlefield the creature it kills is exiled into a Saproling. Replaces Bite Down x2, which the grill showed was a 2-damage ping in this list: only 2 of the 14 mainboard creature copies have power 3 or greater (Nemata 3, Sheoldred 4).  [U]
Knight of Dusk's Shadow  x1   B      Threat/Interaction — vs. the cube's lifegain class: 'Your opponents can't gain life' turns the whole class off. Counted opponent-facing that class is 21 cards, not the 22 the dossier reports, because Sheoldred, the Apocalypse is in this deck's own mainboard.  [U]
Pilfer                   x2   B      Interaction/Disruption — vs. the cube's 32-card graveyard class, its largest named threat class, against which the deck's only other answer is a singleton Nemata that must resolve and survive. 'Target opponent reveals their hand. You choose a nonland card from it. That player discards that card' takes the recursion piece or the bomb before it is ever cast.  [C]
Snarespinner             x2   G      Interaction/Threat — vs. flying decks: a 1/3 reach body for {1}{G} that reads 'Whenever this creature blocks a creature with flying, this creature gets +2/+0 until end of turn' — it blocks and kills a 3-toughness flier rather than merely chumping.  [C]
Broken Wings             x2   G      Interaction/Disruption — The single widest answer available to any of these four decks: 'Destroy target artifact, enchantment, or creature with flying' covers three separate threat classes at once — the cube's 15 artifacts, its 18 enchantments, and the 31 flying members of its 51-card evasion class.  [C]
Sengir Connoisseur       x1   B      Payload/Payoff — vs. grindy and removal-heavy decks that go long: 'Flying / Whenever one or more other creatures die, put a +1/+1 counter on this creature' turns an attrition war into an evasive clock. Cut from the maindeck because at {3}{B}{B} it arrives after the turn-8 thesis, but that objection disappears in a game that is going to turn 12.  [U]
```

## ANALYSIS

### DECK IDENTITY

A B/G attrition deck in which removal and fodder are the same resource. Nemata, Primeval Warden replaces every opposing creature death with an exile and a 1/1 Saproling, so each removal spell buys a body and simultaneously denies the cube's 32-card graveyard class its material. Braids, Arisen Nightmare, Braids's Frightful Return and Gibbering Barricade convert those bodies plus the deck's own cheap fodder into cards, and Sheoldred, the Apocalypse turns the card lead into a life lead. Tear Asunder is the reason to be in green: it is the only MAINDECK answer to a resolved artifact or enchantment across the four decks built from this cube, and kicked for {1}{B} it exiles any nonland permanent at all.


### THE HONEST VERSION OF THIS DECK

This pipeline was flagged as the weakest of the four at strategy selection, and both automated gates confirmed it rather than talked around it.

The **Phase 6b assembly gate failed** the first version — enabler role p=0.66 against a 0.75 threshold — because Nemata's fodder is gated on the opponent having creatures and on our removal connecting. The repair was to stop pretending the Saproling engine was an engine: Sengir Connoisseur ×2 came out of the top end and cheap fodder went in.

The **Phase 9 grill** then found something worse in the manabase. The record justified a thin green base by naming two mana creatures as fixers — and **both cost `{G}` to cast.** They fix nothing about green screw; they are circular. Deathbloom Gardener was replaced with Salvaged Manaworker (`{2}`, colourless, castable off Swamps), which is the only non-circular fixer in the pool.

What is left is a good black attrition deck that plays green for **5 copies across 4 names**. B pips 24, G pips 5.

### THE CLAIM I HAD TO WITHDRAW

An earlier version of this analysis said Tear Asunder was *"the only card across any build from this cube that answers an already-resolved artifact or enchantment."* That is false, and it was falsified by **this deck's own sideboard** — Broken Wings reads `Destroy target artifact, enchantment, or creature with flying`. The error came from trusting the dossier's `enchantment_answers: 3` census line against the dossier's own caveat that a census proves presence, never absence.

The narrower claim survives and is still the reason to be in green:

| Deck | Maindeck answer to a resolved artifact or enchantment? |
|---|---|
| W/B drain aristocrats | No — Prayer of Binding and Destroy Evil are sideboard |
| B/R sacrifice burn | No — and **nothing at any price** for enchantments |
| Mono-B Braids attrition | No — the colour has none at all |
| B/G Nemata | **Yes — Tear Asunder ×2**, and kicked it exiles *any* nonland permanent |

### NEMATA AS GRAVEYARD HATE

The dossier reports **zero graveyard-hate cards in the whole cube** and a 32-card graveyard class. Nemata is the loophole:

> If a creature an opponent controls would die, exile it instead. When you do, create a 1/1 green Saproling creature token.

The exile half is a **replacement effect** — there is no window to respond to it, and it applies to *every* opposing creature death, not just ones we cause. Against the cube's recursion cards their creatures stop coming back at all while Nemata is on the battlefield.

The limit, which the grill made me state: Nemata is a **singleton** under the 5-rare cap, seen in about **35% of games by the turn-8 thesis**, and both of its activated abilities name Saprolings specifically — the draw ability needs two of them. The deck is named after a subtheme that is live in roughly a third of games. The other two thirds it is a black sacrifice deck with unusually good answers.

### THE CHOKING MIASMA ARITHMETIC

Worth writing down because I got it wrong twice. Choking Miasma is `Kicker {G} … If this spell was kicked, put a +1/+1 counter on a creature you control. All creatures get −2/−2 until end of turn.` I claimed the kicker was how a chosen body survives. Run the numbers:

| Body | With counter | After −2/−2 |
|---|---|---|
| 1/1 Saproling | 2/2 | **0/0 — dies** |
| Cult Conscript 2/1 | 3/2 | **1/0 — dies** |
| Splatter Goblin 2/1 | 3/2 | **1/0 — dies** |
| Battlefly Swarm 1/1 | 2/2 | **0/0 — dies** |
| Phyrexian Vivisector 2/2 | 3/3 | 1/1 — survives |

The kicker rescues **one of the eight**, and **none of the Saprolings**. It is a counter mode, not a survival mode. The deck runs one Choking Miasma because it is still the only sweeper these colours have — not because the symmetry is solved.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:6  2:8  3:7  4:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Nemata, Primeval Warden@0.7) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.1: Cult Conscript@0.8, Cult Conscript@0.8, The Weatherseed Treaty@0.5) → p=0.92 (need ≥ 0.75)
  PASS  outlet: 6 copies (effective 4.6: Braids, Arisen Nightmare@0.7, Braids's Frightful Return@0.5, Braids's Frightful Return@0.5, Gibbering Barricade@0.9) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 85%
  play by turn: T1 73%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Choking Miasma, Liliana of the Veil, Splatter Goblin
  OK        single_large_threat: Bone Splinters, Extinguish the Light, Tear Asunder, Liliana of the Veil
  OK        noncreature_permanents: Tear Asunder, Braids, Arisen Nightmare
  CONCEDED  stack: Neither black nor green has a counterspell anywhere in this cube. The deck answers permanents after they resolve, which is what Tear Asunder ('Exile target artifact or enchantment. If this spell was kicked, exile target nonland permanent instead') is for — it is the only card across all four decks built from this cube that answers an already-resolved noncreature permanent of any type.
  OK        graveyard: Nemata, Primeval Warden
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Llanowar Loamspeaker's second ability is the deck's answer to a flooded board: '{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn. It's still a land' - a surplus land becomes a hasty attacker and, if it dies, a death trigger. Alongside it: Salvaged Manaworker ('{1}: Add one mana of any color', converting spare black mana into the green the deck is short of), Cult Conscript x2 ('{1}{B}: Return this card from your graveyard to the battlefield', gated on a non-Skeleton creature having died that turn), Gibbering Barricade ('{2}{B}, Sacrifice a creature: You gain 1 life and draw a card') and Battlefly Swarm x2 ('{B}: This creature gains deathtouch until end of turn'). At 16 lands the flood tail is also the shortest the land_target model allows for this curve. |
| screw | mitigation | 6 of the 24 nonland cards cost 1 and 8 cost 2, so 14 of 24 are castable off two lands; the goldfish check reports 84% keepable hands, a 73% turn-1 play rate, 96% turn-2 and 99% turn-3, with 3 lands by turn 3 in 85% of hands. The deck runs 3 acceleration/fixing cards which the land_target model already credits - and after the Phase 9 grill those three are no longer circular: Salvaged Manaworker is colourless and castable off Swamps, where the Deathbloom Gardener it replaced cost {2}{G} and so could not fix the green shortfall it was cited for. Colour screw on green remains the real risk: 6 sources of 16, roughly 85% to have one by turn 4. |
| decapitation | mitigation | Nemata answered on sight costs the deck its Saproling engine but not its plan, which is exactly why the Phase 6b repair front-loaded fodder that needs no Saproling: Phyrexian Vivisector x2 still triggers on any death, Braids, Arisen Nightmare and Braids's Frightful Return x2 still convert permanents into cards and drain, and Gibbering Barricade still turns bodies into cards. Braids's Frightful Return chapter II ('Return TARGET creature card from your graveyard to your hand') rebuys the answered Nemata outright - noting, per the grill, that this chapter does target, so it is the one piece of the engine that a hexproof or ward effect could interact with. The payoff role is 4 copies across 3 cards at p=0.77 and the outlet role is 6 copies across 3 cards at p=0.84. |
| gas-out | mitigation | Cards that produce a card or a body after the hand empties: Braids, Arisen Nightmare x1 (draws at each end step the opponent declines to match), Braids's Frightful Return x2 (rebuys a creature at II, draws at III), Gibbering Barricade x1 (draws per sacrifice), Cult Conscript x2 (returns itself for {1}{B} after a non-Skeleton death), Nemata x1 ('{1}{B}, Sacrifice two Saprolings: Draw a card') and Llanowar Loamspeaker x1 (turns a land into a body) = 8 of 24. CORRECTED after the grill, which recounted the same list and got 8 where the record said 9. Sheoldred converts each of those draws into 2 life. Phyrexian Vivisector x2 is deliberately NOT counted - its scry is selection, not a card. |
| raced | mitigation | REWRITTEN after the Phase 9 grill marked the previous version UNSATISFIED on two counts, both of which were right. First, the previous version called Choking Miasma 'a one-sided sweeper in the specific case where Nemata is already down'. Its oracle reads 'ALL creatures get -2/-2' and it kills 8 of this deck's 14 creature copies; Nemata changes where the opponent's creatures GO (exiled, into Saprolings), not the symmetry of the effect. That claim is withdrawn. Second, the air defence was 2 mainboard cards against a 51-card evasion class of which 31 fly. The repair is in the list, not in the prose: Battlefly Swarm is now x2 MAINDECK ('Flying / {B}: This creature gains deathtouch until end of turn' - trades with any flier regardless of size and is still fodder afterwards), joining Nemata's Reach on a 3/4 body, so mainboard cards that can block a flier go from 2 to 3 copies across 2 names. The sideboard escalates further with Snarespinner x2 (1/3 reach that gets +2/+0 when blocking a flier) and Broken Wings x2 ('Destroy target artifact, enchantment, or creature with flying'). This remains the deck's weakest axis and is not claimed as solved. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt: Braids, Braids's Frightful Return and Gibbering Barricade each generate value in isolation and none needs a second piece on the battlefield. Nemata's exile clause is a REPLACEMENT effect, so once it is on the battlefield an opposing creature dying is exiled instead with no window to respond - though, per the grill's correction, the Saproling itself comes from a reflexive TRIGGERED ability ('When you do, create a 1/1 green Saproling'), and Braids's Frightful Return chapter II does target, so the engine is not entirely target-free as an earlier version claimed. The genuine exposure is that answering Nemata before it resolves costs the deck its Saproling supply entirely, which is why 7 of the 24 nonland cards are fodder that involves no Saprolings at all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sengir Connoisseur | 'Flying / Whenever one or more other creatures die, put a +1/+1 counter on this creature. This ability triggers only once each turn' — a genuine evasive finisher that grows off exactly what this deck does. Cut from the maindeck to 0 during the Phase 6b repair: at {3}{B}{B} it arrives after the turn-8 thesis, and the enabler role needed the slots. One copy is in the sideboard for games that go long. |
| Bortuk Bonerattle | 'Return that card to the battlefield if its mana value is less than or equal to the number of basic land types among lands you control.' This manabase has exactly 2 basic land types (Swamp, Forest — Haunted Mire is 'Land — Swamp Forest' and supplies both), so a 6-mana card reanimates only creatures of mana value 2 or less to the battlefield; anything bigger goes to hand. |
| Urborg Repossession | 'Return target creature card from your graveyard to your hand. You gain 2 life' for {B} is efficient recursion, but Braids's Frightful Return chapter II already does it on a permanent that also sacrifices and drains, and the 1-MV slot is fully spent on fodder and Bone Splinters. |
| Quirion Beastcaller | 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' is a real death payoff, but it is a RARE and the 5-slot cap is fully spent on Nemata, Liliana, Sheoldred, Braids and Llanowar Loamspeaker. |
| Silverback Elder | A mythic whose cast-trigger modes include 'Destroy target artifact or enchantment' — excluded on the rare/mythic cap, and on {2}{G}{G}{G} in a deck with 6 green sources of 16 lands. |
| Threats Undetected | A rare tutor that puts zero bodies onto the battlefield and generates no Saproling fodder or opponent-creature death. The shape judge flagged it as a weak keystone in a rejected sketch; the rare cap settles it. |
| Defiler of Vigor | Its cost reduction applies to GREEN permanent spells; after the Phase 9 repair the list runs 3 green permanents of 24 nonland cards (Llanowar Loamspeaker x1, The Weatherseed Treaty x1, Nemata x1) — Deathbloom Gardener, which was the fourth, was itself cut. 3 of 24 for a 5-mana rare against a fully spent cap. |
| Llanowar Greenwidow | Domain recursion: '{7}{G}: Return this card from your graveyard to the battlefield ... costs {1} less for each basic land type among lands you control'. With 2 basic land types that is {5}{G} — 6 mana in a 16-land deck. Also a rare. |
| Nishoba Brawler / Sunbathing Rootwalla / Territorial Maro / Gaea's Might / Slimefoot's Survey | All Domain cards. This manabase has exactly 2 basic land types, so every one of them operates at the bottom of its range — Nishoba Brawler is a 2/3 trample for {1}{G}, Territorial Maro is a 4/4 for 5. The whole Domain sub-theme of green is unavailable to a 2-colour deck and is excluded as a class, not card by card. |
| Uurg, Spawn of Turg | 'Uurg's power is equal to the number of land cards in your graveyard' and '{B}{G}, Sacrifice a land: You gain 2 life'. The deck has no self-mill and no land sacrifice it wants to make at 16 lands, so Uurg is a 3-mana 0/5 for most of the game. |
| Bog Badger | 'if it was kicked, creatures you control gain menace until end of turn' — a one-shot combat trick on a 3/3 body, in a deck whose plan is attrition rather than an alpha strike. |
| Bite Down | 'Target creature you control deals damage equal to its power to target creature or planeswalker you don't control' needs a big creature; the maindeck's largest body is Nemata at 3/4 and Gibbering Barricade at 2/4. Moved to the sideboard, where it comes in alongside Sengir Connoisseur. |
| Broken Wings | 'Destroy target artifact, enchantment, or creature with flying' is the widest single answer in the pool and it is NOT excluded on quality — it is in the sideboard rather than the maindeck because all three of its modes are matchup-dependent, and Tear Asunder x2 already covers the artifact and enchantment classes maindeck. |
| Snarespinner | A 1/3 reach blocker that grows when blocking a flier. Sideboard rather than maindeck: it does nothing at all in a matchup with no fliers, and the maindeck 2-MV slot is spent on Tear Asunder and Phyrexian Vivisector. |
| Magnigoth Sentry | A {3}{G} 4/4 with reach would answer the flying class from the maindeck, but it has no death trigger, no sacrifice interaction and no value text — a vanilla body in a deck whose every other slot does two things. |
| Toxic Abomination | A 3/2 for {1}{B} is efficient fodder, but 'When this creature enters, you lose 2 life' is a real cost in a deck that also pays life to nothing else and whose plan is to survive to turn 8; Splatter Goblin costs the same and has a death trigger. |
| Knight of Dusk's Shadow | 'Your opponents can't gain life' answers a real 22-card class but is matchup-dependent, and the maindeck 2-MV slot is better spent on cards that are live in every game. Moved to the sideboard. |
| Eerie Soultender / Tattered Apparition / Phyrexian Rager / Blight Pile / Pilfer | All playable mono-black filler, all excluded for the same structural reason: this deck's 24 nonland slots are already fully committed to fodder, outlets, removal and the five capped rares, and none of these adds a death trigger, a sacrifice outlet or an answer the list does not have. |
| Shadow-Rite Priest | '{3}{B}{B}, {T}, Sacrifice another Cleric' — the final list runs 0 Clerics, so the ability has no legal fuel. It is also a rare against a fully spent cap. |
| Extinguish the Light (second copy) | Kept at 1 rather than 2. The deck already answers a single large threat with Bone Splinters x2, Tear Asunder x2 kicked, and Liliana's -2, and at {2}{B}{B} a second copy would push the 4-MV slot to 4 of 24 in a 16-land deck. |
| Deathbloom Gardener | Was in the pre-grill mainboard as fixing. Cut because it costs {2}{G}: a green-costed card cannot fix a green shortfall, which is the circularity the Phase 9 grill identified. Salvaged Manaworker ({2}, colourless) replaced it. Its deathtouch was a real loss and is why Tail Swipe moved into the sideboard, where a deathtouch body is no longer available to make the fight unconditional. |
| Cut Down | Was in the pre-grill mainboard at x1. Cut to make room for a second maindeck Battlefly Swarm after the grill found air defence was 2 cards against a 51-card evasion class of which 31 fly. This also brought Interaction from 33.3% to 29.2%, inside the midrange band. |
| Bite Down | Was in the pre-grill sideboard at x2. 'Target creature you control deals damage equal to its power' — only 2 of the 14 mainboard creature copies have power 3 or greater (Nemata 3, Sheoldred 4), so against a genuinely large threat it is a 2-damage ping. Replaced by Tail Swipe, which costs {G} instead of {1}{G} and fights rather than pings. |
| Drag to the Bottom | EXCLUSION REASONING CORRECTED. It was originally swept out with the whole Domain class, which was wrong: its clause reads '1 PLUS the number of basic land types', so with 2 basic land types X = 3 — a bigger sweeper than Choking Miasma's -2/-2 for one more mana, and not at the bottom of its range at all. It is out solely because it is a rare and the 5-slot cap is fully spent on Nemata, Liliana, Sheoldred, Braids and Llanowar Loamspeaker. |
| The Raven Man | 'At the beginning of each end step, if a player discarded a card this turn, create a 1/1 black Bird creature token with flying' — the only repeatable, opponent-INDEPENDENT body generator in these colours, which is exactly the defect this pipeline concedes. It composes with Liliana's +1 and Braids's Frightful Return chapter I. Excluded because it is a rare against a fully spent cap, and because its Birds read 'This token can't block', so they do not help the air-defence problem either. |
| Phyrexian Rager | 'When this creature enters, you draw a card and you lose 1 life' — a self-replacing fodder body. Excluded because the 3-MV slot holds 7 of 24 cards and every one of them is an engine piece or a sweeper; the fodder the deck needed was cheap, and Battlefly Swarm at {B} filled that slot while also blocking fliers. |
| Writhing Necromass | 'This spell costs {1} less to cast for each creature card in your graveyard. Deathtouch', 5/5. A deck with 14 creature copies that sacrifices them does discount it meaningfully, and the grill proposed it as ground defence — but at 16 lands with a curve topping at 4, a card whose floor is 7 mana is a real risk of being uncastable in the games where the deck is losing. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.29   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.78 adj [MV 2.29 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  82.8%  prod  75.0%  gap  +7.8pp  [OK]
  G  demand  17.2%  prod  37.5%  gap -20.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1. mainboard count == 40  -- got 40
  [PASS] 1. sideboard count == 10  -- got 10
  [PASS] 2. every name exists in working pool (exact match)  -- []
  [PASS] 3. copy counts obey card_pool_rules
  [PASS] 3b. <=5 rares/mythics across MB+SB  -- 5: Braids, Arisen Nightmare x1 (rare), Liliana of the Veil x1 (mythic), Llanowar Loamspeaker x1 (rare), Nemata, Primeval Warden x1 (rare), Sheoldred, the Apocalypse x1 (mythic)
  [PASS] 4. every nonland usable in core+splash (best_mode)  -- []
  [PASS] 5. <=3 cards per splash colour, all in splash_candidates  -- splash_colors=[] used=[]
  [PASS] 6. land count within 1 of recommendation  -- have 16, recommended 16
```
