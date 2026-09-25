---
deck_name: "wurg-anycolor-ramp-kicker"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WURG"
format: "40-card"
built_at: "2026-07-11T07:32:38Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
3x Forest
2x Island
2x Mountain
1x Plains
2x Tangled Islet          GU dual (Forest Island), enters tapped
2x Wooded Ridgeline       RG dual (Mountain Forest), enters tapped
2x Radiant Grove          GW dual (Forest Plains), enters tapped
1x Sacred Peaks           RW dual (Mountain Plains), enters tapped
1x Crystal Grotto         Scry 1; {1},{T}: any color
```

### CREATURES (13)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Shivan Devastator       x1    R      X-threat finisher                   M
  2  Salvaged Manaworker     x2    C      Any-color fixer                     C
  3  Deathbloom Gardener     x2    G      Any-color ramp                      C
  3  Voda Sea Scavenger      x2    U      Domain card selection body          C
  3  Vodalian Mindsinger     x1    U      Kicker payoff (steal)               R
  4  Nael, Avizoa Aeronaut   x1    GU     Domain filter engine (combat)       U
  5  Silverback Elder        x1    G      Top-end engine threat               M
  5  Shalai's Acolyte        x2    W      Kicker flier                        U
  5  Territorial Maro        x1    G      Domain fatty (8/8 at 4 types)       U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                    Qty   Color  Role                                Rar
  2  Artillery Blast         x2    W      Domain removal (tapped only)        C
  2  Fires of Victory        x2    R      Removal + draw (kicker)             U
  2  Silver Scrutiny         x1    U      X-draw mana sink                    R
  3  Scout the Wilderness    x2    G      Basic fetch + tokens (kicker)       C
  5  Slimefoot's Survey      x1    G      Typed-land ramp / domain filter     U
  5  Temporal Firestorm      x1    R      Semi-one-sided sweeper (kicker)     R
```

### OTHER SPELLS (2)

```
CMC  Card                    Qty   Color  Role                                Rar
  4  Prayer of Binding       x1    W      Flexible exile removal (flash)      U
  5  Meteorite               x1    C      Any-color rock + reach damage       C
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                Rar
Broken Wings            x2    G      Artifacts, enchantments, fliers        C
Essence Scatter         x2    U      vs creature decks                      C
Negate                  x2    U      vs control, sagas, planeswalkers       C
Runic Shot              x1    W      Cheap removal, kicker scry             U
Snarespinner            x2    G      vs flier aggro                         C
Prayer of Binding       x1    W      Extra exile removal vs bombs           U
```

## ANALYSIS

**Deck identity.** The truest build of the prior analysis' "Kicker Big-Mana" sketch: a green-based four-color (no black) shell where eight any-color/fixing sources (2 Deathbloom Gardener, 2 Salvaged Manaworker, 1 Meteorite, 1 Crystal Grotto, plus Scout the Wilderness and Slimefoot's Survey fetching typed lands) pay for multicolor kicker costs the fair way. The payoff ceiling is higher than any two-color version: Temporal Firestorm double-kicked (9 mana, {3}{R}{R}+{1}{W}+{1}{U}) phases out your two best creatures and sweeps for 5; Vodalian Mindsinger double-kicked lands a 6/6 stealing anything with power 5 or less.

**Domain math.** The manabase carries exactly four basic land types (Forest/Island/Mountain/Plains across basics and typed duals; Crystal Grotto is untyped, no Swamp anywhere). So: Territorial Maro is a true 8/8 for 5; Artillery Blast deals 5 to a tapped creature; Voda Sea Scavenger digs 4; Slimefoot's Survey filters 4 after fetching. Nael, Avizoa Aeronaut filters 4 on connect but its five-type draw clause is intentionally unreachable — it is played as a filter engine, not a draw engine.

**Key lines.**
- Turn 2–3 fixer → turn 3–4 Scout the Wilderness (kicked when W is open: two Soldiers) or Voda Sea Scavenger sets up domain and colors simultaneously.
- Slimefoot's Survey fetching Sacred Peaks + Tangled Islet in one cast adds two land types and fixes the exact kicker pips you're missing.
- Fires of Victory kicked ({1}{R}+{2}{U}) draws first, then counts hand size for damage — the draw adds +1 damage.
- Every leftover mana late converts via Silver Scrutiny (flash if X ≤ 3) or a bigger Shivan Devastator.

**Grill outcome.** Challenger confirmed legality on every check and pipeline viability ("VIABLE"), with three majors, all adopted: 1 Crystal Grotto → 1 Sacred Peaks (true W sources rose from 3 to 4 — the audit had counted Grotto's {1}-taxed filter as full production in every color), sideboard Citizen's Arrest → Runic Shot ({1}{W}{W} was ~12–31% castable by turn 3 on the old manabase; Runic Shot is single-pip with a kicker bonus), and honest role relabels for Nael and Temporal Firestorm.

**Cards Considered but Excluded.**
- *Rares/mythics cut by the 5-card cap:* Archangel of Wrath (BRW — would demand a black splash on top of four colors; the archetype sketch listed it, but it is the natural 6th rare only if you cut Temporal Firestorm and add Swamp-typed fixing), The World Spell (7-MV mythic saga; too slow for competitive intent and the 5-cap), Herd Migration (rare domain finisher — 12 power across four bodies at domain 4; first substitution if you free a rare slot), Sphinx of Clear Skies (mythic domain flier), Threats Undetected (rare tutor), Jodah, the Unifier / Timeless Lotus (want a 5-color legends build), Shanna, Purifying Blade (GUW mythic X-draw on a body).
- *Strong uncommons a tier below:* Hurloon Battle Hymn (unconditional 4 damage with W kicker — Challenger's alternative to one Artillery Blast; kept out for the {1}{W} vs {2}{R} curve slot), Joint Exploration (leaner than Meteorite but the 4c manabase wants the 8th any-color source), Radha, Coalition Warlord and Rulik Mons (Gruul-facing domain bodies), Protect the Negotiators (counter + token, wants open UW mana this deck rarely holds), Jodah's Codex (domain draw engine, too mana-hungry alongside the X-sinks).
- *Sideboard considerations:* Citizen's Arrest (cut by grill — double-W near-uncastable here), Guardian of New Benalia-style W bodies (off-pipeline), Tail Swipe / Bite Down (green fight effects; the deck's creatures are mostly utility bodies that lose fights), Ertai's Scorn (conditional Cancel).

**Matchup notes.** The deck is soft to fast aggro (average MV 3.29, taplands, interaction that mostly hits tapped/attacking creatures) — board Runic Shot, Essence Scatter, Snarespinner and lean on Temporal Firestorm. Against midrange and control it is favored: Mindsinger, Maro, and the kicker two-for-ones out-grind removal-based fair decks, and Prayer of Binding + Negate cover resolved bombs.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.29   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  37.0%  prod  62.5%  gap -25.5pp  [OK]
  R  demand  18.5%  prod  37.5%  gap -19.0pp  [OK]
  U  demand  25.9%  prod  31.2%  gap  -5.3pp  [OK]
  W  demand  18.5%  prod  31.2%  gap -12.7pp  [OK]
```

Audit caveats found during grill: the tool counts Crystal Grotto's {1}-taxed any-color filter as full production in all five colors (which is also why a B column appears in a no-black deck), and its `ramp_count: 0` reads a "ramp" tag this pool doesn't use — the deck actually runs 8 ramp/fixing pieces. True per-color untaxed land sources after the grill fix: G 9, U 5, R 5, W 4, plus 5 non-land any-color producers.

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons limited to 2 copies each (max used: 2)
[PASS] Uncommons limited to 2 copies each (max used: 2; Prayer of Binding 1+1)
[PASS] Rares/mythics limited to 1 copy each
[PASS] Max 5 rares/mythics across mainboard + sideboard (5/5 used:
       Temporal Firestorm, Silver Scrutiny, Vodalian Mindsinger,
       Shivan Devastator, Silverback Elder — sideboard contains 0)
[PASS] All cards present in cube mainboard pool (verified vs working pool)
[PASS] Color identity within W/U/R/G (no black cards, no splash)
```
