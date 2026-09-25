---
deck_name: "gw-defiler-kicker-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-11T19:05:29Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  8x Forest                
  4x Plains                
  2x Crystal Grotto        Any-color fixer, scry 1
  2x Radiant Grove         GW dual, enters tapped
```

### CREATURES (14)

```
CMC  Card                      Qty  Color  Role                                    Rar
  2  Juniper Order Rootweaver  x2   W      Kicked counter placement, 2-drop body   C
  2  Quirion Beastcaller       x1   G      Counter engine on creature casts        R
  2  Sunbathing Rootwalla      x1   G      Green 2-drop, late-game mana sink       C
  3  Deathbloom Gardener       x2   G      Any-color dork, green permanent, death  C
  3  Hexbane Tortoise          x2   G      Warded green body, enlist attacker      C
  4  Magnigoth Sentry          x2   G      Green 4/4 reach midgame body            C
  5  Defiler of Vigor          x1   G      Mass-counter keystone on green permane  R
  5  Shalai's Acolyte          x2   W      Kicked 5/6 flying top-end               U
  5  Silverback Elder          x1   G      Creature-cast value engine top-end      M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                       Qty  Color  Role                                    Rar
  1  Strength of the Coalition  x2   G      Kicked team-wide counter finisher       U
  1  Tail Swipe                 x1   G      Fight removal scaling with counter-gro  U
  2  Bite Down                  x2   G      Removal using our big bodies            C
  2  Take Up the Shield         x2   W      Counter + protection vs removal         C
```

### OTHER SPELLS (3)

```
CMC  Card                  Qty  Color  Role                                    Rar
  3  Citizen's Arrest      x2   W      Unconditional exile removal             C
  4  Ajani, Sleeper Agent  x1   WG     Card advantage + counter distribution   M
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in                 Rar
Tail Swipe            x1   G      Fight removal scaling with counter-gro  U
Destroy Evil          x2   W      vs 4+ toughness and enchantment remova  C
Snarespinner          x2   G      anti-flyer blocker                      C
Broken Wings          x2   G      artifact/enchantment/flyer removal      C
Temporary Lockdown    x1   W      vs go-wide tokens/aggro                 R
Prayer of Binding     x2   W      flash exile vs bombs/planeswalkers      U
```

## ANALYSIS

### Game Plan

GW midrange built around Defiler of Vigor's text: "Whenever you cast a green permanent spell, put a +1/+1 counter on each creature you control." The deck runs 11 green permanent spells after Defiler itself, so every post-Defiler turn typically adds a team-wide counter, and the 2-life/{G}-discount clause lets you double-spell ahead of curve. Quirion Beastcaller grows on all 15 creature casts and redistributes its counters on death, blanking spot removal. The kicker package (Juniper Order Rootweaver, Shalai's Acolyte, Strength of the Coalition) stacks additional counters in the mid-game, and Ajani, Sleeper Agent both refills (+1 hits on ~16 of 39 remaining cards) and distributes three more counters at −3. Bite Down and Tail Swipe deliberately use your counter-grown bodies as removal, so the counter theme upgrades your interaction as well as your clock.

### Key Interactions

- Defiler of Vigor + Deathbloom Gardener/any green creature: each cast is a team pump; with two spells in a turn (enabled by the {G} discount) the board grows +2/+2 across the block.
- Quirion Beastcaller dies → distributes all accumulated counters; opponents are punished either way for removing it.
- Take Up the Shield on Defiler in response to removal: permanent counter + indestructible, protecting the engine.
- Enlist (Hexbane Tortoise) adds a counter-grown creature's power to the attacker — counters effectively hit twice in combat.
- Silverback Elder converts every creature cast into artifact/enchantment removal, ramp, or 4 life — the "midrange threats pull double duty as engine" slot.

### Precision Notes (from self-grill)

Rootweaver, Acolyte, and Strength of the Coalition add counters but are white or instant spells, so they do not trigger Defiler — actual Defiler trigger density is ~46% of nonland cards, moderate rather than high. Sunbathing Rootwalla's domain activation is near-dead at 2 basic land types (4 mana for +2/+2); it was trimmed to 1 copy for Tail Swipe during the grill. The deck wins through ordinary counter-stacked combat even when the 1-of Defiler and Ajani never appear.

### Matchups

- Best vs. slower midrange/domain piles: your board outgrows theirs and Citizen's Arrest handles their single bomb.
- Weakest vs. mass removal (The Elder Dragon War chapter I, The Phasing of Zhalfir chapter III): counters vanish with the bodies. Hold Take Up the Shield and play around sweepers by leaning on Beastcaller's death trigger.
- Vs. flyers (UX tempo): Magnigoth Sentry's reach and sideboard Snarespinner/Broken Wings cover the air.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card limit (mainboard 4 + sideboard 1 used):**
- King Darien XLVIII — anthem + token engine; strong here but reserved as the keystone of the go-wide build (see gw-darien-go-wide-counters); a straight swap candidate for Silverback Elder if you want more counters synergy over value.
- Serra Redeemer — double counters on small ETBs; this list's bodies mostly have power 3+ by the time they enter, so it fits the token build better. Swap in for Ajani if you shift toward more 1-2 power creatures.
- Llanowar Loamspeaker — any-color dork + land animation; lost the slot to Deathbloom Gardener (deathtouch blocks better in a deck that wants to stall to turn 5).
- Leaf-Crowned Visionary — elf-tribal lord; only 4 elf bodies here, not enough.
- Temporary Lockdown occupies the 5th (sideboard) slot; if you'd rather have a 5th mainboard rare, cut it for Serra Paragon (recursion) or King Darien.

**Strong uncommons a tier below the chosen includes:**
- Love Song of Night and Day — real card advantage + a counter mode, but it feeds the opponent two cards and isn't a green permanent; the grill flagged card advantage as thin, so this is the first card to try if the deck runs out of gas in testing.
- Resolute Reinforcements — two bodies widen Strength of the Coalition, but white and token-shaped; belongs to the go-wide build.
- Linebreaker Baloth — 4/5 enlist body at 5 mana; lost out to Shalai's Acolyte's evasion at the same slot.
- Queen Allenal of Ruadach — token amplifier with no token producers here.

**Sideboard considerations that missed the cut:**
- Mossbeard Ancient — cut during the grill (7-drop stabilizer arrives too late vs. aggro).
- Join Forces — untap + pump two creatures; cute with enlist but too narrow.
- Charismatic Vanguard — mana-hungry team pump; the deck already wins long games with counters.
- Herd Migration — domain token finisher, only 2 basic types here.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  63.3%  prod  75.0%  gap -11.7pp  [OK]
  W  demand  36.7%  prod  50.0%  gap -13.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each (verified per name vs pool multipliers)
[PASS] Rares/mythics: max 1 copy each
[PASS] Max 5 rares/mythics total (main+side): 5/5 used - Ajani, Sleeper Agent, Defiler of Vigor, Quirion Beastcaller, Silverback Elder, Temporary Lockdown
[PASS] All cards from cube mainboard (verified by exact name against working pool)
[PASS] Color identity within GW (basics/colorless exempt)
```