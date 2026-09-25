---
deck_name: "wu-spirits-blink-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Deserted Beach          WU dual, untapped if you control 2+ other lands
  2x Idyllic Beachfront          WU dual, always enters tapped
  8x Island
  6x Plains
```

### CREATURES (15)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Lantern Bearer // Lanterns' Lift         x2    U      Threat: 1-mana Spirit flier, disturb       C
  1  Mausoleum Wanderer                       x1    U      Interaction: sac-counter, grows on Spirits R
  2  Niblis of the Urn                        x2    W      Payoff: taps a creature on attack          U
  2  Twinblade Geist // Twinblade Invocation  x1    W      Threat: double strike, disturb             U
  3  Dauntless Cathar                         x1    W      Engine: Spirit token from graveyard        C
  3  Nebelgast Herald                         x2    U      Payoff: taps a blocker on every Spirit ETB U
  3  Spell Queller                            x1    UW     Interaction: flash counter on a Spirit     R
  3  Thalia, Heretic Cathar                   x1    W      Interaction: their creatures enter tapped  R
  4  Mist Raven                               x2    U      Interaction: bounce on an ETB flier        U
  4  Tower Geist                              x1    U      Engine: self-replacing Spirit flier        C
  6  Subjugator Angel                         x1    W      Payoff: mass Falter finisher               U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Essence Flux                             x2    U      Engine: 1-mana instant blink, +1/+1 on Spirits C
  2  Valorous Stance                          x2    W      Interaction: modal protect / kill          U
  3  Cackling Counterpart                     x1    U      Engine: instant-speed Spirit copy          U
  3  Geistlight Snare                         x1    U      Interaction: Spirit-discounted counter     U
  3  Lingering Souls                          x2    W      Threat: two Spirit tokens per cast         U
```

## SIDEBOARD (10)

```
Card                                     Qty   Color  Role / When to board in                     Rar
Syncopate                                x1    U      Combo / big spells; exiles rather than binning C
Avacynian Priest                         x1    W      Grindy games; 113 of 166 creatures are non-Human C
Cathar Commando                          x2    W      Artifacts (24) / enchantments (25)          C
Bound by Moonsilver                      x1    W      Catch-all; also stops transform             C
Imprisoned in the Moon                   x1    U      The cube's 7 planeswalkers; any resolved permanent C
Slayer of the Wicked                     x2    W      Vampire / Werewolf / Zombie decks (51 of 166 creatures) U
Soul-Guide Gryff                         x2    W      Graveyard decks (27% of cube)               C
```

## ANALYSIS

### DECK IDENTITY

A WU Spirits tempo deck that uses Nebelgast Herald's "whenever this creature or another Spirit you control enters, tap target creature an opponent controls" as its removal suite. Ten of the fifteen creature cards are Spirits, and Lingering Souls, Cackling Counterpart and Dauntless Cathar add five more Spirit bodies as tokens, so almost every deployment strips a blocker while adding evasive power. Niblis of the Urn delivers the same tap on attack without needing a new body, and Subjugator Angel taps the entire opposing board to convert a stalled race into lethal on the thesis turn. Essence Flux and Cackling Counterpart re-trigger the Herald at instant speed, which is where the Blink/ETB constraint lives in this shell.

### KEY OBSERVATIONS

**The tap count is the removal suite.** This deck runs zero unconditional removal spells. Every "answer" is a tap
(Nebelgast Herald, Niblis of the Urn, Subjugator Angel, Thalia, Heretic Cathar) or a bounce (Mist Raven). That is a
deliberate tempo choice under an aggressor role, but it means the deck must convert the tempo into a kill — a game that
goes long returns every answered threat to the opponent.

**Spirit density, counted.** Of the 15 creature cards in the mainboard, 10 are Spirits (Lantern Bearer x2, Niblis x2,
Twinblade Geist x1, Tower Geist x1, Nebelgast Herald x2, Mausoleum Wanderer x1, Spell Queller x1). Lingering Souls x2
adds four Spirit tokens, Cackling Counterpart can add a fifth, and Dauntless Cathar buys a sixth from the graveyard.
That is up to 16 Spirit-entry events across 23 nonland cards — each one a Nebelgast Herald trigger.

**Evasion, counted.** 17 of the 20 potential bodies fly. The three that do not are Twinblade Geist (double strike),
Thalia, Heretic Cathar (first strike) and Dauntless Cathar. This is why Guardian of Pilgrims — an on-curve, on-tribe
Spirit — did not make the deck: the tap plan exists to let fliers through, so a ground 2/1 is the one body it does not need.

**Two piloting traps, both real.** (1) Spell Queller reads "When this creature leaves the battlefield, the exiled card's
owner may cast that card without paying its mana cost." Essence Flux x2 and Cackling Counterpart all interact with Spirits,
and Spell Queller is a Spirit — blinking it hands the opponent their spell for free. Never target it. (2) Essence Flux reads
"return that **card**", so it cannot return a Lingering Souls or Cackling Counterpart token; five of the deck's potential
Spirit bodies are illegal Flux targets.

**Lingering Souls is played as half a card, knowingly.** Its flashback costs {1}{B} and is uncastable here. It is in the
deck purely as "{2}{W}: two 1/1 flying Spirits" — two Herald triggers and two evasive bodies for three mana, which is the
best rate in these colours for this specific trigger. If you later splash black, the card roughly doubles in value.

**The thinnest gate.** Payoff assembly clears at p=0.7548 against a 0.75 threshold — a margin of 0.005. That is measured
under a deliberately harsh discount schedule (Niblis x2 and Subjugator Angel each at 0.7). If you cut any payoff copy the
gate fails; if you want headroom, Battleground Geist or a third Herald effect is the place to add it.

**Rare budget.** The deck spends 4 of the allowed 5 rare/mythic slots: Deserted Beach (the cube's only untapped-capable
WU dual), Mausoleum Wanderer, Spell Queller and Thalia, Heretic Cathar. One slot is left unspent deliberately, so there
is room to add a rare on iteration without cutting one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:5  2:5  3:9  4:3  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.1: Niblis of the Urn@0.7, Niblis of the Urn@0.7, Subjugator Angel@0.7) → p=0.75 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.8: Dauntless Cathar@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 68%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Subjugator Angel, Nebelgast Herald, Thalia, Heretic Cathar
  OK        single_large_threat: Valorous Stance, Mist Raven
  CONCEDED  noncreature_permanents: 0 of 23 nonland cards answer a RESOLVED artifact or enchantment; Spell Queller exiles a spell on the stack, not a permanent, so it was withdrawn from this class. The cube holds 49 such permanents (24 artifacts + 25 enchantments = 17.7% of 277 nonland cards). Conceded to keep the nonland slots on a turn-6 clock; 2x Cathar Commando ('{1}, Sacrifice this creature: Destroy target artifact or enchantment') board in, and they are 2 of only 6 such answers in the entire cube.
  OK        stack: Geistlight Snare, Mausoleum Wanderer, Spell Queller
  CONCEDED  graveyard: No maindeck graveyard answer. The cube's graveyard-interaction density is 75 of 277 nonland cards (27.1%), its largest threat class. 2x Soul-Guide Gryff board in and are the only WU cards that exile from an OPPONENT's graveyard. Conceded maindeck to keep 23 nonland slots on a turn-6 clock.
```

No WARN-tier flags: curve and goldfish both passed on the first run and again after the Phase 9 repair.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Essence Flux, Cackling Counterpart's flashback ({5}{U}{U}) and Dauntless Cathar's "{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying" all convert surplus mana into Spirit entries. Lanterns' Lift ({2}{U} disturb) and Twinblade Invocation ({2}{W} disturb) let two of the cheapest cards be re-cast from the graveyard as Auras, so flooded turns still deploy. Seven of 23 nonland copies are mana sinks or second castings. |
| `screw` | mitigation | Five 1-drops and five 2-drops (MV curve 1:5 2:5 3:9 4:3 6:1) make two-land hands keepable; the goldfish check reports 87% keepable and 88% to three lands by turn three. Nine of seventeen lands produce W and eleven produce U, so a two-land keep is rarely colour-screwed. |
| `decapitation` | mitigation | The payoff is redundant by design: 2x Nebelgast Herald plus 2x Niblis of the Urn (taps on attack, no ETB required) plus Subjugator Angel - five functional copies, effective 4.1 after discounting Niblis and Subjugator to 0.7 each. Valorous Stance ("Target creature gains indestructible until end of turn") protects a Herald from destroy- and damage-based removal; it does not stop exile or bounce, of which this cube has several. |
| `gas-out` | mitigation | Tower Geist ("look at the top two cards of your library. Put one of them into your hand"), Lingering Souls (two bodies per card), Cackling Counterpart (flashback), Dauntless Cathar (graveyard activation) and the two disturb creatures. Eight of 23 nonland copies are self-replacing or return from the graveyard. |
| `raced` | accepted | The deck taps blockers rather than killing them, so it cannot profitably block back. Mitigating would mean trading evasive 1- and 2-mana Spirits for defensive bodies, which lowers the Spirit-entry count that IS the removal suite - it would cost the deck its kill mechanism, not just its speed. The dossier lists only 4 sweepers in 300 cards (1.4%), so the race, not the sweeper, is the real risk and it is taken deliberately. |
| `disruption-fizzle` | mitigation | The critical turn is an attack step, not a spell. Nebelgast Herald and Spell Queller both have flash, so the Herald can be deployed after the opponent's removal window; Mausoleum Wanderer ("Sacrifice this creature: Counter target instant or sorcery spell unless its controller pays {X}, where X is this creature's power") and Geistlight Snare protect the alpha-strike turn. On a turn spent attacking rather than deploying, Wanderer's X is typically 1, so it is a tax rather than a hard counter. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wandering Mind, Zealous Conscripts | Splash candidates (R). Adding a third colour to a 2.61-avg-MV tempo deck whose only untapped WU dual is a rare is a mana cost the clock cannot absorb; Zealous Conscripts would also have consumed a rare slot. |
| Conjurer's Closet, Deadeye Navigator | The two headline blink engines, both rares at 5 and 6 mana. Neither affects the board the turn it lands, and the thesis kills on turn 6 - they are the engines Path B is built on, not this one. Together they would have eaten 2 of the 5 rare slots. |
| Helvault | Its mass return only fires "when Helvault is put into a graveyard from the battlefield." The only WU enabler is Cathar Commando; that is a 3-card, 2-turn, one-shot sequence costing a rare slot, not a repeatable blink engine. Angelic Purge EXILES it, which does not trigger the ability at all. |
| Restoration Angel | Cut from the sideboard in the grill. It is proactive value, not an answer: it maps to no threat class in the cube's threat profile, and it was consuming the 5th of 5 rare slots. Imprisoned in the Moon took the slot and answers the cube's 7 planeswalkers, which otherwise had zero answers in all 50 cards. |
| Metallic Mimic | Naming Spirit would add a +1/+1 counter to 10 of 15 creature cards plus 5 tokens - a real count. Cut on the rare budget, not on the count. |
| Guardian of Pilgrims, Mausoleum Guard | Both have empty synergy_clusters in the tagged data, so the Phase 5A seed query never surfaced them - a genuine seed gap, disclosed. On merit: Guardian of Pilgrims has no evasion keyword, and this deck taps blockers precisely so fliers connect (17 of 20 potential bodies fly); its {1}{W} slot is held by Niblis of the Urn, which flies AND is a second payoff copy. Mausoleum Guard costs 4 and must die first. |
| Stitched Mangler, Overcharged Amalgam, Covetous Castaway | None is a Spirit, so none triggers "another Spirit you control enters." Stitched Mangler is the closest call in the cut pile - "When this creature enters, tap target creature an opponent controls. That creature doesn't untap during its controller's next untap step" is a longer-lasting copy of the kill mechanism - but it is a non-flying Zombie that itself enters tapped. |
| Lunarch Veteran // Luminous Phantom | "Whenever another creature you control enters, you gain 1 life" would trigger on 15 creature cards plus 5 tokens - about 20 entry events, the densest lifegain trigger in the colours. Cut because life is not a resource this list converts into damage: it is a Human Cleric (no Herald trigger) and there is no lifegain payoff left in the deck. |
| Voice of the Blessed | Cut on 0 lifegain triggers in the final mainboard. Recorded honestly: that zero is partly a consequence of cutting Lunarch Veteran above, so the two cuts were re-derived independently rather than resting on each other. |
| Mentor of the Meek | "Whenever another creature you control with power 2 or less enters, you may pay {1}... draw a card" qualifies on most of the 15 creature cards plus 5 tokens. Cut on the {1} tax, which competes with deployment on exactly the turns a turn-6 clock must be adding bodies, and on its Human type (no Herald trigger). |
| Delver of Secrets // Insectile Aberration | Flip rate = instant/sorcery density: 8 of 40 cards = 20% per upkeep look. It is also a Human Wizard, so it generates no Herald trigger. |
| Battleground Geist, Angel's Tomb, Drogskol Shieldmate, Gryff's Boon | The strongest tier-below includes. Battleground Geist gives +1/+0 to 10 Spirit cards plus 5 tokens but costs 5 against a 2.61 curve. Angel's Tomb becomes a 3/3 flier on any of ~20 entry events but adds no Spirit trigger of its own. Drogskol Shieldmate is the pool's third flash Spirit but has no flying. Gryff's Boon grants flying to the 3 non-fliers in the list. All four are live swaps for iteration. |
| Fiend Hunter | Would be the only maindeck answer that removes a creature of any size (0 of 23 currently). Excluded because blinking it with Essence Flux returns the exiled creature, so it fights the deck's own engine - the same trap as Spell Queller. |
| Bruna the Fading Light, Gisela the Broken Blade, Hullbreaker Horror, Vanquish the Horde, Elder Deep-Fiend, Jace Unraveler of Secrets, Tamiyo's Journal, Geistcatcher's Rig | Top-end at 5+ mana against a turn-6 thesis; each competes with the turns the clock is actually won on. Bruna and Gisela additionally need each other to meld. |
| Blazing Torch, Butcher's Cleaver, Stitcher's Graft, Demonmail Hauberk, Lunarch Mantle, Neglected Heirloom | Equipment and pump Auras. Butcher's Cleaver and Harvest Hand both read "As long as equipped creature is a Human" - this mainboard runs 0 Humans among 15 creature cards apart from Thalia. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.61 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  57.1%  prod  64.7%  gap  -7.6pp  [OK]
  W  demand  42.9%  prod  52.9%  gap -10.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies ............ PASS  (no card above 2)
Rares / mythics, max 1 copy .................. PASS  (all 4 rares appear once)
Rare + mythic total across MB + SB, max 5 .... PASS  (4 of 5 used; 1 slot unspent)
                                                     Deserted Beach, Mausoleum Wanderer,
                                                     Spell Queller, Thalia Heretic Cathar
All cards from the cube pool ................. PASS  (exact-name match; Plains/Island are
                                                     format-supplied basics)
Colour legality (W/U, no splash) ............. PASS  (effective_cost.best_mode non-None for
                                                     all 22 nonland cards)
Mainboard size 40 / sideboard size 10 ........ PASS
```
