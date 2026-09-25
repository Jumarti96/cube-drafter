---
deck_name: "wu-spirits-blink-value"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-26T20:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  9x Island
  6x Plains
  1x Deserted Beach  This land enters tapped unless you control two or more other lands. {T}: Add {W} or {U}.
  2x Idyllic Beachfront  WU dual. This land enters tapped.
```

### CREATURES (14)

```
CMC  Card                                 Qty  Color  Role                Rar
  1  Lantern Bearer // Lanterns' Lift     x1   U      threat/enabler      C
  1  Lunarch Veteran // Luminous Phantom  x1   W      engine              C
  3  Fiend Hunter                         x2   W      interaction         U
  3  Mentor of the Meek                   x1   W      infrastructure      U
  3  Nebelgast Herald                     x2   U      payoff              U
  3  Spell Queller                        x1   WU     interaction/threat  R
  4  Mist Raven                           x2   U      interaction         U
  4  Restoration Angel                    x1   W      engine              R
  4  Tower Geist                          x2   U      infrastructure      C
  6  Deadeye Navigator                    x1   U      engine              R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card              Qty  Color  Role                    Rar
  1  Essence Flux      x1   U      interaction/protection  C
  1  Syncopate         x1   U      interaction             C
  2  Think Twice       x1   U      infrastructure          C
  3  Geistlight Snare  x1   U      interaction             U
  3  Lingering Souls   x2   W      enabler                 U
```

### OTHER SPELLS (2)

```
CMC  Card                    Qty  Color  Role         Rar
  3  Imprisoned in the Moon  x1   U      interaction  C
  5  Conjurer's Closet       x1   C      engine       R
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in                                                                                                                                                              Rar
Cathar Commando       x2   W      vs artifacts (24) and enchantments (25); Flash keeps it live on the opponent's turn                                                                                                  C
Valorous Stance       x2   W      vs the 4 sweepers and vs any toughness-4+ blocker                                                                                                                                    U
Angelic Purge         x1   W      vs a resolved must-answer permanent of any type                                                                                                                                      C
Stitched Mangler      x2   U      vs a single must-answer attacker — 'tap target creature an opponent controls. That creature doesn't untap during its controller's next untap step', repeatable under a blink engine  C
Slayer of the Wicked  x1   W      vs Vampire (23) / Werewolf (13) / Zombie (15); its ETB becomes repeatable removal under the blink engine                                                                             U
Soul-Guide Gryff      x2   W      vs graveyard decks (75 cards / 27.1% density); a repeatable exile under any blink engine                                                                                             C
```

## ANALYSIS

### DECK IDENTITY

WU blink/ETB control built on the Spirit shell. Ten of the fourteen creature cards carry an enter-the-battlefield trigger, and three mechanically independent blink outlets — Conjurer's Closet every end step, Deadeye Navigator for {1}{U} at instant speed, Restoration Angel with Flash — turn each of those triggers into a per-turn effect. Nebelgast Herald converts every Spirit arrival into a tapped opposing creature, Mist Raven bounces, Spell Queller exiles a spell, Tower Geist digs and Mentor of the Meek draws; the opponent's board is progressively locked down while nine flying bodies accumulate and close the game around turn 8.

### IS THIS ACTUALLY A SPIRITS DECK? — THE HONEST COUNT

The grill pressed hard on the label and the answer is worth putting first, because it changes how you should sideboard and iterate:

| Denominator | Count |
|---|---|
| Nonland cards | 22 |
| Creature cards | 14 |
| …with an enter-the-battlefield trigger | **10 of 14** |
| …that fly on their front face | 9 of 14 |
| …that are Spirits | 7 of 14 |
| …that are **both** a Spirit **and** an ETB | **5 of 10** |
| Nonland cards that put a Spirit onto the battlefield | 9 of 22 |
| Repeatable blink outlets | 3 (+1 one-shot) |

That last-but-one row is the one that matters. The named payoff is Nebelgast Herald, whose trigger reads `Whenever this creature **or another Spirit** you control enters`. The deck's *highest-value* blink targets — Mist Raven ×2, Fiend Hunter ×2, Restoration Angel — are a Bird, two Humans and an Angel. **Blinking them produces zero Herald triggers.**

So the honest description is: **a WU blink/ETB control deck with a load-bearing Spirit sub-theme.** The tribal text is real on about a quarter of the nonland cards, and the cube only contains 17 Spirits total (this deck runs 7 of them — 41% of the entire population), so a denser blink build is not available in this pool. But "WU Spirits" on its own oversells it, and pretending otherwise would make the deck harder to iterate on.

The saving grace, and the reason the payoff isn't dead weight: **Conjurer's Closet can blink the Herald itself.** `At the beginning of your end step, you may exile target creature you control, then return that card` targeting a Herald re-triggers `this creature … enters`. The loop is self-sufficient at one card.

### THE THREE OUTLETS ARE DELIBERATELY UNLIKE EACH OTHER

| Outlet | Speed | Frequency | Removed by |
|---|---|---|---|
| Conjurer's Closet | end step only | once per turn, free | artifact removal (24 cards in cube) |
| Deadeye Navigator | instant | **unbounded**, `{1}{U}` each | creature removal |
| Restoration Angel | instant (Flash) | once | creature removal |
| Essence Flux | instant | once (one-shot) | — |

That spread is the `decapitation` answer. An opponent holding creature removal cannot stop the Closet; an opponent holding artifact removal cannot stop the Navigator. Deadeye Navigator is also the flood valve — `{1}{U}` per activation with no cap means every surplus land is another ETB, and with Mentor of the Meek out, another card.

### TWO CARDS YOU MUST NEVER BLINK

This is the single most important play note in the deck, and both come straight from oracle text:

1. **Spell Queller** — `When this creature leaves the battlefield, the exiled card's owner may cast that card without paying its mana cost.` Blinking it hands the opponent a free spell. All three outlets read *"you **may** exile **target** creature you control"* — optional and targeted — so this is entirely avoidable.
2. **Fiend Hunter** — `When this creature leaves the battlefield, return the exiled card to the battlefield under its owner's control.` Blinking it **releases the prisoner** and merely lets the new ETB re-select. If the opponent controls no second creature, you have given a creature back for free. The permanent-exile trick (removing Fiend Hunter in response to its *enter* trigger) requires a sacrifice outlet, and this mainboard has **0 of 22**.

Fiend Hunter is therefore in the deck as a three-mana removal spell attached to a blocker — nothing more. The structural gate prices it at 0.5 of a functional payoff copy for exactly this reason.

### WHY 18 LANDS AND NOT 17

Deck A of this series runs 17 on the identical pool. The difference is purely the curve term in the land model: avg MV 3.05 here versus 2.48 there, and `land_target` returns 18 (`raw_target 17.73`). There is no archetype term in the formula — a control deck does not get extra lands for being control, it gets them for having a higher curve. The `p(2–4 lands in 7)` at 18 is 0.789 versus 0.794 at 17, so the cost of the extra land is about half a percentage point of opening-hand quality, bought against a top end of a 5-drop and a 6-drop.

### WHAT THE 5-RARE CAP COST THIS DECK

The cap is exactly spent: Spell Queller, Restoration Angel, Conjurer's Closet, Deadeye Navigator, and Deserted Beach (the only untapped WU dual). Two cards were cut **on the constraint rather than on their merits**, and they are the first two to add if you ever raise it:

1. **Cathars' Crusade** — `Whenever a creature you control enters, put a +1/+1 counter on each creature you control.` Against this list that is an ETB event essentially every turn from turn 5, compounding permanently. It has the largest raw count of any excluded card. It is also the worst of the three to *deploy*: `{3}{W}{W}` against 9 white sources, adding no board and answering nothing on the turn it resolves.
2. **Mausoleum Wanderer** — a `{U}` Spirit that grows off every Spirit arrival. It lost the head-to-head to Spell Queller because it carries **no ETB**, and an ETB is the thing this deck's engine repeats.

### PLAY PATTERN

Turns 1–2 are for Lantern Bearer, Lunarch Veteran and Think Twice; the deck's first *impactful* turn is 3. Deploy ETB bodies on curve, hold `{1}{U}` for Geistlight Snare when you can, and land Conjurer's Closet on 5. From that point every end step is: blink Tower Geist (a card) or Herald (a tapped blocker) or Mist Raven (a bounced threat), and if Mentor of the Meek is out, pay `{1}` for another card. Deadeye Navigator on 6 converts every remaining land into more of the same at instant speed.

The clock is nine fliers, which is not fast — hence the turn-8 goldfish — but the opponent is not permitted to develop while it happens.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:4  2:1  3:10  4:5  5:1  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6: Fiend Hunter@0.5, Fiend Hunter@0.5) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.4: Deadeye Navigator@0.8, Essence Flux@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 59%  T2 72%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Nebelgast Herald, Mist Raven, Lingering Souls, Tower Geist
  OK        single_large_threat: Imprisoned in the Moon, Fiend Hunter, Mist Raven, Spell Queller
  OK        noncreature_permanents: Imprisoned in the Moon, Spell Queller, Geistlight Snare, Syncopate
  OK        stack: Spell Queller, Geistlight Snare, Syncopate
  CONCEDED  graveyard: No mainboard graveyard answer. Syncopate and Spell Queller both exile what they answer, but neither touches a graveyard that already exists. Soul-Guide Gryff sits in the sideboard at 2 copies because at {4}{W} it competes for the same slot as Mist Raven and Tower Geist, whose ETBs are live in every matchup rather than one.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Deadeye Navigator is an unbounded mana sink: 'each of those creatures has "{1}{U}: Exile this creature, then return it to the battlefield under your control"' converts every surplus land into another ETB trigger, at instant speed, as many times per turn as mana allows. Mentor of the Meek turns each of those into a card for {1}. Syncopate's {X} scales with excess lands, Think Twice's Flashback {2}{U} is a late-game second card, and Lantern Bearer's Disturb {2}{U} returns it from the graveyard as an Aura. At 18 lands this is the mode the deck is best equipped for. |
| screw | mitigation | REWRITTEN — the previous entry was an `accepted` claiming that lowering the curve required cutting the three blink engines, and the grill correctly showed that was a false dilemma. The real fix was applied: Avacynian Priest, a card with no ETB and no Herald trigger, was cut for Lunarch Veteran // Luminous Phantom at {W}. The list now has four 1-mana cards (Lantern Bearer, Lunarch Veteran, Essence Flux, Syncopate) and the goldfish sim reports 59% of hands make a turn-1 play (up from 35% before the Spirit-density repair and 50% before this one), 72% by turn 2, 99% by turn 3, with 87% keepable hands and 92% reaching three lands by turn 3. Honest residual: this is still a deck whose first IMPACTFUL play is turn 3, and 18 lands is the concession that buys mana consistency rather than speed. |
| decapitation | mitigation | The blink role has three mechanically independent sources — Conjurer's Closet (an artifact, so creature removal misses it), Deadeye Navigator (a creature) and Restoration Angel (a Flash creature) — plus Essence Flux as a one-shot. The payoff role is equally redundant: Nebelgast Herald x2, Mist Raven x2, Fiend Hunter x2 and Tower Geist x2 are four separate ETB effects at two copies each. Answering any single card leaves the loop intact. Restoration Angel and Essence Flux can each blink a targeted creature in response to removal, blanking it. |
| gas-out | mitigation | Mentor of the Meek is the direct answer the grill identified: 'Whenever another creature you control with power 2 or less enters, you may pay {1}. If you do, draw a card' is live on 11 of the 13 other creature cards plus all 4 Lingering Souls tokens, so under Conjurer's Closet it is a card every end step. Tower Geist x2 filters on every arrival and is likewise per-turn under the engine. Think Twice casts twice; Lantern Bearer casts twice via Disturb; Lingering Souls is two bodies per card. Resource ledger: 1 card tagged Cards: Net-Positive (Think Twice), 1 Cards: Self-Replacing (Tower Geist), plus Mentor converting the engine itself into draw. Honest note: deck_audit still reports cantrip_count 0, a taxonomy artefact — Think Twice is the only card that reads 'Draw a card' on its face. |
| raced | mitigation | Nine of the fourteen creature cards fly on their front face (a tenth, Lunarch Veteran, gains flying only once Disturbed from the graveyard). Nebelgast Herald has Flash, so it can be deployed during the opponent's upkeep and its 'whenever this creature or another Spirit you control enters, tap target creature an opponent controls' strips an attacker before the attack step; Spell Queller has Flash and exiles the pump or burn spell (227 of 277 nonland cube cards are mana value 4 or less). Mist Raven bounces an attacker and Fiend Hunter exiles one, both stapled to blockers. Lunarch Veteran gains 1 life on every creature entering and on every creature leaving, which under a blink outlet is 2 life per turn indefinitely. Against the cube's fastest shells the sideboard adds Slayer of the Wicked (51 of 277 nonland cube cards are Vampire, Werewolf or Zombie) and Stitched Mangler x2, whose 'that creature doesn't untap during its controller's next untap step' removes an attacker for two turns at mana value 3. |
| disruption-fizzle | mitigation | The critical turn is not a spell — it is the end step when Conjurer's Closet triggers, and a triggered ability from an already-resolved permanent cannot be answered by Geistlight Snare, Syncopate or Spell Queller class effects. If an engine piece is targeted on the stack, Geistlight Snare, Syncopate and Spell Queller protect it. If a creature is targeted in response to a blink, Essence Flux and Restoration Angel re-enter it and blank the removal. The honest limit: Deadeye Navigator's soulbond pair is the one line that folds to a single removal spell, because 'they remain paired for as long as you control both of them' ends when either half leaves — which is exactly why Conjurer's Closet and Restoration Angel exist as independent outlets. Second honest limit: never blink Spell Queller or Fiend Hunter — Queller hands back a free spell, and Fiend Hunter returns its prisoner. |

### COUNT-DEPENDENT VERDICTS

| Card | Count against this list | Verdict |
|---|---|---|
| Nebelgast Herald | Trigger reads 'this creature or another Spirit you control enters'. Cards that put a Spirit onto the battlefield: 9 of 22. Under the blink engine specifically the picture is narrower and worth stating: only 7 of 14 creature cards are Spirits, and of the 10 ETB creature cards only 6 are BOTH a Spirit and an ETB (Nebelgast Herald x2, Spell Queller, Tower Geist x2, Deadeye Navigator). The deck's highest-value blink targets — Mist Raven x2, Fiend Hunter x2, Restoration Angel — produce zero Herald triggers. The load-bearing case is that Conjurer's Closet can blink the Herald ITSELF every end step, so the loop is self-sufficient at one card. | **INCLUDE — the locked payoff, fed roughly half the time by the engine and fully by casts** |
| Spell Queller | ADJUDICATED IN GRILL REPAIR — it was an include_candidate with no recorded verdict, which was a process failure. 'When this creature enters, exile target spell with mana value 4 or less': 227 of 277 nonland cube cards are mana value 4 or less = 81.9%. It is also a Spirit (a Herald trigger) and a Flash flier. The anti-synergy is real but avoidable: all three blink outlets read 'you may exile TARGET creature you control', so Spell Queller is simply never targeted — blinking it would let the exiled card's owner cast it for free. | **INCLUDE (5th and final rare slot)** |
| Mentor of the Meek | ADJUDICATED IN GRILL REPAIR. 'Whenever another creature you control with power 2 or less enters, you may pay {1}. If you do, draw a card': 11 of the 13 other creature cards qualify (only Restoration Angel at power 3 and Deadeye Navigator at power 5 miss), plus all 4 Lingering Souls tokens. Under Conjurer's Closet that is a card per end step. Before this addition the deck's whole draw suite was 3 of 22 nonland cards with cantrip_count 0. | **INCLUDE** |
| Lunarch Veteran // Luminous Phantom | ADJUDICATED IN GRILL REPAIR. 'Whenever another creature you control enters, you gain 1 life' is ungated and live on all 13 other creature cards + 4 tokens; the back face reads 'Whenever another creature you control LEAVES the battlefield, you gain 1 life', so under a blink outlet each blink is two triggers. Compare Apothecary Geist, which it replaced: 1 gated trigger at mana value 4. It is a Human, so it costs 0 Herald triggers — a real trade, made because the lifegain rate and the 1-mana slot both matter more. | **INCLUDE** |
| Fiend Hunter | Blinking it accrues NOTHING: 'When this creature leaves the battlefield, return the exiled card to the battlefield under its owner's control' resolves and hands the creature back, while the new ETB can only re-select a different target — and with no second opposing creature it is a pure giveback. The permanent-exile line requires removing Fiend Hunter in response to its ENTER trigger, which needs a sacrifice outlet: this mainboard has 0 of 22. The structural gate therefore discounts both copies to weight 0.5. The sweep's include-reason for this card claimed the permanent-exile line and was wrong; corrected here. | **INCLUDE as a 3-mana removal spell on a blocker, NOT as a blink payload — never target it with Conjurer's Closet, Restoration Angel or Essence Flux unless a better exile target exists** |
| Deadeye Navigator | 'They remain paired for as long as you control both of them.' 13 of 14 creature cards can pair, so finding a partner is trivial once a board exists, and activating on the partner re-triggers soulbond so the pair reforms. The fragility is asymmetric: losing the partner leaves the Navigator to re-pair, but losing the Navigator ends the ability entirely. It is 1 copy of 22 at mana value 6 in an 18-land deck — reliability is high conditional on reaching six lands with a board and {1}{U} spare, and zero as a standalone card. It is itself a Spirit, so self-blinking fires Herald. | **INCLUDE — with Conjurer's Closet and Restoration Angel as the independent outlets that make decapitation survivable** |
| Geistlight Snare | Spirit clause: 9 of 22 cards put a Spirit onto the battlefield, so plan at {1}{U}. Enchantment clause: only 2 of 22 cards can put an enchantment onto the battlefield (Imprisoned in the Moon; Lantern Bearer's Disturb back), so {U} is a rare bonus. Reduced from 2 copies to 1 in the grill repair to make room for Spell Queller, which answers a strictly wider set (81.9% of nonland cube cards, versus 'unless its controller pays {3}'). | **INCLUDE at 1** |
| Cathars' Crusade | ADJUDICATED IN GRILL REPAIR — it was withheld from the seed by threat_cap 25 and never given a verdict, which was the process failure the finding names. Its real count against this list is the strongest of any excluded card: 'Whenever a creature you control enters, put a +1/+1 counter on each creature you control' fires on 14 creature cards, 4 Spirit tokens, and every activation of the 3 repeatable blink outlets — an ETB event essentially every turn from turn 5, compounding permanently. | **CUT — on a hard constraint, not on the card's merits. The user's 5 rare/mythic cap is fully spent (Spell Queller, Restoration Angel, Conjurer's Closet, Deadeye Navigator, Deserted Beach) and Cathars' Crusade is a rare. Secondarily, {3}{W}{W} is two more white pips than any card in the list against 9 white sources of 18, and it adds no board on the turn it resolves. It is the FIRST card to add if the rare cap is ever raised.** |
| Mausoleum Wanderer | ADJUDICATED IN GRILL REPAIR. The sweep flagged it count_dependent: false, which was my error — 'Whenever another Spirit you control enters, this creature gets +1/+1 until end of turn' reads a rate of other cards. Its count here: 9 of 22 nonland cards produce a Spirit, and under the blink engine it grows every turn, scaling the sacrifice-counter tax from {1} to {3}+. It is a {U} 1-drop flier, which this deck wants. | **CUT — same hard constraint: it is a rare and the cap is spent. Unlike Spell Queller it carries no ETB, which is the thing this deck's engine repeats, so it loses the head-to-head for the last rare slot.** |
| Angel's Tomb | ADJUDICATED IN GRILL REPAIR — the sweep cut it inside a group reason about 'go-wide anthem/token payoffs ... none of them has an ETB for the blink engine to re-trigger', which describes a property this card does not have. It is not an anthem and does not need its own ETB: 'Whenever a creature you control enters, you may have this artifact become a 3/3 white Angel artifact creature with flying until end of turn' reads OTHER creatures entering, which is this deck's most common event — 14 creature cards, 4 tokens, and 3 repeatable outlets. | **CUT on the correct ground — the animation lasts only until end of turn and requires a creature to enter on the turn you want to attack, so it is a conditional 3/3 rather than a permanent threat, and this deck already fields 10 flying bodies without spending a slot on a conditional one** |
| Metallic Mimic | Names Spirit; would put a +1/+1 counter on each other Spirit entering. Spirit creature cards here: 7 of 14 — under half the creature base, versus 15 of 15 in Deck A of this series where it was an auto-include. Worse for this build specifically: a blink RE-ENTERS a creature, so the counter is re-applied only while Mimic is still on the battlefield and does not accumulate on a blinked body. | **CUT** |
| Battleground Geist | CORRECTED — an earlier version said it pumps '6 of the 12 other creature cards'. The real figure is 7 other Spirit creature cards (Lantern Bearer, Nebelgast Herald x2, Spell Queller, Tower Geist x2, Deadeye Navigator) plus 4 tokens. Verdict unchanged: at {4}{U} it competes with Conjurer's Closet and Deadeye Navigator for the top of a control curve, and a +1/+0 anthem does nothing to stabilise a board. | **CUT** |
| Essence Flux | Blink targets: 14 of 14 creature cards; the Spirit +1/+1 rider live on 7 of 14. The judge's weak_keystones finding is accepted — it is a ONE-SHOT blink, not an accruing engine, so it is filed under Interaction and runs at 1 copy. Its real job is instant-speed protection: blink the targeted creature in response to removal, blanking the removal and banking a free ETB. | **INCLUDE at 1, filed as Interaction** |
| Spectral Shepherd | Judge finding accepted: '{1}{U}: Return target Spirit you control to its owner's hand' is a bounce, not a blink — it costs mana twice and can only target the 7 of 14 creature cards that are Spirits. The two ETBs this deck most wants to re-trigger, Mist Raven and Fiend Hunter, are not among them. | **CUT** |
| Thalia, Heretic Cathar | 'Creatures and nonbasic lands your opponents control enter tapped' stacks with the tap-down plan, but she has no ETB in a deck where 10 of 14 creature cards do, and she is a Human, so she is neither a blink payload nor a Herald trigger. Her rare slot was reallocated to Deserted Beach, which serves the {1}{W}{W} and {2}{U}{U} costs this list actually has. | **CUT** |
| Avacynian Priest | CORRECTED — an earlier version claimed '82% of creatures are legal targets' by dividing 53 Humans into 300 CARDS. The Priest targets creatures, so the denominator is creatures: the cube holds 166 creatures, 53 of them Human, giving 113 non-Human = 68.1%. Cut entirely in the grill repair: it is a Human with no ETB, contributing nothing to the blink loop or the Herald count, and its removal is what made the screw mode a real mitigation rather than a false acceptance. | **CUT** |
| Stitched Mangler | Its ETB is on-thesis, but it is a Zombie Horror (0 Herald triggers) and it 'enters tapped', so on arrival it neither blocks nor attacks. Kept in the sideboard at 2 copies where its two-turn tap is a targeted answer rather than a tribal cost. | **CUT from mainboard, 2 copies in sideboard** |
| Voice of the Blessed | Lifegain triggers in this list: 1 card (Lunarch Veteran, 1 life per creature entering or leaving). Sketch 1 proposed Voice as a primary finisher fed by Apothecary Geist AND Lunarch Veteran; with one of those two in the built list it needs four separate trigger events before it even flies. | **CUT** |
| Delver of Secrets // Insectile Aberration | Instants + sorceries: 6 of 22 = 27.3%. A 1-mana body with a roughly 1-in-4 upkeep flip is not what a control deck's turn 1 is for, and it is a Human Wizard with no ETB. | **CUT** |
| Vanquish the Horde | 'costs {1} less to cast for each creature on the battlefield' and 'Destroy all creatures'. This deck's own board when the sweeper becomes castable is 3-6 creatures, all of which it kills — and the accumulated evasive board IS the win condition, so the cost reduction is cheapest exactly when the card is worst. | **CUT** |
| Guardian of Pilgrims | SEED-GAP CARD (the sweep's clusters_note flagged that neither band reaches it). A {1}{W} Spirit Cleric with an ETB, on-thesis on both axes — but 'target creature gets +1/+1 until end of turn' expires immediately, which is worth nothing to a blink engine whose point is accumulating permanent value. | **CUT** |
| Mausoleum Guard | SEED-GAP CARD. 'When this creature dies, create two 1/1 white Spirit creature tokens with flying' is 2 Herald triggers, but the trigger is on DEATH, not on entering — so a blink engine gets nothing from it. It is the one Spirit-producing card in the pool that a blink deck specifically cannot use. | **CUT** |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Throng, Makeshift Mauler, Drunau Corpse Trawler, Necroduality, Rooftop Storm | Zombie-typed payoffs and enablers ('nontoken Zombie you control enters', 'Zombie creature spells', 'search for a card named Wretched Throng'). This list runs zero Zombies, so the rider text is blank and the bodies are below rate without it. Necroduality is the sharpest loss: it copies entering nontoken ZOMBIES, not Spirits, so a blink deck gets nothing from it. |
| Brisela, Voice of Nightmares, Distended Mindbender | Mana value 11 (a meld result that requires assembling and holding two specific 4- and 7-drops) and an 8-mana emerge whose reduction is capped by our creatures' mana values — this list's bodies average under 3, so the emerge discount never approaches the printed cost. |
| Gather the Townsfolk, Angel's Tomb, Rally the Peasants | Go-wide anthem/token payoffs. This build wins by re-using a few high-value ETBs, not by presenting a wide board — the token count these reward is 4 (Lingering Souls x2), and none of them has an ETB for the blink engine to re-trigger. |
| Thing in the Ice // Awoken Horror | 'When this creature transforms into Awoken Horror, return all non-Horror creatures to their owners' hands' bounces this deck's entire blink board — the flip is actively hostile to a list whose value is accumulated ETB bodies on the battlefield. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.05   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.73 adj [MV 3.05 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  63.0%  prod  66.7%  gap  -3.7pp  [OK]
  W  demand  37.0%  prod  50.0%  gap -13.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard only — every card verified by exact-name match against the working pool cache (Phase 5C check 2: PASS)
  [PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 — Phase 5C check 3: PASS
  [PASS] rare_mythic_cap: 5 of 5 used — the cap is exactly spent. Mainboard: Spell Queller (R), Restoration Angel (R), Conjurer's Closet (R), Deadeye Navigator (R), Deserted Beach (R, land). Sideboard: 0 — all ten board cards are commons or uncommons. Cathars' Crusade and Mausoleum Wanderer were both cut on this constraint rather than on their merits, and are the first two cards to add if the cap is raised.
  [PASS] basics: Island x9, Plains x6 — format-supplied, exempt from copy limits
  [PASS] colour: all 22 nonland cards usable in [W,U] via effective_cost.best_mode (Phase 5C check 4: PASS); no splashed cards (check 5: PASS)
```
