---
deck_name: "ub-self-mill-terror"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-19T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Island                 
  7x Swamp                  
  2x Contaminated Aquifer   UB dual (Island Swamp), enters tapped
  1x Crystal Grotto         colorless; {1},{T} for any color; scry 1 on ETB
```

### CREATURES (11)

```
CMC  Card                        Qty  Color  Role                Rar
2    Vohar, Vodalian Desecrator  x2   UB     Engine/Enabler      U
3    Aether Channeler            x1   U      Interaction         R
3    Eerie Soultender            x2   B      Engine/Enabler      C
3    Haughty Djinn               x1   U      Threat/Payoff       R
4    Ertai Resurrected           x1   UB     Threat/Interaction  R
4    Monstrous War-Leech         x2   B      Threat/Enabler      U
4    Sheoldred, the Apocalypse   x1   B      Threat              M
7    Tolarian Terror             x1   U      Threat/Payoff       C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                     Qty  Color  Role                 Rar
1    Cut Down                 x2   B      Interaction          U
1    Rona's Vortex            x2   U      Interaction          U
2    Impulse                  x1   U      Interaction/Enabler  C
2    Tribute to Urborg        x2   B      Interaction          C
4    Sheoldred's Restoration  x2   B      Payoff               U
```

### OTHER SPELLS (3)

```
CMC  Card                     Qty  Color  Role            Rar
2    Founding the Third Path  x2   U      Engine/Enabler  U
5    The Cruelty of Gix       x1   B      Payoff          R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                                                                                                                                          Rar
Essence Scatter          x2   U      Hate — 'Counter target creature spell' - against decks whose plan is one large body (Mossbeard Ancient, Silverback Elder, Defiler of Vigor), answering it on the stack costs two mana and dodges ward and enters-the-battlefield triggers entirely.                                                                                                                                                                              C
Knight of Dusk's Shadow  x2   B      Hate — Against the cube's 22 lifegain cards - 'Your opponents can't gain life' blanks Mossbeard Ancient's ETB and Silverback Elder's third mode, on a 2/2 menace body that is never a dead draw.                                                                                                                                                                                                                                 U
Negate                   x2   U      Hate — 'Counter target noncreature spell' - together with Essence Scatter this is the only stack interaction in the cube, and it is U/B's primary answer to the 15 artifacts and 18 enchantments that black alone cannot touch once they resolve.                                                                                                                                                                                C
Tolarian Geyser          x2   U      Hate — Against the cube's largest threat class - 51 evasion cards, of which 41 have flying. 'Return target creature to its owner's hand. Draw a card' answers a RESOLVED flier at instant-relevant cost, replaces itself, and is a sorcery that feeds the instant-and-sorcery count three cards in this deck read. It replaced Academy Wall, whose 0/5 body has neither flying nor reach and therefore blocks none of those 41.  C
Extinguish the Light     x2   B      Flex — 'Destroy target creature or planeswalker' - the unconditional answer, and the only planeswalker removal in these colours; in against decks whose threats sit outside Cut Down's total-power-and-toughness-5 window.                                                                                                                                                                                                       C
```

## ANALYSIS

### DECK IDENTITY

A U/B self-mill tempo deck, and the only one of these four builds where BOTH halves of the pool's kicker cards are live: Monstrous War-Leech's {U} kicker mills four AND makes it huge, Tribute to Urborg's {1}{U} kicker scales its -X/-X off the same graveyard, and Rona's Vortex's {2}{B} kicker upgrades a bounce into permanent removal. It fills its own graveyard on purpose - Vohar's '{T}: Draw a card, then discard a card' is the pool's ONLY repeatable rummage, Founding the Third Path chapter II mills four, Eerie Soultender mills three - and then cashes that graveyard out primarily from the CAST side rather than by reanimating: Tolarian Terror costs {1} less per instant and sorcery card in the yard, Haughty Djinn's power reads the same count, and Monstrous War-Leech's power and toughness equal the greatest mana value in it. Sheoldred's Restoration x2 and The Cruelty of Gix chapter III sit on top as the battlefield-reanimation routes - 3 of 23 nonland cards, which is the CEILING the pool allows a U/B deck (the only other graveyard-to-battlefield effects in these colours are Cult Conscript, which returns only itself, and Balduvian Atrocity, whose reanimation is behind an off-colour {R} kicker and sacrifices the creature at end of turn anyway). RETRACTED after the grill: an earlier version of this line claimed the deck 'delivers the Reanimator constraint literally as well as structurally'. Measured, there is no creature card in your own graveyard at all in 43.8% of games at turn 4 and 30.4% at turn 5, and the mean best target is mana value 2.3 at turn 4 - so the literal reanimation is real but small, and the deck's primary cash-out is and remains the cast side.

### THE ONE COLOUR PAIR WHERE THE KICKERS WORK

Dominaria United's kicker cards are built as colour tests, and three of them are split **across** blue and black — base cost in one, kicker in the other. That makes them half-cards in every deck except this one:

| Card | Base | Kicker | What the kicker adds |
|---|---|---|---|
| Monstrous War-Leech | `{3}{B}` | **`{U}`** | *"mill four cards"* — it fills the graveyard it then reads |
| Tribute to Urborg | `{1}{B}` | **`{1}{U}`** | *"an additional −1/−1 … for each instant and sorcery card in your graveyard"* |
| Rona's Vortex | `{U}` | **`{2}{B}`** | bounce becomes *"put that permanent on the bottom of its owner's library"* |

Decks B and C cast Monstrous War-Leech with the kicker declined and get only half the card. This deck pays it. That is the actual argument for U/B, and it is why blue is run at parity with black despite a 41% *printed* pip share — the blue is needed **at the same time** as the black, not instead of it. (The mana audit's `pip_demand` only reads printed costs, so it can't see this; counting the kickers the deck intends to pay, real demand is about 19 black to 16 blue.)

### THE COST OF THE THINNEST MANABASE IN THE CUBE

U/B has **one** free dual — Contaminated Aquifer — and it enters tapped. Crystal Grotto is the only other nonbasic, and its *"{1}, {T}: Add one mana of any color"* is a real tax on turns 2–4 when the double pips are due. Honest source count: **9 true coloured sources per colour out of 17**, not the 10/10 the audit reports at parity.

The build answers this structurally rather than by hoping. Only three cards in the forty carry a double pip (Haughty Djinn, Sheoldred, The Cruelty of Gix), and **every kicker in the deck is declinable** — so a colour-light draw still casts War-Leech's base `{3}{B}`, Tribute's `{1}{B}` and Rona's Vortex's `{U}` on curve. Rona, Sheoldred's Faithful (`{1}{U}{B}{B}`) was cut for exactly this reason despite being a fine card.

### WHAT THE GRILL CHANGED, AND WHY IT MATTERS

This deck got the sharpest review of the four, and two of its findings changed the list materially.

**1. Tolarian Terror is not a two-mana 5/5.** Its clause — *"costs {1} less to cast for each instant and sorcery card in your graveyard"* — was the stated justification for running threats at 41% against a 10–18% band. Simulated over the actual list under assumptions generous to the claim:

| End of turn | Mean instants/sorceries in yard | Mean Terror cost | P(cost ≤ 3) |
|---|---|---|---|
| 3 | 1.80 | 5.20 | 4.6% |
| 4 | 2.46 | 4.54 | 17.3% |
| 5 | 3.10 | 3.91 | 35.9% |

It's a **five-mana-window 5/5 with ward {2}** — a fine card, but a top end, which is precisely what the deviation was excused from being. One copy came out, and the deviation was re-grounded on something that reproduces: of the nine cards in the Threats slot, three are reanimation *spells* with no body and two are Monstrous War-Leech (an enabler as much as a threat), so **pure creature-threats are 4 of 23 = 17.4%, inside the band**.

There's a subtlety worth knowing when you tune this: **Sheoldred's Restoration reads *"Exile Sheoldred's Restoration."*** A cast copy never reaches the graveyard, so it only feeds Terror's count if it gets *milled*. The nominal instant/sorcery count is 9 of 23; the functional one is **7**.

**2. Academy Wall blocks nothing that matters here.** It was in the sideboard as the answer to *both* the accepted "raced" mode and the conceded wide-boards class. But the cube's largest threat class is evasion — **51 cards, of which 41 have flying** — and a 0/5 with neither flying nor reach blocks none of them. Two separate concessions were being discharged onto a card blank against 80% of the problem. It's now Tolarian Geyser ×2: *"Return target creature to its owner's hand. Draw a card"* answers a **resolved** flier of any size and replaces itself.

### HOW MUCH REANIMATION IS ACTUALLY HERE

Honestly: the pool's maximum, and that maximum is small. The complete set of graveyard→battlefield effects a U/B deck may legally run is **three slots** — Sheoldred's Restoration (×2 allowed) and The Cruelty of Gix (×1). Cult Conscript returns only itself; Balduvian Atrocity's reanimation is behind an off-colour `{R}` kicker and sacrifices the creature at end of turn anyway. This deck takes all three.

What that buys, measured on the final list: there is **no creature card in your own graveyard at all in 43.8% of games at turn 4** (30.4% at turn 5), and the mean best target is mana value **2.27**, rising to 2.91 by turn 5. So Sheoldred's Restoration rebuys an Eerie Soultender far more often than a bomb — and unkicked, it makes you *lose* that much life.

Worth knowing if you tune this: those numbers got **worse**, not better, when the second Restoration went in, because the two copies compete for the same scarce target. The second copy is justified on reanimation-count grounds (it takes the deck to the pool's ceiling of three), not on efficiency.

Which is why the deck's real cash-out is the **cast** side, and why that's a feature rather than a dodge: Tolarian Terror, Haughty Djinn and Monstrous War-Leech all *read* the graveyard without *consuming* it. An answered Sheoldred's Restoration costs you a card; an answered Tolarian Terror costs you nothing the next one doesn't restore, because the count it reads is unchanged. Against a removal-heavy opponent that asymmetry is the whole game.

### THE GAP

The cube has 15 artifacts and 18 enchantments. After they resolve, every other answer in this fifty-card configuration reads *"creature or planeswalker"*. Aether Channeler — *"Return another target nonland permanent to its owner's hand"* — is the **only** card in U/B that touches one, and it takes the fifth and last rare slot. Negate ×2 in the board catches them on the stack; nothing catches them after.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:4  4:6  5:1  7:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.95: Tolarian Terror@0.75, Monstrous War-Leech@0.85, Monstrous War-Leech@0.85, Haughty Djinn@0.7, The Cruelty of Gix@0.8) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.5: Vohar, Vodalian Desecrator@0.85, Vohar, Vodalian Desecrator@0.85, Founding the Third Path@0.9, Founding the Third Path@0.9) → p=0.83 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 94%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: There is no sweeper this deck can cast. The pool's only blue or black mass-removal is The Phasing of Zhalfir (rare, and its chapter III 'Destroy all creatures' would kill this deck's own Tolarian Terror and Monstrous War-Leeches) and the black sweepers Choking Miasma and Drag to the Bottom, both of which need {B}{B} on a manabase that is 10 black sources of 17 and whose -2/-2 kills this list's Vohar x2 (1/2), Eerie Soultender x2 (3/1) and Aether Channeler (2/1). Mitigating would mean re-weighting the manabase toward black on a pair whose whole point is that BOTH halves of its kickers ({U} on Monstrous War-Leech, {1}{U} on Tribute to Urborg) are live. CORRECTED after the grill: an earlier version named Academy Wall x2 in the sideboard as the substitute, which was wrong - a 0/5 with neither flying nor reach does not answer a wide board of fliers. The honest position is that wide boards are conceded outright and the sideboard answers the EVASION half of the problem with Tolarian Geyser x2 instead.
  OK        single_large_threat: Cut Down, Rona's Vortex, Tribute to Urborg, Ertai Resurrected
  OK        noncreature_permanents: Aether Channeler, Rona's Vortex, Ertai Resurrected
  OK        stack: Ertai Resurrected
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census: gy_hate = 0). There is no card to mitigate with. This deck is the one most exposed to the counterfactual - its entire plan is a stocked graveyard - so the absence is load-bearing rather than incidental, and it is a property of the environment rather than a choice this build made.
```
- No WARN-tier structural flag is raised on the final list - curve, assembly, goldfish and coverage all return PASS. Recording what was repaired across two rounds: (1) the pre-repair list carried a CURVE WARN ('share of nonland cards with MV > 5 is 14%, max 10%') caused by Tolarian Terror x2 and Writhing Necromass x1 at printed mana value 7. Rather than accept it on the 'printed cost is not real cost' argument - which the grill had already refuted twice elsewhere in this build set - Writhing Necromass was cut. (2) The grill then measured Tolarian Terror directly and found its mean cost is 4.5 at turn 4 and 3.9 at turn 5, refuting the same argument a third time, so a second copy was cut as well. MV>5 is now 1 of 23 = 4.3%, and the threats-band deviation was re-grounded on a composition count that reproduces rather than on the discount claim.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Vohar's '{T}: Draw a card, then discard a card' converts a surplus land in hand into a fresh card every single turn at zero mana cost, and discarding is not a downside here - it is how the graveyard fills. Beyond that, Rona's Vortex and Tribute to Urborg both have kicker modes that are strictly better uses of extra mana ({2}{B} to bottom a permanent instead of bouncing it; {1}{U} to add -1/-1 per instant and sorcery in the yard), so excess lands upgrade the interaction suite rather than sitting idle. |
| screw | mitigation | 11 of 23 nonland cards cost 2 or less, and 4 of those cost one mana (Cut Down x2, Rona's Vortex x2). The goldfish sim on the FINAL list returns 84.2% keepable hands, 88.1% on three lands by turn 3, and a 94.0% turn-2 play rate. Every kicker in the deck is DECLINABLE, so a two-land hand still casts Monstrous War-Leech's base {3}{B}, Tribute to Urborg's base {1}{B} and Rona's Vortex's base {U} on schedule. Honest limit, conceded to the grill: 'degrades gracefully on colour' is generous - a hand of two Swamps casts none of Rona's Vortex {U}, Founding the Third Path {1}{U} or Vohar {U}{B}. |
| decapitation | mitigation | The payoff role holds 7 copies across 5 names (Sheoldred's Restoration x2, Monstrous War-Leech x2, Tolarian Terror, Haughty Djinn, The Cruelty of Gix) - COUNT CORRECTED after the grill, which caught that the earlier text said '7 across 4' and then enumerated 6. Assembly p=0.86 by turn 5, and the five read four DIFFERENT properties of the same graveyard: instants and sorceries (Terror, Djinn), greatest mana value (War-Leech), any creature card with no mana-value cap and from EITHER graveyard (Cruelty III), and any creature card from your own (Restoration). Tolarian Terror additionally carries 'Ward {2}', so a copy that resolves is harder to answer than one that was countered. |
| gas-out | mitigation | Vohar x2 draw a card every turn for zero mana; Founding the Third Path chapter III ('Exile target instant or sorcery card from your graveyard. Copy it. You may cast the copy') re-buys a spell the deck already spent; Eerie Soultender x2 convert their own corpses into a creature card in hand for {4}{B}; The Cruelty of Gix chapter II is an unrestricted 'Search your library for a card, put that card into your hand'; and Sheoldred, the Apocalypse turns each of those draws into 2 life while taxing the opponent's. The deck's late-game top-decks are graveyard-discounted threats that get cheaper the longer the game runs. |
| raced | accepted | This deck can lose to a fast clock and mitigating it would cost the deck its identity. It runs no sweeper and no lifegain, its blockers are a 1/2 Vohar and a 3/1 Eerie Soultender, and its 57.0% turn-1 play rate reflects a curve built to deploy a discounted 5/5 on turn 4-5 rather than to trade early. The cards that would fix it - Academy Wall's 0/5 defender, Coral Colony's 1/4 - are DEFENDERS, and the locked lens is the proactive clock; adding them converts this into the interaction-dense build the judge ranked third precisely because it 'under-delivers a turn-5 clock for an aggressor'. CORRECTED after the grill: an earlier version named Academy Wall x2 as the sideboard substitute. That was wrong - a 0/5 with neither flying nor reach blocks none of the 41 fliers among the cube's 51 evasion cards, so it discharged this concession onto a card blank against 80% of the class. The sideboard answer is now Tolarian Geyser x2 ('Return target creature to its owner's hand. Draw a card'), which answers a resolved flier of any size and replaces itself, plus Extinguish the Light x2. The ground half of a race remains genuinely conceded. |
| disruption-fizzle | mitigation | The critical turn is a discounted Tolarian Terror or a kicked Monstrous War-Leech. If either is answered, nothing has been spent from the graveyard - both are CAST-side payoffs that read the yard without consuming it, so the count is unchanged and the NEXT such card arrives at exactly the same discount. CORRECTED after the grill: with Tolarian Terror now at x1, this redundancy runs across NAMES rather than copies - Monstrous War-Leech x2 and Haughty Djinn read the same graveyard through different clauses. That is still the structural advantage of the cast side over reanimation: an answered Sheoldred's Restoration costs you a card and leaves its target stranded, whereas an answered Tolarian Terror costs nothing a War-Leech does not recover. Tolarian Terror's 'Ward {2}' also taxes the answer itself. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Urborg Lhurgoyf | Its base cost is {1}{G} - green is off-colour here, and the kicker is what mills, not the base cast. Unlike Sheoldred's Restoration or Monstrous War-Leech there is no in-colour mode at all. |
| Cosmic Epiphany | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' for {4}{U}{U}. A six-mana sorcery that does nothing to the board; Tolarian Terror reads the same count and is a 5/5 body for less mana as the yard fills. |
| Defiler of Dreams | 'Whenever you cast a blue permanent spell, draw a card' - a real engine, but the count is what matters: a self-mill list runs mostly instants, sorceries and black creatures, so few of its own cards are BLUE PERMANENT spells. Costs a rare slot for a narrow trigger. |
| Silver Scrutiny | 'Draw X cards' for {X}{U}{U}. Raw card draw with no board impact and no graveyard interaction; a rare slot better spent on a payoff or a body. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost {2} more' - symmetric card draw that also taxes THIS deck's own five-and-six-drops. |
| The Phasing of Zhalfir | Chapter III 'Destroy all creatures' is a sweeper this deck's own 5/5s and 6/6s die to, and chapters I-II only phase out one permanent each; it also costs a rare slot. |
| Vesuvan Duplimancy | 'Whenever you cast a spell that targets only a single artifact or creature you control, create a token that's a copy' - this list's spells target OPPONENTS' creatures (removal) or graveyards, so the trigger is nearly blank. |
| Vodalian Hexcatcher / Vodalian Mindsinger | Merfolk payoffs; a self-mill list runs 2-4 Merfolk at most (Vohar), so the tribal clauses are near-blank, and both cost rare slots. |
| Aether Channeler | A flexible 2/1 ETB, but none of its three modes interacts with the graveyard, and it costs a rare slot in a build whose 5 slots are contested by payoffs and fat. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' - the pool's mana-value-1 instants and sorceries in these colours are Cut Down, Bone Splinters, Rona's Vortex and Shore Up; a 4-mana 3/3 that tutors a one-mana removal spell is a poor rate at competitive power. |
| Shadow Prophecy | 'Domain - Look at the top X cards of your library, where X is the number of basic land types among lands you control.' A U/B manabase reaches 2 basic land types (Island, Swamp), so it looks at 2, takes up to 2 and bins ZERO - it is not a self-mill card here. |
| Soaring Drake / Tidepool Turtle / Haunting Figment / Volshe Tideturner | Vanilla or near-vanilla blue bodies with no graveyard interaction; the creature slots are contested by cards that mill, read the yard, or come back from it. |
| Braids's Frightful Return | A free sacrifice outlet and a raise-dead, but this deck's graveyard-filling is MILL-based rather than sacrifice-based, so chapter I competes with Bone Splinters for the same bodies while the mill package fills the yard faster and without spending one. |
| Gibbering Barricade | A repeatable sacrifice outlet, but Coral Colony and Academy Wall already occupy the defender slots and both of those FILL the graveyard rather than merely consuming bodies. |
| Protect the Negotiators / Ertai's Scorn | Conditional counterspells - Ertai's Scorn only discounts when an opponent cast two spells in a turn, and Protect the Negotiators' tax scales with creatures you control, which a self-mill deck deploys late. Essence Scatter and Negate are the unconditional versions. |
| Phyrexian Espionage | 'Draw two cards' for three mana, kicked to add a discard. Card draw without selection in a deck that wants to choose WHICH cards reach the graveyard; Impulse and Vohar do the job with control over the outcome. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.49 adj [MV 2.87 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  58.6%  prod  58.8%  gap  -0.2pp  [OK]
  U  demand  41.4%  prod  58.8%  gap -17.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (need 40)
[PASS] 1b sideboard size — 10 (need 10)
[PASS] 2 exact-name membership — all 24 distinct names found
[PASS] 3 copy limits — all within per-rarity caps (basics exempt)
[PASS] 3b rare/mythic cap (<=5) — 5: Aether Channeler x1, Ertai Resurrected x1, Haughty Djinn x1, Sheoldred, the Apocalypse x1, The Cruelty of Gix x1
[PASS] 4 colour usability (best_mode) — all nonland cards usable in UB; off-cast modes: none
[PASS] 5 splash cap — splashed cards: none; per-splash-colour counts {} (splash_colors=[])
[PASS] 5-selftest validator rejects a known-bad card (Serra Paragon) — fixture correctly identified as an illegal splash
```
