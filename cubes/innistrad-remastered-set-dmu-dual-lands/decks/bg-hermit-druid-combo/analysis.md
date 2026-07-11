---
deck_name: "bg-hermit-druid-combo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-08T00:00:00Z"
mana_audit_status: "FAIL"
restrictions_status: "PASS"
---

## MAINBOARD (32 spells + 8 lands = 40)

### LANDS (8)
```
2x Haunted Mire            BG dual, always enters tapped
1x Deathcap Glade          BG dual, untapped with 2+ other lands
2x Contaminated Aquifer    BU dual (U splash), always enters tapped
2x Tangled Islet           GU dual (U splash), always enters tapped
1x Dreamroot Cascade       GU dual (U splash), untapped with 2+ other lands
```

### CREATURES (13)
```
CMC  Card                              Qty   Color  Role                                Rar
  1  Young Wolf                        x2    G      Undying sac fodder for Eldritch      C
                                                     Evolution / Village Rites
  2  Duskwatch Recruiter //            x2    G      Repeatable creature tutor (finds     U
     Krallenhorde Howler                            Hermit Druid or Lab Maniac)
  2  Hermit Druid                      x1    G      Combo enabler - mills the whole      R
                                                     deck once no basics remain
  2  Scorned Villager //               x2    G      Mana dork                            C
     Moonscarred Werewolf
  3  Eccentric Farmer                  x2    G      ETB mill 3, return a land from       C
                                                     GY (insurance for milled duals)
  3  Laboratory Maniac                 x2    U      Combo payoff - win on an empty-       U
                                                     library draw
  3  Somberwald Sage                   x2    G      Ramp (creature spells only)           U
```

### INSTANTS & SORCERIES (16)
```
CMC  Card                    Qty   Color  Role                                          Rar
  1  Crawl from the Cellar   x2    B      Flashback recursion - returns Lab Maniac        C
                                           from GY to hand
  1  Traverse the Ulvenwald  x1    G      Delirium tutor for Hermit Druid or a land       R
  1  Village Rites           x2    B      Sac a creature, draw 2 - alt win trigger        C
  1  Tragic Slip             x2    B      Cheap removal to survive to the combo turn      C
  2  Think Twice             x2    U      Draw a card, flashback - the cleanest win       C
                                           trigger
  2  Grapple with the Past   x2    G      Mill 3, return creature/land - insurance        C
  2  Infernal Grasp          x2    B      Unconditional removal                           U
  3  Forbidden Alchemy       x2    U      Look 4, 1 to hand / 3 to GY - selection +       C
                                           Delirium fuel
  3  Eldritch Evolution      x1    G      Sac a 1-drop, tutor Hermit Druid or Lab          R
                                           Maniac onto the battlefield
```

### OTHER SPELLS (3)
```
CMC  Card                                    Qty   Color  Role                          Rar
  1  Abundant Growth                         x2    G      Fixes any land to any color,   C
                                                           draws a card
  3  Cryptolith Fragment // Aurora of        x1    C      Any-color mana rock            U
     Emrakul
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                            Rar
Essence Flux            x2    U      Flicker protection for Hermit Druid or Laboratory    C
                                      Maniac vs. removal-heavy decks
Syncopate               x1    U      vs. opposing bombs/combo pieces                      C
Spontaneous Mutation    x1    U      vs. aggro - cheap flash debuff                       C
Compelling Deterrence   x1    U      vs. combo/control - tempo bounce+discard             U
Eaten Alive             x1    B      vs. recursive/hexproof threats                       C
Killing Wave            x1    B      vs. go-wide aggro/tokens                             U
Murderous Compulsion    x1    B      vs. aggro - tapped-creature removal                  C
Ambush Viper            x1    G      vs. aggro - flash deathtouch blocker                 C
Duel for Dominance      x1    G      vs. big creatures - fight removal                    C
```

## ANALYSIS

**Deck identity.** This is a glass-cannon Pure Combo build: Hermit Druid ({G}, T: reveal until a basic land, put it to hand, everything else to the graveyard) is backed by zero basic lands in the 40, so its one activation mills the entire remaining library. Crawl from the Cellar (flashback {3}{B}, castable straight from the graveyard) then returns Laboratory Maniac from the graveyard to hand; casting it turns on "if you would draw with an empty library, you win instead." Any unconditional draw effect - Think Twice (also flashback-able from the graveyard) or Village Rites (sacrifice the now-tapped Hermit Druid) - closes the game. Everything else in the 40 exists to find, protect, or fund that four-piece sequence.

**Why only 8 lands.** The cube's on-color (B/G/U) nonbasic dual pool is just 6 distinct cards - Haunted Mire/Deathcap Glade (BG), Contaminated Aquifer/Shipwreck Marsh (BU), Tangled Islet/Dreamroot Cascade (GU). Under the pool rules (commons/uncommons up to 2 copies, rares/mythics up to 1, max 5 rares/mythics total across main+SB), and with Hermit Druid, Traverse the Ulvenwald, and Eldritch Evolution already spending 3 of those 5 rare slots on combo pieces, only 2 rare slots remain for lands - so the absolute ceiling is 3 commons x2 (6) + 2 rares x1 (2) = 8. This was a deliberate, discussed tradeoff rather than an oversight, compensated by a 7-card ramp/fixing suite (Cryptolith Fragment, 2x Somberwald Sage, 2x Scorned Villager, 2x Abundant Growth) and heavy selection (Think Twice, Forbidden Alchemy, Traverse the Ulvenwald) to dig through the resulting variance.

**Proportions vs. the Combo baseline, and why this deck deviates.** Macro-Archetype: Combo. Projected avg MV (nonland): 1.97.
- Lands: 8 (20% of N=40) - far below the 30-36% Combo baseline. This is the pool's hard ceiling, not a choice; see above.
- Interaction: 4 removal spells / 32 nonland = 12.5% - within the 10-20% Combo range (Tragic Slip x2, Infernal Grasp x2).
- Threats/Payoffs: 3 / 32 = 9.4% - within the 5-15% Combo range (Hermit Druid x1, Laboratory Maniac x2). The win condition is intentionally just these 3 cards.
- Engine & Infrastructure: 25 / 32 = 78% - well above the 40-50% Combo guidance. In a glass-cannon build the redundancy IS the deck: every tutor (Traverse the Ulvenwald, Eldritch Evolution, Duskwatch Recruiter x2), draw-trigger (Think Twice x2, Village Rites x2), self-mill insurance (Grapple with the Past x2, Eccentric Farmer x2), selection (Forbidden Alchemy x2), ramp/fixing (Cryptolith Fragment, Somberwald Sage x2, Scorned Villager x2, Abundant Growth x2), and sac fodder (Young Wolf x2, plus Crawl from the Cellar x2 which pulls double duty as recursion) exists purely to find, cast, and protect the 3-card payoff package. This is the expected shape of a dedicated combo deck built on a single-copy engine piece (Hermit Druid).

**Two ways to win, not one.** The "expected" line is Hermit Druid mills everything, Crawl from the Cellar (flashback) returns Laboratory Maniac, cast it, then Think Twice/Village Rites wins. But there's a cheaper backup line worth playing around: if Laboratory Maniac is already resolved on the battlefield before Hermit Druid activates, the mill itself sets up a win on your very next draw step with no further spells needed - Crawl from the Cellar isn't required at all. The tradeoff is that this line telegraphs the kill and exposes a 2-of creature to removal for a turn or more; the deck's own removal (Tragic Slip, Infernal Grasp) and the sideboard's Essence Flux exist partly to protect that window.

**Known fragilities (surfaced in self-grill, accepted as the cost of this archetype).**
- Somberwald Sage's ramp is restricted to creature spells - it cannot pay for Crawl from the Cellar's flashback, Think Twice, or Forbidden Alchemy, i.e. it doesn't help fund the exact recursion chain those cards form. It still meaningfully accelerates Hermit Druid, Laboratory Maniac, Duskwatch Recruiter, and Young Wolf.
- Traverse the Ulvenwald is a guaranteed whiff before Delirium is active (its base mode only finds a basic land card, and this deck runs none). Delirium turns on quickly given the self-mill package, but a turn-1 Traverse draw can be a dead card in the opening hand.
- Hermit Druid is a hard singleton (rarity cap). Traverse the Ulvenwald (Delirium-gated), Eldritch Evolution, and Duskwatch Recruiter x2 give three independent ways to find it, which is reasonable but not overwhelming redundancy for a card the whole plan depends on.
- The U splash is one dual-pair asymmetric: Contaminated Aquifer (always tapped) is the only BU source in the deck - Shipwreck Marsh (BU, conditionally untapped) was left out to keep the rare budget on Dreamroot Cascade, which was judged more valuable for keeping the higher-demand G supply flexible. Both choices were bounded by the same 2 remaining rare slots; this was a considered tradeoff, not an omission.

**Sideboard cohesion.** Essence Flux runs at 2 copies specifically because a deck this dependent on 1-2 fragile creatures resolving needs more protection than a single copy provides (this was added in the self-grill review, swapped in for one of the two original fight-based sideboard slots, since asking Hermit Druid or Laboratory Maniac to fight in combat risks the exact pieces the deck needs alive). The remaining slots split across aggro (Murderous Compulsion, Killing Wave, Ambush Viper, Spontaneous Mutation), combo/control (Syncopate, Compelling Deterrence), recursive/hexproof threats (Eaten Alive), and one big-creature fight answer (Duel for Dominance).

**Cards considered but excluded.**

*Rares/mythics cut for the 5-card budget:* Maelstrom Pulse (premium BG removal - lost out to Deathcap Glade/Dreamroot Cascade for land count once the 3 combo rares were locked), The Gitrog Monster (mythic BG value engine - too far from the combo plan and too expensive when 5 rares were already spent elsewhere), Memory Deluge (rare flashback draw - redundant with Think Twice/Forbidden Alchemy at a steeper cost), Shipwreck Marsh (rare BU dual - would have fixed the U-splash asymmetry noted above, but required cutting a rare already in the list), Collective Brutality, Tireless Tracker, Garruk Relentless, Wrenn and Seven, Cultivator Colossus, Gisa and Geralf (all strong BG(U) rares/mythics that simply didn't fit inside a 5-slot budget already spent on Hermit Druid, Traverse the Ulvenwald, Eldritch Evolution, and two lands).

*Uncommons/commons a tier below the chosen includes:* Groundskeeper (only returns *basic* land cards from the graveyard - a dead card in a zero-basic deck, explicitly excluded rather than an oversight), Reckless Scholar (a third draw-trigger, cut for slot economy once Think Twice and Village Rites were in), Sanitarium Skeleton and Butcher Ghoul (alternate sac fodder, lost out to Young Wolf's Undying), Deranged Assistant (colorless-only mana plus self-mill, weaker fixing than Abundant Growth/Cryptolith Fragment for a deck that needs specifically colored mana), Splinterfright, Moldgraf Millipede, and Vilespawn Spider (self-mill payoff creatures that would function as a redundant "fair" win condition, but dilute the single-minded combo plan and don't fit the Pure Combo sub-archetype chosen over the Combo-Midrange Hybrid path).

*Sideboard-consideration cards not included:* Clear Shot (cut post-grill alongside Duel for Dominance's partner slot in favor of the second Essence Flux - two fight-based removal spells was judged too much risk to the combo pieces), Cobbled Lancer, Wretched Gryff, Boarded Window, Helvault, and Nebelgast Herald (all reasonable generic answers in BG(U) but none addressed a matchup axis better than what's already in the 10 slots used).

## MANA AUDIT: FAIL
```
Land Count:        8 / 15 recommended  [FAIL - see rationale above; pool ceiling is 8]
Ramp Count (tool): 0  (taxonomy gap - Cryptolith Fragment, 2x Somberwald Sage,
                       2x Scorned Villager, 2x Abundant Growth are real ramp/fixing
                       but are tagged Mana Dork/Mana Rock/Mana Fixing, not "Ramp")
Avg CMC (nonland): 1.97

Color Balance (core B/G):                                          [PASS]
  G  demand  69.2%   production  75.0%   gap  -5.8pp   [OK]
  B  demand  30.8%   production  62.5%   gap -31.7pp   [OK]

Splash Check (U):                                                   [PASS]
  4 splash cards (max CMC 3), 2 sources required, 5 of 8 lands produce U

Overall: FAIL - driven entirely by land_count_status; color balance and
splash checks both PASS on their own terms. The land-count FAIL is a known,
user-approved deviation forced by the cube's card pool (only 6 on-color
duals exist), not a fixable manabase defect.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at <=2 copies       - verified for all 33 unique cards
[PASS] Rares/mythics at <=1 copy each        - Hermit Druid, Traverse the Ulvenwald,
                                                Eldritch Evolution, Deathcap Glade,
                                                Dreamroot Cascade all at 1 copy
[PASS] Max 5 rares/mythics total (main+SB)   - exactly 5, all mainboard, 0 in sideboard
[PASS] Zero basic lands (combo requirement)  - all 8 lands are nonbasic duals with
                                                no Basic supertype
```
