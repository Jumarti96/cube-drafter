---
deck_name: "wbr-meld-midrange"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WRB"
format: "40-card"
built_at: "2026-08-31T17:16:05Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x2   Mountain
  x2   Plains
  x3   Swamp
  x2   Evolving Wilds                               fetches a basic
  x2   Geothermal Bog                               Swamp Mountain, taps for BR, enters tapped
  x1   Hanweir Battlements                          taps for R
  x2   Sacred Peaks                                 Mountain Plains, taps for RW, enters tapped
  x2   Sunlit Marsh                                 Plains Swamp, taps for BW, enters tapped
```

### CREATURES (10)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Thraben Inspector                            x2    W     Engine/Infrastructure          C
  2  Graf Rats                                    x2    B     Threat/Payoff                  U
  2  Olivia's Dragoon                             x1    B     Engine/Infrastructure          C
  3  Hanweir Garrison                             x1    R     Engine/Infrastructure          R
  4  Gisela, the Broken Blade                     x1    W     Threat/Payoff                  M
  5  Midnight Scavengers                          x2    B     Engine/Infrastructure          C
  7  Bruna, the Fading Light                      x1    W     Threat/Payoff                  R
```

### INSTANTS & SORCERIES (14)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Crawl from the Cellar                        x2    B     Engine/Infrastructure          C
  1  Faithless Looting                            x2    R     Engine/Infrastructure          C
  1  Lightning Axe                                x1    R     Interaction                    U
  2  Collective Brutality                         x1    B     Interaction                    R
  2  Gather the Townsfolk                         x2    W     Threat/Payoff                  C
  2  Infernal Grasp                               x2    B     Interaction                    U
  3  Fiery Temper                                 x1    R     Interaction                    U
  3  Lingering Souls                              x2    W     Threat/Payoff                  U
  5  Edgar's Awakening                            x1    B     Engine/Infrastructure          U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Killing Wave                                 x1    B     Flex: vs go-wide boards and hexproof/indestruc U
Abrade                                       x2    R     Hate: vs artifact decks and equipment; also a  U
Cathar Commando                              x2    W     Hate: vs artifacts/enchantments (24 artifacts, C
Valorous Stance                              x2    W     Flex: vs removal-heavy decks (indestructible p U
Sever the Bloodline                          x1    B     Hate: vs token swarms and recursive threats -  U
Soul-Guide Gryff                             x2    W     Hate: vs graveyard decks (75 graveyard cards,  C
```

## ANALYSIS

### DECK IDENTITY

A Mardu tokens-midrange deck that happens to run all three of the cube's meld pairs. Its floor is the deck: Hanweir Garrison makes two attacking tokens every combat, Gather the Townsfolk and Lingering Souls add up to twelve bodies across four cards, and seven interaction slots hold the board. The melds are high-value upside layered on top, not the plan: measured against this 40-card list at 15 cards seen, the Graf Rats / Midnight Scavengers pair assembles 36.9% of the time (2 copies each), while the two singleton pairs - Gisela/Bruna and Hanweir Garrison/Battlements - assemble 13.5% each, and at least one pair assembles 54.3% of the time. Brisela, the only meld result that is a win condition on its own rather than a large body, is a 13.5% card. The graveyard layer exists to move those numbers after the fact rather than before it: Crawl from the Cellar and Edgar's Awakening return any creature card at any mana value, Midnight Scavengers returns the MV 3-or-less halves, and Bruna returns an Angel or Human directly to the battlefield - so a half that is answered comes back, though none of them find a half that was never drawn.

### THE NUMBER THIS DECK IS ACTUALLY BUILT ON

The archetype brief called for all three meld pairs. Running all three is possible, but the honest arithmetic
is the most important thing in this build, so it leads rather than hides in a footnote. Hypergeometric,
N=40, 15 cards seen (opening seven plus eight draws at the thesis turn):

| Pair | Copies | P(both halves by turn 8) |
|---|---|---|
| Gisela, the Broken Blade + Bruna, the Fading Light -> Brisela | 1 + 1 | 13.5% |
| Hanweir Garrison + Hanweir Battlements -> Hanweir, the Writhing Township | 1 + 1 | 13.5% |
| Graf Rats + Midnight Scavengers -> Chittering Host | 2 + 2 | 36.9% |
| **At least one pair** | | **54.3%** |

Three of the five meld halves are rares or mythics, so the pool rules cap them at one copy each and no
singleton pair can ever be made reliable. Only the Graf Rats pair is a common plus an uncommon, which is
why it assembles nearly three times as often as either of the others. Brisela - the one meld result that
is a win condition rather than a large body, because "Your opponents can't cast spells with mana value 3
or less" is a lock and not a stat line - is a 13.5% card.

That is why this list is a tokens-midrange deck first. Hanweir Garrison, Gather the Townsfolk x2 and
Lingering Souls x2 are the engine the Phase 6b assembly gate actually certifies (p=0.87), and they win
games with no meld at all. The melds are layered on top.

### WHAT MIDNIGHT SCAVENGERS CAN AND CANNOT DO

This was the single biggest correction in the build. Midnight Scavengers reads "return target creature card
with mana value 3 or less from your graveyard to your hand." Gisela is MV 4 and Bruna is MV 7. It cannot
touch either of them. What it can return is Graf Rats (MV 2) - its own meld partner - and Hanweir Garrison
(MV 3), which are 3 of the 10 creature cards. It is the Hanweir and Chittering Host recursion, not the
Brisela recursion.

The Brisela recursion is Crawl from the Cellar x2 and Edgar's Awakening, both of which return a creature
card with no mana-value restriction and no type restriction, and Bruna herself, whose cast trigger returns
an Angel or Human directly to the battlefield. Bruna is legal on 6 of the 10 other creature cards: Gisela
(Angel), Thraben Inspector x2, Hanweir Garrison and Midnight Scavengers x2 (all Humans). She cannot return
Graf Rats (Rat) or Olivia's Dragoon (Vampire Berserker).

None of this finds a half that was never drawn. Recursion repairs answered halves; it does not improve the
table above.

### THE BRISELA LINE, TURN BY TURN

Bruna's trigger is "when you cast this spell", so it resolves even if Bruna herself is countered or killed
in response. With Gisela already in the graveyard, casting Bruna on turn 7 returns Gisela to the battlefield,
you then control both, and they meld at the beginning of your end step that same turn. Brisela's static
ability is live immediately on turn 7 - the opponent's whole turn is played under "can't cast spells with
mana value 3 or less" - but Brisela is summoning-sick and does not attack until turn 8. That is why
thesis_turn is 8, not 7; the original 7 was optimistic and was corrected.

Edgar's Awakening is the cheaper entry to the same line: "Return target creature card from your graveyard to
the battlefield" puts Bruna onto the board for 5 rather than casting her for 7, at the cost of her return
trigger (reanimating is not casting). It also has a second mode that costs {B} - "When you discard this
card, you may pay {B}. When you do, return target creature card from your graveyard to your hand" - which
makes it a Crawl from the Cellar whenever it is one of the cards Faithless Looting bins.

### THE HANWEIR MELD IS A SIX-LAND PLAY

Tapping Hanweir Battlements is part of the cost of its own meld activation, and Battlements produces only
{C}. The {3}{R}{R} must therefore come from five other lands - six lands in total. This is why red sources
(6 direct of 16, 8 counting Evolving Wilds) are deliberately held above red's 21.4% pip share: the pip math
says the deck barely needs red, and the activation says otherwise.

### WHAT THE 5-RARE CAP COSTS THIS DECK

Four of the five slots are meld halves, which leaves exactly one. It went to Collective Brutality. Two cards
in the pool would plausibly be the best card in this deck and cannot be played:

- **Odric, Lunarch Marshal** - "At the beginning of each combat, creatures you control gain first strike... if
  a creature you control has first strike. The same is true for flying, deathtouch, double strike, haste,
  hexproof, indestructible, lifelink, menace, reach, skulk, trample, and vigilance." With Gisela on board
  (flying, first strike, lifelink) the entire token board - up to 12 bodies across four cards - gains all
  three every combat.
- **Liesa, Forgotten Archangel** - "Whenever another nontoken creature you control dies, return that card to
  its owner's hand at the beginning of the next end step." Repeatable, unrestricted recursion covering all
  five meld halves, which is exactly the effect this deck spends three cards approximating.

Neither is absent because of a build judgement. Both are absent because the cap is spent on cards the
archetype requires.

### PLAY NOTES

- Discarding Gisela or Bruna to Faithless Looting is not a loss, it is a tutor: Crawl from the Cellar
  reaches both, and Bruna in the graveyard is a target for Edgar's Awakening.
- Do not hold Graf Rats and Midnight Scavengers apart hoping to keep two bodies. The meld trigger is
  "exile them, then meld them" - mandatory, at the beginning of your combat. Plan the turn around
  Chittering Host's "other creatures you control get +1/+0 and gain menace until end of turn", which is
  the alpha-strike button on a wide board.
- Gather the Townsfolk's tokens are Human *tokens*, not Human *cards*. Bruna cannot return them, and this
  deck runs no Humans-matter payoff, so the creature type on those tokens is worth nothing here. They are
  in the deck as two bodies for two mana and as targets for Chittering Host's pump.
- Crawl from the Cellar's second clause ("Put a +1/+1 counter on up to one target Zombie you control") is
  dead - this deck runs zero Zombies. "Up to one" is what keeps the card castable anyway.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (24 nonland):  1:7  2:8  3:4  4:1  5:3  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  token_engine: 5 copies → p=0.87 (need ≥ 0.75)
  PASS  graveyard_recursion: 6 copies (effective 4.7: Bruna, the Fading Light@0.5, Midnight Scavengers@0.6, Midnight Scavengers@0.6) → p=0.85 (need ≥ 0.75)
  PASS  graveyard_fill: 5 copies (effective 4.3: Lightning Axe@0.7, Collective Brutality@0.6) → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 69%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The plan is to be the wider board and attack through: Hanweir Garrison creates two attacking tokens every attack, Gather the Townsfolk and Lingering Souls add eight bodies across four cards, and Chittering Host's ETB grants the whole team +1/+0 and menace for an alpha strike. Killing Wave and Sever the Bloodline sit in the sideboard for the matchups where that race is unfavourable.
  OK        single_large_threat: Infernal Grasp, Lightning Axe, Collective Brutality
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment removal. Artifact density is 24 cards (8.7%) and enchantment density 25 cards (9.0%), and most are equipment and auras that a wide board races rather than answers. Angelic Purge was weighed as a maindeck de-concession (it is also unconditional exile removal, so never dead, and its sacrifice cost is fed by up to 12 token bodies) and rejected only because it is sorcery-speed where Infernal Grasp is not. Cathar Commando x2 and Abrade x2 are the sideboard response.
  CONCEDED  stack: CORRECTED at Phase 9. An earlier version marked this class answered and named Collective Brutality. That was oracle-false, and the same error was made in the white-black build of this archetype. Collective Brutality's three modes are 'Target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card', 'Target creature gets -2/-2 until end of turn', and 'Target opponent loses 2 life and you gain 2 life'. The first is proactive, sorcery-speed hand attack - it strips a card BEFORE it is cast and cannot respond to a spell already on the stack. 0 of the 24 nonland cards in this deck can interact with the stack, and this pool contains no counterspell in white, red or black, so there is no remedy. The cost is accepted: a resolved threat must be answered afterwards on the battlefield by Infernal Grasp, Fiery Temper, Lightning Axe or a sideboard card, or not at all.
  CONCEDED  graveyard: No mainboard graveyard hate. This deck's own plan runs through the graveyard (Crawl from the Cellar, Lingering Souls flashback, Faithless Looting flashback, Bruna's return trigger), so a maindeck hate piece would be drawn in games where it is worse than a threat. Soul-Guide Gryff x2 is the sideboard answer to the cube's 75 graveyard cards.
```

- goldfish WARN (keepable 80.0% against an 80% threshold, a rounding-boundary miss): accepted. 3-lands-by-turn-3 is 84% and playable-spell-by-turn-2 is 94%. The residual comes from six tapped lands, which are the price of three-colour fixing without rare budget - every 'slow land' in this cube is a rare, and all five rare slots are committed to meld halves plus one interaction card.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Excess lands convert into action three ways: Hanweir Battlements' '{R}, {T}: Target creature gains haste' and its {3}{R}{R} meld activation are both mana sinks; Crawl from the Cellar and Lingering Souls both have flashback ({3}{B} and {1}{B}), so a flooded hand still spends mana on cards already in the graveyard; and Evolving Wilds x2 thin the deck. |
| `screw` | mitigation | Seven of the 24 nonland cards cost one mana (Thraben Inspector x2, Crawl from the Cellar x2, Faithless Looting x2, Lightning Axe) and eight cost two, so two-land hands are keepable and act. Faithless Looting x2 digs two cards deep for the third land, and Evolving Wilds x2 plus 7 basics keep colours reachable off few lands. |
| `decapitation` | mitigation | No single card is the deck, and the redundancy is now unrestricted: Crawl from the Cellar x2 returns any creature card at any mana value ('Return target creature card from your graveyard to your hand', plus Flashback {3}{B}), Edgar's Awakening returns one directly to the battlefield, Midnight Scavengers x2 returns the MV 3-or-less halves, and Bruna returns an Angel or Human to the battlefield. Stated honestly: none of these finds a half that was never drawn - they repair answered halves, not undrawn ones, which is why the figures in pair_assembly_counts are recorded rather than papered over. |
| `gas-out` | mitigation | Card flow is Thraben Inspector x2 (investigate - self-replacing), Faithless Looting x2 (draw two, flashback for a second use), Crawl from the Cellar x2 (flashback), Lingering Souls x2 (flashback), and Collective Brutality's escalate. Six of the 24 nonland cards can be cast a second time from the graveyard, so an empty hand still has plays. |
| `raced` | accepted | Against the cube's fastest starts this deck is behind on the first four turns and its answer is removal plus chump blockers, not a faster clock. Mitigating would mean cutting Bruna (MV 7) and Midnight Scavengers x2 (MV 5) for two-drops, which deletes the Brisela pair and the Chittering Host pair - two of the three meld pairs the deck exists to play. The cost of mitigation is the archetype itself. |
| `disruption-fizzle` | mitigation | The critical turn is casting Bruna at seven mana. If she is answered in response the deck does not fold: Crawl from the Cellar returns her from the graveyard to hand for {B} (or {3}{B} from the graveyard itself), and the Hanweir and Graf Rats melds are independent lines that do not use the same turn or the same mana. The Graf Rats meld in particular happens automatically at beginning of combat with no spell to interact with. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Asylum Visitor, Indulgent Aristocrat, Captivating Vampire, Falkenrath Torturer, Bloodline Keeper // Lord of Lineage, Falkenrath Gorger, Blood Petal Celebrant, Furyblade Vampire, Bloodmad Vampire, Stromkirk Occultist, Voldaren Ambusher, Voldaren Duelist, Stensia Masquerade, Bloodhall Priest, Olivia Voldaren, Markov Waltzer, Gluttonous Guest, Voldaren Bloodcaster // Bloodbat Summoner, Restless Bloodseeker // Bloodsoaked Reveler | Vampire-tribal payoffs and Vampire bodies: their text keys off Vampire count ('Other Vampire creatures you control get +1/+1', 'the number of Vampires you control'), and this list's creature base is Humans, Angels and tokens. A separate archetype, not this pipeline. |
| Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Smoldering Werewolf // Erupting Dreadwolf, Kruin Outlaw // Terror of Kruin Pass, Village Messenger // Moonrise Intruder, Conduit of Storms // Conduit of Emrakul, Desperate Farmer // Depraved Harvester, Town Gossipmonger // Incited Rabble | Werewolf/Wolf and transform-on-no-spells-cast cards: the flip condition ('if no spells were cast last turn') is anti-synergistic with a deck that casts removal every turn, and the Wolf lords count Wolves, of which this list has none. |
| Archghoul of Thraben, Gisa's Bidding, Ghoulish Procession, Invasion of Innistrad // Deluge of the Dead | Zombie-tribal and Zombie-token cards: they read 'Zombie' explicitly ('If it's a Zombie card', 'a 2/2 black Zombie creature token with decayed'), and the meld plan wants Humans for Bruna and untapped bodies for attacking, not decayed tokens that cannot block. |
| Niblis of the Urn, Twinblade Geist // Twinblade Invocation, Drogskol Shieldmate, Spectral Shepherd, Apothecary Geist, Mentor of the Meek, Voice of the Blessed | Spirit-tribal and small-creature-matters white cards: their text keys off Spirit count or 'power 2 or less' triggers rather than the Human/Angel axis Bruna reads, and Spectral Shepherd's ability costs {1}{U}, off-identity. |
| Decimator of the Provinces, It of the Horrid Swarm, Wretched Gryff, Distended Mindbender, Elder Deep-Fiend | Emerge Eldrazi: every emerge cost contains {G}, {U} or {B}{B} at 5+ generic ('Emerge {6}{G}{G}{G}', 'Emerge {5}{U}', 'Emerge {5}{B}{B}'), and their printed costs are {7}-{10}. Uncastable or unpayable in a WRB 40-card curve. |
| Emrakul, the Promised End, Griselbrand, Through the Breach, Tree of Perdition, Bedlam Reveler | CORRECTED at Phase 9 approval round: the original reason said Bedlam Reveler's cost reduction was weak because 'this list runs few' instants and sorceries. That count is false - the finished mainboard runs 14 instants and sorceries of 24 nonland cards (58%), so the reduction is real. Reveler is cut on two other mechanisms instead: it is rare and the 5-rare cap is fully spent on Gisela, Bruna, Hanweir Garrison, Hanweir Battlements and Collective Brutality; and 'When this creature enters, discard your hand, then draw three cards' is a hand reset this deck does not want, because its hand is where Gisela and Bruna wait to be cast on curve. The other cuts in this group stand on cost: Emrakul at {13} minus card types, Griselbrand at {4}{B}{B}{B}{B}, and Through the Breach, which cheats one creature in and then sacrifices it at the beginning of the next end step - that destroys a meld half rather than assembling it. |
| Festival Crasher, Thermo-Alchemist, Seize the Storm, Burning Vengeance, Ancestral Anger, Neonate's Rush, Borrowed Hostility, Uncaged Fury, Blood Mist, Angelfire Ignition | CORRECTED at Phase 9: the original reason claimed this list lacks instant-and-sorcery density. It does not - the finished mainboard runs 14 instants and sorceries of 24 nonland cards (58%). The real mechanism for each cut: Festival Crasher and Thermo-Alchemist buy +2/+0 or 1 damage per turn on a 2-mana body, a rate too slow against a thesis turn of 8; Seize the Storm at {4}{R} produces one token with no immediate board impact; Ancestral Anger, Neonate's Rush, Borrowed Hostility, Uncaged Fury, Blood Mist and Angelfire Ignition are single-target pumps, the wrong shape for a board that wins by going wide. Burning Vengeance is the one card whose count does support it - 6 of 24 nonland cards are graveyard-castable (Crawl x2, Faithless Looting x2, Lingering Souls x2), so it is 12 damage bolted onto casts this deck makes anyway - and it is cut only because it costs {2}{R} and does nothing on the turn it lands in a list already at 16 lands with a MV 7 top end. |
| Stitcher's Graft, Neglected Heirloom // Ashmouth Blade, Demonmail Hauberk, Lunarch Mantle, Gryff's Boon, Cathar's Call, Faith Unbroken, Bound by Moonsilver, Strength of Arms, Cobbled Wings | Voltron equipment and auras: they invest multiple cards into one creature, which is the losing side of the removal trade in a deck whose plan is a wide board plus two legendary meld halves that already draw removal. |
| Heartless Summoning, Helvault, Tamiyo's Journal, Conjurer's Closet, Soul Separator, Epitaph Golem, Boarded Window, Galvanic Juggernaut, Lupine Prototype, Honeymoon Hearse, Geistcatcher's Rig, Chalice of Life // Chalice of Death, Cryptolith Fragment // Aurora of Emrakul | Anti-synergistic or too slow, each with its mechanism: Heartless Summoning's 'Creatures you control get -1/-1' kills every 1/1 token this deck makes (up to 12 bodies across four cards); Conjurer's Closet, Tamiyo's Journal, Soul Separator and Epitaph Golem cost 3-6 mana and produce no board on the turn they resolve; Boarded Window, Galvanic Juggernaut, Lupine Prototype and Honeymoon Hearse have conditional attack or block clauses this deck cannot satisfy on demand; Chalice of Life and Cryptolith Fragment need a life-total threshold the deck does not pursue. Geistcatcher's Rig was cut here, briefly re-added to the sideboard at Phase 7, and removed again at Phase 9 because {6} for '4 damage to target creature with flying' is worse than Infernal Grasp, Lightning Axe or Fiery Temper at answering the same fliers. |
| Avacynian Priest, Slayer of the Wicked, Deadly Allure, Morkrut Banshee, Demonic Taskmaster, Ecstatic Awakener // Awoken Demon, Fleshtaker, Hopeful Initiate, Vexing Devil, Soul-Guide Gryff, Subjugator Angel, Chandra, Dressed to Kill, Alchemist's Greeting | Each cut on its own mechanism rather than one blanket comparison: Avacynian Priest taps only non-Humans and 5 of this deck's 10 creature cards are Humans; Slayer of the Wicked's ETB reads Vampire/Werewolf/Zombie, a subset the cube's decks may not present; Demonic Taskmaster's 'At the beginning of your upkeep, sacrifice a creature other than this creature' would eat a meld half; Vexing Devil hands the opponent the choice; Fleshtaker, Ecstatic Awakener and Morkrut Banshee need a death this turn that this deck cannot always supply on schedule; Hopeful Initiate, Deadly Allure (flashback {G}, off-identity), Subjugator Angel ({4}{W}{W}), Alchemist's Greeting ({4}{R}) and Chandra, Dressed to Kill ({1}{R}{R}, rare) each cost more than an included slot-mate that does the same job. Soul-Guide Gryff was cut here in error - it is the ONLY graveyard-exile effect in W/R/B in this pool - and is correctly played as 2 sideboard slots against the cube's 75 graveyard cards. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.54   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.61 adj [MV 2.54 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  42.9%  prod  43.8%  gap  -0.9pp  [OK]
  R  demand  21.4%  prod  37.5%  gap -16.1pp  [OK]
  W  demand  35.7%  prod  37.5%  gap  -1.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] copy_limits: PASS - every common and uncommon at <=2 copies, every rare and mythic at 1. Basic lands exempt (Plains 2, Swamp 3, Mountain 2).
[PASS] rare_mythic_cap: PASS - exactly 5 of 5 used, all mainboard: Gisela, the Broken Blade (mythic), Bruna, the Fading Light (rare), Hanweir Garrison (rare), Hanweir Battlements (rare land), Collective Brutality (rare). Sideboard contains zero rares or mythics.
[PASS] excluded_cards: PASS - the three meld results (Brisela, Voice of Nightmares; Hanweir, the Writhing Township; Chittering Host) are excluded from the deckable pool per the ruling that meld results are combined back faces and occupy no deck slot.
[PASS] colour_identity: PASS - every nonland card usable in W/R/B by effective_cost.best_mode. Lingering Souls prints identity [B,W] and is legal on both of its actual modes ({2}{W} cast, {1}{B} flashback).
```