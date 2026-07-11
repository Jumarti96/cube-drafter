---
deck_name: "ub-graveyard-grind"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-10T02:25:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  2x Contaminated Aquifer     UB dual, enters tapped
  6x Island
  9x Swamp
```

### CREATURES (7)
```
CMC  Card                    Qty   Color  Role                                    Rar
  2  Aquamoeba                x2    U      Repeatable discard outlet, blocker      C
  3  Vexing Sphinx            x1    U      Flying threat, discard engine, draw    R
  3  Undead Gladiator         x2    B      Self-recursive threat, discard outlet   U
  3  Urborg Syphon-Mage       x1    B      Life drain engine, discard outlet       C
  3  Phyrexian Rager          x1    B      ETB draw, value body                    C
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                    Qty   Color  Role                                    Rar
  1  Obsessive Search         x1    U      Madness cantrip, discard fodder          C
  1  Entomb                   x1    B      Tutor any card to graveyard              R
  2  Terror                   x1    B      Efficient removal (nonblack)             C
  2  Chainer's Edict          x1    B      Sacrifice removal, flashback             U
  3  Circular Logic           x2    U      Madness counterspell, scales w/ yard     U
  3  Frantic Search           x2    U      Draw 2 discard 2, untap 3 lands          C
  3  Ichor Slick              x1    B      Removal with cycling option              C
  3  Recoil                   x1    BU     Bounce any permanent + forced discard    U
  4  Deep Analysis            x1    U      Draw 2, flashback from graveyard         C
  6  Dark Withering           x2    B      Madness B: destroy nonblack              U
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                                    Rar
  2  Zombie Infestation       x2    B      Repeatable token generator, discard     U
  3  Jalum Tome               x1    C      Repeatable colorless looting             C
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Duress                  x2    B      Hand disruption vs control/combo      C
Counterspell            x2    U      Hard counter vs control/combo         C
Tormod's Crypt          x2    C      Graveyard hate (mirror, reanimator)   U
Faceless Butcher        x2    B      Exile removal vs recursive threats    U
Recoil                  x1    BU     Bounce any permanent type + discard   U
Cackling Fiend          x1    B      ETB discard vs control (each opp.)    C
```

## ANALYSIS

### Slot Allocation
Macro-Archetype: Midrange (Grind). Projected Avg MV: 2.9.

Lands: 17 (42.5% of N=40) -- Midrange wants 38-42%; 17 reflects the deck's need to hit 3 mana for engine deployment while running cantrips and Frantic Search's virtual mana.

Interaction: 9/23 non-lands = 39%. Interaction-heavy by design; Madness discounts turn removal and counters into tempo-positive plays.

Threats/Payoffs: 8/23 = 35%. At the Midrange sweet spot, with Zombie Infestation and Undead Gladiator pulling double duty as both threat and engine.

Engine & Infrastructure: Absorbed into threats per Midrange design. Jalum Tome, Aquamoeba, and Frantic Search are pure enablers embedded in the threat package.

### Land Count Modifiers
Baseline: 17 (42.5% of N=40). Cantrips: 0 (1x Obsessive Search at 1CMC; need 3 for -1 modifier). Mana dorks/rocks: 0. MDFCs: 0. Final: 17 lands.

### Mana Source Allocation
U pips: 11 (39%), B pips: 17 (61%) across core cards. Directed: 8 U sources, 11 B sources across 17 lands. 2x Contaminated Aquifer + 6 Island = 8 U sources. 2x Contaminated Aquifer + 9 Swamp = 11 B sources.

### CMC Curve
CMC 0: 17 (lands + cycling), CMC 1: 4 (Obsessive Search, Entomb, Duress x2 SB), CMC 2: 8 (Aquamoeba, Terror, Chainer's Edict, Zombie Infestation, Counterspell x2 SB), CMC 3: 13 (engine core + interaction), CMC 4: 4 (Deep Analysis, Faceless Butcher x2 SB, Cackling Fiend SB), CMC 6: 2 (Dark Withering).

### Key Interactions

**Madness Discount Chain.** Aquamoeba (or any discard outlet) + Dark Withering = 1-mana instant removal at madness cost B. This is the deck's signature tempo play -- answering threats while deploying your own board.

**Circular Logic Scaling.** Circular Logic's tax = 1 per card in your graveyard. With Frantic Search alone putting 2 cards in the yard on turn 3, Logic demands at least 3 extra mana by turn 4. In a typical game, the graveyard reaches 5-8 cards by turn 5, making Logic a 1-mana hard counter (madness U) that taxes for 5-8 mana.

**Undead Gladiator Engine.** During each upkeep, pay 1B and discard a card to return Undead Gladiator from graveyard to hand. The discard triggers madness on any madness card in hand. Then recast Gladiator for 1BB. This is a self-contained recursion loop that generates value every turn cycle.

**Entomb Flexibility.** 1-mana instant that tutors any card to graveyard. Use cases: (a) put Undead Gladiator in yard to start recursion on turn 2, (b) put Deep Analysis in yard for flashback draw, (c) put Chainer's Edict in yard for removal access, (d) find a Dark Withering then cycle your Street Wra... actually the Wraith was cut. Still, Entomb + Deep Analysis is a clean 2-card draw-3 engine for 1 + 1U + 3 life.

**Zombie Infestation Burst.** Discard 2 madness cards (e.g., Circular Logic + Dark Withering) to Zombie Infestation: create a 2/2 Zombie token, then cast both spells for their madness costs (U + B). Net result: 1 Zombie token + countered spell + destroyed creature for 4 mana and 2 cards. This is the deck's most explosive play pattern.

**Frantic Search as Ritual.** Cast Frantic Search for 2U, untap up to 3 lands (which already paid for the spell). Net: +1 mana floating, drew 2 cards, discarded 2 cards (which can be madness spells). Frantic Search is functionally free and generates tempo while advancing the graveyard plan.

### Cards Considered but Excluded

**Mindslicer (Rare).** Symmetric hand discard is devastating with madness, but the 4-mana slot was already occupied by Deep Analysis and Entomb. Consider as a swap for Cackling Fiend in the sideboard if the meta shifts toward control. In a different build path (Mindslicer Lock sub-archetype), this would be the centerpiece.

**Oversold Cemetery (Rare).** Returns a creature from graveyard to hand each upkeep at threshold 4+. Strong but competes with Entomb for the rare budget and duplicates Undead Gladiator's recursion function. Worth considering if you want more redundancy.

**Body Snatcher (Rare).** Reanimates on death but requires discarding a creature card on ETB. Synergistic but fragile; Dread Return is the cleaner reanimation spell in this pool. If you pivot toward a reanimator plan, both Body Snatcher and Dread Return become includes.

**Dread Return (Uncommon).** Reanimates any creature from graveyard with flashback (sacrifice 3 creatures). Excellent with Zombie Infestation tokens as sacrifice fodder. Excluded because it needs a dedicated fatty target (Worldgorger Dragon, Chainer) which pushes toward a reanimator sub-archetype rather than the grind plan.

**Gamble (Rare).** 1-mana tutor that discards at random. Powerful but requires red splash and costs a rare slot. Entomb is more reliable for this build. In a UBR splash version, Gamble would be a strong consideration.

**Festering Goblin (Common).** Removed from sideboard in favor of Faceless Butcher which exiles rather than giving -1/-1, handling larger and recursive threats. The -1/-1 trigger rarely kills relevant creatures in this cube's power band.

**Street Wraith (Common).** Cycles for 2 life. Cut because it provides zero synergy beyond being discard fodder -- Deep Analysis generates actual card advantage (draw 2 + flashback for draw 2 more) instead of just replacing itself at a life cost.

**Obsessive Search (cut from x2 to x1).** The madness cost equals the normal cost (U), providing no discount. Kept 1 copy as a free discard enabler -- it replaces itself when madness-cast from any discard activation, keeping hand size neutral while enabling the engine.

**Ichor Slick (cut from x2 to x1).** Madness cost 3B is MORE expensive than hard-casting 2B. This is a trap -- the madness synergy is negative. Kept 1 copy for cycling flexibility; replaced 1 with Terror (1B instant, more efficient removal).

**Third Urborg Syphon-Mage.** Cut the second copy to reduce the 3-drop glut from 14 to 13. The first copy still provides a repeatable life drain outlet. Two copies in a 40-card deck is redundant given the deck's card selection.

**Second Jalum Tome.** Cut to one copy. At 3 mana to cast and 2 to activate each turn, the second copy was a dead draw. One Tome is enough for a repeatable colorless loot outlet; Frantic Search and Aquamoeba provide additional discard velocity.

### Matchup Notes

**vs Aggro:** Bring in Faceless Butcher for exile removal against recursive threats. Terror and Dark Withering handle early creatures. Aquamoeba blocks as a 1/3 until you need to switch. The deck is soft to very fast starts (Savannah Lions into 2-drop into 3-drop) -- mulligan for interaction.

**vs Control:** Bring in Duress and Counterspell. Duress strips their counters/removal before deploying engines. Counterspell handles must-answer bombs. Recoil bounces resolved planeswalkers/enchantments. Circular Logic's scaling tax is especially punishing against control opponents trying to resolve expensive spells through a full graveyard.

**vs Midrange/Mirror:** Tormod's Crypt comes in. The mirror is about who resolves Zombie Infestation first and who has more discard outlets. Entomb finding the right answer (Deep Analysis for cards, Undead Gladiator for recursion) is key. Don't overcommit to the graveyard if they're holding up Crypt mana.

## MANA AUDIT: PASS
```
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  60.7%  prod  64.7%  gap  -4.0pp  [OK]
  U  demand  39.3%  prod  47.1%  gap  -7.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
  common_copies_max_2: PASS
  uncommon_copies_max_2: PASS
  rare_copies_max_1: PASS
  mythic_copies_max_1: PASS
  total_rares_mythics_max_5: PASS (2/5 -- Vexing Sphinx, Entomb)
  all_cards_in_pool: PASS
  core_colors_UB: PASS
```
