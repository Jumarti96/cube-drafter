---
deck_name: "gu-hermit-druid-lab-maniac-combo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GU"
format: "40-card"
built_at: "2026-07-09T02:14:14Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
7x Forest                 
5x Island                 
2x Tangled Islet          GU dual, enters tapped
1x Evolving Wilds         Fetches either basic, thins the deck
```

### CREATURES (15)
```
CMC  Card                             Qty  Color  Role                                               Rar
  2  Deranged Assistant               x2   U      Repeatable mana + self-mill enabler                C
  2  Duskwatch Recruiter // Krallenhorde Howler x1   G      Repeatable creature tutor: digs 3 deep for any cre U
  2  Hermit Druid                     x1   G      Combo engine: mills to a basic land, digs a land t R
  2  Scorned Villager // Moonscarred Werewolf x1   G      Mana ramp: taps for G, smooths turn-2 into turn-3  C
  3  Eccentric Farmer                 x2   G      ETB self-mill 3 + land recursion to hand           C
  3  Grizzled Angler // Grisly Anglerfish x1   U      Repeatable free self-mill 2/turn                   U
  3  Laboratory Maniac                x2   U      Alternate win condition: win instead of losing whe U
  3  Splinterfright                   x2   G      Scaling threat: power/toughness = creatures in gra U
  5  Moldgraf Millipede               x2   G      ETB self-mill 3 + counters payoff scaling with cre C
  8  Ghoultree                        x1   G      Cost-reduced top-end threat, discounted 1 per crea U
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                             Qty  Color  Role                                               Rar
  1  Syncopate                        x2   U      Tempo counterspell, protects the combo/key turns   C
  1  Traverse the Ulvenwald           x1   G      1-mana consistency: tutors a basic land; with deli R
  2  Grapple with the Past            x2   G      Self-mill 3 + recursion, fuels GY and rebuys creat C
  2  Think Twice                      x2   U      Card draw with flashback; delirium enabler         C
  3  Clear Shot                       x2   G      Removal: pump + direct damage to an opposing creat U
  4  Memory Deluge                    x1   U      Card selection/draw; contributes an Instant card t R
```

## SIDEBOARD (10)
```
Card                             Qty  Color  Role / When to board in                                 Rar
Silent Departure                 x2   U      Flashback tempo bounce vs aggro/tempo                   C
Spontaneous Mutation             x2   U      Cheap flash answer to aggressive creatures, scales with C
Ambush Viper                     x2   G      Flash deathtouch blocker vs aggro                       C
Imprisoned in the Moon           x2   U      Flexible answer to a problem creature, land, or planesw C
Summary Dismissal                x2   U      Hard answer to opposing wraths/combo turns; exiles all  U
```

## ANALYSIS

This deck has two independently sufficient paths to victory built on the same 25-card core. Hermit Druid ({G}, {T}: reveal until a basic land, mill the rest) drains the library every activation; Laboratory Maniac (x2) converts the next forced draw into an instant win once the library is thin or empty. When the combo pieces aren't assembled yet, the exact same self-mill actions (Grapple with the Past, Eccentric Farmer, Deranged Assistant, Grizzled Angler, Splinterfright's passive upkeep mill) that drain the library also grow Splinterfright and Moldgraf Millipede and discount Ghoultree into a cheap 9/9 trampler — the fair beatdown plan and the combo plan share a mana base, a curve, and almost every card in the deck.

**Macro-Archetype: Combo (hybrid, with a Midrange self-mill backup plan). Avg MV: 2.8.**

Slot allocation:
- Lands: 15 (37.5% of N=40) — baseline from round(24x40/60)=16; avg CMC 2.8 sits in the neutral 2.0-4.0 band (no +/- adjustment); ramp (1 source, Scorned Villager) and cantrip (1 source, Traverse the Ulvenwald) counts are both below their "-1 per 2/3" thresholds, so no modifier applies. Final 15 is 1 below the 16 recommended -- audit status PASS (diff <= 1).
- Threats/Payoffs: 8 cards, 32% of 25 nonland (Hermit Druid, Laboratory Maniac x2, Splinterfright x2, Moldgraf Millipede x2, Ghoultree) -- above the 5-15% Combo reference range. This is a self-mill archetype where payoffs and enablers overlap: Splinterfright and Moldgraf Millipede are simultaneously graveyard fuel and the fair-plan win condition, which naturally inflates this bucket beyond a pure-combo shell.
- Engine & Infrastructure: 13 cards, 52% of 25 nonland (Grapple with the Past, Traverse the Ulvenwald, Eccentric Farmer, Deranged Assistant, Grizzled Angler, Scorned Villager, Duskwatch Recruiter, Memory Deluge, Think Twice) -- within (slightly over) the 40-50% Combo range, reflecting how mill-density-heavy this build needs to be to reliably empty the library.
- Interaction: 4 cards, 16% of 25 nonland (Clear Shot x2, Syncopate x2) -- within the 10-20% Combo range.

Mana base: G pip demand 13 (56.5%), U pip demand 10 (43.5%) -> targeting 9 G sources / 7 U sources of 15 lands (Tangled Islet counts toward both). Actual production: G 9 (60.0%), U 7 (46.7%) -- both within tolerance, color_balance_status PASS.

Delirium note: delirium (4+ card types in the graveyard) only gates Traverse the Ulvenwald's upgrade mode in this build. The deck reaches the 4 achievable types -- Creature, Instant, Sorcery, Land -- off a single Grapple with the Past or Eccentric Farmer trigger, so Traverse upgrades almost every game by the time it matters, at which point it can tutor Hermit Druid or Laboratory Maniac directly (its delirium mode reads "creature or land card," unrestricted -- it is not limited to finding Hermit Druid specifically).

Combo speed, honestly assessed: this is not a turn-2/3 kill. The deck runs 12 basic lands (30% of the deck), so a typical Hermit Druid activation empties a large chunk of the library but stops at the first basic land revealed, not the whole library. The realistic kill line is attritional: self-mill (Grapple with the Past, Eccentric Farmer, Deranged Assistant, Grizzled Angler, Splinterfright's passive mill, Hermit Druid itself) drains the 12 basics out of the library over several turns, and once they're gone, any subsequent draw or Hermit Druid activation empties the library outright -- at which point Laboratory Maniac converts the next draw into a win. Duskwatch Recruiter and Traverse the Ulvenwald (post-delirium) are the two ways to fetch either combo piece directly rather than waiting to draw it. Until the combo comes together, Splinterfright, Ghoultree, and Moldgraf Millipede provide a genuine, independent beatdown clock.

Known weakness: no graveyard-hate answers exist anywhere in this cube's G/U pool (confirmed during self-grill review -- no artifact/enchantment removal at all in the 300-card working pool), so there is no way to fight through an opposing graveyard-hate piece if one is sideboarded in. The only recourse is to lean harder on the fair plan (creatures already on board don't care about graveyard hate) or race.

### Cards Considered but Excluded

Rares/mythics cut for the 5-card budget:
- Emrakul, the Promised End (mythic) -- cut during self-grill. Its discount only counts card types in the graveyard, and this deck's maindeck only ever produces 4 types (Creature/Instant/Sorcery/Land -- no artifacts/enchantments/planeswalkers anywhere among the GU cards used here), capping the discount at 4 and leaving a floor cost of {9}. With 15 lands and no real ramp, that made it a low-probability inclusion; cutting it also lowered the curve (avg CMC 3.28 to 2.8) and freed a rare slot for Duskwatch Recruiter.
- Tireless Tracker (rare) -- cut during self-grill. Strong standalone value (landfall Clues, scaling counters) but doesn't touch the self-mill/delirium plan at all; replaced with Scorned Villager for a more on-theme mana source.
- The Gitrog Monster, Wrenn and Seven (mythics) -- excellent Self-Mill/Graveyard payoffs, but both want black (Gitrog is BG; Wrenn pairs best with a lands-recursion shell) -- cut when the deck committed to GU without black to keep the mana base clean and two-color.
- Eldritch Evolution (rare) -- sacrifice a creature, tutor a stronger one directly onto the battlefield (X = sacrificed CMC + 2). Sacrificing Deranged Assistant or Hermit Druid can fetch Laboratory Maniac or Hermit Druid directly into play -- the strongest combo-assembly card identified in the pool during self-grill review. Left out to keep the rare/mythic count conservative (3 of 5 used); a strong swap-in for Grizzled Angler or Ghoultree if more combo consistency is wanted at the cost of a body.
- Docent of Perfection, Rooftop Storm, Conjurer's Closet, Second Harvest, Deadeye Navigator, Helvault -- off-theme rares (spellslinger/zombie-tribal/blink/tokens) surfaced during the broader Payoff scan; none touch self-mill or graveyard synergy directly.

Uncommons a tier below the chosen includes:
- Somberwald Sage -- ramp for creature spells only; redundant with and less flexible than Scorned Villager.
- Morbid Opportunist -- card draw off creature deaths; solid graveyard payoff but didn't fit the curve once Tireless Tracker and Emrakul were cut and the deck was already creature-dense.
- Aberrant Researcher // Perfected Form -- self-mill spellslinger threshold card; the deck doesn't run enough instants/sorceries to flip it reliably.
- Noose Constrictor -- repeatable self-mill body, close in role to Grizzled Angler; the first add if a 26th self-mill effect is wanted.

Sideboard considerations not included:
- Compelling Deterrence -- cut from the sideboard during self-grill: its discard clause requires controlling a Zombie, which this deck never does, making it a functionally worse copy of Silent Departure.
- Geistlight Snare -- generic soft counter (counter unless pay {3}); a reasonable sideboard swap for Summary Dismissal if a cheaper answer is wanted instead of the all-or-nothing exile effect.
- Boarded Window -- anti-aggro artifact (attackers get -1/-0); worth testing if the aggro matchup proves worse than expected.


## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.8   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  56.5%  prod  60.0%  gap  -3.5pp  [OK]
  U  demand  43.5%  prod  46.7%  gap  -3.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons up to 2 copies each: PASS -- no card exceeds 2 copies.
Rares/mythics up to 1 copy each: PASS -- Hermit Druid, Traverse the Ulvenwald, Memory Deluge each at 1 copy.
Maximum 5 rares/mythics total (main+SB): PASS -- 3 of 5 used; sideboard is 100% commons/uncommons.
```