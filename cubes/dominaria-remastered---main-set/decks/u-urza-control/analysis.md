---
deck_name: "u-urza-control"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U"
format: "40-card"
built_at: "2026-07-10T04:48:51Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
12x Island
 2x Mishra's Factory       Colorless manland; {1}: becomes a 2/2 artifact creature
 1x Remote Isle            U source, enters tapped, Cycling {2}
```

### CREATURES (12)
```
CMC  Card                              Qty  Color  Role                              Rar
 0   Ornithopter                       x2   C      Free artifact fodder/blocker      C
 2   Millikin                          x2   C      Ramp body, feeds Urza's mana      U
 3   Man-o'-War                        x2   U      Tempo bounce creature             C
 3   Dragon Engine                     x2   C      Beater w/ mana-sink pump          C
 4   Urza, Lord High Artificer         x1   U      Keystone engine + scaling threat  M
 4   Juggernaut                        x2   C      Aggressive beater                 C
 6   Triskelion                        x1   C      Finisher/repeatable removal       R
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                              Qty  Color  Role                              Rar
 2   Counterspell                      x2   U      Hard counter                      C
 2   Snap                              x2   U      Free tempo bounce                 C
 3   Stroke of Genius                  x1   U      Mana-sink card draw payoff        R
 4   Turnabout                         x1   U      Mana burst / mass tap-down         U
 4   Fact or Fiction                   x1   U      Card advantage                    U
 5   Force of Will                     x1   U      Free protection / hard counter    M
```

### OTHER SPELLS (5)
```
CMC  Card                              Qty  Color  Role                              Rar
 2   Mind Stone                        x2   C      Ramp, cracks for a card late      C
 3   Jalum Tome                        x1   C      Repeatable card filtering engine  C
 4   Icy Manipulator                   x1   C      Tempo/control tap-down            U
 6   Urza's Blueprints                 x1   C      Recurring card draw engine        R
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in                   Rar
Ovinize                 x2   U      vs. creatures counters can't answer       C
Damping Sphere          x2   C      vs. ramp/storm/big-mana decks             U
Wall of Junk            x2   C      vs. aggro -- repeatable chump blocker     U
Tormod's Crypt          x1   C      vs. graveyard strategies                  U
Confiscate              x1   U      vs. control mirrors / big uncounterable threats  U
Circular Logic          x1   U      vs. grindy/attrition matchups (Madness off Jalum Tome)  U
Icy Manipulator         x1   C      2nd copy -- vs. control/big creatures     U
```

## ANALYSIS

Mono-Blue control shell built around Urza, Lord High Artificer -- a keystone that turns every artifact into a mana source and produces a Construct token that scales with your artifact count. A dense colorless artifact package (mana rocks, cheap fodder, mid-curve beaters) fuels both the token and Urza's own tap ability, while a real blue interaction suite (Counterspell, Force of Will, tempo bounce) protects the plan and buys time for Urza's Blueprints and Stroke of Genius to grind out the win. Triskelion is the top-end finisher/removal sink.

**Macro-Archetype:** Midrange. Projected Avg MV: 3.0 (matches audit). Classified Midrange rather than pure Control because a third of the 40 (Ornithopter, Juggernaut, Dragon Engine, Millikin, Mishra's Factory) function as an independent beatdown plan if Urza never shows up -- this isn't a deck that just durdles to a control finish.

**Land count derivation:** Baseline 16 (40% of N=40, midpoint of Midrange's 38-42% range). Modifiers: cantrips -0 (no qualifying 1-mana cantrips made the final 40); mana rocks -1 (4 cards at CMC<=2 -- Mind Stone x2, Millikin x2 -- at -0.5 per 2 rocks); MDFCs -0 (none in cube). Final: **15 lands (37.5% of N=40)**.

**Slot allocation:** Per the skill's Midrange rule, Engine/Infrastructure has no separate budget -- it's absorbed into Threats/Payoffs, because in this pipeline the engine pieces *are* the payoffs (mana rocks feed Urza's Construct count and Urza's own tap ability simultaneously). Actual split of the 25 non-land spells: **Interaction/Disruption 36% (9 cards** -- Force of Will, Counterspell x2, Snap x2, Man-o'-War x2, Turnabout, Icy Manipulator) and **Threats/Payoffs 64% (16 cards** -- Urza, Triskelion, Blueprints, Stroke, both mana rocks, Jalum Tome, both Ornithopters, both Juggernauts, both Dragon Engines, Fact or Fiction). This runs well above the raw 30-40% Threats/Payoffs range stated for Midrange -- deliberate, since nearly every non-interaction card here does double duty as both a body/beater and an artifact-count/engine piece, which is exactly the case the skill's Midrange note anticipates.

**Mana base:** 16 U pips demanded (100% of colored pips, since every off-color card is colorless), 13 of 15 lands produce U (86.7%) -- the two Mishra's Factory are colorless-only by design, traded for having a "free" 16th/17th threat that doesn't cost a card slot. This produces the deck's one soft spot: **Mana Audit is WARN**, not PASS, at a 13.3pp gap. The manland upside was judged worth the gap rather than replacing it with another Island for a clean PASS.

**Mechanical calculation -- Urza's Construct scaling:** 14 of the 25 non-land spells are artifact permanents (Ornithopter x2, Millikin x2, Triskelion, Juggernaut x2, Dragon Engine x2, Mind Stone x2, Jalum Tome, Icy Manipulator, Urza's Blueprints), plus the Construct token itself counts toward its own total. By turn 5-6 with a typical board the token is routinely a 4/4-6/6 for zero additional investment.

**Mechanical calculation -- Turnabout burst:** With Urza in play and, say, 5 untapped artifacts, tap them all via Urza for 5 U, cast Turnabout ({2}{U}{U}) targeting yourself in "untap" mode on artifacts, then tap them all again -- net mana gain once you control more than 4 artifacts (Turnabout's own cost). This is a real way to explode into Stroke of Genius or a hard-cast Urza's Blueprints echo payment in one turn.

**Synergy note -- Circular Logic (SB):** Jalum Tome is a genuine discard outlet, so Circular Logic's Madness {U} is live, not decorative -- it can come down for 1 mana off a Jalum Tome loot in the right matchup.

**Self-grill soft findings (not blocking, worth knowing):** (1) The curve has zero 1-drops -- Ornithopter at 0 is the only play before turn 2. Acceptable for a control shell but means a slow start if the opening hand is spell-heavy. (2) The audit tool's ramp_count reads 0 despite 4 mana-rock artifacts in the deck -- its "ramp" tag doesn't recognize Mind Stone/Millikin as ramp, which means the tool's land-count recommendation (16) may be a touch conservative for what this deck actually does; 15 is comfortable given the rock density.

### Cards Considered but Excluded

**Rares/mythics cut solely for the 5-card cap** (all legitimate fits, just lost the slot competition): Mystical Tutor (rare, would've found Force of Will/Stroke), Arcanis the Omnipotent (rare, repeatable draw-3 body), Lotus Blossom (rare, burst ramp), Helm of Awakening (rare, symmetric cost reducer -- risky in competitive anyway), Urza's Incubator (mythic, narrow -- our creature types are too scattered to benefit), Umbilicus (rare, slow value engine), Cryptic Gateway (rare, cute Construct-tribal cheat-in but inconsistent), Denizen of the Deep (rare, too clunky -- we don't run enough creatures to discount it), Vexing Sphinx (rare, fine but generic), Mystic Remora (rare, great vs. spell-heavy decks specifically), Jester's Cap (rare, slow), Crawlspace (rare, anti-aggro but symmetric-ish), Gemstone Mine / Maze of Ith (rare lands, redundant/overkill for a mono-color deck), Dark Depths / Time Stretch (mythics, no support package here). Gauntlet of Power was excluded on top of the cap for a real reason -- its oracle text is a devotion/mana-doubler, not an artifact-count payoff, despite carrying the Artifacts tag.

**Uncommons/commons a tier below the chosen includes:** Thran Golem -- flagged during grill: its actual text ("as long as enchanted, +2/+2 flying/first strike/trample") is an Enchantress payoff, not an artifact-count one; the Artifacts tag was type-based only, so it was correctly excluded rather than trusted blindly. Dodecapod (uncommon -- its discard-into-play clause is dead text without a discard outlet aimed at opponents). Terminal Moraine (cut in favor of a 12th Island to close the U color gap). Impulse / Obsessive Search (both fine filtering, lost the slot economy fight to interaction/bodies). Cloud of Faeries, Horseshoe Crab, Aquamoeba, Thieving Magpie, Glintwing Invoker -- generic blue creatures, none artifact-synergistic.

**Sideboard-consideration cards that didn't make the final 10:** Thieving Magpie (card-advantage flyer vs. control), Terminal Moraine (anti-flood land swap), Impulse/Obsessive Search (extra gas vs. grindy matchups), Mystic Remora (would be excellent vs. spell-heavy decks but the rare cap is already spent).

## MANA AUDIT: WARN
```
-- Mana Audit: WARN ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0

Color Balance (core):  [WARN]
  U  demand 100.0%  prod  86.7%  gap +13.3pp  [WARN]

Flags:
  WARN  U  gap +13.3pp
```

## RESTRICTIONS COMPLIANCE
```
PASS  Commons/uncommons: all at or under 2 copies each (verified per-card, main+side combined)
PASS  Rares/mythics: all at 1 copy each
PASS  Rare/mythic total: 5 / 5 cap (Urza LHA, Triskelion, Urza's Blueprints, Force of Will, Stroke of Genius)
PASS  Every card confirmed present in cube working pool by exact name (Challenger-verified)
PASS  Color identity: all cards U or colorless -- within the U/colorless pipeline
```
