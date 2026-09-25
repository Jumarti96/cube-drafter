---
deck_name: "bg-uurg-grind"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-08-18T20:16:56Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Contaminated Aquifer       taps for B; Island Swamp adds the Island basic land type
  4x Forest                     G
  1x Geothermal Bog             taps for B; Swamp Mountain adds the Mountain basic land type
  2x Haunted Mire               BG dual (Swamp Forest), enters tapped
  1x Radiant Grove              taps for G; Forest Plains adds a fourth basic land type
  8x Swamp                      B
```

### CREATURES (12)

```
CMC  Card                       Qty   Color  Role                                           Rar
  2  Urborg Lhurgoyf            x1    G      Threat/Enabler — kicked {B}, mills three; pow… R
  2  Yavimaya Iconoclast        x2    G      Threat — 3/2 trample two-drop; kicked {R} una… U
  3  Braids, Arisen Nightmare   x1    B      Engine — end-step land sacrifice into draw/dr… R
  3  Eerie Soultender           x2    B      Engine — ETB mill three (bins lands)           C
  3  Phyrexian Rager            x1    B      Engine — 2/2 body that draws a card; one of o… C
  3  Uurg, Spawn of Turg        x2    BG     Payoff — power = land cards in your graveyard… U
  4  Nemata, Primeval Warden    x1    BG     Answer/Engine — exiles opposing creatures tha… R
  4  Sheoldred, the Apocalypse  x1    B      Threat — 4/5 deathtouch; drain on every draw   M
  6  Bortuk Bonerattle          x1    BG     Top end — 4/4 that reanimates a creature at o… U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                       Qty   Color  Role                                           Rar
  1  Cut Down                   x2    B      Interaction — 1-mana instant removal           U
  1  Urborg Repossession        x2    B      Payoff — kicked, returns a land AND a creatur… C
  2  Tear Asunder               x1    G      Interaction — modal exile (kicked: any nonlan… U
  3  Shadow Prophecy            x2    B      Engine — instant-speed dig; the remainder goe… C
  4  Extinguish the Light       x2    B      Interaction — unconditional creature/planeswa… C
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                                           Rar
  3  Braids's Frightful Return  x1    B      Engine — saga: discard, creature recursion, t… U
  3  Liliana of the Veil        x1    B      Interaction — symmetric discard (bins our lan… M
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                      Rar
Broken Wings               x2    G      Answer — artifact / enchantment / flier | vs artifact, ench… C
Snarespinner               x2    G      Blocker — reach, +2/+0 when blocking a flier | vs flier-bas… C
Choking Miasma             x2    B      Sweeper — all creatures -2/-2 | vs go-wide token boards (To… U
Tear Asunder               x1    G      Answer — exile any nonland permanent when kicked | vs resil… U
Pilfer                     x1    B      Disruption — target opponent discards a nonland card of you… C
Bite Down                  x2    G      Removal — target creature you control deals damage equal to… C
```

## ANALYSIS

### DECK IDENTITY

Golgari attrition midrange built on the same payoff as the Jund list but without red's repeatable conversion outlets. Uurg, Spawn of Turg is still the clock - its power is the count of land cards in your graveyard - but here the graveyard fills passively rather than on demand: Uurg's own upkeep surveil and its {B}{G} land sacrifice, Eerie Soultender's mill three, Urborg Lhurgoyf's kicked mill three, Shadow Prophecy binning the remainder of its own dig, Braids sacrificing a land every end step, and Liliana's +1. Nine of the 23 nonland cards can bin a land against the Jund build's twelve, and none of the nine is a repeatable on-demand outlet, which is why this deck's thesis turn is 8 rather than 7. What two colours buy in exchange is the cube's deepest removal suite and a mana base that actually works. The deck trades on the axis it is best at: it kills the opponent's threats one for one, exiles every opposing creature that dies with Nemata, drains with Sheoldred, and eventually attacks with a Uurg that has grown too large to block.

### THE COST OF CUTTING RED, IN NUMBERS

This is the same archetype as the Jund build, minus one colour. The difference is not a matter of taste — it is measurable in three places:

| | Jund (BRG) | Golgari (BG) |
|---|---|---|
| Cards that can bin a land | 12 of 23 | **9 of 23** |
| Repeatable **on-demand** binning outlets | 4 (Sprouting Goblin ×2, Goblin Picker ×2) | **0** |
| Lands-in-the-bin payoffs available in the colours | 5 copies | **4 copies** |
| Thesis turn (assembly gate at p ≥ 0.75) | 7 | **8** |
| Real draw effects | 9 of 23 | **4 of 23** |

The load-bearing row is the second one. Red owns every repeatable land-sacrifice and land-discard draw outlet in this cube — `{R}, {T}, Sacrifice a land: Draw a card` and `{R}, {T}, Discard a card: Draw a card` have no analogue in black or green. Without them the graveyard fills on a schedule the deck does not control: an Eerie Soultender enters, an upkeep surveil hits, a Shadow Prophecy resolves. Uurg grows about **one point per turn** here, against roughly **1.4** in the Jund build.

That one-turn delay is why `thesis_turn` was revised from 7 to 8. At 3.7 reliability-weighted payoff copies, `1-(1-3.7/40)^14 = 0.743` — below the 0.75 assembly threshold. At 15 cards seen it is 0.767. The deck genuinely assembles a turn later, and the honest thing was to move the number rather than inflate the weights.

### WHAT THE SECOND COLOUR SLOT BUYS BACK

Two things, both real.

**Removal depth.** Six mainboard removal spells, four of them in black: Cut Down at one mana (`total power and toughness 5 or less`), Extinguish the Light ×2 with no rider at all, Tear Asunder as a modal exile, and Liliana's edict which ignores hexproof and indestructible. The Jund build runs the same count but has to spend two of its slots on red damage spells that miss the format's larger bodies.

**A mana base that works.** Eleven of the seventeen lands produce black, which matters because black is **76.5%** of this deck's pips and carries four different double-pip costs. The Jund build spreads seventeen lands over three colours and pays for it with six enters-tapped duals; this one pays for five tapped lands, and three of those five are a *deliberate purchase* rather than a fixing tax (see below).

### THE DOMAIN LANDS ARE NOT FIXING

Three of the seventeen lands — Contaminated Aquifer, Radiant Grove, Geothermal Bog — each produce exactly one colour this deck can spend and one it cannot (`{U}`, `{W}` and `{R}` respectively, all of which this deck has zero pips for). They are functionally **tapped monocoloured lands bought for their type line**.

They are in the deck because on Swamps, Forests and Haunted Mire alone, Domain would be **2** — at which Shadow Prophecy looks at two cards, keeps both and bins nothing, and Bortuk Bonerattle reanimates nothing above mana value 2. The three type-adders raise the realised count to a typical **3** and a ceiling of **5**, at which:

- Shadow Prophecy looks at 3, keeps 2, and bins 1 — it becomes a land-binner instead of just a cantrip
- Bortuk Bonerattle reanimates **9 of the deck's other 11 creature copies** instead of none

The price is stated rather than hidden: five of seventeen lands enter tapped, so a two-land keep on Haunted Mire plus Geothermal Bog is a full turn behind. Two further type-adders (Sunlit Marsh, Tangled Islet) were available and declined — they duplicate types already supplied, so a sixth tapped land would buy nothing.

### THE PLAY PATTERN THAT LOSES GAMES

Urborg Repossession kicked returns *"another target permanent card from your graveyard to your hand"* — a land. That card is **46% of the deck's payoff weight**, and cashing it **shrinks Uurg by one point of power**.

The correct line: while Uurg is your clock, cast Urborg Repossession **unkicked** for `{B}`, take the creature, and leave the land in the bin. Kick it only when Uurg is dead, when you actually need the land drop, or when the two cards are worth more than the point of power. This is the single most common way to misplay the deck and it is a genuine decision, not a synergy.

### SHEOLDRED IS A DIFFERENT CARD HERE

In the Jund list Sheoldred is a payoff: 9 of 23 nonland cards draw, five repeatably, and every activation gains 2 life. Here the real count is **4 of 23** — and it is worth being precise about why, because it is easy to get wrong. Shadow Prophecy reads *"Put up to two of them into your hand"*, and putting a card into your hand is **not** drawing, so it does not trigger her. Neither does Urborg Repossession. The four that do are Braids, Braids's Frightful Return chapter III, Nemata's Saproling sacrifice, and Phyrexian Rager.

So she is included here for the body and the symmetry: a 4/5 deathtouch wall that no ground creature attacks into profitably, which also drains the opponent 2 on their own draw step every turn. That is still excellent — it is just a different card than it is one colour over.

### SIDEBOARD: ONE SLOT PAIR THAT WAS WRONG

The first draft of this sideboard ran two copies of a card reading *"Your opponents can't gain life"*, aimed at the dossier's 22-card lifegain class. A scan of all 271 cards in the cube for text that triggers on gaining life returns **zero**. The 22 are incidental gain-2 and gain-3 riders with no payoff structure behind them, so the hate card blanks no engine and the slots were dead. They became Bite Down ×2 — a two-mana answer that scales with Uurg or Sheoldred and covers the threats above Cut Down's `total power and toughness 5 or less` ceiling.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:4  3:10  4:4  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Urborg Repossession@0.85, Urborg Repossession@0.85) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 4.2: Eerie Soultender@0.5, Eerie Soultender@0.5, Shadow Prophecy@0.35, Shadow Prophecy@0.35, Liliana of the Veil@0.8, Urborg Lhurgoyf@0.7) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 58%  T2 85%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper: Choking Miasma's symmetric -2/-2 would kill 5 of the deck's 12 bodies (Yavimaya Iconoclast 3/2 x2, Eerie Soultender 3/1 x2, Phyrexian Rager 2/2 x1), so it is sideboarded. Mainboard the deck blocks behind Uurg's fixed 5 toughness, Sheoldred's 4/5 deathtouch and Nemata's 3/4 reach, which turns every opposing creature death into a Saproling blocker.
  OK        single_large_threat: Extinguish the Light, Tear Asunder, Liliana of the Veil
  OK        noncreature_permanents: Tear Asunder, Liliana of the Veil
  CONCEDED  stack: BG holds no counterspell in this cube, so the deck answers permanents after they resolve via Extinguish the Light x2, Tear Asunder and Liliana's edict, and attacks the hand proactively with Liliana's +1 and sideboard Pilfer rather than the stack.
  OK        graveyard: Nemata, Primeval Warden
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Weaker here than in the Jund build, and the difference is the whole point of the two-colour trade. Nine of 23 nonland cards can put a surplus land into the graveyard: Uurg x2 ('{B}{G}, Sacrifice a land' plus upkeep surveil), Eerie Soultender x2, Shadow Prophecy x2, Urborg Lhurgoyf x1 (kicked), Braids x1 (end-step sacrifice), Liliana x1 (+1). Only Uurg's sacrifice, Braids' end step and Liliana's +1 are repeatable, so a flooded hand converts roughly one land per turn rather than two or three. Two honest riders. Shadow Prophecy bins nothing at all at Domain 2, which is about a third of games at turn six. And Urborg Repossession runs the engine BACKWARDS when kicked - it pulls a land back out of the graveyard, costing Uurg a point of power to gain two cards. What makes flood tolerable rather than lethal is that a binned land is immediately power on Uurg, and that Uurg's {B}{G} sink and Nemata's Saproling draw give spare mana somewhere to go. |
| screw | mitigation | A 4/4/10/4/0/1 curve puts 8 of 23 nonland cards at two mana or less (Cut Down x2, Urborg Repossession x2, Tear Asunder x1, Yavimaya Iconoclast x2, Urborg Lhurgoyf x1), and the two-colour mana base means a Swamp and a Forest cast most of the deck. The goldfish simulation reports 86% keepable hands and 88% on three lands by turn three. The honest weakness is that five of the 17 lands enter tapped, so a two-land keep on Haunted Mire plus Geothermal Bog is a full turn behind. |
| decapitation | mitigation | Uurg runs at two copies and Urborg Repossession returns any creature card from the graveyard to hand for a single black mana, so the primary threat is answered twice over. Braids's Frightful Return chapter II is a third rebuy ('Return target creature card from your graveyard to your hand'), and Bortuk Bonerattle returns one directly to the battlefield at or below the Domain count. Between them the deck can recast its best creature three separate ways, which is why it can afford to run one copy each of Sheoldred and Nemata. |
| gas-out | mitigation | Thinner than the Jund build and compensated structurally rather than pretended away. Cards that are Net-Positive or Self-Replacing: Shadow Prophecy x2 (look at Domain-many, keep two, net +1 at instant speed), Urborg Repossession x2 (one card back, two when kicked), Braids x1 (repeatable end-step draw), Braids's Frightful Return x1 (chapter II rebuy plus chapter III draw), Nemata x1 (repeatable Saproling draw), Phyrexian Rager x1 (self-replacing body) = 8 of 23 nonland cards. Note that only four of those actually DRAW - Shadow Prophecy and Urborg Repossession put cards into hand without drawing, which matters for Sheoldred and not for card economy. The compensation is that the deck trades one-for-one with six removal spells and exiles every opposing creature that dies via Nemata, so an empty hand on both sides favours the player whose remaining threat is a Uurg that grew every turn. |
| raced | accepted | This build is slower than the Jund one and accepts it explicitly - the thesis turn was revised from 7 to 8 for exactly this reason. Uurg is a 0/5 on an empty graveyard and this deck has no repeatable on-demand way to grow it, so the first four turns are spent trading. Mitigating further would mean cutting Eerie Soultender, Shadow Prophecy and Braids's Frightful Return for two-power two-drops, which removes every remaining land-to-graveyard source and leaves a BG removal pile with a vanilla 0/5 in it - the identity cost is that the deck stops being a lands deck at all. What is bought instead is the cube's deepest removal suite (Cut Down x2 at one mana, Extinguish the Light x2 unconditional, Tear Asunder, Liliana's edict) plus three walls the fastest decks cannot attack through profitably: Uurg's fixed 5 toughness, Sheoldred's 4/5 deathtouch and Nemata's 3/4 reach. |
| disruption-fizzle | mitigation | There is no critical turn to interact with. The graveyard fills through independent one-shot effects - an Eerie Soultender enters, a Shadow Prophecy resolves, an upkeep surveil happens - none of which chain, so countering or killing any single one costs the deck a card rather than a game. Uurg itself is the only piece worth answering, and the answer is met by the second copy, by Urborg Repossession, by Braids's Frightful Return chapter II, or by Bortuk Bonerattle. CORRECTED after the grill: the earlier justification claimed Braids' sacrifice is an activation cost already paid. It is not - Braids has a triggered ability and the sacrifice happens on resolution. The conclusion survives on the correct mechanism: the trigger is on the stack independently of Braids, so killing Braids in response does not stop the sacrifice or the draw. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Soul of Windgrace | MYTHIC and off-colour. '{1}{R}, Discard a land card: Draw a card' is the best lands-in-the-bin engine in the cube, but {1}{B}{R}{G} needs red; taking it would convert this deck into the Jund build, which is a separate pipeline. |
| Sprouting Goblin / Goblin Picker / Thrill of Possibility | All three are red. They are the only repeatable on-demand land-to-card converters in the cube, and their absence is precisely why this build's thesis turn is 8 rather than 7. |
| Serra Paragon | MYTHIC, off-colour. 'you may play a land from your graveyard' is a perfect fit mechanically but {2}{W}{W} is unreachable — the deck has zero white sources. |
| Defiler of Vigor | RARE, cut for the 5-card budget. A 6/6 trample for {3}{G}{G} is the best green top end, but green is the support colour here at 8 of 34 pips and 7 sources, so {G}{G} on turn five is unreliable. |
| Drag to the Bottom | RARE, cut for the 5-card budget, and Domain-gated: 'each creature gets -X/-X where X is 1 plus the number of basic land types' is only -4/-4 at this deck's typical Domain of 3, symmetric against our own 3/2s. |
| The Cruelty of Gix | RARE, cut for the 5-card budget. Chapter III reanimating from any graveyard is powerful, but at {3}{B}{B} on a three-turn clock it is far slower than Urborg Repossession at {B} or Bortuk at one card. |
| Llanowar Greenwidow | RARE, cut for the 5-card budget. A 4/3 reach trample for three is efficient, but its self-recursion costs {7}{G} minus Domain — {4}{G} at this deck's realised 3 — and it does nothing for the land-graveyard count. |
| Tyrannical Pitlord / Defiler of Flesh / Quirion Beastcaller / Threats Undetected / Leaf-Crowned Visionary / Evolved Sleeper | All RARES cut against the 5-card budget; none interacts with lands or the graveyard, so each would be spending a scarce slot on generic rate. |
| Sengir Connoisseur | Uncommon, cut on curve. A 3/3 flier that grows on every death is a real attrition card, but {3}{B}{B} at mana value 5 pushed the average to 3.22 and the land target to 18. |
| Writhing Necromass | Common, cut on printed cost. 'This spell costs {1} less to cast for each creature card in your graveyard' makes a 5/5 deathtouch genuinely cheap late, but its printed mana value of 7 is what the land-count model reads, and it would have forced an 18th land. |
| Monstrous War-Leech | Uncommon. 'power and toughness are each equal to the greatest mana value among cards in your graveyard' — but lands are mana value 0, so the deck's own defining graveyard contents contribute nothing to it, and its mill-four rider is behind a blue kicker. |
| Toxic Abomination | Kept at one copy rather than two. 'When this creature enters, you lose 2 life' on a 3/2 is real cost in a deck that also runs Extinguish the Light and Shadow Prophecy, both of which cost life. |
| Nishoba Brawler | Domain-gated: 'power is equal to the number of basic land types among lands you control' is a 3/3 at this deck's realised Domain of 3, which Yavimaya Iconoclast matches at the same cost without depending on the land types being assembled. |
| Sunlit Marsh / Tangled Islet | Both would add a Domain type while producing on-colour mana, but each duplicates a type already supplied (Plains by Radiant Grove, Island by Contaminated Aquifer) and would make a sixth and seventh land enter tapped — more tempo than a fourth basic land type is worth to two cards. |
| Thran Portal | RARE. 'As this land enters, choose a basic land type' would push Domain to five, but every rare/mythic slot is spent on spells and only two cards here scale with Domain. |
| Choking Miasma | Sideboard consideration, not mainboard: 'All creatures get -2/-2' kills 5 of the deck's 11 bodies including both Eerie Soultenders and both Yavimaya Iconoclasts. |
| Broken Wings / Snarespinner / Knight of Dusk's Shadow / Pilfer | Sideboard considerations, each aimed at a specific class in the dossier threat profile: fliers and artifacts and enchantments (evasion is 51 cards / 21%, the cube's largest class), the 22-card lifegain class, and proactive hand attack against decks BG cannot answer on the stack. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.37 adj [MV 2.78 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  76.5%  prod  70.6%  gap  +5.9pp  [OK]
  G  demand  23.5%  prod  41.2%  gap -17.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card drawn from the cube's mainboard
[PASS] commons / uncommons: maximum 2 copies (combined mainboard + sideboard)
[PASS] rares / mythics: maximum 1 copy
[PASS] maximum 5 rare+mythic cards across both boards: 5 used - Braids, Arisen Nightmare (R), Liliana of the Veil (M), Nemata, Primeval Warden (R), Sheoldred, the Apocalypse (M), Urborg Lhurgoyf (R)
[PASS] basic lands: unlimited, rarity-exempt (format-supplied)
[PASS] mainboard = 40 cards; sideboard = 10 cards
[PASS] colour usability: every nonland card usable within core colours BG (no splash)
```