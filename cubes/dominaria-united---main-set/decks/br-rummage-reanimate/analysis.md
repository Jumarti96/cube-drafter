---
deck_name: "br-rummage-reanimate"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-08-20T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  9x Swamp
  5x Mountain
  2x Crystal Grotto  scry 1 on ETB; {1} extra for coloured mana
  2x Geothermal Bog  dual, enters tapped
```

### CREATURES (11)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Cult Conscript              x2    B     Threat/Payoff                      U
  2  Goblin Picker               x1    R     Engine/Infrastructure              C
  3  Balduvian Atrocity          x2    B     Threat/Payoff                      U
  3  Eerie Soultender            x2    B     Engine/Infrastructure              C
  4  Monstrous War-Leech         x1    B     Threat/Payoff                      U
  4  Sheoldred, the Apocalypse   x1    B     Threat/Payoff                      M
  6  Tyrannical Pitlord          x1    B     Threat/Payoff                      R
  7  Writhing Necromass          x1    B     Threat/Payoff                      C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Cut Down                    x2    B     Interaction                        U
  2  Lightning Strike            x1    R     Interaction                        C
  2  Thrill of Possibility       x2    R     Engine/Infrastructure              C
  4  Extinguish the Light        x2    B     Interaction                        C
  4  Sheoldred's Restoration     x2    B     Threat/Payoff                      U
```

### OTHER SPELLS (2)

```
CMC  Card                        Qty   Color Role                               Rar
  4  The Elder Dragon War        x1    R     Engine/Infrastructure              R
  5  The Cruelty of Gix          x1    B     Threat/Payoff                      R
```

## SIDEBOARD (10)

```
Card                        Qty   Color Role / When to board in                                      Rar
Chaotic Transformation      x1    R     Hate — enchantments / catch-all exile — vs. the cube's 18 en R
Smash to Dust               x2    R     Hate — artifacts — vs. artifact decks (15 artifacts / 6.1% d C
Knight of Dusk's Shadow     x2    B     Hate — lifegain — vs. the cube's 22 lifegain cards; 'Your op U
Flowstone Infusion          x2    R     Hate — small evasive creatures (toughness ≤ 2) — vs. low-cur C
Gibbering Barricade         x2    B     Flex — anti-aggro / sacrifice outlet — vs. fast starts; a 2/ C
Choking Miasma              x1    B     Hate — wide boards — vs. token and go-wide decks ONLY when m U
```

## ANALYSIS

### DECK IDENTITY

A black-red graveyard-value midrange deck in which self-discard is the fuel line, not the disruption. Thrill of Possibility x2 and Goblin Picker choose exactly which card goes to the yard; Eerie Soultender x2 and The Elder Dragon War chapter II add bulk. The yard is then converted back into board faster than one-for-one removal can answer it, by three independent routes: Sheoldred's Restoration x2 ({3}{B}, no mana-value cap) returns a creature straight to the battlefield on turn 4; The Cruelty of Gix uses read ahead to be cast for {3}{B}{B} starting at chapter III and puts Tyrannical Pitlord (6/6 flying trample) onto the battlefield on turn 5; Balduvian Atrocity kicked returns any creature of mana value 3 or less with haste. Two threats need no reanimation at all — Writhing Necromass costs {1} less for every creature card in the yard, and Monstrous War-Leech's power and toughness equal the greatest mana value among cards in the yard, so binning the Pitlord makes it a four-mana 6/6 whether or not the reanimation ever resolves. Cult Conscript x2 return themselves. The cube contains zero graveyard hate, so this plan cannot be attacked at its source.


### THREE REANIMATION TIERS THAT DO NOT COMPETE

The deck's payoffs partition the creature base by mana value rather than fighting over the same targets. Balduvian Atrocity kicked reaches "mana value 3 or less" — 7 of the 11 creature cards. Sheoldred's Restoration and The Cruelty of Gix chapter III have no cap at all and are what reach the other 4 (Monstrous War-Leech, Sheoldred, Tyrannical Pitlord, Writhing Necromass). Before the grill this deck had exactly one uncapped copy; the absence audit found Sheoldred's Restoration, an uncommon castable for {3}{B} with its {2}{W} kicker declined, and uncapped reanimation went from 1 copy to 3.

### TWO THREATS THAT DO NOT NEED THE REANIMATION AT ALL

This is what makes the plan resilient rather than fragile. Writhing Necromass "costs {1} less to cast for each creature card in your graveyard" and Monstrous War-Leech's "power and toughness are each equal to the greatest mana value among cards in your graveyard" — so the same act of discarding Tyrannical Pitlord that sets up the turn-5 Cruelty of Gix also makes War-Leech a four-mana 6/6 on turn 4, whether or not any Saga ever resolves. Ten of the 22 nonlands have mana value 4 or more, so the anchor is nearly always there.

### THE CUBE HAS ZERO GRAVEYARD HATE

The dossier's structural census reports 0 graveyard-hate cards across all 266, and the grill verified it: the only two pool cards that exile from a graveyard (Serra Paragon, Vohar) exile only cards they themselves recurred. This deck spends its entire resource in a zone no opponent in this environment can attack. That is a bigger deal than any individual card choice here.

### WHAT IT COSTS TO BE THE SLOWEST DECK

Eighteen lands, a 3.18 average mana value, and a payoff that arrives on turn 4-5. The `raced` mode is the one this deck genuinely accepts: Cult Conscript "enters tapped", so even the turn-1 play cannot block on turn 1. Mitigating means cutting the fillers, and the fillers are the plan — without them Writhing Necromass costs 7 and Cruelty of Gix chapter III has no target.

### A MANA NOTE THE AUDIT DOES NOT SEE

The audit reports red production at 50%, but only 7 of the 18 lands can actually produce {R}{R} on a four-land turn-4 board — Crystal Grotto's coloured mana costs an extra {1}, which leaves too little for the generic {2}. The Elder Dragon War is the only card that asks for it, and P(two true red sources by turn 4, on the play) is 57%. That is a real, bounded risk on a 1-of, and it is the reason the deck does not run a second double-red card.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:4  2:4  3:4  4:7  5:1  6:1  7:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.9: The Cruelty of Gix@0.9, Balduvian Atrocity@0.7, Balduvian Atrocity@0.7, Writhing Necromass@0.8, Monstrous War-Leech@0.8) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 4.8: Goblin Picker@0.8, Eerie Soultender@0.7, Eerie Soultender@0.7, The Elder Dragon War@0.6) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 59%  T2 88%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: The Elder Dragon War
  OK        single_large_threat: Extinguish the Light, Cut Down, Lightning Strike, Sheoldred, the Apocalypse
  CONCEDED  noncreature_permanents: Mainboard covers planeswalkers only — Extinguish the Light reads 'Destroy target creature or planeswalker'. Artifacts and enchantments are unanswered in the mainboard and are answered from the sideboard by Smash to Dust x2 and Chaotic Transformation x1 respectively. This is now an accepted cost rather than an absence of options: Chaotic Transformation ({5}{R}, the only B/R-castable enchantment answer in the pool) was weighed for a mainboard slot and put in the sideboard instead, because at 6 mana it is uncastable on the turn-6 thesis curve and the cube's enchantment density is 18 of 247 (7.3%).
  CONCEDED  stack: Neither black nor red holds a counterspell in this cube, and unlike the hand-attack build this deck's discard is aimed at its own hand, so it has no pre-emptive substitute either. The Cruelty of Gix chapter I is the single exception and is usually spent on chapter III instead. Note the opposite direction is NOT conceded away: the cube holds 6 counterspells (Negate, Ertai's Scorn, Ertai Resurrected, Essence Scatter, Protect the Negotiators, Vodalian Hexcatcher), three of which can counter this deck's two Saga SPELLS before any chapter fires.
  CONCEDED  graveyard: The cube contains zero graveyard hate (dossier structural_census: GY hate = 0; the only two pool cards that exile from a graveyard, Serra Paragon and Vohar, exile only cards they themselves recurred). This cuts both ways and is load-bearing for this deck: its entire plan lives in the graveyard, and no opponent in this cube can attack it there.
```

No WARN-tier flags — curve and goldfish both PASS, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks plus two cost-scaling threats: Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield', Goblin Picker's '{R}, {T}, Discard a card: Draw a card', and Eerie Soultender's '{4}{B}, Exile this card from your graveyard: Return another target creature card from your graveyard to your hand'. Thrill of Possibility x2 turns a surplus land in hand into two cards; Writhing Necromass is castable at any surplus mana level once the yard is stocked; Sheoldred, the Apocalypse gains 2 life on every one of those draws. |
| screw | mitigation | 8 of the 22 nonlands cost 2 or less (Cut Down x2, Cult Conscript x2, Lightning Strike, Thrill of Possibility x2, Goblin Picker), Crystal Grotto x2 scries 1 on entry, and 18 lands is the highest count of the three builds. The goldfish check measures 83% keepable hands and 92% reaching 3 lands by turn 3. |
| decapitation | mitigation | No single card is load-bearing. The payoff class holds 9 copies and the assembly check returns p=0.94; uncapped graveyard-to-battlefield reanimation alone is 3 copies (Sheoldred's Restoration x2, The Cruelty of Gix). Tyrannical Pitlord is hard-castable at {4}{B}{B} off 18 lands, and Monstrous War-Leech delivers a 6/6-or-larger body for four mana with no reanimation at all. If the Pitlord is answered on sight, Sheoldred's Restoration returns it for {3}{B}. |
| gas-out | mitigation | Unconditional card generation from hand is 2 of 22 nonlands (Thrill of Possibility x2, net +1 each) — stated plainly rather than inflated. The deck's real refuel is the graveyard, which functions as a second hand: Cult Conscript x2 return themselves for {1}{B}, Eerie Soultender x2 return another creature card to hand for {4}{B}, and Sheoldred's Restoration x2 convert a yard card into a battlefield card. Goblin Picker converts dead draws into live ones every turn for {R}, and Sheoldred, the Apocalypse gains 2 life per draw while draining the opponent 2 per theirs. |
| raced | mitigation | Upgraded from an acceptance after the grill's absence audit. Sheoldred, the Apocalypse ({2}{B}{B}, 4/5 deathtouch) blocks the cube's 21%-density evasive starts profitably and drains 2 for every card the racing deck draws, and it costs no fuel slot — it took the previously unspent fifth rare. Cut Down x2 at {B} still answers the turn-1 and turn-2 curve. Residual exposure is real and stated: Cult Conscript 'enters tapped', so the deck's turn-1 play cannot block that turn, and the payoff does not arrive until turn 4-5. Gibbering Barricade x2 (2/4 Defender) and Flowstone Infusion x2 come in from the board against the fastest starts. |
| disruption-fizzle | mitigation | There is no single critical turn: three independent uncapped-or-capped reanimation routes plus two self-scaling threats. Correction after the grill: it is NOT true that this plan cannot be interacted with on the stack — the cube contains 6 counterspells (Negate, Ertai's Scorn, Ertai Resurrected, Essence Scatter, Protect the Negotiators, Vodalian Hexcatcher), and three of those can counter The Cruelty of Gix or The Elder Dragon War as SPELLS before any chapter fires. What holds is the redundancy: countering one Saga leaves Sheoldred's Restoration x2 and Balduvian Atrocity x2 untouched, and the cube's 3 total enchantment answers (density 1.2%) mean a resolved Saga very rarely gets removed mid-chapter. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Squee, Dubious Monarch | RARE, cut during grill repair. Its graveyard cast requires 'exiling four other cards from your graveyard', which raises Writhing Necromass's cost by up to {4}, lowers Monstrous War-Leech's power and toughness, and empties The Cruelty of Gix's target pool. Anti-synergistic with three payoffs at a rare's price. Its slot went to Sheoldred, the Apocalypse. |
| Braids's Frightful Return | UNCOMMON, cut during grill repair. Chapter II returns a creature card to HAND, not the battlefield, so reanimating the top end costs {2}{B} plus a later {4}{B}{B}; it carried the lowest reliability weight of any payoff (0.6). Sheoldred's Restoration does the same job at the same curve slot, in the same colour, directly to the battlefield. |
| Braids, Arisen Nightmare | RARE, weighed for the fifth rare slot. Its end-step sacrifice converts Balduvian Atrocity's doomed body (which its own text sacrifices anyway) into a card plus 2 drain. Displaced by Sheoldred, the Apocalypse, which converts the deck's one accepted failure mode (raced) into a mitigation. |
| Liliana of the Veil | MYTHIC, weighed for the fifth rare slot. '+1: Each player discards a card' bins a reanimation target on roughly half of activations against 11 creature cards of 22 nonlands. Displaced for the same reason as Braids — this deck needed a blocker more than another filler. |
| The Raven Man | RARE, weighed for the fifth rare slot. Goblin Picker's repeatable discard would make its Bird trigger free every turn. Displaced: a 1/1-per-turn clock does not close a game this deck intends to win with a 6/6 flier on turn 5. |
| Rivaz of the Claw | RARE. 'Once during each of your turns, you may cast a Dragon creature spell from your graveyard' — this list contains 0 Dragon creature CARDS. The Elder Dragon War's chapter III makes a Dragon token, which is not a card and never reaches the graveyard, so both the recursion clause and the Dragon-only mana ability are blank text. |
| Molten Monstrosity | 'Costs {X} less to cast, where X is the greatest power among creatures you control.' The only creatures here with power 5 or more are the ones the deck is trying to cheat into play — the discount is circular, largest exactly when least needed. |
| Phoenix Chick | Its recursion requires 'you attack with three or more creatures'. This deck's plan is one large reanimated body, not a wide board; three simultaneous attackers is not a state it reliably reaches before turn 6. |
| Bone Splinters | 'As an additional cost to cast this spell, sacrifice a creature.' The deck's plan is moving creature cards FROM the graveyard TO the battlefield; a removal spell that runs the conversion backwards competes with its own payoffs for the same 11 creature cards. Cut Down does the job at the same cost with no board cost. |
| Shadow Prophecy | 'Domain — Look at the top X cards, where X is the number of basic land types among lands you control.' X = 2 in a Swamp/Mountain mana base (Geothermal Bog is 'Land — Swamp Mountain' and adds no new type), so it is a 3-mana 'look at 2, take up to 2, lose 2 life'. |
| Sengir Connoisseur | 'Whenever one or more other creatures die, put a +1/+1 counter on this creature.' Five mana with {B}{B} on a mana base whose true {R}{R} count is already thin; a 5-drop that grows slowly does not fit a turn-6 thesis. |
| Dragon Whelp | A 2/3 flier for {2}{R}{R} with a pump that can sacrifice it. Double red on turn 4 is a 57% proposition on this mana base, and the deck already spends its one {R}{R} slot on The Elder Dragon War. |
| Karn's Sylex | MYTHIC. Colourless and therefore castable, and its '{X}, {T}, Exile: Destroy each nonland permanent with mana value X or less' would cover the conceded artifact and enchantment classes — but it is symmetric and this deck's whole board is the payoff it just spent five turns assembling. |
| Gibbering Barricade (mainboard) | 'Defender' contributes nothing to a plan that wins by attacking with a reanimated fatty. Kept in the sideboard, where its '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' converts Balduvian Atrocity's doomed body into a card against fast decks. |
| Choking Miasma (second copy) | 'All creatures get -2/-2 until end of turn' kills 5 of this deck's own 11 creature copies (Cult Conscript x2, Goblin Picker, Eerie Soultender x2). Trimmed to one sideboard copy for the genuine token matchups only. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.18   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.91 adj [MV 3.18 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  78.6%  prod  72.2%  gap  +6.4pp  [OK]
  R  demand  21.4%  prod  50.0%  gap -28.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                            cube_mainboard of dominaria-united---main-set
commons_uncommons_max_2:         PASS — no card exceeds 2 copies (validator CHECK3, verified against a known-bad fixture)
rares_mythics_max_1_each:        PASS
rares_mythics_max_5_total:       PASS — exactly 5: The Cruelty of Gix (rare), Tyrannical Pitlord (rare), The Elder Dragon War (rare), Sheoldred, the Apocalypse (mythic), and Chaotic Transformation (rare, sideboard). Previously 4 with one slot unspent; the grill correctly treated an unweighed empty slot as a finding.
basics_unlimited:                Swamp x9, Mountain x5 — format-supplied, exempt
colour_usability:                PASS — every nonland card returns a usable mode under effective_cost.best_mode(card, ['B','R'], []). Three cards are legal via a kicker-decline and are NOT splashes: Sheoldred's Restoration (base {3}{B}, {2}{W} kicker declined), Monstrous War-Leech (base {3}{B}, {U} kicker declined), Choking Miasma (base {1}{B}{B}, {G} kicker declined). Balduvian Atrocity's {R} kicker is in-core.
```
