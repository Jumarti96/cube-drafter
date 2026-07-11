---
deck_name: "gw-humans-anthem-aggro"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-07-08T13:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
10x Plains
3x Forest
2x Radiant Grove          GW dual, enters tapped
1x Evolving Wilds         Fetches any basic, feeds Tireless Tracker landfall
```

### CREATURES (16)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Thraben Inspector       x2    W      Curve-filler / card draw      C
  2  Mayor of Avabruck       x1    G      Human anthem (team +1/+1)     R
  2  Hamlet Captain          x2    G      Human anthem (combat)         U
  3  Crusader of Odric       x2    W      Finisher (scales w/ board)    C
  3  Torens, Fist of Angels  x1    GW     Human token engine (Training) R
  3  Fiend Hunter            x2    W      Removal-on-a-body             U
  3  Tireless Tracker        x1    G      Value engine / threat         R
  3  Thalia, Heretic Cathar  x1    W      Tempo disruption               R
  3  Mentor of the Meek      x2    W      Card advantage engine          U
  4  Odric, Lunarch Marshal  x1    W      Finisher (keyword soup)        R
  4  Inspiring Captain       x1    W      Anthem-burst finisher          C
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                    Qty   Color  Role                          Rar
  2  Gather the Townsfolk    x2    W      Token generator                C
  2  Join the Dance          x2    GW     Token generator (flashback)    U
  2  Valorous Stance         x2    W      Flexible removal/protection    U
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                          Rar
  3  Butcher's Cleaver       x2    C      Equipment finisher (Human lifelink) U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Slayer of the Wicked    x2    W      vs. Vampires/Werewolves/Zombies       U
Cathar Commando         x2    W      vs. Equipment/Auras/Artifacts         C
Angelic Purge           x2    W      vs. hexproof/indestructible threats   C
Faith Unbroken          x1    W      vs. a single must-answer bomb         U
Clear Shot              x1    G      vs. mid-sized blockers/attackers      U
Duel for Dominance      x1    G      vs. mid-sized blockers/attackers      C
Boarded Window          x1    C      vs. aggro mirrors/small-creature swarms U
```

## ANALYSIS

**Why GW over the alternatives.** Pipeline discovery found that "Humans matter" cards in this cube are mostly just Human-typed bodies with generic go-wide payoffs -- the only cards that say "Human" in a team-wide pump effect are Mayor of Avabruck and Hamlet Captain, both Green. That is the actual reason GW beats Mono-White (no true lord) and RW (better removal, but zero lord effects) for this specific archetype.

**Correcting the archetype brief.** The original archetype suggestion listed Dawnhart Disciple as a second Human lord alongside Hamlet Captain. Its oracle text is "Whenever another Human you control enters, this creature gets +1/+1 until end of turn" -- a self-buff only, not a team anthem. Both self-grill agents (Proposer and Challenger) caught this independently. Rather than keep a mislabeled filler card, it was swapped for Mentor of the Meek, which turns the token plan (Gather the Townsfolk, Join the Dance, Torens's 1/1s -- all power 2 or less) into a card-advantage engine, patching a genuinely thin spot (previously only 2 card-advantage cards in the deck).

**Torens is an engine, not a lord.** Its Training ability and per-creature-spell token generation feed Crusader of Odric's creature count, but it has no static team pump -- labeled "token engine," not "lord."

**Odric's actual synergy count is narrow.** Only first strike (Thalia) and conditional lifelink (Butcher's Cleaver on a Human) are shared keywords in this specific 40 -- it is a real finisher but leans on the board being wide more than on deep keyword overlap.

**Removal is intentionally thin (5 cards) for a competitive claim.** Fiend Hunter is a 2-for-1 risk if it dies, and Valorous Stance's kill mode only hits toughness 4+ (whiffs vs. small creatures, including mirror matches and other token strategies in this cube). This is a known trade-off for raw aggression; Angelic Purge and Faith Unbroken sit in the sideboard specifically to bring in unconditional answers against grindier or bomb-heavy opponents.

**Sideboard synergy note:** Duel for Dominance's upside mode (3+ creatures with different powers) is easy to enable here since the deck runs 1/1 tokens alongside 2-4 power threats.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card limit:**
- Wedding Announcement // Wedding Festivity (R) -- genuinely close call; transforms into an unconditional "Creatures you control get +1/+1" team anthem, arguably stronger than Odric's narrow keyword-sharing in this build. Best swap-in if you want to trade Odric for a more universal payoff.
- Cathars' Crusade (R) -- huge go-wide payoff (+1/+1 counter on every creature per ETB) but 5cmc and needs board presence first; more of a late-game bomb than a "lean aggro" piece.
- Restoration Angel (R) -- excellent flash/blink value, but not Human-typed and less on-theme than the chosen five.
- Hopeful Initiate (R) -- solid aggressive 1-drop with Training, weaker overall than the five rares selected.
- Sigarda, Host of Herons (M) / Gisela, the Broken Blade (M) -- strong bodies but non-Human, 4-5cmc, off-plan for a low-curve go-wide deck.
- Vanquish the Horde (R) -- board wipe, anti-synergistic with our own wide board.
- Second Harvest (R) / Metallic Mimic (R) / Voice of the Blessed (R) -- situational, slow, or redundant with chosen payoffs.

**Uncommons a tier below the chosen includes:**
- Ambitious Farmhand // Seasoned Cathar -- solid 2-drop that flips into a 4/4 lifelinker, close cut vs. the curve slots taken by Hamlet Captain/Mentor of the Meek.
- Duskwatch Recruiter -- card selection engine, close cut; leans more midrange-grindy than this list wants.
- Mausoleum Guard -- death-trigger token value, close cut.
- Travel Preparations -- +1/+1 counter trick with flashback, lost the slot to Valorous Stance's higher floor (hard removal mode).
- Somberwald Sage -- ritual mana for creatures, cut as too slow for a low curve.
- Intangible Virtue -- token anthem, largely redundant with Mayor/Hamlet Captain/Odric already in the list.
- Cathar's Call -- recurring Human-token-per-turn enchantment; a reasonable alternate include if more grind is wanted over the current burst-anthem package.

**Sideboard-consideration cards not selected:**
- Bound by Moonsilver (C) -- soft-lock removal aura, weaker than Angelic Purge (does not destroy), kept as a swap-in option.
- Aim High (C) -- combat trick / reach granter, marginal flex vs. flyers.
- Blazing Torch (C) -- minor damage-source equipment, marginal.
- Moonlight Hunt (U) -- excluded outright: requires a Wolf/Werewolf you control to function, and this deck runs zero -- would be a dead card.

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.54   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  25.9%  prod  31.2%  gap  -5.3pp  [OK]
  W  demand  74.1%  prod  75.0%  gap  -0.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each - verified across all 50 cards (main + side)
[PASS] Rares/mythics <= 1 copy each - Mayor of Avabruck, Odric, Torens, Tireless Tracker, Thalia all at 1 copy
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5, all in mainboard, 0 in sideboard
```
