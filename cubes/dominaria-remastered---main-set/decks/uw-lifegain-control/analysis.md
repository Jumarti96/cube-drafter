---
deck_name: "uw-lifegain-control"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-10T05:05:55Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  2x Idyllic Beachfront   WU dual, enters tapped
  11x Plains
  4x Island
```

### CREATURES (5)
```
CMC  Card                          Qty   Color  Role                       Rar
  2  Cleric of the Forward Order   x2    W      ETB lifegain body          C
  3  Man-o'-War                    x1    U      Tempo bounce + blocker      C
  5  Lyra Dawnbringer              x1    W      Lifelink flying finisher   M
  7  Serra Avatar                  x1    W      Win-con: P/T = life total  M
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Swords to Plowshares          x2    W      Premium removal            U
  2  Counterspell                  x2    U      Hard counter               C
  2  Impulse                       x2    U      Card selection              C
  3  Absorb                        x1    WU     Counter + gain 3 (payoff)   R
  3  Renewed Faith                 x1    W      Gain 6 / cycles when dead   C
  4  Wrath of God                  x1    W      Board wipe / stabilize      R
  4  Congregate                    x2    W      Scaling life swing payoff   U
  4  Fact or Fiction               x2    U      Card advantage engine       U
```

### OTHER SPELLS (5)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Spirit Link                   x2    W      Lifelink aura engine        C
  2  Pacifism                      x2    W      Neutralize a threat         C
  4  Test of Endurance             x1    W      Win-con: 50+ life at upkeep M
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in           Rar
Tormod's Crypt                 x1    C      vs graveyard/reanimator decks     U
Circular Logic                 x2    U      vs grindy/graveyard decks (cheap hard counter late) U
Damping Sphere                 x1    C      vs ritual/storm/fast-mana decks   U
Stand // Deliver               x2    WU     vs go-wide aggro (protect or bounce) U
Ovinize                        x2    U      vs big/evasive threats StP can't answer profitably C
Remedy                         x2    W      vs burn/aggro races               C
```

## ANALYSIS

**The math on the win conditions.** Test of Endurance triggers at the *beginning of your upkeep* with 50+ life — it does not win the turn you cross the threshold if you gain life during your opponent's turn or in response to something; you need to start your own turn already at 50+. Starting life is 20; you need +30. Congregate alone can supply a big chunk of that against a populated board (2 life per creature *on the battlefield*, including the opponent's), and Lyra/Kjeldoran-style damage-into-life plus Spirit Link on a repeatedly-connecting creature are the realistic grind path. Serra Avatar is the more reliable win condition in practice — it doesn't need a specific threshold, just a life total high enough to out-power whatever's on the other side of the board, and its "shuffle into library on death" clause means removal-based answers just delay it, they don't 2-for-1 it.

**Cleric of the Forward Order math.** "You gain 2 life for each creature you control named Cleric of the Forward Order" counts itself. First copy ETBs alone → gain 2. Second copy ETBs while the first is still in play → gain 4 (both copies count). Total potential from both copies resolving in sequence: 6 life, assuming the first survives to see the second.

**A tension worth naming.** Congregate counts creatures on both sides of the battlefield, and this deck runs only 5 true creatures plus 5 enchantment/removal-adjacent permanents — its own removal suite (Wrath, 2x Swords, 2x Pacifism, Man-o'-War) actively works against Congregate's ceiling by emptying the board. In practice, Congregate is best held for turns when the opponent has committed several creatures and you haven't Wrathed yet, not played on a clear board expecting a big number.

**Interaction/payoff balance.** 13 interaction+engine slots (Swords, Counterspell, Wrath, Absorb, Impulse, Fact or Fiction) against 10 payoff slots (Congregate, Renewed Faith, Cleric, Lyra, Spirit Link, Test of Endurance, Serra Avatar) is deliberately payoff-heavy for a "Control" archetype (typical guidance is 5-10% payoffs) — justified because this control shell's win condition is the accumulation of many small lifegain sources rather than 1-2 finishers backed by a big interaction suite. The self-grill Challenger flagged this explicitly as an intentional, internally-consistent deviation rather than bloat.

**Mana base.** W:U pip demand is 66:34. 17 lands (13 W sources / 6 U sources via 2x Idyllic Beachfront + 11 Plains + 4 Island) track that ratio closely (76.5% W production vs 66% demand — slightly W-heavy, which is safe since Absorb's {W}{U}{U} is the only double-blue-pip card and can wait). Only 1 common WU dual exists in the pool (Idyllic Beachfront), so fixing is THIN by nature — the light blue splash (Counterspell, Man-o'-War, Impulse, Fact or Fiction, Absorb) was sized deliberately small to stay castable off ~6 blue sources.

### Cards Considered but Excluded

*Rares/mythics cut due to the 5-card cap* (budget: Test of Endurance, Serra Avatar, Lyra Dawnbringer, Absorb, Wrath of God — all locked in as non-negotiable):
- **Enlightened Tutor** (W, rare) — can fetch Test of Endurance directly. The single most tempting cut candidate; would replace Lyra Dawnbringer if you want more consistency finding the win condition over a strong body.
- **Force of Will** (U, mythic) — free counterspell, but this is a *light* blue splash (~6 U sources); its pitch cost wants a much higher blue card count than this build runs.
- **Windborn Muse** (W, rare) — attack tax + flier, fits the stall-and-stabilize plan but is softer than Wrath against a board that's already established.
- **Mystic Remora** (U, rare) — card draw tax; wants more cheap noncreature spells than a 23-nonland, payoff-heavy list supports.
- **Glory** (W, rare) — graveyard hate + combat trick, reasonable sideboard-tier option that lost out to Tormod's Crypt for GY hate.
- **Arcanis the Omnipotent** / **Stroke of Genius** (U, rare) — generic control card advantage, off the lifegain plan specifically.

*Uncommons a tier below the chosen includes:*
- **Sawtooth Loon** (UW, uncommon) — solid blink/tempo body, cut for Man-o'-War's more immediate tempo swing.
- **Thieving Magpie** (U, uncommon) — card advantage on a body, lost the slot to Fact or Fiction's higher card-advantage ceiling.
- **Battle Screech** (W, uncommon) — token generator, doesn't directly gain life or protect the plan.
- **Confiscate** / **Icy Manipulator** (U, uncommon) — soft control pieces, six-mana Confiscate especially clunky next to Wrath.

*Sideboard-consideration cards not included:*
- **Radiant's Judgment** (W, common) — conditional removal, weaker than the maindeck's unconditional answers.
- **Mesa Enchantress** (W, uncommon) — draws off enchantment casts; this deck only runs 3 enchantments (Pacifism x2, Test of Endurance), too few to reliably trigger.
- **Auramancer** (W, common) — rebuys Spirit Link/Pacifism from the yard; cute but the deck doesn't lose enough auras to removal to need dedicated recursion.
- **Nomad Decoy** (W, common) — a tapper, redundant with Pacifism's effect at a worse rate.

*Explicitly out of scope:* **Sol'kanar the Swamp King**, named in the original archetype brief, has color identity {B, R, U} — Grixis, not splashable into a 2-color WU build under any reasonable fixing constraint given this pool's THIN duals. Excluded entirely rather than force a 3rd/4th color.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  34.4%  prod  35.3%  gap  -0.9pp  [OK]
  W  demand  65.6%  prod  76.5%  gap -10.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: no card exceeds 2 copies across main+sideboard
[PASS] Rares/mythics: all 5 used cards (Wrath of God, Absorb, Test of
       Endurance, Serra Avatar, Lyra Dawnbringer) at exactly 1 copy each
[PASS] Max 5 rares/mythics total across main+sideboard: exactly 5 used,
       0 in sideboard
[PASS] Cube membership: every non-basic card verified present in the
       working pool cache by exact name
[PASS] Color identity: all cards within {W, U}
```
