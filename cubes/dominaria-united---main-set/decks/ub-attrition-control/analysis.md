---
deck_name: "ub-attrition-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-11T19:15:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Island
  8x Swamp
  2x Contaminated Aquifer      UB dual, enters tapped
```

### CREATURES (9)

```
CMC  Card                          Qty   Color  Role                              Rar
  3  Academy Wall                  x2    U      0/5 blocker + loot engine         C
  3  Haughty Djinn                 x1    U      Evasive threat + spell discount   R
  4  Ertai Resurrected             x1    BU     Flash counter/removal + body      R
  4  Rona, Sheoldred's Faithful    x1    BU     Recursive drain body              U
  4  Sheoldred, the Apocalypse     x1    B      Drain finisher                    M
  5  Sphinx of Clear Skies         x1    U      Evasive 5/5 ward-2 finisher       M
  7  Tolarian Terror               x2    U      Ward 5/5 finisher                 C
```

### INSTANTS & SORCERIES (14)

```
CMC  Card                          Qty   Color  Role                              Rar
  1  Cut Down                      x2    B      1-mana instant removal            U
  1  Rona's Vortex                 x2    U      1-mana bounce / kicked = tuck     U
  2  Essence Scatter               x1    U      Counter a creature spell          C
  2  Impulse                       x2    U      Instant card selection            C
  2  Tribute to Urborg             x2    B      Instant -2/-2, scales w/ GY       C
  3  Shadow Prophecy               x2    B      Instant draw-2 (Domain=2)         C
  4  Drag to the Bottom            x1    B      Sweeper -3/-3                     R
  4  Extinguish the Light          x2    B      Unconditional removal             C
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                Rar
Essence Scatter               x1    U      vs bombs and ramp payoffs              C
Negate                        x2    U      vs control, sagas, noncreature bombs   C
Pilfer                        x2    B      vs control mirror - strip the bomb     C
Vohar, Vodalian Desecrator    x1    BU     Grind engine: loot, drain, flashback   U
Gibbering Barricade           x2    B      vs aggro: 2/4 defender for 3           C
Phyrexian Espionage           x2    U      vs grindy mirror: draw 2, kicked disc  C
```

## ANALYSIS

The deck wins by **drain, not by combat**. That distinction drives every card choice. Sheoldred, the Apocalypse deals 2 per opponent draw step with no board presence required, and Rona, Sheoldred's Faithful converts every instant and sorcery into 1 more reach — then recurs herself from the graveyard by discarding two cards. Against a deck that has stabilized behind blockers, this build still kills on schedule.

### The sweepers are one-sided by construction

This is the deck's best structural feature and it is not an accident. Drag to the Bottom is Domain: X = 1 + basic land types you control. In a straight UB manabase that is **permanently −3/−3** (Island + Swamp; Contaminated Aquifer is `Land — Island Swamp` and adds no third type). The creature suite was then built entirely above that line:

| Creature | P/T | After Drag to the Bottom (−3/−3) |
|---|---|---|
| Academy Wall ×2 | 0/5 | survives (0/2) |
| Haughty Djinn | */4 | survives (*/1) |
| Sheoldred | 4/5 | survives (1/2) |
| Rona, Sheoldred's Faithful | 3/4 | survives (0/1) |
| Sphinx of Clear Skies | 5/5 | survives (2/2) |
| Tolarian Terror ×2 | 5/5 | survives (2/2) |
| **Ertai Resurrected** | **3/2** | **dies** |

**8 of 9 creature copies survive the deck's own wrath.** Against a typical set-cube board of 2/1s, 2/2s and 3/2s, Drag to the Bottom is a 4-mana one-sided sweeper that leaves Sheoldred or a Terror standing. Ertai is the lone exception, and he is a flash ETB-value creature whose two-for-one has already resolved before any sweeper gets cast.

### Tolarian Terror's real cost

Printed MV 7 is cosmetic. It costs {6}{U} minus {1} for each instant/sorcery **card in the graveyard** — and the mainboard runs 14 of them (61% of nonlands).

| Spells in graveyard | Real cost | Total mana |
|---|---|---|
| 0 | {6}{U} | 7 |
| 3 | {3}{U} | 4 |
| 4 | {2}{U} | 3 |
| 6+ | {U} | 1 (floor — only generic is reduced) |

A control deck casting one removal spell per turn has 3 in the yard by turn 4–5 with zero effort, before Academy Wall's loot even contributes. Terror is realistically a **3–4 mana 5/5 with ward {2}** on turns 5–6, and both copies frequently land in the same turn cycle.

### Two traps worth knowing before you play it

1. **Haughty Djinn does *not* discount Tolarian Terror.** Its text is "instant and sorcery *spells* you cast cost {1} less" — Terror is a creature spell. The two do not stack. Djinn is also a genuine **0/4 on turn 3** with an empty graveyard; deploy it turn 4–5, not on curve.
2. **Impulse and Shadow Prophecy do not trigger Sheoldred.** Both say "put one/two of them into your hand" — that is not *drawing* a card. Four of the deck's card-flow slots leave Sheoldred's lifegain trigger cold. Silver Scrutiny (cut, see below) would have triggered her; the remaining true draws are Academy Wall's loot and Phyrexian Espionage out of the board.

Shadow Prophecy is also weaker than it looks: at Domain 2 you look at the top 2 and put *up to two* into your hand, so the "rest into your graveyard" clause bins exactly **zero** cards. It is a 3-mana instant "draw 2, lose 2 life" — still fine, but it is not graveyard fuel.

### Cards Considered but Excluded

**Rares/mythics cut against the 5-card cap** (the binding constraint — every inclusion below displaced one of these):

| Card | Why it lost the slot |
|---|---|
| **Silver Scrutiny** | Cut late for Sphinx of Clear Skies. A one-shot "draw X" in a deck already running six other card-flow pieces; the deck needed an evasive body far more than a seventh draw spell. **The single most likely card to swap back in** if you find the deck flooding on threats. |
| **Liliana of the Veil** | Symmetric discard actively fights a draw-heavy control deck. The −2 edict is real removal, but you are the player with cards in hand. |
| **The Cruelty of Gix / Braids, Arisen Nightmare** | Both genuine bombs. Braids in particular is excellent here (sacrifice flooded lands each turn; opponent sacs or you draw a card and they lose 2 — and it *is* a real draw, so it triggers Sheoldred). It lost only because the 5-rare cap is brutal. **Best add if you raise the cap to 6.** |
| **The Phasing of Zhalfir** | Chapter III destroys all creatures — including both Terrors and Sheoldred. Anti-synergistic with a deck whose creatures are the win condition. |
| **Academy Loremaster** | The extra draw is symmetric; it hands an aggro opponent free cards. |
| **Defiler of Dreams / Tyrannical Pitlord / Vodalian Hexcatcher** | Fine cards, no rare slot left. |

**Strong uncommons a tier below the includes:**
- **Ertai's Scorn** ({1}{U}{U}, hard counter, cheaper if the opponent has cast two spells) — the deck maindecks only one counter (Essence Scatter). This is the first card in if you expect more noncreature bombs.
- **Frostfist Strider** (5-mana 4/4 ward {2}, ETB taps + stuns a blocker) — a resilient clock, but the deck is already top-heavy at 4–5 mana.
- **Sengir Connoisseur** (5-mana 3/3 flier that grows on every creature death) — real synergy with 11 removal spells, but too slow.

**Deliberately excluded, and why:**
- **Choking Miasma** — a −2/−2 sweeper for 3 that this deck's creatures survive; it looks perfect. It is **illegal here**: its `{G}` kicker gives it color identity `["B","G"]`, outside UB. Its base cost {1}{B}{B} is castable, so if you don't enforce color identity strictly, this is a free upgrade — main-deck it over Essence Scatter.
- **Crystal Grotto** — taps for *colorless*; producing colored mana costs an extra {1}, and it has no basic land type, so it does not raise Domain for Drag to the Bottom. Actively bad in a deck with {B}{B}, {U}{U} and {1}{U}{B}{B} costs.
- **Bone Splinters** — "sacrifice a creature" as an additional cost, in a 9-creature control deck. Unplayable.
- **Impede Momentum** — tap + 3 stun counters at sorcery speed is delay, not an answer.

**Sideboard considerations that didn't make the 10:** Tidepool Turtle (a 4-mana 2/5 whose only text is scry — strictly worse than the maindecked Academy Wall), Ertai's Scorn, Frostfist Strider, Toxic Abomination.

### Known gap

There is **no graveyard hate in the entire UB pool** — zero exile effects across all 143 UB-legal cards. Against a graveyard/aristocrats opponent you must race on the removal and counter axis instead (Pilfer + Negate). This is a pool limitation, not a build error.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  53.1%  prod  58.8%  gap  -5.7pp  [OK]
  U  demand  46.9%  prod  52.9%  gap  -6.0pp  [OK]
```

17 lands (42.5% of N=40), the bottom of the Control band. Zero ramp, and five double-pip four-drops (Extinguish the Light {2}{B}{B}, Drag to the Bottom {2}{B}{B}, Sheoldred {2}{B}{B}, Ertai {2}{U}{B}, Rona {1}{U}{B}{B}) mean missing land drop 4 loses the game outright. Black sources 10 / blue sources 9 tracks the ~53/47 pip split. Only 2 of 17 lands enter tapped.

## RESTRICTIONS COMPLIANCE

```
[PASS]  Commons/uncommons <= 2 copies       max observed: 2 (Cut Down, Rona's Vortex,
                                            Tribute to Urborg, Impulse, Shadow Prophecy,
                                            Academy Wall, Extinguish the Light,
                                            Tolarian Terror, Negate, Pilfer,
                                            Gibbering Barricade, Phyrexian Espionage)
[PASS]  Rares/mythics <= 1 copy each        all 5 are singletons
[PASS]  Max 5 rares/mythics total (main+side)   EXACTLY 5/5:
                                            Haughty Djinn (R), Ertai Resurrected (R),
                                            Drag to the Bottom (R),
                                            Sheoldred, the Apocalypse (M),
                                            Sphinx of Clear Skies (M)
                                            Sideboard contains 0 rares.
[PASS]  All cards from cube mainboard       verified by exact name against working pool
[PASS]  Color identity within {U,B}         all 20 distinct nonbasic cards pass
                                            (Choking Miasma rejected: CI = [B,G])
[PASS]  Deck size                           40 mainboard + 10 sideboard
```
