---
deck_name: "br-goblin-sacrifice-aggro"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-09T21:30:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
7x Mountain
5x Swamp
2x Geothermal Bog        BR dual, enters tapped — tempo cost buys color fixing
1x Mishra's Factory      Colorless manland, dodges sorcery-speed removal as a late threat
```

### CREATURES (20)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Festering Goblin        x2    B      Fodder - dies for -1/-1 on a blocker   C
  1  Skirk Prospector        x2    R      Sac outlet - Goblin into R (no fixing) C
  2  Mogg War Marshal        x2    R      Token generator - ETB + dies triggers  C
  3  Gempalm Incinerator     x2    R      Flex threat / cycling reach            U
  3  Goblin Matron           x2    R      Consistency - tutors any Goblin        C
  3  Pashalik Mons           x1    R      Payoff - Goblin-death ping + tokens    R
  3  Phyrexian Ghoul         x2    B      Sac outlet - combat pump               C
  3  Urborg Syphon-Mage      x1    B      Discard-drain engine (not a sac outlet) C
  3  Goblin Medics           x1    R      Repeatable reach - pings on tap        C
  4  Flametongue Kavu        x2    R      ETB removal + later sac fodder         U
  4  Mindslicer              x1    B      Death trigger - symmetric discard      R
  5  Siege-Gang Commander    x1    R      Payoff - tokens + built-in sac outlet  R
  5  Street Wraith           x1    B      Consistency - free cycling cantrip     C
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Chain Lightning         x2    R      Burn/removal/reach                     C
  2  Terror                  x2    B      Removal (can't hit artifact/black)     C
  6  Fireblast                x1    R      Alt-cost finisher (sac 2 Mountains)    U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                  Rar
Sulfuric Vortex         x1    R      Anti-lifegain reach vs. lifegain decks     R
Royal Assassin          x1    B      Kills tapped attackers vs. big creatures  R
Faceless Butcher        x1    B      Flexible exile removal (don't sac it!)    U
Tormod's Crypt          x1    C      GY hate vs. reanimator/flashback/madness  U
Duress                  x1    B      Proactive disruption vs. control/combo   C
Solar Blast             x1    R      Extra reach, cycles when dead            C
Dark Withering          x1    B      Removal, Madness-cheap off discard       U
Chainer's Edict         x1    B      Edict vs. hexproof/shroud threats        U
Pain // Suffering       x1    BR     Discard or land destruction, flexible    U
Zombie Infestation      x1    B      Grindy card-to-token engine vs. attrition U
```

## ANALYSIS

**Macro-Archetype: Aggro. Projected Avg MV: 2.76.**

**Slot allocation.** Lands: 15 (37.5% of N=40) — slightly above the 30–35% Aggro guidance, justified by real double-black/red costs late (Mindslicer {2}{B}{B}, Street Wraith {3}{B}{B}, Siege-Gang Commander {3}{R}{R}, Fireblast {4}{R}{R}) and a curve reaching to 5–6 CMC; the mana_audit tool's own generic recommendation was 16, so 15 is still lean relative to that baseline. Modifiers: cantrips −0 (no true one-mana Opt/Preordain-style filtering exists in this pool), mana dorks/rocks −0 (none available on-color), MDFCs −0 (not present in this cube). Final: 15.

Of the 25 non-land slots: **Threats/Payoffs 15 (60%)** — above the 45–55% guidance because in this token-swarm shell, the "engine" pieces (Mogg War Marshal, Skirk Prospector, Goblin Matron) are themselves board presence, not pure value engines. **Interaction 8 (32%)** — well above the 10–15% guidance; this is intentional, not a miss: Chain Lightning and Fireblast double as both removal and reach/win-condition, the standard pattern for a red burn-aggro shell (removal density substitutes for raw stats when your threats are disposable 1/1 tokens). **Engine/Infrastructure 2 (8%)** — within guidance (Urborg Syphon-Mage, Street Wraith).

**Mana source allocation.** 18 R pips vs. 11 B pips across the 25 non-land cards (62.1% / 37.9%). Targeting sources proportionally: 9 R-producing lands (7 Mountain + 2 Geothermal Bog) and 7 B-producing lands (5 Swamp + 2 Geothermal Bog) out of 15 total, with Geothermal Bog double-counted since it makes both. Audit confirms both colors land in the OK band (B gap −8.8pp, R gap +2.1pp).

**Token math.** Mogg War Marshal nets 3 total bodies for {1}{R} across its lifetime (itself + ETB token + a second token whenever it later dies, whether to echo, combat, or a sac outlet) — an extremely efficient fodder source for Skirk Prospector/Phyrexian Ghoul/Pashalik Mons as early as turn 3.

**Pashalik Mons converts the whole sac engine into reach.** Its passive — "Whenever Pashalik Mons or another Goblin you control dies, Pashalik Mons deals 1 damage to any target" — fires on every single Goblin token you sacrifice. Feeding 3 tokens into Skirk Prospector for mana, for example, also deals 3 incidental damage completely for free once Mons is on board.

**Mindslicer sequencing.** Because this deck curves out fast and burns/discards its hand quickly, Mindslicer's "each player discards their hand" trigger is usually one-sided in your favor by the time you're ready to sacrifice it into Phyrexian Ghoul or Pashalik Mons's outlet.

**Corrected role labels (found during self-grill).** Urborg Syphon-Mage has no sacrifice cost in its oracle text ("{2}{B}, {T}, Discard a card: Each other player loses 2 life...") — it is a discard-cost drain engine, not a sacrifice outlet, despite superficially reading as one. Terror is restricted removal (can't hit artifact or black creatures), not unconditional. Geothermal Bog enters tapped — a real tempo cost, not "no drawback." Skirk Prospector only ever produces red mana; it accelerates, it doesn't fix the black side of the manabase.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget:**
- Grim Lavamancer (R) — extremely efficient repeatable reach, but off-tribe (not a Goblin, no sac synergy); cut in favor of on-theme rares.
- Yawgmoth, Thran Physician (M) — the centerpiece of the *other* shortlisted sub-archetype (Yawgmoth Value-Sacrifice), not this more aggressive Goblin-token path.
- Pyre Zombie (R, BR) — solid secondary sac-outlet/finisher, would have been a 6th rare.
- Shivan Dragon (R) — strong top-end flier, cut for curve and rare-budget reasons.
- Chainer, Dementia Master / Body Snatcher / Sneak Attack / Worldgorger Dragon — all belong to the Reanimator sub-archetype path, off-plan here.
- Vampiric Tutor (M) — powerful, but doesn't fit a low-curve aggro plan and would cost a rare slot.

**Uncommons/commons a tier below the chosen includes:**
- Deadapult (U) — sac outlet, but its cost specifically requires sacrificing a *Zombie*; our token generators make Goblins, not Zombies, so it's a poor engine fit here.
- Dread Return (U) — could rebuy a sacrificed payoff via its flashback (sac 3 creatures), genuinely on-theme, but adds graveyard dependency the low-curve plan doesn't need.
- Necrosavant (U) — named in the original archetype brief, but its 6-mana reanimation ability is slower and more suited to the Yawgmoth-value path than this aggressive one.
- Goblin Turncoat / Subterranean Scout (C) — additional Goblin curve-fillers considered, cut for lower impact than the chosen includes.
- Wretched Anurid (C) — a strong stand-alone 3/3 for 2, but its "whenever another creature enters, you lose 1 life" trigger actively punishes this deck's own token generation; excluded for anti-synergy.

**Sideboard-consideration cards not used:**
- Icy Manipulator (U) — generically strong tempo tool, no sac synergy.
- Slice and Dice (U) — a board sweeper that would also blow up our own token board; only relevant vs. mirror/other wide-token strategies.
- Jester's Cap (R) — proactive hate piece, would have cost a 6th rare slot.
- Damping Sphere (U) — anti-fast-mana/storm tech for the mirror against Storm decks in this cube.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.76   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  37.9%  prod  46.7%  gap  -8.8pp  [OK]
  R  demand  62.1%  prod  60.0%  gap  +2.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
- Commons/uncommons <= 2 copies each (main+SB combined): PASS - none exceed 2
- Rares/mythics <= 1 copy each: PASS - Pashalik Mons, Mindslicer, Siege-Gang Commander,
  Sulfuric Vortex, Royal Assassin all at 1
- Max 5 rares/mythics total across mainboard + sideboard: PASS - exactly 5/5 used
- All cards within B/R color identity (no splash): PASS
```
