---
deck_name: "bg-reanimator-sacrifice"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-07-30T00:35:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
6x Forest               basic
2x Haunted Mire         BG dual, enters tapped
9x Swamp                basic
```

### CREATURES (13)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Birds of Paradise             x1   G      ramp/fix                      R
  2  Werebear                      x1   G      ramp/threshold-beater         C
  3  Penumbra Bobcat               x1   G      recurring-fodder              C
  3  Phyrexian Ghoul               x2   B      sac-outlet                    C
  4  Body Snatcher                 x1   B      enabler/reanimate             R
  4  Gamekeeper                    x2   G      reanimation-dig               U
  4  Phyrexian Debaser             x1   B      sac-outlet/removal            C
  5  Chainer, Dementia Master      x1   B      reanimation-payoff            R
  5  Spiritmonger                  x1   BG     threat                        U
  6  Necrosavant                   x1   B      recurring-fatty/outlet        U
  6  Symbiotic Beast               x1   G      fatty/death-payoff            C
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                          Qty  Color  Role                          Rar
  2  Chainer's Edict               x1   B      removal                       U
  2  Nature's Lore                 x2   G      ramp/fix                      U
  2  Terror                        x1   B      removal                       C
  3  Ichor Slick                   x1   B      removal                       C
  3  Life // Death                 x1   BG     reanimation                   U
  4  Dread Return                  x1   B      reanimation/sac-outlet        U
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty  Color  Role                          Rar
  2  Oversold Cemetery             x1   B      recursion-engine              R
  2  Sylvan Library                x1   G      card-advantage                M
  2  Zombie Infestation            x1   B      discard-outlet/fodder-engine  U
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                                   Rar
Tormod's Crypt                x2   C      sb-graveyard-hate: vs faster graveyard/reanimator mirror  U
Duress                        x2   B      sb-disruption: vs control/combo — strip sweepers and key  C
Break Asunder                 x2   G      sb-artifact-enchantment-removal: vs Pacifism/Opposition/  C
Dark Withering                x2   B      sb-removal: vs big nonblack threats — hard removal, Madn  U
Giant Spider                  x2   G      sb-anti-flier: vs the cube's heavy evasion — Reach block  C
```

## ANALYSIS

### DECK IDENTITY

Black-green reanimator-sacrifice going over the top. Green ramp (Birds of Paradise, Nature's Lore, Werebear) powers out the black recursion engines, and free sacrifice outlets (Phyrexian Ghoul, Phyrexian Debaser, Dread Return's flashback) fill the graveyard with oversized creatures. Reanimation then rebuys them — Oversold Cemetery returns one every upkeep, Chainer reanimates from any yard, Gamekeeper digs a fatty straight into play when it dies, and Body Snatcher / Life // Death / Dread Return recur bombs cheaply. The deck wins the long game by attacking with an inevitable stream of large bodies (Spiritmonger, Symbiotic Beast's tokens, recurring Necrosavant) that replace themselves when sacrificed.

Some interactions and calculations worth calling out:

**The graveyard is the deck's real hand.** Thirteen creatures plus Zombie Infestation ("Discard two cards: Create a 2/2 black Zombie") and four sacrifice-outlet effects fill the yard fast, and then it never empties: Oversold Cemetery returns a creature every upkeep once four creature cards are binned, Chainer puts one straight onto the battlefield for {B}{B}{B}, and Necrosavant reanimates *itself* each upkeep by eating a token. The reanimation is deliberately redundant (seven effects) so that spot removal on any one engine costs a tempo beat, not the plan.

**Zombie Infestation is the enabler that turns the reanimation live.** The deck's one texture risk is having reanimation spells with no premium target early; Zombie Infestation solves it proactively — discarding two oversized creatures bins them for Chainer / Dread Return / Life // Death / Oversold, while the 2/2 it makes is fodder for the free sac outlets. Discarding is close to card-neutral here because the discarded fatties come back onto the battlefield.

**Gamekeeper is a sacrifice-to-cheat-in engine.** "When this creature dies, exile it, reveal until a creature, put it onto the battlefield" — feed Gamekeeper to Phyrexian Ghoul and you convert a 3-mana body into whatever fatty is on top (Spiritmonger, Symbiotic Beast, Necrosavant), free. That is why the deck can run a low count of oversized bodies: it digs them out rather than drawing them.

**Symbiotic Beast is fodder that pays you to sacrifice it.** "When this creature dies, create four 1/1 green Insects" means sacrificing it to Phyrexian Ghoul or Dread Return's flashback (which needs three creatures) leaves a wider board than before — it fuels the very outlet that ate it, and each Insect is another sacrifice for the next loop.

**Ramp is what makes an over-the-top plan competitive.** Birds of Paradise, two Nature's Lore, and Werebear (4 accelerants) both fix the black-heavy back-end ({B}{B}{B} on Chainer/Necrosavant) and deploy the engine a turn or two early, so the reanimation is online by turn 4–5 and the attack lands around turn 7. Werebear doubles as a 4/4 once the graveyard hits threshold — the same graveyard the deck is already stuffing.

The honest weakness is speed: at avg MV 3.22 with a turn-7 clock, the fastest evasive aggro in this cube can win the race before the engine stabilizes. The maindeck removal (Terror, Chainer's Edict, Ichor Slick, Phyrexian Debaser) and big blockers buy time, and the sideboard's Giant Spider walls fliers, but a truly explosive draw is a real out for the opponent — accepted as the cost of the over-the-top plan.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:8  3:5  4:5  5:2  6:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  sac_outlet: 6 copies (effective 4.2: Phyrexian Debaser@0.6, Necrosavant@0.5, Dread Return@0.5, Gamekeeper@0.6) → p=0.79 (need ≥ 0.75)
  PASS  reanimation: 7 copies (effective 6.6: Chainer, Dementia Master@0.8, Life // Death@0.8) → p=0.92 (need ≥ 0.75)
  PASS  ramp: 4 copies → p=0.77 (need ≥ 0.75)
  PASS  fatty_payoff: 5 copies (effective 4.8: Chainer, Dementia Master@0.8) → p=0.83 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 17%  T2 87%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: No board wipe exists in BG in this pool; the deck out-grinds go-wide by trading oversized recurring blockers (Spiritmonger, Symbiotic Beast's four tokens, reanimated bodies) and removing key threats with Chainer's Edict/Ichor Slick, winning the long game rather than answering the whole board at once.
  OK        single_large_threat: Terror, Chainer's Edict, Ichor Slick, Spiritmonger
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment removal; Break Asunder (green's answer, 'Destroy target artifact or enchantment') is in the sideboard for that class.
  CONCEDED  stack: BG cannot interact on the stack; the deck applies recurring pressure and the sideboard's Duress pre-empts key spells from hand instead.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt is in the sideboard for faster graveyard/reanimator mirrors.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Sylvan Library converts flooded draws into selection (draw two extra, keep what matters); Necrosavant's {3}{B}{B} recur and Chainer's {B}{B}{B} reanimate are repeatable mana sinks; the four ramp sources mean fewer lands are needed in the first place, and high-MV fatties (Symbiotic Beast, Spiritmonger) soak surplus mana. |
| screw | mitigation | Birds of Paradise and Nature's Lore turn a two-land hand into a functional, fixed mana base (Birds taps for any color on turn 1; Nature's Lore fetches a land to the battlefield); cheap early plays (Werebear, Penumbra Bobcat, Life // Death, Terror) keep low-land hands active. Goldfish keepable 83%. |
| decapitation | mitigation | Reanimation is redundant across seven effects (Oversold Cemetery, Chainer, Body Snatcher, Gamekeeper x2, Dread Return, Life // Death) — answering any single engine leaves the rest looping fatties from the yard; no one removal spell stops the recursion. |
| gas-out | mitigation | The graveyard is a renewable hand: Oversold Cemetery returns a creature every upkeep, Sylvan Library draws two extra each turn, Gamekeeper digs a body into play, and the reanimation suite recasts bombs — the deck refuels from the yard faster than it empties its hand. |
| raced | accepted | This is a slow ramp-reanimator (avg MV 3.26, thesis turn 7). Against the cube's fastest evasive aggro it can die before the engine stabilizes; its defense is real (Terror, Chainer's Edict, Ichor Slick, Phyrexian Debaser -2/-2, big blockers Spiritmonger/Symbiotic Beast, Giant Spider in the SB) but the worst draws lose the race. Speeding the curve up or cutting the top-end to win races would abandon the over-the-top recurring-fatty plan that is the deck's identity; the sideboard (Giant Spider, extra removal) shores it up instead. |
| disruption-fizzle | mitigation | The plan is incremental value, not one critical turn: a countered or removed reanimation spell is one of seven recursion effects, and sacrifice value accrues one body at a time — a single piece of interaction costs a tempo beat, then the next engine piece continues the loop. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Worldly Tutor | Tutor a creature to top — strong reanimator consistency, but it is a rare and the 5-rare budget is spent on engines (Oversold, Chainer, Body Snatcher, Sylvan Library, Birds); top swap-in if trading raw power for consistency. |
| Entomb | {B}: put any card into the yard — one-mana reanimation enabler, but a rare; cap-blocked by the 5 engine rares. A premium swap-in for a more explosive turn-3 reanimation build. |
| Terravore | */* = land cards in all graveyards — can be huge, but its size depends on binned LANDS, not creatures; this build fills the yard with creatures for reanimation, so it is often modest here. |
| Deadwood Treefolk | Vanishing 3; ETB/leaves returns a creature to hand — good recursion, but a 6-drop that self-sacrifices on a timer; the cheaper reanimation (Life // Death, Dread Return) is more mana-efficient at this count. |
| Call of the Herd | 3/3 token + flashback — two bodies from one card, but a fair-value beater that does not advance the OVER-the-top reanimation plan; better in a token-aggressive build. |
| Fa'adiyah Seer | Tap to dig, discarding nonlands into the yard — a fine yard-filler, cut for Phyrexian Debaser to add a genuine sac outlet (assembly gate) plus removal; a swap-in if more self-mill is wanted over interaction. |
| Kamahl, Fist of Krosa | 6-mana mythic land-animator/overrun — powerful but a top-heavy standalone that does not advance the sacrifice/reanimation engine; costs a rare slot the engine cards need. |
| Nut Collector | Token engine that pumps Squirrels — a build-around off this pipeline; the tokens don't feed the reanimation plan and it costs a mythic slot. |
| Yawgmoth, Thran Physician | Superb sac engine but {2}{B}{B} double-black strains the BG manabase, and it is the linchpin of the mono-B build (Deck A); kept out to keep the three decks distinct. |
| Sneak Attack | Cheats creatures in temporarily then sacrifices them — a red combo enabler out of this deck's colors. |
| Squirrel Nest / Saproling Symbiosis | Go-wide token makers that don't feed the reanimation payoffs; off-plan for an over-the-top fatty deck. |
| Exploration | Extra land drops — no landfall/lands-matter payoff density here to exploit it; a non-body do-nothing for this plan. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.22   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.29 adj [MV 3.22 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  61.3%  prod  64.7%  gap  -3.4pp  [OK]
  G  demand  38.7%  prod  47.1%  gap  -8.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Mainboard size = 40 (40)
[PASS] Sideboard size = 10 (10)
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rare/mythic total = 5 (cap 5)
[PASS] All cards from cube pool + mono-black usable
```