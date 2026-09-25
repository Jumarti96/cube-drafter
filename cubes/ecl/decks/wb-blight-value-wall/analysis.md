---
deck_name: "wb-blight-value-wall"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-11T18:41:39Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
9x Plains                   Land — basic
5x Swamp                    Land — basic
2x Evolving Wilds           Land — basic fetch
2x Sunlit Marsh             Land — WB dual, enters tapped
```

### CREATURES (12)

```
CMC  Card                         Qty   Color  Role                                                       Rar
3    Moonlit Lamenter             x2    W      Engine — converts -1/-1 counters into cards                U
4    Nightmare Sower              x2    B      Carrier — 2/3 flying lifelink; the mainboard's only evasion U
4    Reaping Willow               x2    BW     Carrier — enters 1/4 lifelink; counters convert to reanimation U
5    Blighted Blackthorn          x2    B      Carrier — 3/7 assigns 8 under Bark; draws on enter/attack  C
5    Slumbering Walker            x1    W      Carrier — enters 2/5, grows to 4/7; end-step recursion     R
6    Sun-Dappled Celebrant        x2    W      Payoff — Bark-independent 5/6 clock; vigilance attacks and blocks C
7    Curious Colossus             x1    W      Payoff — Bark-independent finisher; neuters the opposing board M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                         Qty   Color  Role                                                       Rar
1    Requiting Hex                x2    B      Interaction — 1-mana removal for mv<=2                     U
2    Bogslither's Embrace         x2    B      Interaction — unconditional exile                          C
3    Crib Swap                    x2    W      Interaction — instant-speed unconditional exile            U
3    Pyrrhic Strike               x1    W      Interaction — modal artifact/enchantment + mv>=3 creature  U
4    Darkness Descends            x1    B      Interaction — asymmetric sweeper                           U
```

### OTHER SPELLS (2)

```
CMC  Card                         Qty   Color  Role                                                       Rar
2    Bark of Doran                x2    W      Payoff — converts toughness to damage                      U
```

## SIDEBOARD (10)

```
Card                         Qty   Color  Role / When to board in                                        Rar
Keep Out                     x2    W      vs fliers (they tap to attack) / enchantments (21)             C
Nameless Inversion           x2    B      vs cheap evasive creatures — instant -3 toughness              U
Liminal Hold                 x2    W      vs artifacts+enchantments (32) — exiles any nonland permanent  C
Dose of Dawnglow             x1    B      vs removal-heavy decks — unconditional reanimation, 12 of 12 copies U
Rooftop Percher              x2    C      vs graveyard (39 cube cards); a 3/3 flier vs evasion (41)      C
Bloodline Bidding            x1    B      vs sweepers/grind — naming Treefolk rebuys 8 of 12 creature copies R
```

## ANALYSIS

### DECK IDENTITY

WB toughness-matters control. There is no Doran here — green was cut so the mana base could be two colours, and only 4 of 18 lands enter tapped as a result. The deck holds the ground behind large, lifelinking bodies and answers threats one for one with eight removal spells, then converts the stalled board into a kill with Bark of Doran, which makes an equipped creature assign combat damage equal to its toughness rather than its power: a Bark'd Blighted Blackthorn assigns 8. Because Bark is capped at two copies the deck carries two independent backups — Curious Colossus reduces the opposing board to abilityless 1/1s, and Sun-Dappled Celebrant is a 5/6 that attacks and still blocks on vigilance. Note that three of the carriers do NOT arrive at their printed size: Slumbering Walker enters as a 2/5, and Reaping Willow and Moonlit Lamenter each enter as a 1/4. That is by design — the -1/-1 counters they enter with are the fuel for Moonlit Lamenter's draw and Reaping Willow's and Slumbering Walker's recursion, and because -1/-1 counters reduce power and toughness equally, no creature ever loses its Bark eligibility.


### HOW THIS DIFFERS FROM THE BGW BUILD

Same archetype, different kill. The BGW build wins with Doran's +X/+X pump turning a 0/4 into a
4/8; this one has no Doran and no pump at all. It wins because `Bark of Doran` is enough on its own
when the bodies are natively large:

| Creature | Arrives as | + Bark (+0/+1) | Assigns |
|---|---|---|---|
| Blighted Blackthorn | 3/7 | 3/8 | **8** |
| Sun-Dappled Celebrant | 5/6 | 5/7 | **7** |
| Slumbering Walker | 2/5, grows to 4/7 | 2/6 → 4/8 | **6 → 8** |
| Reaping Willow | 1/4 lifelink | 1/5 | **5, lifelinked** |
| Moonlit Lamenter | 1/4 | 1/5 | **5** |

The trade is explicit: BGW gets the bigger numbers and pays 8 tapped lands for a three-colour base;
WB gets 4 tapped lands, a 92% three-lands-by-turn-3 rate, and a slower clock.

### THE TWO-CARD PROBLEM, AND WHY IT DROVE THE WHOLE BUILD

`Bark of Doran` is an uncommon, so it is hard-capped at **2 copies in 40 cards**. A deck whose only
win condition is 2 cards is not a deck. The shape judge chose this build over two rivals on exactly
that question — asked how each wins having drawn zero Barks, one rival "cannot win — a draw-go
stall it wins only if the opponent decks itself," and the other "grinds past turn 8 to no
conclusion." This build answers it three ways:

1. **Curious Colossus** — *"each creature target opponent controls loses all abilities, becomes a
   Coward in addition to its other types, and has base power and toughness 1/1."* A 7/7 that also
   turns every blocker and every flier into a vanilla 1/1.
2. **Sun-Dappled Celebrant ×2** — a 5/6 with vigilance clocks in four swings while never tapping
   down defensively, and convoke lets the deck's idle blockers pay for it.
3. **Bark is an Equipment.** Creature removal cannot answer it at all; it stays on the battlefield
   and re-equips for {1}.

Three separate cards must be answered, not one. That redundancy is what makes the assembly gate
pass at **p = 0.826** without leaning on any judgement call.

### BLIGHT AS AN ASSET

Seven cards in the list put -1/-1 counters on a creature this deck controls as an additional cost
(`Bogslither's Embrace` ×2 mandatory, `Requiting Hex` ×2, `Pyrrhic Strike` ×1 and
`Blighted Blackthorn` ×2 optional). **5 of 12 creature copies convert those counters into value** —
`Moonlit Lamenter` ×2 draws a card per counter removed, `Reaping Willow` ×2 and `Slumbering Walker`
×1 reanimate. And because -1/-1 counters cut power and toughness equally, the toughness-minus-power
gap that Bark needs is never lost.

`Darkness Descends` is the sharpest case: *"Put two -1/-1 counters on each creature"* looks
symmetric and is not — **12 of 12** of this deck's creature copies survive it with their Bark
eligibility intact, while the cube's aggressive decks are built on 1/1s and 2/2s.

**The honest cost, disclosed:** the draw engine and the damage output are the same resource. Every
card `Moonlit Lamenter` draws costs it 1 toughness, which is exactly 1 Bark damage; every card
`Blighted Blackthorn` draws costs 2. The `flood` and `gas-out` plans both spend from the win
condition, and that is a real tension, not a free roll.

### KEY COUNTS

| Claim | Count against this list |
|---|---|
| Bark of Doran's damage swap | live on 12 of 12 creature copies once equipped (its own +0/+1 lifts Curious Colossus to 7/8) |
| Darkness Descends asymmetry | 12 of 12 creature copies survive two -1/-1 counters |
| Blight costs are fed | 7 cards supply counters; 5 of 12 creatures convert them to value |
| Evasive bodies | 2 of 12 (Nightmare Sower ×2) — was 0 before the grill |
| Recursion reach — STATED WEAKNESS | Reaping Willow ("mana value 3 or less") reaches 2 of 12; Slumbering Walker ("power 2 or less") reaches 4 of 12; **neither reaches any payoff or the 3/7 Blackthorn** |
| Bloodline Bidding naming Treefolk | returns 8 of 12 creature copies, including a payoff |
| Dose of Dawnglow | unconditional — reaches 12 of 12 |
| Creature curve | only 2 of 12 creature copies cost 3 or less, so Bogslither's Embrace is often still its 5-mana version on turn 4 |
| Thoughtweft Imbuer rejected | its trigger scales with Kithkin; this list runs 0 Kithkin of 22 nonlands |

### WHAT THE GRILL CHANGED

Four blocking findings survived verification, and all four were real:

- **`Winnowing` was cut.** *"Each player sacrifices all other creatures they control that don't
  share a creature type with the chosen creature"* — against a mono-tribal board **every** choice
  spares **everything**. It is a zero-for-one, not a one-for-one, and this is a Lorwyn cube with
  eight tribes of 13+ members among 168 creatures.
- **`Sun-Dappled Celebrant` went to 2 copies.** The assembly gate had been passing only because a
  single copy was hand-weighted as a payoff after a FAIL. Celebrant is a common run at 1 of its 2
  legal copies — nothing blocked the second, and taking it moved p from 0.767 to 0.826.
- **`Nightmare Sower` ×2 came in.** The deck had **0 of 12** evasive bodies against the cube's
  largest threat class (evasion, 41 cards, 15.8%), and the accepted failure mode claimed that
  fixing it meant cutting carriers. False: Nightmare Sower is *"Flying, lifelink"* on a 2/3, so it
  is the evasion answer **and** a Bark carrier at once.
- **`Adept Watershaper` left the sideboard.** *"Other **tapped** creatures you control have
  indestructible"* — this deck blocks, and blockers do not tap.

### WHAT BEATS THIS DECK

A fast start, and a resolved artifact or enchantment. The curve is top-heavy with **zero
acceleration**, so the goldfish keepable rate sits at 78.5% against an 80% target — accepted,
because the top end *is* the Bark-independent win condition and every cheaper alternative tested
scored worse. And maindeck answers to noncreature permanents come down to a single `Pyrrhic
Strike`, against a cube carrying 32 artifacts and enchantments; the sideboard's `Liminal Hold` ×2
is where that matchup is actually won.


### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (22 nonland):  1:2  2:4  3:5  4:5  5:3  6:2  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Sun-Dappled Celebrant@0.7, Sun-Dappled Celebrant@0.7) → p=0.83 (need ≥ 0.75)
  PASS  carrier: 9 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 78% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 29%  T2 74%  T3 94%
Coverage:  [PASS]
  OK        wide_boards: Darkness Descends, Curious Colossus
  OK        single_large_threat: Bogslither's Embrace, Crib Swap, Pyrrhic Strike
  OK        noncreature_permanents: Pyrrhic Strike
  CONCEDED  stack: No card in W/B in this pool counters a spell; this deck answers resolved permanents with exile effects instead of contesting the stack.
  CONCEDED  graveyard: No graveyard hate exists in W/B in this pool at common or uncommon outside the colourless Rooftop Percher, which carries the answer from the sideboard rather than costing a maindeck slot.
```

- GOLDFISH WARN accepted (78.5% keepable vs the 80% floor). The top end — Curious Colossus at 7 and Sun-Dappled Celebrant x2 at 6 — IS the Bark-independent win condition the shape judge selected this build for. Four configurations were tested: shipped 0.785; cutting Pyrrhic Strike for a 19th land 0.764; Crib Swap to one copy for a 19th land 0.764; reverting a Celebrant to Prideful Feastling 0.799, which buys 1.4pp by re-breaking the assembly HARD gate. None clears 80%, so the flag is the price of the plan rather than a fixable defect. Three-lands-by-turn-3 holds at 92%, the highest of the three builds, so this is a hand-quality flag and not a mana defect.

- CURVE PASS: the Control band requires a 0-2 mana-value share of at least 25% of nonland cards; this list is at 6 of 22 = 27.3%.

- ASSEMBLY: initially FAILED at 3 payoff copies (p=0.69) and was first patched by hand-weighting a single Sun-Dappled Celebrant as a payoff. The grill correctly identified that as clearing a hard gate with a chosen constant rather than with cards. Repaired properly by running the second legal copy of that common: effective 4.4, p=0.8259, and the PASS now survives even at weight 0.5 per copy.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana becomes cards or bodies: Moonlit Lamenter x2 ('{1}{W}, Remove a counter from this creature: Draw a card'), Reaping Willow x2 ('{1}{W/B}, Remove two counters: Return target creature card with mana value 3 or less from your graveyard to the battlefield'), Blighted Blackthorn x2 drawing on every enter and attack, and Bark of Doran's Equip {1}. The top end at 6, 6 and 7 mana is itself flood insurance — this deck wants to reach eight lands. Disclosed cost: each Lamenter draw removes 1 toughness, which is 1 Bark damage. |
| screw | mitigation | Cutting green is the mitigation. Only 4 of 18 lands enter tapped (Sunlit Marsh x2 'This land enters tapped'; Evolving Wilds x2 fetch a basic tapped) against 8 of 17 in the three-colour build, and Evolving Wilds x2 fix a colour-screwed draw. Requiting Hex at {B} and Bark of Doran at {1}{W} are real one- and two-mana plays. The goldfish simulation reports 92% three-lands-by-turn-3, the highest of the three builds. |
| decapitation | mitigation | The kill is deliberately three cards, not one. Bark of Doran x2 is an Artifact - Equipment, so creature removal never answers it — it stays on the battlefield and re-equips for {1}. Curious Colossus wins with no Bark at all ('each creature target opponent controls loses all abilities... and has base power and toughness 1/1'). Sun-Dappled Celebrant x2 is a 5/6 vigilant clock needing no equipment. From the sideboard, Bloodline Bidding ('Choose a creature type. Return all creature cards of the chosen type from your graveyard to the battlefield') rebuys 8 of 12 creature copies by naming Treefolk. |
| gas-out | mitigation | 7 of 22 nonland cards refuel after resolving: Blighted Blackthorn x2 draws on every enter and attack, Moonlit Lamenter x2 converts each -1/-1 counter into a card, and Reaping Willow x2 plus Slumbering Walker x1 rebuy creatures from the graveyard. Lifelink on Reaping Willow x2 and Nightmare Sower x2 buys the turns those engines need. Stated limit: the recursion reaches only 2 of 12 (Willow) and 4 of 12 (Walker) creature copies and no payoff, which is why Dose of Dawnglow (unconditional, 12 of 12) sits in the sideboard. |
| raced | mitigation | Upgraded from an acceptance after the grill proved the acceptance false. Nightmare Sower x2 is 'Flying, lifelink' on a 2/3 — it blocks the cube's largest threat class (evasion, 41 cards, 15.8%), gains life while doing it, and is itself a Bark carrier since its toughness exceeds its power, so it costs the deck no carrier density. Curious Colossus additionally strips flying from every opposing creature by making them base 1/1s with no abilities, and Reaping Willow x2 lifelink stabilises the life total. Sideboard adds Rooftop Percher x2 (a 3/3 flier that also hits graveyards) and Keep Out x2 ('4 damage to target tapped creature' — attacking fliers are tapped). |
| disruption-fizzle | mitigation | The critical turn is the Bark equip plus attack, and it is the least fragile version available: Bark is an Equipment, so a removal spell in response costs one creature while the Bark survives to re-equip next turn. Crib Swap x2 (instant) and Bogslither's Embrace x2 clear a blocker before the attack. If the whole attack is broken up, Curious Colossus and Sun-Dappled Celebrant x2 close on printed power without the combination reassembling. The pool contains no counterspells in W/B, so the interaction played around is removal, not the stack. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Doran, Besieged by Time | OUT OF COLOUR BY CHOICE. Doran is the archetype's namesake and its best payoff, but he costs {1}{W}{B}{G}; taking him means a third colour whose only free WB dual is a single tapped common. This build trades him for a two-colour base with 4 tapped lands instead of 8. He is the entire point of the sister deck bgw-doran-beatdown. |
| Winnowing | CUT IN REPAIR — RARE. 'Each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control.' Against a mono-tribal board every possible choice spares the whole board, so it is a zero-for-one, not a one-for-one; this is a Lorwyn cube with 8 tribes of 13+ members out of 168 creatures, which makes tribal boards the common case rather than the exception. |
| Prideful Feastling | CUT IN REPAIR. Its role was the changeling anchor that made Winnowing one-sided; with Winnowing gone it is a 2/3 lifelink blocker with gap+1, and the slot was needed for the evasion answer the deck had none of. |
| Adept Watershaper | RARE CUT IN REPAIR. 'Other TAPPED creatures you control have indestructible' — this deck blocks, and blockers do not tap, so it protects 0 creatures in the deck's actual stance; it also cannot protect Sun-Dappled Celebrant, which has vigilance and so does not tap when attacking. |
| Twilight Diviner | RARE CUT IN REPAIR. Its token-copy trigger requires creatures entering from a graveyard, and this deck's recursion can only return 4 of 12 creature copies — a rare slot spent copying a 2/5 once per turn. |
| Thoughtweft Imbuer | STRONG-FIT UNCOMMON, ONE TIER BELOW. Gap+5 is the largest body in W/B and it assigns 6 under Bark, but its only ability reads 'where X is the number of Kithkin you control' and this list runs 0 Kithkin of 22 nonland cards. |
| Emptiness | MYTHIC, RARE-BUDGET CANDIDATE NOT TAKEN. 3/5 gap+2 with two strong modal ETBs and evoke {W/B}{W/B}, but its reanimation mode is capped at 'mana value 3 or less', which reaches only 2 of 12 creature copies here — the same reach problem the build already had. |
| Gnarlbark Elm | 3/4 Treefolk whose entered counters convert to '-2/-2 until end of turn' at sorcery speed for {2}{B}; gap+1 is the smallest carrier payload and the removal is weaker than Requiting Hex at a third of the cost. |
| Tributary Vaulter | 1/3 flier, gap+2, and evasion the deck wanted — but its pump trigger targets 'another target Merfolk you control' and this list runs 0 other Merfolk; Nightmare Sower is a strictly better evasive carrier at 2/3 with lifelink. |
| Shimmercreep | 3/5 menace gap+2 with a drain scaling on 'the number of colors among permanents you control' — X is only 2 in a two-colour deck, versus 3 in the BGW build, so the same card is worth a third less here. |
| Heirloom Auntie | 4/4 entering with two -1/-1 counters is a 2/2 with gap 0 — invisible to Bark of Doran, the deck's entire kill mechanism, however good its surveil engine is. |
| Blight Rot | SIDEBOARD CONSIDERATION. 'Put four -1/-1 counters on target creature' is instant with no additional cost and kills most of the pool, but it leaves the card in the graveyard, and against a cube with 39 graveyard-interaction cards this deck prefers the unconditional exile of Bogslither's Embrace and Crib Swap. |
| Protective Response | SIDEBOARD CONSIDERATION. 'Convoke. Destroy target attacking or blocking creature' is unconditional, instant, and convoke-discounted off exactly the stalled board this deck builds; it lost the slot to Liminal Hold, which answers noncreature permanents the deck otherwise cannot touch. |
| Unbury | SIDEBOARD CONSIDERATION. Its second mode returns two creature cards sharing a type, and 8 of 12 creature copies here are Treefolk — a two-mana instant for two cards. Lost the slot to Dose of Dawnglow, which returns to the battlefield rather than to hand. |
| Spiral into Solitude | Pacifism that upgrades to exile, but the exile mode costs {1}{W} plus blight 1 plus sacrificing the Aura, and a creature that 'can't attack or block' still triggers on-board abilities. |
| Morningtide's Light | MYTHIC. A fog plus mass blink, but it returns the exiled creatures to the battlefield tapped under their OWNERS' control — it buys one turn rather than answering anything, which a deck already winning the long game does not need. |
| Springleaf Drum | Would fix the zero-acceleration curve, but 'Tap an untapped creature you control' needs a creature and only 2 of 12 creature copies cost 3 or less — it has nothing to tap before turn 4. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.59   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.45 adj [MV 3.59 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  40.0%  prod  38.9%  gap  +1.1pp  [OK]
  W  demand  60.0%  prod  61.1%  gap  -1.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card is from the ecl mainboard or is a format-supplied basic land.
[PASS] commons/uncommons max 2 copies: no card exceeds 2 across mainboard + sideboard.
[PASS] rares/mythics max 1 copy: all three are singletons.
[PASS] USER CONSTRAINT max 5 rare/mythic cards across MB+SB: 3 of 5 used - Curious Colossus and Slumbering Walker (mainboard), Bloodline Bidding (sideboard). The cap is a maximum, not a quota; the two remaining slots were deliberately left unspent after the grill showed the two rares originally occupying them (Adept Watershaper, Twilight Diviner) were worse than the commons and uncommons that replaced them.
[PASS] Basic lands are format-supplied and exempt from copy limits: Plains x9, Swamp x5.
[PASS] Colour usability: every nonland card returns a usable mode under effective_cost.best_mode for core_colors W/B; no splash declared.
```