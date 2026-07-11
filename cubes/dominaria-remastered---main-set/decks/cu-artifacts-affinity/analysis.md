---
deck_name: "cu-artifacts-affinity"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U"
format: "40-card"
built_at: "2026-07-10T04:55:53Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  9x Island
  2x Mishra's Factory     Colorless; {1}: becomes a 2/2 Assembly-Worker
  2x Terminal Moraine     Colorless; sac to tutor a basic land late
  2x Remote Isle          U source, enters tapped, Cycling {2}
```

### CREATURES (16)
```
CMC  Card                    Qty   Color  Role                              Rar
  0  Ornithopter              x2    C      Free evasive body / blocker       C
  2  Millikin                 x2    C      Repeatable colorless ramp         U
  2  Wall of Junk             x2    C      Defensive stabilizer (Defender)   U
  3  Dragon Engine            x2    C      Scalable beater ({2}: +1/+0)      C
  3  Man-o'-War               x2    U      Tempo bounce + body               C
  4  Aven Fisher              x1    U      Evasive body, draws on death      C
  4  Dodecapod                x2    C      Curve filler (vanilla 2/2 body*)  U
  4  Juggernaut               x2    C      Forced-attack beater              C
  6  Triskelion               x1    C      Finisher / repeatable removal     R
```
*Dodecapod's discard-to-battlefield clause requires an opponent-controlled discard effect; this deck has none, so it plays as a vanilla body.

### INSTANTS & SORCERIES (2)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Snap                     x1    U      Free tempo bounce                 C
  2  Impulse                  x1    U      Card selection                    C
```

### OTHER SPELLS (7)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Mind Stone               x2    C      Ramp; sac-to-draw late             C
  3  Jalum Tome               x2    C      Repeatable filtering               C
  3  Urza's Incubator         x1    C      Cost-reducer (Construct: -{2})     M
  4  Icy Manipulator          x2    C      Repeatable tap-down                U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                Rar
Tormod's Crypt           x2    C      Graveyard strategies                   U
Damping Sphere           x2    C      Fast mana / storm / ramp decks         U
Dragon Blood             x2    C      Grindy value vs. attrition             U
Urza's Blueprints        x1    C      Card draw vs. control (Echo {6})       R
Crawlspace                x1    C      Anti-go-wide / token swarms            R
Ovinize                   x1    U      Cheap answer to a key threat           C
Circular Logic            x1    U      Counter vs. combo/spells (Madness U)   U
```

## ANALYSIS

This is a mono-colorless Artifacts curve-out deck with a deliberately light 5-card blue splash (all single-U-pip commons) added to solve a hard pool-depth shortfall — the cube's pure-colorless card pool (23 unique cards) can't fill a 40+10 build under the stated rarity restrictions on its own. Ornithopter/Millikin/Wall of Junk hold the early turns, Juggernaut/Dodecapod/Dragon Engine carry the midgame, and Triskelion closes as a repeatable-removal finisher. Urza's Incubator discounts the deck's three Construct creatures by {2} each, while Icy Manipulator and Mind Stone/Jalum Tome supply interaction and card flow.

**Urza's Incubator synergy:** choosing "Construct" discounts Millikin (2 to 0), Dragon Engine (3 to 1), and Triskelion (6 to 4) — 5 real copies across the deck's curve, verified via type_line, not just the tag.

**Millikin to Circular Logic (sideboard):** Millikin's self-mill grows your own graveyard, which directly raises the tax an opponent must pay to beat Circular Logic's counter. Separately, Jalum Tome's discard can trigger Circular Logic's Madness {U} for a 1-mana counter post-board.

**Known curve gap:** the deck has no true 1-drop beyond Ornithopter (a 0-power flier). This was checked against the full remaining pool — no unused colorless or single-pip-U 1-drop creature exists in this cube's card pool, so it's an inherent pool limitation, not a build oversight. The deck plays more like a 2-4 CMC midrange curve than pure aggro.

**Wall of Junk is a stabilizer, not an attacker:** it's a Defender that bounces itself when it blocks — included specifically to buy time against faster decks, not to advance the beatdown plan.

**Mana audit tooling note:** the audit reports `Ramp cards: 0`, which undercounts — Mind Stone and Millikin both function as ramp by oracle text, but the audit tool only flags a literal "ramp" tag string. The land count (15) is correctly supported by that ramp package regardless; treat the audit's PASS as accurate and the ramp-count field as a known tool quirk.

### Cards Considered but Excluded

**Rares/mythics cut (5-card cap headroom used: 4/5):**
- **Urza, Lord High Artificer** (mythic, U) — the cube's strongest Artifacts payoff (every artifact taps for U, spawns a scaling Construct, {5}: free spell) — but building around him means committing to a full U-control shell, the sub-archetype path not chosen. Best single swap-in if you want to pivot this deck toward control later.
- **Lotus Blossom** (rare) — burst ramp that's dead the turn it's played (0 counters until your next upkeep); cut for Mind Stone/Millikin's immediate, repeatable ramp.
- **Helm of Awakening** (rare) — "Spells cost {1} less to cast" is symmetric, discounting opponents' removal/counterspells too.
- **Cryptic Gateway** (rare) — needs denser creature-type overlap than this build's scattered types provide.
- **Jester's Cap** (rare) — narrow anti-combo/library-attack tool; solid sideboard tech in a heavier-control meta, cut to preserve rare-cap headroom.
- **Gauntlet of Power** (mythic) — its anthem only buffs creatures of a chosen color; every creature here is colorless, so the anthem clause is dead text.
- **Umbilicus** (rare) — originally in the sideboard, cut post-grill: its "return a permanent" trigger is symmetric and hits your own developed board as often as the opponent's. Replaced by Ovinize.

**Uncommons/commons a tier below the chosen includes:**
- **Thran Golem** (uncommon) — vanilla 3/3 for 5 with no Aura package in this build to enable its enchanted-bonus text; correctly passed over for Aven Fisher.
- **Counterspell / Turnabout** — both double-blue ({U}{U} / {2}{U}{U}), too heavy for a genuinely light splash; single-pip cards were prioritized.
- **Peregrine Drake, Cloud of Faeries, Frantic Search, Obsessive Search, Leaden Fists** — reasonable blue commons that didn't make the splash's 5-card budget. Peregrine Drake (untap 5 lands on ETB) is the top swap-in if the splash is widened.

**Sideboard-consideration cards not included:**
- **Force of Will** (mythic) — excellent protection for a control shell, but its rarity slot doesn't fit under the cap alongside the current 4 rares/mythics without cutting one.
- **Confiscate** (uncommon) — a "steal" effect, strong vs. single-big-threat decks; cut in favor of Ovinize's cheaper, more flexible answer.
- **Mystic Remora, Opposition, Denizen of the Deep, Aven Fateshaper, Veiled Serpent** — deeper blue value/control tools available if this deck pivots toward a heavier U shell in a future iteration.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.84   Ramp cards: 0 (see tooling note above)

Color Balance (core):  [PASS]

Splash Check: [PASS]
  U  7 card(s), max CMC 4  sources 11/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons max 2 copies each ............ PASS (0 violations)
Rares/mythics max 1 copy each ................... PASS (0 violations)
Max 5 rares/mythics total (main+SB) ............. PASS (4/5 used)
All cards verified present in cube pool ......... PASS (exact-name match)
```
