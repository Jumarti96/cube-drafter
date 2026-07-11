---
deck_name: "rooftop-storm-zombies"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UB"
format: "40-card"
built_at: "2026-07-08T16:19:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

Necroduality and a nerfed-to-CMC-6 Rooftop Storm anchor a UB graveyard/aristocrats shell that only has 13 real Zombies to work with, so the deck leans on Gisa and Geralf's self-mill/recursion and a dense sacrifice sub-package (Village Rites, Ghoulish Procession, Blood Artist) to stay functional even when the payoff engine is still assembling. Grimgrin, Corpse-Born closes games as a repeatable sac-outlet finisher that turns the deck's abundant fodder into removal and growth. Every non-Zombie card earns its slot by either fueling or cashing in the constant death triggers this shell generates.

### LANDS (16)
```
  9x Swamp
  5x Island
  2x Contaminated Aquifer     UB dual, enters tapped, common
```

### CREATURES (14)
```
CMC  Card                          Qty   Color  Role                              Rar
  1  [Gravecrawler](https://scryfall.com/search?q=!"Gravecrawler")                  x1    B      Recursive sac fodder              R
  2  [Butcher Ghoul](https://scryfall.com/search?q=!"Butcher Ghoul")                 x2    B      Undying sac fodder                C
  2  [Bladestitched Skaab](https://scryfall.com/search?q=!"Bladestitched Skaab")           x2    BU     Zombie lord (+1/+0)               U
  2  [Blood Artist](https://scryfall.com/search?q=!"Blood Artist")                  x1    B      Aristocrats drain payoff          U
  3  [Archghoul of Thraben](https://scryfall.com/search?q=!"Archghoul of Thraben")          x2    B      Death-value looter                U
  4  [Gisa and Geralf](https://scryfall.com/search?q=!"Gisa and Geralf")               x1    BU     Self-mill + GY Zombie recast      R
  4  [Drunau Corpse Trawler](https://scryfall.com/search?q=!"Drunau Corpse Trawler")         x2    U      Token maker, Necroduality target  U
  4  [Haunted Dead](https://scryfall.com/search?q=!"Haunted Dead")                  x2    B      ETB token + GY recursion          U
  5  [Grimgrin, Corpse-Born](https://scryfall.com/search?q=!"Grimgrin, Corpse-Born")         x1    BU     Finisher / repeatable sac outlet  M
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                          Qty   Color  Role                              Rar
  1  [Village Rites](https://scryfall.com/search?q=!"Village Rites")                 x2    B      Sac outlet / card draw            C
  1  [Tragic Slip](https://scryfall.com/search?q=!"Tragic Slip")                   x2    B      Cheap removal (Morbid)             C
  2  [Infernal Grasp](https://scryfall.com/search?q=!"Infernal Grasp")                x2    B      Unconditional removal             U
```

### OTHER SPELLS (4)
```
CMC  Card                          Qty   Color  Role                              Rar
  2  [Ghoulish Procession](https://scryfall.com/search?q=!"Ghoulish Procession")           x2    B      Death-trigger Zombie token engine U
  4  [Necroduality](https://scryfall.com/search?q=!"Necroduality")                  x1    U      Copies nontoken Zombie ETBs       M
  6  [Rooftop Storm](https://scryfall.com/search?q=!"Rooftop Storm")                 x1    U      Free-casts Zombie spells (0 mana) R
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in                Rar
[Imprisoned in the Moon](https://scryfall.com/search?q=!"Imprisoned in the Moon")        x2    U      Vs. a bomb land/PW/creature can't kill C
[Sever the Bloodline](https://scryfall.com/search?q=!"Sever the Bloodline")            x1    B      Vs. token-copy / clone mirrors    U
[Killing Wave](https://scryfall.com/search?q=!"Killing Wave")                   x1    B      Vs. aggro / go-wide boards        U
[Compelling Deterrence](https://scryfall.com/search?q=!"Compelling Deterrence")          x1    U      Vs. bombs (bonus discard w/ Zombie) U
[Morkrut Banshee](https://scryfall.com/search?q=!"Morkrut Banshee")                x1    B      Vs. small-toughness aggro/tokens  U
[Boarded Window](https://scryfall.com/search?q=!"Boarded Window")                 x1    C      Vs. fast aggro (buys time)        U
[Nebelgast Herald](https://scryfall.com/search?q=!"Nebelgast Herald")               x1    U      Vs. aggro (flash tapper)          U
[Summary Dismissal](https://scryfall.com/search?q=!"Summary Dismissal")              x1    U      Vs. combo/spellslinger mirrors    U
[Murderous Compulsion](https://scryfall.com/search?q=!"Murderous Compulsion")           x1    B      Vs. grindy/control (extra removal) C
```

## ANALYSIS

**The Necroduality + Drunau Corpse Trawler interaction is the deck's single biggest blowout.** Casting Drunau Corpse Trawler (a nontoken Zombie) with Necroduality in play triggers Necroduality on Drunau's own ETB, creating a token copy of Drunau - which itself has an ETB that makes a 2/2 Zombie token, and Necroduality's copy trigger fires again off that copied Drunau's ETB too. Net result from one 4-mana creature: the original Drunau, a token copy of Drunau, and two 2/2 Zombie tokens - four bodies from a single card, all immediately available as Grimgrin sac fuel or Ghoulish Procession triggers. Haunted Dead behaves the same way (copy makes a second Spirit token).

**Rooftop Storm is costed {5}{U} (CMC 6) in this cube, not the real-world {1}{U}{U}.** This is a deliberate curator adjustment reflected consistently in `enriched.json` and `mainboard.csv`, so the deck treats it as a top-end refuel spell rather than an early combo enabler - cast it late, then dump the rest of a Zombie-heavy hand for free in one turn. This is worth knowing before goldfishing the deck, since it plays very differently from the paper original.

**Macro-Archetype: Combo (per the tagger's classification of the pipeline's core cards), but functionally a value-forward Combo/Midrange hybrid.** Avg MV: 2.67. Land count deviates above the typical 30-36% Combo range (16 lands = 40% of N=40) because this deck has zero fast mana or tutors - unlike a classic ritual-based storm shell, it needs to hit land drops naturally through turn 5-6 to deploy Grimgrin and Rooftop Storm on curve. The deck also has a built-in fallback plan: even without ever drawing the 5 rare/mythic payoffs, Archghoul + Ghoulish Procession + Village Rites + Tragic Slip/Infernal Grasp form a workable standalone UB aristocrats shell.

**Slot allocation (24 nonland cards, N=40):**

| Slot | Count | % of nonland | Rationale |
|---|---|---|---|
| Lands | 16 | 40% of N | Above the 30-36% Combo baseline - no ramp/rituals exist to smooth an otherwise all-natural land sequence to a CMC-6 payoff. |
| Interaction | 4 (Tragic Slip x2, Infernal Grasp x2) | 16.7% | Low end of Combo range (10-20%); competitive metagames still demand some unconditional removal even in an engine-dense build. |
| Threats/Payoffs | 4 (Rooftop Storm, Necroduality, Gisa and Geralf, Grimgrin) | 16.7% | Slightly above the 5-15% Combo guidance - these ARE the archetype's identity and can't be trimmed without abandoning the pipeline. |
| Engine & Infrastructure/Fodder | 16 | 66.7% | Above the 40-50% Combo guidance, deliberately - nearly every creature in this shell double-duties as both sac fodder and a payoff-engine piece (e.g. Drunau, Haunted Dead), so the enabler/payoff boundary is intentionally blurred rather than cleanly separated. |

**Mana base:** 20 B pips / 8 U pips (71.4% / 28.6%) from mainboard nonland costs -> targeted 11 B sources / 5 U sources, delivered as 11 B (9 Swamp + 2 Contaminated Aquifer) / 7 U (5 Island + 2 Aquifer). Blue is intentionally over-supplied relative to raw pip count (43.8% prod vs 28.6% demand) because Necroduality and Rooftop Storm are single-blue-pip payoffs the deck cannot afford to strand in hand - the mana_audit's gap formula only flags under-supply, so this generous blue count carries no penalty. (Note: the audit's pip_demand counts one pip per card containing that color rather than parsing exact mana-symbol counts - a known methodology simplification; no card in this deck has a double-pip cost, so it doesn't affect this build's numbers.)

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget:** The user's original brief named 7 rares/mythics as archetype-core; only 5 fit the cap. [Invasion of Innistrad // Deluge of the Dead](https://scryfall.com/search?q=!"Invasion of Innistrad") (flash -13/-13 removal + 2 Zombie tokens, then a repeatable GY-exile-for-token ability) and [Overcharged Amalgam](https://scryfall.com/search?q=!"Overcharged Amalgam") (flash flying counterspell-on-exploit) were the two cut - both are strong, but Rooftop Storm/Necroduality/Gisa and Geralf/Grimgrin/Gravecrawler were judged more central to the Combo-Value identity specifically (the free-cast/copy engine plus its two recursion pillars) versus these two being excellent-but-replaceable interaction/value pieces. Other rares/mythics that were tempting but never seriously threatened the 5 locked-in slots: [Skirsdag High Priest](https://scryfall.com/search?q=!"Skirsdag High Priest") (sac-for-Devils engine), [Voldaren Bloodcaster // Bloodbat Summoner](https://scryfall.com/search?q=!"Voldaren Bloodcaster") (sac-triggered token maker), [The Meathook Massacre](https://scryfall.com/search?q=!"The Meathook Massacre") (sweeper + drain), [Metallic Mimic](https://scryfall.com/search?q=!"Metallic Mimic") (tribal cost-reducer/anthem), [Sorin, Imperious Bloodlord](https://scryfall.com/search?q=!"Sorin, Imperious Bloodlord") (lifegain/aristocrats planeswalker), [Memory Deluge](https://scryfall.com/search?q=!"Memory Deluge") (card advantage).

**Uncommons/commons a tier below the chosen includes:** [Falkenrath Torturer](https://scryfall.com/search?q=!"Falkenrath Torturer") (sac outlet, flying enabler) and [Morbid Opportunist](https://scryfall.com/search?q=!"Morbid Opportunist") (death-trigger looter) are close analogues to Archghoul/Blood Artist but redundant once those were locked in. [Soul Separator](https://scryfall.com/search?q=!"Soul Separator") and [Gisa's Bidding](https://scryfall.com/search?q=!"Gisa's Bidding") are token/graveyard payoffs that lost out to Ghoulish Procession's lower cost and cleaner trigger. [Deranged Assistant](https://scryfall.com/search?q=!"Deranged Assistant"), [Grizzled Angler // Grisly Anglerfish](https://scryfall.com/search?q=!"Grizzled Angler"), [Forbidden Alchemy](https://scryfall.com/search?q=!"Forbidden Alchemy"), and [Think Twice](https://scryfall.com/search?q=!"Think Twice") are all reasonable self-mill/card-advantage pieces that fill the same slot as Gisa and Geralf's built-in mill and were cut to keep the curve tight. [Restless Bloodseeker // Bloodsoaked Reveler](https://scryfall.com/search?q=!"Restless Bloodseeker") is a fine aristocrats payoff but overlaps heavily with Blood Artist.

**Sideboard-consideration cards not included:** [Metallic Mimic](https://scryfall.com/search?q=!"Metallic Mimic") would be excellent SB tech but is blocked entirely by the exhausted rare/mythic budget. [Falkenrath Torturer](https://scryfall.com/search?q=!"Falkenrath Torturer") and [Grizzled Angler // Grisly Anglerfish](https://scryfall.com/search?q=!"Grizzled Angler") were considered as flex value swaps for grindy games. [Geistlight Snare](https://scryfall.com/search?q=!"Geistlight Snare") (conditional counterspell) and [Mist Raven](https://scryfall.com/search?q=!"Mist Raven") (bounce + flier) were considered as additional tempo answers vs. control/spellslinger matchups but lost out to Summary Dismissal and Compelling Deterrence for those roles.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.67   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  71.4%  prod  68.8%  gap  +2.6pp  [OK]
  U  demand  28.6%  prod  43.8%  gap -15.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons: max 2 copies each - all commons at or under cap
[PASS] Uncommons: max 2 copies each - all uncommons at or under cap
[PASS] Rares/mythics: max 1 copy each - all 5 at exactly 1 copy
[PASS] Max 5 rares/mythics total across main+sideboard - exactly 5 used
       (Gravecrawler, Rooftop Storm, Necroduality, Gisa and Geralf,
        Grimgrin, Corpse-Born); 0 in sideboard
[PASS] 0 restriction violations (independently verified by Challenger agent)
```
