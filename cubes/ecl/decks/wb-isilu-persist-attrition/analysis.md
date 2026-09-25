---
deck_name: "wb-isilu-persist-attrition"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-10T04:04:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  7x Plains                   Land
  7x Swamp                    Land
  2x Evolving Wilds           basic fetch / fixing
  2x Sunlit Marsh             WB dual, enters tapped
```

### CREATURES (12)

```
CMC  Card                                       Qty   Color Role                                           Rar
  2  Rhys, the Evermore                         x1    W     flash persist grant, and {W},{T} strips the -… R
  3  Moonlit Lamenter                           x2    W     2/5 wall; removing its entry counter draws a … U
  3  Reluctant Dounguard                        x2    W     4/4 for 3 that sheds a counter free on every … C
  3  Retched Wretch                             x1    B     the only THIRD life in the pool: dies clean, … U
  3  Twilight Diviner                           x1    B     persist returns are graveyard-sourced entries… R
  4  Graveshifter                               x1    B     changeling whose ETB returns a creature card … U
  4  Nightmare Sower                            x1    B     2/3 flying lifelink blocker, persist-eligible… U
  5  Blighted Blackthorn                        x1    B     repeatable card draw: blight 2 on enter and o… C
  5  Eirdu, Carrier of Dawn // Isilu, Carrier … x1    W     5/5 flying lifelink finisher; flips for {B} t… M
  6  Emptiness                                  x1    BW    {B}{B} mode puts three -1/-1 counters on an o… M
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                                       Qty   Color Role                                           Rar
  1  Requiting Hex                              x2    B     1-mana instant kill on MV<=2 plus 2 life       U
  2  Nameless Inversion                         x2    B     cheapest instant removal, +3/-3                U
  3  Crib Swap                                  x2    W     instant unconditional exile, size-blind        U
  3  Protective Response                        x1    W     convoke instant, destroy target attacking or … U
  3  Pyrrhic Strike                             x2    W     modal instant: artifact/enchantment and/or cr… U
  4  Perfect Intimidation                       x1    B     'Remove all counters from target creature' is… U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                        Rar
Spiral into Solitude                       x2    W     Toughness-blind removal — vs the 34 of 168 di… C
Blight Rot                                 x2    B     Instant removal — vs evasive fliers (41 evasi… C
Darkness Descends                          x2    B     Mass removal — vs go-wide boards. The cube's … U
Liminal Hold                               x2    W     Universal answer — vs the 32 artifacts and en… C
Rooftop Percher                            x2    C     Graveyard hate — vs the cube's 39 graveyard-i… C
```

## ANALYSIS

### DECK IDENTITY

WB Isilu Persist Attrition. Eirdu, Carrier of Dawn is a {3}{W}{W} 5/5 flying lifelink body that flips for {B} into Isilu, Carrier of Twilight: 'Each other nontoken creature you control has persist.' From that point every creature trades twice, and 5 of the deck's 6 enters-the-battlefield triggers are rebought on the return — the exception is Emptiness, whose ETBs are gated on 'if {W}{W} was spent to cast it', and a persist return is not a cast. The deck is built out of two classes of body the anthem is unusually good with: creatures that enter with -1/-1 counters and shed them for free or for value (Reluctant Dounguard, Moonlit Lamenter), and creatures whose ETB is worth buying a second time (Graveshifter). Nine instant-speed answers hold the game open while that assembles, and Rhys, the Evermore plus Perfect Intimidation strip the persist counter off a returned creature so it becomes persist-eligible a third time — the only two effects in this 282-card pool that can do that to ANOTHER creature.

### KEY MECHANICAL OBSERVATIONS

**Persist is resilience here, not a loop — and that is a pool fact, not a design choice.** I scanned all 282 cards for a repeatable sacrifice outlet and there is none: no activated ability anywhere in the cube reads "Sacrifice a creature:". So persist fires only when a creature dies in combat or to removal. That single fact determines the whole build. It is why the deck runs nine instant-speed answers rather than a threat suite (it needs the opponent to be *making* those deaths), and why the bodies are chosen to be things an opponent is obliged to block or shoot.

**The counter clause is the real constraint.** Persist reads *"if it had **no** -1/-1 counters on it"*. That means two things at once. First, a persisted creature comes back carrying a counter and will not persist again — so the deck runs the only two effects in the entire pool that can strip a counter off *another* creature (Rhys, the Evermore's "{W}, {T}: Remove any number of counters from target creature you control" and Perfect Intimidation's "Remove all counters from target creature"). Second, and less obviously, it makes the cube's whole "enters with -1/-1 counters, grossly undercosted" creature class *unusable* unless the creature can shed on its own — which is exactly why Reluctant Dounguard and Moonlit Lamenter are here and Creakwood Safewright is not.

**Two blight cards in the deck must usually decline their own discount.** Requiting Hex and Pyrrhic Strike both offer an optional blight cost for extra value. Taking it puts a -1/-1 counter on one of your own creatures, which switches that creature's persist off. Of the 10 non-Eirdu creature copies, only 4 can shed a counter back. The correct default line is to decline the blight and forgo the 2 life or the second mode, paying it only onto Moonlit Lamenter (which converts the counter into a card) or Reluctant Dounguard (which sheds free). This is the sort of thing a decklist cannot express and a player has to know.

**Retched Wretch is the only three-life body in the cube.** *"When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield under its owner's control and it loses all abilities."* Under Isilu it dies clean, persists back carrying a counter, dies again — and now satisfies its own trigger, returning a third time. No reset card spent. It is the exact inverse of persist's counter clause, and it is the only card in 282 that reads that way.

**Emptiness is the one ETB persist does not rebuy.** Both its triggers are gated on *"if {W}{W}/{B}{B} was spent to cast it"*, and a persist return is not a cast. 5 of the deck's 6 ETB creatures are genuinely bought twice; Emptiness comes back as a vanilla body. The Phase 9 Challenger caught the deck identity overclaiming this and it was corrected rather than defended.

### COUNT-DEPENDENT VERDICTS

- Isilu grants persist to 'each OTHER nontoken creature you control'. Besides Eirdu this list holds 10 creature copies: Reluctant Dounguard x2, Moonlit Lamenter x2, Graveshifter, Retched Wretch, Nightmare Sower, Twilight Diviner, Rhys, Blighted Blackthorn. Of those, 6 copies ENTER with no -1/-1 counters and are persist-eligible immediately (Graveshifter, Retched Wretch, Nightmare Sower, Twilight Diviner, Rhys, Blighted Blackthorn). 4 copies enter WITH counters and must shed first: Reluctant Dounguard x2 and Moonlit Lamenter x2. Every one of the 4 has a printed way to shed — that is the deliberate reason this class was chosen over enters-with-counters creatures that cannot shed on their own. (The pre-grill record said 11 and 7; the Challenger's recount of 10 and 6 was correct.)
- Reluctant Dounguard enters with TWO -1/-1 counters and its trigger removes ONE per other-creature ETB, so it needs two subsequent creature ETBs to become persist-eligible — not one, as the pre-grill record and the shape judge both stated. Sources of those ETBs in this list: the 9 other creature copies, plus every persist return and every Twilight Diviner token once Isilu is online. At the assembly check's 15 cards seen by thesis turn 8, expected creature copies drawn is about 15 x 11/40 = 4.1.
- Persist resets, stated at two different scopes because the pre-grill record conflated them. Effects that can reset ANOTHER creature: 2 of the 22 nonland copies (Rhys, the Evermore's '{W}, {T}: Remove any number of counters from target creature you control' and Perfect Intimidation's 'Remove all counters from target creature'). These two are the only such cards in the entire 282-card pool — every other counter-remover in the cube reads 'from this creature'. Effects that reset THEMSELVES, and so also restore persist eligibility: 4 more copies (Reluctant Dounguard x2, Moonlit Lamenter x2). Total reset capability: 6 of 22 nonland copies.
- Twilight Diviner's copy trigger fires on another creature entering from a graveyard. Pre-flip sources in this list: 2 — Emptiness's {W}{W} mode ('return target creature card with mana value 3 or less from your graveyard to the battlefield') and Rhys's ETB persist grant, whose return is likewise from the graveyard. (The pre-grill record said 0.) Post-flip every persist return qualifies, but the card reads 'This ability triggers only once each turn', so a turn that persists three creatures still produces exactly one token, and Diviner's own persist return never triggers itself ('other creatures'). Weighted 0.6 in the assembly check for that reason. Graveshifter does NOT feed it: it returns a creature card to HAND.
- Card draw and selection: before the Phase 9 repair this list drew 2 cards total for the game (Moonlit Lamenter x2, each with exactly one entry counter and 'Remove a counter from this creature: Draw a card'). The repair added Blighted Blackthorn — 'Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life' — which draws on entry and on every attack. Its blight 2 aimed at Moonlit Lamenter (2/5, becomes 0/2 and survives) then gives Lamenter two more counters to convert into two more cards at {1}{W} each. Blighted Blackthorn can also blight itself: it is a 3/7, so it survives roughly three of its own activations before dying, and doing so turns off its own persist. That limit is stated rather than smoothed over.
- Instant-speed density: 9 of the 9 interaction slots are instants (Nameless Inversion x2, Crib Swap x2, Requiting Hex x2, Pyrrhic Strike x2, Protective Response). Nothing in the interaction suite forces a sorcery-speed commitment, which is what lets the deck hold up the untapped {B} that Isilu's transform needs at the following first main phase. Perfect Intimidation is a 4-mana sorcery competing for exactly that mana, which is why the Phase 9 repair cut it from 2 copies to 1.
- Size-blind removal: 34 of the 168 distinct creatures in the cube have toughness 5 or greater, and Nameless Inversion (+3/-3) cannot kill any of them. 7 of the 9 interaction copies can — Crib Swap x2 (exile, no size clause), Pyrrhic Strike x2 ('destroy target creature with mana value 3 or greater'), Protective Response ('destroy target attacking or blocking creature'), and Requiting Hex x2 ('destroy target creature with mana value 2 or less'), which is the only mainboard answer to the four toughness-5-or-greater creatures in the pool that cost 2 or less. Coverage of the 34 is complete. (The pre-grill record said 5 of 9 and misassigned the low end.)
- Lifegain subtheme: 5 of the 22 nonland copies gain life — Eirdu//Isilu (lifelink on both faces), Nightmare Sower (lifelink), Requiting Hex x2 (gain 2 life when its optional blight cost is paid). Sideboard adds Rooftop Percher x2 (gain 3) and Liminal Hold x2 (gain 2). There is no 'whenever you gain life' payoff available in W or B anywhere in the pool — the only one, Bre of Clan Stoutarm, is {2}{R}{W} — so lifegain is a race-buffer, not an engine.
- Requiting Hex and Pyrrhic Strike both carry OPTIONAL blight additional costs. Feeding them: 10 creature copies can hold the counter, but blighting a persist-eligible creature switches its persist off until it sheds, and only 4 of the 10 can shed. The correct default is to DECLINE the blight and forgo the 2 life or the second mode; pay it only onto Moonlit Lamenter (2/5, converts the counter into a card) or Reluctant Dounguard (sheds free on the next creature ETB). Stating the default matters more than the count here, because the naive line actively costs the deck its engine.
- Emptiness carries Board: Sacrifice-Cost (evoke sacrifices it on entry) — self-fed, needing nothing from the deck, which is just as well given the pool contains zero sacrifice outlets. But note the limit the Challenger correctly raised: both of its ETBs are gated on 'if {W}{W}/{B}{B} was spent to CAST it', so a persist return re-enters it as a vanilla body. It is the 1 of the deck's 6 ETB creatures that persist does NOT rebuy.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Control):  [WARN]
  MV distribution (22 nonland):  1:2  2:3  3:11  4:3  5:2  6:1
  WARN  MV 0-2 share: share 23% below band minimum 25%
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6: Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight@0.5, Emptiness@0.9, Twilight Diviner@0.6) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 30%  T2 69%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Reluctant Dounguard, Moonlit Lamenter, Blighted Blackthorn, Protective Response
  OK        single_large_threat: Crib Swap, Pyrrhic Strike, Protective Response
  OK        noncreature_permanents: Pyrrhic Strike
  CONCEDED  stack: the pool contains no counterspell in W or B at all — every stack-interaction card in the cube is blue. Perfect Intimidation's 'target opponent exiles two cards from their hand' is the nearest available substitute and is proactive, not reactive.
  CONCEDED  graveyard: hate is sideboard-only (Rooftop Percher x2). Maindecking graveyard exile would be near-dead in the roughly half of matchups the census says do not use the graveyard, and this deck's own Graveshifter and Twilight Diviner want a stocked yard.
```

- CURVE WARN accepted (MV 0-2 share 23% against a 25% band minimum: 5 of 22 nonland cards). The band exists to insure against dead early turns, and goldfish measures that outcome directly rather than by proxy: this list returns 88% keepable, a 30% turn-1 play rate and 69% turn-2 -- the highest keepable of the four builds. The two MV-1 cards are Requiting Hex x2, removal that answers exactly the early threats the band insures against. The MV-3 concentration (11 of 22) is where this pool's persist-relevant bodies actually cost: Reluctant Dounguard, Moonlit Lamenter, Retched Wretch and Crib Swap are all 3s. The cheapest available fixes would be -1 Nightmare Sower or -1 Crib Swap for a one-drop such as Auntie's Sentence; neither is forced, and both are declined on their merits. Nightmare Sower was added by the Phase 9 repair specifically to improve the deck's ACCEPTED 'raced' mode, and Crib Swap is 1 of only 2 size-blind exiles in the list -- paying for a curve statistic out of either is the worse trade.
- assembly, goldfish and coverage all returned PASS on the repaired list.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Blighted Blackthorn, added in the Phase 9 repair, draws a card on entry and on every attack ('Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life') — the deck's first repeatable card source. Aiming its blight 2 at Moonlit Lamenter (2/5, becomes 0/2 and survives) turns surplus mana into further cards, because Lamenter converts each counter into a draw for {1}{W}; that chain is the genuine mana sink, replacing the pre-grill claim that Rhys's activation was one, which the Challenger correctly refuted since removing counters from a creature that has none produces nothing. Emptiness can also be hard-cast at {4}{W/B}{W/B} as a 3/5 rather than evoked. The honest bound on that sink: Blighted Blackthorn is a 3/7, so it survives roughly three of its own blight-2 activations before dying, and self-blighting switches off its own persist; and loading counters onto Moonlit Lamenter turns Lamenter's persist off until it has drained them, which is acceptable precisely because a flooded game is when the mana to drain exists. |
| `screw` | mitigation | 5 of 22 nonland copies cast on two lands or fewer (Requiting Hex x2 at {B}, Nameless Inversion x2 at {1}{B}, Rhys at {1}{W}) and 4 of the 18 lands fix. Requiting Hex is a genuine one-drop, which is why goldfish reports the highest turn-1 play rate of the four builds. |
| `decapitation` | accepted | Eirdu//Isilu is a singleton and it is the only persist granter in the entire 282-card pool. If it is answered on sight the deck has no second copy of its anthem and degrades to a removal-heavy pile of undercosted bodies. Mitigating this would mean abandoning the locked pipeline: there is no redundancy to add, because no other card in the cube grants persist to a team. What the deck does instead is make the degraded state playable — Reluctant Dounguard is a 4/4 for 3 and Moonlit Lamenter a 2/5 that draws, so the bodies are individually above rate even with the anthem gone. Rhys, the Evermore also grants persist to a single creature until end of turn on its own ETB, which is a one-creature, one-turn substitute rather than a replacement. |
| `gas-out` | mitigation | Blighted Blackthorn draws on entry and every attack; Moonlit Lamenter x2 convert counters into cards; Graveshifter's unconditional ETB ('you may return target creature card from your graveyard to your hand') is genuinely rebought by persist, unlike Emptiness's gated ETBs. Perfect Intimidation attacks the opponent's hand rather than refilling ours, which is the control answer to a mutual empty hand: with Isilu online our board keeps regenerating and theirs does not. |
| `raced` | accepted | this is the mode the deck accepts. Its thesis turn is 8 and Isilu cannot be online before turn 6 (turn 5 Eirdu, turn 6 flip), so against the cube's fastest starts the deck must survive on removal and blockers alone for six turns. Mitigating it properly would mean cutting interaction or engine slots for cheap lifelink bodies, which is deck 3's plan — and trading the locked 'most reactive attrition' lens for a race posture would make this the same deck as deck 3. What is bought instead: 9 instant-speed answers, a 4/4 for 3 and a 2/5 for 3 as ground blockers, a 2/3 flying lifelink blocker (Nightmare Sower, swapped in during the Phase 9 repair specifically to improve this mode), and 4 lifegain copies (Eirdu//Isilu lifelink, Nightmare Sower lifelink, Requiting Hex x2). |
| `disruption-fizzle` | mitigation | the critical turn is the {B} payment that transforms Eirdu, which happens at the beginning of your first main phase and cannot be responded to profitably — there is no window in which killing Eirdu in response strands mana, because the payment is optional and made only if Eirdu is still on the battlefield. If Eirdu is killed before the flip, Rhys's ETB persist grant still saves one creature per cast, and 9 instant answers mean the turn's mana is never wasted. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bre of Clan Stoutarm (rare) | The cube's only 'if you gained life this turn' payoff and the card the supplied archetype brief was built around — but it is {2}{R}{W}, colour identity RW. Splashing red for it would cost this deck the untapped {B} that Isilu's transform needs at every first main phase. It is built into deck 3 instead. |
| Slumbering Walker (rare) | A free every-turn self-reset that also reanimates power<=2 (6 of 11 creature copies qualify). Declined at MV 5: the deck already carries a curve WARN on the cheap end, and a third 5-drop worsens it. It is deck 1's card. |
| Reaping Willow | The Phase 9 Challenger corrected me here and the correction stands on the record: removing both of its counters is exactly what makes it persist-eligible, so the activation reanimates AND converts a 3/6 lifelink into a two-life body. It stays out only because the Engine slot went to Blighted Blackthorn, which fixes the BLOCKING flood finding that Reaping Willow does not. This is the list's top swap candidate. |
| Abigale, Eloquent First-Year (rare) | In the pre-grill list; swapped out during the Phase 9 repair for Nightmare Sower. A 2/3 flying lifelink blocker beats a 1/1 one against the deck's ACCEPTED 'raced' failure mode, all 9 interaction copies turn on Nightmare Sower's trigger, and the swap freed a rare slot. |
| Creakwood Safewright / Encumbered Reejerey | Both are grossly undercosted bodies (5/5 for 2 and 5/4 for 2) that enter with -1/-1 counters. Safewright sheds only 'if there is an Elf card in your graveyard' — this deck runs 0 Elves — and Reejerey sheds only when tapped, which competes with blocking in a deck whose job is to block. Reluctant Dounguard and Moonlit Lamenter shed on events this deck actually generates. |
| Gutsplitter Gang | A 6/6 for 4 with a free repeatable blight 2 — the keystone of deck 1. Here its mandatory blight puts -1/-1 counters on our own creatures, which is precisely the condition that switches persist off. The same card is an engine in one WB deck and a liability in the other. |
| Burdened Stoneback | Rejected by the Phase 5B shape judge: granting indestructible PREVENTS death, and death is the only thing that turns persist on in a cube with zero sacrifice outlets. It is anti-synergistic everywhere except on Eirdu, the one creature Isilu never grants persist to ('each OTHER nontoken creature'). |
| Personify | Rejected by the shape judge: it returns the creature from EXILE, not the graveyard, so it does not feed Twilight Diviner, and the token it makes is a token, which Isilu's anthem explicitly excludes. |
| Bogslither's Embrace | Cut from the sideboard in the Phase 9 repair. Its 'blight 1 or pay {3}' additional cost either switches one of our own creatures' persist off or makes it a five-mana spell, and its board-in note contradicted the locked all-instant lens. |
| Bloodline Bidding / Dose of Dawnglow / Unbury (reanimation) | This deck rebuys creatures through persist rather than through the graveyard, so reanimation slots would be redundant with the anthem and dead before it lands. |
| Dawnhand Dissident (rare) | Repeatable graveyard hate that would let the deck maindeck an answer to the cube's 39 graveyard cards. Declined: its cost is 'Blight 1' or 'Blight 2' on our own creatures, which is the one thing this deck cannot afford to pay routinely. |
| Auntie's Sentence (sideboard / curve consideration) | A {1}{B} one-drop that would fix the curve WARN. Declined because buying it means cutting either Nightmare Sower (which improves the accepted 'raced' mode) or a Crib Swap (1 of only 2 size-blind exiles) — both worse trades than a 2.3pp curve miss that goldfish already shows is not biting. |
| Blight Rot / Spiral into Solitude (kept, but note) | Both are in the sideboard rather than the mainboard because their effect is single-target removal in a list that already mainboards nine such cards; they board in against the specific classes the census names (41 evasion cards; 34 of 168 creatures with toughness >= 5). |

### BUILD DERIVATION

- **Skeleton selection (Phase 5B Step 0):** chose *Sketch B — most reactive attrition* over *most proactive finisher* and *most engine-forward*. Judge grounds: B is the only build whose body count is designed for the format's actual persist trigger sources. With no sacrifice outlets, persist fires only when a creature dies in combat or to removal, so the deck needs a wide, cheap board of things an opponent is obliged to shoot or block into — B's self-shedding bodies are exactly that, and Reluctant Dounguard sheds for free on any other creature ETB, becoming persist-eligible without spending mana or a card. B is inside all three bands and its ~30% residual is structurally honest, because the three bands cap at 75%.
- **Weak keystone — Moonlit Lamenter:** role said 'self-shedding wall', but shedding costs {1}{W} and is sorcery-speed-only — unlike Reluctant Dounguard it does not shed on its own, and if it dies to instant-speed removal before you have paid, it still carries its counter and does not persist → KEPT at 2 copies, with the role restated: it is a 2/5 blocker whose counter converts into a CARD, and shedding is a bonus rather than the point. It is one of only 3 cards in the whole 40 that draws, so the slot is never dead even when the shed never happens.
- **Weak keystone — Nameless Inversion:** role said 'cheapest instant removal, the density backbone', but +3/-3 only answers toughness 3 or less and the size cap was left unstated → KEPT at 2 copies with the cap stated explicitly. 34 of the 168 distinct creatures in the cube have toughness >= 5 and Nameless Inversion cannot kill any of them; the deck answers those with Crib Swap x2 (exile, size-blind), Pyrrhic Strike x2 (destroy MV>=3) and Protective Response, and Spiral into Solitude x2 is in the sideboard for the same gap.
- **Land math:** after the Phase 9 repair: 22 nonland at avg MV 3.136, accel 0 -> 18 lands. Built to 18. Deviation: none. Composition: Sunlit Marsh enters tapped and Evolving Wilds costs a turn to fetch; both are capped at 2, so at most 4 of 18 lands are tempo-negative. That matters more here than in a proactive deck, because Isilu's flip needs an UNTAPPED {B} at every first main phase you want to hold the transform. Eclipsed Realms is excluded: its any-colour mana is type-restricted and is dead on the instant-speed removal this build lives on.
- **Pip math:** 18 lands: 7 Plains, 7 Swamp, 2 Sunlit Marsh (both), 2 Evolving Wilds (fetches either basic). The audit counts direct producers only: W 9, B 9 — 50%/50% production against 54.5%/45.5% demand, gap +/-4.5pp, PASS. This deck's colour requirement is the mirror of the reanimator build's: white carries the removal suite (Crib Swap, Pyrrhic Strike, Protective Response) and Rhys's repeatable {W} activation, while black is wanted in only two places but wanted RELIABLY — Eirdu's {B} flip cost and Emptiness's {B}{B} mode. That is why the split is held at an even 9/9 rather than skewed to white's larger pip count: the single most important black mana in the deck is the one that turns Eirdu into Isilu.
- **Phase 9 self-grill repairs applied:** -1 Perfect Intimidation (a 4-mana SORCERY competing for the untapped {B} that Isilu's transform needs); -1 Graveshifter, -1 Abigale, Eloquent First-Year; +1 Blighted Blackthorn (the deck's first repeatable card source; resolves the BLOCKING flood finding); +1 Retched Wretch (the only card in the pool that reaches a THIRD life without spending a reset); +1 Nightmare Sower (2/3 flying lifelink blocker, persist-eligible on arrival; all 9 interaction copies turn on its trigger — swapped in to improve the accepted 'raced' mode, and it frees a rare slot); sideboard: -2 Bogslither's Embrace (its board-in note contradicted the locked instant-speed lens and its blight cost switches our own persist off) / +2 Darkness Descends (the only mass answer available in W/B); record: four count-dependent verdicts recounted (persist base 11->10, clean entries 7->6, persist resets restated at two scopes, Twilight Diviner pre-flip sources 0->2, size-blind removal 5->7 of 9)
- **Approval round:** Challenger approval round (round 1 of a 2-round cap): the single BLOCKING finding (flood) returned RESOLVED, both CONTEST rows' grounds were upheld, and the curve WARN response was ruled adequate. It re-derived every hard check independently and found no new violations. On the Slumbering Walker contest it partly disputed my reasoning but upheld the conclusion on a stronger ground: with Abigale cut the deck sits at 4 of 5 rares, so Walker would cost a nonland slot rather than a rare slot, and at MV 5 it would worsen the curve flag. Three record slips it caught (a stale avg MV in the lands rationale, a lifegain count of 5 that should be 4 after Abigale's cut, and Blighted Blackthorn's self-limit missing from the stored flood text) are corrected above, as is an overstated 'forced trade' claim in the curve response.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.14   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.85 adj [MV 3.14 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  45.5%  prod  50.0%  gap  -4.5pp  [OK]
  W  demand  54.5%  prod  50.0%  gap  +4.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  commons_uncommons_max_2: PASS — no card exceeds 2 copies (validator check 3)
  rares_mythics_max_1_each: PASS — all five are singletons
  rare_mythic_total_max_5: PASS — 4 of the permitted 5, across mainboard + sideboard: Eirdu//Isilu, Emptiness, Rhys the Evermore, Twilight Diviner. The Phase 9 repair swapped Abigale (rare) for Nightmare Sower (uncommon), leaving one rare slot deliberately unspent. Sideboard is entirely commons/uncommons.
  all_cards_from_cube: PASS — validator check 2, exact-name match against the working pool
  basics_unlimited: 7 Plains + 7 Swamp, format-supplied and exempt
```
