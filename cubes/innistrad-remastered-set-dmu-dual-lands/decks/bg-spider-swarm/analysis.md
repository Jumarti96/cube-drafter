---
deck_name: "bg-spider-swarm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-27T14:38:33Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  10x Forest                             
  5x Swamp                              
  2x Haunted Mire                       BG dual, enters tapped
```

### CREATURES (11)
```
CMC  Card                                          Qty  Col   Role                          Rar
  2  Ambush Viper                                  x2   G     Removal / interaction         C
  2  Noose Constrictor                             x2   G     Enabler - discard outlet      U
  3  Eccentric Farmer                              x1   G     Enabler - mill 3              C
  3  Falkenrath Torturer                           x1   B     Engine - free sac outlet      C
  3  Splinterfright                                x2   G     Payoff - floating P/T         U
  4  Grizzly Ghoul                                 x2   BG    Payoff - banked counters      U
  5  The Gitrog Monster                            x1   BG    Payoff / draw engine          M
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                                          Qty  Col   Role                          Rar
  1  Eaten Alive                                   x1   B     Removal (sac outlet)          C
  1  Tragic Slip                                   x2   B     Removal / interaction         C
  1  Village Rites                                 x1   B     Sac outlet + draw             C
  2  Grapple with the Past                         x2   G     Mill 3 + rebuy                C
  2  Infernal Grasp                                x2   B     Removal / interaction         U
  5  Spider Spawning                               x2   G     Payoff - token swarm          U
```

### OTHER SPELLS (2)
```
CMC  Card                                          Qty  Col   Role                          Rar
  4  Garruk Relentless // Garruk, the Veil-Cursed  x1   BG    Payoff - lethality converter  M
  5  Wrenn and Seven                               x1   G     Engine - selective mill       M
```

## SIDEBOARD (10)
```
Card                                          Qty  Col   Rar  Role / When to board in
Maelstrom Pulse                               x1   BG    R    vs. any deck resolving a relevant artifact or enchantment (49 of 277 nonland cube cards); the only card in B/G that reads 'Destroy target nonland permanent'
Invasion of Innistrad // Deluge of the Dead   x1   B     R    vs. the cube's 75 graveyard-interaction cards; the back face's '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' is the only repeatable graveyard hate reachable in B/G
Sever the Bloodline                           x2   B     U    vs. recursive creatures (disturb, Gravecrawler, Haunted Dead) and same-name token swarms: 'Exile target creature and all other creatures with the same name as that creature'
Eaten Alive                                   x1   B     C    second copy alongside the maindeck one, vs. planeswalker-heavy or indestructible/recursive threats: 'Exile target creature or planeswalker'
Clear Shot                                    x2   G     U    vs. large single threats our 2-mana removal underserves: 'It deals damage equal to its power to target creature you don't control' off a yard-scaled Splinterfright
Village Rites                                 x1   B     C    second copy alongside the maindeck one, vs. removal-dense decks: sacrifice in response, 'Draw two cards', and the body becomes a creature card in the graveyard
Duel for Dominance                            x2   G     C    vs. a bigger creature deck: 'the chosen creatures fight' converts our graveyard-scaled body into removal at instant speed without paying life, and the death turns on Tragic Slip's morbid
```

## ANALYSIS

### DECK IDENTITY

A B/G graveyard-value midrange deck that treats creature cards in its own graveyard as a resource counter. Three cards read that counter directly: Splinterfright's power and toughness, Spider Spawning's token count, and Garruk, the Veil-Cursed's -3 (+X/+X and trample), which is the lethality converter. Wrenn and Seven and The Gitrog Monster are the engine that raises the counter fastest - Wrenn's +1 mills only nonlands while sending lands to hand, and Gitrog draws a card every time a land card reaches the graveyard. Falkenrath Torturer, Village Rites and Eaten Alive are free or cheap sacrifice outlets that convert bodies on the battlefield into creature cards in the graveyard on demand, which also turns on Tragic Slip's morbid and Grizzly Ghoul's counters. Seven interaction spells hold the ground while the counter climbs.

### THE COUNTER, AND WHAT ACTUALLY READS IT

Three cards in this deck read *creature cards in your graveyard*, and it is worth being exact about which:

| Card | Text that reads the counter | What it converts the counter into |
|---|---|---|
| Splinterfright | "power and toughness are each equal to the number of creature cards in your graveyard" | a trampling body |
| Spider Spawning | "Create a 1/2 green Spider creature token with reach for each creature card in your graveyard" | a wide board |
| Garruk, the Veil-Cursed | "-3: Creatures you control gain trample and get +X/+X until end of turn, where X is the number of creature cards in your graveyard" | lethal |

Grizzly Ghoul looks like a fourth and is not: its oracle reads "for each creature that **died this turn**" - a deaths-this-turn count, not a graveyard count. It is a 4/3 trample body with a morbid rider. That distinction survived a self-grill specifically because the first draft of this analysis got it wrong.

### THE KILL, ARITHMETICALLY

11 of the 23 nonland cards are creature cards. By turn 7 the mill package puts roughly 12 cards in the graveyard at that 27.5% density (~3.3 creature cards), Wrenn and Seven's +1 adds ~1.1 more per activation because it mills **only nonlands**, and the sacrifice outlets convert spare bodies directly. Call it 5 creature cards.

Spider Spawning then makes 5 Spiders. Garruk's -3 makes them 6/7 tramplers. That is 30 damage from one activation - lethal from 20 with room to spare, and it is the reason a 1/2 token deck can kill through blockers at all.

### WHY WRENN AND SEVEN IS THE BEST MILL IN THE DECK

Splinterfright's "mill two cards" is blind: 17 of 40 cards are lands, so ~43% of what it mills is a land that does nothing for the counter. Wrenn's +1 reveals four, puts **all lands in hand** and **every nonland in the graveyard**. That is selective mill - roughly 1.1 creature cards per activation against Splinterfright's 0.55 - and the lands it strips out become land drops via its 0 ability instead of dead graveyard cards. It is also a permanent, in a cube whose entire sweeper count is 4 cards.

### THE GITROG MONSTER TURNS A DRAWBACK INTO THE DRAW ENGINE

"At the beginning of your upkeep, sacrifice The Gitrog Monster unless you sacrifice a land" is a cost. "Whenever one or more land cards are put into your graveyard from anywhere, draw a card" is why the cost is free: the land you sacrifice **is** a land card put into your graveyard, so the upkeep clause draws a card every turn on its own. On top of that, at 17 of 40 lands a Grapple with the Past mill-three triggers it 82% of the time. Before it was added, this mainboard contained zero cards that draw.

### THE CUBE HAS ALMOST NO GRAVEYARD HATE

Worth knowing before sleeving this up: across all 300 cube cards, exactly **two** can touch a graveyard from outside it - Soul-Guide Gryff ("exile up to one target card from a graveyard", one card, once) and Deluge of the Dead ("{2}{B}: Exile target card from a graveyard", repeatable). That is 0.7% density. The resource this deck accumulates is effectively unattackable, which is the single biggest structural argument for the archetype in this environment.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:4  4:3  5:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.3: Grizzly Ghoul@0.85, Grizzly Ghoul@0.85, Garruk Relentless // Garruk, the Veil-Cursed@0.6) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10: Noose Constrictor@0.7, Noose Constrictor@0.7, Falkenrath Torturer@0.8, The Gitrog Monster@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 50%  T2 94%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Spider Spawning, Ambush Viper, Grizzly Ghoul, Noose Constrictor
  OK        single_large_threat: Infernal Grasp, Eaten Alive, Ambush Viper, Tragic Slip, Garruk Relentless // Garruk, the Veil-Cursed
  CONCEDED  noncreature_permanents: the only card in B or G whose text reads 'Destroy target nonland permanent' is Maelstrom Pulse, and it is in the sideboard because the 5-card rare/mythic budget is fully spent on Garruk, The Gitrog Monster, Wrenn and Seven, Maelstrom Pulse and Invasion of Innistrad; game one the deck races a noncreature permanent rather than answering it
  CONCEDED  stack: there is no card in B or G in this pool whose text reads 'Counter target spell'; the deck cannot interact on the stack at all and instead presents a token board that must be answered after it resolves
  CONCEDED  graveyard: Invasion of Innistrad // Deluge of the Dead is the only repeatable graveyard hate reachable in B/G and it is in the sideboard; the whole cube contains only two cards that touch a graveyard from outside it (Soul-Guide Gryff, 'exile up to one target card from a graveyard', and Deluge of the Dead's repeatable '{2}{B}: Exile target card from a graveyard'), so opposing graveyards are a low-pressure class game one
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Wrenn and Seven's '+1: Reveal the top four cards of your library. Put all land cards revealed this way into your hand and the rest into your graveyard' turns surplus lands into hand cards while milling ONLY the cards the payoff counts, and its '0: Put any number of land cards from your hand onto the battlefield tapped' deploys them. The Gitrog Monster's 'You may play an additional land on each of your turns' plus 'Whenever one or more land cards are put into your graveyard from anywhere, draw a card' converts flooded lands into cards. Eccentric Farmer and Grapple with the Past both return a land card from the graveyard, and Noose Constrictor x2 ('Discard a card') is a free unlimited outlet for any surplus card. Correction per Challenger finding 12: Moldgraf Millipede was cut in the repair, and it never grew anyway - its counters are set once on ETB. |
| screw | mitigation | 17 lands at the computed recommendation; goldfish keepable 85% and 3 lands by turn 3 at 88%. Wrenn and Seven's +1 finds every land in the top four and its 0 puts them onto the battlefield. Correction per Challenger finding 11: TWELVE of the 23 nonland cards cost 2 or less (4 at MV 1, 8 at MV 2), not nine. |
| decapitation | mitigation | Three separate cards read the graveyard creature-card count and none depends on the others: Splinterfright x2 (its own power and toughness), Spider Spawning x2 plus its Flashback {6}{B}, and Garruk's '-3: Creatures you control gain trample and get +X/+X ... where X is the number of creature cards in your graveyard'. Assembly p(payoff seen by turn 7) = 0.91 on reliability-weighted copies. Correction per Challenger finding 5: Grizzly Ghoul is NOT one of these - it reads 'for each creature that died this turn' - so the redundancy is three routes, not four. |
| gas-out | mitigation | The repaired mainboard has real card draw, which the pre-repair list did not (the Challenger correctly noted 0 draw spells): Village Rites ('sacrifice a creature. Draw two cards'), The Gitrog Monster ('Whenever one or more land cards are put into your graveyard from anywhere, draw a card' - 17 of 40 cards are lands, and its own upkeep land sacrifice guarantees one trigger per turn), and Wrenn and Seven's +1 which puts every revealed land in hand. Grapple with the Past x2 and Eccentric Farmer x1 are self-replacing. With zero cards in hand Splinterfright x2 still mills two per upkeep for free and Spider Spawning's Flashback {6}{B} is a spell cast from the graveyard. |
| raced | accepted | the fastest clocks in this cube's threat_profile are the 58 evasion cards (21% of the cube). Noose Constrictor x2 has reach on turn 2, Ambush Viper x2 trades up at flash speed, and seven interaction spells is the top of the midrange band - but the Spiders that actually block fliers do not exist until Spider Spawning resolves on turn 5-6. Mitigating further would mean cutting mill enablers for cheap fliers or lifegain, which lowers the graveyard creature-card count that all three payoffs read - it would cost the deck its kill rather than delay it. |
| disruption-fizzle | mitigation | Spider Spawning is a sorcery whose only input is the graveyard. Correction per Challenger finding 13: the cube contains TWO cards that touch a graveyard from outside it - Soul-Guide Gryff ('exile up to one target card from a graveyard', one card once) and Deluge of the Dead ('{2}{B}: Exile target card from a graveyard', repeatable) - i.e. 2 of 300 cards, so the zone is still near-unattackable. If the first Spawning is countered it goes to the graveyard and the Flashback {6}{B} is a second casting from there; Splinterfright and Garruk's -3 read the same count without Spawning being cast at all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' — its only ability removes cards FROM the graveyard, shrinking the exact number Spider Spawning counts. |
| Harvest Hand // Scrounged Scythe | 'When this creature dies, return it to the battlefield transformed' — it never stays in the graveyard, so it never adds to the creature-card count. |
| Bramble Wurm | seven mana for a 5/5, and '{2}{G}, Exile this card from your graveyard: You gain 5 life' exiles it out of the yard the payoff counts. |
| Soul Separator | {3} to cast plus '{5}, {T}, Sacrifice this artifact' — eight mana across two turns to reanimate one creature; the deck's own payoff costs five. |
| Travel Preparations | 'Flashback {1}{W}' is uncastable — W is outside core_colors + splash_colors, locked at Phase 3 — leaving a sorcery that only places two +1/+1 counters. |
| Hermit Druid (rare) - CUT, but on partly faulty reasoning | CORRECTION - this card was cut from three of the four decks in this run on reasoning that was partly WRONG, and the self-grill on the fourth caught it. Hermit Druid reads: 'Reveal cards from the top of your library until you reveal a basic land card. Put THAT CARD into your hand and ALL OTHER cards revealed this way into your graveyard.' The basic goes to HAND - so Hermit Druid never mills a basic land, and everything it does mill is drawn from the non-basic portion of the library. In this deck that pool is 25 cards of which 11 are creature cards = 44% creature-dense, against the deck's overall 28%. So while the volume is only about 1.6 cards per activation (the high basic count is real), the yield is about 0.69 CREATURE cards per activation, repeatable from turn 3 at no card cost. For comparison Splinterfright's 'mill two cards' yields 0.55. The original cut used a correct volume figure to reach an unsupported conclusion by applying the deck's overall creature density to a pool the card cannot touch. It is the strongest single swap-in for any of these decks and it costs one rare/mythic slot. |
| Laboratory Maniac + Hermit Druid (the prior analysis's stated win line) | Not viable here. Hermit Druid only empties the library if NO basic remains in it; with 15 basics that takes five-plus activations across five-plus turns before the Maniac line comes online, several turns after Spider Spawning has already won or lost the game. |
| Moldgraf Millipede (common, up to 2) | Cut in the Phase 9 repair. Its counters are set once on ETB - it does not grow - and three five-drops had to come out to hold the computed land target at 17. It is the first card to bring back if you want more creature-card density. |
| Traverse the Ulvenwald (rare) | Delirium is reachable (this list can put 5 card types in the graveyard) and it is a one-mana tutor, but the 5-rare budget bought Wrenn and Seven instead: ~1.1 creature cards into the graveyard every turn beats a one-shot search. |
| Vilespawn Spider (uncommon) and the whole U splash | The deterministic splash filter qualified blue, but FILL declined it. The only non-rare blue duals (Contaminated Aquifer, Tangled Islet) both read 'This land enters tapped', so serving the splash costs ~4 tapped land slots, and Vilespawn Spider demands blue a second time for its {2}{G}{U} activation. |
| Ghoultree (uncommon, up to 2) | At the real graveyard count it is a {2}{G}-{3}{G} 10/10, which is genuinely strong - but as a single MV-8 card it raises avg MV enough to push the computed land target from 17 to 18, costing a spell slot. It has no trample, so it is also chump-blockable. |
| Second Harvest (rare) | Doubles a Spider Spawning board, but the token count is zero until Spawning has already resolved, so it can never advance the kill turn. |
| Blood Artist, Morbid Opportunist, Ulvenwald Mysteries (uncommons) | All three are strong aristocrats-style value engines and all three were surfaced by the rejected 'grindy value' sketch. They stay out because the Threats/Payoffs band is full at 9 with cards that read the graveyard counter directly, and their attrition drain is a different win condition than the locked one. These are the natural includes if you want to rebuild this as a drain deck rather than a swarm deck. |
| Sideboard considerations not taken | Killing Wave ({X}{B}, symmetric sacrifice) is a one-sided sweeper here because our creatures want to die, but it also eats the Spider board. Morkrut Banshee ({3}{B}{B}, morbid -4/-4) is a fifth removal spell at five mana. Boarded Window and Geistcatcher's Rig were both considered against the cube's 58-card evasion class and rejected: -1/-0 to attackers, and six mana for 4 damage to a flier. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.78 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  39.3%  prod  41.2%  gap  -1.9pp  [OK]
  G  demand  60.7%  prod  70.6%  gap  -9.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2            PASS - highest count on any common/uncommon is 2 (Splinterfright, Eccentric Farmer, Grizzly Ghoul, Moldgraf Millipede, Noose Constrictor, Ambush Viper, Tragic Slip, Grapple with the Past, Infernal Grasp, Spider Spawning, Haunted Mire, Sever the Bloodline, Eaten Alive, Clear Shot, Village Rites)
rares_mythics_max_1_each           PASS - Garruk Relentless 1, The Gitrog Monster 1, Wrenn and Seven 1 (mainboard); Maelstrom Pulse 1, Invasion of Innistrad 1 (sideboard)
rares_mythics_max_5_total          PASS - exactly 5 across mainboard (3) and sideboard (2)
basics_unlimited                   Forest 10, Swamp 5 - exempt from copy limits as format-supplied
all_cards_from_cube                PASS - every non-basic name matched by exact string against the working pool cache
```