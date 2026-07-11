---
deck_name: "ur-spellslinger-flashback"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-07-08T18:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x Mountain
5x Island
2x Molten Tributary       UR dual, enters tapped
1x Evolving Wilds         Fetches Island or Mountain
```

### CREATURES (7)
```
CMC  Card                                    Qty  Color  Role                              Rar
  1  Delver of Secrets // Insectile Aberration x2  U      Early clock / spells-matter flip   C
  2  Thermo-Alchemist                          x2  R      Repeatable reach (Defender)         U
  2  Thing in the Ice // Awoken Horror         x1  U      Keystone -- tempo reset (Defender)  R
  5  Docent of Perfection // Final Iteration   x1  U      Keystone -- token engine/finisher   R
  8  Bedlam Reveler                            x1  R      Keystone -- hand refill, prowess    R
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                    Qty  Color  Role                                  Rar
  1  Faithless Looting       x2   R      Primary GY enabler, feeds flashback     C
  1  Lightning Axe           x2   R      Efficient removal                       U
  2  Abrade                  x2   R      Flexible removal (creature/artifact)    U
  2  Galvanic Iteration      x1   RU     Spell-copy engine / combo enabler        R
  3  Fiery Temper            x2   R      Reach/removal, Madness off Looting      U
  4  Mystic Retrieval        x1   U      Rebuys removal or Galvanic Iteration    U
  5  Seize the Storm         x1   R      GY-count token payoff                   C
  6  Rise from the Tides     x2   U      GY-count army finisher                  U
  7  Temporal Mastery        x1   U      Haymaker -- Miracle extra turn          M
```

### OTHER SPELLS (2)
```
CMC  Card                Qty  Color  Role                                    Rar
  3  Burning Vengeance    x2   R      Recurring damage off graveyard casts     U
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in                 Rar
Silent Departure        x1   U      Extra bounce/flashback vs. grindy games   C
Think Twice             x1   U      Card-advantage insurance, control mirrors C
Syncopate               x1   U      Taxed counter vs. bombs/combo             C
Summary Dismissal       x1   U      Blanks multi-spell turns, anti-combo      U
Compelling Deterrence   x2   U      Tempo bounce vs. go-wide tokens/aristo.   U
Blazing Torch           x2   C      Cheap removal/evasion vs. Vampires/Zomb.  C
Imprisoned in the Moon  x1   U      Answers problem creatures/PWs/lands       C
Savage Alliance         x1   R      Escalate sweep vs. X/1 token boards       U
```

## ANALYSIS

A tempo-value hybrid built around casting cheap instants and sorceries twice. Thing in the Ice counts down off spellcasting into a one-sided board wipe that spares your own Horror creatures; Docent of Perfection turns every spell into a Wizard token and eventually an anthem; Faithless Looting and flashback recursion stock the graveyard to fuel Bedlam Reveler's discount, Burning Vengeance's recurring damage, and Rise from the Tides / Seize the Storm's graveyard-scaling finishers. Galvanic Iteration copying a Miracled Temporal Mastery is the top-end haymaker -- two extra turns in one turn -- but the deck wins without it just as often through grind and reach.

**Thing in the Ice math.** Enters with 4 ice counters, loses one per instant/sorcery cast (Oracle: "Whenever you cast an instant or sorcery spell, remove an ice counter from this creature. Then if it has no ice counters on it, transform it."). With 14 instant/sorcery cards (35% of the deck) plus flashback recasts, it typically flips turn 3-5. Its bounce only hits non-Horror creatures -- Awoken Horror itself, Docent's Insect Horror back face, and Bedlam Reveler (Devil Horror) all survive their own reset, so the "wrath" doesn't blank your own board once those threats are down.

**Docent transform math.** Needs "three or more Wizards" on the transform check. Delver of Secrets is also a Human Wizard, so a turn-1 Delver plus two of Docent's own tokens (2 more spells cast) flips it the same turn it's threatened; without Delver in play it needs 3 spells post-Docent.

**Burning Vengeance damage clock.** Triggers on any cast *from the graveyard* (2 damage to any target). Live triggers in the 75: Faithless Looting flashback, Galvanic Iteration flashback, Mystic Retrieval flashback, Seize the Storm flashback, plus sideboard Silent Departure/Think Twice flashback. Two Burning Vengeance in play doubles every graveyard cast to 4 unblockable damage -- a real secondary clock independent of combat.

**Galvanic Iteration + Temporal Mastery.** Temporal Mastery costs {1}{U} via Miracle when it's the first card drawn that turn; Galvanic Iteration ("When you next cast an instant or sorcery spell this turn, copy that spell...") cast in response to the Miracle trigger copies the extra-turn effect for two extra turns in one turn. This is a bonus line, not the primary win condition -- the deck also just grinds via Docent/Rise from the Tides/Burning Vengeance and closes with combat/burn.

**Mana base.** 17 lands against avg CMC 3.09 (audit recommends 16 -- the extra land is a deliberate 1-over deviation to cover the CMC5+ tail (Docent, Seize the Storm, Rise from the Tides, Temporal Mastery, Bedlam Reveler) and the fact that flashback cards effectively ask to spend mana on the same card twice per game, raising real mana demand above what average CMC alone suggests). R pip demand 62.1% vs. 64.7% production, U 37.9% vs. 41.2% -- both colors' production slightly exceeds demand.

**Rarity budget.** All 5 of the pool's rare/mythic cap went to the named pipeline keystones: Thing in the Ice, Docent of Perfection, Bedlam Reveler, Galvanic Iteration, Temporal Mastery. Zero rares/mythics in the sideboard.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- Jace, Unraveler of Secrets (M) -- excellent card-advantage/bounce planeswalker, but not bound to the named flashback/combo pipeline the way the 5 chosen cards are; first swap-in if you want more raw power at the cost of archetype identity.
- Chandra, Dressed to Kill (M) -- strong reach/removal walker, same tradeoff as Jace.
- Mirrorwing Dragon (M) -- a fine top-end flyer, but its copy ability only triggers on spells that target *only* it, which this build doesn't reliably set up.
- Hullbreaker Horror (R) -- a real Spellslinger payoff (uncounterable, bounces/counters on every spell cast) but at 7 CMC it competes directly with Temporal Mastery for top-end rare slots.
- Memory Deluge (R) -- excellent card selection, cut only because it couldn't fit inside the 5-rare budget alongside the 5 keystones.

**Uncommons/commons a tier below the chosen includes:**
- Festival Crasher (C) -- was in an earlier draft of this list; cut for Mystic Retrieval, which rebuys the removal suite instead of just pumping a small body.
- Wandering Mind (U) -- card selection/tutor, redundant with Mystic Retrieval/Think Twice already in the 75.
- Cackling Counterpart (U) -- token-copy effect, better in a go-wider build than this one's leaner creature count.
- Aberrant Researcher // Perfected Form (U) -- self-mill spells-matter threat, reasonable but the deck doesn't need more self-mill on top of Faithless Looting.

**Sideboard-consideration cards not chosen:**
- Alchemist's Greeting (C) -- 4-damage removal with Madness; close call against Blazing Torch/Compelling Deterrence for the 10th slot.
- Boarded Window (U) -- was in an earlier sideboard draft; replaced by Savage Alliance, which actually removes threats instead of just taxing attackers.
- Spontaneous Mutation (C) -- flash -X/-0 aura, viable vs. big graveyard creatures but narrower than what's currently in the board.
- Geistlight Snare (U) -- cost-reduced counterspell, redundant with Syncopate/Summary Dismissal already boarded.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.09   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  62.1%  prod  64.7%  gap  -2.6pp  [OK]
  U  demand  37.9%  prod  41.2%  gap  -3.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons: max 2 copies each -- verified per card
[PASS] Uncommons: max 2 copies each -- verified per card
[PASS] Rares/Mythics: max 1 copy each -- verified per card
[PASS] Max 5 rares/mythics total (mainboard + sideboard) -- 5/5, all in
       mainboard, zero in sideboard
```
