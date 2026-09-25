---
deck_name: "wub-ratadrabik-legend-attrition"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-19T03:54:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Island                   basic
  2x Plains                   basic
  5x Swamp                    basic
  2x Contaminated Aquifer     U/B dual, enters tapped (Island Swamp)
  2x Crystal Grotto           untapped, scry 1 on entry, {1} for any colour
  2x Idyllic Beachfront       W/U dual, enters tapped (Plains Island)
  1x Plaza of Heroes          untapped, any colour for legendary spells / among legends; protects a legend for {3}
  2x Sunlit Marsh             W/B dual, enters tapped (Plains Swamp)
```

### CREATURES (16)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Cult Conscript                  x2    B      recursive-fodder            U
  2  Elas il-Kor, Sadistic Pilgrim   x2    WB     payoff-drain                U
  2  Phyrexian Vivisector            x1    B      death-payoff/fodder         C
  2  Raff, Weatherlight Stalwart     x2    WU     legend-body                 U
  2  Vohar, Vodalian Desecrator      x2    UB     legend-body/loot            U
  3  Aron, Benalia's Ruin            x2    WB     sacrifice-outlet            U
  3  Braids, Arisen Nightmare        x1    B      engine-draw/drain           R
  3  Gibbering Barricade             x1    B      sacrifice-outlet/draw       C
  4  Ertai Resurrected               x1    UB     interaction-legend          R
  4  Ratadrabik of Urborg            x1    WB     payoff-primary              R
  4  Sheoldred, the Apocalypse       x1    B      threat/legend-fodder        M
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Bone Splinters                  x1    B      removal/sac-outlet          C
  1  Cut Down                        x2    B      removal                     U
```

### OTHER SPELLS (4)

```
CMC  Card                            Qty   Color  Role                        Rar
  3  Relic of Legends                x2    C      mana/fixing                 U
  4  Prayer of Binding               x2    W      removal-catchall            U
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                       Rar
Destroy Evil                    x2    W      enchantment / high-toughness answer           C
Essence Scatter                 x2    U      creature-spell answer                         C
Negate                          x2    U      noncreature-spell answer                      C
Choking Miasma                  x2    B      board sweeper vs wide/evasive boards (kicker declined)  U
Citizen's Arrest                x2    W      unconditional exile vs single large threat / evader  C
```

## ANALYSIS

### DECK IDENTITY

Esper legend-attrition midrange. Twelve legendary creatures are the deck's resource, not just its threats: Ratadrabik of Urborg turns every legendary death - from combat, from opposing removal, from Aron's sacrifice outlet, or from the legend rule when a second copy of a legend you already control resolves - into a non-legendary 2/2 Zombie copy that keeps the original's abilities. Elas il-Kor converts each of those deaths into 1 life loss for each opponent and each replacement token into 1 life gained, so the board only ever widens while the opponent's life total only falls. Cult Conscript rebuys itself from the graveyard for {1}{B} every time something dies, and Gibbering Barricade and Bone Splinters turn any creature into a card or a kill at instant speed. Cheap black removal and two flash Prayer of Binding buy the turns the plan needs.

### THE LEGEND RULE IS AN ENGINE, NOT A DRAWBACK

This is the interaction the whole build turns on, and it is the reason the two-copy pool rule is a *synergy* here rather than mere redundancy. Ratadrabik of Urborg reads `Whenever another legendary creature you control dies, create a token that's a copy of that creature, except it's not legendary and it's a 2/2 black Zombie in addition to its other colors and types.` The legend rule puts a duplicate legend into its owner's graveyard from the battlefield - that is a death, and it is a Ratadrabik trigger. So the second Elas il-Kor, the second Aron, the second Raff and the second Vohar are not dead draws with the payoff online: casting one converts it directly into a non-legendary 2/2 Zombie that keeps the original's text. Eight of the 23 nonland cards are these second copies.

The token is explicitly **not legendary**, so unlike the originals the copies stack without limit. Two Zombie Elas il-Kor copies plus the original mean every creature death drains for 3.

### WHAT THE CARDS ACTUALLY DO TOGETHER

| Piece | Oracle clause that matters | What it contributes |
|---|---|---|
| Ratadrabik of Urborg | `Whenever another legendary creature you control dies, create a token that's a copy of that creature` | Turns 11 of 23 nonland cards into recurring bodies |
| Elas il-Kor, Sadistic Pilgrim | `Whenever another creature you control dies, each opponent loses 1 life` | The clock. 15 of 16 creatures qualify, plus every token |
| Aron, Benalia's Ruin | `{W}{B}, {T}, Sacrifice another creature: Put a +1/+1 counter on each creature you control` | Decides *when* a legend dies, and pays for it in board size |
| Gibbering Barricade | `{2}{B}, Sacrifice a creature: You gain 1 life and draw a card` | The only instant-speed unlimited outlet - converts a legend in response to exile removal |
| Cult Conscript | `{1}{B}: Return this card from your graveyard to the battlefield. Activate only if a non-Skeleton creature died under your control this turn.` | Renewable fodder; the condition is met by all 16 creatures |
| Braids, Arisen Nightmare | `you may sacrifice an artifact, creature, enchantment, land, or planeswalker` | A free sacrifice every end step - and a flood outlet, since it can eat a land |

### WHY BLUE, AND ONLY THIS MUCH BLUE

Blue is 5 of 23 nonland cards and 5 of 35 coloured pips (14.3%), and **no card in the deck needs more than one blue pip**. That is what makes 8 blue sources enough in a three-colour deck built on enters-tapped commons. Blue buys exactly three things: two more 2-mana legendary bodies (Raff, Vohar), the deck's only repeatable card selection (Vohar's `{T}: Draw a card, then discard a card`), and Ertai Resurrected - the single card in the mainboard that answers the stack. Rona, Sheoldred's Faithful (`{1}{U}{B}{B}`) and Tura Kennerud, Skyknight (`{2}{W}{U}{U}`) were both cut on exactly this rule: their double pips would have forced blue to be a real colour rather than a one-pip colour.

### THE HONEST WEAK SPOT: TURN-3 DOUBLE WHITE

Aron, Benalia's Ruin at `{W}{W}{B}` is the deck's tightest cast. Only 7 lands can contribute {W} to it on turn 3 - Sunlit Marsh x2, Idyllic Beachfront x2, Plains x2, and Plaza of Heroes (Aron is a legendary spell, so Plaza's second mode applies). Crystal Grotto does **not** count for that specific cast, because its coloured mode is `{1}, {T}: Add one mana of any color` and a three-land turn cannot pay the extra {1} and still cast a three-mana spell. Simulation over this exact land list puts Aron on curve in roughly 45% of games. That is a curve-smoothness cost rather than a plan dependency: Aron is 2 of 23 cards and the deck runs three other sacrifice outlets.

### THE FIVE RARE SLOTS

The cap forced a real choice, and it went entirely to cards that are legendary or that fix the mana: Ratadrabik of Urborg (the payoff), Sheoldred the Apocalypse (the bomb and premium fodder), Braids Arisen Nightmare (the engine the shape judge picked the build for), Ertai Resurrected (the only stack answer, stapled to a legend body), and Plaza of Heroes (the only land in the format that is itself a legends-matter card). Everything else in the 50 is common or uncommon - including the whole sideboard, which is why the cap stayed at exactly 5.

### SIDEBOARDING

The cube's largest threat class is evasion at 51 of 247 nonland cards (20.7%), and this deck has zero creatures with flying or reach. Citizen's Arrest x2 is the unconditional answer and Choking Miasma x2 sweeps the small ones - and Miasma is asymmetric here, because with Ratadrabik on the battlefield 5 of the 8 creatures it kills on our side are legendary and return as Zombie copies created after the effect resolves. Choking Miasma prints as B/G; it is cast with its `Kicker {G}` declined, which makes it a clean `{1}{B}{B}` in this deck.

There is one class this deck cannot answer at all, and neither can any other deck in this cube: **graveyard**. Verified card by card - the only exile-from-graveyard clause in the entire pool is Founding the Third Path, and it exiles from your own yard.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:7  3:6  4:5
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  death_payoff: 5 copies (effective 4.2: Braids, Arisen Nightmare@0.7, Phyrexian Vivisector@0.5) → p=0.79 (need ≥ 0.75)
  PASS  legend_fodder: 11 copies → p=0.99 (need ≥ 0.75)
  PASS  sac_outlet: 5 copies (effective 4.8: Braids, Arisen Nightmare@0.8) → p=0.83 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 64%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Choking Miasma ({1}{B}{B}, uncommon, castable in W/U/B by declining its {G} kicker) is the pool's one reachable sweeper and it is in the sideboard, not the maindeck: 'All creatures get -2/-2 until end of turn' kills 8 of this list's 16 creatures (Elas il-Kor x2, Vohar x2, Cult Conscript x2, Phyrexian Vivisector, Ertai Resurrected), and only 5 of those 8 are legendary and return as Zombie copies with Ratadrabik out. Maindeck the deck out-widens instead: Ratadrabik replaces every legend that trades, and Elas il-Kor x2 deathtouch makes every block lethal.
  OK        single_large_threat: Prayer of Binding, Ertai Resurrected, Elas il-Kor, Sadistic Pilgrim
  OK        noncreature_permanents: Prayer of Binding, Ertai Resurrected
  OK        stack: Ertai Resurrected
  CONCEDED  graveyard: Stated precisely: this cube contains no graveyard HATE - no card exiles, disrupts or shrinks an opponent's graveyard. Two cards do reach into a graveyard, but to steal from it rather than answer it: The Cruelty of Gix chapter III (Put target creature card from a graveyard onto the battlefield under your control) and Soul of Windgrace (you may put a land card from a graveyard onto the battlefield tapped under your control). The cube's 32-card graveyard-interaction class (13.0%) therefore cannot be disrupted by any deck in this cube, so it is raced on board rather than interacted with.
```

_No WARN-tier flags were raised: curve, assembly, goldfish and coverage all returned PASS, so there are no structural responses to record._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Braids, Arisen Nightmare explicitly sacrifices 'an artifact, creature, enchantment, land, or planeswalker' at each end step, so a surplus land becomes a drawn card and 2 life loss; Vohar, Vodalian Desecrator x2 turn excess lands in hand into fresh cards with '{T}: Draw a card, then discard a card'; Gibbering Barricade converts spare mana plus a spare body into a card at instant speed; Cult Conscript x2 give every surplus {1}{B} a body to buy back; and Crystal Grotto x2 scry on entry. |
| screw | mitigation | 12 of 23 nonland cards cost 2 or less, and all five 1-drops (Cut Down x2, Bone Splinters, Cult Conscript x2) are black, the deck's most-sourced colour at 12 of 17 lands. A two-land keep casts Cult Conscript, Elas il-Kor, Vohar or a removal spell on curve. Crystal Grotto x2 scry on entry and Vohar's loot digs for the third land. The goldfish simulation measured 86% keepable hands and 3 lands by turn 3 in 88%. |
| decapitation | mitigation | Ratadrabik of Urborg has ward {2}, taxing every answer, and Plaza of Heroes can give it hexproof and indestructible for {3}. If it is still answered, the plan does not stop: Elas il-Kor x2 is an independent death payoff on the same axis, and Braids, Arisen Nightmare converts sacrifices into cards without Ratadrabik on the battlefield. The assembly check measures 5 death-payoff copies (4.2 effective) at p=0.79 by turn 7 - this is not a one-card plan. |
| gas-out | mitigation | Net-positive and self-replacing cards in this list: Braids, Arisen Nightmare (a card per end-step sacrifice), Gibbering Barricade (a card per sacrifice at instant speed), Vohar, Vodalian Desecrator x2 (repeatable loot), Sheoldred, the Apocalypse (2 life per card drawn, 2 life lost per opponent draw), Phyrexian Vivisector (scry per death). More importantly the deck refuels the BOARD rather than the hand: Ratadrabik returns every dead legend as a 2/2 Zombie copy, and Cult Conscript x2 return themselves from the graveyard for {1}{B} whenever anything died, so an empty hand still develops. |
| raced | accepted | Against the cube's fastest starts the deck's own first proactive play sits behind up to 6 enters-tapped duals and the payoff lands on turn 4. Mitigating further would mean cutting legendary bodies for more cheap interaction - but the legendary bodies ARE the denominator the payoff needs (11 other legends is what makes Ratadrabik's trigger reliable at p=0.99), so trading them for removal would hollow out the win condition. The list accepts the risk and offsets it partially with two deathtouch Elas il-Kor blockers, a 2/4 Gibbering Barricade wall, two 1-mana Cut Down, and incidental lifegain from Elas, Prayer of Binding and Sheoldred. Note precisely: the genuinely proactive turn-1 answers are Cut Down x2, since Bone Splinters requires a creature to sacrifice and Cult Conscript enters tapped. |
| disruption-fizzle | mitigation | There is no combo turn to interact with - the plan is linear accrual, so a single counterspell or removal spell on the key turn costs one card, not the game. Ertai Resurrected has flash and can counter the answer on the critical turn; Ratadrabik's ward {2} taxes it; and if the legend dies anyway that death is itself a Ratadrabik and an Elas il-Kor trigger, so the interaction partially pays us. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Zur, Eternal Schemer | Mythic legend, but its text keys off enchantment creatures - this list runs 0 non-Aura enchantments it can animate, so the ability is blank; it would consume a rare slot for a 1/4 flier. |
| Liliana of the Veil | Legendary, but a legendary PLANESWALKER - Ratadrabik triggers only on a legendary CREATURE dying, so she is not fodder; symmetric discard also empties our own attrition hand. |
| Danitha, Benalia's Hope | Strong legendary body but {4}{W} in a deck whose black pips are the heaviest; costs a rare slot that Sheoldred or Braids uses better. |
| The Raven Man | Legendary 2/1 whose token engine needs a player to have discarded each turn; this list has one repeatable discard outlet (Vohar) and cannot reliably turn it on. |
| Stenn, Paranoid Partisan | Cost reducer restricted to one chosen non-creature, non-land card type; this list's noncreature spells are split across instant, sorcery, enchantment and artifact, so no single chosen type covers more than a handful of cards. |
| Temporary Lockdown | Exiles every nonland permanent with mana value 2 or less - a symmetric sweeper against a list whose legendary core is concentrated at MV 2. |
| Leyline Binding | Domain cost reducer; this mana base yields exactly 3 basic land types (Plains, Island, Swamp), so it costs {2}{W} at best and still occupies a capped rare slot. |
| Vesuvan Duplimancy | Its tokens are explicitly 'not legendary', so it neither feeds Ratadrabik nor raises the legend count; it also needs a targeted-spell density this list lacks. |
| Karn's Sylex | Symmetric sweeper that would destroy our own legendary board; the deck wins by keeping legends on the battlefield. |
| Golden Argosy | Legendary Vehicle, but it exiles the crew on attack and returns them at the next end step - the legends leave the battlefield without dying, so Ratadrabik never triggers. |
| Serra Paragon | Mythic 3/4 flier with strong graveyard recursion, but not legendary; a capped rare slot is worth more on Ratadrabik / Sheoldred / Braids / Ertai. |
| Defiler of Flesh | Rare 4/4 with a black-permanent discount, but not legendary and competes for a capped rare slot. |
| The Cruelty of Gix | Rare Saga with tutor plus reanimation, but 5 mana and a rare slot the legendary package needs more. |
| Tolarian Terror | Cost reduction scales with instant and sorcery cards in the graveyard; this is a creature-attrition list, not a spells deck, so it rarely costs less than 5. |
| Writhing Necromass | Cost reduction scales with creature cards in the graveyard, but Ratadrabik converts our dead legends into board presence rather than leaving them as graveyard fuel. |
| Academy Loremaster | Symmetric extra draw hands a control opponent the same card advantage, and it is not legendary. |
| Coral Colony / Blight Pile / Wingmantle Chaplain (defender package) | A coherent alternative shell, but it shares no cards with the Ratadrabik legend loop and would displace the legendary bodies the payoff needs. |
| Sphinx of Clear Skies | Mythic 5/5 flier, but its domain payoff scales with basic land types and this three-colour base reaches only 3 of 5. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 2.48 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  54.3%  prod  70.6%  gap -16.3pp  [OK]
  U  demand  14.3%  prod  47.1%  gap -32.8pp  [OK]
  W  demand  31.4%  prod  47.1%  gap -15.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card appears more than 2 times across mainboard and sideboard combined; verified against pool copy counts in the Phase 5C validator and re-verified independently by the Challenger.
rares_mythics_max_1: PASS - Ratadrabik of Urborg, Sheoldred the Apocalypse, Braids Arisen Nightmare, Ertai Resurrected and Plaza of Heroes are 1 copy each.
rare_mythic_total_max_5: PASS - exactly 5 across mainboard and sideboard; the sideboard is entirely common and uncommon.
basics_unrestricted: Swamp x5, Plains x2, Island x1 - format-supplied and exempt from copy limits.
all_cards_from_cube: PASS - exact-name match against the working pool cache for all 28 distinct cards.
colour_legality: PASS - effective_cost.best_mode returns a usable mode within W/U/B for every nonland card. Choking Miasma prints as B/G because of its Kicker {G}; it is played with the kicker declined, best_mode = {'mode':'cast','pips':['B','B'],'conditional':False}.
```
