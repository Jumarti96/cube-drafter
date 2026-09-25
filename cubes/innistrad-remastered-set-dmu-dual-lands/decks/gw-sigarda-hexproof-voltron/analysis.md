---
deck_name: "gw-sigarda-hexproof-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-30T20:31:17Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  8x Plains                                   basic, untapped
  6x Forest                                   basic, untapped
  2x Radiant Grove                            GW dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                                     Qty  Color  Role                        Rar
  1  Hopeful Initiate                         x1   W      threat-host                 R
  1  Lunarch Veteran // Luminous Phantom      x2   C      payoff-resilient-host       C
  1  Thraben Inspector                        x2   W      threat-host                 C
  1  Young Wolf                               x2   G      payoff-resilient-host       C
  2  Cathar Commando                          x2   W      threat-host                 C
  2  Twinblade Geist // Twinblade Invocation  x1   C      threat-host                 U
  3  Fiend Hunter                             x1   W      interaction-removal         U
  4  Gisela, the Broken Blade                 x1   W      threat-evasive-host         M
  4  Lumberknot                               x2   G      payoff-resilient-host       U
  5  Sigarda, Host of Herons                  x1   GW     payoff-resilient-host       M
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                                     Qty  Color  Role                        Rar
  2  Travel Preparations                      x2   G      engine-attachment           U
  2  Valorous Stance                          x1   W      interaction-protection      U
  3  Clear Shot                               x2   G      interaction-removal         U
```

### OTHER SPELLS (4)

```
CMC  Card                                     Qty  Color  Role                        Rar
  1  Gryff's Boon                             x2   W      engine-attachment           U
  3  Cathar's Call                            x1   W      engine-attachment           U
  4  Faith Unbroken                           x1   W      engine-attachment           U
```

## SIDEBOARD (10)

```
Card                                     Qty  Color  Role / When to board in     Rar
Aim High                                 x1   G      flex-untap-reach            C
Ambush Viper                             x1   G      flex-deathtouch-blocker     C
Avacynian Priest                         x2   W      hate-nonhuman-blockers      C
Angelic Purge                            x1   W      hate-noncreature-permanent  C
Bound by Moonsilver                      x1   W      hate-single-large-threat    C
Slayer of the Wicked                     x2   W      hate-tribal-creatures       U
Soul-Guide Gryff                         x1   W      hate-graveyard              C
Subjugator Angel                         x1   W      hate-wide-boards            U
```

## ANALYSIS

### DECK IDENTITY

A GW midrange Voltron deck built around a role rather than a keyword: a host that survives a targeted removal spell. Seven of its fifteen creature copies qualify -- Sigarda and two Lumberknot cannot be targeted at all, two Young Wolf come back bigger via Undying, and two Lunarch Veteran return from the graveyard as fliers -- and eight do not, which is what makes the role a real constraint rather than a label. Onto those it stacks six attachments, four of which survive their host: Travel Preparations places permanent counters attached to nothing, and Gryff's Boon returns for {3}{W}. Green's contribution is that removal scales with the suit: Clear Shot turns whatever the attachments built into repeatable unconditional removal that costs no card.

Phase 3 predicted this would be the weakest of the four builds. That prediction was wrong, and
so was the first attempt to fix the problem the structural gate found. Both are worth recording, because the second
error is the more interesting one.

### What Phase 3 missed

The initial read scoped green by the Voltron/Equipment tag, which contains exactly one green card — a mana-fixing
cantrip. On that basis green looked like it contributed nothing but Sigarda. The Phase 5A machine seed returned 118
cards and showed otherwise:

| Card | What green actually brings |
|---|---|
| Clear Shot ×2 | "It deals damage equal to its power to target creature you don't control" — removal that **scales with the suit** and costs no card |
| Travel Preparations ×2 | "+1/+1 counter on each of up to two target creatures. Flashback {1}{W}" — **permanent** counters, attached to nothing, so no removal spell can strip them |
| Lumberknot ×2 | A **second hexproof body**, and uncommon, so unlike Sigarda it is legal at two copies |
| Young Wolf ×2 | "Undying" — a one-mana host that survives its first removal spell and comes back larger |

Clear Shot is the single best argument for this colour pair. Every other Voltron build in this cube has the same
problem: mana spent on removal is mana not spent on the suit. In GW the suited creature **is** the removal spell.

### The gate failure, and the fix that was wrong

Phase 6b's assembly check failed this deck outright, and it was right to. "Suit up a creature the opponent cannot
target" needs a hexproof body, and there are exactly three in the whole GW pool — one mythic-capped Sigarda plus two
Lumberknot. Neither sanctioned remedy was available: no further copies exist, and revising the thesis turn does not
reach the 0.75 threshold until **turn 11**, which is meaningless for an aggressor deck.

My first repair redefined the payoff role as "the six attachments" and the enabler as "the twelve bodies." That passed
at p=0.90 and p=0.99 — and the Phase 9 grill correctly threw it out. Its objection was exact: a two-role gate satisfied
by relabelling the two largest buckets in the list **cannot fail**, so it had been dissolved rather than passed. Worse,
the record was then trying to have hexproof both ways — declared inessential so the gate would pass, while three
separate concessions leaned on "the threat cannot be targeted at all."

### The fix that was right

The error was in the *definition*, not the deck. A Voltron gate should not ask "does it have hexproof." It should ask
**"does this host survive a targeted removal spell"** — and that role is falsifiable, because **8 of 15 creature copies
in this deck fail it**:

| Qualifies | Copies | Weight | Why discounted |
|---|---|---|---|
| Sigarda, Host of Herons | 1 | 1.0 | Cannot be targeted at all |
| Lumberknot | 2 | 1.0 | Cannot be targeted at all |
| Young Wolf | 2 | 0.6 | Undying returns the body, but the Auras still fall off |
| Lunarch Veteran // Luminous Phantom | 2 | 0.6 | Disturb returns it as a flier; costs mana and a turn |
| Valorous Stance | 1 | 0.7 | The only card that saves host *and* suit — but one-shot, and useless against exile or bounce |

Correcting the definition is what clears the gate, and it is worth being precise about that: the grill ran the
counterfactual and the new role scores **p=0.817 on the pre-repair list**, already above threshold. Two Lunarch
Veteran were then added — but for the `screw` mode and the absence audit, not as the remedy — taking it to effective
6.1 and **p=0.88**, with hexproof kept **inside** the gate at full weight. The gate and the concessions now rest on
the same fact instead of contradicting each other.

### Three hexproof misreadings worth internalising

Hexproof reads *"This creature can't be the target of spells or abilities your opponents control."* It protects **the
creature**. It does not protect:

- **The Auras on it.** Two of the three sketchers claimed an Aura on Sigarda can never be removed. It can — the Aura is
  a separate permanent with no hexproof of its own.
- **Faith Unbroken's exile.** Its oracle is "exile target creature an opponent controls **until this Aura leaves the
  battlefield**." Putting it on a hexproof body does not make the exile permanent.
- **Anything that doesn't target.** Vanquish the Horde says "Destroy all creatures." Hexproof is no help at all. It is 1
  of only 4 sweepers in the cube, and it is the clean answer to this entire deck.

### What the grill corrected in my arithmetic

Three numbers in this record did not reproduce, and all three are fixed above: the slot allocation summed to 19 of 24
while still dividing by 24 (making the reported 50% Threats figure an artifact of the missing five); `accel: 4` was
defended on the grounds that it was *not* Clues when half of it was; and the `screw` mitigation claimed Somberwald Sage
"bridges a two-land hand into a four-mana turn" when Sage costs `{2}{G}` and cannot be cast on two lands at all. That
last one was repaired in the list rather than the wording — both Sages are gone, and true turn-one plays went from 4 of
24 to 7 of 24, lifting the simulated turn-one play rate from 69.8% to 87%.

One correction ran in my favour and is recorded anyway: the pipeline computes assembly probabilities with a
with-replacement binomial rather than a hypergeometric, so every "63.7%" in this record is understated by about seven
points — the true figure is closer to **70%**. It does not change the outcome, because 70% is still below the 0.75 gate,
so the original failure was real.

### The rare budget

This deck now spends **3 of 5** rare/mythic slots — Sigarda, Gisela and Hopeful Initiate. It spent only 1 before the
grill pointed out that four unused slots were sitting next to four silently dropped rare candidates. The strongest
cards still cut on cost rather than mechanism are **Unnatural Growth** ("double the power and toughness of each creature
you control" every combat — the largest single effect available to any of these four decks, cut only because MV 5
collides with Sigarda), **Eldritch Evolution** (sacrifice a three-drop, tutor Sigarda exactly), and **Duskwatch
Recruiter** (a repeatable creature tutor, which directly attacks the ~70% availability problem). All three fit under the
cap.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (24 nonland):  1:9  2:6  3:4  4:4  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  resilient_host: 8 copies (effective 6.1: Young Wolf@0.6, Young Wolf@0.6, Lunarch Veteran // Luminous Phantom@0.6, Lunarch Veteran // Luminous Phantom@0.6, Valorous Stance@0.7) → p=0.88 (need ≥ 0.75)
  PASS  attachment: 6 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 87%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Vanquish the Horde at MV 8 does NOT target, so hexproof does not protect Sigarda or Lumberknot from it either -- the one hole in this deck's plan, stated rather than hidden. The answer is to go over the top: Sigarda is a printed 5/5 flier, Gisela a 4/3 flier with first strike and lifelink, and Gryff's Boon grants flying, while 2 Clear Shot let a suited creature pick off the largest blocker each turn without spending a card. Subjugator Angel and 2 Avacynian Priest are the sideboard answers.
  OK        single_large_threat: Clear Shot, Faith Unbroken, Fiend Hunter, Valorous Stance, Gisela, the Broken Blade
  OK        noncreature_permanents: Cathar Commando, Hopeful Initiate
  CONCEDED  stack: No counterspell exists in G or W anywhere in this pool -- independently verified by the Phase 9 Challenger, which found zero 'counter target' matches across all 109 GW-usable nonland cards. Mitigating would require abandoning the locked GW identity and with it Sigarda, Clear Shot and Duel-style fight removal. NOTE: this concession no longer leans on hexproof. The Challenger correctly objected that an earlier version argued the deck's threat 'cannot be targeted at all' while the assembly gate simultaneously declared hexproof inessential; hexproof is now inside the gate at full weight, so the two statements rest on the same fact.
  CONCEDED  graveyard: No mainboard graveyard hate. Soul-Guide Gryff ('exile up to one target card from a graveyard') is the only GW option and it is a one-shot at MV 5 against a 75-card, 27.1%-density class -- the Challenger is right that this is a token gesture rather than an answer, and the class is effectively unanswered rather than sideboarded. Recorded as a pool limit.
```

- ASSEMBLY failed twice and was repaired twice; this is the only HARD-gate failure across the four builds. First failure: declaring 'hexproof body' the payoff gave 3 copies (effective 2.6) for p=0.58 against a 0.75 threshold. First repair, REJECTED by the Phase 9 Challenger: redefining payoff as the 6 attachments and enabler as the 12 bodies passed at p=0.90/0.99, but the Challenger correctly showed that a two-role gate satisfied by relabelling the two largest buckets of any creature deck cannot fail, and that the record was declaring hexproof inessential for the gate while relying on it for three concessions. Second repair, ADOPTED: neither sanctioned remedy was available as the role was originally framed -- no further hexproof copies exist (verified: 3 is the entire GW population), and revising the thesis turn does not reach 0.75 until turn 11, which is absurd for an aggressor. The error was the role DEFINITION: a Voltron gate should measure 'a host that survives a targeted removal spell', which is falsifiable -- 8 of 15 creature copies fail it, as do all 6 attachments and 3 of the 4 interaction cards. STATED PRECISELY, per the Challenger's counterfactual in the approval round: correcting the definition ALONE clears the gate, because the new role applied to the pre-repair list scores effective 4.9 for p=0.817, already above 0.75. The two Lunarch Veteran raise it to effective 6.1 for p=0.88, but they are not the remedy and should not be presented as one -- they are independently justified by the screw mode (true turn-one plays 4 of 24 -> 7 of 24) and by the Challenger's absence audit. The gate was cleared by fixing a misdefinition, not by adding cards. Hexproof was kept inside the role at full weight. The gate and the concessions rest on the same fact.

- NOTE (Challenger A4): the pipeline's assembly p-values are computed with a with-replacement binomial, not a hypergeometric. The correct hypergeometric value for 3 hexproof bodies at 13 cards seen is 70.4%, about 7pp above the 63.7% quoted throughout this record. This runs in the builder's favour and does not change the outcome -- the correct figure is still below the 0.75 gate, so the original failure was real -- but every '63.7%' here is understated and should be read as approximately 70%.

- No WARN-tier flags were raised. Curve, goldfish and coverage returned PASS on every run.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to action five ways: 2 Gryff's Boon have '{3}{W}: Return this card from your graveyard to the battlefield attached to target creature'; 2 Travel Preparations have 'Flashback {1}{W}', so four counters come from two cards; 2 Lunarch Veteran have 'Disturb {1}{W}' and Twinblade Geist has 'Disturb {2}{W}', so three more cards are castable a second time from the graveyard; 2 Thraben Inspector each leave a Clue; and Cathar's Call makes a free 1/1 every end step. CORRECTED per Challenger A2: an earlier version also claimed Somberwald Sage made a flooded board 'castable at instant speed', which is false -- Sage mana is restricted to creature spells and those are sorcery-speed. Both Sages are now cut and the claim is gone. |
| screw | mitigation | REWRITTEN after Challenger A1/A3 marked this UNSATISFIED, and the finding was correct on both legs. The old text claimed '2 Somberwald Sage bridge a two-land hand into a four-mana turn' -- Sage is {2}{G}, three mana, uncastable on two lands -- and counted 6 one-drops of which 2 were Gryff's Boon, an Aura with no legal turn-one target. Real turn-one creature plays were 4 of 24. Repaired in the list rather than the wording: 2 Lunarch Veteran were added, taking genuine turn-one plays to 7 of 24 (2 Young Wolf, 2 Thraben Inspector, 2 Lunarch Veteran, 1 Hopeful Initiate), and the goldfish simulation's turn-one play rate rose from 69.8% to 87%. Nine of 24 nonland cards cost 1 and six cost 2. Phase 6b measures 84% keepable and 84% for three lands by turn three. |
| decapitation | mitigation | This is the mode the deck is built for, and after the Phase 9 repair it is measured by the assembly gate rather than asserted alongside it. The resilient-host role -- a host that survives a targeted removal spell -- holds 8 copies at an effective 6.1 for p=0.88: Sigarda and 2 Lumberknot cannot be targeted at all; 2 Young Wolf return via 'Undying'; 2 Lunarch Veteran return from the graveyard as fliers via Disturb; and Valorous Stance grants indestructible at instant speed, the only card that preserves host AND suit. Eight of 15 creature copies do NOT qualify, which is what makes this a role rather than a label. Behind it, 4 of the 6 attachments survive their host independently: 2 Travel Preparations place counters attached to nothing, and 2 Gryff's Boon return for {3}{W}. Stated honestly per Challenger A7: the other 2 attachments (Faith Unbroken, Cathar's Call) are card-disadvantage when the host dies, and 8 of 15 creature copies are removable, so this is a strong answer rather than a complete one. |
| gas-out | mitigation | Net-positive or self-replacing cards: 2 Thraben Inspector (Clue = a card), 2 Gryff's Boon (returns itself), 2 Travel Preparations (flashback = a second casting), 2 Lunarch Veteran (disturb = a second body), 1 Twinblade Geist (disturb), 1 Cathar's Call (a body every end step) = 10 of 24 nonland cards producing a second card, a second use, or ongoing board -- up from 8 before the Phase 9 repair. Still below the mono-white build's 13, and the deck compensates with 2 Clear Shot, which are removal that costs no card because the damage comes from a creature already on the battlefield. |
| raced | mitigation | Against the cube's fastest clocks (dossier: 58 evasion cards at 21% density, 23 Vampires) this build holds 2 Clear Shot, whose damage scales with its own board, plus Gisela ('Flying, first strike, lifelink'), which both blocks profitably and swings the life total, and 2 Young Wolf with 'Undying' that block twice. Stated honestly per Challenger A8: Clear Shot deals damage equal to YOUR creature's power, and base power 3 or more is 4 of 15 creature copies (2 Cathar Commando, Gisela, Sigarda) -- so before an attachment resolves it is often a 2-damage spell, and the 'kills a 4/4 for free' claim only holds once the suit is online. The sideboard adds Ambush Viper, 2 Avacynian Priest and Aim High ('gains reach') against fliers. |
| disruption-fizzle | accepted | The critical turn is the turn an attachment resolves, and GW cannot protect a spell on the stack. Independently verified by the Phase 9 Challenger: zero 'counter target' matches across all 109 GW-usable nonland cards in the pool. What mitigating would cost: abandoning the locked GW identity, and with it Sigarda, Lumberknot and Clear Shot -- the hexproof plan and the scaling removal are both green-white or green, and there is no version of this deck in other colours. Stated without leaning on hexproof twice (Challenger B3): on the roughly two games in three where a hexproof body is online, an opponent holding instant-speed removal has no legal target, so there is no critical turn to disrupt; on the rest, Valorous Stance at 1 of 24 is the only instant-speed answer and the deck is exposed. That is the real price, and the assembly gate now prices it rather than routing around it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Abundant Maw, It of the Horrid Swarm, Decimator of the Provinces, Distended Mindbender, Elder Deep-Fiend, Emrakul, the Promised End | CORRECTED after Challenger B5, which showed the original reason was factually false. It claimed every Emerge cost here is off-colour; in fact Decimator of the Provinces is 'Emerge {6}{G}{G}{G}' and It of the Horrid Swarm is 'Emerge {6}{G}', both mono-green (color_identity ['G']) and both castable in this deck. The real mechanism, never previously stated: emerge is 'reduced by that creature's mana value', so the cost is a CREATURE -- and creatures at MV 4 or more in this list are 1 Sigarda, 2 Lumberknot and 1 Gisela, every one of them either a hexproof body or the best evasive host in the deck. Sacrificing a Lumberknot to cast a 7/7 means eating one of the only three hexproof creatures in the entire pool, which is the two-for-one this archetype exists to avoid. The other five ARE genuinely off-colour: Abundant Maw {6}{B}, Distended Mindbender {5}{B}{B}, Wretched Gryff {5}{U}, Elder Deep-Fiend {5}{U}{U}, and Emrakul at MV 13 with a card-type discount reaching at best MV 8. |
| Bruna, the Fading Light, Brisela, Voice of Nightmares | Meld halves: Bruna is MV 7 and Brisela MV 11, and each requires owning and controlling the named partner. Neither is reachable, and each would consume one of the five rare/mythic slots that Sigarda already claims one of. |
| Vanquish the Horde | Vanquish the Horde: 'Destroy all creatures' destroys the suited host and every Aura on it -- this deck's own loss condition. A sweeper is anti-synergistic with a one-big-creature plan regardless of its cost reduction, and it does not even spare the hexproof targets, since 'destroy all' does not target. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.25   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.67 adj [MV 2.25 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  36.7%  prod  50.0%  gap -13.3pp  [OK]
  W  demand  63.3%  prod  62.5%  gap  +0.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            40 / 40
[PASS] Sideboard size            10 / 10
[PASS] Copy limits               commons/uncommons max 2 copies, rares/mythics max 1 copy, basics unlimited and rarity-exempt.
                                 Phase 5C check 3 cross-checked every distinct card's mainboard+sideboard total against cube_search.get_max_copies. PASS. Ambush Viper is now 1 copy (sideboard only).
[PASS] Rare/mythic cap           3 / 5 -> Gisela, the Broken Blade, Hopeful Initiate, Sigarda, Host of Herons
[PASS] Colour usability          every nonland card usable in GW via effective_cost.best_mode
[PASS] Splash cap                splash_colors = [] (no off-colour card in the list)
[PASS] Basic lands               8 Plains + 6 Forest are format-supplied and exempt from the rarity cap and the copy limit.
[PASS] Cube membership           every card matched by exact name in the working pool
```