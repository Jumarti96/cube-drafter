---
deck_name: "rg-raiding-schemes-conspire"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RG"
format: "40-card"
built_at: "2026-08-10T21:00:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  1x Forest
  12x Mountain
  2x Evolving Wilds   fixing
  2x Wooded Ridgeline   RG dual
```

### CREATURES (14)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Foraging Wickermaw         x2    C      Engine/Infra — untapped any-colour fixer, repeatabl… C
  2  Scuzzback Scrounger        x1    R      Engine/Infra — a Treasure every turn                 R
  3  Elder Auntie               x2    R      Threat — two red bodies per card (conspire fodder)   C
  3  Gangly Stompling           x2    RG     Threat — 4/2 trample; hybrid R/G conspires either c… C
  3  Noggle Robber              x2    RG     Engine/Infra — Treasure on ETB and on death; hybrid… U
  4  Flamekin Gildweaver        x2    R      Threat — 4/3 trample + Treasure on ETB               C
  4  Sourbread Auntie           x2    R      Threat — up to three red bodies per card             U
  5  Spinerock Tyrant           x1    R      Threat — 6/6 flier; copies single-target spells WIT… M
```
### INSTANTS & SORCERIES (8)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Boulder Dash               x1    R      Interaction — 2 to any target + 1 to any other; the… U
  2  Sear                       x1    R      Interaction — removal                                U
  3  Burning Curiosity          x2    R      Engine/Infra — the deck's only net card advantage; … C
  3  Tweeze                     x2    R      Interaction — 3 to any target + loot; the only spel… C
  3  Unforgiving Aim            x1    G      Interaction — the only maindeck answer to flyers an… C
  4  Feed the Flames            x1    R      Interaction — 5 damage + exile; the only maindeck a… C
```
### OTHER SPELLS (1)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  5  Raiding Schemes            x1    RG     Engine/Payoff — grants conspire to every noncreatur… R
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                  Rar
Cinder Strike               x2    R      1-mana removal — vs. cheap-creature aggro, where a conspired Cinder… C
Giantfall                   x2    R      Artifact removal / fight — vs. the cube's 11 artifacts; the fight m… U
Chomping Changeling         x2    G      Artifact/enchantment answer on a body; also a green conspire body —… U
Unforgiving Aim             x1    G      Second modal answer — vs. the cube's 41 evasive cards, or enchantme… C
Feed the Flames             x1    R      Second copy of the big removal — vs. decks with multiple toughness-… C
Rooftop Percher             x2    C      Graveyard hate + flying blocker — vs. graveyard decks (39 GY cards … C
```

## ANALYSIS

### DECK IDENTITY

RG Raiding Schemes — Treasure-accelerated conspire tempo. Five Treasure makers and two Foraging Wickermaws power out Raiding Schemes around turn 4; from that point every coloured noncreature spell reads 'tap two untapped creatures you control that share a color with it, copy it'. Tweeze becomes 6 damage that can all go to a player, Burning Curiosity becomes four to six cards, Feed the Flames becomes two exiles. The deck is built around the fact that conspire's real cost is BODIES, not mana: Elder Auntie and Sourbread Auntie make two and three red bodies per card, so 14 creature cards field up to 20 blockers-or-conspirers. Spinerock Tyrant is the second copy engine that costs no bodies at all, copying any single-target spell for free. It is functionally a mono-red tempo deck that pays a single green pip for its payoff.

### THE MECHANIC, READ EXACTLY

Conspire: *"As you cast a noncreature spell, you may tap two untapped creatures you control that **share a color with it**. When you do, copy it and you may choose new targets for the copy. A copy of a permanent spell becomes a token."*

Four consequences drove every slot in this deck. The **first three** shaped the build; the **fourth** was found by the self-grill and corrected two of my own claims.

1. **A colourless spell can never be conspired.** It shares a colour with nothing. Of the 23 nonland cards, **8 are conspirable** (noncreature *and* coloured): Sear, Boulder Dash, Tweeze ×2, Feed the Flames, Unforgiving Aim, Burning Curiosity ×2. Raiding Schemes itself is not among them — nothing grants conspire while it is still on the stack.
2. **Bodies-per-card is the real currency.** Every conspired spell taxes two untapped creatures. Elder Auntie (*"create a 1/1 black and red Goblin creature token"*, 2 bodies) and Sourbread Auntie (*"create two 1/1 black and red Goblin creature tokens"*, 3 bodies) beat Brambleback Brute, Warren Torchmaster and Flame-Chain Mauler on that axis despite worse stats. **14 creature cards field up to 20 bodies.**
3. **Hybrid R/G creatures conspire both colours.** Noggle Robber and Gangly Stompling have `colors: ['G','R']`. Foraging Wickermaw joins them on demand — *"{1}: Add one mana of any color. This creature becomes that color until end of turn"* — note the **absence of a `{T}` symbol**, so it fixes green *and stays untapped* as legal green fodder. That is the whole reason it replaced Springleaf Drum, which fixes by *removing* a body from the conspire pool.
4. **Summoning sickness does not apply.** Conspire's tap is a *cost of the spell*, not the creature's own `{T}` ability — so a creature that just resolved is already legal fodder. This falsified my original justification for Lavaleaper ("haste makes post-Schemes deploys usable for conspire"). Haste only ever mattered for attacking, and Lavaleaper's two clauses (*"**All** creatures have haste"*, *"whenever **a player** taps a basic land… **that player** adds one mana"*) are both symmetric and both help an opponent who is racing you. It was cut.

### A WIN-CONDITION CLAIM I HAD TO RETRACT

I originally wrote that a conspired Boulder Dash is "6 damage that can all go to the face." It is not. Oracle: *"deals 2 damage to any target **and 1 damage to any other target**."* "Any **other**" legally bars the second point from the same target. Per cast, **at most 2 reaches the player**; conspired, **4, not 6**.

| Spell | Target text | To the face, conspired |
|---|---|---|
| **Tweeze** ×2 | "3 damage to **any target**" | **6** — the only slot where the doubled-damage claim survives its own text |
| **Boulder Dash** ×1 | "2 to any target **and 1 to any other**" | 4 of 6 |
| Sear ×1 | "target **creature or planeswalker**" | 0 |
| Feed the Flames ×1 | "target **creature**" | 0 |

Boulder Dash went from 2 copies to 1 on that recount.

### THE SECOND COPY ENGINE THAT COSTS NO BODIES

**Spinerock Tyrant** — *"Whenever you cast an instant or sorcery spell **with a single target**, you may copy it. If you do, those spells gain wither."* — copies **without tapping a creature**, which is precisely the tension conspire creates. It triggers off **5 of the 8 conspirable spells** (Sear, Tweeze ×2, Feed the Flames, Unforgiving Aim's destroy modes); Boulder Dash has two targets and Burning Curiosity has none, so neither triggers it. It is also the deck's **only** flier or reach body against a cube evasion density of 41 cards / 15.8%.

I had originally excluded it on mana ({3}{R}{R} in a 17-land deck). That reasoning was inconsistent — the deck already runs **Sourbread Auntie ×2 at {2}{R}{R}**, the same double-red at the same slot, off 14 of 17 red sources. It is in.

### THE MANA PROBLEM

**19 red pips, 2 green, 6 hybrid** — 90.5% red by demand, but the payoff costs {3}{R}{G}. The naive fix fails on its own text: Great Forest Druid costs **{1}{G}**, i.e. it requires the green it supplies. Green is treated as a **threshold, not a proportion**: 1 Forest + 2 Wooded Ridgeline + 2 Evolving Wilds, backed by **2 Foraging Wickermaw and 5 Treasure makers** that all produce any colour — 10 ways to find one green mana, while **14 of 17 lands still produce red** for the two double-red four-drops.

### THE HONEST WEAKNESS

Raiding Schemes is a **singleton 5-mana enchantment that does nothing the turn it resolves**, and an oracle scan of all 282 pool cards confirms it is the *only* conspire granter — redundancy does not exist at any rarity. So `decapitation` is `accepted`, not mitigated, and the deck is built to be a functional red tempo deck without it: 14 creature cards, 20 bodies, 6 burn spells and a 3.17 average mana value. **Conspire is the ceiling, not the floor.** Any read of this deck priced only at its doubled ceiling is selling you a card you draw in roughly one game in three.

### RARE BUDGET

3 of 5 used (Raiding Schemes, Scuzzback Scrounger, Spinerock Tyrant). The two idle slots' best claimants are **Hexing Squelcher** ({1}{R}, *"Spells you control can't be countered"* — the only pool answer to the conceded `stack` class, and it wards the conspire fodder) and **Vibrance** ({3}{R/G}{R/G}, whose hybrid pips make it a third green-legal creature and whose evoke gives a 2-mana "3 damage to any target" payable entirely in red).

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  2:5  3:11  4:5  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.1: Spinerock Tyrant@0.9, Tweeze@0.9, Tweeze@0.9, Boulder Dash@0.8, Burning Curiosity@0.8, Burning Curiosity@0.8) → p=0.88 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12.4: Sourbread Auntie@0.9, Sourbread Auntie@0.9, Scuzzback Scrounger@0.8, Foraging Wickermaw@0.9, Foraging Wickermaw@0.9) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 70%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: Honest concession after the grill: the pool gives R/G no sweeper (2 in the cube, in R and UR), and of the deck's burn only Boulder Dash touches two creatures, and only x/1s and x/2s at that. The plan against a wide board is to be wider - 14 creature cards field up to 20 bodies via Elder Auntie and Sourbread Auntie tokens - and to race with 4-power tramplers.
  OK        single_large_threat: Feed the Flames, Sear, Spinerock Tyrant
  OK        noncreature_permanents: Unforgiving Aim
  CONCEDED  stack: Neither red nor green in this pool contains a counterspell; the deck's answer to a resolved threat is to burn it, and to a resolved engine is to win before it matters.
  CONCEDED  graveyard: The cube census reports 0 dedicated graveyard hate; Rooftop Percher ('exile up to two target cards from graveyards') is held in the sideboard because a 5-mana 3/3 is off-curve for a 16-land tempo deck against non-graveyard opponents.
```

- No WARN flags were raised on the repaired list. Curve PASS (tempo), Assembly PASS (payoff p=0.88, enabler p=0.99, both against a 0.75 floor), Goldfish PASS (86% keepable, 88% three lands by turn 3), Coverage PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Burning Curiosity x2 is the real outlet: 'Exile the top two cards of your library... three instead if the additional cost was paid. Until the end of your next turn, you may play those cards' converts surplus mana directly into playable cards, and conspired it is 4-6. Tweeze x2's loot ('You may discard a card. If you do, draw a card') turns a drawn land into a new card. Stated plainly and corrected from the pre-grill record: conspire costs NO mana, so a flooded hand cannot be dumped into copies, and no card here converts surplus mana into a Treasure. There are 0 activated mana sinks in the list; at 17 lands and avg MV 3.17 with a 5-drop and two 4-drops at the top, that is accepted as the residual. |
| screw | mitigation | 16 of 23 nonland cards cost 3 or less (5 of them at MV 2; the repair removed every MV-1 card, so the earliest play is turn 2) and the goldfish check measures 86% keepable hands with three lands by turn 3 in 88% of games. Foraging Wickermaw at {2} colourless is castable off any two lands and fixes both colours thereafter; 2 Evolving Wilds and 13 basics of 17 lands keep the colours honest. |
| decapitation | accepted | Raiding Schemes is a SINGLETON - the rare cap permits one copy, and an oracle scan of all 282 pool cards confirms it is the only card that grants conspire at any rarity. There is no tutor in these colours. Mitigating would mean spending the two idle rare slots on redundancy that does not exist, or diluting the creature count that makes the deck function without it. The accepted cost is stated plainly: this is a functional red tempo deck at 14 creature cards, 20 bodies, 6 burn spells and 3.17 avg MV whether or not the enchantment appears, and Spinerock Tyrant is a SECOND, independent copy engine that needs neither Raiding Schemes nor any untapped creature. Conspire is the ceiling, not the floor. |
| gas-out | mitigation | Burning Curiosity x2 ('Exile the top two cards... you may play those cards', three with blight, 4-6 conspired) is the deck's net card advantage and was added specifically to fix this mode after the grill found the pre-repair numerator was zero. Beyond it: Noggle Robber x2 give a 3/3 and two Treasures across one card's life, Elder Auntie x2 give two bodies each and Sourbread Auntie x2 give three - 6 of 23 nonland cards convert one card into more than one permanent. That is board advantage rather than card advantage, and it is labelled as such here rather than counted as draw. |
| raced | mitigation | Up to 6 Goblin tokens ('1/1 black and red Goblin creature token') block while Sear, Boulder Dash and Feed the Flames remove the relevant attacker, and Spinerock Tyrant is a 6/6 flier that blocks anything in the air - the only such body in the list against the cube's 41 evasive cards. Corrected from the pre-grill record, which cited Lavaleaper here: Lavaleaper grants ALL creatures haste and accelerates BOTH players' basic lands, so it actively worsens the mode it was cited to answer. It was cut. |
| disruption-fizzle | mitigation | The critical turn is a conspired burn spell or a resolving Raiding Schemes. Conspire's body cost is paid on announcement, so a countered or fizzled copy still cost two taps - a real one-turn loss, but 5 of 23 nonland cards are interaction and the next turn has another. If Raiding Schemes itself is answered, Spinerock Tyrant still copies 5 of the 8 conspirable spells with no board cost at all, which is precisely why a second, independent copy engine was added in the repair. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Impolite Entrance | CUT BY THE SHAPE JUDGE. 'Target creature gains trample and haste until end of turn. Draw a card.' — conspiring it taps two creatures OUT of combat to grant trample and haste to one, which is usually a net loss of attack steps. Its real value is the second card, not damage, which is not this build's lens. |
| Spinerock Tyrant | The strongest card left on the table. 'Whenever you cast an instant or sorcery spell with a single target, you may copy it' — it copies WITHOUT tapping creatures, which is the exact tension conspire creates, and 5 of 24 nonland cards are single-target instants/sorceries (Sear x2, Tweeze x2, and Feed the Flames from the board). Excluded on mana: {3}{R}{R} on top of Sourbread Auntie's {R}{R} in a 16-land deck with 13 red sources is a second double-red 4-plus-drop competing for the same turn. The first card to add if you cut a Sourbread Auntie. |
| Goliath Daydreamer | 'Whenever this creature attacks, you may cast a spell from among cards you own in exile with dream counters' — the free cast triggers while your team is tapped from attacking, so those spells can never be conspired. The two engines actively fight each other. |
| Hexing Squelcher | 'Spells you control can't be countered.' — the cube census finds counterspells only in blue, and this deck's plan does not route through one key spell resolving; a rare slot for a hoser is worse than a rare slot for a body. |
| Cinder Strike | SIDEBOARD. '{R} ... deals 2 damage to target creature. It deals 4 damage instead if this spell's additional cost was paid' — a conspired Cinder Strike is two kills for one mana, but its damage cannot go to a player, so it does nothing for the reach plan. Boarded in against cheap-creature aggro. |
| Feed the Flames | SIDEBOARD. 'deals 5 damage to target creature' — creature-only, so like Cinder Strike it doubles answers rather than damage; at 4 mana it also competes with Raiding Schemes on the key turn. |
| Great Forest Druid | '{T}: Add one mana of any color' — the obvious green fixer, but it costs {1}{G}, i.e. it requires the green mana it is meant to supply. Springleaf Drum at {1} colourless solves the same problem a turn earlier and off red mana. |
| Firdoch Core | '{T}: Add one mana of any color' for {3} colourless — fixes green off red mana like Springleaf Drum, but three mana on turn 3 is the turn this deck wants to be deploying an Auntie, and it adds no body for conspire. |
| Sting-Slinger | '{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent' — a real Treasure sink and reach, but the {T} in its cost means every activation is a creature that cannot be tapped for conspire that turn; it competes with the payoff for the same resource. |
| Kindle the Inner Flame | 'Create a token that's a copy of target creature you control, except it has haste and "At the beginning of the end step, sacrifice this token."' — conspired it is two hasty copies, which is genuinely on-thesis. Excluded at {3}{R} because it is a 4-mana sorcery that does nothing without a good creature already on board, and this build's 4-slot is already Sourbread Auntie x2 + Flamekin Gildweaver x2 + Lavaleaper. |
| Brambleback Brute | A 4/5 for {2}{R} that 'enters with two -1/-1 counters on it', i.e. a 2/3. It is one red body per card where Elder Auntie is two and Sourbread Auntie is three, and bodies-per-card is the currency conspire actually spends. |
| Warren Torchmaster / Flame-Chain Mauler / Boneclub Berserker | All one red body per card with no token attached. In a deck whose payoff taxes two untapped creatures per spell, a card that makes one body is strictly worse than a card that makes two at the same cost. |
| Enraged Flamecaster | 'Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent' — conspire copies are COPIES, not casts, so they do not trigger it; and only 5 of 24 nonland cards have MV 4 or greater. Two independent reasons it underperforms here. |
| Lasting Tarfire | 'At the beginning of each end step, if you put a counter on a creature this turn, this enchantment deals 2 damage to each opponent.' — the blight cards (Scuzzback Scrounger, Sourbread Auntie, Cinder Strike) do put counters, but only 3 of 24 nonland cards reliably do so each turn, and a conspired copy is a token that needs the same trigger. |
| Meek Attack | Mythic. '{1}{R}: You may put a creature card with total power and toughness 5 or less from your hand onto the battlefield... At the beginning of the next end step, sacrifice that creature.' — a sacrifice each turn fights a plan that needs bodies to PERSIST untapped for conspire. |
| Collective Inferno | 'Double all damage that sources you control of the chosen type would deal' — a genuine doubler, but it names one creature type and this deck's 13 creatures span Goblin (5), Elemental (3), Noggle (2), Shapeshifter (2), Giant (1); changeling on Gangly Stompling covers any name, but no single name exceeds 7 of 13. Also {3}{R}{R} on the Raiding Schemes turn. |
| Springleaf Drum (as ramp rather than fixing) | Counted honestly at a 0.7 reliability weight in the structural gate: the creature it taps is a creature that can no longer pay conspire that turn. It is in the deck to solve the {G} threshold, not to accelerate. |
| All Vivid cards (Bloom Tender, Wildvine Pummeler, Prismabasher, Squawkroaster) | They read 'the number of colors among permanents you control', which this deck does not manufacture — it is a two-colour board that is 95% red by pip. That is the other build (deck 1 of this set). |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.27 adj [MV 3.17 vs 2.5, 7 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand   9.5%  prod  17.6%  gap  -8.1pp  [OK]
  R  demand  90.5%  prod  82.4%  gap  +8.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Every card is drawn from the ecl cube mainboard as loaded into working_pool.json - validator check 2 (exact-name membership) PASS.
[PASS] Commons/uncommons capped at 2 copies, rares/mythics at 1 - validator check 3 PASS.
[PASS] Rare/mythic total across mainboard + sideboard: 3 (Raiding Schemes rare, Scuzzback Scrounger rare, Spinerock Tyrant mythic) against a cap of 5. Two slots deliberately unused; Hexing Squelcher and Vibrance are the named claimants.
[PASS] Basic lands (Mountain x12, Forest x1) are format-supplied and exempt from copy limits.
[PASS] No splash: splash_colors = [] and no card in the list has a colour identity outside {R, G} - validator checks 4 and 5 PASS.
```
