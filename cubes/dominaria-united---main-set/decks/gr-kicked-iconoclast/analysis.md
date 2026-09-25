---
deck_name: "gr-kicked-iconoclast"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GR"
format: "40-card"
built_at: "2026-08-18T23:02:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x8   Forest                     basic
  x1   Karplusan Forest           {T}: Add {C}. {T}: Add {R} or {G}. This land deals 1
  x5   Mountain                   basic
  x2   Wooded Ridgeline           ({T}: Add {R} or {G}.) This land enters tapped.
```

### CREATURES (17)

```
CMC Card                       Qty   Color  Role                             Rar
1   Llanowar Stalker           x2    G      Payload/Payoff                   C
1   Phoenix Chick              x2    R      Payload/Payoff                   U
1   Viashino Branchrider       x2    R      Payload/Payoff                   C
2   Leaf-Crowned Visionary     x1    G      Payload/Payoff + Engine/Outlet   R
2   Llanowar Loamspeaker       x1    G      Infrastructure/Consistency       R
2   Quirion Beastcaller        x1    G      Payload/Payoff                   R
2   Vineshaper Prodigy         x2    G      Payload/Payoff                   C
2   Yavimaya Iconoclast        x2    G      Payload/Payoff                   U
3   Deathbloom Gardener        x1    G      Infrastructure/Consistency       C
3   Elvish Hydromancer         x2    G      Payload/Payoff                   U
3   Squee, Dubious Monarch     x1    R      Payload/Payoff                   R
```

### INSTANTS & SORCERIES (5)

```
CMC Card                       Qty   Color  Role                             Rar
1   Flowstone Infusion         x1    R      Interaction/Disruption           C
2   Colossal Growth            x2    G      Payload/Payoff                   C
2   Lightning Strike           x2    R      Interaction/Disruption           C
```

### OTHER SPELLS (2)

```
CMC Card                       Qty   Color  Role                             Rar
1   Hammerhand                 x2    R      Payload/Payoff                   C
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                      Rar
Bite Down                  x2    G      Interaction/Disruption — vs big creatures, o C
Smash to Dust              x1    R      Interaction/Disruption — vs go-wide x/1 boar C
Broken Wings               x2    G      Interaction/Disruption — vs fliers, artifact C
Hurloon Battle Hymn        x2    R      Interaction/Disruption — vs single large blo U
Warhost's Frenzy           x1    R      Payload/Payoff — vs decks that gum up the gr U
Magnigoth Sentry           x2    G      Interaction/Disruption — vs decks whose cloc C
```

## ANALYSIS
### DECK IDENTITY
A Gruul Elf swarm that is trying to be dead-on-board by turn four. The green half is eleven castable Elves under Leaf-Crowned Visionary's +1/+1 anthem and its pay-{G}-draw-a-card refuel; the red half is what mono-green cannot buy — Yavimaya Iconoclast kicked for {R} is a turn-3 4/3 trample HASTE Elf (5/4 under the anthem), Colossal Growth kicked is +4/+4 trample haste at instant speed, and Lightning Strike either removes the one blocker holding the ground or throws the last three points at the player. Nothing in the maindeck costs more than three mana. Disclosed plan cost: the deck's only mass-pump closer, Warhost's Frenzy ('Creatures you control get +2/+0'), is sideboard-only — it and Squee are both {2}{R} MV3 non-Elves competing for one slot, and cutting a second Deathbloom Gardener to fit both would drop Elf spells below the eleven the Visionary's triggers are counted against.
**Red buys exactly two things mono-green cannot.** The first is the kicker on an actual Elf: Yavimaya Iconoclast for {1}{G}{R} is a 4/3 trample haste on turn three, 5/4 under the anthem, and it attacks the turn it lands. The second is removal — Lightning Strike and Flowstone Infusion answer the blocker that otherwise stalls a board of 1/1s and 2/2s, and Lightning Strike's 'any target' means the same card is the last three points of damage.

**The rare cap is spent on a land, and that is correct.** Karplusan Forest is the only untapped R/G source in the entire pool — Wooded Ridgeline enters tapped and Crystal Grotto taxes coloured mana by {1}. The thesis line is a turn-3 kicked Iconoclast needing {1}{G}{R} untapped; independent simulation during the grill put that line at about 75% on the play with this manabase, and no other card in the pool can raise it.

**Kicker demand is invisible to the pip math.** Kicker costs do not appear in a card's mana_cost, so the printed pip split (15 green / 10 red) understates red. Six of the 24 nonland cards have a kicker this deck can actually pay — Yavimaya Iconoclast x2 at {R}, Colossal Growth x2 at {R}, Viashino Branchrider x2 at {2}{G} — which is why red is built to 50% of sources against a 40% printed share.

**The Elf count is lower here than in mono-green, on purpose.** Eleven of the 24 nonland cards are Elf spells, versus twelve in the mono-green build, because the red half spends slots on non-Elves (Phoenix Chick, Viashino Branchrider, Squee). That is a real cost to the Visionary's draw trigger, bought with a two-turn-faster clock.

**Squee is the deck's answer to being answered.** It was added during the grill with the rare slot reclaimed from a sideboard mythic. 'You may cast this card from your graveyard by paying {3}{R} and exiling four other cards' means an empty hand still produces a hasty threat; 'Whenever Squee attacks, create a 1/1 red Goblin token that's tapped and attacking' triggers both Llanowar Stalkers every combat.

| Kicker | Base cost | Kicked cost | What the kicker buys |
|---|---|---|---|
| Yavimaya Iconoclast | {1}{G} 3/2 trample | {1}{G}{R} | +1/+1 and haste — a turn-3 attacker |
| Colossal Growth | {1}{G} +3/+3 | {1}{G}{R} | +4/+4 plus trample AND haste |
| Viashino Branchrider | {R} 1/1 haste | {R}{2}{G} | enters with two +1/+1 counters |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:9  2:11  3:4
Assembly (thesis turn 4, 11 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 5: Llanowar Stalker@0.7, Llanowar Stalker@0.7, Quirion Beastcaller@0.6, Colossal Growth@0.5, Colossal Growth@0.5, Hammerhand@0.5, Hammerhand@0.5) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 11 copies → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 82%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper: the cube's 6 sweepers are in colours this deck does not play, and Smash to Dust ('deals 1 damage to each creature your opponents control') sits in the sideboard because maindecking it would cost a body in a deck whose payoff denominator is bodies. The plan is to be the faster board.
  OK        single_large_threat: Lightning Strike, Flowstone Infusion, Deathbloom Gardener
  CONCEDED  noncreature_permanents: Every maindeck slot is capped at MV3 and spent on the clock; Broken Wings x2 and Smash to Dust in the sideboard are the answers, boarded in when the opponent shows an artifact or enchantment.
  CONCEDED  stack: Neither green nor red has a counterspell in this pool; the deck's answer to a key spell is to have already dealt lethal or to point Lightning Strike at the player.
  CONCEDED  graveyard: The dossier reports 0 graveyard-hate cards in the entire cube, so no colour can cover this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Llanowar Loamspeaker's '{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn' turns a surplus land into an attacker every turn; Viashino Branchrider's '{2}{R}: This creature gets +2/+0 until end of turn' is a repeatable mana sink; and Leaf-Crowned Visionary's 'you may pay {G}. If you do, draw a card' converts spare mana into cards off 11 of the 24 nonland cards. |
| screw | mitigation | Projected avg MV is 1.79: 9 of the 24 nonland cards cost one mana and 11 cost two, so a two-land hand casts 20 of the 24, and since nothing exceeds MV3 every card in the deck is live on three lands. Llanowar Loamspeaker at MV2 is the accel that bridges to the MV3 cards — Deathbloom Gardener is itself MV3 and is NOT credited here, correcting an earlier draft that named it. |
| decapitation | mitigation | The clock survives losing the single Visionary: kicked Yavimaya Iconoclast is a 4/3 trample haste on its own printed text, Phoenix Chick, Viashino Branchrider and Squee all attack the turn they land, Squee comes back from the graveyard if it is the card answered, and Lightning Strike x2 can point the last damage at the player rather than at a creature. |
| gas-out | mitigation | Two answers, after the Phase 9 repair reclaimed the rare slot that had been spent on a sideboard card. Leaf-Crowned Visionary's 'you may pay {G}. If you do, draw a card' fires off 11 of the 24 nonland cards. Squee, Dubious Monarch — maindecked with that reclaimed rare — reads 'You may cast this card from your graveyard by paying {3}{R} and exiling four other cards from your graveyard rather than paying its mana cost', so an empty hand still produces a hasty threat that makes a Goblin token on every attack. The earlier draft accepted this mode partly because the rare budget was spent on Shivan Devastator, which was a sideboard card and therefore bought nothing in game one; that reasoning was circular and the slot has been reallocated. |
| raced | mitigation | This is the fastest deck in the four-build set: goldfish turn 4, 9 one-drops, and haste on Phoenix Chick, Viashino Branchrider, kicked Yavimaya Iconoclast and Hammerhand's enchanted creature. Against the cube's 51 evasion cards it does not block well, but Lightning Strike x2 and Flowstone Infusion answer the cheap fliers that would otherwise win the race, and Magnigoth Sentry x2 come in from the sideboard when the opponent's clock is genuinely in the air. |
| disruption-fizzle | mitigation | The critical turn is an attack, not a spell. Colossal Growth x2 ('+4/+4 and gains trample and haste' when kicked) and Flowstone Infusion are instants held through combat, Hammerhand's ETB removes a surprise blocker at sorcery speed before the attack, and Quirion Beastcaller's 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' means removal on the grown body leaves the damage behind. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Meria, Scholar of Antiquity | An Elf, but every ability keys off artifacts ('Tap an untapped nontoken artifact you control: Add {G}'); this deck plays 0 artifacts. EXCLUDE. |
| Nishoba Brawler / Territorial Maro / Sunbathing Rootwalla / Gaea's Might | Domain scales with basic land TYPES; a Forest/Mountain manabase has 2 of 5, so these read 2/3, 4/4 for five, +1/+1 per activation, and +2/+2. A tier below the same-cost non-domain bodies. EXCLUDE. |
| Briar Hydra | {5}{G} 6/6 — two mana above an aggro curve, and its domain trigger puts 2 counters with two basic land types. EXCLUDE. |
| Shivan Devastator | Mythic {X}{R} flier with haste — an excellent flood outlet, but it was cut in the Phase 9 repair because it consumed 1 of the 5 rare slots while sitting in the SIDEBOARD, i.e. buying zero game-one cards, and a relevant body costs 5 mana in a 16-land deck capped at MV3. Its slot became maindeck Squee. SIDEBOARD-CONSIDERATION if you want a mana sink. |
| Jaya's Firenado | 5 damage for {4}{R}, but MV5 in a deck whose land count was computed off avg MV 1.79 — it is first castable on turn 5, one turn after the deck concedes the game is decided. Replaced in the sideboard by Hurloon Battle Hymn (4 damage at instant speed for {2}{R}). SIDEBOARD-CONSIDERATION. |
| Twinferno | {1}{R} 'Target creature you control gains double strike' would make a kicked Yavimaya Iconoclast hit for 8-10 with trample — but double strike does nothing on a creature that cannot attack, while kicked Colossal Growth grants haste as well as trample and so works on a body that resolved this turn. EXCLUDE. |
| Keldon Strike Team | {2}{R} 3/1 granting the team haste the turn it enters — a real effect for 17 creatures, but it competes for the same MV3 non-Elf slot as Squee, which grants itself haste AND adds a body every attack AND returns from the graveyard. EXCLUDE. |
| Yavimaya Steelcrusher | {1}{R} 2/2 whose '{1}, Sacrifice this creature: Destroy target artifact' is an answer stapled to a body — but the sideboard already answers the cube's 15 artifacts twice (Broken Wings x2, Smash to Dust). SIDEBOARD-CONSIDERATION. |
| Goblin Picker | {1}{R} 2/2 with a discard-to-draw outlet — a better body than the deck's 1/1s, but not an Elf, so it takes neither the +1/+1 nor the draw trigger. EXCLUDE. |
| Defiler of Instinct | Rare 4/4 first strike that pings on every red permanent spell — but this deck's permanents are overwhelmingly green (the Elves), so the trigger count is low, and it costs a rare. EXCLUDE. |
| Rundvelt Hordemaster | 'Other Goblins you control get +1/+1' — this deck has at most 1 Goblin. EXCLUDE. |
| Electrostatic Infantry | Grows on instant/sorcery casts; this list has exactly 5 of 24 nonland cards that are instants or sorceries (Flowstone Infusion 1, Colossal Growth 2, Lightning Strike 2 — Hammerhand is an Aura, not a sorcery), so it is a 1/2 that occasionally grows. EXCLUDE. |
| Shivan Devastator | Mythic X-spell flier with haste — an excellent top end, but it costs a rare/mythic slot that the Elf lord and the untapped dual need more. SIDEBOARD-CONSIDERATION. |
| Smash to Dust | Modal artifact/defender destruction or 1 damage to each opposing creature — narrow maindeck. SIDEBOARD. |
| Yavimaya Sojourner / Herd Migration / Slimefoot's Survey | Domain payoffs at MV5+ in a deck with 2 basic land types. EXCLUDE. |
| Thran Portal | 'As this land enters, choose a basic land type... Mana abilities of this land cost an additional 1 life' — a rare that would add a third domain type, but rares are capped at 5 and Karplusan Forest fixes better. EXCLUDE. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.79   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.28 adj [MV 1.79 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  60.0%  prod  68.8%  gap  -8.8pp  [OK]
  R  demand  40.0%  prod  50.0%  gap -10.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1 mainboard size  40 vs 40
  [PASS] 1 sideboard size  10 vs 10
  [PASS] 2 exact-name membership  []
  [PASS] 3 copy limits  []
  [PASS] 3b rare/mythic cap <=5  5 rares/mythics: ['Karplusan Forest', 'Leaf-Crowned Visionary', 'Llanowar Loamspeaker', 'Quirion Beastcaller', 'Squee, Dubious Monarch']
  [PASS] 4 colour usability via best_mode  []
  [PASS] 5 splash cap  []
```
