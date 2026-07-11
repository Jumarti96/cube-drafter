---
deck_name: "gw-humans-go-wide"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-07-08T18:40:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
7x Plains
2x Forest
2x Radiant Grove          GW dual, enters tapped
2x Sacred Peaks           RW dual, enters tapped - splash fixing
1x Mountain               dedicated R source for Hanweir Garrison
1x Evolving Wilds         fetches any basic, flex fixing
```

### CREATURES (19)
```
CMC  Card                          Qty   Color  Role                                Rar
  1  Thraben Inspector             x2    W      Clue card advantage, cheap body     C
  2  Dawnhart Disciple             x2    G      Pumps on Human ETB                  C
  2  Hamlet Captain                x2    G      Pumps team on attack/block          U
  2  Avacynian Priest              x2    W      Taps down non-Human blockers        C
  2  Cathar Commando               x1    W      Flash body, artifact/ench answer    C
  3  Crusader of Odric             x2    W      P/T = creature count                C
  3  Mentor of the Meek            x2    W      Card draw off small creatures       U
  3  Fiend Hunter                  x1    W      ETB exile removal                   U
  3  Thalia, Heretic Cathar        x1    W      Taxes blockers/lands, first strike  R
  3  Torens, Fist of the Angels    x1    GW     Token engine off creature casts     R
  3  Hanweir Garrison              x1    R      2 tokens per attack (splash)        R
  4  Slayer of the Wicked          x1    W      Conditional ETB removal             U
  4  Odric, Lunarch Marshal        x1    W      Shares keywords each combat         R
```

### INSTANTS & SORCERIES (3)
```
CMC  Card                          Qty   Color  Role                                Rar
  2  Gather the Townsfolk          x2    W      Core token generator                C
  2  Join the Dance                x1    GW     Tokens now + flashback later        U
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty   Color  Role                                Rar
  2  Intangible Virtue             x1    W      Anthem for the token army           U
  3  Wedding Announcement // Wedding Festivity  x1  W  Token engine to team anthem  R
  3  Butcher's Cleaver             x1    C      Lifelink equipment for Humans       U
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in                Rar
Soul-Guide Gryff              x1    W      Graveyard hate vs reanimator/flashback  C
Angelic Purge                 x2    W      Exile removal vs problem permanents     C
Duel for Dominance            x1    G      Fight removal vs big/aggro creatures    C
Clear Shot                    x1    G      Fight removal, scales w/ pumped threats U
Bound by Moonsilver            x1    W      Lockdown vs evasive/big threats         C
Ambush Viper                  x1    G      Flash deathtouch blocker vs aggro       C
Faith Unbroken                x1    W      Exile removal vs a must-answer threat   U
Cathar's Call                 x1    W      2nd token engine vs grindy control      U
Boarded Window                x1    C      Damage reduction vs faster aggro        U
```

## ANALYSIS

**The go-wide -> payoff loop.** Five independent token sources (Gather the Townsfolk x2,
Wedding Announcement, Join the Dance, Torens' cast trigger, Hanweir Garrison's attack
trigger) feed three payoffs that don't compete for the same resource: Crusader of Odric
scales off raw creature count, Mentor of the Meek converts small bodies into cards, and
Odric turns any single keyword on the board (first strike from Thalia, lifelink from an
equipped Cleaver) into a team-wide keyword each combat. The deck doesn't need to draw its
payoffs in any particular order - any token generator plus any payoff already does
something.

**Rare budget allocation.** All 5 rares are spent on named keystones (Thalia, Odric,
Torens, Wedding Announcement, Hanweir Garrison) - none were spent on mana fixing, since
both the GW and RW duals used are common rarity. That's why the manabase is entirely
commons even with a splash color active.

**Sideboard vs. maindeck removal-shape overlap.** The 40 deliberately runs light on hard
removal (Fiend Hunter, Slayer of the Wicked, Cathar Commando) because Avacynian Priest's
repeatable tap-down already answers blockers for an aggressive plan. The sideboard adds
three distinct removal shapes (fight: Duel for Dominance / Clear Shot; exile: Angelic
Purge / Faith Unbroken; lockdown: Bound by Moonsilver) so game 2/3 adjustments target the
actual problem rather than stacking redundant answers.

**Self-grill correction.** The original build included Fiery Temper in the sideboard, but
the Challenger agent caught that its hardcast cost is {1}{R}{R} - double red - against
only 3 R sources built solely to support Hanweir Garrison's single R pip, with no discard
outlet anywhere in the deck to enable Madness. It was cut in favor of Faith Unbroken
(exile removal, no color strain) and a 2nd Angelic Purge, and Valorous Stance was swapped
for Intangible Virtue in the mainboard - same mana cost, but a direct anthem for the
deck's five token sources instead of generic protection.

### Cards Considered but Excluded

**Rares/mythics cut solely due to the 5-card cap** (all confirmed strong fits, displaced
only by budget): Hopeful Initiate (1cmc Human, counters payoff), Mayor of Avabruck //
Howlpack Alpha (Human token lord, but flips away from Human), Tireless Tracker (strong
value engine, more generic-counters than Humans-specific), Hermit Druid (off-strategy,
self-mill/ramp), Metallic Mimic (colorless Human lord/counters-doubler - arguably the
hardest cut, would have been the 6th rare), Restoration Angel (excellent blink, but not
Human-typed), Zealous Conscripts and Kruin Outlaw // Terror of Kruin Pass (both R, both
flip away from the Human-tribal payoffs on their back face).

**Uncommons a tier below the chosen includes**: Duskwatch Recruiter // Krallenhorde
Howler (on-tribe dig engine, flagged by the Challenger agent as a real alternative to
Fiend Hunter/Slayer of the Wicked if more consistency over removal is wanted), Ambitious
Farmhand // Seasoned Cathar (solid 2-drop, lost the slot to Avacynian Priest's proactive
tapping), Mausoleum Guard (token generator, redundant with the 5 already included),
Ulvenwald Mysteries (Clue-based token engine, more convoluted than the direct generators
chosen).

**Sideboard-consideration cards not included**: Moonlight Hunt (dead card - deck runs
zero Wolves/Werewolves), a 2nd Duel for Dominance (cut for removal-shape diversity per
the self-grill), Ulrich's Kindred (protection, narrow), Neonate's Rush (marginal
burn/draw, weaker than Faith Unbroken's hard answer).

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  23.1%  prod  26.7%  gap  -3.6pp  [OK]
  W  demand  76.9%  prod  73.3%  gap  +3.6pp  [OK]

Splash Check: [PASS]
  R  1 card(s), max CMC 3  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <= 2 copies each:        PASS
Rares/mythics <= 1 copy each:               PASS
Max 5 rares/mythics (main+SB combined):    PASS - exactly 5/5 used
  (Hanweir Garrison, Odric Lunarch Marshal, Thalia Heretic Cathar,
   Torens Fist of the Angels, Wedding Announcement)
All cards verified present in cube pool:   PASS (Challenger-verified)
```
