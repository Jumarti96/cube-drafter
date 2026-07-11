---
deck_name: "wu-stacked-tax-prison-control"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-10T04:46:19Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  7x Plains
  4x Island
  2x Idyllic Beachfront    WU dual, enters tapped
  2x Drifting Meadow       W source, cycling land (enters tapped)
  2x Remote Isle           U source, cycling land (enters tapped)
```

### CREATURES (7)
```
CMC  Card                    Qty   Color  Role                        Rar
  2  Wall of Junk             x2    C      Resilient chump blocker     U
  4  Windborn Muse            x1    W      Attack tax + flier          R
  4  Floodgate                x2    U      Wall + attrition damage     U
  4  Voice of All             x1    W      Evasive finisher            U
  5  Serra Angel              x1    W      Evasive finisher            U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                    Qty   Color  Role                        Rar
  1  Swords to Plowshares     x2    W      Premium removal             U
  2  Counterspell             x2    U      Hard counter                C
  3  Absorb                   x1    WU     Counter + lifegain          R
  3  Radiant's Judgment       x2    W      Removal (pow 4+)/cycling    C
  4  Wrath of God             x1    W      Board wipe                  R
  4  Fact or Fiction          x1    U      Card advantage               U
```

### OTHER SPELLS (7)
```
CMC  Card                    Qty   Color  Role                        Rar
  1  Mystic Remora            x1    U      Spell tax + draw engine     R
  2  Damping Sphere           x2    C      Mana/spell tax              U
  2  Pacifism                 x1    W      Pseudo-removal              C
  3  Crawlspace               x1    C      Attack tax (cap 2)          R
  4  Icy Manipulator          x2    C      Tapper/removal enabler      U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                                  Rar
Tormod's Crypt           x2    C      Graveyard/reanimator matchups                             U
Circular Logic           x2    U      Scaling counter (hardens as YOUR own GY grows)             U
Ovinize                  x2    U      Neuters any creature for a turn                            C
Man-o'-War                x1    U      Tempo bounce / resets an enchanted permanent               C
Remedy                    x1    W      Damage prevention vs burn/aggro alpha strikes              C
Confiscate                x1    U      Steal an opposing bomb (any permanent)                     U
Thieving Magpie           x1    U      Secondary finisher / card advantage                        U
```

## ANALYSIS

Every threat the opponent plays gets more expensive to swing with, and every swing that does happen is capped and punished. Windborn Muse and Crawlspace stack independent attack taxes — pay {2} per attacker, and cap at two attackers regardless — while Wall of Junk and Floodgate hold the fort as recastable/self-punishing blockers. Damping Sphere and Mystic Remora extend the tax plan to spells themselves, generating card advantage in the process. Icy Manipulator locks down whatever gets through, Wrath of God resets bad boards, and Counterspell/Absorb protect the plan until Serra Angel or Voice of All close it out in the air.

**Redundant tax, not a single lock.** Windborn Muse ({2}/attacker) and Crawlspace (max 2 attackers) solve different attack shapes — Muse punishes going wide, Crawlspace caps it outright — so losing either piece to removal doesn't collapse the plan. Damping Sphere extends the same philosophy to spells (each spell a player casts this turn costs {1} more for each prior spell that turn), which also functions as soft storm/ritual hate.

**Mystic Remora math.** At 1 mana, Remora taxes every opposing noncreature spell {4} or gives you a card. Against a deck casting roughly six noncreature spells in the first several turns before it dies to removal/aggro, that's a realistic 2-4 extra cards — a genuine engine, not just a cute 1-drop.

**Floodgate's real function.** Its defender clause stops it from attacking, which is irrelevant for a wall, but its death trigger deals damage equal to half your Islands (rounded down) to every non-blue, non-flying creature. With 8 U sources in this manabase, that's roughly 4 damage when it dies — a miniature sweeper that punishes the opponent for killing your blocker.

**Rare-mythic budget math.** The pool cap (5 rares/mythics total, main+SB) forced hard cuts. The prior archetype analysis listed 12 rares/mythics as "core" cards — physically impossible under this restriction. The five that made it (Windborn Muse, Crawlspace, Wrath of God, Absorb, Mystic Remora) were chosen because each is either irreplaceable to the tax thesis or a WU-legal control staple with no common/uncommon equivalent.

**Correction to the prior archetype analysis: Arboria is Green, not colorless.** Its actual cost is {2}{G}{G} (color identity ["G"]) — verified directly from oracle data, not assumed from its "World Enchantment" type. It cannot be cast in a WU deck without a green splash, and no card in the pool qualified as a reasonable splash enabler for it, so it was dropped from the plan entirely rather than force a third color.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card cap:**
- Opposition (rare, U) — the strongest available upgrade path identified during review: it turns every creature already in this deck (Windborn Muse, Serra Angel, Voice of All, both Walls) into a recurring Icy Manipulator. Didn't make the cut only because all 5 rare slots were already earning their keep; if a rare is ever swapped, test this first, likely in for Absorb or Crawlspace.
- No Mercy (mythic, B) — the "hard lock" alternative path not chosen; also off-color, needs a black splash.
- Royal Assassin (rare, B) — off-color; would have paired with Icy Manipulator's taps for free kills, but requires black.
- Umbilicus (rare, colorless) — solid extra stax layer (symmetric bounce-or-pay-2-life), lost out to Mystic Remora's card advantage.
- Jester's Cap (rare, colorless) — strong late-game answer-stripper, cut for being too slow/narrow relative to Wrath/Absorb in the core five.
- Maze of Ith (rare, colorless land) — excellent universal fog, but as a land it would have needed to replace a producing land, and the rare budget was already spent on spells.
- Arboria (rare, G) — excluded as detailed above (wrong color assumption in the prior analysis).

**Uncommons/commons a tier below the chosen includes:**
- Nomad Decoy (common, W) — a fine tapper, but Icy Manipulator does the same job on any permanent type and doesn't need graveyard threshold for its upside.
- Momentary Blink, Snap — tempo/protection tricks that didn't have enough ETB payoffs in this shell to justify a slot.
- Sun Clasp, Leaden Fists — pseudo-removal auras, weaker than Pacifism (no upside beyond lockdown).
- Renewed Faith (common, cycling lifegain) — reasonable anti-aggro insurance, lost out to Remedy in the sideboard for a tighter effect.
- Stand // Deliver — flexible but low-impact; Man-o'-War in the sideboard does the bounce job better.

**Sideboard considerations that didn't make the 10:**
- Denizen of the Deep (rare, 8cmc) — would have been a one-sided "Upheaval on a stick" reset, but far too slow and would have burned a 6th rare slot.
- Artifact/enchantment removal — there is no WU-legal artifact or enchantment destruction anywhere in this cube's pool (Break Asunder, Decimate, Wax // Wane, etc. are all green-adjacent). This is a genuine environment gap, not an oversight — if you hit an artifact-heavy opponent, Icy Manipulator/Confiscate are the only answers available.

## MANA AUDIT: PASS
```
Land count: 17 (recommended 16, diff 1) -- PASS
Ramp count: 0 | Avg CMC: 2.87
Pip demand: W 13 (56.5%), U 10 (43.5%)
Land production: W 11 (64.7%), U 8 (47.1%)
Color balance: W gap -8.2pp (OK), U gap -3.6pp (OK) -- overall PASS
Splash: none -- overall PASS
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each (all multi-copy cards verified at exactly 2)
[PASS] Rares/mythics <= 1 copy each (Windborn Muse, Crawlspace, Wrath of God, Absorb, Mystic Remora -- 1 each)
[PASS] Max 5 rares/mythics total, main+SB (exactly 5, all in mainboard, 0 in sideboard)
[PASS] All cards within WU color identity -- no splash
[PASS] Arboria correctly excluded (Green, not colorless -- verified via oracle data, not the prior-analysis assumption)
```
