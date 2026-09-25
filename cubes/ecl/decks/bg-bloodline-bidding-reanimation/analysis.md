---
deck_name: "bg-bloodline-bidding-reanimation"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BG"
format: "40-card"
built_at: "2026-08-10T01:10:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x6   Forest                   basic
  x6   Swamp                    basic
  x2   Eclipsed Realms          enters untapped; {C} mode pays Bidding's generic, Elf mode pays 18 of 23 nonland
  x2   Haunted Mire             BG dual, enters tapped
  x1   Overgrown Tomb           BG dual, untapped for 2 life (rare slot)
```

### CREATURES (14)

```
CMC  Card                                             Qty   Color  Role                                Rar
  1  Virulent Emissary                                x2    G      Body/Alternate clock                U
  2  Creakwood Safewright                             x2    B      Body/Alternate clock                U
  2  Lys Alana Dignitary                              x1    G      Engine/Infrastructure               U
  2  Scarblade Scout                                  x2    B      Engine/Infrastructure               C
  3  Trystan, Callous Cultivator // Trystan, Penitent Culler x1    C      Engine/Infrastructure               R
  3  Twilight Diviner                                 x1    B      Engine/Infrastructure               R
  4  Dawnhand Eulogist                                x2    B      Engine/Infrastructure               C
  4  High Perfect Morcant                             x1    BG     Body/Alternate clock                R
  4  Moon-Vigil Adherents                             x2    G      Threat/Payoff                       U
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Bogslither's Embrace                             x1    B      Interaction                         C
  2  Midnight Tilling                                 x2    G      Engine/Infrastructure               C
  2  Nameless Inversion                               x2    B      Interaction                         U
  5  Dose of Dawnglow                                 x1    B      Engine/Infrastructure               U
  8  Bloodline Bidding                                x1    B      Threat/Payoff                       R
```

### OTHER SPELLS (2)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Morcant's Eyes                                   x2    G      Threat/Payoff                       U
```

## SIDEBOARD (10)

```
Card                                             Qty   Color  Role / When to board in                             Rar
Requiting Hex                                    x2    B      Flex — cheap removal vs aggro                       U
Bogslither's Embrace                             x1    B      Flex — second unconditional exile                   C
Chomping Changeling                              x2    G      Hate — artifacts / enchantments                     U
Unforgiving Aim                                  x1    G      Flex — anti-flier / anti-enchantment                C
Darkness Descends                                x2    B      Hate — wide boards; asymmetric here (dead creatures fuel both payoffs) U
Rooftop Percher                                  x2    C      Hate — graveyard                                    C
```

## ANALYSIS

### DECK IDENTITY

A BG Elf deck that treats its own graveyard as a second battlefield and then moves it. Bloodline Bidding reads 'Convoke ... Choose a creature type. Return all creature cards of the chosen type from your graveyard to the battlefield' — and 14 of the 40 cards in this list are Elf creature cards, every one of which the mill suite is trying to bin. Ten enabler copies fill the pile while Creakwood Safewright, a deathtouch Trystan and two deathtouch Virulent Emissary hold the ground, and convoke means the surviving board pays for most of the eight mana. The discipline that defines the build is negative: with one stated exception, nothing in the 40 returns a creature card from the graveyard to hand or exiles one — which is why Morcant's Loyalist, Graveshifter, Trystan's Command, Champions of the Perfect and Stoic Grove-Guide are all absent despite being strong cards in this colour pair. Because the pool allows only one Bloodline Bidding, Morcant's Eyes x2 is the structurally different backup (an enchantment, cashed at sorcery speed, off the same pile) and Dose of Dawnglow is a single-target instant-speed version of the same conversion.


### TWO DENOMINATORS, KEPT SEPARATE

This deck runs two payoffs that read the graveyard, and they read *different things*. Conflating them is the classic way to misbuild this shell:

| Payoff | What it counts | Count in this list |
|---|---|---|
| Bloodline Bidding | Elf **creature cards** in the graveyard | **14 of 40** |
| Morcant's Eyes | Elf **cards** of any type | **18 of 40** |

Nameless Inversion is the card that shows the gap. Changeling grants creature *types*, not creature-card status — so both copies feed Morcant's Eyes' X and neither can ever be returned by Bloodline Bidding. Morcant's Eyes itself (Kindred Enchantment — Elf) is in the same position.

### THE DISCIPLINE IS NEGATIVE

What defines this build is what it refuses. Bloodline Bidding returns creature *cards from the graveyard*, so any card that moves one to hand or exile is a tax on the kill. That single rule cuts five cards that are otherwise excellent in BG here:

| Cut | The clause that cuts it |
|---|---|
| Morcant's Loyalist | "return another target Elf card from your graveyard to your hand" — **mandatory** on death |
| Graveshifter | "you may return target creature card from your graveyard to your hand" — the whole card |
| Trystan's Command | "Return one or two target permanent cards from your graveyard to your hand" |
| Champions of the Perfect | "behold an Elf **and exile it**" |
| Stoic Grove-Guide | "**Exile this card from your graveyard**: Create a 2/2…" |

**One card in the 40 breaks the rule, and it does so optionally.** Trystan, Penitent Culler reads *"mill three cards, then you **may** exile an Elf card from your graveyard. If you do, each opponent loses 2 life."* 13 of the 14 Elf creature cards are legal choices. The pilot rule is: **decline it** unless the 2 life is lethal-relevant or Bidding is already cast or dead. The reason this is not the same as running Graveshifter: declining Trystan's exile costs an optional drain rider on a card that is still a deathtouch blocker and a recurring mill engine; declining Graveshifter's return leaves a vanilla 2/2 for four.

### WHAT ACTUALLY HAPPENS ON THE CAST TURN

Not combat. There is no haste on any BG card in this cube, so the returned board is summoning-sick and attacks the following turn. The cast turn is an ETB cascade:

- each returned **Dawnhand Eulogist** re-triggers *"mill three cards. Then if there is an Elf card in your graveyard, each opponent loses 2 life"*
- each returned Elf triggers **High Perfect Morcant**'s *"each opponent blights 1"*
- each returned body triggers each **Virulent Emissary**'s *"whenever another creature you control enters, you gain 1 life"* — 5–7 life on exactly the turn the deck is most exposed
- **Twilight Diviner** adds **one** token copy of the best returned creature. It *"triggers only once each turn"* — it does not double the wave, and it is worth far more on the battlefield *before* Bidding resolves than among the returned cards.

### CONVOKE CUTS BOTH WAYS

Convoke is why an eight-mana sorcery is a turn-7 spell, and it is also the deck's exposure. *"Each creature you tap while casting this spell pays for {1} or one mana of that creature's color"* — so the {B}{B} can be paid by any two of the deck's 8 black creature cards, not just by lands. But a creature tapped for convoke cannot block, and between casting Bidding and attacking with it there is one full turn in which Darkness Descends (`{2}{B}{B}`, *"Put two -1/-1 counters on each creature"*, 2 copies in the pool) undoes the whole thing. That is why the build runs Creakwood Safewright ×2, Virulent Emissary ×2 and a deathtouch Trystan — so blockers can be *withheld* from convoke rather than tapped.

### THE SIDEBOARD'S ODD CARD

Darkness Descends ×2 is in the board as this deck's *own* wide-board answer, which reads strangely until you check the asymmetry on oracle text: creatures it kills go to graveyards, and **your** graveyard is what both payoffs read; Creakwood Safewright is base 5/5 and removes its own counters at each end step; Moon-Vigil Adherents gets *"+1/+1 for each creature card in your graveyard"* and is strictly bigger afterwards. It is a sweeper that feeds you and taxes them.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:2  2:12  3:2  4:5  5:1  8:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Moon-Vigil Adherents@0.6, Moon-Vigil Adherents@0.6) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.85: Trystan, Callous Cultivator // Trystan, Penitent Culler@0.85, Morcant's Eyes@0.5, Morcant's Eyes@0.5) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 34%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: There is no mainboard answer to a developed multi-creature board, and the earlier claim that High Perfect Morcant and Nameless Inversion covered it does not survive their oracle text — Morcant's trigger is one -1/-1 counter per Elf entering (board erosion the opponent chooses how to spread) and Nameless Inversion is single-target. The answer is Darkness Descends x2 in the SIDEBOARD ('Put two -1/-1 counters on each creature'), which is deliberately not maindecked because this deck develops a board of its own; when it is boarded in it is asymmetric here, since dead creatures land in the graveyard that Bloodline Bidding returns and Morcant's Eyes counts, Creakwood Safewright is base 5/5 and removes its own counters, and Moon-Vigil Adherents grows for each creature card in the yard.
  OK        single_large_threat: Bogslither's Embrace, Nameless Inversion
  CONCEDED  noncreature_permanents: No mainboard answer after Unforgiving Aim moved to the sideboard to make room for the Phase 9 repairs. The cube's artifact density is 4.2% (11 cards) and enchantment density 8.1% (21 cards); both are answered from the board by Chomping Changeling x2 ('destroy up to one target artifact or enchantment') and Unforgiving Aim ('Destroy target enchantment'). Maindecking a conditional answer would cost an enabler copy, and every enabler cut shrinks the pile the payoff returns.
  CONCEDED  stack: The BG portion of this cube contains no counterspells at all, so no mainboard or sideboard answer exists — and this deck is the one most exposed to that, because the pool allows only ONE copy of Bloodline Bidding. The response is not protection but a second, structurally different payoff: Morcant's Eyes x2 is an enchantment cashed at sorcery speed off the same pile, so a countered, discarded or exiled Bidding is not the end of the deck.
  CONCEDED  graveyard: This deck's graveyard IS its win condition — Bloodline Bidding returns creature cards from it and Morcant's Eyes counts Elf cards in it — so mainboard graveyard hate would be self-destructive; Rooftop Percher x2 is held in the sideboard for the graveyard mirror, which the dossier sizes at 39 cards / 15.0% density.
```

- No WARN-tier flags at any point — curve, assembly, goldfish and coverage returned PASS on the first run and again after the Phase 9 repair. The repair added two one-drops, so the goldfish play-by-turn-1 figure moved from 0% to 34%.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Convoke makes lands and creatures interchangeable exactly where it matters: 'Each creature you tap while casting this spell pays for {1} or one mana of that creature's color', so a flooded hand means Bloodline Bidding is cast off lands with fewer Elves tapped — which leaves MORE untapped blockers on the cast turn. Flood makes this deck safer, not merely castable. Beyond that, Morcant's Eyes' activation is a 6-mana sink, Dose of Dawnglow is a 5-mana instant-speed sink, and Trystan is a one-mana-per-turn sink ('At the beginning of your first main phase, you may pay {B}. If you do, transform Trystan'). Lys Alana Dignitary's '{T}: Add {G}{G}' also converts a surplus land drop, though only once there is an Elf card in the graveyard. |
| screw | mitigation | 14 of the 23 nonland cards cost two or less — the highest cheap-card density of any build in this cycle — and the goldfish check reports 86% keepable, 3 lands by turn 3 in 88%, an on-curve play by turn 1 in 34% and by turn 2 in 96%. On two lands the deck deploys Virulent Emissary, Midnight Tilling, Scarblade Scout, Creakwood Safewright, Morcant's Eyes and Nameless Inversion. Two cards printed at two mana are NOT on that list: Lys Alana Dignitary ('As an additional cost to cast this spell, behold an Elf or pay {2}' — four mana with no Elf available) and Bogslither's Embrace ('As an additional cost to cast this spell, blight 1 or pay {3}' — five mana with no creature on board). Lys Alana Dignitary is deliberately NOT on that list: 'As an additional cost to cast this spell, behold an Elf or pay {2}' means that with no Elf on board and none in hand it costs four, not two. Convoke is itself screw insurance — the payoff's effective cost falls by one for every Elf on board. |
| decapitation | mitigation | This is the deck's defining constraint: the pool allows exactly ONE Bloodline Bidding, so the answer cannot be a second copy. It is three other things. Morcant's Eyes x2 is a second payoff of a different card type, activated at sorcery speed off the same pile ('Create X 2/2 black and green Elf creature tokens, where X is the number of Elf cards in your graveyard' — 18 of the 40 cards here are Elf cards). Dose of Dawnglow is an instant-speed single-target version of the same conversion ('Return target creature card from your graveyard to the battlefield'), and it triggers Twilight Diviner's 'entered ... from a graveyard' clause. Moon-Vigil Adherents x2 is a third route needing no spell to resolve at all. |
| gas-out | mitigation | The deck wins from an empty hand by design: every payoff reads cards already in the graveyard, so the hand is not the resource. Refuel is thin and disclosed — Midnight Tilling x2 is self-replacing ('you may return a permanent card from among them to your hand'), Twilight Diviner adds a token copy on any graveyard-to-battlefield turn, and each returned Dawnhand Eulogist re-triggers its own mill. There is no draw engine; Champions of the Perfect, which would be one, is excluded because 'behold an Elf and exile it' removes a creature card from the pile the payoff returns. |
| raced | mitigation | Unlike the sibling combo build, this one actually blocks, and the timing is stated correctly. Virulent Emissary x2 is a turn-1 deathtouch 1/1 that trades with anything. Trystan has deathtouch on both faces. Creakwood Safewright x2 is a {1}{B} body that ARRIVES AS A 2/2 — it enters with three -1/-1 counters and removes one at each of your end steps, and only 'if there is an Elf card in your graveyard', so a turn-2 Safewright is a 2/2 that becomes a 3/3 at end of turn 3 at the earliest and a 5/5 no sooner than turn 5. It is a blocker that improves, not an immediate wall. Three mainboard interaction slots plus sideboard Requiting Hex x2 back it up, and Virulent Emissary's 'whenever another creature you control enters, you gain 1 life' turns the Bidding cast turn into 5-7 life on the exact turn the deck is most exposed. |
| disruption-fizzle | accepted | The cast turn has a real, unmitigable window and the honest thing is to state it. Convoke taps creatures, so Elves used to pay for Bloodline Bidding cannot block that turn, and the returned board is summoning-sick because no BG card in this cube has haste — so between casting the payoff and attacking with it there is one full turn in which Darkness Descends ({2}{B}{B}, 'Put two -1/-1 counters on each creature', 2 copies in the pool) undoes the cast. Mitigating means either holding back convoke bodies, which delays the cast past turn 7 — the locked thesis turn — or spending a rare slot on Selfless Safewright. To be precise about that card rather than dismissive: its 'Other permanents you control of that type gain hexproof and indestructible until end of turn' does NOT answer Darkness Descends (non-targeted, and indestructible does not save a creature whose toughness is 0), but with flash and convoke it WOULD blank targeted removal and targeted sacrifice on the whole returned board for near-zero real mana. It is out because the rare budget is 5 of 5, not because it fails. What the deck does instead is refuse to be all-in: the ETB cascade on the cast turn is itself damage and life, and Moon-Vigil Adherents wins games where the sorcery never resolves. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Morcant's Loyalist | 'When this creature dies, return another target Elf card from your graveyard to your hand' — the anthem is excellent, but the death trigger is MANDATORY and pulls an Elf creature card out of exactly the pile Bloodline Bidding reanimates; in the P1 build that is upside, here it is a tax on the kill. |
| Graveshifter | 'return target creature card from your graveyard to your hand' — same problem, and worse: it is the whole card. It shrinks the Bidding return by one creature to put one card in hand. |
| Trystan's Command | 'Return one or two target permanent cards from your graveyard to your hand' — a strong card that competes directly with the payoff for the same resource, and at {4}{B}{G} it also competes for the turn. |
| Champions of the Perfect | 'behold an Elf and exile it' — exiling an Elf removes it from the pile permanently until Champions leaves; a 6/6 draw engine that is anti-thesis in a deck whose kill counts creature cards in the graveyard. |
| Stoic Grove-Guide | '{1}{B/G}, Exile this card from your graveyard: Create a 2/2 black and green Elf creature token' — trades a 5/4 Elf card that Bidding would return for a single 2/2 token; the shape judge rejected an entire sketch on this exact mechanism. |
| Lluwen, Imperfect Naturalist | 'mill four cards, then you may put a creature or land card from among the milled cards ON TOP OF YOUR LIBRARY' — the tuck clause actively removes a creature card from the pile, and its token half counts land cards, not Elf cards; a rare slot for an enabler that undoes part of its own work. |
| Gloom Ripper | 'X is the number of Elves you control plus the number of Elf cards in your graveyard' — a real payoff, but it is a one-turn combat pump needing an existing board and an unblocked attacker, and the rare budget is fully spent on Bidding, Twilight Diviner, Trystan, High Perfect Morcant and Overgrown Tomb. |
| Dose of Dawnglow | 'Return target creature card from your graveyard to the battlefield' at {4}{B} — reanimates ONE creature for five mana in a deck whose payoff reanimates all of them for eight with convoke; it is the same effect at a worse rate. |
| Eclipsed Elf | 'reveal an Elf, Swamp, or Forest card from among them and put it into your hand' — good selection, but it moves an Elf card from the library to the HAND rather than to the graveyard, which is the wrong zone for this pipeline. |
| Vinebred Brawler | 'must be blocked if able' on a 4/2 — a fine attacker, but this build wants two-mana bodies that block and survive while it mills, and a 4/2 that must be blocked dies to the first trade. |
| Heirloom Auntie | 'Whenever another creature you control dies, surveil 1' is a real enabler on a 4/4, but it is a Goblin: Bloodline Bidding names one creature type, so it is neither returned by the kill nor counted by Morcant's Eyes. |
| Foraging Wickermaw | 'When this creature enters, surveil 1' plus a mana ability — a Scarecrow, so like Heirloom Auntie it sits outside both the Bidding return and the Morcant's Eyes count. |
| Safewright Cavalry | 'can't be blocked by more than one creature' on a 4/4 for {3}{G} — a perfectly good Elf creature card for the pile, but at four mana it competes with Dawnhand Eulogist, which fills the pile by three cards on the way in. |
| Requiting Hex | 'Destroy target creature with mana value 2 or less' — excellent against the aggro starts that beat a turn-7 combo, but too narrow for the mainboard against a cube where 67% of creatures cost 3 or more; held in the sideboard at 2 copies. |
| Evolving Wilds | 'Search your library for a basic land card, put it onto the battlefield tapped' — fixing that costs a tempo point, and this manabase is already an even 13/13 pip split served by 6 Swamp and 6 Forest. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.27 adj [MV 2.83 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  53.8%  prod  58.8%  gap  -5.0pp  [OK]
  G  demand  46.2%  prod  58.8%  gap -12.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS — commons/uncommons at most 2; rares/mythics at most 1 each.
rare_mythic_budget:    5 of 5 used, at the cap: Bloodline Bidding, Twilight Diviner, Trystan, High Perfect Morcant (mainboard spells) and Overgrown Tomb (mainboard land). The sideboard contains zero rares.
bogslither_split:      Bogslither's Embrace is a common: 1 mainboard + 1 sideboard = 2 total, at the limit.
unforgiving_aim_split: Unforgiving Aim is a common: 0 mainboard + 1 sideboard = 1 total.
basics:                Swamp 6 + Forest 6 — format-supplied, exempt from copy limits.
colour_legality:       All distinct nonland cards return a usable mode from effective_cost.best_mode(card, ['B','G'], []).
```
