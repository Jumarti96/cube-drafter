---
deck_name: "wb-blight-fueled-reanimator"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-10T03:03:11Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  9x Swamp                    Land
  5x Plains                   Land
  2x Evolving Wilds           basic fetch / fixing
  2x Sunlit Marsh             WB dual
```

### CREATURES (16)

```
CMC  Card                                       Qty   Color Role                                           Rar
  2  Abigale, Eloquent First-Year               x1    BW    2-mana evasive lifelink; grants flying/first … R
  2  Scarblade Scout                            x2    B     mill 2 to stock the yard; lifelink; MV2/power… C
  3  Moonglove Extractor                        x2    B     MV3 and power 2 (legal for both reanimators) … C
  3  Retched Wretch                             x2    B     4/2 that returns itself once it carries a -1/… U
  3  Twilight Diviner                           x1    B     copies every graveyard-sourced arrival; surve… R
  4  Gutsplitter Gang                           x2    B     6/6 and a free repeatable blight 2 each turn … U
  4  Reaping Willow                             x2    BW    repeatable MV<=3 reanimator on a 3/6 lifelink… U
  5  Blighted Blackthorn                        x1    B     repeatable blight 2 on enter AND each attack,… C
  5  Eirdu, Carrier of Dawn // Isilu, Carrier … x1    W     5/5 flying lifelink finisher, convoke, flips … M
  5  Slumbering Walker                          x1    W     free end-step reanimator for power<=2          R
  6  Emptiness                                  x1    BW    2-mana evoke reanimate (WW mode)               M
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                                       Qty   Color Role                                           Rar
  2  Bogslither's Embrace                       x2    B     2-mana unconditional exile; its blight 1 is e… C
  2  Nameless Inversion                         x1    B     instant +3/-3 removal                          U
  3  Crib Swap                                  x2    W     instant unconditional exile                    U
  5  Dose of Dawnglow                           x1    B     the only UNCAPPED reanimation; instant speed,… U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                        Rar
Spiral into Solitude                       x2    W     Toughness-blind removal — vs the 34 of 168 di… C
Blight Rot                                 x2    B     Instant removal — vs evasive fliers (41 evasi… C
Pyrrhic Strike                             x2    W     Artifact/enchantment removal + large-creature… U
Darkness Descends                          x2    B     Sweeper — vs go-wide token/tribal boards; our… U
Rooftop Percher                            x2    C     Graveyard hate — vs the cube's 39 graveyard-i… C
```

## ANALYSIS

### DECK IDENTITY

WB Blight-Fueled Capped Reanimator. The cube's blight mechanic puts -1/-1 counters on your OWN creatures, and this deck's two repeatable reanimators spend -1/-1 counters as their activation cost: Reaping Willow ('{1}{W/B}, Remove two counters from this creature: Return target creature card with mana value 3 or less from your graveyard to the battlefield') and Slumbering Walker ('At the beginning of your end step, you may remove a counter from this creature. When you do, return target creature card with power 2 or less from your graveyard to the battlefield'). Gutsplitter Gang refuels them for free every turn ('At the beginning of your first main phase, you may blight 2'), turning a one-shot ability into a per-turn engine. Twilight Diviner doubles each rebuy, and lifegain rides along as lifelink on six of the twenty-two nonland cards rather than as a separate plan, because the cube's only 'if you gained life this turn' payoff is red-white and uncastable here.

### KEY MECHANICAL OBSERVATIONS

**Blight is a resource, not a drawback.** This is the whole deck. The cube's blight mechanic reads "put N -1/-1 counters on a creature you control" — normally a cost. But Reaping Willow's activation cost is *"Remove two counters from this creature"* and Slumbering Walker's is *"remove a counter from this creature"*. So every blight aimed at those two bodies is prepaid reanimation. Gutsplitter Gang supplies exactly two counters, for free, at the beginning of every one of your first main phases; Blighted Blackthorn supplies two more on entry and again on every attack, drawing a card each time. The interaction is not tagged in the cube data anywhere — it only falls out of reading the two oracle texts side by side.

**The reanimators are one-shots until you refuel them.** Reaping Willow enters with exactly two counters and spends exactly two per activation: one reanimation per copy, ever, unless blighted again. Slumbering Walker enters with two and spends one per end step: two reanimations. This deck's repeatable-blight count is 3 of 22 nonland cards, P(at least one by turn 5 on the draw) = 0.668. In the third of games where none appears, the engine produces three total rebuys rather than one per turn. That is stated rather than smoothed over — the Phase 9 Challenger caught the original draft claiming otherwise and the claim was corrected, not defended.

**Every reanimation effect except one is capped, and the caps exclude the deck's best cards.** Reaping Willow is MV 3 or less; Slumbering Walker is power 2 or less; Emptiness is MV 3 or less. Between them they cannot return Gutsplitter Gang (MV 4), Blighted Blackthorn (MV 5), Eirdu (MV 5), Emptiness itself (MV 6), Slumbering Walker (MV 5), or even Reaping Willow (MV 4, power 3 — it fails both caps). That is 8 of the 16 creature copies permanently unrecoverable. Dose of Dawnglow is the pool's only uncapped reanimation and the only one at instant speed; it is in the list for exactly that reason.

**Emptiness is a two-mana reanimation spell.** Its evoke cost is {W/B}{W/B}. Paying both pips with white mana satisfies its own intervening-if clause — *"if {W}{W} was spent to cast it"* — and evoke then sacrifices it, so for two mana you return an MV-3-or-less creature. One caveat worth stating because it is easy to get wrong: with Isilu on the battlefield the evoked body does persist back, but the reanimation clause does **not** re-trigger, because a persist return is not a cast and no mana was spent on it.

**There is no lifegain payoff in these colours.** The cube contains exactly one card that cares whether you gained life — Bre of Clan Stoutarm — and it is {2}{R}{W}. So the six lifelink/lifegain copies in this list are a racing and blocking resource, nothing more. Stating that as a count rather than as an adjective is what kept the deck from spending slots on a payoff that does not exist.

### COUNT-DEPENDENT VERDICTS

- Reaping Willow returns a creature card with mana value 3 or less: 8 of the 22 nonland copies qualify, across 5 distinct cards - Twilight Diviner (MV3), Abigale (MV2), Scarblade Scout x2 (MV2), Moonglove Extractor x2 (MV3), Retched Wretch x2 (MV3). Reaping Willow itself (MV4), Slumbering Walker (MV5), Eirdu (MV5), Gutsplitter Gang x2 (MV4), Blighted Blackthorn (MV5) and Emptiness (MV6) are NOT legal targets. INCLUDE at 2 copies. (The pre-grill record claimed 11; the Challenger's recount was correct and 8 is the corrected figure against the repaired list.)
- Slumbering Walker returns a creature card with power 2 or less: 5 of the 22 nonland copies qualify, across 3 distinct cards - Abigale (1/1), Scarblade Scout x2 (2/2), Moonglove Extractor x2 (2/1). Twilight Diviner (3/3) and Retched Wretch (4/2) do NOT qualify. INCLUDE at 1 copy; 5 targets against Reaping Willow's 8 is exactly why Walker is the 1-of. (Pre-grill record claimed 8; corrected to 5.)
- Dose of Dawnglow is the only UNCAPPED reanimation in the list: it can return all 16 creature copies, including the 8 copies that every other reanimation effect in the deck is barred from touching by its cap (Reaping Willow x2 - MV 4 and power 3, so it fails both the MV<=3 and the power<=2 cap - plus Gutsplitter Gang x2, Blighted Blackthorn, Eirdu, Emptiness, Slumbering Walker). INCLUDE at 1 copy.
- Twilight Diviner copies a creature that entered or was cast from a graveyard: 7 of the 22 nonland copies can produce such an entry - Reaping Willow x2, Slumbering Walker, Emptiness, Dose of Dawnglow, and Retched Wretch x2 (its own oracle returns it from the graveyard to the battlefield). Isilu's persist returns add more once the flip happens. INCLUDE at 1 copy, weighted 0.7 in assembly. (Pre-grill record claimed 4; Retched Wretch was missed.)
- REPEATABLE blight - the fuel the two counter-costed reanimators consume: 3 of the 22 nonland copies. Gutsplitter Gang x2 ('At the beginning of your first main phase, you may blight 2') and Blighted Blackthorn ('Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life'). P(>=1 by turn 5 on the draw) rises from 0.515 at 2 copies to roughly 0.68 at 3. One-shot blight adds Bogslither's Embrace x2 (blight 1), Dose of Dawnglow (blight 2 when cast outside your main phase) and Emptiness's {B}{B} mode. Stated plainly: Reaping Willow enters with exactly two counters and each activation spends exactly two, so without external blight it reanimates once per copy, and Slumbering Walker twice.
- Creatures that CONVERT a -1/-1 counter into value: 5 of the 22 nonland copies - Reaping Willow x2 (spends 2 per reanimation), Slumbering Walker (spends 1 per end-step reanimation), Retched Wretch x2 ('When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield'). Creatures that merely survive a blight 2 and so are safe dumps: Blighted Blackthorn 3/7, Gutsplitter Gang 6/6, Eirdu 5/5, Reaping Willow 3/6, Slumbering Walker 4/7. Heirloom Auntie was cut in the Phase 9 repair precisely because a blight 2 aimed at its 2/2 entry state kills it - it is anti-fuel.
- Card draw: 3 of the 22 nonland copies draw cards - Blighted Blackthorn (on enter and on each attack, gated on paying blight 2) and Moonglove Extractor x2 (on each attack, no gate beyond attacking). Before the Phase 9 repair this deck contained ZERO cards whose oracle text says 'draw'.
- Cards castable on two lands: 4 of the 22 nonland copies - Abigale ({W/B}{W/B}), Scarblade Scout x2 ({1}{B}), Nameless Inversion ({1}{B}). Bogslither's Embrace is NOT one: its additional cost is 'blight 1 or pay {3}', the deck contains zero one-drops, so on two lands there is no creature to blight and the alternative cost makes it a five-mana spell. (Pre-grill record claimed 7; corrected to 4.)
- Lifegain subtheme: 6 of the 22 nonland copies have lifelink or gain life - Reaping Willow x2, Scarblade Scout x2, Abigale, Eirdu//Isilu. The Phase 9 repair cut Prideful Feastling x2, dropping this from 8 to 6; that is the stated price of adding the deck's card draw. There is no 'whenever you gain life' payoff in W or B anywhere in the 282-card pool - the only one, Bre of Clan Stoutarm, is {2}{R}{W} - so lifegain here is a racing resource, not an engine.
- Persist eligibility under Isilu ('Each other nontoken creature you control has persist ... if it had no -1/-1 counters on it'): 12 of the 15 creature copies enter WITHOUT -1/-1 counters and are persist-eligible on arrival - Twilight Diviner, Gutsplitter Gang x2, Blighted Blackthorn, Abigale, Scarblade Scout x2, Moonglove Extractor x2, Retched Wretch x2, Emptiness. Only 3 copies enter with counters (Reaping Willow x2, Slumbering Walker). The Challenger's ADVISORY that Isilu is anti-correlated with the deck's own counters was recounted against the repaired list and does not hold at 12/15.
- Emptiness carries Board: Sacrifice-Cost (evoke sacrifices it on entry): the cost is the card itself, so it is self-feeding. With Isilu on the battlefield the evoked body returns via persist, but the reanimation clause does NOT re-trigger - it checks 'if {W}{W} was spent to cast it' and a persist return is not a cast.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (22 nonland):  2:6  3:7  4:4  5:4  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.5: Emptiness@0.8, Twilight Diviner@0.7) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.5: Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight@0.5) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 77%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Gutsplitter Gang, Blighted Blackthorn, Reaping Willow
  OK        single_large_threat: Crib Swap, Bogslither's Embrace, Nameless Inversion
  CONCEDED  noncreature_permanents: W/B mainboard carries no artifact or enchantment removal; Pyrrhic Strike x2 is sideboarded because the cube's artifact density is 4.2% and maindecking it would cut a rebuy target
  CONCEDED  stack: the pool contains no counterspell in W or B at all — the only stack interaction in the cube is blue
  CONCEDED  graveyard: own plan is graveyard-based; hate is sideboard-only (Rooftop Percher x2), since maindecking symmetric exile would hit our own reanimation targets
```

- curve, assembly, goldfish and coverage all returned PASS on the repaired list, so no WARN-tier response is owed. Goldfish keepable fell from 87% to 83% when Prideful Feastling x2 and Heirloom Auntie were replaced with higher-MV cards; it remains above the 80% threshold.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Emptiness can be hard-cast for {4}{W/B}{W/B} as a 3/5 with its reanimation trigger instead of evoked; Dose of Dawnglow at {4}{B} is a five-mana instant sink; Blighted Blackthorn's attack trigger draws a card every combat; Twilight Diviner's surveil 2 and Scarblade Scout x2's mill 2 bin excess lands off the top. Reaping Willow's {1}{W/B} activation is counter-gated rather than mana-gated and is deliberately NOT counted here as a flood sink. |
| `screw` | mitigation | 4 of 22 nonland copies cast on two lands (Abigale {W/B}{W/B}, Scarblade Scout x2 {1}{B}, Nameless Inversion {1}{B}) and 4 of the 18 lands fix (2 Sunlit Marsh, 2 Evolving Wilds). The goldfish check on the repaired list returns 83% keepable and 92% three-lands-by-turn-3. This is the deck's weakest mode: with zero one-drops a two-land hand is a turn-2 play at best. |
| `decapitation` | mitigation | the reanimation role is 5 copies deep across 4 distinct cards - Reaping Willow x2, Slumbering Walker, Emptiness, Dose of Dawnglow. Killing one Reaping Willow on sight leaves 4 copies across 3 distinct cards, one of which (Dose of Dawnglow) is an instant and cannot be pre-empted. Twilight Diviner is the only true singleton payoff; losing it costs the doubling, not the engine. |
| `gas-out` | mitigation | 3 of 22 nonland copies draw cards - Blighted Blackthorn (on enter and on every attack) and Moonglove Extractor x2 (on every attack); before the Phase 9 repair the list had none. Structurally the graveyard is the second hand: Slumbering Walker returns a power<=2 creature at end step for two turns off its entry counters and indefinitely once Gutsplitter Gang or Blighted Blackthorn refuels it, Reaping Willow does the same for MV<=3, and Scarblade Scout's mill 2 plus Twilight Diviner's surveil 2 have been stocking that graveyard since turn 2. Stated honestly: repeatability rests on 3 repeatable blight copies, P(>=1 by turn 5) is roughly 0.68, and in the games where none appears the engine delivers one Willow activation and two Walker activations total. |
| `raced` | mitigation | 6 of 22 nonland copies have lifelink (Reaping Willow x2, Scarblade Scout x2, Abigale, Eirdu 5/5 flying lifelink) and 5 removal spells sit at MV 2-3, four of which exile unconditionally (Crib Swap x2, Bogslither's Embrace x2). Reaping Willow is a 1/4 lifelink blocker on the turn it lands - it enters with two -1/-1 counters - and a 3/6 once it has spent them; Gutsplitter Gang is a 6/6 on turn 4 and Blighted Blackthorn a 3/7 wall on turn 5. The cube's largest threat class is evasion at 41 cards (15.8% density), which is what Blight Rot x2 in the sideboard answers. |
| `disruption-fizzle` | mitigation | the critical turn is a Reaping Willow activation, which is sorcery-speed. Killing Willow with the ability on the stack does not undo it: the counters were removed as a cost and the ability resolves without its source. The plan retries because three other reanimation effects remain (Slumbering Walker's free end-step trigger, Emptiness's evoke, Dose of Dawnglow at instant speed), and Dose of Dawnglow specifically sidesteps the sorcery-speed window this mode is about. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bre of Clan Stoutarm (rare) | The cube's ONLY 'if you gained life this turn' payoff, and the card the supplied archetype brief was built around — but its mana cost is {2}{R}{W}, colour identity RW. It is uncastable in a WB deck without a red splash, and the deterministic splash filter admits it only for the lifegain pipeline (deck 3), not this one. |
| Rhys, the Evermore (rare) | Its '{W}, {T}: Remove any number of counters from target creature you control' cannot REFILL a spent reanimator — removal is the wrong direction. Its only real use here is resetting a persisted creature, which matters alongside Isilu, and this list runs one Isilu. Carried into deck 2, where it is a keystone. |
| Kinscaer Sentry (rare) | Cut by the Phase 5B shape judge as a weak keystone: it puts a creature onto the battlefield FROM YOUR HAND, so it is neither a graveyard rebuy nor a Twilight Diviner trigger ('if they entered or were cast from a graveyard'). |
| Bloodline Bidding (rare) | {6}{B}{B} mass reanimation by creature type. Convoke helps, but this deck's creature types are scattered across Treefolk, Goblin, Elf, Bird, Elemental and Shapeshifter — no single chosen type returns more than 2 of the 16 creature copies. |
| Moonshadow (mythic) | A {B} 7/7 that sheds six -1/-1 counters off permanents hitting your graveyard. Real synergy, but six counters is a long runway against a thesis turn of 7, and taking a rare slot means displacing Abigale — one of only 5 Slumbering Walker targets and the deck's only two-mana evasive lifelink body. |
| Dawnhand Dissident (rare) | '{T}, Blight 1: Surveil 1' is a 1-mana repeatable source of both resources this pipeline consumes. Strong, but the only rare slot it could take is Eirdu//Isilu, and 12 of the deck's 15 other creature copies are persist-eligible on arrival, so Isilu is not the dead weight it looks like. |
| Champion of the Clachan / Kinbinding / Ajani, Outland Chaperone (rares) | All Kithkin/token payoffs. This list contains zero Kithkin and zero token generators, so each would be a 0-of-22 payoff. |
| Heirloom Auntie | Cut during the Phase 9 repair. It enters as a 2/2 (4/4 with two -1/-1 counters) and its ability REMOVES counters to grow, so a Gutsplitter Gang blight 2 aimed at it kills it. It is anti-fuel in a deck whose fuel is -1/-1 counters. |
| Prideful Feastling | Cut during the Phase 9 repair. Its entire oracle text is 'Changeling / Lifelink'. It has the right rebuy profile (MV 3, power 2) but Moonglove Extractor has the identical profile and draws a card on each attack, in a deck that otherwise had zero card draw. |
| Meanders Guide | A repeatable MV<=3 reanimator that costs no counters at all — but its trigger requires tapping another untapped Merfolk you control, and the final list contains 0 Merfolk and 0 changeling creatures. 0 of 22 enablers. |
| Unbury | Returns creature cards to HAND, subtracting from the graveyard that all five reanimation effects draw from. Rejected by the Phase 5B judge for exactly this reason. |
| Requiting Hex | Would be the deck's only one-drop, which is a real gap. But 'Destroy target creature with mana value 2 or less' is strictly worse than the 4 unconditional-exile copies already occupying the 5 interaction slots. |
| Dawnhand Eulogist / Shore Lurker / Foraging Wickermaw | Self-mill bodies at MV 4, 4 and 2. All would stock the graveyard, but at MV 4 the first two are outside Reaping Willow's cap and would raise avg MV past the land budget; Scarblade Scout at MV 2 does the same job inside both reanimators' caps. |
| Springleaf Drum / Firdoch Core | Fixing artifacts. Springleaf Drum taps a creature, which conflicts with a plan that attacks; Firdoch Core is a 3-mana rock in a deck whose only 5-drops are already supported by 18 lands and a PASS colour balance. |
| Eclipsed Realms (land) | Its any-colour mana is restricted to a single chosen creature type. This list spans Treefolk, Goblin, Elf, Bird, Elemental and Shapeshifter, so no single choice serves it — a Swamp is strictly better. |
| Auntie's Sentence (sideboard consideration) | Boarded in the first draft, then cut: it answers no class in the cube's threat census. The census shows 0 rituals, 2 sweepers, all stack interaction in blue, and 168 of 260 nonland cards are creatures — there is no combo/control class for a one-card discard to attack. |
| Protective Response / Keep Out (sideboard considerations) | Protective Response destroys an attacking or blocking creature with convoke; Keep Out is 4 damage to a TAPPED creature or destroy an enchantment. Both are conditional where Spiral into Solitude and Pyrrhic Strike are not, and the 10 board slots went to the four largest threat classes in the census instead. |

### BUILD DERIVATION

- **Skeleton selection (Phase 5B Step 0):** chose *Sketch A — most threat-dense / aggressive* over *most grindy value* and *most flexible toolbox*. Judge grounds: Sketch A is the only package holding both named reanimators plus the free per-turn blight refuel plus the doubler, closing the thesis loop with no intermediate step; that is one extra body per turn from t4-5 and two once Willow is online, a combat kill by turn 7. The judge explicitly credited A's Threats/Payoffs over-band as a bookkeeping difference over an equivalent shape, since Engine & Infra is 0% absorbed for midrange and A folds the residual body count into Threats.
- **Weak keystone — Kinscaer Sentry:** its trigger puts a creature onto the battlefield FROM YOUR HAND, so it is neither a graveyard rebuy nor a Twilight Diviner trigger ('if they entered or were cast from a graveyard') → CUT. Not in the final list. Its rare slot was reassigned to Emptiness, whose reanimation clause does go to the graveyard.
- **Weak keystone — Gutsplitter Gang / Blighted Blackthorn body claims:** judge noted no quoted oracle text established their power/toughness → verified against the working pool cache: Gutsplitter Gang is 6/6, Blighted Blackthorn is 3/7. Gutsplitter Gang is in the list on that verified stat line; Blighted Blackthorn was not included (MV 5 pushed avg MV past the 22-nonland budget).
- **Land math:** after the Phase 9 repair: 22 nonland at avg MV 3.409, accel 0 -> 18 lands. Built to 18. Deviation: none. Composition: Sunlit Marsh enters tapped (dossier: WB free duals = 1 distinct card, 0 untapped-capable) and Evolving Wilds costs a turn of tempo to fetch; both are capped at 2 so at most 4 of 18 lands are tempo-negative. Eclipsed Realms was excluded: its any-colour mana is restricted to one chosen creature type and this deck spans Treefolk, Goblin, Elf, Bird, Elemental and Shapeshifter, so no single choice serves the list.
- **Pip math:** the mana audit counts only lands that directly produce a colour: W 7 (5 Plains + 2 Sunlit Marsh), B 11 (9 Swamp + 2 Sunlit Marsh). Production 38.9% W / 61.1% B against demand 30% / 70% -> gap +/-8.9pp, PASS. White's demand is spiky rather than broad - Slumbering Walker {3}{W}{W}, Eirdu {3}{W}{W}, and Emptiness's reanimation clause ('if {W}{W} was spent to cast it', paid through evoke {W/B}{W/B}) all want WW around turn 5. P(>=2 W sources by turn 5 on the draw) = 0.694 on the audit's 7 sources, 0.838 counting Evolving Wilds as a Plains-fetch. The 10 hybrid W/B pips are colour-agnostic and are why the deck functions at 7 hard white sources.
- **Phase 9 self-grill repairs applied:** -1 Heirloom Auntie (anti-fuel: a blight 2 aimed at its 2/2 entry state kills it); -2 Prideful Feastling (its entire oracle text is 'Changeling / Lifelink'); -1 Nameless Inversion (toughness-capped; 34 of 168 distinct cube creatures have toughness >= 5); +1 Blighted Blackthorn (second repeatable blight source AND the deck's first card draw); +2 Moonglove Extractor (MV3 / power 2, legal for both reanimators, draws on each attack); +1 Dose of Dawnglow (the pool's only uncapped reanimation; instant speed); sideboard: -2 Auntie's Sentence (answers no class in the threat census) / +2 Spiral into Solitude (toughness-blind exile)
- **Approval round:** Challenger approval round (round 1 of a 2-round cap): all 8 BLOCKING findings returned RESOLVED and all 5 CONTEST rows' grounds ruled to HOLD; the Challenger withdrew its Eirdu//Isilu advisory after recounting persist eligibility at 12 of 15. It introduced no new findings and confirmed no new hard-check violations. Three residual record errors it flagged (creature copies 15 -> 16, barred copies 6 -> 8, a stale avg MV 3.18 in the lands rationale) are corrected above. It also noted, and I accept, that the repair's stated price is goldfish keepable 0.869 -> 0.833 and turn-2 play rate 0.821 -> 0.77, both above threshold.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.41   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.21 adj [MV 3.41 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  70.0%  prod  61.1%  gap  +8.9pp  [OK]
  W  demand  30.0%  prod  38.9%  gap  -8.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  commons_uncommons_max_2: PASS — no card exceeds 2 copies (validator check 3)
  rares_mythics_max_1_each: PASS — all five are singletons
  rare_mythic_total_max_5: PASS — exactly 5 across mainboard + sideboard: Abigale, Eirdu//Isilu, Emptiness, Slumbering Walker, Twilight Diviner. Sideboard is entirely commons/uncommons.
  all_cards_from_cube: PASS — validator check 2, exact-name match against the working pool
  basics_unlimited: 5 Plains + 9 Swamp, format-supplied and exempt
```
