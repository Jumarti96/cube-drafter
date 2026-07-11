---
deck_name: "ub-madness-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UBR"
format: "40-card"
built_at: "2026-07-10T02:03:22Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  9x Swamp
  3x Island
  1x Mountain              Splash source for Gamble
  1x Contaminated Aquifer  UB dual, enters tapped
  2x Smoldering Crater     R source, enters tapped, Cycling {2}
```

### CREATURES (8)
```
CMC  Card                     Qty   Color  Role                              Rar
  2  Aquamoeba                x1    U      Discard outlet / early threat    C
  3  Vexing Sphinx             x1    U      Keystone payoff, card draw       R
  3  Urborg Syphon-Mage        x2    B      Discard-to-drain engine          C
  3  Undead Gladiator          x1    B      Self-recursion / cycler          U
  4  Body Snatcher             x1    B      Discard outlet + reanimator      R
  4  Mindslicer                x1    B      Mass-discard finisher            R
  5  Chainer, Dementia Master  x1    B      Reanimation engine (any GY)      R
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                     Qty   Color  Role                              Rar
  1  Obsessive Search          x2    U      Cantrip / Madness core            C
  1  Gamble                    x1    R      Tutor (splash)                    R
  2  Chainer's Edict           x1    B      Unconditional edict removal       U
  2  Terror                    x1    B      Removal (nonblack)                C
  3  Circular Logic            x2    U      Counter / Madness keystone        U
  3  Ichor Slick               x2    B      Removal + cycling / Madness       C
  3  Frantic Search            x1    U      Free cantrip / discard outlet     C
  3  Recoil                    x1    BU     Bounce + discard                  U
  4  Dread Return              x1    B      Reanimation spell (own GY)        U
  6  Dark Withering            x1    B      Removal / Madness core            U
```

### OTHER SPELLS (3)
```
CMC  Card                     Qty   Color  Role                              Rar
  2  Zombie Infestation        x2    B      Discard engine / tokens           U
  3  Jalum Tome                x1    C      Repeatable looter                 C
```

## SIDEBOARD (10)
```
Card                     Qty   Color  Role / When to board in            Rar
Tormod's Crypt            x1    C      Vs. graveyard decks / mirror       U
Duress                    x1    B      Vs. control/combo                  C
Damping Sphere            x1    C      Vs. ramp / big mana                U
Icy Manipulator           x1    C      Vs. single must-answer threats     U
Street Wraith             x1    B      Extra evasion / free cycler        C
Terror                    x1    B      Extra cheap removal                C
Necrosavant               x1    B      Extra threat vs. grindy matchups   U
Man-o'-War                x1    U      Vs. aggro (tempo reset)            C
Frantic Search            x1    U      Extra velocity vs. control         C
Aquamoeba                 x1    U      Extra early play vs. aggro         C
```

## ANALYSIS

**Madness math.** 4 Madness cards, 8 real discard outlets (Aquamoeba, Zombie Infestation x2, Jalum Tome, Frantic Search, Vexing Sphinx's cumulative upkeep, Body Snatcher's ETB, Gamble's forced discard), plus 2 cyclers in the sideboard swap pool. On the play, a hand with any Madness card and any outlet routinely turns a 6-mana Dark Withering into a 1-mana Terror-with-upside, or an Obsessive Search into a free cantrip regardless of which half of the trigger you take.

**"Any graveyard" claim, precisely stated.** Only Chainer, Dementia Master can reanimate from an opponent's graveyard (his activated ability says "a graveyard," no possessive restriction) — he can steal their best creature for {B}{B}{B} + 3 life, repeatably. Body Snatcher and Dread Return are both restricted to your own graveyard. This is a real distinction: Chainer is the only piece that turns the opponent's discard pile into your board. The other two need self-mill to have hit a creature first, which is why Body Snatcher's own ETB (discard a creature or be exiled) exists — it's simultaneously a discard outlet that stocks its own eventual reanimation target.

**This is a value/recursion shell wearing "Reanimator" branding, not a cheat-a-bomb deck.** The biggest reanimation target in the 40 is a 5-mana legendary (Chainer) — there's no marquee fatty being cheated in under cost. Worldgorger Dragon was the obvious "big reanimator payoff" candidate and was deliberately cut (see below); without it, the package's ceiling is "steal or rebuy a good creature," not "win the game off one reanimation." That's an honest tradeoff for staying within the 5-rare budget and avoiding cards with real downside.

**Body Snatcher whiff risk.** With only 8 creature cards in 40, there will be hands where Body Snatcher's ETB has no creature to discard and it simply exiles itself for a rare card and zero effect. This is a known, accepted risk — running more creatures to insure against it would dilute the spell density that makes the Madness half work.

**R-splash reliability nuance.** The audit shows 3/3 required sources for Gamble, but 2 of those 3 (Smoldering Crater x2) are cycling lands that compete to be discarded for card draw when flooded — real games exist where true live R sources drop to just the 1 Mountain. Gamble is a low-priority, non-essential piece (it's a tutor, not a combo requirement), so a dead splash card in a bad game is an acceptable failure mode rather than a structural flaw.

**Self-grill correction applied.** The independent Challenger agent flagged that Terror and Dark Withering — the deck's only two "hard" removal spells — both read "nonblack creature," leaving zero clean maindeck answers to a black threat. Street Wraith (a redundant free cycler, given Undead Gladiator already cycles and self-recurs) was cut from the main and replaced with Chainer's Edict, an unconditional edict effect, to patch that blind spot. Street Wraith moved to the sideboard as a matchup-dependent evasion/velocity card.

**Cards Considered but Excluded**

*Rares/mythics cut for the 5-card budget:*

| Card | Rarity | Why excluded |
|---|---|---|
| Worldgorger Dragon | Mythic | Reanimating it exiles all your other permanents (including lands) until it leaves the battlefield. Without Sneak Attack (or similar) to loop that trigger, it's a self-inflicted blowout, not a payoff — both Proposer and Challenger independently confirmed this exclusion was correct. |
| Sneak Attack | Mythic | Would enable Worldgorger Dragon as a real combo (haste in, sac at end step, reset), but adding both costs 2 more rare slots — 7 total, exceeding even the authorized 6-cap. Flagged as a future build direction, not this one. |
| Royal Assassin | Rare | Strong repeatable removal engine, but redundant with the existing removal suite and would push the rare count past budget for a non-essential upgrade. |
| Arcanis the Omnipotent | Rare | Excellent value engine, but redundant with Vexing Sphinx/Chainer as a late-game grind piece; not worth a 6th rare slot. |
| Entomb | Rare | Would make the reanimator half more consistent (tutor a target straight to the yard), but self-mill already does this reasonably well; not "necessary." |
| Grim Lavamancer | Rare | Turns graveyard bulk into repeatable reach, on-theme, but a second red card would deepen the splash beyond the intended 1-card commitment and costs another rare slot. |

*Uncommons a tier below the chosen includes:*
- Necrosavant — a fine reanimation target with built-in self-recursion, but the 6cmc {3}{B}{B} activation is clunky and it only recurs itself, not other creatures. Sideboard-only.
- Spite // Malice — flexible counter/removal split card, but its removal half shares the exact "nonblack creature" restriction Chainer's Edict was added to fix, so it doesn't solve the same problem.
- Nightscape Familiar — discounts both the U madness spells and the R splash, with regenerate; interesting but narrow, sideboard-tier at best.

*Sideboard-consideration cards not included:*
- Counterspell — strictly more reliable than Circular Logic, but Circular Logic's cost scales down with the deck's own graveyard, which is thematically and functionally tighter here.
- Crawlspace — solid anti-aggro rare, cut to avoid a 6th rare/mythic for a matchup-narrow effect.
- Spark Spray / Solar Blast — cheap red burn with cycling, but including either would deepen the red commitment past the intentional 1-spell (Gamble) splash.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  70.0%  prod  62.5%  gap  +7.5pp  [OK]
  U  demand  30.0%  prod  25.0%  gap  +5.0pp  [OK]

Splash Check: [PASS]
  R  3 card(s), max CMC 1  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each - verified, no violations
[PASS] Rares/mythics: max 1 copy each - verified, no violations
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5/5 used
       (Vexing Sphinx, Body Snatcher, Chainer Dementia Master,
        Mindslicer, Gamble). User-authorized 6-card exception was
        NOT invoked - the deck functions within the original cap.
[PASS] All cards verified present in cube working pool by exact name
[PASS] All color identities within UB core + R splash constraint
```
