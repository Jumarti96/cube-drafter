---
deck_name: "bgu-hermit-druid-combo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BGU"
format: "40-card"
built_at: "2026-07-09T02:18:18Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (28 spells + 12 lands = 40)

### LANDS (12)
```
 2x Haunted Mire
 2x Tangled Islet
 2x Contaminated Aquifer
 2x Evolving Wilds
 1x Deathcap Glade
 1x Shipwreck Marsh
 1x Dreamroot Cascade
 1x Westvale Abbey // Ormendahl, Profane Prince
```

### CREATURES (11)
```
CMC  Card                    Qty   Color  Role                    Rar
  1  Scorned Villager        x1    G      Mana dork               C
  2  Deranged Assistant      x2    U      Mill 1 + mana ramp      C
  2  Hermit Druid            x1    G      Mills until basic (0)   R
  2  Vilespawn Spider        x1    GU     Mills, makes tokens     U
  3  Laboratory Maniac       x1    U      Win condition           U
  3  Splinterfright          x1    G      Mills 2/turn, scales    U
  3  Eccentric Farmer        x2    G      Mill 3 + return land    C
  3  Reckless Scholar        x2    U      Loot each turn          C
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                    Qty   Color  Role                    Rar
  1  Tragic Slip             x2    B      Removal, morbid         C
  1  Crawl from the Cellar   x1    B      Return Lab Man          C
  1  Village Rites           x2    B      Sac, draw 2             C
  1  Syncopate               x1    U      Counterspell            C
  2  Grapple with the Past   x2    G      Mill 3 + recur          C
  2  Think Twice             x2    U      Draw 1, flashback       C
  2  Infernal Grasp          x1    B      Destroy creature        U
  2  Silent Departure        x1    U      Bounce, flashback       C
  3  Forbidden Alchemy       x2    BU     Dig 4, mill 3           C
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                    Rar
  1  Abundant Growth         x1    G      Mana fix, draw 1        C
  1  Spontaneous Mutation    x1    U      -X/-0, scales w/GY      C
  2  Soulcipher Board        x1    U      Look 2, mill 1          U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in     Rar
Killing Wave            x1    B      Board wipe vs go-wide        U
Eaten Alive             x1    B      Exile creature/planeswalker  C
Ambush Viper            x1    G      Flash deathtouch             C
Deadly Allure           x1    BG     Deathtouch lure, flashback   U
Imprisoned in the Moon  x1    U      Answers any permanent        C
Geistlight Snare        x1    U      Conditional counterspell     U
Compelling Deterrence   x1    U      Bounce nonland + discard     U
Moldgraf Millipede      x1    G      Mill 3, scales w/GY          C
Abundant Growth         x1    G      Mana fixing (2nd copy)       C
Crawl from the Cellar   x1    B      Recursion backup (2nd copy)  C
```

## ANALYSIS

Combo Line: The deck wins by assembling four pieces: Hermit Druid in play (unsummoning-sick for one turn), Crawl from the Cellar accessible (hand or graveyard), Laboratory Maniac anywhere in the 40, and a draw effect. Sequence:

  Turn 2-3: Cast Hermit Druid (2G, assisted by Scorned Villager or Deranged Assistant).
  Turn 3-4: Activate Druid for G. With zero basics, the entire library mills into the graveyard.
  Post-mill: Flashback Crawl from the Cellar for 3B, targeting Lab Man (now in graveyard). Cast Lab Man for 2U. Activate Think Twice or Village Rites, or use Reckless Scholar, or natural draw step to win on the spot.

Redundancy: The deck runs 4 different paths to draw after Lab Man resolves (Think Twice x2, Village Rites x2, Reckless Scholar activation, natural draw step). Crawl from the Cellar has flashback — it works from the graveyard, so milling it is fine. Grapple with the Past x2 provides backup recursion for any milled creature.

Finding the Combo: No dedicated tutor (Traverse the Ulvenwald cut to stay within the 5-rare cap and 12-land minimum). Instead, the deck uses volume card selection: Forbidden Alchemy digs 4, Think Twice and Reckless Scholar draw, Soulcipher Board filters, and the natural self-mill from Splinterfright, Vilespawn Spider, and Eccentric Farmer churns through the library.

Mana Constraints: The 12-land count (30% of deck) is below the conventional 14-land recommendation for 40-card. This is a hard constraint of the Hermit Druid requirement — only 12 BGU non-basic lands exist in the cube pool. Compensation: average CMC of 1.96, Scorned Villager as a dork, Abundant Growth as fixing, and Eccentric Farmer to recur milled lands. Evolving Wilds x2 are necessary placeholder lands — they cannot fetch (no basics in deck) but still count as non-basic land drops that Hermit Druid mills past without stopping.

Backup Plans: If Lab Man is exiled or countered:
  - Splinterfright becomes an X/X trampler where X = creature cards in graveyard. After 10+ mills, it attacks as a large trampling threat.
  - Vilespawn Spider sacrifices itself post-combo-mill to create 1/1 Insect tokens equal to creature count (often 15+), which can also fuel Westvale Abbey's transformation into Ormendahl (9/7 flying lifelink indestructible haste).
  - Reckless Scholar and Soulcipher Board provide ongoing card advantage in grindy post-board games.

Deck Weaknesses:
  - Graveyard hate (Rest in Peace, Leyline of the Void) shuts down the entire strategy. Sideboard Imprisoned in the Moon answers these permanent-based hate pieces.
  - Aggro pressure punishes the 8 tapped duals. Ambush Viper, Killing Wave, and Eaten Alive come in from the board.
  - The deck is soft to instant-speed removal on Hermit Druid before activation. Syncopate is the only mainboard protection; Geistlight Snare joins from the board.

### Cards Considered but Excluded — Rares/Mythics

The Gitrog Monster (mythic): Excels in self-mill/lands shells but costs 5 CMC and a mythic slot. The 5-rare cap forced choosing between consistent mana (rare duals) and expensive payoffs. If mana constraints loosen, this is the number-1 upgrade — it draws cards whenever a land hits the graveyard, which self-mill enables naturally.

Traverse the Ulvenwald (rare): The single best tutor for the deck — finds Hermit Druid or Lab Man with delirium active. Cut due to the 12-land minimum; swapping any rare land drops the land count to 11 (audit FAIL). If an additional non-basic land enters the pool, Traverse slots in immediately over Westvale Abbey.

Wrenn and Seven (mythic): Reaches 5 loyalty, mills 4, returns all lands from graveyard to hand. High synergy but mythic slot plus 5 CMC equals excluded.

Garruk Relentless (mythic): Makes wolves, tutors creatures, removes threats. Overlapping function with existing pieces at mythic cost. Strong in a midrange transformation but competes with the pure combo plan.

### Cards Considered but Excluded — Uncommons/Commons

Grizzled Angler: Mill 2 per tap on a 3-drop but transform condition (colorless creature in graveyard) cannot trigger in this build. Reckless Scholar does the same job with card selection added.

Noose Constrictor: Discard outlet with only one discard-synergy card in the pool (Murderous Compulsion, also cut). Reckless Scholar loots while drawing, which is strictly better for advancing the combo.

Haunted Dead: 4 CMC recursive threat that makes tokens. Solid in graveyard shells but too slow at 4 CMC with activated mana costs in a 12-land deck.

Spider Spawning: Creates tokens equal to creature count in graveyard. Overlaps with Vilespawn Spider's activated ability; the Spider is more mana-efficient and also mills on upkeep.

Murderous Compulsion: Only destroys tapped creatures at sorcery speed. Tragic Slip and Infernal Grasp cover removal more reliably.

Groundskeeper: Returns basic lands from graveyard to hand. Useless with zero basics in the deck.

## MANA AUDIT: WARN
```
Land Count: 12 / 14 recommended  [WARN]
  Note: 12 is the maximum non-basic lands in the BGU pool.
  Hermit Druid requires 0 basics; lower land count is a
  deliberate deckbuilding constraint compensated by avg CMC
  1.96, 4 ramp/fixing pieces, and Eccentric Farmer recursion.
Avg CMC:     1.96   Ramp cards: 4

Color Balance (core):  [PASS]
B  demand  46.2%  prod  50.0%  gap -3.8pp  [OK]
  G  demand  53.8%  prod  50.0%  gap +3.8pp  [OK]

U Splash: 11 cards, max CMC 3, 6 sources / 2 needed  [PASS]
```

## RESTRICTIONS COMPLIANCE
```
  [PASS] Commons/uncommons <= 2 copies each
  [PASS] Rares/mythics <= 1 copy each
  [PASS] Max 5 rares/mythics total (5 used: Hermit Druid + 4 rare lands)
  [PASS] No basic lands (required for Hermit Druid combo)
  [PASS] All cards verified in cube pool
  [PASS] No Scryfall links per user request
```
