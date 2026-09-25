---
deck_name: "ub-spells-velocity"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-12T00:34:16Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  9x Island
  5x Swamp
  2x Contaminated Aquifer      UB dual (Land - Island Swamp), enters tapped
```

### CREATURES (7)

```
CMC  Card                          Qty   Color  Role                              Rar
  2  Vohar, Vodalian Desecrator    x2    BU     Free GY velocity; sacs to flashbk U
  3  Haughty Djinn                 x1    U      Flier; power = spells in GY       R
  4  Ertai Resurrected             x1    BU     Flash counter/removal + 3/2 body  R
  5  Sphinx of Clear Skies         x1    U      5/5 flier ward-2, GY-independent  M
  7  Tolarian Terror               x2    U      Ward 5/5, -1 per spell in GY      C
```

### INSTANTS & SORCERIES (17)

```
CMC  Card                          Qty   Color  Role                              Rar
  1  Cut Down                      x2    B      1-mana instant removal + GY fuel  U
  1  Rona's Vortex                 x2    U      1-mana bounce; kicked = tuck      U
  2  Essence Scatter               x1    U      Counter creature spell            C
  2  Impulse                       x2    U      Instant selection + GY fuel       C
  2  Silver Scrutiny               x1    U      Scalable flash draw               R
  2  Tribute to Urborg             x2    B      -2/-2; kicked scales w/ GY spells C
  3  Ertai's Scorn                 x2    U      Hard counter, often discounted    U
  3  Phyrexian Espionage           x2    U      Draw 2; kicked = they discard     C
  3  Shadow Prophecy               x2    B      Instant draw-2 (Domain=2)         C
  4  Extinguish the Light          x1    B      Unconditional removal             C
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                Rar
Coral Colony                  x2    U      vs aggro: 1/4 defender, bricks on T2   U
Essence Scatter               x1    U      vs bombs / ramp payoffs                C
Negate                        x2    U      vs control, sagas, noncreature bombs   C
Pilfer                        x2    B      vs control mirror: strip the bomb      C
Gibbering Barricade           x2    B      vs aggro: 2/4 defender for 3           C
Drag to the Bottom            x1    B      vs go-wide: -3/-3 sweeper              R
```

## ANALYSIS

This deck was **rebuilt, not tuned**, after the grill demolished its first draft. The original had 14 instants/sorceries — *fewer than the attrition deck that isn't even trying to be a spells deck* — and filled the gap with two Academy Walls that cannot attack and two 2/1 Haunting Figments that represent a 10-turn clock. It was a worse copy of the attrition deck wearing a spells costume. This version runs **17 instants and sorceries**, the highest of the three builds, and the difference is not cosmetic.

### Everything in this deck reads the same resource

Four cards count **instant and sorcery *cards* in your graveyard** — note *cards*, not spells cast, so milled and discarded cards count too:

- **Tolarian Terror** — costs {1} less per card (generic only; floor is {U})
- **Haughty Djinn** — its power *is* that number
- **Tribute to Urborg** kicked — an *additional* −1/−1 per card
- **Silver Scrutiny / Phyrexian Espionage** — refill to keep casting

The first draft's fatal flaw was that this number grew at only ~0.5 per turn, which put the first Terror at a **mean cast turn of 7.26** — and in **30% of simulated games it never got cast at all.**

### Vohar is the engine the deck was missing

> *"{T}: Draw a card, then discard a card. If you discarded an instant or sorcery card this way, each opponent loses 1 life and you gain 1 life."*
> *"{2}, Sacrifice Vohar: You may cast target instant or sorcery card from your graveyard this turn."*

Vohar puts instant/sorcery **cards** into the graveyard **without casting them**, for free, every single turn, starting on turn 2. That roughly doubles graveyard velocity — which means Terror's discount, Djinn's power, and Tribute's kicker all come online turns earlier. Then he sacrifices himself to flash back your best removal spell. Not running him in a deck built on graveyard spell-count was the single largest error in the first draft.

**On running two copies of a legendary:** this is deliberate and safe. Vohar has a built-in sacrifice outlet, so with a second copy in hand you simply sac the first (flashing back a spell) and replay. The legend rule costs you nothing here.

### Two traps that do NOT work — do not misplay these

1. **Haughty Djinn does not discount Tolarian Terror.** Djinn reduces "instant and sorcery **spells** you cast." Terror is a `Creature — Serpent`. The two marquee payoffs **do not combo.** Anyone telling you otherwise is reading the card wrong.
2. **Tolarian Terror has no evasion.** It is a ground 5/5 with ward {2}. Ward stops removal; it does not stop a 1/1 Bird from chump-blocking it every turn forever. This is exactly why **Sphinx of Clear Skies** is in the deck — a 5/5 **flier** with ward {2} that needs *zero* graveyard and draws cards on connect. It is the only threat here that closes a stalled board, and it is the most important card in the 40.

Also honest: **Shadow Prophecy puts nothing in your graveyard.** At Domain 2 you look at the top 2 and take both, so the "rest into your graveyard" clause bins zero cards. It is a 3-mana instant "draw 2, lose 2 life" — a fine card, but not Terror fuel beyond itself.

### The mana fix

The first draft ran **two** Extinguish the Light at {2}{B}{B}. Simulation put `BB` + 4 lands on turn 4 at only **46.8%** — a coin flip — and no land split repairs it: shifting to 7 Island/7 Swamp lifts BB to 52% while dropping Haughty Djinn's turn-3 `{U}{U}` from 48.5% to 42%. The correct fix was to **stop demanding {B}{B}**, not to chase it with lands. Extinguish is now a 1-of and it is the deck's **only** double-black card. Black is now a support color (33% of pips) behind a heavily blue deck, and the manabase reflects that at 9 Island / 5 Swamp / 2 Aquifer.

### Cards Considered but Excluded

**Rares/mythics cut against the 5-card cap:**

| Card | Why |
|---|---|
| **Cosmic Epiphany** | Cut for cause. {4}{U}{U} — castable on turn 6 in only **26%** of games, mean cast turn **9.5** for 4.35 cards. A 6-mana do-nothing sorcery in a deck whose identity is *proactive*. Sphinx of Clear Skies took its rare slot and is strictly better here. |
| **Sheoldred, the Apocalypse** | The best card in the pool, and it is **in the attrition deck instead**. It is an attrition finisher, not a velocity one — it does nothing for graveyard spell-count and raises the curve. **Add it if you want raw power over coherence**; cut Extinguish the Light and accept the {B}{B}. |
| **Liliana of the Veil** | Symmetric discard, in a deck that wants cards in hand. (Note: it *would* fill your graveyard — but it fills theirs too, and you're the one holding spells.) |
| **The Phasing of Zhalfir** | Chapter III destroys all creatures, including both Terrors and Sphinx. |
| **Academy Loremaster / Defiler of Dreams / Vodalian Hexcatcher** | No slot; none advance the graveyard plan. |

**Strong commons/uncommons a tier below the includes:**
- **Djinn of the Fountain** ({4}{U}{U}, 4/4 flier that blinks itself out of a removal spell in response to any instant/sorcery) — a real spells payoff and the best card *not* in the deck. Cut only for curve; it's a 6-drop.
- **Micromancer** ({3}{U}, 3/3, ETB tutors an MV-1 instant/sorcery — you have four: Cut Down ×2, Rona's Vortex ×2).
- **Frostfist Strider**, **Talas Lookout** (3/2 flier that digs on death), **Soaring Drake** — all graveyard-independent bodies, all better attackers than the cut Haunting Figment.
- **Impede Momentum** — tap + 3 stun counters; real tempo, but sorcery speed.

**Cut from the first draft, and why (do not put these back):**
- **Founding the Third Path** — it is an **Enchantment**, so it feeds *nothing* the deck cares about. "Read ahead" means you pick one starting chapter and **skipped chapters never trigger** — you never get all three. Chapter II mills 4 with a **~23% chance of milling one of your own Tolarian Terrors** into a graveyard with zero recursion. Chapter I "free-casts an MV≤2 spell" but **Silver Scrutiny has MV 2 in hand with X=0**, so it "hits" and draws you zero cards.
- **Academy Wall ×2** — `Defender`. It literally cannot attack, and its loot triggers **only once each turn**, not per spell. A fine control card; wrong deck.
- **Haunting Figment ×2** — a 2-power unblockable body is a 10-turn clock, and its unblockable condition requires casting a spell **on your own turn**, which fights the deck's instant-speed gameplan.
- **Choking Miasma** — illegal: its `{G}` kicker makes its color identity `["B","G"]`, outside UB.

**Note on the sideboard's Drag to the Bottom:** it is −3/−3 (Domain = 2: Island + Swamp; Contaminated Aquifer is `Land — Island Swamp` and adds no third type). It **kills your own Vohar (1/2) and Ertai (3/2)**, and it is sorcery-speed {2}{B}{B} off only 7 black sources. It stays only because it is the *sole* go-wide answer with a legal UB color identity — there is no non-rare sweeper available. Board it in against tokens, and sac Vohar in response.

**Known gap:** there is **no graveyard hate** anywhere in the UB-legal pool. Against aristocrats you race on counters and removal. Pool limitation, not a build error.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  43.8%  gap -10.5pp  [OK]
  U  demand  66.7%  prod  68.8%  gap  -2.1pp  [OK]
```

16 lands (40% of N=40) — below the Control band and correct here. The curve is genuinely low (avg MV 2.83), Tolarian Terror's printed 7 is not what you pay, and Cosmic Epiphany (the only true 6-drop) is gone. Black is a support color with exactly one double-black card.

## RESTRICTIONS COMPLIANCE

```
[PASS]  Commons/uncommons <= 2 copies       max observed: 2 (Cut Down, Rona's Vortex,
                                            Vohar, Impulse, Tribute to Urborg,
                                            Ertai's Scorn, Phyrexian Espionage,
                                            Shadow Prophecy, Tolarian Terror, Negate,
                                            Pilfer, Coral Colony, Gibbering Barricade)
[PASS]  Rares/mythics <= 1 copy each        all 5 are singletons
[PASS]  Max 5 rares/mythics total (main+side)   EXACTLY 5/5:
                                            Silver Scrutiny (R), Haughty Djinn (R),
                                            Ertai Resurrected (R),
                                            Sphinx of Clear Skies (M),
                                            Drag to the Bottom (R, sideboard)
[PASS]  All cards from cube mainboard       verified by exact name against working pool
[PASS]  Color identity within {U,B}         all 16 distinct nonbasic cards pass; every
                                            off-color-kicker card (CI leak) excluded
[PASS]  Deck size                           40 mainboard + 10 sideboard
```
