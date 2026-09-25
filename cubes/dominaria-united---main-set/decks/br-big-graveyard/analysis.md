---
deck_name: "br-big-graveyard"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-08-18T21:09:14Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Geothermal Bog         BR dual (Swamp Mountain), enters tapped
  6x Mountain               R
  1x Sulfurous Springs      BR painland, enters untapped
  9x Swamp                  B
```

### CREATURES (14)

```
CMC  Card                   Qty   Color  Role                                           Rar
  1  Cult Conscript         x2    B      Threat — 2/1 that returns from the graveyard … U
  1  Phoenix Chick          x2    R      Threat — 1/1 flying haste that returns from t… U
  2  Goblin Picker          x2    R      Engine — {R},{T}, Discard a card: Draw a card… C
  4  Defiler of Flesh       x1    B      Threat — 4/4 menace; black permanent spells c… R
  4  Monstrous War-Leech    x2    B      Payoff — P/T each equal to the greatest mana … U
  5  Hurler Cyclops         x1    R      Engine — the deck's only repeatable sacrifice… U
  6  Tyrannical Pitlord     x1    B      Threat — 6/6 flying trample; mana value 6 as … R
  7  Writhing Necromass     x2    B      Payoff — 5/5 deathtouch costing {1} less per … C
  8  Molten Monstrosity     x1    R      Payoff — mana value 8, the deck's best War-Le… C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                   Qty   Color  Role                                           Rar
  1  Bone Splinters         x2    B      Engine/Removal — sacrifice a creature (bin fo… C
  1  Cut Down               x2    B      Interaction — 1-mana instant removal           U
  2  Lightning Strike       x1    R      Interaction — 3 damage any target, including … C
  2  Thrill of Possibility  x2    R      Engine — discard a fatty, draw two, at instan… C
```

### OTHER SPELLS (2)

```
CMC  Card                   Qty   Color  Role                                           Rar
  4  The Elder Dragon War   x1    R      Engine/Sweeper — read ahead to II for a mass … R
  5  The Cruelty of Gix     x1    B      Payoff — chapter III returns a creature card … R
```

## SIDEBOARD (10)

```
Card                   Qty   Color  Role / When to board in                                      Rar
Smash to Dust          x2    R      Answer — modal: destroy artifact / destroy defender / 1 dam… C
Extinguish the Light   x2    B      Removal — unconditional destroy creature or planeswalker | … C
Flowstone Infusion     x2    R      Removal — {R} instant, target creature gets +2/-2 | vs x/1 … C
In Thrall to the Pit   x2    R      Removal/Reach — gain control and untap; kicked, sacrifice i… C
Hurloon Battle Hymn    x2    R      Removal — {2}{R} INSTANT, 4 damage to a creature or planesw… U
```

## ANALYSIS

### DECK IDENTITY

Rakdos grave-scaled beatdown. This is the fourth reading of 'the bin' in this cube and the only one where the payoffs count cards rather than lands: Writhing Necromass costs {1} less for each creature card in your graveyard, and Monstrous War-Leech's power and toughness are each the greatest mana value among cards there. The two pull in opposite directions - one wants many cheap creatures binned, the other wants one expensive card - and the deck resolves that with two commons that are both, because they are creature cards with enormous printed costs it never intends to pay: Writhing Necromass at mana value 7 and Molten Monstrosity at mana value 8. Discard either one to Thrill of Possibility and War-Leech becomes a 7/7 or 8/8 for four mana while the Necromass in hand gets a discount. Goblin Picker, Thrill of Possibility, Bone Splinters, Hurler Cyclops and The Elder Dragon War choose which fatty goes to the yard; The Cruelty of Gix brings one back from ANY graveyard; and Phoenix Chick and Cult Conscript return themselves for free, which is why a sweeper against this deck is closer to a favour than an answer.

### TWO PAYOFFS THAT WANT OPPOSITE THINGS

This deck has a design problem baked into its two best cards:

- **Writhing Necromass** — `costs {1} less to cast for each creature card in your graveyard`. Wants **many** creature cards binned. A count.
- **Monstrous War-Leech** — `power and toughness are each equal to the greatest mana value among cards in your graveyard`. Wants **one expensive** card binned. A maximum.

Those pull in opposite directions. A graveyard full of one-drops makes Necromass free and War-Leech a 1/1. A graveyard holding a single six-drop makes War-Leech a 6/6 and Necromass still cost seven.

The resolution is two **commons** that are both at once, because they are creature cards with printed costs the deck never intends to pay:

| Card | Printed cost | Mana value | Creature? |
|---|---|---|---|
| Writhing Necromass | `{6}{B}` | **7** | yes |
| Molten Monstrosity | `{7}{R}` | **8** | yes |

Discard a Molten Monstrosity to Thrill of Possibility on turn two and you have simultaneously made Monstrous War-Leech an **8/8 for four mana** and discounted Writhing Necromass by one. One card, both payoffs. That is the whole deck.

The honest limit, and it's worth stating: one discard delivers 100% of the War-Leech job and 25% of the Necromass job — the discount wants four creature cards, and one discard supplies one. Necromass reaches `{2}{B}` at four binned, `{1}{B}` at five.

### THE MISTAKE THIS DECK ALMOST MADE

The first version of this list cut Molten Monstrosity from consideration entirely, on two written grounds. Both were false:

- *"printed mana value of 7"* — it is `{7}{R}`, mana value **8**, the highest of any B/R-castable nonland card in the cube
- *"only feeds one payoff"* — its type line is `Creature — Hellion`, so a binned copy counts for Writhing Necromass's discount too

It is the single best card in the pool for this deck, it is a common, and it costs nothing against the five-card rare budget. It went in during the Phase 9 repair.

### CARDS THAT LOOK LIKE PAYOFFS BUT ARE ANTI-SYNERGIES

Three cards read as perfect fits and are not. All three fail the same test: **they take cards out of the graveyard**.

- **Squee, Dubious Monarch** — recasting from the yard costs `exiling four other cards from your graveyard`. That shrinks the Necromass discount *and* can exile the one high mana value War-Leech is copying. Rejected from the start.
- **Sheoldred's Restoration** — `Return target creature card from your graveyard to the battlefield`. Its best target here is the binned mana-value-7 Necromass, and reanimating it drops a War-Leech from 7/7 to whatever is next. It also always costs life, because its gain-life clause sits behind a `{2}{W}` kicker no Rakdos deck can pay — 7 life on the target it most wants. **Cut during the grill**, once it was pointed out that the test had been applied to Squee and not to it.
- **The Cruelty of Gix** — chapter III has the same shape, and survives on one word: it reads *"from **a** graveyard"*, not yours. Point it at the opponent's yard and it reanimates without touching your own numbers.

### THE ENGINE SLOT IS 30% AND THAT IS THE POINT

The aggro slot band allows 0–10% for Engine. This deck runs 30%, which is the largest single band deviation across the four decks built from this cube, and it is deliberate. The band assumes threats are cast from hand at their printed cost. Here the printed cost is the thing being attacked: without discard outlets, Writhing Necromass is a seven-mana card and Molten Monstrosity an eight-mana card in a seventeen-land deck, and Monstrous War-Leech is a four-mana **0/0 that dies on resolution**.

The same logic drives the deck's one structural WARN — 13% of nonland cards sit above mana value 6, against a 10% ceiling. Those three cards are Writhing Necromass ×2 and Molten Monstrosity. A curve check that reads printed mana value cannot tell the difference between a top-end card and engine fuel. Bringing that number inside band would mean cutting the highest mana values in the list, which is identical to cutting War-Leech's power.

### THE SEQUENCING THAT DECIDES GAMES

Monstrous War-Leech is the most sequence-fragile card in any of these four decks. On an empty graveyard it is a **0/0 and dies on resolution** — not a bad card, a blank one. The rule is absolute:

> **Bin first, cast War-Leech second. Never the reverse.**

A related rule follows from the anti-synergy section: **reanimate last**. If you have a mana-value-7 Necromass in the yard and a War-Leech on the board, The Cruelty of Gix pointed at your own graveyard shrinks the creature you already control.

### WHY A SWEEPER IS CLOSE TO A FAVOUR

The locked build lens was "most resilient to sweepers," and here that is not a defensive posture — it is the same engine viewed from the other side. Phoenix Chick returns itself from the graveyard *"whenever you attack with three or more creatures"*; Cult Conscript returns for `{1}{B}` *"if a non-Skeleton creature died under your control this turn."* A board wipe satisfies Cult Conscript's condition, refunds both creatures, and puts several creature cards in the yard — which is a Necromass discount.

The one thing this deck genuinely cannot beat is graveyard hate, and it has no answer in fifty cards. BR has no graveyard-interaction card of any kind in this cube; the only functional one in the whole pool is Nemata, Primeval Warden, which is black-green. That is a forced concession, not a cheap one — every recursion card and both payoffs read the graveyard.

### THE LIFE TOTAL IS A RESOURCE THIS DECK SPENDS

Worth flagging for play: three separate sources charge life against **zero** mainboard lifegain — Defiler of Flesh at 2 life per discounted black permanent, The Cruelty of Gix chapter II at 3, and Sulfurous Springs at 1 per coloured activation. A race won on board can still be lost on life total.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (aggro):  [WARN]
  MV distribution (23 nonland):  1:8  2:5  4:4  5:2  6:1  7:2  8:1
  WARN  Above thesis turn: share of nonland cards with MV > 6 is 13% (max 10%)
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.2: Monstrous War-Leech@0.85, Monstrous War-Leech@0.85, Molten Monstrosity@0.8, The Cruelty of Gix@0.7) → p=0.84 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 6.6: Goblin Picker@0.8, Goblin Picker@0.8, Bone Splinters@0.7, Bone Splinters@0.7, The Elder Dragon War@0.8, Hurler Cyclops@0.8) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 81%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Elder Dragon War
  OK        single_large_threat: Bone Splinters, Cut Down
  CONCEDED  noncreature_permanents: BR holds no mainboard answer to an enchantment at any rarity in this cube - the only enchantment answers in the pool are Destroy Evil (white), Tear Asunder and Silverback Elder (both green). Artifacts are answered from the sideboard by Smash to Dust x2. Mainboarding an artifact-only answer would spend a slot on 15 of 271 cards while leaving the enchantment half unanswerable anyway.
  CONCEDED  stack: BR holds no counterspell in this cube, so the deck answers permanents after they resolve and otherwise attacks the hand proactively with sideboard disruption; its real defence is a turn-6 clock.
  CONCEDED  graveyard: BR has no graveyard-hate card in this cube - the only functional answer is Nemata, Primeval Warden, which is black-green. This deck is itself the graveyard deck, so the mirror is decided by which side assembles first rather than by interaction; it concedes the class and races.
```

- CURVE (WARN) - 'share of nonland cards with MV > 6 is 13% (max 10%)'. ACCEPTED rather than repaired, and the Phase 9 Challenger independently accepted the response. The three cards above mana value 6 are Writhing Necromass x2 ({6}{B}) and Molten Monstrosity x1 ({7}{R}), and all three carry printed cost reduction in their own text: 'costs {1} less to cast for each creature card in your graveyard' and 'costs {X} less to cast, where X is the greatest power among creatures you control'. The ground is precise: THE DECK NEVER PAYS PRINTED COST FOR THESE THREE CARDS ON EITHER LINE - it casts them discounted (Necromass at {2}{B} on four creature cards binned, Molten Monstrosity at {2}{R} alongside a 5-power creature) or it discards them as War-Leech fodder. A curve check that reads printed mana value is therefore measuring a number that does not occur in play. Bringing the figure inside band would mean cutting the only two mana values Monstrous War-Leech wants to copy, which is self-defeating. CORRECTED after the approval round: an earlier phrasing claimed these cards are 'more valuable discarded than cast' and that the deck does not plan to hard-cast them. That contradicted the build's own verdict that Writhing Necromass at four creature cards binned is a {2}{B} 5/5 deathtouch worth two copies. The deck plainly does plan to cast them - just never at seven or eight mana.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands are the cheapest possible discard fodder for the two repeatable outlets — Goblin Picker's '{R}, {T}, Discard a card: Draw a card' and Thrill of Possibility's additional cost both accept a land and convert it into a real card, and neither payoff is harmed because lands are mana value 0 and are not creature cards, so binning one costs nothing. Beyond that the deck has three genuine mana sinks: Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield', Phoenix Chick's '{R}{R}' recursion, and Writhing Necromass cast at full price. |
| screw | mitigation | Fourteen of the 23 nonland cards cost two mana or less (Phoenix Chick x2, Cult Conscript x2, Cut Down x2, Bone Splinters x2, Lightning Strike x2, Goblin Picker x2, Thrill of Possibility x2), eight of them at one mana, and only one of the 17 lands enters tapped. This is the lightest mana requirement of the four decks built from this cube. The goldfish simulation reports 82% keepable hands and 88% on three lands by turn three. |
| decapitation | mitigation | The deck has no key card. The payoff role runs six copies at effective 5.2, p=0.84 by turn 6, and the two most important pieces answer removal by ignoring it: Phoenix Chick and Cult Conscript both return themselves from the graveyard, and killing either is what turns on Cult Conscript's own recursion condition. The Cruelty of Gix rebuys anything else that dies, from any graveyard. CORRECTED after the grill: this entry previously also named Sheoldred's Restoration, which has been cut - reanimating our own binned fatty was stripping War-Leech's fuel to do it. |
| gas-out | mitigation | Cards that are Net-Positive or Self-Replacing: Thrill of Possibility x2 (net +1 each), Goblin Picker x2 (repeatable one-for-one rummage), The Elder Dragon War x1 (chapter II redraws everything discarded), Phoenix Chick x2 and Cult Conscript x2 (free bodies from an empty hand), The Cruelty of Gix x1 (turns a dead creature back into a live one) = 10 of 23 nonland cards. The structural point is that this deck's hand emptying is not its resources emptying: an empty hand with four creature cards in the graveyard is a {2}{B} 5/5 deathtouch and two free recurring attackers. CORRECTED after the grill, which caught the arithmetic: at FOUR creature cards binned Writhing Necromass costs {2}{B}, not {1}{B} - seven minus four is three. {1}{B} needs five. |
| raced | mitigation | The deck races rather than being raced. Eight of 23 nonland cards cost one mana, Phoenix Chick has flying and haste on turn one, and the payoffs arrive ahead of curve rather than behind it: a turn-four Monstrous War-Leech off one discarded Molten Monstrosity is an 8/8, larger than anything the fastest decks in this cube present at that point. Against decks that go wider rather than bigger, The Elder Dragon War's chapter I deals 2 damage to each creature and each opponent. The honest counterweight, raised in the grill: this deck pays its own life from three sources against zero mainboard lifegain (see pip_math.life_cost_disclosure), so a race it wins on board it can still lose on life total. |
| disruption-fizzle | mitigation | There is no chain to disrupt — every engine piece is a one-shot or a tap ability that pays its cost on activation. Killing Goblin Picker in response to its activation still leaves the card discarded and the card drawn; countering a Thrill of Possibility still leaves the discard paid. The one genuinely vulnerable line is a Monstrous War-Leech cast into removal before the graveyard is stocked, since it is a 0/0 then — which is why the play pattern is to bin a Writhing Necromass first and cast War-Leech second, never the reverse. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Squee, Dubious Monarch | RARE, and actively anti-synergistic rather than merely a budget cut: recasting it from the graveyard costs 'exiling four other cards from your graveyard', which shrinks Writhing Necromass's discount and can exile the single high-mana-value card Monstrous War-Leech is copying. It attacks both payoffs at once. |
| Ragefire Hellkite | RARE, cut for the 5-card budget. A 5/3 flier that sacrifices a creature for double strike is both a threat and a sac outlet, but at {4}{R}{R} it is a six-drop competing with Tyrannical Pitlord, which is bigger and harder to block. |
| Rivaz of the Claw | RARE. 'Once during each of your turns, you may cast a Dragon creature spell from your graveyard' — but the deck would need Dragons, and the only ones in BR are Dragon Whelp and Ragefire Hellkite, neither of which earns a slot on its own. |
| Sheoldred, the Apocalypse / Liliana of the Veil | MYTHICS. Both are individually stronger than the rares chosen, and both were declined deliberately: they are already spent in the Jund and Golgari builds from this same cube, and this deck's rare slots buy things those decks cannot (Defiler of Flesh's cost reduction on its own payoffs, The Cruelty of Gix reaching the opponent's graveyard, an untapped dual). |
| Keldon Flamesage / Rundvelt Hordemaster / Evolved Sleeper | RARES cut against the budget. Keldon Flamesage rewards instants and sorceries, of which this deck runs 8 of 23; Rundvelt Hordemaster rewards Goblins, of which it runs 2; Evolved Sleeper is a fine one-drop mana sink but does nothing for the graveyard. |
| Molten Monstrosity | Common, and the closest cut. 'This spell costs {X} less to cast, where X is the greatest power among creatures you control' plus a printed mana value of 7 makes it both a cheap late threat AND perfect War-Leech fodder — it does exactly what Writhing Necromass does. It lost the slot because Necromass's deathtouch and its creature-card-count discount tie into the second payoff as well, while Molten Monstrosity only feeds one. |
| Eerie Soultender | Uncommon. 'When this creature enters, mill three cards' is bulk graveyard filling, but random mill is strictly worse than discard for this deck: the payoffs want a SPECIFIC card in the yard (a mana value 7 for War-Leech), and mill cannot choose. |
| Balduvian Atrocity | Uncommon. Kicked it returns a creature 'with mana value 3 or less' and sacrifices it at the next end step — but this deck's reanimation targets are mana value 6 and 7, so the clause misses everything worth returning. |
| Urborg Repossession | Common. Returns a creature card from the graveyard to HAND, which for a mana-value-7 Writhing Necromass means paying full price again; Sheoldred's Restoration puts it straight onto the battlefield instead. |
| Garna, Bloodfist of Keld / Sengir Connoisseur / Hurler Cyclops | All three reward creatures dying and would be fine in a dedicated sacrifice deck. They were cut because this deck's creatures mostly go to the graveyard from HAND via discard rather than from the battlefield, so death-triggers fire far less often than the archetype name suggests. |
| Aggressive Sabotage | Common. 'Target player discards two cards' points at the OPPONENT — it fills their graveyard, not ours, which is backwards for a deck whose payoffs count our own bin. |
| Crystal Grotto | Its coloured mana costs an extra {1}, which is unaffordable on a curve with eight one-drops. Two-colour BR does not need the fixing. |
| Domain and lands-matter cards as a class | Lands are mana value 0 and are not creature cards, so they contribute nothing to either payoff. This deck's land base is 15 basics plus two duals with no typed-dual investment at all — the exact inverse of the Gruul Domain build in this same cube. |
| Smash to Dust / Extinguish the Light / Flowstone Infusion / In Thrall to the Pit / Jaya's Firenado | Sideboard considerations. In Thrall to the Pit kicked is the pick of them — gaining control of a creature and sacrificing it answers a single large threat and swings the race in one card. Jaya's Firenado is the concession to evasion, the cube's largest threat class at 51 cards / 21%, which BR blocks poorly. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.84 adj [MV 3.13 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  57.1%  prod  64.7%  gap  -7.6pp  [OK]
  R  demand  42.9%  prod  47.1%  gap  -4.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card drawn from the cube's mainboard
[PASS] commons / uncommons: maximum 2 copies (combined mainboard + sideboard)
[PASS] rares / mythics: maximum 1 copy
[PASS] maximum 5 rare+mythic cards across both boards: 5 used - Defiler of Flesh (R), Sulfurous Springs (R), The Cruelty of Gix (R), The Elder Dragon War (R), Tyrannical Pitlord (R)
[PASS] basic lands: unlimited, rarity-exempt (format-supplied)
[PASS] mainboard = 40 cards; sideboard = 10 cards
[PASS] colour usability: every nonland card usable within core colours BR (no splash)
```