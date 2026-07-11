---
deck_name: "gw-aggro-threshold"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-09T22:24:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
2x Radiant Grove       GW dual, enters tapped
1x Nantuko Monastery   Colorless; becomes a 4/4 first strike manland at Threshold
1x Drifting Meadow      W, enters tapped, Cycling {2} — GY fuel
1x Slippery Karst       G, enters tapped, Cycling {2} — GY fuel
8x Plains
3x Forest
```

### CREATURES (17)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Savannah Lions           x2    W      Curve-out 1-drop beater             C
  1  Icatian Javelineers      x1    W      1-drop + reach/removal (javelin)    C
  1  Birds of Paradise        x1    G      Mana fixing/accel into 4-drops      R
  2  Werebear                 x2    G      Mana dork + Threshold payoff        C
  2  Fa'adiyah Seer           x1    G      Graveyard enabler (looter)          C
  2  Jolrael, Mwonvuli Recluse x1   G      2/2 Cat off 2nd draw (cycling synergy) R
  3  Vigilant Sentry          x1    W      Threshold payoff (pump + trick)     C
  3  Nomad Decoy              x1    W      Threshold payoff (tapper)           C
  4  Mystic Zealot            x2    W      Threshold payoff (pump + flying)    C
  4  Mystic Enforcer          x1    GW     Threshold payoff (best in deck)     U
  4  Voice of All             x1    W      Evasive protection beater           U
  4  Windborn Muse            x1    W      Evasive beater + attack tax         R
  5  Battlefield Scrounger    x1    G      Threshold payoff (repeatable pump)  C
  5  Glory                    x1    W      Evasive threat + GY-based protection R
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Swords to Plowshares     x2    W      Premium removal                     U
  3  Radiant's Judgment       x1    W      Removal / cycling fuel              C
  2  Wax // Wane              x1    GW     Combat trick / enchant. removal     U
  3  Call of the Herd         x1    G      3/3 token + flashback recursion     U
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                                Rar
  3  Divine Sacrament         x1    W      Anthem (core payoff)                R
  2  Pacifism                 x1    W      Soft removal                        C
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Tormod's Crypt           x1    C      Vs. graveyard/recursion decks         U
Sun Clasp                x1    W      Flex buff/bounce vs. problem blockers C
Griffin Guide            x1    W      Evasion package vs. stalls/control    U
Congregate               x1    W      Vs. aggro/burn races                  U
Emerald Charm            x1    G      Modal enchantment answer/trick        C
Sandstorm                x1    G      Vs. go-wide token swarms              C
Squirrel Nest            x1    G      Grind engine vs. control              U
Primal Boost             x1    G      Combat-trick finisher + GY fuel       C
Wax // Wane              x1    GW     2nd copy: more enchant. removal       U
Radiant's Judgment       x1    W      2nd copy: vs. bigger creature decks   C
```

## ANALYSIS

A low-curve GW beatdown deck that races opponents while its native cycling package (Drifting Meadow, Slippery Karst, Fa'adiyah Seer, Radiant's Judgment) fills the graveyard toward the Threshold line of 7+ cards. Once online, a cluster of cheap Threshold creatures (Werebear, Mystic Zealot, Mystic Enforcer, Vigilant Sentry, Nomad Decoy, Battlefield Scrounger, Nantuko Monastery) all upgrade simultaneously, turning an already-aggressive board into a lethal one, backed by Divine Sacrament's white anthem.

**Threshold math.** 8 unique Threshold-keyworded cards (10 copies counting duplicates: Werebear x2, Vigilant Sentry, Nomad Decoy, Mystic Zealot x2, Mystic Enforcer, Battlefield Scrounger, Nantuko Monastery, plus Divine Sacrament's own Threshold clause) all key off the same 7-card graveyard line — hitting it once turns on the whole board at once rather than one card at a time.

**Divine Sacrament coverage.** 11 of the deck's 17 creatures are white (Mystic Enforcer counts via its GW cost) and get the anthem; the 6 green-only creatures (Birds of Paradise, Werebear, Fa'adiyah Seer, Jolrael, Battlefield Scrounger) don't. Sequencing white creatures into combat is measurably better once Divine Sacrament resolves.

**Jolrael + cycling interaction.** Cycling a card counts as a draw. If you draw for turn (1st draw) and then cycle a card (2nd draw that turn), Jolrael's trigger fires for a free 2/2 Cat — with Drifting Meadow, Slippery Karst, and Radiant's Judgment as the deck's cycling outlets, this is a realistic mid-game bonus, not a corner case.

**Self-grill revisions.** An independent Proposer/Challenger review caught three real issues in the first draft and all three are fixed in this list: (1) land count sat one below the audit tool's own recommendation — bumped 15 to 16, now an exact match; (2) Wild Dogs' clause ("the player with the most life gains control of this creature") is a genuine anti-synergy for a deck whose plan is racing ahead on life — swapped for Icatian Javelineers; (3) Terravore is powered by both players' graveyard land counts, an uncontrollable variable this deck can't reliably feed on its own side — swapped for Call of the Herd, a guaranteed 3/3 body with its own graveyard recursion (flashback) that fits the theme without the risk. A weak rare-slot tutor (Enlightened Tutor) was also cut in favor of Birds of Paradise, which directly smooths the curve's 4-drop cluster instead.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap or replaced post-grill:**
- Sylvan Library (mythic, G) — best-in-format card advantage, but the life-payment tax and lack of board impact fit a grindier control shell better than this low-curve plan.
- Lyra Dawnbringer (mythic, W) — huge flying lifelink bomb, but 5cmc and doesn't need Threshold to be good, which makes it a worse fit than cards that reward the exact gameplan.
- Serra Avatar / Kamahl, Fist of Krosa (mythic) — both are 6-7cmc payoffs that don't match a deck trying to win by turn 5-6.
- Wrath of God (rare, W) — a symmetrical board wipe is actively bad in a deck that wants to keep its own board.
- Worldly Tutor / Sevinne's Reclamation (rare) — toolbox/recursion pieces, too passive for the aggro plan.
- Enlightened Tutor (rare, W) — was in the original build, cut during the self-grill for being card-neutral in a deck that wants to be proactive; replaced by Birds of Paradise.
- Terravore (uncommon, G) — was in the original build, cut during the self-grill for depending on the opponent's graveyard; replaced by Call of the Herd.

**Uncommons/commons a tier below the chosen includes:**
- Mesa Enchantress (U) — enchantment card draw, but the deck doesn't run enough enchantments to consistently trigger it.
- Auramancer / Krosan Restorer (C) — solid utility bodies, but too passive for a low-curve beatdown shell.
- Kavu Primarch / Juggernaut (C) — fine generic beaters, cut for curve-crowding at 4cmc and lack of synergy.
- Millikin / Jalum Tome (C/U) — colorless self-mill/loot, considered as extra graveyard enablers but their 0-power bodies don't advance the clock; the deck already clears the viability threshold without them.
- Improvised Armor / Lull / Break Asunder (C, cycling) — additional GW cycling cards, left out because 4 dedicated cycling/loot sources (2 lands + Fa'adiyah Seer + Radiant's Judgment) plus incidental graveyard fill already support Threshold without diluting the curve further.

**Sideboard-consideration cards not included:**
- Renewed Faith (C) — cut during the self-grill for redundancy with Congregate (both are lifegain-vs-aggro answers); Primal Boost took the slot instead for a proactive racing tool.
- Whitemane Lion, Dodecapod, Improvised Armor — flex utility/discard-matters cards that didn't clear the bar against the current 10 sideboard slots.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.62   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  32.3%  prod  37.5%  gap  -5.2pp  [OK]
  W  demand  67.7%  prod  68.8%  gap  -1.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons <= 2 copies each ............ PASS (verified programmatically)
Rares/mythics <= 1 copy each ................... PASS (verified programmatically)
Max 5 rares/mythics total (main+SB) ........... PASS (exactly 5: Birds of Paradise,
                                                  Jolrael, Windborn Muse, Glory,
                                                  Divine Sacrament -- all mainboard,
                                                  0 in sideboard)
All cards exist in cube pool by exact name .... PASS (Challenger-verified)
Color identity within GW (no splash) .......... PASS (Challenger-verified)
```
