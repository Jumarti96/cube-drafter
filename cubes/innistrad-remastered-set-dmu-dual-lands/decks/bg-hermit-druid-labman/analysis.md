---
deck_name: "bg-hermit-druid-labman"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-09T03:23:43Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
4x Forest
3x Swamp
2x Haunted Mire            BG dual, enters tapped
1x Deathcap Glade          BG dual, enters tapped unless 2+ other lands
2x Tangled Islet           GU dual, enters tapped (U splash support)
2x Contaminated Aquifer    BU dual, enters tapped (U splash support)
1x Evolving Wilds          Fetches a basic to battlefield; also strips a basic from the library
```

### CREATURES (12)
```
CMC  Card                    Qty  Color  Role                                Rar
  1  Sanitarium Skeleton     x1   B      Repeatable sac fodder (2B regrowth)   C
  1  Young Wolf              x1   G      Sac fodder (Undying, one-time free)   C
  2  Hermit Druid            x1   G      Combo piece - mill engine             R
  2  Duskwatch Recruiter     x2   G      Redundant creature tutor              U
  2  Scorned Villager        x2   G      Ramp toward turn-2 Druid              C
  3  Somberwald Sage         x1   G      Ramp (creature spells only)           U
  3  Morbid Opportunist      x1   B      Draw-effect finisher (death trigger)  U
  3  Laboratory Maniac       x1   U      Combo piece - win condition           U
  3  Reckless Scholar        x1   U      Draw-effect finisher (repeatable)     C
  3  Wild-Field Scarecrow    x1   C      Basic-depletion + Defender blocker    C
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                    Qty  Color  Role                                Rar
  1  Tragic Slip             x2   B      Removal (near-unconditional w/ Morbid) C
  1  Crawl from the Cellar   x2   B      Combo piece - recurs Lab Maniac       C
  1  Traverse the Ulvenwald  x1   G      Tutor + basic-depletion               R
  2  Think Twice             x2   U      Draw-effect finisher (flashback)      C
  2  Grapple with the Past   x1   G      Self-mill / GY fill                   C
  2  Infernal Grasp          x1   B      Removal (unconditional)               U
  3  Forbidden Alchemy       x1   U      Self-mill / card selection            C
  3  Eldritch Evolution      x1   G      Tutor/cheat - puts a piece into play  R
  3  Maelstrom Pulse         x1   BG     Removal (any nonland permanent)       R
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty  Color  Role                                Rar
  1  Traveler's Amulet       x1   C      Basic-depletion tool                  C
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                Rar
Infernal Grasp             x1   B      2nd copy vs. grindy/creature matchups   U
Duel for Dominance         x1   G      Answers a big threat pre-combo          C
Imprisoned in the Moon     x1   U      Hexproof/indestructible/planeswalkers   C
Killing Wave               x1   B      Mini-sweeper vs. go-wide aggro          U
Syncopate                  x1   U      Protects the combo turn                 C
Essence Flux               x1   U      Blinks Hermit Druid away from removal   C
Silent Departure           x1   U      Bounce; tempo or self-save              C
Reckless Scholar           x1   U      2nd redundant draw-effect finisher      C
Village Rites              x1   B      Redundant draw-effect finisher          C
Deranged Assistant         x1   U      Alternate self-mill/ramp body           C
```

## ANALYSIS

**Honest timeline (this is the important part).** This cube's BG(u) nonbasic land pool is thin - only 6 dual lands total across BG/GU/BU (2 per pair). A true zero-basic Hermit Druid build would cap out around 7-9 real lands, which was rejected as too fragile in favor of a healthier 15-land manabase. This list runs 7 basics (4 Forest/3 Swamp). Two rounds of self-grill quantified what that costs: with 7 basics in the library, a single early Hermit Druid activation only mills through roughly 5-8 cards on average (using the (N+1)/(K+1) expected-position formula for the first "success" in a shuffled deck), not the whole library. The basic-depletion package (Traverse the Ulvenwald, Evolving Wilds, Traveler's Amulet, Wild-Field Scarecrow) meaningfully improves this - each is a permanent, one-way removal of a basic from the library - but they're all singletons, so the odds of drawing all four by turn 8 are under 2%. The realistic plan is a multi-turn grind: Hermit Druid activating turn after turn (each activation removes at least the one basic it stops on) until the basics run out organically, landing a genuine full mill around turn 9-13, occasionally earlier (roughly 10-20% of games) if the depletion tools or lucky self-mill hits come together faster. This is a real, working combo-value deck - just not a same-turn instant kill. The tradeoff for a faster line is reverting toward a stricter zero-basic land base (~9 lands), accepting a thinner manabase.

**Correct sequencing (a real trap to avoid).** Once the library empties, if Laboratory Maniac isn't already on the battlefield, the next draw step loses the game by decking, not wins it - Crawl from the Cellar (to hand) -> cast Laboratory Maniac (2U) -> a draw effect all need to be funded the same turn the library goes empty. The safer line is to get Laboratory Maniac into play *before* attempting the full-mill activation (via Duskwatch Recruiter or Eldritch Evolution finding it early) - then even a normal draw step after the mill wins automatically, with no post-mill mana required.

**Delirium for Traverse the Ulvenwald.** The graveyard fills with creatures (Young Wolf, Sanitarium Skeleton, milled creatures), instants/sorceries (Tragic Slip, Grapple with the Past, Crawl from the Cellar), and lands (basics milled or fetched) - 3 of the 4 types needed are naturally present within the first few self-mill triggers; an artifact (Traveler's Amulet, once sacrificed) usually supplies the fourth.

**Morbid enablers for Tragic Slip.** Young Wolf, Sanitarium Skeleton, and Wild-Field Scarecrow can all die to your own sacrifice effects (Eldritch Evolution's cost, sideboard Village Rites), making Tragic Slip's -13/-13 mode trivial to turn on before combat.

**Cards Considered but Excluded**

Rares/mythics cut for the 5-card budget (the mainboard spends all 5 on Hermit Druid, Traverse the Ulvenwald, Eldritch Evolution, Maelstrom Pulse, and Deathcap Glade):
- The Gitrog Monster (mythic BG) - strong self-mill value engine/backup threat, but no budget left
- The Meathook Massacre (mythic B) - board wipe, would help vs. aggro
- Garruk Relentless // Garruk, the Veil-Cursed (mythic BG) - removal + tutor + threat
- Collective Brutality (rare B) - flexible discard/removal/drain
- Tireless Tracker (rare G) - strong value creature, not combo-critical
- Memory Deluge (rare U) - excellent draw spell, but heavy UU flashback competes with the light U splash
- Gisa and Geralf (rare BU), Cryptolith Rite (rare G), Tamiyo's Journal (rare C) - all reasonable, none essential enough to displace the current 5
- Dreamroot Cascade (rare GU), Shipwreck Marsh (rare BU) - would improve the U splash's fixing, but spending 2 more rare slots on lands would gut the tutor suite

Uncommons/commons a tier below the current includes:
- Deadly Allure (uncommon BG) - arguably better removal than the sideboard's Duel for Dominance (forced block + deathtouch vs. a riskier fight effect); worth testing as a swap
- Splinterfright, Grizzled Angler // Grisly Anglerfish (self-mill bodies) - redundant with the current self-mill package
- Eccentric Farmer - redundant with Grapple with the Past
- Groundskeeper - only recurs basic lands from the graveyard; nearly dead with just 7 basics in the deck
- Blood Artist - fine sac payoff, but the deck doesn't lean hard enough into aristocrats to need it

Sideboard-consideration cards that didn't make the 10:
- Compelling Deterrence (U) - bounce + discard tempo
- Boarded Window (C) - anti-burn/aggro damage prevention
- Spontaneous Mutation (U) - -X/-X removal aura, alternative to Duel for Dominance

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     2.0   Ramp cards: 0 (audit tool does not tag creature mana
                    dorks as "ramp" - 2x Scorned Villager + Somberwald
                    Sage are real ramp despite this reading 0)

Color Balance (core):  [PASS]
  B  demand  40.0%  prod  53.3%  gap -13.3pp  [OK]
  G  demand  60.0%  prod  60.0%  gap  +0.0pp  [OK]

Splash Check: [PASS]
  U  4 card(s), max CMC 3  sources 4/3  [OK]
  (Note: this undercounts - Forbidden Alchemy also needs U to hard-cast,
  making the real U-dependent count 5, still comfortably served by 4 U sources)
```

## RESTRICTIONS COMPLIANCE
```
[PASS] All commons/uncommons <= 2 copies (checked across mainboard + sideboard)
[PASS] All rares/mythics <= 1 copy each
[PASS] Total rare/mythic count: 5 / 5 (Hermit Druid, Traverse the Ulvenwald,
       Eldritch Evolution, Maelstrom Pulse, Deathcap Glade)
[PASS] No excluded cards used
[PASS] Every card verified present in the cube's working pool by exact name
```
