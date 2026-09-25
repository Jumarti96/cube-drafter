---
deck_name: "ub-spells-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-11T16:32:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
 9x Island
 3x Swamp
 2x Contaminated Aquifer     UB dual (typed Island Swamp), enters tapped
 2x Crystal Grotto           Scry 1 on ETB; {T}: {C} or {1},{T}: any color
```

### CREATURES (9)
```
CMC  Card                        Qty   Color  Role                                      Rar
  2  Haunting Figment            x2    U      Evasive clock on spell turns              C
  2  Vohar, Vodalian Desecrator  x2    UB     Loot engine; sac recasts i/s from yard    U
  3  Haughty Djinn               x1    U      Payoff — power = i/s in yard + discount   R
  4  Rona, Sheoldred's Faithful  x1    UB     Drain per i/s cast; recasts from yard     U
  4  Ertai Resurrected           x1    UB     Flash counter-or-removal on a body        R
  7  Tolarian Terror             x2    U      Discounted 5/5 ward finisher              C
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                        Qty   Color  Role                                      Rar
  1  Rona's Vortex               x2    U      Tempo bounce; kicked = bottom of library  U
  1  Cut Down                    x2    B      Cheap removal                             U
  2  Impulse                     x2    U      Instant card selection                    C
  2  Essence Scatter             x2    U      Counter creature bombs                    C
  2  Tribute to Urborg           x2    B      Removal; kicked scales with i/s in yard   C
  2  Impede Momentum             x1    U      Pseudo-removal; 3 stun counters + scry    C
  3  Phyrexian Espionage         x2    U      Draw 2; kicked adds discard               C
  6  Cosmic Epiphany             x1    U      Refuel — draw = i/s in yard               R
```

### OTHER SPELLS (1)
```
CMC  Card                        Qty   Color  Role                                      Rar
  2  Founding the Third Path     x1    U      Free i/s cast, mill 4, flashback copy     U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                       Rar
Negate                      x2    U      Control, sagas, bombs, planeswalkers          C
Extinguish the Light        x2    B      Big threats Cut Down misses                   C
Shore Up                    x1    U      Protect Djinn/Terror/Rona vs removal decks    C
Pilfer                      x1    B      Strip bomb/sweeper in grindy matchups         C
Ertai's Scorn               x1    U      Hard counter vs spell-dense decks             U
Rona, Sheoldred's Faithful  x1    UB     Second copy for attrition matchups            U
Drag to the Bottom          x1    B      -3/-3 sweeper vs go-wide (domain capped at 2) R
Silver Scrutiny             x1    U      Flash draw X vs control                       R
```

## ANALYSIS

**The engine loop.** 14 mainboard instants/sorceries feed four payoff axes at once: Haughty Djinn's power, Tolarian Terror's discount, Cosmic Epiphany's draw count, and kicked Tribute to Urborg's scaling. Three more cards convert the *act* of casting into value: Rona drains on every cast, Haunting Figment turns unblockable, and Vohar loots dead cards into the yard (each loot of an instant/sorcery also grows the count without spending a cast). The loop is closed: the interaction that keeps you alive is the same fuel that makes your threats cheap and large.

**Timing math.** With a normal curve-out (spell on turns 2–4 plus a Vohar loot or two), the graveyard holds 4–5 instants/sorceries by turn 5 — Tolarian Terror lands as a {1}{U}–{2}{U} 5/5 ward {2}, and Haughty Djinn attacks as a 4/5+ flier while discounting everything else. Cosmic Epiphany typically draws 5–7 when cast on turn 6+. Founding the Third Path accelerates all of it: chapter I casts one of the deck's 12 one-and-two-mana instants/sorceries for free, chapter II self-mills 4, chapter III flashbacks the best spell in the yard.

**Interaction density is the archetype.** 10 of 24 non-land slots are interaction (~42%, above the 25–35% tempo convention) — deliberate, because here every removal spell and counter is also an engine card. Average interaction cost is ~1.6 mana, which is what lets the deck hold up answers while deploying its clock.

**Domain caveat (flagged by the grill).** In a strict two-color deck the domain count is capped at 2 basic land types (Island + Swamp; Contaminated Aquifer's typed dual status is what gets you there). Drag to the Bottom is therefore a -3/-3 sweeper, never more — still enough for most go-wide boards in this environment, but don't count on it against 4-toughness fields.

**Play patterns.** Lead with card selection, not threats — Figment and Djinn get better the longer the game goes. Hold Rona's Vortex unkicked for tempo early or kicked as pseudo-removal late. Vohar's sacrifice ability is a late-game plan, not an early one: recasting Cosmic Epiphany or a kicked Tribute is a game-winning line. Against removal-heavy decks, board in Shore Up and the second Rona; her graveyard recursion (discard two) makes removal-trading profitable.

**Weak points to know about.** Impede Momentum is the one sorcery-speed interaction piece and the natural cut when iterating. Haunting Figment is nearly blank on turns you cast nothing. Against dedicated graveyard hate, the deck degrades to a mediocre draw-go tempo shell — that's the accepted floor.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card limit (mainboard candidates):**
- Sheoldred, the Apocalypse (M) — the strongest card in the pool, but a standalone body that advances no axis of this deck; the 5 slots went to cards that multiply the engine.
- Liliana of the Veil (M) — symmetric discard fights the refuel plan (Epiphany/Espionage); better in the creature-mill build.
- Vesuvan Duplimancy (M) — needs spells that target your own permanents; only Shore Up qualifies here.
- The Phasing of Zhalfir (R) — redundant with Drag to the Bottom as the sideboard sweeper, and its chapter III gifts the opponent 2/2s.
- Academy Loremaster (R) — symmetric extra draw helps a draw-go opponent as much as us.
- Vodalian Hexcatcher (R) — a Merfolk lord with no Merfolk shell (only Volshe Tideturner and Vohar qualify).
- Defiler of Dreams (R) — 5-mana engine that only triggers on blue *permanent* spells; this deck casts mostly instants/sorceries.

**Uncommons that are strong fits, a tier below the includes:**
- Djinn of the Fountain — a real spells payoff, but at 6 mana it competes with Cosmic Epiphany and loses.
- Micromancer — 4 mana to tutor a 1-MV spell (Rona's Vortex, Cut Down, Shore Up); too slow for the tempo plan.
- Volshe Tideturner — ritual mana for instants/sorceries and kicker; fine card, but the deck has no double-spell payoff worth the body.
- Academy Wall — the loot engine that went to the hybrid-recursion build instead; defensive stats clash with the clock plan.
- Silver Scrutiny mainboard — kept in the sideboard because Epiphany outscales it in the maindeck engine.

**Sideboard considerations that missed the cut:**
- Shadow Prophecy — was in the sideboard until the grill flagged the domain cap (X=2): 3 mana + 2 life to dig 2 is below rate; replaced with Shore Up + Pilfer.
- Frostfist Strider — 5-mana tempo ETB with ward; decent vs midrange but the slot competition is fierce.
- Talas Lookout — value flier, but this deck doesn't want 4-drops that don't affect the board or the count.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.71   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  29.0%  prod  43.8%  gap -14.8pp  [OK]
  U  demand  71.0%  prod  81.2%  gap -10.2pp  [OK]

Pip demand: 22 U / 9 B (71% / 29%). Sources: 13 U / 7 B of 16 lands.
Kicker pips (optional costs) uncounted; real B demand runs slightly hotter.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons max 2 copies each (main+side combined) — max observed 2
       (Rona, Sheoldred's Faithful: 1 main + 1 side = 2, uncommon)
[PASS] rares/mythics max 1 copy each — Haughty Djinn, Ertai Resurrected,
       Cosmic Epiphany, Drag to the Bottom, Silver Scrutiny all x1
[PASS] max 5 rares/mythics total across main+side — exactly 5 (3 main + 2 side), 0 mythics
[PASS] all cards from cube mainboard — verified by exact name against working pool
[PASS] color identity within UB — all non-land cards UB-legal
[PASS] challenger verification — APPROVE-WITH-CHANGES; both sideboard changes applied
       (2x Shadow Prophecy out; 1x Shore Up + 1x Pilfer in)
```
