---
deck_name: "ur-crab-gun-full-redundancy"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U (R splash)"
format: "40-card"
built_at: "2026-07-10T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
14x Island
 1x Mountain             Light R splash source, only for Quicksilver Dagger
 1x Molten Tributary     UR dual, enters tapped
 1x Sulfur Falls         UR dual, untapped w/ Island or Mountain
```

### CREATURES (8)
```
CMC  Card                    Qty   Color  Role                              Rar
  3  Horseshoe Crab          x2    U      Combo enabler (self-untap)         C
  3  Man-o'-War               x2    U      Tempo bounce on a body             C
  4  Thieving Magpie          x2    U      Evasive threat, draw on damage     U
  5  Peregrine Drake          x2    U      Evasive threat, untaps 5 lands     C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  High Tide               x1    U      Doubles Island mana for the turn   U
  2  Counterspell            x2    U      Hard countermagic                  C
  2  Impulse                 x1    U      Card selection                     C
  2  Snap                    x2    U      Free bounce + land untap           C
  4  Deep Analysis           x1    U      Draw 2 + flashback                 C
  4  Fact or Fiction         x1    U      Card advantage                     U
  5  Force of Will           x1    U      Free countermagic                  M
```

### OTHER SPELLS (6)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Mystic Remora           x1    U      Early card draw engine             R
  2  Hermetic Study          x1    U      Combo payoff #1 — any-target ping  C
  3  Quicksilver Dagger      x2    UR     Combo payoff #3 (R splash), now     U
                                          with backup
  4  Icy Manipulator         x1    U      Redundant repeatable tap-down      U
  4  Opposition              x1    U      Combo payoff #2 — tap-down engine  R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Tormod's Crypt          x1    U      Graveyard/Reanimator matchups          U
Damping Sphere          x1    U      Anti-storm/ritual, taxes fetches       U
Wall of Junk            x2    U      Repeatable blocker vs aggro            U
Circular Logic          x1    U      Protects the fragile Aura payoffs      U
                                      vs removal-heavy decks
Floodgate               x2    U      Pseudo-sweeper vs nonblue aggro        U
Jester's Cap            x1    C      Anti-combo library disruption          R
Turnabout               x1    U      Mass tap-down vs go-wide boards        U
Confiscate              x1    U      Steal a bomb of any permanent type     U
```

## ANALYSIS

**This deck tests a real hypothesis: does running all three payoffs actually help?** The self-grill answered mostly no, and it's worth stating plainly rather than dressing it up. Opposition and Hermetic Study/Quicksilver Dagger want opposite creature states — Opposition needs the Crab *untapped* to pay its cost, the Auras need the Crab *tapped* to fire their ability — so drawing multiple payoffs together doesn't stack, it competes for the same scarce resource (a live, uninterrupted Crab). Auras are also a real liability the standalone effects don't share: kill the enchanted Crab and the Aura dies with it, a two-for-one Opposition and Icy Manipulator are immune to. The honest framing is: this deck runs three *ways in* to the same basic plan (spend spare {U} to do something extra), not three stacking layers of power.

**Why it's still worth building this way.** Given that framing, the fix isn't to strip the deck back to Deck 1's shape — it's to keep all three payoff types (since testing that hypothesis was the point) while not over-paying for the privilege. This build trims Hermetic Study to 1 copy (cutting the most replaceable of the four original Aura slots) and puts the redundancy budget where it actually matters: Quicksilver Dagger is the *stronger* payoff (damage and a card, versus Hermetic Study's damage-only), so it's the one that should have backup if a copy gets removed or is stuck in hand — it's now at 2 copies, with Hermetic Study staying at 1. Running only 1 copy of every payoff spreads thin across three types rather than genuinely testing whether redundancy helps; bumping the strongest one to 2 is the more honest version of that test.

**High Tide replaces the mainboard Circular Logic.** Every extra {U} from tapping an Island funds another Crab activation — Opposition tap, Hermetic Study ping, or a Quicksilver Dagger swing — so a 1-mana instant that roughly doubles Island-sourced mana for the turn is close to a free extra activation cycle when the deck already has several Islands untapped. It's dead early (before enough lands are down) and symmetric (it helps an opponent's Islands too), but that's a fair trade for a card directly on-theme, versus Circular Logic, a generically fine but unremarkable soft counter with a dead Madness clause (no discard outlet in the 40). Circular Logic drops to a single sideboard copy instead of a mainboard slot.

**Quicksilver Dagger's splash is a real risk, held anyway — now doubled down on.** With only 3 R sources (Mountain, Molten Tributary, Sulfur Falls) in 17 lands, the odds of having R live by the turn you'd want to cast a 3-drop are meaningfully worse than the deck's mono-U cards. Running 2 copies doesn't need more R sources per se — you'd still only cast one at a time — but it does meaningfully raise the odds of drawing *a* copy of the deck's best payoff over the course of a game. If this build underperforms in practice, cutting back to 1 Quicksilver Dagger (or dropping it and the R splash entirely, reverting toward Deck 1's shape) is the first thing to try.

**Sideboard.** Kept close to Deck 1's list since the core shell is the same mono-U control plan, with Circular Logic as a full sideboard copy (down from a 2nd mainboard-adjacent slot) — this deck's payoff package is more fragile than Deck 1's (Auras vs. permanents), so it's worth bringing in more countermagic against removal-heavy opponents specifically, rather than running it maindeck all the time at the cost of the on-theme High Tide.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- *Arcanis the Omnipotent* — the self-grill's Challenger suggested cutting Opposition to make room for this, but that would defeat the deck's actual purpose (testing whether all three payoffs together are worth it). Left out here; it's the headline addition in Deck 1 instead, where the engine isn't the point of the build.
- *Denizen of the Deep*, *Vexing Sphinx*, *Stroke of Genius*, *Triskelion*, *Sulfuric Vortex* — same reasoning as the sister decks; the five rare/mythic slots (Sulfur Falls, Opposition, Force of Will, Mystic Remora, Jester's Cap) were already committed.

**Uncommons a tier below the chosen includes:**
- *Aven Fisher* — cut to make room for the 2nd Quicksilver Dagger. Of the deck's evasive bodies it contributed the least (a 2/2 flier with a one-time death trigger, versus Thieving Magpie's repeatable draw-on-damage and Peregrine Drake's land untap), so it was the easiest cut once the payoff redundancy took priority.
- *Mishra's Factory* — genuinely useful (as included in Deck 1) but this build's land base is already stretched thin supporting a 3-color-adjacent split (U core, R splash); a non-producing manland pushed color balance to FAIL in testing, so it's left out here specifically for that reason.

**Sideboard-consideration cards not included:**
- *Gempalm Incinerator* — no Goblins in this build to scale its removal mode, purely a cycling spell here; not worth the slot over Tormod's Crypt.
- A full 2nd copy of *Confiscate* (as run in Deck 1) was considered but this deck kept the slot for Circular Logic instead, prioritizing protecting the more fragile mainboard plan over a second steal effect.

## MANA AUDIT: PASS
```
Land count: 17 (recommended 16) — PASS
Ramp count: 0
Average CMC: 3.09
Pip demand: U 26 (core color only; Quicksilver Dagger excluded as the splash card)
Land color production: U 16, R 3
Color balance: U pip 100.0% vs prod 94.1% (gap 5.9) — PASS
Splash colors: R (Quicksilver Dagger x2, 3 sources available)
Overall: PASS
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons at or under 2 copies each: PASS
Rares/mythics at exactly 1 copy each: PASS
Max 5 rares/mythics total (main+sideboard): PASS — exactly 5 used (Sulfur Falls,
  Opposition, Force of Will, Mystic Remora, Jester's Cap).
```
