---
deck_name: "bg-broodtender-selfmill"
cube_id: "eoe"
cube_slug: "eoe"
colors: "BG"
format: "40-card"
built_at: "2026-08-04T21:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Haunted Mire  This land enters tapped.
  8x Forest
  8x Swamp
```

### CREATURES (13)

```
CMC  Card                     Qty   Color  Role                                   Rar
  1  Gene Pollinator           x1    G      Any-colour fixing                      C
  2  Seedship Broodtender      x2    BG     Uncapped reanimator (payoff)           U
  3  Galactic Wayfarer         x2    G      Ramp / colour fixing (Lander)          C
  3  Thawbringer               x2    G      Surveil on entry and on death          C
  3  Xu-Ifit, Osteoharmonist   x1    B      Uncapped repeatable reanimator         R
  4  Icetill Explorer          x1    G      Ramp + land recursion + mill           R
  5  Voidforged Titan          x1    B      Hard-cast body / Void draw             U
  7  Glacier Godmaw            x1    G      Secondary target / landfall pump       U
  9  Bygone Colossus           x2    C      Primary reanimation target             U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                     Qty   Color  Role                                   Rar
  1  Embrace Oblivion          x1    B      1-mana removal (sac is upside)         C
  1  Tragic Trajectory         x2    B      1-mana removal (Void)                  U
  1  Zero Point Ballad         x1    B      Scalable sweeper                       R
  2  Seedship Impact           x1    G      Artifact / enchantment answer          U
  4  Gravkill                  x1    B      Exile removal                          C
```

### OTHER SPELLS (3)

```
CMC  Card                     Qty   Color  Role                                   Rar
  3  Fell Gravship             x2    B      Self-mill + rebuy                      U
  3  Larval Scoutlander        x1    G      Genuine ramp / Spacecraft target       U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                Rar
Chrome Companion          x1    C      Graveyard hate / artifact fodder       C
Dauntless Scrapbot        x1    C      One-shot graveyard exile               U
Shattered Wings           x2    G      Artifact / enchantment / flier answer  C
Sothera, the Supervoid    x1    B      Repeatable exile vs creature decks     M
Depressurize              x2    B      Cheap instant removal                  C
Skystinger                x2    G      Anti-flier blocker                     C
Seedship Impact           x1    G      2nd artifact/enchantment answer        U
```

## ANALYSIS

### DECK IDENTITY

B/G Broodtender Self-Mill. Seedship Broodtender is the reason this deck exists: '{3}{B}{G}, Sacrifice this creature: Return target creature or Spacecraft card from your graveyard to the battlefield' has NO mana-value cap, so alongside Xu-Ifit it is one of only two effects in the whole cube that can return a mana-value-9 Bygone Colossus. Icetill Explorer is the other half - 'You may play an additional land on each of your turns. You may play lands from your graveyard. Landfall - Whenever a land you control enters, mill a card' - which is the rare card that makes self-mill strictly free: every land it buries is a land you can still play, and every land you play mills another card. Landers and Gene Pollinator paper over the cube's worst manabase, and green's fat backs up the Colossus when the graveyard plan is answered.

### THE ONE CARD THAT MAKES SELF-MILL FREE

Every other graveyard deck in this cube pays for its digging. `Icetill Explorer` doesn't.

> *"You may play an additional land on each of your turns. / You may play lands from your graveyard. / Landfall — Whenever a land you control enters, mill a card."*

**18 of 40 cards in this deck are lands — 45% of every mill hits one.** In any other self-mill shell that 45% is pure waste. Here it isn't: a milled land is a land you *may still play*, and playing it triggers landfall to mill again. With the extra land drop, the loop fires **twice per turn**.

That is the whole reason this pipeline is green rather than white or blue. White's contribution to graveyards is surveil; blue's is looting. Green's is a card that makes the cost of digging **zero**.

### WHY B/G IS THE ONLY COLOUR PAIR THAT REACHES A NINE-DROP

`Seedship Broodtender`: *"{3}{B}{G}, Sacrifice this creature: Return target creature or Spacecraft card from your graveyard to the battlefield."*

Read that ability twice and notice what is **absent**: there is no mana-value clause anywhere in it. That matters because the pool's other reanimator, `Scrounge for Eternity`, reads *"…with mana value **5 or less**"* — and `Bygone Colossus` is mana value 9, out of range by four.

Exactly **three cards in this deck** can put a 9/9 onto the battlefield from the graveyard: `Seedship Broodtender` ×2 and `Xu-Ifit` ×1. That is thin, and the deck says so rather than inflating it. The Phase 9 Challenger computed the odds of having a Colossus in the yard by turn 7 from guaranteed mills alone at roughly **51.5%** — a minority-of-games line. Which is why the deck also runs `Glacier Godmaw`, `Voidforged Titan` and a hard-castable `{9}` Colossus that win with an empty graveyard.

### THE MANABASE IS THE DECK

B/G is the **worst-fixed pair in this cube.** `Haunted Mire` is the only dual, it is a common, and it reads *"This land enters tapped"* with no untapped mode. There is no B/G shockland — the cube's five shocks are Watery Grave, Godless Shrine, Breeding Pool, Sacred Foundry and Stomping Ground.

And this deck needs both colours at **both ends of the curve**: `{B}{G}` to cast the Broodtender, `{3}{B}{G}` to activate it. So the fixing had to come from spells:

| Card | What it does | Ramp or fixing? |
|---|---|---|
| `Galactic Wayfarer` ×2 | Lander fetches whichever basic is missing | Both |
| `Larval Scoutlander` | sac a land or Lander → **two** basics | Genuine ramp (net +1) |
| `Gene Pollinator` | *"{T}, Tap an untapped permanent you control: Add one mana of any color"* | **Fixing only** |

That last row is a correction the grill forced, and it moved the land count. `Gene Pollinator` taps *itself plus another permanent* to make **one** mana — that is net zero. It is a colour converter, not an accelerant, and the pool's `Mana Dork` tag is simply wrong for it. Once you strip it and `Seedship Impact`'s doubly-conditional Lander out of the acceleration count, the deck wants **18 lands**, not 17. Rebuilding to 18 moved the goldfish numbers from 82%/88% to **86% keepable / 92% to three lands by turn 3**.

The build also holds itself to **one double-coloured card per colour** — `Glacier Godmaw` at {5}{G}{G} and `Xu-Ifit` at {1}{B}{B} — and refuses `Famished Worldsire` ({5}{G}{G}{G}) outright. `Sothera, the Supervoid` at {2}{B}{B} is a deliberate exception, and it is sideboard-only for exactly that reason.

### THE ACTIVATION CANNOT BE COUNTERED — BUT THE TARGET CAN BE HIT

Two rules facts make the Broodtender activation unusually safe, and one makes it less safe than I first claimed.

**Safe #1:** it is an **activated ability**, not a spell. All three counterspells in this cube read *"Counter target spell."* None of them can touch it.

**Safe #2:** the sacrifice is a **cost**, not an effect. Once the ability is on the stack, killing the Broodtender in response does nothing — it is already gone.

**Not safe:** the ability *targets a card in your graveyard*, and the cube holds **31 graveyard-interaction cards (12.5% density)**. A response that exiles or bottoms the Colossus does fizzle it. My original write-up said "killing anything does not stop the reanimation," which was too broad; the Challenger was right to catch it.

`Xu-Ifit` is the backup, and it is honestly the slower one: a `{T}` ability on a creature means summoning sickness, so it cannot fire before turn 4 and only if it survives a full opponent turn.

### GLACIER GODMAW IS THE HASTE THE COLOSSUS LACKS

A reanimated 9/9 has no haste. It sits there for a turn.

`Glacier Godmaw`: *"Landfall — Whenever a land you control enters, creatures you control get +1/+1 and gain vigilance and **haste** until end of turn."*

Reanimate on turn 6, play a land on turn 7 with Godmaw out, and the Colossus attacks the turn it arrives — as a 10/10. That is the cleanest turn-7 kill in the deck, and it is why Godmaw is here rather than a bigger vanilla body.

### THE WARP TRAP, DISCOVERED HERE

`Bygone Colossus`'s only text is `Warp {3}`, and it is tempting to read that as "a 9/9 for three mana."

The reminder text reads *"Exile this creature at the beginning of the **next** end step."* Warp is a sorcery-speed cast, so cast in your own main phase, the next end step is **your own**. No haste means it cannot attack that turn, and it is exiled before your opponent untaps, so it never blocks either. **A Warped Bygone Colossus does nothing** but bank the card in exile for a later {9} cast and satisfy Void.

Every *other* Warp creature in this cube has an enters trigger that Warp exists to buy. The Colossus has none — which is exactly why it is the perfect reanimation target (`Xu-Ifit`'s *"has no abilities"* strips nothing) and a worthless Warp card.

This was found while building **this** deck and applied backwards to the two U/B builds in the set, whose records had claimed each Warp cast bought an attack step. It did not.

### WHAT THIS DECK LOSES TO, AND WHAT MITIGATING WOULD COST

A fast evasive start. The cheapest real interaction here is sorcery-speed, the kill needs `{3}{B}{G}` on turn 5 at the earliest, and the only dual enters tapped.

The honest cost of fixing that — corrected after the grill caught me naming the wrong one — is **a threat slot**. Not the fixing, and not the self-mill: those sit in slots a defensive card would not take anyway. The deck carries only two graveyard-independent bodies plus the hard-cast Colossus line, and the assembly check already sits at p=0.79 against a 0.75 floor. Cutting a threat for a wall drops it below the gate.

The sideboard carries the answer instead: `Skystinger` ×2 (*"Whenever this creature blocks a creature with flying, this creature gets +5/+0"* — an 8/3 that kills the flier rather than chumping it) and `Depressurize` ×2 at instant speed.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:5  2:3  3:8  4:2  5:1  7:1  9:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 4.2: Seedship Broodtender@0.8, Seedship Broodtender@0.8, Bygone Colossus@0.15, Bygone Colossus@0.15, Glacier Godmaw@0.7, Voidforged Titan@0.6) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 7.8: Icetill Explorer@0.9, Galactic Wayfarer@0.6, Galactic Wayfarer@0.6, Larval Scoutlander@0.7) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 64%  T2 86%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad
  OK        single_large_threat: Gravkill, Tragic Trajectory, Embrace Oblivion, Zero Point Ballad
  OK        noncreature_permanents: Seedship Impact
  CONCEDED  stack: Black and green contain zero counterspells anywhere in this cube - the only ones are blue (Annul, Divert Disaster, Unravel). A B/G deck cannot interact on the stack at any rarity, so the class is conceded rather than faked.
  CONCEDED  graveyard: Neither black nor green has a mainboard-quality graveyard answer here; Chrome Companion and Dauntless Scrapbot are colourless and go to the sideboard.
```

- All four structural checks report PASS - curve, assembly, goldfish and coverage.

- This build's Phase 9 grill produced three BLOCKING findings, all upheld in substance, two with a partial contest on oracle grounds. The most consequential was that deck_audit's tag-based accel count credited Gene Pollinator as ramp when its text is net-zero mana; at an honest accel the same land_target function returns 18, and the deck was rebuilt to 18 lands, which moved the goldfish numbers from 82%/88% to 86%/92%.

- Two Challenger claims were contested and the contests hold. First, the goldfish figures were said to be transposed; the record carries deck_checks output verbatim and the Challenger's alternative came from its own simulation using a different keepable definition. Second, Entropic Battlecruiser was proposed as a free anti-aggro blocker; it is an Artifact - Spacecraft and 'It's an artifact creature at 8+', so it cannot block until stationed to eight, and the raced entry was rewritten around the true cost (a threat slot) rather than taking the swap.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Icetill Explorer turns surplus lands into card selection directly - 'Landfall - Whenever a land you control enters, mill a card' plus an extra land drop each turn - and 'You may play lands from your graveyard' means milled lands are not dead either. Zero Point Ballad is '{X}{B}' so every extra land raises the sweeper ceiling. Bygone Colossus can be HARD-CAST for {9}, which 18 lands plus Landers plus Icetill Explorer's double land drops genuinely reaches, and per the Warp correction that is now the Colossus's only route to the battlefield that does not go through the graveyard. Larval Scoutlander converts a surplus land into two basics. (An earlier version of this entry also credited Fell Gravship's 8+ Station mode; the Challenger correctly noted that crediting an 8-counter threshold here while rejecting Sledge-Class Seedship's 7-counter threshold was inconsistent, so that clause is struck - Fell Gravship earns its slot on the ETB alone.) |
| screw | mitigation | 8 of 22 nonland cards cost 2 or less - corrected from a pre-grill miscount of 10 - and the honest turn-1 plays are Gene Pollinator ({G}) and Tragic Trajectory ({B}) only: Embrace Oblivion reads 'As an additional cost to cast this spell, sacrifice an artifact or creature' and is uncastable on an empty board, and Zero Point Ballad at X=0 destroys nothing. What actually digs out of a short land count is the ramp, correctly separated from the fixing: Galactic Wayfarer x2 and Larval Scoutlander each fetch basics, and Icetill Explorer grants an extra land drop and lets lands be played from the graveyard, so the milled half of the library is still mana. Gene Pollinator is FIXING, not acceleration - it taps itself plus a permanent for one mana. The deck was moved to 18 lands for exactly this reason, and the goldfish check confirms the change: 86% keepable hands and 92% to three lands by turn 3, against 82% and 88% at 17 lands. |
| decapitation | mitigation | The deck has exactly three cards that can return a mana-value-9 Colossus and does not pretend otherwise, so the answer to losing them is a second plan rather than redundancy. Cards that win with an empty graveyard - and the body count HALVED when Icecave Crasher was cut in the grill, which is worth saying plainly: TWO bodies, Glacier Godmaw ({5}{G}{G}, 6/6 trample whose landfall gives the team +1/+1, vigilance and HASTE, which is what lets a freshly reanimated Colossus attack the turn it lands) and Voidforged Titan ({4}{B}, 5/4 drawing off Void), plus the hard-cast Colossus x2 line, which 18 lands and Icetill Explorer's extra land drop genuinely reach. That is 4 of 22 nonland cards involved but only 2 of them are bodies, down from 3 before the grill - which is why the assembly check reads 4.2 effective payoff copies and passes at p=0.79, closer to the 0.75 floor than any other build in this set. Fell Gravship x2 also returns a KILLED Seedship Broodtender from the graveyard to hand. |
| gas-out | mitigation | Icetill Explorer is the answer and it is unusual: in most decks self-mill is a resource cost, but 'You may play lands from your graveyard' converts the milled half of the library back into plays, and the landfall mill digs again - so card economy improves the longer the game goes. Voidforged Titan's Void clause draws at each end step off 11 of 22 enablers. Thawbringer x2 surveil on entry AND on death, so trading them off still filters. Fell Gravship x2 mill three and return a creature or Spacecraft card to hand - with the caveat the Challenger raised: that return is MANDATORY, no 'may', so if the only creature or Spacecraft card in the yard is a just-milled Colossus you are forced to move your payload to hand where it is a {9} card. Legal alternative targets are 13 creature-or-Spacecraft cards of 22, so it usually has another choice, but it is a real cost and it is priced here rather than hidden. |
| raced | accepted | The deck's cheapest real interaction is sorcery-speed (Tragic Trajectory, Embrace Oblivion), the kill needs {3}{B}{G} on turn 5 at the earliest, and the only dual in the colour pair enters tapped - so a fast evasive start can end the game before the Broodtender activation. THE COST OF MITIGATING, corrected after the Phase 9 grill found my first answer wrong: it is not the fixing or the self-mill, both of which sit in slots a defensive card would not take. It is a THREAT slot. The deck carries only three graveyard-independent win conditions (Glacier Godmaw, Voidforged Titan, the hard-cast Colossus) plus three reanimators, and the assembly check already sits at p=0.79 against a 0.75 floor - cutting a threat for a blocker drops it below the gate. The Challenger proposed Entropic Battlecruiser as a free fix; its own text refutes that, because 'It's an artifact creature at 8+' means an Artifact - Spacecraft that cannot block anything until stationed to eight counters. Black's real cheap wall is Monoist Sentry ({B}, 4/1 Defender), and it is genuinely available - but a Defender can never attack, so maindecking it means running a 22nd nonland card that cannot participate in the kill. The sideboard carries the answer instead: Skystinger x2 ('Whenever this creature blocks a creature with flying, this creature gets +5/+0') and Depressurize x2 at instant speed. |
| disruption-fizzle | mitigation | The critical moment is the {3}{B}{G} Seedship Broodtender activation, and two things protect it. It is an ACTIVATED ability, not a spell, so the cube's three counterspells - all reading 'Counter target spell' - cannot touch it. And the sacrifice is a COST, so once the ability is on the stack, killing the Broodtender does not stop the reanimation. What the Challenger correctly established, and what an earlier version of this entry overstated: killing the TARGET does stop it, because the ability targets a card in your graveyard, and the cube holds 31 graveyard-interaction cards at 12.5% density. The real redundancy is the second Broodtender, Xu-Ifit as a separate uncapped reanimator, and Fell Gravship x2 returning a killed Broodtender to hand. Xu-Ifit is priced honestly as the slower backup: it is a {T} ability on a creature, so it is summoning-sick, cannot fire before turn 4, and must survive a full opponent turn first. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sledge-Class Seedship | Rare. 'Whenever this Spacecraft attacks, you may put a creature card from your hand onto the battlefield' is genuinely uncapped and would be a fourth Colossus route — but it is not a creature until 7 charge counters, and Station reads 'Tap another creature you control: Put charge counters equal to its power'. Creatures here with power 4+ are 5 of 23, so reaching 7 counters means tapping two of them across two sorcery-speed windows — and if a 6-power body is already on the battlefield the Spacecraft is redundant. This was the shape judge's weak-keystone flag and it is resolved by cutting the card. |
| Cosmogoyf | Rare {B}{G}. 'Cosmogoyf's power is equal to the number of cards you own in exile.' Cards that put cards into YOUR exile in this list: Bygone Colossus x2 via Warp, and nothing else. So it is a 0/1 on an empty exile and at best a 2/3 after both Colossi have been Warped — a play this deck does not want to make. |
| Famished Worldsire | Mythic 0/0 at {5}{G}{G}{G}. Three green pips in a deck whose only dual enters tapped and which must also hold {B}{B} for Xu-Ifit and {B}{G} for Broodtender. And reanimated by Xu-Ifit it loses Devour to the 'has no abilities' clause, entering as a 0/0 and dying immediately — the single worst reanimation target in the pool. |
| Frenzied Baloth | Rare {G}{G} 3/2 trample haste whose text is entirely uncounterability and damage-prevention protection. Nothing in it advances milling, reanimating or casting the Colossus, and the deck's key play is an ACTIVATED ability that counterspells cannot touch anyway. It would spend a rare slot on a role the thesis does not name. |
| Pull Through the Weft | {3}{G}{G} 'Return up to two target nonland permanent cards from your graveyard to your hand, then return up to two target land cards from your graveyard to the battlefield tapped' — genuinely strong with Icetill Explorer's milled lands, and Sketch B built around it. Excluded on colour: it is the deck's would-be second double-green card, and the shape judge credited this build specifically for holding itself to one double-pip card per colour on a manabase whose only dual enters tapped. |
| Harmonious Grovestrider | {3}{G}{G} */* equal to the number of lands you control, with Ward {2} — a large body that scales with Icetill Explorer's extra land drops. Same exclusion: a second double-green card the manabase cannot support. |
| Lashwhip Predator | {4}{G}{G} 5/7 reach that costs {2} less against three or more opposing creatures. A fine reanimation target, but double-green again and its discount is opponent-dependent. |
| Fungal Colossus | {6}{G} 5/5 costing {X} less for differently named lands. With 4 differently named lands it is a 3-mana 5/5 — but this deck runs only 3 distinct land names (Haunted Mire, Forest, Swamp), so the discount caps at {3} and it is a 4-mana 5/5 at best. |
| Germinating Wurm | {4}{G} 5/5 with Warp {1}{G}. The Warp mode is worth nothing on a vanilla body for the same reason it is worth nothing on the Colossus — a sorcery-speed Warp exiles it at your own end step and it never attacks or blocks. As a hard-cast 5/5 it is simply Voidforged Titan without the card draw. |
| Edge Rover | {G} 2/2 reach, 'When this creature dies, each player creates a Lander token' — cheap fodder that fixes, but the Lander goes to EACH player, so it ramps the opponent too. |
| Sami's Curiosity | {G} 'You gain 2 life. Create a Lander token' — one-mana fixing, but it is a sorcery with no body, and this deck's Engine row is already a declared deviation at 8 of 23. |
| Seedship Agrarian | {3}{G} 3/3 that makes a Lander whenever it becomes tapped and grows on landfall — an excellent ramp engine, but at four mana it competes directly with the turn-5 {3}{B}{G} activation the whole deck is built to reach. |
| Meltstrider Eulogist | {2}{G} 3/3, 'Whenever a creature you control with a +1/+1 counter on it dies, draw a card' — this deck distributes zero +1/+1 counters, so the trigger condition is met by 0 of 23 nonland cards. |
| Hullcarver | {B} 1/1 deathtouch — a fine cheap blocker, but this deck has no sacrifice payoff and no Scout for Survivors, so a 1/1 with no upside does not compete with the fixing and filtering the Engine row needs. |
| Wurmwall Sweeper | {2} colourless 'surveil 2' Spacecraft — colourless is a real virtue on this manabase, but surveil 2 bins a specific 9-drop only when it is in the top two, and Fell Gravship's mill three is the better rate at one more mana on a card that also rebuys. |
| Timeline Culler | 'You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life' — a recurring Void enabler. Excluded because Tragic Trajectory's Void clause is already live off 11 of 23 cards, and {B}{B} is a hard cost on a manabase with 9 black sources. |
| Susurian Voidborn | 'Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life' — a drain clock, but this deck's creature deaths are 3 of 23 cards rather than an engine, so the trigger fires a handful of times per game. |
| Broodguard Elite | {X}{G}{G} entering with X +1/+1 counters. Double green, and its counters do nothing for a deck with no counter payoffs. |
| Bioengineered Future / Terrasymbiosis / Loading Zone / Ouroboroid / Eusocial Engineering | Green's +1/+1-counter and landfall-token package. All are coherent cards for a DIFFERENT green archetype; this deck distributes no counters and its landfall payoff is Icetill Explorer's mill, so every one of them would be a card that does not advance the graveyard plan. |
| Dubious Delicacy | {2}{B} flash -3/-3 plus a life or drain mode — real interaction on an artifact body. Excluded on colour intensity: at 3 mana it competes with turn-3 development on a manabase that must hold {B}{G} open, and Tragic Trajectory does the removal job for one mana. |
| Nutrient Block | {1} indestructible Food that draws when it hits the graveyard — free fodder that replaces itself. Excluded because this deck has no free sacrifice outlet to eat it; its only sacrifice effects are Seedship Broodtender's activation cost (which sacrifices Broodtender itself) and Embrace Oblivion's. |
| Icecave Crasher | {3}{G} 4/4 trample with a landfall pump — a hard-castable threat needing no graveyard, and single-green. Cut in the Phase 9 grill to make room for the 18th land and Larval Scoutlander: it was the weakest of the three graveyard-independent bodies (4 power against Glacier Godmaw 6 and Voidforged Titan 5), and the deck needed the mana more than the fourth threat. Its removal is the reason the decapitation body count dropped from 3 to 2. |
| Vote Out | {3}{B} Convoke sorcery, Destroy target creature. Convoke is genuinely strong with a wide board, but this deck fields 7 creature cards of 22 and spends most turns holding mana for the {3}{B}{G} activation rather than developing width. Cut in the grill, which also brought the Interaction row from 30.4% back inside the 20-30% midrange band. |
| Entropic Battlecruiser | {3}{B} rare 3/10 — proposed by the Phase 9 Challenger as a free anti-aggro blocker for the accepted raced mode. CONTESTED and cut on its own oracle text: it is an Artifact — Spacecraft and its Station reminder reads It is an artifact creature at 8+, so it is not a creature and cannot block at all until stationed to eight charge counters. The Challenger withdrew the swap in the approval round. |
| Monoist Sentry | {B} 4/1 Defender — black’s genuine one-mana wall, and the real candidate for mitigating the raced failure mode. Excluded because a Defender can never attack: maindecking it means a 22nd nonland card that cannot participate in the kill, and the assembly check already sits at p=0.79 against a 0.75 floor. |
| Scrounge for Eternity | The obvious second reanimator, and it is capped: Return target creature or Spacecraft card with mana value 5 or less from your graveyard to the battlefield. Bygone Colossus is mana value 9 — out of range by four. Routing around that cap is the entire reason this pipeline exists. The Challenger raised it as an absence on the grounds that 13 of 23 cards ARE legal targets and its Lander fixes; the counter is that it cannot touch the payload the deck is built around, and the Engine row is already a 40.9% declared deviation. |
| Umbral Collar Zealot | Sacrifice another creature or artifact: Surveil 1 — free, repeatable, no mana, and the Challenger named it the highest-leverage addition to the kill line. Excluded because each activation costs a permanent, and unlike the W/B sibling build this deck has no death triggers to convert that into value: its permanents are ramp pieces and large bodies it wants on the battlefield. |
| Hymn of the Faller | {1}{B} Surveil 1, then you draw a card and lose 1 life, with a Void rider. Raised as an absence against the deck’s thin card draw. Excluded because the Engine row is already 9 of 22 and every slot in it must also fix mana or fill the yard on a body; Hymn does neither. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     3.32   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.09 adj [MV 3.32 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  48.0%  prod  55.6%  gap  -7.6pp  [OK]
  G  demand  52.0%  prod  55.6%  gap  -3.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from the eoe cube mainboard
       Phase 5C check 2 - every name matched by exact string against the working pool cache; 0 missing.
[PASS] Commons and uncommons: max 2 copies
       Phase 5C check 3 via cube_search.get_max_copies; no violation.
[PASS] Rares and mythics: max 1 copy
       Phase 5C check 3; all four are singletons.
[PASS] Max 6 rares/mythics total across mainboard + sideboard
       4 used - Xu-Ifit Osteoharmonist, Icetill Explorer, Zero Point Ballad (mainboard); Sothera the Supervoid (sideboard). 2 slots unused, and deliberately: the Phase 9 Challenger proposed Entropic Battlecruiser for one of them as an anti-aggro blocker, which its own oracle text refutes - it is an Artifact - Spacecraft and 'It's an artifact creature at 8+', so it cannot block until stationed to eight.
[PASS] Basic lands unlimited (format-supplied)
       8 Forest, 8 Swamp - exempt from copy limits.
[PASS] 40-card mainboard
       22 nonland + 18 land = 40.
[PASS] 10-card sideboard
       1+1+2+1+1+2+2 = 10.
[PASS] Colour identity B/G, no splash
       Phase 5C check 4 via effective_cost.best_mode - every nonland card returns a usable 'cast' mode in B/G; 0 unusable.
```
